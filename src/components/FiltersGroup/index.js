import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    changeSearchBy,
    categoryOptions,
    ratingsList,
    changeCategory,
    changeRating,
    clearFilters,
  } = props

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      changeSearchBy(event.target.value)
    }
  }

  /*   const onChangeSearch = event => {
        changeSearchBy(event.target.value)
        }
   */

  const onChangeCategory = event => {
    changeCategory(event.target.id)
    console.log(event.target.id)
  }
  const onChangeRating = event => {
    changeRating(event.target.id)
    console.log(event.target.id)
  }
  const onClearFilters = () => {
    clearFilters()
  }

  return (
    <div className="filters-group-container">
      <div className="products-search-container">
        <input
          type="search"
          placeholder="Search"
          onKeyDown={handleKeyDown}
          className="product-search"
          //   onChange={onChangeSearch}
        />
        <div className="search-icon">
          <BsSearch />
        </div>
      </div>
      <h1 className="category-heading filter-heading">Category</h1>
      <ul className="list-container">
        {categoryOptions.map(each => (
          <li key={each.name}>
            <p
              className="category-item filter-button"
              onClick={onChangeCategory}
              id={each.categoryId}
            >
              {each.name}
            </p>
          </li>
        ))}
      </ul>
      <h1 className="rating-heading filter-heading">Rating</h1>
      <ul className="list-container">
        {ratingsList.map(each => (
          <li key={each.ratingId}>
            <button type="button" className="rating-item filter-button">
              <img
                src={each.imageUrl}
                alt={`rating ${each.ratingId}`}
                className="ratingImage"
                onClick={onChangeRating}
                id={each.ratingId}
              />
              {each.ratingId}
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className="clear-button" onClick={onClearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
