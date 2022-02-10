import { NextComponentType } from 'next'

type Props = {
  content?: string
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>
}

const RoomButton = ({ content, clickHandler }: Props) => {
  return (
    <button
      className='rounded-xl px-4 py-2 text-gray-200 bg-[#5f5b6b]'
      onClick={clickHandler}>
      {content}
    </button>
  )
}

export default RoomButton
