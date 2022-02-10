import { useRouter } from 'next/router'
import GameUsers from '../../components/room/_gameUsers'
import UserCard from '../../components/room/_userCard'

import React, { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'
const ENDPOINT = 'http://51.15.232.68'

const TargetRoom = () => {
  const router = useRouter()
  const [messages, setMessages] = useState([])
  const [opponentData, setOpponentData] = useState({})
  const [roomData, setRoomData] = useState({})
  const [userData, setUserData] = useState({})
  const [socket, setSocket] = useState(socketIOClient(ENDPOINT))
  const roomID = router.query.id

  useEffect(() => {
    if (!roomData || !roomData.players) return
    setOpponentData(
      roomData.players.find((player) => player.playerID !== socket.id)
    )
    setUserData(
      roomData.players.find((player) => player.playerID === socket.id)
    )
  }, [roomData])

  useEffect(() => {
    console.log(messages)
  }, [messages])

  useEffect(() => {
    if (!roomID) return
    console.log(router.query.id)
    socket.emit('joinRoom', router.query.id)
    socket.on('chatToClient', (data) => {
      console.log('zebi')
      setMessages((oldMessages) => [...oldMessages, data])
    })
    socket.on('updateRoom', (data) => setRoomData(data))
  }, [roomID])

  return (
    <div className='border-red-100 items-center flex flex-col'>
      <GameUsers
        messages={messages}
        socket={socket}
        roomData={roomData}
        userData={userData}
        opponentData={opponentData}
      />
    </div>
  )
}

export default TargetRoom
