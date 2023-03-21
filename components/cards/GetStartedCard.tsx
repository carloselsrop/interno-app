import Link from 'next/link'
import { IGetStartedCardProps } from '../../types'

const GetStartedCard: React.FC<IGetStartedCardProps> = ({
  title,
  subtitle,
  image,
  href,
}) => {
  return (
    <div
      className='w-full h-96 flex justify-start items-center bg-cover bg-center rounded-3xl shadow-lg boder-b'
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='w-full sm:w-9/12 md:w-8/12 lg:w-6/12 xl:w-5/12 px-4 sm:px-6 lg:px-12 space-y-4'>
        <div className='font-heading text-primary-2 text-4xl font-semibold'>
          {title}
        </div>
        <div className='font-body text-primary-2'>{subtitle}</div>
        <Link
          className='space-x-2 bg-primary-2 rounded-lg flex justify-center items-center py-3 sm:w-5/12'
          href={href}
        >
          <div className='text-primary-3 font-body text-sm font-medium'>
            Get Started
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='w-5 h-5 text-primary-1'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default GetStartedCard
