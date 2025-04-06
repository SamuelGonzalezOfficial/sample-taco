import "./Contact.css";

function Contact() {
  return (
    <section class="contact-container">
      <div class="contact-content">
        <div class="contact-image">
          <img src="" alt="image" class="contact-img" />
        </div>
        <div class="contact-box">
          <div class="contact-header">
            <h2 class="contact-title">Get in Touch</h2>
            <p class="contact-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              eius.
            </p>
          </div>

          <form action="#" class="form">
            <input
              type="text"
              name="name"
              id="name"
              class="form-input"
              placeholder="name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              class="form-input"
              placeholder="e-mail"
              required
            />
            <textarea
              type="text"
              name="message"
              id="message"
              class="form-input form-message"
              placeholder="message"
              required
            ></textarea>

            <button class="form-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export { Contact };
