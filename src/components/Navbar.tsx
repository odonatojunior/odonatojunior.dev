import { HiMoon, HiMenu } from 'react-icons/hi'

export default function Navbar() {
  return (
    <nav className='relative z-50 bg-white/10 text-white'>
      <div className='container z-20 mx-auto flex justify-between px-6 py-2'>
        <h2>~/</h2>
        <div className='flex items-center justify-center gap-4'>
          <HiMoon className='h-5 w-5' />
          <HiMenu className='h-5 w-5' />
        </div>
      </div>
    </nav>
  )
}
