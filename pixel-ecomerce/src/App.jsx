//Componentes
import './App.css'
import NavBar from "./components/NavBar/NavBar"

//React Router Dom
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

// Importo las Pages, para poder definir sus rutas con Router
import Home from "./pages/Home"
import Products from "./pages/Products"
import ItemDetailContainer from "./pages/ItemDetailContainer"

const App = () => {
  
  return (
    
      <div>
        <Router> 
        {
        /* Navbar no se ve afectado por el camio de ruta, por que no esta dentro de Routes, ya que yo quiero 
        que este componente se pinte siempre, idependientemente de la pagina en la que me encuentre posado
        Primero debo definir las rutas para despues Linkearlas con Link*/
        }
        <NavBar/>
          <Routes>
              <Route path="/" element= {<Home/>} />
              <Route path="/Products" element= {<Products/>} />
              <Route path="/ItemDetailContainer/:id" element= {<ItemDetailContainer/>} />
          </Routes>
        </Router>
      </div>
    
  )
}

export default App
