import { PrismaClient, CourseCategory } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.profile.upsert({
    where: { email: 'oliver@test.com' },
    update: {},
    create: {
      email: 'oliver@test.com',
      username: 'oliver_pro',
      xp: 12800,
      streak: 9,
      readiness: 87,
      completion: 74,
    },
  });

  const course1 = await prisma.course.create({
    data: {
      title: 'Neural AI Automation',
      category: CourseCategory.ai,
      level: 'Advanced',
      duration: '12h',
      lessons: 24,
      description: 'Master AI agents and autonomous workflows.',
      gradient: 'from-blue-500/20 via-cyan-500/10 to-indigo-500/10',
      border: 'border-blue-500/20',
      tools: ['Python', 'LangChain', 'OpenAI'],
      outcomes: ['Build AI Agents', 'Automate APIs'],
    },
  });

  // 3. Connect User to a Course (Progress)
  await prisma.userProgress.create({
    data: {
      userId: user.id,
      courseId: course1.id,
      progress: 45,
    },
  });

  console.log('Database Seeded Successfully!');
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
