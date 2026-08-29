export interface Publication {
  id: string;
  title: string;
  /** Author list in order. Entries matching SELF are highlighted. */
  authors: string[];
  /** Short label for the left gutter, e.g. "ICRAT 2024". */
  venueShort: string;
  /** Full venue, shown under the authors. */
  venue: string;
  year: number;
  type: 'journal' | 'conference';
  /** true => this author list carries a (co-)first-author asterisk on Victor. */
  coFirst?: boolean;
  toAppear?: boolean;
  /** Award or presentation note. */
  note?: string;
  /** TODO: fill these in — publisher/DOI page and a direct PDF. */
  url?: string;
  pdf?: string;
  /** Research direction ids from research.ts */
  topics: string[];
}

export const SELF = 'V. Qin';

export const publications: Publication[] = [
  {
    id: 'qin-cdc-2026',
    title: 'Strategically Robust Game-Theoretic Multi-Agent Trajectory Optimization',
    authors: ['V. Qin', 'N. Lanzetti', 'S. Bolognani', 'H. Balakrishnan'],
    venueShort: 'CDC 2026',
    venue: '65th IEEE Conference on Decision and Control, Honolulu HI',
    year: 2026,
    type: 'conference',
    coFirst: true,
    toAppear: true,
    topics: ['game-theoretic-multi-agent'],
  },
  {
    id: 'qin-jat-2024',
    title: 'Market Structures for Service Providers in Advanced Air Mobility',
    authors: ['V. Qin', 'G. Ding', 'H. Balakrishnan'],
    venueShort: 'JAT 2024',
    venue: 'Journal of Air Transportation',
    year: 2024,
    type: 'journal',
    coFirst: true,
    topics: ['market-structures'],
  },
  {
    id: 'qin-icrat-2024',
    title: 'Modeling Competition Between Service Providers in Advanced Air Mobility',
    authors: ['V. Qin', 'H. Balakrishnan'],
    venueShort: 'ICRAT 2024',
    venue: '11th International Conference on Research in Air Transportation, Singapore',
    year: 2024,
    type: 'conference',
    coFirst: true,
    note: 'Best Paper in Economics, Environment and Information Track',
    topics: ['market-structures'],
  },
  {
    id: 'dolan-astro-2023',
    title: 'Satellite Collision Avoidance Using Repeated Games',
    authors: ['S. Dolan', 'V. Qin', 'G. Ding', 'H. Balakrishnan'],
    venueShort: 'AAS/AIAA 2023',
    venue: 'AAS/AIAA Astrodynamics Specialist Conference, Big Sky MT',
    year: 2023,
    type: 'conference',
    topics: ['game-theoretic-multi-agent'],
  },
  {
    id: 'qin-atm-2023',
    title: 'Market Structures for Service Providers in Advanced Air Mobility',
    authors: ['V. Qin', 'G. Ding', 'H. Balakrishnan'],
    venueShort: 'ATM 2023',
    venue: '15th USA/Europe Air Traffic Management Research and Development Seminar, Savannah GA',
    year: 2023,
    type: 'conference',
    coFirst: true,
    topics: ['market-structures'],
  },
  {
    id: 'chin-frontiers-2023',
    title: 'Decentralized and Cost-Aware Traffic Management Protocols for Advanced Air Mobility',
    authors: ['C. Chin', 'V. Qin', 'K. Gopalakrishnan', 'H. Balakrishnan'],
    venueShort: 'Frontiers 2023',
    venue: 'Frontiers in Aerospace Engineering, vol. 2, pp. 1176969',
    year: 2023,
    type: 'journal',
    coFirst: true,
    topics: ['congestion-management'],
  },
  {
    id: 'qin-icrat-2022',
    title: 'Cost-Aware Congestion Management Protocols for Advanced Air Mobility',
    authors: ['V. Qin', 'H. Balakrishnan'],
    venueShort: 'ICRAT 2022',
    venue: '10th International Conference on Research in Air Transportation, Tampa FL',
    year: 2022,
    type: 'conference',
    coFirst: true,
    topics: ['congestion-management'],
  },
  {
    id: 'zhang-iros-2021',
    title: 'Source Seeking by Dynamic Source Location Estimation',
    authors: ['T. Zhang', 'V. Qin', 'Y. Tang', 'N. Li'],
    venueShort: 'IROS 2021',
    venue: 'IEEE/RSJ International Conference on Intelligent Robots and Systems, pp. 2598-2605, Prague',
    year: 2021,
    type: 'conference',
    topics: ['distributed-optimization'],
  },
];

export const byYearDesc = (a: Publication, b: Publication) => b.year - a.year;

export const forTopic = (topicId: string) =>
  publications.filter((p) => p.topics.includes(topicId)).sort(byYearDesc);
