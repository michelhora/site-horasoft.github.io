class contactForm {
  // var name = document.querySelector('.customer-name').value;
  //   var email = document.querySelector('.customer-email').value;
  //   var message = document.querySelector('.customer-message').value;

  //   var client = {
  //     to: `${name} <${email}>, Hora-Soft <contato@hora-soft.com>`,
  //     name: name,
  //     email: email,
  //     message: message ,
  //     subject: 'Obrigado pelo contato!',
  //     template: 'partials/contact',
  //     context: {
  //       client: name
  //         }
  //   }

  //   var xhr = new XMLHttpRequest();
  //     xhr.open("POST", "http://api.hora-soft.com/" , true);
  //     xhr.setRequestHeader('Content-Type', 'application/json');
  //      await xhr.send(JSON.stringify({
  //         client
  //     }));

  //   xhr.onerror = function () {
  //     const dialog =  new ConfirmDialog({
  //           trueButtonText: "Beleza!",
  //           falseButtonText: undefined,
  //           questionText: "Estamos passando por manutenções, tente novamente mais tarde. :(",
  //           isSuccess: false,
  //         });
  //         dialog.confirm();
  //   }

  //     xhr.onload = function () {
  //       if (xhr.status === 200) {
  //         const dialog =  new ConfirmDialog({
  //           trueButtonText: "Beleza!",
  //           falseButtonText: undefined,
  //           questionText: "Formulário enviado, em breve entraremos em contato por e-mail!",
  //           isSuccess: true,
  //         });
  //         dialog.confirm();
  //       }

  //       else if (xhr.status === 400) {
  //         const dialog =  new ConfirmDialog({
  //           trueButtonText: "Beleza!",
  //           falseButtonText: undefined,
  //           questionText: "Verifique os dados inseridos e tente novamente!",
  //           isSuccess: false,
  //         });
  //         dialog.confirm();
  //       }
  //     }
  constructor({ customerName, customerEmail, customerMessage }) {
    this.customerName =
      customerName || document.querySelector(".customer-name").value;
    this.customerEmail =
      customerEmail || document.querySelector(".customer-email").value;
    this.customerMessage =
      customerMessage || document.querySelector(".customer-message").value;

    this.xhr = new XMLHttpRequest();
    this.button = undefined;
    this._createContactForm();
    this._sendContactForm();
  }

  _contactFrom() {
    this.button = document.querySelector(".button-contact-us");
    return this.button.getAttribute("data-from");
  }

  _createClient(_contactFrom) {
    const client = {
      to: `${this.customerName} <${this.customerEmail}>, Hora-Soft <michel@hora-soft.com>`,
      name: this.customerName,
      email: this.customerEmail,
      message: this.customerMessage,
      subject: "Obrigado pelo contato!",
      template: "partials/contact",
      context: {
        client: this.customerName,
      },
    };

    return client;
  }
}
