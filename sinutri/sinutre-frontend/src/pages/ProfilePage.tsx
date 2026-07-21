import { useState, useEffect } from 'react';
import { SimpleHeader } from '@/components/layout/SimpleHeader';
import { useAuth } from '@/context/AuthContext';
import { updateProfile } from '@/services/authService';

export function ProfilePage() {
  const { user, refreshUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('NAO_ESPECIFICADO');
  const [goal, setGoal] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [targetDietDaily, setTargetDietDaily] = useState('');

  useEffect(() => {
    if (user) {
      setHeight(user.height ? String(user.height) : '');
      setWeight(user.weight ? String(user.weight) : '');
      setGender(user.gender || 'NAO_ESPECIFICADO');
      setGoal(user.goal || '');
      setActivityLevel(user.activityLevel || '');
      setTargetDietDaily(user.targetDietDaily ? String(user.targetDietDaily) : '');
    }
  }, [user]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      setLoading(true);
      setSuccess(false);

      await updateProfile({
        height: height ? Number(height) : undefined,
        weight: weight ? Number(weight) : undefined,
        gender,
        goal: goal || undefined,
        activityLevel: activityLevel || undefined,
        targetDietDaily: targetDietDaily ? Number(targetDietDaily) : undefined,
      });

      await refreshUser();
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error(error);
      alert('Erro ao atualizar perfil.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-[800px] mx-auto">
      <SimpleHeader
        title="Meu Perfil"
        subtitle="Gerencie seus dados e objetivos"
      />

      <div className="card bg-base-100 shadow-sm mt-6">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Altura (cm)</span>
                </label>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  placeholder="Ex: 175"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Peso (kg)</span>
                </label>
                <input
                  type="number"
                  step="0.1"
                  className="input input-bordered w-full"
                  placeholder="Ex: 70.5"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Gênero</span>
              </label>
              <select 
                className="select select-bordered w-full"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="NAO_ESPECIFICADO">Não especificado</option>
                <option value="MASCULINO">Masculino</option>
                <option value="FEMININO">Feminino</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Objetivo</span>
              </label>
              <select 
                className="select select-bordered w-full"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              >
                <option value="">Selecione um objetivo</option>
                <option value="EMAGRECIMENTO">Emagrecimento</option>
                <option value="MANUTENCAO">Manutenção</option>
                <option value="HIPERTROFIA">Hipertrofia</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Nível de Atividade Física</span>
              </label>
              <select 
                className="select select-bordered w-full"
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
              >
                <option value="">Selecione um nível</option>
                <option value="SEDENTARIO">Sedentário</option>
                <option value="LEVEMENTE_ATIVO">Levemente Ativo</option>
                <option value="MODERADAMENTE_ATIVO">Moderadamente Ativo</option>
                <option value="MUITO_ATIVO">Muito Ativo</option>
                <option value="EXTREMAMENTE_ATIVO">Extremamente Ativo</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Meta Calórica Diária (kcal)</span>
              </label>
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="Ex: 2000"
                value={targetDietDaily}
                onChange={(e) => setTargetDietDaily(e.target.value)}
              />
            </div>

            {success && (
              <div className="alert alert-success shadow-lg">
                <span>Perfil atualizado com sucesso!</span>
              </div>
            )}

            <div className="card-actions justify-end mt-4">
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? 'Salvando...' : 'Salvar Perfil'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
