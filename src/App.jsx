
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import Chat from './page/Chat'

const queryClient = new QueryClient()

const App = () => {

  
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <Chat />
      {/* <ReactQueryDevtools/> */}
      </QueryClientProvider>

    </div>
  )
}

export default App