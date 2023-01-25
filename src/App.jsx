
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Chat from './page/Chat'
import Home from './page/home/index';
import Login from './page/login/index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const queryClient = new QueryClient()

const App = () => {

  
  return (
    <main>
      <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools/> */}

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/home' element={<Home />} />
        </Routes>
          
      </QueryClientProvider>
    </main>
  )
}

export default App