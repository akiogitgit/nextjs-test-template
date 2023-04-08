import { ReactNode } from 'react'

import './Button.css'

type Props = {
  children: ReactNode
  color: 'default' | 'primary' | 'danger'
  size: 'sm' | 'md' | 'lg'
  backgroundColor?: string
  onClick: () => void
}

const Button = ({
  children,
  color = 'default',
  size = 'md',
  backgroundColor,
  // aonClick = () => console.log('clickしました'),
  onClick,
}: Props) => {
  return (
    <button
      className={`${color} ${size}`}
      style={backgroundColor ? { background: backgroundColor } : {}}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
