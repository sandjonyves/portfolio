import BackgroundContact from '@/components/background-contact/BackgroundContact';
import AnimationLottie from '@/components/ui/animation-lottie';
import electron from '@/public/assets/Lotties/electron.json';
import { Button, Snackbar, Alert } from '@mui/material';
import React, { useState } from 'react';

import emailjs from'emailjs-com'
import { SendTimeExtension } from '@mui/icons-material';
export default function Contact() {
    const service_id= 'service_5jqqipm'
    const template_id= 'template_jtdi41t'
    const user_id= 'kHkqy5hA04JrfIAK-'
    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: '',
        to_name: 'sandjonyves'

      
    });
    const [loading, setLoading] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setFeedbackMessage('');
        setError(false); // Réinitialiser l'erreur
        // formData.append('service_id', 'YOUR_SERVICE_ID');
        // formData.append('template_id', 'YOUR_TEMPLATE_ID');
        // formData.append('user_id', 'YOUR_PUBLIC_KEY');
        console.log(formData)
        try {
            const response = await emailjs.send(service_id,template_id,formData, user_id);

            if (response.status === 200) {
                
                setFeedbackMessage('Email sent successfully!');
            } else {
                throw new Error('Failed to send email.');
            }
        } catch (error) {
            console.log('Error sending email:', error);
            setFeedbackMessage('Failed to send email. Please try again.');
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen">
            <BackgroundContact />
            <div className=" max-w-5xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
                    {/* Animation Lottie */}
                    <div className="flex justify-center items-center">
                        <AnimationLottie animation={electron} width="100%" height="80%" />
                    </div>
                    
                    {/* Contact Form */}
                    <div className="w-full flex flex-col gap-2 ">
                        <h2 className="text-3xl m-4 md:text-4xl font-extrabold text-center text-gray-900 dark:text-white">
                            Contact Me
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block p-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="from_name"
                                    id="name"
                                    className="w-full p-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Let us know how we can help you"
                                    value={formData.from_name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block p-1 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="from_email"
                                    id="email"
                                    className="w-full p-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="sandjonyves@gmail.com"
                                    value={formData.from_email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block p-1 text-sm font-medium text-gray-900 dark:text-gray-400">
                                    Your message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="5"
                                    className="w-full p-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Leave a comment..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <Button
                                variant="contained"
                                style={{ borderRadius: '5%', marginBottom: 50 }}
                                type="submit"
                                disabled={loading}
                                endIcon={<SendTimeExtension/>}
                                
                            >
                                {loading ? 'Sending...' : 'Send message'}
                            </Button>
                        </form>
                        <Snackbar open={!!feedbackMessage} autoHideDuration={6000} onClose={() => setFeedbackMessage('')}>
                            <Alert onClose={() => setFeedbackMessage('')} severity={error ? 'error' : 'success'}>
                                {feedbackMessage}
                            </Alert>
                        </Snackbar>
                    </div>
                </div>
            </div>
        </div>
    );
}