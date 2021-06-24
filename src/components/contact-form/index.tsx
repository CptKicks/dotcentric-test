import { FunctionalComponent, h } from 'preact';
import Form from '../forms/form';
import Input from '../forms/inputs/input';
import TextArea from '../forms/inputs/textarea';

import { emailRegEx } from '../../utils/helpers/regEx';
import { SubmitButton } from '../forms/inputs/submit-button';

const ContactForm: FunctionalComponent = () => {
    const onSubmit = (data: object): void => {
        alert(JSON.stringify(data, null, 4));
    }

    return (
        <Form onSubmit={onSubmit}>
            <Input name="name" placeholder="Please enter your name" label="Your Name" options={{ required: true }} />
            <Input name="telephoneNumber" label="Your Telephone Number" placeholder="Please enter your telephone number" options={{ required: true }} />
            <Input name="email" label="Your Email" placeholder="Please enter your email"
                   options={{ required: true,
                              pattern: {
                                value: emailRegEx,
                                message: 'Please enter a valid email',
                              }
                   }}
            />
            <TextArea name="message" label="Your Message" placeholder="Please enter your message" rows="8"
                      suggestion="Please enter as much detail as possible"
                      options={{ required: true }}
            />

            <SubmitButton />
        </Form>
    );
};

export default ContactForm;
