const services = {
  design: {},
  webDevelopment: {},
  mobileDevelopment: {},
  dataTraffic: {},
  total: 0,
  discount: 50,
};

function serviceClick(component) {
  var isClicked = component.getAttribute("data-clicked");
  var value = parseInt(component.getAttribute("data-value"));
  var estimationValue = document.querySelector("#estimation-value");
  var finalValue = document.querySelector("#final-estimated-price");
  const service = component.getAttribute("data-parent");
  const serviceName = component.getAttribute("id");
  component.setAttribute("data-clicked", true);

  if (isClicked === "true") {
    const Service = services[service];
    delete Service[serviceName];
    component.style.boxShadow =
      "0 1px 3px rgb(77, 81, 157), 0 1px 2px rgb(77, 81, 157)";
    component.style.border = "none";
    component.children[0].children[0].style.display = "none";
    var filter = estimationValue.textContent.replace(".", "").replace(",", ".");

    var unformatedValue = `${parseInt(filter) - value}`;

    estimationValue.textContent = parseInt(
      unformatedValue
    ).toLocaleString("pt-br", { minimumFractionDigits: 2 });
    finalValue.textContent = parseInt(
      (unformatedValue * 50) / 100
    ).toLocaleString("pt-br", { minimumFractionDigits: 2 });
    component.setAttribute("data-clicked", false);
    services.total = unformatedValue;
    console.log(services);
  } else {
    if (Object.keys(services[service]).length === 0) {
      services[service] = JSON.parse(
        `{"${component.getAttribute(
          "id"
        )}" : {"price": "${component.getAttribute(
          "data-value"
        )}", "discount": "${
          document.getElementById("discount-percentage").innerText
        }" }}`
      );
    } else {
      var itemId = JSON.parse(
        `{"${component.getAttribute(
          "id"
        )}" : {"price": "${component.getAttribute("data-value")}","discount":"${
          document.getElementById("discount-percentage").innerText
        }"}
        }`
      );
      Object.assign(services[service], itemId);
    }
    component.style.boxShadow =
      "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
    component.style.border = "#4D519D 2px solid";
    component.children[0].children[0].style.display = "flex";

    var filter = estimationValue.textContent.replace(".", "").replace(",", ".");
    var unformatedValue = `${parseInt(filter) + value}`;
    estimationValue.textContent = parseInt(
      unformatedValue
    ).toLocaleString("pt-br", { minimumFractionDigits: 2 });
    finalValue.textContent = parseInt(
      (unformatedValue * 50) / 100
    ).toLocaleString("pt-br", { minimumFractionDigits: 2 });
    services.total = unformatedValue;
  }
}
