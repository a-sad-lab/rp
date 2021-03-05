function IButtonExpensive(props) {
  console.log(`render ibutton expensive, ${new Date()}`)
  return <button style={{ background: props.theme }}>ibutton expensive</button>
}

export default IButtonExpensive
