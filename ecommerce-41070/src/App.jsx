
import Menu from './components/NavBar/NavBar'
import ItemsListContainer from './Containers/ItemsListContainer/ItemsListContainer'

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'




function App() {
  return (
    <div className="App">
    
    <Menu/>

    <ItemsListContainer greeting={"Bienvenidxs"}/>
        
    </div>
  )
}

export default App

  