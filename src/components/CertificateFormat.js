import React from 'react'
import { Card, Button } from 'react-bootstrap'

import '../styles/Sass/background.scss'

export const CertificateFormat = (props) => {
  return (
    <Card className='card-format' sm="true" key={props.id} >
        <Card.Title className='text-center'>
            {props.title}
        </Card.Title>
        <Card.Img id="certificationsImage" src={require(`../images/${props.img}`)} alt={`${props.img}`} />
        <Card.Body>
            <Card.Text className='card-body-text'>
                {props.company}
            </Card.Text>
        </Card.Body>
        <Button variant="success" target="_blank" rel="noopener noreferrer" href={props.href} >Check out</Button>
    </Card>
  )
}
