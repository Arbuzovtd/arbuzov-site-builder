import React from 'react';

interface TechniqueCardProps {
  title: string;
  items: string[];
  note?: string;
  image?: string;
  imageAlt?: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

const TechniqueCard: React.FC<TechniqueCardProps> = ({ 
  title, 
  items, 
  note, 
  image, 
  imageAlt,
  variant = 'primary' 
}) => {
  const variantStyles = {
    primary: 'border-primary/20 bg-gradient-to-br from-card to-primary/5',
    secondary: 'border-secondary/20 bg-gradient-to-br from-card to-secondary/5',
    accent: 'border-accent/20 bg-gradient-to-br from-card to-accent/5'
  };

  const dotColors = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent'
  };

  return (
    <div className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className={`${variantStyles[variant]} border rounded-lg p-6 md:p-8 shadow-card`}>
          <div className={`grid gap-8 ${image ? 'md:grid-cols-2' : 'grid-cols-1'} items-center`}>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
                {title}
              </h2>
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full ${dotColors[variant]} mt-2 flex-shrink-0`}></div>
                    <p className="text-foreground text-lg leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
              {note && (
                <div className={`mt-6 p-4 rounded-lg bg-${variant}/10 border border-${variant}/20`}>
                  <p className="text-foreground font-medium">{note}</p>
                </div>
              )}
            </div>
            {image && (
              <div className="flex justify-center">
                <img 
                  src={image} 
                  alt={imageAlt || title}
                  className="max-w-full h-auto rounded-lg shadow-soft"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechniqueCard;