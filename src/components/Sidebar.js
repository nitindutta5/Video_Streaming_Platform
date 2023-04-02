import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg h-100 w-48">
      <section className="mb-3">
        <ul>
          <li><Link to="/"> Home </Link> </li>
          <li>Shorts</li>
        </ul>
      </section>
      <section className="mb-3">
        <h2 className="font-bold">Subscription</h2>
        <ul>
          <li>TechBurner</li>

          <li>Technical Guruji</li>
        </ul>
      </section>
      <section>
        <h2 className="font-bold">Explore</h2>
        <ul>
          <li>Trending</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>Movies</li>
          <li>News</li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
