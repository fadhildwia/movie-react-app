import { actionType, alertState } from 'config/state';
import { alertReducer } from 'helpers/dataReducer';
import React, { useContext, useReducer, useState } from 'react'
import Reducer from 'utils/reducer';

const defaultResponse = {
  isLoading: true, page: 1, hasMore: false, list: []
}

type Response = {
  isLoading: boolean,
  page: number,
  hasMore: boolean,
  list: any[],
}
interface AppContextInterface {
  alert: any
  openAlert: (e: any) => void
  closeAlert: (e: any) => void
  qrResult: any
  setQRResult: (e: any) => void
  isModalServerErrorShow: boolean
  closeModalError: () => void
  openModalError: () => void

  setFCMToken: (e: string | undefined) => void
  fcmToken: string | undefined

  setDataOutletServiceCurrent: (e: any) => void
  dataOutletServiceCurrent: Response
  setDataOutletServiceHistory: (e: any) => void
  dataOutletServiceHistory: Response

  setDataHomeServiceCurrent: (e: any) => void
  dataHomeServiceCurrent: Response
  setDataHomeServiceQueue: (e: any) => void
  dataHomeServiceQueue: Response

  onRefresh: (e: any) => void
  typeRefresh: any
}

export const AppContext = React.createContext<AppContextInterface>({
  alert: null,
  openAlert: (e: any) => {},
  closeAlert: (e: any) => {},
  qrResult: null,
  setQRResult: (e: any) => {},
  isModalServerErrorShow: false,
  closeModalError: () => {},
  openModalError: () => {},

  setFCMToken: (e: string | undefined) => {},
  fcmToken: undefined,

  setDataOutletServiceCurrent: (e: any) => {},
  dataOutletServiceCurrent: defaultResponse,
  setDataOutletServiceHistory: (e: any) => {},
  dataOutletServiceHistory: defaultResponse,

  setDataHomeServiceCurrent: (e: any) => {},
  dataHomeServiceCurrent: defaultResponse,
  setDataHomeServiceQueue: (e: any) => {},
  dataHomeServiceQueue: defaultResponse,

  onRefresh: (e: any) => {},
  typeRefresh: null
})


export const AppProvider: React.FC = ({children}) => {
  const [alert, dispatchAlert] = useReducer(alertReducer, alertState)
  const [qrResult, setQRResult] = useState(null)
  const [isModalServerErrorShow, setModalServerErrorShow] = useState(false)

  const [fcmToken, setFCMToken] = useState<string|undefined>(undefined)
  const [dataOutletServiceCurrent, setDataOutletServiceCurrent] = useState(defaultResponse)
  const [dataOutletServiceHistory, setDataOutletServiceHistory] = useState(defaultResponse)

  const [dataHomeServiceCurrent, setDataHomeServiceCurrent] = useState(defaultResponse)
  const [dataHomeServiceQueue, setDataHomeServiceQueue] = useState(defaultResponse)

  const [typeRefresh, onRefresh] = useState(null)

  const openAlert = (action: any) => {
    return new Reducer(alert, dispatchAlert).dispatch({ ...action, type: actionType.OPEN })
  }

  const closeAlert = (a: any) => {
    if (typeof alert.callback === 'function') {
      alert.callback({ isConfirm: a.isConfirm })
    }
    dispatchAlert({ type: actionType.CLOSE })
  }

  const closeModalError = () => {
    setModalServerErrorShow(false)
  }

  const openModalError = () => {
    setModalServerErrorShow(true)
  }

  return (
    <AppContext.Provider
      value={{
        alert,
        openAlert,
        closeAlert,
        qrResult,
        setQRResult,
        isModalServerErrorShow,
        closeModalError,
        openModalError,
        setFCMToken,
        fcmToken,
        setDataOutletServiceCurrent,
        dataOutletServiceCurrent,
        setDataOutletServiceHistory,
        dataOutletServiceHistory,
        setDataHomeServiceCurrent,
        dataHomeServiceCurrent,
        setDataHomeServiceQueue,
        dataHomeServiceQueue,
        onRefresh,
        typeRefresh
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
};
