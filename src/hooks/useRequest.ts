import { request } from 'config/request'
import { actionType, initState } from 'config/state'
import { authorization } from 'helpers/auth'
import { requestReducer } from 'helpers/dataReducer'
import { useCallback, useReducer } from 'react'
import { useHistory } from 'react-router'
import { LocalStorage } from 'utils'
import { useGlobalContext } from './context'

export const useRequest = (init = {}) => {
  const storage = new LocalStorage()
  const history = useHistory()
  const [state, dispatch] = useReducer(requestReducer, { ...initState, ...init });
  const { openModalError } = useGlobalContext()


  const getRequest = useCallback((url: string, config = {}) => {
    authorization(config);

    const req = { ...config, url }

    dispatch({ type: actionType.LOADING })
    return request(req)
      .then((res: any) => {
        if (res.data.maintenance) {
          history.push('/maintenance', { data: res.data.data_maintenance })
          return
        }
        
        dispatch({ type: actionType.SUCCESS, data: res.data })
        return res
      }).catch((err: any) => {
        const { status, data } = err.response
        const errorMessage = data.message || err.message || 'unknown'

        if (status === actionType.UNAUTHORIZED) {
          storage.clear()
          history.push('/')
          window.location.reload();
        }

        if (status === actionType.INTERNAL_SERVER_ERROR) {
          openModalError()
        }

        dispatch({ type: status || actionType.ERROR, error: errorMessage })
      })
  }, [])

  return [state, { getRequest }]
}

export const useGet = (init?: any) => {
  const [state, event] = useRequest(init)

  const getRequest = (url: string, params: any, config = {}) => event.getRequest(url, { ...config, params, method: "get" })

  return [state, { getRequest }]
}

export const usePost = (init?: any) => {
  const [state, event] = useRequest(init)

  const getRequest = (url: string, data = {}, config = {}) => event.getRequest(url, { ...config, data, method: "post" })

  return [state, { getRequest }]
}

export const usePut = (init?: any) => {
  const [state, event] = usePost(init)

  const getRequest = (url: string, data: any = {}, config = {}) => {
    data['_method'] = 'PUT'
    return event.getRequest(url, data, config)
  }

  return [state, { getRequest }]
}

export const usePatch = (init?: any) => {
  const [state, event] = usePost(init)

  const getRequest = (url: string, data: any = {}, config = {}) => {
    data['_method'] = 'PATCH'
    return event.getRequest(url, data, config)
  }

  return [state, { getRequest }]
}

export const useDelete = (init?: any) => {
  const [state, event] = usePost(init)

  const getRequest = (url: string, data:any = {}, config = {}) => {
    data['_method'] = 'DELETE'
    return event.getRequest(url, data, config)
  }

  return [state, { getRequest }]
}

export default useRequest
