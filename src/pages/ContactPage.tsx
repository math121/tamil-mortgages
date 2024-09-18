export const ContactPage = () => {
  return (
    <div className="pl-2 lg:flex gap-20">
      <img
        className="w-7/12 pt-9 hidden lg:block"
        src="/src/assets/contact-us-image.jpg"
        alt="Picture with UK houses"
      />
      <div className="lg:self-center">
        <h1>Contact us</h1>
        <div className="grid grid-cols-2 lg:grid-cols-1">
          <div>
            <label className="font-semibold">Address:</label>
            <address className="mb-4">
              Lorem ipsum, <br />
              Dolores ipsa, <br />
              exercitationem
            </address>
          </div>
          <div>
            <label className="font-semibold">Email address:</label>
            <p className="mt-0">Lorem@ipsum.com</p>
            <label className="font-semibold">Phone Number:</label>
            <p className="my-0">#########</p>
          </div>
        </div>
      </div>
      <img
        className="object-cover h-56 w-full pt-9 lg:hidden"
        src="/src/assets/contact-us-image.jpg"
        alt="Picture with UK houses"
      />
    </div>
  );
};
