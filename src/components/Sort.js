function Sort({onSort}) {
    function handleSortBtnClick() {
        console.log('sorting')
        onSort(formerIsSorted => !formerIsSorted)
    }

    return (
        <button type='button' onClick={handleSortBtnClick}>Sort A-Z</button>
    )
}

export default Sort;