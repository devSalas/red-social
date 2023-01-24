
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Chat from './page/Chat'
import Home from './page/home/index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const queryClient = new QueryClient()

const App = () => {

  
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools/>

        <Router>

          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Chat />} />
          </Routes>

        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App