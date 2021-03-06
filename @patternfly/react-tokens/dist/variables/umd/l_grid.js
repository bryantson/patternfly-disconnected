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
    ".pf-l-grid": [{
      "property": "--pf-l-grid--m-gutter--GridGap",
      "value": "1.5rem",
      "token": "l_grid_m_gutter_GridGap",
      "values": ["--pf-global--gutter", "$pf-global--gutter", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-l-grid--m-gutter--md--GridGap",
      "value": "1rem",
      "token": "l_grid_m_gutter_md_GridGap",
      "values": ["--pf-global--gutter--md", "$pf-global--gutter--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-l-grid__item--GridColumnStart",
      "value": "auto",
      "token": "l_grid__item_GridColumnStart"
    }, {
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 12",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid.pf-m-all-1-col > *": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 1",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid.pf-m-all-2-col > *": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 2",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid.pf-m-all-3-col > *": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 3",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid.pf-m-all-4-col > *": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 4",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid.pf-m-all-5-col > *": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 5",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid.pf-m-all-6-col > *": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 6",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid.pf-m-all-7-col > *": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 7",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid.pf-m-all-8-col > *": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 8",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid.pf-m-all-9-col > *": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 9",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid.pf-m-all-10-col > *": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 10",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid.pf-m-all-11-col > *": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 11",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid.pf-m-all-12-col > *": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 12",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid > .pf-m-1-col": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 1",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid > .pf-m-2-col": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 2",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid > .pf-m-3-col": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 3",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid > .pf-m-4-col": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 4",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid > .pf-m-5-col": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 5",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid > .pf-m-6-col": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 6",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid > .pf-m-7-col": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 7",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid > .pf-m-8-col": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 8",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid > .pf-m-9-col": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 9",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid > .pf-m-10-col": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 10",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid > .pf-m-11-col": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 11",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid > .pf-m-12-col": [{
      "property": "--pf-l-grid__item--GridColumnEnd",
      "value": "span 12",
      "token": "l_grid__item_GridColumnEnd"
    }],
    ".pf-l-grid > .pf-m-offset-1-col": [{
      "property": "--pf-l-grid__item--GridColumnStart",
      "value": "col-start calc(1 + 1)",
      "token": "l_grid__item_GridColumnStart"
    }],
    ".pf-l-grid > .pf-m-offset-2-col": [{
      "property": "--pf-l-grid__item--GridColumnStart",
      "value": "col-start calc(2 + 1)",
      "token": "l_grid__item_GridColumnStart"
    }],
    ".pf-l-grid > .pf-m-offset-3-col": [{
      "property": "--pf-l-grid__item--GridColumnStart",
      "value": "col-start calc(3 + 1)",
      "token": "l_grid__item_GridColumnStart"
    }],
    ".pf-l-grid > .pf-m-offset-4-col": [{
      "property": "--pf-l-grid__item--GridColumnStart",
      "value": "col-start calc(4 + 1)",
      "token": "l_grid__item_GridColumnStart"
    }],
    ".pf-l-grid > .pf-m-offset-5-col": [{
      "property": "--pf-l-grid__item--GridColumnStart",
      "value": "col-start calc(5 + 1)",
      "token": "l_grid__item_GridColumnStart"
    }],
    ".pf-l-grid > .pf-m-offset-6-col": [{
      "property": "--pf-l-grid__item--GridColumnStart",
      "value": "col-start calc(6 + 1)",
      "token": "l_grid__item_GridColumnStart"
    }],
    ".pf-l-grid > .pf-m-offset-7-col": [{
      "property": "--pf-l-grid__item--GridColumnStart",
      "value": "col-start calc(7 + 1)",
      "token": "l_grid__item_GridColumnStart"
    }],
    ".pf-l-grid > .pf-m-offset-8-col": [{
      "property": "--pf-l-grid__item--GridColumnStart",
      "value": "col-start calc(8 + 1)",
      "token": "l_grid__item_GridColumnStart"
    }],
    ".pf-l-grid > .pf-m-offset-9-col": [{
      "property": "--pf-l-grid__item--GridColumnStart",
      "value": "col-start calc(9 + 1)",
      "token": "l_grid__item_GridColumnStart"
    }],
    ".pf-l-grid > .pf-m-offset-10-col": [{
      "property": "--pf-l-grid__item--GridColumnStart",
      "value": "col-start calc(10 + 1)",
      "token": "l_grid__item_GridColumnStart"
    }],
    ".pf-l-grid > .pf-m-offset-11-col": [{
      "property": "--pf-l-grid__item--GridColumnStart",
      "value": "col-start calc(11 + 1)",
      "token": "l_grid__item_GridColumnStart"
    }],
    ".pf-l-grid > .pf-m-offset-12-col": [{
      "property": "--pf-l-grid__item--GridColumnStart",
      "value": "col-start calc(12 + 1)",
      "token": "l_grid__item_GridColumnStart"
    }]
  };
});