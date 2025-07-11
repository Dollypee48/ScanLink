import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

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

  const downloadQR = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "scanlink-qr.png";
    link.click();
  };

  const renderInputs = () => {
    switch (qrType) {
      case "url":
        return (
          <input type="text" name="url" placeholder="Enter website URL" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
        );
      case "wifi":
        return (
          <>
            <input type="text" name="ssid" placeholder="SSID" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
            <input type="text" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
            <select name="encryption" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800">
              <option value="WPA">WPA/WPA2</option>
              <option value="WEP">WEP</option>
              <option value="nopass">No Password</option>
            </select>
          </>
        );
      case "email":
        return (
          <>
            <input type="email" name="email" placeholder="Email Address" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
            <input type="text" name="subject" placeholder="Subject" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
            <textarea name="body" placeholder="Message Body" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
          </>
        );
      case "phone":
        return (
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
        );
      case "sms":
        return (
          <>
            <input type="tel" name="smsNumber" placeholder="Phone Number" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
            <textarea name="smsMessage" placeholder="Message" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
          </>
        );
      case "vcard":
        return (
          <>
            <input name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
            <input name="org" placeholder="Organization" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
            <input name="vPhone" placeholder="Phone" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
            <input name="vEmail" placeholder="Email" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
            <input name="vAddress" placeholder="Address" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
          </>
        );
      case "event":
        return (
          <>
            <input name="title" placeholder="Event Title" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
            <input name="start" type="datetime-local" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
            <input name="end" type="datetime-local" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
            <input name="location" placeholder="Location" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
          </>
        );
      case "geo":
        return (
          <>
            <input name="lat" placeholder="Latitude" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
            <input name="lng" placeholder="Longitude" onChange={handleChange} className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h2 className="text-2xl font-bold text-amber-800 mb-4">Generate QR Code</h2>

      <label className="block mb-2 font-medium text-zinc-700">Select QR Code Type:</label>
      <select value={qrType} onChange={(e) => setQrType(e.target.value)} className="w-full p-2 border border-zinc-300 rounded shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-amber-800">
        {qrTypes.map((type) => (
          <option key={type.value} value={type.value}>{type.label}</option>
        ))}
      </select>

      <div className="space-y-3">{renderInputs()}</div>

      <div ref={qrRef} className="mt-6 p-4 bg-white shadow rounded flex justify-center">
        {getQRCodeValue() && (
          <QRCodeCanvas value={getQRCodeValue()} size={200} bgColor="#fff" fgColor="#92400e" />
        )}
      </div>

      {getQRCodeValue() && (
        <button
          onClick={downloadQR}
          className="mt-4 bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-900"
        >
          Download QR Code
        </button>
      )}
    </div>
  );
}
