import { memo, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';

import routes from './router';
import store from './store';
import ZAppHeader from './components/app-header';
import ZAppFooter from './components/app-footer';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ZAppPlayerBar from './pages/player/app-player-bar';
export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ZAppHeader />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>

        <ZAppFooter />
        <ZAppPlayerBar />
      </HashRouter>
    </Provider>
  );
});
