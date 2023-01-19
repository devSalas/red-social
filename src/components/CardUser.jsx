
const handleClick =(evt)=>{

}

const CardUser = ({user,dev,url}) => {

  return (

    <li onClick={handleClick} className='flex  items-center gap-3 border-[1px] p-4  sm:border-b-[2px] sm:border-zinc-900'>
      <img  className='w-12 h-12 rounded-full' src={url} alt="" />
      <span className=''>{user}</span>
      <span className='text-cyan-300'>{dev}</span>
    </li>
  )
}

export default CardUser