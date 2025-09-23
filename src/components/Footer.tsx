import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center border-t border-border pt-8">
          <p className="text-muted-foreground text-lg">
            Этот гид создан для информационных целей. При серьезных проблемах обратитесь к специалисту.
          </p>
          <div className="mt-4 space-x-4">
            <span className="text-sm text-muted-foreground">
              © 2025 Гид по управлению тревогой
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
