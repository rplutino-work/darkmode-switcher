import React from 'react'
import {useState} from 'react'

function darkmodeSwitcher () {

  const [classDark, setClassDark] = useState("vtex-flex-layout-0-x-flexCol--darkMode-Col-1")

  handleDark = () =>{

  setClassDark("vtex-flex-layout-0-x-flexCol--darkMode-Col-dark-1")

  }
  return (
    <div>
      <div className={classDark} onClick={handleDark}>
        <div className="vtex-flex-layout-0-x-flexColChild--darkMode-Col-1">icon 1 </div>
        <div className="vtex-flex-layout-0-x-flexColChild--darkMode-Col-1">icon 2</div>
      </div>
    </div>
  )
}

export default darkmodeSwitcher
