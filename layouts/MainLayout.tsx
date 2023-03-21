import Footer from '../components/generic/Footer'
import Navbar from '../components/generic/Navbar'
import { IMainLayoutProps } from '../types'

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-11/12 md:w-10/12 xl:w-9/12'>
        <Navbar isAuth={false} />
        <div className='my-4'>{children}</div>
        <Footer isAuth={false} />
      </div>
    </div>
  )
}

export default MainLayout
