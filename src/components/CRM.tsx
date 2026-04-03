import React from 'react';
import { Search, Filter, MoreVertical, Mail, Phone, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';
import { Lead } from '../types';

const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'Juan Pérez',
    email: 'juan@empresa.com',
    type: 'software-medida',
    message: 'Necesito un sistema de gestión de inventario para mi fábrica.',
    status: 'new',
    createdAt: '2026-04-01T10:00:00Z'
  },
  {
    id: '2',
    name: 'María García',
    email: 'maria@startup.io',
    type: 'micro-saas',
    message: 'Interesada en crear un SaaS para fotógrafos.',
    status: 'contacted',
    createdAt: '2026-03-30T15:30:00Z'
  },
  {
    id: '3',
    name: 'Carlos Ruiz',
    email: 'carlos@logistica.es',
    type: 'automatizacion',
    message: 'Automatizar procesos de pedidos por WhatsApp.',
    status: 'qualified',
    createdAt: '2026-03-28T09:15:00Z'
  }
];

export function CRM() {
  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8892B0]" />
          <input 
            type="text" 
            placeholder="Buscar leads..." 
            className="w-full bg-[#0f2040] border border-[#1d3461] rounded-lg py-2 pl-10 pr-4 text-sm text-[#CCD6F6] focus:outline-none focus:border-[#64FFDA] transition-all"
          />
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#0f2040] border border-[#1d3461] rounded-lg text-sm text-[#8892B0] hover:text-[#CCD6F6] transition-all">
            <Filter className="w-4 h-4" />
            Filtros
          </button>
          <button className="flex-1 md:flex-none px-6 py-2 bg-[#64FFDA] text-[#0A192F] rounded-lg text-sm font-bold hover:shadow-[0_0_20px_rgba(100,255,218,0.3)] transition-all">
            Añadir Lead
          </button>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-[#0f2040] border border-[#1d3461] rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#1d3461] bg-[#142a4f]/50">
              <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-[#8892B0]">Nombre / Email</th>
              <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-[#8892B0]">Tipo de Interés</th>
              <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-[#8892B0]">Estado</th>
              <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-[#8892B0]">Fecha</th>
              <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-[#8892B0]">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1d3461]">
            {mockLeads.map((lead) => (
              <tr key={lead.id} className="hover:bg-[#142a4f]/30 transition-colors group">
                <td className="px-6 py-4">
                  <div className="font-medium text-[#CCD6F6]">{lead.name}</div>
                  <div className="text-xs text-[#8892B0]">{lead.email}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-[#8892B0] capitalize">{lead.type.replace('-', ' ')}</span>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={lead.status} />
                </td>
                <td className="px-6 py-4 text-sm text-[#8892B0]">
                  {new Date(lead.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-[#8892B0] hover:text-[#64FFDA] transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-[#8892B0] hover:text-[#64FFDA] transition-colors">
                      <Calendar className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-[#8892B0] hover:text-[#64FFDA] transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    new: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    contacted: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
    qualified: "bg-[#64FFDA]/10 text-[#64FFDA] border-[#64FFDA]/20",
    lost: "bg-red-400/10 text-red-400 border-red-400/20",
    converted: "bg-purple-400/10 text-purple-400 border-purple-400/20",
  };

  return (
    <span className={cn(
      "px-2 py-1 rounded-full text-[10px] font-mono uppercase border",
      styles[status] || styles.new
    )}>
      {status}
    </span>
  );
}
