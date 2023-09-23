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
      className='w-[172px] h-[44px] text-[14px] text-[#FBF4F7] bg-[#D4608F] rounded-[40px]' 
      {...rest}
    >
      {children}
    </button>
  )
})

