import { useState } from 'react'
import { INavbarProps } from '../../types'
import Button from './Button'
import HomeLink from '../links/HomeLink'

const Navbar: React.FC<INavbarProps> = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <div className='flex justify-between items-center w-full py-4'>
      {/* Home Link */}
      <div>
        <HomeLink />
      </div>
      {/* Menu */}
      <div>
        <Button
          className='border-2 border-primary-2 rounded'
          action={() => setShowMenu(true)}
          disabled={false}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.8}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </Button>
      </div>
    </div>
  )
}

export default Navbar
