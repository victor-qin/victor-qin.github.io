export interface ResearchDirection {
  id: string;
  title: string;
  /** DRAFT copy — written from the papers, meant to be rewritten in your voice. */
  summary: string;
}

export const directions: ResearchDirection[] = [
  {
    id: 'congestion-management',
    title: 'Congestion Management for Advanced Air Mobility',
    summary: `Centralized air traffic control does not scale to the volume and on-demand
      character of drone and eVTOL operations, but today's largely uncoordinated approach
      is unsafe at any meaningful density. I work on decentralized protocols that price
      and allocate scarce airspace, so that operators reach safe, efficient traffic
      patterns from local decisions rather than a central authority.`,
  },
  {
    id: 'market-structures',
    title: 'Market Structures and Competition Among Service Providers',
    summary: `Future airspace will be shared by competing service providers, and the market
      structure they operate under shapes the resulting traffic as much as any control
      algorithm does. I study how competition, entry, and pricing between providers affect
      system-level efficiency, and what market designs align private incentives with
      public outcomes.`,
  },
  {
    id: 'game-theoretic-multi-agent',
    title: 'Game-Theoretic Multi-Agent Decision Making',
    summary: `When many strategic agents plan simultaneously, the equilibrium matters more
      than any single agent's optimum — and the equilibrium can be fragile to modeling
      error. I work on trajectory optimization and conflict resolution that stay robust
      when other agents deviate from the model you assumed for them, in settings from
      air traffic to satellite collision avoidance.`,
  },
  {
    id: 'distributed-optimization',
    title: 'Distributed Optimization and Multi-Agent Search',
    summary: `Teams of agents with local sensing and limited communication have to cooperate
      toward objectives none of them can observe alone. I am interested in the optimization
      foundations underneath that — zeroth-order and gradient-based methods that converge
      with partial information and without a central coordinator.`,
  },
];
