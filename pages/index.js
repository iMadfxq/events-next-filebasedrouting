import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { EventsList } from '../components/EventsList'
import { getFeaturedEvents } from '../dummy-data'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const featuredEvents = getFeaturedEvents()
  return (
    <main style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
      <EventsList events={featuredEvents} />
    </main>
  )
}
