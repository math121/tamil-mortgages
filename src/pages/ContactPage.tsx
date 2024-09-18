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
        <label className="font-semibold">Address:</label>
        <address className="mb-4">
          All Credit Mortgages
          <br />
          Lansbury drive
          <br />
          London
          <br />
          UB4 8SD
        </address>
        <label className="font-semibold">Email address:</label>
        <p className="mt-0">info@allcreditmortgages.co.uk</p>
        <label className="font-semibold">Phone Number:</label>
        <p className="my-0">07799752777</p>
      </div>
      <img
        className="object-cover h-56 w-full pt-9 lg:hidden"
        src="/src/assets/contact-us-image.jpg"
        alt="Picture with UK houses"
      />
    </div>
  );
};
