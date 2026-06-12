type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button className="w-full bg-blue-600 text-white px-5 py-2 rounded-xl">
      {text}
    </button>
  );
}
