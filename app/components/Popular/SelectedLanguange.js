import React from 'react'

const SelectedLanguange = (props) => {
  var bahasa = ['All', 'Javascript', 'Python', 'Ruby', 'Java', 'CSS']
  return (
    <ul className="bahasa">
      {bahasa.map((lang) => {
        return (
          <li
            key={lang}
            onClick={props.onSelect.bind(null, lang)}
            style={
              lang === props.selectedLanguange ? { color: '#d0021b' } : null
            }
          >
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

export default SelectedLanguange
