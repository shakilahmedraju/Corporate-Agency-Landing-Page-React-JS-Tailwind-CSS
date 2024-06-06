import React from 'react';

const Newsletter = () => {
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
            <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
                <div className='text-center'>
                    <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>
                    Pellentesque suscipit fringilla libero eu.                        
                    </h2>
                    <div className='flex items-center justify-center gap-8'>
                        <button className='btn-primary text-white'>Get a Demo{" "}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16" className='inline-block ml-2'>
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Newsletter;