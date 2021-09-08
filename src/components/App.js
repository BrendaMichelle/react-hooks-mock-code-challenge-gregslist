import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(listingsArr => setListings(listingsArr))
  }, [])

  function handleRemoveListing(id) {
    const newListings = listings.filter(listing => listing.id !== id)
    setListings(newListings)
  }

  const listingsToDisplay = listings.filter(listing => listing.description.toLowerCase().includes(query.toLocaleLowerCase()))

  return (
    <div className="app">
      <Header onSearchSubmit={setQuery} />
      <ListingsContainer listings={listingsToDisplay} onDeleteListing={handleRemoveListing} />
    </div>
  );
}

export default App;
