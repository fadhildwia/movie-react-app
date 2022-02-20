import React, { useEffect } from 'react'
import { Carausel, List, Navbar } from 'components'
import { EXAMPLE, LIST } from 'examples'
import { useHistory } from 'react-router-dom'
import { useGet } from 'hooks/useRequest'
import { URL } from 'config/url'

const Home: React.FC = () => {
  const history = useHistory()
  const [listPopular, getListPopular] = useGet()

  useEffect(() => {
    getListPopular.getRequest(URL.MOVIE_POPULAR, { api_key: '03aedb9aa307e36112be8e8b6d70ed4a', language: 'en-US', page: 1 }, {})
    console.log(listPopular)
  }, [])

  const handleClickWatch = () => {
    history.push('/detail')
  }

  return (
    <>
      {listPopular.isLoading ? 'Loading...' :
        <div style={{ background: '#1E2833'}}>
          <Navbar />
          <Carausel data={listPopular.data.results} />
          <List data={LIST} onWatch={handleClickWatch} />
        </div>
      }
    </>
  )
}

export default Home

// axios.get('https://api.themoviedb.org/3/movie/popular', {params: { api_key: '03aedb9aa307e36112be8e8b6d70ed4a', language: 'en-US', page: 1 }})
//     .then((res) => {
//       console.log(res)
//     })