import React from 'react'
import BannerFooter from '../assets/images/banner.png'
import LogoWhite from '../assets/images/logo-white.png'
const Banner = () => {
    return (
        <div className='w-full min-h-[40vh] md:min-h-[60vh] relative overflow-hidden flex items-center justify-center'>
            <div className='absolute inset-0 bg-cover bg-left bg-no-repeat md:bg-fixed'
                style={{ backgroundImage: `url(${BannerFooter})` }}></div>

            <div className='absolute inset-0 bg-[#2f0e40] opacity-70 bg-blend-multiply'></div>

            {/* Content */}
            <div
                className='relative z-10 w-full h-full flex flex-col items-center justify-center py-8 text-white'
                data-aos="zoom-in-up"
                data-aos-duration="1200"
            >
                <img
                    src={LogoWhite}
                    alt="Shalom Solution Logo"
                    className='w-12 md:w-16 lg:w-20 h-auto mb-2 md:mb-4'
                />
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2'>
                    SHALOM SOLUTION
                </h1>
                <p className='text-xs sm:text-sm md:text-base lg:text-lg'>
                    ACCOUNTING & TAX SERVICE
                </p>
            </div>
        </div>
    )
}

export default Banner