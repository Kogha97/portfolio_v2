import React, { useState } from 'react'


export default function ContactMe() {

    const [formData, setFormData] = useState({
        name: '',
        email:'',
        phoneNumber: '',
        message:'',
});

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]:value,
    }))
};

const handleSubmit = (e) => {

    e.preventDefault();

    e.target.submit();

 
    alert('Message sent successfully. I will get back to you within a day.');

    setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
    });
};
return (
    <div className='ContactMe'>
        <h2>How can you contact me?</h2>
        <div>
            <p>Embarking on an exciting journey in the tech industry, I am actively seeking opportunities that will allow me to bring my passion for coding and my skills from a comprehensive full-stack web developer bootcamp to a dynamic and innovative team. My journey through technology has equipped me with a unique blend of skills, enthusiasm for solving complex problems, and a commitment to making a meaningful impact.</p>
            <p>I am looking for roles that offer challenges and growth opportunities. If your team values creativity and dedication, I would be thrilled to discuss how I can contribute.</p>
            <p>Please use the form below to contact me about job opportunities or collaborative projects. I'm eager to explore how we can achieve remarkable outcomes together.</p>
        </div>
        <div className='formContainer'>
            <form className='form' onSubmit={handleSubmit}
            action="https://formspree.io/f/xeqbbzeg"
            method='POST'>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Your Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit" className="sendButton">Send Message</button>
            </form>
        </div>
    </div>
  );
}
