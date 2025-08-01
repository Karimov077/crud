import { useState } from "react"

export const useGetValue = (initialState={}) =>{
    const [formData, setFormData] = useState(initialState)

    const hendleChange = (event)=>{
        const {value, name} = event.target;
        setFormData((val)=> ({...val, [name]: value}))
    }
    return {formData, hendleChange, setFormData}
}