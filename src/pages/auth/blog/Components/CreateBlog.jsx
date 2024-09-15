import React from 'react'

const CreateBlog = ({type}) => {
  return (
<section className="text-gray-600 body-font bg-black">
    <div className=" container flex flex-row md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-24 mx-auto section" id="contact-form">
     
        <div className="md:w-2/3 w-full bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl text-gray-800 sm:text-4xl font-bold title-font mb-4">{type}Blog</h1>
            <form action="send-contact.php" method="post" id="submit-contact-form">
                <div className="p-2 w-full">
                    <div className="relative">
                        <label for="name" className="leading-7 py-4 text-lg text-gray-900">Your Name</label>
                        <input type="text" id="name" name="name" required="" className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="p-2 w-full">
                    <div className="relative">
                        <label for="email" className="leading-7 py-4 text-lg text-gray-900">Your Email</label>
                        <input type="email" id="email" name="email" required="" className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                </div>
                <div className="p-2 w-full">
                    <div className="relative">
                        <label for="message" className="leading-7 py-4 text-lg text-gray-900">Your Message</label>
                        <textarea id="message" name="message" required="" className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                </div>
                <div className="p-2 w-full">
                    <button type="submit" className="flex text-white bg-blue-600 border-0 py-4 px-6 focus:outline-none hover:bg-blue-700 rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha">
                        post
                    </button>
                </div>
            </form>

          
            <div className="mt-10 w-full flex justify-center">
                <img src="src/assets/Eureka!.png" alt="Contact Us Image" className="w-full max-w-xs h-auto"/>
            </div>
        </div>

        
    </div>
</section>

  )
}

export default CreateBlog
