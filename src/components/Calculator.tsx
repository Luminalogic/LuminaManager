import React, { useState, useMemo } from 'react';
import { Calculator as CalcIcon, Info, TrendingUp, DollarSign, Percent } from 'lucide-react';
import { cn } from '../lib/utils';

export function Calculator() {
  const [baseCost, setBaseCost] = useState<number>(1000);
  const [margin, setMargin] = useState<number>(40);
  const [complexity, setComplexity] = useState<number>(1.2);
  const [hours, setHours] = useState<number>(40);
  const [hourlyRate, setHourlyRate] = useState<number>(50);

  const results = useMemo(() => {
    const devCost = hours * hourlyRate * complexity;
    const totalBaseCost = baseCost + devCost;
    const profit = totalBaseCost * (margin / 100);
    const finalPrice = totalBaseCost + profit;
    const actualMargin = (profit / finalPrice) * 100;

    return {
      devCost,
      totalBaseCost,
      profit,
      finalPrice,
      actualMargin
    };
  }, [baseCost, margin, complexity, hours, hourlyRate]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Inputs */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-[#0f2040] border border-[#1d3461] rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <CalcIcon className="w-5 h-5 text-[#64FFDA]" />
            Parámetros de Coste
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-[#8892B0]">Costes Fijos (Licencias, etc)</label>
              <div className="relative">
                <input 
                  type="number" 
                  value={baseCost}
                  onChange={(e) => setBaseCost(Number(e.target.value))}
                  className="w-full bg-[#0A192F] border border-[#1d3461] rounded-lg py-2 px-4 text-[#CCD6F6] focus:border-[#64FFDA] outline-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8892B0]">€</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-[#8892B0]">Margen Deseado (%)</label>
              <div className="relative">
                <input 
                  type="number" 
                  value={margin}
                  onChange={(e) => setMargin(Number(e.target.value))}
                  className="w-full bg-[#0A192F] border border-[#1d3461] rounded-lg py-2 px-4 text-[#CCD6F6] focus:border-[#64FFDA] outline-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8892B0]">%</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-[#8892B0]">Horas Estimadas</label>
              <input 
                type="number" 
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full bg-[#0A192F] border border-[#1d3461] rounded-lg py-2 px-4 text-[#CCD6F6] focus:border-[#64FFDA] outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-[#8892B0]">Tarifa Hora (€)</label>
              <input 
                type="number" 
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full bg-[#0A192F] border border-[#1d3461] rounded-lg py-2 px-4 text-[#CCD6F6] focus:border-[#64FFDA] outline-none"
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-mono uppercase text-[#8892B0] flex justify-between">
                Factor de Complejidad
                <span className="text-[#64FFDA]">{complexity}x</span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="3" 
                step="0.1"
                value={complexity}
                onChange={(e) => setComplexity(Number(e.target.value))}
                className="w-full accent-[#64FFDA]"
              />
              <div className="flex justify-between text-[10px] text-[#8892B0] font-mono">
                <span>ESTÁNDAR (1.0)</span>
                <span>ALTA (2.0)</span>
                <span>CRÍTICA (3.0)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#142a4f]/30 border border-[#1d3461] rounded-xl p-4 flex gap-3">
          <Info className="w-5 h-5 text-blue-400 shrink-0" />
          <p className="text-sm text-[#8892B0]">
            Este cálculo incluye el coste de desarrollo basado en horas y complejidad, sumado a los costes fijos, aplicando el margen de beneficio deseado.
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-6">
        <div className="bg-[#0f2040] border border-[#64FFDA] rounded-xl p-6 shadow-[0_0_30px_rgba(100,255,218,0.1)]">
          <h3 className="text-lg font-semibold mb-6">Resultado del Cálculo</h3>
          
          <div className="space-y-6">
            <ResultRow label="Coste Desarrollo" value={`${results.devCost.toFixed(2)}€`} />
            <ResultRow label="Coste Base Total" value={`${results.totalBaseCost.toFixed(2)}€`} />
            <ResultRow label="Beneficio Neto" value={`${results.profit.toFixed(2)}€`} color="text-[#64FFDA]" />
            
            <div className="pt-6 border-t border-[#1d3461]">
              <p className="text-xs font-mono uppercase text-[#8892B0] mb-1">Precio Final Cliente</p>
              <p className="text-4xl font-bold text-[#64FFDA]">{results.finalPrice.toFixed(0)}€</p>
              <p className="text-xs text-[#8892B0] mt-2">Margen real sobre venta: {results.actualMargin.toFixed(1)}%</p>
            </div>

            <button className="w-full py-3 bg-[#64FFDA] text-[#0A192F] rounded-lg font-bold hover:shadow-[0_0_20px_rgba(100,255,218,0.3)] transition-all">
              Guardar Presupuesto
            </button>
          </div>
        </div>

        <div className="bg-[#0f2040] border border-[#1d3461] rounded-xl p-6">
          <h4 className="text-sm font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#64FFDA]" />
            Optimización de Beneficios
          </h4>
          <ul className="space-y-3">
            <OptimizationTip text="Aumentar complejidad a 1.5x para proyectos con integraciones externas." />
            <OptimizationTip text="Mantener margen por encima del 35% para cubrir imprevistos." />
          </ul>
        </div>
      </div>
    </div>
  );
}

function ResultRow({ label, value, color = "text-[#CCD6F6]" }: any) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-[#8892B0]">{label}</span>
      <span className={cn("font-mono font-bold", color)}>{value}</span>
    </div>
  );
}

function OptimizationTip({ text }: { text: string }) {
  return (
    <li className="flex gap-2 text-xs text-[#8892B0]">
      <span className="text-[#64FFDA]">•</span>
      {text}
    </li>
  );
}
