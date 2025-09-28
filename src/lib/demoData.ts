export type DemoInsights = {
  totalReviews: number;
  sentiments: { positive: number; neutral: number; negative: number };
  pros: { term: string; count: number }[];
  cons: { term: string; count: number }[];
  highlights: { title: string; detail: string }[];
};

export const demoInsights: DemoInsights = {
  totalReviews: 1824,
  sentiments: { positive: 1149, neutral: 328, negative: 347 },
  pros: [
    { term: "battery life", count: 264 },
    { term: "sound quality", count: 221 },
    { term: "comfort", count: 187 },
    { term: "noise cancel", count: 172 },
    { term: "bluetooth", count: 138 },
    { term: "build quality", count: 126 },
    { term: "value", count: 119 },
    { term: "microphone", count: 102 },
  ],
  cons: [
    { term: "ear fatigue", count: 96 },
    { term: "connectivity", count: 91 },
    { term: "app issues", count: 74 },
    { term: "price", count: 66 },
    { term: "bulky case", count: 58 },
    { term: "wind noise", count: 44 },
    { term: "charging", count: 41 },
    { term: "latency", count: 37 },
  ],
  highlights: [
    {
      title: "Great for commuters",
      detail: "Users love the noise-cancellation and comfort for long trips.",
    },
    {
      title: "Solid battery life",
      detail: "Typical use gets 32–36 hours on a single charge.",
    },
    {
      title: "Watch for fit",
      detail: "A minority report ear fatigue after 2+ hours.",
    },
  ],
};
