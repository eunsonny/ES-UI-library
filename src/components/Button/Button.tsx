import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import './Button.css'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'large' | 'medium' | 'small'
  primary?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, size = 'medium', primary = true, ...rest }: ButtonProps, ref
) {
  return (
    <button 
      ref={ref} 
      className='w-[76px] h-[24px] bg-[red]' 
      // style={{ backgroundColor: 'pink'}} 
      {...rest}
    >
      {children}
    </button>
  )
})

