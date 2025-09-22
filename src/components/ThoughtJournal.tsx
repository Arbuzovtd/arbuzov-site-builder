import React from 'react';

const ThoughtJournal = () => {
  const journalData = [
    {
      thought: 'Опоздаю на дедлайн',
      action: 'Разбить задачу на шаги и таймер 25 мин',
      control: 'Да'
    },
    {
      thought: 'Увольнение',
      action: 'Собрать факты, обсудить с руководителем',
      control: 'Частично'
    },
    {
      thought: 'Критика коллег',
      action: 'Спросить конкретную обратную связь',
      control: 'Частично'
    },
    {
      thought: 'Болезнь близких',
      action: 'Поддержать, предложить помощь',
      control: 'Нет'
    }
  ];

  return (
    <section className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="bg-card border border-card-border rounded-lg p-6 md:p-8 shadow-card">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Шаг 3. Дневник мыслей
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Пишите кратко и конкретно
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold text-foreground">Тревожная мысль</th>
                  <th className="text-left p-4 font-semibold text-foreground">Что сделать</th>
                  <th className="text-left p-4 font-semibold text-foreground">Зона контроля</th>
                </tr>
              </thead>
              <tbody>
                {journalData.map((row, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="p-4 text-foreground">{row.thought}</td>
                    <td className="p-4 text-foreground">{row.action}</td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        row.control === 'Да' 
                          ? 'bg-success/10 text-success border border-success/20'
                          : row.control === 'Частично'
                          ? 'bg-warning/10 text-warning border border-warning/20'
                          : 'bg-muted text-muted-foreground border border-border'
                      }`}>
                        {row.control}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
            <p className="text-foreground">
              <strong>Фокус:</strong> Работайте только с тем, что в зоне вашего контроля
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThoughtJournal;