const EmpiezaChatear = ({userData}) => {

  return (
    <div className='w-full h-full bg-zinc-900 text-white sm:grid place-content-center text-xl hidden'>
      <span>Vamos {userData.userFull}</span>
        <span className='text-center'>Empieza a chatear</span>
      <img className='w-32 m-auto' src="chat.png" alt="" />
    </div>
  )
}

export default EmpiezaChatear