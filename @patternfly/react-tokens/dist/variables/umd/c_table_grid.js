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
    ".pf-c-table[class*=\"pf-m-grid\"]": [{
      "property": "--pf-c-table--responsive--BorderColor",
      "value": "#ededed",
      "token": "c_table_responsive_BorderColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-table-tbody--responsive--MarginTop",
      "value": "0.25rem",
      "token": "c_table_tbody_responsive_MarginTop",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-table-tbody--m-expanded--before--Top",
      "value": "0.5rem",
      "token": "c_table_tbody_m_expanded_before_Top",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-table-tbody--responsive--BorderWidth",
      "value": "0.5rem",
      "token": "c_table_tbody_responsive_BorderWidth",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-table-tr--responsive--BorderWidth",
      "value": "0.5rem",
      "token": "c_table_tr_responsive_BorderWidth",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-table-tr--responsive--last-child--BorderWidth",
      "value": "1px",
      "token": "c_table_tr_responsive_last_child_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-table-tr--responsive--GridColumnGap",
      "value": "1rem",
      "token": "c_table_tr_responsive_GridColumnGap",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-table-tr--responsive--MarginTop",
      "value": "0.5rem",
      "token": "c_table_tr_responsive_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-table-tr--responsive--PaddingTop",
      "value": "1rem",
      "token": "c_table_tr_responsive_PaddingTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-table-tr--responsive--PaddingRight",
      "value": "1.5rem",
      "token": "c_table_tr_responsive_PaddingRight",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-table-tr--responsive--md--PaddingRight",
      "value": "1rem",
      "token": "c_table_tr_responsive_md_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-table-tr--responsive--PaddingBottom",
      "value": "1rem",
      "token": "c_table_tr_responsive_PaddingBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-table-tr--responsive--PaddingLeft",
      "value": "1.5rem",
      "token": "c_table_tr_responsive_PaddingLeft",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-table-tr--responsive--md--PaddingLeft",
      "value": "1rem",
      "token": "c_table_tr_responsive_md_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-table-tr--responsive--nested-table--PaddingTop",
      "value": "2rem",
      "token": "c_table_tr_responsive_nested_table_PaddingTop",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-table-tr--responsive--nested-table--PaddingRight",
      "value": "1.5rem",
      "token": "c_table_tr_responsive_nested_table_PaddingRight",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-table-tr--responsive--nested-table--PaddingBottom",
      "value": "2rem",
      "token": "c_table_tr_responsive_nested_table_PaddingBottom",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-table-tr--responsive--nested-table--PaddingLeft",
      "value": "1.5rem",
      "token": "c_table_tr_responsive_nested_table_PaddingLeft",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-table-cell--m-grid--hidden-visible--Display",
      "value": "grid",
      "token": "c_table_cell_m_grid_hidden_visible_Display"
    }, {
      "property": "--pf-c-table-td--responsive--GridColumnGap",
      "value": "1rem",
      "token": "c_table_td_responsive_GridColumnGap",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-table-cell--responsive--PaddingTop",
      "value": "1rem",
      "token": "c_table_cell_responsive_PaddingTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-table-cell--responsive--PaddingBottom",
      "value": "0.5rem",
      "token": "c_table_cell_responsive_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-table-cell-th--responsive--PaddingTop",
      "value": "0.5rem",
      "token": "c_table_cell_th_responsive_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-table-cell--responsive--PaddingRight",
      "value": "0",
      "token": "c_table_cell_responsive_PaddingRight"
    }, {
      "property": "--pf-c-table-cell--responsive--PaddingLeft",
      "value": "0",
      "token": "c_table_cell_responsive_PaddingLeft"
    }, {
      "property": "--pf-c-table--m-compact-tr-td--responsive--PaddingTop",
      "value": "0.5rem",
      "token": "c_table_m_compact_tr_td_responsive_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-table--m-compact-tr-td--responsive--PaddingBottom",
      "value": "0.5rem",
      "token": "c_table_m_compact_tr_td_responsive_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-table__expandable-row-content--responsive--PaddingRight",
      "value": "1.5rem",
      "token": "c_table__expandable_row_content_responsive_PaddingRight",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-table__expandable-row-content--responsive--PaddingLeft",
      "value": "1.5rem",
      "token": "c_table__expandable_row_content_responsive_PaddingLeft",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-table__expandable-row-content--BackgroundColor",
      "value": "#fff",
      "token": "c_table__expandable_row_content_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--100", "$pf-global--BackgroundColor--100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-table__check--responsive--MarginLeft",
      "value": "0.5rem",
      "token": "c_table__check_responsive_MarginLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-table__check--responsive--MarginTop",
      "value": "0.375rem",
      "token": "c_table__check_responsive_MarginTop"
    }, {
      "property": "--pf-c-table__action--responsive--MarginLeft",
      "value": "2rem",
      "token": "c_table__action_responsive_MarginLeft",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-table__toggle__icon--Transition",
      "value": ".2s ease-in 0s",
      "token": "c_table__toggle__icon_Transition"
    }, {
      "property": "--pf-c-table__toggle--m-expanded__icon--Transform",
      "value": "rotate(180deg)",
      "token": "c_table__toggle_m_expanded__icon_Transform"
    }],
    ".pf-m-grid.pf-c-table [data-label]": [{
      "property": "--pf-c-table-cell--hidden-visible--Display",
      "value": "grid",
      "token": "c_table_cell_hidden_visible_Display",
      "values": ["--pf-c-table-cell--m-grid--hidden-visible--Display", "grid"]
    }],
    ".pf-m-grid.pf-c-table tr > *:first-child": [{
      "property": "--pf-c-table-cell--PaddingLeft",
      "value": "0",
      "token": "c_table_cell_PaddingLeft"
    }],
    ".pf-m-grid.pf-c-table tr > *:last-child": [{
      "property": "--pf-c-table-cell--PaddingRight",
      "value": "0",
      "token": "c_table_cell_PaddingRight"
    }],
    ".pf-m-grid.pf-c-table .pf-c-table": [{
      "property": "--pf-c-table-tr--responsive--PaddingTop",
      "value": "2rem",
      "token": "c_table_tr_responsive_PaddingTop",
      "values": ["--pf-c-table-tr--responsive--nested-table--PaddingTop", "--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-table-tr--responsive--PaddingRight",
      "value": "1.5rem",
      "token": "c_table_tr_responsive_PaddingRight",
      "values": ["--pf-c-table-tr--responsive--nested-table--PaddingRight", "--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-table-tr--responsive--PaddingBottom",
      "value": "2rem",
      "token": "c_table_tr_responsive_PaddingBottom",
      "values": ["--pf-c-table-tr--responsive--nested-table--PaddingBottom", "--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-table-tr--responsive--PaddingLeft",
      "value": "1.5rem",
      "token": "c_table_tr_responsive_PaddingLeft",
      "values": ["--pf-c-table-tr--responsive--nested-table--PaddingLeft", "--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }],
    ".pf-m-grid.pf-c-table .pf-c-table tr:not(.pf-c-table__expandable-row) + tr:not(.pf-c-table__expandable-row)": [{
      "property": "--pf-c-table-tr--responsive--PaddingTop",
      "value": "0",
      "token": "c_table_tr_responsive_PaddingTop"
    }],
    ".pf-m-grid.pf-c-table .pf-c-table__expandable-row": [{
      "property": "--pf-c-table-cell--responsive--PaddingTop",
      "value": "0",
      "token": "c_table_cell_responsive_PaddingTop"
    }, {
      "property": "--pf-c-table-cell--responsive--PaddingRight",
      "value": "0",
      "token": "c_table_cell_responsive_PaddingRight"
    }, {
      "property": "--pf-c-table-cell--responsive--PaddingBottom",
      "value": "0",
      "token": "c_table_cell_responsive_PaddingBottom"
    }, {
      "property": "--pf-c-table-cell--responsive--PaddingLeft",
      "value": "0",
      "token": "c_table_cell_responsive_PaddingLeft"
    }, {
      "property": "--pf-c-table-cell--PaddingRight",
      "value": "0",
      "token": "c_table_cell_PaddingRight"
    }, {
      "property": "--pf-c-table-cell--PaddingLeft",
      "value": "0",
      "token": "c_table_cell_PaddingLeft"
    }]
  };
});