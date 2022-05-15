import React from 'react';
import { Stack } from 'react-bootstrap';
import { CertificationsData } from './CertificationsData';
import { CertificateFormat } from './CertificateFormat';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';



export const CertificationShow = () => {

    const [serachTerm, setserachTerm] = useState('')

    return (
        <>
            <Stack gap={3}>
                {
                    Object.values(CertificationsData).filter((values)=>{
                        if( serachTerm === ''){
                            return values
                        } else if (values.title.toLowerCase().includes(serachTerm.toLocaleLowerCase())){
                            return values
                        }
                    }).map(({ id, title, company, href, img }) => {
                        return (
                            <Stack direction='horizontal' xs lg={2}>
                                <CertificateFormat key={id} title={title} company={company} href={href} img={img} />
                            </Stack>
                        )
                    })
                }
            </Stack>



        </>
    );
}
