import { useAuth0 } from '@auth0/auth0-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { useStoreHost } from '../zustand/store'
import Chat from './page/Chat'

const queryClient = new QueryClient()

const App = () => {

  const {user,isLoading,isAuthenticated} = useAuth0()
  if(!isAuthenticated) return(<div>validando datos</div> ) 
  
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <Chat user={user}/>
        {/* <h2>hola</h2> */}
      </QueryClientProvider>

    </div>
  )
}

export default App