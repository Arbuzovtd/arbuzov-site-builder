import React from 'react';

const ResourcesSection = () => {
  const resources = [
    {
      title: 'Книги',
      items: [
        'Дэниел Гоулман — «Эмоциональный интеллект»',
        'Эллен Лангер — «Осознанность»',
        'Кристина Маслач — «Выгорание и как его избежать»'
      ]
    },
    {
      title: 'Приложения',
      items: [
        'Headspace — медитации и дыхательные практики',
        'Calm — расслабление и сон',
        'Insight Timer — таймеры для медитации'
      ]
    },
    {
      title: 'Экстренные контакты',
      items: [
        'Служба экстренной психологической помощи: 051',
        'Телефон доверия: 8-800-2000-122',
        'Онлайн-чат поддержки: psyhelp.ru'
      ]
    }
  ];

  return (
    <section className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="bg-card border border-card-border rounded-lg p-6 md:p-8 shadow-card">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
            Дополнительные ресурсы
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            {resources.map((resource, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">
                  {resource.title}
                </h3>
                <ul className="space-y-3">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                      <p className="text-foreground leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 rounded-lg bg-gradient-accent text-accent-foreground">
            <p className="text-lg font-medium text-center">
              💡 Помните: если симптомы серьезные и длительные, обратитесь к специалисту
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;