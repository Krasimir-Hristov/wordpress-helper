import React from 'react';
import Sidebar from '../components/Sidebar';
import ImagePlaceholder from '../components/ImagePlaceholder';
import '../styles/DocPage.css';

const LayoutsPage: React.FC = () => {
  const sidebarItems = [
    { id: 'premade-layouts', title: 'Готови шаблони' },
    { id: 'layout-library', title: 'Библиотека с шаблони' },
    { id: 'save-layouts', title: 'Запазване на шаблони' },
    { id: 'import-export', title: 'Импортиране и експортиране' },
  ];

  return (
    <div className='doc-content'>
      <Sidebar title='В този раздел:' items={sidebarItems} />

      <div className='content'>
        <h2>Шаблони в Divi Builder</h2>
        <p>
          Divi предлага богата колекция от готови шаблони, с които можете бързо
          да създадете професионален уебсайт. Тук ще научите как да използвате,
          персонализирате и създавате собствени шаблони.
        </p>

        <section id='premade-layouts'>
          <h3>Готови шаблони</h3>
          <p>
            Divi включва стотици предварително изградени шаблони за различни
            видове уебсайтове:
          </p>
          <ol>
            <li>Създайте нова страница или публикация</li>
            <li>Кликнете на "Use Divi Builder"</li>
            <li>Изберете "Choose a Premade Layout"</li>
            <li>Разгледайте категориите с шаблони</li>
            <li>
              Кликнете на шаблон, който харесвате, за предварителен преглед
            </li>
            <li>
              Кликнете "Use This Layout" за да приложите шаблона на страницата
            </li>
          </ol>

          <ImagePlaceholder description='Избор на готов шаблон' />

          <p>
            След като шаблонът е приложен, можете да персонализирате всички
            елементи според вашите нужди.
          </p>
        </section>

        <section id='layout-library'>
          <h3>Библиотека с шаблони</h3>
          <p>
            Divi разполага с библиотека, където можете да съхранявате и
            организирате шаблони:
          </p>
          <ol>
            <li>Отидете на Divi → Divi Library в администраторския панел</li>
            <li>Тук ще видите всички запазени шаблони</li>
            <li>
              Можете да филтрирате по тип (Layouts, Sections, Rows, Modules)
            </li>
            <li>Можете да търсите по име или да сортирате по дата</li>
            <li>
              Кликнете върху миниатюра, за да редактирате или използвате шаблон
            </li>
          </ol>

          <ImagePlaceholder description='Използване на библиотеката на Divi' />
        </section>

        <section id='save-layouts'>
          <h3>Запазване на шаблони</h3>
          <p>Можете да запазвате собствени шаблони за повторна употреба:</p>
          <h4>Запазване на цяла страница</h4>
          <ol>
            <li>Отворете страницата във Visual Builder</li>
            <li>Кликнете на иконата за запазване (дискета) в долния панел</li>
            <li>Изберете "Save To Library"</li>
            <li>Въведете име и категория</li>
            <li>Кликнете "Save To Library"</li>
          </ol>

          <h4>Запазване на секция, ред или модул</h4>
          <ol>
            <li>Кликнете върху елемента, който искате да запазите</li>
            <li>Отворете настройките (икона на зъбно колело)</li>
            <li>Кликнете на бутона "Save To Library"</li>
            <li>Въведете име и кликнете "Save"</li>
          </ol>

          <ImagePlaceholder description='Запазване на шаблон' />
        </section>

        <section id='import-export'>
          <h3>Импортиране и експортиране</h3>
          <p>Можете да пренасяте шаблони между различни уебсайтове:</p>
          <h4>Експортиране на шаблони</h4>
          <ol>
            <li>Отидете на Divi → Divi Library</li>
            <li>Изберете шаблоните, които искате да експортирате</li>
            <li>Кликнете на "Export" бутона</li>
            <li>Ще се свали JSON файл с шаблоните</li>
          </ol>

          <h4>Импортиране на шаблони</h4>
          <ol>
            <li>Отидете на Divi → Divi Library</li>
            <li>Кликнете на бутона "Import"</li>
            <li>Изберете вашия JSON файл</li>
            <li>Кликнете "Import Divi Builder Layouts"</li>
          </ol>

          <ImagePlaceholder description='Импортиране на шаблони' />

          <p>
            Можете също да използвате Divi Portability System за трансфер на
            всички настройки и шаблони:
          </p>
          <ol>
            <li>Отидете на Divi → Theme Options</li>
            <li>Превъртете надолу до "Export" или "Import" раздела</li>
            <li>Следвайте инструкциите за експорт или импорт</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default LayoutsPage;
