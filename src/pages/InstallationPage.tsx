import React from 'react';
import Sidebar from '../components/Sidebar';
import ImagePlaceholder from '../components/ImagePlaceholder';
import '../styles/DocPage.css';

const InstallationPage: React.FC = () => {
  const sidebarItems = [
    { id: 'purchase', title: 'Закупуване на Divi' },
    { id: 'installation', title: 'Инсталация на темата' },
    { id: 'plugin', title: 'Инсталация като плъгин' },
    { id: 'activation', title: 'Активиране на лиценз' },
  ];

  return (
    <div className='doc-content'>
      <Sidebar title='В този раздел:' items={sidebarItems} />

      <div className='content'>
        <h2>Инсталация на Divi Builder</h2>
        <p>
          За да започнете да използвате Divi Builder, трябва първо да го
          инсталирате. Този процес е лесен и отнема само няколко минути.
        </p>

        <section id='purchase'>
          <h3>Закупуване на Divi</h3>
          <p>
            Първата стъпка е закупуването на Divi от официалния сайт на Elegant
            Themes:
          </p>
          <ol>
            <li>Посетете сайта на Elegant Themes</li>
            <li>
              Изберете абонаментен план - годишен достъп или пожизнен достъп
            </li>
            <li>Завършете процеса на плащане и създайте акаунт</li>
            <li>След успешно плащане, ще имате достъп до сваляне на Divi</li>
          </ol>

          <ImagePlaceholder description='Процес на закупуване на Divi' />
        </section>

        <section id='installation'>
          <h3>Инсталация на темата Divi</h3>
          <p>Инсталацията на Divi като тема в WordPress е проста:</p>
          <ol>
            <li>Влезте в своя акаунт в Elegant Themes</li>
            <li>Свалете ZIP файла на Divi темата</li>
            <li>Отидете във вашия WordPress админ панел</li>
            <li>Изберете Външен вид → Теми → Добави нова → Качи тема</li>
            <li>Изберете сваления ZIP файл и кликнете "Инсталирай сега"</li>
            <li>
              След инсталацията, кликнете "Активирай" за да активирате темата
            </li>
          </ol>

          <ImagePlaceholder description='Инсталация на Divi темата' />
        </section>

        <section id='plugin'>
          <h3>Инсталация на Divi като плъгин</h3>
          <p>
            Ако искате да използвате Divi Builder с друга тема, можете да го
            инсталирате като плъгин:
          </p>
          <ol>
            <li>Влезте в своя акаунт в Elegant Themes</li>
            <li>Свалете ZIP файла на Divi Builder плъгина</li>
            <li>Отидете във вашия WordPress админ панел</li>
            <li>Изберете Плъгини → Добави нов → Качи плъгин</li>
            <li>Изберете сваления ZIP файл и кликнете "Инсталирай сега"</li>
            <li>След инсталацията, кликнете "Активирай плъгин"</li>
          </ol>

          <ImagePlaceholder description='Инсталация на Divi като плъгин' />
        </section>

        <section id='activation'>
          <h3>Активиране на лиценз</h3>
          <p>
            За да получите достъп до всички функции и актуализации, трябва да
            активирате вашия лиценз:
          </p>
          <ol>
            <li>
              Отидете в WordPress админ панел → Divi → Theme Options или Divi →
              Theme Options (ако използвате плъгина)
            </li>
            <li>Отидете на раздел "Updates"</li>
            <li>
              Въведете вашето потребителско име и API ключ от Elegant Themes
              акаунта
            </li>
            <li>Кликнете "Save Changes"</li>
            <li>
              Сега вашият Divi е активиран и ще получава автоматични
              актуализации
            </li>
          </ol>

          <ImagePlaceholder description='Активиране на лиценз' />
        </section>
      </div>
    </div>
  );
};

export default InstallationPage;
