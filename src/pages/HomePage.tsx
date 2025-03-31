import React from 'react';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  return (
    <section className='intro'>
      <h2>Добре дошли в наръчника за Divi Builder</h2>
      <p>
        Този наръчник ще ви помогне да научите как ефективно да използвате Divi
        WordPress Builder за създаване на професионални уебсайтове без писане на
        код.
      </p>

      <div className='documentation-features'>
        <div className='feature'>
          <h3>Лесно използване</h3>
          <p>
            Научете как да използвате всички функции на Divi с минимални усилия
          </p>
        </div>
        <div className='feature'>
          <h3>Детайлни инструкции</h3>
          <p>
            Стъпка по стъпка обяснения за всички възможности на Divi Builder
          </p>
        </div>
        <div className='feature'>
          <h3>Визуални примери</h3>
          <p>Снимки и примери за всяка функционалност</p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
