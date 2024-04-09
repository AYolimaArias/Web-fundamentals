const tooltip = document.querySelector(".boton");
const mensaje = document.querySelector(".tooltip__content");

const señalarTooltip = () => {
  let timer = setTimeout(() => {
    mensaje.style.display = "block";
  }, 300);
  tooltip.addEventListener("mouseleave", () => {
    clearTimeout(timer);
  });
};
const dejarTooltip = () => {
  mensaje.style.display = "none";
};

tooltip.addEventListener("mouseenter", señalarTooltip);
tooltip.addEventListener("mouseleave", dejarTooltip);
