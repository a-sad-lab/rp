import {createContext} from 'react'

const light = 'aqua'
const dark = 'orange'
const defaultValue = 'yellow'

const Theme = createContext(defaultValue)

export {
  Theme,
  dark,
  light,
}
