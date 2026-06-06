import { useEffect, useState } from "react";

function App() {
  const [catUrl, setCatUrl] = useState<string | null>(null);

  async function fetchCat() {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search",
    );
    const data = await response.json();

    setCatUrl(data[0].url);
  }

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div>
      <h1>Gerador de gatinhos</h1>

      <div>
        {catUrl ? <img src={catUrl} alt="Gatinho" /> : <p>Carregando...</p>}
      </div>

      <div>
        <button>Like</button>
        <button>Deslike</button>
      </div>

      <div>
        <button>Gerar novo gatinho</button>
      </div>
    </div>
  );
}

export default App;
