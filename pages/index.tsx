import type { NextPage } from 'next'
import Link from 'next/link'
import RoomButton from '../components/_roomButton'

const makeID = (length: Number) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * 26))
  }
  return result
}

const Home: NextPage = () => {
  return (
    <div>
      <Link href={`/room/${makeID(5)}`}>
        <a>
          <RoomButton content='Créer une salle' />
        </a>
      </Link>
    </div>
  )
}

export default Home
