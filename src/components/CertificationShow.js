import React from 'react';
import { Button, Card, Stack } from 'react-bootstrap';
import { CertificationsData } from './CertificationsData';

import 'bootstrap/dist/css/bootstrap.min.css';



export const CertificationShow = () => {

   
    let OneRow = [];

    for (let i = 0; i < CertificationsData.length; i += 3) {
        OneRow.push(CertificationsData.slice(i, i + 3).map(certificate => {
            return certificate
        }))
    }


    return (
        <>
            <Card.Title>Certifications</Card.Title>
            <Stack gap={3}>
                {
                    OneRow.map(row => {
                        console.log('one row', row )
                        return (

                            Object.values(row.map(key => {
                                console.log( 'key', key)
                                return (
                                    <div>
                                        <Card sm key={key.id} style={{
                                            width: '35vw',
                                            margin: 'auto',
                                            marginTop: '2%',
                                            borderColor: '#212529',
                                            borderTopColor: 'transparent',
                                            borderLeftColor: 'transparent',
                                            borderRightColor: 'transparent',
                                            borderRadius: '5px'
                                        }}>
                                            <Card.Title className='text-center' style={{
                                                width: '35vw',
                                                marginTop: '2%',
                                                fontSize: '25px',

                                            }}>
                                                {key.title}
                                            </Card.Title>
                                            <Card.Img id="certificationsImage" src={require(`../images/${key.img}`)} alt={`${key.img}`} style={{
                                                width: '35vw',
                                                borderColor: '#212529',
                                                borderRadius: '5px',
                                                backgroundColor: '#212529'
                                            }} />
                                            <Card.Body>
                                                <Card.Text className='text-center' style={{
                                                    width: '32vw',
                                                    marginTop: '2%',
                                                    fontSize: '25px',
                                                    textDecoration: 'underline',
                                                    boxShadow: '-2px 3px 5px #212529'
                                                }}>
                                                    {key.company}
                                                </Card.Text>
                                            </Card.Body>
                                            <Button variant="success" href={key.href} style={{
                                                borderColor: '#212529',
                                                border: 'solid 1px',
                                                boxShadow: '-2px 3px 5px #212529'
                                            }}>Check out</Button>
                                        </Card>
                                    </div>
                                )

                            })
                            )
                        )
                    })
                }

            </Stack>

        </>
    );
}



