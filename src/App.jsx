
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Chat from './page/Chat'
import Home from './page/home/index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';


const queryClient = new QueryClient()

const App = () => {
 


  return (
    <div className='bg-black/90'>
      <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools/>
        <Router>

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>

        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App