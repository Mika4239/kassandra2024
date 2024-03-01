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
  capitalize,
  composeClasses,
  init_utils,
  require_jsx_runtime,
  useControlled,
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

// node_modules/@mui/joy/RadioGroup/RadioGroup.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx();
init_utils();

// node_modules/@mui/joy/RadioGroup/radioGroupClasses.js
function getRadioGroupUtilityClass(slot) {
  return generateUtilityClass("MuiRadioGroup", slot);
}
var radioGroupClasses = generateUtilityClasses("MuiRadioGroup", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg", "horizontal", "vertical"]);
var radioGroupClasses_default = radioGroupClasses;

// node_modules/@mui/joy/RadioGroup/RadioGroup.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["className", "component", "children", "name", "defaultValue", "disableIcon", "overlay", "value", "onChange", "color", "variant", "size", "orientation", "role", "slots", "slotProps"];
var useUtilityClasses = (ownerState) => {
  const {
    orientation,
    size,
    variant,
    color
  } = ownerState;
  const slots = {
    root: ["root", orientation, variant && `variant${capitalize(variant)}`, color && `color${capitalize(color)}`, size && `size${capitalize(size)}`]
  };
  return composeClasses(slots, getRadioGroupUtilityClass, {});
};
var RadioGroupRoot = styled_default("div", {
  name: "JoyRadioGroup",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  ownerState,
  theme
}) => {
  var _theme$variants;
  return _extends({}, ownerState.size === "sm" && {
    "--RadioGroup-gap": "0.625rem"
  }, ownerState.size === "md" && {
    "--RadioGroup-gap": "0.875rem"
  }, ownerState.size === "lg" && {
    "--RadioGroup-gap": "1.25rem"
  }, {
    display: "flex",
    margin: "var(--unstable_RadioGroup-margin)",
    flexDirection: ownerState.orientation === "horizontal" ? "row" : "column",
    borderRadius: theme.vars.radius.sm
  }, (_theme$variants = theme.variants[ownerState.variant]) == null ? void 0 : _theme$variants[ownerState.color]);
});
var RadioGroup = React.forwardRef(function RadioGroup2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "JoyRadioGroup"
  });
  const {
    className,
    component,
    children,
    name: nameProp,
    defaultValue,
    disableIcon = false,
    overlay,
    value: valueProp,
    onChange,
    color = "neutral",
    variant = "plain",
    size: sizeProp = "md",
    orientation = "vertical",
    role = "radiogroup",
    slots = {},
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "RadioGroup"
  });
  const formControl = React.useContext(FormControlContext_default);
  const size = inProps.size || (formControl == null ? void 0 : formControl.size) || sizeProp;
  const ownerState = _extends({
    orientation,
    size,
    variant,
    color,
    role
  }, props);
  const classes = useUtilityClasses(ownerState);
  const name = useId(nameProp);
  if (true) {
    const registerEffect = formControl == null ? void 0 : formControl.registerEffect;
    React.useEffect(() => {
      if (registerEffect) {
        return registerEffect();
      }
      return void 0;
    }, [registerEffect]);
  }
  const contextValue = React.useMemo(() => ({
    disableIcon,
    overlay,
    orientation,
    size,
    name,
    value,
    onChange: (event) => {
      setValueState(event.target.value);
      if (onChange) {
        onChange(event);
      }
    }
  }), [disableIcon, name, onChange, overlay, orientation, setValueState, size, value]);
  const [SlotRoot, rootProps] = useSlot("root", {
    ref,
    className: clsx_default(classes.root, className),
    elementType: RadioGroupRoot,
    externalForwardedProps: _extends({}, other, {
      component,
      slots,
      slotProps
    }),
    ownerState,
    additionalProps: {
      as: component,
      role,
      // The `id` is just for the completeness, it does not have any effect because RadioGroup (div) is non-labelable element
      // MDN: "If it is not a labelable element, then the for attribute has no effect"
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for
      id: formControl == null ? void 0 : formControl.htmlFor,
      "aria-labelledby": formControl == null ? void 0 : formControl.labelId,
      "aria-describedby": formControl == null ? void 0 : formControl["aria-describedby"]
    }
  });
  return (0, import_jsx_runtime.jsx)(RadioGroupContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime.jsx)(SlotRoot, _extends({}, rootProps, {
      children: (0, import_jsx_runtime.jsx)(FormControlContext_default.Provider, {
        value: void 0,
        children: React.Children.map(children, (child, index) => React.isValidElement(child) ? React.cloneElement(child, _extends({}, index === 0 && {
          "data-first-child": ""
        }, index === React.Children.count(children) - 1 && {
          "data-last-child": ""
        }, {
          "data-parent": "RadioGroup"
        })) : child)
      })
    }))
  });
});
true ? RadioGroup.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
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
   * The default value. Use when the component is not controlled.
   */
  defaultValue: import_prop_types.default.any,
  /**
   * The radio's `disabledIcon` prop. If specified, the value is passed down to every radios under this element.
   * @default false
   */
  disableIcon: import_prop_types.default.bool,
  /**
   * The name used to reference the value of the control.
   * If you don't provide this prop, it falls back to a randomly generated name.
   */
  name: import_prop_types.default.string,
  /**
   * Callback fired when a radio button is selected.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: import_prop_types.default.func,
  /**
   * The component orientation.
   * @default 'vertical'
   */
  orientation: import_prop_types.default.oneOf(["horizontal", "vertical"]),
  /**
   * The radio's `overlay` prop. If specified, the value is passed down to every radios under this element.
   * @default false
   */
  overlay: import_prop_types.default.bool,
  /**
   * @ignore
   */
  role: import_prop_types.default.string,
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
   * Value of the selected radio button. The DOM API casts this to a string.
   */
  value: import_prop_types.default.any,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["outlined", "plain", "soft", "solid"]), import_prop_types.default.string])
} : void 0;
var RadioGroup_default = RadioGroup;

export {
  getRadioGroupUtilityClass,
  radioGroupClasses_default,
  RadioGroup_default
};
//# sourceMappingURL=chunk-EEUXFYIR.js.map
