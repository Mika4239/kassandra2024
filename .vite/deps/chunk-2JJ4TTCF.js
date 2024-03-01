import {
  TypographyNestedContext
} from "./chunk-V5QA3PN2.js";
import {
  RadioGroupContext_default
} from "./chunk-QPUJ6T7X.js";
import {
  FormControlContext_default,
  generateUtilityClass,
  generateUtilityClasses,
  styled_default,
  useSlot,
  useThemeProps
} from "./chunk-OOZK2HM6.js";
import {
  useSwitch
} from "./chunk-UR3IS2IW.js";
import {
  capitalize,
  composeClasses,
  init_utils,
  require_jsx_runtime,
  useId
} from "./chunk-IL5UXWCV.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  init_extends,
  init_objectWithoutPropertiesLoose,
  require_prop_types
} from "./chunk-DLFHJ4BU.js";
import {
  require_react
} from "./chunk-ZSN3XFJS.js";
import {
  __toESM
} from "./chunk-2GTGKKMZ.js";

// node_modules/@mui/joy/Radio/Radio.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/joy/Radio/radioClasses.js
function getRadioUtilityClass(slot) {
  return generateUtilityClass("MuiRadio", slot);
}
var radioClasses = generateUtilityClasses("MuiRadio", ["root", "radio", "icon", "action", "input", "label", "checked", "disabled", "focusVisible", "colorPrimary", "colorDanger", "colorNeutral", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantOutlined", "variantSoft", "variantSolid"]);
var radioClasses_default = radioClasses;

// node_modules/@mui/joy/Radio/Radio.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["checked", "checkedIcon", "defaultChecked", "disabled", "disableIcon", "overlay", "label", "id", "name", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required", "color", "variant", "size", "uncheckedIcon", "value", "component", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    checked,
    disabled,
    disableIcon,
    focusVisible,
    color,
    variant,
    size
  } = ownerState;
  const slots = {
    root: ["root", checked && "checked", disabled && "disabled", focusVisible && "focusVisible", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`],
    radio: ["radio", checked && "checked", disabled && "disabled"],
    // disabled class is necessary for displaying global variant
    icon: ["icon"],
    action: [
      "action",
      checked && "checked",
      disableIcon && disabled && "disabled",
      // add disabled class to action element for displaying global variant
      focusVisible && "focusVisible"
    ],
    input: ["input"],
    label: ["label"]
  };
  return composeClasses(slots, getRadioUtilityClass, {});
};
function areEqualValues(a, b) {
  if (typeof b === "object" && b !== null) {
    return a === b;
  }
  return String(a) === String(b);
}
var RadioRoot = styled_default("span", {
  name: "JoyRadio",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => {
  var _theme$variants$plain, _theme$variants, _theme$variants2;
  return [_extends({
    "--Icon-fontSize": "var(--Radio-size)",
    "--Icon-color": "currentColor"
  }, ownerState.size === "sm" && {
    "--Radio-size": "1rem",
    // --FormHelperText-margin is equal to --Radio-size + --Radio-gap but we can't use calc() with CSS variables because the FormHelperText is a sibling element
    "& ~ *": {
      "--FormHelperText-margin": "0 0 0 1.5rem"
    },
    fontSize: theme.vars.fontSize.sm,
    gap: "var(--Radio-gap, 0.5rem)"
  }, ownerState.size === "md" && {
    "--Radio-size": "1.25rem",
    "& ~ *": {
      "--FormHelperText-margin": "0.25rem 0 0 1.875rem"
    },
    fontSize: theme.vars.fontSize.md,
    gap: "var(--Radio-gap, 0.625rem)"
  }, ownerState.size === "lg" && {
    "--Radio-size": "1.5rem",
    "& ~ *": {
      "--FormHelperText-margin": "0.375rem 0 0 2.25rem"
    },
    fontSize: theme.vars.fontSize.lg,
    gap: "var(--Radio-gap, 0.75rem)"
  }, {
    position: ownerState.overlay ? "initial" : "relative",
    display: "inline-flex",
    boxSizing: "border-box",
    minWidth: 0,
    fontFamily: theme.vars.fontFamily.body,
    lineHeight: "var(--Radio-size)",
    // prevent label from having larger height than the checkbox
    color: theme.vars.palette.text.primary,
    [`&.${radioClasses_default.disabled}`]: {
      color: (_theme$variants$plain = theme.variants.plainDisabled) == null || (_theme$variants$plain = _theme$variants$plain[ownerState.color]) == null ? void 0 : _theme$variants$plain.color
    }
  }, ownerState.disableIcon && {
    color: (_theme$variants = theme.variants[ownerState.variant]) == null || (_theme$variants = _theme$variants[ownerState.color]) == null ? void 0 : _theme$variants.color,
    [`&.${radioClasses_default.disabled}`]: {
      color: (_theme$variants2 = theme.variants[`${ownerState.variant}Disabled`]) == null || (_theme$variants2 = _theme$variants2[ownerState.color]) == null ? void 0 : _theme$variants2.color
    }
  }, ownerState["data-parent"] === "RadioGroup" && ownerState["data-first-child"] === void 0 && {
    marginInlineStart: ownerState.orientation === "horizontal" ? "var(--RadioGroup-gap)" : void 0,
    marginBlockStart: ownerState.orientation === "horizontal" ? void 0 : "var(--RadioGroup-gap)"
  })];
});
var RadioRadio = styled_default("span", {
  name: "JoyRadio",
  slot: "Radio",
  overridesResolver: (props, styles) => styles.radio
})(({
  ownerState,
  theme
}) => {
  var _theme$variants3, _variantStyle$backgro, _theme$variants4, _theme$variants5, _theme$variants6;
  const variantStyle = (_theme$variants3 = theme.variants[`${ownerState.variant}`]) == null ? void 0 : _theme$variants3[ownerState.color];
  return [_extends({
    "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon,
    margin: 0,
    boxSizing: "border-box",
    width: "var(--Radio-size)",
    height: "var(--Radio-size)",
    borderRadius: "var(--Radio-size)",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0
  }, ownerState.disableIcon && {
    display: "contents"
  }, {
    [`&.${radioClasses_default.checked}`]: {
      "--Icon-color": "currentColor"
    }
  }), ...!ownerState.disableIcon ? [_extends({}, variantStyle, {
    backgroundColor: (_variantStyle$backgro = variantStyle == null ? void 0 : variantStyle.backgroundColor) != null ? _variantStyle$backgro : theme.vars.palette.background.surface
  }), {
    "&:hover": {
      "@media (hover: hover)": (_theme$variants4 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants4[ownerState.color]
    }
  }, {
    "&:active": (_theme$variants5 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants5[ownerState.color]
  }, {
    [`&.${radioClasses_default.disabled}`]: (_theme$variants6 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants6[ownerState.color]
  }] : []];
});
var RadioAction = styled_default("span", {
  name: "JoyRadio",
  slot: "Action",
  overridesResolver: (props, styles) => styles.action
})(({
  theme,
  ownerState
}) => {
  var _theme$variants7, _theme$variants8, _theme$variants9, _theme$variants10;
  return [{
    position: "absolute",
    textAlign: "left",
    // prevent text-align inheritance
    borderRadius: `var(--Radio-actionRadius, ${// Automatic radius adjustment when composing with ListItem or Sheet
    ownerState.overlay ? "var(--unstable_actionRadius, inherit)" : "inherit"})`,
    top: "calc(-1 * var(--variant-borderWidth, 0px))",
    // clickable on the border and focus outline does not move when checked/unchecked
    left: "calc(-1 * var(--variant-borderWidth, 0px))",
    bottom: "calc(-1 * var(--variant-borderWidth, 0px))",
    right: "calc(-1 * var(--variant-borderWidth, 0px))",
    zIndex: 1,
    // The action element usually cover the area of nearest positioned parent
    [theme.focus.selector]: theme.focus.default
  }, ...ownerState.disableIcon ? [(_theme$variants7 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants7[ownerState.color], {
    "&:hover": {
      "@media (hover: hover)": (_theme$variants8 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants8[ownerState.color]
    }
  }, {
    "&:active": (_theme$variants9 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants9[ownerState.color]
  }, {
    [`&.${radioClasses_default.disabled}`]: (_theme$variants10 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants10[ownerState.color]
  }] : []];
});
var RadioInput = styled_default("input", {
  name: "JoyRadio",
  slot: "Input",
  overridesResolver: (props, styles) => styles.input
})(() => ({
  margin: 0,
  opacity: 0,
  position: "absolute",
  height: "100%",
  width: "100%",
  cursor: "pointer"
}));
var RadioLabel = styled_default("label", {
  name: "JoyRadio",
  slot: "Label",
  overridesResolver: (props, styles) => styles.label
})(({
  ownerState
}) => _extends({
  flex: 1,
  minWidth: 0
}, ownerState.disableIcon && {
  zIndex: 1,
  // label should stay on top of the action.
  pointerEvents: "none"
  // makes hover ineffect.
}));
var RadioIcon = styled_default("span", {
  name: "JoyRadio",
  slot: "Icon",
  overridesResolver: (props, styles) => styles.icon
})(({
  ownerState
}) => ({
  width: "calc(var(--Radio-size) / 2)",
  height: "calc(var(--Radio-size) / 2)",
  borderRadius: "inherit",
  color: "inherit",
  backgroundColor: "currentColor",
  transform: ownerState.checked ? "scale(1)" : "scale(0)"
}));
var Radio = React.forwardRef(function Radio2(inProps, ref) {
  var _ref, _ref2, _inProps$color, _ref3, _ref4, _inProps$color2, _inProps$color3;
  const props = useThemeProps({
    props: inProps,
    name: "JoyRadio"
  });
  const {
    checked: checkedProp,
    checkedIcon,
    defaultChecked,
    disabled: disabledProp,
    disableIcon: disableIconProp = false,
    overlay: overlayProp = false,
    label,
    id: idOverride,
    name: nameProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly,
    required,
    color: colorProp,
    variant = "outlined",
    size: sizeProp = "md",
    uncheckedIcon,
    value,
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const formControl = React.useContext(FormControlContext_default);
  if (true) {
    const registerEffect = formControl == null ? void 0 : formControl.registerEffect;
    React.useEffect(() => {
      if (registerEffect) {
        return registerEffect();
      }
      return void 0;
    }, [registerEffect]);
  }
  const id = useId(idOverride != null ? idOverride : formControl == null ? void 0 : formControl.htmlFor);
  const radioGroup = React.useContext(RadioGroupContext_default);
  const activeColor = formControl != null && formControl.error ? "danger" : (_ref = (_ref2 = (_inProps$color = inProps.color) != null ? _inProps$color : formControl == null ? void 0 : formControl.color) != null ? _ref2 : colorProp) != null ? _ref : "primary";
  const inactiveColor = formControl != null && formControl.error ? "danger" : (_ref3 = (_ref4 = (_inProps$color2 = inProps.color) != null ? _inProps$color2 : formControl == null ? void 0 : formControl.color) != null ? _ref4 : colorProp) != null ? _ref3 : "neutral";
  const size = inProps.size || (formControl == null ? void 0 : formControl.size) || (radioGroup == null ? void 0 : radioGroup.size) || sizeProp;
  const name = inProps.name || (radioGroup == null ? void 0 : radioGroup.name) || nameProp;
  const disableIcon = inProps.disableIcon || (radioGroup == null ? void 0 : radioGroup.disableIcon) || disableIconProp;
  const overlay = inProps.overlay || (radioGroup == null ? void 0 : radioGroup.overlay) || overlayProp;
  const radioChecked = typeof checkedProp === "undefined" && value != null ? areEqualValues(radioGroup == null ? void 0 : radioGroup.value, value) : checkedProp;
  const useRadioProps = {
    checked: radioChecked,
    defaultChecked,
    disabled: inProps.disabled || (formControl == null ? void 0 : formControl.disabled) || disabledProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible
  };
  const {
    getInputProps,
    checked,
    disabled,
    focusVisible
  } = useSwitch(useRadioProps);
  const color = (_inProps$color3 = inProps.color) != null ? _inProps$color3 : checked ? activeColor : inactiveColor;
  const ownerState = _extends({}, props, {
    checked,
    disabled,
    focusVisible,
    color,
    variant,
    size,
    disableIcon,
    overlay,
    orientation: radioGroup == null ? void 0 : radioGroup.orientation
  });
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: RadioRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotRadio, radioProps] = useSlot("radio", {
    className: classes.radio,
    elementType: RadioRadio,
    externalForwardedProps,
    ownerState
  });
  const [SlotIcon, iconProps] = useSlot("icon", {
    className: classes.icon,
    elementType: RadioIcon,
    externalForwardedProps,
    ownerState
  });
  const [SlotAction, actionProps] = useSlot("action", {
    className: classes.action,
    elementType: RadioAction,
    externalForwardedProps,
    ownerState
  });
  const [SlotInput, inputProps] = useSlot("input", {
    additionalProps: {
      type: "radio",
      id,
      name,
      readOnly,
      required: required != null ? required : formControl == null ? void 0 : formControl.required,
      value: String(value),
      "aria-describedby": formControl == null ? void 0 : formControl["aria-describedby"]
    },
    className: classes.input,
    elementType: RadioInput,
    externalForwardedProps,
    getSlotProps: () => getInputProps({
      onChange: radioGroup == null ? void 0 : radioGroup.onChange
    }),
    ownerState
  });
  const [SlotLabel, labelProps] = useSlot("label", {
    additionalProps: {
      htmlFor: id
    },
    className: classes.label,
    elementType: RadioLabel,
    externalForwardedProps,
    ownerState
  });
  return (0, import_jsx_runtime2.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime2.jsxs)(SlotRadio, _extends({}, radioProps, {
      children: [checked && !disableIcon && checkedIcon, !checked && !disableIcon && uncheckedIcon, !checkedIcon && !uncheckedIcon && !disableIcon && (0, import_jsx_runtime.jsx)(SlotIcon, _extends({}, iconProps)), (0, import_jsx_runtime.jsx)(SlotAction, _extends({}, actionProps, {
        children: (0, import_jsx_runtime.jsx)(SlotInput, _extends({}, inputProps))
      }))]
    })), label && (0, import_jsx_runtime.jsx)(SlotLabel, _extends({}, labelProps, {
      children: (0, import_jsx_runtime.jsx)(TypographyNestedContext.Provider, {
        value: true,
        children: label
      })
    }))]
  }));
});
true ? Radio.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: import_prop_types.default.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: import_prop_types.default.node,
  /**
   * @ignore
   */
  children: import_prop_types.default.node,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["danger", "primary", "success", "warning"]), import_prop_types.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: import_prop_types.default.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: import_prop_types.default.bool,
  /**
   * If `true`, the checked icon is removed and the selected variant is applied on the `action` element instead.
   * @default false
   */
  disableIcon: import_prop_types.default.bool,
  /**
   * @ignore
   */
  id: import_prop_types.default.string,
  /**
   * The label element at the end the radio.
   */
  label: import_prop_types.default.node,
  /**
   * The `name` attribute of the input.
   */
  name: import_prop_types.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types.default.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: import_prop_types.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types.default.func,
  /**
   * @ignore
   */
  onFocusVisible: import_prop_types.default.func,
  /**
   * If `true`, the root element's position is set to initial which allows the action area to fill the nearest positioned parent.
   * This prop is useful for composing Radio with ListItem component.
   * @default false
   */
  overlay: import_prop_types.default.bool,
  /**
   * If `true`, the component is read only.
   */
  readOnly: import_prop_types.default.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: import_prop_types.default.bool,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["sm", "md", "lg"]), import_prop_types.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    action: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    icon: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    input: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    label: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    radio: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object]),
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    action: import_prop_types.default.elementType,
    icon: import_prop_types.default.elementType,
    input: import_prop_types.default.elementType,
    label: import_prop_types.default.elementType,
    radio: import_prop_types.default.elementType,
    root: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * The icon to display when the component is not checked.
   */
  uncheckedIcon: import_prop_types.default.node,
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: import_prop_types.default.any,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types.default.string])
} : void 0;
var Radio_default = Radio;

export {
  getRadioUtilityClass,
  radioClasses_default,
  Radio_default
};
//# sourceMappingURL=chunk-2JJ4TTCF.js.map
