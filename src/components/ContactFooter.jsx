import React from 'react'
import '../components/ContactFooter.css'
import logo from '../assets/images/logo-white.png'
import footer1 from '../assets/images/footer1.png'
import footer2 from '../assets/images/footer2.png'
import IG from '../assets/images/ig.png'
import { NavLink } from 'react-router-dom'
const ContactFooter = () => {
    return (
        <footer className='contact_footer'>
            <h1 className='text-[25px] md:text-[30px] font-[700] text-[#411259] text-center py-10' data-aos="zoom-in-up" data-aos-duration="1200">Contact !</h1>

            {/* desktop view */}
            <div className='w-full h-full hidden lg:flex'>
                <div className='flex items-center justify-center w-full h-[60vh] relative'>
                    <div className='w-full h-full lg:-mr-[11%] xl:-mr-[8%] overflow-hidden'>
                        <div className='w-full h-full flex flex-col items-start justify-center relative pl-4 xl:pl-8' style={{ backgroundImage: `url(${footer1})`, backgroundSize: 'cover', backgroundPosition: 'right' }}>
                            <div className='flex items-center justify-start gap-4'>
                                <img src={logo} alt="" className='w-10 h-10' />
                                <div className='text-[#fff] text-[12px] md:text-[14px] font-[300]'>
                                    <h1 className='text-[16px] md:text-[20px] font-[600]'>Shalom Solution Cambodia Co., Ltd.</h1>
                                    <p>ACCOUNTING & TAX SERVICE</p>
                                </div>
                            </div>
                            <p className='text-[#fff] text-[12px] md:text-[12px] py-4 max-w-[500px] xl:max-w-[700px]'>Take the first step towards securing your financial future. Our expert advisors are ready to guide you through the tax process. Click the button below to schedule a consultation and let us help you navigate the complexities of taxation.</p>

                            <h1 className='text-[14px] md:text-[16px] text-[#fff] my-4'>Follow Us</h1>
                            <div className='flex items-center gap-4'>
                                <a href="#">
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 0C7.62624 0 0 7.62624 0 17C0 26.3731 7.62624 34 17 34C26.3731 34 34 26.3731 34 17C34 7.62624 26.3744 0 17 0ZM21.2277 17.5985H18.462V27.4564H14.3637C14.3637 27.4564 14.3637 22.07 14.3637 17.5985H12.4155V14.1144H14.3637V11.8608C14.3637 10.2468 15.1306 7.72485 18.4996 7.72485L21.5366 7.73649V11.1185C21.5366 11.1185 19.6911 11.1185 19.3323 11.1185C18.9735 11.1185 18.4633 11.298 18.4633 12.0676V14.1151H21.5859L21.2277 17.5985Z" fill="#007BFF" />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9691 34C27.3579 34 34.9691 26.3888 34.9691 17C34.9691 7.61116 27.3579 0 17.9691 0C8.58027 0 0.969116 7.61116 0.969116 17C0.969116 26.3888 8.58027 34 17.9691 34Z" fill="#039BE5" />
                                        <path d="M8.74801 16.6317L25.1388 10.312C25.8996 10.0371 26.564 10.4975 26.3175 11.6479L26.3189 11.6465L23.5281 24.7945C23.3212 25.7267 22.7673 25.9534 21.9924 25.5142L17.7424 22.382L15.6925 24.3568C15.4658 24.5835 15.2746 24.7747 14.8354 24.7747L15.1372 20.4496L23.0138 13.3337C23.3567 13.032 22.9373 12.862 22.4854 13.1623L12.7515 19.2908L8.55534 17.9818C7.64442 17.6928 7.62459 17.0709 8.74801 16.6317Z" fill="white" />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9382 34C27.3271 34 34.9382 26.3888 34.9382 17C34.9382 7.61116 27.3271 0 17.9382 0C8.54939 0 0.938232 7.61116 0.938232 17C0.938232 26.3888 8.54939 34 17.9382 34Z" fill="#29A71A" />
                                        <path d="M25.4336 9.50563C23.6649 7.71928 21.3161 6.62376 18.8108 6.4167C16.3055 6.20963 13.8087 6.90465 11.7707 8.37637C9.73269 9.8481 8.2877 11.9997 7.69635 14.443C7.10501 16.8862 7.40623 19.4604 8.54569 21.7012L7.42717 27.1315C7.41556 27.1856 7.41523 27.2414 7.4262 27.2956C7.43717 27.3498 7.4592 27.4011 7.49092 27.4464C7.53738 27.5151 7.6037 27.568 7.68102 27.5981C7.75834 27.6281 7.84298 27.6338 7.92364 27.6145L13.2458 26.353C15.4803 27.4636 18.0363 27.7455 20.459 27.1484C22.8818 26.5514 25.0142 25.1141 26.4767 23.0924C27.9393 21.0707 28.6371 18.5957 28.4461 16.1078C28.2551 13.6199 27.1876 11.2804 25.4336 9.50563ZM23.7742 22.7502C22.5504 23.9705 20.9746 24.7761 19.2688 25.0533C17.5629 25.3306 15.8131 25.0656 14.2658 24.2956L13.524 23.9286L10.2611 24.7013L10.2708 24.6607L10.9469 21.3767L10.5838 20.6599C9.79318 19.1073 9.51429 17.3443 9.78705 15.6234C10.0598 13.9025 10.8702 12.3121 12.1022 11.0801C13.6501 9.53257 15.7494 8.66323 17.9382 8.66323C20.127 8.66323 22.2262 9.53257 23.7742 11.0801C23.7874 11.0952 23.8016 11.1094 23.8167 11.1226C25.3455 12.674 26.1989 14.767 26.191 16.9451C26.183 19.1233 25.3143 21.2099 23.7742 22.7502Z" fill="white" />
                                        <path d="M23.4845 20.3409C23.0846 20.9707 22.4529 21.7415 21.6589 21.9327C20.268 22.2688 18.1333 21.9443 15.4771 19.4677L15.4442 19.4387C13.1087 17.2732 12.5021 15.4708 12.6489 14.0412C12.73 13.2299 13.4062 12.4958 13.9761 12.0167C14.0662 11.9398 14.173 11.885 14.288 11.8568C14.4031 11.8286 14.5231 11.8277 14.6386 11.8542C14.754 11.8806 14.8617 11.9337 14.9529 12.0093C15.0442 12.0848 15.1165 12.1806 15.1641 12.2891L16.0238 14.2209C16.0796 14.3462 16.1003 14.4843 16.0837 14.6204C16.067 14.7565 16.0136 14.8855 15.9291 14.9936L15.4945 15.5577C15.4012 15.6742 15.3449 15.8159 15.3329 15.9646C15.3208 16.1134 15.3536 16.2623 15.4269 16.3923C15.6703 16.8192 16.2537 17.447 16.9008 18.0285C17.6272 18.6853 18.4328 19.2861 18.9428 19.4909C19.0792 19.5466 19.2293 19.5602 19.3735 19.5299C19.5178 19.4996 19.6497 19.4268 19.7522 19.3209L20.2564 18.8128C20.3537 18.7169 20.4747 18.6485 20.607 18.6145C20.7394 18.5806 20.8784 18.5824 21.0098 18.6196L23.0517 19.1992C23.1644 19.2337 23.2676 19.2936 23.3536 19.3742C23.4395 19.4547 23.5059 19.5539 23.5477 19.6641C23.5894 19.7742 23.6055 19.8925 23.5945 20.0098C23.5835 20.1271 23.5459 20.2404 23.4845 20.3409Z" fill="white" />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M34.904 17.1001C34.904 7.76682 27.3379 0.200684 18.0046 0.200684C8.67133 0.200684 1.10519 7.76682 1.10519 17.1001C1.10519 26.4334 8.67133 33.9995 18.0046 33.9995C27.3379 33.9995 34.904 26.4334 34.904 17.1001Z" fill="url(#paint0_linear_18_601)" />
                                        <path opacity="0.1" d="M30.7237 5.98251C28.2599 10.5053 24.7755 15.1705 20.4217 19.5243C16.0679 23.8781 11.4027 27.3558 6.88658 29.8196C6.60344 29.5735 6.32846 29.3171 6.06162 29.0502C4.44874 27.4912 3.16239 25.6267 2.27757 23.5653C1.39274 21.504 0.927162 19.2872 0.907967 17.044C0.888773 14.8009 1.31635 12.5764 2.16577 10.5002C3.01519 8.42408 4.26944 6.5378 5.85541 4.9514C7.44137 3.36499 9.3273 2.1102 11.4032 1.26021C13.4792 0.410209 15.7035 -0.0179893 17.9467 0.000579022C20.1898 0.0191474 22.4068 0.484111 24.4683 1.36836C26.5299 2.25261 28.3948 3.53844 29.9543 5.15088C30.2211 5.41772 30.4776 5.69493 30.7237 5.98251Z" fill="white" />
                                        <path d="M22.0071 8.20679H14.0021C12.7047 8.20679 11.4604 8.72219 10.543 9.6396C9.6256 10.557 9.1102 11.8013 9.1102 13.0987V21.1037C9.1102 22.4011 9.6256 23.6454 10.543 24.5628C11.4604 25.4803 12.7047 25.9957 14.0021 25.9957H22.0071C23.3046 25.9957 24.5488 25.4803 25.4663 24.5628C26.3837 23.6454 26.8991 22.4011 26.8991 21.1037V13.0987C26.8991 11.8013 26.3837 10.557 25.4663 9.6396C24.5488 8.72219 23.3046 8.20679 22.0071 8.20679ZM25.3425 20.4011C25.3425 21.472 24.9171 22.4991 24.1598 23.2564C23.4025 24.0137 22.3754 24.4391 21.3045 24.4391H14.7048C13.6338 24.4391 12.6067 24.0137 11.8494 23.2564C11.0922 22.4991 10.6667 21.472 10.6667 20.4011V13.8014C10.6667 12.7304 11.0922 11.7033 11.8494 10.946C12.6067 10.1888 13.6338 9.76331 14.7048 9.76331H21.3045C22.3754 9.76331 23.4025 10.1888 24.1598 10.946C24.9171 11.7033 25.3425 12.7304 25.3425 13.8014V20.4011Z" fill="white" />
                                        <path d="M21.2488 13.8899L21.2066 13.8477L21.171 13.8121C20.3302 12.9743 19.1915 12.5041 18.0046 12.5046C17.4052 12.5087 16.8124 12.6308 16.2603 12.8641C15.7081 13.0973 15.2073 13.437 14.7864 13.8638C14.3656 14.2907 14.033 14.7962 13.8076 15.3516C13.5822 15.9071 13.4684 16.5014 13.4728 17.1008C13.4719 18.3173 13.9514 19.4848 14.807 20.3495C15.2261 20.7737 15.7255 21.1102 16.276 21.3392C16.8265 21.5683 17.4172 21.6854 18.0134 21.6837C18.9079 21.6649 19.7775 21.3863 20.5163 20.8818C21.2551 20.3773 21.8311 19.6687 22.1741 18.8425C22.5171 18.0162 22.6122 17.108 22.4479 16.2286C22.2836 15.3492 21.867 14.5366 21.2488 13.8899ZM18.0046 20.1161C17.4065 20.1244 16.8194 19.9547 16.318 19.6286C15.8167 19.3024 15.4236 18.8345 15.1889 18.2843C14.9542 17.7341 14.8884 17.1266 15 16.5389C15.1115 15.9513 15.3953 15.4101 15.8152 14.9842C16.2352 14.5582 16.7723 14.2668 17.3584 14.147C17.9444 14.0272 18.5528 14.0844 19.1062 14.3113C19.6596 14.5383 20.1331 14.9246 20.4663 15.4214C20.7995 15.9181 20.9775 16.5027 20.9775 17.1008C20.9805 17.4941 20.9059 17.884 20.758 18.2484C20.6102 18.6128 20.392 18.9445 20.1159 19.2245C19.8398 19.5045 19.5112 19.7274 19.1489 19.8804C18.7867 20.0333 18.3978 20.1134 18.0046 20.1161Z" fill="white" />
                                        <path d="M23.8817 12.2942C23.8828 12.4368 23.8559 12.5784 23.8023 12.7106C23.7487 12.8429 23.6695 12.9632 23.5694 13.0649C23.4692 13.1665 23.35 13.2473 23.2185 13.3028C23.087 13.3583 22.9459 13.3873 22.8032 13.3882C22.6617 13.3881 22.5217 13.36 22.3911 13.3054C22.2606 13.2508 22.1422 13.1709 22.0427 13.0702C21.8921 12.9174 21.7896 12.7237 21.748 12.5131C21.7065 12.3026 21.7276 12.0845 21.8088 11.8858C21.89 11.6872 22.0277 11.5168 22.2049 11.3957C22.3821 11.2746 22.5909 11.2081 22.8054 11.2046C23.0566 11.2045 23.2998 11.2927 23.4925 11.4536L23.5148 11.4759C23.5506 11.5051 23.5834 11.5378 23.6126 11.5737L23.6371 11.6004C23.7962 11.7965 23.8827 12.0416 23.8817 12.2942Z" fill="white" />
                                        <defs>
                                            <linearGradient id="paint0_linear_18_601" x1="6.05495" y1="5.15044" x2="29.9543" y2="29.0498" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#FAE100" />
                                                <stop offset="0.15" stopColor="#FCB720" />
                                                <stop offset="0.3" stopColor="#FF7950" />
                                                <stop offset="0.5" stopColor="#FF1C74" />
                                                <stop offset="1" stopColor="#6C1CD1" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </a>
                            </div>

                            <ul className='flex items-center gap-2 xl:gap-8 pt-5'>
                                <li className=''>
                                    <NavLink to="/" className="text-[10px] xl:text-[12px] text-[#fff] nav_link">Home</NavLink>
                                </li>
                                <li className=''>
                                    <NavLink to="/about" className="text-[10px] xl:text-[12px] text-[#fff] nav_link">About Us</NavLink>
                                </li>
                                <li className=''>
                                    <NavLink to="/services" className="text-[10px] xl:text-[12px] text-[#fff] nav_link">Professional Services</NavLink>
                                </li>
                                <li className=''>
                                    <NavLink to="/events" className="text-[10px] xl:text-[12px] text-[#fff] nav_link">Events</NavLink>
                                </li>
                                <li className=''>
                                    <NavLink to="/client-voice" className="text-[10px] xl:text-[12px] text-[#fff] nav_link">Client's Voices</NavLink>
                                </li>
                                <li className=''>
                                    <NavLink to="/career" className="text-[10px] xl:text-[12px] text-[#fff] nav_link">Career</NavLink>
                                </li>
                                <li className=''>
                                    <NavLink to="/contact" className="text-[10px] xl:text-[12px] text-[#fff] nav_link">Contact Us</NavLink>
                                </li>
                            </ul>

                            <p className='text-[14px] md:text-[16px] text-[#fff] pt-4 xl:pt-10'>@Copyright 2025 Shalom Solution!</p>
                        </div>
                    </div>
                    <div className='w-full h-full'>
                        <div className='w-full h-full py-10 relative flex flex-col items-start justify-center pl-20 xl:pl-40 2xl:pl-60 pr-10' style={{ backgroundImage: `url(${footer2})`, backgroundSize: 'cover', backgroundPosition: 'left' }}>
                            <div className='pl-20 text-[#fff] text-[12px] md:text-[14px] font-[300]'>
                                <h1 className='text-[20px] text-[#fff] my-4 font-[600] mb-10 xl:mb-12'>Let’s connect with us!</h1>
                                <div className='flex flex-col items-start justify-start gap-4'>
                                    <a href="#">093 777 253</a>
                                    <a href="#">shalomsolution@gmail.com</a>
                                    <a href="#">#14, Street 311, Sangkat Boeng Kar Ti Pir, <br /> Khan Toul Kork, Phnom Penh.</a>
                                    <p>Opening Hours: Monday - Friday <br />
                                        8:00 AM - 5:00 PM</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* tapblet view */}
            <div className='w-full min-h-screen lg:hidden flex flex-col items-center justify-center bg-[#411259]'>
                <div className='w-full h-full p-6 sm:p-10 flex flex-col items-start justify-between gap-8'>
                    <div>
                        <div className='flex items-center justify-start gap-4'>
                            <img src={logo} alt="" className='w-10 h-10' />
                            <div className='text-[#fff] text-[12px] font-[300]'>
                                <h1 className='text-[14px] font-[600]'>Shalom Solution Cambodia Co., Ltd.</h1>
                                <p>ACCOUNTING & TAX SERVICE</p>
                            </div>
                        </div>

                        <p className='text-[#fff] text-[12px] md:text-[12px] pb-2 pt-4'>Take the first step towards securing your financial future. Our expert advisors are ready to guide you through the tax process. Click the button below to schedule a consultation and let us help you navigate the complexities of taxation.</p>

                    </div>
                    <div className=''>
                        <h1 className='text-[14px] md:text-[16px] text-[#fff] my-4'>Follow Us</h1>
                        <div className='flex items-center gap-4'>
                            <a href="#">
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 0C7.62624 0 0 7.62624 0 17C0 26.3731 7.62624 34 17 34C26.3731 34 34 26.3731 34 17C34 7.62624 26.3744 0 17 0ZM21.2277 17.5985H18.462V27.4564H14.3637C14.3637 27.4564 14.3637 22.07 14.3637 17.5985H12.4155V14.1144H14.3637V11.8608C14.3637 10.2468 15.1306 7.72485 18.4996 7.72485L21.5366 7.73649V11.1185C21.5366 11.1185 19.6911 11.1185 19.3323 11.1185C18.9735 11.1185 18.4633 11.298 18.4633 12.0676V14.1151H21.5859L21.2277 17.5985Z" fill="#007BFF" />
                                </svg>
                            </a>
                            <a href="#">
                                <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.9691 34C27.3579 34 34.9691 26.3888 34.9691 17C34.9691 7.61116 27.3579 0 17.9691 0C8.58027 0 0.969116 7.61116 0.969116 17C0.969116 26.3888 8.58027 34 17.9691 34Z" fill="#039BE5" />
                                    <path d="M8.74801 16.6317L25.1388 10.312C25.8996 10.0371 26.564 10.4975 26.3175 11.6479L26.3189 11.6465L23.5281 24.7945C23.3212 25.7267 22.7673 25.9534 21.9924 25.5142L17.7424 22.382L15.6925 24.3568C15.4658 24.5835 15.2746 24.7747 14.8354 24.7747L15.1372 20.4496L23.0138 13.3337C23.3567 13.032 22.9373 12.862 22.4854 13.1623L12.7515 19.2908L8.55534 17.9818C7.64442 17.6928 7.62459 17.0709 8.74801 16.6317Z" fill="white" />
                                </svg>
                            </a>
                            <a href="#">
                                <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.9382 34C27.3271 34 34.9382 26.3888 34.9382 17C34.9382 7.61116 27.3271 0 17.9382 0C8.54939 0 0.938232 7.61116 0.938232 17C0.938232 26.3888 8.54939 34 17.9382 34Z" fill="#29A71A" />
                                    <path d="M25.4336 9.50563C23.6649 7.71928 21.3161 6.62376 18.8108 6.4167C16.3055 6.20963 13.8087 6.90465 11.7707 8.37637C9.73269 9.8481 8.2877 11.9997 7.69635 14.443C7.10501 16.8862 7.40623 19.4604 8.54569 21.7012L7.42717 27.1315C7.41556 27.1856 7.41523 27.2414 7.4262 27.2956C7.43717 27.3498 7.4592 27.4011 7.49092 27.4464C7.53738 27.5151 7.6037 27.568 7.68102 27.5981C7.75834 27.6281 7.84298 27.6338 7.92364 27.6145L13.2458 26.353C15.4803 27.4636 18.0363 27.7455 20.459 27.1484C22.8818 26.5514 25.0142 25.1141 26.4767 23.0924C27.9393 21.0707 28.6371 18.5957 28.4461 16.1078C28.2551 13.6199 27.1876 11.2804 25.4336 9.50563ZM23.7742 22.7502C22.5504 23.9705 20.9746 24.7761 19.2688 25.0533C17.5629 25.3306 15.8131 25.0656 14.2658 24.2956L13.524 23.9286L10.2611 24.7013L10.2708 24.6607L10.9469 21.3767L10.5838 20.6599C9.79318 19.1073 9.51429 17.3443 9.78705 15.6234C10.0598 13.9025 10.8702 12.3121 12.1022 11.0801C13.6501 9.53257 15.7494 8.66323 17.9382 8.66323C20.127 8.66323 22.2262 9.53257 23.7742 11.0801C23.7874 11.0952 23.8016 11.1094 23.8167 11.1226C25.3455 12.674 26.1989 14.767 26.191 16.9451C26.183 19.1233 25.3143 21.2099 23.7742 22.7502Z" fill="white" />
                                    <path d="M23.4845 20.3409C23.0846 20.9707 22.4529 21.7415 21.6589 21.9327C20.268 22.2688 18.1333 21.9443 15.4771 19.4677L15.4442 19.4387C13.1087 17.2732 12.5021 15.4708 12.6489 14.0412C12.73 13.2299 13.4062 12.4958 13.9761 12.0167C14.0662 11.9398 14.173 11.885 14.288 11.8568C14.4031 11.8286 14.5231 11.8277 14.6386 11.8542C14.754 11.8806 14.8617 11.9337 14.9529 12.0093C15.0442 12.0848 15.1165 12.1806 15.1641 12.2891L16.0238 14.2209C16.0796 14.3462 16.1003 14.4843 16.0837 14.6204C16.067 14.7565 16.0136 14.8855 15.9291 14.9936L15.4945 15.5577C15.4012 15.6742 15.3449 15.8159 15.3329 15.9646C15.3208 16.1134 15.3536 16.2623 15.4269 16.3923C15.6703 16.8192 16.2537 17.447 16.9008 18.0285C17.6272 18.6853 18.4328 19.2861 18.9428 19.4909C19.0792 19.5466 19.2293 19.5602 19.3735 19.5299C19.5178 19.4996 19.6497 19.4268 19.7522 19.3209L20.2564 18.8128C20.3537 18.7169 20.4747 18.6485 20.607 18.6145C20.7394 18.5806 20.8784 18.5824 21.0098 18.6196L23.0517 19.1992C23.1644 19.2337 23.2676 19.2936 23.3536 19.3742C23.4395 19.4547 23.5059 19.5539 23.5477 19.6641C23.5894 19.7742 23.6055 19.8925 23.5945 20.0098C23.5835 20.1271 23.5459 20.2404 23.4845 20.3409Z" fill="white" />
                                </svg>
                            </a>
                            <a href="#" className='overflow-visible'>
                                <img src={IG} alt="" className='w-[35px] h-[35px]' />

                            </a>
                        </div>

                        <ul className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 pt-4'>
                            <li className=''>
                                <NavLink to="/" className="text-[12px] text-[#fff]">Home</NavLink>
                            </li>
                            <li className=''>
                                <NavLink to="/about" className="text-[12px] text-[#fff]">About Us</NavLink>
                            </li>
                            <li className=''>
                                <NavLink to="/services" className="text-[12px] text-[#fff]">Professional Services</NavLink>
                            </li>
                            <li className=''>
                                <NavLink to="/events" className="text-[12px] text-[#fff]">Events</NavLink>
                            </li>
                            <li className=''>
                                <NavLink to="/client-voice" className="text-[12px] text-[#fff]">Client's Voices</NavLink>
                            </li>
                            <li className=''>
                                <NavLink to="/career" className="text-[12px] text-[#fff]">Career</NavLink>
                            </li>
                            <li className=''>
                                <NavLink to="/contact" className="text-[12px] text-[#fff]">Contact Us</NavLink>
                            </li>
                        </ul>

                        <div className='text-[#fff] text-[12px] md:text-[14px] font-[300]'>
                            <h1 className='text-[16px] text-[#fff] my-4 font-[600]'>Let’s connect with us!</h1>
                            <div className='flex flex-col items-start justify-start gap-2'>
                                <a href="#">093 777 253</a>
                                <a href="#">shalomsolution@gmail.com</a>
                                <a href="#">#14, Street 311, Sangkat Boeng Kar Ti Pir, Khan Toul Kork, Phnom Penh.</a>
                                <p>Opening Hours: Monday - Friday <br />
                                    8:00 AM - 5:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <p className='text-[14px] md:text-[16px] text-[#fff]'>@Copyright 2025 Shalom Solution!</p>
                </div>
            </div>
        </footer>

    )
}

export default ContactFooter