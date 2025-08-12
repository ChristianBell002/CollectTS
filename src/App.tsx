import { Header } from './components/Header'
import { BrowserRouter} from 'react-router-dom';
import { AppRoutes } from './components/AppRoutes'
import { Footer } from './components/Footer'; 
 

export const App = () => {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <main className="app-container">
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
