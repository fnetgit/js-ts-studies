interface DisplayProps {
  count: number;
}

export function Display({ count }: DisplayProps) {
  return (
    <div>
      <p>Total: {count}</p>
    </div>
  );
}
