import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Chrome, Globe } from "lucide-react";

export default function Extension() {
  return (
    <main className="container py-10 md:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Review Radar Extension
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get instant review summaries directly on product pages. No need to leave your shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>How it works</CardTitle>
              <CardDescription>
                Simple and seamless integration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <div>
                  <h4 className="font-medium">Install the extension</h4>
                  <p className="text-sm text-muted-foreground">
                    Add Review Radar to your browser in seconds
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <div>
                  <h4 className="font-medium">Visit any product page</h4>
                  <p className="text-sm text-muted-foreground">
                    Works on Amazon, Best Buy, and other major retailers
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <div>
                  <h4 className="font-medium">Click the Review Radar button</h4>
                  <p className="text-sm text-muted-foreground">
                    Get instant AI-powered review analysis
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>
                Everything you need for smart shopping
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm">Instant sentiment analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm">Top pros and cons extraction</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm">Visual charts and summaries</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm">Works on all major retailers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm">No account required</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Download for your browser</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Chrome className="h-5 w-5" />
              Chrome
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Globe className="h-5 w-5" />
              Firefox
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Globe className="h-5 w-5" />
              Edge
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Coming soon to all major browsers
          </p>
        </div>
      </div>
    </main>
  );
}


