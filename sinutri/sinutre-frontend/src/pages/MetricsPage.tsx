import { useState, useEffect } from 'react';
import { SimpleHeader } from '@/components/layout/SimpleHeader';
import { api } from '@/lib/api';

interface MetricsSummary {
  imc: number | null;
  imcClassification: string | null;
  averageCalories7Days: number;
  targetDietDaily: number;
  isOverDailyLimit: boolean;
  todayCalories: number;
}

export function MetricsPage() {
  const [metrics, setMetrics] = useState<MetricsSummary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMetrics() {
      try {
        const response = await api.get('/metrics/summary');
        setMetrics(response.data);
      } catch (error) {
        console.error('Error loading metrics', error);
      } finally {
        setLoading(false);
      }
    }
    loadMetrics();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <span className="text-gray-500">Carregando métricas...</span>
      </div>
    );
  }

  if (!metrics) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <span className="text-error">Erro ao carregar métricas.</span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1200px] mx-auto mb-8 flex flex-col gap-6">
      <SimpleHeader
        title="Progresso e Métricas"
        subtitle="Acompanhe seus resultados diários e histórico"
      />

      {/* Alerta de Meta Diária Ultrapassada (Issue 7) */}
      {metrics.isOverDailyLimit && (
        <div className="alert alert-error shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <span>
              <strong>Atenção!</strong> Você ultrapassou sua meta calórica diária de {metrics.targetDietDaily} kcal (Consumo de hoje: {metrics.todayCalories} kcal).
            </span>
          </div>
        </div>
      )}
      {!metrics.isOverDailyLimit && metrics.todayCalories > 0 && (
        <div className="alert alert-success shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Você está dentro da sua meta calórica hoje! ({metrics.todayCalories} / {metrics.targetDietDaily} kcal)</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Componente IMC (Issue 9) */}
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-gray-500">Índice de Massa Corporal (IMC)</h2>
            {metrics.imc ? (
              <>
                <div className="text-5xl font-bold my-4 text-primary">
                  {metrics.imc}
                </div>
                <div className={`badge badge-lg p-4 ${
                  metrics.imcClassification === 'Peso ideal' ? 'badge-success' : 'badge-warning'
                }`}>
                  {metrics.imcClassification}
                </div>
              </>
            ) : (
              <p className="text-sm text-gray-400 mt-4">Preencha seu peso e altura no perfil para calcular o IMC.</p>
            )}
          </div>
        </div>

        {/* Componente Média Calórica (Issue 10) */}
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-gray-500">Média Calórica (Últimos 7 dias)</h2>
            <div className="text-5xl font-bold my-4 text-secondary">
              {metrics.averageCalories7Days} <span className="text-2xl font-normal">kcal/dia</span>
            </div>
            
            <div className="w-full mt-2">
              <div className="flex justify-between text-sm mb-1">
                <span>Média: {metrics.averageCalories7Days} kcal</span>
                <span>Meta: {metrics.targetDietDaily} kcal</span>
              </div>
              <progress 
                className={`progress w-full ${metrics.averageCalories7Days > metrics.targetDietDaily ? 'progress-error' : 'progress-success'}`} 
                value={metrics.averageCalories7Days} 
                max={metrics.targetDietDaily > metrics.averageCalories7Days ? metrics.targetDietDaily : metrics.averageCalories7Days}
              ></progress>
              {metrics.averageCalories7Days > metrics.targetDietDaily ? (
                <p className="text-xs text-error mt-2">Sua média semanal está acima da meta diária.</p>
              ) : (
                <p className="text-xs text-success mt-2">Excelente! Sua média semanal está dentro da meta.</p>
              )}
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}
