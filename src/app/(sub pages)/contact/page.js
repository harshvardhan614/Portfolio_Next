import Image from "next/image";
import bg from "../../../../public/background/contact.png";
import ContactForm from "@/components/contact/ContactForm";
import ContactDetail from "@/components/contact/ContactDetail";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-40"
      />

      <article className="relative w-full flex flex-col items-center justify-center mt-0 sm:mt-10 py-8 sm:py-0 space-y-10">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Let&apos;s Connect!
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          Have a project in mind or just want to say hello? Feel free to reach out to me using the contact form below. I am always excited to hear about new opportunities and collaborations.Fill in the form with your details and message, and I will get back to you as soon as possible. Let&apos;s create something amazing together!
          </p>
        </div>
        <ContactDetail/>
        <ContactForm/>
      </article>
    </>
  );
}