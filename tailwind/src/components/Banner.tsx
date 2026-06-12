import Button from "./Button";

export default function Banner() {
  return (
    <div className="bg-blue-300 rounded-3xl p-14 my-5">
      <h1 className="text-3xl font-bold max-w-sm mb-4">
        Seu próximo destino está aqui
      </h1>
      <Button text="Comprar com 40% off" />
    </div>
  );
}
