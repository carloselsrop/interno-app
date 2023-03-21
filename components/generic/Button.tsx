import { IButton } from '../../types'

const Button: React.FC<IButton> = ({
  children,
  action,
  className,
  disabled,
}) => {
  return (
    <button disabled={disabled} className={`${className}`} onClick={action}>
      {children}
    </button>
  )
}

export default Button
