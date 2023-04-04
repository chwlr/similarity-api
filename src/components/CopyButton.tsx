'use client'
import { ButtonHTMLAttributes, FC } from 'react'
import Button from '@/ui/Button'
import { toast } from './ui/Toast'

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string
}

const CopyButton: FC<CopyButtonProps> = ({
  valueToCopy,
  className,
  ...props
}) => {
  return <Button {...props} type='button' onClick={() => {
    navigator.clipboard.writeText(valueToCopy)

    toast({
      title: 'Copied!',
      message: 'API key copied to clipboard',
      type: 'success'
    })
  }}
  variant='ghost'
  className={className}
  />

}

export default CopyButton