import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Main</Link>
      <Link to="/mainsight">Main Sight</Link>
      <Link to="/sights">Sights</Link>
      <Link to="/photos">Photos</Link>
    </nav>
  );
}