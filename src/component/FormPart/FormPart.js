import React from 'react';
import './FormPart.css'

const FormPart = () => {
    return (
        <div>
            <div className='formpart grid grid-cols-1 lg:grid-cols-2' >
                <div className=' block lg:flex'>
                    <div className='m-5 w-[65vw] lg:w-[30vw]'>
                        <h1 className='text-2xl lg:text-4xl font-semibold mb-5'>Education <span className='text-red-500'>*</span></h1>
                        <label htmlFor="" className='font-semibold'>Year of Passing <span className='text-red-500'>*</span></label>
                        <input type="text" maxLength='100' placeholder="2024" className="input input-bordered border-gray-500 w-full mt-2" />
                        <label className="label">
                            <span className="label-text-alt"></span>
                            <span className="label-text-alt mb-2">0/100</span>
                        </label>
                        <label htmlFor="" className='font-semibold'>Region <span className='text-red-500'>*</span></label>
                        <input type="text" maxLength='100' placeholder="Jalandhar" className="input input-bordered border-gray-500 w-full mt-2 " />
                        <label className="label">
                            <span className="label-text-alt"></span>
                            <span className="label-text-alt mb-2">0/100</span>
                        </label>
                        <label htmlFor="" className='font-semibold'>College Name <span className='text-red-500'>*</span></label>
                        <input type="text" maxLength='100' placeholder="NIT Jalandhar" className="input input-bordered border-gray-500 w-full mt-2" />
                        <label className="label">
                            <span className="label-text-alt"></span>
                            <span className="label-text-alt mb-2">0/100</span>
                        </label>
                        <div className='flex justify-between items-center'>
                            <label htmlFor="" className='font-semibold'>Describe College <span className='text-red-500'>*</span></label>
                            <p className='text-sm text-blue-500'>Need Help?</p>
                        </div>
                        <textarea type="text" maxLength='100' placeholder="NITJ is a college of national importance and students can get admission into this college through the JEE mains entrance exam and then the JoSSA counselling ...." className=" h-20 lg:h-28 input input-bordered border-gray-500 w-full mt-2" />
                        <label className="label">
                            <span className="label-text-alt"></span>
                            <span className="label-text-alt mb-5">0/100</span>
                        </label>
                        <button className='btn btn-primary'>Generate</button>
                    </div>
                    <div class="vl hidden lg:block"></div>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-[80%] h-[90%] lg:w-[70%] lg:h-[80%]' src="banner.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default FormPart;