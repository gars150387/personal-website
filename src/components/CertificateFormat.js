import React from 'react'
import { Card, Button } from 'react-bootstrap'

import '../styles/Sass/background.scss'

export const CertificateFormat = (props) => {
  return (
    <Card className='card-format' key={props.id} >
        <Card.Title className='card-format-title'>
            {props.title}
        </Card.Title>
        <Card.Img className='certificate-img' src={require(`../images/${props.img}`)} alt={`${props.img}`} />
        <Button 
        className='checkout-button' 
        variant="success" 
        target="_blank" 
        rel="noopener noreferrer" 
        href={props.href} >Check out</Button>
    </Card>
  )
}
