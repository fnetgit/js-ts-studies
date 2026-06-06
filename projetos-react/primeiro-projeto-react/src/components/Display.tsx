interface DisplayProps {
  count: number;
}

export function Display({ count }: DisplayProps) {
  return (
    <div>
      <p>Total: {count}</p>
      {count ? <p>Obrigado por curtir</p> : <p>Ninguém curtiu ainda</p>}
      {count === 0 && <p>Seja o primeiro a curtir</p>}
      {count > 0 && count < 10 && <p>Está indo bem...</p>}
      {count >= 10 && <p>Está bombando</p>}
    </div>
  );
}
