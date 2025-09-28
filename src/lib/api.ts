export interface AnalysisResult {
  total: number;
  pos_pct: number;
  neg_pct: number;
  neut_pct: number;
  pos_keys: string[];
  neg_keys: string[];
  using_sample: boolean;
  conclusion: string;
}

export async function analyzeReviews(url: string): Promise<AnalysisResult> {
  try {
    const response = await fetch(`/api/analyze?url=${encodeURIComponent(url)}`);
    if (!response.ok) {
      throw new Error('Failed to analyze reviews');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error analyzing reviews:', error);
    // Return demo data as fallback
    return {
      total: 1824,
      pos_pct: 63,
      neg_pct: 19,
      neut_pct: 18,
      pos_keys: ["battery life", "sound quality", "comfort", "noise cancel", "bluetooth", "build quality"],
      neg_keys: ["ear fatigue", "connectivity", "app issues", "price", "bulky case", "wind noise"],
      using_sample: true,
      conclusion: "✅ Overall Positive – Users love this product!"
    };
  }
}
