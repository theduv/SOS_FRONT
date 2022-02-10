import clsx from 'clsx'

type Props = {
  decision: {
    choice: string
    against: string
  }
  index: number
}

const opacities = [
  'opacity-100',
  'opacity-80',
  'opacity-60',
  'opacity-50',
  'opacity-30',
]

const SingleGameHistory = ({ decision, index }: Props) => {
  const choice = decision.choice
  const against = decision.against

  return (
    <div className={'w-full' + ` ${opacities[index]}`}>
      <span
        className={
          'font-bold ' +
          (choice === 'Split' ? 'text-green-600' : 'text-red-600')
        }>
        {choice}
      </span>{' '}
      against <span className='font-bold'>{against}</span>
    </div>
  )
}

export default SingleGameHistory
