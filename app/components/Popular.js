import React from 'react'

class Popular extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedLanguage: 'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }

  updateLanguage (lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang
      }
      console.log(lang)
    })
  }

  render () {
    let languages = ['All', 'JavaScript', 'Java', 'CSS', 'Python']
    return (
      <ul className='languages'>
        {languages.map((lang) => {
          return (
            <li
              onClick={this.updateLanguage.bind(null, lang)}
              key={lang}>
              {lang}
            </li>
          )
        }, this)}
      </ul>
    )
  }
}

export default Popular
