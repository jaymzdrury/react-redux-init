import {useSyncExternalStore} from 'react'
import store from '../redux/createStore'

export const useStore = (selector = (state: any) => state) => 
  useSyncExternalStore(store.subscribe, () => selector(store.getState()))