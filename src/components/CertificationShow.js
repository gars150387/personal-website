import React from 'react';
import { Stack, Col } from 'react-bootstrap';
import { CertificationsData } from './CertificationsData';
import { CertificateFormat } from './CertificateFormat';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';



export const CertificationShow = () => {

    const [searchTerm, setSearchTerm] = useState('')


    return (
        <>
            <Col className='justify-content-center'>
                <Col>
                    <input
                        name="value"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                        placeholder="Search my certificate here!"
                        style={{
                            width: '35vw',
                            display: '-ms-flexbox',
                            marginLeft: '32%',
                            marginRight:'50%',
                            fontSize: '32px',
                            fontFamily: 'calibri'
                        }}
                    />
                </Col>
            </Col>
            <hr />
            <Stack gap={3}>
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
            </Stack>
        </>
    );
}
