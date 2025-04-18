import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <Link to="/">Home - link</Link>
      <Link to="/info">Info - link</Link>
      <Link to="/param/1">Param - link</Link>
      <Link to={{ pathname: "/query", search: "id=1&name=홍길동" }}>
        QueryString - link
      </Link>
    </>
  );
}

export default Header;
