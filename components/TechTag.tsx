interface TechTagProps {
  tech: string;
  index?: number;
}

export function TechTag({ tech }: TechTagProps) {
  // Consistent minimal styling that matches the portfolio's typewriter aesthetic
  // All tags use the same foreground/border colors for a clean, uniform look
  return (
    <span className="text-xs px-3 py-1.5 border border-border text-foreground/80 rounded font-medium transition-all duration-200 hover:bg-foreground/5 hover:border-foreground/40 hover:text-foreground cursor-default">
      {tech}
    </span>
  );
}