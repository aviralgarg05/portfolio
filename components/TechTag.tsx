interface TechTagProps {
  tech: string;
  index?: number;
}

export function TechTag({ tech, index = 0 }: TechTagProps) {
  // Different color combinations for variety
  const colorVariations = [
    'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800 dark:hover:bg-blue-900/40',
    'bg-green-50 text-green-700 border-green-200 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800 dark:hover:bg-green-900/40',
    'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800 dark:hover:bg-purple-900/40',
    'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800 dark:hover:bg-orange-900/40',
    'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100 dark:bg-pink-900/20 dark:text-pink-300 dark:border-pink-800 dark:hover:bg-pink-900/40',
    'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-800 dark:hover:bg-indigo-900/40',
    'bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800 dark:hover:bg-yellow-900/40',
    'bg-red-50 text-red-700 border-red-200 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800 dark:hover:bg-red-900/40',
  ];

  // Use tech name and index to determine color consistently
  const colorIndex = (tech.length + index) % colorVariations.length;
  
  return (
    <span className={`text-xs px-2 py-1 border rounded-sm font-medium transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-sm cursor-default ${colorVariations[colorIndex]}`}>
      {tech}
    </span>
  );
}