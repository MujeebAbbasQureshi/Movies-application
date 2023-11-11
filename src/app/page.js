'use client'
import Link from 'next/link'
import styles from './page.module.css'
import { useState } from 'react'


export default function Home() {
  return (
<>
<h1>Hello World</h1>
<h3>This takes you to google</h3>
<a href='http://www.google.com'>Google</a>
<br/>
<br/>
<Link href="/topmovies">Go to Top Movies</Link>
<br/>
<br/>
<Link href="/popularmovies">Go to Popular Movies</Link>
<br/>
<br/>
<Link href="/favoritemovies">Go to Favorite Movies</Link>
<br/>
<br/>
<Link href="/upcomingmovies">Go to Upcoming Movies</Link>
<br/>
<br/>
<Link href="/nowplaying">Go to Now Playing Movies</Link>
<br/>
<br/>
</>
  )
}
  
  

