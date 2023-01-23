import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:4000',

});

export const getChat= (async(chatId)=>{ 
  const message=  await instance.post('/chat',{chatId})
  return message
})
export const getAmigos= (async()=>{ 
  const amigos=  await instance.get('/amigos')
  return amigos.data
})
export const getOneAmigo= async(friendId)=>{ 
  const amigo=  await instance.post('/getOneFriend',{friendId})
  return amigo.data


}

export const  getUser = async(email)=>{

  const user = await instance.post(`/user`,{email})
  return user.data[0]
}