import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white py-4 px-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-black font-montserrat">
            AK
          </div>
          <div className="text-sm font-light text-gray-600">model</div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-black transition-colors"
          >
            О нас
          </a>
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-black transition-colors"
          >
            Агенты
          </a>
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-black transition-colors"
          >
            Модели
          </a>
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-black transition-colors"
          >
            Портфолио
          </a>
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-black transition-colors"
          >
            Контакты
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-700">
            Поиск
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-700">
            Профиль
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
