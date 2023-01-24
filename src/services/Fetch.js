import axios from "axios";

const instance = axios.create({
  baseURL: 'https://red-social-back.onrender.com',

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

export const  getUser = async(id)=>{

  const user = await instance.post(`/user`,{id})
  return user.data[0]
}