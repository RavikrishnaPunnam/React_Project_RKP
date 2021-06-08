import { useState } from 'react'

export default function useInput(initialValue) {

    const [value, setValue] = useState(initialValue)
    const reset = () => {
        setValue(initialValue)
    }
    const bind = {
        value,
        onChange: e => {
            setValue(e.target.value)
            console.log(bind)
        }
    }
    return [value,bind,reset]

}
