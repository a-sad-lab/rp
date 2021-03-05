import IButton from './ibutton'

function Toobar() {

  return(
    <div>
      <p>未经 useMemo 优化渲染开销</p>
      <IButton />
    </div>
  )
}

export default Toobar
