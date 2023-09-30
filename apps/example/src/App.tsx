


import { Button } from '@eunsonny/ui'
import { Input } from '@eunsonny/ui'

function App() {

  const handleClick = () => {
    console.log('콘솔')
  }

  return (
    <>
    <Input disabled />
      <Button onClick={handleClick}>버튼</Button>
    </>
  )
}

export default App
