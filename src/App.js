import {useState} from 'react'

import ToolbarExpensive from './component/toolbar-expensive'
import Toolbar from './component/toolbar'
import IButtonDefaultContextValue from './component/ibutton-default-context-value'

import {Theme, dark, light} from './context/theme'

import logo from './logo.svg'
import './App.css'

function App() {
  const [bgExpensive, setBgExpensive] = useState()
  const [bg, setBg] = useState()

  function changeExpensiveIButtonTheme() {
    bgExpensive === light ? setBgExpensive(dark) : setBgExpensive(light)
  }

  function changeButtonTheme() {
    bg === light ? setBg(dark) : setBg(light)
  }

  return (
    <div className="App">
      <h1>使用 useContext 及通过 useMemo 优化组件渲染</h1>
      <Theme.Provider value={bgExpensive}>
        <ToolbarExpensive />
      </Theme.Provider>
      <button onClick={changeExpensiveIButtonTheme}>
        change ibutton expensive theme
      </button>
      <hr />
      <Theme.Provider value={bg}>
        <Toolbar />
      </Theme.Provider>
      <button onClick={changeButtonTheme}>change ibutton theme</button>
      <hr />
      <div>
        <p>context 默认值的示例</p>
        <IButtonDefaultContextValue />
      </div>
      <ul>
        <li>可以通过浏览器 Developer Tools 中 console 的输出，观察组件渲染的信息</li>
        <li>也可以通过 React DevTools 的 Components 中勾上 ✔ Highlight updates 
          when components render 选项来可视化的观察组件渲染
        </li>
        <li>点击按钮 ”change ibutton theme“ 只会渲染按钮 “ibutton” 和 
          “ibutton default context value”，不会渲染按钮 ”ibutton expensive“
        </li>
        <li>点击按钮 ”change ibutton expensive theme“ 3 个按钮 
          ”ibutton expensive“，“ibutton” 和 “ibutton default context value” 
          都会渲染
        </li>
        <li>
          <a href="https://github.com/facebook/react/issues/15156#issuecomment-474590693">
            其他方案和描述
          </a>
        </li>
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App
