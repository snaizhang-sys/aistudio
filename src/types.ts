export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  bgImage: string;
  accentBadge?: string;
}

export interface OfferingItem {
  id: string;
  title: string;
  description: string;
  image: string;
  fullDetails?: {
    overview: string;
    highlights: string[];
    deliverables: string[];
    techStack: string[];
  };
}

export interface StoryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  fullStory?: {
    client: string;
    metric: string;
    impact: string;
    challenge: string;
    solution: string;
    quote: {
      text: string;
      author: string;
      role: string;
    };
  };
}

export type ModalType = 
  | { type: 'offering'; data: OfferingItem }
  | { type: 'story'; data: StoryItem }
  | { type: 'getStarted' }
  | { type: 'contact' }
  | { type: 'about' }
  | { type: 'services' }
  | { type: 'privacy' }
  | { type: 'terms' }
  | null;
