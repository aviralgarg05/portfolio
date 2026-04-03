interface TechTagProps {
  tech: string;
  index?: number;
}

const colorVariations = [
  "bg-amber-500/12 text-amber-700 border-amber-500/35 hover:bg-amber-500/18 hover:border-amber-500/50 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-400/80 dark:hover:bg-amber-500/30 dark:hover:border-amber-300",
  "bg-red-500/12 text-red-700 border-red-500/35 hover:bg-red-500/18 hover:border-red-500/50 dark:bg-red-500/20 dark:text-red-300 dark:border-red-400/80 dark:hover:bg-red-500/30 dark:hover:border-red-300",
  "bg-blue-500/12 text-blue-700 border-blue-500/35 hover:bg-blue-500/18 hover:border-blue-500/50 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-400/80 dark:hover:bg-blue-500/30 dark:hover:border-blue-300",
  "bg-orange-500/12 text-orange-700 border-orange-500/35 hover:bg-orange-500/18 hover:border-orange-500/50 dark:bg-orange-500/20 dark:text-orange-300 dark:border-orange-400/80 dark:hover:bg-orange-500/30 dark:hover:border-orange-300",
  "bg-purple-500/12 text-purple-700 border-purple-500/35 hover:bg-purple-500/18 hover:border-purple-500/50 dark:bg-purple-500/20 dark:text-purple-300 dark:border-purple-400/80 dark:hover:bg-purple-500/30 dark:hover:border-purple-300",
  "bg-green-500/12 text-green-700 border-green-500/35 hover:bg-green-500/18 hover:border-green-500/50 dark:bg-green-500/20 dark:text-green-300 dark:border-green-400/80 dark:hover:bg-green-500/30 dark:hover:border-green-300",
  "bg-pink-500/12 text-pink-700 border-pink-500/35 hover:bg-pink-500/18 hover:border-pink-500/50 dark:bg-pink-500/20 dark:text-pink-300 dark:border-pink-400/80 dark:hover:bg-pink-500/30 dark:hover:border-pink-300",
  "bg-indigo-500/12 text-indigo-700 border-indigo-500/35 hover:bg-indigo-500/18 hover:border-indigo-500/50 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-400/80 dark:hover:bg-indigo-500/30 dark:hover:border-indigo-300",
  "bg-cyan-500/12 text-cyan-700 border-cyan-500/35 hover:bg-cyan-500/18 hover:border-cyan-500/50 dark:bg-cyan-500/20 dark:text-cyan-300 dark:border-cyan-400/80 dark:hover:bg-cyan-500/30 dark:hover:border-cyan-300",
  "bg-yellow-500/14 text-yellow-800 border-yellow-500/35 hover:bg-yellow-500/20 hover:border-yellow-500/50 dark:bg-yellow-500/20 dark:text-yellow-300 dark:border-yellow-400/80 dark:hover:bg-yellow-500/30 dark:hover:border-yellow-300",
];

function getColorIndex(tech: string) {
  return Array.from(tech).reduce((sum, character) => sum + character.charCodeAt(0), 0) % colorVariations.length;
}

export function TechTag({ tech }: TechTagProps) {
  return (
    <span
      className={`inline-flex items-center text-xs px-3 py-1.5 border rounded-full font-medium cursor-default will-change-transform transition-transform duration-200 hover:-translate-y-0.5 hover:scale-[1.03] ${colorVariations[getColorIndex(tech)]}`}
    >
      {tech}
    </span>
  );
}
