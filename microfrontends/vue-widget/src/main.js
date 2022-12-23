import { defineCustomElement } from 'vue'
import VueWidget from './VueWidget.ce.vue'

const WidgetCustomElement = defineCustomElement(VueWidget)

customElements.define("vue-widget", WidgetCustomElement)
