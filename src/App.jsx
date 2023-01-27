import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Chat from './page/Chat'
import Home from './page/home/index';
import Login from './page/login/index';
import Perfil from './page/perfil/index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const queryClient = new QueryClient()

const App = () => {

  
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools/> */}

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/chat' element={<Chat />} />
          {/* <Route path='/home' element={<Home />} /> */}
          <Route path='/perfil' element={<Perfil />} />
        </Routes>
          
      </QueryClientProvider>
    </Router>
  )
}

export default App