import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Briefcase, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { cn } from '../lib/utils';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const data = [
  { name: 'Ene', mrr: 4000, projects: 2400 },
  { name: 'Feb', mrr: 4500, projects: 1398 },
  { name: 'Mar', mrr: 5200, projects: 9800 },
  { name: 'Abr', mrr: 6100, projects: 3908 },
  { name: 'May', mrr: 6800, projects: 4800 },
  { name: 'Jun', mrr: 7500, projects: 3800 },
];

const COLORS = ['#64FFDA', '#4fd1b0', '#1d3461', '#142a4f'];

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="MRR Total" 
          value="7.500€" 
          change="+12.5%" 
          isPositive={true} 
          icon={TrendingUp} 
        />
        <StatCard 
          title="Leads Nuevos" 
          value="24" 
          change="+4" 
          isPositive={true} 
          icon={Users} 
        />
        <StatCard 
          title="Proyectos Activos" 
          value="8" 
          change="0" 
          isPositive={true} 
          icon={Briefcase} 
        />
        <StatCard 
          title="Rentabilidad Media" 
          value="64%" 
          change="-2.1%" 
          isPositive={false} 
          icon={DollarSign} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* MRR Growth Chart */}
        <div className="bg-[#0f2040] border border-[#1d3461] rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            Crecimiento MRR
            <span className="text-xs font-normal text-[#8892B0]">(Últimos 6 meses)</span>
          </h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1d3461" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#8892B0" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis 
                  stroke="#8892B0" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false}
                  tickFormatter={(value) => `${value}€`}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0A192F', border: '1px solid #1d3461', borderRadius: '8px' }}
                  itemStyle={{ color: '#64FFDA' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="mrr" 
                  stroke="#64FFDA" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#64FFDA', strokeWidth: 2, stroke: '#0A192F' }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Project Distribution */}
        <div className="bg-[#0f2040] border border-[#1d3461] rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-6">Distribución de Proyectos</h3>
          <div className="h-80 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: 'Micro-SaaS', value: 45 },
                    { name: 'Software a Medida', value: 35 },
                    { name: 'Automatización', value: 20 },
                  ]}
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0A192F', border: '1px solid #1d3461', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-[#64FFDA]">100%</span>
              <span className="text-xs text-[#8892B0]">Total</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, isPositive, icon: Icon }: any) {
  return (
    <div className="bg-[#0f2040] border border-[#1d3461] rounded-xl p-6 hover:border-[#64FFDA] transition-all group">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-[#1d3461] rounded-lg group-hover:bg-[rgba(100,255,218,0.1)] transition-colors">
          <Icon className="w-6 h-6 text-[#64FFDA]" />
        </div>
        <div className={cn(
          "flex items-center text-xs font-medium px-2 py-1 rounded-full",
          isPositive ? "text-[#64FFDA] bg-[rgba(100,255,218,0.1)]" : "text-red-400 bg-red-400/10"
        )}>
          {isPositive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
          {change}
        </div>
      </div>
      <h4 className="text-[#8892B0] text-sm font-medium">{title}</h4>
      <p className="text-2xl font-bold text-[#CCD6F6] mt-1">{value}</p>
    </div>
  );
}
