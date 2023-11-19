import ContactLinks from "../components/contact/ContactLinks";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="m-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12929.313730640095!2d19.745851693115227!3d49.3504744934528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715ebd86df0c84b%3A0xc828c40e24f5ac5f!2zTVggdHJhxaUgVml0YW5vdsOh!5e1!3m2!1ssk!2ssk!4v1700318883260!5m2!1ssk!2ssk"
          loading="lazy"
          className="w-[70vh] h-[50vh]"
        ></iframe>
      </div>
      <ContactLinks />
    </div>
  );
};

export default Contact;
