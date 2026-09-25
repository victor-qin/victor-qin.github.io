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
  /** Patents reuse the same fields: authors = inventors, venue = patent number/status. */
  type: 'journal' | 'conference' | 'patent';
  /** true => this author list carries a (co-)first-author asterisk on Victor. */
  coFirst?: boolean;
  toAppear?: boolean;
  /** Award or presentation note. */
  note?: string;
  /** Publisher/DOI page and a direct PDF. The title links to url, else pdf. */
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
    id: 'maheshwari-jats-2025',
    title: 'Privacy-Preserving Mechanisms for Coordinating Airspace Usage in Advanced Air Mobility',
    authors: ['C. Maheshwari', 'M. G. Mendoza', 'V. Tuck', 'P. Y. Su', 'V. Qin', 'S. Seshia', 'H. Balakrishnan', 'S. Sastry'],
    venueShort: 'JATS 2025',
    venue: 'ACM Journal on Autonomous Transportation Systems, vol. 2, no. 4, pp. 1-34',
    year: 2025,
    type: 'journal',
    topics: ['congestion-management'],
    url: 'https://doi.org/10.1145/3732290',
    pdf: 'https://dl.acm.org/doi/pdf/10.1145/3732290',
  },
  {
    id: 'qin-jat-2024',
    title: 'Market Structures for Service Providers in Advanced Air Mobility',
    authors: ['V. Qin', 'G. Ding', 'H. Balakrishnan'],
    venueShort: 'JAT 2024',
    venue: 'Journal of Air Transportation, vol. 32, no. 4, pp. 169-183',
    year: 2024,
    type: 'journal',
    coFirst: true,
    topics: ['market-structures'],
    url: 'https://doi.org/10.2514/1.D0415',
    pdf: 'https://www.mit.edu/~hamsa/pubs/Qin-etal-JAT2024-market-structures-for-service-providers-in-AAM.pdf',
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
    pdf: 'https://www.mit.edu/~hamsa/pubs/QinBalakrishnan_ICRAT2024-final.pdf',
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
    pdf: 'https://www.mit.edu/~hamsa/pubs/Dolan-etal-AAS2023.pdf',
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
    pdf: 'https://www.mit.edu/~hamsa/pubs/ATM2023_QinDingBalakrishnan-cr-red-size.pdf',
  },
  {
    id: 'chin-frontiers-2023',
    title: 'Traffic Management Protocols for Advanced Air Mobility',
    authors: ['C. Chin', 'V. Qin', 'K. Gopalakrishnan', 'H. Balakrishnan'],
    venueShort: 'Frontiers 2023',
    venue: 'Frontiers in Aerospace Engineering, vol. 2, pp. 1176969',
    year: 2023,
    type: 'journal',
    coFirst: true,
    topics: ['congestion-management'],
    url: 'https://doi.org/10.3389/fpace.2023.1176969',
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
    url: 'https://hdl.handle.net/1721.1/145406',
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
    url: 'https://doi.org/10.1109/IROS51168.2021.9636841',
  },
  {
    id: 'zeroavia-patent-2025',
    title: 'Interrogation of Temperature-Sensitive Coatings on the Outside of Fuel Tanks and Wireless Communication Through the Tank Walls with an Internally Mounted Temperature Sensor',
    authors: ['P. Bryant', 'A. Chatterjee', 'A. Dalal', 'V. Qin'],
    venueShort: 'DE Patent App.',
    venue: 'German Patent Application DE 10 2025 115 266 A1, ZeroAvia Inc., published Oct. 2025 (pending)',
    year: 2025,
    type: 'patent',
    url: 'https://patents.google.com/patent/DE102025115266A1/en',
    topics: [],
  },
];

export const byYearDesc = (a: Publication, b: Publication) => b.year - a.year;

export const forTopic = (topicId: string) =>
  publications.filter((p) => p.topics.includes(topicId)).sort(byYearDesc);
