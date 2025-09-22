import React from 'react';

const Header = () => {
  return (
    <header className="w-full py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Гид по управлению тревогой, стрессом и выгоранием
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Практические техники и инструменты для восстановления эмоционального баланса
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;