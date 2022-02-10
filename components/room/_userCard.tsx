import { useState } from 'react'
import { Lock, Unlock, User } from 'react-feather'
import GameChoiceButton from './_gameChoiceButton'
import UserHistory from './_userHistory'

const UserCard = ({ roomData, socket, index, userData, opponentData }) => {
  const [currentChoice, setCurrentChoice] = useState('split')

  const getName = () => {
    console.log(opponentData)
    if (index === 0) return 'You'
    if (opponentData && opponentData.playerID) {
      return opponentData.playerID
    } else return 'Waiting...'
  }

  const onLockChoice = () => {
    socket.emit('lockedChoice', { room: roomData.id, choice: currentChoice })
  }

  return (
    <div className='flex flex-col items-center row-start-1 row-end-3 space-y-8 bg-gray-200 py-14 px-20 border border-white shadow-2xl'>
      <span className='font-bold text-2xl'>{getName()}</span>
      <User className='w-32 h-32' />
      <div className='flex space-x-2 items-center'>
        <GameChoiceButton
          content='Split'
          currentChoice={currentChoice}
          setCurrentChoice={setCurrentChoice}
          hasLocked={userData.hasLocked}
        />
        <GameChoiceButton
          content='Steal'
          hasLocked={userData.hasLocked}
          currentChoice={currentChoice}
          setCurrentChoice={setCurrentChoice}
        />
        <GameChoiceButton
          hasLocked={userData.hasLocked}
          content='Counter'
          currentChoice={currentChoice}
          setCurrentChoice={setCurrentChoice}
        />
        {userData && userData.hasLocked ? (
          <Lock />
        ) : (
          <Unlock className='cursor-pointer' onClick={onLockChoice} />
        )}
      </div>
      <UserHistory />
    </div>
  )
}

export default UserCard
