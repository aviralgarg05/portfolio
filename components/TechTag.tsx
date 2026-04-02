interface TechTagProps {
  tech: string;
  index?: number;
}

export function TechTag({ tech, index = 0 }: TechTagProps) {
  // More vibrant color combinations - brighter and more saturated
  const colorVariations = [
    'bg-amber-800/30 text-amber-200 border-amber-500/60 hover:bg-amber-800/50 hover:border-amber-400', // Python style - brighter
    'bg-red-800/30 text-red-200 border-red-500/60 hover:bg-red-800/50 hover:border-red-400', // Multi-Agent Systems - brighter
    'bg-blue-800/30 text-blue-200 border-blue-500/60 hover:bg-blue-800/50 hover:border-blue-400', // RAG style - brighter
    'bg-orange-800/30 text-orange-200 border-orange-500/60 hover:bg-orange-800/50 hover:border-orange-400', // Benchmarking - brighter
    'bg-purple-800/30 text-purple-200 border-purple-500/60 hover:bg-purple-800/50 hover:border-purple-400', // Jupyter - brighter
    'bg-green-800/30 text-green-200 border-green-500/60 hover:bg-green-800/50 hover:border-green-400', // NLP - brighter
    'bg-pink-800/30 text-pink-200 border-pink-500/60 hover:bg-pink-800/50 hover:border-pink-400', // ML - brighter
    'bg-indigo-800/30 text-indigo-200 border-indigo-500/60 hover:bg-indigo-800/50 hover:border-indigo-400', // brighter
    'bg-cyan-800/30 text-cyan-200 border-cyan-500/60 hover:bg-cyan-800/50 hover:border-cyan-400', // brighter
    'bg-yellow-800/30 text-yellow-200 border-yellow-500/60 hover:bg-yellow-800/50 hover:border-yellow-400', // brighter
  ];

  // Use tech name and index to determine color consistently
  const colorIndex = (tech.length + index) % colorVariations.length;
  
  return (
    <span className={`text-xs px-3 py-1.5 border rounded font-medium transition-all duration-200 hover:scale-[1.02] cursor-default ${colorVariations[colorIndex]}`}>
      {tech}
    </span>
  );
}