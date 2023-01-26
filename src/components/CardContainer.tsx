import { PropsWithChildren } from 'react'

export default function CardContainer({ children }: PropsWithChildren) {
  return <div className='grid grid-cols-1 gap-2'>{children}</div>
}
