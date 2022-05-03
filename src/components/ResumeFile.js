import React, { useState } from 'react'
import { Viewer } from '@react-pdf-viewer/core'
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import "@react-pdf-viewer/core/lib"
import '@react-pdf-viewer/default-layout'

import { Worker } from '@react-pdf-viewer/core'

import PdfFile from '../pdf/GustavoRodriguezSanteliz_SoftwareDeveloper.PDF'

export const ResumeFile = () =>{

    const [defaultPdfFile] = useState(PdfFile);

    // const defaultLayoutPluginInstance = defaultLayoutPlugin()

    return (
        <div className="pdf-container">
            {defaultPdfFile && <> <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer className="viewer" fileUrl={defaultPdfFile}
        // plugins={[defaultLayoutPluginInstance]}
        
        />
        </Worker></>}
        </div>
    )
}