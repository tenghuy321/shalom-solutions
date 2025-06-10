import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
const FormContact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = 'service_9f9gz2s';
        const templateId = 'template_vterftf';
        const publicKey = 'SFE-NbS18OajbX3u6';

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log('SUCCESS!', result.text);
                toast.success('Message sent successfully!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                form.current.reset(); // Clear the form after successful submission
            }, (error) => {
                console.log('FAILED...', error.text);
                toast.error('Failed to send message. Please try again later.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            });
    }

    return (
        <>
            <ToastContainer />
            <section className='w-full max-w-6xl h-full mx-auto mt-[2rem] md:mt-[5rem] pb-[2rem] text-[12px] md:text-[14px] px-2 overflow-hidden'>
                <div className='bg-[#f8edff] grid grid-cols-1 md:grid-cols-2  p-4'>
                    <div className="bg-[#411259] px-4 md:px-10 py-6 rounded-md shadow-xl order-2 md:order-none" data-aos="fade-right" data-aos-duration="1200">
                    <h2 className="text-[16px] md:text-[20px] font-semibold text-[#fff] mb-4 md:mb-2">Personal Information</h2>
                    <form action="#" method="post" ref={form} onSubmit={sendEmail}>

                        <div className="mb-2">
                            <input type="text" id="name" name="name" placeholder='Name' required
                                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-[#000] leading-tight focus:outline-none focus:ring-1 focus:ring-[#411259] focus:border-[#411259]" />
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-4 mb-2">
                            <div className="flex-1 mb-2 md:mb-0">
                                <select id="sex" name="sex" required
                                    className="shadow border rounded-md w-full appearance-none py-3 px-4 text-[#000] 
                                            leading-tight focus:outline-none focus:ring-1 focus:ring-[#411259]
                                            focus:border-[#411259] hover:bg-[#f3e8f7] hover:border-[#6b21a8]">
                                    <option value="">Select Sex</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>

                            </div>
                            <div className="flex-1">
                                <input type="text" id="company" name="company" placeholder='Company' required
                                    className="shadow appearance-none border rounded-md w-full py-3 px-4 text-[#000] leading-tight focus:outline-none focus:ring-1 focus:ring-[#411259] focus:border-[#411259]" />
                            </div>
                        </div>

                        <div className="mb-2">
                            <input type="tel" id="phone" name="phone" placeholder='Phone'
                                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-[#000] leading-tight focus:outline-none focus:ring-1 focus:ring-[#411259] focus:border-[#411259]" />
                        </div>

                        <div className="mb-2">
                            <textarea id="address" name="address" rows="3" placeholder='Address' required
                                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-[#000] leading-tight focus:outline-none focus:ring-1 focus:ring-[#411259] focus:border-[#411259] resize-y"></textarea>
                        </div>

                        <div className="flex justify-end">
                            <button type="submit"
                                className="hover:bg-[#fff] border border-[#fff] text-[#fff] hover:text-[#411259] font-bold py-3 px-10 rounded-full focus:outline-none focus:shadow-outline transition duration-500 ease-in-out">
                                Subscribe Now
                            </button>
                        </div>
                    </form>
                </div>

                <div className='flex flex-col items-start justify-center text-[#411259] p-4 md:p-10 order-1 md:order-none' data-aos="fade-left" data-aos-duration="1200">
                    <h1 className='text-[16px] md:text-[20px] font-[600]'>Subscribe now!</h1>
                    <h2 className='text-[20px] md:text-[30px] font-[700] py-2'>Don't miss our future updates!
                        Get Subscribed Today!</h2>

                    <a className='bg-[#411259] rounded-full px-2 py-2 flex items-center justify-center gap-2 transition duration-500 ease-in-out cursor-pointer'>
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.24 32.4016C7.32842 32.4016 0.0783691 25.1515 0.0783691 16.24C0.0783691 7.32842 7.32842 0.0783691 16.24 0.0783691C25.1515 0.0783691 32.4016 7.32842 32.4016 16.24C32.4016 25.1515 25.1515 32.4016 16.24 32.4016ZM24.6211 21.9174C24.8204 21.9174 24.9826 21.7553 24.9826 21.556V11.4097L16.7597 17.9395C16.6076 18.0604 16.4237 18.1208 16.2399 18.1208C16.0561 18.1208 15.8723 18.0603 15.7201 17.9395L7.4973 11.4097V21.556C7.4973 21.7553 7.65948 21.9174 7.85872 21.9174H24.6211ZM23.361 10.5625L16.24 16.2175L9.11882 10.5625H23.361ZM26.6545 10.9239V21.5561C26.6545 22.6773 25.7423 23.5894 24.6211 23.5894H7.85872C6.73751 23.5894 5.82546 22.6773 5.82546 21.5561V10.9239C5.82546 9.80279 6.73758 8.89067 7.85872 8.89067H24.6211C25.7423 8.8906 26.6545 9.80279 26.6545 10.9239Z" fill="white" />
                        </svg>

                        <span target="_blank" rel="noopener noreferrer" className='text-[#fff] font-[400] px-4'>
                            shalomsolution23@gmail.com
                        </span>
                    </a>
                </div>
                </div>
            </section>
        </>

    )
}

export default FormContact