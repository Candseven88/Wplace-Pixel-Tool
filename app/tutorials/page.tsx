import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tutorials - Learn Pixel Art for Wplace',
  description: 'Step-by-step tutorials for creating amazing pixel art with Wplace Pixel Tool. Learn advanced techniques, color theory, and Wplace-specific tips.',
  keywords: [
    'pixel art tutorial',
    'wplace tutorial',
    'pixel art techniques',
    'wplace pixel art guide',
    'digital art tutorial',
    'pixel art for beginners'
  ]
};

interface Tutorial {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  category: string;
  featured: boolean;
}

const tutorials: Tutorial[] = [
  {
    id: 'getting-started',
    title: 'Getting Started with Wplace Pixel Tool',
    description: 'Learn the basics of converting images to pixel art for Wplace canvas. Perfect for absolute beginners.',
    difficulty: 'Beginner',
    duration: '10 min',
    category: 'Basics',
    featured: true
  },
  {
    id: 'algorithm-comparison',
    title: 'Understanding Scaling Algorithms',
    description: 'Compare Nearest Neighbor, Bilinear, and Lanczos algorithms to choose the best method for your art.',
    difficulty: 'Intermediate',
    duration: '15 min', 
    category: 'Technical',
    featured: true
  },
  {
    id: 'color-theory',
    title: 'Mastering Color Theory for Pixel Art',
    description: 'Learn how to work with limited color palettes and create stunning visual effects.',
    difficulty: 'Intermediate',
    duration: '20 min',
    category: 'Art Theory',
    featured: true
  },
  {
    id: 'dithering-guide',
    title: 'Floyd-Steinberg Dithering Explained',
    description: 'Master the art of dithering to create smooth gradients and textures in your pixel art.',
    difficulty: 'Advanced',
    duration: '25 min',
    category: 'Technical',
    featured: false
  },
  {
    id: 'mobile-optimization',
    title: 'Creating Pixel Art on Mobile',
    description: 'Tips and tricks for using Wplace Pixel Tool effectively on smartphones and tablets.',
    difficulty: 'Beginner',
    duration: '12 min',
    category: 'Mobile',
    featured: false
  },
  {
    id: 'batch-processing',
    title: 'Efficient Workflow for Multiple Images',
    description: 'Streamline your process when converting multiple images for large Wplace projects.',
    difficulty: 'Advanced',
    duration: '18 min',
    category: 'Workflow',
    featured: false
  },
  {
    id: 'portrait-techniques',
    title: 'Converting Portraits to Pixel Art',
    description: 'Special techniques for preserving facial features and expressions in pixel art conversions.',
    difficulty: 'Intermediate',
    duration: '22 min',
    category: 'Art Techniques',
    featured: false
  },
  {
    id: 'landscape-optimization',
    title: 'Landscape and Nature Scenes',
    description: 'Best practices for converting landscape photos while maintaining natural beauty.',
    difficulty: 'Intermediate',
    duration: '20 min',
    category: 'Art Techniques',
    featured: false
  },
  {
    id: 'troubleshooting',
    title: 'Common Issues and Solutions',
    description: 'Solve common problems and optimize your results with expert troubleshooting tips.',
    difficulty: 'Beginner',
    duration: '15 min',
    category: 'Support',
    featured: false
  }
];

const categories = Array.from(new Set(tutorials.map(t => t.category)));

const getDifficultyColor = (difficulty: Tutorial['difficulty']) => {
  switch (difficulty) {
    case 'Beginner': return 'text-green-500 bg-green-500/10';
    case 'Intermediate': return 'text-yellow-500 bg-yellow-500/10';
    case 'Advanced': return 'text-red-500 bg-red-500/10';
  }
};

export default function TutorialsPage() {
  const featuredTutorials = tutorials.filter(t => t.featured);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl p-6 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Pixel Art Tutorials
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Master the art of pixel art creation with our comprehensive tutorials. 
            From beginner basics to advanced techniques, learn everything you need 
            to create stunning pixel art for Wplace canvas.
          </p>
        </header>

        {/* Featured Tutorials */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-primary">
            🌟 Featured Tutorials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTutorials.map((tutorial) => (
              <div key={tutorial.id} className="glass rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                      {tutorial.difficulty}
                    </span>
                    <span className="text-xs text-foreground/60">{tutorial.duration}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {tutorial.title}
                  </h3>
                  
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                    {tutorial.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-medium">{tutorial.category}</span>
                    <Link 
                      href={`/tutorials/${tutorial.id}`}
                      className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      Start Tutorial
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Tutorials by Category */}
        <section>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-primary">
            📚 All Tutorials
          </h2>
          
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-medium mb-6 border-b border-border pb-2">
                {category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tutorials
                  .filter((tutorial) => tutorial.category === category)
                  .map((tutorial) => (
                    <div key={tutorial.id} className="glass rounded-lg border border-border hover:border-primary/30 transition-all duration-300 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-medium mb-2 hover:text-primary transition-colors">
                            {tutorial.title}
                          </h4>
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                              {tutorial.difficulty}
                            </span>
                            <span className="text-xs text-foreground/60">{tutorial.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-foreground/70 text-sm mb-4">
                        {tutorial.description}
                      </p>
                      
                      <Link 
                        href={`/tutorials/${tutorial.id}`}
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                      >
                        Read Tutorial 
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </section>

        {/* Learning Path */}
        <section className="mt-16">
          <div className="glass p-8 rounded-xl border border-border">
            <h3 className="text-3xl font-semibold mb-6 text-center">
              🎯 Recommended Learning Path
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h4 className="font-semibold mb-2 text-green-500">Beginner</h4>
                <p className="text-sm text-foreground/70 mb-4">
                  Start with basics and understand the fundamentals of pixel art conversion.
                </p>
                <ul className="text-xs text-foreground/60 space-y-1">
                  <li>• Getting Started</li>
                  <li>• Mobile Optimization</li>
                  <li>• Troubleshooting</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold mb-2 text-yellow-500">Intermediate</h4>
                <p className="text-sm text-foreground/70 mb-4">
                  Dive deeper into algorithms and artistic techniques for better results.
                </p>
                <ul className="text-xs text-foreground/60 space-y-1">
                  <li>• Algorithm Comparison</li>
                  <li>• Color Theory</li>
                  <li>• Portrait Techniques</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold mb-2 text-red-500">Advanced</h4>
                <p className="text-sm text-foreground/70 mb-4">
                  Master professional workflows and advanced optimization techniques.
                </p>
                <ul className="text-xs text-foreground/60 space-y-1">
                  <li>• Dithering Guide</li>
                  <li>• Batch Processing</li>
                  <li>• Workflow Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="glass p-8 rounded-xl border border-border">
            <h3 className="text-3xl font-semibold mb-4">Ready to Create?</h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Put your new knowledge to practice! Start creating amazing pixel art 
              for Wplace canvas with our professional conversion tool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Open Pixel Tool
              </Link>
              <Link 
                href="/faq"
                className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 