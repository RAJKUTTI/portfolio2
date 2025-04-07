// // components/ContactForm.js
// import React, { useState } from 'react';
// import styles from '@/styles/Contact.module.css';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import XIcon from '@mui/icons-material/X';
// import InstagramIcon from '@mui/icons-material/Instagram';
// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form data submitted:', formData);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.leftSide}>
//       <h1 className={styles.title}>Contact Me for Collaboration</h1>
//         <p className={styles.title2}>Reach out today to discuss your project needs and start collaborating on something amazing!</p>
//         <div className={styles.socialIcons}>
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer">
//             <GitHubIcon className={styles.icon}/>
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//             <LinkedInIcon className={styles.icon}/>
//           </a>
//           <a href="mailto:someone@example.com">
//            <XIcon className={styles.icon}/>
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//            <InstagramIcon className={styles.icon}/>
//           </a>
//         </div>
//       </div>
//       <form onSubmit={handleSubmit} className={styles.form}>
//        <span className={styles.name}>
//         <label className={styles.label}>
//           <span className='formtitle'>Name</span>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className={styles.input}
//             placeholder='S.David Raja'
//           />
//         </label>
//         <label>
//           Email
//           <input
//             type="email"
//             name="email"
//             placeholder='Raja2003@gmail.com'
//             value={formData.email}
//             onChange={handleChange}
//           className={styles.input} />
//         </label> 
//         </span>
//         <label> 
//           Message
//           <textarea
//             name="message"
//             placeholder='Hi!'
//             // style={{height:'130px', width:'113%'}}
//             value={formData.message}
//             onChange={handleChange}
//             className={styles.message}
//           />
//         </label>
//         <button type="submit" className={styles.btn}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;



// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import styles from '@/styles/Contact.module.css';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email'; // Corrected icon
// import InstagramIcon from '@mui/icons-material/Instagram';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     emailjs.send(
//       'raja8124', // Replace with your EmailJS service ID
//       'template_sk2rz0t', // Replace with your template ID
//       {
//         from_name: formData.name,
//         from_email: formData.email,
//         message: formData.message,
//       },
//       '7dEGxhvE3VnZuQZWt' // Replace with your EmailJS public key
//     )
//     .then((result) => {
//         console.log(result.text);
//         alert('Message sent!');
//     }, (error) => {
//         console.log(error.text);
//         alert('Failed to send message.');
//     });

//     // Reset form after submission
//     setFormData({
//       name: '',
//       email: '',
//       message: '',
//     });
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.leftSide}>
//         <h1 className={styles.title}>Contact Me for Collaboration</h1>
//         <p className={styles.title2}>
//           Reach out today to discuss your project needs and start collaborating on something amazing!
//         </p>
//         <div className={styles.socialIcons}>
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer">
//             <GitHubIcon className={styles.icon}/>
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//             <LinkedInIcon className={styles.icon}/>
//           </a>
//           <a href="mailto:someone@example.com">
//             <EmailIcon className={styles.icon}/> {/* Fixed icon */}
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//             <InstagramIcon className={styles.icon}/>
//           </a>
//         </div>
//       </div>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <div className={styles.name}>
//           <label className={styles.label}>
//             Name
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className={styles.input}
//               placeholder='S.David Raja'
//               required
//             />
//           </label>
//           <label>
//             Email
//             <input
//               type="email"
//               name="email"
//               placeholder='Raja2003@gmail.com'
//               value={formData.email}
//               onChange={handleChange}
//               className={styles.input}
//               required
//             />
//           </label>
//         </div>
//         <label>
//           Message
//           <textarea
//             name="message"
//             placeholder='Hi!'
//             value={formData.message}
//             onChange={handleChange}
//             className={styles.message}
//             required
//           />
//         </label>
//         <button type="submit" className={styles.btn}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from 'react';
import styles from '@/styles/Contact.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import Github from '@/components/Github'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      alert('Error sending message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1 className={styles.title}>Contact Me for Collaboration</h1>
        <p className={styles.title2}>
          Reach out today to discuss your project needs and start collaborating on something amazing!
        </p>
        <div className={styles.socialIcons}>
          <a href="https://github.com/RAJKUTTI" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className={styles.icon}/> 
          
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className={styles.icon}/>
          </a>
          <a href="https://mail.google.com/mail/u/0/#sent">
            <EmailIcon className={styles.icon}/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className={styles.icon}/>
          </a>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.name}>
          <label className={styles.label}>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              placeholder="Eg: S.David Raja"
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter your email id"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </label>
        </div>
        <label>
          Message
          <textarea
            name="message"
            placeholder="Eg: Hi!"
            value={formData.message}
            onChange={handleChange}
            className={styles.message}
            required
          />
        </label>
        <button type="submit" className={styles.btn} disabled={loading}>
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
