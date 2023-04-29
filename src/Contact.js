import React from "react";

const Contact = () => {
  const email = "jonathanmhaws1@gmail.com";
  const mailtoLink = `mailto:${email}`;
  return (
    <section id='contact'>
      <p><span>Phone Number</span> 385-352-5881</p>
      <p><span>Github</span><a href="https://github.com/JonathanHaws"> github.com/JonathanHaws </a></p>
      <p><span>Email</span> <a href={mailtoLink}>{email}</a></p>
    </section>
  );
};

export default Contact;