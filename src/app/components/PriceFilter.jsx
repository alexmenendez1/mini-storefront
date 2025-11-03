"use client";

export default function PriceFilter({ minPrice, maxPrice, onChange }) {
  return (
    <div className="price-filter">
      <label>
        Min Price:
        <input
          type="number"
          value={minPrice}
          min={0}
          onChange={(e) => onChange("min", Number(e.target.value))}
        />
      </label>

      <label>
        Max Price:
        <input
          type="number"
          value={maxPrice}
          min={0}
          onChange={(e) => onChange("max", Number(e.target.value))}
        />
      </label>
    </div>
  );
}
