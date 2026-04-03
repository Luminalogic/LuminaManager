import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Wallet, 
  Calculator, 
  Calendar as CalendarIcon,
  Settings,
  LogOut
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'crm', label: 'CRM / Leads', icon: Users },
  { id: 'projects', label: 'Proyectos', icon: Briefcase },
  { id: 'finance', label: 'Finanzas', icon: Wallet },
  { id: 'calculator', label: 'Calculadora', icon: Calculator },
  { id: 'calendar', label: 'Agenda', icon: CalendarIcon },
];

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="w-64 bg-[#0A192F] border-r border-[#1d3461] flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 border-1.5 border-[#64FFDA] rounded-lg flex items-center justify-center font-mono text-[#64FFDA] bg-[rgba(100,255,218,0.08)]">
          L
        </div>
        <span className="text-[#CCD6F6] font-semibold text-xl tracking-tight">Lumina</span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group",
              activeTab === item.id 
                ? "bg-[rgba(100,255,218,0.1)] text-[#64FFDA] border border-[rgba(100,255,218,0.2)]" 
                : "text-[#8892B0] hover:text-[#CCD6F6] hover:bg-[rgba(255,255,255,0.05)]"
            )}
          >
            <item.icon className={cn(
              "w-5 h-5",
              activeTab === item.id ? "text-[#64FFDA]" : "text-[#8892B0] group-hover:text-[#CCD6F6]"
            )} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-[#1d3461]">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-[#8892B0] hover:text-[#CCD6F6] hover:bg-[rgba(255,255,255,0.05)] rounded-lg transition-all">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}
