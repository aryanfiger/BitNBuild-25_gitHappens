import { Pie, PieChart, Cell, ResponsiveContainer, Tooltip } from "recharts";

export interface SentimentTotals {
  positive: number;
  neutral: number;
  negative: number;
}

const COLORS = {
  positive: "hsl(var(--accent))",
  neutral: "hsl(var(--muted-foreground))",
  negative: "hsl(var(--destructive))",
};

export default function SentimentDonut({
  totals,
}: {
  totals: SentimentTotals;
}) {
  const data = [
    { name: "Positive", value: totals.positive, color: COLORS.positive },
    { name: "Neutral", value: totals.neutral, color: COLORS.neutral },
    { name: "Negative", value: totals.negative, color: COLORS.negative },
  ];

  const sum = data.reduce((a, b) => a + b.value, 0) || 1;
  const pct = (n: number) => Math.round((n / sum) * 100);

  const top = data.slice().sort((a, b) => b.value - a.value)[0];

  return (
    <div className="grid grid-cols-1 gap-4 rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">
          Overall Sentiment
        </h3>
        <span className="inline-flex items-center rounded-full bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
          {sum.toLocaleString()} reviews
        </span>
      </div>
      
      {/* Most Common Label - Outside the chart */}
      <div className="text-center">
        <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
          Most Common
        </div>
        <div className="text-lg font-semibold" style={{ color: top.color }}>
          {top.name} ({pct(top.value)}%)
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="h-[160px] w-[160px] mx-auto">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={55}
                outerRadius={75}
                stroke="transparent"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  color: "hsl(var(--muted-foreground))",
                  borderRadius: "6px",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                }}
                cursor={{ fill: "transparent" }}
                labelStyle={{
                  color: "hsl(var(--muted-foreground))",
                  fontWeight: "500",
                }}
                formatter={(value, name) => [
                  `${value} reviews (${Math.round((value / sum) * 100)}%)`,
                  name
                ]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-3 gap-4 flex-1">
          {data.map((d) => (
            <div key={d.name} className="rounded-lg border p-3">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{d.name}</span>
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: d.color }}
                />
              </div>
              <div className="mt-2 text-2xl font-semibold">{pct(d.value)}%</div>
              <div className="text-xs text-muted-foreground">
                {d.value.toLocaleString()} reviews
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
