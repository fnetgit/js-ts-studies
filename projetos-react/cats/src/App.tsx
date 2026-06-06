import { useState, useEffect } from "react";

function App() {
  const [catUrl, setCatUrl] = useState<string | null>(null);
  const [catId, setCatId] = useState<string | null>(null);
  const [votes, setVotes] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchCat() {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search",
      );

      if (!response.ok) {
        throw new Error("Erro na resposta da API");
      }

      const data = await response.json();

      if (!data || data.length === 0) {
        throw new Error("Resposta da API vazia ou inválida");
      }

      setCatUrl(data[0].url);
      setCatId(data[0].id);
      setVotes(0);
    } catch {
      setError("Erro ao buscar o gatinho");
    } finally {
      setLoading(false);
    }
  }

  function catVote(value: number) {
    if (!catId) {
      setError("Nenhuma imagem para votar");
      return;
    }

    setVotes((prev) => prev + (value === 1 ? 1 : -1));
  }

  useEffect(() => {
    async function fetchFirstCat() {
      await fetchCat();
    }

    fetchFirstCat();
  }, []);

  return (
    <div>
      <div>
        <h1>Gerador de gatinhos</h1>

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
        <p>Votos: {votes}</p>
        <button onClick={() => catVote(1)}>Like</button>
        <button onClick={() => catVote(0)}>Deslike</button>
      </div>

      <div>
        <button onClick={fetchCat}>Gerar novo gatinho</button>
      </div>
    </div>
  );
}

export default App;
