
import PagesRoutes from "./config/PagesRoutes"
import { Provider } from "react-redux"
import Store from "./slice/Store"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
    
    
      <PagesRoutes/>


   
      <ToastContainer/>
    </div>

  )
}

export default App