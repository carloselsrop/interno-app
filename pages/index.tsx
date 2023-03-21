import type { NextPage } from 'next'
import MainLayout from '../layouts/MainLayout'
import GetStartedCard from '../components/cards/GetStartedCard'
import ReadMoreList from '../components/lists/ReadMoreList'
import { useState } from 'react'
import { IGetStartedCardProps, IReadMore } from '../types'

const Home: NextPage = () => {
  const [getStartedCard] = useState<IGetStartedCardProps>({
    title: 'Let Your Home Be Unique',
    subtitle:
      'There are many variations of the passages of lorem Ipsum from available, majority.',
    image:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    href: '/get-started',
  })
  const [homeReadMoreList] = useState<IReadMore[]>([
    {
      id: 1,
      title: 'Project Plan',
      subtitle:
        'There are many variations of the passages of lorem Ipsum from available, majority.',
      read_more_link: '/',
    },
    {
      id: 2,
      title: 'Interior Work',
      subtitle:
        'There are many variations of the passages of lorem Ipsum from available, majority.',
      read_more_link: '/',
    },
    {
      id: 3,
      title: 'Realization',
      subtitle:
        'There are many variations of the passages of lorem Ipsum from available, majority.',
      read_more_link: '/',
    },
  ])

  return (
    <>
      <MainLayout>
        <div className='space-y-12 md:space-y-16'>
          <GetStartedCard
            title={getStartedCard.title || ''}
            subtitle={getStartedCard.subtitle || ''}
            image={getStartedCard.image || ''}
            href={getStartedCard.href || ''}
          />
          <ReadMoreList list={homeReadMoreList || []} />
        </div>
      </MainLayout>
    </>
  )
}

export default Home
