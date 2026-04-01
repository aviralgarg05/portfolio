interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'border-[color:var(--status-active)] bg-[color:var(--status-active-bg)] text-[color:var(--status-active)] hover:shadow-green-200 hover:shadow-md animate-pulse';
      case 'completed':
        return 'border-[color:var(--status-completed)] bg-[color:var(--status-completed-bg)] text-[color:var(--status-completed)] hover:shadow-blue-200 hover:shadow-md';
      case 'research':
        return 'border-[color:var(--status-research)] bg-[color:var(--status-research-bg)] text-[color:var(--status-research)] hover:shadow-orange-200 hover:shadow-md';
      default:
        return 'border-border bg-background text-accent hover:bg-muted';
    }
  };

  return (
    <span className={`text-xs px-2 py-1 border rounded-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-default ${getStatusStyles(status)}`}>
      {status}
    </span>
  );
}