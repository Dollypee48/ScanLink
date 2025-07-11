import { Link } from "react-router-dom";
import { QrCode, Link2 } from "lucide-react";

export default function Home() {
  return (
    <div className="py-20 px-6 bg-white shadow-md rounded-xl max-w-5xl mx-auto mt-12 text-center">
      <h1 className="text-5xl font-extrabold text-amber-800 mb-4 tracking-tight drop-shadow-md">ScanLink</h1>
      <p className="text-lg text-zinc-600 max-w-2xl mx-auto mb-8">
        An elegant, all-in-one toolkit to generate advanced QR codes and shorten URLs—built for speed, style, and simplicity.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* QR Code Generator Card */}
        <Link
          to="/qr-code"
          className="group p-6 border border-amber-200 rounded-xl hover:shadow-lg hover:border-amber-300 transition text-left bg-amber-50"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-amber-200 rounded-full">
              <QrCode className="text-amber-800 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-amber-800 group-hover:underline">
              QR Code Generator
            </h3>
          </div>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Generate scannable, stylized QR codes for websites, Wi-Fi access, digital cards, events, and locations. Includes logo embedding and customization.
          </p>
        </Link>

        {/* URL Shortener Card */}
        <Link
          to="/shorten-url"
          className="group p-6 border border-amber-200 rounded-xl hover:shadow-lg hover:border-amber-300 transition text-left bg-amber-50"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-amber-200 rounded-full">
              <Link2 className="text-amber-800 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-amber-800 group-hover:underline">
              URL Shortener
            </h3>
          </div>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Clean up long links with ease. Generate shortened URLs paired with instant QR codes — perfect for campaigns, print, and sharing.
          </p>
        </Link>
      </div>
    </div>
  );
}
