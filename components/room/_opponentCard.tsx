import { User } from 'react-feather'
import UserHistory from './_userHistory'

const OpponentCard = ({ opponentData }) => {
  const getName = () => {
    if (opponentData && opponentData.playerID) {
      return opponentData.playerID
    } else return 'Waiting...'
  }

  const getState = () => {
    if (opponentData) {
      if (opponentData.hasLocked) return 'LOCKED'
      return 'Choosing...'
    }
    return ''
  }

  return (
    <div className='flex flex-col items-center row-start-1 row-end-3 space-y-8 bg-gray-200 py-14 px-20 border border-white shadow-2xl'>
      <span className='font-bold text-2xl'>{getName()}</span>
      <User className='w-32 h-32' />
      <h2>{getState()}</h2>
      <UserHistory />
    </div>
  )
}

export default OpponentCard
