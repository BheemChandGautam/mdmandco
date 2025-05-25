function About() {
    return (
        <>
            <div className="bg-[#f1f1f1] p-5 md:p-10 lg:p-15">
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10">About Us</p>
                <div className="flex md:ml-20 flex-col md:flex-row items-center md:space-x-10">
                    <img 
                        className="w-full md:w-1/2 rounded-lg shadow-lg" 
                        src="https://images.pexels.com/photos/8353769/pexels-photo-8353769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="About Us" 
                    />
                    <div className="mt-5 md:mr-20 md:mt-0 md:w-1/2">
                        <p className="text-3xl font-bold">Mdm and Company</p>
                        <p className="text-lg mt-2 text-justify">MDM & CO chartered accountant firm is one of the best firms in India. We have a large group not only in Gurugram but also six branches established in India with experienced employees who have been working with us for the last 42 years.</p>
                        <p className="text-lg mt-3 text-justify">As a leading CA and audit firm in Gurgaon and Delhi, our strength comes from a dedicated team that works round the clock for our clients. Our team combines their expert knowledge, learning attitude, and professional ethics to provide the best quality services in the most cost-effective way, delivering top-notch solutions to our clients’ business needs.</p>
                        <p className="text-lg mt-3 text-justify">Over time, our CA firm has consistently delivered valuable quality and top-notch services to our clients. You are just one step away to connect with us.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
