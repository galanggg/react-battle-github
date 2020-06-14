import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import api from '../../utils/api'
import SelectedLanguange from './SelectedLanguange'
import RepoGrid from './RepoGrid'

const Popular = () => {
  const [selectedLanguange, setselectedLanguange] = useState('All')
  const [repos, setRepos] = useState(null)

  const updateBahasa = async (lang) => {
    const response = await api.fetchPopularRepos(lang)
    setRepos(response)
    setselectedLanguange(lang)
  }
  useEffect(() => {
    const abort = new AbortController()
    updateBahasa(selectedLanguange)
    return () => {
      abort.abort()
    }
  }, [])

  console.log(repos)
  return (
    <div>
      <h1 className="main">Popular Repo By Category</h1>
      <SelectedLanguange
        selectedLanguange={selectedLanguange}
        onSelect={updateBahasa}
      />
      {!repos ? <p>Loading..</p> : <RepoGrid repos={repos} />}
    </div>
  )
}
export default React.memo(Popular)
