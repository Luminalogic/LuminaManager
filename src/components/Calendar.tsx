import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Video, MoreVertical, Plus } from 'lucide-react';
import { cn } from '../lib/utils';
import { Appointment } from '../types';

const mockAppointments: Appointment[] = [
  {
    id: '1',
    name: 'Juan Pérez',
    email: 'juan@empresa.com',
    date: '2026-04-05',
    time: '10:00',
    type: 'online',
    status: 'scheduled'
  },
  {
    id: '2',
    name: 'María García',
    email: 'maria@startup.io',
    date: '2026-04-05',
    time: '12:00',
    type: 'presencial',
    status: 'scheduled'
  },
  {
    id: '3',
    name: 'Carlos Ruiz',
    email: 'carlos@logistica.es',
    date: '2026-04-06',
    time: '09:30',
    type: 'online',
    status: 'scheduled'
  }
];

export function Calendar() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
      {/* Calendar Mini View */}
      <div className="xl:col-span-1 space-y-6">
        <div className="bg-[#0f2040] border border-[#1d3461] rounded-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Abril 2026</h3>
            <div className="flex gap-2">
              <button className="p-1 hover:text-[#64FFDA]">‹</button>
              <button className="p-1 hover:text-[#64FFDA]">›</button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-mono text-[#8892B0] mb-2">
            <span>L</span><span>M</span><span>X</span><span>J</span><span>V</span><span>S</span><span>D</span>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: 30 }).map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "aspect-square flex items-center justify-center text-xs rounded-md cursor-pointer transition-all",
                  i + 1 === 5 ? "bg-[#64FFDA] text-[#0A192F] font-bold" : "hover:bg-[#1d3461] text-[#8892B0]"
                )}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        <button className="w-full py-3 bg-[#1d3461] border border-[#64FFDA] text-[#64FFDA] rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[rgba(100,255,218,0.1)] transition-all">
          <Plus className="w-4 h-4" />
          Nueva Cita
        </button>
      </div>

      {/* Appointments List */}
      <div className="xl:col-span-3 space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Citas para hoy (5 de Abril)</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-xs bg-[#142a4f] border border-[#1d3461] rounded text-[#64FFDA]">Día</button>
            <button className="px-3 py-1 text-xs text-[#8892B0] hover:text-[#CCD6F6]">Semana</button>
            <button className="px-3 py-1 text-xs text-[#8892B0] hover:text-[#CCD6F6]">Mes</button>
          </div>
        </div>

        <div className="space-y-4">
          {mockAppointments.map((apt) => (
            <AppointmentCard key={apt.id} appointment={apt} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AppointmentCard({ appointment }: { appointment: Appointment }) {
  return (
    <div className="bg-[#0f2040] border border-[#1d3461] rounded-xl p-5 flex items-center gap-6 hover:border-[#64FFDA] transition-all group">
      <div className="text-center min-w-[80px] border-r border-[#1d3461] pr-6">
        <p className="text-2xl font-bold text-[#64FFDA]">{appointment.time}</p>
        <p className="text-[10px] font-mono text-[#8892B0] uppercase">30 min</p>
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-lg font-bold text-[#CCD6F6]">{appointment.name}</h4>
            <p className="text-sm text-[#8892B0]">{appointment.email}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-[#8892B0]">
              {appointment.type === 'online' ? (
                <><Video className="w-4 h-4 text-blue-400" /> <span>Google Meet</span></>
              ) : (
                <><MapPin className="w-4 h-4 text-red-400" /> <span>Presencial</span></>
              )}
            </div>
            <button className="p-2 text-[#8892B0] hover:text-[#CCD6F6]">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
