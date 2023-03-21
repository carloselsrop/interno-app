import Link from 'next/link'
import Image from 'next/image'
import HomeLogoIcon from '../../public/icons/interno-logo.svg'

const HomeLink: React.FC = () => {
  return (
    <Link className='flex items-center space-x-2' href={`/`}>
      <Image
        src={HomeLogoIcon}
        width={100}
        height={100}
        className='w-6 h-6'
        alt='home_logo_icon'
      />
      <div className='font-heading text-3xl text-primary-2'>Interno</div>
    </Link>
  )
}

export default HomeLink
