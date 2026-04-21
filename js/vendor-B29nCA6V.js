function t(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var e = {
    exports: {}
}
  , n = {}
  , i = Symbol.for("react.element")
  , r = Symbol.for("react.portal")
  , o = Symbol.for("react.fragment")
  , s = Symbol.for("react.strict_mode")
  , a = Symbol.for("react.profiler")
  , l = Symbol.for("react.provider")
  , u = Symbol.for("react.context")
  , c = Symbol.for("react.forward_ref")
  , h = Symbol.for("react.suspense")
  , d = Symbol.for("react.memo")
  , p = Symbol.for("react.lazy")
  , m = Symbol.iterator;
var f = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , g = Object.assign
  , y = {};
function v(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = y,
    this.updater = n || f
}
function x() {}
function b(t, e, n) {
    this.props = t,
    this.context = e,
    this.refs = y,
    this.updater = n || f
}
v.prototype.isReactComponent = {},
v.prototype.setState = function(t, e) {
    if ("object" != typeof t && "function" != typeof t && null != t)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState")
}
,
v.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate")
}
,
x.prototype = v.prototype;
var P = b.prototype = new x;
P.constructor = b,
g(P, v.prototype),
P.isPureReactComponent = !0;
var w = Array.isArray
  , S = Object.prototype.hasOwnProperty
  , T = {
    current: null
}
  , E = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function M(t, e, n) {
    var r, o = {}, s = null, a = null;
    if (null != e)
        for (r in void 0 !== e.ref && (a = e.ref),
        void 0 !== e.key && (s = "" + e.key),
        e)
            S.call(e, r) && !E.hasOwnProperty(r) && (o[r] = e[r]);
    var l = arguments.length - 2;
    if (1 === l)
        o.children = n;
    else if (1 < l) {
        for (var u = Array(l), c = 0; c < l; c++)
            u[c] = arguments[c + 2];
        o.children = u
    }
    if (t && t.defaultProps)
        for (r in l = t.defaultProps)
            void 0 === o[r] && (o[r] = l[r]);
    return {
        $$typeof: i,
        type: t,
        key: s,
        ref: a,
        props: o,
        _owner: T.current
    }
}
function C(t) {
    return "object" == typeof t && null !== t && t.$$typeof === i
}
var A = /\/+/g;
function V(t, e) {
    return "object" == typeof t && null !== t && null != t.key ? function(t) {
        var e = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + t.replace(/[=:]/g, function(t) {
            return e[t]
        })
    }("" + t.key) : e.toString(36)
}
function R(t, e, n, o, s) {
    var a = typeof t;
    "undefined" !== a && "boolean" !== a || (t = null);
    var l = !1;
    if (null === t)
        l = !0;
    else
        switch (a) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (t.$$typeof) {
            case i:
            case r:
                l = !0
            }
        }
    if (l)
        return s = s(l = t),
        t = "" === o ? "." + V(l, 0) : o,
        w(s) ? (n = "",
        null != t && (n = t.replace(A, "$&/") + "/"),
        R(s, e, n, "", function(t) {
            return t
        })) : null != s && (C(s) && (s = function(t, e) {
            return {
                $$typeof: i,
                type: t.type,
                key: e,
                ref: t.ref,
                props: t.props,
                _owner: t._owner
            }
        }(s, n + (!s.key || l && l.key === s.key ? "" : ("" + s.key).replace(A, "$&/") + "/") + t)),
        e.push(s)),
        1;
    if (l = 0,
    o = "" === o ? "." : o + ":",
    w(t))
        for (var u = 0; u < t.length; u++) {
            var c = o + V(a = t[u], u);
            l += R(a, e, n, c, s)
        }
    else if (c = function(t) {
        return null === t || "object" != typeof t ? null : "function" == typeof (t = m && t[m] || t["@@iterator"]) ? t : null
    }(t),
    "function" == typeof c)
        for (t = c.call(t),
        u = 0; !(a = t.next()).done; )
            l += R(a = a.value, e, n, c = o + V(a, u++), s);
    else if ("object" === a)
        throw e = String(t),
        Error("Objects are not valid as a React child (found: " + ("[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return l
}
function k(t, e, n) {
    if (null == t)
        return t;
    var i = []
      , r = 0;
    return R(t, i, "", "", function(t) {
        return e.call(n, t, r++)
    }),
    i
}
function D(t) {
    if (-1 === t._status) {
        var e = t._result;
        (e = e()).then(function(e) {
            0 !== t._status && -1 !== t._status || (t._status = 1,
            t._result = e)
        }, function(e) {
            0 !== t._status && -1 !== t._status || (t._status = 2,
            t._result = e)
        }),
        -1 === t._status && (t._status = 0,
        t._result = e)
    }
    if (1 === t._status)
        return t._result.default;
    throw t._result
}
var L = {
    current: null
}
  , j = {
    transition: null
}
  , B = {
    ReactCurrentDispatcher: L,
    ReactCurrentBatchConfig: j,
    ReactCurrentOwner: T
};
function F() {
    throw Error("act(...) is not supported in production builds of React.")
}
n.Children = {
    map: k,
    forEach: function(t, e, n) {
        k(t, function() {
            e.apply(this, arguments)
        }, n)
    },
    count: function(t) {
        var e = 0;
        return k(t, function() {
            e++
        }),
        e
    },
    toArray: function(t) {
        return k(t, function(t) {
            return t
        }) || []
    },
    only: function(t) {
        if (!C(t))
            throw Error("React.Children.only expected to receive a single React element child.");
        return t
    }
},
n.Component = v,
n.Fragment = o,
n.Profiler = a,
n.PureComponent = b,
n.StrictMode = s,
n.Suspense = h,
n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B,
n.act = F,
n.cloneElement = function(t, e, n) {
    if (null == t)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var r = g({}, t.props)
      , o = t.key
      , s = t.ref
      , a = t._owner;
    if (null != e) {
        if (void 0 !== e.ref && (s = e.ref,
        a = T.current),
        void 0 !== e.key && (o = "" + e.key),
        t.type && t.type.defaultProps)
            var l = t.type.defaultProps;
        for (u in e)
            S.call(e, u) && !E.hasOwnProperty(u) && (r[u] = void 0 === e[u] && void 0 !== l ? l[u] : e[u])
    }
    var u = arguments.length - 2;
    if (1 === u)
        r.children = n;
    else if (1 < u) {
        l = Array(u);
        for (var c = 0; c < u; c++)
            l[c] = arguments[c + 2];
        r.children = l
    }
    return {
        $$typeof: i,
        type: t.type,
        key: o,
        ref: s,
        props: r,
        _owner: a
    }
}
,
n.createContext = function(t) {
    return (t = {
        $$typeof: u,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }).Provider = {
        $$typeof: l,
        _context: t
    },
    t.Consumer = t
}
,
n.createElement = M,
n.createFactory = function(t) {
    var e = M.bind(null, t);
    return e.type = t,
    e
}
,
n.createRef = function() {
    return {
        current: null
    }
}
,
n.forwardRef = function(t) {
    return {
        $$typeof: c,
        render: t
    }
}
,
n.isValidElement = C,
n.lazy = function(t) {
    return {
        $$typeof: p,
        _payload: {
            _status: -1,
            _result: t
        },
        _init: D
    }
}
,
n.memo = function(t, e) {
    return {
        $$typeof: d,
        type: t,
        compare: void 0 === e ? null : e
    }
}
,
n.startTransition = function(t) {
    var e = j.transition;
    j.transition = {};
    try {
        t()
    } finally {
        j.transition = e
    }
}
,
n.unstable_act = F,
n.useCallback = function(t, e) {
    return L.current.useCallback(t, e)
}
,
n.useContext = function(t) {
    return L.current.useContext(t)
}
,
n.useDebugValue = function() {}
,
n.useDeferredValue = function(t) {
    return L.current.useDeferredValue(t)
}
,
n.useEffect = function(t, e) {
    return L.current.useEffect(t, e)
}
,
n.useId = function() {
    return L.current.useId()
}
,
n.useImperativeHandle = function(t, e, n) {
    return L.current.useImperativeHandle(t, e, n)
}
,
n.useInsertionEffect = function(t, e) {
    return L.current.useInsertionEffect(t, e)
}
,
n.useLayoutEffect = function(t, e) {
    return L.current.useLayoutEffect(t, e)
}
,
n.useMemo = function(t, e) {
    return L.current.useMemo(t, e)
}
,
n.useReducer = function(t, e, n) {
    return L.current.useReducer(t, e, n)
}
,
n.useRef = function(t) {
    return L.current.useRef(t)
}
,
n.useState = function(t) {
    return L.current.useState(t)
}
,
n.useSyncExternalStore = function(t, e, n) {
    return L.current.useSyncExternalStore(t, e, n)
}
,
n.useTransition = function() {
    return L.current.useTransition()
}
,
n.version = "18.3.1",
e.exports = n;
var O = e.exports;
const I = t(O)
  , U = O.createContext({
    transformPagePoint: t => t,
    isStatic: !1,
    reducedMotion: "never"
})
  , N = O.createContext({})
  , $ = O.createContext(null)
  , _ = "undefined" != typeof document
  , W = _ ? O.useLayoutEffect : O.useEffect
  , z = O.createContext({
    strict: !1
})
  , H = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
  , Y = "data-" + H("framerAppearId");
function X(t) {
    return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
}
function q(t) {
    return "string" == typeof t || Array.isArray(t)
}
function G(t) {
    return null !== t && "object" == typeof t && "function" == typeof t.start
}
const Z = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , K = ["initial", ...Z];
function J(t) {
    return G(t.animate) || K.some(e => q(t[e]))
}
function Q(t) {
    return Boolean(J(t) || t.variants)
}
function tt(t) {
    const {initial: e, animate: n} = function(t, e) {
        if (J(t)) {
            const {initial: e, animate: n} = t;
            return {
                initial: !1 === e || q(e) ? e : void 0,
                animate: q(n) ? n : void 0
            }
        }
        return !1 !== t.inherit ? e : {}
    }(t, O.useContext(N));
    return O.useMemo( () => ({
        initial: e,
        animate: n
    }), [et(e), et(n)])
}
function et(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const nt = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , it = {};
for (const $s in nt)
    it[$s] = {
        isEnabled: t => nt[$s].some(e => !!t[e])
    };
const rt = O.createContext({})
  , ot = O.createContext({})
  , st = Symbol.for("motionComponentSymbol");
function at({preloadedFeatures: t, createVisualElement: e, useRender: n, useVisualState: i, Component: r}) {
    t && function(t) {
        for (const e in t)
            it[e] = {
                ...it[e],
                ...t[e]
            }
    }(t);
    const o = O.forwardRef(function(o, s) {
        let a;
        const l = {
            ...O.useContext(U),
            ...o,
            layoutId: lt(o)
        }
          , {isStatic: u} = l
          , c = tt(o)
          , h = i(o, u);
        if (!u && _) {
            c.visualElement = function(t, e, n, i) {
                const {visualElement: r} = O.useContext(N)
                  , o = O.useContext(z)
                  , s = O.useContext($)
                  , a = O.useContext(U).reducedMotion
                  , l = O.useRef();
                i = i || o.renderer,
                !l.current && i && (l.current = i(t, {
                    visualState: e,
                    parent: r,
                    props: n,
                    presenceContext: s,
                    blockInitialAnimation: !!s && !1 === s.initial,
                    reducedMotionConfig: a
                }));
                const u = l.current;
                O.useInsertionEffect( () => {
                    u && u.update(n, s)
                }
                );
                const c = O.useRef(Boolean(n[Y] && !window.HandoffComplete));
                return W( () => {
                    u && (u.render(),
                    c.current && u.animationState && u.animationState.animateChanges())
                }
                ),
                O.useEffect( () => {
                    u && (u.updateFeatures(),
                    !c.current && u.animationState && u.animationState.animateChanges(),
                    c.current && (c.current = !1,
                    window.HandoffComplete = !0))
                }
                ),
                u
            }(r, h, l, e);
            const n = O.useContext(ot)
              , i = O.useContext(z).strict;
            c.visualElement && (a = c.visualElement.loadFeatures(l, i, t, n))
        }
        return O.createElement(N.Provider, {
            value: c
        }, a && c.visualElement ? O.createElement(a, {
            visualElement: c.visualElement,
            ...l
        }) : null, n(r, o, function(t, e, n) {
            return O.useCallback(i => {
                i && t.mount && t.mount(i),
                e && (i ? e.mount(i) : e.unmount()),
                n && ("function" == typeof n ? n(i) : X(n) && (n.current = i))
            }
            , [e])
        }(h, c.visualElement, s), h, u, c.visualElement))
    });
    return o[st] = r,
    o
}
function lt({layoutId: t}) {
    const e = O.useContext(rt).id;
    return e && void 0 !== t ? e + "-" + t : t
}
function ut(t) {
    function e(e, n={}) {
        return at(t(e, n))
    }
    if ("undefined" == typeof Proxy)
        return e;
    const n = new Map;
    return new Proxy(e,{
        get: (t, i) => (n.has(i) || n.set(i, e(i)),
        n.get(i))
    })
}
const ct = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function ht(t) {
    return "string" == typeof t && !t.includes("-") && !!(ct.indexOf(t) > -1 || /[A-Z]/.test(t))
}
const dt = {};
const pt = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , mt = new Set(pt);
function ft(t, {layout: e, layoutId: n}) {
    return mt.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!dt[t] || "opacity" === t)
}
const gt = t => Boolean(t && t.getVelocity)
  , yt = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , vt = pt.length;
const xt = t => e => "string" == typeof e && e.startsWith(t)
  , bt = xt("--")
  , Pt = xt("var(--")
  , wt = (t, e) => e && "number" == typeof t ? e.transform(t) : t
  , St = (t, e, n) => Math.min(Math.max(n, t), e)
  , Tt = {
    test: t => "number" == typeof t,
    parse: parseFloat,
    transform: t => t
}
  , Et = {
    ...Tt,
    transform: t => St(0, 1, t)
}
  , Mt = {
    ...Tt,
    default: 1
}
  , Ct = t => Math.round(1e5 * t) / 1e5
  , At = /(-)?([\d]*\.?[\d])+/g
  , Vt = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , Rt = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function kt(t) {
    return "string" == typeof t
}
const Dt = t => ({
    test: e => kt(e) && e.endsWith(t) && 1 === e.split(" ").length,
    parse: parseFloat,
    transform: e => `${e}${t}`
})
  , Lt = Dt("deg")
  , jt = Dt("%")
  , Bt = Dt("px")
  , Ft = Dt("vh")
  , Ot = Dt("vw")
  , It = {
    ...jt,
    parse: t => jt.parse(t) / 100,
    transform: t => jt.transform(100 * t)
}
  , Ut = {
    ...Tt,
    transform: Math.round
}
  , Nt = {
    borderWidth: Bt,
    borderTopWidth: Bt,
    borderRightWidth: Bt,
    borderBottomWidth: Bt,
    borderLeftWidth: Bt,
    borderRadius: Bt,
    radius: Bt,
    borderTopLeftRadius: Bt,
    borderTopRightRadius: Bt,
    borderBottomRightRadius: Bt,
    borderBottomLeftRadius: Bt,
    width: Bt,
    maxWidth: Bt,
    height: Bt,
    maxHeight: Bt,
    size: Bt,
    top: Bt,
    right: Bt,
    bottom: Bt,
    left: Bt,
    padding: Bt,
    paddingTop: Bt,
    paddingRight: Bt,
    paddingBottom: Bt,
    paddingLeft: Bt,
    margin: Bt,
    marginTop: Bt,
    marginRight: Bt,
    marginBottom: Bt,
    marginLeft: Bt,
    rotate: Lt,
    rotateX: Lt,
    rotateY: Lt,
    rotateZ: Lt,
    scale: Mt,
    scaleX: Mt,
    scaleY: Mt,
    scaleZ: Mt,
    skew: Lt,
    skewX: Lt,
    skewY: Lt,
    distance: Bt,
    translateX: Bt,
    translateY: Bt,
    translateZ: Bt,
    x: Bt,
    y: Bt,
    z: Bt,
    perspective: Bt,
    transformPerspective: Bt,
    opacity: Et,
    originX: It,
    originY: It,
    originZ: Bt,
    zIndex: Ut,
    fillOpacity: Et,
    strokeOpacity: Et,
    numOctaves: Ut
};
function $t(t, e, n, i) {
    const {style: r, vars: o, transform: s, transformOrigin: a} = t;
    let l = !1
      , u = !1
      , c = !0;
    for (const h in e) {
        const t = e[h];
        if (bt(h)) {
            o[h] = t;
            continue
        }
        const n = Nt[h]
          , i = wt(t, n);
        if (mt.has(h)) {
            if (l = !0,
            s[h] = i,
            !c)
                continue;
            t !== (n.default || 0) && (c = !1)
        } else
            h.startsWith("origin") ? (u = !0,
            a[h] = i) : r[h] = i
    }
    if (e.transform || (l || i ? r.transform = function(t, {enableHardwareAcceleration: e=!0, allowTransformNone: n=!0}, i, r) {
        let o = "";
        for (let s = 0; s < vt; s++) {
            const e = pt[s];
            void 0 !== t[e] && (o += `${yt[e] || e}(${t[e]}) `)
        }
        return e && !t.z && (o += "translateZ(0)"),
        o = o.trim(),
        r ? o = r(t, i ? "" : o) : n && i && (o = "none"),
        o
    }(t.transform, n, c, i) : r.transform && (r.transform = "none")),
    u) {
        const {originX: t="50%", originY: e="50%", originZ: n=0} = a;
        r.transformOrigin = `${t} ${e} ${n}`
    }
}
const _t = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Wt(t, e, n) {
    for (const i in e)
        gt(e[i]) || ft(i, n) || (t[i] = e[i])
}
function zt(t, e, n) {
    const i = {};
    return Wt(i, t.style || {}, t),
    Object.assign(i, function({transformTemplate: t}, e, n) {
        return O.useMemo( () => {
            const i = {
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            };
            return $t(i, e, {
                enableHardwareAcceleration: !n
            }, t),
            Object.assign({}, i.vars, i.style)
        }
        , [e])
    }(t, e, n)),
    t.transformValues ? t.transformValues(i) : i
}
function Ht(t, e, n) {
    const i = {}
      , r = zt(t, e, n);
    return t.drag && !1 !== t.dragListener && (i.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")),
    void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0),
    i.style = r,
    i
}
const Yt = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Xt(t) {
    return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Yt.has(t)
}
let qt = t => !Xt(t);
try {
    (Gt = require("@emotion/is-prop-valid").default) && (qt = t => t.startsWith("on") ? !Xt(t) : Gt(t))
} catch (Ns) {}
var Gt;
function Zt(t, e, n) {
    return "string" == typeof t ? t : Bt.transform(e + n * t)
}
const Kt = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , Jt = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function Qt(t, {attrX: e, attrY: n, attrScale: i, originX: r, originY: o, pathLength: s, pathSpacing: a=1, pathOffset: l=0, ...u}, c, h, d) {
    if ($t(t, u, c, d),
    h)
        return void (t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
    t.attrs = t.style,
    t.style = {};
    const {attrs: p, style: m, dimensions: f} = t;
    p.transform && (f && (m.transform = p.transform),
    delete p.transform),
    f && (void 0 !== r || void 0 !== o || m.transform) && (m.transformOrigin = function(t, e, n) {
        return `${Zt(e, t.x, t.width)} ${Zt(n, t.y, t.height)}`
    }(f, void 0 !== r ? r : .5, void 0 !== o ? o : .5)),
    void 0 !== e && (p.x = e),
    void 0 !== n && (p.y = n),
    void 0 !== i && (p.scale = i),
    void 0 !== s && function(t, e, n=1, i=0, r=!0) {
        t.pathLength = 1;
        const o = r ? Kt : Jt;
        t[o.offset] = Bt.transform(-i);
        const s = Bt.transform(e)
          , a = Bt.transform(n);
        t[o.array] = `${s} ${a}`
    }(p, s, a, l, !1)
}
const te = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
    attrs: {}
})
  , ee = t => "string" == typeof t && "svg" === t.toLowerCase();
function ne(t, e, n, i) {
    const r = O.useMemo( () => {
        const n = {
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {},
            attrs: {}
        };
        return Qt(n, e, {
            enableHardwareAcceleration: !1
        }, ee(i), t.transformTemplate),
        {
            ...n.attrs,
            style: {
                ...n.style
            }
        }
    }
    , [e]);
    if (t.style) {
        const e = {};
        Wt(e, t.style, t),
        r.style = {
            ...e,
            ...r.style
        }
    }
    return r
}
function ie(t=!1) {
    return (e, n, i, {latestValues: r}, o) => {
        const s = (ht(e) ? ne : Ht)(n, r, o, e)
          , a = function(t, e, n) {
            const i = {};
            for (const r in t)
                "values" === r && "object" == typeof t.values || (qt(r) || !0 === n && Xt(r) || !e && !Xt(r) || t.draggable && r.startsWith("onDrag")) && (i[r] = t[r]);
            return i
        }(n, "string" == typeof e, t)
          , l = {
            ...a,
            ...s,
            ref: i
        }
          , {children: u} = n
          , c = O.useMemo( () => gt(u) ? u.get() : u, [u]);
        return O.createElement(e, {
            ...l,
            children: c
        })
    }
}
function re(t, {style: e, vars: n}, i, r) {
    Object.assign(t.style, e, r && r.getProjectionStyles(i));
    for (const o in n)
        t.style.setProperty(o, n[o])
}
const oe = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function se(t, e, n, i) {
    re(t, e, void 0, i);
    for (const r in e.attrs)
        t.setAttribute(oe.has(r) ? r : H(r), e.attrs[r])
}
function ae(t, e) {
    const {style: n} = t
      , i = {};
    for (const r in n)
        (gt(n[r]) || e.style && gt(e.style[r]) || ft(r, t)) && (i[r] = n[r]);
    return i
}
function le(t, e) {
    const n = ae(t, e);
    for (const i in t)
        if (gt(t[i]) || gt(e[i])) {
            n[-1 !== pt.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]
        }
    return n
}
function ue(t, e, n, i={}, r={}) {
    return "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)),
    "string" == typeof e && (e = t.variants && t.variants[e]),
    "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)),
    e
}
function ce(t) {
    const e = O.useRef(null);
    return null === e.current && (e.current = t()),
    e.current
}
const he = t => Array.isArray(t)
  , de = t => he(t) ? t[t.length - 1] || 0 : t;
function pe(t) {
    const e = gt(t) ? t.get() : t;
    return n = e,
    Boolean(n && "object" == typeof n && n.mix && n.toValue) ? e.toValue() : e;
    var n
}
const me = t => (e, n) => {
    const i = O.useContext(N)
      , r = O.useContext($)
      , o = () => function({scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n}, i, r, o) {
        const s = {
            latestValues: fe(i, r, o, t),
            renderState: e()
        };
        return n && (s.mount = t => n(i, t, s)),
        s
    }(t, e, i, r);
    return n ? o() : ce(o)
}
;
function fe(t, e, n, i) {
    const r = {}
      , o = i(t, {});
    for (const d in o)
        r[d] = pe(o[d]);
    let {initial: s, animate: a} = t;
    const l = J(t)
      , u = Q(t);
    e && u && !l && !1 !== t.inherit && (void 0 === s && (s = e.initial),
    void 0 === a && (a = e.animate));
    let c = !!n && !1 === n.initial;
    c = c || !1 === s;
    const h = c ? a : s;
    if (h && "boolean" != typeof h && !G(h)) {
        (Array.isArray(h) ? h : [h]).forEach(e => {
            const n = ue(t, e);
            if (!n)
                return;
            const {transitionEnd: i, transition: o, ...s} = n;
            for (const t in s) {
                let e = s[t];
                if (Array.isArray(e)) {
                    e = e[c ? e.length - 1 : 0]
                }
                null !== e && (r[t] = e)
            }
            for (const t in i)
                r[t] = i[t]
        }
        )
    }
    return r
}
const ge = t => t;
class ye {
    constructor() {
        this.order = [],
        this.scheduled = new Set
    }
    add(t) {
        if (!this.scheduled.has(t))
            return this.scheduled.add(t),
            this.order.push(t),
            !0
    }
    remove(t) {
        const e = this.order.indexOf(t);
        -1 !== e && (this.order.splice(e, 1),
        this.scheduled.delete(t))
    }
    clear() {
        this.order.length = 0,
        this.scheduled.clear()
    }
}
const ve = ["prepare", "read", "update", "preRender", "render", "postRender"];
const {schedule: xe, cancel: be, state: Pe, steps: we} = function(t, e) {
    let n = !1
      , i = !0;
    const r = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , o = ve.reduce( (t, e) => (t[e] = function(t) {
        let e = new ye
          , n = new ye
          , i = 0
          , r = !1
          , o = !1;
        const s = new WeakSet
          , a = {
            schedule: (t, o=!1, a=!1) => {
                const l = a && r
                  , u = l ? e : n;
                return o && s.add(t),
                u.add(t) && l && r && (i = e.order.length),
                t
            }
            ,
            cancel: t => {
                n.remove(t),
                s.delete(t)
            }
            ,
            process: l => {
                if (r)
                    o = !0;
                else {
                    if (r = !0,
                    [e,n] = [n, e],
                    n.clear(),
                    i = e.order.length,
                    i)
                        for (let n = 0; n < i; n++) {
                            const i = e.order[n];
                            i(l),
                            s.has(i) && (a.schedule(i),
                            t())
                        }
                    r = !1,
                    o && (o = !1,
                    a.process(l))
                }
            }
        };
        return a
    }( () => n = !0),
    t), {})
      , s = t => o[t].process(r)
      , a = () => {
        const o = performance.now();
        n = !1,
        r.delta = i ? 1e3 / 60 : Math.max(Math.min(o - r.timestamp, 40), 1),
        r.timestamp = o,
        r.isProcessing = !0,
        ve.forEach(s),
        r.isProcessing = !1,
        n && e && (i = !1,
        t(a))
    }
    ;
    return {
        schedule: ve.reduce( (e, s) => {
            const l = o[s];
            return e[s] = (e, o=!1, s=!1) => (n || (n = !0,
            i = !0,
            r.isProcessing || t(a)),
            l.schedule(e, o, s)),
            e
        }
        , {}),
        cancel: t => ve.forEach(e => o[e].cancel(t)),
        state: r,
        steps: o
    }
}("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : ge, !0)
  , Se = {
    useVisualState: me({
        scrapeMotionValuesFromProps: le,
        createRenderState: te,
        onMount: (t, e, {renderState: n, latestValues: i}) => {
            xe.read( () => {
                try {
                    n.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                } catch (t) {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            xe.render( () => {
                Qt(n, i, {
                    enableHardwareAcceleration: !1
                }, ee(e.tagName), t.transformTemplate),
                se(e, n)
            }
            )
        }
    })
}
  , Te = {
    useVisualState: me({
        scrapeMotionValuesFromProps: ae,
        createRenderState: _t
    })
};
function Ee(t, e, n, i={
    passive: !0
}) {
    return t.addEventListener(e, n, i),
    () => t.removeEventListener(e, n)
}
const Me = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;
function Ce(t, e="page") {
    return {
        point: {
            x: t[e + "X"],
            y: t[e + "Y"]
        }
    }
}
function Ae(t, e, n, i) {
    return Ee(t, e, (t => e => Me(e) && t(e, Ce(e)))(n), i)
}
const Ve = (t, e) => n => e(t(n))
  , Re = (...t) => t.reduce(Ve);
function ke(t) {
    let e = null;
    return () => {
        const n = () => {
            e = null
        }
        ;
        return null === e && (e = t,
        n)
    }
}
const De = ke("dragHorizontal")
  , Le = ke("dragVertical");
function je(t) {
    let e = !1;
    if ("y" === t)
        e = Le();
    else if ("x" === t)
        e = De();
    else {
        const t = De()
          , n = Le();
        t && n ? e = () => {
            t(),
            n()
        }
        : (t && t(),
        n && n())
    }
    return e
}
function Be() {
    const t = je(!0);
    return !t || (t(),
    !1)
}
class Fe {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
function Oe(t, e) {
    const n = "pointer" + (e ? "enter" : "leave")
      , i = "onHover" + (e ? "Start" : "End");
    return Ae(t.current, n, (n, r) => {
        if ("touch" === n.pointerType || Be())
            return;
        const o = t.getProps();
        t.animationState && o.whileHover && t.animationState.setActive("whileHover", e),
        o[i] && xe.update( () => o[i](n, r))
    }
    , {
        passive: !t.getProps()[i]
    })
}
const Ie = (t, e) => !!e && (t === e || Ie(t, e.parentElement));
function Ue(t, e) {
    if (!e)
        return;
    const n = new PointerEvent("pointer" + t);
    e(n, Ce(n))
}
const Ne = new WeakMap
  , $e = new WeakMap
  , _e = t => {
    const e = Ne.get(t.target);
    e && e(t)
}
  , We = t => {
    t.forEach(_e)
}
;
function ze(t, e, n) {
    const i = function({root: t, ...e}) {
        const n = t || document;
        $e.has(n) || $e.set(n, {});
        const i = $e.get(n)
          , r = JSON.stringify(e);
        return i[r] || (i[r] = new IntersectionObserver(We,{
            root: t,
            ...e
        })),
        i[r]
    }(e);
    return Ne.set(t, n),
    i.observe(t),
    () => {
        Ne.delete(t),
        i.unobserve(t)
    }
}
const He = {
    some: 0,
    all: 1
};
const Ye = {
    inView: {
        Feature: class extends Fe {
            constructor() {
                super(...arguments),
                this.hasEnteredView = !1,
                this.isInView = !1
            }
            startObserver() {
                this.unmount();
                const {viewport: t={}} = this.node.getProps()
                  , {root: e, margin: n, amount: i="some", once: r} = t
                  , o = {
                    root: e ? e.current : void 0,
                    rootMargin: n,
                    threshold: "number" == typeof i ? i : He[i]
                };
                return ze(this.node.current, o, t => {
                    const {isIntersecting: e} = t;
                    if (this.isInView === e)
                        return;
                    if (this.isInView = e,
                    r && !e && this.hasEnteredView)
                        return;
                    e && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", e);
                    const {onViewportEnter: n, onViewportLeave: i} = this.node.getProps()
                      , o = e ? n : i;
                    o && o(t)
                }
                )
            }
            mount() {
                this.startObserver()
            }
            update() {
                if ("undefined" == typeof IntersectionObserver)
                    return;
                const {props: t, prevProps: e} = this.node;
                ["amount", "margin", "root"].some(function({viewport: t={}}, {viewport: e={}}={}) {
                    return n => t[n] !== e[n]
                }(t, e)) && this.startObserver()
            }
            unmount() {}
        }
    },
    tap: {
        Feature: class extends Fe {
            constructor() {
                super(...arguments),
                this.removeStartListeners = ge,
                this.removeEndListeners = ge,
                this.removeAccessibleListeners = ge,
                this.startPointerPress = (t, e) => {
                    if (this.isPressing)
                        return;
                    this.removeEndListeners();
                    const n = this.node.getProps()
                      , i = Ae(window, "pointerup", (t, e) => {
                        if (!this.checkPressEnd())
                            return;
                        const {onTap: n, onTapCancel: i, globalTapTarget: r} = this.node.getProps();
                        xe.update( () => {
                            r || Ie(this.node.current, t.target) ? n && n(t, e) : i && i(t, e)
                        }
                        )
                    }
                    , {
                        passive: !(n.onTap || n.onPointerUp)
                    })
                      , r = Ae(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                        passive: !(n.onTapCancel || n.onPointerCancel)
                    });
                    this.removeEndListeners = Re(i, r),
                    this.startPress(t, e)
                }
                ,
                this.startAccessiblePress = () => {
                    const t = Ee(this.node.current, "keydown", t => {
                        if ("Enter" !== t.key || this.isPressing)
                            return;
                        this.removeEndListeners(),
                        this.removeEndListeners = Ee(this.node.current, "keyup", t => {
                            "Enter" === t.key && this.checkPressEnd() && Ue("up", (t, e) => {
                                const {onTap: n} = this.node.getProps();
                                n && xe.update( () => n(t, e))
                            }
                            )
                        }
                        ),
                        Ue("down", (t, e) => {
                            this.startPress(t, e)
                        }
                        )
                    }
                    )
                      , e = Ee(this.node.current, "blur", () => {
                        this.isPressing && Ue("cancel", (t, e) => this.cancelPress(t, e))
                    }
                    );
                    this.removeAccessibleListeners = Re(t, e)
                }
            }
            startPress(t, e) {
                this.isPressing = !0;
                const {onTapStart: n, whileTap: i} = this.node.getProps();
                i && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
                n && xe.update( () => n(t, e))
            }
            checkPressEnd() {
                this.removeEndListeners(),
                this.isPressing = !1;
                return this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
                !Be()
            }
            cancelPress(t, e) {
                if (!this.checkPressEnd())
                    return;
                const {onTapCancel: n} = this.node.getProps();
                n && xe.update( () => n(t, e))
            }
            mount() {
                const t = this.node.getProps()
                  , e = Ae(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
                    passive: !(t.onTapStart || t.onPointerStart)
                })
                  , n = Ee(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = Re(e, n)
            }
            unmount() {
                this.removeStartListeners(),
                this.removeEndListeners(),
                this.removeAccessibleListeners()
            }
        }
    },
    focus: {
        Feature: class extends Fe {
            constructor() {
                super(...arguments),
                this.isActive = !1
            }
            onFocus() {
                let t = !1;
                try {
                    t = this.node.current.matches(":focus-visible")
                } catch (e) {
                    t = !0
                }
                t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                this.isActive = !0)
            }
            onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                this.isActive = !1)
            }
            mount() {
                this.unmount = Re(Ee(this.node.current, "focus", () => this.onFocus()), Ee(this.node.current, "blur", () => this.onBlur()))
            }
            unmount() {}
        }
    },
    hover: {
        Feature: class extends Fe {
            mount() {
                this.unmount = Re(Oe(this.node, !0), Oe(this.node, !1))
            }
            unmount() {}
        }
    }
};
function Xe(t, e) {
    if (!Array.isArray(e))
        return !1;
    const n = e.length;
    if (n !== t.length)
        return !1;
    for (let i = 0; i < n; i++)
        if (e[i] !== t[i])
            return !1;
    return !0
}
function qe(t, e, n) {
    const i = t.getProps();
    return ue(i, e, void 0 !== n ? n : i.custom, function(t) {
        const e = {};
        return t.values.forEach( (t, n) => e[n] = t.get()),
        e
    }(t), function(t) {
        const e = {};
        return t.values.forEach( (t, n) => e[n] = t.getVelocity()),
        e
    }(t))
}
let Ge = ge;
const Ze = t => 1e3 * t
  , Ke = t => t / 1e3
  , Je = !1
  , Qe = t => Array.isArray(t) && "number" == typeof t[0];
function tn(t) {
    return Boolean(!t || "string" == typeof t && nn[t] || Qe(t) || Array.isArray(t) && t.every(tn))
}
const en = ([t,e,n,i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`
  , nn = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: en([0, .65, .55, 1]),
    circOut: en([.55, 0, 1, .45]),
    backIn: en([.31, .01, .66, -.59]),
    backOut: en([.33, 1.53, .69, .99])
};
function rn(t) {
    if (t)
        return Qe(t) ? en(t) : Array.isArray(t) ? t.map(rn) : nn[t]
}
const on = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
function sn(t, e, n, i) {
    if (t === e && n === i)
        return ge;
    const r = e => function(t, e, n, i, r) {
        let o, s, a = 0;
        do {
            s = e + (n - e) / 2,
            o = on(s, i, r) - t,
            o > 0 ? n = s : e = s
        } while (Math.abs(o) > 1e-7 && ++a < 12);
        return s
    }(e, 0, 1, t, n);
    return t => 0 === t || 1 === t ? t : on(r(t), e, i)
}
const an = sn(.42, 0, 1, 1)
  , ln = sn(0, 0, .58, 1)
  , un = sn(.42, 0, .58, 1)
  , cn = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
  , hn = t => e => 1 - t(1 - e)
  , dn = t => 1 - Math.sin(Math.acos(t))
  , pn = hn(dn)
  , mn = cn(dn)
  , fn = sn(.33, 1.53, .69, .99)
  , gn = hn(fn)
  , yn = cn(gn)
  , vn = {
    linear: ge,
    easeIn: an,
    easeInOut: un,
    easeOut: ln,
    circIn: dn,
    circInOut: mn,
    circOut: pn,
    backIn: gn,
    backInOut: yn,
    backOut: fn,
    anticipate: t => (t *= 2) < 1 ? .5 * gn(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
}
  , xn = t => {
    if (Array.isArray(t)) {
        Ge(4 === t.length);
        const [e,n,i,r] = t;
        return sn(e, n, i, r)
    }
    return "string" == typeof t ? vn[t] : t
}
  , bn = (t, e) => n => Boolean(kt(n) && Rt.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e))
  , Pn = (t, e, n) => i => {
    if (!kt(i))
        return i;
    const [r,o,s,a] = i.match(At);
    return {
        [t]: parseFloat(r),
        [e]: parseFloat(o),
        [n]: parseFloat(s),
        alpha: void 0 !== a ? parseFloat(a) : 1
    }
}
  , wn = {
    ...Tt,
    transform: t => Math.round((t => St(0, 255, t))(t))
}
  , Sn = {
    test: bn("rgb", "red"),
    parse: Pn("red", "green", "blue"),
    transform: ({red: t, green: e, blue: n, alpha: i=1}) => "rgba(" + wn.transform(t) + ", " + wn.transform(e) + ", " + wn.transform(n) + ", " + Ct(Et.transform(i)) + ")"
};
const Tn = {
    test: bn("#"),
    parse: function(t) {
        let e = ""
          , n = ""
          , i = ""
          , r = "";
        return t.length > 5 ? (e = t.substring(1, 3),
        n = t.substring(3, 5),
        i = t.substring(5, 7),
        r = t.substring(7, 9)) : (e = t.substring(1, 2),
        n = t.substring(2, 3),
        i = t.substring(3, 4),
        r = t.substring(4, 5),
        e += e,
        n += n,
        i += i,
        r += r),
        {
            red: parseInt(e, 16),
            green: parseInt(n, 16),
            blue: parseInt(i, 16),
            alpha: r ? parseInt(r, 16) / 255 : 1
        }
    },
    transform: Sn.transform
}
  , En = {
    test: bn("hsl", "hue"),
    parse: Pn("hue", "saturation", "lightness"),
    transform: ({hue: t, saturation: e, lightness: n, alpha: i=1}) => "hsla(" + Math.round(t) + ", " + jt.transform(Ct(e)) + ", " + jt.transform(Ct(n)) + ", " + Ct(Et.transform(i)) + ")"
}
  , Mn = {
    test: t => Sn.test(t) || Tn.test(t) || En.test(t),
    parse: t => Sn.test(t) ? Sn.parse(t) : En.test(t) ? En.parse(t) : Tn.parse(t),
    transform: t => kt(t) ? t : t.hasOwnProperty("red") ? Sn.transform(t) : En.transform(t)
}
  , Cn = (t, e, n) => -n * t + n * e + t;
function An(t, e, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
}
const Vn = (t, e, n) => {
    const i = t * t;
    return Math.sqrt(Math.max(0, n * (e * e - i) + i))
}
  , Rn = [Tn, Sn, En];
function kn(t) {
    const e = (n = t,
    Rn.find(t => t.test(n)));
    var n;
    let i = e.parse(t);
    return e === En && (i = function({hue: t, saturation: e, lightness: n, alpha: i}) {
        t /= 360,
        n /= 100;
        let r = 0
          , o = 0
          , s = 0;
        if (e /= 100) {
            const i = n < .5 ? n * (1 + e) : n + e - n * e
              , a = 2 * n - i;
            r = An(a, i, t + 1 / 3),
            o = An(a, i, t),
            s = An(a, i, t - 1 / 3)
        } else
            r = o = s = n;
        return {
            red: Math.round(255 * r),
            green: Math.round(255 * o),
            blue: Math.round(255 * s),
            alpha: i
        }
    }(i)),
    i
}
const Dn = (t, e) => {
    const n = kn(t)
      , i = kn(e)
      , r = {
        ...n
    };
    return t => (r.red = Vn(n.red, i.red, t),
    r.green = Vn(n.green, i.green, t),
    r.blue = Vn(n.blue, i.blue, t),
    r.alpha = Cn(n.alpha, i.alpha, t),
    Sn.transform(r))
}
;
const Ln = {
    regex: /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
    countKey: "Vars",
    token: "${v}",
    parse: ge
}
  , jn = {
    regex: Vt,
    countKey: "Colors",
    token: "${c}",
    parse: Mn.parse
}
  , Bn = {
    regex: At,
    countKey: "Numbers",
    token: "${n}",
    parse: Tt.parse
};
function Fn(t, {regex: e, countKey: n, token: i, parse: r}) {
    const o = t.tokenised.match(e);
    o && (t["num" + n] = o.length,
    t.tokenised = t.tokenised.replace(e, i),
    t.values.push(...o.map(r)))
}
function On(t) {
    const e = t.toString()
      , n = {
        value: e,
        tokenised: e,
        values: [],
        numVars: 0,
        numColors: 0,
        numNumbers: 0
    };
    return n.value.includes("var(--") && Fn(n, Ln),
    Fn(n, jn),
    Fn(n, Bn),
    n
}
function In(t) {
    return On(t).values
}
function Un(t) {
    const {values: e, numColors: n, numVars: i, tokenised: r} = On(t)
      , o = e.length;
    return t => {
        let e = r;
        for (let r = 0; r < o; r++)
            e = r < i ? e.replace(Ln.token, t[r]) : r < i + n ? e.replace(jn.token, Mn.transform(t[r])) : e.replace(Bn.token, Ct(t[r]));
        return e
    }
}
const Nn = t => "number" == typeof t ? 0 : t;
const $n = {
    test: function(t) {
        var e, n;
        return isNaN(t) && kt(t) && ((null === (e = t.match(At)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (n = t.match(Vt)) || void 0 === n ? void 0 : n.length) || 0) > 0
    },
    parse: In,
    createTransformer: Un,
    getAnimatableNone: function(t) {
        const e = In(t);
        return Un(t)(e.map(Nn))
    }
}
  , _n = (t, e) => n => `${n > 0 ? e : t}`;
function Wn(t, e) {
    return "number" == typeof t ? n => Cn(t, e, n) : Mn.test(t) ? Dn(t, e) : t.startsWith("var(") ? _n(t, e) : Yn(t, e)
}
const zn = (t, e) => {
    const n = [...t]
      , i = n.length
      , r = t.map( (t, n) => Wn(t, e[n]));
    return t => {
        for (let e = 0; e < i; e++)
            n[e] = r[e](t);
        return n
    }
}
  , Hn = (t, e) => {
    const n = {
        ...t,
        ...e
    }
      , i = {};
    for (const r in n)
        void 0 !== t[r] && void 0 !== e[r] && (i[r] = Wn(t[r], e[r]));
    return t => {
        for (const e in i)
            n[e] = i[e](t);
        return n
    }
}
  , Yn = (t, e) => {
    const n = $n.createTransformer(e)
      , i = On(t)
      , r = On(e);
    return i.numVars === r.numVars && i.numColors === r.numColors && i.numNumbers >= r.numNumbers ? Re(zn(i.values, r.values), n) : _n(t, e)
}
  , Xn = (t, e, n) => {
    const i = e - t;
    return 0 === i ? 1 : (n - t) / i
}
  , qn = (t, e) => n => Cn(t, e, n);
function Gn(t, e, n) {
    const i = []
      , r = n || ("number" == typeof (o = t[0]) ? qn : "string" == typeof o ? Mn.test(o) ? Dn : Yn : Array.isArray(o) ? zn : "object" == typeof o ? Hn : qn);
    var o;
    const s = t.length - 1;
    for (let a = 0; a < s; a++) {
        let n = r(t[a], t[a + 1]);
        if (e) {
            const t = Array.isArray(e) ? e[a] || ge : e;
            n = Re(t, n)
        }
        i.push(n)
    }
    return i
}
function Zn(t, e, {clamp: n=!0, ease: i, mixer: r}={}) {
    const o = t.length;
    if (Ge(o === e.length),
    1 === o)
        return () => e[0];
    t[0] > t[o - 1] && (t = [...t].reverse(),
    e = [...e].reverse());
    const s = Gn(e, i, r)
      , a = s.length
      , l = e => {
        let n = 0;
        if (a > 1)
            for (; n < t.length - 2 && !(e < t[n + 1]); n++)
                ;
        const i = Xn(t[n], t[n + 1], e);
        return s[n](i)
    }
    ;
    return n ? e => l(St(t[0], t[o - 1], e)) : l
}
function Kn(t) {
    const e = [0];
    return function(t, e) {
        const n = t[t.length - 1];
        for (let i = 1; i <= e; i++) {
            const r = Xn(0, e, i);
            t.push(Cn(n, 1, r))
        }
    }(e, t.length - 1),
    e
}
function Jn({duration: t=300, keyframes: e, times: n, ease: i="easeInOut"}) {
    const r = (t => Array.isArray(t) && "number" != typeof t[0])(i) ? i.map(xn) : xn(i)
      , o = {
        done: !1,
        value: e[0]
    }
      , s = function(t, e) {
        return t.map(t => t * e)
    }(n && n.length === e.length ? n : Kn(e), t)
      , a = Zn(s, e, {
        ease: Array.isArray(r) ? r : (l = e,
        u = r,
        l.map( () => u || un).splice(0, l.length - 1))
    });
    var l, u;
    return {
        calculatedDuration: t,
        next: e => (o.value = a(e),
        o.done = e >= t,
        o)
    }
}
function Qn(t, e) {
    return e ? t * (1e3 / e) : 0
}
function ti(t, e, n) {
    const i = Math.max(e - 5, 0);
    return Qn(n - t(i), e - i)
}
const ei = .001;
function ni({duration: t=800, bounce: e=.25, velocity: n=0, mass: i=1}) {
    let r, o, s = 1 - e;
    s = St(.05, 1, s),
    t = St(.01, 10, Ke(t)),
    s < 1 ? (r = e => {
        const i = e * s
          , r = i * t
          , o = i - n
          , a = ri(e, s)
          , l = Math.exp(-r);
        return ei - o / a * l
    }
    ,
    o = e => {
        const i = e * s * t
          , o = i * n + n
          , a = Math.pow(s, 2) * Math.pow(e, 2) * t
          , l = Math.exp(-i)
          , u = ri(Math.pow(e, 2), s);
        return (-r(e) + ei > 0 ? -1 : 1) * ((o - a) * l) / u
    }
    ) : (r = e => Math.exp(-e * t) * ((e - n) * t + 1) - .001,
    o = e => Math.exp(-e * t) * (t * t * (n - e)));
    const a = function(t, e, n) {
        let i = n;
        for (let r = 1; r < ii; r++)
            i -= t(i) / e(i);
        return i
    }(r, o, 5 / t);
    if (t = Ze(t),
    isNaN(a))
        return {
            stiffness: 100,
            damping: 10,
            duration: t
        };
    {
        const e = Math.pow(a, 2) * i;
        return {
            stiffness: e,
            damping: 2 * s * Math.sqrt(i * e),
            duration: t
        }
    }
}
const ii = 12;
function ri(t, e) {
    return t * Math.sqrt(1 - e * e)
}
const oi = ["duration", "bounce"]
  , si = ["stiffness", "damping", "mass"];
function ai(t, e) {
    return e.some(e => void 0 !== t[e])
}
function li({keyframes: t, restDelta: e, restSpeed: n, ...i}) {
    const r = t[0]
      , o = t[t.length - 1]
      , s = {
        done: !1,
        value: r
    }
      , {stiffness: a, damping: l, mass: u, duration: c, velocity: h, isResolvedFromDuration: d} = function(t) {
        let e = {
            velocity: 0,
            stiffness: 100,
            damping: 10,
            mass: 1,
            isResolvedFromDuration: !1,
            ...t
        };
        if (!ai(t, si) && ai(t, oi)) {
            const n = ni(t);
            e = {
                ...e,
                ...n,
                mass: 1
            },
            e.isResolvedFromDuration = !0
        }
        return e
    }({
        ...i,
        velocity: -Ke(i.velocity || 0)
    })
      , p = h || 0
      , m = l / (2 * Math.sqrt(a * u))
      , f = o - r
      , g = Ke(Math.sqrt(a / u))
      , y = Math.abs(f) < 5;
    let v;
    if (n || (n = y ? .01 : 2),
    e || (e = y ? .005 : .5),
    m < 1) {
        const t = ri(g, m);
        v = e => {
            const n = Math.exp(-m * g * e);
            return o - n * ((p + m * g * f) / t * Math.sin(t * e) + f * Math.cos(t * e))
        }
    } else if (1 === m)
        v = t => o - Math.exp(-g * t) * (f + (p + g * f) * t);
    else {
        const t = g * Math.sqrt(m * m - 1);
        v = e => {
            const n = Math.exp(-m * g * e)
              , i = Math.min(t * e, 300);
            return o - n * ((p + m * g * f) * Math.sinh(i) + t * f * Math.cosh(i)) / t
        }
    }
    return {
        calculatedDuration: d && c || null,
        next: t => {
            const i = v(t);
            if (d)
                s.done = t >= c;
            else {
                let r = p;
                0 !== t && (r = m < 1 ? ti(v, t, i) : 0);
                const a = Math.abs(r) <= n
                  , l = Math.abs(o - i) <= e;
                s.done = a && l
            }
            return s.value = s.done ? o : i,
            s
        }
    }
}
function ui({keyframes: t, velocity: e=0, power: n=.8, timeConstant: i=325, bounceDamping: r=10, bounceStiffness: o=500, modifyTarget: s, min: a, max: l, restDelta: u=.5, restSpeed: c}) {
    const h = t[0]
      , d = {
        done: !1,
        value: h
    }
      , p = t => void 0 === a ? l : void 0 === l || Math.abs(a - t) < Math.abs(l - t) ? a : l;
    let m = n * e;
    const f = h + m
      , g = void 0 === s ? f : s(f);
    g !== f && (m = g - h);
    const y = t => -m * Math.exp(-t / i)
      , v = t => g + y(t)
      , x = t => {
        const e = y(t)
          , n = v(t);
        d.done = Math.abs(e) <= u,
        d.value = d.done ? g : n
    }
    ;
    let b, P;
    const w = t => {
        var e;
        (e = d.value,
        void 0 !== a && e < a || void 0 !== l && e > l) && (b = t,
        P = li({
            keyframes: [d.value, p(d.value)],
            velocity: ti(v, t, d.value),
            damping: r,
            stiffness: o,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return w(0),
    {
        calculatedDuration: null,
        next: t => {
            let e = !1;
            return P || void 0 !== b || (e = !0,
            x(t),
            w(t)),
            void 0 !== b && t > b ? P.next(t - b) : (!e && x(t),
            d)
        }
    }
}
const ci = t => {
    const e = ({timestamp: e}) => t(e);
    return {
        start: () => xe.update(e, !0),
        stop: () => be(e),
        now: () => Pe.isProcessing ? Pe.timestamp : performance.now()
    }
}
;
function hi(t) {
    let e = 0;
    let n = t.next(e);
    for (; !n.done && e < 2e4; )
        e += 50,
        n = t.next(e);
    return e >= 2e4 ? 1 / 0 : e
}
const di = {
    decay: ui,
    inertia: ui,
    tween: Jn,
    keyframes: Jn,
    spring: li
};
function pi({autoplay: t=!0, delay: e=0, driver: n=ci, keyframes: i, type: r="keyframes", repeat: o=0, repeatDelay: s=0, repeatType: a="loop", onPlay: l, onStop: u, onComplete: c, onUpdate: h, ...d}) {
    let p, m, f = 1, g = !1;
    const y = () => {
        m = new Promise(t => {
            p = t
        }
        )
    }
    ;
    let v;
    y();
    const x = di[r] || Jn;
    let b;
    x !== Jn && "number" != typeof i[0] && (b = Zn([0, 100], i, {
        clamp: !1
    }),
    i = [0, 100]);
    const P = x({
        ...d,
        keyframes: i
    });
    let w;
    "mirror" === a && (w = x({
        ...d,
        keyframes: [...i].reverse(),
        velocity: -(d.velocity || 0)
    }));
    let S = "idle"
      , T = null
      , E = null
      , M = null;
    null === P.calculatedDuration && o && (P.calculatedDuration = hi(P));
    const {calculatedDuration: C} = P;
    let A = 1 / 0
      , V = 1 / 0;
    null !== C && (A = C + s,
    V = A * (o + 1) - s);
    let R = 0;
    const k = t => {
        if (null === E)
            return;
        f > 0 && (E = Math.min(E, t)),
        f < 0 && (E = Math.min(t - V / f, E)),
        R = null !== T ? T : Math.round(t - E) * f;
        const n = R - e * (f >= 0 ? 1 : -1)
          , r = f >= 0 ? n < 0 : n > V;
        R = Math.max(n, 0),
        "finished" === S && null === T && (R = V);
        let l = R
          , u = P;
        if (o) {
            const t = Math.min(R, V) / A;
            let e = Math.floor(t)
              , n = t % 1;
            !n && t >= 1 && (n = 1),
            1 === n && e--,
            e = Math.min(e, o + 1);
            Boolean(e % 2) && ("reverse" === a ? (n = 1 - n,
            s && (n -= s / A)) : "mirror" === a && (u = w)),
            l = St(0, 1, n) * A
        }
        const c = r ? {
            done: !1,
            value: i[0]
        } : u.next(l);
        b && (c.value = b(c.value));
        let {done: d} = c;
        r || null === C || (d = f >= 0 ? R >= V : R <= 0);
        const p = null === T && ("finished" === S || "running" === S && d);
        return h && h(c.value),
        p && j(),
        c
    }
      , D = () => {
        v && v.stop(),
        v = void 0
    }
      , L = () => {
        S = "idle",
        D(),
        p(),
        y(),
        E = M = null
    }
      , j = () => {
        S = "finished",
        c && c(),
        D(),
        p()
    }
      , B = () => {
        if (g)
            return;
        v || (v = n(k));
        const t = v.now();
        l && l(),
        null !== T ? E = t - T : E && "finished" !== S || (E = t),
        "finished" === S && y(),
        M = E,
        T = null,
        S = "running",
        v.start()
    }
    ;
    t && B();
    const F = {
        then: (t, e) => m.then(t, e),
        get time() {
            return Ke(R)
        },
        set time(t) {
            t = Ze(t),
            R = t,
            null === T && v && 0 !== f ? E = v.now() - t / f : T = t
        },
        get duration() {
            const t = null === P.calculatedDuration ? hi(P) : P.calculatedDuration;
            return Ke(t)
        },
        get speed() {
            return f
        },
        set speed(t) {
            t !== f && v && (f = t,
            F.time = Ke(R))
        },
        get state() {
            return S
        },
        play: B,
        pause: () => {
            S = "paused",
            T = R
        }
        ,
        stop: () => {
            g = !0,
            "idle" !== S && (S = "idle",
            u && u(),
            L())
        }
        ,
        cancel: () => {
            null !== M && k(M),
            L()
        }
        ,
        complete: () => {
            S = "finished"
        }
        ,
        sample: t => (E = 0,
        k(t))
    };
    return F
}
const mi = function(t) {
    let e;
    return () => (void 0 === e && (e = t()),
    e)
}( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , fi = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]);
function gi(t, e, {onUpdate: n, onComplete: i, ...r}) {
    if (!(mi() && fi.has(e) && !r.repeatDelay && "mirror" !== r.repeatType && 0 !== r.damping && "inertia" !== r.type))
        return !1;
    let o, s, a = !1, l = !1;
    const u = () => {
        s = new Promise(t => {
            o = t
        }
        )
    }
    ;
    u();
    let {keyframes: c, duration: h=300, ease: d, times: p} = r;
    if (( (t, e) => "spring" === e.type || "backgroundColor" === t || !tn(e.ease))(e, r)) {
        const t = pi({
            ...r,
            repeat: 0,
            delay: 0
        });
        let e = {
            done: !1,
            value: c[0]
        };
        const n = [];
        let i = 0;
        for (; !e.done && i < 2e4; )
            e = t.sample(i),
            n.push(e.value),
            i += 10;
        p = void 0,
        c = n,
        h = i - 10,
        d = "linear"
    }
    const m = function(t, e, n, {delay: i=0, duration: r, repeat: o=0, repeatType: s="loop", ease: a, times: l}={}) {
        const u = {
            [e]: n
        };
        l && (u.offset = l);
        const c = rn(a);
        return Array.isArray(c) && (u.easing = c),
        t.animate(u, {
            delay: i,
            duration: r,
            easing: Array.isArray(c) ? "linear" : c,
            fill: "both",
            iterations: o + 1,
            direction: "reverse" === s ? "alternate" : "normal"
        })
    }(t.owner.current, e, c, {
        ...r,
        duration: h,
        ease: d,
        times: p
    })
      , f = () => {
        l = !1,
        m.cancel()
    }
      , g = () => {
        l = !0,
        xe.update(f),
        o(),
        u()
    }
    ;
    m.onfinish = () => {
        l || (t.set(function(t, {repeat: e, repeatType: n="loop"}) {
            return t[e && "loop" !== n && e % 2 == 1 ? 0 : t.length - 1]
        }(c, r)),
        i && i(),
        g())
    }
    ;
    return {
        then: (t, e) => s.then(t, e),
        attachTimeline: t => (m.timeline = t,
        m.onfinish = null,
        ge),
        get time() {
            return Ke(m.currentTime || 0)
        },
        set time(t) {
            m.currentTime = Ze(t)
        },
        get speed() {
            return m.playbackRate
        },
        set speed(t) {
            m.playbackRate = t
        },
        get duration() {
            return Ke(h)
        },
        play: () => {
            a || (m.play(),
            be(f))
        }
        ,
        pause: () => m.pause(),
        stop: () => {
            if (a = !0,
            "idle" === m.playState)
                return;
            const {currentTime: e} = m;
            if (e) {
                const n = pi({
                    ...r,
                    autoplay: !1
                });
                t.setWithVelocity(n.sample(e - 10).value, n.sample(e).value, 10)
            }
            g()
        }
        ,
        complete: () => {
            l || m.finish()
        }
        ,
        cancel: g
    }
}
const yi = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , vi = {
    type: "keyframes",
    duration: .8
}
  , xi = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , bi = (t, {keyframes: e}) => e.length > 2 ? vi : mt.has(t) ? t.startsWith("scale") ? {
    type: "spring",
    stiffness: 550,
    damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
} : yi : xi
  , Pi = (t, e) => "zIndex" !== t && (!("number" != typeof e && !Array.isArray(e)) || !("string" != typeof e || !$n.test(e) && "0" !== e || e.startsWith("url(")))
  , wi = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Si(t) {
    const [e,n] = t.slice(0, -1).split("(");
    if ("drop-shadow" === e)
        return t;
    const [i] = n.match(At) || [];
    if (!i)
        return t;
    const r = n.replace(i, "");
    let o = wi.has(e) ? 1 : 0;
    return i !== n && (o *= 100),
    e + "(" + o + r + ")"
}
const Ti = /([a-z-]*)\(.*?\)/g
  , Ei = {
    ...$n,
    getAnimatableNone: t => {
        const e = t.match(Ti);
        return e ? e.map(Si).join(" ") : t
    }
}
  , Mi = {
    ...Nt,
    color: Mn,
    backgroundColor: Mn,
    outlineColor: Mn,
    fill: Mn,
    stroke: Mn,
    borderColor: Mn,
    borderTopColor: Mn,
    borderRightColor: Mn,
    borderBottomColor: Mn,
    borderLeftColor: Mn,
    filter: Ei,
    WebkitFilter: Ei
}
  , Ci = t => Mi[t];
function Ai(t, e) {
    let n = Ci(t);
    return n !== Ei && (n = $n),
    n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
}
const Vi = t => /^0[^.\s]+$/.test(t);
function Ri(t) {
    return "number" == typeof t ? 0 === t : null !== t ? "none" === t || "0" === t || Vi(t) : void 0
}
function ki(t, e) {
    return t[e] || t.default || t
}
const Di = !1
  , Li = (t, e, n, i={}) => r => {
    const o = ki(i, t) || {}
      , s = o.delay || i.delay || 0;
    let {elapsed: a=0} = i;
    a -= Ze(s);
    const l = function(t, e, n, i) {
        const r = Pi(e, n);
        let o;
        o = Array.isArray(n) ? [...n] : [null, n];
        const s = void 0 !== i.from ? i.from : t.get();
        let a;
        const l = [];
        for (let u = 0; u < o.length; u++)
            null === o[u] && (o[u] = 0 === u ? s : o[u - 1]),
            Ri(o[u]) && l.push(u),
            "string" == typeof o[u] && "none" !== o[u] && "0" !== o[u] && (a = o[u]);
        if (r && l.length && a)
            for (let u = 0; u < l.length; u++)
                o[l[u]] = Ai(e, a);
        return o
    }(e, t, n, o)
      , u = l[0]
      , c = l[l.length - 1]
      , h = Pi(t, u)
      , d = Pi(t, c);
    let p = {
        keyframes: l,
        velocity: e.getVelocity(),
        ease: "easeOut",
        ...o,
        delay: -a,
        onUpdate: t => {
            e.set(t),
            o.onUpdate && o.onUpdate(t)
        }
        ,
        onComplete: () => {
            r(),
            o.onComplete && o.onComplete()
        }
    };
    if (function({when: t, delay: e, delayChildren: n, staggerChildren: i, staggerDirection: r, repeat: o, repeatType: s, repeatDelay: a, from: l, elapsed: u, ...c}) {
        return !!Object.keys(c).length
    }(o) || (p = {
        ...p,
        ...bi(t, p)
    }),
    p.duration && (p.duration = Ze(p.duration)),
    p.repeatDelay && (p.repeatDelay = Ze(p.repeatDelay)),
    !h || !d || Je || !1 === o.type || Di)
        return function({keyframes: t, delay: e, onUpdate: n, onComplete: i}) {
            const r = () => (n && n(t[t.length - 1]),
            i && i(),
            {
                time: 0,
                speed: 1,
                duration: 0,
                play: ge,
                pause: ge,
                stop: ge,
                then: t => (t(),
                Promise.resolve()),
                cancel: ge,
                complete: ge
            });
            return e ? pi({
                keyframes: [0, 1],
                duration: 0,
                delay: e,
                onComplete: r
            }) : r()
        }(p);
    if (!i.isHandoff && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
        const n = gi(e, t, p);
        if (n)
            return n
    }
    return pi(p)
}
;
function ji(t) {
    return Boolean(gt(t) && t.add)
}
const Bi = t => /^\-?\d*\.?\d+$/.test(t);
function Fi(t, e) {
    -1 === t.indexOf(e) && t.push(e)
}
function Oi(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1)
}
class Ii {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Fi(this.subscriptions, t),
        () => Oi(this.subscriptions, t)
    }
    notify(t, e, n) {
        const i = this.subscriptions.length;
        if (i)
            if (1 === i)
                this.subscriptions[0](t, e, n);
            else
                for (let r = 0; r < i; r++) {
                    const i = this.subscriptions[r];
                    i && i(t, e, n)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
class Ui {
    constructor(t, e={}) {
        var n;
        this.version = "10.18.0",
        this.timeDelta = 0,
        this.lastUpdated = 0,
        this.canTrackVelocity = !1,
        this.events = {},
        this.updateAndNotify = (t, e=!0) => {
            this.prev = this.current,
            this.current = t;
            const {delta: n, timestamp: i} = Pe;
            this.lastUpdated !== i && (this.timeDelta = n,
            this.lastUpdated = i,
            xe.postRender(this.scheduleVelocityCheck)),
            this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
            e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.scheduleVelocityCheck = () => xe.postRender(this.velocityCheck),
        this.velocityCheck = ({timestamp: t}) => {
            t !== this.lastUpdated && (this.prev = this.current,
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }
        ,
        this.hasAnimated = !1,
        this.prev = this.current = t,
        this.canTrackVelocity = (n = this.current,
        !isNaN(parseFloat(n))),
        this.owner = e.owner
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, e) {
        this.events[t] || (this.events[t] = new Ii);
        const n = this.events[t].add(e);
        return "change" === t ? () => {
            n(),
            xe.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : n
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, e) {
        this.passiveEffect = t,
        this.stopPassiveEffect = e
    }
    set(t, e=!0) {
        e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
    }
    setWithVelocity(t, e, n) {
        this.set(e),
        this.prev = t,
        this.timeDelta = n
    }
    jump(t) {
        this.updateAndNotify(t),
        this.prev = t,
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? Qn(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(t) {
        return this.stop(),
        new Promise(e => {
            this.hasAnimated = !0,
            this.animation = t(e),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Ni(t, e) {
    return new Ui(t,e)
}
const $i = t => e => e.test(t)
  , _i = [Tt, Bt, jt, Lt, Ot, Ft, {
    test: t => "auto" === t,
    parse: t => t
}]
  , Wi = t => _i.find($i(t))
  , zi = [..._i, Mn, $n]
  , Hi = t => zi.find($i(t));
function Yi(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Ni(n))
}
function Xi(t, e) {
    if (!e)
        return;
    return (e[t] || e.default || e).from
}
function qi({protectedKeys: t, needsAnimating: e}, n) {
    const i = t.hasOwnProperty(n) && !0 !== e[n];
    return e[n] = !1,
    i
}
function Gi(t, e) {
    const n = t.get();
    if (!Array.isArray(e))
        return n !== e;
    for (let i = 0; i < e.length; i++)
        if (e[i] !== n)
            return !0
}
function Zi(t, e, {delay: n=0, transitionOverride: i, type: r}={}) {
    let {transition: o=t.getDefaultTransition(), transitionEnd: s, ...a} = t.makeTargetAnimatable(e);
    const l = t.getValue("willChange");
    i && (o = i);
    const u = []
      , c = r && t.animationState && t.animationState.getState()[r];
    for (const h in a) {
        const e = t.getValue(h)
          , i = a[h];
        if (!e || void 0 === i || c && qi(c, h))
            continue;
        const r = {
            delay: n,
            elapsed: 0,
            ...ki(o || {}, h)
        };
        if (window.HandoffAppearAnimations) {
            const n = t.getProps()[Y];
            if (n) {
                const t = window.HandoffAppearAnimations(n, h, e, xe);
                null !== t && (r.elapsed = t,
                r.isHandoff = !0)
            }
        }
        let s = !r.isHandoff && !Gi(e, i);
        if ("spring" === r.type && (e.getVelocity() || r.velocity) && (s = !1),
        e.animation && (s = !1),
        s)
            continue;
        e.start(Li(h, e, i, t.shouldReduceMotion && mt.has(h) ? {
            type: !1
        } : r));
        const d = e.animation;
        ji(l) && (l.add(h),
        d.then( () => l.remove(h))),
        u.push(d)
    }
    return s && Promise.all(u).then( () => {
        s && function(t, e) {
            const n = qe(t, e);
            let {transitionEnd: i={}, transition: r={}, ...o} = n ? t.makeTargetAnimatable(n, !1) : {};
            o = {
                ...o,
                ...i
            };
            for (const s in o)
                Yi(t, s, de(o[s]))
        }(t, s)
    }
    ),
    u
}
function Ki(t, e, n={}) {
    const i = qe(t, e, n.custom);
    let {transition: r=t.getDefaultTransition() || {}} = i || {};
    n.transitionOverride && (r = n.transitionOverride);
    const o = i ? () => Promise.all(Zi(t, i, n)) : () => Promise.resolve()
      , s = t.variantChildren && t.variantChildren.size ? (i=0) => {
        const {delayChildren: o=0, staggerChildren: s, staggerDirection: a} = r;
        return function(t, e, n=0, i=0, r=1, o) {
            const s = []
              , a = (t.variantChildren.size - 1) * i
              , l = 1 === r ? (t=0) => t * i : (t=0) => a - t * i;
            return Array.from(t.variantChildren).sort(Ji).forEach( (t, i) => {
                t.notify("AnimationStart", e),
                s.push(Ki(t, e, {
                    ...o,
                    delay: n + l(i)
                }).then( () => t.notify("AnimationComplete", e)))
            }
            ),
            Promise.all(s)
        }(t, e, o + i, s, a, n)
    }
    : () => Promise.resolve()
      , {when: a} = r;
    if (a) {
        const [t,e] = "beforeChildren" === a ? [o, s] : [s, o];
        return t().then( () => e())
    }
    return Promise.all([o(), s(n.delay)])
}
function Ji(t, e) {
    return t.sortNodePosition(e)
}
const Qi = [...Z].reverse()
  , tr = Z.length;
function er(t) {
    return e => Promise.all(e.map( ({animation: e, options: n}) => function(t, e, n={}) {
        let i;
        if (t.notify("AnimationStart", e),
        Array.isArray(e)) {
            const r = e.map(e => Ki(t, e, n));
            i = Promise.all(r)
        } else if ("string" == typeof e)
            i = Ki(t, e, n);
        else {
            const r = "function" == typeof e ? qe(t, e, n.custom) : e;
            i = Promise.all(Zi(t, r, n))
        }
        return i.then( () => t.notify("AnimationComplete", e))
    }(t, e, n)))
}
function nr(t) {
    let e = er(t);
    const n = {
        animate: rr(!0),
        whileInView: rr(),
        whileHover: rr(),
        whileTap: rr(),
        whileDrag: rr(),
        whileFocus: rr(),
        exit: rr()
    };
    let i = !0;
    const r = (e, n) => {
        const i = qe(t, n);
        if (i) {
            const {transition: t, transitionEnd: n, ...r} = i;
            e = {
                ...e,
                ...r,
                ...n
            }
        }
        return e
    }
    ;
    function o(o, s) {
        const a = t.getProps()
          , l = t.getVariantContext(!0) || {}
          , u = []
          , c = new Set;
        let h = {}
          , d = 1 / 0;
        for (let e = 0; e < tr; e++) {
            const p = Qi[e]
              , m = n[p]
              , f = void 0 !== a[p] ? a[p] : l[p]
              , g = q(f)
              , y = p === s ? m.isActive : null;
            !1 === y && (d = e);
            let v = f === l[p] && f !== a[p] && g;
            if (v && i && t.manuallyAnimateOnMount && (v = !1),
            m.protectedKeys = {
                ...h
            },
            !m.isActive && null === y || !f && !m.prevProp || G(f) || "boolean" == typeof f)
                continue;
            let x = ir(m.prevProp, f) || p === s && m.isActive && !v && g || e > d && g
              , b = !1;
            const P = Array.isArray(f) ? f : [f];
            let w = P.reduce(r, {});
            !1 === y && (w = {});
            const {prevResolvedValues: S={}} = m
              , T = {
                ...S,
                ...w
            }
              , E = t => {
                x = !0,
                c.has(t) && (b = !0,
                c.delete(t)),
                m.needsAnimating[t] = !0
            }
            ;
            for (const t in T) {
                const e = w[t]
                  , n = S[t];
                if (h.hasOwnProperty(t))
                    continue;
                let i = !1;
                i = he(e) && he(n) ? !Xe(e, n) : e !== n,
                i ? void 0 !== e ? E(t) : c.add(t) : void 0 !== e && c.has(t) ? E(t) : m.protectedKeys[t] = !0
            }
            m.prevProp = f,
            m.prevResolvedValues = w,
            m.isActive && (h = {
                ...h,
                ...w
            }),
            i && t.blockInitialAnimation && (x = !1),
            !x || v && !b || u.push(...P.map(t => ({
                animation: t,
                options: {
                    type: p,
                    ...o
                }
            })))
        }
        if (c.size) {
            const e = {};
            c.forEach(n => {
                const i = t.getBaseTarget(n);
                void 0 !== i && (e[n] = i)
            }
            ),
            u.push({
                animation: e
            })
        }
        let p = Boolean(u.length);
        return !i || !1 !== a.initial && a.initial !== a.animate || t.manuallyAnimateOnMount || (p = !1),
        i = !1,
        p ? e(u) : Promise.resolve()
    }
    return {
        animateChanges: o,
        setActive: function(e, i, r) {
            var s;
            if (n[e].isActive === i)
                return Promise.resolve();
            null === (s = t.variantChildren) || void 0 === s || s.forEach(t => {
                var n;
                return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, i)
            }
            ),
            n[e].isActive = i;
            const a = o(r, e);
            for (const t in n)
                n[t].protectedKeys = {};
            return a
        },
        setAnimateFunction: function(n) {
            e = n(t)
        },
        getState: () => n
    }
}
function ir(t, e) {
    return "string" == typeof e ? e !== t : !!Array.isArray(e) && !Xe(e, t)
}
function rr(t=!1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
let or = 0;
const sr = {
    animation: {
        Feature: class extends Fe {
            constructor(t) {
                super(t),
                t.animationState || (t.animationState = nr(t))
            }
            updateAnimationControlsSubscription() {
                const {animate: t} = this.node.getProps();
                this.unmount(),
                G(t) && (this.unmount = t.subscribe(this.node))
            }
            mount() {
                this.updateAnimationControlsSubscription()
            }
            update() {
                const {animate: t} = this.node.getProps()
                  , {animate: e} = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription()
            }
            unmount() {}
        }
    },
    exit: {
        Feature: class extends Fe {
            constructor() {
                super(...arguments),
                this.id = or++
            }
            update() {
                if (!this.node.presenceContext)
                    return;
                const {isPresent: t, onExitComplete: e, custom: n} = this.node.presenceContext
                  , {isPresent: i} = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === i)
                    return;
                const r = this.node.animationState.setActive("exit", !t, {
                    custom: null != n ? n : this.node.getProps().custom
                });
                e && !t && r.then( () => e(this.id))
            }
            mount() {
                const {register: t} = this.node.presenceContext || {};
                t && (this.unmount = t(this.id))
            }
            unmount() {}
        }
    }
}
  , ar = (t, e) => Math.abs(t - e);
class lr {
    constructor(t, e, {transformPagePoint: n, contextWindow: i, dragSnapToOrigin: r=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!this.lastMoveEvent || !this.lastMoveEventInfo)
                return;
            const t = hr(this.lastMoveEventInfo, this.history)
              , e = null !== this.startEvent
              , n = function(t, e) {
                const n = ar(t.x, e.x)
                  , i = ar(t.y, e.y);
                return Math.sqrt(n ** 2 + i ** 2)
            }(t.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!e && !n)
                return;
            const {point: i} = t
              , {timestamp: r} = Pe;
            this.history.push({
                ...i,
                timestamp: r
            });
            const {onStart: o, onMove: s} = this.handlers;
            e || (o && o(this.lastMoveEvent, t),
            this.startEvent = this.lastMoveEvent),
            s && s(this.lastMoveEvent, t)
        }
        ,
        this.handlePointerMove = (t, e) => {
            this.lastMoveEvent = t,
            this.lastMoveEventInfo = ur(e, this.transformPagePoint),
            xe.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (t, e) => {
            this.end();
            const {onEnd: n, onSessionEnd: i, resumeAnimation: r} = this.handlers;
            if (this.dragSnapToOrigin && r && r(),
            !this.lastMoveEvent || !this.lastMoveEventInfo)
                return;
            const o = hr("pointercancel" === t.type ? this.lastMoveEventInfo : ur(e, this.transformPagePoint), this.history);
            this.startEvent && n && n(t, o),
            i && i(t, o)
        }
        ,
        !Me(t))
            return;
        this.dragSnapToOrigin = r,
        this.handlers = e,
        this.transformPagePoint = n,
        this.contextWindow = i || window;
        const o = ur(Ce(t), this.transformPagePoint)
          , {point: s} = o
          , {timestamp: a} = Pe;
        this.history = [{
            ...s,
            timestamp: a
        }];
        const {onSessionStart: l} = e;
        l && l(t, hr(o, this.history)),
        this.removeListeners = Re(Ae(this.contextWindow, "pointermove", this.handlePointerMove), Ae(this.contextWindow, "pointerup", this.handlePointerUp), Ae(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        be(this.updatePoint)
    }
}
function ur(t, e) {
    return e ? {
        point: e(t.point)
    } : t
}
function cr(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}
function hr({point: t}, e) {
    return {
        point: t,
        delta: cr(t, pr(e)),
        offset: cr(t, dr(e)),
        velocity: mr(e, .1)
    }
}
function dr(t) {
    return t[0]
}
function pr(t) {
    return t[t.length - 1]
}
function mr(t, e) {
    if (t.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = t.length - 1
      , i = null;
    const r = pr(t);
    for (; n >= 0 && (i = t[n],
    !(r.timestamp - i.timestamp > Ze(e))); )
        n--;
    if (!i)
        return {
            x: 0,
            y: 0
        };
    const o = Ke(r.timestamp - i.timestamp);
    if (0 === o)
        return {
            x: 0,
            y: 0
        };
    const s = {
        x: (r.x - i.x) / o,
        y: (r.y - i.y) / o
    };
    return s.x === 1 / 0 && (s.x = 0),
    s.y === 1 / 0 && (s.y = 0),
    s
}
function fr(t) {
    return t.max - t.min
}
function gr(t, e=0, n=.01) {
    return Math.abs(t - e) <= n
}
function yr(t, e, n, i=.5) {
    t.origin = i,
    t.originPoint = Cn(e.min, e.max, t.origin),
    t.scale = fr(n) / fr(e),
    (gr(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
    t.translate = Cn(n.min, n.max, t.origin) - t.originPoint,
    (gr(t.translate) || isNaN(t.translate)) && (t.translate = 0)
}
function vr(t, e, n, i) {
    yr(t.x, e.x, n.x, i ? i.originX : void 0),
    yr(t.y, e.y, n.y, i ? i.originY : void 0)
}
function xr(t, e, n) {
    t.min = n.min + e.min,
    t.max = t.min + fr(e)
}
function br(t, e, n) {
    t.min = e.min - n.min,
    t.max = t.min + fr(e)
}
function Pr(t, e, n) {
    br(t.x, e.x, n.x),
    br(t.y, e.y, n.y)
}
function wr(t, e, n) {
    return {
        min: void 0 !== e ? t.min + e : void 0,
        max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
    }
}
function Sr(t, e) {
    let n = e.min - t.min
      , i = e.max - t.max;
    return e.max - e.min < t.max - t.min && ([n,i] = [i, n]),
    {
        min: n,
        max: i
    }
}
const Tr = .35;
function Er(t, e, n) {
    return {
        min: Mr(t, e),
        max: Mr(t, n)
    }
}
function Mr(t, e) {
    return "number" == typeof t ? t : t[e] || 0
}
const Cr = () => ({
    x: {
        min: 0,
        max: 0
    },
    y: {
        min: 0,
        max: 0
    }
});
function Ar(t) {
    return [t("x"), t("y")]
}
function Vr({top: t, left: e, right: n, bottom: i}) {
    return {
        x: {
            min: e,
            max: n
        },
        y: {
            min: t,
            max: i
        }
    }
}
function Rr(t) {
    return void 0 === t || 1 === t
}
function kr({scale: t, scaleX: e, scaleY: n}) {
    return !Rr(t) || !Rr(e) || !Rr(n)
}
function Dr(t) {
    return kr(t) || Lr(t) || t.z || t.rotate || t.rotateX || t.rotateY
}
function Lr(t) {
    return jr(t.x) || jr(t.y)
}
function jr(t) {
    return t && "0%" !== t
}
function Br(t, e, n) {
    return n + e * (t - n)
}
function Fr(t, e, n, i, r) {
    return void 0 !== r && (t = Br(t, r, i)),
    Br(t, n, i) + e
}
function Or(t, e=0, n=1, i, r) {
    t.min = Fr(t.min, e, n, i, r),
    t.max = Fr(t.max, e, n, i, r)
}
function Ir(t, {x: e, y: n}) {
    Or(t.x, e.translate, e.scale, e.originPoint),
    Or(t.y, n.translate, n.scale, n.originPoint)
}
function Ur(t) {
    return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
}
function Nr(t, e) {
    t.min = t.min + e,
    t.max = t.max + e
}
function $r(t, e, [n,i,r]) {
    const o = void 0 !== e[r] ? e[r] : .5
      , s = Cn(t.min, t.max, o);
    Or(t, e[n], e[i], s, e.scale)
}
const _r = ["x", "scaleX", "originX"]
  , Wr = ["y", "scaleY", "originY"];
function zr(t, e) {
    $r(t.x, e, _r),
    $r(t.y, e, Wr)
}
function Hr(t, e) {
    return Vr(function(t, e) {
        if (!e)
            return t;
        const n = e({
            x: t.left,
            y: t.top
        })
          , i = e({
            x: t.right,
            y: t.bottom
        });
        return {
            top: n.y,
            left: n.x,
            bottom: i.y,
            right: i.x
        }
    }(t.getBoundingClientRect(), e))
}
const Yr = ({current: t}) => t ? t.ownerDocument.defaultView : null
  , Xr = new WeakMap;
class qr {
    constructor(t) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = {
            x: {
                min: 0,
                max: 0
            },
            y: {
                min: 0,
                max: 0
            }
        },
        this.visualElement = t
    }
    start(t, {snapToCursor: e=!1}={}) {
        const {presenceContext: n} = this.visualElement;
        if (n && !1 === n.isPresent)
            return;
        const {dragSnapToOrigin: i} = this.getProps();
        this.panSession = new lr(t,{
            onSessionStart: t => {
                const {dragSnapToOrigin: n} = this.getProps();
                n ? this.pauseAnimation() : this.stopAnimation(),
                e && this.snapToCursor(Ce(t, "page").point)
            }
            ,
            onStart: (t, e) => {
                const {drag: n, dragPropagation: i, onDragStart: r} = this.getProps();
                if (n && !i && (this.openGlobalLock && this.openGlobalLock(),
                this.openGlobalLock = je(n),
                !this.openGlobalLock))
                    return;
                this.isDragging = !0,
                this.currentDirection = null,
                this.resolveConstraints(),
                this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                this.visualElement.projection.target = void 0),
                Ar(t => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (jt.test(e)) {
                        const {projection: n} = this.visualElement;
                        if (n && n.layout) {
                            const i = n.layout.layoutBox[t];
                            if (i) {
                                e = fr(i) * (parseFloat(e) / 100)
                            }
                        }
                    }
                    this.originPoint[t] = e
                }
                ),
                r && xe.update( () => r(t, e), !1, !0);
                const {animationState: o} = this.visualElement;
                o && o.setActive("whileDrag", !0)
            }
            ,
            onMove: (t, e) => {
                const {dragPropagation: n, dragDirectionLock: i, onDirectionLock: r, onDrag: o} = this.getProps();
                if (!n && !this.openGlobalLock)
                    return;
                const {offset: s} = e;
                if (i && null === this.currentDirection)
                    return this.currentDirection = function(t, e=10) {
                        let n = null;
                        Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x");
                        return n
                    }(s),
                    void (null !== this.currentDirection && r && r(this.currentDirection));
                this.updateAxis("x", e.point, s),
                this.updateAxis("y", e.point, s),
                this.visualElement.render(),
                o && o(t, e)
            }
            ,
            onSessionEnd: (t, e) => this.stop(t, e),
            resumeAnimation: () => Ar(t => {
                var e;
                return "paused" === this.getAnimationState(t) && (null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.play())
            }
            )
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: i,
            contextWindow: Yr(this.visualElement)
        })
    }
    stop(t, e) {
        const n = this.isDragging;
        if (this.cancel(),
        !n)
            return;
        const {velocity: i} = e;
        this.startAnimation(i);
        const {onDragEnd: r} = this.getProps();
        r && xe.update( () => r(t, e))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: e} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: n} = this.getProps();
        !n && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        e && e.setActive("whileDrag", !1)
    }
    updateAxis(t, e, n) {
        const {drag: i} = this.getProps();
        if (!n || !Gr(t, i, this.currentDirection))
            return;
        const r = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + n[t];
        this.constraints && this.constraints[t] && (o = function(t, {min: e, max: n}, i) {
            return void 0 !== e && t < e ? t = i ? Cn(e, t, i.min) : Math.max(t, e) : void 0 !== n && t > n && (t = i ? Cn(n, t, i.max) : Math.min(t, n)),
            t
        }(o, this.constraints[t], this.elastic[t])),
        r.set(o)
    }
    resolveConstraints() {
        var t;
        const {dragConstraints: e, dragElastic: n} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout
          , r = this.constraints;
        e && X(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!e || !i) && function(t, {top: e, left: n, bottom: i, right: r}) {
            return {
                x: wr(t.x, n, r),
                y: wr(t.y, e, i)
            }
        }(i.layoutBox, e),
        this.elastic = function(t=Tr) {
            return !1 === t ? t = 0 : !0 === t && (t = Tr),
            {
                x: Er(t, "left", "right"),
                y: Er(t, "top", "bottom")
            }
        }(n),
        r !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && Ar(t => {
            this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                const n = {};
                return void 0 !== e.min && (n.min = e.min - t.min),
                void 0 !== e.max && (n.max = e.max - t.min),
                n
            }(i.layoutBox[t], this.constraints[t]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: e} = this.getProps();
        if (!t || !X(t))
            return !1;
        const n = t.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const r = function(t, e, n) {
            const i = Hr(t, n)
              , {scroll: r} = e;
            return r && (Nr(i.x, r.offset.x),
            Nr(i.y, r.offset.y)),
            i
        }(n, i.root, this.visualElement.getTransformPagePoint());
        let o = function(t, e) {
            return {
                x: Sr(t.x, e.x),
                y: Sr(t.y, e.y)
            }
        }(i.layout.layoutBox, r);
        if (e) {
            const t = e(function({x: t, y: e}) {
                return {
                    top: e.min,
                    right: t.max,
                    bottom: e.max,
                    left: t.min
                }
            }(o));
            this.hasMutatedConstraints = !!t,
            t && (o = Vr(t))
        }
        return o
    }
    startAnimation(t) {
        const {drag: e, dragMomentum: n, dragElastic: i, dragTransition: r, dragSnapToOrigin: o, onDragTransitionEnd: s} = this.getProps()
          , a = this.constraints || {}
          , l = Ar(s => {
            if (!Gr(s, e, this.currentDirection))
                return;
            let l = a && a[s] || {};
            o && (l = {
                min: 0,
                max: 0
            });
            const u = i ? 200 : 1e6
              , c = i ? 40 : 1e7
              , h = {
                type: "inertia",
                velocity: n ? t[s] : 0,
                bounceStiffness: u,
                bounceDamping: c,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l
            };
            return this.startAxisValueAnimation(s, h)
        }
        );
        return Promise.all(l).then(s)
    }
    startAxisValueAnimation(t, e) {
        const n = this.getAxisMotionValue(t);
        return n.start(Li(t, n, 0, e))
    }
    stopAnimation() {
        Ar(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        Ar(t => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.pause()
        }
        )
    }
    getAnimationState(t) {
        var e;
        return null === (e = this.getAxisMotionValue(t).animation) || void 0 === e ? void 0 : e.state
    }
    getAxisMotionValue(t) {
        const e = "_drag" + t.toUpperCase()
          , n = this.visualElement.getProps()
          , i = n[e];
        return i || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Ar(e => {
            const {drag: n} = this.getProps();
            if (!Gr(e, n, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , r = this.getAxisMotionValue(e);
            if (i && i.layout) {
                const {min: n, max: o} = i.layout.layoutBox[e];
                r.set(t[e] - Cn(n, o, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: e} = this.getProps()
          , {projection: n} = this.visualElement;
        if (!X(e) || !n || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Ar(t => {
            const e = this.getAxisMotionValue(t);
            if (e) {
                const n = e.get();
                i[t] = function(t, e) {
                    let n = .5;
                    const i = fr(t)
                      , r = fr(e);
                    return r > i ? n = Xn(e.min, e.max - i, t.min) : i > r && (n = Xn(t.min, t.max - r, e.min)),
                    St(0, 1, n)
                }({
                    min: n,
                    max: n
                }, this.constraints[t])
            }
        }
        );
        const {transformTemplate: r} = this.visualElement.getProps();
        this.visualElement.current.style.transform = r ? r({}, "") : "none",
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        Ar(e => {
            if (!Gr(e, t, null))
                return;
            const n = this.getAxisMotionValue(e)
              , {min: r, max: o} = this.constraints[e];
            n.set(Cn(r, o, i[e]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        Xr.set(this.visualElement, this);
        const t = Ae(this.visualElement.current, "pointerdown", t => {
            const {drag: e, dragListener: n=!0} = this.getProps();
            e && n && this.start(t)
        }
        )
          , e = () => {
            const {dragConstraints: t} = this.getProps();
            X(t) && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: n} = this.visualElement
          , i = n.addEventListener("measure", e);
        n && !n.layout && (n.root && n.root.updateScroll(),
        n.updateLayout()),
        e();
        const r = Ee(window, "resize", () => this.scalePositionWithinConstraints())
          , o = n.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e}) => {
            this.isDragging && e && (Ar(e => {
                const n = this.getAxisMotionValue(e);
                n && (this.originPoint[e] += t[e].translate,
                n.set(n.get() + t[e].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            r(),
            t(),
            i(),
            o && o()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: e=!1, dragDirectionLock: n=!1, dragPropagation: i=!1, dragConstraints: r=!1, dragElastic: o=Tr, dragMomentum: s=!0} = t;
        return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: r,
            dragElastic: o,
            dragMomentum: s
        }
    }
}
function Gr(t, e, n) {
    return !(!0 !== e && e !== t || null !== n && n !== t)
}
const Zr = t => (e, n) => {
    t && xe.update( () => t(e, n))
}
;
const Kr = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function Jr(t, e) {
    return e.max === e.min ? 0 : t / (e.max - e.min) * 100
}
const Qr = {
    correct: (t, e) => {
        if (!e.target)
            return t;
        if ("string" == typeof t) {
            if (!Bt.test(t))
                return t;
            t = parseFloat(t)
        }
        return `${Jr(t, e.target.x)}% ${Jr(t, e.target.y)}%`
    }
}
  , to = {
    correct: (t, {treeScale: e, projectionDelta: n}) => {
        const i = t
          , r = $n.parse(t);
        if (r.length > 5)
            return i;
        const o = $n.createTransformer(t)
          , s = "number" != typeof r[0] ? 1 : 0
          , a = n.x.scale * e.x
          , l = n.y.scale * e.y;
        r[0 + s] /= a,
        r[1 + s] /= l;
        const u = Cn(a, l, .5);
        return "number" == typeof r[2 + s] && (r[2 + s] /= u),
        "number" == typeof r[3 + s] && (r[3 + s] /= u),
        o(r)
    }
};
class eo extends I.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: e, switchLayoutGroup: n, layoutId: i} = this.props
          , {projection: r} = t;
        var o;
        o = io,
        Object.assign(dt, o),
        r && (e.group && e.group.add(r),
        n && n.register && i && n.register(r),
        r.root.didUpdate(),
        r.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        r.setOptions({
            ...r.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Kr.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: e, visualElement: n, drag: i, isPresent: r} = this.props
          , o = n.projection;
        return o ? (o.isPresent = r,
        i || t.layoutDependency !== e || void 0 === e ? o.willUpdate() : this.safeToRemove(),
        t.isPresent !== r && (r ? o.promote() : o.relegate() || xe.postRender( () => {
            const t = o.getStack();
            t && t.members.length || this.safeToRemove()
        }
        )),
        null) : null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        queueMicrotask( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: e, switchLayoutGroup: n} = this.props
          , {projection: i} = t;
        i && (i.scheduleCheckAfterUnmount(),
        e && e.group && e.group.remove(i),
        n && n.deregister && n.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function no(t) {
    const [e,n] = function() {
        const t = O.useContext($);
        if (null === t)
            return [!0, null];
        const {isPresent: e, onExitComplete: n, register: i} = t
          , r = O.useId();
        return O.useEffect( () => i(r), []),
        !e && n ? [!1, () => n && n(r)] : [!0]
    }()
      , i = O.useContext(rt);
    return I.createElement(eo, {
        ...t,
        layoutGroup: i,
        switchLayoutGroup: O.useContext(ot),
        isPresent: e,
        safeToRemove: n
    })
}
const io = {
    borderRadius: {
        ...Qr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Qr,
    borderTopRightRadius: Qr,
    borderBottomLeftRadius: Qr,
    borderBottomRightRadius: Qr,
    boxShadow: to
}
  , ro = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , oo = ro.length
  , so = t => "string" == typeof t ? parseFloat(t) : t
  , ao = t => "number" == typeof t || Bt.test(t);
function lo(t, e) {
    return void 0 !== t[e] ? t[e] : t.borderRadius
}
const uo = ho(0, .5, pn)
  , co = ho(.5, .95, ge);
function ho(t, e, n) {
    return i => i < t ? 0 : i > e ? 1 : n(Xn(t, e, i))
}
function po(t, e) {
    t.min = e.min,
    t.max = e.max
}
function mo(t, e) {
    po(t.x, e.x),
    po(t.y, e.y)
}
function fo(t, e, n, i, r) {
    return t = Br(t -= e, 1 / n, i),
    void 0 !== r && (t = Br(t, 1 / r, i)),
    t
}
function go(t, e, [n,i,r], o, s) {
    !function(t, e=0, n=1, i=.5, r, o=t, s=t) {
        jt.test(e) && (e = parseFloat(e),
        e = Cn(s.min, s.max, e / 100) - s.min);
        if ("number" != typeof e)
            return;
        let a = Cn(o.min, o.max, i);
        t === o && (a -= e),
        t.min = fo(t.min, e, n, a, r),
        t.max = fo(t.max, e, n, a, r)
    }(t, e[n], e[i], e[r], e.scale, o, s)
}
const yo = ["x", "scaleX", "originX"]
  , vo = ["y", "scaleY", "originY"];
function xo(t, e, n, i) {
    go(t.x, e, yo, n ? n.x : void 0, i ? i.x : void 0),
    go(t.y, e, vo, n ? n.y : void 0, i ? i.y : void 0)
}
function bo(t) {
    return 0 === t.translate && 1 === t.scale
}
function Po(t) {
    return bo(t.x) && bo(t.y)
}
function wo(t, e) {
    return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
}
function So(t) {
    return fr(t.x) / fr(t.y)
}
class To {
    constructor() {
        this.members = []
    }
    add(t) {
        Fi(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (Oi(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const t = this.members[this.members.length - 1];
            t && this.promote(t)
        }
    }
    relegate(t) {
        const e = this.members.findIndex(e => t === e);
        if (0 === e)
            return !1;
        let n;
        for (let i = e; i >= 0; i--) {
            const t = this.members[i];
            if (!1 !== t.isPresent) {
                n = t;
                break
            }
        }
        return !!n && (this.promote(n),
        !0)
    }
    promote(t, e) {
        const n = this.lead;
        if (t !== n && (this.prevLead = n,
        this.lead = t,
        t.show(),
        n)) {
            n.instance && n.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = n,
            e && (t.resumeFrom.preserveOpacity = !0),
            n.snapshot && (t.snapshot = n.snapshot,
            t.snapshot.latestValues = n.animationValues || n.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: i} = t.options;
            !1 === i && n.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: e, resumingFrom: n} = t;
            e.onExitComplete && e.onExitComplete(),
            n && n.options.onExitComplete && n.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function Eo(t, e, n) {
    let i = "";
    const r = t.x.translate / e.x
      , o = t.y.translate / e.y;
    if ((r || o) && (i = `translate3d(${r}px, ${o}px, 0) `),
    1 === e.x && 1 === e.y || (i += `scale(${1 / e.x}, ${1 / e.y}) `),
    n) {
        const {rotate: t, rotateX: e, rotateY: r} = n;
        t && (i += `rotate(${t}deg) `),
        e && (i += `rotateX(${e}deg) `),
        r && (i += `rotateY(${r}deg) `)
    }
    const s = t.x.scale * e.x
      , a = t.y.scale * e.y;
    return 1 === s && 1 === a || (i += `scale(${s}, ${a})`),
    i || "none"
}
const Mo = (t, e) => t.depth - e.depth;
class Co {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        Fi(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        Oi(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(Mo),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
const Ao = ["", "X", "Y", "Z"]
  , Vo = {
    visibility: "hidden"
};
let Ro = 0;
const ko = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
function Do({attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: i, resetTransform: r}) {
    return class {
        constructor(t={}, n=(null == e ? void 0 : e())) {
            this.id = Ro++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                var t;
                this.projectionUpdateScheduled = !1,
                ko.totalNodes = ko.resolvedTargetDeltas = ko.recalculatedProjection = 0,
                this.nodes.forEach(Bo),
                this.nodes.forEach(_o),
                this.nodes.forEach(Wo),
                this.nodes.forEach(Fo),
                t = ko,
                window.MotionDebug && window.MotionDebug.record(t)
            }
            ,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = t,
            this.root = n ? n.root || n : this,
            this.path = n ? [...n.path, n] : [],
            this.parent = n,
            this.depth = n ? n.depth + 1 : 0;
            for (let e = 0; e < this.path.length; e++)
                this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Co)
        }
        addEventListener(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new Ii),
            this.eventHandlers.get(t).add(e)
        }
        notifyListeners(t, ...e) {
            const n = this.eventHandlers.get(t);
            n && n.notify(...e)
        }
        hasListeners(t) {
            return this.eventHandlers.has(t)
        }
        mount(e, n=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            var i;
            this.isSVG = (i = e)instanceof SVGElement && "svg" !== i.tagName,
            this.instance = e;
            const {layoutId: r, layout: o, visualElement: s} = this.options;
            if (s && !s.current && s.mount(e),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            n && (o || r) && (this.isLayoutDirty = !0),
            t) {
                let n;
                const i = () => this.root.updateBlockedByResize = !1;
                t(e, () => {
                    this.root.updateBlockedByResize = !0,
                    n && n(),
                    n = function(t, e) {
                        const n = performance.now()
                          , i = ({timestamp: r}) => {
                            const o = r - n;
                            o >= e && (be(i),
                            t(o - e))
                        }
                        ;
                        return xe.read(i, !0),
                        () => be(i)
                    }(i, 250),
                    Kr.hasAnimatedSinceResize && (Kr.hasAnimatedSinceResize = !1,
                    this.nodes.forEach($o))
                }
                )
            }
            r && this.root.registerSharedNode(r, this),
            !1 !== this.options.animate && s && (r || o) && this.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: n, layout: i}) => {
                if (this.isTreeAnimationBlocked())
                    return this.target = void 0,
                    void (this.relativeTarget = void 0);
                const r = this.options.transition || s.getDefaultTransition() || Go
                  , {onLayoutAnimationStart: o, onLayoutAnimationComplete: a} = s.getProps()
                  , l = !this.targetLayout || !wo(this.targetLayout, i) || n
                  , u = !e && n;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (l || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(t, u);
                    const e = {
                        ...ki(r, "layout"),
                        onPlay: o,
                        onComplete: a
                    };
                    (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0,
                    e.type = !1),
                    this.startAnimation(e)
                } else
                    e || $o(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = i
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const t = this.getStack();
            t && t.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            be(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(zo),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: t} = this.options;
            return t && t.getProps().transformTemplate
        }
        willUpdate(t=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked())
                return void (this.options.onExitComplete && this.options.onExitComplete());
            if (!this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let r = 0; r < this.path.length; r++) {
                const t = this.path[r];
                t.shouldResetTransform = !0,
                t.updateScroll("snapshot"),
                t.options.layoutRoot && t.willUpdate(!1)
            }
            const {layoutId: e, layout: n} = this.options;
            if (void 0 === e && !n)
                return;
            const i = this.getTransformTemplate();
            this.prevTransformTemplateValue = i ? i(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            t && this.notifyListeners("willUpdate")
        }
        update() {
            this.updateScheduled = !1;
            if (this.isUpdateBlocked())
                return this.unblockUpdate(),
                this.clearAllSnapshots(),
                void this.nodes.forEach(Io);
            this.isUpdating || this.nodes.forEach(Uo),
            this.isUpdating = !1,
            this.nodes.forEach(No),
            this.nodes.forEach(Lo),
            this.nodes.forEach(jo),
            this.clearAllSnapshots();
            const t = performance.now();
            Pe.delta = St(0, 1e3 / 60, t - Pe.timestamp),
            Pe.timestamp = t,
            Pe.isProcessing = !0,
            we.update.process(Pe),
            we.preRender.process(Pe),
            we.render.process(Pe),
            Pe.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            queueMicrotask( () => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Oo),
            this.sharedNodes.forEach(Ho)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            xe.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            xe.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance)
                return;
            if (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let n = 0; n < this.path.length; n++) {
                    this.path[n].updateScroll()
                }
            const t = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            },
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: e} = this.options;
            e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
        }
        updateScroll(t="measure") {
            let e = Boolean(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
            e && (this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: i(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!r)
                return;
            const t = this.isLayoutDirty || this.shouldResetTransform
              , e = this.projectionDelta && !Po(this.projectionDelta)
              , n = this.getTransformTemplate()
              , i = n ? n(this.latestValues, "") : void 0
              , o = i !== this.prevTransformTemplateValue;
            t && (e || Dr(this.latestValues) || o) && (r(this.instance, i),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(t=!0) {
            const e = this.measurePageBox();
            let n = this.removeElementScroll(e);
            var i;
            return t && (n = this.removeTransform(n)),
            Jo((i = n).x),
            Jo(i.y),
            {
                animationId: this.root.animationId,
                measuredBox: e,
                layoutBox: n,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: t} = this.options;
            if (!t)
                return {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                };
            const e = t.measureViewportBox()
              , {scroll: n} = this.root;
            return n && (Nr(e.x, n.offset.x),
            Nr(e.y, n.offset.y)),
            e
        }
        removeElementScroll(t) {
            const e = {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            };
            mo(e, t);
            for (let n = 0; n < this.path.length; n++) {
                const i = this.path[n]
                  , {scroll: r, options: o} = i;
                if (i !== this.root && r && o.layoutScroll) {
                    if (r.isRoot) {
                        mo(e, t);
                        const {scroll: n} = this.root;
                        n && (Nr(e.x, -n.offset.x),
                        Nr(e.y, -n.offset.y))
                    }
                    Nr(e.x, r.offset.x),
                    Nr(e.y, r.offset.y)
                }
            }
            return e
        }
        applyTransform(t, e=!1) {
            const n = {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            };
            mo(n, t);
            for (let i = 0; i < this.path.length; i++) {
                const t = this.path[i];
                !e && t.options.layoutScroll && t.scroll && t !== t.root && zr(n, {
                    x: -t.scroll.offset.x,
                    y: -t.scroll.offset.y
                }),
                Dr(t.latestValues) && zr(n, t.latestValues)
            }
            return Dr(this.latestValues) && zr(n, this.latestValues),
            n
        }
        removeTransform(t) {
            const e = {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            };
            mo(e, t);
            for (let n = 0; n < this.path.length; n++) {
                const t = this.path[n];
                if (!t.instance)
                    continue;
                if (!Dr(t.latestValues))
                    continue;
                kr(t.latestValues) && t.updateSnapshot();
                const i = Cr();
                mo(i, t.measurePageBox()),
                xo(e, t.latestValues, t.snapshot ? t.snapshot.layoutBox : void 0, i)
            }
            return Dr(this.latestValues) && xo(e, this.latestValues),
            e
        }
        setTargetDelta(t) {
            this.targetDelta = t,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(t) {
            this.options = {
                ...this.options,
                ...t,
                crossfade: void 0 === t.crossfade || t.crossfade
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Pe.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(t=!1) {
            var e;
            const n = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = n.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
            const i = Boolean(this.resumingFrom) || this !== n;
            if (!(t || i && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget))
                return;
            const {layout: r, layoutId: o} = this.options;
            if (this.layout && (r || o)) {
                if (this.resolvedRelativeTargetAt = Pe.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const t = this.getClosestProjectingParent();
                    t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    this.relativeTargetOrigin = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    Pr(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                    mo(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (this.relativeTarget || this.targetDelta) {
                    var s, a, l;
                    if (this.target || (this.target = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    this.targetWithTransforms = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    }),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    s = this.target,
                    a = this.relativeTarget,
                    l = this.relativeParent.target,
                    xr(s.x, a.x, l.x),
                    xr(s.y, a.y, l.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : mo(this.target, this.layout.layoutBox),
                    Ir(this.target, this.targetDelta)) : mo(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const t = this.getClosestProjectingParent();
                        t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        },
                        this.relativeTargetOrigin = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        },
                        Pr(this.relativeTargetOrigin, this.target, t.target),
                        mo(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    ko.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (this.parent && !kr(this.parent.latestValues) && !Lr(this.parent.latestValues))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var t;
            const e = this.getLead()
              , n = Boolean(this.resumingFrom) || this !== e;
            let i = !0;
            if ((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (i = !1),
            n && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1),
            this.resolvedRelativeTargetAt === Pe.timestamp && (i = !1),
            i)
                return;
            const {layout: r, layoutId: o} = this.options;
            if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !r && !o)
                return;
            mo(this.layoutCorrected, this.layout.layoutBox);
            const s = this.treeScale.x
              , a = this.treeScale.y;
            !function(t, e, n, i=!1) {
                const r = n.length;
                if (!r)
                    return;
                let o, s;
                e.x = e.y = 1;
                for (let a = 0; a < r; a++) {
                    o = n[a],
                    s = o.projectionDelta;
                    const r = o.instance;
                    r && r.style && "contents" === r.style.display || (i && o.options.layoutScroll && o.scroll && o !== o.root && zr(t, {
                        x: -o.scroll.offset.x,
                        y: -o.scroll.offset.y
                    }),
                    s && (e.x *= s.x.scale,
                    e.y *= s.y.scale,
                    Ir(t, s)),
                    i && Dr(o.latestValues) && zr(t, o.latestValues))
                }
                e.x = Ur(e.x),
                e.y = Ur(e.y)
            }(this.layoutCorrected, this.treeScale, this.path, n),
            !e.layout || e.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (e.target = e.layout.layoutBox);
            const {target: l} = e;
            if (!l)
                return void (this.projectionTransform && (this.projectionDelta = {
                    x: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    },
                    y: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    }
                },
                this.projectionTransform = "none",
                this.scheduleRender()));
            this.projectionDelta || (this.projectionDelta = {
                x: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                },
                y: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }
            },
            this.projectionDeltaWithTransform = {
                x: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                },
                y: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }
            });
            const u = this.projectionTransform;
            vr(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
            this.projectionTransform = Eo(this.projectionDelta, this.treeScale),
            this.projectionTransform === u && this.treeScale.x === s && this.treeScale.y === a || (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", l)),
            ko.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(t=!0) {
            if (this.options.scheduleRender && this.options.scheduleRender(),
            t) {
                const t = this.getStack();
                t && t.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(t, e=!1) {
            const n = this.snapshot
              , i = n ? n.latestValues : {}
              , r = {
                ...this.latestValues
            }
              , o = {
                x: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                },
                y: {
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }
            };
            this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !e;
            const s = {
                x: {
                    min: 0,
                    max: 0
                },
                y: {
                    min: 0,
                    max: 0
                }
            }
              , a = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0)
              , l = this.getStack()
              , u = !l || l.members.length <= 1
              , c = Boolean(a && !u && !0 === this.options.crossfade && !this.path.some(qo));
            let h;
            this.animationProgress = 0,
            this.mixTargetDelta = e => {
                const n = e / 1e3;
                var l, d, p, m, f, g;
                Yo(o.x, t.x, n),
                Yo(o.y, t.y, n),
                this.setTargetDelta(o),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Pr(s, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                p = this.relativeTarget,
                m = this.relativeTargetOrigin,
                f = s,
                g = n,
                Xo(p.x, m.x, f.x, g),
                Xo(p.y, m.y, f.y, g),
                h && (l = this.relativeTarget,
                d = h,
                l.x.min === d.x.min && l.x.max === d.x.max && l.y.min === d.y.min && l.y.max === d.y.max) && (this.isProjectionDirty = !1),
                h || (h = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                }),
                mo(h, this.relativeTarget)),
                a && (this.animationValues = r,
                function(t, e, n, i, r, o) {
                    r ? (t.opacity = Cn(0, void 0 !== n.opacity ? n.opacity : 1, uo(i)),
                    t.opacityExit = Cn(void 0 !== e.opacity ? e.opacity : 1, 0, co(i))) : o && (t.opacity = Cn(void 0 !== e.opacity ? e.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, i));
                    for (let s = 0; s < oo; s++) {
                        const r = `border${ro[s]}Radius`;
                        let o = lo(e, r)
                          , a = lo(n, r);
                        void 0 === o && void 0 === a || (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || ao(o) === ao(a) ? (t[r] = Math.max(Cn(so(o), so(a), i), 0),
                        (jt.test(a) || jt.test(o)) && (t[r] += "%")) : t[r] = a)
                    }
                    (e.rotate || n.rotate) && (t.rotate = Cn(e.rotate || 0, n.rotate || 0, i))
                }(r, i, this.latestValues, n, c, u)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = n
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(t) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (be(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = xe.update( () => {
                Kr.hasAnimatedSinceResize = !0,
                this.currentAnimation = function(t, e, n) {
                    const i = gt(t) ? t : Ni(t);
                    return i.start(Li("", i, e, n)),
                    i.animation
                }(0, 1e3, {
                    ...t,
                    onUpdate: e => {
                        this.mixTargetDelta(e),
                        t.onUpdate && t.onUpdate(e)
                    }
                    ,
                    onComplete: () => {
                        t.onComplete && t.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const t = this.getStack();
            t && t.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const t = this.getLead();
            let {targetWithTransforms: e, target: n, layout: i, latestValues: r} = t;
            if (e && n && i) {
                if (this !== t && this.layout && i && Qo(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                    n = this.target || {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    };
                    const e = fr(this.layout.layoutBox.x);
                    n.x.min = t.target.x.min,
                    n.x.max = n.x.min + e;
                    const i = fr(this.layout.layoutBox.y);
                    n.y.min = t.target.y.min,
                    n.y.max = n.y.min + i
                }
                mo(e, n),
                zr(e, r),
                vr(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
            }
        }
        registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new To);
            this.sharedNodes.get(t).add(e);
            const n = e.options.initialPromotionConfig;
            e.promote({
                transition: n ? n.transition : void 0,
                preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(e) : void 0
            })
        }
        isLead() {
            const t = this.getStack();
            return !t || t.lead === this
        }
        getLead() {
            var t;
            const {layoutId: e} = this.options;
            return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
        }
        getPrevLead() {
            var t;
            const {layoutId: e} = this.options;
            return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
        }
        getStack() {
            const {layoutId: t} = this.options;
            if (t)
                return this.root.sharedNodes.get(t)
        }
        promote({needsReset: t, transition: e, preserveFollowOpacity: n}={}) {
            const i = this.getStack();
            i && i.promote(this, n),
            t && (this.projectionDelta = void 0,
            this.needsReset = !0),
            e && this.setOptions({
                transition: e
            })
        }
        relegate() {
            const t = this.getStack();
            return !!t && t.relegate(this)
        }
        resetRotation() {
            const {visualElement: t} = this.options;
            if (!t)
                return;
            let e = !1;
            const {latestValues: n} = t;
            if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (e = !0),
            !e)
                return;
            const i = {};
            for (let r = 0; r < Ao.length; r++) {
                const e = "rotate" + Ao[r];
                n[e] && (i[e] = n[e],
                t.setStaticValue(e, 0))
            }
            t.render();
            for (const r in i)
                t.setStaticValue(r, i[r]);
            t.scheduleRender()
        }
        getProjectionStyles(t) {
            var e, n;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return Vo;
            const i = {
                visibility: ""
            }
              , r = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                i.opacity = "",
                i.pointerEvents = pe(null == t ? void 0 : t.pointerEvents) || "",
                i.transform = r ? r(this.latestValues, "") : "none",
                i;
            const o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
                const e = {};
                return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                e.pointerEvents = pe(null == t ? void 0 : t.pointerEvents) || ""),
                this.hasProjected && !Dr(this.latestValues) && (e.transform = r ? r({}, "") : "none",
                this.hasProjected = !1),
                e
            }
            const s = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(),
            i.transform = Eo(this.projectionDeltaWithTransform, this.treeScale, s),
            r && (i.transform = r(s, i.transform));
            const {x: a, y: l} = this.projectionDelta;
            i.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`,
            o.animationValues ? i.opacity = o === this ? null !== (n = null !== (e = s.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : i.opacity = o === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0;
            for (const u in dt) {
                if (void 0 === s[u])
                    continue;
                const {correct: t, applyTo: e} = dt[u]
                  , n = "none" === i.transform ? s[u] : t(s[u], o);
                if (e) {
                    const t = e.length;
                    for (let r = 0; r < t; r++)
                        i[e[r]] = n
                } else
                    i[u] = n
            }
            return this.options.layoutId && (i.pointerEvents = o === this ? pe(null == t ? void 0 : t.pointerEvents) || "" : "none"),
            i
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(t => {
                var e;
                return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
            }
            ),
            this.root.nodes.forEach(Io),
            this.root.sharedNodes.clear()
        }
    }
}
function Lo(t) {
    t.updateLayout()
}
function jo(t) {
    var e;
    const n = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
        const {layoutBox: e, measuredBox: i} = t.layout
          , {animationType: r} = t.options
          , o = n.source !== t.layout.source;
        "size" === r ? Ar(t => {
            const i = o ? n.measuredBox[t] : n.layoutBox[t]
              , r = fr(i);
            i.min = e[t].min,
            i.max = i.min + r
        }
        ) : Qo(r, n.layoutBox, e) && Ar(i => {
            const r = o ? n.measuredBox[i] : n.layoutBox[i]
              , s = fr(e[i]);
            r.max = r.min + s,
            t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
            t.relativeTarget[i].max = t.relativeTarget[i].min + s)
        }
        );
        const s = {
            x: {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
            },
            y: {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
            }
        };
        vr(s, e, n.layoutBox);
        const a = {
            x: {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
            },
            y: {
                translate: 0,
                scale: 1,
                origin: 0,
                originPoint: 0
            }
        };
        o ? vr(a, t.applyTransform(i, !0), n.measuredBox) : vr(a, e, n.layoutBox);
        const l = !Po(s);
        let u = !1;
        if (!t.resumeFrom) {
            const i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
                const {snapshot: r, layout: o} = i;
                if (r && o) {
                    const s = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    };
                    Pr(s, n.layoutBox, r.layoutBox);
                    const a = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    };
                    Pr(a, e, o.layoutBox),
                    wo(s, a) || (u = !0),
                    i.options.layoutRoot && (t.relativeTarget = a,
                    t.relativeTargetOrigin = s,
                    t.relativeParent = i)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: n,
            delta: a,
            layoutDelta: s,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u
        })
    } else if (t.isLead()) {
        const {onExitComplete: e} = t.options;
        e && e()
    }
    t.options.transition = void 0
}
function Bo(t) {
    ko.totalNodes++,
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = Boolean(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function Fo(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function Oo(t) {
    t.clearSnapshot()
}
function Io(t) {
    t.clearMeasurements()
}
function Uo(t) {
    t.isLayoutDirty = !1
}
function No(t) {
    const {visualElement: e} = t.options;
    e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"),
    t.resetTransform()
}
function $o(t) {
    t.finishAnimation(),
    t.targetDelta = t.relativeTarget = t.target = void 0,
    t.isProjectionDirty = !0
}
function _o(t) {
    t.resolveTargetDelta()
}
function Wo(t) {
    t.calcProjection()
}
function zo(t) {
    t.resetRotation()
}
function Ho(t) {
    t.removeLeadSnapshot()
}
function Yo(t, e, n) {
    t.translate = Cn(e.translate, 0, n),
    t.scale = Cn(e.scale, 1, n),
    t.origin = e.origin,
    t.originPoint = e.originPoint
}
function Xo(t, e, n, i) {
    t.min = Cn(e.min, n.min, i),
    t.max = Cn(e.max, n.max, i)
}
function qo(t) {
    return t.animationValues && void 0 !== t.animationValues.opacityExit
}
const Go = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Zo = t => "undefined" != typeof navigator && navigator.userAgent.toLowerCase().includes(t)
  , Ko = Zo("applewebkit/") && !Zo("chrome/") ? Math.round : ge;
function Jo(t) {
    t.min = Ko(t.min),
    t.max = Ko(t.max)
}
function Qo(t, e, n) {
    return "position" === t || "preserve-aspect" === t && !gr(So(e), So(n), .2)
}
const ts = Do({
    attachResizeListener: (t, e) => Ee(t, "resize", e),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , es = {
    current: void 0
}
  , ns = Do({
    measureScroll: t => ({
        x: t.scrollLeft,
        y: t.scrollTop
    }),
    defaultParent: () => {
        if (!es.current) {
            const t = new ts({});
            t.mount(window),
            t.setOptions({
                layoutScroll: !0
            }),
            es.current = t
        }
        return es.current
    }
    ,
    resetTransform: (t, e) => {
        t.style.transform = void 0 !== e ? e : "none"
    }
    ,
    checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
})
  , is = {
    pan: {
        Feature: class extends Fe {
            constructor() {
                super(...arguments),
                this.removePointerDownListener = ge
            }
            onPointerDown(t) {
                this.session = new lr(t,this.createPanHandlers(),{
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: Yr(this.node)
                })
            }
            createPanHandlers() {
                const {onPanSessionStart: t, onPanStart: e, onPan: n, onPanEnd: i} = this.node.getProps();
                return {
                    onSessionStart: Zr(t),
                    onStart: Zr(e),
                    onMove: n,
                    onEnd: (t, e) => {
                        delete this.session,
                        i && xe.update( () => i(t, e))
                    }
                }
            }
            mount() {
                this.removePointerDownListener = Ae(this.node.current, "pointerdown", t => this.onPointerDown(t))
            }
            update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
            }
            unmount() {
                this.removePointerDownListener(),
                this.session && this.session.end()
            }
        }
    },
    drag: {
        Feature: class extends Fe {
            constructor(t) {
                super(t),
                this.removeGroupControls = ge,
                this.removeListeners = ge,
                this.controls = new qr(t)
            }
            mount() {
                const {dragControls: t} = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                this.removeListeners = this.controls.addListeners() || ge
            }
            unmount() {
                this.removeGroupControls(),
                this.removeListeners()
            }
        }
        ,
        ProjectionNode: ns,
        MeasureLayout: no
    }
}
  , rs = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function os(t, e, n=1) {
    const [i,r] = function(t) {
        const e = rs.exec(t);
        if (!e)
            return [, ];
        const [,n,i] = e;
        return [n, i]
    }(t);
    if (!i)
        return;
    const o = window.getComputedStyle(e).getPropertyValue(i);
    if (o) {
        const t = o.trim();
        return Bi(t) ? parseFloat(t) : t
    }
    return Pt(r) ? os(r, e, n + 1) : r
}
const ss = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , as = t => ss.has(t)
  , ls = t => t === Tt || t === Bt
  , us = (t, e) => parseFloat(t.split(", ")[e])
  , cs = (t, e) => (n, {transform: i}) => {
    if ("none" === i || !i)
        return 0;
    const r = i.match(/^matrix3d\((.+)\)$/);
    if (r)
        return us(r[1], e);
    {
        const e = i.match(/^matrix\((.+)\)$/);
        return e ? us(e[1], t) : 0
    }
}
  , hs = new Set(["x", "y", "z"])
  , ds = pt.filter(t => !hs.has(t));
const ps = {
    width: ({x: t}, {paddingLeft: e="0", paddingRight: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
    height: ({y: t}, {paddingTop: e="0", paddingBottom: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
    top: (t, {top: e}) => parseFloat(e),
    left: (t, {left: e}) => parseFloat(e),
    bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
    right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
    x: cs(4, 13),
    y: cs(5, 14)
};
ps.translateX = ps.x,
ps.translateY = ps.y;
const ms = (t, e, n={}, i={}) => {
    e = {
        ...e
    },
    i = {
        ...i
    };
    const r = Object.keys(e).filter(as);
    let o = []
      , s = !1;
    const a = [];
    if (r.forEach(r => {
        const l = t.getValue(r);
        if (!t.hasValue(r))
            return;
        let u = n[r]
          , c = Wi(u);
        const h = e[r];
        let d;
        if (he(h)) {
            const t = h.length
              , e = null === h[0] ? 1 : 0;
            u = h[e],
            c = Wi(u);
            for (let n = e; n < t && null !== h[n]; n++)
                d ? Ge(Wi(h[n]) === d) : d = Wi(h[n])
        } else
            d = Wi(h);
        if (c !== d)
            if (ls(c) && ls(d)) {
                const t = l.get();
                "string" == typeof t && l.set(parseFloat(t)),
                "string" == typeof h ? e[r] = parseFloat(h) : Array.isArray(h) && d === Bt && (e[r] = h.map(parseFloat))
            } else
                (null == c ? void 0 : c.transform) && (null == d ? void 0 : d.transform) && (0 === u || 0 === h) ? 0 === u ? l.set(d.transform(u)) : e[r] = c.transform(h) : (s || (o = function(t) {
                    const e = [];
                    return ds.forEach(n => {
                        const i = t.getValue(n);
                        void 0 !== i && (e.push([n, i.get()]),
                        i.set(n.startsWith("scale") ? 1 : 0))
                    }
                    ),
                    e.length && t.render(),
                    e
                }(t),
                s = !0),
                a.push(r),
                i[r] = void 0 !== i[r] ? i[r] : e[r],
                l.jump(h))
    }
    ),
    a.length) {
        const n = a.indexOf("height") >= 0 ? window.pageYOffset : null
          , r = ( (t, e, n) => {
            const i = e.measureViewportBox()
              , r = e.current
              , o = getComputedStyle(r)
              , {display: s} = o
              , a = {};
            "none" === s && e.setStaticValue("display", t.display || "block"),
            n.forEach(t => {
                a[t] = ps[t](i, o)
            }
            ),
            e.render();
            const l = e.measureViewportBox();
            return n.forEach(n => {
                const i = e.getValue(n);
                i && i.jump(a[n]),
                t[n] = ps[n](l, o)
            }
            ),
            t
        }
        )(e, t, a);
        return o.length && o.forEach( ([e,n]) => {
            t.getValue(e).set(n)
        }
        ),
        t.render(),
        _ && null !== n && window.scrollTo({
            top: n
        }),
        {
            target: r,
            transitionEnd: i
        }
    }
    return {
        target: e,
        transitionEnd: i
    }
}
;
function fs(t, e, n, i) {
    return (t => Object.keys(t).some(as))(e) ? ms(t, e, n, i) : {
        target: e,
        transitionEnd: i
    }
}
const gs = (t, e, n, i) => {
    const r = function(t, {...e}, n) {
        const i = t.current;
        if (!(i instanceof Element))
            return {
                target: e,
                transitionEnd: n
            };
        n && (n = {
            ...n
        }),
        t.values.forEach(t => {
            const e = t.get();
            if (!Pt(e))
                return;
            const n = os(e, i);
            n && t.set(n)
        }
        );
        for (const r in e) {
            const t = e[r];
            if (!Pt(t))
                continue;
            const o = os(t, i);
            o && (e[r] = o,
            n || (n = {}),
            void 0 === n[r] && (n[r] = t))
        }
        return {
            target: e,
            transitionEnd: n
        }
    }(t, e, i);
    return fs(t, e = r.target, n, i = r.transitionEnd)
}
  , ys = {
    current: null
}
  , vs = {
    current: !1
};
const xs = new WeakMap
  , bs = Object.keys(it)
  , Ps = bs.length
  , ws = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
  , Ss = K.length;
class Ts {
    constructor({parent: t, props: e, presenceContext: n, reducedMotionConfig: i, visualState: r}, o={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.scheduleRender = () => xe.render(this.render, !1, !0);
        const {latestValues: s, renderState: a} = r;
        this.latestValues = s,
        this.baseTarget = {
            ...s
        },
        this.initialValues = e.initial ? {
            ...s
        } : {},
        this.renderState = a,
        this.parent = t,
        this.props = e,
        this.presenceContext = n,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = o,
        this.isControllingVariants = J(e),
        this.isVariantNode = Q(e),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = Boolean(t && t.current);
        const {willChange: l, ...u} = this.scrapeMotionValuesFromProps(e, {});
        for (const c in u) {
            const t = u[c];
            void 0 !== s[c] && gt(t) && (t.set(s[c], !1),
            ji(l) && l.add(c))
        }
    }
    scrapeMotionValuesFromProps(t, e) {
        return {}
    }
    mount(t) {
        this.current = t,
        xs.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (t, e) => this.bindToMotionValue(e, t)),
        vs.current || function() {
            if (vs.current = !0,
            _)
                if (window.matchMedia) {
                    const t = window.matchMedia("(prefers-reduced-motion)")
                      , e = () => ys.current = t.matches;
                    t.addListener(e),
                    e()
                } else
                    ys.current = !1
        }(),
        this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || ys.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        xs.delete(this.current),
        this.projection && this.projection.unmount(),
        be(this.notifyUpdate),
        be(this.render),
        this.valueSubscriptions.forEach(t => t()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features)
            this.features[t].unmount();
        this.current = null
    }
    bindToMotionValue(t, e) {
        const n = mt.has(t)
          , i = e.on("change", e => {
            this.latestValues[t] = e,
            this.props.onUpdate && xe.update(this.notifyUpdate, !1, !0),
            n && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , r = e.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, () => {
            i(),
            r()
        }
        )
    }
    sortNodePosition(t) {
        return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
    }
    loadFeatures({children: t, ...e}, n, i, r) {
        let o, s;
        for (let a = 0; a < Ps; a++) {
            const t = bs[a]
              , {isEnabled: n, Feature: i, ProjectionNode: r, MeasureLayout: l} = it[t];
            r && (o = r),
            n(e) && (!this.features[t] && i && (this.features[t] = new i(this)),
            l && (s = l))
        }
        if (("html" === this.type || "svg" === this.type) && !this.projection && o) {
            this.projection = new o(this.latestValues,this.parent && this.parent.projection);
            const {layoutId: t, layout: n, drag: i, dragConstraints: s, layoutScroll: a, layoutRoot: l} = e;
            this.projection.setOptions({
                layoutId: t,
                layout: n,
                alwaysMeasureLayout: Boolean(i) || s && X(s),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: "string" == typeof n ? n : "both",
                initialPromotionConfig: r,
                layoutScroll: a,
                layoutRoot: l
            })
        }
        return s
    }
    updateFeatures() {
        for (const t in this.features) {
            const e = this.features[t];
            e.isMounted ? e.update() : (e.mount(),
            e.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : {
            x: {
                min: 0,
                max: 0
            },
            y: {
                min: 0,
                max: 0
            }
        }
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, e) {
        this.latestValues[t] = e
    }
    makeTargetAnimatable(t, e=!0) {
        return this.makeTargetAnimatableFromInstance(t, this.props, e)
    }
    update(t, e) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = e;
        for (let n = 0; n < ws.length; n++) {
            const e = ws[n];
            this.propEventSubscriptions[e] && (this.propEventSubscriptions[e](),
            delete this.propEventSubscriptions[e]);
            const i = t["on" + e];
            i && (this.propEventSubscriptions[e] = this.on(e, i))
        }
        this.prevMotionValues = function(t, e, n) {
            const {willChange: i} = e;
            for (const r in e) {
                const o = e[r]
                  , s = n[r];
                if (gt(o))
                    t.addValue(r, o),
                    ji(i) && i.add(r);
                else if (gt(s))
                    t.addValue(r, Ni(o, {
                        owner: t
                    })),
                    ji(i) && i.remove(r);
                else if (s !== o)
                    if (t.hasValue(r)) {
                        const e = t.getValue(r);
                        !e.hasAnimated && e.set(o)
                    } else {
                        const e = t.getStaticValue(r);
                        t.addValue(r, Ni(void 0 !== e ? e : o, {
                            owner: t
                        }))
                    }
            }
            for (const r in n)
                void 0 === e[r] && t.removeValue(r);
            return e
        }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(t=!1) {
        if (t)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const t = this.parent && this.parent.getVariantContext() || {};
            return void 0 !== this.props.initial && (t.initial = this.props.initial),
            t
        }
        const e = {};
        for (let n = 0; n < Ss; n++) {
            const t = K[n]
              , i = this.props[t];
            (q(i) || !1 === i) && (e[t] = i)
        }
        return e
    }
    addVariantChild(t) {
        const e = this.getClosestVariantNode();
        if (e)
            return e.variantChildren && e.variantChildren.add(t),
            () => e.variantChildren.delete(t)
    }
    addValue(t, e) {
        e !== this.values.get(t) && (this.removeValue(t),
        this.bindToMotionValue(t, e)),
        this.values.set(t, e),
        this.latestValues[t] = e.get()
    }
    removeValue(t) {
        this.values.delete(t);
        const e = this.valueSubscriptions.get(t);
        e && (e(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, e) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let n = this.values.get(t);
        return void 0 === n && void 0 !== e && (n = Ni(e, {
            owner: this
        }),
        this.addValue(t, n)),
        n
    }
    readValue(t) {
        var e;
        return void 0 === this.latestValues[t] && this.current ? null !== (e = this.getBaseTargetFromProps(this.props, t)) && void 0 !== e ? e : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
    }
    setBaseTarget(t, e) {
        this.baseTarget[t] = e
    }
    getBaseTarget(t) {
        var e;
        const {initial: n} = this.props
          , i = "string" == typeof n || "object" == typeof n ? null === (e = ue(this.props, n)) || void 0 === e ? void 0 : e[t] : void 0;
        if (n && void 0 !== i)
            return i;
        const r = this.getBaseTargetFromProps(this.props, t);
        return void 0 === r || gt(r) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : r
    }
    on(t, e) {
        return this.events[t] || (this.events[t] = new Ii),
        this.events[t].add(e)
    }
    notify(t, ...e) {
        this.events[t] && this.events[t].notify(...e)
    }
}
class Es extends Ts {
    sortInstanceNodePosition(t, e) {
        return 2 & t.compareDocumentPosition(e) ? 1 : -1
    }
    getBaseTargetFromProps(t, e) {
        return t.style ? t.style[e] : void 0
    }
    removeValueFromRenderState(t, {vars: e, style: n}) {
        delete e[t],
        delete n[t]
    }
    makeTargetAnimatableFromInstance({transition: t, transitionEnd: e, ...n}, {transformValues: i}, r) {
        let o = function(t, e, n) {
            const i = {};
            for (const r in t) {
                const t = Xi(r, e);
                if (void 0 !== t)
                    i[r] = t;
                else {
                    const t = n.getValue(r);
                    t && (i[r] = t.get())
                }
            }
            return i
        }(n, t || {}, this);
        if (i && (e && (e = i(e)),
        n && (n = i(n)),
        o && (o = i(o))),
        r) {
            !function(t, e, n) {
                var i, r;
                const o = Object.keys(e).filter(e => !t.hasValue(e))
                  , s = o.length;
                if (s)
                    for (let a = 0; a < s; a++) {
                        const s = o[a]
                          , l = e[s];
                        let u = null;
                        Array.isArray(l) && (u = l[0]),
                        null === u && (u = null !== (r = null !== (i = n[s]) && void 0 !== i ? i : t.readValue(s)) && void 0 !== r ? r : e[s]),
                        null != u && ("string" == typeof u && (Bi(u) || Vi(u)) ? u = parseFloat(u) : !Hi(u) && $n.test(l) && (u = Ai(s, l)),
                        t.addValue(s, Ni(u, {
                            owner: t
                        })),
                        void 0 === n[s] && (n[s] = u),
                        null !== u && t.setBaseTarget(s, u))
                    }
            }(this, n, o);
            const t = gs(this, n, o, e);
            e = t.transitionEnd,
            n = t.target
        }
        return {
            transition: t,
            transitionEnd: e,
            ...n
        }
    }
}
class Ms extends Es {
    constructor() {
        super(...arguments),
        this.type = "html"
    }
    readValueFromInstance(t, e) {
        if (mt.has(e)) {
            const t = Ci(e);
            return t && t.default || 0
        }
        {
            const i = (n = t,
            window.getComputedStyle(n))
              , r = (bt(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof r ? r.trim() : r
        }
        var n
    }
    measureInstanceViewportBox(t, {transformPagePoint: e}) {
        return Hr(t, e)
    }
    build(t, e, n, i) {
        $t(t, e, n, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, e) {
        return ae(t, e)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        gt(t) && (this.childSubscription = t.on("change", t => {
            this.current && (this.current.textContent = `${t}`)
        }
        ))
    }
    renderInstance(t, e, n, i) {
        re(t, e, n, i)
    }
}
class Cs extends Es {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, e) {
        return t[e]
    }
    readValueFromInstance(t, e) {
        if (mt.has(e)) {
            const t = Ci(e);
            return t && t.default || 0
        }
        return e = oe.has(e) ? e : H(e),
        t.getAttribute(e)
    }
    measureInstanceViewportBox() {
        return {
            x: {
                min: 0,
                max: 0
            },
            y: {
                min: 0,
                max: 0
            }
        }
    }
    scrapeMotionValuesFromProps(t, e) {
        return le(t, e)
    }
    build(t, e, n, i) {
        Qt(t, e, n, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(t, e, n, i) {
        se(t, e, 0, i)
    }
    mount(t) {
        this.isSVGTag = ee(t.tagName),
        super.mount(t)
    }
}
const As = (t, e) => ht(t) ? new Cs(e,{
    enableHardwareAcceleration: !1
}) : new Ms(e,{
    enableHardwareAcceleration: !0
})
  , Vs = {
    ...sr,
    ...Ye,
    ...is,
    ...{
        layout: {
            ProjectionNode: ns,
            MeasureLayout: no
        }
    }
}
  , Rs = ut( (t, e) => function(t, {forwardMotionProps: e=!1}, n, i) {
    return {
        ...ht(t) ? Se : Te,
        preloadedFeatures: n,
        useRender: ie(e),
        createVisualElement: i,
        Component: t
    }
}(t, e, Vs, As));
function ks() {
    const t = O.useRef(!1);
    return W( () => (t.current = !0,
    () => {
        t.current = !1
    }
    ), []),
    t
}
class Ds extends O.Component {
    getSnapshotBeforeUpdate(t) {
        const e = this.props.childRef.current;
        if (e && t.isPresent && !this.props.isPresent) {
            const t = this.props.sizeRef.current;
            t.height = e.offsetHeight || 0,
            t.width = e.offsetWidth || 0,
            t.top = e.offsetTop,
            t.left = e.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function Ls({children: t, isPresent: e}) {
    const n = O.useId()
      , i = O.useRef(null)
      , r = O.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    });
    return O.useInsertionEffect( () => {
        const {width: t, height: o, top: s, left: a} = r.current;
        if (e || !i.current || !t || !o)
            return;
        i.current.dataset.motionPopId = n;
        const l = document.createElement("style");
        return document.head.appendChild(l),
        l.sheet && l.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${t}px !important;\n            height: ${o}px !important;\n            top: ${s}px !important;\n            left: ${a}px !important;\n          }\n        `),
        () => {
            document.head.removeChild(l)
        }
    }
    , [e]),
    O.createElement(Ds, {
        isPresent: e,
        childRef: i,
        sizeRef: r
    }, O.cloneElement(t, {
        ref: i
    }))
}
const js = ({children: t, initial: e, isPresent: n, onExitComplete: i, custom: r, presenceAffectsLayout: o, mode: s}) => {
    const a = ce(Bs)
      , l = O.useId()
      , u = O.useMemo( () => ({
        id: l,
        initial: e,
        isPresent: n,
        custom: r,
        onExitComplete: t => {
            a.set(t, !0);
            for (const e of a.values())
                if (!e)
                    return;
            i && i()
        }
        ,
        register: t => (a.set(t, !1),
        () => a.delete(t))
    }), o ? void 0 : [n]);
    return O.useMemo( () => {
        a.forEach( (t, e) => a.set(e, !1))
    }
    , [n]),
    O.useEffect( () => {
        !n && !a.size && i && i()
    }
    , [n]),
    "popLayout" === s && (t = O.createElement(Ls, {
        isPresent: n
    }, t)),
    O.createElement($.Provider, {
        value: u
    }, t)
}
;
function Bs() {
    return new Map
}
const Fs = t => t.key || "";
const Os = ({children: t, custom: e, initial: n=!0, onExitComplete: i, exitBeforeEnter: r, presenceAffectsLayout: o=!0, mode: s="sync"}) => {
    const a = O.useContext(rt).forceRender || function() {
        const t = ks()
          , [e,n] = O.useState(0)
          , i = O.useCallback( () => {
            t.current && n(e + 1)
        }
        , [e]);
        return [O.useCallback( () => xe.postRender(i), [i]), e]
    }()[0]
      , l = ks()
      , u = function(t) {
        const e = [];
        return O.Children.forEach(t, t => {
            O.isValidElement(t) && e.push(t)
        }
        ),
        e
    }(t);
    let c = u;
    const h = O.useRef(new Map).current
      , d = O.useRef(c)
      , p = O.useRef(new Map).current
      , m = O.useRef(!0);
    var f;
    if (W( () => {
        m.current = !1,
        function(t, e) {
            t.forEach(t => {
                const n = Fs(t);
                e.set(n, t)
            }
            )
        }(u, p),
        d.current = c
    }
    ),
    f = () => {
        m.current = !0,
        p.clear(),
        h.clear()
    }
    ,
    O.useEffect( () => () => f(), []),
    m.current)
        return O.createElement(O.Fragment, null, c.map(t => O.createElement(js, {
            key: Fs(t),
            isPresent: !0,
            initial: !!n && void 0,
            presenceAffectsLayout: o,
            mode: s
        }, t)));
    c = [...c];
    const g = d.current.map(Fs)
      , y = u.map(Fs)
      , v = g.length;
    for (let x = 0; x < v; x++) {
        const t = g[x];
        -1 !== y.indexOf(t) || h.has(t) || h.set(t, void 0)
    }
    return "wait" === s && h.size && (c = []),
    h.forEach( (t, n) => {
        if (-1 !== y.indexOf(n))
            return;
        const r = p.get(n);
        if (!r)
            return;
        const m = g.indexOf(n);
        let f = t;
        if (!f) {
            const t = () => {
                h.delete(n);
                const t = Array.from(p.keys()).filter(t => !y.includes(t));
                if (t.forEach(t => p.delete(t)),
                d.current = u.filter(e => {
                    const i = Fs(e);
                    return i === n || t.includes(i)
                }
                ),
                !h.size) {
                    if (!1 === l.current)
                        return;
                    a(),
                    i && i()
                }
            }
            ;
            f = O.createElement(js, {
                key: Fs(r),
                isPresent: !1,
                onExitComplete: t,
                custom: e,
                presenceAffectsLayout: o,
                mode: s
            }, r),
            h.set(n, f)
        }
        c.splice(m, 0, f)
    }
    ),
    c = c.map(t => {
        const e = t.key;
        return h.has(e) ? t : O.createElement(js, {
            key: Fs(t),
            isPresent: !0,
            presenceAffectsLayout: o,
            mode: s
        }, t)
    }
    ),
    O.createElement(O.Fragment, null, h.size ? c : c.map(t => O.cloneElement(t)))
}
;
var Is = {};
!function t(e, n, i, r) {
    var o = !!(e.Worker && e.Blob && e.Promise && e.OffscreenCanvas && e.OffscreenCanvasRenderingContext2D && e.HTMLCanvasElement && e.HTMLCanvasElement.prototype.transferControlToOffscreen && e.URL && e.URL.createObjectURL)
      , s = "function" == typeof Path2D && "function" == typeof DOMMatrix;
    function a() {}
    function l(t) {
        var i = n.exports.Promise
          , r = void 0 !== i ? i : e.Promise;
        return "function" == typeof r ? new r(t) : (t(a, a),
        null)
    }
    var u, c, h, d, p, m, f = function(t, e) {
        return {
            transform: function(n) {
                if (t)
                    return n;
                if (e.has(n))
                    return e.get(n);
                var i = new OffscreenCanvas(n.width,n.height);
                return i.getContext("2d").drawImage(n, 0, 0),
                e.set(n, i),
                i
            },
            clear: function() {
                e.clear()
            }
        }
    }(function() {
        if (!e.OffscreenCanvas)
            return !1;
        try {
            var t = new OffscreenCanvas(1,1)
              , n = t.getContext("2d");
            n.fillRect(0, 0, 1, 1);
            var i = t.transferToImageBitmap();
            n.createPattern(i, "no-repeat")
        } catch (r) {
            return !1
        }
        return !0
    }(), new Map), g = (h = Math.floor(1e3 / 60),
    d = {},
    p = 0,
    "function" == typeof requestAnimationFrame && "function" == typeof cancelAnimationFrame ? (u = function(t) {
        var e = Math.random();
        return d[e] = requestAnimationFrame(function n(i) {
            p === i || p + h - 1 < i ? (p = i,
            delete d[e],
            t()) : d[e] = requestAnimationFrame(n)
        }),
        e
    }
    ,
    c = function(t) {
        d[t] && cancelAnimationFrame(d[t])
    }
    ) : (u = function(t) {
        return setTimeout(t, h)
    }
    ,
    c = function(t) {
        return clearTimeout(t)
    }
    ),
    {
        frame: u,
        cancel: c
    }), y = function() {
        var e, n, r = {};
        return function() {
            if (e)
                return e;
            if (!i && o) {
                var s = ["var CONFETTI, SIZE = {}, module = {};", "(" + t.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join("\n");
                try {
                    e = new Worker(URL.createObjectURL(new Blob([s])))
                } catch (a) {
                    return "undefined" != typeof console && console.warn,
                    null
                }
                !function(t) {
                    function e(e, n) {
                        t.postMessage({
                            options: e || {},
                            callback: n
                        })
                    }
                    t.init = function(e) {
                        var n = e.transferControlToOffscreen();
                        t.postMessage({
                            canvas: n
                        }, [n])
                    }
                    ,
                    t.fire = function(i, o, s) {
                        if (n)
                            return e(i, null),
                            n;
                        var a = Math.random().toString(36).slice(2);
                        return n = l(function(o) {
                            function l(e) {
                                e.data.callback === a && (delete r[a],
                                t.removeEventListener("message", l),
                                n = null,
                                f.clear(),
                                s(),
                                o())
                            }
                            t.addEventListener("message", l),
                            e(i, a),
                            r[a] = l.bind(null, {
                                data: {
                                    callback: a
                                }
                            })
                        })
                    }
                    ,
                    t.reset = function() {
                        for (var e in t.postMessage({
                            reset: !0
                        }),
                        r)
                            r[e](),
                            delete r[e]
                    }
                }(e)
            }
            return e
        }
    }(), v = {
        particleCount: 50,
        angle: 90,
        spread: 45,
        startVelocity: 45,
        decay: .9,
        gravity: 1,
        drift: 0,
        ticks: 200,
        x: .5,
        y: .5,
        shapes: ["square", "circle"],
        zIndex: 100,
        colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"],
        disableForReducedMotion: !1,
        scalar: 1
    };
    function x(t, e, n) {
        return function(t, e) {
            return e ? e(t) : t
        }(t && null != t[e] ? t[e] : v[e], n)
    }
    function b(t) {
        return t < 0 ? 0 : Math.floor(t)
    }
    function P(t, e) {
        return Math.floor(Math.random() * (e - t)) + t
    }
    function w(t) {
        return parseInt(t, 16)
    }
    function S(t) {
        return t.map(T)
    }
    function T(t) {
        var e = String(t).replace(/[^0-9a-f]/gi, "");
        return e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
        {
            r: w(e.substring(0, 2)),
            g: w(e.substring(2, 4)),
            b: w(e.substring(4, 6))
        }
    }
    function E(t) {
        t.width = document.documentElement.clientWidth,
        t.height = document.documentElement.clientHeight
    }
    function M(t) {
        var e = t.getBoundingClientRect();
        t.width = e.width,
        t.height = e.height
    }
    function C(t) {
        var e = t.angle * (Math.PI / 180)
          , n = t.spread * (Math.PI / 180);
        return {
            x: t.x,
            y: t.y,
            wobble: 10 * Math.random(),
            wobbleSpeed: Math.min(.11, .1 * Math.random() + .05),
            velocity: .5 * t.startVelocity + Math.random() * t.startVelocity,
            angle2D: -e + (.5 * n - Math.random() * n),
            tiltAngle: (.5 * Math.random() + .25) * Math.PI,
            color: t.color,
            shape: t.shape,
            tick: 0,
            totalTicks: t.ticks,
            decay: t.decay,
            drift: t.drift,
            random: Math.random() + 2,
            tiltSin: 0,
            tiltCos: 0,
            wobbleX: 0,
            wobbleY: 0,
            gravity: 3 * t.gravity,
            ovalScalar: .6,
            scalar: t.scalar,
            flat: t.flat
        }
    }
    function A(t, e) {
        e.x += Math.cos(e.angle2D) * e.velocity + e.drift,
        e.y += Math.sin(e.angle2D) * e.velocity + e.gravity,
        e.velocity *= e.decay,
        e.flat ? (e.wobble = 0,
        e.wobbleX = e.x + 10 * e.scalar,
        e.wobbleY = e.y + 10 * e.scalar,
        e.tiltSin = 0,
        e.tiltCos = 0,
        e.random = 1) : (e.wobble += e.wobbleSpeed,
        e.wobbleX = e.x + 10 * e.scalar * Math.cos(e.wobble),
        e.wobbleY = e.y + 10 * e.scalar * Math.sin(e.wobble),
        e.tiltAngle += .1,
        e.tiltSin = Math.sin(e.tiltAngle),
        e.tiltCos = Math.cos(e.tiltAngle),
        e.random = Math.random() + 2);
        var n = e.tick++ / e.totalTicks
          , i = e.x + e.random * e.tiltCos
          , r = e.y + e.random * e.tiltSin
          , o = e.wobbleX + e.random * e.tiltCos
          , a = e.wobbleY + e.random * e.tiltSin;
        if (t.fillStyle = "rgba(" + e.color.r + ", " + e.color.g + ", " + e.color.b + ", " + (1 - n) + ")",
        t.beginPath(),
        s && "path" === e.shape.type && "string" == typeof e.shape.path && Array.isArray(e.shape.matrix))
            t.fill(function(t, e, n, i, r, o, s) {
                var a = new Path2D(t)
                  , l = new Path2D;
                l.addPath(a, new DOMMatrix(e));
                var u = new Path2D;
                return u.addPath(l, new DOMMatrix([Math.cos(s) * r, Math.sin(s) * r, -Math.sin(s) * o, Math.cos(s) * o, n, i])),
                u
            }(e.shape.path, e.shape.matrix, e.x, e.y, .1 * Math.abs(o - i), .1 * Math.abs(a - r), Math.PI / 10 * e.wobble));
        else if ("bitmap" === e.shape.type) {
            var l = Math.PI / 10 * e.wobble
              , u = .1 * Math.abs(o - i)
              , c = .1 * Math.abs(a - r)
              , h = e.shape.bitmap.width * e.scalar
              , d = e.shape.bitmap.height * e.scalar
              , p = new DOMMatrix([Math.cos(l) * u, Math.sin(l) * u, -Math.sin(l) * c, Math.cos(l) * c, e.x, e.y]);
            p.multiplySelf(new DOMMatrix(e.shape.matrix));
            var m = t.createPattern(f.transform(e.shape.bitmap), "no-repeat");
            m.setTransform(p),
            t.globalAlpha = 1 - n,
            t.fillStyle = m,
            t.fillRect(e.x - h / 2, e.y - d / 2, h, d),
            t.globalAlpha = 1
        } else if ("circle" === e.shape)
            t.ellipse ? t.ellipse(e.x, e.y, Math.abs(o - i) * e.ovalScalar, Math.abs(a - r) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI) : function(t, e, n, i, r, o, s, a, l) {
                t.save(),
                t.translate(e, n),
                t.rotate(o),
                t.scale(i, r),
                t.arc(0, 0, 1, s, a, l),
                t.restore()
            }(t, e.x, e.y, Math.abs(o - i) * e.ovalScalar, Math.abs(a - r) * e.ovalScalar, Math.PI / 10 * e.wobble, 0, 2 * Math.PI);
        else if ("star" === e.shape)
            for (var g = Math.PI / 2 * 3, y = 4 * e.scalar, v = 8 * e.scalar, x = e.x, b = e.y, P = 5, w = Math.PI / P; P--; )
                x = e.x + Math.cos(g) * v,
                b = e.y + Math.sin(g) * v,
                t.lineTo(x, b),
                g += w,
                x = e.x + Math.cos(g) * y,
                b = e.y + Math.sin(g) * y,
                t.lineTo(x, b),
                g += w;
        else
            t.moveTo(Math.floor(e.x), Math.floor(e.y)),
            t.lineTo(Math.floor(e.wobbleX), Math.floor(r)),
            t.lineTo(Math.floor(o), Math.floor(a)),
            t.lineTo(Math.floor(i), Math.floor(e.wobbleY));
        return t.closePath(),
        t.fill(),
        e.tick < e.totalTicks
    }
    function V(t, n) {
        var s, a = !t, u = !!x(n || {}, "resize"), c = !1, h = x(n, "disableForReducedMotion", Boolean), d = o && !!x(n || {}, "useWorker") ? y() : null, p = a ? E : M, m = !(!t || !d) && !!t.__confetti_initialized, v = "function" == typeof matchMedia && matchMedia("(prefers-reduced-motion)").matches;
        function w(e, n, o) {
            for (var a = x(e, "particleCount", b), u = x(e, "angle", Number), c = x(e, "spread", Number), h = x(e, "startVelocity", Number), d = x(e, "decay", Number), m = x(e, "gravity", Number), y = x(e, "drift", Number), v = x(e, "colors", S), w = x(e, "ticks", Number), T = x(e, "shapes"), E = x(e, "scalar"), M = !!x(e, "flat"), V = function(t) {
                var e = x(t, "origin", Object);
                return e.x = x(e, "x", Number),
                e.y = x(e, "y", Number),
                e
            }(e), R = a, k = [], D = t.width * V.x, L = t.height * V.y; R--; )
                k.push(C({
                    x: D,
                    y: L,
                    angle: u,
                    spread: c,
                    startVelocity: h,
                    color: v[R % v.length],
                    shape: T[P(0, T.length)],
                    ticks: w,
                    decay: d,
                    gravity: m,
                    drift: y,
                    scalar: E,
                    flat: M
                }));
            return s ? s.addFettis(k) : (s = function(t, e, n, o, s) {
                var a, u, c = e.slice(), h = t.getContext("2d"), d = l(function(e) {
                    function l() {
                        a = u = null,
                        h.clearRect(0, 0, o.width, o.height),
                        f.clear(),
                        s(),
                        e()
                    }
                    a = g.frame(function e() {
                        !i || o.width === r.width && o.height === r.height || (o.width = t.width = r.width,
                        o.height = t.height = r.height),
                        o.width || o.height || (n(t),
                        o.width = t.width,
                        o.height = t.height),
                        h.clearRect(0, 0, o.width, o.height),
                        (c = c.filter(function(t) {
                            return A(h, t)
                        })).length ? a = g.frame(e) : l()
                    }),
                    u = l
                });
                return {
                    addFettis: function(t) {
                        return c = c.concat(t),
                        d
                    },
                    canvas: t,
                    promise: d,
                    reset: function() {
                        a && g.cancel(a),
                        u && u()
                    }
                }
            }(t, k, p, n, o),
            s.promise)
        }
        function T(n) {
            var i = h || x(n, "disableForReducedMotion", Boolean)
              , r = x(n, "zIndex", Number);
            if (i && v)
                return l(function(t) {
                    t()
                });
            a && s ? t = s.canvas : a && !t && (t = function(t) {
                var e = document.createElement("canvas");
                return e.style.position = "fixed",
                e.style.top = "0px",
                e.style.left = "0px",
                e.style.pointerEvents = "none",
                e.style.zIndex = t,
                e
            }(r),
            document.body.appendChild(t)),
            u && !m && p(t);
            var o = {
                width: t.width,
                height: t.height
            };
            function f() {
                if (d) {
                    var e = {
                        getBoundingClientRect: function() {
                            if (!a)
                                return t.getBoundingClientRect()
                        }
                    };
                    return p(e),
                    void d.postMessage({
                        resize: {
                            width: e.width,
                            height: e.height
                        }
                    })
                }
                o.width = o.height = null
            }
            function g() {
                s = null,
                u && (c = !1,
                e.removeEventListener("resize", f)),
                a && t && (document.body.contains(t) && document.body.removeChild(t),
                t = null,
                m = !1)
            }
            return d && !m && d.init(t),
            m = !0,
            d && (t.__confetti_initialized = !0),
            u && !c && (c = !0,
            e.addEventListener("resize", f, !1)),
            d ? d.fire(n, o, g) : w(n, o, g)
        }
        return T.reset = function() {
            d && d.reset(),
            s && s.reset()
        }
        ,
        T
    }
    function R() {
        return m || (m = V(null, {
            useWorker: !0,
            resize: !0
        })),
        m
    }
    n.exports = function() {
        return R().apply(this, arguments)
    }
    ,
    n.exports.reset = function() {
        R().reset()
    }
    ,
    n.exports.create = V,
    n.exports.shapeFromPath = function(t) {
        if (!s)
            throw new Error("path confetti are not supported in this browser");
        var e, n;
        "string" == typeof t ? e = t : (e = t.path,
        n = t.matrix);
        var i = new Path2D(e)
          , r = document.createElement("canvas").getContext("2d");
        if (!n) {
            for (var o, a, l = 1e3, u = l, c = l, h = 0, d = 0, p = 0; p < l; p += 2)
                for (var m = 0; m < l; m += 2)
                    r.isPointInPath(i, p, m, "nonzero") && (u = Math.min(u, p),
                    c = Math.min(c, m),
                    h = Math.max(h, p),
                    d = Math.max(d, m));
            o = h - u,
            a = d - c;
            var f = Math.min(10 / o, 10 / a);
            n = [f, 0, 0, f, -Math.round(o / 2 + u) * f, -Math.round(a / 2 + c) * f]
        }
        return {
            type: "path",
            path: e,
            matrix: n
        }
    }
    ,
    n.exports.shapeFromText = function(t) {
        var e, n = 1, i = "#000000", r = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
        "string" == typeof t ? e = t : (e = t.text,
        n = "scalar"in t ? t.scalar : n,
        r = "fontFamily"in t ? t.fontFamily : r,
        i = "color"in t ? t.color : i);
        var o = 10 * n
          , s = o + "px " + r
          , a = new OffscreenCanvas(o,o)
          , l = a.getContext("2d");
        l.font = s;
        var u = l.measureText(e)
          , c = Math.ceil(u.actualBoundingBoxRight + u.actualBoundingBoxLeft)
          , h = Math.ceil(u.actualBoundingBoxAscent + u.actualBoundingBoxDescent)
          , d = u.actualBoundingBoxLeft + 2
          , p = u.actualBoundingBoxAscent + 2;
        c += 4,
        h += 4,
        (l = (a = new OffscreenCanvas(c,h)).getContext("2d")).font = s,
        l.fillStyle = i,
        l.fillText(e, d, p);
        var m = 1 / n;
        return {
            type: "bitmap",
            bitmap: a.transferToImageBitmap(),
            matrix: [m, 0, 0, m, -c * m / 2, -h * m / 2]
        }
    }
}(function() {
    return "undefined" != typeof window ? window : "undefined" != typeof self ? self : this || {}
}(), Is, !1);
const Us = Is.exports;
Is.exports.create;
export {Os as A, I as R, Us as c, Rs as m, O as r};
