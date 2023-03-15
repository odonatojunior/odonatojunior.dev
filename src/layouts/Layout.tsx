import Footer from '@/components/Footer'
import Navbar from '@/components/Nav/Navbar'
import Gradient from '@/components/textures/gradient.svg'

type LayoutProps = {
  className?: string
}

export default function Layout({
  children,
  className
}: React.PropsWithChildren<LayoutProps>) {
  return (
    <main className={`min-h-screen overflow-hidden bg-black ${className}`}>
      <Navbar />
      <section className='container z-20 mx-auto mt-16 max-w-2xl px-6'>
        {children}
      </section>
      <Footer />
      <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 object-fill opacity-25'>
        <Gradient />
      </div>
    </main>
  )
}
