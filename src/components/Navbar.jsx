import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-green-700 px-6 py-3 text-white shadow">
      <span className="text-lg font-bold">Blog Personal</span>

      <div className="flex items-center gap-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>

        <button
          type="button"
          className="rounded-lg bg-white px-3 py-1 text-sm font-semibold text-green-700 hover:bg-green-100"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
