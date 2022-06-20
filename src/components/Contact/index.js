import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value })
        }
    };

    function handleChange(e) {
        if (e.targetlname === 'email') {
            const isValid = validateEmail(e.target.value);

            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid!');
            } else {
                setErrorMessage('');
            }
                } else {
                    if (!e.target.value.length) {
                        setErrorMessage(`${e.target.name} is required.`);    
                    } else {
                        setErrorMessage('');
                    }
            };              
    }

    return (
        <section>
            <h1 data-testid="h1tag">Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <br></br>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name"/>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <br></br>
                    <input type="email" defaultValue={email} name="email" onBlue={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <br></br>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
                <button data-testid="button" type="submit">Submit</button>
            </form>
        </section>
    );
};

export default ContactForm;