import ChoicePoints from './_choicePoints'
import ChoiceResult from './_choiceResult'

const possibilities = {
  Split: { Steal: -20, Split: +10, Counter: +5 },
  Steal: { Steal: -15, Split: +15, Counter: -25 },
  Counter: { Steal: +25, Split: -25, Counter: -15 },
}

const getResult = (number) => {
  if (number < 0) return 'lost'
  if (number === 0) return 'draw'
  if (number > 0) return 'won'
}

const getPoints = (choiceOne: string, choiceTwo: string) => {
  if (!choiceOne || !choiceTwo) return
  const choiceOneResults = possibilities[choiceOne][choiceTwo]
  const choiceTwoResults = possibilities[choiceTwo][choiceOne]

  return {
    player: {
      result: getResult(choiceOneResults),
      points: choiceOneResults,
    },
    opponent: {
      result: getResult(choiceTwoResults),
      points: choiceTwoResults,
    },
  }
}

const GameResults = ({ opponentData, userData }) => {
  const userChoice = userData.hasLocked
  const opponentChoice = opponentData.hasLocked
  const points = getPoints(userChoice, opponentChoice)

  return (
    <div className='flex flex-col space-y-8'>
      <div className='flex space-x-8 items-center'>
        <ChoiceResult choice={userChoice} />
        <span className='font-bold'> VS </span>
        <ChoiceResult choice={opponentChoice} />
      </div>
      <div className='flex justify-between'>
        <ChoicePoints points={points?.player.points} />
        <ChoicePoints points={points?.opponent.points} />
      </div>
    </div>
  )
}

export default GameResults
