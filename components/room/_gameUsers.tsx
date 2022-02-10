import { useState } from 'react'
import { CloudLightning, Zap } from 'react-feather'
import RoomChat from './_chat'
import GameResults from './_gameResults'
import OpponentCard from './_opponentCard'
import UserCard from './_userCard'

const GameUsers = ({ messages, socket, roomData, userData, opponentData }) => {
  return (
    <div className='grid grid-cols-3 gap-x-12 grid-rows-2 grid-flow-col w-2/3'>
      <UserCard
        roomData={roomData}
        socket={socket}
        opponentData={opponentData}
        index={0}
        userData={userData}
      />
      {roomData.hasEnded &&
      opponentData &&
      opponentData.hasLocked &&
      userData &&
      userData.hasLocked ? (
        <GameResults opponentData={opponentData} userData={userData} />
      ) : (
        <Zap className='w-40 h-40' />
      )}
      <RoomChat messages={messages} socket={socket} />
      <OpponentCard opponentData={opponentData} />
    </div>
  )
}

export default GameUsers
