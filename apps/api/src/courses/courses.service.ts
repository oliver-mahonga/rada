import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async create(createCourseDto: CreateCourseDto) {
    return this.prisma.course.create({
      data: createCourseDto as any,
    });
  }

  async findAll() {
    return this.prisma.course.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const course = await this.prisma.course.findUnique({
      where: { id },
    });

    if (!course) throw new NotFoundException(`Course with ID ${id} not found`);

    const mentorTips = {
      ai: 'Think in terms of systems: prompt design, retrieval, and business utility.',
      crypto:
        'Focus on price structure and liquidity zones instead of reacting emotionally.',
      sales: 'Your biggest edge is certainty. Speak slower and lead the frame.',
      dev: 'Code to design systems that scale, fail gracefully, and are easy to maintain.',
    };

    return {
      ...course,
      mentorTip:
        mentorTips[course.category as keyof typeof mentorTips] ||
        'Stay focused on the core fundamentals.',
    };
  }
}
