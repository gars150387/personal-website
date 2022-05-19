import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export const ContactMe = () => {

    const [disabled, setDisabled] = useState(true)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tqq2iw2', 'template_l0cnn0y', e.target, 'user_7hiY7EgOGmmB04VGtCfcX')
            .then((result) => {
                Swal.fire('Messsage Sent!', 'Thnk you for your message', 'success')
            }, (error) => {
                Swal.fire(' Oops...', 'Something went wrong, lets try again', 'error')
            });
        e.target.reset()

    };        

    function disableButton ({ name, subject, textarea, button }){
        if (name.toTrim().length > 0 || subject.toTrim().length > 0 || textarea.toTrim().length > 0){
            return setDisabled(false)
        } else {
            return setDisabled(true)
        }
    }

return (
    <div className='container'>
        <form >
            <div className='="row pt-5 mx-auto'>
                <div className='col-8 form-group mx-auto'>
                    <input type="text" className='form-control' placeholder='Name' name='name' />
                </div>
                <div className='col-8 form-group pt-2 mx-auto'>
                    <input type="email" className='form-control' placeholder='Email Address' name='email' />
                </div>
                <div className='col-8 form-group pt-2 mx-auto'>
                    <input type="text" className='form-control' placeholder='Subject' name='subject' />
                </div>
                <div className='col-8 form-group pt-2 mx-auto'>
                    <textarea type="text" className='form-control' id='' cols='30' rows="8" placeholder='Your Message' name='message' />
                </div>
                <div className='col-8 pt-3 mx-auto mb-4' >
                    <button disabledButton={disableButton} onClick={sendEmail} type='submit' className='btn btn-info' >Send me your message!</button>
                </div>
            </div>
        </form>
    </div>
);
};