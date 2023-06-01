import React from "react";

const Contact = () => {
  const email = "jonathanmhaws1@gmail.com";
  const mailtoLink = `mailto:${email}`;
  return (
    <section id='contact'>
      <p><span>Phone Number</span> 385-352-5881</p>
      <p><span>Email</span> <a href={mailtoLink}>{email}</a></p>
      <p><span>LinkedIn</span><a href="https://linkedin.com/in/jonathan-haws-7b0b4a243"> jonathan-haws-7b0b4a243 </a></p>
      <p><span>Github</span><a href="https://github.com/JonathanHaws"> JonathanHaws </a></p>
    </section>
  );
};

export default Contact;