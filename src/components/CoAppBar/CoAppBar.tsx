import { Link } from "@tanstack/react-router";

const CoAppBar = () => {
  return (
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>
      <Link to="/api" className="[&.active]:font-bold">
        API
      </Link>
    </div>
  );
};

export default CoAppBar;
