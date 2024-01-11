export const Contact = () => {
  return (
    <>
      <div
        className="flex items-center justify-center w-full h-full px-5 py-6 text-[var(--text-primary)]"
        id="contact-section"
      >
        <div className="max-w-[1700px] w-full flex flex-col gap-8 py-10">
          <div className="relative flex flex-col w-full">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] ">
              Contacts
            </h2>
            <p className="text-sm text-[var(--grey-text)] py-3 px-2">
              Connect with me
            </p>
            <div className="absolute border-b-4 border-[var(--primary-color)] w-[60px] left-[5px] bottom-[40px] "></div>
          </div>
          <div className="grid grid-cols-1 px-5 py-7">
            <form
              className="grid grid-cols-1 grid-rows-3 gap-5 place-items-center"
              action={import.meta.env.VITE_FORM_ENDPOINT}
              method="POST"
            >
              <div className="grid items-center grid-cols-1 gap-5 px-4 py-2 sm:grid-cols-3 ">
                <label
                  htmlFor="name"
                  className="text-md w-full sm:max-w-[250px] text-left text-[var(--grey-text)] sm:col-span-1 sm:text-right"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="px-5 py-2 text-md bg-transparent border rounded-md border-[var(--primary-color)] hover:border-[var(--hover-color)] outline-none sm:col-span-2 focus:outline-none"
                  required
                  name="Name"
                  autoComplete="off"
                />
              </div>

              <div className="grid items-center grid-cols-1 gap-5 px-4 py-2 sm:grid-cols-3 ">
                <label
                  htmlFor="email"
                  className="text-md w-full sm:max-w-[250px] text-left text-[var(--grey-text)] sm:col-span-1 sm:text-right"
                >
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  className="px-5 py-2 text-md bg-transparent border rounded-md border-[var(--primary-color)] hover:border-[var(--hover-color)] outline-none sm:col-span-2 focus:outline-none"
                  required
                  autoComplete="off"
                  name="Email"
                />
              </div>
              <div className="grid items-center grid-cols-1 gap-5 px-4 py-2 sm:grid-cols-3 ">
                <label
                  htmlFor="message"
                  className="text-md w-full sm:max-w-[250px] text-left text-[var(--grey-text)] sm:col-span-1 sm:text-right"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  className="px-5 py-2 text-md bg-transparent border rounded-md border-[var(--primary-color)] hover:border-[var(--hover-color)] outline-none sm:col-span-2 focus:outline-none"
                  required
                  autoComplete="off"
                  name="Message"
                  maxLength={120}
                />
              </div>

              <div className="grid items-center grid-cols-1 gap-5 px-4 py-2 sm:grid-cols-3 ">
                <button className="px-5 py-4 text-lg   rounded-md bg-[var(--primary-color)] hover:bg-[var(--hover-color)] outline-none sm:col-span-2 focus:outline-none w-full text-[var(--background-color)] font-bold tracking-wider">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
