import React, { InputHTMLAttributes, forwardRef } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({}: InputProps, ref) {
  return <input ref={ref}/>
})