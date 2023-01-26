type TagProps = {
  name: string
}

export default function Tag({ name }: TagProps) {
  return (
    <div className='rounded-full bg-secondary py-1 px-2 text-xs text-white'>
      {name}
    </div>
  )
}
