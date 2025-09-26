import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import blogImage from '../../public/front-view-vegetable.jpg'
const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      date: "May 23, 2024",
      title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
      image: blogImage,
      alt: "Farmers with fresh produce in wooden crates"
    },
    {
      id: 2,
      date: "May 23, 2024", 
      title: "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
      image: blogImage,
      alt: "Colorful fresh vegetables and produce arrangement"
    },
    {
      id: 3,
      date: "May 23, 2024",
      title: "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
      image: blogImage, 
      alt: "Person preparing fresh vegetables for meal prep"
    }
  ];

  return (
    <section className="mx-2 lg:mx-28  my-10 ">
        <div className=" mx-auto text-center p-6">
          <span className="inline-block bg-green-100 text-green-700 font-medium px-4 py-1 rounded-full text-sm">
            Our Blog
          </span>

          <h2 className=" text-3xl md:text-5xl font-semibold text-gray-900 mt-4">
            Fresh Harvest Blogs 
          </h2>

          <p className="mt-2 text-[12px] md:text-[14px] text-gray-600">
            We pride ourselves on offering a wide variety of fresh and flavorful fruits,
            vegetables, and salad ingredients.
          </p>

          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white  overflow-hidden  hover:shadow-md transition-shadow duration-300">
              {/* Image Container */}
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={400}
                  height={250}
                  className="w-full h-full rounded-lg object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="py-6">
                {/* Date */}
                <p className="text-sm text-gray-500 mb-3">
                  {post.date}
                </p>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-6 line-clamp-3">
                  {post.title}
                </h3>
                
                {/* Read More Link */}
                <button className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors duration-200 group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>
    </section>
  );
};

export default BlogSection;