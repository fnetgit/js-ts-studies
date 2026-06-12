import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex gap-8">
      <input
        type="text"
        placeholder="Insira seu destino"
        className="bg-gray-200 px-4 py-2 rounded-xl "
      />

      <button className="bg-blue-600 p-2 rounded-full">
        <Search size={18} color="white" />
      </button>
    </div>
  );
}
