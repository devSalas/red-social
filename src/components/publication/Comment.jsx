export default function Comment ({ user, date, text }) {
  return (
    <li className='flex p-2 gap-4'>
      <img className='w-10 h-10 rounded-full' src={user.picture} alt={user.name} />
      <div>
        <p className='font-semibold'>{user.name}</p>
        <p className='text-neutral-500 text-sm'>{date}</p>
        <p>{text}</p>
      </div>
    </li>
  )
}
