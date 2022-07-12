import { Provider } from 'react-redux';
import { store, persistor } from '../redux/app/store';
import { PersistGate } from 'redux-persist/lib/integration/react';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
