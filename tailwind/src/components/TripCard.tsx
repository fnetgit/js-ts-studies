type TripCardProps = {
  image: string;
  origin: string;
  destination: string;
  price: string;
};

export default function TripCard({
  image,
  origin,
  destination,
  price,
}: TripCardProps) {
  return (
    <div className="bg-white rounded-3xl p-3 w-52">
      <img className="h-42 rounded-3xl" src={image} />
      <h3 className="font-bold text-blue-700 my-3">
        {origin} {"->"} {destination}
      </h3>
      <p className="text-gray-500 text-sm">A partir de</p>
      <p className="text-3xl font-bold text-blue-700">R$ {price}</p>
    </div>
  );
}
