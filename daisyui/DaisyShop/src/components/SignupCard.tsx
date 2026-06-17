export function SignupCard() {
  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-xl">
      <div className="card-body">
        <h1 className="card-title text-2xl">Criar conta</h1>
        <p className="text-base-content/60 mb-2">
          Preencha os campos abaixo para começar
        </p>
        <fieldset className="fieldset">
          <label className="label">Nome</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Seu nome"
          ></input>
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="seu@email.com"
          ></input>
          <label className="label">Senha</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Su4_senh4"
          ></input>
        </fieldset>
        <div className="card-actions mt-4 flex-col gap-2">
          <button className="btn btn-primary btn-block">Cadastrar</button>
          <div className="divider my-1">Ou</div>
          <button className="btn btn-outline btn-block">
            Continuar com Google
          </button>
          <button className="btn btn-link btn-sm">Tenho uma conta</button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
