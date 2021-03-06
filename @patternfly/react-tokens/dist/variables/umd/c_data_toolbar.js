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
    ".pf-c-data-toolbar": [{
      "property": "--pf-c-data-toolbar--BackgroundColor",
      "value": "#fff",
      "token": "c_data_toolbar_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--100", "$pf-global--BackgroundColor--100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-data-toolbar--RowGap",
      "value": "1.5rem",
      "token": "c_data_toolbar_RowGap",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-data-toolbar--PaddingTop",
      "value": "1rem",
      "token": "c_data_toolbar_PaddingTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-data-toolbar--PaddingBottom",
      "value": "1rem",
      "token": "c_data_toolbar_PaddingBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-data-toolbar__content--PaddingRight",
      "value": "1rem",
      "token": "c_data_toolbar__content_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-data-toolbar__content--PaddingLeft",
      "value": "1rem",
      "token": "c_data_toolbar__content_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-data-toolbar__expandable-content--PaddingTop",
      "value": "1.5rem",
      "token": "c_data_toolbar__expandable_content_PaddingTop",
      "values": ["--pf-c-data-toolbar--RowGap", "--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-data-toolbar__expandable-content--PaddingRight",
      "value": "1rem",
      "token": "c_data_toolbar__expandable_content_PaddingRight",
      "values": ["--pf-c-data-toolbar__content--PaddingRight", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-data-toolbar__expandable-content--PaddingBottom",
      "value": "1rem",
      "token": "c_data_toolbar__expandable_content_PaddingBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-data-toolbar__expandable-content--PaddingLeft",
      "value": "1rem",
      "token": "c_data_toolbar__expandable_content_PaddingLeft",
      "values": ["--pf-c-data-toolbar__content--PaddingLeft", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-data-toolbar__expandable-content--lg--PaddingRight",
      "value": "0",
      "token": "c_data_toolbar__expandable_content_lg_PaddingRight"
    }, {
      "property": "--pf-c-data-toolbar__expandable-content--lg--PaddingBottom",
      "value": "0",
      "token": "c_data_toolbar__expandable_content_lg_PaddingBottom"
    }, {
      "property": "--pf-c-data-toolbar__expandable-content--lg--PaddingLeft",
      "value": "0",
      "token": "c_data_toolbar__expandable_content_lg_PaddingLeft"
    }, {
      "property": "--pf-c-data-toolbar__expandable-content--ZIndex",
      "value": "100",
      "token": "c_data_toolbar__expandable_content_ZIndex",
      "values": ["--pf-global--ZIndex--xs", "$pf-global--ZIndex--xs", "100"]
    }, {
      "property": "--pf-c-data-toolbar__expandable-content--BoxShadow",
      "value": "0 0.3125rem 0.625rem -0.25rem rgba(3, 3, 3, 0.25)",
      "token": "c_data_toolbar__expandable_content_BoxShadow",
      "values": ["--pf-global--BoxShadow--md-bottom", "$pf-global--BoxShadow--md-bottom", "0 pf-size-prem(5) pf-size-prem(10) pf-size-prem(-4) rgba($pf-color-black-1000, .25)", "0 pf-size-prem(5) pf-size-prem(10) pf-size-prem(-4) rgba(#030303, .25)", "0 0.3125rem 0.625rem -0.25rem rgba(3, 3, 3, 0.25)"]
    }, {
      "property": "--pf-c-data-toolbar__expandable-content--BackgroundColor",
      "value": "#fff",
      "token": "c_data_toolbar__expandable_content_BackgroundColor",
      "values": ["--pf-c-data-toolbar--BackgroundColor", "--pf-global--BackgroundColor--100", "$pf-global--BackgroundColor--100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-data-toolbar__expandable-content--m-expanded--GridRowGap",
      "value": "1.5rem",
      "token": "c_data_toolbar__expandable_content_m_expanded_GridRowGap",
      "values": ["--pf-global--gutter", "$pf-global--gutter", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-data-toolbar__group--m-chip-container--MarginTop",
      "value": "calc(1rem * -1)",
      "token": "c_data_toolbar__group_m_chip_container_MarginTop",
      "values": ["calc(--pf-global--spacer--md * -1)", "calc($pf-global--spacer--md * -1)", "calc(pf-size-prem(16px) * -1)", "calc(1rem * -1)"]
    }, {
      "property": "--pf-c-data-toolbar__group--m-chip-container__item--MarginTop",
      "value": "1rem",
      "token": "c_data_toolbar__group_m_chip_container__item_MarginTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-data-toolbar--spacer--base",
      "value": "1rem",
      "token": "c_data_toolbar_spacer_base",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-data-toolbar__item--spacer",
      "value": "1rem",
      "token": "c_data_toolbar__item_spacer",
      "values": ["--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-data-toolbar__group--spacer",
      "value": "1rem",
      "token": "c_data_toolbar__group_spacer",
      "values": ["--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-data-toolbar__group--m-toggle-group--spacer",
      "value": "0.5rem",
      "token": "c_data_toolbar__group_m_toggle_group_spacer",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-data-toolbar__group--m-toggle-group--m-show--spacer",
      "value": "1rem",
      "token": "c_data_toolbar__group_m_toggle_group_m_show_spacer",
      "values": ["--pf-c-data-toolbar__group--spacer", "--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-data-toolbar__group--m-icon-button-group--spacer",
      "value": "1rem",
      "token": "c_data_toolbar__group_m_icon_button_group_spacer",
      "values": ["--pf-c-data-toolbar__group--spacer", "--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-data-toolbar__group--m-icon-button-group--space-items",
      "value": "0",
      "token": "c_data_toolbar__group_m_icon_button_group_space_items"
    }, {
      "property": "--pf-c-data-toolbar__group--m-button-group--spacer",
      "value": "1rem",
      "token": "c_data_toolbar__group_m_button_group_spacer",
      "values": ["--pf-c-data-toolbar__group--spacer", "--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-data-toolbar__group--m-button-group--space-items",
      "value": "0.5rem",
      "token": "c_data_toolbar__group_m_button_group_space_items",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-data-toolbar__group--m-filter-group--spacer",
      "value": "1rem",
      "token": "c_data_toolbar__group_m_filter_group_spacer",
      "values": ["--pf-c-data-toolbar__group--spacer", "--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-data-toolbar__group--m-filter-group--space-items",
      "value": "0",
      "token": "c_data_toolbar__group_m_filter_group_space_items"
    }, {
      "property": "--pf-c-data-toolbar__item--m-separator--spacer",
      "value": "1rem",
      "token": "c_data_toolbar__item_m_separator_spacer",
      "values": ["--pf-c-data-toolbar__item--spacer", "--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-data-toolbar__item--m-separator--BackgroundColor",
      "value": "#d2d2d2",
      "token": "c_data_toolbar__item_m_separator_BackgroundColor",
      "values": ["--pf-global--BorderColor--100", "$pf-global--BorderColor--100", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-data-toolbar__item--m-separator--Width",
      "value": "2px",
      "token": "c_data_toolbar__item_m_separator_Width",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-data-toolbar__item--m-separator--Height",
      "value": "1.125rem",
      "token": "c_data_toolbar__item_m_separator_Height",
      "values": ["--pf-global--FontSize--lg", "$pf-global--FontSize--lg", "pf-font-prem(18px)", "1.125rem"]
    }, {
      "property": "--pf-c-data-toolbar__item--m-overflow-menu--spacer",
      "value": "1rem",
      "token": "c_data_toolbar__item_m_overflow_menu_spacer",
      "values": ["--pf-c-data-toolbar__item--spacer", "--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-data-toolbar__item--m-bulk-select--spacer",
      "value": "1.5rem",
      "token": "c_data_toolbar__item_m_bulk_select_spacer",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-data-toolbar__item--m-search-filter--spacer",
      "value": "0.5rem",
      "token": "c_data_toolbar__item_m_search_filter_spacer",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-data-toolbar__item--m-chip-group--spacer",
      "value": "0.5rem",
      "token": "c_data_toolbar__item_m_chip_group_spacer",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-data-toolbar__item--m-label--spacer",
      "value": "1rem",
      "token": "c_data_toolbar__item_m_label_spacer",
      "values": ["--pf-c-data-toolbar__item--spacer", "--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-data-toolbar__item--m-label--FontWeight",
      "value": "600",
      "token": "c_data_toolbar__item_m_label_FontWeight",
      "values": ["--pf-global--FontWeight--bold", "$pf-global--FontWeight--bold", "600"]
    }, {
      "property": "--pf-c-data-toolbar__toggle--m-expanded__c-button--m-plain--Color",
      "value": "#151515",
      "token": "c_data_toolbar__toggle_m_expanded__c_button_m_plain_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-data-toolbar--c-divider--m-vertical--spacer",
      "value": "1rem",
      "token": "c_data_toolbar_c_divider_m_vertical_spacer",
      "values": ["--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-data-toolbar__content-section > .pf-c-divider": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "1rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-c-data-toolbar--c-divider--m-vertical--spacer", "--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-data-toolbar__content-section > .pf-c-divider.pf-m-vertical:last-child": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0",
      "token": "c_data_toolbar_spacer"
    }],
    ".pf-c-data-toolbar__group": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "1rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-c-data-toolbar__group--spacer", "--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-data-toolbar__group.pf-m-button-group": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "1rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-c-data-toolbar__group--m-button-group--spacer", "--pf-c-data-toolbar__group--spacer", "--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-data-toolbar__group.pf-m-button-group > *": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0.5rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-c-data-toolbar__group--m-button-group--space-items", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-c-data-toolbar__group.pf-m-icon-button-group": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "1rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-c-data-toolbar__group--m-icon-button-group--spacer", "--pf-c-data-toolbar__group--spacer", "--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-data-toolbar__group.pf-m-icon-button-group > *": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-c-data-toolbar__group--m-icon-button-group--space-items", "0"]
    }],
    ".pf-c-data-toolbar__group.pf-m-filter-group": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "1rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-c-data-toolbar__group--m-filter-group--spacer", "--pf-c-data-toolbar__group--spacer", "--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-data-toolbar__group.pf-m-filter-group > *": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-c-data-toolbar__group--m-filter-group--space-items", "0"]
    }],
    ".pf-c-data-toolbar__group.pf-m-toggle-group": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0.5rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-c-data-toolbar__group--m-toggle-group--spacer", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-c-data-toolbar__group:last-child": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0",
      "token": "c_data_toolbar_spacer"
    }],
    ".pf-c-data-toolbar__item": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "1rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-c-data-toolbar__item--spacer", "--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-data-toolbar__item.pf-m-separator": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "1rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-c-data-toolbar__item--m-separator--spacer", "--pf-c-data-toolbar__item--spacer", "--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-data-toolbar__item.pf-m-overflow-menu": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "1rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-c-data-toolbar__item--m-overflow-menu--spacer", "--pf-c-data-toolbar__item--spacer", "--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-data-toolbar__item.pf-m-bulk-select": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "1.5rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-c-data-toolbar__item--m-bulk-select--spacer", "--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }],
    ".pf-c-data-toolbar__item.pf-m-search-filter": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0.5rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-c-data-toolbar__item--m-search-filter--spacer", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-c-data-toolbar__item.pf-m-chip-group": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0.5rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-c-data-toolbar__item--m-chip-group--spacer", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-c-data-toolbar__item.pf-m-label": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "1rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-c-data-toolbar__item--m-label--spacer", "--pf-c-data-toolbar__item--spacer", "--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-data-toolbar__item:last-child": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0",
      "token": "c_data_toolbar_spacer"
    }],
    ".pf-c-data-toolbar__expandable-content .pf-c-data-toolbar__group": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0",
      "token": "c_data_toolbar_spacer"
    }],
    ".pf-c-data-toolbar__content.pf-m-chip-container .pf-c-data-toolbar__item": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "1rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-c-data-toolbar__item--spacer", "--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-data-toolbar__content.pf-m-chip-container .pf-c-data-toolbar__group": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "1rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-c-data-toolbar__group--spacer", "--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-data-toolbar__content.pf-m-chip-container .pf-c-data-toolbar__group:last-child": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0",
      "token": "c_data_toolbar_spacer"
    }],
    ".pf-c-data-toolbar .pf-c-chip-group:last-child": [{
      "property": "--pf-c-chip-group--MarginRight",
      "value": "0",
      "token": "c_chip_group_MarginRight"
    }],
    ".pf-c-data-toolbar .pf-c-chip-group li:last-child": [{
      "property": "--pf-c-chip-group__li--m-toolbar--MarginRight",
      "value": "0",
      "token": "c_chip_group__li_m_toolbar_MarginRight"
    }],
    ".pf-m-toggle-group.pf-m-show": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "1rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-c-data-toolbar__group--m-toggle-group--m-show--spacer", "--pf-c-data-toolbar__group--spacer", "--pf-c-data-toolbar--spacer--base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-data-toolbar .pf-m-space-items-none > *": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0",
      "token": "c_data_toolbar_spacer"
    }],
    ".pf-c-data-toolbar .pf-m-space-items-none > :last-child": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0",
      "token": "c_data_toolbar_spacer"
    }],
    ".pf-c-data-toolbar .pf-m-space-items-sm > *": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0.5rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-c-data-toolbar .pf-m-space-items-sm > :last-child": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0",
      "token": "c_data_toolbar_spacer"
    }],
    ".pf-c-data-toolbar .pf-m-space-items-md > *": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "1rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-data-toolbar .pf-m-space-items-md > :last-child": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0",
      "token": "c_data_toolbar_spacer"
    }],
    ".pf-c-data-toolbar .pf-m-space-items-lg > *": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "1.5rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }],
    ".pf-c-data-toolbar .pf-m-space-items-lg > :last-child": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0",
      "token": "c_data_toolbar_spacer"
    }],
    ".pf-c-data-toolbar .pf-m-spacer-none": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0",
      "token": "c_data_toolbar_spacer"
    }],
    ".pf-c-data-toolbar .pf-m-spacer-none:last-child": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0",
      "token": "c_data_toolbar_spacer"
    }],
    ".pf-c-data-toolbar .pf-m-spacer-sm": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0.5rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-c-data-toolbar .pf-m-spacer-sm:last-child": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0.5rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-c-data-toolbar .pf-m-spacer-md": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "1rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-data-toolbar .pf-m-spacer-md:last-child": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "1rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-data-toolbar .pf-m-spacer-lg": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "1.5rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }],
    ".pf-c-data-toolbar .pf-m-spacer-lg:last-child": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "1.5rem",
      "token": "c_data_toolbar_spacer",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }],
    ".pf-c-data-toolbar__content-section > :last-child": [{
      "property": "--pf-c-data-toolbar--spacer",
      "value": "0",
      "token": "c_data_toolbar_spacer"
    }]
  };
});