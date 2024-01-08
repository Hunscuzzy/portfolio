export default function About() {
  return (
    <section
      id='👤'
      className='bg-gradient-to-tr dark:from-gray-950 dark:to-indigo-950 from-gray-50 to-indigo-300  min-h-screen flex items-center py-16 px-4'
    >
      <div className='container mx-auto'>
        <h2 className='section-title'>about me</h2>
        <p className='-mt-2 mb-2 text-2xl'>🇫🇷 🇪🇸 🇬🇧</p>
        <div className='flex flex-col sm:flex-row sm:space-x-16 justify-center'>
          <p className='flex-1 max-w-md'>
            Driven by a passion for entrepreneurship since the age of 17, I am a
            28-year-old husband and father, based in Spain. My career,
            predominantly as a front-end developer, showcases a deep commitment
            to leveraging my skills in React.js, Typescript and other modern
            technologies to create user-friendly and efficient interfaces with
            10 years of self-learning experiences under my belt.
            <br />
          </p>
          <p className='flex-1 max-w-md mt-8'>
            Currently employed at Purse and with a valuable stint at
            Upstreampay, my focus is not just on coding but on learning and
            growing with each project. I am always eager to embrace new
            challenges, and I am committed to using my knowledge to help others
            and push the limits of web technology, all while maintaining a
            human-centered approach in my work.
          </p>
        </div>
      </div>
    </section>
  );
}
