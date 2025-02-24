"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      // TODO: Implement form submission
      // For now, simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 transition-colors duration-200 dark:text-white font-mono">
          Get in Touch
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium transition-colors duration-200 dark:text-white mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200
                bg-white dark:bg-gray-800 
                ${
                  errors.name
                    ? "border-red-500 dark:border-red-400"
                    : "border-neutral-200 dark:border-neutral-600"
                }
                focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium transition-colors duration-200 dark:text-white mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200
                bg-white dark:bg-gray-800 
                ${
                  errors.email
                    ? "border-red-500 dark:border-red-400"
                    : "border-neutral-200 dark:border-neutral-600"
                }
                focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium transition-colors duration-200 dark:text-white mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`w-full px-4 py-2 rounded-lg border transition-colors duration-200
                bg-white dark:bg-gray-800 
                ${
                  errors.message
                    ? "border-red-500 dark:border-red-400"
                    : "border-neutral-200 dark:border-neutral-600"
                }
                focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500 dark:text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-200
              ${
                isSubmitting
                  ? "bg-neutral-300 dark:bg-neutral-600 cursor-not-allowed"
                  : "bg-accent-dark dark:bg-accent-light text-white dark:text-gray-900 hover:opacity-90"
              }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <p className="text-green-500 dark:text-green-400 text-center">
              Message sent successfully!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-500 dark:text-red-400 text-center">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
