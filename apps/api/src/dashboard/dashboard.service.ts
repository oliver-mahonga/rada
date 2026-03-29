// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma/prisma.service';

// @Injectable()
// export class DashboardService {
//   constructor(private prisma: PrismaService) {}

//   async getMissionControl(userId: string) {
//     const profile = await this.prisma.profile.findUnique({
//       where: { id: userId },
//       include: {
//         progress: {
//           include: { course: true },
//           take: 4,
//         },
//         missions: true,
//       },
//     });

//     if (!profile) return null;

//     // Recommendation logic
//     const hasAiCourse = profile.progress.some(
//       (p) => p.course.category === 'ai',
//     );
//     const strategy = hasAiCourse
//       ? 'Scaling Production: Focus on high-leverage DevSecOps.'
//       : 'Immediate Opportunity: Integrate AI Agents into your workflow.';

//     return {
//       stats: {
//         xp: profile.xp,
//         streak: profile.streak,
//         completion: profile.completion,
//         readiness: profile.readiness,
//       },
//       aiStrategy: {
//         move: strategy,
//         incomePath: 'Fullstack + AI Automation',
//       },
//       recommendedCourses: profile.progress.map((p) => ({
//         id: p.course.id,
//         title: p.course.title,

//         progress: p.progress,
//         category: p.course.category,
//         level: p.course.level,
//       })),
//       missions: profile.missions || [],
//     };
//   }
// }
