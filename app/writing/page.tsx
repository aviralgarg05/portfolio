"use client";

import { writing } from "@/data/profile";

export default function WritingPage() {
  const groupedWriting = writing.reduce((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = [];
    }
    acc[article.category].push(article);
    return acc;
  }, {} as Record<string, typeof writing>);

  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-3xl mb-4">writing</h1>
        <p className="text-sm text-accent leading-relaxed mb-6">
          technical articles on ai/ml, databases, devops, and software engineering. published on dev.to and geeksforgeeks.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="text-3xl font-medium mb-1">10</div>
            <div className="text-xs text-accent">total articles</div>
          </div>
          <div>
            <div className="text-3xl font-medium mb-1">33</div>
            <div className="text-xs text-accent">reactions</div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section>
        <h2 className="text-xl mb-6">all articles</h2>
        <div className="space-y-6">
          {writing.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-b border-border pb-6 last:border-0 hover:opacity-70 transition-opacity"
            >
              <h3 className="text-base mb-2">{article.title}</h3>
              <div className="flex items-center gap-4 text-xs text-accent">
                <span>{article.platform}</span>
                <span>{article.category}</span>
                {article.reactions && <span>❤ {article.reactions}</span>}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* By Category */}
      <section>
        <h2 className="text-xl mb-6">by category</h2>
        <div className="space-y-8">
          {Object.entries(groupedWriting).map(([category, articles]) => (
            <div key={category}>
              <h3 className="text-sm text-accent mb-4">{category} ({articles.length})</h3>
              <div className="space-y-3">
                {articles.map((article, index) => (
                  <a
                    key={index}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm hover:opacity-70 transition-opacity"
                  >
                    {article.title} →
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section>
        <h2 className="text-xl mb-6">platforms</h2>
        <div className="space-y-2 text-sm">
          <a
            href="https://dev.to/aviralgarg05"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-70 transition-opacity"
          >
            dev.to →
          </a>
          <a
            href="https://www.geeksforgeeks.org/profile/gargaviwmuu"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-70 transition-opacity"
          >
            geeksforgeeks →
          </a>
        </div>
      </section>
    </div>
  );
}
