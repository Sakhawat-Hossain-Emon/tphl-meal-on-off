"use client";
import { useState } from "react";

export default function Home() {
  const [empId, setEmpId] = useState("");
  const [msg, setMsg] = useState("");

  const send = async (type: "ON" | "OFF") => {
    if (!empId) {
      setMsg("Employee ID দিতে হবে");
      return;
    }

    const res = await fetch("/api/meal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ empId, type }),
    });

    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <div style={{ maxWidth: 360, margin: "60px auto", textAlign: "center" }}>
      <h2>🍽 TPHL Meal ON / OFF</h2>

      <input
        placeholder="Employee ID"
        value={empId}
        onChange={(e) => setEmpId(e.target.value)}
        style={{ padding: 10, width: "100%" }}
      />

      <button
        onClick={() => send("OFF")}
        style={{ marginTop: 20, padding: 12, width: "100%", background: "red", color: "#fff", border: "none" }}
      >
        ❌ আজ মিল খাবো না
      </button>

      <button
        onClick={() => send("ON")}
        style={{ marginTop: 10, padding: 12, width: "100%", background: "green", color: "#fff", border: "none" }}
      >
        ✅ Off day হলেও মিল খাবো
      </button>

      <p style={{ marginTop: 15 }}>{msg}</p>
    </div>
  );
}
