import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteListing }) {
  return (
    <main>
      <ul className="cards">
        {listings.map(listingObj => <ListingCard key={listingObj.id} listing={listingObj} onDeleteListing={onDeleteListing} />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
