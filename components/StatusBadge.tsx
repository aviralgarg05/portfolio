interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-900/20 text-green-300 border-green-700/50 hover:bg-green-900/30 hover:border-green-600';
      case 'completed':
        return 'bg-blue-900/20 text-blue-300 border-blue-700/50 hover:bg-blue-900/30 hover:border-blue-600';
      case 'research':
        return 'bg-orange-900/20 text-orange-300 border-orange-700/50 hover:bg-orange-900/30 hover:border-orange-600';
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