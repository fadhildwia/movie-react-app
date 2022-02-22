import React, { useEffect, useState } from 'react'
import { Carausel, List, Navbar } from 'components'
import { EXAMPLE, LIST } from 'examples'
import { useHistory } from 'react-router-dom'
import { useGet } from 'hooks/useRequest'
import { URL } from 'config/url'

interface Filter {
  api_key: string
  language: string
  page?: number
}

const MOVIE_SELECT = [
  { value: '/movie/now_playing', name: 'Now Playing' },
  { value: '/movie/top_rated', name: 'Top Rated' },
  { value: '/movie/upcoming', name: 'Upcoming' }
]

const TV_SELECT = [
  { value: '/tv/popular', name: 'Popular' },
  { value: '/tv/airing_today', name: 'Airing Today' },
  { value: '/tv/on_the_air', name: 'On The Air' },
  { value: '/tv/top_rated', name: 'Top Rated' }
]

const Home: React.FC = () => {
  const history = useHistory()
  const [listPopular, getListPopular] = useGet()
  const [listMovie, getListMovie] = useGet()
  const [listTv, getListTv] = useGet()

  const [params, setParams] = useState<Filter>({ api_key: '03aedb9aa307e36112be8e8b6d70ed4a', language: 'en-US' })
  const [movieSelect, setMovieSelect] = useState<string>('/movie/now_playing')
  const [tvSelect, setTvSelect] = useState<string>('/tv/popular')

  useEffect(() => {
    getListPopular.getRequest(URL.MOVIE_POPULAR, params, {})
  }, []) 
  
  useEffect(() => {
    getListMovie.getRequest(movieSelect, {...params, page: 1}, {})
  }, [movieSelect])

  useEffect(() => {
    getListTv.getRequest(tvSelect, {...params, page: 1}, {})
  }, [tvSelect])

  const handleSelect = (e: any, type: string) => {
    const { value } = e.target 

    switch (type) {
      case 'tv':
        return setTvSelect(value)
      default:
        return setMovieSelect(value)
    }
  }

  const handleClickWatch = (id: any, type: string) => {
    history.push(`/detail/${type}/${id}`)
  }

  return (
    <>
      {listPopular.isLoading ? 'Loading........' :
        <div style={{ background: '#1E2833'}}>
          <Navbar />
          <Carausel data={listPopular.data.results} />
          <List title={'Whats Popular'} data={MOVIE_SELECT} list={listMovie?.data?.results} onSelect={(e) => handleSelect(e, 'movie')} onWatch={(id) => handleClickWatch(id, 'movie')} />
          <List title={'TV'} data={TV_SELECT} list={listTv?.data?.results} onSelect={(e) => handleSelect(e, 'tv')} onWatch={(id) => handleClickWatch(id, 'tv')} />
        </div>
      }
    </>
  )
}

export default Home