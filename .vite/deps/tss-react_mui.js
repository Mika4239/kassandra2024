import "./chunk-H4YVPWMX.js";
import "./chunk-W3VT5O72.js";
import {
  useTheme
} from "./chunk-UNAKJYQE.js";
import "./chunk-K5AG3MAL.js";
import {
  __unsafe_useEmotionCache,
  getRegisteredStyles,
  init_emotion_react_browser_esm,
  init_emotion_serialize_browser_esm,
  init_emotion_utils_browser_esm,
  insertStyles,
  serializeStyles
} from "./chunk-IL5UXWCV.js";
import "./chunk-DLFHJ4BU.js";
import {
  require_react
} from "./chunk-ZSN3XFJS.js";
import {
  __toESM
} from "./chunk-2GTGKKMZ.js";

// node_modules/tss-react/esm/makeStyles.js
var import_react3 = __toESM(require_react());

// node_modules/tss-react/esm/tools/polyfills/Object.fromEntries.js
var objectFromEntries = !Object.fromEntries ? (entries) => {
  if (!entries || !entries[Symbol.iterator]) {
    throw new Error("Object.fromEntries() requires a single iterable argument");
  }
  const o = {};
  Object.keys(entries).forEach((key) => {
    const [k, v] = entries[key];
    o[k] = v;
  });
  return o;
} : Object.fromEntries;

// node_modules/tss-react/esm/tools/objectKeys.js
function objectKeys(o) {
  return Object.keys(o);
}

// node_modules/tss-react/esm/tools/assert.js
function assert(condition, msg) {
  if (!condition) {
    throw new Error(msg);
  }
}

// node_modules/tss-react/esm/tools/typeGuard.js
function typeGuard(_value, isMatched) {
  return isMatched;
}

// node_modules/tss-react/esm/tools/classnames.js
var classnames = (args) => {
  const len = args.length;
  let i = 0;
  let cls = "";
  for (; i < len; i++) {
    const arg = args[i];
    if (arg == null)
      continue;
    let toAdd;
    switch (typeof arg) {
      case "boolean":
        break;
      case "object": {
        if (Array.isArray(arg)) {
          toAdd = classnames(arg);
        } else {
          assert(!typeGuard(arg, false));
          if (arg.styles !== void 0 && arg.name !== void 0) {
            console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.");
          }
          toAdd = "";
          for (const k in arg) {
            if (arg[k] && k) {
              toAdd && (toAdd += " ");
              toAdd += k;
            }
          }
        }
        break;
      }
      default: {
        toAdd = arg;
      }
    }
    if (toAdd) {
      cls && (cls += " ");
      cls += toAdd;
    }
  }
  return cls;
};

// node_modules/tss-react/esm/cssAndCx.js
init_emotion_serialize_browser_esm();
init_emotion_utils_browser_esm();

// node_modules/tss-react/esm/tools/useGuaranteedMemo.js
var import_react = __toESM(require_react());
function useGuaranteedMemo(fn, deps) {
  const ref = (0, import_react.useRef)();
  if (!ref.current || deps.length !== ref.current.prevDeps.length || ref.current.prevDeps.map((v, i) => v === deps[i]).indexOf(false) >= 0) {
    ref.current = {
      "v": fn(),
      "prevDeps": [...deps]
    };
  }
  return ref.current.v;
}

// node_modules/tss-react/esm/types.js
function matchCSSObject(arg) {
  return arg instanceof Object && !("styles" in arg) && !("length" in arg) && !("__emotion_styles" in arg);
}

// node_modules/tss-react/esm/cssAndCx.js
var { createCssAndCx } = (() => {
  function merge(registered, css2, className) {
    const registeredStyles = [];
    const rawClassName = getRegisteredStyles(registered, registeredStyles, className);
    if (registeredStyles.length < 2) {
      return className;
    }
    return rawClassName + css2(registeredStyles);
  }
  function createCssAndCx2(params) {
    const { cache } = params;
    const css2 = (...args) => {
      const serialized = serializeStyles(args, cache.registered);
      insertStyles(cache, serialized, false);
      const className = `${cache.key}-${serialized.name}`;
      scope: {
        const arg = args[0];
        if (!matchCSSObject(arg)) {
          break scope;
        }
        increaseSpecificityToTakePrecedenceOverMediaQueries.saveClassNameCSSObjectMapping(cache, className, arg);
      }
      return className;
    };
    const cx = (...args) => {
      const className = classnames(args);
      const feat27FixedClassnames = increaseSpecificityToTakePrecedenceOverMediaQueries.fixClassName(cache, className, css2);
      return merge(cache.registered, css2, feat27FixedClassnames);
    };
    return { css: css2, cx };
  }
  return { createCssAndCx: createCssAndCx2 };
})();
function createUseCssAndCx(params) {
  const { useCache } = params;
  function useCssAndCx() {
    const cache = useCache();
    const { css: css2, cx } = useGuaranteedMemo(() => createCssAndCx({ cache }), [cache]);
    return { css: css2, cx };
  }
  return { useCssAndCx };
}
var increaseSpecificityToTakePrecedenceOverMediaQueries = (() => {
  const cssObjectMapByCache = /* @__PURE__ */ new WeakMap();
  return {
    "saveClassNameCSSObjectMapping": (cache, className, cssObject) => {
      let cssObjectMap = cssObjectMapByCache.get(cache);
      if (cssObjectMap === void 0) {
        cssObjectMap = /* @__PURE__ */ new Map();
        cssObjectMapByCache.set(cache, cssObjectMap);
      }
      cssObjectMap.set(className, cssObject);
    },
    "fixClassName": (() => {
      function fix(classNameCSSObjects) {
        let isThereAnyMediaQueriesInPreviousClasses = false;
        return classNameCSSObjects.map(([className, cssObject]) => {
          if (cssObject === void 0) {
            return className;
          }
          let out;
          if (!isThereAnyMediaQueriesInPreviousClasses) {
            out = className;
            for (const key in cssObject) {
              if (key.startsWith("@media")) {
                isThereAnyMediaQueriesInPreviousClasses = true;
                break;
              }
            }
          } else {
            out = {
              "&&": cssObject
            };
          }
          return out;
        });
      }
      return (cache, className, css2) => {
        const cssObjectMap = cssObjectMapByCache.get(cache);
        return classnames(fix(className.split(" ").map((className2) => [
          className2,
          cssObjectMap === null || cssObjectMap === void 0 ? void 0 : cssObjectMap.get(className2)
        ])).map((classNameOrCSSObject) => typeof classNameOrCSSObject === "string" ? classNameOrCSSObject : css2(classNameOrCSSObject)));
      };
    })()
  };
})();

// node_modules/tss-react/esm/tools/getDependencyArrayRef.js
function getDependencyArrayRef(obj) {
  if (!(obj instanceof Object) || typeof obj === "function") {
    return obj;
  }
  const arr = [];
  for (const key in obj) {
    const value = obj[key];
    const typeofValue = typeof value;
    if (!(typeofValue === "string" || typeofValue === "number" && !isNaN(value) || typeofValue === "boolean" || value === void 0 || value === null)) {
      return obj;
    }
    arr.push(`${key}:${typeofValue}_${value}`);
  }
  return "xSqLiJdLMd9s" + arr.join("|");
}

// node_modules/tss-react/esm/mergeClasses.js
function mergeClasses(classesFromUseStyles, classesOverrides, cx) {
  if (!(classesOverrides instanceof Object)) {
    return classesFromUseStyles;
  }
  const out = {};
  objectKeys(classesFromUseStyles).forEach((ruleName) => out[ruleName] = cx(classesFromUseStyles[ruleName], classesOverrides[ruleName]));
  objectKeys(classesOverrides).forEach((ruleName) => {
    if (ruleName in classesFromUseStyles) {
      return;
    }
    const className = classesOverrides[ruleName];
    if (typeof className !== "string") {
      return;
    }
    out[ruleName] = className;
  });
  return out;
}

// node_modules/tss-react/esm/makeStyles.js
var import_react4 = __toESM(require_react());

// node_modules/tss-react/esm/mui/themeStyleOverridesPlugin.js
var import_react2 = __toESM(require_react());
var useMuiThemeStyleOverridesPlugin = ({ classes, theme, muiStyleOverridesParams, css: css2, cx, name }) => {
  var _a, _b;
  require_named: {
    if (name === "makeStyle no name") {
      name = void 0;
      break require_named;
    }
    if (muiStyleOverridesParams !== void 0 && name === void 0) {
      throw new Error("To use muiStyleOverridesParams, you must specify a name using .withName('MyComponent')");
    }
  }
  let styleOverrides = void 0;
  try {
    styleOverrides = name === void 0 ? void 0 : ((_b = (_a = theme.components) === null || _a === void 0 ? void 0 : _a[
      name
      /*example*/
    ]) === null || _b === void 0 ? void 0 : _b.styleOverrides) || void 0;
  } catch (_c) {
  }
  const classesFromThemeStyleOverrides = (0, import_react2.useMemo)(() => {
    if (styleOverrides === void 0) {
      return void 0;
    }
    const themeClasses = {};
    for (const ruleName in styleOverrides) {
      const cssObjectOrGetCssObject = styleOverrides[ruleName];
      if (!(cssObjectOrGetCssObject instanceof Object)) {
        continue;
      }
      themeClasses[ruleName] = css2(typeof cssObjectOrGetCssObject === "function" ? cssObjectOrGetCssObject(Object.assign({ theme, "ownerState": muiStyleOverridesParams === null || muiStyleOverridesParams === void 0 ? void 0 : muiStyleOverridesParams.ownerState }, muiStyleOverridesParams === null || muiStyleOverridesParams === void 0 ? void 0 : muiStyleOverridesParams.props)) : cssObjectOrGetCssObject);
    }
    return themeClasses;
  }, [
    styleOverrides,
    getDependencyArrayRef(muiStyleOverridesParams === null || muiStyleOverridesParams === void 0 ? void 0 : muiStyleOverridesParams.props),
    getDependencyArrayRef(muiStyleOverridesParams === null || muiStyleOverridesParams === void 0 ? void 0 : muiStyleOverridesParams.ownerState),
    css2
  ]);
  classes = (0, import_react2.useMemo)(() => mergeClasses(classes, classesFromThemeStyleOverrides, cx), [classes, classesFromThemeStyleOverrides, cx]);
  return { classes };
};

// node_modules/tss-react/esm/makeStyles.js
init_emotion_react_browser_esm();
var counter = 0;
function createMakeStyles(params) {
  const { useTheme: useTheme2, cache: cacheProvidedAtInception } = params;
  const { useCache } = createUseCache({ cacheProvidedAtInception });
  const { useCssAndCx } = createUseCssAndCx({ useCache });
  function makeStyles2(params2) {
    const { name: nameOrWrappedName, uniqId = `${counter++}` } = params2 !== null && params2 !== void 0 ? params2 : {};
    const name = typeof nameOrWrappedName !== "object" ? nameOrWrappedName : Object.keys(nameOrWrappedName)[0];
    return function(cssObjectByRuleNameOrGetCssObjectByRuleName) {
      const getCssObjectByRuleName = typeof cssObjectByRuleNameOrGetCssObjectByRuleName === "function" ? cssObjectByRuleNameOrGetCssObjectByRuleName : () => cssObjectByRuleNameOrGetCssObjectByRuleName;
      return function useStyles4(params3, muiStyleOverridesParams) {
        const theme = useTheme2();
        let { css: css2, cx } = useCssAndCx();
        const cache = useCache();
        let classes = (0, import_react3.useMemo)(() => {
          const refClassesCache = {};
          const refClasses = typeof Proxy !== "undefined" && new Proxy({}, {
            "get": (_target, propertyKey) => {
              if (typeof propertyKey === "symbol") {
                assert(false);
              }
              return refClassesCache[propertyKey] = `${cache.key}-${uniqId}${name !== void 0 ? `-${name}` : ""}-${propertyKey}-ref`;
            }
          });
          const cssObjectByRuleName = getCssObjectByRuleName(theme, params3, refClasses || {});
          const classes2 = objectFromEntries(objectKeys(cssObjectByRuleName).map((ruleName) => {
            const cssObject = cssObjectByRuleName[ruleName];
            if (!cssObject.label) {
              cssObject.label = `${name !== void 0 ? `${name}-` : ""}${ruleName}`;
            }
            return [
              ruleName,
              `${css2(cssObject)}${typeGuard(ruleName, ruleName in refClassesCache) ? ` ${refClassesCache[ruleName]}` : ""}`
            ];
          }));
          objectKeys(refClassesCache).forEach((ruleName) => {
            if (ruleName in classes2) {
              return;
            }
            classes2[ruleName] = refClassesCache[ruleName];
          });
          return classes2;
        }, [cache, css2, cx, theme, getDependencyArrayRef(params3)]);
        {
          const propsClasses = muiStyleOverridesParams === null || muiStyleOverridesParams === void 0 ? void 0 : muiStyleOverridesParams.props.classes;
          classes = (0, import_react3.useMemo)(() => mergeClasses(classes, propsClasses, cx), [classes, getDependencyArrayRef(propsClasses), cx]);
        }
        {
          const pluginResultWrap = useMuiThemeStyleOverridesPlugin({
            classes,
            css: css2,
            cx,
            "name": name !== null && name !== void 0 ? name : "makeStyle no name",
            "idOfUseStyles": uniqId,
            muiStyleOverridesParams,
            // NOTE: If it's not a Mui Theme the plugin is resilient, it will not crash
            "theme": theme
          });
          if (pluginResultWrap.classes !== void 0) {
            classes = pluginResultWrap.classes;
          }
          if (pluginResultWrap.css !== void 0) {
            css2 = pluginResultWrap.css;
          }
          if (pluginResultWrap.cx !== void 0) {
            cx = pluginResultWrap.cx;
          }
        }
        return {
          classes,
          theme,
          css: css2,
          cx
        };
      };
    };
  }
  function useStyles3() {
    const theme = useTheme2();
    const { css: css2, cx } = useCssAndCx();
    return { theme, css: css2, cx };
  }
  return { makeStyles: makeStyles2, useStyles: useStyles3 };
}
var reactContext = (0, import_react4.createContext)(void 0);
var { createUseCache } = (() => {
  function useCacheProvidedByProvider() {
    const cacheExplicitlyProvidedForTss = (0, import_react4.useContext)(reactContext);
    return cacheExplicitlyProvidedForTss;
  }
  function createUseCache2(params) {
    const { cacheProvidedAtInception } = params;
    function useCache() {
      var _a;
      const contextualCache = __unsafe_useEmotionCache();
      const cacheExplicitlyProvidedForTss = useCacheProvidedByProvider();
      const cacheToBeUsed = (_a = cacheProvidedAtInception !== null && cacheProvidedAtInception !== void 0 ? cacheProvidedAtInception : cacheExplicitlyProvidedForTss) !== null && _a !== void 0 ? _a : contextualCache;
      if (cacheToBeUsed === null) {
        throw new Error([
          "In order to get SSR working with tss-react you need to explicitly provide an Emotion cache.",
          "MUI users be aware: This is not an error strictly related to tss-react, with or without tss-react,",
          "MUI needs an Emotion cache to be provided for SSR to work.",
          "Here is the MUI documentation related to SSR setup: https://mui.com/material-ui/guides/server-rendering/",
          "TSS provides helper that makes the process of setting up SSR easier: https://docs.tss-react.dev/ssr"
        ].join("\n"));
      }
      return cacheToBeUsed;
    }
    return { useCache };
  }
  return { createUseCache: createUseCache2 };
})();

// node_modules/tss-react/esm/withStyles.js
var import_react6 = __toESM(require_react());

// node_modules/tss-react/esm/tools/capitalize.js
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// node_modules/tss-react/esm/withStyles.js
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function createWithStyles(params) {
  const { useTheme: useTheme2, cache } = params;
  const { makeStyles: makeStyles2 } = createMakeStyles({ useTheme: useTheme2, cache });
  function withStyles2(Component, cssObjectByRuleNameOrGetCssObjectByRuleName, params2) {
    const Component_ = typeof Component === "string" ? (() => {
      const tag = Component;
      const Out2 = function(_a) {
        var { children } = _a, props = __rest(_a, ["children"]);
        return (0, import_react6.createElement)(tag, props, children);
      };
      Object.defineProperty(Out2, "name", {
        "value": capitalize(tag)
      });
      return Out2;
    })() : Component;
    const name = (() => {
      {
        const { name: nameOrWrappedName } = params2 !== null && params2 !== void 0 ? params2 : {};
        if (nameOrWrappedName !== void 0) {
          return typeof nameOrWrappedName !== "object" ? nameOrWrappedName : Object.keys(nameOrWrappedName)[0];
        }
      }
      {
        const displayName = Component_.displayName;
        if (typeof displayName === "string" && displayName !== "") {
          return displayName;
        }
      }
      {
        const { name: name2 } = Component_;
        if (name2) {
          return name2.replace(/\$/g, "usd");
        }
      }
    })();
    const useStyles3 = makeStyles2(Object.assign(Object.assign({}, params2), { name }))(typeof cssObjectByRuleNameOrGetCssObjectByRuleName === "function" ? (theme, props, classes) => incorporateMediaQueries(cssObjectByRuleNameOrGetCssObjectByRuleName(theme, props, classes)) : incorporateMediaQueries(cssObjectByRuleNameOrGetCssObjectByRuleName));
    function getHasNonRootClasses(classes) {
      for (const name2 in classes) {
        if (name2 === "root") {
          continue;
        }
        return true;
      }
      return false;
    }
    const Out = (0, import_react6.forwardRef)(function(props, ref) {
      const { className, classes: _classes } = props, rest = __rest(props, ["className", "classes"]);
      const { classes, cx } = useStyles3(props, { props });
      const rootClassName = cx(classes.root, className);
      fixedClassesByClasses.set(classes, Object.assign(Object.assign({}, classes), { "root": rootClassName }));
      return import_react6.default.createElement(Component_, Object.assign({ ref, className: getHasNonRootClasses(classes) ? className : rootClassName }, typeof Component === "string" ? {} : { classes }, rest));
    });
    if (name !== void 0) {
      Out.displayName = `${capitalize(name)}WithStyles`;
      Object.defineProperty(Out, "name", { "value": Out.displayName });
    }
    return Out;
  }
  withStyles2.getClasses = getClasses;
  return { withStyles: withStyles2 };
}
var fixedClassesByClasses = /* @__PURE__ */ new WeakMap();
var errorMessageGetClasses = "getClasses should only be used in conjunction with withStyles";
function getClasses(props) {
  const classesIn = props.classes;
  if (classesIn === void 0) {
    throw new Error(errorMessageGetClasses);
  }
  const classes = fixedClassesByClasses.get(classesIn);
  if (classes === void 0) {
    throw new Error(errorMessageGetClasses);
  }
  return classes;
}
function incorporateMediaQueries(cssObjectByRuleNameWithMediaQueries) {
  const cssObjectByRuleName = {};
  const cssObjectByRuleNameWithMediaQueriesByMediaQuery = {};
  Object.keys(cssObjectByRuleNameWithMediaQueries).forEach((ruleNameOrMediaQuery) => (ruleNameOrMediaQuery.startsWith("@media") ? cssObjectByRuleNameWithMediaQueriesByMediaQuery : cssObjectByRuleName)[ruleNameOrMediaQuery] = cssObjectByRuleNameWithMediaQueries[ruleNameOrMediaQuery]);
  Object.keys(cssObjectByRuleNameWithMediaQueriesByMediaQuery).forEach((mediaQuery) => {
    const cssObjectByRuleNameBis = cssObjectByRuleNameWithMediaQueriesByMediaQuery[mediaQuery];
    Object.keys(cssObjectByRuleNameBis).forEach((ruleName) => {
      var _a;
      return cssObjectByRuleName[ruleName] = Object.assign(Object.assign({}, (_a = cssObjectByRuleName[ruleName]) !== null && _a !== void 0 ? _a : {}), { [mediaQuery]: cssObjectByRuleNameBis[ruleName] });
    });
  });
  return cssObjectByRuleName;
}

// node_modules/tss-react/esm/tss.js
var import_react7 = __toESM(require_react());

// node_modules/tss-react/esm/tools/isSSR.js
var isSSR = (() => {
  const isBrowser = typeof document === "object" && typeof (document === null || document === void 0 ? void 0 : document.getElementById) === "function";
  const isJest = typeof jest !== "undefined";
  const isMocha = typeof mocha !== "undefined";
  const isVitest = typeof __vitest_worker__ !== "undefined";
  return !isBrowser && !isJest && !isMocha && !isVitest;
})();

// node_modules/tss-react/esm/tss.js
var __rest2 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function createTss(params) {
  const { useContext: useContext3, usePlugin, cache: cacheProvidedAtInception } = params;
  const { useCache } = createUseCache({ cacheProvidedAtInception });
  const { useCssAndCx } = createUseCssAndCx({ useCache });
  const usePluginDefault = ({ classes, cx, css: css2 }) => ({ classes, cx, css: css2 });
  const tss3 = createTss_internal({
    useContext: useContext3,
    useCache,
    useCssAndCx,
    "usePlugin": usePlugin !== null && usePlugin !== void 0 ? usePlugin : usePluginDefault,
    "name": void 0,
    "doesUseNestedSelectors": false
  });
  return { tss: tss3 };
}
var counter2 = 0;
var nestedSelectorUsageTrackRecord = [];
function createTss_internal(params) {
  const { useContext: useContext3, useCache, useCssAndCx, usePlugin, name, doesUseNestedSelectors } = params;
  return {
    "withParams": () => createTss_internal(Object.assign({}, params)),
    "withName": (nameOrWrappedName) => createTss_internal(Object.assign(Object.assign({}, params), { "name": typeof nameOrWrappedName !== "object" ? nameOrWrappedName : Object.keys(nameOrWrappedName)[0] })),
    "withNestedSelectors": () => createTss_internal(Object.assign(Object.assign({}, params), { "doesUseNestedSelectors": true })),
    "create": (cssObjectByRuleNameOrGetCssObjectByRuleName) => {
      const idOfUseStyles = `x${counter2++}`;
      const getCssObjectByRuleName = typeof cssObjectByRuleNameOrGetCssObjectByRuleName === "function" ? cssObjectByRuleNameOrGetCssObjectByRuleName : () => cssObjectByRuleNameOrGetCssObjectByRuleName;
      return function useStyles3(params2) {
        var _a, _b, _c;
        const _d = params2 !== null && params2 !== void 0 ? params2 : {}, { classesOverrides } = _d, paramsAndPluginParams = __rest2(_d, ["classesOverrides"]);
        const context = useContext3();
        const { css: css2, cx } = useCssAndCx();
        const cache = useCache();
        let classes = (0, import_react7.useMemo)(() => {
          const refClassesCache = {};
          const cssObjectByRuleName = getCssObjectByRuleName(Object.assign(Object.assign(Object.assign({}, params2), context), !doesUseNestedSelectors ? {} : {
            "classes": typeof Proxy === "undefined" ? {} : new Proxy({}, {
              "get": (_target, ruleName) => {
                if (typeof ruleName === "symbol") {
                  assert(false);
                }
                if (isSSR) {
                  {
                    let wrap = nestedSelectorUsageTrackRecord.find((wrap2) => wrap2.name === name && wrap2.idOfUseStyles === idOfUseStyles);
                    if (wrap === void 0) {
                      wrap = {
                        name,
                        idOfUseStyles,
                        "nestedSelectorRuleNames": /* @__PURE__ */ new Set()
                      };
                      nestedSelectorUsageTrackRecord.push(wrap);
                    }
                    wrap.nestedSelectorRuleNames.add(ruleName);
                  }
                  if (
                    /* prettier-ignore */
                    nestedSelectorUsageTrackRecord.find((wrap) => wrap.name === name && wrap.idOfUseStyles !== idOfUseStyles && wrap.nestedSelectorRuleNames.has(ruleName)) !== void 0
                  ) {
                    throw new Error([
                      `tss-react: Duplicate nested selector "${ruleName}" detected in ${name === void 0 ? `useStyles named "${name}"` : "anonymous useStyles function"}.`,
                      `In SSR setups, this may lead to CSS class name collisions, causing nested selectors to target elements outside of the intended scope.`,
                      `Solution: Ensure each useStyles using nested selectors has a unique name. Use tss.withName("UniqueName").withNestedSelectors<...>()... to set a name.`
                    ].join("\n"));
                  }
                }
                return refClassesCache[ruleName] = `${cache.key}-${idOfUseStyles}${name !== void 0 ? `-${name}` : ""}-${ruleName}-ref`;
              }
            })
          }));
          const classes2 = objectFromEntries(objectKeys(cssObjectByRuleName).map((ruleName) => {
            const cssObject = cssObjectByRuleName[ruleName];
            if (!cssObject.label) {
              cssObject.label = `${name !== void 0 ? `${name}-` : ""}${ruleName}`;
            }
            return [
              ruleName,
              `${css2(cssObject)}${typeGuard(ruleName, ruleName in refClassesCache) ? ` ${refClassesCache[ruleName]}` : ""}`
            ];
          }));
          objectKeys(refClassesCache).forEach((ruleName) => {
            if (ruleName in classes2) {
              return;
            }
            classes2[ruleName] = refClassesCache[ruleName];
          });
          return classes2;
        }, [
          cache,
          css2,
          cx,
          getDependencyArrayRef(params2),
          ...Object.values(context)
        ]);
        classes = (0, import_react7.useMemo)(() => mergeClasses(classes, classesOverrides, cx), [classes, getDependencyArrayRef(classesOverrides), cx]);
        const pluginResultWrap = usePlugin(Object.assign(Object.assign({
          classes,
          css: css2,
          cx,
          idOfUseStyles,
          name
        }, context), paramsAndPluginParams));
        return Object.assign({ "classes": (_a = pluginResultWrap.classes) !== null && _a !== void 0 ? _a : classes, "css": (_b = pluginResultWrap.css) !== null && _b !== void 0 ? _b : css2, "cx": (_c = pluginResultWrap.cx) !== null && _c !== void 0 ? _c : cx }, context);
      };
    }
  };
}

// node_modules/tss-react/esm/index.js
init_emotion_react_browser_esm();

// node_modules/tss-react/esm/GlobalStyles.js
var import_react8 = __toESM(require_react());
init_emotion_react_browser_esm();

// node_modules/tss-react/esm/index.js
function createMakeAndWithStyles(params) {
  return Object.assign(Object.assign({}, createMakeStyles(params)), createWithStyles(params));
}
var { tss } = createTss({
  "useContext": () => ({})
});
var useStyles = tss.create({});

// node_modules/tss-react/esm/mui/mui.js
var { makeStyles, withStyles } = createMakeAndWithStyles({
  useTheme
});
var { tss: tss2 } = createTss({
  "useContext": function useContext2() {
    const theme = useTheme();
    return { theme };
  },
  "usePlugin": useMuiThemeStyleOverridesPlugin
});
var useStyles2 = tss2.create({});
export {
  makeStyles,
  tss2 as tss,
  useMuiThemeStyleOverridesPlugin,
  useStyles2 as useStyles,
  withStyles
};
//# sourceMappingURL=tss-react_mui.js.map
