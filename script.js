// Tabs
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.target).classList.add("active");
  });
});

// Accordion
document.querySelectorAll(".accordion-item button").forEach(button => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !expanded);
    panel.style.display = expanded ? "none" : "block";
  });
});

// Image fallback
function handleImageError(model) {
  document.getElementById(model + "-fallback").style.display = "flex";
}

// Scroll helper
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({behavior: "smooth"});
}

// Modal placeholder
function openModal(type) {
  alert("Modal placeholder: " + type);
}

// Configurator
function onFuelChange(model) {
  const fuel = document.getElementById(model + "-fuel-select").value;
  document.getElementById(model + "-fuel-pill").textContent = fuel;
  document.getElementById(model + "-fuel-effect").textContent = fuel;
}

function selectColor(el, model) {
  document.querySelectorAll("#" + model + "-color-swatches .swatch")
    .forEach(s => s.classList.remove("selected"));
  el.classList.add("selected");
}

function updateConfig(model) {
  const wheel = document.getElementById(model + "-wheel-select").value;
  document.getElementById(model + "-price").textContent =
    (model === "apex" ? "₹15,40,000" : "₹15,20,000") + " + Wheels " + wheel;
}

function setMode(model, mode) {
  alert(model.toUpperCase() + " set to " + mode + " mode");
}

function calculateRange(model) {
  const tank = parseFloat(document.getElementById(model + "-tank-size").value);
  const cons = parseFloat(document.getElementById(model + "-consumption").value);
  const range = (tank / cons) * 100;
  document.getElementById(model + "-range-result").textContent =
    `Estimated range: ${range.toFixed(0)} km`;
}

// Contact form
function submitContact(event, model) {
  event.preventDefault();
  const name = document.getElementById(model + "-name").value;
  const email = document.getElementById(model + "-email").value;
  const msg = document.getElementById(model + "-message").value;
  alert(`Thank you ${name}! Your request has been sent.\nEmail: ${email}\nMessage: ${msg}`);
}
