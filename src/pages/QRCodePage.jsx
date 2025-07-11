import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";
import { HexColorPicker } from "react-colorful";
import {
  UrlInput,
  WifiInput,
  EmailInput,
  PhoneInput,
  SmsInput,
  VCardInput,
  EventInput,
  GeoInput,
} from "../components/QRCodeTypeForms";

const qrTypes = [
  { label: "Website URL", value: "url" },
  { label: "Wi-Fi", value: "wifi" },
  { label: "Email", value: "email" },
  { label: "Phone Number", value: "phone" },
  { label: "SMS", value: "sms" },
  { label: "vCard (Contact)", value: "vcard" },
  { label: "Event (iCal)", value: "event" },
  { label: "Geolocation", value: "geo" },
];

export default function QRCodePage() {
  const [qrType, setQrType] = useState("url");
  const [formData, setFormData] = useState({});
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [size, setSize] = useState(250);
  const [margin, setMargin] = useState(4);
  const [errorLevel, setErrorLevel] = useState("M");
  const [logo, setLogo] = useState(null);
  const qrRef = useRef();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getQRCodeValue = () => {
    switch (qrType) {
      case "url":
        return formData.url || "";
      case "wifi":
        return `WIFI:T:${formData.encryption || "WPA"};S:${formData.ssid};P:${formData.password};;`;
      case "email":
        return `mailto:${formData.email}?subject=${formData.subject}&body=${formData.body}`;
      case "phone":
        return `tel:${formData.phone}`;
      case "sms":
        return `SMSTO:${formData.smsNumber}:${formData.smsMessage}`;
      case "vcard":
        return `BEGIN:VCARD
VERSION:3.0
N:${formData.name}
ORG:${formData.org}
TEL:${formData.vPhone}
EMAIL:${formData.vEmail}
ADR:${formData.vAddress}
END:VCARD`;
      case "event":
        return `BEGIN:VEVENT
SUMMARY:${formData.title}
DTSTART:${formData.start}
DTEND:${formData.end}
LOCATION:${formData.location}
END:VEVENT`;
      case "geo":
        return `geo:${formData.lat},${formData.lng}`;
      default:
        return "";
    }
  };

  const renderInputs = () => {
    const props = { formData, handleChange };
    switch (qrType) {
      case "url": return <UrlInput {...props} />;
      case "wifi": return <WifiInput {...props} />;
      case "email": return <EmailInput {...props} />;
      case "phone": return <PhoneInput {...props} />;
      case "sms": return <SmsInput {...props} />;
      case "vcard": return <VCardInput {...props} />;
      case "event": return <EventInput {...props} />;
      case "geo": return <GeoInput {...props} />;
      default: return null;
    }
  };

  const downloadPNG = () => {
    const svg = qrRef.current.querySelector("svg");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      canvas.width = size;
      canvas.height = size;
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      if (logo) {
        const logoImg = new Image();
        logoImg.src = URL.createObjectURL(logo);
        logoImg.onload = () => {
          const logoSize = size * 0.2;
          ctx.drawImage(
            logoImg,
            (canvas.width - logoSize) / 2,
            (canvas.height - logoSize) / 2,
            logoSize,
            logoSize
          );
          const link = document.createElement("a");
          link.download = "scanlink-qr.png";
          link.href = canvas.toDataURL("image/png");
          link.click();
        };
      } else {
        const link = document.createElement("a");
        link.download = "scanlink-qr.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      }
      URL.revokeObjectURL(url);
    };

    img.src = url;
  };

  const downloadSVG = () => {
    const svg = qrRef.current.querySelector("svg");
    const svgData = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "scanlink-qr.svg";
    link.click();
    URL.revokeObjectURL(url);
  };

  
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: QR Code Preview */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-zinc-200 flex flex-col items-center">
        <h3 className="text-xl font-semibold text-amber-800 mb-4">Live QR Code Preview</h3>
        <div ref={qrRef} className="bg-white p-4 rounded shadow relative">
          <div style={{ position: "relative", width: size, height: size }}>
            <QRCode
              value={getQRCodeValue()}
              size={size}
              bgColor={bgColor}
              fgColor={fgColor}
              level={errorLevel}
              style={{ padding: `${margin}px`, background: bgColor }}
            />
            {logo && (
              <img
                src={URL.createObjectURL(logo)}
                alt="Logo"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: `${size * 0.2}px`,
                  height: `${size * 0.2}px`,
                  borderRadius: "8px",
                }}
              />
            )}
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <button onClick={downloadPNG} className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-900">
            Download PNG
          </button>
          <button onClick={downloadSVG} className="bg-zinc-700 text-white px-4 py-2 rounded hover:bg-zinc-800">
            Download SVG
          </button>
        </div>
      </div>

      {/* Right: Settings & Form */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-zinc-200 space-y-6">
        <div>
          <label className="block mb-2 font-medium text-zinc-700">QR Code Type</label>
          <select
            value={qrType}
            onChange={(e) => setQrType(e.target.value)}
            className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800"
          >
            {qrTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">{renderInputs()}</div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Foreground Color</label>
            <HexColorPicker color={fgColor} onChange={setFgColor} />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Background Color</label>
            <HexColorPicker color={bgColor} onChange={setBgColor} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Size</label>
            <input type="range" min="100" max="500" value={size} onChange={(e) => setSize(Number(e.target.value))} />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Margin</label>
            <input type="range" min="0" max="20" value={margin} onChange={(e) => setMargin(Number(e.target.value))} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Error Correction Level</label>
          <select
            value={errorLevel}
            onChange={(e) => setErrorLevel(e.target.value)}
            className="w-full p-2 border border-zinc-300 rounded shadow-sm"
          >
            <option value="L">Low (L)</option>
            <option value="M">Medium (M)</option>
            <option value="Q">Quartile (Q)</option>
            <option value="H">High (H)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Embed Logo (optional)</label>
          <input type="file" accept="image/*" onChange={(e) => setLogo(e.target.files[0])} />
        </div>
      </div>
    </div>
  );
}