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
    ".pf-c-form-control": [{
      "property": "--pf-global--Color--100",
      "value": "#151515",
      "token": "global_Color_100",
      "values": ["--pf-global--Color--dark-100", "$pf-global--Color--dark-100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-global--Color--200",
      "value": "#737679",
      "token": "global_Color_200",
      "values": ["--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-global--BorderColor--100",
      "value": "#d2d2d2",
      "token": "global_BorderColor_100",
      "values": ["--pf-global--BorderColor--dark-100", "$pf-global--BorderColor--dark-100", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-global--primary-color--100",
      "value": "#06c",
      "token": "global_primary_color_100",
      "values": ["--pf-global--primary-color--dark-100", "$pf-global--primary-color--dark-100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-global--link--Color",
      "value": "#06c",
      "token": "global_link_Color",
      "values": ["--pf-global--link--Color--dark", "$pf-global--link--Color--dark", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-global--link--Color--hover",
      "value": "#004080",
      "token": "global_link_Color_hover",
      "values": ["--pf-global--link--Color--dark--hover", "$pf-global--link--Color--dark--hover", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }, {
      "property": "--pf-global--BackgroundColor--100",
      "value": "#fff",
      "token": "global_BackgroundColor_100",
      "values": ["--pf-global--BackgroundColor--light-100", "$pf-global--BackgroundColor--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-form-control--FontSize",
      "value": "1rem",
      "token": "c_form_control_FontSize",
      "values": ["--pf-global--FontSize--md", "$pf-global--FontSize--md", "pf-font-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-form-control--LineHeight",
      "value": "1.5",
      "token": "c_form_control_LineHeight",
      "values": ["--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-form-control--BorderWidth",
      "value": "1px",
      "token": "c_form_control_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-form-control--BorderTopColor",
      "value": "#ededed",
      "token": "c_form_control_BorderTopColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-form-control--BorderRightColor",
      "value": "#ededed",
      "token": "c_form_control_BorderRightColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-form-control--BorderBottomColor",
      "value": "#8a8d90",
      "token": "c_form_control_BorderBottomColor",
      "values": ["--pf-global--BorderColor--200", "$pf-global--BorderColor--200", "$pf-color-black-500", "#8a8d90"]
    }, {
      "property": "--pf-c-form-control--BorderLeftColor",
      "value": "#ededed",
      "token": "c_form_control_BorderLeftColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-form-control--BorderRadius",
      "value": "0",
      "token": "c_form_control_BorderRadius"
    }, {
      "property": "--pf-c-form-control--BackgroundColor",
      "value": "#fff",
      "token": "c_form_control_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--100", "$pf-global--BackgroundColor--100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-form-control--Height",
      "value": "calc(1rem * 1.5 + 1px * 2 + calc(0.375rem - 1px) + calc(0.375rem - 1px))",
      "token": "c_form_control_Height",
      "values": ["calc(--pf-c-form-control--FontSize * --pf-c-form-control--LineHeight + --pf-c-form-control--BorderWidth * 2 + --pf-c-form-control--PaddingTop + --pf-c-form-control--PaddingBottom)", "calc(--pf-global--FontSize--md * --pf-global--LineHeight--md + --pf-global--BorderWidth--sm * 2 + calc(--pf-global--spacer--form-element - --pf-global--BorderWidth--sm) + calc(--pf-global--spacer--form-element - --pf-global--BorderWidth--sm))", "calc($pf-global--FontSize--md * $pf-global--LineHeight--md + $pf-global--BorderWidth--sm * 2 + calc($pf-global--spacer--form-element - $pf-global--BorderWidth--sm) + calc($pf-global--spacer--form-element - $pf-global--BorderWidth--sm))", "calc(pf-font-prem(16px) * 1.5 + 1px * 2 + calc(pf-size-prem(6px) - 1px) + calc(pf-size-prem(6px) - 1px))", "calc(1rem * 1.5 + 1px * 2 + calc(0.375rem - 1px) + calc(0.375rem - 1px))"]
    }, {
      "property": "--pf-c-form-control--PaddingTop",
      "value": "calc(0.375rem - 1px)",
      "token": "c_form_control_PaddingTop",
      "values": ["calc(--pf-global--spacer--form-element - --pf-global--BorderWidth--sm)", "calc($pf-global--spacer--form-element - $pf-global--BorderWidth--sm)", "calc(pf-size-prem(6px) - 1px)", "calc(0.375rem - 1px)"]
    }, {
      "property": "--pf-c-form-control--PaddingBottom",
      "value": "calc(0.375rem - 1px)",
      "token": "c_form_control_PaddingBottom",
      "values": ["calc(--pf-global--spacer--form-element - --pf-global--BorderWidth--sm)", "calc($pf-global--spacer--form-element - $pf-global--BorderWidth--sm)", "calc(pf-size-prem(6px) - 1px)", "calc(0.375rem - 1px)"]
    }, {
      "property": "--pf-c-form-control--PaddingRight",
      "value": "0.5rem",
      "token": "c_form_control_PaddingRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-form-control--PaddingLeft",
      "value": "0.5rem",
      "token": "c_form_control_PaddingLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-form-control--hover--BorderBottomColor",
      "value": "#06c",
      "token": "c_form_control_hover_BorderBottomColor",
      "values": ["--pf-global--primary-color--100", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-form-control--focus--BorderBottomWidth",
      "value": "2px",
      "token": "c_form_control_focus_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-form-control--focus--PaddingBottom",
      "value": "calc(0.375rem - 2px)",
      "token": "c_form_control_focus_PaddingBottom",
      "values": ["calc(--pf-global--spacer--form-element - --pf-c-form-control--focus--BorderBottomWidth)", "calc($pf-global--spacer--form-element - --pf-global--BorderWidth--md)", "calc($pf-global--spacer--form-element - $pf-global--BorderWidth--md)", "calc(pf-size-prem(6px) - 2px)", "calc(0.375rem - 2px)"]
    }, {
      "property": "--pf-c-form-control--focus--BorderBottomColor",
      "value": "#06c",
      "token": "c_form_control_focus_BorderBottomColor",
      "values": ["--pf-global--primary-color--100", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-form-control--placeholder--Color",
      "value": "#737679",
      "token": "c_form_control_placeholder_Color",
      "values": ["--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-form-control--disabled--Color",
      "value": "#737679",
      "token": "c_form_control_disabled_Color",
      "values": ["--pf-global--disabled-color--100", "$pf-global--disabled-color--100", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-form-control--disabled--BackgroundColor",
      "value": "#ededed",
      "token": "c_form_control_disabled_BackgroundColor",
      "values": ["--pf-global--disabled-color--300", "$pf-global--disabled-color--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-form-control--disabled--BorderColor",
      "value": "transparent",
      "token": "c_form_control_disabled_BorderColor"
    }, {
      "property": "--pf-c-form-control--readonly--focus--BackgroundColor",
      "value": "#ededed",
      "token": "c_form_control_readonly_focus_BackgroundColor",
      "values": ["--pf-global--disabled-color--300", "$pf-global--disabled-color--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-form-control--readonly--focus--PaddingBottom",
      "value": "calc(0.375rem - 1px)",
      "token": "c_form_control_readonly_focus_PaddingBottom",
      "values": ["--pf-c-form-control--PaddingBottom", "calc(--pf-global--spacer--form-element - --pf-global--BorderWidth--sm)", "calc($pf-global--spacer--form-element - $pf-global--BorderWidth--sm)", "calc(pf-size-prem(6px) - 1px)", "calc(0.375rem - 1px)"]
    }, {
      "property": "--pf-c-form-control--readonly--focus--BorderBottomWidth",
      "value": "1px",
      "token": "c_form_control_readonly_focus_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-form-control--readonly--focus--BorderBottomColor",
      "value": "#737679",
      "token": "c_form_control_readonly_focus_BorderBottomColor",
      "values": ["--pf-global--disabled-color--100", "$pf-global--disabled-color--100", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-form-control--invalid--BorderBottomWidth",
      "value": "2px",
      "token": "c_form_control_invalid_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-form-control--invalid--PaddingBottom",
      "value": "calc(0.375rem - 2px)",
      "token": "c_form_control_invalid_PaddingBottom",
      "values": ["calc(--pf-global--spacer--form-element - --pf-c-form-control--invalid--BorderBottomWidth)", "calc($pf-global--spacer--form-element - --pf-global--BorderWidth--md)", "calc($pf-global--spacer--form-element - $pf-global--BorderWidth--md)", "calc(pf-size-prem(6px) - 2px)", "calc(0.375rem - 2px)"]
    }, {
      "property": "--pf-c-form-control--invalid--BorderBottomColor",
      "value": "#c9190b",
      "token": "c_form_control_invalid_BorderBottomColor",
      "values": ["--pf-global--danger-color--100", "$pf-global--danger-color--100", "$pf-color-red-100", "#c9190b"]
    }, {
      "property": "--pf-c-form-control--invalid--PaddingRight",
      "value": "2rem",
      "token": "c_form_control_invalid_PaddingRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-form-control--invalid--BackgroundPosition",
      "value": "calc(100% - 0.5rem) 0.5rem",
      "token": "c_form_control_invalid_BackgroundPosition",
      "values": ["calc(100% - --pf-c-form-control--PaddingLeft) --pf-c-form-control--PaddingLeft", "calc(100% - --pf-global--spacer--sm) --pf-global--spacer--sm", "calc(100% - $pf-global--spacer--sm) $pf-global--spacer--sm", "calc(100% - pf-size-prem(8px)) pf-size-prem(8px)", "calc(100% - 0.5rem) 0.5rem"]
    }, {
      "property": "--pf-c-form-control--invalid--BackgroundSize",
      "value": "1rem 1rem",
      "token": "c_form_control_invalid_BackgroundSize",
      "values": ["--pf-c-form-control--FontSize --pf-c-form-control--FontSize", "--pf-global--FontSize--md --pf-global--FontSize--md", "$pf-global--FontSize--md $pf-global--FontSize--md", "pf-font-prem(16px) pf-font-prem(16px)", "1rem 1rem"]
    }, {
      "property": "--pf-c-form-control--invalid--BackgroundUrl",
      "value": "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\")",
      "token": "c_form_control_invalid_BackgroundUrl"
    }, {
      "property": "--pf-c-form-control--invalid--exclamation--Background",
      "value": "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) 0.5rem / 1rem 1rem no-repeat",
      "token": "c_form_control_invalid_exclamation_Background",
      "values": ["--pf-c-form-control--invalid--BackgroundUrl --pf-c-form-control--invalid--BackgroundPosition / --pf-c-form-control--invalid--BackgroundSize no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - --pf-c-form-control--PaddingLeft) --pf-c-form-control--PaddingLeft / --pf-c-form-control--FontSize --pf-c-form-control--FontSize no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - --pf-global--spacer--sm) --pf-global--spacer--sm / --pf-global--FontSize--md --pf-global--FontSize--md no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - $pf-global--spacer--sm) $pf-global--spacer--sm / $pf-global--FontSize--md $pf-global--FontSize--md no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) pf-size-prem(8px) / pf-font-prem(16px) pf-font-prem(16px) no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) 0.5rem / 1rem 1rem no-repeat"]
    }, {
      "property": "--pf-c-form-control--invalid--Background",
      "value": "#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) 0.5rem / 1rem 1rem no-repeat",
      "token": "c_form_control_invalid_Background",
      "values": ["--pf-c-form-control--BackgroundColor --pf-c-form-control--invalid--exclamation--Background", "--pf-global--BackgroundColor--100 --pf-c-form-control--invalid--BackgroundUrl --pf-c-form-control--invalid--BackgroundPosition / --pf-c-form-control--invalid--BackgroundSize no-repeat", "$pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - --pf-c-form-control--PaddingLeft) --pf-c-form-control--PaddingLeft / --pf-c-form-control--FontSize --pf-c-form-control--FontSize no-repeat", "$pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - --pf-global--spacer--sm) --pf-global--spacer--sm / --pf-global--FontSize--md --pf-global--FontSize--md no-repeat", "$pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - $pf-global--spacer--sm) $pf-global--spacer--sm / $pf-global--FontSize--md $pf-global--FontSize--md no-repeat", "$pf-color-white url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) pf-size-prem(8px) / pf-font-prem(16px) pf-font-prem(16px) no-repeat", "#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) pf-size-prem(8px) / pf-font-prem(16px) pf-font-prem(16px) no-repeat", "#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) 0.5rem / 1rem 1rem no-repeat"]
    }, {
      "property": "--pf-c-form-control--success--BorderBottomWidth",
      "value": "2px",
      "token": "c_form_control_success_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-form-control--success--PaddingBottom",
      "value": "calc(0.375rem - 2px)",
      "token": "c_form_control_success_PaddingBottom",
      "values": ["calc(--pf-global--spacer--form-element - --pf-c-form-control--success--BorderBottomWidth)", "calc($pf-global--spacer--form-element - --pf-global--BorderWidth--md)", "calc($pf-global--spacer--form-element - $pf-global--BorderWidth--md)", "calc(pf-size-prem(6px) - 2px)", "calc(0.375rem - 2px)"]
    }, {
      "property": "--pf-c-form-control--success--BorderBottomColor",
      "value": "#92d400",
      "token": "c_form_control_success_BorderBottomColor",
      "values": ["--pf-global--success-color--100", "$pf-global--success-color--100", "$pf-color-light-green-400", "#92d400"]
    }, {
      "property": "--pf-c-form-control--success--PaddingRight",
      "value": "2rem",
      "token": "c_form_control_success_PaddingRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-form-control--success--BackgroundPosition",
      "value": "calc(100% - 0.5rem) 0.5rem",
      "token": "c_form_control_success_BackgroundPosition",
      "values": ["calc(100% - --pf-c-form-control--PaddingLeft) --pf-c-form-control--PaddingLeft", "calc(100% - --pf-global--spacer--sm) --pf-global--spacer--sm", "calc(100% - $pf-global--spacer--sm) $pf-global--spacer--sm", "calc(100% - pf-size-prem(8px)) pf-size-prem(8px)", "calc(100% - 0.5rem) 0.5rem"]
    }, {
      "property": "--pf-c-form-control--success--BackgroundSize",
      "value": "1rem 1rem",
      "token": "c_form_control_success_BackgroundSize",
      "values": ["--pf-c-form-control--FontSize --pf-c-form-control--FontSize", "--pf-global--FontSize--md --pf-global--FontSize--md", "$pf-global--FontSize--md $pf-global--FontSize--md", "pf-font-prem(16px) pf-font-prem(16px)", "1rem 1rem"]
    }, {
      "property": "--pf-c-form-control--success--BackgroundUrl",
      "value": "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\")",
      "token": "c_form_control_success_BackgroundUrl"
    }, {
      "property": "--pf-c-form-control--success--check--Background",
      "value": "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) 0.5rem / 1rem 1rem no-repeat",
      "token": "c_form_control_success_check_Background",
      "values": ["--pf-c-form-control--success--BackgroundUrl --pf-c-form-control--success--BackgroundPosition / --pf-c-form-control--success--BackgroundSize no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - --pf-c-form-control--PaddingLeft) --pf-c-form-control--PaddingLeft / --pf-c-form-control--FontSize --pf-c-form-control--FontSize no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - --pf-global--spacer--sm) --pf-global--spacer--sm / --pf-global--FontSize--md --pf-global--FontSize--md no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - $pf-global--spacer--sm) $pf-global--spacer--sm / $pf-global--FontSize--md $pf-global--FontSize--md no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) pf-size-prem(8px) / pf-font-prem(16px) pf-font-prem(16px) no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) 0.5rem / 1rem 1rem no-repeat"]
    }, {
      "property": "--pf-c-form-control--success--Background",
      "value": "#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) 0.5rem / 1rem 1rem no-repeat",
      "token": "c_form_control_success_Background",
      "values": ["--pf-c-form-control--BackgroundColor --pf-c-form-control--success--check--Background", "--pf-global--BackgroundColor--100 --pf-c-form-control--success--BackgroundUrl --pf-c-form-control--success--BackgroundPosition / --pf-c-form-control--success--BackgroundSize no-repeat", "$pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - --pf-c-form-control--PaddingLeft) --pf-c-form-control--PaddingLeft / --pf-c-form-control--FontSize --pf-c-form-control--FontSize no-repeat", "$pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - --pf-global--spacer--sm) --pf-global--spacer--sm / --pf-global--FontSize--md --pf-global--FontSize--md no-repeat", "$pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - $pf-global--spacer--sm) $pf-global--spacer--sm / $pf-global--FontSize--md $pf-global--FontSize--md no-repeat", "$pf-color-white url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) pf-size-prem(8px) / pf-font-prem(16px) pf-font-prem(16px) no-repeat", "#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) pf-size-prem(8px) / pf-font-prem(16px) pf-font-prem(16px) no-repeat", "#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) 0.5rem / 1rem 1rem no-repeat"]
    }, {
      "property": "--pf-c-form-control--m-search--PaddingLeft",
      "value": "2rem",
      "token": "c_form_control_m_search_PaddingLeft",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-form-control--m-search--BackgroundPosition",
      "value": "0.5rem",
      "token": "c_form_control_m_search_BackgroundPosition",
      "values": ["--pf-c-form-control--PaddingLeft", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-form-control--m-search--BackgroundSize",
      "value": "1rem 1rem",
      "token": "c_form_control_m_search_BackgroundSize",
      "values": ["--pf-c-form-control--FontSize --pf-c-form-control--FontSize", "--pf-global--FontSize--md --pf-global--FontSize--md", "$pf-global--FontSize--md $pf-global--FontSize--md", "pf-font-prem(16px) pf-font-prem(16px)", "1rem 1rem"]
    }, {
      "property": "--pf-c-form-control--m-search--BackgroundUrl",
      "value": "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23737679' d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'/%3E%3C/svg%3E\")",
      "token": "c_form_control_m_search_BackgroundUrl"
    }, {
      "property": "--pf-c-form-control--m-search--Background",
      "value": "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23737679' d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'/%3E%3C/svg%3E\") 0.5rem / 1rem 1rem no-repeat",
      "token": "c_form_control_m_search_Background",
      "values": ["--pf-c-form-control--m-search--BackgroundUrl --pf-c-form-control--m-search--BackgroundPosition / --pf-c-form-control--m-search--BackgroundSize no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23737679' d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'/%3E%3C/svg%3E\") --pf-c-form-control--PaddingLeft / --pf-c-form-control--FontSize --pf-c-form-control--FontSize no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23737679' d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'/%3E%3C/svg%3E\") --pf-global--spacer--sm / --pf-global--FontSize--md --pf-global--FontSize--md no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23737679' d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'/%3E%3C/svg%3E\") $pf-global--spacer--sm / $pf-global--FontSize--md $pf-global--FontSize--md no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23737679' d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'/%3E%3C/svg%3E\") pf-size-prem(8px) / pf-font-prem(16px) pf-font-prem(16px) no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23737679' d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'/%3E%3C/svg%3E\") 0.5rem / 1rem 1rem no-repeat"]
    }, {
      "property": "--pf-c-form-control__select--PaddingRight",
      "value": "1.5rem",
      "token": "c_form_control__select_PaddingRight",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-form-control__select--BackgroundUrl",
      "value": "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\")",
      "token": "c_form_control__select_BackgroundUrl"
    }, {
      "property": "--pf-c-form-control__select--BackgroundSize",
      "value": "0.875rem",
      "token": "c_form_control__select_BackgroundSize"
    }, {
      "property": "--pf-c-form-control__select--BackgroundPosition",
      "value": "calc(100% - 0.5rem) center",
      "token": "c_form_control__select_BackgroundPosition",
      "values": ["calc(100% - --pf-global--spacer--sm) center", "calc(100% - $pf-global--spacer--sm) center", "calc(100% - pf-size-prem(8px)) center", "calc(100% - 0.5rem) center"]
    }, {
      "property": "--pf-c-form-control__select--arrow--Background",
      "value": "#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) center / 0.875rem no-repeat",
      "token": "c_form_control__select_arrow_Background",
      "values": ["--pf-c-form-control--BackgroundColor --pf-c-form-control__select--BackgroundUrl --pf-c-form-control__select--BackgroundPosition / --pf-c-form-control__select--BackgroundSize no-repeat", "--pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - --pf-global--spacer--sm) center / 0.875rem no-repeat", "$pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - $pf-global--spacer--sm) center / 0.875rem no-repeat", "$pf-color-white url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) center / 0.875rem no-repeat", "#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) center / 0.875rem no-repeat", "#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) center / 0.875rem no-repeat"]
    }, {
      "property": "--pf-c-form-control__select--Background",
      "value": "#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) center / 0.875rem no-repeat",
      "token": "c_form_control__select_Background",
      "values": ["--pf-c-form-control__select--arrow--Background", "--pf-c-form-control--BackgroundColor --pf-c-form-control__select--BackgroundUrl --pf-c-form-control__select--BackgroundPosition / --pf-c-form-control__select--BackgroundSize no-repeat", "--pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - --pf-global--spacer--sm) center / 0.875rem no-repeat", "$pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - $pf-global--spacer--sm) center / 0.875rem no-repeat", "$pf-color-white url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) center / 0.875rem no-repeat", "#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) center / 0.875rem no-repeat", "#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) center / 0.875rem no-repeat"]
    }, {
      "property": "--pf-c-form-control__select--invalid--Background",
      "value": "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) 0.5rem / 1rem 1rem no-repeat, #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) center / 0.875rem no-repeat",
      "token": "c_form_control__select_invalid_Background",
      "values": ["--pf-c-form-control--invalid--exclamation--Background, --pf-c-form-control__select--arrow--Background", "--pf-c-form-control--invalid--BackgroundUrl --pf-c-form-control--invalid--BackgroundPosition / --pf-c-form-control--invalid--BackgroundSize no-repeat, --pf-c-form-control--BackgroundColor --pf-c-form-control__select--BackgroundUrl --pf-c-form-control__select--BackgroundPosition / --pf-c-form-control__select--BackgroundSize no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - --pf-c-form-control--PaddingLeft) --pf-c-form-control--PaddingLeft / --pf-c-form-control--FontSize --pf-c-form-control--FontSize no-repeat, --pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - --pf-global--spacer--sm) center / 0.875rem no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - --pf-global--spacer--sm) --pf-global--spacer--sm / --pf-global--FontSize--md --pf-global--FontSize--md no-repeat, $pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - $pf-global--spacer--sm) center / 0.875rem no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - $pf-global--spacer--sm) $pf-global--spacer--sm / $pf-global--FontSize--md $pf-global--FontSize--md no-repeat, $pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - $pf-global--spacer--sm) center / 0.875rem no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) pf-size-prem(8px) / pf-font-prem(16px) pf-font-prem(16px) no-repeat, $pf-color-white url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) center / 0.875rem no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) pf-size-prem(8px) / pf-font-prem(16px) pf-font-prem(16px) no-repeat, #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) center / 0.875rem no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) 0.5rem / 1rem 1rem no-repeat, #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) center / 0.875rem no-repeat"]
    }, {
      "property": "--pf-c-form-control__select--invalid--PaddingRight",
      "value": "calc(0.5rem + 3rem)",
      "token": "c_form_control__select_invalid_PaddingRight",
      "values": ["calc(--pf-global--spacer--sm + --pf-global--spacer--2xl)", "calc($pf-global--spacer--sm + $pf-global--spacer--2xl)", "calc(pf-size-prem(8px) + pf-size-prem(48px))", "calc(0.5rem + 3rem)"]
    }, {
      "property": "--pf-c-form-control__select--success--Background",
      "value": "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) 0.5rem / 1rem 1rem no-repeat, #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) center / 0.875rem no-repeat",
      "token": "c_form_control__select_success_Background",
      "values": ["--pf-c-form-control--success--check--Background, --pf-c-form-control__select--arrow--Background", "--pf-c-form-control--success--BackgroundUrl --pf-c-form-control--success--BackgroundPosition / --pf-c-form-control--success--BackgroundSize no-repeat, --pf-c-form-control--BackgroundColor --pf-c-form-control__select--BackgroundUrl --pf-c-form-control__select--BackgroundPosition / --pf-c-form-control__select--BackgroundSize no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - --pf-c-form-control--PaddingLeft) --pf-c-form-control--PaddingLeft / --pf-c-form-control--FontSize --pf-c-form-control--FontSize no-repeat, --pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - --pf-global--spacer--sm) center / 0.875rem no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - --pf-global--spacer--sm) --pf-global--spacer--sm / --pf-global--FontSize--md --pf-global--FontSize--md no-repeat, $pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - $pf-global--spacer--sm) center / 0.875rem no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - $pf-global--spacer--sm) $pf-global--spacer--sm / $pf-global--FontSize--md $pf-global--FontSize--md no-repeat, $pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - $pf-global--spacer--sm) center / 0.875rem no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) pf-size-prem(8px) / pf-font-prem(16px) pf-font-prem(16px) no-repeat, $pf-color-white url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) center / 0.875rem no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) pf-size-prem(8px) / pf-font-prem(16px) pf-font-prem(16px) no-repeat, #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) center / 0.875rem no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) 0.5rem / 1rem 1rem no-repeat, #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) center / 0.875rem no-repeat"]
    }, {
      "property": "--pf-c-form-control__select--success--PaddingRight",
      "value": "calc(0.5rem + 3rem)",
      "token": "c_form_control__select_success_PaddingRight",
      "values": ["calc(--pf-global--spacer--sm + --pf-global--spacer--2xl)", "calc($pf-global--spacer--sm + $pf-global--spacer--2xl)", "calc(pf-size-prem(8px) + pf-size-prem(48px))", "calc(0.5rem + 3rem)"]
    }],
    ".pf-c-form-control::placeholder": [{
      "property": "--pf-c-form-control--Color",
      "value": "#737679",
      "token": "c_form_control_Color",
      "values": ["--pf-c-form-control--placeholder--Color", "--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }],
    ".pf-c-form-control[readonly]": [{
      "property": "--pf-c-form-control--BorderBottomColor",
      "value": "#737679",
      "token": "c_form_control_BorderBottomColor",
      "values": ["--pf-c-form-control--readonly--focus--BorderBottomColor", "--pf-global--disabled-color--100", "$pf-global--disabled-color--100", "$pf-color-black-600", "#737679"]
    }],
    ".pf-c-form-control.pf-m-hover": [{
      "property": "--pf-c-form-control--BorderBottomColor",
      "value": "#06c",
      "token": "c_form_control_BorderBottomColor",
      "values": ["--pf-c-form-control--hover--BorderBottomColor", "--pf-global--primary-color--100", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-form-control.pf-m-focus": [{
      "property": "--pf-c-form-control--BorderBottomColor",
      "value": "#06c",
      "token": "c_form_control_BorderBottomColor",
      "values": ["--pf-c-form-control--focus--BorderBottomColor", "--pf-global--primary-color--100", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-form-control:disabled": [{
      "property": "--pf-c-form-control--Color",
      "value": "#737679",
      "token": "c_form_control_Color",
      "values": ["--pf-c-form-control--disabled--Color", "--pf-global--disabled-color--100", "$pf-global--disabled-color--100", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-form-control--BackgroundColor",
      "value": "#ededed",
      "token": "c_form_control_BackgroundColor",
      "values": ["--pf-c-form-control--disabled--BackgroundColor", "--pf-global--disabled-color--300", "$pf-global--disabled-color--300", "$pf-color-black-200", "#ededed"]
    }],
    ".pf-c-form-control[aria-invalid=\"true\"]": [{
      "property": "--pf-c-form-control--PaddingRight",
      "value": "2rem",
      "token": "c_form_control_PaddingRight",
      "values": ["--pf-c-form-control--invalid--PaddingRight", "--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-form-control--BorderBottomColor",
      "value": "#c9190b",
      "token": "c_form_control_BorderBottomColor",
      "values": ["--pf-c-form-control--invalid--BorderBottomColor", "--pf-global--danger-color--100", "$pf-global--danger-color--100", "$pf-color-red-100", "#c9190b"]
    }],
    ".pf-c-form-control.pf-m-success": [{
      "property": "--pf-c-form-control--PaddingRight",
      "value": "2rem",
      "token": "c_form_control_PaddingRight",
      "values": ["--pf-c-form-control--success--PaddingRight", "--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-form-control--BorderBottomColor",
      "value": "#92d400",
      "token": "c_form_control_BorderBottomColor",
      "values": ["--pf-c-form-control--success--BorderBottomColor", "--pf-global--success-color--100", "$pf-global--success-color--100", "$pf-color-light-green-400", "#92d400"]
    }],
    "select.pf-c-form-control": [{
      "property": "--pf-c-form-control--PaddingRight",
      "value": "1.5rem",
      "token": "c_form_control_PaddingRight",
      "values": ["--pf-c-form-control__select--PaddingRight", "--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }],
    "select.pf-c-form-control[aria-invalid=\"true\"]": [{
      "property": "--pf-c-form-control--PaddingRight",
      "value": "calc(0.5rem + 3rem)",
      "token": "c_form_control_PaddingRight",
      "values": ["--pf-c-form-control__select--invalid--PaddingRight", "calc(--pf-global--spacer--sm + --pf-global--spacer--2xl)", "calc($pf-global--spacer--sm + $pf-global--spacer--2xl)", "calc(pf-size-prem(8px) + pf-size-prem(48px))", "calc(0.5rem + 3rem)"]
    }, {
      "property": "--pf-c-form-control--invalid--BackgroundPosition",
      "value": "calc(100% - 0.5rem - 1.5rem)",
      "token": "c_form_control_invalid_BackgroundPosition",
      "values": ["calc(100% - --pf-global--spacer--sm - --pf-global--spacer--lg)", "calc(100% - $pf-global--spacer--sm - $pf-global--spacer--lg)", "calc(100% - pf-size-prem(8px) - pf-size-prem(24px))", "calc(100% - 0.5rem - 1.5rem)"]
    }, {
      "property": "--pf-c-form-control--invalid--Background",
      "value": "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - 0.5rem - 1.5rem) / 1rem 1rem no-repeat, #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) center / 0.875rem no-repeat",
      "token": "c_form_control_invalid_Background",
      "values": ["--pf-c-form-control__select--invalid--Background", "--pf-c-form-control--invalid--exclamation--Background, --pf-c-form-control__select--arrow--Background", "--pf-c-form-control--invalid--BackgroundUrl --pf-c-form-control--invalid--BackgroundPosition / --pf-c-form-control--invalid--BackgroundSize no-repeat, --pf-c-form-control--BackgroundColor --pf-c-form-control__select--BackgroundUrl --pf-c-form-control__select--BackgroundPosition / --pf-c-form-control__select--BackgroundSize no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - --pf-global--spacer--sm - --pf-global--spacer--lg) / --pf-c-form-control--FontSize --pf-c-form-control--FontSize no-repeat, --pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - --pf-global--spacer--sm) center / 0.875rem no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - $pf-global--spacer--sm - $pf-global--spacer--lg) / --pf-global--FontSize--md --pf-global--FontSize--md no-repeat, $pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - $pf-global--spacer--sm) center / 0.875rem no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - $pf-global--spacer--sm - $pf-global--spacer--lg) / $pf-global--FontSize--md $pf-global--FontSize--md no-repeat, $pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - $pf-global--spacer--sm) center / 0.875rem no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px) - pf-size-prem(24px)) / pf-font-prem(16px) pf-font-prem(16px) no-repeat, $pf-color-white url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) center / 0.875rem no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px) - pf-size-prem(24px)) / pf-font-prem(16px) pf-font-prem(16px) no-repeat, #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) center / 0.875rem no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23c9190b' d='M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\") calc(100% - 0.5rem - 1.5rem) / 1rem 1rem no-repeat, #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) center / 0.875rem no-repeat"]
    }],
    "select.pf-c-form-control.pf-m-success": [{
      "property": "--pf-c-form-control--PaddingRight",
      "value": "calc(0.5rem + 3rem)",
      "token": "c_form_control_PaddingRight",
      "values": ["--pf-c-form-control__select--success--PaddingRight", "calc(--pf-global--spacer--sm + --pf-global--spacer--2xl)", "calc($pf-global--spacer--sm + $pf-global--spacer--2xl)", "calc(pf-size-prem(8px) + pf-size-prem(48px))", "calc(0.5rem + 3rem)"]
    }, {
      "property": "--pf-c-form-control--success--BackgroundPosition",
      "value": "calc(100% - 0.5rem - 1.5rem)",
      "token": "c_form_control_success_BackgroundPosition",
      "values": ["calc(100% - --pf-global--spacer--sm - --pf-global--spacer--lg)", "calc(100% - $pf-global--spacer--sm - $pf-global--spacer--lg)", "calc(100% - pf-size-prem(8px) - pf-size-prem(24px))", "calc(100% - 0.5rem - 1.5rem)"]
    }, {
      "property": "--pf-c-form-control--success--Background",
      "value": "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - 0.5rem - 1.5rem) / 1rem 1rem no-repeat, #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) center / 0.875rem no-repeat",
      "token": "c_form_control_success_Background",
      "values": ["--pf-c-form-control__select--success--Background", "--pf-c-form-control--success--check--Background, --pf-c-form-control__select--arrow--Background", "--pf-c-form-control--success--BackgroundUrl --pf-c-form-control--success--BackgroundPosition / --pf-c-form-control--success--BackgroundSize no-repeat, --pf-c-form-control--BackgroundColor --pf-c-form-control__select--BackgroundUrl --pf-c-form-control__select--BackgroundPosition / --pf-c-form-control__select--BackgroundSize no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - --pf-global--spacer--sm - --pf-global--spacer--lg) / --pf-c-form-control--FontSize --pf-c-form-control--FontSize no-repeat, --pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - --pf-global--spacer--sm) center / 0.875rem no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - $pf-global--spacer--sm - $pf-global--spacer--lg) / --pf-global--FontSize--md --pf-global--FontSize--md no-repeat, $pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - $pf-global--spacer--sm) center / 0.875rem no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - $pf-global--spacer--sm - $pf-global--spacer--lg) / $pf-global--FontSize--md $pf-global--FontSize--md no-repeat, $pf-global--BackgroundColor--100 url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - $pf-global--spacer--sm) center / 0.875rem no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px) - pf-size-prem(24px)) / pf-font-prem(16px) pf-font-prem(16px) no-repeat, $pf-color-white url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) center / 0.875rem no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px) - pf-size-prem(24px)) / pf-font-prem(16px) pf-font-prem(16px) no-repeat, #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - pf-size-prem(8px)) center / 0.875rem no-repeat", "url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%2392d400' d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/%3E%3C/svg%3E\") calc(100% - 0.5rem - 1.5rem) / 1rem 1rem no-repeat, #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='%23urrentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E\") calc(100% - 0.5rem) center / 0.875rem no-repeat"]
    }]
  };
});