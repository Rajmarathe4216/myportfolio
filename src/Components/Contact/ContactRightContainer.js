import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const ContactRightContainer = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const usernameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  // Email validation
  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // Phone number validation
  const phoneValidation = () => {
    return String(phoneNumber)
      //.toLowerCase()
      .match(/^\d{10}$/);
  };

  // Scroll to the specific input field with error
  const scrollToField = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    ref.current.focus();
  };

  // Empty fields validation
  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Name is required!");
      scrollToField(usernameRef);
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
      scrollToField(phoneNumberRef);
    } else if (!phoneValidation(phoneNumber)) {
      setErrMsg("Provide a valid Phone number!");
      scrollToField(phoneNumberRef);
    }else if (email === "") {
      setErrMsg("Email is required!");
      scrollToField(emailRef);
    } else if (!emailValidation(email)) {
      setErrMsg("Provide a valid Email!");
      scrollToField(emailRef);
    } else if (subject === "") {
      setErrMsg("Please provide your subject!");
      scrollToField(subjectRef);
    } else if (message === "") {
      setErrMsg("Message is required!");
      scrollToField(messageRef);
    } else {
      setSuccessMsg("Your message has been sent successfully!");
      setTimeout(() => {
        setSuccessMsg(false);
      }, 2000);
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
      console.log(username, phoneNumber, email, subject, message);
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0,y:100 }}
    whileInView={{ opacity: 1,y:0 }}
    transition={{duration:1}} className="contactFormContainer">
      <form className='formContainer'>
        <div className='formSection'>
          <div className='formfield'>
            <p>Your name</p>
            <input
              ref={usernameRef}
              className='contactInput'
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            {errMsg==="Name is required!" && <p className='errText'>{errMsg}</p>}
          </div>
          <div className='formfield'>
            <p>Number</p>
            <input
              ref={phoneNumberRef}
              className='contactInput'
              type="tel"
              placeholder='eg.1234567890'
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
            {errMsg==="Phone number is required!" && <p className='errText'>{errMsg}</p>}
            {errMsg==="Provide a valid Phone number!" && <p className='errText'>{errMsg}</p>}
          </div>
        </div>
        <div className='formSection'>
          <div className='formfield'>
            <p>Email</p>
            <input
              ref={emailRef}
              className='contactInput'
              type="email"
              placeholder='eg.johnxyz@gmail.com'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {errMsg==="Email is required!" && <p className='errText'>{errMsg}</p>}
            {errMsg==="Provide a valid Email!" && <p className='errText'>{errMsg}</p>}
          </div>
        </div>
        <div className='formSection'>
          <div className='formfield'>
            <p>Subject</p>
            <input
              ref={subjectRef}
              className='contactInput'
              type="text"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
            {errMsg==="Please provide your subject!" && <p className='errText'>{errMsg}</p>}
          </div>
        </div>
        <div className='formSection'>
          <div className='formfield'>
            <p>Message</p>
            <textarea
              ref={messageRef}
              className='contactTextarea'
              cols="30"
              rows="8"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            {errMsg==="Message is required!" && <p className='errText'>{errMsg}</p>}
          </div>
        </div>
        <div className='formSection'>
          <button onClick={handleSend} className='contactButton'>Send Your Details</button>
        </div>
        {successMsg && <p className='successText'>{successMsg}</p>}
      </form>
    </motion.div>
  );
}

export default ContactRightContainer;
