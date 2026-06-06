import { useEffect, useState } from "react";

function App() {
  const [catUrl, setCatUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchCat() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search",
      );
      const data = await response.json();

      setCatUrl(data[0].url);
    } catch {
      setError("Erro ao buscar o gatinho");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div>
      <h1>Gerador de gatinhos</h1>

      <div>
        {loading ? (
          <p>Carregando...</p>
        ) : catUrl ? (
          <img src={catUrl} alt="Gatinho" />
        ) : (
          <p>Nenhuma imagem carregada</p>
        )}
        {error && <p>{error}</p>}
      </div>

      <div>
        <button>Like</button>
        <button>Deslike</button>
      </div>

      <div>
        <button onClick={fetchCat}>Gerar novo gatinho</button>
      </div>
    </div>
  );
}

export default App;
