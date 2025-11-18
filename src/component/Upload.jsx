import react from 'react'
import { assets } from '../assets/assets';
const Upload = () => {
    return (
        <div className='pb-16'>
            {/* Title */}

            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold  py-6 md:py-16'>See the<span className='bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1] bg-clip-text text-transparent'> magic</span>, Try now</h1>
            <div className='text-center mb-24 '>
                <input type='file' name='' id='upload2' hidden />
                <label className='inline-flex gap-3 px-8 py-3.5  bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1] rounded-full  cursor-pointer m-auto hover:scale-105 transition-all duration-600 ' htmlFor='upload2'>
                    <img className='' width={20} src={assets.upload_btn_icon} alt='' />
                    <p className='text-white'>upload your image</p>

                </label>
            </div>

        </div>

    )
}
export default Upload;