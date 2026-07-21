//import { useState } from 'react';
import { NAV_ITEMS } from '@/constants/navigation';
import { SidebarBrand } from './SidebarBrand';
import { SidebarItem } from './SidebarItem';
import { SignOut } from '@phosphor-icons/react';
import { useAuth } from '@/context/AuthContext';

interface SidebarProps {
  drawerId: string;
}

export function Sidebar({ drawerId }: SidebarProps) {
 // const [activeId, setActiveId] = useState<string>('home');
  const expanded = true;
  const { signOut } = useAuth();

  return (
    <aside className="drawer-side z-50">
      <label
        htmlFor={drawerId}
        aria-label="Fechar menu"
        className="drawer-overlay"
      />
      <div
        className={`bg-base-100 flex flex-col min-h-full border-r border-base-200 shadow-sm transition-all duration-300 ${
          expanded ? 'w-64 items-start' : 'w-20 items-center'
        }`}
      >
        <SidebarBrand expanded={expanded} />
        <ul className="menu w-full grow pt-4 gap-2">
          {NAV_ITEMS.map(item => (
            <SidebarItem
              key={item.id}
              label={item.label}
              Icon={item.Icon}
              to={item.to}
              expanded={expanded}
            />
          ))}
          <li className="mt-auto mb-4">
            <button 
              onClick={signOut}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-gray-500 hover:bg-error/10 hover:text-error transition-colors`}
            >
              <SignOut size={24} />
              {expanded && <span>Sair</span>}
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
