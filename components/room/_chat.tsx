import { useRouter } from 'next/router'
import { useState } from 'react'
import { Send } from 'react-feather'

const RoomChat = ({ messages, socket }) => {
  const [inputValue, setInputValue] = useState('')
  const router = useRouter()
  const roomID = router.query.id

  const onSubmitMessage = () => {
    socket.emit('chatToServer', {
      sender: socket.id,
      message: inputValue,
      room: roomID,
    })
    setInputValue('')
  }

  return (
    <div className='min-h-1/2 max-h-96 bg-gray-200 w-full flex flex-col justify-between p-4'>
      <div className='overflow-y-scroll overflow-x-hidden h-full'>
        {messages.map((message: Object) => {
          return message.type === 'info' ? (
            <div className='italic text-red-600 truncate'>
              {message.content}
            </div>
          ) : (
            <div>
              {message.sender}: {message.message}
            </div>
          )
        })}
      </div>
      <div className='flex flex-col space-y-4'>
        <div className='border border-t border-gray-400 w-full' />
        <div className='flex space-x-2 items-center'>
          <input
            className='bg-gray-100 w-full h-10 focus:outline-none px-3 rounded-sm'
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key === 'Enter') onSubmitMessage()
            }}
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
          />
          <Send onClick={onSubmitMessage} className='cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default RoomChat
