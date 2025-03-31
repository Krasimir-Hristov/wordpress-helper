import React from 'react';
import Sidebar from '../components/Sidebar';
import ImagePlaceholder from '../components/ImagePlaceholder';
import '../styles/DocPage.css';

const CustomizationPage: React.FC = () => {
  const sidebarItems = [
    { id: 'global-settings', title: 'Глобални настройки' },
    { id: 'theme-customizer', title: 'Theme Customizer' },
    { id: 'module-customization', title: 'Персонализиране на модули' },
    { id: 'css-customization', title: 'Персонализиране с CSS' },
    { id: 'responsive-design', title: 'Адаптивен дизайн' },
  ];

  return (
    <div className='doc-content'>
      <Sidebar title='В този раздел:' items={sidebarItems} />

      <div className='content'>
        <h2>Персонализация на Divi</h2>
        <p>
          Divi предлага множество начини за персонализиране на вашия сайт. В
          този раздел ще научите как да използвате различни инструменти за
          настройка, за да направите сайта си уникален.
        </p>

        <section id='global-settings'>
          <h3>Глобални настройки</h3>
          <p>
            Глобалните настройки на Divi позволяват да направите промени, които
            ще засегнат целия сайт:
          </p>
          <ol>
            <li>Отидете на Divi → Theme Options в администраторския панел</li>
            <li>
              Разгледайте различните раздели: General, Navigation, Builder,
              Layout и т.н.
            </li>
            <li>Промените настройките според вашите предпочитания</li>
            <li>Запазете промените с бутона "Save Changes" в горната част</li>
          </ol>

          <p>Ключови глобални настройки:</p>
          <ul>
            <li>
              <strong>General:</strong> Лого, favicon, социални мрежи
            </li>
            <li>
              <strong>Navigation:</strong> Меню настройки, падащи менюта
            </li>
            <li>
              <strong>Builder:</strong> Настройки за Divi Builder
            </li>
            <li>
              <strong>Layout:</strong> Ширина на сайта, цветова схема
            </li>
          </ul>

          <ImagePlaceholder description='Глобални настройки на Divi' />
        </section>

        <section id='theme-customizer'>
          <h3>Theme Customizer</h3>
          <p>
            Personalizатора на WordPress позволява да променяте визуално
            различни елементи на вашата тема:
          </p>
          <ol>
            <li>Отидете на Външен вид → Персонализиране</li>
            <li>Използвайте различните раздели за персонализиране на сайта</li>
            <li>Направете промени и вижте резултата веднага</li>
            <li>Запазете промените, когато сте доволни от резултата</li>
          </ol>

          <p>Важни секции в Персонализатора:</p>
          <ul>
            <li>
              <strong>Идентичност на сайта:</strong> Лого, заглавие, описание
            </li>
            <li>
              <strong>Цветове:</strong> Основни цветове на сайта
            </li>
            <li>
              <strong>Шрифтове:</strong> Типография на различни елементи
            </li>
            <li>
              <strong>Хедър и футър:</strong> Настройки на горната и долната
              част
            </li>
            <li>
              <strong>Опции на сайта:</strong> Различни глобални настройки
            </li>
          </ul>

          <ImagePlaceholder description='Използване на Персонализатора' />
        </section>

        <section id='module-customization'>
          <h3>Персонализиране на модули</h3>
          <p>Всеки Divi модул предлага множество опции за персонализация:</p>
          <ol>
            <li>Отворете страница в Divi Builder</li>
            <li>Кликнете върху модул за достъп до неговите настройки</li>
            <li>Използвайте трите раздела:</li>
            <ul>
              <li>
                <strong>Content:</strong> Основно съдържание и функционалност
              </li>
              <li>
                <strong>Design:</strong> Визуални настройки (цвят, размер,
                отстъпи)
              </li>
              <li>
                <strong>Advanced:</strong> Разширени опции (CSS класове,
                анимации)
              </li>
            </ul>
          </ol>

          <p>Полезни функции за персонализация:</p>
          <ul>
            <li>
              <strong>Разширени настройки за стил:</strong> Hover ефекти,
              форматиране
            </li>
            <li>
              <strong>Responsive настройки:</strong> Различни настройки за
              различни устройства
            </li>
            <li>
              <strong>Custom CSS:</strong> Добавяне на персонализиран CSS
            </li>
            <li>
              <strong>Запазване като глобален:</strong> Създаване на елементи,
              които могат да се променят централизирано
            </li>
          </ul>

          <ImagePlaceholder description='Персонализация на модули' />
        </section>

        <section id='css-customization'>
          <h3>Персонализиране с CSS</h3>
          <p>
            Divi предлага няколко начина за добавяне на персонализиран CSS код:
          </p>

          <h4>Персонализиран CSS в Theme Options</h4>
          <ol>
            <li>Отидете на Divi → Theme Options → General</li>
            <li>Превъртете до "Custom CSS" текстовата област</li>
            <li>Въведете вашия CSS код</li>
            <li>Кликнете "Save Changes"</li>
          </ol>

          <h4>Personalizатор CSS</h4>
          <ol>
            <li>Отидете на Външен вид → Персонализиране</li>
            <li>Кликнете на "Допълнителен CSS" в менюто</li>
            <li>Добавете вашия CSS код</li>
            <li>Запазете промените</li>
          </ol>

          <h4>Inline CSS в модулите</h4>
          <ol>
            <li>Отворете настройките на модул</li>
            <li>Отидете на раздел "Advanced"</li>
            <li>Разширете секцията "Custom CSS"</li>
            <li>Добавете CSS селектори и кода</li>
          </ol>

          <ImagePlaceholder description='Добавяне на персонализиран CSS' />
        </section>

        <section id='responsive-design'>
          <h3>Адаптивен дизайн</h3>
          <p>
            Divi позволява да настроите как вашият сайт изглежда на различни
            устройства:
          </p>

          <h4>Responsive редактор</h4>
          <ol>
            <li>Отворете страница във Visual Builder</li>
            <li>Кликнете на иконите за различни устройства в долния панел</li>
            <li>Изберете между десктоп, таблет или мобилен изглед</li>
            <li>Направете необходимите настройки за всяко устройство</li>
          </ol>

          <h4>Responsive опции в модулите</h4>
          <ol>
            <li>Отворете настройките на модул</li>
            <li>Забележете иконите за устройства до някои настройки</li>
            <li>
              Кликнете на иконата за устройство, за да зададете различни
              стойности за различни устройства
            </li>
            <li>
              Например, можете да зададете различен размер на шрифта за мобилни
              устройства
            </li>
          </ol>

          <h4>Responsive настройки за видимост</h4>
          <ol>
            <li>Отворете настройките на секция, ред или модул</li>
            <li>Отидете на раздел "Advanced"</li>
            <li>Разширете секцията "Visibility"</li>
            <li>
              Активирайте или деактивирайте видимостта на елемента за различни
              устройства
            </li>
          </ol>

          <ImagePlaceholder description='Работа с адаптивен дизайн' />
        </section>
      </div>
    </div>
  );
};

export default CustomizationPage;
