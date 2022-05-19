import React, { useState } from 'react'
import { Viewer } from '@react-pdf-viewer/core'
import { Worker } from '@react-pdf-viewer/core'
import { Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import "@react-pdf-viewer/core/lib"
import '@react-pdf-viewer/default-layout'

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import '../styles/resume.css'

import { ScrollUp } from '../hooks/useScrollUp'
import PdfFile from '../pdf/GustavoRodriguezSanteliz_SoftwareDeveloper.PDF'

export const ResumeFile = () => {

    const [defaultPdfFile] = useState(PdfFile);


    return (
        <div className="pdf-container">
            <Col md={{ span: 8, offset: 2 }} className='text-center mt-4'>
                <Link to="/mybackground/certificates">
                    <Button variant='secondary' style={{
                        width: '50vw',
                    }}>Get me out!</Button>
                </Link>
            </Col>
            <ScrollUp />
            {defaultPdfFile &&
                <>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                        <Viewer className="viewer" fileUrl={defaultPdfFile} />
                    </Worker>
                </>}
        </div>
    )
}


//https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js video mp4 link

//import PdfFile from '../pdf/GustavoRodriguezSanteliz_SoftwareDeveloper.PDF'
