import { Link } from "react-router-dom";
import { QrCode, Link2 } from "lucide-react";

export default function Home() {
  return (
    <div className="py-16 px-4 bg-white shadow rounded-lg max-w-4xl mx-auto mt-10 text-center">
      <h1 className="text-5xl font-extrabold text-amber-800 mb-4 tracking-tight">ScanLink</h1>
      <p className="text-lg text-zinc-600 max-w-xl mx-auto mb-6">
        Your smart companion for generating professional QR codes and shortening URLs — all in one place.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* QR Code Generator Card */}
        <Link
          to="/qr-code"
          className="group p-6 border border-zinc-200 rounded-lg hover:shadow-lg transition text-left"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-amber-100 rounded">
              <QrCode className="text-amber-700 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-amber-800 group-hover:underline">
              QR Code Generator
            </h3>
          </div>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Create customized QR codes for URLs, Wi-Fi, contacts, events, and more — all from one sleek interface.
          </p>
        </Link>

        {/* URL Shortener Card */}
        <Link
          to="/shorten-url"
          className="group p-6 border border-zinc-200 rounded-lg hover:shadow-lg transition text-left"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-amber-100 rounded">
              <Link2 className="text-amber-700 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-amber-800 group-hover:underline">
              URL Shortener
            </h3>
          </div>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Instantly transform long, cluttered URLs into short, shareable links — perfect for clean communication.
          </p>
        </Link>
      </div>
    </div>
  );
}
