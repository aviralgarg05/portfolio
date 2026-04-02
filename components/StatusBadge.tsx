interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-800/30 text-green-200 border-green-500/60 hover:bg-green-800/50 hover:border-green-400';
      case 'completed':
        return 'bg-blue-800/30 text-blue-200 border-blue-500/60 hover:bg-blue-800/50 hover:border-blue-400';
      case 'research':
        return 'bg-orange-800/30 text-orange-200 border-orange-500/60 hover:bg-orange-800/50 hover:border-orange-400';
      default:
        return 'border-border bg-background text-accent hover:bg-muted';
    }
  };

  return (
    <span className={`text-xs px-3 py-1.5 border rounded font-medium transition-all duration-200 hover:scale-[1.02] cursor-default ${getStatusStyles(status)}`}>
      {status}
    </span>
  );
}