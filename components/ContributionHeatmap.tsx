"use client";

import { GitHubContribution } from "@/lib/content-fetcher";

type ContributionHeatmapProps = {
  contributions: GitHubContribution[];
  totalContributions?: number;
};

type ContributionDay = GitHubContribution | null;

const dayFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

const dayLabels = ["Sun", "", "Tue", "", "Thu", "", ""];

function getWeekStart(dateString: string) {
  const date = new Date(`${dateString}T00:00:00Z`);
  const weekStart = new Date(date);
  weekStart.setUTCDate(date.getUTCDate() - date.getUTCDay());
  return weekStart.toISOString().slice(0, 10);
}

function buildWeeks(contributions: GitHubContribution[]) {
  const weekMap = new Map<string, ContributionDay[]>();

  for (const contribution of contributions) {
    const weekStart = getWeekStart(contribution.date);

    if (!weekMap.has(weekStart)) {
      weekMap.set(weekStart, Array.from({ length: 7 }, () => null));
    }

    const weekday = new Date(`${contribution.date}T00:00:00Z`).getUTCDay();
    weekMap.get(weekStart)![weekday] = contribution;
  }

  return Array.from(weekMap.entries())
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([, days]) => days);
}

function levelClassName(level: number) {
  if (level >= 4) return "bg-emerald-500";
  if (level === 3) return "bg-emerald-500/80";
  if (level === 2) return "bg-emerald-500/60";
  if (level === 1) return "bg-emerald-500/35";
  return "bg-muted";
}

export function ContributionHeatmap({
  contributions,
  totalContributions,
}: ContributionHeatmapProps) {
  const weeks = buildWeeks(contributions);

  if (weeks.length === 0) {
    return (
      <div className="site-card p-4 md:p-5">
        <p className="text-xs text-accent">Live contribution activity is temporarily unavailable.</p>
      </div>
    );
  }

  return (
    <div className="site-card p-4 md:p-5 overflow-x-auto">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <div className="text-base md:text-lg font-medium">
            {totalContributions?.toLocaleString() ?? contributions.length} contributions
          </div>
          <div className="text-xs text-accent">last 12 months, sourced live from GitHub</div>
        </div>
        <a
          href="https://github.com/aviralgarg05"
          target="_blank"
          rel="noopener noreferrer"
          className="site-link-pill px-3 py-1.5 text-xs whitespace-nowrap"
        >
          view profile
        </a>
      </div>

      <div className="flex gap-2 min-w-max">
        <div className="flex flex-col gap-1 pt-0.5 text-[10px] text-accent">
          {dayLabels.map((label, index) => (
            <div key={`${label}-${index}`} className="h-3 leading-3">
              {label}
            </div>
          ))}
        </div>

        <div className="flex gap-1">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day, dayIndex) => {
                const title = day
                  ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${dayFormatter.format(
                      new Date(`${day.date}T00:00:00Z`)
                    )}`
                  : "No data";

                return (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    title={title}
                    className={`h-3 w-3 rounded-[2px] transition-transform hover:scale-110 ${levelClassName(
                      day?.level ?? 0
                    )}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 mt-4 text-[10px] text-accent">
        <span>less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div key={level} className={`h-3 w-3 rounded-[2px] ${levelClassName(level)}`} />
        ))}
        <span>more</span>
      </div>
    </div>
  );
}
