import React, { useEffect, useState } from 'react';
export default function ShopDetail({ match }) {
  console.log(match);
  useEffect(() => {
    fetchItem();
  }, [match.params.id]);

  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchItem = async () => {
    const data = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const result = await data.json();
    console.log(result.data);
    setItem(result.data);
    setLoading(false);
    return () => {
      setItem({});
    };
  };
  if (loading) return 'Loading...';
  return (
    <div>
      <h1>{item.item.name}</h1>
      <img src={item.item.images.background} alt='img'></img>
    </div>
  );
}
