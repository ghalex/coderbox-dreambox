import React, { PropTypes } from 'react'
import Autosuggest from 'react-autosuggest'

class AutoComplete extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      selected: null,
      suggestions: []
    }
  }

  componentWillMount () {
    if (this.props.value) {
      this.setState({ value: this.props.value.name || '' })
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.value) {
      this.setState({ value: nextProps.value.name || '' })
    }
  }

  renderSuggestion (suggestion) {
    return (
      <div>
        {suggestion.name}
      </div>
    )
  }

  fetchSuggestions (value) {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength === 0 ? [] : this.props.suggestions.filter(c => {
      var m = c.name.toLowerCase().match(inputValue)
      return m && m.length > 0
    }).slice(0, 4)
  }

  firstSuggestion (value) {
    const inputValue = value.trim()
    const inputLength = inputValue.length

    return (inputLength === 0 ? [] : this.props.suggestions.filter(s => {
      return s.name === inputValue
    })).shift()
  }

  onSuggestion (event, { suggestion }) {
    this.setState({ suggestion: suggestion })
    if (this.props.onSuggestion) {
      this.props.onSuggestion(suggestion)
    }
  }

  onChange (event, { newValue }) {
    this.setState({ value: newValue })

    if (this.props.onChange) {
      this.props.onChange(this.firstSuggestion(newValue) || { name: newValue })
    }

    if (this.props.onClear && newValue === '') {
      this.props.onClear()
    }
  }

  onKeyPress (event) {
    if (event.key === 'Enter') {
    }
  }

  onSuggestionsFetchRequested ({ value }) {
    this.setState({ suggestions: this.fetchSuggestions(value) })
  }

  onSuggestionsClearRequested () {
    this.setState({ suggestions: [] })
  }

  render () {
    const { suggestions } = this.state
    const inputProps = {
      placeholder: this.props.placeholder,
      value: this.state.value,
      onChange: (ev, o) => this.onChange(ev, o),
      onKeyPress: (ev) => this.onKeyPress(ev)
    }

    return (
      <Autosuggest
        suggestions={suggestions}
        highlightFirstSuggestion
        getSuggestionValue={(suggestion) => suggestion.name}
        renderSuggestion={this.props.renderSuggestion || this.renderSuggestion}
        onSuggestionSelected={(ev, o) => this.onSuggestion(ev, o)}
        onSuggestionsFetchRequested={(ev) => this.onSuggestionsFetchRequested(ev)}
        onSuggestionsClearRequested={() => this.onSuggestionsClearRequested()}
        shouldRenderSuggestions={(value) => value.trim().length > 1}
        inputProps={inputProps} />
    )
  }
}

AutoComplete.propTypes = {
  'value': PropTypes.object,
  'suggestions': PropTypes.array,
  'placeholder': PropTypes.string,
  'onChange': PropTypes.func,
  'renderSuggestion': PropTypes.func
}

AutoComplete.defaultProps = {
  'suggestions': [],
  'placeholder': ''
}

export default AutoComplete
