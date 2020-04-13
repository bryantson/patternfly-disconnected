(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    ".pf-c-overflow-menu": [{
      "property": "--pf-c-overflow-menu--spacer--base",
      "value": "1rem",
      "token": "c_overflow_menu_spacer_base",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-overflow-menu--spacer",
      "value": "0.5rem",
      "token": "c_overflow_menu_spacer",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-overflow-menu__group--spacer",
      "value": "1rem",
      "token": "c_overflow_menu__group_spacer",
      "values": ["--pf-c-overflow-menu--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-overflow-menu__item--spacer",
      "value": "1rem",
      "token": "c_overflow_menu__item_spacer",
      "values": ["--pf-c-overflow-menu--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-overflow-menu--c-divider--m-vertical--spacer",
      "value": "1rem",
      "token": "c_overflow_menu_c_divider_m_vertical_spacer",
      "values": ["--pf-c-overflow-menu--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-overflow-menu__group--m-button-group--spacer",
      "value": "1rem",
      "token": "c_overflow_menu__group_m_button_group_spacer",
      "values": ["--pf-c-overflow-menu--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-overflow-menu__group--m-button-group--space-items",
      "value": "0.5rem",
      "token": "c_overflow_menu__group_m_button_group_space_items",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-overflow-menu__group--m-icon-button-group--spacer",
      "value": "1rem",
      "token": "c_overflow_menu__group_m_icon_button_group_spacer",
      "values": ["--pf-c-overflow-menu--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-overflow-menu__group--m-icon-button-group--space-items",
      "value": "0",
      "token": "c_overflow_menu__group_m_icon_button_group_space_items"
    }],
    ".pf-c-overflow-menu__group": [{
      "property": "--pf-c-overflow-menu--spacer",
      "value": "1rem",
      "token": "c_overflow_menu_spacer",
      "values": ["--pf-c-overflow-menu__group--spacer", "--pf-c-overflow-menu--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-overflow-menu__group.pf-m-button-group": [{
      "property": "--pf-c-overflow-menu--spacer",
      "value": "1rem",
      "token": "c_overflow_menu_spacer",
      "values": ["--pf-c-overflow-menu__group--m-button-group--spacer", "--pf-c-overflow-menu--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-overflow-menu__group.pf-m-button-group > *": [{
      "property": "--pf-c-overflow-menu--spacer",
      "value": "0.5rem",
      "token": "c_overflow_menu_spacer",
      "values": ["--pf-c-overflow-menu__group--m-button-group--space-items", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-c-overflow-menu__group.pf-m-icon-button-group": [{
      "property": "--pf-c-overflow-menu--spacer",
      "value": "1rem",
      "token": "c_overflow_menu_spacer",
      "values": ["--pf-c-overflow-menu__group--m-icon-button-group--spacer", "--pf-c-overflow-menu--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-overflow-menu__group.pf-m-icon-button-group > *": [{
      "property": "--pf-c-overflow-menu--spacer",
      "value": "0",
      "token": "c_overflow_menu_spacer",
      "values": ["--pf-c-overflow-menu__group--m-icon-button-group--space-items", "0"]
    }],
    ".pf-c-overflow-menu__item": [{
      "property": "--pf-c-overflow-menu--spacer",
      "value": "1rem",
      "token": "c_overflow_menu_spacer",
      "values": ["--pf-c-overflow-menu__item--spacer", "--pf-c-overflow-menu--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-overflow-menu__content:last-child": [{
      "property": "--pf-c-overflow-menu--spacer",
      "value": "0",
      "token": "c_overflow_menu_spacer"
    }],
    ".pf-c-overflow-menu > .pf-c-divider": [{
      "property": "--pf-c-overflow-menu--spacer",
      "value": "1rem",
      "token": "c_overflow_menu_spacer",
      "values": ["--pf-c-overflow-menu--c-divider--m-vertical--spacer", "--pf-c-overflow-menu--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-overflow-menu > .pf-c-divider.pf-m-vertical:last-child": [{
      "property": "--pf-c-overflow-menu--spacer",
      "value": "0",
      "token": "c_overflow_menu_spacer"
    }]
  };
});