import React from 'react';
import '../styles/Sidebar.css';

interface SidebarItem {
  id: string;
  title: string;
}

interface SidebarProps {
  title: string;
  items: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ title, items }) => {
  return (
    <aside className='sidebar'>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
