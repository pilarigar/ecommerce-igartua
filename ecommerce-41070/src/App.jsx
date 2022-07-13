
import Menu from './components/NavBar/NavBar'

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ItemsListContainer from './Containers/ItemsListContainer/ItemsListContainer'



function App() {
  return (
    <div className="App">
    
    <Menu/>

    <ItemsListContainer greeting={"Bienvenidxs"}/>
        
    </div>
  )
}

export default App

  