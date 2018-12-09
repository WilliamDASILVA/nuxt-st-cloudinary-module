import Vue from 'vue'
import { defineCustomElements } from 'st-cloudinary/dist/loader';

export default function () {
  if (process.client) {
    Vue.config.productionTip = false;

    // Ignore the st-cloudinary from the VueJS compilation
    Vue.config.ignoredElements = [
      ...Vue.config.ignoredElements,
      'st-cloudinary'
    ]

    defineCustomElements(window);
  }
}
