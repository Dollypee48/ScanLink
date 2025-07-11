export default function About() {
  return (
    <div className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-amber-800 mb-6 tracking-tight text-center">About ScanLink</h2>

      <p className="text-zinc-700 leading-relaxed mb-6 text-lg text-center">
        <strong className="text-amber-800">ScanLink</strong> is a modern web application that empowers individuals and businesses to bridge the gap between
        the physical and digital worlds using fully customizable QR codes and an integrated URL shortener. Built with flexibility and precision in mind,
        ScanLink simplifies how information is encoded, shared, and accessed.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Feature Card 1 */}
        <div className="p-5 border border-zinc-200 bg-white rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-amber-700 mb-2">✨ Multi-Purpose QR Generator</h3>
          <p className="text-zinc-700 text-sm leading-relaxed">
            Generate QR codes for a wide range of use cases — from website URLs, Wi-Fi credentials, and email prompts to contact cards (vCard),
            phone numbers, SMS messages, calendar events, and geolocations. Every QR code adapts to your context with precision.
          </p>
        </div>

        {/* Feature Card 2 */}
        <div className="p-5 border border-zinc-200 bg-white rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-amber-700 mb-2">🎨 Complete Customization</h3>
          <p className="text-zinc-700 text-sm leading-relaxed">
            Style your QR codes with customizable foreground and background colors, adjustable size and padding, margin control, and
            error correction levels (L, M, Q, H). You can also embed your brand’s logo in the center of the QR for added identity.
          </p>
        </div>

        {/* Feature Card 3 */}
        <div className="p-5 border border-zinc-200 bg-white rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-amber-700 mb-2">🔗 Built-in URL Shortener</h3>
          <p className="text-zinc-700 text-sm leading-relaxed">
            Long and messy links? No problem. ScanLink comes with a URL shortener powered by TinyURL, instantly converting any link
            into a short, clean version — complete with a downloadable QR code for easy sharing.
          </p>
        </div>

        {/* Feature Card 4 */}
        <div className="p-5 border border-zinc-200 bg-white rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-amber-700 mb-2">📁 Export Options</h3>
          <p className="text-zinc-700 text-sm leading-relaxed">
            Download your QR codes in high-quality PNG or SVG formats, ensuring compatibility across print, digital platforms,
            presentations, and packaging materials.
          </p>
        </div>
      </div>

      <p className="text-zinc-700 text-lg leading-relaxed mb-4 text-center">
        Whether you're a marketer promoting a product, a teacher sharing resources, an event planner managing check-ins, or simply someone who
        needs quick access tools, <strong className="text-amber-800">ScanLink</strong> offers a professional, reliable, and user-friendly experience for all.
      </p>

      <p className="text-zinc-700 text-lg leading-relaxed text-center">
        Built with modern web technologies, ScanLink delivers speed, responsiveness, and clarity — making it your go-to toolkit
        for smart information sharing.
      </p>
    </div>
  );
}
