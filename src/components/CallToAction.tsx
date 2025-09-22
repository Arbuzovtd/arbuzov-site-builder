import React from 'react';
import { Button } from './ui/button';

const CallToAction = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="rounded-3xl bg-background/80 backdrop-blur border border-border shadow-lg p-8 md:p-12 text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
          Готовы проработать запрос глубже?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Запишитесь на индивидуальную консультацию или подпишитесь на обновления, чтобы получать новые практики.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <a href="#" rel="noreferrer">
              Записаться на консультацию
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="#" rel="noreferrer">
              Получать обновления
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
