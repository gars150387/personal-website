import { ContactMe } from "./ContactForm";

export const Contact = () => {
    return (
        <>
        <h3 className="text-center mt-4">Contact Me</h3>
        <p className="text-center">If you have any kind of question, please feel free to reach out to me, I am more than glad to help you with your concern. <br/><span className="color-back">Thank you</span></p>
            <ContactMe className="contactForm" />
        </>
    )
}