"use client";

import React, { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
  website: string;
  budget: string;
  deadline: string;
};

type StatusType = "idle" | "loading" | "success" | "error";

type Status = {
  type: StatusType;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    website: "",
    budget: "",
    deadline: "",
  });

  const [status, setStatus] = useState<Status>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      type ApiResponse = { error?: string; hint?: string };
      const resultUnknown: unknown = await response.json().catch(() => ({}));
      const result: ApiResponse =
        resultUnknown && typeof resultUnknown === "object"
          ? (resultUnknown as ApiResponse)
          : {};

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({
          name: "",
          email: "",
          message: "",
          website: "",
          budget: "",
          deadline: "",
        });
      } else {
        setStatus({
          type: "error",
          message: result?.error || result?.hint || "Failed to send message.",
        });
      }
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again." });
    }
  };

  return (
    <>
      <div
        className={
          "contact_container flex flex-col gap-4 max-w-2xl mx-auto p-4"
        }
      >
        <h2>Connect with me, lets build something</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="First, Last"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="youremail@email.com"
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Whats are you trying to create, Landing page, E-commerce, Blog, Portfolio, etc.?"
              rows={5}
            />
          </div>
          <div>
            <label htmlFor="website">Current Website URL</label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://yourwebsite.com"
            />
          </div>

          <div>
            <label htmlFor="budget">What is your estimated budget</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            >
              <option value="">Please Select</option>
              <option value="under-1000">Under $1000</option>
              <option value="1000-2000">$1000-$2000</option>
              <option value="2000-3000">$2000-$3000</option>
              <option value="I'm not sure">I'm not sure</option>
            </select>
          </div>

          <div>
            <label htmlFor="deadline">Do you have a Deadline?</label>
            <select
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
            >
              <option value="">Please Select</option>
              <option value="< month">Less than a Month</option>
              <option value="1 Month">1 Month</option>
              <option value="2 Months">2 Months</option>
              <option value="I'm not sure">I'm not sure</option>
              <option value="no deadline">No Deadline</option>
            </select>
          </div>

          <button type="submit" disabled={status.type === "loading"}>
            {status.type === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
        {status.message && (
          <div
            className={`mt-4 ${
              status.type === "success"
                ? "bg-green-100 text-green-700 border border-green-200"
                : status.type === "error"
                ? "bg-red-100 text-red-700 border border-red-200"
                : "bg-blue-100 text-blue-700 border border-blue-200"
            }`}
          >
            {status.message}
          </div>
        )}
      </div>
    </>
  );
}
