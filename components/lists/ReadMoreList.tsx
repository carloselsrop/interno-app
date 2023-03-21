import Link from 'next/link'
import { IReadMore, IReadMoreListProps } from '../../types'

const ReadMoreList: React.FC<IReadMoreListProps> = ({ list }) => {
  return (
    <div className='flex flex-col justify-center items-center space-y-12 md:flex-row md:space-y-0 md:justify-around md:items-center'>
      {list.map((item: IReadMore) => (
        <div
          key={item.id}
          className='flex flex-col items-center text-center text-sm w-full px-4 sm:w-8/12 lg:px-8 2xl:px-12'
        >
          <div className='font-medium font-heading text-lg text-primary-2 mb-1'>
            {item.title}
          </div>
          <div className='font-body text-primary-2 mb-4'>{item.subtitle}</div>
          <Link
            href={item.read_more_link}
            className='flex space-x-1 items-center text-xs font-semibold font-body'
          >
            <div>Read More</div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-4 h-4 text-primary-1'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
              />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ReadMoreList
