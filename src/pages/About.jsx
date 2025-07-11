export default function About() {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-extrabold text-amber-800 mb-4">About ScanLink</h2>
        <p className="text-zinc-700 text-lg mb-6">
          <strong>ScanLink</strong> is your modern companion for generating smart, scannable QR codes and shortening long, unwieldy URLs with ease.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-amber-700 mb-1">🔗 Why ScanLink?</h3>
            <p className="text-zinc-600">
              In a world where speed and simplicity matter, ScanLink helps users and businesses connect smarter — whether it's sharing a website, contact info, event details, or location.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-amber-700 mb-1">⚙️ What You Can Do</h3>
            <ul className="list-disc pl-5 text-zinc-600">
              <li>Generate QR codes for URLs, Wi-Fi, contact cards, calendar events, and more.</li>
              <li>Shorten long URLs using a fast, reliable API (TinyURL).</li>
              <li>Download your QR codes as images for print or digital use.</li>
              <li>Copy and share links directly from the app.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-amber-700 mb-1">🎯 Our Goal</h3>
            <p className="text-zinc-600">
              To provide a fast, elegant, and no-friction experience for sharing information through powerful QR and URL tools — all with a warm, professional design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
