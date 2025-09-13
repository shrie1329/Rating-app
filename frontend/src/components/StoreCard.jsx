import React from "react";

function StoreCard({ store, onRate }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
      <h2>{store.name}</h2>
      <p>{store.address}</p>
      <p>⭐ Avg Rating: {store.avg_rating ?? "No ratings yet"}</p>
      <p>👉 Your Rating: {store.user_rating ?? "Not rated"}</p>

      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onRate(store.id, star)}
            style={{
              marginRight: "5px",
              background: store.user_rating === star ? "#ffd700" : "#eee",
              padding: "0.5rem",
            }}
          >
            {star}⭐
          </button>
        ))}
      </div>
    </div>
  );
}

export default StoreCard;


