import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {clearFilters} = props

  const renderRatingsList = () => {
    const {ratingsList} = props
    return ratingsList.map(each => {
      const {changeRatingId} = props
      const onclickRatingItem = () => changeRatingId(each.ratingId)
      return (
        <li
          className="rating-item"
          key={each.ratingId}
          onClick={onclickRatingItem}
        >
          <img
            className="rating-image"
            src={each.imageUrl}
            alt={`rating ${each.ratingId}`}
          />
          & up
        </li>
      )
    })
  }

  const renderRatingFiltersList = () => (
    <>
      <h1 className="category-heading">Ratings</h1>
      <ul className="category-list-container">{renderRatingsList()}</ul>
    </>
  )

  const renderCategoriesList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(each => {
      const {changeCategoryId} = props
      const onclickCategoryItem = () => changeCategoryId(each.categoryId)
      return (
        <li
          className="category-list-item"
          key={each.categoryId}
          onClick={onclickCategoryItem}
        >
          <p>{each.name}</p>
        </li>
      )
    })
  }

  const renderCategoryFiltersList = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="category-list-container">{renderCategoriesList()}</ul>
    </>
  )

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const enterSearchResults = event => {
    const {enterKey} = props
    if (event.key === 'Enter') {
      enterKey()
    }
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-input-container">
        <input
          className="search-input"
          placeholder="Search"
          type="search"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={enterSearchResults}
        />
        <BsSearch />
      </div>
    )
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCategoryFiltersList()}
      {renderRatingFiltersList()}
      <button onClick={clearFilters} className="filters-button" type="button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
