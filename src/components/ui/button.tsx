import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ className = "", children, ...props }) => {
  return (
    <button
      {...props}
      className={"inline-flex items-center justify-center rounded-md px-4 py-2 " + className}
    >
      {children}
    </button>
  )
}
