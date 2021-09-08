import React, { useState } from "react";

function ListingCard({ listing: { id, image, description, location }, onDeleteListing }) {
  const [isFavorite, setIsFavorite] = useState(false)

  function handleButtonOnClick() {
    setIsFavorite(formerIsFavorite => !formerIsFavorite)
  }

  function handleDeleteClick() {
    console.log(id)
    fetch(`http://localhost:6001/listings/${id}`, { method: 'DELETE' })
    onDeleteListing(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleButtonOnClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleButtonOnClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
