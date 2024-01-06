import ContactForm from "../contactForm";

export default function Contact() {
  return (
    <section
      id='💬'
      className='dark:bg-black bg-white px-6 py-24 sm:py-32 lg:px-8'
    >
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='section-title'>wanna reach me?</h2>
        <p className='mt-2 text-lg'>
          Got a project in mind? <br /> Let&apos;s make it happen! Drop me a
          line below.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
