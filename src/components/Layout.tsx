import Footer from './Footer'
import Navbar from './Navbar'

type LayoutProps = {
  className?: string
}

export default function Layout({
  children,
  className
}: React.PropsWithChildren<LayoutProps>) {
  return (
    <main className={`min-h-screen bg-black ${className}`}>
      <Navbar />
      <div className='fixed top-0 left-0 z-0 h-64 w-64 rounded-full bg-primary opacity-10 blur-3xl'></div>
      <section className='container z-20 mx-auto px-6'>{children}</section>
      <div className='fixed bottom-0 right-0 z-0 h-64 w-64 rounded-full bg-secondary opacity-10 blur-3xl'></div>
      <Footer />
    </main>
  )
}
