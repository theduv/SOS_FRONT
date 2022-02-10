import { NextComponentType } from 'next'
import Link from 'next/link'
import { Square } from 'react-feather'

const Header: NextComponentType = () => {
  return (
    <div className='bg-jet text-amber-100 p-3'>
      <Link href='/'>
        <a className='flex space-x-2 items-center cursor-pointer'>
          <Square />
          <h1>Split or Steal</h1>
        </a>
      </Link>
    </div>
  )
}

export default Header
