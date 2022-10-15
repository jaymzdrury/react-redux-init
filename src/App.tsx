import {useSelector, useDispatch} from 'react-redux'
import {Toggle} from './redux/types'
import {setSwitch} from './redux/actions'

function App() {
  const state = useSelector((state: Toggle) => state.on)
  const dispatch = useDispatch()

  return (
    <div onClick={() => dispatch(setSwitch(state))}>{state.toString().toUpperCase()}</div>
  );
}
export default App;
