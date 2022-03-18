import React from 'react'
import {useState} from 'react'

function DarkmodeSwitcher () {

    const [classDark, setClassDark] = useState(false)

    function handleDark () {
        setClassDark(!classDark);
    }
  return (
      <div>
          <div className={classDark ? "vtex-flex-layout-0-x-flexCol--darkMode-Col-dark-1" : "vtex-flex-layout-0-x-flexCol--darkMode-Col-1"} onClick={handleDark}>
              <div className="vtex-flex-layout-0-x-flexColChild--darkMode-Col-1">icon 1 </div>
              <div className="vtex-flex-layout-0-x-flexColChild--darkMode-Col-1">icon 2</div>
          </div>
      </div>
  )
}

export default DarkmodeSwitcher