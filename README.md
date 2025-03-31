[Prompt Start]

Заглавие: "Създай Next.js уебсайт за Divi WordPress Помощен Център"

Описание:
Създай уебсайт с Next.js 15, Tailwind CSS, Motion, TypeScript и shadcn/ui, който ще служи като помощен център за Divi WordPress Builder.

Уебсайтът трябва да поддържа многоезичност (английски, български, немски) и да включва следните страници:

1. **Начална страница (index.tsx):**

   - Съдържа заглавие: "Divi WordPress Помощен Център".
   - Списък от линкове (Next.js `<Link>` компоненти) към отделните страници:
     • Theme Builder
     • Global Presets
     • Responsive Editing
     • Divi Modules
     • Layouts & Library
     • Effects & Animations
     • Custom CSS & Advanced Settings
   - Включи бутон или меню за смяна на езика.

2. **Отделни страници за всяка функция:**
   За всяка от следните функции създай отделна страница (файл) в папката `pages`:

   - `theme-builder.tsx`
   - `global-presets.tsx`
   - `responsive-editing.tsx`
   - `divi-modules.tsx`
   - `layouts-library.tsx`
   - `effects-animations.tsx`
   - `custom-css.tsx`

   Всяка от тези страници трябва да съдържа:

   - Заглавие с името на функцията (напр. "Theme Builder").
   - Подробно описание на функцията:
     - Theme Builder: "Theme Builder позволява персонализиране на хедъри, футъри и шаблони за различни страници. (Намира се в Divi > Theme Builder)"
     - Global Presets: "Global Presets дават възможност за запазване и прилагане на стилови настройки към различни модули."
     - Responsive Editing: "Позволява редакция на дизайна за десктоп, таблет и мобилни устройства."
     - Divi Modules: "Различни готови модули за изграждане на страниците без кодиране."
     - Layouts & Library: "Достъп до готови оформления и запазване на собствени дизайни."
     - Effects & Animations: "Добавяне на визуални ефекти и анимации за по-динамичен дизайн."
     - Custom CSS & Advanced Settings: "Достъп до разширени настройки и възможност за добавяне на персонализиран CSS код."
   - Placeholder за изображение – `<div>` със сив фон и текст "Placeholder за изображение".
   - Линк към официалната документация за съответната функция (например: https://www.elegantthemes.com/documentation/divi/theme-builder/ за Theme Builder).
   - Бутони "Назад" за връщане към началната страница (използвай Next.js `<Link href="/">`).

3. **Многоезична поддръжка:**

   - Създай папка `locales` със следните файлове: `en.json`, `bg.json`, `de.json`.
   - Всички текстови низове в страниците да се четат от тези JSON файлове.
   - Конфигурирай Next.js i18n в `next.config.js` за правилна маршрутизация и избор на език.

4. **Инсталация и интеграция на shadcn/ui:**

   - След като създадеш Next.js проекта в текущата директория, инсталирай shadcn/ui, като добавиш зависимостта в проекта (например чрез `npm install @shadcn/ui`).
   - Стартирай командата за инициализация на shadcn/ui (ако е необходимо, напр. `npx shadcn-ui init`) за да генерираш необходимите компоненти и файлове.
   - Интегрирай shadcn/ui компонентите в проекта, за да се използват за подобряване на UI елементите.

5. **Файлова структура:**
   Проектът трябва да бъде създаден в текущата директория (без да се създава нова папка) с помощта на командата:
   ```bash
   npx create-next-app@latest . --use-npm --ts --tailwind
   ```
   📂 (Текущата папка)
   ┣ 📂 pages
   ┃ ┣ index.tsx (Начална страница)
   ┃ ┣ theme-builder.tsx
   ┃ ┣ global-presets.tsx
   ┃ ┣ responsive-editing.tsx
   ┃ ┣ divi-modules.tsx
   ┃ ┣ layouts-library.tsx
   ┃ ┣ effects-animations.tsx
   ┃ ┗ custom-css.tsx
   ┣ 📂 locales
   ┃ ┣ en.json
   ┃ ┣ bg.json
   ┃ ┗ de.json
   ┗ next.config.js
