import React from "react";
import Slider from "react-slick";
import { settings } from "./style-config";
import { CertificateFormat } from "./CertificateFormat";
import { CertificationsData } from "./CertificationsData";

import '../styles/Sass/backgroundResume.scss'

export const BackgroundResume = () => {

        // const backgroundResumeInfo = CertificationsData.map(props => {
        //         return (
        //             <CertificateFormat key={props.id} title={props.title} company={props.company} href={props.href} img={props.img} />
        //         )
        //     })

        //     console.log( 'resume', backgroundResumeInfo)

        const testing = [1,2,3,4,5,6,7,8,9]   
        
        const checking = testing.map( item =>{
            return item
        })
        

    return (

        <div className="slider-container">
            <Slider {...settings}>
            {
                    CertificationsData.map(item => {
                            return (
                                <CertificateFormat key={item.id} title={item.title} company={item.company} href={item.href} img={item.img} />
                            )
                        })
                }
            </Slider>
        </div>
    )
}
