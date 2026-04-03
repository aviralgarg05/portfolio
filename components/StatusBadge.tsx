interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-500/20 text-green-300 border-green-400/80 hover:bg-green-500/30 hover:border-green-300';
      case 'completed':
        return 'bg-blue-500/20 text-blue-300 border-blue-400/80 hover:bg-blue-500/30 hover:border-blue-300';
      case 'research':
        return 'bg-orange-500/20 text-orange-300 border-orange-400/80 hover:bg-orange-500/30 hover:border-orange-300';
      default:
        return 'border-border bg-background text-accent hover:bg-muted';
    }
  };

  return (
    <span className={`inline-flex items-center gap-2 text-xs px-3 py-1.5 border rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] cursor-default ${getStatusStyles(status)}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
      {status}
    </span>
  );
}
