"use client";

export const ContactForm = () => {
  return (
    <section className="pt-8 mb-8 lg:pt-16">
      <div className="main__container grid gap-8 lg:grid-cols-2 lg:items-center ">
        <div className="col-span-1 lg:py-8">
          <h1 className="uppercase">Contact</h1>
          <h2 className="text-[52px] my-6 lg:text-7xl lg:!leading-[105px] 2xl:text-8xl ">
            {`Let's Talk Branding`}
          </h2>
          <p className="mb-12 text-lg lg:text-2xl lg:mb-20 lg:!leading-relaxed xl:mb-32">
            {`From strategy to execution, we're here to help you achieve your
            branding goals.`}
          </p>
        </div>
        <div className="col-span-1 h-full bg-aqua-haze p-8 lg:p-16">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="name" className="uppercase">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border p-4"
              />
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="email" className="uppercase">
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                className="border p-4"
              />
            </div>
            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="message" className="uppercase">
                Message
              </label>
              <textarea
                rows={5}
                name="message"
                placeholder="Your Message"
                className="border p-4"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white inline-block border border-ablack rounded-full  transition-all px-4 py-3 lg:px-6 lg:py-4 hover:opacity-80"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
