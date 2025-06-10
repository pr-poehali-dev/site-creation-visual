import React from "react";

const FeaturedImage = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1504593811423-6dd665756598?w=1200&h=600&fit=crop"
            alt="Главное изображение"
            className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedImage;
