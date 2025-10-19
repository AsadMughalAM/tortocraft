"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Upload, X } from "lucide-react";
import CTA from "@/components/CTA/CTA";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [files, setFiles] = useState([]);

  const onSubmit = async (data) => {
    try {
      // Create FormData to handle files + text
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone || "");
      formData.append("subject", data.subject);
      formData.append("message", data.message);

      files.forEach((file) => formData.append("files", file));

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData, // no headers for multipart
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll contact you soon.", {
          position: "top-right",
          autoClose: 4000,
        });
        reset();
        setFiles([]);
      } else {
        const errorData = await response.json();
        toast.error(errorData?.error || "Failed to send message.", {
          position: "top-right",
          autoClose: 4000,
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Error sending message. Please try again.", {
        position: "top-right",
        autoClose: 4000,
      });
    }
  };

  const handleFileUpload = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <main className="bg-[#f5f3ee] min-h-screen text-[#3b2f2f]">
      {/* Hero Section */}
      <section className="bg-[#3b2f2f] text-[#f5f3ee] h-100 py-32 px-6 text-center">
      
          <h1 className="uppercase tracking-widest text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight px-2 mb-4">
            Get In <span className="text-[#c19a6b] font-medium">Touch</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl leading-normal font-light italic opacity-90">
            "We're here to help you craft your perfect garment."
          </p>
        
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-7xl mx-auto grid lg:grid-cols-5 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-3xl font-semibold border-b pb-3 border-gray-300">
            Reach Out to <span className="text-[#c19a6b]">Our Team</span> 
          </h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <MapPin size={28} className="flex-shrink-0 text-[#c19a6b] mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Our Atelier</h3>
                <p className="text-gray-700 font-light">
                  7901 4th ST N STE 7236, Florida City, Florida 33702
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail size={28} className="flex-shrink-0 text-[#c19a6b] mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-1">Email Support</h3>
                <p className="text-gray-700 font-light">
                  tortocraft415@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8 bg-white shadow-xl border border-gray-100 h-[400px] overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.685315148585!2d-82.64856782392504!3d27.75182337604425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e311b6e3b3b3%3A0x5f6c5e9b6b5e5e5e!2s7901%204th%20St%20N%2C%20St%20Petersburg%2C%20FL%2033702%2C%20USA!5e0!3m2!1sen!2s!4v1699876543210!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TORTOCRAFT Atelier Location"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-medium mb-6 text-[#3b2f2f]">
            Send Us a Message
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 bg-white p-6 shadow-xl border border-gray-100 rounded-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: "Name is required",
                    minLength: { value: 2, message: "Name too short" },
                  })}
                  className="w-full border p-2 rounded-sm focus:border-[#c19a6b] focus:ring-2 focus:ring-[#c19a6b]"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                  })}
                  className="w-full border p-2 rounded-sm focus:border-[#c19a6b] focus:ring-2 focus:ring-[#c19a6b]"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                {...register("phone")}
                className="w-full border p-2 rounded-sm focus:border-[#c19a6b] focus:ring-2 focus:ring-[#c19a6b]"
                placeholder="Enter Your Phone Number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Subject *
              </label>
              <select
                {...register("subject", { required: "Subject is required" })}
                className="w-full border p-2 rounded-sm focus:border-[#c19a6b] focus:ring-2 focus:ring-[#c19a6b]"
              >
                <option value="">Select a subject</option>
                <option value="customization">Customization Query</option>
                <option value="measurements">Measurement Help</option>
                <option value="fabric">Fabric Selection</option>
                <option value="shipping">Shipping Information</option>
                <option value="other">Other</option>
              </select>
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Upload Sample Images
              </label>
              <div className="border-2 border-dashed rounded-lg p-4 text-center hover:border-[#c19a6b]">
                <input
                  type="file"
                  multiple
                  accept="image/*,.pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload size={32} className="text-[#c19a6b] mb-1" />
                  <span className="text-sm text-gray-700">
                    Click to upload files
                  </span>
                </label>
              </div>

              {files.length > 0 && (
                <div className="mt-2 space-y-1">
                  {files.map((file, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-gray-50 p-2 rounded-sm"
                    >
                      <span className="truncate">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Your Message *
              </label>
              <textarea
                rows="4"
                {...register("message", {
                  required: "Message required",
                  minLength: { value: 10, message: "Message too short" },
                })}
                className="w-full border p-2 rounded-sm focus:border-[#c19a6b] focus:ring-2 focus:ring-[#c19a6b]"
                placeholder="Tell us about your design needs, measurements, or any specific requirements..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#c19a6b] text-[#3b2f2f] font-bold uppercase rounded-sm shadow-lg hover:bg-[#b08a5f] disabled:bg-[#3b2f2f] disabled:text-gray-50 flex justify-center items-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#3b2f2f] mr-2"></div>
                  Sending...
                </>
              ) : (
                "Submit Inquiry"
              )}
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}
