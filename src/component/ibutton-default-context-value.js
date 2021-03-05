import {useContext} from 'react'

import {Theme} from '../context/theme'

function IButtonDefaultContextValue() {
  console.log(`render ibutton default context value，${new Date()}`)
  const theme = useContext(Theme)
  return (
    <button style={{ background: theme }}>ibutton default context value</button>
  )
}

export default IButtonDefaultContextValue
