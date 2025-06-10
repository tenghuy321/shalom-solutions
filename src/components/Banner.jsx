import React from 'react'
import BannerFooter from '../assets/images/footer_banner.png'
import LogoWhite from '../assets/images/logo-white.png'
const Banner = () => {
    return (
        <div className='w-full h-[30vh] md:h-full font-[700] relative' >
            <img src={BannerFooter} alt="" className='w-full h-full' />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-[#fff]' data-aos="zoom-in-up" data-aos-duration="1200">
                <img src={LogoWhite} alt="" className='w-12 md:w-20 h-auto mb-2' />
                <h1 className='text-[25px] sm:text-[30px] md:text-[40px]'>SHALOM SOLUTION</h1>
                <p className='text-[12px] sm:text-[14px] md:text-[16px]'>ACCOUNTING & TAX SERVICE</p>
            </div>
        </div>
    )
}

export default Banner