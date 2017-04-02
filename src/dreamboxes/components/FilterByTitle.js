import React, { PropTypes } from 'react'
import Autocomplte from 'widgets/autocomplete'

const FilterByTitle = ({ titles, onChange, onClear }) => {
  return (
    <div className='filter-bytitle'>
      <label>Filter by <b>Job Title</b>:</label>
      <Autocomplte suggestions={titles} onSuggestion={onChange} onClear={onClear} />
    </div>
  )
}

FilterByTitle.propTypes = {
  'titles': PropTypes.array,
  'onChange': PropTypes.func
}

FilterByTitle.defaultProps = {
  'titles': []
}

export default FilterByTitle
