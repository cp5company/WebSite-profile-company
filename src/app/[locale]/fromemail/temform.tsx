"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

interface Connect {
  title: string;
  name: string;
  email: string;
  description: string;
}

const ContactForm: React.FC<{ conncetinf: Connect }> = ({ conncetinf }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Abdulfattah", // اسم المستلم
      from_name: name, // اسم المرسل
      message: message, // محتوى الرسالة
    };

    emailjs
      .send(
        "service_3cky0u2", // ID الخاص بالخدمة
        "template_4w0105l", // ID الخاص بالقالب
        templateParams,
        "-SmBIzKapW_Wak6Av" // مفتاح المستخدم
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setIsSent(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <div className="p-4 max-w-md mx-auto w-full">
      <h2 className="text-2xl text-center font-bold mb-4">
        {conncetinf.title}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
        <div style={{ display: "none" }} aria-hidden="true">
          <input type="text" autoComplete="username" />
          <input type="email" autoComplete="email" />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700 dark:text-white p-4">
            {conncetinf.name}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="new-name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700 dark:text-white p-4">
            {conncetinf.email}
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="new-email"
            className="mt-1 p-2 w-full border  border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700 dark:text-white p-4">
            {conncetinf.description}
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            autoComplete="off"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </form>
      {isSent && (
        <p className="text-green-500 mt-4">
          Your message has been sent successfully!
        </p>
      )}
    </div>
  );
};

export default ContactForm;
    