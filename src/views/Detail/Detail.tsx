import { BannerDetail, CastList, Navbar } from 'components'
import { CAST } from 'examples'
import { useGet } from 'hooks/useRequest'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface Filter {
  api_key: string
  language: string
}

type Params = {
  type: any
  id: any
}

const Detail: React.FC = () => {
  const params = useParams<Params>() 
  const [detailData, getDetailData] = useGet()
  const [castData, getCastData] = useGet()

  const [paramsFilter, setParamsFilter] = useState<Filter>({ api_key: '03aedb9aa307e36112be8e8b6d70ed4a', language: 'en-US' })


  useEffect(() => {
    if (params) {
      getDetail(params.type, params.id)
      getCast(params.type, params.id)
    }
  }, [params, paramsFilter])

  const getDetail = (type: any, id: any) => {
    getDetailData.getRequest(`/${type}/${id}`, paramsFilter, {})
  }

  const getCast = (type: any, id: any) => {
    getCastData.getRequest(`/${type}/${id}/credits`, paramsFilter, {})
  }

  return (
    <>
      {detailData.isLoading ? 'Loading........' : 
        <div style={{ background: '#1E2833'}}>
          <Navbar className='active' />
          <BannerDetail data={detailData.data} />
          {castData.data ? <CastList data={castData.data} /> : '' }
        </div>
      }
    </>
  )
}

export default Detail