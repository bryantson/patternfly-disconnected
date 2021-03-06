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
    ".pf-l-flex": [{
      "property": "--pf-l-flex--Display",
      "value": "flex",
      "token": "l_flex_Display"
    }, {
      "property": "--pf-l-flex--FlexWrap",
      "value": "wrap",
      "token": "l_flex_FlexWrap"
    }, {
      "property": "--pf-l-flex--AlignItems",
      "value": "baseline",
      "token": "l_flex_AlignItems"
    }, {
      "property": "--pf-l-flex--m-row--AlignItems",
      "value": "baseline",
      "token": "l_flex_m_row_AlignItems"
    }, {
      "property": "--pf-l-flex--m-row-reverse--AlignItems",
      "value": "baseline",
      "token": "l_flex_m_row_reverse_AlignItems"
    }, {
      "property": "--pf-l-flex--spacer-base",
      "value": "1rem",
      "token": "l_flex_spacer_base",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-l-flex--spacer",
      "value": "1rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer-base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-l-flex--spacer--none",
      "value": "0",
      "token": "l_flex_spacer_none"
    }, {
      "property": "--pf-l-flex--spacer--xs",
      "value": "0.25rem",
      "token": "l_flex_spacer_xs",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-l-flex--spacer--sm",
      "value": "0.5rem",
      "token": "l_flex_spacer_sm",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-l-flex--spacer--md",
      "value": "1rem",
      "token": "l_flex_spacer_md",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-l-flex--spacer--lg",
      "value": "1.5rem",
      "token": "l_flex_spacer_lg",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-l-flex--spacer--xl",
      "value": "2rem",
      "token": "l_flex_spacer_xl",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-l-flex--spacer--2xl",
      "value": "3rem",
      "token": "l_flex_spacer_2xl",
      "values": ["--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }, {
      "property": "--pf-l-flex--spacer--3xl",
      "value": "4rem",
      "token": "l_flex_spacer_3xl",
      "values": ["--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }],
    ".pf-l-flex:last-child": [{
      "property": "--pf-l-flex--spacer",
      "value": "0",
      "token": "l_flex_spacer"
    }],
    ".pf-l-flex > *": [{
      "property": "--pf-l-flex--spacer",
      "value": "1rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer-base", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-l-flex > *:last-child": [{
      "property": "--pf-l-flex--spacer",
      "value": "0",
      "token": "l_flex_spacer"
    }],
    ".pf-l-flex.pf-m-inline-flex": [{
      "property": "--pf-l-flex--Display",
      "value": "inline-flex",
      "token": "l_flex_Display"
    }],
    ".pf-l-flex.pf-m-space-items-none > *": [{
      "property": "--pf-l-flex--spacer",
      "value": "0",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--none", "0"]
    }],
    ".pf-l-flex.pf-m-space-items-none > :last-child": [{
      "property": "--pf-l-flex--spacer",
      "value": "0",
      "token": "l_flex_spacer"
    }],
    ".pf-l-flex.pf-m-space-items-xs > *": [{
      "property": "--pf-l-flex--spacer",
      "value": "0.25rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--xs", "--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }],
    ".pf-l-flex.pf-m-space-items-xs > :last-child": [{
      "property": "--pf-l-flex--spacer",
      "value": "0",
      "token": "l_flex_spacer"
    }],
    ".pf-l-flex.pf-m-space-items-sm > *": [{
      "property": "--pf-l-flex--spacer",
      "value": "0.5rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--sm", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-l-flex.pf-m-space-items-sm > :last-child": [{
      "property": "--pf-l-flex--spacer",
      "value": "0",
      "token": "l_flex_spacer"
    }],
    ".pf-l-flex.pf-m-space-items-md > *": [{
      "property": "--pf-l-flex--spacer",
      "value": "1rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--md", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-l-flex.pf-m-space-items-md > :last-child": [{
      "property": "--pf-l-flex--spacer",
      "value": "0",
      "token": "l_flex_spacer"
    }],
    ".pf-l-flex.pf-m-space-items-lg > *": [{
      "property": "--pf-l-flex--spacer",
      "value": "1.5rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--lg", "--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }],
    ".pf-l-flex.pf-m-space-items-lg > :last-child": [{
      "property": "--pf-l-flex--spacer",
      "value": "0",
      "token": "l_flex_spacer"
    }],
    ".pf-l-flex.pf-m-space-items-xl > *": [{
      "property": "--pf-l-flex--spacer",
      "value": "2rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--xl", "--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }],
    ".pf-l-flex.pf-m-space-items-xl > :last-child": [{
      "property": "--pf-l-flex--spacer",
      "value": "0",
      "token": "l_flex_spacer"
    }],
    ".pf-l-flex.pf-m-space-items-2xl > *": [{
      "property": "--pf-l-flex--spacer",
      "value": "3rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--2xl", "--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }],
    ".pf-l-flex.pf-m-space-items-2xl > :last-child": [{
      "property": "--pf-l-flex--spacer",
      "value": "0",
      "token": "l_flex_spacer"
    }],
    ".pf-l-flex.pf-m-space-items-3xl > *": [{
      "property": "--pf-l-flex--spacer",
      "value": "4rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--3xl", "--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }],
    ".pf-l-flex.pf-m-space-items-3xl > :last-child": [{
      "property": "--pf-l-flex--spacer",
      "value": "0",
      "token": "l_flex_spacer"
    }],
    ".pf-l-flex .pf-m-spacer-none": [{
      "property": "--pf-l-flex--spacer",
      "value": "0",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--none", "0"]
    }],
    ".pf-l-flex .pf-m-spacer-none:last-child": [{
      "property": "--pf-l-flex--spacer",
      "value": "0",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--none", "0"]
    }],
    ".pf-l-flex .pf-m-spacer-xs": [{
      "property": "--pf-l-flex--spacer",
      "value": "0.25rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--xs", "--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }],
    ".pf-l-flex .pf-m-spacer-xs:last-child": [{
      "property": "--pf-l-flex--spacer",
      "value": "0.25rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--xs", "--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }],
    ".pf-l-flex .pf-m-spacer-sm": [{
      "property": "--pf-l-flex--spacer",
      "value": "0.5rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--sm", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-l-flex .pf-m-spacer-sm:last-child": [{
      "property": "--pf-l-flex--spacer",
      "value": "0.5rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--sm", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-l-flex .pf-m-spacer-md": [{
      "property": "--pf-l-flex--spacer",
      "value": "1rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--md", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-l-flex .pf-m-spacer-md:last-child": [{
      "property": "--pf-l-flex--spacer",
      "value": "1rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--md", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-l-flex .pf-m-spacer-lg": [{
      "property": "--pf-l-flex--spacer",
      "value": "1.5rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--lg", "--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }],
    ".pf-l-flex .pf-m-spacer-lg:last-child": [{
      "property": "--pf-l-flex--spacer",
      "value": "1.5rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--lg", "--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }],
    ".pf-l-flex .pf-m-spacer-xl": [{
      "property": "--pf-l-flex--spacer",
      "value": "2rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--xl", "--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }],
    ".pf-l-flex .pf-m-spacer-xl:last-child": [{
      "property": "--pf-l-flex--spacer",
      "value": "2rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--xl", "--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }],
    ".pf-l-flex .pf-m-spacer-2xl": [{
      "property": "--pf-l-flex--spacer",
      "value": "3rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--2xl", "--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }],
    ".pf-l-flex .pf-m-spacer-2xl:last-child": [{
      "property": "--pf-l-flex--spacer",
      "value": "3rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--2xl", "--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }],
    ".pf-l-flex .pf-m-spacer-3xl": [{
      "property": "--pf-l-flex--spacer",
      "value": "4rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--3xl", "--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }],
    ".pf-l-flex .pf-m-spacer-3xl:last-child": [{
      "property": "--pf-l-flex--spacer",
      "value": "4rem",
      "token": "l_flex_spacer",
      "values": ["--pf-l-flex--spacer--3xl", "--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }]
  };
});