import React from 'react';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Layout({ children, activeTab, setActiveTab }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#0A192F] text-[#CCD6F6]">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-8 overflow-auto">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#CCD6F6] capitalize">
              {activeTab === 'crm' ? 'CRM & Leads' : activeTab}
            </h1>
            <p className="text-[#8892B0] mt-1">
              Gestiona tu agencia Lumina con eficiencia.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-[#CCD6F6]">Admin Lumina</p>
              <p className="text-xs text-[#64FFDA]">Online</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#1d3461] border border-[#64FFDA] flex items-center justify-center text-[#64FFDA] font-bold">
              AL
            </div>
          </div>
        </header>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {children}
        </div>
      </main>
    </div>
  );
}
