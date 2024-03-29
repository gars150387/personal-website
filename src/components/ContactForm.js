import React from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export const ContactMe = () => {

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


return (
    <div style={({margin:" auto"})} className='container'>
        <form onSubmit={ sendEmail }>
            <div className="">
                <div className='form-group'>
                    <input type="text" className='form-control' placeholder='Name' name='name' />
                </div>
                <div className='form-group pt-2'>
                    <input type="email" className='form-control' placeholder='Email Address' name='email' />
                </div>
                <div className='form-group pt-2'>
                    <input type="text" className='form-control' placeholder='Subject' name='subject' />
                </div>
                <div className='form-group pt-2'>
                    <textarea type="text" className='form-control' id='' cols='30' rows="8" placeholder='Your Message' name='message' />
                </div>
                <div className='pt-3 mb-4' >
                    <button type='submit' className='btn btn-success' >Send me your message!</button>
                </div>
            </div>
        </form>
    </div>
);
};