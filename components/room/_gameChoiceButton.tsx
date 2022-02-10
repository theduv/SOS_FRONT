import { SetStateAction } from 'react'

type Props = {
  content: String
  currentChoice: String
  hasLocked: boolean
}

const GameChoiceButton = ({
  content,
  currentChoice,
  setCurrentChoice,
  hasLocked,
}: Props) => {
  let color: string

  switch (content) {
    case 'Split':
      color = 'bg-green-500 '
      break
    case 'Steal':
      color = 'bg-red-500 '
      break
    case 'Counter':
      color = 'bg-yellow-500 '
      break
    default:
      color = 'bg-black'
      break
  }

  const handleChangeChoice = () => {
    if (hasLocked) return
    setCurrentChoice(content)
  }

  return (
    <button
      onClick={handleChangeChoice}
      className={
        'py-2 px-4 font-bold ' +
        color +
        (currentChoice === content ? 'font-bold' : 'font-normal opacity-50 ')
      }>
      {content.toUpperCase()}
    </button>
  )
}

export default GameChoiceButton
