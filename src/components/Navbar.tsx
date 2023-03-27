import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { buttonVariants } from '@/ui/Button'
import SignInButton from '@/components/SignInButton'
import SignOutButton from '@/components/SignOutButton'
import ThemeToggle from '@/components/ThemeToggle'
import { authOptios } from '@/lib/auth'


const Navbar = async () => {
  const session = await getServerSession(authOptios)

  return <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between'>
    <div className='container max-w-7xl max-auto w-full flex justify-between items-center'>
      <Link href='/' className={buttonVariants({variant: 'link'})}>
        Text Similarity API 1.0
      </Link>

      <div className='md:hidden'>
        <ThemeToggle />
      </div>

      <div className='hidden md:flex gap-4'>
        <ThemeToggle />
        <Link href='/documentation' className={buttonVariants({variant: 'ghost'})}>
          Documentation
        </Link>
      </div>

      {session ? (
        <>
          <Link className={buttonVariants({variant: 'ghost'})} href='/dashboard'>
            Dashboard
          </Link>
          <SignOutButton />
        </>
      ) : <SignInButton />}

    </div>
  </div>
}

export default Navbar