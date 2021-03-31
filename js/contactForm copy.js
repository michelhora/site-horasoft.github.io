class contactForm {
  constructor(
    button,
    customerName,
    customerEmail,
    newsletterEmail,
    customerMessage
  ) {
    this.customerName =
      customerName || document.querySelector(".customer-name").value;
    this.customerEmail =
      customerEmail || document.querySelector(".customer-email").value;
    this.customerMessage =
      customerMessage || document.querySelector(".customer-message").value;
    this.newsletterEmail =
      newsletterEmail || document.querySelector(".newsletter-input").value;

    this.button = button;
    this.from = button.getAttribute("data-from");
    console.log(this.from);
    this._sendContactForm();
  }

  async _sendContactForm() {
    const client = await this.createClient(this.from);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3333/mail/contact", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    await xhr.send(
      JSON.stringify({
        client,
        services,
      })
    );
    console.log(client);
    xhr.onerror = function () {
      const dialog = new ConfirmDialog({
        trueButtonText: "Beleza!",
        falseButtonText: undefined,
        questionText:
          "Estamos passando por manutenções, tente novamente mais tarde. :(",
        isSuccess: false,
      });
      dialog.confirm();
    };

    xhr.onload = function () {
      console.log(xhr);
      if (xhr.status === 200) {
        const dialog = new ConfirmDialog({
          trueButtonText: "Beleza!",
          falseButtonText: undefined,
          questionText:
            "Formulário enviado, em breve entraremos em contato por e-mail!",
          isSuccess: true,
        });
        dialog.confirm();
      } else if (xhr.status === 400) {
        const dialog = new ConfirmDialog({
          trueButtonText: "Beleza!",
          falseButtonText: undefined,
          questionText: "Verifique os dados inseridos e tente novamente!",
          isSuccess: false,
        });
        dialog.confirm();
      }
    };
  }
  createClient(from) {
    const client = {
      to: `${this.customerName} <${this.customerEmail}>,Michel Hora CEO Hora-Soft <michel@hora-soft.com>`,
      name: this.customerName,
      email: this.customerEmail,
      message: this.customerMessage,
      subject: "Obrigado pelo contato!",
      template: `partials/${from}`,
      context: {
        client: this.customerName,
      },
    };

    return client;
  }
}
