import SingleGameHistory from './_singleGameHistory'

const decisions = [
  { against: 'Ayoub', choice: 'Split' },
  { against: 'Arno', choice: 'Split' },
  { against: 'Paul', choice: 'Steal' },
  { against: 'Nicolas', choice: 'Split' },
  { against: 'Laura', choice: 'Steal' },
]

const UserHistory = () => {
  return (
    <div className='border border-gray-300 py-8 px-6 bg-white shadow-[0_-183px_40px_-200px_rgba(0,0,0,1)_inset] '>
      {decisions.map((decision, index) => {
        return (
          <div className='flex flex-col space-y-2' key={index}>
            <SingleGameHistory decision={decision} index={index} />
            {index !== decisions.length - 1 && <div className='border-b' />}
          </div>
        )
      })}
    </div>
  )
}

export default UserHistory
