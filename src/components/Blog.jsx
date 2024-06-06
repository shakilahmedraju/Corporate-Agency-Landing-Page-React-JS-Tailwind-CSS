import React from 'react';

const Blog = () => {
    const blogs = [
        {id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen",image: "./src/assets/image 18.png"},
        {id: 2, title: "What are your safeguarding responsibilities and how can you manage them?",image: "./src/assets/image 19.png"},
        {id: 3, title: "Revamping the Membership Model with Triathlon Australia",image: "./src/assets/image 20.png"},
    ]
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='blogs'>
            <div className='text-center md:w-1/2 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Caring is the new marketing</h2>
                <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>    

            {/* all blogs */}
            <div className='grid lg:grid-cols-3 sm:grid-cols2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(
                        (blog)=>(
                            <div key={blog.id} className='w-full mx-auto relative mb-12 cursor-pointer'>
                               <img src={blog.image} alt="" className='w-full hover:scale-95 transition-all duration-300' /> 
                               <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                                <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                                <div className='flex items-center justify-center gap-8'>
                                    <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Readmore{" "}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16" className='inline-block ml-2'>
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                                    </svg>
                                    </a>
                                </div>
                               </div>

                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Blog;