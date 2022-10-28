import {
  extend,
  localize,
  ValidationObserver,
  ValidationProvider,
} from "vee-validate";
import en from "vee-validate/dist/locale/en.json";
import * as rules from "vee-validate/dist/rules";
import Vue from "vue";

// Add a rule.
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize("en", en);
localize({
  en: {
    messages: {
      // generic rule messages...
    },
  },
});

// Register it globally
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
Vue.config.productionTip = false;
