import React from 'react';
import { Clock, CheckCircle2, AlertCircle, Plus, MoreHorizontal } from 'lucide-react';
import { cn } from '../lib/utils';
import { Project } from '../types';

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Factory',
    clientId: 'Juan Pérez',
    status: 'development',
    budgetedHours: 120,
    investedHours: 45,
    setupFee: 2500,
    mrr: 0,
    startDate: '2026-03-15',
    endDate: '2026-05-15',
    type: 'custom'
  },
  {
    id: '2',
    name: 'FotoFlow Pro',
    clientId: 'SaaS Internal',
    status: 'maintenance',
    budgetedHours: 200,
    investedHours: 180,
    setupFee: 0,
    mrr: 2300,
    startDate: '2026-01-10',
    endDate: '2026-12-31',
    type: 'micro-saas'
  },
  {
    id: '3',
    name: 'Bot WhatsApp Cafetería',
    clientId: 'Café Central',
    status: 'testing',
    budgetedHours: 40,
    investedHours: 38,
    setupFee: 1650,
    mrr: 39,
    startDate: '2026-03-20',
    endDate: '2026-04-10',
    type: 'custom'
  }
];

export function Projects() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-[#142a4f] border border-[#1d3461] rounded-lg text-sm text-[#64FFDA]">Todos</button>
          <button className="px-4 py-2 text-sm text-[#8892B0] hover:text-[#CCD6F6]">Activos</button>
          <button className="px-4 py-2 text-sm text-[#8892B0] hover:text-[#CCD6F6]">Completados</button>
        </div>
        <button className="flex items-center gap-2 px-6 py-2 bg-[#64FFDA] text-[#0A192F] rounded-lg text-sm font-bold hover:shadow-[0_0_20px_rgba(100,255,218,0.3)] transition-all">
          <Plus className="w-4 h-4" />
          Nuevo Proyecto
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const progress = Math.min(100, (project.investedHours / project.budgetedHours) * 100);
  const isOverBudget = project.investedHours > project.budgetedHours;

  return (
    <div className="bg-[#0f2040] border border-[#1d3461] rounded-xl p-6 hover:border-[#64FFDA] transition-all group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className={cn(
            "text-[10px] font-mono uppercase px-2 py-1 rounded-full border mb-2 inline-block",
            project.type === 'micro-saas' ? "bg-purple-400/10 text-purple-400 border-purple-400/20" : "bg-blue-400/10 text-blue-400 border-blue-400/20"
          )}>
            {project.type}
          </span>
          <h3 className="text-lg font-bold text-[#CCD6F6] group-hover:text-[#64FFDA] transition-colors">{project.name}</h3>
          <p className="text-sm text-[#8892B0]">{project.clientId}</p>
        </div>
        <button className="text-[#8892B0] hover:text-[#CCD6F6]">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs mb-2">
            <span className="text-[#8892B0]">Progreso de Horas</span>
            <span className={cn(
              "font-mono",
              isOverBudget ? "text-red-400" : "text-[#64FFDA]"
            )}>
              {project.investedHours} / {project.budgetedHours}h
            </span>
          </div>
          <div className="h-2 bg-[#1d3461] rounded-full overflow-hidden">
            <div 
              className={cn(
                "h-full transition-all duration-500",
                isOverBudget ? "bg-red-400" : "bg-[#64FFDA]"
              )}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#1d3461]">
          <div>
            <p className="text-[10px] font-mono uppercase text-[#8892B0]">Setup Fee</p>
            <p className="text-sm font-bold text-[#CCD6F6]">{project.setupFee}€</p>
          </div>
          <div>
            <p className="text-[10px] font-mono uppercase text-[#8892B0]">MRR</p>
            <p className="text-sm font-bold text-[#64FFDA]">{project.mrr}€/mes</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-2 text-xs text-[#8892B0]">
            <Clock className="w-3 h-3" />
            <span>Fin: {new Date(project.endDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <StatusIcon status={project.status} />
            <span className="text-xs capitalize text-[#8892B0]">{project.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusIcon({ status }: { status: string }) {
  switch (status) {
    case 'completed': return <CheckCircle2 className="w-4 h-4 text-[#64FFDA]" />;
    case 'development': return <Clock className="w-4 h-4 text-blue-400" />;
    case 'testing': return <AlertCircle className="w-4 h-4 text-yellow-400" />;
    default: return <Clock className="w-4 h-4 text-[#8892B0]" />;
  }
}
