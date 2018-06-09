import { createStore } from 'redux';

import reducer from './reducers';
import { getPreloadedState, saveState } from './utils';

const store = createStore(
  reducer,
  getPreloadedState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
