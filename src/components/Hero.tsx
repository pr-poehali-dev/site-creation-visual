import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-black font-montserrat leading-tight">
              Добро пожаловать в AK Model
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Наша агентство создаёт и запускает карьеру моделей уровня мира.
              Посвящён модели "AK Model" — это наш процесс, наш подход и
              результаты наших моделей.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Международное агентство в мире моды, работает в сферах, которые
              включают полный спектр интересов для моделей.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616c57c2be0?w=400&h=500&fit=crop"
                alt="Модель 1"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="bg-black text-white p-6 rounded-lg">
                <div className="text-3xl font-bold font-montserrat">AK</div>
                <div className="text-sm font-light">model</div>
              </div>
            </div>
            <div className="pt-8">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop"
                alt="Модель 2"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
