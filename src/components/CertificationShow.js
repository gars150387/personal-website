import React from 'react';
import { Button } from 'react-bootstrap';
import { CertificationsData } from './CertificationsData';
import { CertificateFormat } from './CertificateFormat';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";



export const CertificationShow = () => {

    const [searchTerm, setSearchTerm] = useState('')


    return (
        <>
            <div className='justify-content-center'>
                <div>
                    <input className='search-input'
                        name="value"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                        placeholder="Search my certificate here!"
                    />
                    
                    <Link to='/resume'>
                    <div className='button-container-resume' ><Button className='button-certificate-link'><p>Resume</p></Button></div>
                </Link>
                </div>
            </div>
            <div className='certificate-container'>
                {
                    CertificationsData.filter(item =>
                        item.title.toLowerCase().includes(searchTerm))
                        .map(item => {
                            return (
                                <CertificateFormat key={item.id} title={item.title} company={item.company} href={item.href} img={item.img} />
                            )
                        })
                }
            </div>
        </>
    );
}


//<FaList /> list
//<FaMicrosoft /> square