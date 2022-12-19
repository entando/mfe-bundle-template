import { defineCustomElement } from 'vue'
import VueWidget from './VueWidget.ce.vue'

const VueWidgetCustomElement = defineCustomElement(VueWidget)

customElements.define("vue-widget", VueWidgetCustomElement)