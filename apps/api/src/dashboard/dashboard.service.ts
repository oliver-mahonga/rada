import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  private generateAIStrategy(user: any, topCourse: any) {
    const { readiness, completion, streak } = user;

    if (readiness < 40) {
      return `[SYSTEM ALERT]: Critical Skill Gap detected. Priority shift to foundational labs. Deploy ${topCourse?.title || 'Core Units'} immediately to stabilize readiness.`;
    }

    if (completion < 30) {
      return `[EFFICIENCY LOG]: High churn risk. Focus on finishing active modules. The probability of income generation increases by 40% upon 50% completion.`;
    }

    if (streak < 5) {
      return `[MOMENTUM WARNING]: Neural link strength is fading. 24h window active. Complete a 15-minute lab to maintain your daily progression multiplier.`;
    }

    return `[OPTIMIZATION MODE]: All vectors nominal. Current strategy: Deepen expertise in ${topCourse?.title || 'current track'} to enter the top 5% of peer cluster.`;
  }

  async getMissionControl(userId: string) {
    const user = await this.prisma.profile.findUnique({
      where: { id: userId },
      include: {
        progress: { include: { course: true } },
        missions: true,
      },
    });

    if (!user) throw new NotFoundException('Neural Link: Profile Not Found');

    const allCourses = await this.prisma.course.findMany();
    const completedIds = user.progress.map((p) => p.courseId);

    const neighbors = await this.prisma.profile.findMany({
      where: { skills: { hasSome: user.skills }, id: { not: userId } },
      include: { progress: true },
    });

    const peerCourseMap = neighbors.flatMap((p) =>
      p.progress.map((pr) => pr.courseId),
    );

    const allRecommendations = allCourses
      .filter((c) => !completedIds.includes(c.id))
      .map((course) => {
        const userSet = new Set(user.skills.map((s) => s.toLowerCase()));
        const courseSet = new Set(course.tools.map((t) => t.toLowerCase()));
        const intersect = new Set([...userSet].filter((x) => courseSet.has(x)));
        const union = new Set([...userSet, ...courseSet]);

        const jaccardScore = union.size === 0 ? 0 : intersect.size / union.size;
        const peerInterestCount = peerCourseMap.filter(
          (id) => id === course.id,
        ).length;
        const collabScore =
          neighbors.length === 0 ? 0 : peerInterestCount / neighbors.length;

        const weight = neighbors.length === 0 ? 1.0 : 0.6;
        const hybridScore = jaccardScore * weight + collabScore * (1 - weight);

        return {
          ...course,
          recoScore: hybridScore,
          matchConfidence:
            jaccardScore > 0 ? Math.min(0.98, hybridScore + 0.3) : 0.15,
          diagnosticData: {
            jaccard: jaccardScore,
            peerInterest: peerInterestCount,
            intersectSkills: Array.from(intersect),
          },
        };
      });

    const recommendations = allRecommendations
      .sort((a, b) => b.recoScore - a.recoScore)
      .slice(0, 4);

    const aiMove = this.generateAIStrategy(user, recommendations[0]);

    return {
      id: user.id,
      username: user.username,
      skills: user.skills,
      xp: user.xp || 0,
      readiness: user.readiness || 0,
      streak: user.streak || 0,
      completion: user.completion || 0,
      aiStrategy: { move: aiMove },
      recommendedCourses: recommendations,
      missions: user.missions,
      neuralAnalysisLogs: allRecommendations.map((r) => ({
        courseId: r.id,
        courseTitle: r.title,
        jaccard: r.diagnosticData.jaccard,
        peerInterest: r.diagnosticData.peerInterest,
        hybrid: r.recoScore,
        matchSkills: r.diagnosticData.intersectSkills,
      })),
    };
  }
}
