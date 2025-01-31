"use client";
import Navbar from "@/components/navbar"
import React, { useState, FormEvent } from "react";
import {  FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdSend } from "react-icons/md";
import Features from '@/components/features';
import Footer from '@/components/footer'

const Contact = () => {
  const [btnHover, setBtnHover] = useState(false);
  const [btnClick, setBtnClick] = useState(false);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBtnClick(true);
    setResult("Sending...");

    setTimeout(() => {
      setBtnClick(false);
    }, 500);

    const formData = new FormData(event.target as HTMLFormElement);

    // Use your Web3Forms Access Key here
    formData.append("access_key", "218de58b-9b19-41ec-b356-824d07903ff4");

    try {
      const response = await fetch("", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
       
      } else {
        setResult("Submission failed. Please try again.");
      }
    } catch (error) {
      setResult("There was an error submitting the form.");
      if (process.env.NODE_ENV === "development") {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div className="bg-[#FCF8F3]">
      <Navbar/>
      <div className="back bg-cover bg-center h-60 flex items-center justify-center"> 
      <div className="text-white flex items-center space-x-2">
              <span>Home</span>
              <span>/</span>
              <span>Contact</span>
            </div>
            
      </div>

      <section className="contact-us">
      <div className="row">
        <div className="contact-col">
            <div>
            <span>
              <h5><FaHome /> XYZRoad, ABC Building</h5>
              <p>KARACHI, SHAH LATIF ,IN</p>
            </span>
          </div>
          <div>
            <span>
              <h5><FaHome /> XYZRoad, ABC Building</h5>
              <p>KARACHI, SHAH LATIF ,IN</p>
            </span>
          </div>
              <div>
            <span>
              <h5><MdEmail /> 1234676@gmail.com</h5>
              <p>EMAIL US YOUR QUERYE</p>
            </span>
          </div>
          </div> 

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2 p-6 bg-white border rounded-md shadow-md">
            <form onSubmit={submitHandler} className="space-y-4">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full border p-2 rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full border p-2 rounded-md"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full border p-2 rounded-md"
              />
              <textarea
                name="message"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Message"
                rows={5}
                className="w-full border p-2 rounded-md"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#B88E2F] text-white w-full p-2 rounded-md flex items-center justify-center gap-2"
                onMouseEnter={() => setBtnHover(true)}
                onMouseLeave={() => setBtnHover(false)}
              >
                <h3>Send</h3>
                <MdSend
                  className={`h-5 w-5 ${btnHover && "scale-125 duration-100"} ${btnClick && "translate-x-20 opacity-0 duration-300"}`}
                />
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="text-center pt-10 text-gray-600">
        <p>{result}</p>
      </div>
      <Features />
<Footer/>
      <footer className="bg-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2023 Furniro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
