export default function Menu({ children, onSelect }) {
  return (
      <button onClick={onSelect}>{children}</button>
  );
}
