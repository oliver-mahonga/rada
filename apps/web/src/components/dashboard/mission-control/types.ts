import { ReactNode } from "react";

export type Stat = {
  label: string;
  val: number;
  suffix: string;
  icon: ReactNode;
  color: string;
  bg: string;
  border: string;
};

export type QuickAction = {
  title: string;
  desc: string;
  icon: ReactNode;
  color: string;
};

export type Course = {
  title: string;
  category: string;
  level: string;
  progress: number;
  students: string;
  outcome: string;
  icon: ReactNode;
  accent: string;
};

export type MarketOpportunity = {
  title: string;
  demand: string;
  income: string;
  trend: string;
  fit: string;
  icon: ReactNode;
};

export type Mission = {
  title: string;
  xp: string;
  done: boolean;
  icon: ReactNode;
};

export type IncomeTrack = {
  title: string;
  score: number;
  subtitle: string;
  icon: ReactNode;
};

export type Leader = {
  name: string;
  xp: string;
  rank: number;
  delta: string;
  seed: string;
  isUser?: boolean;
};

export type ActivityItem = {
  title: string;
  time: string;
  icon: ReactNode;
};