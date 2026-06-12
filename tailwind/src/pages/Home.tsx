import Banner from "../components/Banner";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="flex justify-between">
        <SearchBar />
        <Button text="Entrar" />
      </div>
      <Banner />
    </div>
  );
}
