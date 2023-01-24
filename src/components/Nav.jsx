import { Link } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className='fixed bottom-0 w-full bg-white'>
      <ul className='flex justify-evenly border'>
        <Link href='/home'>
          <li className='flex flex-col items-center gap-2 group p-2 cursor-pointer'>
            <svg className='fill-neutral-300 w-8 h-8 group-hover:fill-yellow-300 transition-all' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path d='M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z' /></svg>
            <p>Home</p>
          </li>
        </Link>
        <Link href='/home'>
          <li className='flex flex-col items-center gap-2 group p-2 cursor-pointer'>
            <svg className='fill-neutral-300 w-8 h-8 group-hover:fill-yellow-300 transition-all' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z' /></svg>
            <p>Explore</p>
          </li>
        </Link>
        <Link href='/home'>
          <li className='flex flex-col items-center gap-2 group p-2 cursor-pointer'>
            <svg className='fill-neutral-300 w-8 h-8 group-hover:fill-yellow-300 transition-all' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z' /></svg>
            <p>Create</p>
          </li>
        </Link>
        <Link href='/home'>
          <li className='flex flex-col items-center gap-2 group p-2 cursor-pointer'>
            <svg className='fill-neutral-300 w-8 h-8 group-hover:fill-yellow-300 transition-all' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z' /></svg>
            <p>Activity</p>
          </li>
        </Link>
        <li className='flex flex-col items-center gap-2 group p-2 cursor-pointer'>
          <svg className='fill-neutral-300 w-8 h-8 group-hover:fill-yellow-300 transition-all' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' /></svg>
          <p>Menu</p>
        </li>
      </ul>
    </nav>
  )
}
