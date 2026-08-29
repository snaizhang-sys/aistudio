import { HeroSlide, OfferingItem, StoryItem } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    title: 'Design with Absolute Control',
    subtitle: "Create robust, customizable layouts with the world's most popular front-end open-source toolkit. Fast, responsive, and styled to perfection.",
    ctaText: 'Get Started Now',
    bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=85',
    accentBadge: 'Enterprise Suite 2026'
  },
  {
    id: 'slide-2',
    title: 'Unmatched Architectural Speed',
    subtitle: 'Streamline mission-critical application pipelines with component-driven architecture and cloud-native resilience.',
    ctaText: 'Explore Platform',
    bgImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=85',
    accentBadge: 'Cloud Native Engine'
  },
  {
    id: 'slide-3',
    title: 'Unified Digital Ecosystems',
    subtitle: 'Harmonize front-end experiences and backend microservices with real-time analytics and predictive observability.',
    ctaText: 'Schedule Consultation',
    bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=85',
    accentBadge: 'Intelligent Observability'
  }
];

export const OFFERINGS: OfferingItem[] = [
  {
    id: 'custom-dev',
    title: 'Custom Development',
    description: 'Highly optimized and custom enterprise solutions tailored exactly to your organizational workflows.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    fullDetails: {
      overview: 'Our custom software engineering practice builds high-performance, maintainable web and mobile applications tailored to complex enterprise requirements.',
      highlights: [
        'Component-driven design systems with strict TypeScript validation',
        'Sub-second first contentful paint (FCP) and optimal Core Web Vitals',
        'End-to-end unit, integration, and visual regression test suites',
        'Micro-frontend and headless architecture migrations'
      ],
      deliverables: [
        'Production-grade source code repository with CI/CD automation',
        'Comprehensive technical documentation and API specifications',
        'Automated quality gate checks and security scanning'
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vite', 'GraphQL', 'Next.js']
    }
  },
  {
    id: 'cloud-infra',
    title: 'Cloud Infrastructure',
    description: 'Deploy safely onto lightning fast architectures designed with redundancy and automatic scaling.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    fullDetails: {
      overview: 'Design, provision, and maintain resilient multi-region cloud infrastructures that scale dynamically with your business demands while maximizing cost efficiency.',
      highlights: [
        'Automated Kubernetes and containerized workload orchestration',
        'Zero-downtime blue/green and canary release pipelines',
        'Multi-region high availability with automatic failover disaster recovery',
        'Continuous compliance auditing and zero-trust perimeter security'
      ],
      deliverables: [
        'Terraform / OpenTofu Infrastructure-as-Code definitions',
        'Real-time metrics dashboards & Prometheus/Grafana alerting',
        '24/7 infrastructure health telemetry & logging aggregation'
      ],
      techStack: ['Google Cloud', 'AWS', 'Kubernetes', 'Docker', 'Terraform', 'PostgreSQL', 'Redis']
    }
  },
  {
    id: 'strategic-analytics',
    title: 'Strategic Analytics',
    description: 'Extract valuable data insights and convert them into visually cohesive, actionable business roadmaps.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    fullDetails: {
      overview: 'Turn raw telemetry, customer interactions, and business metrics into intuitive real-time visual dashboards that empower executive decision making.',
      highlights: [
        'Executive KPI cockpit with interactive drill-down filters',
        'Predictive cohort analysis and customer lifetime value modeling',
        'Automated ETL pipelines connecting CRM, billing, and product usage',
        'Custom visualization widgets built with D3.js and WebGL'
      ],
      deliverables: [
        'Custom interactive analytics portals & data visualization layers',
        'Automated weekly intelligence digest reports',
        'Data governance & schema catalog documentation'
      ],
      techStack: ['D3.js', 'BigQuery', 'Apache Superset', 'Python', 'SQL', 'FastAPI', 'ClickHouse']
    }
  }
];

export const SUCCESS_STORIES: StoryItem[] = [
  {
    id: 'agile-workflows',
    title: 'Agile Workflows',
    description: 'Enabling absolute cross-functional velocity through modern team processes.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    fullStory: {
      client: 'Apex Fintech Solutions',
      metric: '3.8x faster deployment cycle',
      impact: 'Reduced sprint planning overhead by 45% and elevated sprint predictability to 96%.',
      challenge: 'A distributed engineering team of 120+ developers faced release bottlenecks, fragmented communication, and delayed quarterly targets.',
      solution: 'Implemented streamlined dual-track agile cadences, automated pull request environments, and synchronized Jira-GitHub workflows.',
      quote: {
        text: 'The transition fundamentally shifted our culture from reactive firefighting to high-cadence strategic innovation.',
        author: 'Marcus Vance',
        role: 'VP of Engineering, Apex'
      }
    }
  },
  {
    id: 'ux-overhaul',
    title: 'UX Overhaul',
    description: 'Re-architecting user touchpoints to maximize modern conversation rates.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    fullStory: {
      client: 'Nova Omnichannel Retail',
      metric: '+48% checkout conversion',
      impact: 'Decreased mobile bounce rate by 32% and increased average session duration by 2.4 minutes.',
      challenge: 'Legacy mobile checkout process had a 68% cart abandonment rate due to friction-heavy multi-step forms and slow render times.',
      solution: 'Engineered a lightning-fast single-page progressive checkout flow with biometrics integration, instant address autocomplete, and intuitive micro-interactions.',
      quote: {
        text: 'The newly refined interface created an immediate surge in organic conversion across all our primary global mobile channels.',
        author: 'Elena Rostova',
        role: 'Chief Product Officer, Nova'
      }
    }
  },
  {
    id: 'green-operations',
    title: 'Green Operations',
    description: 'Zero-carbon operational strategies implemented smoothly on heritage infrastructures.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    fullStory: {
      client: 'Vanguard Industrial Logistics',
      metric: '62% carbon footprint reduction',
      impact: 'Saved $1.4M annually in energy utility expenditures while attaining Tier-1 ESG certification.',
      challenge: 'Historic warehouse facilities were consuming excessive peak-hour grid electricity without automated load balancing or sensor feedback.',
      solution: 'Deployed IoT edge telemetry nodes combined with automated renewable power switching algorithms to optimize facility thermal and computational loads.',
      quote: {
        text: 'We proved that sustainability and operational profitability go hand in hand with the right modern digital infrastructure.',
        author: 'Dr. Arthur Sterling',
        role: 'Director of Sustainability, Vanguard'
      }
    }
  },
  {
    id: 'api-integrations',
    title: 'API Integrations',
    description: 'Universal real-time syncing pipelines built for fragmented microservice modules.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    fullStory: {
      client: 'Global Logistics Hub',
      metric: '99.999% message delivery SLA',
      impact: 'Processes 40M+ daily events with sub-25ms latency across 18 regional distribution hubs.',
      challenge: 'Siloed ERP, inventory, and maritime tracking systems suffered from inconsistent sync lags and missing webhook delivery guarantees.',
      solution: 'Constructed an event-driven streaming backbone utilizing Apache Kafka and distributed gRPC gateway connectors with idempotent retries.',
      quote: {
        text: 'Our global logistics pipeline now operates as a unified living organism without data inconsistencies or synchronization gaps.',
        author: 'Sarah Chen',
        role: 'Chief Architect, Global Logistics Hub'
      }
    }
  }
];
