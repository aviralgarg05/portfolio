interface TechTagProps {
  tech: string;
  index?: number;
}

export function TechTag({ tech, index = 0 }: TechTagProps) {
  // More subtle color combinations matching the screenshot style
  const colorVariations = [
    'bg-amber-900/20 text-amber-300 border-amber-700/50 hover:bg-amber-900/30 hover:border-amber-600', // Python style
    'bg-red-900/20 text-red-300 border-red-700/50 hover:bg-red-900/30 hover:border-red-600', // Multi-Agent Systems
    'bg-blue-900/20 text-blue-300 border-blue-700/50 hover:bg-blue-900/30 hover:border-blue-600', // RAG style
    'bg-orange-900/20 text-orange-300 border-orange-700/50 hover:bg-orange-900/30 hover:border-orange-600', // Benchmarking
    'bg-purple-900/20 text-purple-300 border-purple-700/50 hover:bg-purple-900/30 hover:border-purple-600', // Jupyter
    'bg-green-900/20 text-green-300 border-green-700/50 hover:bg-green-900/30 hover:border-green-600', // NLP
    'bg-pink-900/20 text-pink-300 border-pink-700/50 hover:bg-pink-900/30 hover:border-pink-600', // ML
    'bg-indigo-900/20 text-indigo-300 border-indigo-700/50 hover:bg-indigo-900/30 hover:border-indigo-600',
    'bg-cyan-900/20 text-cyan-300 border-cyan-700/50 hover:bg-cyan-900/30 hover:border-cyan-600',
    'bg-yellow-900/20 text-yellow-300 border-yellow-700/50 hover:bg-yellow-900/30 hover:border-yellow-600',
  ];

  // Use tech name and index to determine color consistently
  const colorIndex = (tech.length + index) % colorVariations.length;
  
  return (
    <span className={`text-xs px-3 py-1.5 border rounded font-medium transition-all duration-200 hover:scale-[1.02] cursor-default ${colorVariations[colorIndex]}`}>
      {tech}
    </span>
  );
}