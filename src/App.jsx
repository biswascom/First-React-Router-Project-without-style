import './App.css'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from './components/Header'

function App() {
  {/* Loading section */}
  const navigation = useNavigation();

  return (
    <div className="App">
      <Header></Header>
      {/* Loading section */}
      <div style={{fontSize: '100px'}}>{navigation.state === 'loading' ? 'Loading...' : ''}</div>
      <Outlet></Outlet>
    </div>
  )
}

export default App