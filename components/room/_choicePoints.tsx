const getColor = (points: number) => {
  if (points < 0) return 'text-red-600 font-bold  text-3xl'
  if (points === 0) return 'text-blue-600 font-bold  text-3xl'
  if (points > 0) return 'text-green-600 font-bold text-3xl'
}

const ChoicePoints = ({ points }) => {
  return (
    <div className={`${getColor(points)}`}>
      {points > 0 && '+'}
      {points}
    </div>
  )
}

export default ChoicePoints
