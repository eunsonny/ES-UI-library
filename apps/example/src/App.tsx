import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Button } from '@eunsonny/ui'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    console.log('콘솔')
  }

  return (
    <>
      <Button onClick={handleClick}>버튼</Button>
    </>
  )
}

export default App
