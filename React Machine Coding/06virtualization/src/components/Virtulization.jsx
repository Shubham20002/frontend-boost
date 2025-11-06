import { useState } from "react";

export default function SimpleVirtualList() {
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
  const itemHeight = 30;      // height of each row
  const visibleCount = 10;    // how many items visible
  const [scrollTop, setScrollTop] = useState(0);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = startIndex + visibleCount;
  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div
      style={{
        height: itemHeight * visibleCount,
        overflowY: "scroll",
        // border: "1px solid #ccc",
        width: "250px",

      }}
      onScroll={(e) => setScrollTop(e.target.scrollTop)}
    >
      <div style={{ height: items.length * itemHeight, 
        position: "relative" }}>
        {visibleItems.map((item, i) => (
          <div
            key={startIndex + i}
            style={{
              position: "absolute",
              top: (startIndex + i) * itemHeight,
              height: itemHeight,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
