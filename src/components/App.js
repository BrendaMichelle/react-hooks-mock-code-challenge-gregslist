import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListingForm from "./NewListingForm";

function App() {
  const [listings, setListings] = useState([])
  const [query, setQuery] = useState("")
  const [isSorted, setIsSorted] = useState(false)

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(listingsArr => setListings(listingsArr))
  }, [])

  function handleRemoveListing(id) {
    const newListings = listings.filter(listing => listing.id !== id)
    setListings(newListings)
  }

  function addNewListing(listing) {
    setListings(formerListings => [...formerListings, listing])
  }

  const filteredListings = listings.filter(listing => listing.description.toLowerCase().includes(query.toLocaleLowerCase()))
  const listingsToDisplay = isSorted ? filteredListings.sort((a, b) => a.location.localeCompare(b.location)) : filteredListings

  return (
    <div className="app">
      <Header onSearchSubmit={setQuery} onSort={setIsSorted} />
      <ListingsContainer listings={listingsToDisplay} onDeleteListing={handleRemoveListing} />
      <NewListingForm onSubmit={addNewListing} />
    </div>
  );
}

export default App;
