
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { Card, CardContent } from "@/components/ui/card";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <>
        <Navbar />
        <div className="section-container py-24 text-center mt-20">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
          <Button onClick={() => navigate("/blog")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{post.title} | QueryBee Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-20"> {/* Added padding-top for navbar */}
          <article>
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-bee-lightYellow/30 to-white py-16">
              <div className="section-container">
                <Link to="/blog" className="inline-flex items-center text-bee-blue hover:text-bee-navy mb-6 transition-colors">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
                
                <div className="flex flex-wrap items-center text-gray-600 gap-4 mb-8">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-2" />
                    <span>{post.category}</span>
                  </div>
                </div>
                
                {post.imageSrc && (
                  <div className="rounded-xl overflow-hidden mb-10">
                    <img 
                      src={post.imageSrc}
                      alt={post.title}
                      className="w-full h-auto object-cover max-h-[500px]"
                    />
                  </div>
                )}
              </div>
            </div>
            
            {/* Content Section */}
            <div className="section-container py-12">
              <div className="max-w-3xl mx-auto">
                <div className="prose prose-lg prose-gray mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />
                
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-6 border-t">
                    <h3 className="text-lg font-semibold mb-3">Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="bg-bee-lightYellow/50 text-bee-navy text-sm px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Related Posts */}
            <div className="bg-gray-50 py-16">
              <div className="section-container">
                <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts
                    .filter(p => p.slug !== post.slug && p.category === post.category)
                    .slice(0, 3)
                    .map(relatedPost => (
                      <Card key={relatedPost.slug} className="card-hover">
                        <Link to={`/blog/${relatedPost.slug}`}>
                          {relatedPost.imageSrc && (
                            <div className="aspect-video overflow-hidden">
                              <img 
                                src={relatedPost.imageSrc} 
                                alt={relatedPost.title} 
                                className="w-full h-full object-cover transition-transform hover:scale-105"
                              />
                            </div>
                          )}
                          <CardContent className="pt-4">
                            <h3 className="text-xl font-semibold mb-2 line-clamp-2">{relatedPost.title}</h3>
                            <p className="text-gray-600 line-clamp-3">{relatedPost.excerpt}</p>
                          </CardContent>
                        </Link>
                      </Card>
                    ))}
                </div>
              </div>
            </div>
          </article>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
