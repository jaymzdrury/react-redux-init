import {useDispatch} from 'react-redux'
import {useStore} from './hooks/useStore'
import {Toggle} from './redux/types'
import {setSwitch} from './redux/actions'

function App() {
  const state = useStore((state: Toggle) => state.on)
  const dispatch = useDispatch()

  return (
    <div onClick={() => dispatch(setSwitch(state))}>{state.toString().toUpperCase()}</div>
  );
}
export default App;
