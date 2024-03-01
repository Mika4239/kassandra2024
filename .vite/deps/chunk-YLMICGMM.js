import {
  TypographyNestedContext
} from "./chunk-V5QA3PN2.js";
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
  clsx_default,
  init_clsx,
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

// node_modules/@mui/joy/Checkbox/Checkbox.js
init_objectWithoutPropertiesLoose();
init_extends();
var React5 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
init_utils();

// node_modules/@mui/joy/Checkbox/checkboxClasses.js
function getCheckboxUtilityClass(slot) {
  return generateUtilityClass("MuiCheckbox", slot);
}
var checkboxClasses = generateUtilityClasses("MuiCheckbox", ["root", "checkbox", "action", "input", "label", "checked", "disabled", "focusVisible", "indeterminate", "colorPrimary", "colorDanger", "colorNeutral", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantOutlined", "variantSoft", "variantSolid"]);
var checkboxClasses_default = checkboxClasses;

// node_modules/@mui/joy/internal/svg-icons/Check.js
var React3 = __toESM(require_react());

// node_modules/@mui/joy/utils/createSvgIcon.js
init_extends();
var React2 = __toESM(require_react());

// node_modules/@mui/joy/SvgIcon/SvgIcon.js
init_objectWithoutPropertiesLoose();
init_extends();
init_utils();
init_clsx();
var import_prop_types = __toESM(require_prop_types());
var React = __toESM(require_react());

// node_modules/@mui/joy/SvgIcon/svgIconClasses.js
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
var svgIconClasses = generateUtilityClasses("MuiSvgIcon", ["root", "colorInherit", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "fontSizeInherit", "fontSizeXs", "fontSizeSm", "fontSizeMd", "fontSizeLg", "fontSizeXl", "fontSizeXl2", "fontSizeXl3", "fontSizeXl4", "sizeSm", "sizeMd", "sizeLg"]);
var svgIconClasses_default = svgIconClasses;

// node_modules/@mui/joy/SvgIcon/SvgIcon.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox", "size", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    color,
    size,
    fontSize
  } = ownerState;
  const slots = {
    root: ["root", color && color !== "inherit" && `color${capitalize(color)}`, size && `size${capitalize(size)}`, fontSize && `fontSize${capitalize(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, {});
};
var sizeMap = {
  sm: "xl",
  md: "xl2",
  lg: "xl3"
};
var SvgIconRoot = styled_default("svg", {
  name: "JoySvgIcon",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme,
  ownerState
}) => {
  var _theme$vars$palette;
  return _extends({}, ownerState.instanceSize && {
    "--Icon-fontSize": theme.vars.fontSize[sizeMap[ownerState.instanceSize]]
  }, ownerState.instanceFontSize && ownerState.instanceFontSize !== "inherit" && {
    "--Icon-fontSize": theme.vars.fontSize[ownerState.instanceFontSize]
  }, {
    userSelect: "none",
    margin: "var(--Icon-margin)",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: ownerState.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    fontSize: `var(--Icon-fontSize, ${theme.vars.fontSize[sizeMap[ownerState.size]] || "unset"})`
  }, ownerState.fontSize && ownerState.fontSize !== "inherit" && {
    fontSize: `var(--Icon-fontSize, ${theme.fontSize[ownerState.fontSize]})`
  }, !ownerState.htmlColor && _extends({
    color: `var(--Icon-color, ${theme.vars.palette.text.icon})`
  }, ownerState.color === "inherit" && {
    color: "inherit"
  }, ownerState.color !== "inherit" && theme.vars.palette[ownerState.color] && {
    color: `rgba(${(_theme$vars$palette = theme.vars.palette[ownerState.color]) == null ? void 0 : _theme$vars$palette.mainChannel} / 1)`
  }));
});
var SvgIcon = React.forwardRef(function SvgIcon2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoySvgIcon"
  });
  const {
    children,
    className,
    color,
    component = "svg",
    fontSize,
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = "0 0 24 24",
    size = "md",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const hasSvgAsChild = React.isValidElement(children) && children.type === "svg";
  const ownerState = _extends({}, props, {
    color,
    component,
    size,
    instanceSize: inProps.size,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  });
  const classes = useUtilityClasses(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: SvgIconRoot,
    externalForwardedProps,
    ownerState,
    additionalProps: _extends({
      color: htmlColor,
      focusable: false
    }, titleAccess && {
      role: "img"
    }, !titleAccess && {
      "aria-hidden": true
    }, !inheritViewBox && {
      viewBox
    }, hasSvgAsChild && children.props)
  });
  return (0, import_jsx_runtime2.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? (0, import_jsx_runtime.jsx)("title", {
      children: titleAccess
    }) : null]
  }));
});
true ? SvgIcon.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: import_prop_types.default.node,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   */
  color: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["danger", "inherit", "neutral", "primary", "success", "warning"]), import_prop_types.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * The theme's fontSize applied to the icon that will override the `size` prop.
   * Use this prop when you want to use a specific font-size from the theme.
   */
  fontSize: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["inherit", "lg", "md", "sm", "xl", "xl2", "xl3", "xl4", "xs"]), import_prop_types.default.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: import_prop_types.default.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: import_prop_types.default.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: import_prop_types.default.string,
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
    root: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    root: import_prop_types.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: import_prop_types.default.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: import_prop_types.default.string
} : void 0;
var SvgIcon_default = SvgIcon;

// node_modules/@mui/joy/utils/createSvgIcon.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return (0, import_jsx_runtime3.jsx)(SvgIcon_default, _extends({
      "data-testid": `${displayName}Icon`,
      ref
    }, props, {
      children: path
    }));
  }
  if (true) {
    Component.displayName = `${displayName}Icon`;
  }
  Component.muiName = SvgIcon_default.muiName;
  return React2.memo(React2.forwardRef(Component));
}

// node_modules/@mui/joy/internal/svg-icons/Check.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var Check_default = createSvgIcon((0, import_jsx_runtime4.jsx)("path", {
  d: "M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L9 16.17z"
}), "Check");

// node_modules/@mui/joy/internal/svg-icons/HorizontalRule.js
var React4 = __toESM(require_react());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var HorizontalRule_default = createSvgIcon((0, import_jsx_runtime5.jsx)("path", {
  d: "M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1z"
}), "HorizontalRule");

// node_modules/@mui/joy/Checkbox/Checkbox.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var _excluded2 = ["checked", "uncheckedIcon", "checkedIcon", "label", "defaultChecked", "disabled", "disableIcon", "overlay", "id", "indeterminate", "indeterminateIcon", "name", "onBlur", "onChange", "onFocus", "onFocusVisible", "readOnly", "required", "value", "color", "variant", "size", "component", "slots", "slotProps"];
var useUtilityClasses2 = (ownerState) => {
  const {
    checked,
    disabled,
    disableIcon,
    focusVisible,
    color,
    variant,
    size,
    indeterminate
  } = ownerState;
  const slots = {
    root: ["root", checked && "checked", disabled && "disabled", focusVisible && "focusVisible", variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`],
    checkbox: [
      "checkbox",
      checked && "checked",
      indeterminate && "indeterminate",
      disabled && "disabled"
      // disabled class is necessary for displaying global variant
    ],
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
  return composeClasses(slots, getCheckboxUtilityClass, {});
};
var CheckboxRoot = styled_default("span", {
  name: "JoyCheckbox",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => {
  var _theme$variants$plain, _theme$variants, _theme$variants2;
  return _extends({
    "--Icon-fontSize": "var(--Checkbox-size)"
  }, ownerState.size === "sm" && {
    "--Checkbox-size": "1rem",
    "& ~ *": {
      "--FormHelperText-margin": "0 0 0 1.5rem"
    },
    fontSize: theme.vars.fontSize.sm,
    gap: "var(--Checkbox-gap, 0.5rem)"
  }, ownerState.size === "md" && {
    "--Checkbox-size": "1.25rem",
    "& ~ *": {
      "--FormHelperText-margin": "0.25rem 0 0 1.875rem"
    },
    fontSize: theme.vars.fontSize.md,
    gap: "var(--Checkbox-gap, 0.625rem)"
  }, ownerState.size === "lg" && {
    "--Checkbox-size": "1.5rem",
    "& ~ *": {
      "--FormHelperText-margin": "0.375rem 0 0 2.25rem"
    },
    fontSize: theme.vars.fontSize.lg,
    gap: "var(--Checkbox-gap, 0.75rem)"
  }, {
    position: ownerState.overlay ? "initial" : "relative",
    display: "inline-flex",
    fontFamily: theme.vars.fontFamily.body,
    lineHeight: "var(--Checkbox-size)",
    color: theme.vars.palette.text.primary,
    [`&.${checkboxClasses_default.disabled}`]: {
      color: (_theme$variants$plain = theme.variants.plainDisabled) == null || (_theme$variants$plain = _theme$variants$plain[ownerState.color]) == null ? void 0 : _theme$variants$plain.color
    }
  }, ownerState.disableIcon && {
    color: (_theme$variants = theme.variants[ownerState.variant]) == null || (_theme$variants = _theme$variants[ownerState.color]) == null ? void 0 : _theme$variants.color,
    [`&.${checkboxClasses_default.disabled}`]: {
      color: (_theme$variants2 = theme.variants[`${ownerState.variant}Disabled`]) == null || (_theme$variants2 = _theme$variants2[ownerState.color]) == null ? void 0 : _theme$variants2.color
    }
  });
});
var CheckboxCheckbox = styled_default("span", {
  name: "JoyCheckbox",
  slot: "Checkbox",
  overridesResolver: (props, styles) => styles.checkbox
})(({
  theme,
  ownerState
}) => {
  var _theme$variants3, _variantStyle$backgro, _theme$variants4, _theme$variants5, _theme$variants6;
  const variantStyle = (_theme$variants3 = theme.variants[`${ownerState.variant}`]) == null ? void 0 : _theme$variants3[ownerState.color];
  return [_extends({
    "--Icon-color": ownerState.color !== "neutral" || ownerState.variant === "solid" ? "currentColor" : theme.vars.palette.text.icon,
    boxSizing: "border-box",
    borderRadius: `min(${theme.vars.radius.sm}, 0.25rem)`,
    width: "var(--Checkbox-size)",
    height: "var(--Checkbox-size)",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0
  }, ownerState.disableIcon && {
    display: "contents"
  }, {
    [`&.${checkboxClasses_default.checked}, &.${checkboxClasses_default.indeterminate}`]: {
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
    [`&.${checkboxClasses_default.disabled}`]: (_theme$variants6 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants6[ownerState.color]
  }] : []];
});
var CheckboxAction = styled_default("span", {
  name: "JoyCheckbox",
  slot: "Action",
  overridesResolver: (props, styles) => styles.action
})(({
  theme,
  ownerState
}) => {
  var _theme$variants7, _theme$variants8, _theme$variants9, _theme$variants10;
  return [{
    borderRadius: `var(--Checkbox-actionRadius, ${ownerState.overlay ? "var(--unstable_actionRadius, inherit)" : "inherit"})`,
    textAlign: "left",
    // prevent text-align inheritance
    position: "absolute",
    top: "calc(-1 * var(--variant-borderWidth, 0px))",
    // clickable on the border and focus outline does not move when checked/unchecked
    left: "calc(-1 * var(--variant-borderWidth, 0px))",
    bottom: "calc(-1 * var(--variant-borderWidth, 0px))",
    right: "calc(-1 * var(--variant-borderWidth, 0px))",
    zIndex: 1,
    // The action element usually cover the area of nearest positioned parent
    [theme.focus.selector]: theme.focus.default
  }, ...ownerState.disableIcon ? [(_theme$variants7 = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants7[ownerState.color], {
    "&:hover": (_theme$variants8 = theme.variants[`${ownerState.variant}Hover`]) == null ? void 0 : _theme$variants8[ownerState.color]
  }, {
    "&:active": (_theme$variants9 = theme.variants[`${ownerState.variant}Active`]) == null ? void 0 : _theme$variants9[ownerState.color]
  }, {
    [`&.${checkboxClasses_default.disabled}`]: (_theme$variants10 = theme.variants[`${ownerState.variant}Disabled`]) == null ? void 0 : _theme$variants10[ownerState.color]
  }] : []];
});
var CheckboxInput = styled_default("input", {
  name: "JoyCheckbox",
  slot: "Input",
  overridesResolver: (props, styles) => styles.input
})(() => ({
  margin: 0,
  opacity: 0,
  position: "absolute",
  width: "100%",
  height: "100%",
  cursor: "pointer"
}));
var CheckboxLabel = styled_default("label", {
  name: "JoyCheckbox",
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
var defaultCheckedIcon = (0, import_jsx_runtime6.jsx)(Check_default, {});
var defaultIndeterminateIcon = (0, import_jsx_runtime6.jsx)(HorizontalRule_default, {});
var Checkbox = React5.forwardRef(function Checkbox2(inProps, ref) {
  var _ref, _inProps$disabled, _ref2, _inProps$size, _formControl$color;
  const props = useThemeProps({
    props: inProps,
    name: "JoyCheckbox"
  });
  const {
    checked: checkedProp,
    uncheckedIcon,
    checkedIcon = defaultCheckedIcon,
    label,
    defaultChecked,
    disabled: disabledExternalProp,
    disableIcon = false,
    overlay,
    id: idOverride,
    indeterminate = false,
    indeterminateIcon = defaultIndeterminateIcon,
    name,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly,
    required,
    value,
    color: colorProp,
    variant: variantProp,
    size: sizeProp = "md",
    component,
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const formControl = React5.useContext(FormControlContext_default);
  const disabledProp = (_ref = (_inProps$disabled = inProps.disabled) != null ? _inProps$disabled : formControl == null ? void 0 : formControl.disabled) != null ? _ref : disabledExternalProp;
  const size = (_ref2 = (_inProps$size = inProps.size) != null ? _inProps$size : formControl == null ? void 0 : formControl.size) != null ? _ref2 : sizeProp;
  if (true) {
    const registerEffect = formControl == null ? void 0 : formControl.registerEffect;
    React5.useEffect(() => {
      if (registerEffect) {
        return registerEffect();
      }
      return void 0;
    }, [registerEffect]);
  }
  const id = useId(idOverride != null ? idOverride : formControl == null ? void 0 : formControl.htmlFor);
  const useCheckboxProps = {
    checked: checkedProp,
    defaultChecked,
    disabled: disabledProp,
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
  } = useSwitch(useCheckboxProps);
  const isCheckboxActive = checked || indeterminate;
  const activeVariant = variantProp || "solid";
  const inactiveVariant = variantProp || "outlined";
  const variant = isCheckboxActive ? activeVariant : inactiveVariant;
  const color = inProps.color || (formControl != null && formControl.error ? "danger" : (_formControl$color = formControl == null ? void 0 : formControl.color) != null ? _formControl$color : colorProp);
  const activeColor = color || "primary";
  const inactiveColor = color || "neutral";
  const ownerState = _extends({}, props, {
    checked,
    disabled,
    disableIcon,
    overlay,
    focusVisible,
    color: isCheckboxActive ? activeColor : inactiveColor,
    variant,
    size
  });
  const classes = useUtilityClasses2(ownerState);
  const externalForwardedProps = _extends({}, other, {
    component,
    slots,
    slotProps
  });
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: classes.root,
    elementType: CheckboxRoot,
    externalForwardedProps,
    ownerState
  });
  const [SlotCheckbox, checkboxProps] = useSlot("checkbox", {
    className: classes.checkbox,
    elementType: CheckboxCheckbox,
    externalForwardedProps,
    ownerState
  });
  const [SlotAction, actionProps] = useSlot("action", {
    className: classes.action,
    elementType: CheckboxAction,
    externalForwardedProps,
    ownerState
  });
  const [SlotInput, inputProps] = useSlot("input", {
    additionalProps: _extends({
      id,
      name,
      value,
      readOnly,
      required: required != null ? required : formControl == null ? void 0 : formControl.required,
      "aria-describedby": formControl == null ? void 0 : formControl["aria-describedby"]
    }, indeterminate && {
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked#values
      "aria-checked": "mixed"
    }),
    className: classes.input,
    elementType: CheckboxInput,
    externalForwardedProps,
    getSlotProps: getInputProps,
    ownerState
  });
  const [SlotLabel, labelProps] = useSlot("label", {
    additionalProps: {
      htmlFor: id
    },
    className: classes.label,
    elementType: CheckboxLabel,
    externalForwardedProps,
    ownerState
  });
  let icon = uncheckedIcon;
  if (disableIcon) {
    icon = null;
  } else if (indeterminate) {
    icon = indeterminateIcon;
  } else if (checked) {
    icon = checkedIcon;
  }
  return (0, import_jsx_runtime7.jsxs)(SlotRoot, _extends({}, rootProps, {
    children: [(0, import_jsx_runtime7.jsxs)(SlotCheckbox, _extends({}, checkboxProps, {
      children: [(0, import_jsx_runtime6.jsx)(SlotAction, _extends({}, actionProps, {
        children: (0, import_jsx_runtime6.jsx)(SlotInput, _extends({}, inputProps))
      })), icon]
    })), label && (0, import_jsx_runtime6.jsx)(TypographyNestedContext.Provider, {
      value: true,
      children: (0, import_jsx_runtime6.jsx)(SlotLabel, _extends({}, labelProps, {
        children: label
      }))
    })]
  }));
});
true ? Checkbox.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: import_prop_types2.default.bool,
  /**
   * The icon to display when the component is checked.
   * @default <CheckIcon />
   */
  checkedIcon: import_prop_types2.default.node,
  /**
   * @ignore
   */
  children: import_prop_types2.default.node,
  /**
   * Class name applied to the root element.
   */
  className: import_prop_types2.default.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: import_prop_types2.default.oneOfType([import_prop_types2.default.oneOf(["danger", "neutral", "primary", "success", "warning"]), import_prop_types2.default.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types2.default.elementType,
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: import_prop_types2.default.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: import_prop_types2.default.bool,
  /**
   * If `true`, the checked icon is removed and the selected variant is applied on the `action` element instead.
   * @default false
   */
  disableIcon: import_prop_types2.default.bool,
  /**
   * @ignore
   */
  id: import_prop_types2.default.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: import_prop_types2.default.bool,
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateIcon />
   */
  indeterminateIcon: import_prop_types2.default.node,
  /**
   * The label element next to the checkbox.
   */
  label: import_prop_types2.default.node,
  /**
   * The `name` attribute of the input.
   */
  name: import_prop_types2.default.string,
  /**
   * @ignore
   */
  onBlur: import_prop_types2.default.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: import_prop_types2.default.func,
  /**
   * @ignore
   */
  onFocus: import_prop_types2.default.func,
  /**
   * @ignore
   */
  onFocusVisible: import_prop_types2.default.func,
  /**
   * If `true`, the root element's position is set to initial which allows the action area to fill the nearest positioned parent.
   * This prop is useful for composing Checkbox with ListItem component.
   * @default false
   */
  overlay: import_prop_types2.default.bool,
  /**
   * If `true`, the component is read only.
   */
  readOnly: import_prop_types2.default.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: import_prop_types2.default.bool,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: import_prop_types2.default.oneOf(["sm", "md", "lg"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types2.default.shape({
    action: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    checkbox: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    input: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    label: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
    root: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types2.default.shape({
    action: import_prop_types2.default.elementType,
    checkbox: import_prop_types2.default.elementType,
    input: import_prop_types2.default.elementType,
    label: import_prop_types2.default.elementType,
    root: import_prop_types2.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object]),
  /**
   * The icon when `checked` is false.
   */
  uncheckedIcon: import_prop_types2.default.node,
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.string), import_prop_types2.default.number, import_prop_types2.default.string]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'solid'
   */
  variant: import_prop_types2.default.oneOf(["outlined", "plain", "soft", "solid"])
} : void 0;
var Checkbox_default = Checkbox;

export {
  getSvgIconUtilityClass,
  svgIconClasses_default,
  SvgIcon_default,
  createSvgIcon,
  getCheckboxUtilityClass,
  checkboxClasses_default,
  Checkbox_default
};
//# sourceMappingURL=chunk-YLMICGMM.js.map
