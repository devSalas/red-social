import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Chat from './page/Chat'
import Home from './page/home/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import PageError from './page/pageError';
import Loading from './components/Loading';
import Error from './page/404';


const queryClient = new QueryClient()

const App = () => {

  return (
    <div className='bg-black/90'>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Router>

          <Routes>
            <Route path='/' element={<Chat />} />
            <Route path='error' element={<PageError />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/loading' element={<Loading />} />
            <Route path='/*' element={<Error/>} />
          </Routes>

        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App