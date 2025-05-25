import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            We are a premier CA firm specializing in taxation, audit, GST, and business consulting. Our expert team is dedicated to providing reliable and personalized service to help your business grow.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#!" aria-label="Facebook" className="hover:text-blue-600 transition-colors" >
              <svg className="w-6 h-6 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M22.675 0h-21.35C.599 0 0 .598 0 1.333v21.334C0 23.402.599 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.414c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.919.001c-1.504 0-1.795.715-1.795 1.764v2.313h3.588l-.467 3.622h-3.121V24h6.116C23.4 24 24 23.402 24 22.667V1.333C24 .598 23.4 0 22.675 0z"/></svg>
            </a>
            <a href="#!" aria-label="Twitter" className="hover:text-blue-400 transition-colors" >
              <svg className="w-6 h-6 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.954 4.57c-.885.39-1.83.654-2.825.775a4.932 4.932 0 0 0 2.163-2.724 9.865 9.865 0 0 1-3.127 1.196 4.916 4.916 0 0 0-8.379 4.482A13.937 13.937 0 0 1 1.67 3.149a4.917 4.917 0 0 0 1.523 6.574A4.89 4.89 0 0 1 .964 9.17v.062a4.916 4.916 0 0 0 3.946 4.813 4.935 4.935 0 0 1-2.21.084 4.919 4.919 0 0 0 4.59 3.417 9.868 9.868 0 0 1-6.102 2.101c-.395 0-.787-.023-1.175-.067a13.945 13.945 0 0 0 7.557 2.213c9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.42-.015-.63A9.936 9.936 0 0 0 24 4.59z"/></svg>
            </a>
            <a href="#!" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors" >
              <svg className="w-6 h-6 fill-current" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M22.23 0H1.77C.792 0 0 .77 0 1.722v20.555C0 23.23.792 24 1.77 24h20.458c.978 0 1.77-.77 1.77-1.723V1.722C24 .77 23.208 0 22.23 0zM7.12 20.452H3.56v-11.19h3.56v11.19zM5.34 7.936c-1.142 0-2.068-.933-2.068-2.08 0-1.15.926-2.08 2.068-2.08 1.147 0 2.073.93 2.073 2.08 0 1.147-.926 2.08-2.073 2.08zm14.28 12.516h-3.56v-5.877c0-1.406-.03-3.215-1.96-3.215-1.964 0-2.264 1.534-2.264 3.11v5.982h-3.56v-11.19h3.42v1.527h.048c.476-.9 1.638-1.85 3.374-1.85 3.61 0 4.277 2.375 4.277 5.455v6.058z"/></svg>
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <a href="#!" className="hover:text-white transition-colors">GST Registration & Filing</a>
            </li>
            <li>
              <a href="#!" className="hover:text-white transition-colors">Tax Audit & Compliance</a>
            </li>
            <li>
              <a href="#!" className="hover:text-white transition-colors">Business Consulting</a>
            </li>
            <li>
              <a href="#!" className="hover:text-white transition-colors">Accounting & Bookkeeping</a>
            </li>
            <li>
              <a href="#!" className="hover:text-white transition-colors">Financial Planning</a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#!" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#!" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#!" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#!" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#!" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              <span className="block">BC-61 Bawana Sec-3</span>
              <span className="block">Industrial Area, DSIIDC Bawana 110039</span>
            </li>
            <li>Email: <a href="mdmandcobawana@gmail.com" className="hover:text-white">mdmandcobawana@gmail.com</a></li>
            <li>Phone: <a href="tel:+919891479860" className="hover:text-white">+91 98914 79860</a></li>
            <li>Mon - Set: 10:00 AM - 7:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Your MDM AND COMPANY. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

