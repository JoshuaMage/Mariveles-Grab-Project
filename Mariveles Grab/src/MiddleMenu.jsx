export default function MiddleMenu({ children, onSelect }) {
    return (
        <button onClick={onSelect}>{children}</button>
    );
  }