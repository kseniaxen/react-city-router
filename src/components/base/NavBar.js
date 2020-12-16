import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav>
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><Link to="/">Main</Link></li>
          <li><Link to="/mainsight">Main Sight</Link></li>
          <li><Link to="/sights">Sights</Link></li>
          <li><Link to="/photos">Photos</Link></li>
          <li><Link to="/form">Form</Link></li>
        </ul>
      </div>
    </nav>
  );
}