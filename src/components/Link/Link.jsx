export function Link({ children, onClick }) {
  return (
    <a className="link" onClick={onClick} href="#">
      {children}
    </a>
  );
}

export default Link;
