import { useState } from "react";

function NewListingForm({ onSubmit }) {

    const [formValues, setFormValues] = useState({ location: "", image: "", description: "" })

    function onInputChange(e) {
        const value = e.target.value
        const field = e.target.name

        setFormValues(prevFormValues => ({ ...prevFormValues, [field]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch(`http://localhost:6001/listings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formValues)
        })
            .then(res => res.json())
            .then(newListing => onSubmit(newListing))

        setFormValues({ location: "", image: "", description: "" })

    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add a new listing</h3>
            <label>Location:</label>
            <input type="text" value={formValues.location} onChange={onInputChange} name="location" />
            <label>Image:</label>
            <input type="text" value={formValues.image} onChange={onInputChange} name="image" />
            <label>Description:</label>
            <input type="text" value={formValues.description} onChange={onInputChange} name="description" />
            <button type='submit'>Create</button>
        </form>
    )
}

export default NewListingForm;