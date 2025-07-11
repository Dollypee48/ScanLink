// src/components/QRCodeTypeForms.jsx
import React from "react";

export function UrlInput({ formData, handleChange }) {
  return (
    <input
      type="text"
      name="url"
      placeholder="Enter website URL"
      value={formData.url || ""}
      onChange={handleChange}
      className="w-full p-2 border border-zinc-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-800"
    />
  );
}

export function WifiInput({ formData, handleChange }) {
  return (
    <>
      <input name="ssid" placeholder="SSID" value={formData.ssid || ""} onChange={handleChange} className="input" />
      <input name="password" placeholder="Password" value={formData.password || ""} onChange={handleChange} className="input" />
      <select name="encryption" onChange={handleChange} className="input" value={formData.encryption || "WPA"}>
        <option value="WPA">WPA/WPA2</option>
        <option value="WEP">WEP</option>
        <option value="nopass">No Password</option>
      </select>
    </>
  );
}

export function EmailInput({ formData, handleChange }) {
  return (
    <>
      <input name="email" placeholder="Email Address" value={formData.email || ""} onChange={handleChange} className="input" />
      <input name="subject" placeholder="Subject" value={formData.subject || ""} onChange={handleChange} className="input" />
      <textarea name="body" placeholder="Message Body" value={formData.body || ""} onChange={handleChange} className="input" />
    </>
  );
}

export function PhoneInput({ formData, handleChange }) {
  return (
    <input name="phone" placeholder="Phone Number" value={formData.phone || ""} onChange={handleChange} className="input" />
  );
}

export function SmsInput({ formData, handleChange }) {
  return (
    <>
      <input name="smsNumber" placeholder="Phone Number" value={formData.smsNumber || ""} onChange={handleChange} className="input" />
      <textarea name="smsMessage" placeholder="Message" value={formData.smsMessage || ""} onChange={handleChange} className="input" />
    </>
  );
}

export function VCardInput({ formData, handleChange }) {
  return (
    <>
      <input name="name" placeholder="Full Name" value={formData.name || ""} onChange={handleChange} className="input" />
      <input name="org" placeholder="Organization" value={formData.org || ""} onChange={handleChange} className="input" />
      <input name="vPhone" placeholder="Phone" value={formData.vPhone || ""} onChange={handleChange} className="input" />
      <input name="vEmail" placeholder="Email" value={formData.vEmail || ""} onChange={handleChange} className="input" />
      <input name="vAddress" placeholder="Address" value={formData.vAddress || ""} onChange={handleChange} className="input" />
    </>
  );
}

export function EventInput({ formData, handleChange }) {
  return (
    <>
      <input name="title" placeholder="Event Title" value={formData.title || ""} onChange={handleChange} className="input" />
      <input name="start" type="datetime-local" value={formData.start || ""} onChange={handleChange} className="input" />
      <input name="end" type="datetime-local" value={formData.end || ""} onChange={handleChange} className="input" />
      <input name="location" placeholder="Location" value={formData.location || ""} onChange={handleChange} className="input" />
    </>
  );
}

export function GeoInput({ formData, handleChange }) {
  return (
    <>
      <input name="lat" placeholder="Latitude" value={formData.lat || ""} onChange={handleChange} className="input" />
      <input name="lng" placeholder="Longitude" value={formData.lng || ""} onChange={handleChange} className="input" />
    </>
  );
}
