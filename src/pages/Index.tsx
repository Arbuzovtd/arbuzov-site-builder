import React from 'react';
import Header from '../components/Header';
import DefinitionSection from '../components/DefinitionSection';
import TechniqueCard from '../components/TechniqueCard';
import ThoughtJournal from '../components/ThoughtJournal';
import ResourcesSection from '../components/ResourcesSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import boxBreathingImage from '../assets/box-breathing.png';
import mindfulness333Image from '../assets/mindfulness-333.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <Header />
      
      <main className="space-y-8">
        <DefinitionSection />
        
        <TechniqueCard
          title="Шаг 1. Дыхание «коробочка» 4-4-4-4"
          items={[
            'Сядьте с прямой спиной, плечи расслаблены',
            'Вдох 4 — пауза 4 — выдох 4 — пауза 4',
            'Повторите 5–8 циклов'
          ]}
          note="Снижает ЧСС и помогает при панике"
          image={boxBreathingImage}
          imageAlt="Техника дыхания коробочка"
          variant="primary"
        />
        
        <TechniqueCard
          title="Шаг 2. Осознанная пауза «3–3–3»"
          items={[
            'Назовите 3 предмета, которые видите',
            'Отметьте 3 звука, которые слышите',
            'Заметьте 3 ощущения в теле'
          ]}
          note="Возвращает внимание в «здесь и сейчас»"
          image={mindfulness333Image}
          imageAlt="Техника осознанности 3-3-3"
          variant="secondary"
        />
        
        <ThoughtJournal />
        
        <ResourcesSection />

        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
