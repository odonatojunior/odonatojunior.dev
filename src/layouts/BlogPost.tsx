import Tag from '@/components/Tag'

export default function BlogPost() {
  return (
    <>
      <article className='relative z-20'>
        <header className='py-8 '>
          <h2 className='mb-2 text-3xl font-bold leading-tight text-white'>
            O LinkedIn é uma bosta e posso te provar o porquê
          </h2>
          <h3 className='mb-4 uppercase tracking-widest text-gray-400 '>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium, reiciendis!
          </h3>
          <div className='flex gap-2'>
            <Tag name='NextJS' />
          </div>
          <p className='mt-4 text-gray-500'>12/12/2022</p>
        </header>
        <div>
          <p className='leading-relaxed text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
            consectetur amet egestas amet eleifend suspendisse convallis massa.
            Ac consequat volutpat quis vitae amet quam quis volutpat, dolor.
            Dignissim morbi quisque purus sed praesent dolor convallis. Sed
            consequat nunc, purus vitae.
          </p>
          <h4 className='mt-4 mb-2 text-lg font-bold text-white'>Subtítulo</h4>
          <p className='leading-relaxed text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
            consectetur amet egestas amet eleifend suspendisse convallis massa.
            Ac consequat volutpat quis vitae amet quam quis volutpat, dolor.
            Dignissim morbi quisque purus sed praesent dolor convallis. Sed
            consequat nunc, purus vitae.
          </p>
          <h4 className='mt-4 mb-2 text-lg font-bold text-white'>Subtítulo</h4>
          <p className='leading-relaxed text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
            consectetur amet egestas amet eleifend suspendisse convallis massa.
            Ac consequat volutpat quis vitae amet quam quis volutpat, dolor.
            Dignissim morbi quisque purus sed praesent dolor convallis. Sed
            consequat nunc, purus vitae.
          </p>
          <h4 className='mt-4 mb-2 text-lg font-bold text-white'>Subtítulo</h4>
          <p className='leading-relaxed text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
            consectetur amet egestas amet eleifend suspendisse convallis massa.
            Ac consequat volutpat quis vitae amet quam quis volutpat, dolor.
            Dignissim morbi quisque purus sed praesent dolor convallis. Sed
            consequat nunc, purus vitae.
          </p>
          <blockquote className=' my-4 border-l-4 border-l-primary p-4 italic tracking-wide text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            enim?
          </blockquote>
        </div>
      </article>
    </>
  )
}
