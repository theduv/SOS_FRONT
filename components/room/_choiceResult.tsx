const getBgColor = (choice: string) => {
  switch (choice) {
    case 'Split':
      return 'bg-green-400 text-green-900'
    case 'Steal':
      return 'bg-red-400 text-red-900'
    case 'Counter':
      return 'bg-yellow-400 text-yellow-900'
  }
}

const ChoiceResult = ({ choice }) => {
  return (
    <div
      className={`${getBgColor(
        choice
      )} border px-12 py-4 font-bold min-w-40 max-w-40`}>
      {choice.toUpperCase()}
    </div>
  )
}

export default ChoiceResult
