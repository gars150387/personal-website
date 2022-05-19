import React, { useState } from 'react'
import { CertificationsData } from './CertificationsData'


export const NavbarInner = () => {

    const [value, setvalue] = useState('')
    
    const result = CertificationsData.find(({ title }) => title === value)
    console.log( result )

    const handleSearch = (e) =>{
        setvalue(e.target.value)
    }

    // const handleSubmit = () =>{
        
    // }
    
    
    return (
        <>
           <input
           name="value"
           onChange={handleSearch}
           value={ value }
           placeholder="Search here"
            />

            {/* <button onClick={handleSubmit}>Search</button> */}
        </>
    )
}
