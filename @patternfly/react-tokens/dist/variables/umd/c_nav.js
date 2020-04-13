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
    ".pf-c-nav": [{
      "property": "--pf-c-nav--Width",
      "value": "18.125rem",
      "token": "c_nav_Width"
    }, {
      "property": "--pf-c-nav--Transition",
      "value": "all 250ms cubic-bezier(.42, 0, .58, 1)",
      "token": "c_nav_Transition",
      "values": ["--pf-global--Transition", "$pf-global--Transition", "all 250ms cubic-bezier(.42, 0, .58, 1)"]
    }, {
      "property": "--pf-c-nav__item--m-expanded__toggle-icon--Transform",
      "value": "rotate(90deg)",
      "token": "c_nav__item_m_expanded__toggle_icon_Transform"
    }, {
      "property": "--pf-c-nav--m-dark__list-link--PaddingTop",
      "value": "0.5rem",
      "token": "c_nav_m_dark__list_link_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav--m-dark__list-link--PaddingBottom",
      "value": "1rem",
      "token": "c_nav_m_dark__list_link_PaddingBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-nav--m-dark__list-link--Color",
      "value": "#d2d2d2",
      "token": "c_nav_m_dark__list_link_Color",
      "values": ["--pf-global--Color--light-300", "$pf-global--Color--light-300", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-nav--m-dark__list-link--m-current--Color",
      "value": "#fff",
      "token": "c_nav_m_dark__list_link_m_current_Color",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav--m-dark__list-link--hover--Color",
      "value": "#fff",
      "token": "c_nav_m_dark__list_link_hover_Color",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav--m-dark__list-link--focus--Color",
      "value": "#fff",
      "token": "c_nav_m_dark__list_link_focus_Color",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav--m-dark__list-link--after--Bottom",
      "value": "0.5rem",
      "token": "c_nav_m_dark__list_link_after_Bottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav--m-dark__list-link--active--Color",
      "value": "#fff",
      "token": "c_nav_m_dark__list_link_active_Color",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav--m-dark__simple-list-link--Color",
      "value": "#d2d2d2",
      "token": "c_nav_m_dark__simple_list_link_Color",
      "values": ["--pf-global--Color--light-300", "$pf-global--Color--light-300", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-nav--m-dark__simple-list-link--hover--Color",
      "value": "#fff",
      "token": "c_nav_m_dark__simple_list_link_hover_Color",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav--m-dark__simple-list-link--focus--Color",
      "value": "#fff",
      "token": "c_nav_m_dark__simple_list_link_focus_Color",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav--m-dark__simple-list-link--active--Color",
      "value": "#fff",
      "token": "c_nav_m_dark__simple_list_link_active_Color",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav--m-dark__simple-list-link--hover--BackgroundColor",
      "value": "#4f5255",
      "token": "c_nav_m_dark__simple_list_link_hover_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--dark-400", "$pf-global--BackgroundColor--dark-400", "$pf-color-black-700", "#4f5255"]
    }, {
      "property": "--pf-c-nav--m-dark__simple-list-link--focus--BackgroundColor",
      "value": "#4f5255",
      "token": "c_nav_m_dark__simple_list_link_focus_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--dark-400", "$pf-global--BackgroundColor--dark-400", "$pf-color-black-700", "#4f5255"]
    }, {
      "property": "--pf-c-nav--m-dark__simple-list-link--active--BackgroundColor",
      "value": "#4f5255",
      "token": "c_nav_m_dark__simple_list_link_active_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--dark-400", "$pf-global--BackgroundColor--dark-400", "$pf-color-black-700", "#4f5255"]
    }, {
      "property": "--pf-c-nav--m-dark__simple-list-link--m-current--Color",
      "value": "#fff",
      "token": "c_nav_m_dark__simple_list_link_m_current_Color",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav--m-dark__simple-list-link--m-current--BackgroundColor",
      "value": "#4f5255",
      "token": "c_nav_m_dark__simple_list_link_m_current_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--dark-400", "$pf-global--BackgroundColor--dark-400", "$pf-color-black-700", "#4f5255"]
    }, {
      "property": "--pf-c-nav--m-dark__item--m-expanded--PaddingBottom",
      "value": "0.5rem",
      "token": "c_nav_m_dark__item_m_expanded_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav--m-dark__item--m-expanded__list-link--after--Bottom",
      "value": "0",
      "token": "c_nav_m_dark__item_m_expanded__list_link_after_Bottom"
    }, {
      "property": "--pf-c-nav--m-dark__item--m-expanded__list-link--PaddingBottom",
      "value": "0.5rem",
      "token": "c_nav_m_dark__item_m_expanded__list_link_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav--m-dark__item--m-current--BackgroundColor",
      "value": "#3c3f42",
      "token": "c_nav_m_dark__item_m_current_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--dark-200", "$pf-global--BackgroundColor--dark-200", "$pf-color-black-800", "#3c3f42"]
    }, {
      "property": "--pf-c-nav--m-dark__item--m-current__simple-list-link--Color",
      "value": "#fff",
      "token": "c_nav_m_dark__item_m_current__simple_list_link_Color",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav--m-dark__item--m-current__list-link--Color",
      "value": "#fff",
      "token": "c_nav_m_dark__item_m_current__list_link_Color",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav--m-dark__section-title--Color",
      "value": "#fff",
      "token": "c_nav_m_dark__section_title_Color",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav--m-dark__c-divider--BackgroundColor",
      "value": "#4f5255",
      "token": "c_nav_m_dark__c_divider_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--dark-400", "$pf-global--BackgroundColor--dark-400", "$pf-color-black-700", "#4f5255"]
    }, {
      "property": "--pf-c-nav--m-dark__separator--BackgroundColor",
      "value": "#4f5255",
      "token": "c_nav_m_dark__separator_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--dark-400", "$pf-global--BackgroundColor--dark-400", "$pf-color-black-700", "#4f5255"]
    }, {
      "property": "--pf-c-nav--m-dark__item--m-current__c-divider--BackgroundColor",
      "value": "#212427",
      "token": "c_nav_m_dark__item_m_current__c_divider_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--dark-300", "$pf-global--BackgroundColor--dark-300", "$pf-color-black-850", "#212427"]
    }, {
      "property": "--pf-c-nav--m-dark__item--m-current__separator--BackgroundColor",
      "value": "#212427",
      "token": "c_nav_m_dark__item_m_current__separator_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--dark-300", "$pf-global--BackgroundColor--dark-300", "$pf-color-black-850", "#212427"]
    }, {
      "property": "--pf-c-nav--m-dark__subnav--MarginTop",
      "value": "0",
      "token": "c_nav_m_dark__subnav_MarginTop"
    }, {
      "property": "--pf-c-nav--m-dark__list-link--after--Width",
      "value": "2.5rem",
      "token": "c_nav_m_dark__list_link_after_Width"
    }, {
      "property": "--pf-c-nav__c-divider--MarginTop",
      "value": "0.5rem",
      "token": "c_nav__c_divider_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__c-divider--MarginBottom",
      "value": "0.5rem",
      "token": "c_nav__c_divider_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__c-divider--MarginLeft",
      "value": "1rem",
      "token": "c_nav__c_divider_MarginLeft",
      "values": ["--pf-c-nav__list-link--PaddingLeft", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-nav__simple-list__c-divider--MarginLeft",
      "value": "1.5rem",
      "token": "c_nav__simple_list__c_divider_MarginLeft",
      "values": ["--pf-c-nav__simple-list-link--PaddingLeft", "--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-nav__simple-list--nested__c-divider--MarginLeft",
      "value": "1.5rem",
      "token": "c_nav__simple_list_nested__c_divider_MarginLeft",
      "values": ["--pf-c-nav__simple-list-link--nested--PaddingLeft", "--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-nav__list-link--PaddingTop",
      "value": "1rem",
      "token": "c_nav__list_link_PaddingTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-nav__list-link--PaddingRight",
      "value": "1rem",
      "token": "c_nav__list_link_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-nav__list-link--md--PaddingRight",
      "value": "1.5rem",
      "token": "c_nav__list_link_md_PaddingRight",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-nav__list-link--PaddingBottom",
      "value": "0.5rem",
      "token": "c_nav__list_link_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__list-link--PaddingLeft",
      "value": "1rem",
      "token": "c_nav__list_link_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-nav__list-link--md--PaddingLeft",
      "value": "1.5rem",
      "token": "c_nav__list_link_md_PaddingLeft",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-nav__list-link--after--Width",
      "value": "3.125rem",
      "token": "c_nav__list_link_after_Width"
    }, {
      "property": "--pf-c-nav__list-link--after--Height",
      "value": "0.1875rem",
      "token": "c_nav__list_link_after_Height"
    }, {
      "property": "--pf-c-nav__list-link--FontWeight",
      "value": "400",
      "token": "c_nav__list_link_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-nav__list-link--active--FontWeight",
      "value": "400",
      "token": "c_nav__list_link_active_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-nav__list-link--focus--FontWeight",
      "value": "400",
      "token": "c_nav__list_link_focus_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-nav__list-link--Color",
      "value": "#151515",
      "token": "c_nav__list_link_Color",
      "values": ["--pf-global--Color--dark-100", "$pf-global--Color--dark-100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-nav__list-link--hover--Color",
      "value": "#06c",
      "token": "c_nav__list_link_hover_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-nav__list-link--active--Color",
      "value": "#06c",
      "token": "c_nav__list_link_active_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-nav__list-link--focus--Color",
      "value": "#06c",
      "token": "c_nav__list_link_focus_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-nav__list-link--after--Bottom",
      "value": "0",
      "token": "c_nav__list_link_after_Bottom"
    }, {
      "property": "--pf-c-nav__list-link--after--Left",
      "value": "1rem",
      "token": "c_nav__list_link_after_Left",
      "values": ["--pf-c-nav__list-link--PaddingLeft", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-nav__list-link--after--md--Left",
      "value": "1.5rem",
      "token": "c_nav__list_link_after_md_Left",
      "values": ["--pf-c-nav__list-link--md--PaddingLeft", "--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-nav__list-link--hover--after--BackgroundColor",
      "value": "#06c",
      "token": "c_nav__list_link_hover_after_BackgroundColor",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-nav__list-link--active--after--BackgroundColor",
      "value": "#06c",
      "token": "c_nav__list_link_active_after_BackgroundColor",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-nav__list-link--focus--after--BackgroundColor",
      "value": "#06c",
      "token": "c_nav__list_link_focus_after_BackgroundColor",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-nav__simple-list-link--PaddingTop",
      "value": "0.5rem",
      "token": "c_nav__simple_list_link_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__simple-list-link--PaddingRight",
      "value": "1.5rem",
      "token": "c_nav__simple_list_link_PaddingRight",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-nav__simple-list-link--PaddingBottom",
      "value": "0.5rem",
      "token": "c_nav__simple_list_link_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__simple-list-link--PaddingLeft",
      "value": "1.5rem",
      "token": "c_nav__simple_list_link_PaddingLeft",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-nav__simple-list-link--nested--PaddingLeft",
      "value": "1.5rem",
      "token": "c_nav__simple_list_link_nested_PaddingLeft",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-nav__simple-list-link--nested--md--PaddingLeft",
      "value": "calc(1.5rem + 1rem)",
      "token": "c_nav__simple_list_link_nested_md_PaddingLeft",
      "values": ["calc(--pf-global--spacer--lg + --pf-global--spacer--md)", "calc($pf-global--spacer--lg + $pf-global--spacer--md)", "calc(pf-size-prem(24px) + pf-size-prem(16px))", "calc(1.5rem + 1rem)"]
    }, {
      "property": "--pf-c-nav__simple-list-link--FontWeight",
      "value": "400",
      "token": "c_nav__simple_list_link_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-nav__simple-list-link--active--FontWeight",
      "value": "500",
      "token": "c_nav__simple_list_link_active_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-nav__simple-list-link--focus--FontWeight",
      "value": "500",
      "token": "c_nav__simple_list_link_focus_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-nav__simple-list-link--Color",
      "value": "#151515",
      "token": "c_nav__simple_list_link_Color",
      "values": ["--pf-global--Color--dark-100", "$pf-global--Color--dark-100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-nav__simple-list-link--hover--Color",
      "value": "#06c",
      "token": "c_nav__simple_list_link_hover_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-nav__simple-list-link--active--Color",
      "value": "#06c",
      "token": "c_nav__simple_list_link_active_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-nav__simple-list-link--focus--Color",
      "value": "#06c",
      "token": "c_nav__simple_list_link_focus_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-nav__simple-list-link--hover--BackgroundColor",
      "value": "#f5f5f5",
      "token": "c_nav__simple_list_link_hover_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--150", "$pf-global--BackgroundColor--150", "$pf-color-black-150", "#f5f5f5"]
    }, {
      "property": "--pf-c-nav__simple-list-link--active--BackgroundColor",
      "value": "#f5f5f5",
      "token": "c_nav__simple_list_link_active_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--150", "$pf-global--BackgroundColor--150", "$pf-color-black-150", "#f5f5f5"]
    }, {
      "property": "--pf-c-nav__simple-list-link--focus--BackgroundColor",
      "value": "#f5f5f5",
      "token": "c_nav__simple_list_link_focus_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--150", "$pf-global--BackgroundColor--150", "$pf-color-black-150", "#f5f5f5"]
    }, {
      "property": "--pf-c-nav__horizontal-list-item--MarginRight",
      "value": "2rem",
      "token": "c_nav__horizontal_list_item_MarginRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-nav__horizontal-list-link--PaddingTop",
      "value": "0.5rem",
      "token": "c_nav__horizontal_list_link_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__horizontal-list-link--md--PaddingTop",
      "value": "1rem",
      "token": "c_nav__horizontal_list_link_md_PaddingTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-nav__horizontal-list-link--PaddingBottom",
      "value": "0.5rem",
      "token": "c_nav__horizontal_list_link_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__horizontal-list-link--lg--PaddingBottom",
      "value": "1.5rem",
      "token": "c_nav__horizontal_list_link_lg_PaddingBottom",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-nav__horizontal-list-link--FontWeight",
      "value": "400",
      "token": "c_nav__horizontal_list_link_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-nav__horizontal-list-link--Color",
      "value": "#d2d2d2",
      "token": "c_nav__horizontal_list_link_Color",
      "values": ["--pf-global--Color--light-300", "$pf-global--Color--light-300", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-nav__horizontal-list-link--hover--Color",
      "value": "#2b9af3",
      "token": "c_nav__horizontal_list_link_hover_Color",
      "values": ["--pf-global--active-color--400", "$pf-global--active-color--400", "$pf-color-blue-300", "#2b9af3"]
    }, {
      "property": "--pf-c-nav__horizontal-list-link--active--Color",
      "value": "#2b9af3",
      "token": "c_nav__horizontal_list_link_active_Color",
      "values": ["--pf-global--active-color--400", "$pf-global--active-color--400", "$pf-color-blue-300", "#2b9af3"]
    }, {
      "property": "--pf-c-nav__horizontal-list-link--focus--Color",
      "value": "#2b9af3",
      "token": "c_nav__horizontal_list_link_focus_Color",
      "values": ["--pf-global--active-color--400", "$pf-global--active-color--400", "$pf-color-blue-300", "#2b9af3"]
    }, {
      "property": "--pf-c-nav__horizontal-list-link--after--Height",
      "value": "0.1875rem",
      "token": "c_nav__horizontal_list_link_after_Height"
    }, {
      "property": "--pf-c-nav__horizontal-list-link--hover--after--BackgroundColor",
      "value": "#2b9af3",
      "token": "c_nav__horizontal_list_link_hover_after_BackgroundColor",
      "values": ["--pf-global--active-color--400", "$pf-global--active-color--400", "$pf-color-blue-300", "#2b9af3"]
    }, {
      "property": "--pf-c-nav__horizontal-list-link--active--after--BackgroundColor",
      "value": "#2b9af3",
      "token": "c_nav__horizontal_list_link_active_after_BackgroundColor",
      "values": ["--pf-global--active-color--400", "$pf-global--active-color--400", "$pf-color-blue-300", "#2b9af3"]
    }, {
      "property": "--pf-c-nav__horizontal-list-link--focus--after--BackgroundColor",
      "value": "#2b9af3",
      "token": "c_nav__horizontal_list_link_focus_after_BackgroundColor",
      "values": ["--pf-global--active-color--400", "$pf-global--active-color--400", "$pf-color-blue-300", "#2b9af3"]
    }, {
      "property": "--pf-c-nav__tertiary-list-item--MarginRight",
      "value": "2rem",
      "token": "c_nav__tertiary_list_item_MarginRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-nav__tertiary-list-link--PaddingTop",
      "value": "1rem",
      "token": "c_nav__tertiary_list_link_PaddingTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-nav__tertiary-list-link--PaddingBottom",
      "value": "0.5rem",
      "token": "c_nav__tertiary_list_link_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__tertiary-list-link--FontWeight",
      "value": "400",
      "token": "c_nav__tertiary_list_link_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-nav__tertiary-list-link--Color",
      "value": "#151515",
      "token": "c_nav__tertiary_list_link_Color",
      "values": ["--pf-global--Color--dark-100", "$pf-global--Color--dark-100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-nav__tertiary-list-link--hover--Color",
      "value": "#06c",
      "token": "c_nav__tertiary_list_link_hover_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-nav__tertiary-list-link--active--Color",
      "value": "#06c",
      "token": "c_nav__tertiary_list_link_active_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-nav__tertiary-list-link--focus--Color",
      "value": "#06c",
      "token": "c_nav__tertiary_list_link_focus_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-nav__tertiary-list-link--after--Height",
      "value": "0.1875rem",
      "token": "c_nav__tertiary_list_link_after_Height"
    }, {
      "property": "--pf-c-nav__tertiary-list-link--hover--after--BackgroundColor",
      "value": "#06c",
      "token": "c_nav__tertiary_list_link_hover_after_BackgroundColor",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-nav__tertiary-list-link--active--after--BackgroundColor",
      "value": "#06c",
      "token": "c_nav__tertiary_list_link_active_after_BackgroundColor",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-nav__tertiary-list-link--focus--after--BackgroundColor",
      "value": "#06c",
      "token": "c_nav__tertiary_list_link_focus_after_BackgroundColor",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-nav__subnav--MarginTop",
      "value": "0.5rem",
      "token": "c_nav__subnav_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__subnav--MaxHeight",
      "value": "100%",
      "token": "c_nav__subnav_MaxHeight"
    }, {
      "property": "--pf-c-nav__list-toggle--PaddingRight",
      "value": "0.5rem",
      "token": "c_nav__list_toggle_PaddingRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__list-toggle--PaddingLeft",
      "value": "0.5rem",
      "token": "c_nav__list_toggle_PaddingLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__list-toggle--FontSize",
      "value": "1rem",
      "token": "c_nav__list_toggle_FontSize"
    }, {
      "property": "--pf-c-nav__list-toggle--Transition",
      "value": ".2s ease-in 0s",
      "token": "c_nav__list_toggle_Transition"
    }, {
      "property": "--pf-c-nav__section--MarginTop",
      "value": "0.5rem",
      "token": "c_nav__section_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__section__section--MarginTop",
      "value": "2rem",
      "token": "c_nav__section__section_MarginTop",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-nav__section-title--PaddingTop",
      "value": "0.5rem",
      "token": "c_nav__section_title_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__section-title--PaddingRight",
      "value": "1rem",
      "token": "c_nav__section_title_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-nav__section-title--md--PaddingRight",
      "value": "1.5rem",
      "token": "c_nav__section_title_md_PaddingRight",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-nav__section-title--PaddingBottom",
      "value": "0.5rem",
      "token": "c_nav__section_title_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__section-title--PaddingLeft",
      "value": "1rem",
      "token": "c_nav__section_title_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-nav__section-title--md--PaddingLeft",
      "value": "1.5rem",
      "token": "c_nav__section_title_md_PaddingLeft",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-nav__section-title--FontSize",
      "value": "0.875rem",
      "token": "c_nav__section_title_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-nav__section-title--Color",
      "value": "#737679",
      "token": "c_nav__section_title_Color",
      "values": ["--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-nav__section-title--FontWeight",
      "value": "500",
      "token": "c_nav__section_title_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-nav__list-link--m-current--Color",
      "value": "#06c",
      "token": "c_nav__list_link_m_current_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-nav__list-link--m-current--FontWeight",
      "value": "500",
      "token": "c_nav__list_link_m_current_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-nav__list-link--m-current--after--BackgroundColor",
      "value": "#06c",
      "token": "c_nav__list_link_m_current_after_BackgroundColor",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-nav__simple-list-link--m-current--Color",
      "value": "#06c",
      "token": "c_nav__simple_list_link_m_current_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-nav__simple-list-link--m-current--FontWeight",
      "value": "500",
      "token": "c_nav__simple_list_link_m_current_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-nav__simple-list-link--m-current--BackgroundColor",
      "value": "#f5f5f5",
      "token": "c_nav__simple_list_link_m_current_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--150", "$pf-global--BackgroundColor--150", "$pf-color-black-150", "#f5f5f5"]
    }, {
      "property": "--pf-c-nav__separator--Height",
      "value": "1px",
      "token": "c_nav__separator_Height",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-nav__separator--BackgroundColor",
      "value": "#d2d2d2",
      "token": "c_nav__separator_BackgroundColor",
      "values": ["--pf-global--BorderColor--100", "$pf-global--BorderColor--100", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-nav__separator--MarginTop",
      "value": "0.5rem",
      "token": "c_nav__separator_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__separator--MarginBottom",
      "value": "0.5rem",
      "token": "c_nav__separator_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__separator--MarginLeft",
      "value": "1rem",
      "token": "c_nav__separator_MarginLeft",
      "values": ["--pf-c-nav__list-link--PaddingLeft", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-nav__simple-list__separator--MarginLeft",
      "value": "1.5rem",
      "token": "c_nav__simple_list__separator_MarginLeft",
      "values": ["--pf-c-nav__simple-list-link--PaddingLeft", "--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-nav__simple-list--nested__separator--MarginLeft",
      "value": "1.5rem",
      "token": "c_nav__simple_list_nested__separator_MarginLeft",
      "values": ["--pf-c-nav__simple-list-link--nested--PaddingLeft", "--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-nav__horizontal-list-link--m-current--Color",
      "value": "#2b9af3",
      "token": "c_nav__horizontal_list_link_m_current_Color",
      "values": ["--pf-global--active-color--400", "$pf-global--active-color--400", "$pf-color-blue-300", "#2b9af3"]
    }, {
      "property": "--pf-c-nav__horizontal-list-link--m-current--after--BackgroundColor",
      "value": "#2b9af3",
      "token": "c_nav__horizontal_list_link_m_current_after_BackgroundColor",
      "values": ["--pf-global--active-color--400", "$pf-global--active-color--400", "$pf-color-blue-300", "#2b9af3"]
    }, {
      "property": "--pf-c-nav__tertiary-list-link--m-current--Color",
      "value": "#06c",
      "token": "c_nav__tertiary_list_link_m_current_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-nav__tertiary-list-link--m-current--after--BackgroundColor",
      "value": "#06c",
      "token": "c_nav__tertiary_list_link_m_current_after_BackgroundColor",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-nav__scroll-button--Top",
      "value": "0.5rem",
      "token": "c_nav__scroll_button_Top",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__scroll-button--ZIndex",
      "value": "100",
      "token": "c_nav__scroll_button_ZIndex",
      "values": ["--pf-global--ZIndex--xs", "$pf-global--ZIndex--xs", "100"]
    }, {
      "property": "--pf-c-nav__scroll-button--Width",
      "value": "2rem",
      "token": "c_nav__scroll_button_Width",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-nav__scroll-button--Height",
      "value": "2.5rem",
      "token": "c_nav__scroll_button_Height"
    }, {
      "property": "--pf-c-nav__scroll-button--PaddingRight",
      "value": "0.5rem",
      "token": "c_nav__scroll_button_PaddingRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__scroll-button--PaddingLeft",
      "value": "0.5rem",
      "token": "c_nav__scroll_button_PaddingLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__scroll-button--BackgroundColor",
      "value": "#fff",
      "token": "c_nav__scroll_button_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--100", "$pf-global--BackgroundColor--100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav__scroll-button--hover--Color",
      "value": "#2b9af3",
      "token": "c_nav__scroll_button_hover_Color",
      "values": ["--pf-global--active-color--400", "$pf-global--active-color--400", "$pf-color-blue-300", "#2b9af3"]
    }, {
      "property": "--pf-c-nav__scroll-button--nth-of-type-1--BoxShadow",
      "value": "20px 0 10px -4px rgba(255, 255, 255, .7)",
      "token": "c_nav__scroll_button_nth_of_type_1_BoxShadow"
    }, {
      "property": "--pf-c-nav__scroll-button--nth-of-type-2--BoxShadow",
      "value": "-20px 0 10px -4px rgba(255, 255, 255, .7)",
      "token": "c_nav__scroll_button_nth_of_type_2_BoxShadow"
    }, {
      "property": "--pf-c-nav__scroll-button--m-dark--nth-of-type-1--BoxShadow",
      "value": "20px 0 10px -4px rgba(21, 21, 21, .7)",
      "token": "c_nav__scroll_button_m_dark_nth_of_type_1_BoxShadow"
    }, {
      "property": "--pf-c-nav__scroll-button--m-dark--nth-of-type-2--BoxShadow",
      "value": "-20px 0 10px -4px rgba(21, 21, 21, .7)",
      "token": "c_nav__scroll_button_m_dark_nth_of_type_2_BoxShadow"
    }],
    ".pf-c-nav.pf-m-dark": [{
      "property": "--pf-c-nav__list-link--PaddingTop",
      "value": "0.5rem",
      "token": "c_nav__list_link_PaddingTop",
      "values": ["--pf-c-nav--m-dark__list-link--PaddingTop", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__list-link--PaddingBottom",
      "value": "1rem",
      "token": "c_nav__list_link_PaddingBottom",
      "values": ["--pf-c-nav--m-dark__list-link--PaddingBottom", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-nav__list-link--Color",
      "value": "#d2d2d2",
      "token": "c_nav__list_link_Color",
      "values": ["--pf-c-nav--m-dark__list-link--Color", "--pf-global--Color--light-300", "$pf-global--Color--light-300", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-nav__list-link--hover--Color",
      "value": "#fff",
      "token": "c_nav__list_link_hover_Color",
      "values": ["--pf-c-nav--m-dark__list-link--hover--Color", "--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav__list-link--focus--Color",
      "value": "#fff",
      "token": "c_nav__list_link_focus_Color",
      "values": ["--pf-c-nav--m-dark__list-link--focus--Color", "--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav__list-link--active--Color",
      "value": "#fff",
      "token": "c_nav__list_link_active_Color",
      "values": ["--pf-c-nav--m-dark__list-link--active--Color", "--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav__list-link--m-current--Color",
      "value": "#fff",
      "token": "c_nav__list_link_m_current_Color",
      "values": ["--pf-c-nav--m-dark__list-link--m-current--Color", "--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav__list-link--hover--after--BackgroundColor",
      "value": "#2b9af3",
      "token": "c_nav__list_link_hover_after_BackgroundColor",
      "values": ["--pf-global--active-color--400", "$pf-global--active-color--400", "$pf-color-blue-300", "#2b9af3"]
    }, {
      "property": "--pf-c-nav__list-link--active--after--BackgroundColor",
      "value": "#2b9af3",
      "token": "c_nav__list_link_active_after_BackgroundColor",
      "values": ["--pf-global--active-color--400", "$pf-global--active-color--400", "$pf-color-blue-300", "#2b9af3"]
    }, {
      "property": "--pf-c-nav__list-link--focus--after--BackgroundColor",
      "value": "#2b9af3",
      "token": "c_nav__list_link_focus_after_BackgroundColor",
      "values": ["--pf-global--active-color--400", "$pf-global--active-color--400", "$pf-color-blue-300", "#2b9af3"]
    }, {
      "property": "--pf-c-nav__list-link--after--Bottom",
      "value": "0.5rem",
      "token": "c_nav__list_link_after_Bottom",
      "values": ["--pf-c-nav--m-dark__list-link--after--Bottom", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-nav__list-link--m-current--after--BackgroundColor",
      "value": "#2b9af3",
      "token": "c_nav__list_link_m_current_after_BackgroundColor",
      "values": ["--pf-global--active-color--400", "$pf-global--active-color--400", "$pf-color-blue-300", "#2b9af3"]
    }, {
      "property": "--pf-c-nav__simple-list-link--Color",
      "value": "#d2d2d2",
      "token": "c_nav__simple_list_link_Color",
      "values": ["--pf-c-nav--m-dark__simple-list-link--Color", "--pf-global--Color--light-300", "$pf-global--Color--light-300", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-nav__simple-list-link--hover--Color",
      "value": "#fff",
      "token": "c_nav__simple_list_link_hover_Color",
      "values": ["--pf-c-nav--m-dark__simple-list-link--hover--Color", "--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav__simple-list-link--focus--Color",
      "value": "#fff",
      "token": "c_nav__simple_list_link_focus_Color",
      "values": ["--pf-c-nav--m-dark__simple-list-link--focus--Color", "--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav__simple-list-link--active--Color",
      "value": "#fff",
      "token": "c_nav__simple_list_link_active_Color",
      "values": ["--pf-c-nav--m-dark__simple-list-link--active--Color", "--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav__simple-list-link--hover--BackgroundColor",
      "value": "#4f5255",
      "token": "c_nav__simple_list_link_hover_BackgroundColor",
      "values": ["--pf-c-nav--m-dark__simple-list-link--hover--BackgroundColor", "--pf-global--BackgroundColor--dark-400", "$pf-global--BackgroundColor--dark-400", "$pf-color-black-700", "#4f5255"]
    }, {
      "property": "--pf-c-nav__simple-list-link--focus--BackgroundColor",
      "value": "#4f5255",
      "token": "c_nav__simple_list_link_focus_BackgroundColor",
      "values": ["--pf-c-nav--m-dark__simple-list-link--focus--BackgroundColor", "--pf-global--BackgroundColor--dark-400", "$pf-global--BackgroundColor--dark-400", "$pf-color-black-700", "#4f5255"]
    }, {
      "property": "--pf-c-nav__simple-list-link--active--BackgroundColor",
      "value": "#4f5255",
      "token": "c_nav__simple_list_link_active_BackgroundColor",
      "values": ["--pf-c-nav--m-dark__simple-list-link--active--BackgroundColor", "--pf-global--BackgroundColor--dark-400", "$pf-global--BackgroundColor--dark-400", "$pf-color-black-700", "#4f5255"]
    }, {
      "property": "--pf-c-nav__simple-list-link--m-current--Color",
      "value": "#fff",
      "token": "c_nav__simple_list_link_m_current_Color",
      "values": ["--pf-c-nav--m-dark__simple-list-link--m-current--Color", "--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav__simple-list-link--m-current--BackgroundColor",
      "value": "#4f5255",
      "token": "c_nav__simple_list_link_m_current_BackgroundColor",
      "values": ["--pf-c-nav--m-dark__simple-list-link--m-current--BackgroundColor", "--pf-global--BackgroundColor--dark-400", "$pf-global--BackgroundColor--dark-400", "$pf-color-black-700", "#4f5255"]
    }, {
      "property": "--pf-c-nav__section-title--Color",
      "value": "#fff",
      "token": "c_nav__section_title_Color",
      "values": ["--pf-c-nav--m-dark__section-title--Color", "--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav__separator--BackgroundColor",
      "value": "#4f5255",
      "token": "c_nav__separator_BackgroundColor",
      "values": ["--pf-c-nav--m-dark__separator--BackgroundColor", "--pf-global--BackgroundColor--dark-400", "$pf-global--BackgroundColor--dark-400", "$pf-color-black-700", "#4f5255"]
    }, {
      "property": "--pf-c-nav__subnav--MarginTop",
      "value": "0",
      "token": "c_nav__subnav_MarginTop",
      "values": ["--pf-c-nav--m-dark__subnav--MarginTop", "0"]
    }, {
      "property": "--pf-c-nav__list-link--after--Width",
      "value": "2.5rem",
      "token": "c_nav__list_link_after_Width",
      "values": ["--pf-c-nav--m-dark__list-link--after--Width", "2.5rem"]
    }],
    ".pf-c-nav.pf-m-dark .pf-c-divider": [{
      "property": "--pf-c-divider--after--BackgroundColor",
      "value": "#4f5255",
      "token": "c_divider_after_BackgroundColor",
      "values": ["--pf-c-nav--m-dark__c-divider--BackgroundColor", "--pf-global--BackgroundColor--dark-400", "$pf-global--BackgroundColor--dark-400", "$pf-color-black-700", "#4f5255"]
    }],
    ".pf-c-nav.pf-m-dark .pf-c-nav__item.pf-m-current": [{
      "property": "--pf-c-nav__simple-list-link--Color",
      "value": "#fff",
      "token": "c_nav__simple_list_link_Color",
      "values": ["--pf-c-nav--m-dark__item--m-current__simple-list-link--Color", "--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav__list-link--Color",
      "value": "#fff",
      "token": "c_nav__list_link_Color",
      "values": ["--pf-c-nav--m-dark__item--m-current__list-link--Color", "--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-nav__separator--BackgroundColor",
      "value": "#212427",
      "token": "c_nav__separator_BackgroundColor",
      "values": ["--pf-c-nav--m-dark__item--m-current__separator--BackgroundColor", "--pf-global--BackgroundColor--dark-300", "$pf-global--BackgroundColor--dark-300", "$pf-color-black-850", "#212427"]
    }],
    ".pf-c-nav.pf-m-dark .pf-c-nav__item.pf-m-current .pf-c-divider": [{
      "property": "--pf-c-divider--after--BackgroundColor",
      "value": "#212427",
      "token": "c_divider_after_BackgroundColor",
      "values": ["--pf-c-nav--m-dark__item--m-current__c-divider--BackgroundColor", "--pf-global--BackgroundColor--dark-300", "$pf-global--BackgroundColor--dark-300", "$pf-color-black-850", "#212427"]
    }],
    ".pf-c-nav.pf-m-dark .pf-c-nav__item.pf-m-expanded > .pf-c-nav__link": [{
      "property": "--pf-c-nav__list-link--after--Bottom",
      "value": "0",
      "token": "c_nav__list_link_after_Bottom",
      "values": ["--pf-c-nav--m-dark__item--m-expanded__list-link--after--Bottom", "0"]
    }, {
      "property": "--pf-c-nav__list-link--PaddingBottom",
      "value": "0.5rem",
      "token": "c_nav__list_link_PaddingBottom",
      "values": ["--pf-c-nav--m-dark__item--m-expanded__list-link--PaddingBottom", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-c-nav__list > .pf-c-nav__item .pf-c-divider": [{
      "property": "--pf-c-nav__c-divider--MarginLeft",
      "value": "1.5rem",
      "token": "c_nav__c_divider_MarginLeft",
      "values": ["--pf-c-nav__simple-list--nested__c-divider--MarginLeft", "--pf-c-nav__simple-list-link--nested--PaddingLeft", "--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }],
    ".pf-c-nav__list .pf-c-nav__link.pf-m-hover": [{
      "property": "--pf-c-nav__list-link--Color",
      "value": "#06c",
      "token": "c_nav__list_link_Color",
      "values": ["--pf-c-nav__list-link--hover--Color", "--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-nav__list .pf-c-nav__link.pf-m-active": [{
      "property": "--pf-c-nav__list-link--FontWeight",
      "value": "400",
      "token": "c_nav__list_link_FontWeight",
      "values": ["--pf-c-nav__list-link--active--FontWeight", "--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-nav__list-link--Color",
      "value": "#06c",
      "token": "c_nav__list_link_Color",
      "values": ["--pf-c-nav__list-link--active--Color", "--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-nav__list .pf-c-nav__link.pf-m-focus": [{
      "property": "--pf-c-nav__list-link--FontWeight",
      "value": "400",
      "token": "c_nav__list_link_FontWeight",
      "values": ["--pf-c-nav__list-link--focus--FontWeight", "--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-nav__list-link--Color",
      "value": "#06c",
      "token": "c_nav__list_link_Color",
      "values": ["--pf-c-nav__list-link--focus--Color", "--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-nav__list .pf-m-current.pf-c-nav__link": [{
      "property": "--pf-c-nav__list-link--FontWeight",
      "value": "500",
      "token": "c_nav__list_link_FontWeight",
      "values": ["--pf-c-nav__list-link--m-current--FontWeight", "--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-nav__list-link--Color",
      "value": "#06c",
      "token": "c_nav__list_link_Color",
      "values": ["--pf-c-nav__list-link--m-current--Color", "--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-nav__simple-list .pf-c-nav__separator": [{
      "property": "--pf-c-nav__separator--MarginLeft",
      "value": "1.5rem",
      "token": "c_nav__separator_MarginLeft",
      "values": ["--pf-c-nav__simple-list__separator--MarginLeft", "--pf-c-nav__simple-list-link--PaddingLeft", "--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }],
    ".pf-c-nav__item .pf-c-nav__separator": [{
      "property": "--pf-c-nav__separator--MarginLeft",
      "value": "1.5rem",
      "token": "c_nav__separator_MarginLeft",
      "values": ["--pf-c-nav__simple-list--nested__separator--MarginLeft", "--pf-c-nav__simple-list-link--nested--PaddingLeft", "--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }],
    ".pf-c-nav__simple-list .pf-c-divider": [{
      "property": "--pf-c-nav__c-divider--MarginLeft",
      "value": "1.5rem",
      "token": "c_nav__c_divider_MarginLeft",
      "values": ["--pf-c-nav__simple-list__c-divider--MarginLeft", "--pf-c-nav__simple-list-link--PaddingLeft", "--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }],
    ".pf-c-nav__simple-list .pf-c-nav__link.pf-m-hover": [{
      "property": "--pf-c-nav__simple-list-link--Color",
      "value": "#06c",
      "token": "c_nav__simple_list_link_Color",
      "values": ["--pf-c-nav__simple-list-link--hover--Color", "--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-nav__simple-list .pf-c-nav__link.pf-m-focus": [{
      "property": "--pf-c-nav__simple-list-link--FontWeight",
      "value": "500",
      "token": "c_nav__simple_list_link_FontWeight",
      "values": ["--pf-c-nav__simple-list-link--focus--FontWeight", "--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-nav__simple-list-link--Color",
      "value": "#06c",
      "token": "c_nav__simple_list_link_Color",
      "values": ["--pf-c-nav__simple-list-link--focus--Color", "--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-nav__simple-list .pf-c-nav__link.pf-m-active": [{
      "property": "--pf-c-nav__simple-list-link--FontWeight",
      "value": "500",
      "token": "c_nav__simple_list_link_FontWeight",
      "values": ["--pf-c-nav__simple-list-link--active--FontWeight", "--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-nav__simple-list-link--Color",
      "value": "#06c",
      "token": "c_nav__simple_list_link_Color",
      "values": ["--pf-c-nav__simple-list-link--active--Color", "--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-nav__simple-list .pf-c-nav__link.pf-m-current": [{
      "property": "--pf-c-nav__simple-list-link--FontWeight",
      "value": "500",
      "token": "c_nav__simple_list_link_FontWeight",
      "values": ["--pf-c-nav__simple-list-link--m-current--FontWeight", "--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-nav__simple-list-link--Color",
      "value": "#06c",
      "token": "c_nav__simple_list_link_Color",
      "values": ["--pf-c-nav__simple-list-link--m-current--Color", "--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-nav__item .pf-c-nav__simple-list .pf-c-nav__link": [{
      "property": "--pf-c-nav__simple-list-link--PaddingLeft",
      "value": "1.5rem",
      "token": "c_nav__simple_list_link_PaddingLeft",
      "values": ["--pf-c-nav__simple-list-link--nested--PaddingLeft", "--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }],
    ".pf-c-nav__horizontal-list .pf-c-nav__link.pf-m-hover": [{
      "property": "--pf-c-nav__horizontal-list-link--Color",
      "value": "#2b9af3",
      "token": "c_nav__horizontal_list_link_Color",
      "values": ["--pf-c-nav__horizontal-list-link--hover--Color", "--pf-global--active-color--400", "$pf-global--active-color--400", "$pf-color-blue-300", "#2b9af3"]
    }],
    ".pf-c-nav__horizontal-list .pf-c-nav__link.pf-m-focus": [{
      "property": "--pf-c-nav__horizontal-list-link--Color",
      "value": "#2b9af3",
      "token": "c_nav__horizontal_list_link_Color",
      "values": ["--pf-c-nav__horizontal-list-link--focus--Color", "--pf-global--active-color--400", "$pf-global--active-color--400", "$pf-color-blue-300", "#2b9af3"]
    }],
    ".pf-c-nav__horizontal-list .pf-c-nav__link.pf-m-active": [{
      "property": "--pf-c-nav__horizontal-list-link--Color",
      "value": "#2b9af3",
      "token": "c_nav__horizontal_list_link_Color",
      "values": ["--pf-c-nav__horizontal-list-link--active--Color", "--pf-global--active-color--400", "$pf-global--active-color--400", "$pf-color-blue-300", "#2b9af3"]
    }],
    ".pf-c-nav__horizontal-list .pf-c-nav__link.pf-m-current": [{
      "property": "--pf-c-nav__horizontal-list-link--Color",
      "value": "#2b9af3",
      "token": "c_nav__horizontal_list_link_Color",
      "values": ["--pf-c-nav__horizontal-list-link--m-current--Color", "--pf-global--active-color--400", "$pf-global--active-color--400", "$pf-color-blue-300", "#2b9af3"]
    }],
    ".pf-c-nav__tertiary-list .pf-c-nav__link.pf-m-hover": [{
      "property": "--pf-c-nav__tertiary-list-link--Color",
      "value": "#06c",
      "token": "c_nav__tertiary_list_link_Color",
      "values": ["--pf-c-nav__tertiary-list-link--hover--Color", "--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-nav__tertiary-list .pf-c-nav__link.pf-m-focus": [{
      "property": "--pf-c-nav__tertiary-list-link--Color",
      "value": "#06c",
      "token": "c_nav__tertiary_list_link_Color",
      "values": ["--pf-c-nav__tertiary-list-link--focus--Color", "--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-nav__tertiary-list .pf-c-nav__link.pf-m-active": [{
      "property": "--pf-c-nav__tertiary-list-link--Color",
      "value": "#06c",
      "token": "c_nav__tertiary_list_link_Color",
      "values": ["--pf-c-nav__tertiary-list-link--active--Color", "--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-nav__tertiary-list .pf-c-nav__link.pf-m-current": [{
      "property": "--pf-c-nav__tertiary-list-link--Color",
      "value": "#06c",
      "token": "c_nav__tertiary_list_link_Color",
      "values": ["--pf-c-nav__tertiary-list-link--m-current--Color", "--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-nav__section + .pf-c-nav__section": [{
      "property": "--pf-c-nav__section--MarginTop",
      "value": "2rem",
      "token": "c_nav__section_MarginTop",
      "values": ["--pf-c-nav__section__section--MarginTop", "--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }]
  };
});