
import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  readTime: string;
  image: string;
}

const BlogPreview: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "How to Reduce Shipping Costs from Turkey by 30%",
      excerpt: "Learn the strategies that successful importers use to significantly cut shipping expenses while maintaining reliability.",
      date: "May 15, 2023",
      author: {
        name: "Alex Johnson",
        avatar: "https://placehold.co/100/6B46C1/FFFFFF?text=AJ"
      },
      category: "Shipping",
      readTime: "5 min read",
      image: "https://placehold.co/600x400/1A2138/FFFFFF?text=Shipping"
    },
    {
      id: 2,
      title: "Essential Import Documentation: A Complete Checklist",
      excerpt: "Navigate the complex world of import paperwork with our comprehensive guide to all required documentation.",
      date: "April 28, 2023",
      author: {
        name: "Sarah Lee",
        avatar: "https://placehold.co/100/6B46C1/FFFFFF?text=SL"
      },
      category: "Documentation",
      readTime: "8 min read",
      image: "https://placehold.co/600x400/1A2138/FFFFFF?text=Documentation"
    },
    {
      id: 3,
      title: "The Future of Turkish Manufacturing: 2023 Trends",
      excerpt: "Discover the emerging trends in Turkish manufacturing that will shape the import landscape in the coming years.",
      date: "April 15, 2023",
      author: {
        name: "Mehmet Yilmaz",
        avatar: "https://placehold.co/100/6B46C1/FFFFFF?text=MY"
      },
      category: "Industry Trends",
      readTime: "6 min read",
      image: "https://placehold.co/600x400/1A2138/FFFFFF?text=Trends"
    }
  ];

  return (
    <section className="py-20 bg-groop-dark-blue/50">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-gradient text-sm font-medium uppercase tracking-wider mb-3">Latest Insights</h2>
            <h3 className="text-3xl font-bold text-white">From our blog</h3>
            <p className="text-white/70 mt-2 max-w-xl">
              Expert advice and insights to help you navigate the complexities of international imports.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button variant="outline" className="group">
              View all posts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="glass-card overflow-hidden flex flex-col h-full opacity-0 animate-fade-in"
              style={{animationDelay: `${post.id * 100}ms`}}
            >
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-groop-black/70 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded">
                  {post.category}
                </div>
              </div>
              
              <div className="flex-1 p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span className="text-xs text-white/80">{post.author.name}</span>
                  </div>
                  <span className="text-white/50 text-xs">•</span>
                  <span className="text-xs text-white/70">{post.date}</span>
                  <span className="text-white/50 text-xs">•</span>
                  <span className="text-xs text-white/70">{post.readTime}</span>
                </div>
                
                <h4 className="text-xl font-semibold mb-3 text-white">
                  <Link to={`/blog/${post.id}`} className="hover:text-gradient transition-colors">
                    {post.title}
                  </Link>
                </h4>
                
                <p className="text-white/70 mb-6">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.id}`} 
                  className="group inline-flex items-center text-groop-accent font-medium text-sm hover:text-groop-accent/80 transition-colors"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogPreview;
