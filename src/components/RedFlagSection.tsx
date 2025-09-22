import React from 'react';

const redFlags = [
  'Панические атаки сопровождаются потерей сознания или сильным физическим болевым синдромом',
  'Тревога мешает спать, есть или выполнять базовые обязанности более недели',
  'Появляются мысли о самоповреждении или ощущение, что жизнь потеряла смысл',
  'Симптомы усиливаются после самостоятельных практик и вызывают ощущение неконтролируемости',
  'Есть хронические заболевания или вы принимаете лекарства и ощущаете ухудшение состояния'
];

const RedFlagSection = () => {
  return (
    <section className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl border border-destructive/30 bg-destructive/5 p-6 md:p-8 shadow-card">
          <h2 className="text-2xl md:text-3xl font-semibold text-destructive mb-6">
            Сигнал «красного маячка» организма
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Если замечаете один или несколько признаков ниже, не откладывайте обращение к врачу или психологу — это важные сигналы, что нужна профессиональная поддержка:
          </p>
          <ul className="space-y-4">
            {redFlags.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex size-3 rounded-full bg-destructive"></span>
                <p className="text-foreground leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl bg-background px-5 py-4 text-center text-sm text-muted-foreground border border-destructive/20">
            Помните: своевременная диагностика помогает исключить соматические причины и подобрать безопасный план восстановления.
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedFlagSection;
