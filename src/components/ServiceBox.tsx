export const ServiceBox = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => {
  return (
    <>
      <section className="border-2 border-solid border-dark-green rounded-[40px] px-4">
        <div className="flex gap-3 items-center">
          <img
            className="rounded-full border-solid w-6 h-6"
            src="/src/assets/services-tick.png"
            alt="green tick icon"
          />
          <p className="uppercase">{title}</p>
        </div>
        <p className="mt-0">{text}</p>
      </section>
    </>
  );
};
