import React from 'react'
import {CheckBoxWrapper, CheckBox, CheckBoxLabel} from "./Toggle.elements";
function Toggle({theme, setTheme}) {
    function changeTheme() {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light")
        }
    }

    return (
        <>
             <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" onClick={changeTheme} />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
        </>
    )
}

export default Toggle
