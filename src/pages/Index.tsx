import { useMemo, useState, useEffect } from "react";
import SentimentDonut from "@/components/charts/SentimentDonut";
import KeywordBar from "@/components/charts/KeywordBar";
import { demoInsights } from "@/lib/demoData";
import { analyzeReviews } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Index() {
  const [productUrl, setProductUrl] = useState("");
  const [insights, setInsights] = useState(demoInsights);
  const [isLoading, setIsLoading] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  // Handle URL parameter from extension
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get('url');
    if (url) {
      setProductUrl(url);
      // Auto-analyze when coming from extension
      handleAnalyzeFromExtension(url);
    }
  }, []);

  const handleAnalyzeFromExtension = async (url: string) => {
    setIsLoading(true);
    setHasAnalyzed(true);
    try {
      const result = await analyzeReviews(url);
      
      // Convert API result to insights format
      const newInsights = {
        totalReviews: result.total,
        sentiments: {
          positive: Math.round((result.pos_pct / 100) * result.total),
          neutral: Math.round((result.neut_pct / 100) * result.total),
          negative: Math.round((result.neg_pct / 100) * result.total),
        },
        pros: result.pos_keys.map((term, index) => ({
          term,
          count: Math.max(50, 200 - index * 20), // Mock counts
        })),
        cons: result.neg_keys.map((term, index) => ({
          term,
          count: Math.max(20, 100 - index * 10), // Mock counts
        })),
        highlights: [
          {
            title: result.conclusion.includes("Positive") ? "Great product" : "Mixed reviews",
            detail: result.conclusion,
          },
        ],
      };
      
      setInsights(newInsights);
    } catch (error) {
      console.error("Analysis failed:", error);
      // Keep demo data on error
    } finally {
      setIsLoading(false);
    }
  };

  const totals = useMemo(() => insights.sentiments, [insights]);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productUrl) return;
    
    setIsLoading(true);
    setHasAnalyzed(true);
    try {
      const result = await analyzeReviews(productUrl);
      
      // Convert API result to insights format
      const newInsights = {
        totalReviews: result.total,
        sentiments: {
          positive: Math.round((result.pos_pct / 100) * result.total),
          neutral: Math.round((result.neut_pct / 100) * result.total),
          negative: Math.round((result.neg_pct / 100) * result.total),
        },
        pros: result.pos_keys.map((term, index) => ({
          term,
          count: Math.max(50, 200 - index * 20), // Mock counts
        })),
        cons: result.neg_keys.map((term, index) => ({
          term,
          count: Math.max(20, 100 - index * 10), // Mock counts
        })),
        highlights: [
          {
            title: result.conclusion.includes("Positive") ? "Great product" : "Mixed reviews",
            detail: result.conclusion,
          },
        ],
      };
      
      setInsights(newInsights);
    } catch (error) {
      console.error("Analysis failed:", error);
      // Keep demo data on error
    } finally {
      setIsLoading(false);
    }
  };

  const positivePct = Math.round(
    (totals.positive / (insights.totalReviews || 1)) * 100,
  );
  const neutralPct = Math.round(
    (totals.neutral / (insights.totalReviews || 1)) * 100,
  );
  const negativePct = Math.round(
    (totals.negative / (insights.totalReviews || 1)) * 100,
  );

  return (
    <main>
      {/* Hero */}
      <section className="relative border-b bg-gradient-to-b from-background via-background to-secondary">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,hsl(var(--accent)/0.18),transparent_60%),radial-gradient(40%_40%_at_80%_10%,hsl(var(--primary)/0.15),transparent_60%)]" />
        <div className="container py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-border">
              AI summary for product reviews
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Cut through review overload in seconds
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Review Radar scrapes product reviews, runs AI sentiment analysis,
              and surfaces the top pros and cons—so you instantly see what
              customers really think.
            </p>
            <form
              onSubmit={handleAnalyze}
              className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]"
            >
              <Input
                type="url"
                value={productUrl}
                onChange={(e) => setProductUrl(e.target.value)}
                placeholder="Paste a product URL from your favorite store"
                className="h-12 text-sm"
              />
              <Button 
                type="submit" 
                className="h-12 px-6"
                disabled={isLoading || !productUrl}
              >
                {isLoading ? "Analyzing..." : "Analyze"}
              </Button>
            </form>
            <p className="mt-2 text-xs text-muted-foreground">
              No account required in demo mode.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard - Only show after analysis */}
      {hasAnalyzed && (
        <section id="summary" className="container scroll-mt-20 py-10 md:py-12">
          <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <h2 className="text-xl font-semibold">Summary</h2>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="inline-flex h-2 w-2 rounded-full bg-[hsl(var(--accent))]" />{" "}
              Positive {positivePct}%
              <span className="inline-flex h-2 w-2 rounded-full bg-[hsl(var(--muted-foreground))] ml-3" />{" "}
              Neutral {neutralPct}%
              <span className="inline-flex h-2 w-2 rounded-full bg-[hsl(var(--destructive))] ml-3" />{" "}
              Negative {negativePct}%
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <SentimentDonut totals={totals} />
            </div>
            <div className="grid grid-cols-1 gap-6 lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Top insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    {insights.highlights.map((h) => (
                      <div key={h.title} className="rounded-lg border p-4">
                        <div className="text-sm font-semibold">{h.title}</div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          {h.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <KeywordBar
                  title="Most mentioned pros"
                  data={insights.pros}
                  color="hsl(var(--accent))"
                />
                <KeywordBar
                  title="Most mentioned cons"
                  data={insights.cons}
                  color="hsl(var(--destructive))"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA for extension */}
      <section className="container py-8">
        <div className="rounded-2xl border bg-gradient-to-br from-secondary to-background p-6 md:p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-lg font-semibold">
                Get the browser extension
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                See instant summaries directly on product pages. Works on
                popular stores.
              </p>
            </div>
            <Button asChild>
              <a href="/extension">
                Install Extension
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
