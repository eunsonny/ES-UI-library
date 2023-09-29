import React, { InputHTMLAttributes, forwardRef } from "react"
import { twMerge } from "tailwind-merge"
import './Input.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({
  className, disabled, ...rest
}: InputProps, ref) {
  const disabledStyle = `bg-[#D4CDD1] text-[#A1929A]`
  const inputClassName = twMerge(`h-[48px] rounded-[100px] text-[16px] leading-[26px] px-[14px] py-[16px] text-[#423C3F] font-normal placeholder:text-[#897981] border-[#E9E5E7] border-solid border ${disabled && disabledStyle}`, className)
    
  
  return <input ref={ref} className={inputClassName} disabled={disabled} {...rest} />
})