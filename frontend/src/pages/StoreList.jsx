import React, { useEffect, useState } from "react";
import axios from "axios";
import StoreCard from "../components/StoreCard";

function StoreList() {
  const [stores, setStores] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;
    axios
      .get("http://localhost:4000/api/stores", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setStores(res.data))
      .catch((err) => console.error(err));
  }, [token]);

  const handleRate = (storeId, rating) => {
    axios
      .post(
        `http://localhost:4000/api/stores/${storeId}/rate`,
        { rating },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() =>
        axios.get("http://localhost:4000/api/stores", {
          headers: { Authorization: `Bearer ${token}` },
        })
      )
      .then((res) => setStores(res.data))
      .catch((err) => console.error(err));
  };

  if (!token) {
    return <p>Please log in first.</p>;
  }

  return (
    <div>
      <h1>Stores</h1>
      {stores.map((store) => (
        <StoreCard key={store.id} store={store} onRate={handleRate} />
      ))}
    </div>
  );
}

export default StoreList;
