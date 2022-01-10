import { header } from "/assets/js/global/header.js";
import { footer } from "/assets/js/global/footer.js";
import { bodyWrapperTemplate } from "/assets/js/global/display.js";

// header
function renderBody(bodyTemplate, events) {
  // setting template to body
  document.body.innerHTML = bodyTemplate;

  for (const event of events) {
    const isFunction =
      Object.prototype.toString.call(event) == "[object Function]";

    if (event && isFunction) event();
  }
}

function renderDefaultTemplate(bodyContent) {
  const topbar = header.topbar ? header.topbar.template : "";
  const navbar = header.navbar.template;
  const sidebar = header.sidebar.template;

  // default template
  const template = `
  ${sidebar}
  ${bodyWrapperTemplate(`
    ${topbar}
    ${navbar}
    ${bodyContent}
    ${footer.template}
  `)}`;

  const events = [
    header.topbar ? header.topbar.event : () => void 0,
    header.navbar.event,
    header.sidebar.event,
  ];

  renderBody(template, events);
}

export { renderDefaultTemplate };
