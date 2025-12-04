export type CohortStatus = "upcoming" | "active" | "completed"

export interface Cohort {
  title: string
  description: string
  week: number
  students: number
  status: CohortStatus
}

export const cohorts: Cohort[] = [
  {
    title: "Smart Contract Fundamentals",
    description: "Learn Solidity basics and deploy your first contract on Base",
    week: 3,
    students: 45,
    status: "active"
  },
  {
    title: "DeFi Protocol Development",
    description: "Build a complete DeFi application with lending and staking",
    week: 6,
    students: 32,
    status: "active"
  },
  {
    title: "NFT Marketplace Builder",
    description: "Create and deploy a full-featured NFT marketplace",
    week: 8,
    students: 28,
    status: "upcoming"
  },
  {
    title: "Web3 Frontend Integration",
    description: "Connect React apps to smart contracts using wagmi and viem",
    week: 4,
    students: 51,
    status: "active"
  },
  {
    title: "Advanced Solidity Patterns",
    description: "Master gas optimization, upgradeable contracts, and security",
    week: 12,
    students: 19,
    status: "completed"
  },
  {
    title: "Base Chain Infrastructure",
    description: "Deep dive into Base L2 architecture and infrastructure",
    week: 2,
    students: 38,
    status: "upcoming"
  }
]
