// React
import {memo} from 'react'

// CSS
import './Header.css'

const Header = () => {
  console.log('Header');
  return (
      <div className="Header">
        <h3>오늘은 📆</h3>
        <h1>{new Date().toDateString()}</h1>
      </div>
  )
}

export default memo(Header);