import React, { useState } from 'react';

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formValues.name.trim()) errors.name = 'Name is required';
    if (!formValues.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formValues.subject.trim()) errors.subject = 'Subject is required';
    if (!formValues.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setFormSubmitted(true);
      // Reset form or further submission logic here
      setFormValues({ name: '', email: '', subject: '', message: '' });
    } else {
      setFormSubmitted(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-12 p-6 border border-gray-300 rounded-md shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Us</h2>
      {formSubmitted && (
        <div className="mb-4 p-3 text-green-800 bg-green-100 border border-green-300 rounded">
          Message sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
            Name<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 
              ${formErrors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            placeholder="Your full name"
            aria-invalid={!!formErrors.name}
            aria-describedby="name-error"
          />
          {formErrors.name && (
            <p id="name-error" className="text-sm text-red-600 mt-1">
              {formErrors.name}
            </p>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
            Email<span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 
              ${formErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            placeholder="you@example.com"
            aria-invalid={!!formErrors.email}
            aria-describedby="email-error"
          />
          {formErrors.email && (
            <p id="email-error" className="text-sm text-red-600 mt-1">
              {formErrors.email}
            </p>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="subject" className="block mb-1 font-medium text-gray-700">
            Subject<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formValues.subject}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 
              ${formErrors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            placeholder="Subject of your message"
            aria-invalid={!!formErrors.subject}
            aria-describedby="subject-error"
          />
          {formErrors.subject && (
            <p id="subject-error" className="text-sm text-red-600 mt-1">
              {formErrors.subject}
            </p>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
            Message<span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formValues.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded resize-y focus:outline-none focus:ring-2 
              ${formErrors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            placeholder="Write your message here"
            aria-invalid={!!formErrors.message}
            aria-describedby="message-error"
          ></textarea>
          {formErrors.message && (
            <p id="message-error" className="text-sm text-red-600 mt-1">
              {formErrors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
