import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-amber-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">ScanLink</h1>
        <div className="space-x-4">
          <NavLink to="/" className="hover:underline">Home</NavLink>
          <NavLink to="/qr-code" className="hover:underline">QR Code</NavLink>
          <NavLink to="/shorten-url" className="hover:underline">Shorten URL</NavLink>
          <NavLink to="/about" className="hover:underline">About</NavLink>
        </div>
      </div>
    </nav>
  );
}
