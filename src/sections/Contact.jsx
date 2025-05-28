const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 px-4 py-20 flex flex-col items-center text-center text-white"
    >
      <h2 className="text-3xl font-bold text-purple-400 mb-4">Contact Me</h2>
      <p className="text-gray-300 mb-4">Feel free to connect with me:</p>
      <div className="space-y-3 text-lg text-gray-200">
        <p>
          📧 Email:{" "}
          <a
            href="mailto:zaheershaik2925@gmail.com"
            className="text-purple-400 hover:underline"
          >
            zaheershaik2925@gmail.com
          </a>
        </p>
        <p>
          💻 GitHub:{" "}
          <a
            href="https://github.com/zaheershaik01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline"
          >
            github.com/zaheershaik01
          </a>
        </p>
        <p>
          🔗 LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/shaik-zaheer-01zr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:underline"
          >
            linkedin.com/in/shaik-zaheer-01zr
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;


