import { Header } from './components/Header'
import { BrowserRouter} from 'react-router-dom';
import { AppRoutes } from './components/AppRoutes'  

export const App = () => {

  return (
    <>
    <BrowserRouter>
      <Header />
        <AppRoutes />
    </BrowserRouter>
    </>
  )
}

export default App;
