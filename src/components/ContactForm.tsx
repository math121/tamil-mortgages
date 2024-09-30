import { SubmitHandler, useForm } from "react-hook-form";

type ContactFormInputs = {
  email: string;
  subject: string;
  message: string;
  phone: number;
  firstName: string;
  lastName: string;
  contactByPhone: boolean;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const handleSendEmail: SubmitHandler<ContactFormInputs> = async (data, e) => {
    const dataToSend = {
      subject: data.subject,
      full_name: data.firstName + " " + data.lastName,
      email: data.email,
      //phone
      message: data.message,
      access_key: import.meta.env.VITE_ACCESS_KEY,
    };

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then(async (response) => {
        let json = await response.json();
        console.log(json);
        if (json.success) {
          e?.target.reset();
          reset();
        } else {
          console.log(json);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      className="sm:mx-auto flex flex-col"
      onSubmit={handleSubmit(handleSendEmail)}
    >
      <h4>Contact Form</h4>
      <label htmlFor="firstName" className="py-3">
        First Name:
      </label>
      <input
        type="text"
        className="text-sm p-2 rounded border border-dark-green w-64 md:w-96"
        {...register("firstName", {
          required: "This is a required field",
        })}
      />
      <span className="text-red-600">
        {errors.firstName && errors.firstName.message}
      </span>

      <label htmlFor="lastName" className="py-3">
        Last Name:
      </label>
      <input
        type="text"
        className="text-sm p-2 rounded border border-dark-green w-64 md:w-96"
        {...register("lastName", {
          required: "This is a required field",
        })}
      />
      <span className="text-red-600">
        {errors.lastName && errors.lastName.message}
      </span>

      <label htmlFor="email" className="py-3">
        Your email:
      </label>
      <input
        type="email"
        className="text-sm p-2 rounded border border-dark-green w-64 md:w-96"
        {...register("email", {
          required: "This is a required field",
        })}
      />
      <span className="text-red-600">
        {errors.email && errors.email.message}
      </span>

      <label htmlFor="phone" className="py-3">
        Phone <i>{"(optional):"}</i>
      </label>
      <input
        type="number"
        className="text-sm p-2 rounded border border-dark-green w-64 md:w-96"
      />
      <span className="text-red-600">
        {errors.phone && errors.phone.message}
      </span>

      <label htmlFor="subject" className="py-3">
        Subject:
      </label>
      <input
        type="text"
        className="text-sm p-2 rounded border border-dark-green w-64 md:w-96"
        {...register("subject", {
          required: "This is a required field",
        })}
      />
      <span className="text-red-600">
        {errors.subject && errors.subject.message}
      </span>

      <label htmlFor="message" className="py-3">
        Message:
      </label>
      <textarea
        className="text-sm h-20 p-2 rounded border border-dark-green w-64 md:w-96"
        {...register("message", {
          required: "This is a required field",
        })}
      />
      <span className="text-red-600">
        {errors.message && errors.message.message}
      </span>

      <button
        type="submit"
        className="p-2 w-32 rounded-full text-base font-bold bg-dark-orange cursor-pointer hover:bg-light-orange sm:w-60 mt-10"
      >
        Send
      </button>
    </form>
  );
};
