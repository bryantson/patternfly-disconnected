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
    ":root": [{
      "property": "--pf-global--palette--black-100",
      "value": "#fafafa",
      "token": "global_palette_black_100"
    }, {
      "property": "--pf-global--palette--black-150",
      "value": "#f5f5f5",
      "token": "global_palette_black_150"
    }, {
      "property": "--pf-global--palette--black-200",
      "value": "#ededed",
      "token": "global_palette_black_200"
    }, {
      "property": "--pf-global--palette--black-300",
      "value": "#d2d2d2",
      "token": "global_palette_black_300"
    }, {
      "property": "--pf-global--palette--black-400",
      "value": "#b8bbbe",
      "token": "global_palette_black_400"
    }, {
      "property": "--pf-global--palette--black-500",
      "value": "#8a8d90",
      "token": "global_palette_black_500"
    }, {
      "property": "--pf-global--palette--black-600",
      "value": "#737679",
      "token": "global_palette_black_600"
    }, {
      "property": "--pf-global--palette--black-700",
      "value": "#4f5255",
      "token": "global_palette_black_700"
    }, {
      "property": "--pf-global--palette--black-800",
      "value": "#3c3f42",
      "token": "global_palette_black_800"
    }, {
      "property": "--pf-global--palette--black-850",
      "value": "#212427",
      "token": "global_palette_black_850"
    }, {
      "property": "--pf-global--palette--black-900",
      "value": "#151515",
      "token": "global_palette_black_900"
    }, {
      "property": "--pf-global--palette--black-1000",
      "value": "#030303",
      "token": "global_palette_black_1000"
    }, {
      "property": "--pf-global--palette--blue-50",
      "value": "#def3ff",
      "token": "global_palette_blue_50"
    }, {
      "property": "--pf-global--palette--blue-100",
      "value": "#bee1f4",
      "token": "global_palette_blue_100"
    }, {
      "property": "--pf-global--palette--blue-200",
      "value": "#73bcf7",
      "token": "global_palette_blue_200"
    }, {
      "property": "--pf-global--palette--blue-300",
      "value": "#2b9af3",
      "token": "global_palette_blue_300"
    }, {
      "property": "--pf-global--palette--blue-400",
      "value": "#06c",
      "token": "global_palette_blue_400"
    }, {
      "property": "--pf-global--palette--blue-500",
      "value": "#004080",
      "token": "global_palette_blue_500"
    }, {
      "property": "--pf-global--palette--blue-600",
      "value": "#004368",
      "token": "global_palette_blue_600"
    }, {
      "property": "--pf-global--palette--blue-700",
      "value": "#002235",
      "token": "global_palette_blue_700"
    }, {
      "property": "--pf-global--palette--cyan-100",
      "value": "#a2d9d9",
      "token": "global_palette_cyan_100"
    }, {
      "property": "--pf-global--palette--cyan-200",
      "value": "#73c5c5",
      "token": "global_palette_cyan_200"
    }, {
      "property": "--pf-global--palette--cyan-300",
      "value": "#009596",
      "token": "global_palette_cyan_300"
    }, {
      "property": "--pf-global--palette--cyan-400",
      "value": "#005f60",
      "token": "global_palette_cyan_400"
    }, {
      "property": "--pf-global--palette--cyan-500",
      "value": "#003737",
      "token": "global_palette_cyan_500"
    }, {
      "property": "--pf-global--palette--cyan-600",
      "value": "#003d44",
      "token": "global_palette_cyan_600"
    }, {
      "property": "--pf-global--palette--cyan-700",
      "value": "#001f22",
      "token": "global_palette_cyan_700"
    }, {
      "property": "--pf-global--palette--gold-100",
      "value": "#f9e0a2",
      "token": "global_palette_gold_100"
    }, {
      "property": "--pf-global--palette--gold-200",
      "value": "#f6d173",
      "token": "global_palette_gold_200"
    }, {
      "property": "--pf-global--palette--gold-300",
      "value": "#f4c145",
      "token": "global_palette_gold_300"
    }, {
      "property": "--pf-global--palette--gold-400",
      "value": "#f0ab00",
      "token": "global_palette_gold_400"
    }, {
      "property": "--pf-global--palette--gold-500",
      "value": "#c58c00",
      "token": "global_palette_gold_500"
    }, {
      "property": "--pf-global--palette--gold-600",
      "value": "#795600",
      "token": "global_palette_gold_600"
    }, {
      "property": "--pf-global--palette--gold-700",
      "value": "#3d2c00",
      "token": "global_palette_gold_700"
    }, {
      "property": "--pf-global--palette--green-100",
      "value": "#bde5b8",
      "token": "global_palette_green_100"
    }, {
      "property": "--pf-global--palette--green-200",
      "value": "#95d58e",
      "token": "global_palette_green_200"
    }, {
      "property": "--pf-global--palette--green-300",
      "value": "#6ec664",
      "token": "global_palette_green_300"
    }, {
      "property": "--pf-global--palette--green-400",
      "value": "#5ba352",
      "token": "global_palette_green_400"
    }, {
      "property": "--pf-global--palette--green-500",
      "value": "#467f40",
      "token": "global_palette_green_500"
    }, {
      "property": "--pf-global--palette--green-600",
      "value": "#1e4f18",
      "token": "global_palette_green_600"
    }, {
      "property": "--pf-global--palette--green-700",
      "value": "#0f280d",
      "token": "global_palette_green_700"
    }, {
      "property": "--pf-global--palette--light-blue-100",
      "value": "#beedf9",
      "token": "global_palette_light_blue_100"
    }, {
      "property": "--pf-global--palette--light-blue-200",
      "value": "#7cdbf3",
      "token": "global_palette_light_blue_200"
    }, {
      "property": "--pf-global--palette--light-blue-300",
      "value": "#35caed",
      "token": "global_palette_light_blue_300"
    }, {
      "property": "--pf-global--palette--light-blue-400",
      "value": "#00b9e4",
      "token": "global_palette_light_blue_400"
    }, {
      "property": "--pf-global--palette--light-blue-500",
      "value": "#008bad",
      "token": "global_palette_light_blue_500"
    }, {
      "property": "--pf-global--palette--light-blue-600",
      "value": "#005c73",
      "token": "global_palette_light_blue_600"
    }, {
      "property": "--pf-global--palette--light-blue-700",
      "value": "#002d39",
      "token": "global_palette_light_blue_700"
    }, {
      "property": "--pf-global--palette--light-green-100",
      "value": "#e4f5bc",
      "token": "global_palette_light_green_100"
    }, {
      "property": "--pf-global--palette--light-green-200",
      "value": "#c8eb79",
      "token": "global_palette_light_green_200"
    }, {
      "property": "--pf-global--palette--light-green-300",
      "value": "#ace12e",
      "token": "global_palette_light_green_300"
    }, {
      "property": "--pf-global--palette--light-green-400",
      "value": "#92d400",
      "token": "global_palette_light_green_400"
    }, {
      "property": "--pf-global--palette--light-green-500",
      "value": "#6ca100",
      "token": "global_palette_light_green_500"
    }, {
      "property": "--pf-global--palette--light-green-600",
      "value": "#486b00",
      "token": "global_palette_light_green_600"
    }, {
      "property": "--pf-global--palette--light-green-700",
      "value": "#253600",
      "token": "global_palette_light_green_700"
    }, {
      "property": "--pf-global--palette--orange-100",
      "value": "#f4b678",
      "token": "global_palette_orange_100"
    }, {
      "property": "--pf-global--palette--orange-200",
      "value": "#ef9234",
      "token": "global_palette_orange_200"
    }, {
      "property": "--pf-global--palette--orange-300",
      "value": "#ec7a08",
      "token": "global_palette_orange_300"
    }, {
      "property": "--pf-global--palette--orange-400",
      "value": "#c46100",
      "token": "global_palette_orange_400"
    }, {
      "property": "--pf-global--palette--orange-500",
      "value": "#8f4700",
      "token": "global_palette_orange_500"
    }, {
      "property": "--pf-global--palette--orange-600",
      "value": "#773d00",
      "token": "global_palette_orange_600"
    }, {
      "property": "--pf-global--palette--orange-700",
      "value": "#3b1f00",
      "token": "global_palette_orange_700"
    }, {
      "property": "--pf-global--palette--purple-100",
      "value": "#cbc1ff",
      "token": "global_palette_purple_100"
    }, {
      "property": "--pf-global--palette--purple-200",
      "value": "#b2a3ff",
      "token": "global_palette_purple_200"
    }, {
      "property": "--pf-global--palette--purple-300",
      "value": "#a18fff",
      "token": "global_palette_purple_300"
    }, {
      "property": "--pf-global--palette--purple-400",
      "value": "#8476d1",
      "token": "global_palette_purple_400"
    }, {
      "property": "--pf-global--palette--purple-500",
      "value": "#6753ac",
      "token": "global_palette_purple_500"
    }, {
      "property": "--pf-global--palette--purple-600",
      "value": "#40199a",
      "token": "global_palette_purple_600"
    }, {
      "property": "--pf-global--palette--purple-700",
      "value": "#1f0066",
      "token": "global_palette_purple_700"
    }, {
      "property": "--pf-global--palette--red-100",
      "value": "#c9190b",
      "token": "global_palette_red_100"
    }, {
      "property": "--pf-global--palette--red-200",
      "value": "#a30000",
      "token": "global_palette_red_200"
    }, {
      "property": "--pf-global--palette--red-300",
      "value": "#7d1007",
      "token": "global_palette_red_300"
    }, {
      "property": "--pf-global--palette--red-400",
      "value": "#470000",
      "token": "global_palette_red_400"
    }, {
      "property": "--pf-global--palette--red-500",
      "value": "#2c0000",
      "token": "global_palette_red_500"
    }, {
      "property": "--pf-global--palette--white",
      "value": "#fff",
      "token": "global_palette_white"
    }, {
      "property": "--pf-global--BackgroundColor--100",
      "value": "#fff",
      "token": "global_BackgroundColor_100"
    }, {
      "property": "--pf-global--BackgroundColor--150",
      "value": "#f5f5f5",
      "token": "global_BackgroundColor_150"
    }, {
      "property": "--pf-global--BackgroundColor--200",
      "value": "#fafafa",
      "token": "global_BackgroundColor_200"
    }, {
      "property": "--pf-global--BackgroundColor--300",
      "value": "#ededed",
      "token": "global_BackgroundColor_300"
    }, {
      "property": "--pf-global--BackgroundColor--light-100",
      "value": "#fff",
      "token": "global_BackgroundColor_light_100"
    }, {
      "property": "--pf-global--BackgroundColor--light-200",
      "value": "#fafafa",
      "token": "global_BackgroundColor_light_200"
    }, {
      "property": "--pf-global--BackgroundColor--light-300",
      "value": "#ededed",
      "token": "global_BackgroundColor_light_300"
    }, {
      "property": "--pf-global--BackgroundColor--dark-100",
      "value": "#151515",
      "token": "global_BackgroundColor_dark_100"
    }, {
      "property": "--pf-global--BackgroundColor--dark-200",
      "value": "#3c3f42",
      "token": "global_BackgroundColor_dark_200"
    }, {
      "property": "--pf-global--BackgroundColor--dark-300",
      "value": "#212427",
      "token": "global_BackgroundColor_dark_300"
    }, {
      "property": "--pf-global--BackgroundColor--dark-400",
      "value": "#4f5255",
      "token": "global_BackgroundColor_dark_400"
    }, {
      "property": "--pf-global--BackgroundColor--dark-transparent-100",
      "value": "rgba(3, 3, 3, 0.62)",
      "token": "global_BackgroundColor_dark_transparent_100"
    }, {
      "property": "--pf-global--BackgroundColor--dark-transparent-200",
      "value": "rgba(3, 3, 3, 0.32)",
      "token": "global_BackgroundColor_dark_transparent_200"
    }, {
      "property": "--pf-global--Color--100",
      "value": "#151515",
      "token": "global_Color_100"
    }, {
      "property": "--pf-global--Color--200",
      "value": "#737679",
      "token": "global_Color_200"
    }, {
      "property": "--pf-global--Color--300",
      "value": "#3c3f42",
      "token": "global_Color_300"
    }, {
      "property": "--pf-global--Color--400",
      "value": "#8a8d90",
      "token": "global_Color_400"
    }, {
      "property": "--pf-global--Color--light-100",
      "value": "#fff",
      "token": "global_Color_light_100"
    }, {
      "property": "--pf-global--Color--light-200",
      "value": "#ededed",
      "token": "global_Color_light_200"
    }, {
      "property": "--pf-global--Color--light-300",
      "value": "#d2d2d2",
      "token": "global_Color_light_300"
    }, {
      "property": "--pf-global--Color--dark-100",
      "value": "#151515",
      "token": "global_Color_dark_100"
    }, {
      "property": "--pf-global--Color--dark-200",
      "value": "#737679",
      "token": "global_Color_dark_200"
    }, {
      "property": "--pf-global--active-color--100",
      "value": "#06c",
      "token": "global_active_color_100"
    }, {
      "property": "--pf-global--active-color--200",
      "value": "#bee1f4",
      "token": "global_active_color_200"
    }, {
      "property": "--pf-global--active-color--300",
      "value": "#73bcf7",
      "token": "global_active_color_300"
    }, {
      "property": "--pf-global--active-color--400",
      "value": "#2b9af3",
      "token": "global_active_color_400"
    }, {
      "property": "--pf-global--disabled-color--100",
      "value": "#737679",
      "token": "global_disabled_color_100"
    }, {
      "property": "--pf-global--disabled-color--200",
      "value": "#d2d2d2",
      "token": "global_disabled_color_200"
    }, {
      "property": "--pf-global--disabled-color--300",
      "value": "#ededed",
      "token": "global_disabled_color_300"
    }, {
      "property": "--pf-global--primary-color--100",
      "value": "#06c",
      "token": "global_primary_color_100"
    }, {
      "property": "--pf-global--primary-color--200",
      "value": "#004080",
      "token": "global_primary_color_200"
    }, {
      "property": "--pf-global--primary-color--light-100",
      "value": "#73bcf7",
      "token": "global_primary_color_light_100"
    }, {
      "property": "--pf-global--primary-color--dark-100",
      "value": "#06c",
      "token": "global_primary_color_dark_100"
    }, {
      "property": "--pf-global--secondary-color--100",
      "value": "#737679",
      "token": "global_secondary_color_100"
    }, {
      "property": "--pf-global--default-color--100",
      "value": "#73c5c5",
      "token": "global_default_color_100"
    }, {
      "property": "--pf-global--default-color--200",
      "value": "#009596",
      "token": "global_default_color_200"
    }, {
      "property": "--pf-global--default-color--300",
      "value": "#003737",
      "token": "global_default_color_300"
    }, {
      "property": "--pf-global--success-color--100",
      "value": "#92d400",
      "token": "global_success_color_100"
    }, {
      "property": "--pf-global--success-color--200",
      "value": "#486b00",
      "token": "global_success_color_200"
    }, {
      "property": "--pf-global--info-color--100",
      "value": "#73bcf7",
      "token": "global_info_color_100"
    }, {
      "property": "--pf-global--info-color--200",
      "value": "#004368",
      "token": "global_info_color_200"
    }, {
      "property": "--pf-global--warning-color--100",
      "value": "#f0ab00",
      "token": "global_warning_color_100"
    }, {
      "property": "--pf-global--warning-color--200",
      "value": "#795600",
      "token": "global_warning_color_200"
    }, {
      "property": "--pf-global--danger-color--100",
      "value": "#c9190b",
      "token": "global_danger_color_100"
    }, {
      "property": "--pf-global--danger-color--200",
      "value": "#a30000",
      "token": "global_danger_color_200"
    }, {
      "property": "--pf-global--danger-color--300",
      "value": "#470000",
      "token": "global_danger_color_300"
    }, {
      "property": "--pf-global--BoxShadow--sm",
      "value": "0 0.0625rem 0.125rem 0 rgba(3, 3, 3, 0.2)",
      "token": "global_BoxShadow_sm"
    }, {
      "property": "--pf-global--BoxShadow--sm-right",
      "value": "0.25rem 0 0.625rem -0.25rem rgba(3, 3, 3, 0.12)",
      "token": "global_BoxShadow_sm_right"
    }, {
      "property": "--pf-global--BoxShadow--sm-left",
      "value": "-0.25rem 0 0.625rem -0.25rem rgba(3, 3, 3, 0.12)",
      "token": "global_BoxShadow_sm_left"
    }, {
      "property": "--pf-global--BoxShadow--sm-bottom",
      "value": "0 0.25rem 0.625rem -0.25rem rgba(3, 3, 3, 0.12)",
      "token": "global_BoxShadow_sm_bottom"
    }, {
      "property": "--pf-global--BoxShadow--sm-top",
      "value": "0 -0.25rem 0.625rem -0.25rem rgba(3, 3, 3, 0.12)",
      "token": "global_BoxShadow_sm_top"
    }, {
      "property": "--pf-global--BoxShadow--md",
      "value": "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)",
      "token": "global_BoxShadow_md"
    }, {
      "property": "--pf-global--BoxShadow--md-right",
      "value": "0.3125rem 0 0.625rem -0.25rem rgba(3, 3, 3, 0.25)",
      "token": "global_BoxShadow_md_right"
    }, {
      "property": "--pf-global--BoxShadow--md-left",
      "value": "-0.3125rem 0 0.625rem -0.25rem rgba(3, 3, 3, 0.25)",
      "token": "global_BoxShadow_md_left"
    }, {
      "property": "--pf-global--BoxShadow--md-bottom",
      "value": "0 0.3125rem 0.625rem -0.25rem rgba(3, 3, 3, 0.25)",
      "token": "global_BoxShadow_md_bottom"
    }, {
      "property": "--pf-global--BoxShadow--md-top",
      "value": "0 -0.3125rem 0.625rem -0.25rem rgba(3, 3, 3, 0.25)",
      "token": "global_BoxShadow_md_top"
    }, {
      "property": "--pf-global--BoxShadow--lg",
      "value": "0 0.1875rem 0.4375rem 0.1875rem rgba(3, 3, 3, 0.13), 0 0.6875rem 1.5rem 1rem rgba(3, 3, 3, 0.12)",
      "token": "global_BoxShadow_lg"
    }, {
      "property": "--pf-global--BoxShadow--lg-right",
      "value": "0.75rem 0 0.625rem -0.25rem rgba(3, 3, 3, 0.07)",
      "token": "global_BoxShadow_lg_right"
    }, {
      "property": "--pf-global--BoxShadow--lg-left",
      "value": "-0.75rem 0 0.625rem -0.25rem rgba(3, 3, 3, 0.07)",
      "token": "global_BoxShadow_lg_left"
    }, {
      "property": "--pf-global--BoxShadow--lg-bottom",
      "value": "0 0.75rem 0.625rem -0.25rem rgba(3, 3, 3, 0.07)",
      "token": "global_BoxShadow_lg_bottom"
    }, {
      "property": "--pf-global--BoxShadow--lg-top",
      "value": "0 -0.75rem 0.625rem -0.25rem rgba(3, 3, 3, 0.07)",
      "token": "global_BoxShadow_lg_top"
    }, {
      "property": "--pf-global--BoxShadow--inset",
      "value": "inset 0 0 0.625rem 0 rgba(3, 3, 3, 0.25)",
      "token": "global_BoxShadow_inset"
    }, {
      "property": "--pf-global--font-path",
      "value": "./assets/fonts",
      "token": "global_font_path"
    }, {
      "property": "--pf-global--fonticon-path",
      "value": "./assets/pficon",
      "token": "global_fonticon_path"
    }, {
      "property": "--pf-global--spacer--xs",
      "value": "0.25rem",
      "token": "global_spacer_xs"
    }, {
      "property": "--pf-global--spacer--sm",
      "value": "0.5rem",
      "token": "global_spacer_sm"
    }, {
      "property": "--pf-global--spacer--md",
      "value": "1rem",
      "token": "global_spacer_md"
    }, {
      "property": "--pf-global--spacer--lg",
      "value": "1.5rem",
      "token": "global_spacer_lg"
    }, {
      "property": "--pf-global--spacer--xl",
      "value": "2rem",
      "token": "global_spacer_xl"
    }, {
      "property": "--pf-global--spacer--2xl",
      "value": "3rem",
      "token": "global_spacer_2xl"
    }, {
      "property": "--pf-global--spacer--3xl",
      "value": "4rem",
      "token": "global_spacer_3xl"
    }, {
      "property": "--pf-global--spacer--form-element",
      "value": "0.375rem",
      "token": "global_spacer_form_element"
    }, {
      "property": "--pf-global--gutter",
      "value": "1.5rem",
      "token": "global_gutter"
    }, {
      "property": "--pf-global--gutter--md",
      "value": "1rem",
      "token": "global_gutter_md"
    }, {
      "property": "--pf-global--golden-ratio",
      "value": "1.681",
      "token": "global_golden_ratio"
    }, {
      "property": "--pf-global--ZIndex--xs",
      "value": "100",
      "token": "global_ZIndex_xs"
    }, {
      "property": "--pf-global--ZIndex--sm",
      "value": "200",
      "token": "global_ZIndex_sm"
    }, {
      "property": "--pf-global--ZIndex--md",
      "value": "300",
      "token": "global_ZIndex_md"
    }, {
      "property": "--pf-global--ZIndex--lg",
      "value": "400",
      "token": "global_ZIndex_lg"
    }, {
      "property": "--pf-global--ZIndex--xl",
      "value": "500",
      "token": "global_ZIndex_xl"
    }, {
      "property": "--pf-global--ZIndex--2xl",
      "value": "600",
      "token": "global_ZIndex_2xl"
    }, {
      "property": "--pf-global--breakpoint--xs",
      "value": "0",
      "token": "global_breakpoint_xs"
    }, {
      "property": "--pf-global--breakpoint--sm",
      "value": "576px",
      "token": "global_breakpoint_sm"
    }, {
      "property": "--pf-global--breakpoint--md",
      "value": "768px",
      "token": "global_breakpoint_md"
    }, {
      "property": "--pf-global--breakpoint--lg",
      "value": "992px",
      "token": "global_breakpoint_lg"
    }, {
      "property": "--pf-global--breakpoint--xl",
      "value": "1200px",
      "token": "global_breakpoint_xl"
    }, {
      "property": "--pf-global--breakpoint--2xl",
      "value": "1450px",
      "token": "global_breakpoint_2xl"
    }, {
      "property": "--pf-global--link--Color",
      "value": "#06c",
      "token": "global_link_Color"
    }, {
      "property": "--pf-global--link--Color--hover",
      "value": "#004080",
      "token": "global_link_Color_hover"
    }, {
      "property": "--pf-global--link--Color--light",
      "value": "#73bcf7",
      "token": "global_link_Color_light"
    }, {
      "property": "--pf-global--link--Color--light--hover",
      "value": "#2b9af3",
      "token": "global_link_Color_light_hover"
    }, {
      "property": "--pf-global--link--Color--dark",
      "value": "#06c",
      "token": "global_link_Color_dark"
    }, {
      "property": "--pf-global--link--Color--dark--hover",
      "value": "#004080",
      "token": "global_link_Color_dark_hover"
    }, {
      "property": "--pf-global--link--FontWeight",
      "value": "500",
      "token": "global_link_FontWeight"
    }, {
      "property": "--pf-global--link--TextDecoration",
      "value": "none",
      "token": "global_link_TextDecoration"
    }, {
      "property": "--pf-global--link--TextDecoration--hover",
      "value": "underline",
      "token": "global_link_TextDecoration_hover"
    }, {
      "property": "--pf-global--BorderWidth--sm",
      "value": "1px",
      "token": "global_BorderWidth_sm"
    }, {
      "property": "--pf-global--BorderWidth--md",
      "value": "2px",
      "token": "global_BorderWidth_md"
    }, {
      "property": "--pf-global--BorderWidth--lg",
      "value": "3px",
      "token": "global_BorderWidth_lg"
    }, {
      "property": "--pf-global--BorderColor--100",
      "value": "#d2d2d2",
      "token": "global_BorderColor_100"
    }, {
      "property": "--pf-global--BorderColor--200",
      "value": "#8a8d90",
      "token": "global_BorderColor_200"
    }, {
      "property": "--pf-global--BorderColor--300",
      "value": "#ededed",
      "token": "global_BorderColor_300"
    }, {
      "property": "--pf-global--BorderColor--dark-100",
      "value": "#d2d2d2",
      "token": "global_BorderColor_dark_100"
    }, {
      "property": "--pf-global--BorderColor--light-100",
      "value": "#b8bbbe",
      "token": "global_BorderColor_light_100"
    }, {
      "property": "--pf-global--BorderRadius--sm",
      "value": "3px",
      "token": "global_BorderRadius_sm"
    }, {
      "property": "--pf-global--BorderRadius--lg",
      "value": "30em",
      "token": "global_BorderRadius_lg"
    }, {
      "property": "--pf-global--icon--Color--light",
      "value": "#737679",
      "token": "global_icon_Color_light"
    }, {
      "property": "--pf-global--icon--Color--dark",
      "value": "#151515",
      "token": "global_icon_Color_dark"
    }, {
      "property": "--pf-global--icon--FontSize--sm",
      "value": "0.625rem",
      "token": "global_icon_FontSize_sm"
    }, {
      "property": "--pf-global--icon--FontSize--md",
      "value": "1.125rem",
      "token": "global_icon_FontSize_md"
    }, {
      "property": "--pf-global--icon--FontSize--lg",
      "value": "1.5rem",
      "token": "global_icon_FontSize_lg"
    }, {
      "property": "--pf-global--icon--FontSize--xl",
      "value": "3.375rem",
      "token": "global_icon_FontSize_xl"
    }, {
      "property": "--pf-global--FontFamily--sans-serif",
      "value": "overpass, overpass, open sans, -apple-system, blinkmacsystemfont, Segoe UI, roboto, Helvetica Neue, arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
      "token": "global_FontFamily_sans_serif"
    }, {
      "property": "--pf-global--FontFamily--heading--sans-serif",
      "value": "overpass, overpass, open sans, -apple-system, blinkmacsystemfont, Segoe UI, roboto, Helvetica Neue, arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
      "token": "global_FontFamily_heading_sans_serif"
    }, {
      "property": "--pf-global--FontFamily--monospace",
      "value": "overpass-mono, overpass-mono, SFMono-Regular, menlo, monaco, consolas, Liberation Mono, Courier New, monospace",
      "token": "global_FontFamily_monospace"
    }, {
      "property": "--pf-global--FontFamily--redhatfont--sans-serif",
      "value": "RedHatText, Overpass, overpass, helvetica, arial, sans-serif",
      "token": "global_FontFamily_redhatfont_sans_serif"
    }, {
      "property": "--pf-global--FontFamily--redhatfont--heading--sans-serif",
      "value": "RedHatDisplay, Overpass, overpass, helvetica, arial, sans-serif",
      "token": "global_FontFamily_redhatfont_heading_sans_serif"
    }, {
      "property": "--pf-global--FontFamily--redhatfont--monospace",
      "value": "Liberation Mono, consolas, SFMono-Regular, menlo, monaco, Courier New, monospace",
      "token": "global_FontFamily_redhatfont_monospace"
    }, {
      "property": "--pf-global--FontSize--4xl",
      "value": "2.25rem",
      "token": "global_FontSize_4xl"
    }, {
      "property": "--pf-global--FontSize--3xl",
      "value": "1.75rem",
      "token": "global_FontSize_3xl"
    }, {
      "property": "--pf-global--FontSize--2xl",
      "value": "1.5rem",
      "token": "global_FontSize_2xl"
    }, {
      "property": "--pf-global--FontSize--xl",
      "value": "1.25rem",
      "token": "global_FontSize_xl"
    }, {
      "property": "--pf-global--FontSize--lg",
      "value": "1.125rem",
      "token": "global_FontSize_lg"
    }, {
      "property": "--pf-global--FontSize--md",
      "value": "1rem",
      "token": "global_FontSize_md"
    }, {
      "property": "--pf-global--FontSize--sm",
      "value": "0.875rem",
      "token": "global_FontSize_sm"
    }, {
      "property": "--pf-global--FontSize--xs",
      "value": "0.75rem",
      "token": "global_FontSize_xs"
    }, {
      "property": "--pf-global--FontWeight--light",
      "value": "300",
      "token": "global_FontWeight_light"
    }, {
      "property": "--pf-global--FontWeight--normal",
      "value": "400",
      "token": "global_FontWeight_normal"
    }, {
      "property": "--pf-global--FontWeight--semi-bold",
      "value": "500",
      "token": "global_FontWeight_semi_bold"
    }, {
      "property": "--pf-global--FontWeight--bold",
      "value": "600",
      "token": "global_FontWeight_bold"
    }, {
      "property": "--pf-global--FontWeight--redhatfont--bold",
      "value": "700",
      "token": "global_FontWeight_redhatfont_bold"
    }, {
      "property": "--pf-global--LineHeight--sm",
      "value": "1.3",
      "token": "global_LineHeight_sm"
    }, {
      "property": "--pf-global--LineHeight--md",
      "value": "1.5",
      "token": "global_LineHeight_md"
    }, {
      "property": "--pf-global--ListStyle",
      "value": "disc outside",
      "token": "global_ListStyle"
    }, {
      "property": "--pf-global--Transition",
      "value": "all 250ms cubic-bezier(0.42, 0, 0.58, 1)",
      "token": "global_Transition"
    }, {
      "property": "--pf-global--TimingFunction",
      "value": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      "token": "global_TimingFunction"
    }, {
      "property": "--pf-global--TransitionDuration",
      "value": "250ms",
      "token": "global_TransitionDuration"
    }, {
      "property": "--pf-global--arrow--width",
      "value": "0.9375rem",
      "token": "global_arrow_width"
    }, {
      "property": "--pf-global--arrow--width-lg",
      "value": "1.5625rem",
      "token": "global_arrow_width_lg"
    }, {
      "property": "--pf-global--target-size--MinWidth",
      "value": "44px",
      "token": "global_target_size_MinWidth"
    }, {
      "property": "--pf-global--target-size--MinHeight",
      "value": "44px",
      "token": "global_target_size_MinHeight"
    }],
    ".pf-m-redhat-font": [{
      "property": "--pf-global--FontFamily--sans-serif",
      "value": "\"RedHatText\", \"Overpass\", overpass, helvetica, arial, sans-serif",
      "token": "global_FontFamily_sans_serif",
      "values": ["--pf-global--FontFamily--redhatfont--sans-serif", "$pf-global--FontFamily--redhatfont--sans-serif", "\"RedHatText\", \"Overpass\", overpass, helvetica, arial, sans-serif"]
    }, {
      "property": "--pf-global--FontFamily--heading--sans-serif",
      "value": "\"RedHatDisplay\", \"Overpass\", overpass, helvetica, arial, sans-serif",
      "token": "global_FontFamily_heading_sans_serif",
      "values": ["--pf-global--FontFamily--redhatfont--heading--sans-serif", "$pf-global--FontFamily--redhatfont--heading--sans-serif", "\"RedHatDisplay\", \"Overpass\", overpass, helvetica, arial, sans-serif"]
    }, {
      "property": "--pf-global--FontFamily--monospace",
      "value": "\"Liberation Mono\", consolas, \"SFMono-Regular\", menlo, monaco, \"Courier New\", monospace",
      "token": "global_FontFamily_monospace",
      "values": ["--pf-global--FontFamily--redhatfont--monospace", "$pf-global--FontFamily--redhatfont--monospace", "\"Liberation Mono\", consolas, \"SFMono-Regular\", menlo, monaco, \"Courier New\", monospace"]
    }, {
      "property": "--pf-global--FontWeight--semi-bold",
      "value": "700",
      "token": "global_FontWeight_semi_bold",
      "values": ["--pf-global--FontWeight--redhatfont--bold", "$pf-global--FontWeight--redhatfont--bold", "700"]
    }, {
      "property": "--pf-global--FontWeight--bold",
      "value": "700",
      "token": "global_FontWeight_bold",
      "values": ["--pf-global--FontWeight--redhatfont--bold", "$pf-global--FontWeight--redhatfont--bold", "700"]
    }, {
      "property": "--pf-global--link--FontWeight",
      "value": "400",
      "token": "global_link_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }]
  };
});