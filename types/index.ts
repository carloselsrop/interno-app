// Navbar component Interface
export interface INavbarProps {
  isAuth: boolean
}

// Footer component Interface
export interface IFooterProps {
  isAuth: boolean
}

// Button component Interface
export interface IButton {
  children: React.ReactNode
  action: () => void
  className?: string
  disabled: boolean
}

// Get Started Card component Interface
export interface IGetStartedCardProps {
  title: string
  subtitle: string
  href: string
  image: string
}

// Image Call Card component Interface
export interface IImageCallCardProps {}

// Read More List component Interface
export interface IReadMoreListProps {
  list: IReadMore[]
}
export interface IReadMore {
  id: number
  title: string
  subtitle: string
  read_more_link: string
}

// Main Layout Interface
export interface IMainLayoutProps {
  children: React.ReactNode
}
