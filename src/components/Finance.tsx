import React from 'react';
import { Wallet, ArrowUpRight, ArrowDownRight, Download, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';
import { FinancialRecord } from '../types';

const mockRecords: FinancialRecord[] = [
  { id: '1', projectId: '1', type: 'setup', amount: 2500, date: '2026-03-20', status: 'paid' },
  { id: '2', projectId: '2', type: 'mrr', amount: 2300, date: '2026-04-01', status: 'paid' },
  { id: '3', projectId: '3', type: 'setup', amount: 1650, date: '2026-03-25', status: 'pending' },
  { id: '4', projectId: '2', type: 'expense', amount: 450, date: '2026-03-28', status: 'paid' },
];

export function Finance() {
  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0f2040] border border-[#1d3461] rounded-xl p-6">
          <p className="text-sm text-[#8892B0] mb-1">Ingresos Totales (Mes)</p>
          <h3 className="text-2xl font-bold text-[#CCD6F6]">6.450€</h3>
          <div className="flex items-center text-xs text-[#64FFDA] mt-2">
            <ArrowUpRight className="w-3 h-3 mr-1" />
            <span>+15% vs mes anterior</span>
          </div>
        </div>
        <div className="bg-[#0f2040] border border-[#1d3461] rounded-xl p-6">
          <p className="text-sm text-[#8892B0] mb-1">MRR Actual</p>
          <h3 className="text-2xl font-bold text-[#64FFDA]">2.339€</h3>
          <div className="flex items-center text-xs text-[#64FFDA] mt-2">
            <ArrowUpRight className="w-3 h-3 mr-1" />
            <span>+2.3% este mes</span>
          </div>
        </div>
        <div className="bg-[#0f2040] border border-[#1d3461] rounded-xl p-6">
          <p className="text-sm text-[#8892B0] mb-1">Pendiente de Cobro</p>
          <h3 className="text-2xl font-bold text-yellow-400">1.650€</h3>
          <div className="flex items-center text-xs text-[#8892B0] mt-2">
            <Calendar className="w-3 h-3 mr-1" />
            <span>Próximo vencimiento: 10 Abr</span>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-[#0f2040] border border-[#1d3461] rounded-xl overflow-hidden">
        <div className="p-6 border-b border-[#1d3461] flex justify-between items-center">
          <h3 className="text-lg font-semibold">Transacciones Recientes</h3>
          <button className="flex items-center gap-2 text-sm text-[#64FFDA] hover:underline">
            <Download className="w-4 h-4" />
            Exportar CSV
          </button>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#1d3461] bg-[#142a4f]/50">
              <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-[#8892B0]">Fecha</th>
              <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-[#8892B0]">Concepto / Proyecto</th>
              <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-[#8892B0]">Tipo</th>
              <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-[#8892B0]">Importe</th>
              <th className="px-6 py-4 text-xs font-mono uppercase tracking-wider text-[#8892B0]">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1d3461]">
            {mockRecords.map((record) => (
              <tr key={record.id} className="hover:bg-[#142a4f]/30 transition-colors">
                <td className="px-6 py-4 text-sm text-[#8892B0]">
                  {new Date(record.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-[#CCD6F6]">
                    {record.type === 'setup' ? 'Configuración Inicial' : record.type === 'mrr' ? 'Suscripción Mensual' : 'Gasto Operativo'}
                  </div>
                  <div className="text-xs text-[#8892B0]">Proyecto ID: {record.projectId}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "text-[10px] font-mono uppercase px-2 py-1 rounded-full border",
                    record.type === 'expense' ? "bg-red-400/10 text-red-400 border-red-400/20" : "bg-blue-400/10 text-blue-400 border-blue-400/20"
                  )}>
                    {record.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "font-bold",
                    record.type === 'expense' ? "text-red-400" : "text-[#64FFDA]"
                  )}>
                    {record.type === 'expense' ? '-' : '+'}{record.amount}€
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "px-2 py-1 rounded-full text-[10px] font-mono uppercase border",
                    record.status === 'paid' ? "bg-[#64FFDA]/10 text-[#64FFDA] border-[#64FFDA]/20" : "bg-yellow-400/10 text-yellow-400 border-yellow-400/20"
                  )}>
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
