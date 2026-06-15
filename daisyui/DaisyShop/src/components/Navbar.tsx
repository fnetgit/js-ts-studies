export function Navbar() {
  return (
    <header className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <a href="#" className="btn btn-ghost text-xl">
          DaisyShop
        </a>
      </div>
      <div className="navbar-end gap-2">
        <button className="btn btn-ghost">Entrar</button>
        <button className="btn btn-primary">Sair</button>
      </div>
    </header>
  );
}
