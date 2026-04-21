import {r as e, m as t, c as s, A as a, R as r} from "./animation-zVTY7j_O.js";
import {r as l} from "./vendor-B29nCA6V.js";
!function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
            t(e);
        new MutationObserver(e => {
            for (const s of e)
                if ("childList" === s.type)
                    for (const e of s.addedNodes)
                        "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
        }
        ).observe(document, {
            childList: !0,
            subtree: !0
        })
    }
    function t(e) {
        if (e.ep)
            return;
        e.ep = !0;
        const t = function(e) {
            const t = {};
            return e.integrity && (t.integrity = e.integrity),
            e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
            "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin",
            t
        }(e);
        fetch(e.href, t)
    }
}();
var n = {
    exports: {}
}
  , c = {}
  , i = e
  , o = Symbol.for("react.element")
  , d = Symbol.for("react.fragment")
  , x = Object.prototype.hasOwnProperty
  , m = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , h = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function p(e, t, s) {
    var a, r = {}, l = null, n = null;
    for (a in void 0 !== s && (l = "" + s),
    void 0 !== t.key && (l = "" + t.key),
    void 0 !== t.ref && (n = t.ref),
    t)
        x.call(t, a) && !h.hasOwnProperty(a) && (r[a] = t[a]);
    if (e && e.defaultProps)
        for (a in t = e.defaultProps)
            void 0 === r[a] && (r[a] = t[a]);
    return {
        $$typeof: o,
        type: e,
        key: l,
        ref: n,
        props: r,
        _owner: m.current
    }
}
c.Fragment = d,
c.jsx = p,
c.jsxs = p,
n.exports = c;
var u = n.exports
  , y = {}
  , f = l;
y.createRoot = f.createRoot,
y.hydrateRoot = f.hydrateRoot;
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var g = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w = (t, s) => {
    const a = e.forwardRef( ({color: a="currentColor", size: r=24, strokeWidth: l=2, absoluteStrokeWidth: n, className: c="", children: i, ...o}, d) => {
        return e.createElement("svg", {
            ref: d,
            ...g,
            width: r,
            height: r,
            stroke: a,
            strokeWidth: n ? 24 * Number(l) / Number(r) : l,
            className: ["lucide", `lucide-${x = t,
            x.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()}`, c].join(" "),
            ...o
        }, [...s.map( ([t,s]) => e.createElement(t, s)), ...Array.isArray(i) ? i : [i]]);
        var x
    }
    );
    return a.displayName = `${t}`,
    a
}
  , b = w("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]])
  , j = w("CheckCircle2", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]])
  , N = w("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]])
  , v = w("Delete", [["path", {
    d: "M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",
    key: "1oy587"
}], ["line", {
    x1: "18",
    x2: "12",
    y1: "9",
    y2: "15",
    key: "1olkx5"
}], ["line", {
    x1: "12",
    x2: "18",
    y1: "9",
    y2: "15",
    key: "1n50pc"
}]])
  , k = w("Gamepad2", [["line", {
    x1: "6",
    x2: "10",
    y1: "11",
    y2: "11",
    key: "1gktln"
}], ["line", {
    x1: "8",
    x2: "8",
    y1: "9",
    y2: "13",
    key: "qnk9ow"
}], ["line", {
    x1: "15",
    x2: "15.01",
    y1: "12",
    y2: "12",
    key: "krot7o"
}], ["line", {
    x1: "18",
    x2: "18.01",
    y1: "10",
    y2: "10",
    key: "1lcuu1"
}], ["path", {
    d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
    key: "mfqc10"
}]])
  , _ = w("Lock", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]])
  , E = w("RotateCcw", [["path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "1357e3"
}], ["path", {
    d: "M3 3v5h5",
    key: "1xhq8a"
}]])
  , C = w("Target", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "6",
    key: "1vlfrh"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "2",
    key: "1c9p78"
}]])
  , S = w("Trophy", [["path", {
    d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
    key: "17hqa7"
}], ["path", {
    d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
    key: "lmptdp"
}], ["path", {
    d: "M4 22h16",
    key: "57wxv0"
}], ["path", {
    d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
    key: "1nw9bq"
}], ["path", {
    d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
    key: "1np0yb"
}], ["path", {
    d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
    key: "u46fv3"
}]])
  , T = ({digit: e, status: s, size: a="normal"}) => {
    const r = "large" === a ? "w-12 h-14 sm:w-14 sm:h-16 text-2xl sm:text-3xl" : "w-8 h-10 sm:w-10 sm:h-12 text-lg sm:text-xl"
      , {bg: l, shadow: n} = ( () => {
        switch (s) {
        case "correct":
            return {
                bg: "bg-[#2ECC71] border-2 border-[#27AE60] text-white",
                shadow: "shadow-[0_4px_0_#1E8449]"
            };
        case "filled":
            return {
                bg: "bg-white border-2 border-gray-200 text-gray-800",
                shadow: "shadow-[0_4px_0_#E5E7EB]"
            };
        case "match":
            return {
                bg: "bg-yellow-400 border-2 border-yellow-500 text-white",
                shadow: "shadow-[0_4px_0_#D97706]"
            };
        default:
            return {
                bg: "bg-white border-2 border-gray-100 text-gray-400",
                shadow: "shadow-sm"
            }
        }
    }
    )();
    return u.jsx(t.div, {
        initial: {
            scale: .8,
            opacity: 0
        },
        animate: {
            scale: 1,
            opacity: 1
        },
        className: `\n        ${r} ${l} ${n} \n        rounded-xl sm:rounded-2xl \n        flex items-center justify-center \n        mono-digit font-black \n        transition-colors duration-200\n      `,
        children: e
    })
}
  , D = ({onKeyPress: t, onDelete: s, onConfirm: a, canConfirm: r, disabled: l=!1}) => {
    const n = e.useRef(0);
    e.useRef(null);
    const c = e.useCallback(e => {
        if (l)
            return;
        const a = Date.now();
        a - n.current < 300 || (n.current = a,
        window.navigator && window.navigator.vibrate && window.navigator.vibrate(10),
        "⌫" === e ? s() : "C" === e ? s(!0) : t(e))
    }
    , [l, s, t])
      , i = e.useCallback( (e, t) => {
        e.preventDefault(),
        c(t)
    }
    , [c])
      , o = e => {
        const t = "\n      h-14 sm:h-16 rounded-full \n      text-xl sm:text-2xl font-bold \n      btn-3d flex items-center justify-center \n      select-none touch-manipulation\n      active:scale-95 transition-transform\n    ";
        return "C" === e ? `${t} bg-rose-100 text-rose-500 shadow-[0_4px_0_#FECDD3]` : "⌫" === e ? `${t} bg-gray-200 text-gray-500 shadow-[0_4px_0_#D1D5DB]` : `${t} bg-white text-gray-700 shadow-[0_4px_0_#E5E7EB] active:shadow-none hover:bg-gray-50`
    }
    ;
    return u.jsxs("div", {
        className: "grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-[320px] mx-auto mt-auto pb-safe px-4",
        children: [["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "⌫"].map(e => u.jsx("button", {
            onPointerDown: t => i(t, e),
            className: o(e),
            style: {
                touchAction: "manipulation"
            },
            "aria-label": "⌫" === e ? "删除" : "C" === e ? "清空" : `数字 ${e}`,
            children: "⌫" === e ? u.jsx(v, {
                className: "w-5 h-5 sm:w-6 sm:h-6"
            }) : e
        }, e)), u.jsxs("button", {
            onPointerDown: e => {
                e.preventDefault(),
                r && a()
            }
            ,
            disabled: !r,
            className: `\n          col-span-3 h-14 sm:h-16 mt-2 rounded-2xl \n          font-black text-lg sm:text-xl tracking-wide \n          btn-3d flex items-center justify-center space-x-2\n          active:scale-95 transition-transform\n          ${r ? "bg-[#E60012] text-white shadow-[0_4px_0_#99000C]" : "bg-gray-200 text-gray-400 shadow-[0_4px_0_#D1D5DB] cursor-not-allowed"}\n        `,
            style: {
                touchAction: "manipulation"
            },
            "aria-label": "确定",
            children: [u.jsx("span", {
                children: "确定"
            }), r && u.jsx(b, {
                className: "w-5 h-5"
            })]
        })]
    })
}
;
function I() {
    const [r,l] = e.useState("SETUP")
      , [n,c] = e.useState(4)
      , [i,o] = e.useState("马里奥")
      , [d,x] = e.useState("路易吉")
      , [m,h] = e.useState("")
      , [p,y] = e.useState("")
      , [f,g] = e.useState([])
      , [w,b] = e.useState([])
      , [v,I] = e.useState(1)
      , [R,P] = e.useState("")
      , [M,A] = e.useState(null)
      , [$,L] = e.useState(null)
      , [O,B] = e.useState("")
      , [W,U] = e.useState("")
      , F = e => {
        R.length < n && P(t => t + e)
    }
      , z = (e=!1) => {
        P(e ? "" : e => e.slice(0, -1))
    }
      , q = () => {
        g([]),
        b([]),
        h(""),
        y(""),
        A(null),
        L(null),
        P(""),
        l("SETUP")
    }
      , H = () => {
        I(1),
        P(""),
        U(`请 ${i} 设定密码`),
        B("INPUT_SECRET"),
        l("INTERMISSION")
    }
      , V = () => {
        1 === v ? (h(R),
        P(""),
        I(2),
        U(`请 ${d} 设定密码`),
        B("INPUT_SECRET"),
        l("INTERMISSION")) : (y(R),
        P(""),
        I(1),
        U(`游戏开始！${i} 先手`),
        B("PLAYING"),
        l("INTERMISSION"))
    }
      , G = () => {
        const e = ( (e, t) => {
            let s = 0;
            for (let a = 0; a < e.length; a++)
                e[a] === t[a] && s++;
            return s
        }
        )(1 === v ? p : m, R)
          , t = e === n
          , a = {
            guess: R,
            score: e,
            isWin: t
        };
        1 === v ? g([...f, a]) : b([...w, a]),
        t ? (A(v),
        l("VICTORY"),
        ( () => {
            const e = Date.now() + 3e3
              , t = ["#E60012", "#00B3E6", "#FFD700"]
              , a = () => {
                s({
                    particleCount: 8,
                    angle: 60,
                    spread: 55,
                    origin: {
                        x: 0
                    },
                    colors: t
                }),
                s({
                    particleCount: 8,
                    angle: 120,
                    spread: 55,
                    origin: {
                        x: 1
                    },
                    colors: t
                }),
                Date.now() < e && requestAnimationFrame(a)
            }
            ;
            a()
        }
        )()) : L({
            score: e,
            isWin: t
        })
    }
      , Y = () => {
        L(null),
        P("");
        const e = 1 === v ? 2 : 1
          , t = 1 === e ? i : d;
        I(e),
        U(`轮到 ${t} 猜测`),
        B("PLAYING"),
        l("INTERMISSION")
    }
    ;
    return u.jsxs(a, {
        mode: "wait",
        children: ["SETUP" === r && u.jsx(t.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            className: "h-screen w-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-pattern relative overflow-hidden",
            children: u.jsxs("div", {
                className: "text-center space-y-6 sm:space-y-8 max-w-md w-full",
                children: [u.jsxs(t.div, {
                    initial: {
                        y: -20
                    },
                    animate: {
                        y: 0
                    },
                    className: "space-y-2 flex flex-col items-center",
                    children: [u.jsx("div", {
                        className: "w-16 h-16 sm:w-20 sm:h-20 bg-[#E60012] rounded-2xl sm:rounded-3xl shadow-lg flex items-center justify-center rotate-[-10deg] mb-4",
                        children: u.jsx("span", {
                            className: "text-white text-3xl sm:text-4xl font-black",
                            children: "?"
                        })
                    }), u.jsxs("h1", {
                        className: "text-3xl sm:text-4xl font-black text-gray-800 tracking-tight",
                        children: ["GUESS ", u.jsx("span", {
                            className: "text-[#E60012]",
                            children: "MATE"
                        })]
                    }), u.jsx("p", {
                        className: "text-gray-500 font-bold bg-white px-3 py-1 rounded-full text-xs sm:text-sm shadow-sm border border-gray-100",
                        children: "双人默契大挑战"
                    })]
                }), u.jsxs("div", {
                    className: "nintendo-card p-6 sm:p-8 space-y-4 sm:space-y-6",
                    children: [u.jsx("p", {
                        className: "text-gray-600 font-bold text-base sm:text-lg",
                        children: "选择难度"
                    }), u.jsx("div", {
                        className: "grid grid-cols-3 gap-3 sm:gap-4",
                        children: [3, 4, 5].map(e => u.jsx("button", {
                            onClick: () => {
                                c(e),
                                l("NAME_SETUP")
                            }
                            ,
                            className: "aspect-square rounded-xl sm:rounded-2xl bg-gray-100 text-gray-700 text-2xl sm:text-3xl font-black btn-3d shadow-[0_4px_0_#D1D5DB] border-2 border-transparent hover:bg-white hover:border-[#E60012]/30 hover:text-[#E60012]",
                            children: e
                        }, e))
                    })]
                })]
            })
        }), "NAME_SETUP" === r && u.jsx(t.div, {
            initial: {
                opacity: 0,
                x: 50
            },
            animate: {
                opacity: 1,
                x: 0
            },
            className: "h-screen w-screen flex flex-col items-center justify-center p-4 sm:p-6 bg-pattern overflow-hidden",
            children: u.jsxs("div", {
                className: "w-full max-w-sm space-y-6 sm:space-y-8",
                children: [u.jsxs("div", {
                    className: "text-center",
                    children: [u.jsx("h2", {
                        className: "text-xl sm:text-2xl font-black text-gray-800",
                        children: "创建角色档案"
                    }), u.jsx("p", {
                        className: "text-gray-400 text-xs sm:text-sm mt-1",
                        children: "给彼此起个代号吧"
                    })]
                }), u.jsxs("div", {
                    className: "nintendo-card p-4 sm:p-6 space-y-4 sm:space-y-6",
                    children: [u.jsxs("div", {
                        className: "space-y-2 sm:space-y-3",
                        children: [u.jsxs("label", {
                            className: "text-xs text-gray-500 font-bold uppercase tracking-wider ml-1 flex items-center",
                            children: [u.jsx("div", {
                                className: "w-2 h-2 rounded-full bg-[#E60012] mr-2"
                            }), "Player 1"]
                        }), u.jsx("input", {
                            type: "text",
                            className: "name-input text-lg sm:text-xl w-full py-3 sm:py-4",
                            value: i,
                            onChange: e => o(e.target.value),
                            placeholder: "马里奥",
                            maxLength: 10
                        })]
                    }), u.jsxs("div", {
                        className: "space-y-2 sm:space-y-3",
                        children: [u.jsxs("label", {
                            className: "text-xs text-gray-500 font-bold uppercase tracking-wider ml-1 flex items-center",
                            children: [u.jsx("div", {
                                className: "w-2 h-2 rounded-full bg-[#00B3E6] mr-2"
                            }), "Player 2"]
                        }), u.jsx("input", {
                            type: "text",
                            className: "name-input text-lg sm:text-xl w-full py-3 sm:py-4",
                            value: d,
                            onChange: e => x(e.target.value),
                            placeholder: "路易吉",
                            maxLength: 10
                        })]
                    })]
                }), u.jsx("button", {
                    onClick: H,
                    className: "w-full h-14 sm:h-16 bg-[#E60012] text-white font-black rounded-2xl text-lg sm:text-xl shadow-[0_4px_0_#99000C] btn-3d active:translate-y-1 active:shadow-none",
                    children: "START GAME"
                })]
            })
        }), "INTERMISSION" === r && ( () => {
            const e = 1 === v
              , s = e ? "#E60012" : "#00B3E6"
              , a = e ? "bg-rose-50" : "bg-sky-50"
              , r = e ? "text-[#E60012]" : "text-[#00B3E6]";
            return u.jsxs(t.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                onClick: () => l(O),
                className: `h-screen w-screen flex flex-col items-center justify-center ${a} cursor-pointer relative overflow-hidden`,
                children: [u.jsx("div", {
                    className: "absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none",
                    children: u.jsxs("div", {
                        className: "grid grid-cols-2 gap-20 transform rotate-12 scale-150",
                        children: [u.jsx("div", {
                            className: `w-32 h-64 rounded-l-full bg-current ${r}`
                        }), u.jsx("div", {
                            className: `w-32 h-64 rounded-r-full bg-current ${r}`
                        })]
                    })
                }), u.jsx("div", {
                    className: "z-10 text-center space-y-6 px-6 max-w-sm w-full",
                    children: u.jsxs(t.div, {
                        initial: {
                            scale: .8
                        },
                        animate: {
                            scale: 1
                        },
                        className: "nintendo-card p-10 shadow-xl flex flex-col items-center space-y-6",
                        children: [u.jsxs("div", {
                            className: "w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-black shadow-lg",
                            style: {
                                backgroundColor: s
                            },
                            children: [v, "P"]
                        }), u.jsxs("div", {
                            children: [u.jsx("p", {
                                className: "text-gray-400 text-xs font-bold uppercase tracking-wider mb-2",
                                children: "Current Player"
                            }), u.jsx("p", {
                                className: "text-2xl font-black text-gray-800",
                                style: {
                                    color: s
                                },
                                children: e ? i : d
                            })]
                        }), u.jsx("div", {
                            className: "pt-4",
                            children: u.jsx("p", {
                                className: "text-xs font-bold uppercase text-gray-400 bg-gray-100 px-3 py-1 rounded-full",
                                children: "点击屏幕继续"
                            })
                        })]
                    })
                })]
            })
        }
        )(), "VICTORY" === r && ( () => {
            const e = 1 === M ? i : d
              , s = 1 === M ? p : m;
            return u.jsxs(t.div, {
                initial: {
                    scale: .9,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                className: "h-screen w-screen flex flex-col items-center justify-center bg-pattern p-4 sm:p-6 relative overflow-hidden",
                children: [u.jsx("div", {
                    className: "absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none",
                    children: u.jsx("div", {
                        className: "w-[200vw] h-[200vw] bg-[conic-gradient(from_0deg_at_50%_50%,_#E60012_0deg,_transparent_20deg,_#FFD700_40deg,_transparent_60deg,_#E60012_80deg)] animate-spin-slow"
                    })
                }), u.jsxs("div", {
                    className: "z-10 text-center space-y-6 sm:space-y-8 w-full max-w-md",
                    children: [u.jsxs(t.div, {
                        initial: {
                            y: 50
                        },
                        animate: {
                            y: 0
                        },
                        className: "nintendo-card p-6 sm:p-8 border-4 border-[#FFD700] shadow-[0_10px_0_rgba(0,0,0,0.1)]",
                        children: [u.jsx("div", {
                            className: "inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#FFD700] rounded-full text-white mb-4 shadow-md -mt-12 sm:-mt-16 border-4 border-white",
                            children: u.jsx(S, {
                                className: "w-8 h-8 sm:w-10 sm:h-10"
                            })
                        }), u.jsx("h1", {
                            className: "text-3xl sm:text-4xl font-black text-gray-800 mb-2",
                            children: "WINNER!"
                        }), u.jsx("p", {
                            className: "text-xl sm:text-2xl font-bold text-[#E60012]",
                            children: e
                        }), u.jsxs("div", {
                            className: "mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-dashed border-gray-200",
                            children: [u.jsx("p", {
                                className: "text-gray-400 text-xs font-bold uppercase mb-2",
                                children: "The Secret Was"
                            }), u.jsx("div", {
                                className: "flex justify-center space-x-2",
                                children: s.split("").map( (e, t) => u.jsx("div", {
                                    className: "w-8 h-10 sm:w-10 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center font-black text-lg sm:text-xl text-gray-700",
                                    children: e
                                }, t))
                            })]
                        })]
                    }), u.jsxs("button", {
                        onClick: q,
                        className: "px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-800 font-black rounded-full shadow-[0_4px_0_#D1D5DB] active:shadow-none active:translate-y-1 transition-all border-2 border-gray-100 flex items-center justify-center mx-auto space-x-2",
                        children: [u.jsx(E, {
                            className: "w-5 h-5"
                        }), u.jsx("span", {
                            children: "再玩一次"
                        })]
                    })]
                })]
            })
        }
        )(), ("INPUT_SECRET" === r || "PLAYING" === r) && ( () => {
            const e = "INPUT_SECRET" === r
              , s = 1 === v ? f : w
              , a = 1 === v ? i : d
              , l = 1 === v ? "bg-[#E60012]" : "bg-[#00B3E6]";
            return u.jsxs("div", {
                className: "h-screen w-screen bg-gray-50 flex flex-col relative",
                children: [u.jsxs("div", {
                    className: `${l} p-3 sm:p-4 pb-4 sm:pb-6 rounded-b-[24px] sm:rounded-b-[32px] z-10 relative shadow-lg`,
                    children: [u.jsxs("div", {
                        className: "flex justify-between items-center text-white",
                        children: [u.jsx("div", {
                            className: "flex items-center space-x-2 bg-black/20 px-2 sm:px-3 py-1 rounded-full",
                            children: u.jsxs("span", {
                                className: "text-xs font-bold",
                                children: [n, " 连"]
                            })
                        }), u.jsx("h2", {
                            className: "text-base sm:text-lg font-black tracking-wider uppercase drop-shadow-md",
                            children: e ? "设定密码" : "破解密码"
                        }), u.jsxs("div", {
                            className: "w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#E60012] flex items-center justify-center font-black shadow-sm text-sm sm:text-base",
                            children: [v, "P"]
                        })]
                    }), u.jsxs("div", {
                        className: "mt-3 sm:mt-4 text-center",
                        children: [u.jsx("p", {
                            className: "text-white/80 text-xs font-bold uppercase mb-1",
                            children: "Current Turn"
                        }), u.jsx("h3", {
                            className: "text-2xl sm:text-3xl font-black text-white",
                            children: a
                        })]
                    })]
                }), u.jsxs("div", {
                    className: "flex-1 flex flex-col overflow-hidden relative -mt-2 sm:-mt-4 pt-6 sm:pt-8",
                    children: [!e && u.jsxs("div", {
                        className: "flex-1 overflow-y-auto px-3 sm:px-4 py-2 space-y-2 sm:space-y-3 pb-32",
                        children: [0 === s.length && u.jsxs("div", {
                            className: "h-32 sm:h-40 flex flex-col items-center justify-center text-gray-300 space-y-3",
                            children: [u.jsx("div", {
                                className: "w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-sm",
                                children: u.jsx(k, {
                                    className: "w-6 h-6 sm:w-8 sm:h-8 opacity-20"
                                })
                            }), u.jsx("span", {
                                className: "text-xs sm:text-sm font-bold",
                                children: "Waiting for input..."
                            })]
                        }), s.map( (e, s) => u.jsxs(t.div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            className: "flex items-center justify-between bg-white shadow-sm border border-gray-100 rounded-xl sm:rounded-2xl p-2 sm:p-3",
                            children: [u.jsx("div", {
                                className: "flex space-x-1",
                                children: e.guess.split("").map( (e, t) => u.jsx("div", {
                                    className: "w-7 h-9 sm:w-8 sm:h-10 bg-gray-50 rounded-lg flex items-center justify-center font-bold text-gray-600 text-base sm:text-lg",
                                    children: e
                                }, t))
                            }), u.jsxs("div", {
                                className: "flex items-center space-x-2 sm:space-x-3 pr-2",
                                children: [u.jsx("span", {
                                    className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider hidden sm:inline",
                                    children: "MATCH"
                                }), u.jsx("div", {
                                    className: `\n                        w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center font-black text-base sm:text-lg shadow-sm\n                        ${e.isWin ? "bg-[#2ECC71] text-white" : "bg-gray-800 text-white"}\n                      `,
                                    children: e.isWin ? u.jsx(N, {
                                        className: "w-5 h-5 sm:w-6 sm:h-6"
                                    }) : e.score
                                })]
                            })]
                        }, s)), u.jsx("div", {
                            id: "scroll-anchor"
                        })]
                    }), e && u.jsxs("div", {
                        className: "flex-1 flex flex-col items-center justify-center p-6 sm:p-8 text-center space-y-4",
                        children: [u.jsx(t.div, {
                            animate: {
                                y: [0, -10, 0]
                            },
                            transition: {
                                repeat: 1 / 0,
                                duration: 2
                            },
                            className: "w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl sm:rounded-3xl shadow-lg border-4 border-gray-100 flex items-center justify-center mb-4",
                            children: u.jsx(_, {
                                className: "w-8 h-8 sm:w-10 sm:h-10 text-gray-300"
                            })
                        }), u.jsxs("p", {
                            className: "text-gray-400 font-bold text-xs sm:text-sm",
                            children: ["请输入 ", n, " 位数字作为谜底"]
                        })]
                    }), u.jsxs("div", {
                        className: "bg-white rounded-t-[24px] sm:rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-t border-gray-100 z-20 pb-safe",
                        children: [u.jsx("div", {
                            className: "p-2 flex justify-center -mt-6 sm:-mt-8 mb-3 sm:mb-4",
                            children: u.jsx("div", {
                                className: "bg-white px-4 sm:px-6 py-2 rounded-xl sm:rounded-2xl shadow-md border border-gray-50 flex space-x-2 sm:space-x-3",
                                children: $ ? u.jsxs("div", {
                                    className: "flex items-center space-x-2 sm:space-x-3",
                                    children: [u.jsx("span", {
                                        className: "text-gray-400 font-bold text-xs sm:text-sm",
                                        children: "RESULT"
                                    }), u.jsx("span", {
                                        className: "text-xl sm:text-2xl font-black text-gray-800 tracking-widest",
                                        children: R
                                    }), u.jsx("div", {
                                        className: "w-px h-5 sm:h-6 bg-gray-200"
                                    }), u.jsxs("div", {
                                        className: "flex items-center text-[#2ECC71]",
                                        children: [u.jsx("span", {
                                            className: "text-xl sm:text-2xl font-black mr-1",
                                            children: $.score
                                        }), u.jsx(C, {
                                            className: "w-4 h-4"
                                        })]
                                    })]
                                }) : Array.from({
                                    length: n
                                }).map( (e, t) => u.jsx(T, {
                                    digit: R[t] || "",
                                    status: R[t] ? "filled" : "empty"
                                }, t))
                            })
                        }), $ ? u.jsx("div", {
                            className: "px-4 sm:px-6 pb-safe pt-2",
                            children: u.jsxs("button", {
                                onClick: Y,
                                className: "w-full h-16 sm:h-20 bg-gray-800 text-white rounded-2xl sm:rounded-3xl font-black text-lg sm:text-xl shadow-[0_4px_0_#000] btn-3d active:shadow-none flex items-center justify-center space-x-2",
                                children: [u.jsx("span", {
                                    children: "结束回合"
                                }), u.jsx(j, {
                                    className: "w-5 h-5 sm:w-6 sm:h-6"
                                })]
                            })
                        }) : u.jsx(D, {
                            onKeyPress: F,
                            onDelete: z,
                            onConfirm: e ? V : G,
                            canConfirm: R.length === n
                        })]
                    })]
                })]
            })
        }
        )()]
    })
}
"serviceWorker"in navigator && window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then(e => {}
    ).catch(e => {}
    )
}
),
y.createRoot(document.getElementById("root")).render(u.jsx(r.StrictMode, {
    children: u.jsx(I, {})
}));
