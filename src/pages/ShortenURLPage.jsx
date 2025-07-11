import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function ShortenURLPage() {
  const [originalURL, setOriginalURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [loading, setLoading] = useState(false);
  const qrRef = useRef();

  const shortenURL = async () => {
    if (!originalURL) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(originalURL)}`
      );
      const short = await response.text();
      setShortURL(short);
    } catch (error) {
      alert("Failed to shorten URL. Please try again.");
    }
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortURL);
    alert("Shortened URL copied!");
  };

  const downloadQR = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "short-url-qr.png";
    link.click();
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h2 className="text-2xl font-bold text-amber-800 mb-4">Shorten URL</h2>

      <input
        type="text"
        placeholder="Enter long URL"
        value={originalURL}
        onChange={(e) => setOriginalURL(e.target.value)}
        className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800 mb-4"
      />

      <button
        onClick={shortenURL}
        disabled={loading}
        className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-900"
      >
        {loading ? "Shortening..." : "Shorten URL"}
      </button>

      {shortURL && (
        <div className="mt-6 space-y-4 bg-white p-4 rounded shadow">
          <div className="flex items-center justify-between">
            <span className="text-zinc-700">{shortURL}</span>
            <button
              onClick={copyToClipboard}
              className="text-sm bg-amber-800 text-white px-2 py-1 rounded hover:bg-amber-900"
            >
              Copy
            </button>
          </div>

          <div ref={qrRef} className="flex justify-center mt-4">
            <QRCodeCanvas value={shortURL} size={180} bgColor="#fff" fgColor="#92400e" />
          </div>

          <button
            onClick={downloadQR}
            className="mt-4 w-full bg-amber-800 text-white py-2 rounded hover:bg-amber-900"
          >
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
}
