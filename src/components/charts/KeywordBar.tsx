import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export interface KeywordItem {
  term: string;
  count: number;
}

export default function KeywordBar({
  title,
  data,
  color,
}: {
  title: string;
  data: KeywordItem[];
  color?: string;
}) {
  const barColor = color ?? "hsl(var(--primary))";
  const items = data
    .slice(0, 8)
    .map((d) => ({ label: d.term, value: d.count }));

  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <span className="text-xs text-muted-foreground">
          Top {items.length}
        </span>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={items}
            layout="vertical"
            margin={{ left: 8, right: 8 }}
          >
            <XAxis
              type="number"
              hide
              domain={[0, Math.max(...items.map((i) => i.value), 1)]}
            />
            <YAxis
              type="category"
              dataKey="label"
              width={120}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                background: "hsl(var(--popover))",
                border: "1px solid hsl(var(--border))",
                color: "hsl(var(--muted-foreground))",
                borderRadius: "6px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              }}
              cursor={{ fill: "hsl(var(--muted)/0.2)" as unknown as string }}
              labelStyle={{
                color: "hsl(var(--muted-foreground))",
                fontWeight: "500",
              }}
              formatter={(value, name) => [
                `${value} mentions`,
                name
              ]}
            />
            <Bar dataKey="value" radius={[6, 6, 6, 6]} fill={barColor} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
