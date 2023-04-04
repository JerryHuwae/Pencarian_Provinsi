import './prov-item.js';

class ProvList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set provs(provs) {
    this._provs = provs;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
    <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.shadowDOM.innerHTML = '';
    this._provs.forEach((prov) => {
      const provItemElement = document.createElement('prov-item');
      provItemElement.prov = prov;

      this.shadowDOM.appendChild(provItemElement);
    });
  }
}

customElements.define('prov-list', ProvList);
