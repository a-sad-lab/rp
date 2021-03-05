import {useContext} from 'react'

import {Theme} from '../context/theme'

function IButton() {
  console.log(`render ibutton，${new Date()}`)
  const theme = useContext(Theme)
  return (
    <button style={{ background: theme }}>ibutton</button>
  )
}

export default IButton
