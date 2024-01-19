import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useCurrentAccount } from '@mysten/dapp-kit'
import React from 'react'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header />
    </div>
  )
}
