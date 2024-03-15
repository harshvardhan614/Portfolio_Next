"use client"
import React, {useState, useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import  EarthCanvas  from '@/components/canvas/EarthCanvas';
import Form from './Form';

export const SlideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 10,
      y: 10,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    number:"",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
       
        {
          from_name: form.name,
          to_name: "LST Capital Team",
          contact:form.number,
          from_email: form.email,
          to_email: "lst.finance.capital@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for your message. We will get back to you.");

          setForm({
            name: "",
            number:"",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  
  //5UJNXQiQNG1LeAe9l
// template_tjqeqt8
// service_1nm37hb
  return (
     <div
    className={`flex xl:flex-row flex-col gap-5 overflow-hidden max-w-7xl w-full items-center justify-center pt-2`}
  >
    <motion.div
      variants={SlideIn("left", "tween", 0.2, 1)}
      className='xl:flex-1 xl:h-[600px] md:h-[500px] h-[360px] cursor-pointer'
    >
      <EarthCanvas />
    </motion.div>


    <motion.div
      variants={SlideIn("right", "tween", 0.2, 1)}
      className='flex-[0.75] md:px-8 px-2 py-4 rounded-2xl'
    >
      <Form/>
    </motion.div>
        
  </div>
  )
}

export default ContactForm