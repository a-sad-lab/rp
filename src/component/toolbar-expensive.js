import {useContext, useMemo} from 'react'

import IButtonExpensive from './ibutton-expensive'

import {Theme} from '../context/theme'

function ToobarExpensive() {
  const theme = useContext(Theme)
  return useMemo(
    () => (
      <div>
        <p>带有 ibutton expensive 的 toolbar，利用 useMemo 优化渲染开销</p>
        <IButtonExpensive theme={theme} />
      </div>
    ),
    [theme]
  )
}

export default ToobarExpensive
