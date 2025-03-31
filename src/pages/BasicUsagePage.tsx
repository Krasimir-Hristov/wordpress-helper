import React from 'react';
import Sidebar from '../components/Sidebar';
import ImagePlaceholder from '../components/ImagePlaceholder';
import '../styles/DocPage.css';

const BasicUsagePage: React.FC = () => {
  const sidebarItems = [
    { id: 'interface', title: 'Интерфейс на Divi' },
    { id: 'first-page', title: 'Създаване на първа страница' },
    { id: 'structure', title: 'Структура на страниците' },
    { id: 'editing', title: 'Редактиране на съдържание' },
  ];

  return (
    <div className='doc-content'>
      <Sidebar title='В този раздел:' items={sidebarItems} />

      <div className='content'>
        <h2>Основна употреба на Divi Builder</h2>
        <p>
          Научете основите на работа с Divi Builder и как да създадете първата
          си страница.
        </p>

        <section id='interface'>
          <h3>Интерфейс на Divi Builder</h3>
          <p>
            Преди да започнете да създавате страници, важно е да се запознаете с
            основния интерфейс на Divi:
          </p>
          <ul>
            <li>
              <strong>Visual Builder</strong> - позволява ви да редактирате
              страницата, докато виждате резултата в реално време
            </li>
            <li>
              <strong>Backend Builder</strong> - редактиране на страницата от
              админ панела
            </li>
            <li>
              <strong>Wireframe View</strong> - показва структурата на
              страницата без формативане
            </li>
            <li>
              <strong>Options Bar</strong> - лентата с опции в горната част на
              екрана
            </li>
            <li>
              <strong>Settings Panel</strong> - панел с настройки за всеки
              елемент
            </li>
          </ul>

          <p>За да включите Divi Builder за страница или публикация:</p>
          <ol>
            <li>Създайте нова страница или публикация</li>
            <li>Кликнете на бутона "Use Divi Builder"</li>
            <li>
              Изберете между "Build From Scratch" (създаване от нулата) или
              "Choose a Premade Layout" (избор на готов шаблон)
            </li>
          </ol>

          <ImagePlaceholder description='Интерфейс на Divi Builder' />
        </section>

        <section id='first-page'>
          <h3>Създаване на първа страница</h3>
          <p>Нека създадем проста страница с Divi Builder:</p>
          <ol>
            <li>Отидете на Страници → Добавяне</li>
            <li>Въведете заглавие за страницата</li>
            <li>Кликнете на "Use Divi Builder"</li>
            <li>Изберете "Build From Scratch"</li>
            <li>Кликнете на "+" бутона за да добавите нова секция</li>
            <li>Изберете структура на колоните (например 1 колона)</li>
            <li>
              Кликнете на "Insert Module" и изберете модул (например Text модул)
            </li>
            <li>Добавете съдържание и запазете промените</li>
            <li>Публикувайте страницата</li>
          </ol>

          <ImagePlaceholder description='Създаване на първа страница с Divi' />
        </section>

        <section id='structure'>
          <h3>Структура на страниците в Divi</h3>
          <p>
            Divi използва йерархична структура за организиране на съдържание:
          </p>
          <ul>
            <li>
              <strong>Секции</strong> - най-големите контейнери, които групират
              редове
            </li>
            <li>
              <strong>Редове</strong> - съдържат колони и определят структурата
              на страницата
            </li>
            <li>
              <strong>Колони</strong> - съдържат модули и определят
              разпределението на съдържанието
            </li>
            <li>
              <strong>Модули</strong> - специфични елементи като текст,
              изображения, бутони и др.
            </li>
          </ul>

          <p>За ефективна работа, запомнете тази структура:</p>
          <pre>Секция → Ред → Колона → Модул</pre>

          <ImagePlaceholder description='Структура на Divi страница' />
        </section>

        <section id='editing'>
          <h3>Редактиране на съдържание</h3>
          <p>Divi предлага няколко начина за редактиране на съдържание:</p>

          <h4>Inline Editing</h4>
          <p>
            Кликнете директно върху текст във Visual Builder, за да го
            редактирате на място.
          </p>

          <h4>Module Settings</h4>
          <p>За по-детайлно редактиране:</p>
          <ol>
            <li>Кликнете върху модул, ред или секция</li>
            <li>Изберете иконката за настройки (зъбно колело)</li>
            <li>Редактирайте съдържание, стил и разширени настройки</li>
            <li>Запазете промените</li>
          </ol>

          <h4>Дублиране и изтриване</h4>
          <p>
            За дублиране на елемент, кликнете върху него и изберете иконката за
            дублиране. За изтриване, изберете иконката за кошче.
          </p>

          <ImagePlaceholder description='Редактиране на съдържание в Divi' />
        </section>
      </div>
    </div>
  );
};

export default BasicUsagePage;
