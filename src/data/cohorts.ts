export type CohortStatus = "upcoming" | "active" | "completed";

export interface Cohort {
  title: string;
  description: string;
  week: number;
  students: number;
  status: CohortStatus;
}

export const cohorts: Cohort[] = [
  {
    title: "Base Mini App",
    description: "Build your first mini app on Base network.",
    week: 1,
    students: 24,
    status: "active",
  },
  {
    title: "OnchainKit Masters",
    description: "Master Web3 integration patterns.",
    week: 3,
    students: 18,
    status: "upcoming",
  },
  {
    title: "Advanced Farcaster",
    description: "Build social apps on Farcaster.",
    week: 2,
    students: 32,
    status: "active",
  },
];
