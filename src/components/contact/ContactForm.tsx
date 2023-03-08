import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface Form {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<Form>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_owlmrg3",
        "template_cn0euej",
        {
          from_name: formData.name,
          to_name: "Sergii",
          from_email: formData.email,
          to_email: "kryvetskyis@gmail.com",
          message: formData.message,
        },
        "Vq3vrfpnYBLueYXN1"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you as soon as possible");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong");
        }
      );
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "name")
      setFormData({
        name: e.target.value,
        email: formData.email,
        message: formData.message,
      });
    if (e.target.name === "email")
      setFormData({
        name: formData.name,
        email: e.target.value,
        message: formData.message,
      });
  };
  const handleTextAreaOnChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      name: formData.name,
      email: formData.email,
      message: e.target.value,
    });
  };
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mt-12 flex flex-col gap-8"
    >
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Your name</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleOnChange}
          placeholder="Enter your name"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Your email</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
          placeholder="Enter your email"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>
      <label className="flex flex-col">
        <span className="text-white font-medium mb-4">Your message</span>
        <textarea
          rows={7}
          name="message"
          value={formData.message}
          onChange={handleTextAreaOnChange}
          placeholder="Enter your message"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
        />
      </label>
      <button
        type="submit"
        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};
