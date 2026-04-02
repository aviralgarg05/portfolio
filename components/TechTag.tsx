interface TechTagProps {
  tech: string;
  index?: number;
}

export function TechTag({ tech, index = 0 }: TechTagProps) {
  // Much brighter and more vibrant color combinations for dark theme
  const colorVariations = [
    'bg-amber-500/20 text-amber-300 border-amber-400/80 hover:bg-amber-500/30 hover:border-amber-300', // Python style - much brighter
    'bg-red-500/20 text-red-300 border-red-400/80 hover:bg-red-500/30 hover:border-red-300', // Multi-Agent Systems - much brighter
    'bg-blue-500/20 text-blue-300 border-blue-400/80 hover:bg-blue-500/30 hover:border-blue-300', // RAG style - much brighter
    'bg-orange-500/20 text-orange-300 border-orange-400/80 hover:bg-orange-500/30 hover:border-orange-300', // Benchmarking - much brighter
    'bg-purple-500/20 text-purple-300 border-purple-400/80 hover:bg-purple-500/30 hover:border-purple-300', // Jupyter - much brighter
    'bg-green-500/20 text-green-300 border-green-400/80 hover:bg-green-500/30 hover:border-green-300', // NLP - much brighter
    'bg-pink-500/20 text-pink-300 border-pink-400/80 hover:bg-pink-500/30 hover:border-pink-300', // ML - much brighter
    'bg-indigo-500/20 text-indigo-300 border-indigo-400/80 hover:bg-indigo-500/30 hover:border-indigo-300', // much brighter
    'bg-cyan-500/20 text-cyan-300 border-cyan-400/80 hover:bg-cyan-500/30 hover:border-cyan-300', // much brighter
    'bg-yellow-500/20 text-yellow-300 border-yellow-400/80 hover:bg-yellow-500/30 hover:border-yellow-300', // much brighter
  ];

  // Use tech name and index to determine color consistently
  const colorIndex = (tech.length + index) % colorVariations.length;
  
  return (
    <span className={`text-xs px-3 py-1.5 border rounded font-medium transition-all duration-200 hover:scale-[1.02] cursor-default ${colorVariations[colorIndex]}`}>
      {tech}
    </span>
  );
}