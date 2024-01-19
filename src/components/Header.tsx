import React, { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ConnectModal,
  useCurrentAccount,
  useCurrentWallet,
  useWallets,
} from '@mysten/dapp-kit'
import '@mysten/dapp-kit/dist/index.css'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [open, setOpen] = useState(false)
  const currentAccount = useCurrentAccount()
  const wallet = useCurrentWallet()
  const pathname = usePathname()
  return (
    <nav
      className={clsx(
        'md:bg-transparent relative w-full h-12 px-4 py-8 md:px-8 lg:px-10 flex items-center justify-between',
        {
          'bg-[#2b2a2b]': toggle,
        },
      )}
    >
      <Link className='flex items-center gap-2 text-white' href='/'>
        <svg
          className='h-4 w-4'
          viewBox='0 0 512 512'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill='currentColor'
            stroke='currentColor'
            d='M253.924 31.56l-6.252 41.475c-40.904 1.6-81.38 16.64-114.233 45.137l-81.67-60.63 60.593 82.1c-28.1 33.614-42.45 74.828-43.054 116.206l-47.24 6.984 47.573 7.17c2.384 38.934 16.966 77.26 43.765 108.758l-61.635 83.51 83.33-61.864c32.178 27.257 71.444 41.798 111.19 43.647l7.63 50.635 7.473-50.55c.853-.03 1.707-.052 2.56-.093-.843-.038-1.683-.09-2.524-.14l16.193-109.53c6.984-2.27 13.52-5.526 19.445-9.61l44.186 24.788L316.32 305.6c3.976-5.716 7.175-12.006 9.463-18.72L485.78 262.83l-45.147-6.654c-.54-42.053-15.258-83.957-44.194-117.907l59.556-80.22h-.002l-80.392 59.333C342.312 88.88 301.33 74.08 260.045 72.96l-6.12-41.4zm17.605 74.522c43.267 0 86.536 16.507 119.548 49.52 28.136 28.136 44.273 63.723 48.428 100.41l-113.322-16.705c-2.254-6.995-5.493-13.544-9.565-19.483l24.636-43.424-43.223 24.522c-6.234-4.44-13.163-7.962-20.603-10.358l-12.47-84.343c2.19-.084 4.38-.138 6.57-.138zm-29.22 2.54l-12.412 82.34c-6.844 2.33-13.244 5.61-19.046 9.69l-42.748-24.254 24.107 42.975c-4.184 6.01-7.52 12.652-9.83 19.76l-78.146 11.553c5.06-34.793 20.974-68.312 47.746-95.084 25.55-25.55 57.246-41.206 90.33-46.98zM102.462 274.948l80.318 12.105c2.36 6.865 5.676 13.28 9.796 19.09l-24.826 43.76 43.963-24.942c5.514 3.763 11.558 6.803 17.988 9.012l16.325 108.306c-34.42-5.222-67.54-21.073-94.045-47.58-33.063-33.062-49.568-76.415-49.517-119.75z'
          />
        </svg>
        <h1 className='text-md pr-4'>Matrix</h1>
      </Link>
      <div
        className={clsx(
          'w-100vw absolute md:static p-4 -top-[200px] md:grow pl-6 md:pl-12 bg-[#2b2a2b] md:bg-transparent w-full md:w-auto left-0 flex items-center z-20',
          { 'top-full p-0': toggle },
        )}
      >
        <ul className='flex md:flex-row flex-col items-start p-2 gap-[2vw] text-sm'>
          <li>
            <Link
              href='/'
              className={clsx(
                'hover:text-white hover:bg-[#2b2a2b] px-4 py-1.5 rounded-md',
                { 'bg-[#2b2a2b] text-white': pathname == '/' },
              )}
            >
              Swap
            </Link>
          </li>
          <li>
            <Link
              href='/pool'
              className={clsx(
                'hover:text-white hover:bg-[#2b2a2b] px-4 py-1.5 rounded-md',
                { 'bg-[#2b2a2b] text-white': pathname == '/pool' },
              )}
            >
              Pool
            </Link>
          </li>
          <li>
            <Link
              href='/position'
              className={clsx(
                'hover:text-white hover:bg-[#2b2a2b] px-4 py-1.5 rounded-md',
                { 'bg-[#2b2a2b] text-white': pathname == '/position' },
              )}
            >
              Position
            </Link>
          </li>
        </ul>
      </div>

      <div className='flex items-center gap-2'>
        {!wallet.isConnected && (
          <button
            className='text-white bg-[#1d1e1f] hover:bg-[#2b2a2b] flex'
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='stroke-white w-4 h-4 mr-2'
              viewBox='0 0 512 512'
            >
              <rect
                x='48'
                y='144'
                width='416'
                height='288'
                rx='48'
                ry='48'
                fill='none'
                stroke='currentColor'
                strokeLinejoin='round'
                strokeWidth='32'
              />
              <path
                d='M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49'
                fill='none'
                stroke='currentColor'
                strokeLinejoin='round'
                strokeWidth='32'
              />
              <path d='M368 320a32 32 0 1132-32 32 32 0 01-32 32z' />
            </svg>
            {currentAccount
              ? currentAccount.address.slice(0, 4) +
                '...' +
                currentAccount.address.slice(-4)
              : 'Connect'}
          </button>
        )}
        <ConnectModal
          trigger={
            <button disabled={!!currentAccount}>
              {' '}
              {currentAccount ? 'Connected' : 'Connect'}
            </button>
          }
          open={open}
          onOpenChange={(isOpen) => setOpen(isOpen)}
        />
      </div>
    </nav>
  )
}

export default Header
