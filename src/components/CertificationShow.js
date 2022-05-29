import React from 'react';
import { Stack, Col, Button } from 'react-bootstrap';
import { CertificationsData } from './CertificationsData';
import { CertificateFormat } from './CertificateFormat';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";



export const CertificationShow = () => {

    const [searchTerm, setSearchTerm] = useState('')


    return (
        <>
            <Col className='justify-content-center'>
                <Col>
                    <input className='search-input'
                        name="value"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                        placeholder="Search my certificate here!"
                    />
                    <div className="vr" />
                    <Link to='/resume'>
                    <Col><Button className='button-certificate-link'>Resume</Button></Col>
                </Link>
                </Col>
            </Col>
            <div className='certificate-container'>
                {
                    CertificationsData.filter(item =>
                        item.title.toLowerCase()
                            .includes(searchTerm))
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
