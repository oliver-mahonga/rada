import { PrismaClient, CourseCategory } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('--- Starting Seed Process ---');

  // 1. CLEANUP (Wipe existing data)
  await prisma.course.deleteMany();
  await prisma.profile.deleteMany();
  console.log('1. Database Cleared.');

  // 2. THE 6 RESEARCH PERSONAS (Using Valid UUIDs)
  const personas = [
    {
      id: '550e8400-e29b-41d4-a716-446655440001',
      username: 'Cyber_Specialist',
      email: 'cyber@rada.ai',
      skills: ['Nmap', 'Linux', 'Wireshark'],
      xp: 4500,
      readiness: 88,
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440002',
      username: 'AI_Researcher',
      email: 'ai@rada.ai',
      skills: ['Python', 'LLM', 'Transformers'],
      xp: 3200,
      readiness: 65,
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440003',
      username: 'Fullstack_Architect',
      email: 'dev@rada.ai',
      skills: ['Next.js', 'NestJS', 'PostgreSQL'],
      xp: 5100,
      readiness: 92,
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440004',
      username: 'Crypto_Economist',
      email: 'crypto@rada.ai',
      skills: ['Bitcoin', 'Economics', 'Statistics'],
      xp: 2800,
      readiness: 70,
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440005',
      username: 'Sales_Closer',
      email: 'sales@rada.ai',
      skills: ['Persuasion', 'Closing', 'Psychology'],
      xp: 1500,
      readiness: 45,
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440006',
      username: 'Junior_Dev',
      email: 'junior@rada.ai',
      skills: ['HTML', 'CSS', 'JavaScript'],
      xp: 500,
      readiness: 20,
    },
  ];

  for (const p of personas) {
    await prisma.profile.create({
      data: { ...p, streak: 12, completion: 40 },
    });
  }
  console.log(`2. Successfully created ${personas.length} Personas.`);

  // 3. THE 12-COURSE FEATURE MATRIX
  const courses = [
    {
      title: 'LLM Transformer Logic',
      tools: ['LLM', 'Python'],
      category: 'ai' as CourseCategory,
      level: 'Expert',
      description: 'Deep dive into transformer internals.',
      lessons: 24,
      gradient: 'from-blue-600/20 to-indigo-600/20',
      border: 'border-blue-500/30',
    },
    {
      title: 'Network Penetration',
      tools: ['Nmap', 'Linux'],
      category: 'dev' as CourseCategory,
      level: 'Advanced',
      description: 'Master automated vulnerability scanning.',
      lessons: 18,
      gradient: 'from-emerald-600/20 to-teal-600/20',
      border: 'border-emerald-500/30',
    },
    {
      title: 'Vector Database Design',
      tools: ['LLM', 'PostgreSQL'],
      category: 'ai' as CourseCategory,
      level: 'Intermediate',
      description: 'Implementing RAG architectures.',
      lessons: 12,
      gradient: 'from-cyan-600/20 to-blue-600/20',
      border: 'border-cyan-500/30',
    },
    {
      title: 'UTXO Transaction Lab',
      tools: ['Bitcoin', 'Economics'],
      category: 'crypto' as CourseCategory,
      level: 'Professional',
      description: 'Anatomy of a Bitcoin transaction.',
      lessons: 15,
      gradient: 'from-orange-600/20 to-amber-600/20',
      border: 'border-orange-500/30',
    },
    {
      title: 'High-Ticket Closing',
      tools: ['Closing', 'Persuasion'],
      category: 'sales' as CourseCategory,
      level: 'Intermediate',
      description: 'Master high-value service sales.',
      lessons: 20,
      gradient: 'from-pink-600/20 to-rose-600/20',
      border: 'border-pink-500/30',
    },
    {
      title: 'Microservices Architecture',
      tools: ['NestJS', 'Docker'],
      category: 'dev' as CourseCategory,
      level: 'Advanced',
      description: 'Build resilient distributed systems.',
      lessons: 32,
      gradient: 'from-purple-600/20 to-violet-600/20',
      border: 'border-purple-500/30',
    },
    {
      title: 'Prompt Engineering v2',
      tools: ['LLM', 'Python'],
      category: 'ai' as CourseCategory,
      level: 'Beginner',
      description: 'Optimization for model inference.',
      lessons: 10,
      gradient: 'from-blue-600/10 to-blue-600/10',
      border: 'border-blue-500/20',
    },
    {
      title: 'Packet Sniffing Mastery',
      tools: ['Wireshark', 'Linux'],
      category: 'dev' as CourseCategory,
      level: 'Intermediate',
      description: 'Real-time traffic forensics.',
      lessons: 14,
      gradient: 'from-teal-600/10 to-teal-600/10',
      border: 'border-teal-500/20',
    },
    {
      title: 'Market Cycle Analysis',
      tools: ['Bitcoin', 'Statistics'],
      category: 'crypto' as CourseCategory,
      level: 'Expert',
      description: 'Quantitative analysis of cycles.',
      lessons: 22,
      gradient: 'from-orange-600/10 to-orange-600/10',
      border: 'border-orange-500/20',
    },
    {
      title: 'Objection Handling Bot',
      tools: ['Closing', 'Psychology'],
      category: 'sales' as CourseCategory,
      level: 'Advanced',
      description: 'Overcoming complex sales friction.',
      lessons: 16,
      gradient: 'from-rose-600/10 to-rose-600/10',
      border: 'border-rose-500/20',
    },
    {
      title: 'Scalable Next.js Patterns',
      tools: ['Next.js', 'TypeScript'],
      category: 'dev' as CourseCategory,
      level: 'Advanced',
      description: 'Advanced SSR implementation.',
      lessons: 28,
      gradient: 'from-emerald-600/10 to-emerald-600/10',
      border: 'border-emerald-500/20',
    },
    {
      title: 'Game Theory & Crypto',
      tools: ['Economics', 'Statistics'],
      category: 'crypto' as CourseCategory,
      level: 'Intermediate',
      description: 'Strategic decentralized behavior.',
      lessons: 19,
      gradient: 'from-amber-600/10 to-amber-600/10',
      border: 'border-amber-500/20',
    },
  ];

  for (const c of courses) {
    await prisma.course.create({
      data: {
        ...c,
        students: '1.5k',
        duration: '5 Weeks',
        status: 'Operational',
        rating: 4.8,
        xp: 1500,
        outcomes: ['Skill Mastery', 'Portfolio Project', 'Certification'],
      },
    });
  }

  console.log('3. Successfully created 12 Courses.');
  console.log('✅ SEED COMPLETE: Database is fully ready.');
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
