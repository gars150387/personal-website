import React from 'react';
import { Button, Card, Stack } from 'react-bootstrap';

import { CertificationsData } from './CertificationsData';

import 'bootstrap/dist/css/bootstrap.min.css';

export const CertificationShow = () => {
    return (
        <>
            <Card.Title>Certifications</Card.Title>
            {CertificationsData.map(({ id, img, company, title, href }) => {
                return (
                    <>

                        <Stack direction="horizontal">
                            <div>
                                                            <Card sm key={id} style={{
                                width: '20vw',
                                margin: 'auto',
                                marginTop: '2%',
                                borderColor: '#212529',
                                borderTopColor: 'transparent',
                                borderLeftColor: 'transparent',
                                borderRightColor: 'transparent',
                                borderRadius: '5px'
                            }}>
                                <Card.Title className='text-center' style={{
                                    width: '20vw',
                                    marginTop: '2%',
                                    fontSize: '25px',

                                }}>
                                    {title}
                                </Card.Title>
                                <Card.Img id="certificationsImage" src={require(`../images/${img}`)} alt={`${img}`} style={{
                                    width: '20vw',
                                    borderColor: '#212529',
                                    borderRadius: '5px',
                                    backgroundColor: '#212529'
                                }} />
                                <Card.Body>
                                    <Card.Text className='text-center' style={{
                                        width: '18vw',
                                        marginTop: '2%',
                                        fontSize: '25px',
                                        textDecoration: 'underline',
                                        boxShadow: '-2px 3px 5px #212529'
                                    }}>
                                        {company}
                                    </Card.Text>
                                </Card.Body>
                                <Button variant="success" href={href} style={{
                                    borderColor: '#212529',
                                    border: 'solid 1px',
                                    boxShadow: '-2px 3px 5px #212529'
                                }}>Check out</Button>
                            </Card>

                            </div>

                        </Stack>

                    </>
                )
            })}
        </>
    );
}