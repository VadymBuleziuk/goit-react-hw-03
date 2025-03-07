export default function Options({ onClick, reset, total }) {
  return (
    <div>
      <button
        onClick={() => {
          onClick("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          onClick("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          onClick("bad");
        }}
      >
        Bad
      </button>
      {total > 0 && <button onClick={reset}>Reset</button>}
    </div>
  );
}
