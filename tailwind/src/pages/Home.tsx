import Banner from "../components/Banner";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import TripCard from "../components/TripCard";
import saopaulo from "../assets/saopaulo.jpg";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="flex justify-between">
        <SearchBar />
        <div>
          <Button text="Entrar" />
        </div>
      </div>
      <Banner />
      <div className="flex flex-wrap justify-center gap-6">
        <TripCard
          image={saopaulo}
          origin="Teresina"
          destination="São Paulo"
          price="500"
        />
        <TripCard
          image={saopaulo}
          origin="Teresina"
          destination="São Paulo"
          price="500"
        />
        <TripCard
          image={saopaulo}
          origin="Teresina"
          destination="São Paulo"
          price="500"
        />
      </div>
    </div>
  );
}
