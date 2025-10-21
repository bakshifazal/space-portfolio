"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // Simulate form submission - In production, replace with your API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Log the form data (in production, this would be sent to your backend)
      console.log("Form submitted:", formData);

      // Show success message
      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-screen w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl w-full"
      >
        {/* Title */}
        <motion.div
          variants={slideInFromTop}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="space-y-6 sm:space-y-8"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20 hover:bg-purple-500/20 transition-all duration-300">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <HiOutlineMail className="text-2xl text-cyan-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a
                    href="mailto:fazalbakshi@example.com"
                    className="text-base sm:text-lg font-medium text-white hover:text-cyan-500 transition"
                  >
                    fazalbakshi@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20 hover:bg-cyan-500/20 transition-all duration-300">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <HiOutlinePhone className="text-2xl text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-base sm:text-lg font-medium text-white hover:text-purple-500 transition"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20 hover:bg-purple-500/20 transition-all duration-300">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <HiOutlineLocationMarker className="text-2xl text-cyan-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-base sm:text-lg font-medium text-white">
                    Available Worldwide
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={slideInFromRight(0.5)}
            className="bg-gradient-to-br from-[#0f0c29]/80 via-[#1a1347]/80 to-[#24243e]/80 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-purple-500/30 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f0c29]/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition"
                  placeholder="Fazal Bakshi"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f0c29]/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0f0c29]/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition"
                  placeholder="How can I help you?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0f0c29]/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-500/20 border border-green-500/50 text-green-300"
                      : "bg-red-500/20 border border-red-500/50 text-red-300"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
