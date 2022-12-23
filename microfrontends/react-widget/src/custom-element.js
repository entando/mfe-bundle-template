import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { KeycloakProvider } from './auth/Keycloak';

import styles from './index.css'

export class ReactWidget extends HTMLElement {
  #rootID = 'app-element'
  #appInstance = null

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['config'];
  }

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback(_, oldValue, newValue) {
    if (newValue !== oldValue) {
      this.render();
    }
  }

  cleanTree() {
    const currentElement = this.shadowRoot.getElementById(this.#rootID);

    if (currentElement) {
      this.shadowRoot.removeChild(currentElement);
    }

    this.#appInstance?.unmount();
  }

  render() {
    const attrConf = this.getAttribute('config');
    const config = attrConf && JSON.parse(attrConf);

    if (config) {
      const shadowRootElement = document.createElement('div');
      const emotionStyleRoot = document.createElement('style');

      shadowRootElement.id = this.#rootID;

      this.cleanTree();

      styles.use({ target: this.shadowRoot });

      this.shadowRoot.appendChild(emotionStyleRoot);

      this.#appInstance = ReactDOM.createRoot(shadowRootElement);

      this.#appInstance.render(
        <React.StrictMode>
          <KeycloakProvider>
            <App config={config} />
          </KeycloakProvider>
        </React.StrictMode>
      );

      this.shadowRoot.appendChild(shadowRootElement);
    }
  }
}
