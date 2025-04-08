
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BlogPost } from "@/types/blog"; 

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Card key={post.slug} className="overflow-hidden card-hover">
          <Link to={`/blog/${post.slug}`}>
            {post.imageSrc && (
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.imageSrc} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
            )}
            <CardContent className="p-6">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="text-bee-blue font-medium hover:text-bee-navy transition-colors">
                Read more →
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default BlogList;
