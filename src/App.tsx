import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { isLogin } from 'utils'

type Props = {
  basename: string
}

const HomePage = lazy(() => import('views/Home/Home'))
const DetailPage = lazy(() => import('views/Detail/Detail'))

const PublicRoute = ({ component: Component, ...rest }: any) => {
	return (
    <Route {...rest} render={props => (
      isLogin() 
      ? <Redirect to={{ pathname: '/home' }} />
      : <div className='content' id='content'>
          <Component {...props} />
        </div>
    )}/>
	)
}

const PrivateRoute = ({ component: Component, ...rest }: any) => {
	return (
    <Route {...rest} render={(props) => 
      isLogin() 
        ? <div className='content' id='content'>
            <Component {...props} />
          </div>
        : <Redirect to={{ pathname: '/' }} />}
    />
  )
}

const App: React.FC<Props> = ({ basename }) => {
  return (
    <Suspense fallback={() => "Loading..."}>
      <BrowserRouter basename={basename}>
        <Switch>
          <PublicRoute exact path='/' component={HomePage} />
          <PublicRoute exact path='/detail/:type/:id' component={DetailPage} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App
