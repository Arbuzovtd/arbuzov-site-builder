import React from 'react';

const DefinitionSection = () => {
  return (
    <section className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="bg-card border border-card-border rounded-lg p-6 md:p-8 shadow-card">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Что такое тревога, стресс и выгорание
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p className="text-foreground text-lg leading-relaxed">
                <strong>Тревога</strong> — длительное беспокойство и напряжение без явной опасности
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
              <p className="text-foreground text-lg leading-relaxed">
                <strong>Стресс</strong> — нормальная реакция на нагрузку. Проблема начинается, когда организм не успевает восстановиться
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <p className="text-foreground text-lg leading-relaxed">
                <strong>Выгорание</strong> — истощение энергии и мотивации из-за хронического стресса
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DefinitionSection;
