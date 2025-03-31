import React from 'react';
import Sidebar from '../components/Sidebar';
import ImagePlaceholder from '../components/ImagePlaceholder';
import '../styles/DocPage.css';

const ModulesPage: React.FC = () => {
  const sidebarItems = [
    { id: 'text-modules', title: 'Текстови модули' },
    { id: 'media-modules', title: 'Медийни модули' },
    { id: 'layout-modules', title: 'Модули за оформление' },
    { id: 'interactive-modules', title: 'Интерактивни модули' },
  ];

  return (
    <div className='doc-content'>
      <Sidebar title='Видове модули:' items={sidebarItems} />

      <div className='content'>
        <h2>Модули в Divi Builder</h2>
        <p>
          Модулите са основните елементи, с които се изгражда съдържанието в
          Divi. Тук ще научите как да използвате различните видове модули за
          създаване на богато съдържание.
        </p>

        <section id='text-modules'>
          <h3>Текстови модули</h3>

          <h4>Text Module</h4>
          <p>Основният модул за добавяне на текстово съдържание:</p>
          <ol>
            <li>Добавете Text Module към колона</li>
            <li>Използвайте визуалния редактор за форматиране на текста</li>
            <li>Добавете връзки, списъци и форматиране</li>
            <li>В раздел "Design" настройте шрифт, цвят, размер и т.н.</li>
          </ol>

          <ImagePlaceholder description='Използване на Text Module' />

          <h4>Heading Module</h4>
          <p>За създаване на атрактивни заглавия:</p>
          <ol>
            <li>Добавете Heading Module към колона</li>
            <li>Въведете текст за заглавието</li>
            <li>Изберете ниво на заглавие (H1-H6)</li>
            <li>В раздел "Design" настройте стила на заглавието</li>
          </ol>

          <ImagePlaceholder description='Използване на Heading Module' />

          <h4>Blurb Module</h4>
          <p>Комбинация от изображение/икона и текст:</p>
          <ol>
            <li>Добавете Blurb Module</li>
            <li>Изберете изображение или икона</li>
            <li>Добавете заглавие и текст</li>
            <li>Настройте позицията на изображението/иконата</li>
          </ol>

          <ImagePlaceholder description='Използване на Blurb Module' />
        </section>

        <section id='media-modules'>
          <h3>Медийни модули</h3>

          <h4>Image Module</h4>
          <p>За добавяне и форматиране на изображения:</p>
          <ol>
            <li>Добавете Image Module</li>
            <li>Качете или изберете изображение</li>
            <li>Настройте размер, alt текст и заглавие</li>
            <li>Приложете анимации и ефекти ако е необходимо</li>
          </ol>

          <ImagePlaceholder description='Използване на Image Module' />

          <h4>Video Module</h4>
          <p>За вграждане на видео съдържание:</p>
          <ol>
            <li>Добавете Video Module</li>
            <li>Въведете URL на видео (YouTube, Vimeo) или качете MP4</li>
            <li>Изберете настройки за автоматично пускане, контроли, др.</li>
            <li>Настройте миниатюра</li>
          </ol>

          <ImagePlaceholder description='Използване на Video Module' />

          <h4>Gallery Module</h4>
          <p>За създаване на галерии от изображения:</p>
          <ol>
            <li>Добавете Gallery Module</li>
            <li>Качете или изберете изображения</li>
            <li>Настройте броя колони и оформление</li>
            <li>Изберете дали галерията да има lightbox ефект</li>
          </ol>

          <ImagePlaceholder description='Използване на Gallery Module' />
        </section>

        <section id='layout-modules'>
          <h3>Модули за оформление</h3>

          <h4>Accordion Module</h4>
          <p>За създаване на разгъващо се съдържание:</p>
          <ol>
            <li>Добавете Accordion Module</li>
            <li>Добавете елементи с "Add New Item"</li>
            <li>За всеки елемент въведете заглавие и съдържание</li>
            <li>Настройте дали първият елемент да е отворен по подразбиране</li>
          </ol>

          <ImagePlaceholder description='Използване на Accordion Module' />

          <h4>Tabs Module</h4>
          <p>За организиране на съдържание в раздели:</p>
          <ol>
            <li>Добавете Tabs Module</li>
            <li>Добавете табове с "Add New Tab"</li>
            <li>За всеки таб въведете заглавие и съдържание</li>
            <li>Настройте стила и оформлението на табовете</li>
          </ol>

          <ImagePlaceholder description='Използване на Tabs Module' />

          <h4>Toggle Module</h4>
          <p>За създаване на отделни елементи с разгъващо се съдържание:</p>
          <ol>
            <li>Добавете Toggle Module</li>
            <li>Въведете заглавие и съдържание</li>
            <li>Настройте дали елементът да е отворен по подразбиране</li>
          </ol>

          <ImagePlaceholder description='Използване на Toggle Module' />
        </section>

        <section id='interactive-modules'>
          <h3>Интерактивни модули</h3>

          <h4>Button Module</h4>
          <p>За създаване на призиви за действие:</p>
          <ol>
            <li>Добавете Button Module</li>
            <li>Въведете текст за бутона</li>
            <li>Добавете URL за връзката</li>
            <li>Настройте стила, цветовете и размера на бутона</li>
          </ol>

          <ImagePlaceholder description='Използване на Button Module' />

          <h4>Contact Form Module</h4>
          <p>За създаване на формуляр за контакт:</p>
          <ol>
            <li>Добавете Contact Form Module</li>
            <li>Настройте полета на формата</li>
            <li>Конфигурирайте имейл за получаване на съобщения</li>
            <li>Персонализирайте съобщенията за успешно изпращане</li>
          </ol>

          <ImagePlaceholder description='Използване на Contact Form Module' />

          <h4>Email Optin Module</h4>
          <p>За събиране на имейли за бюлетин:</p>
          <ol>
            <li>Добавете Email Optin Module</li>
            <li>Свържете с услуга за имейл маркетинг</li>
            <li>Настройте съобщението и дизайна на формата</li>
            <li>Конфигурирайте действието след записване</li>
          </ol>

          <ImagePlaceholder description='Използване на Email Optin Module' />
        </section>
      </div>
    </div>
  );
};

export default ModulesPage;
