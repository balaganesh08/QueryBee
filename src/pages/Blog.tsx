
import { Helmet } from "react-helmet";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import BlogContactForm from "@/components/BlogContactForm";
import { blogPosts } from "@/data/blogPosts";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return (
    <>
      <Helmet>
        <title>QueryBee Blog - Knowledge Management Insights for SMBs</title>
        <meta name="description" content="Explore the latest insights, tips, and best practices for knowledge management in small and medium businesses on the QueryBee blog." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-20"> {/* Added padding-top for navbar */}
          <section className="bg-gradient-to-b from-bee-lightYellow/30 to-white py-16 md:py-24">
            <div className="section-container">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">QueryBee Blog</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Insights, tips, and best practices for knowledge management in small and medium businesses
                </p>
              </div>
              
              <BlogList posts={currentPosts} />
              
              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mt-12">
                  <PaginationContent>
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <PaginationItem key={index}>
                        <PaginationLink 
                          onClick={() => setCurrentPage(index + 1)}
                          isActive={currentPage === index + 1}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                  </PaginationContent>
                </Pagination>
              )}
            </div>
          </section>
          
          {/* Contact Section */}
          <section id="blog-contact" className="py-16 bg-gray-50">
            <div className="section-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                  <p className="text-gray-600 mb-6">
                    Have questions about our blog posts or need more information about knowledge management for your SMB? 
                    Fill out this form and we'll get back to you as soon as possible.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-bee-blue text-white p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Email Us</h3>
                        <p className="text-gray-600">info@querybee.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-bee-blue text-white p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Call Us</h3>
                        <p className="text-gray-600">+91 98765 43210</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <BlogContactForm />
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Blog;
