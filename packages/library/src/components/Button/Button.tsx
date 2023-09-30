import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import '../../styles/main.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'large' | 'medium' | 'small'
  primary?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, size = 'medium', primary = true, className, disabled, ...rest }: ButtonProps, ref
) {
  const buttonSize = {
    large: 'w-[335px] h-[56px] text-[16px]',
    medium: 'w-[172px] h-[44px] text-[14px]',
    small: 'w-[145px] h-[40px] text-[12px]'
  }
  const disabledStyle = 'bg-[#F9EAF2] text-[#A1929A]'
  const buttonClassName = twMerge(`${buttonSize[size]} font-semibold text-[#FBF4F7] rounded-[40px] ${primary ? 'bg-[#D4608F]': 'bg-[#892B49]'} ${disabled && disabledStyle}`, className) 

  return (
    <button 
      ref={ref} 
      className={buttonClassName} 
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
})


