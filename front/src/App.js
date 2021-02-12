import {Switch, Route} from 'react-router-dom'
import {lazy, Suspense} from 'react'


import loading from './img/icon/loading.png'

import ViewHome from './pages/home'
import ViewJogos from './pages/jogos'
const LazyHeader = lazy(()=> import('./components/header'))
const LazyMain = lazy(()=> import('./components/main'))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<img src={loading} alt='loading' />}>
          <LazyHeader />
        </Suspense>
        <Suspense fallback={<img src={loading} alt="loading" />}>
          <LazyMain>
            <Switch>
              <Route path="/home" component={ViewHome} />
              <Route path="/jogos" component={ViewJogos} />
            </Switch>
          </LazyMain>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
