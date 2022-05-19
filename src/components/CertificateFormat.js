import React from 'react'
import { Card, Button } from 'react-bootstrap'

import '../styles/mybackground.css'

export const CertificateFormat = (props) => {
  return (
    <Card sm="true" key={props.id} style={{
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
            {props.title}
        </Card.Title>
        <Card.Img id="certificationsImage" src={require(`../images/${props.img}`)} alt={`${props.img}`} style={{
            width: '35vw',
            borderColor: '#212529',
            borderRadius: '5px',
            backgroundColor: '#212529'
        }} />
        <Card.Body>
            <Card.Text className='text-center' id='card-body-text'>
                {props.company}
            </Card.Text>
        </Card.Body>
        <Button variant="success" target="_blank" rel="noopener noreferrer" href={props.href} style={{
            borderColor: '#212529',
            border: 'solid 1px',
            boxShadow: '-2px 3px 5px #212529'
        }}>Check out</Button>
    </Card>
  )
}
