
import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

const InstagramFeed = () => {
  const posts = [
    { id: 1, image: '/placeholder.svg', caption: 'Latest skincare formulation samples' },
    { id: 2, image: '/placeholder.svg', caption: 'Behind the scenes: Manufacturing process' },
    { id: 3, image: '/placeholder.svg', caption: 'New makeup collection prototypes' },
    { id: 4, image: '/placeholder.svg', caption: 'Quality control laboratory' },
    { id: 5, image: '/placeholder.svg', caption: 'Sustainable packaging solutions' },
    { id: 6, image: '/placeholder.svg', caption: 'Team working on custom formulations' }
  ];

  return (
    <section className="py-16 bg-white" id="instagram">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram size={32} className="text-rose-gold" />
            <h2 className="font-playfair text-4xl font-bold text-dark-charcoal">
              Follow Our Journey
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get an inside look at our manufacturing process, latest innovations, and behind-the-scenes moments
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-sm font-medium leading-tight">
                    {post.caption}
                  </p>
                </div>
                <div className="absolute top-3 right-3">
                  <ExternalLink size={16} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://instagram.com/shahmeerenterprises"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Instagram size={20} />
            Follow @shahmeerenterprises
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
