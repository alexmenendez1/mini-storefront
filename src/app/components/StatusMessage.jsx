"use client";

export default function StatusMessage({ loading, error, items }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!items || items.length === 0) return <p>No items found.</p>;
  return null; 
}
