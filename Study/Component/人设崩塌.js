var Zepto = function () {
  function t(t) {
    return null == t ? String(t) : Z[X.call(t)] || "object"
  }

  function e(e) {
    return "function" == t(e)
  }

  function n(t) {
    return null != t && t == t.window
  }

  function r(t) {
    return null != t && t.nodeType == t.DOCUMENT_NODE
  }

  function i(e) {
    return "object" == t(e)
  }

  function o(t) {
    return i(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
  }

  function a(t) {
    var e = !!t && "length" in t && t.length, r = E.type(t);
    return "function" != r && !n(t) && ("array" == r || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
  }

  function s(t) {
    return L.call(t, function (t) {
      return null != t
    })
  }

  function u(t) {
    return t.length > 0 ? E.fn.concat.apply([], t) : t
  }

  function c(t) {
    return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
  }

  function l(t) {
    return t in M ? M[t] : M[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
  }

  function h(t, e) {
    return "number" != typeof e || N[c(t)] ? e : e + "px"
  }

  function d(t) {
    var e, n;
    return j[t] || (e = P.createElement(t), P.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), j[t] = n), j[t]
  }

  function f(t) {
    return "children" in t ? I.call(t.children) : E.map(t.childNodes, function (t) {
      if (1 == t.nodeType) return t
    })
  }

  function p(t, e) {
    var n, r = t ? t.length : 0;
    for (n = 0; n < r; n++) this[n] = t[n];
    this.length = r, this.selector = e || ""
  }

  function g(t, e, n) {
    for (C in e) n && (o(e[C]) || K(e[C])) ? (o(e[C]) && !o(t[C]) && (t[C] = {}), K(e[C]) && !K(t[C]) && (t[C] = []), g(t[C], e[C], n)) : e[C] !== _ && (t[C] = e[C])
  }

  function m(t, e) {
    return null == e ? E(t) : E(t).filter(e)
  }

  function v(t, n, r, i) {
    return e(n) ? n.call(t, r, i) : n
  }

  function y(t, e, n) {
    null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
  }

  function w(t, e) {
    var n = t.className || "", r = n && n.baseVal !== _;
    return e === _ ? r ? n.baseVal : n : void(r ? n.baseVal = e : t.className = e)
  }

  function b(t) {
    try {
      return t ? "true" == t || "false" != t && ("null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? E.parseJSON(t) : t) : t
    } catch (e) {
      return t
    }
  }

  function x(t, e) {
    e(t);
    for (var n = 0, r = t.childNodes.length; n < r; n++) x(t.childNodes[n], e)
  }

  var _, C, E, A, T, k, S = [], D = S.concat, L = S.filter, I = S.slice, P = window.document, j = {}, M = {},
    N = {"column-count": 1, columns: 1, "font-weight": 1, "line-height": 1, opacity: 1, "z-index": 1, zoom: 1},
    $ = /^\s*<(\w+|!)[^>]*>/, O = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    R = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, B = /^(?:body|html)$/i,
    q = /([A-Z])/g, z = ["val", "css", "html", "text", "data", "width", "height", "offset"],
    H = ["after", "prepend", "before", "append"], U = P.createElement("table"), F = P.createElement("tr"),
    W = {tr: P.createElement("tbody"), tbody: U, thead: U, tfoot: U, td: F, th: F, "*": P.createElement("div")},
    V = /^[\w-]*$/, Z = {}, X = Z.toString, Y = {}, J = P.createElement("div"), G = {
      tabindex: "tabIndex",
      readonly: "readOnly",
      "for": "htmlFor",
      "class": "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    }, K = Array.isArray || function (t) {
      return t instanceof Array
    };
  return Y.matches = function (t, e) {
    if (!e || !t || 1 !== t.nodeType) return !1;
    var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
    if (n) return n.call(t, e);
    var r, i = t.parentNode, o = !i;
    return o && (i = J).appendChild(t), r = ~Y.qsa(i, e).indexOf(t), o && J.removeChild(t), r
  }, T = function (t) {
    return t.replace(/-+(.)?/g, function (t, e) {
      return e ? e.toUpperCase() : ""
    })
  }, k = function (t) {
    return L.call(t, function (e, n) {
      return t.indexOf(e) == n
    })
  }, Y.fragment = function (t, e, n) {
    var r, i, a;
    return O.test(t) && (r = E(P.createElement(RegExp.$1))), r || (t.replace && (t = t.replace(R, "<$1></$2>")), e === _ && (e = $.test(t) && RegExp.$1), e in W || (e = "*"), a = W[e], a.innerHTML = "" + t, r = E.each(I.call(a.childNodes), function () {
      a.removeChild(this)
    })), o(n) && (i = E(r), E.each(n, function (t, e) {
      z.indexOf(t) > -1 ? i[t](e) : i.attr(t, e)
    })), r
  }, Y.Z = function (t, e) {
    return new p(t, e)
  }, Y.isZ = function (t) {
    return t instanceof Y.Z
  }, Y.init = function (t, n) {
    var r;
    if (!t) return Y.Z();
    if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && $.test(t)) r = Y.fragment(t, RegExp.$1, n), t = null; else {
      if (n !== _) return E(n).find(t);
      r = Y.qsa(P, t)
    } else {
      if (e(t)) return E(P).ready(t);
      if (Y.isZ(t)) return t;
      if (K(t)) r = s(t); else if (i(t)) r = [t], t = null; else if ($.test(t)) r = Y.fragment(t.trim(), RegExp.$1, n), t = null; else {
        if (n !== _) return E(n).find(t);
        r = Y.qsa(P, t)
      }
    }
    return Y.Z(r, t)
  }, E = function (t, e) {
    return Y.init(t, e)
  }, E.extend = function (t) {
    var e, n = I.call(arguments, 1);
    return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
      g(t, n, e)
    }), t
  }, Y.qsa = function (t, e) {
    var n, r = "#" == e[0], i = !r && "." == e[0], o = r || i ? e.slice(1) : e, a = V.test(o);
    return t.getElementById && a && r ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : I.call(a && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
  }, E.contains = P.documentElement.contains ? function (t, e) {
    return t !== e && t.contains(e)
  } : function (t, e) {
    for (; e && (e = e.parentNode);) if (e === t) return !0;
    return !1
  }, E.type = t, E.isFunction = e, E.isWindow = n, E.isArray = K, E.isPlainObject = o, E.isEmptyObject = function (t) {
    var e;
    for (e in t) return !1;
    return !0
  }, E.isNumeric = function (t) {
    var e = Number(t), n = typeof t;
    return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1
  }, E.inArray = function (t, e, n) {
    return S.indexOf.call(e, t, n)
  }, E.camelCase = T, E.trim = function (t) {
    return null == t ? "" : String.prototype.trim.call(t)
  }, E.uuid = 0, E.support = {}, E.expr = {}, E.noop = function () {
  }, E.map = function (t, e) {
    var n, r, i, o = [];
    if (a(t)) for (r = 0; r < t.length; r++) n = e(t[r], r), null != n && o.push(n); else for (i in t) n = e(t[i], i), null != n && o.push(n);
    return u(o)
  }, E.each = function (t, e) {
    var n, r;
    if (a(t)) {
      for (n = 0; n < t.length; n++) if (e.call(t[n], n, t[n]) === !1) return t
    } else for (r in t) if (e.call(t[r], r, t[r]) === !1) return t;
    return t
  }, E.grep = function (t, e) {
    return L.call(t, e)
  }, window.JSON && (E.parseJSON = JSON.parse), E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
    Z["[object " + e + "]"] = e.toLowerCase()
  }), E.fn = {
    constructor: Y.Z,
    length: 0,
    forEach: S.forEach,
    reduce: S.reduce,
    push: S.push,
    sort: S.sort,
    splice: S.splice,
    indexOf: S.indexOf,
    concat: function () {
      var t, e, n = [];
      for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = Y.isZ(e) ? e.toArray() : e;
      return D.apply(Y.isZ(this) ? this.toArray() : this, n)
    },
    map: function (t) {
      return E(E.map(this, function (e, n) {
        return t.call(e, n, e)
      }))
    },
    slice: function () {
      return E(I.apply(this, arguments))
    },
    ready: function (t) {
      if ("complete" === P.readyState || "loading" !== P.readyState && !P.documentElement.doScroll) setTimeout(function () {
        t(E)
      }, 0); else {
        var e = function () {
          P.removeEventListener("DOMContentLoaded", e, !1), window.removeEventListener("load", e, !1), t(E)
        };
        P.addEventListener("DOMContentLoaded", e, !1), window.addEventListener("load", e, !1)
      }
      return this
    },
    get: function (t) {
      return t === _ ? I.call(this) : this[t >= 0 ? t : t + this.length]
    },
    toArray: function () {
      return this.get()
    },
    size: function () {
      return this.length
    },
    remove: function () {
      return this.each(function () {
        null != this.parentNode && this.parentNode.removeChild(this)
      })
    },
    each: function (t) {
      return S.every.call(this, function (e, n) {
        return t.call(e, n, e) !== !1
      }), this
    },
    filter: function (t) {
      return e(t) ? this.not(this.not(t)) : E(L.call(this, function (e) {
        return Y.matches(e, t)
      }))
    },
    add: function (t, e) {
      return E(k(this.concat(E(t, e))))
    },
    is: function (t) {
      return this.length > 0 && Y.matches(this[0], t)
    },
    not: function (t) {
      var n = [];
      if (e(t) && t.call !== _) this.each(function (e) {
        t.call(this, e) || n.push(this)
      }); else {
        var r = "string" == typeof t ? this.filter(t) : a(t) && e(t.item) ? I.call(t) : E(t);
        this.forEach(function (t) {
          r.indexOf(t) < 0 && n.push(t)
        })
      }
      return E(n)
    },
    has: function (t) {
      return this.filter(function () {
        return i(t) ? E.contains(this, t) : E(this).find(t).size()
      })
    },
    eq: function (t) {
      return t === -1 ? this.slice(t) : this.slice(t, +t + 1)
    },
    first: function () {
      var t = this[0];
      return t && !i(t) ? t : E(t)
    },
    last: function () {
      var t = this[this.length - 1];
      return t && !i(t) ? t : E(t)
    },
    find: function (t) {
      var e, n = this;
      return e = t ? "object" == typeof t ? E(t).filter(function () {
        var t = this;
        return S.some.call(n, function (e) {
          return E.contains(e, t)
        })
      }) : 1 == this.length ? E(Y.qsa(this[0], t)) : this.map(function () {
        return Y.qsa(this, t)
      }) : E()
    },
    closest: function (t, e) {
      var n = [], i = "object" == typeof t && E(t);
      return this.each(function (o, a) {
        for (; a && !(i ? i.indexOf(a) >= 0 : Y.matches(a, t));) a = a !== e && !r(a) && a.parentNode;
        a && n.indexOf(a) < 0 && n.push(a)
      }), E(n)
    },
    parents: function (t) {
      for (var e = [], n = this; n.length > 0;) n = E.map(n, function (t) {
        if ((t = t.parentNode) && !r(t) && e.indexOf(t) < 0) return e.push(t), t
      });
      return m(e, t)
    },
    parent: function (t) {
      return m(k(this.pluck("parentNode")), t)
    },
    children: function (t) {
      return m(this.map(function () {
        return f(this)
      }), t)
    },
    contents: function () {
      return this.map(function () {
        return this.contentDocument || I.call(this.childNodes)
      })
    },
    siblings: function (t) {
      return m(this.map(function (t, e) {
        return L.call(f(e.parentNode), function (t) {
          return t !== e
        })
      }), t)
    },
    empty: function () {
      return this.each(function () {
        this.innerHTML = ""
      })
    },
    pluck: function (t) {
      return E.map(this, function (e) {
        return e[t]
      })
    },
    show: function () {
      return this.each(function () {
        "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = d(this.nodeName))
      })
    },
    replaceWith: function (t) {
      return this.before(t).remove()
    },
    wrap: function (t) {
      var n = e(t);
      if (this[0] && !n) var r = E(t).get(0), i = r.parentNode || this.length > 1;
      return this.each(function (e) {
        E(this).wrapAll(n ? t.call(this, e) : i ? r.cloneNode(!0) : r)
      })
    },
    wrapAll: function (t) {
      if (this[0]) {
        E(this[0]).before(t = E(t));
        for (var e; (e = t.children()).length;) t = e.first();
        E(t).append(this)
      }
      return this
    },
    wrapInner: function (t) {
      var n = e(t);
      return this.each(function (e) {
        var r = E(this), i = r.contents(), o = n ? t.call(this, e) : t;
        i.length ? i.wrapAll(o) : r.append(o)
      })
    },
    unwrap: function () {
      return this.parent().each(function () {
        E(this).replaceWith(E(this).children())
      }), this
    },
    clone: function () {
      return this.map(function () {
        return this.cloneNode(!0)
      })
    },
    hide: function () {
      return this.css("display", "none")
    },
    toggle: function (t) {
      return this.each(function () {
        var e = E(this);
        (t === _ ? "none" == e.css("display") : t) ? e.show() : e.hide()
      })
    },
    prev: function (t) {
      return E(this.pluck("previousElementSibling")).filter(t || "*")
    },
    next: function (t) {
      return E(this.pluck("nextElementSibling")).filter(t || "*")
    },
    html: function (t) {
      return 0 in arguments ? this.each(function (e) {
        var n = this.innerHTML;
        E(this).empty().append(v(this, t, e, n))
      }) : 0 in this ? this[0].innerHTML : null
    },
    text: function (t) {
      return 0 in arguments ? this.each(function (e) {
        var n = v(this, t, e, this.textContent);
        this.textContent = null == n ? "" : "" + n
      }) : 0 in this ? this.pluck("textContent").join("") : null
    },
    attr: function (t, e) {
      var n;
      return "string" != typeof t || 1 in arguments ? this.each(function (n) {
        if (1 === this.nodeType) if (i(t)) for (C in t) y(this, C, t[C]); else y(this, t, v(this, e, n, this.getAttribute(t)))
      }) : 0 in this && 1 == this[0].nodeType && null != (n = this[0].getAttribute(t)) ? n : _
    },
    removeAttr: function (t) {
      return this.each(function () {
        1 === this.nodeType && t.split(" ").forEach(function (t) {
          y(this, t)
        }, this)
      })
    },
    prop: function (t, e) {
      return t = G[t] || t, 1 in arguments ? this.each(function (n) {
        this[t] = v(this, e, n, this[t])
      }) : this[0] && this[0][t]
    },
    removeProp: function (t) {
      return t = G[t] || t, this.each(function () {
        delete this[t]
      })
    },
    data: function (t, e) {
      var n = "data-" + t.replace(q, "-$1").toLowerCase(), r = 1 in arguments ? this.attr(n, e) : this.attr(n);
      return null !== r ? b(r) : _
    },
    val: function (t) {
      return 0 in arguments ? (null == t && (t = ""), this.each(function (e) {
        this.value = v(this, t, e, this.value)
      })) : this[0] && (this[0].multiple ? E(this[0]).find("option").filter(function () {
        return this.selected
      }).pluck("value") : this[0].value)
    },
    offset: function (t) {
      if (t) return this.each(function (e) {
        var n = E(this), r = v(this, t, e, n.offset()), i = n.offsetParent().offset(),
          o = {top: r.top - i.top, left: r.left - i.left};
        "static" == n.css("position") && (o.position = "relative"), n.css(o)
      });
      if (!this.length) return null;
      if (P.documentElement !== this[0] && !E.contains(P.documentElement, this[0])) return {top: 0, left: 0};
      var e = this[0].getBoundingClientRect();
      return {
        left: e.left + window.pageXOffset,
        top: e.top + window.pageYOffset,
        width: Math.round(e.width),
        height: Math.round(e.height)
      }
    },
    css: function (e, n) {
      if (arguments.length < 2) {
        var r = this[0];
        if ("string" == typeof e) {
          if (!r) return;
          return r.style[T(e)] || getComputedStyle(r, "").getPropertyValue(e)
        }
        if (K(e)) {
          if (!r) return;
          var i = {}, o = getComputedStyle(r, "");
          return E.each(e, function (t, e) {
            i[e] = r.style[T(e)] || o.getPropertyValue(e)
          }), i
        }
      }
      var a = "";
      if ("string" == t(e)) n || 0 === n ? a = c(e) + ":" + h(e, n) : this.each(function () {
        this.style.removeProperty(c(e))
      }); else for (C in e) e[C] || 0 === e[C] ? a += c(C) + ":" + h(C, e[C]) + ";" : this.each(function () {
        this.style.removeProperty(c(C))
      });
      return this.each(function () {
        this.style.cssText += ";" + a
      })
    },
    index: function (t) {
      return t ? this.indexOf(E(t)[0]) : this.parent().children().indexOf(this[0])
    },
    hasClass: function (t) {
      return !!t && S.some.call(this, function (t) {
        return this.test(w(t))
      }, l(t))
    },
    addClass: function (t) {
      return t ? this.each(function (e) {
        if ("className" in this) {
          A = [];
          var n = w(this), r = v(this, t, e, n);
          r.split(/\s+/g).forEach(function (t) {
            E(this).hasClass(t) || A.push(t)
          }, this), A.length && w(this, n + (n ? " " : "") + A.join(" "))
        }
      }) : this
    },
    removeClass: function (t) {
      return this.each(function (e) {
        if ("className" in this) {
          if (t === _) return w(this, "");
          A = w(this), v(this, t, e, A).split(/\s+/g).forEach(function (t) {
            A = A.replace(l(t), " ")
          }), w(this, A.trim())
        }
      })
    },
    toggleClass: function (t, e) {
      return t ? this.each(function (n) {
        var r = E(this), i = v(this, t, n, w(this));
        i.split(/\s+/g).forEach(function (t) {
          (e === _ ? !r.hasClass(t) : e) ? r.addClass(t) : r.removeClass(t)
        })
      }) : this
    },
    scrollTop: function (t) {
      if (this.length) {
        var e = "scrollTop" in this[0];
        return t === _ ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function () {
          this.scrollTop = t
        } : function () {
          this.scrollTo(this.scrollX, t)
        })
      }
    },
    scrollLeft: function (t) {
      if (this.length) {
        var e = "scrollLeft" in this[0];
        return t === _ ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function () {
          this.scrollLeft = t
        } : function () {
          this.scrollTo(t, this.scrollY)
        })
      }
    },
    position: function () {
      if (this.length) {
        var t = this[0], e = this.offsetParent(), n = this.offset(),
          r = B.test(e[0].nodeName) ? {top: 0, left: 0} : e.offset();
        return n.top -= parseFloat(E(t).css("margin-top")) || 0, n.left -= parseFloat(E(t).css("margin-left")) || 0, r.top += parseFloat(E(e[0]).css("border-top-width")) || 0, r.left += parseFloat(E(e[0]).css("border-left-width")) || 0, {
          top: n.top - r.top,
          left: n.left - r.left
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var t = this.offsetParent || P.body; t && !B.test(t.nodeName) && "static" == E(t).css("position");) t = t.offsetParent;
        return t
      })
    }
  }, E.fn.detach = E.fn.remove, ["width", "height"].forEach(function (t) {
    var e = t.replace(/./, function (t) {
      return t[0].toUpperCase()
    });
    E.fn[t] = function (i) {
      var o, a = this[0];
      return i === _ ? n(a) ? a["inner" + e] : r(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function (e) {
        a = E(this), a.css(t, v(this, i, e, a[t]()))
      })
    }
  }), H.forEach(function (e, n) {
    var r = n % 2;
    E.fn[e] = function () {
      var e, i, o = E.map(arguments, function (n) {
        var r = [];
        return e = t(n), "array" == e ? (n.forEach(function (t) {
          return t.nodeType !== _ ? r.push(t) : E.zepto.isZ(t) ? r = r.concat(t.get()) : void(r = r.concat(Y.fragment(t)))
        }), r) : "object" == e || null == n ? n : Y.fragment(n)
      }), a = this.length > 1;
      return o.length < 1 ? this : this.each(function (t, e) {
        i = r ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
        var s = E.contains(P.documentElement, i);
        o.forEach(function (t) {
          if (a) t = t.cloneNode(!0); else if (!i) return E(t).remove();
          i.insertBefore(t, e), s && x(t, function (t) {
            if (!(null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src)) {
              var e = t.ownerDocument ? t.ownerDocument.defaultView : window;
              e.eval.call(e, t.innerHTML)
            }
          })
        })
      })
    }, E.fn[r ? e + "To" : "insert" + (n ? "Before" : "After")] = function (t) {
      return E(t)[e](this), this
    }
  }), Y.Z.prototype = p.prototype = E.fn, Y.uniq = k, Y.deserializeValue = b, E.zepto = Y, E
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function (t) {
  function e(e, n, r) {
    var i = t.Event(n);
    return t(e).trigger(i, r), !i.isDefaultPrevented()
  }

  function n(t, n, r, i) {
    if (t.global) return e(n || w, r, i)
  }

  function r(e) {
    e.global && 0 === t.active++ && n(e, null, "ajaxStart")
  }

  function i(e) {
    e.global && !--t.active && n(e, null, "ajaxStop")
  }

  function o(t, e) {
    var r = e.context;
    return e.beforeSend.call(r, t, e) !== !1 && n(e, r, "ajaxBeforeSend", [t, e]) !== !1 && void n(e, r, "ajaxSend", [t, e])
  }

  function a(t, e, r, i) {
    var o = r.context, a = "success";
    r.success.call(o, t, a, e), i && i.resolveWith(o, [t, a, e]), n(r, o, "ajaxSuccess", [e, r, t]), u(a, e, r)
  }

  function s(t, e, r, i, o) {
    var a = i.context;
    i.error.call(a, r, e, t), o && o.rejectWith(a, [r, e, t]), n(i, a, "ajaxError", [r, i, t || e]), u(e, r, i)
  }

  function u(t, e, r) {
    var o = r.context;
    r.complete.call(o, e, t), n(r, o, "ajaxComplete", [e, r]), i(r)
  }

  function c(t, e, n) {
    if (n.dataFilter == l) return t;
    var r = n.context;
    return n.dataFilter.call(r, t, e)
  }

  function l() {
  }

  function h(t) {
    return t && (t = t.split(";", 2)[0]), t && (t == E ? "html" : t == C ? "json" : x.test(t) ? "script" : _.test(t) && "xml") || "text"
  }

  function d(t, e) {
    return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
  }

  function f(e) {
    e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() && "jsonp" != e.dataType || (e.url = d(e.url, e.data), e.data = void 0)
  }

  function p(e, n, r, i) {
    return t.isFunction(n) && (i = r, r = n, n = void 0), t.isFunction(r) || (i = r, r = void 0), {
      url: e,
      data: n,
      success: r,
      dataType: i
    }
  }

  function g(e, n, r, i) {
    var o, a = t.isArray(n), s = t.isPlainObject(n);
    t.each(n, function (n, u) {
      o = t.type(u), i && (n = r ? i : i + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !i && a ? e.add(u.name, u.value) : "array" == o || !r && "object" == o ? g(e, u, r, n) : e.add(n, u)
    })
  }

  var m, v, y = +new Date, w = window.document, b = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    x = /^(?:text|application)\/javascript/i, _ = /^(?:text|application)\/xml/i, C = "application/json",
    E = "text/html", A = /^\s*$/, T = w.createElement("a");
  T.href = window.location.href, t.active = 0, t.ajaxJSONP = function (e, n) {
    if (!("type" in e)) return t.ajax(e);
    var r, i, u = e.jsonpCallback, c = (t.isFunction(u) ? u() : u) || "Zepto" + y++, l = w.createElement("script"),
      h = window[c], d = function (e) {
        t(l).triggerHandler("error", e || "abort")
      }, f = {abort: d};
    return n && n.promise(f), t(l).on("load error", function (o, u) {
      clearTimeout(i), t(l).off().remove(), "error" != o.type && r ? a(r[0], f, e, n) : s(null, u || "error", f, e, n), window[c] = h, r && t.isFunction(h) && h(r[0]), h = r = void 0
    }), o(f, e) === !1 ? (d("abort"), f) : (window[c] = function () {
      r = arguments
    }, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + c), w.head.appendChild(l), e.timeout > 0 && (i = setTimeout(function () {
      d("timeout")
    }, e.timeout)), f)
  }, t.ajaxSettings = {
    type: "GET",
    beforeSend: l,
    success: l,
    error: l,
    complete: l,
    context: null,
    global: !0,
    xhr: function () {
      return new window.XMLHttpRequest
    },
    accepts: {
      script: "text/javascript, application/javascript, application/x-javascript",
      json: C,
      xml: "application/xml, text/xml",
      html: E,
      text: "text/plain"
    },
    crossDomain: !1,
    timeout: 0,
    processData: !0,
    cache: !0,
    dataFilter: l
  }, t.ajax = function (e) {
    var n, i, u = t.extend({}, e || {}), p = t.Deferred && t.Deferred();
    for (m in t.ajaxSettings) void 0 === u[m] && (u[m] = t.ajaxSettings[m]);
    r(u), u.crossDomain || (n = w.createElement("a"), n.href = u.url, n.href = n.href, u.crossDomain = T.protocol + "//" + T.host != n.protocol + "//" + n.host), u.url || (u.url = window.location.toString()), (i = u.url.indexOf("#")) > -1 && (u.url = u.url.slice(0, i)), f(u);
    var g = u.dataType, y = /\?.+=\?/.test(u.url);
    if (y && (g = "jsonp"), u.cache !== !1 && (e && e.cache === !0 || "script" != g && "jsonp" != g) || (u.url = d(u.url, "_=" + Date.now())), "jsonp" == g) return y || (u.url = d(u.url, u.jsonp ? u.jsonp + "=?" : u.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(u, p);
    var b, x = u.accepts[g], _ = {}, C = function (t, e) {
      _[t.toLowerCase()] = [t, e]
    }, E = /^([\w-]+:)\/\//.test(u.url) ? RegExp.$1 : window.location.protocol, k = u.xhr(), S = k.setRequestHeader;
    if (p && p.promise(k), u.crossDomain || C("X-Requested-With", "XMLHttpRequest"), C("Accept", x || "*/*"), (x = u.mimeType || x) && (x.indexOf(",") > -1 && (x = x.split(",", 2)[0]), k.overrideMimeType && k.overrideMimeType(x)), (u.contentType || u.contentType !== !1 && u.data && "GET" != u.type.toUpperCase()) && C("Content-Type", u.contentType || "application/x-www-form-urlencoded"), u.headers) for (v in u.headers) C(v, u.headers[v]);
    if (k.setRequestHeader = C, k.onreadystatechange = function () {
        if (4 == k.readyState) {
          k.onreadystatechange = l, clearTimeout(b);
          var e, n = !1;
          if (k.status >= 200 && k.status < 300 || 304 == k.status || 0 == k.status && "file:" == E) {
            if (g = g || h(u.mimeType || k.getResponseHeader("content-type")), "arraybuffer" == k.responseType || "blob" == k.responseType) e = k.response; else {
              e = k.responseText;
              try {
                e = c(e, g, u), "script" == g ? (0, eval)(e) : "xml" == g ? e = k.responseXML : "json" == g && (e = A.test(e) ? null : t.parseJSON(e))
              } catch (r) {
                n = r
              }
              if (n) return s(n, "parsererror", k, u, p)
            }
            a(e, k, u, p)
          } else s(k.statusText || null, k.status ? "error" : "abort", k, u, p)
        }
      }, o(k, u) === !1) return k.abort(), s(null, "abort", k, u, p), k;
    var D = !("async" in u) || u.async;
    if (k.open(u.type, u.url, D, u.username, u.password), u.xhrFields) for (v in u.xhrFields) k[v] = u.xhrFields[v];
    for (v in _) S.apply(k, _[v]);
    return u.timeout > 0 && (b = setTimeout(function () {
      k.onreadystatechange = l, k.abort(), s(null, "timeout", k, u, p)
    }, u.timeout)), k.send(u.data ? u.data : null), k
  }, t.get = function () {
    return t.ajax(p.apply(null, arguments))
  }, t.post = function () {
    var e = p.apply(null, arguments);
    return e.type = "POST", t.ajax(e)
  }, t.getJSON = function () {
    var e = p.apply(null, arguments);
    return e.dataType = "json", t.ajax(e)
  }, t.fn.load = function (e, n, r) {
    if (!this.length) return this;
    var i, o = this, a = e.split(/\s/), s = p(e, n, r), u = s.success;
    return a.length > 1 && (s.url = a[0], i = a[1]), s.success = function (e) {
      o.html(i ? t("<div>").html(e.replace(b, "")).find(i) : e), u && u.apply(o, arguments)
    }, t.ajax(s), this
  };
  var k = encodeURIComponent;
  t.param = function (e, n) {
    var r = [];
    return r.add = function (e, n) {
      t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(k(e) + "=" + k(n))
    }, g(r, e, n), r.join("&").replace(/%20/g, "+")
  }
}(Zepto), function (t, e) {
  "function" == typeof define && define.amd ? define(function () {
    return e(t)
  }) : e(t)
}(this, function (t) {
  return Zepto
}), function (t) {
  var e, n = [];
  t.fn.remove = function () {
    return this.each(function () {
      this.parentNode && ("IMG" === this.tagName && (n.push(this), this.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", e && clearTimeout(e), e = setTimeout(function () {
        n = []
      }, 6e4)), this.parentNode.removeChild(this))
    })
  }
}(Zepto), function (t) {
  t.Callbacks = function (e) {
    e = t.extend({}, e);
    var n, r, i, o, a, s, u = [], c = !e.once && [], l = function (t) {
      for (n = e.memory && t, r = !0, s = o || 0, o = 0, a = u.length, i = !0; u && s < a; ++s) if (u[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
        n = !1;
        break
      }
      i = !1, u && (c ? c.length && l(c.shift()) : n ? u.length = 0 : h.disable())
    }, h = {
      add: function () {
        if (u) {
          var r = u.length, s = function (n) {
            t.each(n, function (t, n) {
              "function" == typeof n ? e.unique && h.has(n) || u.push(n) : n && n.length && "string" != typeof n && s(n)
            })
          };
          s(arguments), i ? a = u.length : n && (o = r, l(n))
        }
        return this
      }, remove: function () {
        return u && t.each(arguments, function (e, n) {
          for (var r; (r = t.inArray(n, u, r)) > -1;) u.splice(r, 1), i && (r <= a && --a, r <= s && --s)
        }), this
      }, has: function (e) {
        return !(!u || !(e ? t.inArray(e, u) > -1 : u.length))
      }, empty: function () {
        return a = u.length = 0, this
      }, disable: function () {
        return u = c = n = void 0, this
      }, disabled: function () {
        return !u
      }, lock: function () {
        return c = void 0, n || h.disable(), this
      }, locked: function () {
        return !c
      }, fireWith: function (t, e) {
        return !u || r && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], i ? c.push(e) : l(e)), this
      }, fire: function () {
        return h.fireWith(this, arguments)
      }, fired: function () {
        return !!r
      }
    };
    return h
  }
}(Zepto), function (t) {
  function e(e, r) {
    var u = e[s], c = u && i[u];
    if (void 0 === r) return c || n(e);
    if (c) {
      if (r in c) return c[r];
      var l = a(r);
      if (l in c) return c[l]
    }
    return o.call(t(e), r)
  }

  function n(e, n, o) {
    var u = e[s] || (e[s] = ++t.uuid), c = i[u] || (i[u] = r(e));
    return void 0 !== n && (c[a(n)] = o), c
  }

  function r(e) {
    var n = {};
    return t.each(e.attributes || u, function (e, r) {
      0 == r.name.indexOf("data-") && (n[a(r.name.replace("data-", ""))] = t.zepto.deserializeValue(r.value))
    }), n
  }

  var i = {}, o = t.fn.data, a = t.camelCase, s = t.expando = "Zepto" + +new Date, u = [];
  t.fn.data = function (r, i) {
    return void 0 === i ? t.isPlainObject(r) ? this.each(function (e, i) {
      t.each(r, function (t, e) {
        n(i, t, e)
      })
    }) : 0 in this ? e(this[0], r) : void 0 : this.each(function () {
      n(this, r, i)
    })
  }, t.data = function (e, n, r) {
    return t(e).data(n, r)
  }, t.hasData = function (e) {
    var n = e[s], r = n && i[n];
    return !!r && !t.isEmptyObject(r)
  }, t.fn.removeData = function (e) {
    return "string" == typeof e && (e = e.split(/\s+/)), this.each(function () {
      var n = this[s], r = n && i[n];
      r && t.each(e || r, function (t) {
        delete r[e ? a(this) : t]
      })
    })
  }, ["remove", "empty"].forEach(function (e) {
    var n = t.fn[e];
    t.fn[e] = function () {
      var t = this.find("*");
      return "remove" === e && (t = t.add(this)), t.removeData(), n.call(this)
    }
  })
}(Zepto), function (t) {
  function e(n) {
    var r = [["resolve", "done", t.Callbacks({
      once: 1,
      memory: 1
    }), "resolved"], ["reject", "fail", t.Callbacks({
      once: 1,
      memory: 1
    }), "rejected"], ["notify", "progress", t.Callbacks({memory: 1})]], i = "pending", o = {
      state: function () {
        return i
      }, always: function () {
        return a.done(arguments).fail(arguments), this
      }, then: function () {
        var n = arguments;
        return e(function (e) {
          t.each(r, function (r, i) {
            var s = t.isFunction(n[r]) && n[r];
            a[i[1]](function () {
              var n = s && s.apply(this, arguments);
              if (n && t.isFunction(n.promise)) n.promise().done(e.resolve).fail(e.reject).progress(e.notify); else {
                var r = this === o ? e.promise() : this, a = s ? [n] : arguments;
                e[i[0] + "With"](r, a)
              }
            })
          }), n = null
        }).promise()
      }, promise: function (e) {
        return null != e ? t.extend(e, o) : o
      }
    }, a = {};
    return t.each(r, function (t, e) {
      var n = e[2], s = e[3];
      o[e[1]] = n.add, s && n.add(function () {
        i = s
      }, r[1 ^ t][2].disable, r[2][2].lock), a[e[0]] = function () {
        return a[e[0] + "With"](this === a ? o : this, arguments), this
      }, a[e[0] + "With"] = n.fireWith
    }), o.promise(a), n && n.call(a, a), a
  }

  var n = Array.prototype.slice;
  t.when = function (r) {
    var i, o, a, s = n.call(arguments), u = s.length, c = 0, l = 1 !== u || r && t.isFunction(r.promise) ? u : 0,
      h = 1 === l ? r : e(), d = function (t, e, r) {
        return function (o) {
          e[t] = this, r[t] = arguments.length > 1 ? n.call(arguments) : o, r === i ? h.notifyWith(e, r) : --l || h.resolveWith(e, r)
        }
      };
    if (u > 1) for (i = new Array(u), o = new Array(u), a = new Array(u); c < u; ++c) s[c] && t.isFunction(s[c].promise) ? s[c].promise().done(d(c, a, s)).fail(h.reject).progress(d(c, o, i)) : --l;
    return l || h.resolveWith(a, s), h.promise()
  }, t.Deferred = e
}(Zepto), function (t) {
  function e(t, e) {
    var n = this.os = {}, r = this.browser = {}, i = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
      o = t.match(/(Android);?[\s\/]+([\d.]+)?/), a = !!t.match(/\(Macintosh\; Intel /),
      s = t.match(/(iPad).*OS\s([\d_]+)/), u = t.match(/(iPod)(.*OS\s([\d_]+))?/),
      c = !s && t.match(/(iPhone\sOS)\s([\d_]+)/), l = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
      h = /Win\d{2}|Windows/.test(e), d = t.match(/Windows Phone ([\d.]+)/), f = l && t.match(/TouchPad/),
      p = t.match(/Kindle\/([\d.]+)/), g = t.match(/Silk\/([\d._]+)/), m = t.match(/(BlackBerry).*Version\/([\d.]+)/),
      v = t.match(/(BB10).*Version\/([\d.]+)/), y = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/), w = t.match(/PlayBook/),
      b = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/), x = t.match(/Firefox\/([\d.]+)/),
      _ = t.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
      C = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
      E = !b && t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
      A = E || t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
    (r.webkit = !!i) && (r.version = i[1]), o && (n.android = !0, n.version = o[2]), c && !u && (n.ios = n.iphone = !0, n.version = c[2].replace(/_/g, ".")), s && (n.ios = n.ipad = !0, n.version = s[2].replace(/_/g, ".")), u && (n.ios = n.ipod = !0, n.version = u[3] ? u[3].replace(/_/g, ".") : null), d && (n.wp = !0, n.version = d[1]), l && (n.webos = !0, n.version = l[2]), f && (n.touchpad = !0), m && (n.blackberry = !0, n.version = m[2]), v && (n.bb10 = !0, n.version = v[2]), y && (n.rimtabletos = !0, n.version = y[2]), w && (r.playbook = !0), p && (n.kindle = !0, n.version = p[1]), g && (r.silk = !0, r.version = g[1]), !g && n.android && t.match(/Kindle Fire/) && (r.silk = !0), b && (r.chrome = !0, r.version = b[1]), x && (r.firefox = !0, r.version = x[1]), _ && (n.firefoxos = !0, n.version = _[1]), C && (r.ie = !0, r.version = C[1]), A && (a || n.ios || h) && (r.safari = !0, n.ios || (r.version = A[1])), E && (r.webview = !0), n.tablet = !!(s || w || o && !t.match(/Mobile/) || x && t.match(/Tablet/) || C && !t.match(/Phone/) && t.match(/Touch/)), n.phone = !(n.tablet || n.ipod || !(o || c || l || m || v || b && t.match(/Android/) || b && t.match(/CriOS\/([\d.]+)/) || x && t.match(/Mobile/) || C && t.match(/Touch/)))
  }

  e.call(t, navigator.userAgent, navigator.platform), t.__detect = e
}(Zepto), function (t) {
  function e(t) {
    return t._zid || (t._zid = d++)
  }

  function n(t, n, o, a) {
    if (n = r(n), n.ns) var s = i(n.ns);
    return (m[e(t)] || []).filter(function (t) {
      return t && (!n.e || t.e == n.e) && (!n.ns || s.test(t.ns)) && (!o || e(t.fn) === e(o)) && (!a || t.sel == a)
    })
  }

  function r(t) {
    var e = ("" + t).split(".");
    return {e: e[0], ns: e.slice(1).sort().join(" ")}
  }

  function i(t) {
    return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
  }

  function o(t, e) {
    return t.del && !y && t.e in w || !!e
  }

  function a(t) {
    return b[t] || y && w[t] || t
  }

  function s(n, i, s, u, l, d, f) {
    var p = e(n), g = m[p] || (m[p] = []);
    i.split(/\s/).forEach(function (e) {
      if ("ready" == e) return t(document).ready(s);
      var i = r(e);
      i.fn = s, i.sel = l, i.e in b && (s = function (e) {
        var n = e.relatedTarget;
        if (!n || n !== this && !t.contains(this, n)) return i.fn.apply(this, arguments)
      }), i.del = d;
      var p = d || s;
      i.proxy = function (t) {
        if (t = c(t), !t.isImmediatePropagationStopped()) {
          t.data = u;
          var e = p.apply(n, t._args == h ? [t] : [t].concat(t._args));
          return e === !1 && (t.preventDefault(), t.stopPropagation()), e
        }
      }, i.i = g.length, g.push(i), "addEventListener" in n && n.addEventListener(a(i.e), i.proxy, o(i, f))
    })
  }

  function u(t, r, i, s, u) {
    var c = e(t);
    (r || "").split(/\s/).forEach(function (e) {
      n(t, e, i, s).forEach(function (e) {
        delete m[c][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, u))
      })
    })
  }

  function c(e, n) {
    if (n || !e.isDefaultPrevented) {
      n || (n = e), t.each(E, function (t, r) {
        var i = n[t];
        e[t] = function () {
          return this[r] = x, i && i.apply(n, arguments)
        }, e[r] = _
      });
      try {
        e.timeStamp || (e.timeStamp = Date.now())
      } catch (r) {
      }
      (n.defaultPrevented !== h ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = x)
    }
    return e
  }

  function l(t) {
    var e, n = {originalEvent: t};
    for (e in t) C.test(e) || t[e] === h || (n[e] = t[e]);
    return c(n, t)
  }

  var h, d = 1, f = Array.prototype.slice, p = t.isFunction, g = function (t) {
      return "string" == typeof t
    }, m = {}, v = {}, y = "onfocusin" in window, w = {focus: "focusin", blur: "focusout"},
    b = {mouseenter: "mouseover", mouseleave: "mouseout"};
  v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents", t.event = {
    add: s,
    remove: u
  }, t.proxy = function (n, r) {
    var i = 2 in arguments && f.call(arguments, 2);
    if (p(n)) {
      var o = function () {
        return n.apply(r, i ? i.concat(f.call(arguments)) : arguments)
      };
      return o._zid = e(n), o
    }
    if (g(r)) return i ? (i.unshift(n[r], n), t.proxy.apply(null, i)) : t.proxy(n[r], n);
    throw new TypeError("expected function")
  }, t.fn.bind = function (t, e, n) {
    return this.on(t, e, n)
  }, t.fn.unbind = function (t, e) {
    return this.off(t, e)
  }, t.fn.one = function (t, e, n, r) {
    return this.on(t, e, n, r, 1)
  };
  var x = function () {
    return !0
  }, _ = function () {
    return !1
  }, C = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/, E = {
    preventDefault: "isDefaultPrevented",
    stopImmediatePropagation: "isImmediatePropagationStopped",
    stopPropagation: "isPropagationStopped"
  };
  t.fn.delegate = function (t, e, n) {
    return this.on(e, t, n)
  }, t.fn.undelegate = function (t, e, n) {
    return this.off(e, t, n)
  }, t.fn.live = function (e, n) {
    return t(document.body).delegate(this.selector, e, n), this
  }, t.fn.die = function (e, n) {
    return t(document.body).undelegate(this.selector, e, n), this
  }, t.fn.on = function (e, n, r, i, o) {
    var a, c, d = this;
    return e && !g(e) ? (t.each(e, function (t, e) {
      d.on(t, n, r, e, o)
    }), d) : (g(n) || p(i) || i === !1 || (i = r, r = n, n = h), i !== h && r !== !1 || (i = r, r = h), i === !1 && (i = _), d.each(function (h, d) {
      o && (a = function (t) {
        return u(d, t.type, i), i.apply(this, arguments)
      }), n && (c = function (e) {
        var r, o = t(e.target).closest(n, d).get(0);
        if (o && o !== d) return r = t.extend(l(e), {
          currentTarget: o,
          liveFired: d
        }), (a || i).apply(o, [r].concat(f.call(arguments, 1)))
      }), s(d, e, i, r, n, c || a)
    }))
  }, t.fn.off = function (e, n, r) {
    var i = this;
    return e && !g(e) ? (t.each(e, function (t, e) {
      i.off(t, n, e)
    }), i) : (g(n) || p(r) || r === !1 || (r = n, n = h), r === !1 && (r = _), i.each(function () {
      u(this, e, r, n)
    }))
  }, t.fn.trigger = function (e, n) {
    return e = g(e) || t.isPlainObject(e) ? t.Event(e) : c(e), e._args = n, this.each(function () {
      e.type in w && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
    })
  }, t.fn.triggerHandler = function (e, r) {
    var i, o;
    return this.each(function (a, s) {
      i = l(g(e) ? t.Event(e) : e), i._args = r, i.target = s, t.each(n(s, e.type || e), function (t, e) {
        if (o = e.proxy(i), i.isImmediatePropagationStopped()) return !1
      })
    }), o
  }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
    t.fn[e] = function (t) {
      return 0 in arguments ? this.bind(e, t) : this.trigger(e)
    }
  }), t.Event = function (t, e) {
    g(t) || (e = t, t = e.type);
    var n = document.createEvent(v[t] || "Events"), r = !0;
    if (e) for (var i in e) "bubbles" == i ? r = !!e[i] : n[i] = e[i];
    return n.initEvent(t, r, !0), c(n)
  }
}(Zepto), function (t) {
  t.fn.serializeArray = function () {
    var e, n, r = [], i = function (t) {
      return t.forEach ? t.forEach(i) : void r.push({name: e, value: t})
    };
    return this[0] && t.each(this[0].elements, function (r, o) {
      n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && i(t(o).val())
    }), r
  }, t.fn.serialize = function () {
    var t = [];
    return this.serializeArray().forEach(function (e) {
      t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
    }), t.join("&")
  }, t.fn.submit = function (e) {
    if (0 in arguments) this.bind("submit", e); else if (this.length) {
      var n = t.Event("submit");
      this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
    }
    return this
  }
}(Zepto), function (t, e) {
  function n(t) {
    return t.replace(/([A-Z])/g, "-$1").toLowerCase()
  }

  function r(t) {
    return i ? i + t : t.toLowerCase()
  }

  var i, o, a, s, u, c, l, h, d, f, p = "", g = {Webkit: "webkit", Moz: "", O: "o"}, m = document.createElement("div"),
    v = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, y = {};
  m.style.transform === e && t.each(g, function (t, n) {
    if (m.style[t + "TransitionProperty"] !== e) return p = "-" + t.toLowerCase() + "-", i = n, !1
  }), o = p + "transform", y[a = p + "transition-property"] = y[s = p + "transition-duration"] = y[c = p + "transition-delay"] = y[u = p + "transition-timing-function"] = y[l = p + "animation-name"] = y[h = p + "animation-duration"] = y[f = p + "animation-delay"] = y[d = p + "animation-timing-function"] = "", t.fx = {
    off: i === e && m.style.transitionProperty === e,
    speeds: {_default: 400, fast: 200, slow: 600},
    cssPrefix: p,
    transitionEnd: r("TransitionEnd"),
    animationEnd: r("AnimationEnd")
  }, t.fn.animate = function (n, r, i, o, a) {
    return t.isFunction(r) && (o = r, i = e, r = e), t.isFunction(i) && (o = i, i = e), t.isPlainObject(r) && (i = r.easing, o = r.complete, a = r.delay, r = r.duration), r && (r = ("number" == typeof r ? r : t.fx.speeds[r] || t.fx.speeds._default) / 1e3), a && (a = parseFloat(a) / 1e3), this.anim(n, r, i, o, a)
  }, t.fn.anim = function (r, i, p, g, m) {
    var w, b, x, _ = {}, C = "", E = this, A = t.fx.transitionEnd, T = !1;
    if (i === e && (i = t.fx.speeds._default / 1e3), m === e && (m = 0), t.fx.off && (i = 0), "string" == typeof r) _[l] = r, _[h] = i + "s", _[f] = m + "s", _[d] = p || "linear", A = t.fx.animationEnd; else {
      b = [];
      for (w in r) v.test(w) ? C += w + "(" + r[w] + ") " : (_[w] = r[w], b.push(n(w)));
      C && (_[o] = C, b.push(o)), i > 0 && "object" == typeof r && (_[a] = b.join(", "), _[s] = i + "s", _[c] = m + "s", _[u] = p || "linear")
    }
    return x = function (e) {
      if ("undefined" != typeof e) {
        if (e.target !== e.currentTarget) return;
        t(e.target).unbind(A, x)
      } else t(this).unbind(A, x);
      T = !0, t(this).css(y), g && g.call(this)
    }, i > 0 && (this.bind(A, x), setTimeout(function () {
      T || x.call(E)
    }, 1e3 * (i + m) + 25)), this.size() && this.get(0).clientLeft, this.css(_), i <= 0 && setTimeout(function () {
      E.each(function () {
        x.call(this)
      })
    }, 0), this
  }, m = null
}(Zepto), function (t, e) {
  function n(n, r, i, o, a) {
    "function" != typeof r || a || (a = r, r = e);
    var s = {opacity: i};
    return o && (s.scale = o, n.css(t.fx.cssPrefix + "transform-origin", "0 0")), n.animate(s, r, null, a)
  }

  function r(e, r, i, o) {
    return n(e, r, 0, i, function () {
      a.call(t(this)), o && o.call(this)
    })
  }

  var i = window.document, o = (i.documentElement, t.fn.show), a = t.fn.hide, s = t.fn.toggle;
  t.fn.show = function (t, r) {
    return o.call(this), t === e ? t = 0 : this.css("opacity", 0), n(this, t, 1, "1,1", r)
  }, t.fn.hide = function (t, n) {
    return t === e ? a.call(this) : r(this, t, "0,0", n)
  }, t.fn.toggle = function (n, r) {
    return n === e || "boolean" == typeof n ? s.call(this, n) : this.each(function () {
      var e = t(this);
      e["none" == e.css("display") ? "show" : "hide"](n, r)
    })
  }, t.fn.fadeTo = function (t, e, r) {
    return n(this, t, e, null, r)
  }, t.fn.fadeIn = function (t, e) {
    var n = this.css("opacity");
    return n > 0 ? this.css("opacity", 0) : n = 1, o.call(this).fadeTo(t, n, e)
  }, t.fn.fadeOut = function (t, e) {
    return r(this, t, null, e)
  }, t.fn.fadeToggle = function (e, n) {
    return this.each(function () {
      var r = t(this);
      r[0 == r.css("opacity") || "none" == r.css("display") ? "fadeIn" : "fadeOut"](e, n)
    })
  }
}(Zepto), function (t) {
  function e(t) {
    return "tagName" in t ? t : t.parentNode
  }

  if (t.os.ios) {
    var n, r = {};
    t(document).bind("gesturestart", function (t) {
      var i = Date.now();
      i - (r.last || i);
      r.target = e(t.target), n && clearTimeout(n), r.e1 = t.scale, r.last = i
    }).bind("gesturechange", function (t) {
      r.e2 = t.scale
    }).bind("gestureend", function (e) {
      r.e2 > 0 ? (0 != Math.abs(r.e1 - r.e2) && t(r.target).trigger("pinch") && t(r.target).trigger("pinch" + (r.e1 - r.e2 > 0 ? "In" : "Out")), r.e1 = r.e2 = r.last = 0) : "last" in r && (r = {})
    }), ["pinch", "pinchIn", "pinchOut"].forEach(function (e) {
      t.fn[e] = function (t) {
        return this.bind(e, t)
      }
    })
  }
}(Zepto), function () {
  try {
    getComputedStyle(void 0)
  } catch (t) {
    var e = getComputedStyle;
    window.getComputedStyle = function (t, n) {
      try {
        return e(t, n)
      } catch (r) {
        return null
      }
    }
  }
}(), function (t) {
  String.prototype.trim === t && (String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "")
  }), Array.prototype.reduce === t && (Array.prototype.reduce = function (e) {
    if (void 0 === this || null === this) throw new TypeError;
    var n, r = Object(this), i = r.length >>> 0, o = 0;
    if ("function" != typeof e) throw new TypeError;
    if (0 == i && 1 == arguments.length) throw new TypeError;
    if (arguments.length >= 2) n = arguments[1]; else for (; ;) {
      if (o in r) {
        n = r[o++];
        break
      }
      if (++o >= i) throw new TypeError
    }
    for (; o < i;) o in r && (n = e.call(t, n, r[o], o, r)), o++;
    return n
  })
}(), function (t) {
  function e(e) {
    return e = t(e), !(!e.width() && !e.height()) && "none" !== e.css("display")
  }

  function n(t, e) {
    t = t.replace(/=#\]/g, '="#"]');
    var n, r, i = s.exec(t);
    if (i && i[2] in a && (n = a[i[2]], r = i[3], t = i[1], r)) {
      var o = Number(r);
      r = isNaN(o) ? r.replace(/^["']|["']$/g, "") : o
    }
    return e(t, n, r)
  }

  var r = t.zepto, i = r.qsa, o = r.matches, a = t.expr[":"] = {
    visible: function () {
      if (e(this)) return this
    }, hidden: function () {
      if (!e(this)) return this
    }, selected: function () {
      if (this.selected) return this
    }, checked: function () {
      if (this.checked) return this
    }, parent: function () {
      return this.parentNode
    }, first: function (t) {
      if (0 === t) return this
    }, last: function (t, e) {
      if (t === e.length - 1) return this
    }, eq: function (t, e, n) {
      if (t === n) return this
    }, contains: function (e, n, r) {
      if (t(this).text().indexOf(r) > -1) return this
    }, has: function (t, e, n) {
      if (r.qsa(this, n).length) return this
    }
  }, s = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"), u = /^\s*>/, c = "Zepto" + +new Date;
  r.qsa = function (e, o) {
    return n(o, function (n, a, s) {
      try {
        var l;
        !n && a ? n = "*" : u.test(n) && (l = t(e).addClass(c), n = "." + c + " " + n);
        var h = i(e, n)
      } catch (d) {
        throw console.error("error performing selector: %o", o), d
      } finally {
        l && l.removeClass(c)
      }
      return a ? r.uniq(t.map(h, function (t, e) {
        return a.call(t, e, h, s)
      })) : h
    })
  }, r.matches = function (t, e) {
    return n(e, function (e, n, r) {
      return (!e || o(t, e)) && (!n || n.call(t, null, r) === t)
    })
  }
}(Zepto), function (t) {
  t.fn.end = function () {
    return this.prevObject || t()
  }, t.fn.andSelf = function () {
    return this.add(this.prevObject || t())
  }, "filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function (e) {
    var n = t.fn[e];
    t.fn[e] = function () {
      var t = n.apply(this, arguments);
      return t.prevObject = this, t
    }
  })
}(Zepto), function (t) {
  function e(t, e, n, r) {
    return Math.abs(t - e) >= Math.abs(n - r) ? t - e > 0 ? "Left" : "Right" : n - r > 0 ? "Up" : "Down"
  }

  function n() {
    l = null, d.last && (d.el.trigger("longTap"), d = {})
  }

  function r() {
    l && clearTimeout(l), l = null
  }

  function i() {
    s && clearTimeout(s), u && clearTimeout(u), c && clearTimeout(c), l && clearTimeout(l), s = u = c = l = null, d = {}
  }

  function o(t) {
    return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
  }

  function a(t, e) {
    return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
  }

  var s, u, c, l, h, d = {}, f = 750;
  t(document).ready(function () {
    var p, g, m, v, y = 0, w = 0;
    "MSGesture" in window && (h = new MSGesture, h.target = document.body), t(document).bind("MSGestureEnd", function (t) {
      var e = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
      e && (d.el.trigger("swipe"), d.el.trigger("swipe" + e))
    }).on("touchstart MSPointerDown pointerdown", function (e) {
      (v = a(e, "down")) && !o(e) || (m = v ? e : e.touches[0], e.touches && 1 === e.touches.length && d.x2 && (d.x2 = void 0, d.y2 = void 0), p = Date.now(), g = p - (d.last || p), d.el = t("tagName" in m.target ? m.target : m.target.parentNode), s && clearTimeout(s), d.x1 = m.pageX, d.y1 = m.pageY, g > 0 && g <= 250 && (d.isDoubleTap = !0), d.last = p, l = setTimeout(n, f), h && v && h.addPointer(e.pointerId))
    }).on("touchmove MSPointerMove pointermove", function (t) {
      (v = a(t, "move")) && !o(t) || (m = v ? t : t.touches[0], r(), d.x2 = m.pageX, d.y2 = m.pageY, y += Math.abs(d.x1 - d.x2), w += Math.abs(d.y1 - d.y2))
    }).on("touchend MSPointerUp pointerup", function (n) {
      (v = a(n, "up")) && !o(n) || (r(), d.x2 && Math.abs(d.x1 - d.x2) > 30 || d.y2 && Math.abs(d.y1 - d.y2) > 30 ? c = setTimeout(function () {
        d.el && (d.el.trigger("swipe"), d.el.trigger("swipe" + e(d.x1, d.x2, d.y1, d.y2))), d = {}
      }, 0) : "last" in d && (y < 30 && w < 30 ? u = setTimeout(function () {
        var e = t.Event("tap");
        e.cancelTouch = i, d.el && d.el.trigger(e), d.isDoubleTap ? (d.el && d.el.trigger("doubleTap"), d = {}) : s = setTimeout(function () {
          s = null, d.el && d.el.trigger("singleTap"), d = {}
        }, 250)
      }, 0) : d = {}), y = w = 0)
    }).on("touchcancel MSPointerCancel pointercancel", i), t(window).on("scroll", i)
  }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function (e) {
    t.fn[e] = function (t) {
      return this.on(e, t)
    }
  })
}(Zepto);
var QRCode;
!function () {
  function t(t) {
    this.mode = c.MODE_8BIT_BYTE, this.data = t, this.parsedData = [];
    for (var e = 0, n = this.data.length; n > e; e++) {
      var r = [], i = this.data.charCodeAt(e);
      i > 65536 ? (r[0] = 240 | (1835008 & i) >>> 18, r[1] = 128 | (258048 & i) >>> 12, r[2] = 128 | (4032 & i) >>> 6, r[3] = 128 | 63 & i) : i > 2048 ? (r[0] = 224 | (61440 & i) >>> 12, r[1] = 128 | (4032 & i) >>> 6, r[2] = 128 | 63 & i) : i > 128 ? (r[0] = 192 | (1984 & i) >>> 6, r[1] = 128 | 63 & i) : r[0] = i, this.parsedData.push(r)
    }
    this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
  }

  function e(t, e) {
    this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
  }

  function n(t, e) {
    if (void 0 == t.length) throw new Error(t.length + "/" + e);
    for (var n = 0; n < t.length && 0 == t[n];) n++;
    this.num = new Array(t.length - n + e);
    for (var r = 0; r < t.length - n; r++) this.num[r] = t[r + n]
  }

  function r(t, e) {
    this.totalCount = t, this.dataCount = e
  }

  function i() {
    this.buffer = [], this.length = 0
  }

  function o() {
    return "undefined" != typeof CanvasRenderingContext2D
  }

  function a() {
    var t = !1, e = navigator.userAgent;
    if (/android/i.test(e)) {
      t = !0;
      var n = e.toString().match(/android ([0-9]\.[0-9])/i);
      n && n[1] && (t = parseFloat(n[1]))
    }
    return t
  }

  function s(t, e) {
    for (var n = 1, r = u(t), i = 0, o = g.length; o >= i; i++) {
      var a = 0;
      switch (e) {
        case l.L:
          a = g[i][0];
          break;
        case l.M:
          a = g[i][1];
          break;
        case l.Q:
          a = g[i][2];
          break;
        case l.H:
          a = g[i][3]
      }
      if (a >= r) break;
      n++
    }
    if (n > g.length) throw new Error("Too long data");
    return n
  }

  function u(t) {
    var e = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
    return e.length + (e.length != t ? 3 : 0)
  }

  t.prototype = {
    getLength: function () {
      return this.parsedData.length
    }, write: function (t) {
      for (var e = 0, n = this.parsedData.length; n > e; e++) t.put(this.parsedData[e], 8)
    }
  }, e.prototype = {
    addData: function (e) {
      var n = new t(e);
      this.dataList.push(n), this.dataCache = null
    }, isDark: function (t, e) {
      if (0 > t || this.moduleCount <= t || 0 > e || this.moduleCount <= e) throw new Error(t + "," + e);
      return this.modules[t][e]
    }, getModuleCount: function () {
      return this.moduleCount
    }, make: function () {
      this.makeImpl(!1, this.getBestMaskPattern())
    }, makeImpl: function (t, n) {
      this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
      for (var r = 0; r < this.moduleCount; r++) {
        this.modules[r] = new Array(this.moduleCount);
        for (var i = 0; i < this.moduleCount; i++) this.modules[r][i] = null
      }
      this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, n), this.typeNumber >= 7 && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, n)
    }, setupPositionProbePattern: function (t, e) {
      for (var n = -1; 7 >= n; n++) if (!(-1 >= t + n || this.moduleCount <= t + n)) for (var r = -1; 7 >= r; r++) -1 >= e + r || this.moduleCount <= e + r || (this.modules[t + n][e + r] = n >= 0 && 6 >= n && (0 == r || 6 == r) || r >= 0 && 6 >= r && (0 == n || 6 == n) || n >= 2 && 4 >= n && r >= 2 && 4 >= r)
    }, getBestMaskPattern: function () {
      for (var t = 0, e = 0, n = 0; 8 > n; n++) {
        this.makeImpl(!0, n);
        var r = d.getLostPoint(this);
        (0 == n || t > r) && (t = r, e = n)
      }
      return e
    }, createMovieClip: function (t, e, n) {
      var r = t.createEmptyMovieClip(e, n), i = 1;
      this.make();
      for (var o = 0; o < this.modules.length; o++) for (var a = o * i, s = 0; s < this.modules[o].length; s++) {
        var u = s * i, c = this.modules[o][s];
        c && (r.beginFill(0, 100), r.moveTo(u, a), r.lineTo(u + i, a), r.lineTo(u + i, a + i), r.lineTo(u, a + i), r.endFill())
      }
      return r
    }, setupTimingPattern: function () {
      for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
      for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
    }, setupPositionAdjustPattern: function () {
      for (var t = d.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var n = 0; n < t.length; n++) {
        var r = t[e], i = t[n];
        if (null == this.modules[r][i]) for (var o = -2; 2 >= o; o++) for (var a = -2; 2 >= a; a++) this.modules[r + o][i + a] = -2 == o || 2 == o || -2 == a || 2 == a || 0 == o && 0 == a
      }
    }, setupTypeNumber: function (t) {
      for (var e = d.getBCHTypeNumber(this.typeNumber), n = 0; 18 > n; n++) {
        var r = !t && 1 == (e >> n & 1);
        this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r
      }
      for (var n = 0; 18 > n; n++) {
        var r = !t && 1 == (e >> n & 1);
        this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r
      }
    }, setupTypeInfo: function (t, e) {
      for (var n = this.errorCorrectLevel << 3 | e, r = d.getBCHTypeInfo(n), i = 0; 15 > i; i++) {
        var o = !t && 1 == (r >> i & 1);
        6 > i ? this.modules[i][8] = o : 8 > i ? this.modules[i + 1][8] = o : this.modules[this.moduleCount - 15 + i][8] = o
      }
      for (var i = 0; 15 > i; i++) {
        var o = !t && 1 == (r >> i & 1);
        8 > i ? this.modules[8][this.moduleCount - i - 1] = o : 9 > i ? this.modules[8][15 - i - 1 + 1] = o : this.modules[8][15 - i - 1] = o
      }
      this.modules[this.moduleCount - 8][8] = !t
    }, mapData: function (t, e) {
      for (var n = -1, r = this.moduleCount - 1, i = 7, o = 0, a = this.moduleCount - 1; a > 0; a -= 2) for (6 == a && a--; ;) {
        for (var s = 0; 2 > s; s++) if (null == this.modules[r][a - s]) {
          var u = !1;
          o < t.length && (u = 1 == (t[o] >>> i & 1));
          var c = d.getMask(e, r, a - s);
          c && (u = !u), this.modules[r][a - s] = u, i--, -1 == i && (o++, i = 7)
        }
        if (r += n, 0 > r || this.moduleCount <= r) {
          r -= n, n = -n;
          break
        }
      }
    }
  }, e.PAD0 = 236, e.PAD1 = 17, e.createData = function (t, n, o) {
    for (var a = r.getRSBlocks(t, n), s = new i, u = 0; u < o.length; u++) {
      var c = o[u];
      s.put(c.mode, 4), s.put(c.getLength(), d.getLengthInBits(c.mode, t)), c.write(s)
    }
    for (var l = 0, u = 0; u < a.length; u++) l += a[u].dataCount;
    if (s.getLengthInBits() > 8 * l) throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * l + ")");
    for (s.getLengthInBits() + 4 <= 8 * l && s.put(0, 4); s.getLengthInBits() % 8 != 0;) s.putBit(!1);
    for (; !(s.getLengthInBits() >= 8 * l) && (s.put(e.PAD0, 8), !(s.getLengthInBits() >= 8 * l));) s.put(e.PAD1, 8);
    return e.createBytes(s, a)
  }, e.createBytes = function (t, e) {
    for (var r = 0, i = 0, o = 0, a = new Array(e.length), s = new Array(e.length), u = 0; u < e.length; u++) {
      var c = e[u].dataCount, l = e[u].totalCount - c;
      i = Math.max(i, c), o = Math.max(o, l), a[u] = new Array(c);
      for (var h = 0; h < a[u].length; h++) a[u][h] = 255 & t.buffer[h + r];
      r += c;
      var f = d.getErrorCorrectPolynomial(l), p = new n(a[u], f.getLength() - 1), g = p.mod(f);
      s[u] = new Array(f.getLength() - 1);
      for (var h = 0; h < s[u].length; h++) {
        var m = h + g.getLength() - s[u].length;
        s[u][h] = m >= 0 ? g.get(m) : 0
      }
    }
    for (var v = 0, h = 0; h < e.length; h++) v += e[h].totalCount;
    for (var y = new Array(v), w = 0, h = 0; i > h; h++) for (var u = 0; u < e.length; u++) h < a[u].length && (y[w++] = a[u][h]);
    for (var h = 0; o > h; h++) for (var u = 0; u < e.length; u++) h < s[u].length && (y[w++] = s[u][h]);
    return y
  };
  for (var c = {MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8}, l = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
  }, h = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  }, d = {
    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
    G15: 1335,
    G18: 7973,
    G15_MASK: 21522,
    getBCHTypeInfo: function (t) {
      for (var e = t << 10; d.getBCHDigit(e) - d.getBCHDigit(d.G15) >= 0;) e ^= d.G15 << d.getBCHDigit(e) - d.getBCHDigit(d.G15);
      return (t << 10 | e) ^ d.G15_MASK
    },
    getBCHTypeNumber: function (t) {
      for (var e = t << 12; d.getBCHDigit(e) - d.getBCHDigit(d.G18) >= 0;) e ^= d.G18 << d.getBCHDigit(e) - d.getBCHDigit(d.G18);
      return t << 12 | e
    },
    getBCHDigit: function (t) {
      for (var e = 0; 0 != t;) e++, t >>>= 1;
      return e
    },
    getPatternPosition: function (t) {
      return d.PATTERN_POSITION_TABLE[t - 1]
    },
    getMask: function (t, e, n) {
      switch (t) {
        case h.PATTERN000:
          return (e + n) % 2 == 0;
        case h.PATTERN001:
          return e % 2 == 0;
        case h.PATTERN010:
          return n % 3 == 0;
        case h.PATTERN011:
          return (e + n) % 3 == 0;
        case h.PATTERN100:
          return (Math.floor(e / 2) + Math.floor(n / 3)) % 2 == 0;
        case h.PATTERN101:
          return e * n % 2 + e * n % 3 == 0;
        case h.PATTERN110:
          return (e * n % 2 + e * n % 3) % 2 == 0;
        case h.PATTERN111:
          return (e * n % 3 + (e + n) % 2) % 2 == 0;
        default:
          throw new Error("bad maskPattern:" + t)
      }
    },
    getErrorCorrectPolynomial: function (t) {
      for (var e = new n([1], 0), r = 0; t > r; r++) e = e.multiply(new n([1, f.gexp(r)], 0));
      return e
    },
    getLengthInBits: function (t, e) {
      if (e >= 1 && 10 > e) switch (t) {
        case c.MODE_NUMBER:
          return 10;
        case c.MODE_ALPHA_NUM:
          return 9;
        case c.MODE_8BIT_BYTE:
          return 8;
        case c.MODE_KANJI:
          return 8;
        default:
          throw new Error("mode:" + t)
      } else if (27 > e) switch (t) {
        case c.MODE_NUMBER:
          return 12;
        case c.MODE_ALPHA_NUM:
          return 11;
        case c.MODE_8BIT_BYTE:
          return 16;
        case c.MODE_KANJI:
          return 10;
        default:
          throw new Error("mode:" + t)
      } else {
        if (!(41 > e)) throw new Error("type:" + e);
        switch (t) {
          case c.MODE_NUMBER:
            return 14;
          case c.MODE_ALPHA_NUM:
            return 13;
          case c.MODE_8BIT_BYTE:
            return 16;
          case c.MODE_KANJI:
            return 12;
          default:
            throw new Error("mode:" + t)
        }
      }
    },
    getLostPoint: function (t) {
      for (var e = t.getModuleCount(), n = 0, r = 0; e > r; r++) for (var i = 0; e > i; i++) {
        for (var o = 0, a = t.isDark(r, i), s = -1; 1 >= s; s++) if (!(0 > r + s || r + s >= e)) for (var u = -1; 1 >= u; u++) 0 > i + u || i + u >= e || (0 != s || 0 != u) && a == t.isDark(r + s, i + u) && o++;
        o > 5 && (n += 3 + o - 5)
      }
      for (var r = 0; e - 1 > r; r++) for (var i = 0; e - 1 > i; i++) {
        var c = 0;
        t.isDark(r, i) && c++, t.isDark(r + 1, i) && c++, t.isDark(r, i + 1) && c++, t.isDark(r + 1, i + 1) && c++, (0 == c || 4 == c) && (n += 3)
      }
      for (var r = 0; e > r; r++) for (var i = 0; e - 6 > i; i++) t.isDark(r, i) && !t.isDark(r, i + 1) && t.isDark(r, i + 2) && t.isDark(r, i + 3) && t.isDark(r, i + 4) && !t.isDark(r, i + 5) && t.isDark(r, i + 6) && (n += 40);
      for (var i = 0; e > i; i++) for (var r = 0; e - 6 > r; r++) t.isDark(r, i) && !t.isDark(r + 1, i) && t.isDark(r + 2, i) && t.isDark(r + 3, i) && t.isDark(r + 4, i) && !t.isDark(r + 5, i) && t.isDark(r + 6, i) && (n += 40);
      for (var l = 0, i = 0; e > i; i++) for (var r = 0; e > r; r++) t.isDark(r, i) && l++;
      var h = Math.abs(100 * l / e / e - 50) / 5;
      return n += 10 * h
    }
  }, f = {
    glog: function (t) {
      if (1 > t) throw new Error("glog(" + t + ")");
      return f.LOG_TABLE[t]
    }, gexp: function (t) {
      for (; 0 > t;) t += 255;
      for (; t >= 256;) t -= 255;
      return f.EXP_TABLE[t]
    }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256)
  }, p = 0; 8 > p; p++) f.EXP_TABLE[p] = 1 << p;
  for (var p = 8; 256 > p; p++) f.EXP_TABLE[p] = f.EXP_TABLE[p - 4] ^ f.EXP_TABLE[p - 5] ^ f.EXP_TABLE[p - 6] ^ f.EXP_TABLE[p - 8];
  for (var p = 0; 255 > p; p++) f.LOG_TABLE[f.EXP_TABLE[p]] = p;
  n.prototype = {
    get: function (t) {
      return this.num[t]
    }, getLength: function () {
      return this.num.length
    }, multiply: function (t) {
      for (var e = new Array(this.getLength() + t.getLength() - 1), r = 0; r < this.getLength(); r++) for (var i = 0; i < t.getLength(); i++) e[r + i] ^= f.gexp(f.glog(this.get(r)) + f.glog(t.get(i)));
      return new n(e, 0)
    }, mod: function (t) {
      if (this.getLength() - t.getLength() < 0) return this;
      for (var e = f.glog(this.get(0)) - f.glog(t.get(0)), r = new Array(this.getLength()), i = 0; i < this.getLength(); i++) r[i] = this.get(i);
      for (var i = 0; i < t.getLength(); i++) r[i] ^= f.gexp(f.glog(t.get(i)) + e);
      return new n(r, 0).mod(t)
    }
  }, r.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], r.getRSBlocks = function (t, e) {
    var n = r.getRsBlockTable(t, e);
    if (void 0 == n) throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
    for (var i = n.length / 3, o = [], a = 0; i > a; a++) for (var s = n[3 * a + 0], u = n[3 * a + 1], c = n[3 * a + 2], l = 0; s > l; l++) o.push(new r(u, c));
    return o
  }, r.getRsBlockTable = function (t, e) {
    switch (e) {
      case l.L:
        return r.RS_BLOCK_TABLE[4 * (t - 1) + 0];
      case l.M:
        return r.RS_BLOCK_TABLE[4 * (t - 1) + 1];
      case l.Q:
        return r.RS_BLOCK_TABLE[4 * (t - 1) + 2];
      case l.H:
        return r.RS_BLOCK_TABLE[4 * (t - 1) + 3];
      default:
        return
    }
  }, i.prototype = {
    get: function (t) {
      var e = Math.floor(t / 8);
      return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
    }, put: function (t, e) {
      for (var n = 0; e > n; n++) this.putBit(1 == (t >>> e - n - 1 & 1))
    }, getLengthInBits: function () {
      return this.length
    }, putBit: function (t) {
      var e = Math.floor(this.length / 8);
      this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
    }
  };
  var g = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]],
    m = function () {
      var t = function (t, e) {
        this._el = t, this._htOption = e
      };
      return t.prototype.draw = function (t) {
        function e(t, e) {
          var n = document.createElementNS("http://www.w3.org/2000/svg", t);
          for (var r in e) e.hasOwnProperty(r) && n.setAttribute(r, e[r]);
          return n
        }

        var n = this._htOption, r = this._el, i = t.getModuleCount();
        Math.floor(n.width / i), Math.floor(n.height / i), this.clear();
        var o = e("svg", {
          viewBox: "0 0 " + String(i) + " " + String(i),
          width: "100%",
          height: "100%",
          fill: n.colorLight
        });
        o.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), r.appendChild(o), o.appendChild(e("rect", {
          fill: n.colorLight,
          width: "100%",
          height: "100%"
        })), o.appendChild(e("rect", {fill: n.colorDark, width: "1", height: "1", id: "template"}));
        for (var a = 0; i > a; a++) for (var s = 0; i > s; s++) if (t.isDark(a, s)) {
          var u = e("use", {x: String(a), y: String(s)});
          u.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), o.appendChild(u)
        }
      }, t.prototype.clear = function () {
        for (; this._el.hasChildNodes();) this._el.removeChild(this._el.lastChild)
      }, t
    }(), v = "svg" === document.documentElement.tagName.toLowerCase(), y = v ? m : o() ? function () {
      function t() {
        this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none"
      }

      function e(t, e) {
        var n = this;
        if (n._fFail = e, n._fSuccess = t, null === n._bSupportDataURI) {
          var r = document.createElement("img"), i = function () {
            n._bSupportDataURI = !1, n._fFail && n._fFail.call(n)
          }, o = function () {
            n._bSupportDataURI = !0, n._fSuccess && n._fSuccess.call(n)
          };
          return r.onabort = i, r.onerror = i, r.onload = o, void(r.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")
        }
        n._bSupportDataURI === !0 && n._fSuccess ? n._fSuccess.call(n) : n._bSupportDataURI === !1 && n._fFail && n._fFail.call(n)
      }

      if (this._android && this._android <= 2.1) {
        var n = 1 / window.devicePixelRatio, r = CanvasRenderingContext2D.prototype.drawImage;
        CanvasRenderingContext2D.prototype.drawImage = function (t, e, i, o, a, s, u, c) {
          if ("nodeName" in t && /img/i.test(t.nodeName)) for (var l = arguments.length - 1; l >= 1; l--) arguments[l] = arguments[l] * n; else "undefined" == typeof c && (arguments[1] *= n, arguments[2] *= n, arguments[3] *= n, arguments[4] *= n);
          r.apply(this, arguments)
        }
      }
      var i = function (t, e) {
        this._bIsPainted = !1, this._android = a(), this._htOption = e, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = e.width, this._elCanvas.height = e.height, t.appendChild(this._elCanvas), this._el = t, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.alt = "Scan me!", this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null
      };
      return i.prototype.draw = function (t) {
        var e = this._elImage, n = this._oContext, r = this._htOption, i = t.getModuleCount(), o = r.width / i,
          a = r.height / i, s = Math.round(o), u = Math.round(a);
        e.style.display = "none", this.clear();
        for (var c = 0; i > c; c++) for (var l = 0; i > l; l++) {
          var h = t.isDark(c, l), d = l * o, f = c * a;
          n.strokeStyle = h ? r.colorDark : r.colorLight, n.lineWidth = 1, n.fillStyle = h ? r.colorDark : r.colorLight, n.fillRect(d, f, o, a), n.strokeRect(Math.floor(d) + .5, Math.floor(f) + .5, s, u), n.strokeRect(Math.ceil(d) - .5, Math.ceil(f) - .5, s, u)
        }
        this._bIsPainted = !0
      }, i.prototype.makeImage = function () {
        this._bIsPainted && e.call(this, t)
      }, i.prototype.isPainted = function () {
        return this._bIsPainted
      }, i.prototype.clear = function () {
        this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1
      }, i.prototype.round = function (t) {
        return t ? Math.floor(1e3 * t) / 1e3 : t
      }, i
    }() : function () {
      var t = function (t, e) {
        this._el = t, this._htOption = e
      };
      return t.prototype.draw = function (t) {
        for (var e = this._htOption, n = this._el, r = t.getModuleCount(), i = Math.floor(e.width / r), o = Math.floor(e.height / r), a = ['<table style="border:0;border-collapse:collapse;">'], s = 0; r > s; s++) {
          a.push("<tr>");
          for (var u = 0; r > u; u++) a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + i + "px;height:" + o + "px;background-color:" + (t.isDark(s, u) ? e.colorDark : e.colorLight) + ';"></td>');
          a.push("</tr>")
        }
        a.push("</table>"), n.innerHTML = a.join("");
        var c = n.childNodes[0], l = (e.width - c.offsetWidth) / 2, h = (e.height - c.offsetHeight) / 2;
        l > 0 && h > 0 && (c.style.margin = h + "px " + l + "px")
      }, t.prototype.clear = function () {
        this._el.innerHTML = ""
      }, t
    }();
  QRCode = function (t, e) {
    if (this._htOption = {
        width: 256,
        height: 256,
        typeNumber: 4,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: l.H
      }, "string" == typeof e && (e = {text: e}), e) for (var n in e) this._htOption[n] = e[n];
    "string" == typeof t && (t = document.getElementById(t)), this._htOption.useSVG && (y = m), this._android = a(), this._el = t, this._oQRCode = null, this._oDrawing = new y(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text)
  }, QRCode.prototype.makeCode = function (t) {
    this._oQRCode = new e(s(t, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(t), this._oQRCode.make(), this._el.title = t, this._oDrawing.draw(this._oQRCode), this.makeImage()
  }, QRCode.prototype.makeImage = function () {
    "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage()
  }, QRCode.prototype.clear = function () {
    this._oDrawing.clear()
  }, QRCode.CorrectLevel = l
}(), function () {
  var t, e, n, r, i, o, a, s, u, c, l, h, d, f, p, g, m, v, y, w, b, x, _, C, E, A, T, k, S, D, requestAnimationFrame,
    I, PlayAnimation, j, M, N, $, O,
    R, B, q, z, H, U, F, W, V, Z, X, Y = [].slice, J = {}.hasOwnProperty, G = function (t, e) {
      function n() {
        this.constructor = t
      }

      for (var r in e) J.call(e, r) && (t[r] = e[r]);
      return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, K = [].indexOf || function (t) {
      for (var e = 0, n = this.length; e < n; e++) if (e in this && this[e] === t) return e;
      return -1
    };
  for (b = {
    catchupTime: 100,
    initialRate: .03,
    minTime: 250,
    ghostTime: 100,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: !0,
    restartOnPushState: !0,
    restartOnRequestAfter: 500,
    target: "#common-loading-center",
    elements: {checkInterval: 100, selectors: ["body"]},
    eventLag: {minSamples: 10, sampleCount: 3, lagThreshold: 3},
    ajax: {trackMethods: ["GET"], trackWebSockets: !0, ignoreURLs: []}
  }, S = function () {
    var t;
    return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date
  },
         requestAnimationFrame = window.requestAnimationFrame ||
           window.mozRequestAnimationFrame ||
           window.webkitRequestAnimationFrame ||
           window.msRequestAnimationFrame,
         w = window.cancelAnimationFrame ||
           window.mozCancelAnimationFrame,
       null == requestAnimationFrame && (requestAnimationFrame = function (t) {
         return setTimeout(t, 50)
       }, w = function (t) {
         return clearTimeout(t)
       }),
         PlayAnimation = function (t) {
           var e, n;
           return e = S(), (n = function () {
             var r;
             return r = S() - e, r >= 33 ? (e = S(), t(r, function () {
               return requestAnimationFrame(n)
             })) : setTimeout(n, 33 - r)
           })()
         }, I = function () {
    var t, e, n;
    return n = arguments[0], e = arguments[1], t = 3 <= arguments.length ? Y.call(arguments, 2) : [], "function" == typeof n[e] ? n[e].apply(n, t) : n[e]
  }, x = function () {
    var t, e, n, r, i, o, a;
    for (e = arguments[0], r = 2 <= arguments.length ? Y.call(arguments, 1) : [], o = 0, a = r.length; o < a; o++) if (n = r[o]) for (t in n) J.call(n, t) && (i = n[t], null != e[t] && "object" == typeof e[t] && null != i && "object" == typeof i ? x(e[t], i) : e[t] = i);
    return e
  }, m = function (t) {
    var e, n, r, i, o;
    for (n = e = 0, i = 0, o = t.length; i < o; i++) r = t[i], n += Math.abs(r), e++;
    return n / e
  }, C = function (t, e) {
    var n, r, i;
    if (null == t && (t = "options"), null == e && (e = !0), i = document.querySelector("[data-pace-" + t + "]")) {
      if (n = i.getAttribute("data-pace-" + t), !e) return n;
      try {
        return JSON.parse(n)
      } catch (o) {
        return r = o, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", r) : void 0
      }
    }
  }, a = function () {
    function t() {
    }

    return t.prototype.on = function (t, e, n, r) {
      var i;
      return null == r && (r = !1), null == this.bindings && (this.bindings = {}), null == (i = this.bindings)[t] && (i[t] = []), this.bindings[t].push({
        handler: e,
        ctx: n,
        once: r
      })
    }, t.prototype.once = function (t, e, n) {
      return this.on(t, e, n, !0)
    }, t.prototype.off = function (t, e) {
      var n, r, i;
      if (null != (null != (r = this.bindings) ? r[t] : void 0)) {
        if (null == e) return delete this.bindings[t];
        for (n = 0, i = []; n < this.bindings[t].length;) this.bindings[t][n].handler === e ? i.push(this.bindings[t].splice(n, 1)) : i.push(n++);
        return i
      }
    }, t.prototype.trigger = function () {
      var t, e, n, r, i, o, a, s, u;
      if (n = arguments[0], t = 2 <= arguments.length ? Y.call(arguments, 1) : [], null != (a = this.bindings) ? a[n] : void 0) {
        for (i = 0, u = []; i < this.bindings[n].length;) s = this.bindings[n][i], r = s.handler, e = s.ctx, o = s.once, r.apply(null != e ? e : this, t), o ? u.push(this.bindings[n].splice(i, 1)) : u.push(i++);
        return u
      }
    }, t
  }(), c = window.Pace || {}, window.Pace = c, x(c, a.prototype), D = c.options = x({}, b, window.paceOptions, C()), V = ["ajax", "document", "eventLag", "elements"], H = 0, F = V.length; H < F; H++) $ = V[H], D[$] === !0 && (D[$] = b[$]);
  u = function (t) {
    function e() {
      return Z = e.__super__.constructor.apply(this, arguments)
    }

    return G(e, t), e
  }(Error), e = function () {
    function t() {
      this.progress = 0
    }

    return t.prototype.getElement = function () {
      if (null == this.el && (this.el = document.querySelector(D.target), !this.el)) throw new u;
      return this.el
    }, t.prototype.finish = function () {
      var t;
      t = this.getElement(), t.parentNode.style.display = "none";
      var e = document.createEvent("HTMLEvents");
      e.initEvent("preloaddone", !1, !1), document.dispatchEvent(e)
    }, t.prototype.update = function (t) {
      return this.progress = t, this.render()
    }, t.prototype.destroy = function () {
      try {
        this.getElement().parentNode.removeChild(this.getElement())
      } catch (t) {
        u = t
      }
      return this.el = void 0
    }, t.prototype.render = function () {
      var t;
      return t = this.getElement(), (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.innerHTML = (0 | this.progress) + "%", t.setAttribute("data-progress", 0 | this.progress)), this.lastRenderedProgress = this.progress
    }, t.prototype.done = function () {
      return this.progress >= 100
    }, t
  }(), s = function () {
    function t() {
      this.bindings = {}
    }

    return t.prototype.trigger = function (t, e) {
      var n, r, i, o, a;
      if (null != this.bindings[t]) {
        for (o = this.bindings[t], a = [], r = 0, i = o.length; r < i; r++) n = o[r], a.push(n.call(this, e));
        return a
      }
    }, t.prototype.on = function (t, e) {
      var n;
      return null == (n = this.bindings)[t] && (n[t] = []), this.bindings[t].push(e)
    }, t
  }(), z = window.XMLHttpRequest, q = window.XDomainRequest, B = window.WebSocket, _ = function (t, e) {
    var n, r, i;
    i = [];
    for (r in e.prototype) try {
      null == t[r] && "function" != typeof e[r] ? "function" == typeof Object.defineProperty ? i.push(Object.defineProperty(t, r, {
        get: function () {
          return e.prototype[r]
        }, configurable: !0, enumerable: !0
      })) : i.push(t[r] = e.prototype[r]) : i.push(void 0)
    } catch (o) {
      n = o
    }
    return i
  }, T = [], c.ignore = function () {
    var t, e, n;
    return e = arguments[0], t = 2 <= arguments.length ? Y.call(arguments, 1) : [], T.unshift("ignore"), n = e.apply(null, t), T.shift(), n
  }, c.track = function () {
    var t, e, n;
    return e = arguments[0], t = 2 <= arguments.length ? Y.call(arguments, 1) : [], T.unshift("track"), n = e.apply(null, t), T.shift(), n
  }, N = function (t) {
    var e;
    if (null == t && (t = "GET"), "track" === T[0]) return "force";
    if (!T.length && D.ajax) {
      if ("socket" === t && D.ajax.trackWebSockets) return !0;
      if (e = t.toUpperCase(), K.call(D.ajax.trackMethods, e) >= 0) return !0
    }
    return !1
  }, l = function (t) {
    function e() {
      var t, n = this;
      e.__super__.constructor.apply(this, arguments), t = function (t) {
        var e;
        return e = t.open, t.open = function (r, i, o) {
          return N(r) && n.trigger("request", {type: r, url: i, request: t}), e.apply(t, arguments)
        }
      }, window.XMLHttpRequest = function (e) {
        var n;
        return n = new z(e), t(n), n
      };
      try {
        _(window.XMLHttpRequest, z)
      } catch (r) {
      }
      if (null != q) {
        window.XDomainRequest = function () {
          var e;
          return e = new q, t(e), e
        };
        try {
          _(window.XDomainRequest, q)
        } catch (r) {
        }
      }
      if (null != B && D.ajax.trackWebSockets) {
        window.WebSocket = function (t, e) {
          var r;
          return r = null != e ? new B(t, e) : new B(t), N("socket") && n.trigger("request", {
            type: "socket",
            url: t,
            protocols: e,
            request: r
          }), r
        };
        try {
          _(window.WebSocket, B)
        } catch (r) {
        }
      }
    }

    return G(e, t), e
  }(s), U = null, E = function () {
    return null == U && (U = new l), U
  }, M = function (t) {
    var e, n, r, i;
    for (i = D.ajax.ignoreURLs, n = 0, r = i.length; n < r; n++) if (e = i[n], "string" == typeof e) {
      if (t.indexOf(e) !== -1) return !0
    } else if (e.test(t)) return !0;
    return !1
  }, E().on("request", function (e) {
    var n, r, i, o, a;
    if (o = e.type, i = e.request, a = e.url, !M(a)) return c.running || D.restartOnRequestAfter === !1 && "force" !== N(o) ? void 0 : (r = arguments, n = D.restartOnRequestAfter || 0, "boolean" == typeof n && (n = 0), setTimeout(function () {
      var e, n, a, s, u, l;
      if (e = "socket" === o ? i.readyState < 2 : 0 < (s = i.readyState) && s < 4) {
        for (c.restart(), u = c.sources, l = [], n = 0, a = u.length; n < a; n++) {
          if ($ = u[n], $ instanceof t) {
            $.watch.apply($, r);
            break
          }
          l.push(void 0)
        }
        return l
      }
    }, n))
  }), t = function () {
    function t() {
      var t = this;
      this.elements = [], E().on("request", function () {
        return t.watch.apply(t, arguments)
      })
    }

    return t.prototype.watch = function (t) {
      var e, n, r, i;
      if (r = t.type, e = t.request, i = t.url, !M(i)) return n = "socket" === r ? new f(e) : new p(e), this.elements.push(n)
    }, t
  }(), p = function () {
    function t(t) {
      var e, n, r, i, o, a, s = this;
      if (this.progress = 0, null != window.ProgressEvent) for (n = null, t.addEventListener("progress", function (t) {
        return t.lengthComputable ? s.progress = 100 * t.loaded / t.total : s.progress = s.progress + (100 - s.progress) / 2
      }, !1), a = ["load", "abort", "timeout", "error"], r = 0, i = a.length; r < i; r++) e = a[r], t.addEventListener(e, function () {
        return s.progress = 100
      }, !1); else o = t.onreadystatechange, t.onreadystatechange = function () {
        var e;
        return 0 === (e = t.readyState) || 4 === e ? s.progress = 100 : 3 === t.readyState && (s.progress = 50), "function" == typeof o ? o.apply(null, arguments) : void 0
      }
    }

    return t
  }(), f = function () {
    function t(t) {
      var e, n, r, i, o = this;
      for (this.progress = 0, i = ["error", "open"], n = 0, r = i.length; n < r; n++) e = i[n], t.addEventListener(e, function () {
        return o.progress = 100
      }, !1)
    }

    return t
  }(), r = function () {
    function t(t) {
      var e, n, r, o;
      for (null == t && (t = {}), this.elements = [], null == t.selectors && (t.selectors = []), o = t.selectors, n = 0, r = o.length; n < r; n++) e = o[n], this.elements.push(new i(e))
    }

    return t
  }(), i = function () {
    function t(t) {
      this.selector = t, this.progress = 0, this.check()
    }

    return t.prototype.check = function () {
      var t = this;
      return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
        return t.check()
      }, D.elements.checkInterval)
    }, t.prototype.done = function () {
      return this.progress = 100
    }, t
  }(), n = function () {
    function t() {
      var t, e, n = this;
      this.progress = null != (e = this.states[document.readyState]) ? e : 100, t = document.onreadystatechange, document.onreadystatechange = function () {
        return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]), "function" == typeof t ? t.apply(null, arguments) : void 0
      }
    }

    return t.prototype.states = {loading: 0, interactive: 50, complete: 100}, t
  }(), o = function () {
    function t() {
      var t, e, n, r, i, o = this;
      this.progress = 0, t = 0, i = [], r = 0, n = S(), e = setInterval(function () {
        var a;
        return a = S() - n - 50, n = S(), i.push(a), i.length > D.eventLag.sampleCount && i.shift(), t = m(i), ++r >= D.eventLag.minSamples && t < D.eventLag.lagThreshold ? (o.progress = 100, clearInterval(e)) : o.progress = 100 * (3 / (t + 3))
      }, 50)
    }

    return t
  }(), d = function () {
    function t(t) {
      this.source = t, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = I(this.source, "progress"))
    }

    return t.prototype.tick = function (t, e) {
      var n;
      return null == e && (e = I(this.source, "progress")), e >= 100 && (this.done = !0), e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate), this.catchup = (e - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = e), e > this.progress && (this.progress += this.catchup * t), n = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += n * this.rate * t, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
    }, t
  }(), O = null, j = null, v = null, R = null, g = null, y = null, c.running = !1, A = function () {
    if (D.restartOnPushState) return c.restart()
  }, null != window.history.pushState && (W = window.history.pushState, window.history.pushState = function () {
    return A(), W.apply(window.history, arguments)
  }), null != window.history.replaceState && (X = window.history.replaceState, window.history.replaceState = function () {
    return A(), X.apply(window.history, arguments)
  }), h = {ajax: t, elements: r, document: n, eventLag: o}, (k = function () {
    var t, n, r, i, o, a, s, u;
    for (c.sources = O = [], a = ["ajax", "elements", "document", "eventLag"], n = 0, i = a.length; n < i; n++) t = a[n], D[t] !== !1 && O.push(new h[t](D[t]));
    for (u = null != (s = D.extraSources) ? s : [], r = 0, o = u.length; r < o; r++) $ = u[r], O.push(new $(D));
    return c.bar = v = new e, j = [], R = new d
  })(), c.stop = function () {
    return c.trigger("stop"), c.running = !1, v.destroy(), y = !0, null != g && ("function" == typeof w && w(g), g = null), k()
  }, c.restart = function () {
    return c.trigger("restart"), c.stop(), c.start()
  }, c.go = function () {
    var t;
    return c.running = !0, v.render(), t = S(), y = !1, g = PlayAnimation(function (e, n) {
      var r, i, o, a, s, u, l, h, f, p, g, m, w, b, x, _;
      for (h = 100 - v.progress, i = g = 0, o = !0, u = m = 0, b = O.length; m < b; u = ++m) for ($ = O[u], p = null != j[u] ? j[u] : j[u] = [], s = null != (_ = $.elements) ? _ : [$], l = w = 0, x = s.length; w < x; l = ++w) a = s[l], f = null != p[l] ? p[l] : p[l] = new d(a), o &= f.done, f.done || (i++, g += f.tick(e));
      return r = g / i, v.update(R.tick(e, r)), v.done() || o || y ? (v.update(100), c.trigger("done"), setTimeout(function () {
        return v.finish(), c.running = !1, c.trigger("hide")
      }, Math.max(D.ghostTime, Math.max(D.minTime - (S() - t), 0)))) : n()
    })
  }, c.start = function (t) {
    x(D, t), c.running = !0;
    try {
      v.render()
    } catch (e) {
      u = e
    }
    return document.querySelector(D.target) ? (c.trigger("start"), c.go()) : setTimeout(c.start, 50)
  }, "function" == typeof define && define.amd ? define(["pace"], function () {
    return c
  }) : "object" == typeof exports ? module.exports = c : D.startOnPageLoad && c.start()
}.call(this), function (t) {
  function e(e) {
    function n() {
      I = !0
    }

    function r() {
      return D || I
    }

    function i(t, n) {
      if (e(t, !0), I && n) {
        var r = t.match(/[\w]:\/\/(.*)/);
        n(r && r[1])
      }
    }

    function o(t, e) {
      if (k[e] && k[e].length > 0) {
        var n = k[e].shift();
        n && n.call(this, t)
      }
    }

    function a() {
      i(S.updateprofile)
    }

    function s(t) {
      k.afterLogin.push(t), i(S.login, t)
    }

    function u(t) {
      k.afterUserinfo.push(t), i(S.userinfo, t)
    }

    function c(t) {
      k.afterDevice.push(t), i(S.device, t)
    }

    function l(t, e) {
      k.afterShare.push(t), i(S.share.replace("{TYPE}", e || ""), t)
    }

    function h(t) {
      i(S.pushview.replace("{TYPE}", t))
    }

    function d(e, n) {
      k.afterEncrypt.push(n), t.extra && t.extra.__newsapp_encrypt ? o(t.extra.__newsapp_encrypt(e), "afterEncrypt") : i(S.encrypt + encodeURIComponent(e), n)
    }

    function f(t, e, n) {
      k.afterUploadImage.push(n), i(S.uploadImageByCamera.replace("{W}", t).replace("{H}", e), n)
    }

    function p(t, e, n) {
      k.afterUploadImage.push(n), i(S.uploadImageByAlbum.replace("{W}", t).replace("{H}", e), n)
    }

    function g(t, e, n) {
      i(S.openComment.replace("{BOARD_ID}", t).replace("{DOC_ID}", e).replace("{TITLE}", n || ""))
    }

    function m(t) {
      k.afterComment.push(t), i(S.comment, t)
    }

    function v(t, e) {
      k.afterOtherappinfo.push(e), i(S.otherappinfo + t, e)
    }

    function y(t) {
      i(S.copy + t)
    }

    function w(t) {
      i(S.toolbar.replace("{COMMAND}", t))
    }

    function b(t) {
      document.title = t || document.title, i(S.modifytitle.replace("{TITLE}", encodeURIComponent(t)))
    }

    function x(t, e) {
      k.afterActionbutton.push(e), i(S.actionbutton.replace("{NAME}", encodeURIComponent(t)), e)
    }

    function _(e) {
      k.afterAddAlarm.push(e), t.extra && t.extra.__newsapp_alarm_add_done ? o(t.extra.__newsapp_alarm_add_done(), "afterAddAlarm") : i(S.addAlarm, e)
    }

    function C(e) {
      k.afterRemoveAlarm.push(e), t.extra && t.extra.__newsapp_alarm_remove_done ? o(t.extra.__newsapp_alarm_remove_done(), "afterRemoveAlarm") : i(S.removeAlarm, e)
    }

    function E(e) {
      k.afterCheckAlarm.push(e), t.extra && t.extra.__newsapp_alarm_check_done ? o(t.extra.__newsapp_alarm_check_done(), "afterCheckAlarm") : i(S.checkAlarm, e)
    }

    function A(t) {
      k.afterTrashId.push(t), i(S.trashid, t)
    }

    function T(t) {
      k.afterLocation.push(t), i(S.location, t)
    }

    var k, S, D = /NewsApp/gi.test(navigator.userAgent), L = /Android/gi, I = !1,
      P = L.test(navigator.platform) || L.test(navigator.userAgent);
    return k = {
      afterEncrypt: [],
      afterShare: [],
      afterUserinfo: [],
      afterLogin: [],
      afterDevice: [],
      afterUploadImage: [],
      afterComment: [],
      afterOtherappinfo: [],
      afterActionbutton: [],
      afterAddAlarm: [],
      afterRemoveAlarm: [],
      afterCheckAlarm: [],
      afterTrashId: [],
      afterLocation: []
    }, S = {
      share: "share://{TYPE}",
      updateprofile: "updateprofile://",
      encrypt: "encrypt://",
      pushview: "pushview://{TYPE}",
      userinfo: "userinfo://",
      login: "login://",
      device: "device://",
      uploadImageByCamera: "uploadimage://camera/{W}_{H}",
      uploadImageByAlbum: "uploadimage://album/{W}_{H}",
      openComment: "newsapp://comment/{BOARD_ID}/{DOC_ID}/{TITLE}",
      comment: "comment://",
      otherappinfo: P ? "otherappinfo://" : "otherappinfo://intent/",
      copy: "copy://",
      toolbar: "docmode://toolbar/{COMMAND}",
      modifytitle: "docmode://modifytitle/{TITLE}",
      actionbutton: "docmode://actionbutton/{NAME}",
      addAlarm: "alarm://add",
      removeAlarm: "alarm://remove",
      checkAlarm: "alarm://check",
      trashid: "trashid://",
      location: "location://current"
    }, t.__newsapp_share_done = function (t) {
      o(t, "afterShare")
    }, t.__newsapp_encrypt_done = function (t) {
      o(t, "afterEncrypt")
    }, t.__newsapp_userinfo_done = function (t) {
      o(t, "afterUserinfo")
    }, t.__newsapp_login_done = function (t) {
      o(t, "afterLogin")
    }, t.__newsapp_device_done = function (t) {
      o(t, "afterDevice")
    }, t.__newsapp_upload_image_done = function (t) {
      o(t, "afterUploadImage")
    }, t.__newsapp_comment_done = function (t) {
      o(t, "afterComment")
    }, t.__newsapp_otherappinfo_done = function (t) {
      o(t, "afterOtherappinfo")
    }, t.__newsapp_browser_actionbutton = function (t) {
      o(t, "afterActionbutton")
    }, t.__newsapp_alarm_add_done = function (t) {
      o(t, "afterAddAlarm")
    }, t.__newsapp_alarm_remove_done = function (t) {
      o(t, "afterRemoveAlarm")
    }, t.__newsapp_alarm_check_done = function (t) {
      o(t, "afterCheckAlarm")
    }, t.__newsapp_trashid_done = function (t) {
      o(t, "afterTrashId")
    }, t.__newsapp_location_done = function (t) {
      o(t, "afterLocation")
    }, {
      isNewsApp: r,
      login: s,
      userInfo: u,
      device: c,
      share: l,
      encrypt: d,
      updateProfile: a,
      uploadImageByCamera: f,
      uploadImageByAlbum: p,
      pushView: h,
      openComment: g,
      comment: m,
      otherappinfo: v,
      copy: y,
      toolbar: w,
      modifyTitle: b,
      actionbutton: x,
      enableDebug: n,
      addAlarm: _,
      removeAlarm: C,
      checkAlarm: E,
      trashId: A,
      location: T,
      protocol: i,
      Callbacks: k
    }
  }

  var n = function () {
    function e(t) {
      var e = document.createElement("iframe");
      return e.setAttribute("style", "display:none;width:0;height:0;position: absolute;top:0;left:0;border:0;"), e.setAttribute("height", "0px"), e.setAttribute("width", "0px"), e.setAttribute("frameborder", "0"), t ? e.setAttribute("src", t) : document.documentElement.appendChild(e), e
    }

    function n(t) {
      t && t.parentNode.removeChild(t)
    }

    function r(r, o, s) {
      var u, c;
      return s ? void(t.location.href = r) : void(o ? (a ? (u = e(), u.setAttribute("src", r)) : (u = e(r), document.documentElement.appendChild(u)), c = setTimeout(function () {
        u && n(u)
      }, 3e4), u.onload = u.onreadystatechange = function () {
        c && clearTimeout(c), u && n(u)
      }) : (i = i || e(), i.setAttribute("src", r)))
    }

    var i, o = /Android/gi, a = o.test(navigator.platform) || o.test(navigator.userAgent);
    return i = null, {protocol: r}
  }();
  t.NewsAppClient = e(n.protocol)
}(window), function () {
  "use strict";

  function t() {
    e(), n(), r(), i()
  }

  function e() {
    o = $("#common-landscape"), a = $("#common-pc"), s = $("#common-share"), u = $(".common-container")
  }

  function n() {
    var t = function () {
      switch (window.orientation) {
        case 0:
        case 180:
          o.hide();
          break;
        case-90:
        case 90:
          o.show()
      }
    };
    t(), window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", t, !1)
  }

  function r() {
    $.os.phone || $.os.tablet || (new QRCode(a.children()[0]).makeCode(location.href), $("body").children().hide(), a.show())
  }

  function i() {
    window.NewsAppShare = {
      shareData: {title: "", desc: "", img_url: "", link: ""}, update: function (t) {
        for (var e in t) this.shareData.hasOwnProperty(e) && (this.shareData[e] = t[e]);
        document.getElementById("__newsapp_sharetext").innerHTML = this.shareData.title + " " + this.shareData.link, document.getElementById("__newsapp_sharephotourl").innerHTML = this.shareData.img_url, document.getElementById("__newsapp_sharewxtitle").innerHTML = this.shareData.title, document.getElementById("__newsapp_sharewxtext").innerHTML = this.shareData.desc, document.getElementById("__newsapp_sharewxthumburl").innerHTML = this.shareData.img_url, document.getElementById("__newsapp_sharewxurl").innerHTML = this.shareData.link
      }, show: function () {
        NewsAppClient.isNewsApp() ? NewsAppClient.share() : (s.fadeIn(300), setTimeout(function () {
          s.fadeOut(300)
        }, 2e3))
      }, getAbsPath: function (t) {
        if (t) {
          var e = document.createElement("a");
          return e.href = t, e.href
        }
        var n = new RegExp(/(\?|#).*/);
        return location.href.replace(n, "")
      }
    }, NewsAppShare.update({
      title: "人人人人人设崩了？算了算了人间不值得",
      desc: "本人和人设，哪一个才是最好的自己？",
      img_url: "https://static.ws.126.net/163/f2e/media/power_to_go2018/img/share.jpg",
      link: NTESAntAnalysis.getShareLink()
    }), document.addEventListener("WeixinJSBridgeReady", function () {
      WeixinJSBridge.on("menu:share:timeline", function () {
        WeixinJSBridge.invoke("shareTimeline", NewsAppShare.shareData, function (t) {
          window.NTESAntAnalysis && NTESAntAnalysis.sendData({
            projectid: window.NTESAntProjectid,
            val_nm: "share",
            val_act: "sharedone",
            info: {modelid: window.NTESProjectid, title: document.title}
          }), window.neteaseAnalysis && neteaseAnalysis({modelid: window.NTESProjectid, spst: 1, share: "timeline"})
        })
      }), WeixinJSBridge.on("menu:share:appmessage", function () {
        WeixinJSBridge.invoke("sendAppMessage", NewsAppShare.shareData, function (t) {
          window.NTESAntAnalysis && NTESAntAnalysis.sendData({
            projectid: window.NTESAntProjectid,
            val_nm: "share",
            val_act: "sharedone",
            info: {modelid: window.NTESProjectid, title: document.title}
          }), window.neteaseAnalysis && neteaseAnalysis({modelid: window.NTESProjectid, spst: 1, share: "appmessage"})
        })
      })
    }, !1), document.addEventListener("YixinJSBridgeReady", function () {
      YixinJSBridge.on("menu:share:timeline", function () {
        YixinJSBridge.invoke("shareTimeline", NewsAppShare.shareData, function () {
        })
      }), YixinJSBridge.on("menu:share:appmessage", function () {
        YixinJSBridge.invoke("sendAppMessage", NewsAppShare.shareData, function () {
        })
      })
    }, !1)
  }

  var o, a, s, u;
  $(t)
}(), window.NETEASE_KEYWORDS = "田惠宇|王雨云|王雨蕴|张云帆|萧泓|池宇峰|刘华清|张万年|宋祖英|汤灿|丁磊|王立军|薄谷开来|谷开来|习近平|习大大|彭麻麻|习大|彭麻|毛润之|李克强|张德江|俞正声|刘云山|王岐山|张高丽|毛泽东|周恩来|习仲勋|邓小平|江泽民|朱镕基|彭丽媛|温家宝|胡锦涛|朱德|叶剑英|刘伯承|华国锋|赵紫阳|刘少奇|胡耀邦|潘志强|毛僵尸|汞馋煮易|湖贱涛|家国匪土个是国中|山锅怠标|温夹包|涛锦胡|89以后无青年|江者民|沐屎淋|参加者回忆录|姜哲民|宫残荡|江日英|供铲铛|工颤荡|胡井滔|温夹宝|瘟宝宝|公惨淡|江则米|傥铲珙|咩龚就锅|瘟大人|供残党|工厂档|工残当|瘟jb|工自联|狸科腔|5月35日|胡精涛|g肠d|功铲傥|tuidang|马少方|姜蔗茗|供缠|党共倒打|89暴乱|共馋党|工厂蛋|huhaifeng|狗产共|瘟爷爷|军事政变邓小丑|温家暴|迗侒门|档种杨|江灾民|夜夜笙歌里藏春|猫贼洞|糊螃蟹|铲荡|供惨|反公救国|共餐档|攻缠挡|添灭钟贡|共贪裆|共菜当|5月三十五号|胡菜瓜|弓产裆|温家宝下台|解放大陆|缠裆|无邦国|共cd|宫产蛋|汞颤荡|供档|档肿阳|瘟不四|八八血案|共颤垱|中共邪恶|古月狗|共参当|供惨裆|bajiu|灵吧线樟|胡圣人|矽谷中国民主促进会|工缠荡|猫竹溪|暴共|政治满清化|贡妃|公贪党|四二二事件|自you门|宫谠|恭滻欓|公抢裆|大法通行|鞑战大克坦|毛厕东|虎进套|贡蚕蟷|供参谠|dafalun|诛赤义军|zhenshanren|弓肺|宫惨挡|湖景涛|公蟾裆|法论公|零8宪章|宝假温|馋当|供产档|供惨谠|安圆鼎逞强|户尽套|猫遮洞|误谤国|觥馋d|6四韵动|圡匪治国|拱惨裆|加息本来无帮国|问假宝|瘟家饱|工产当|minghui|糊精淘|策反中国|毛正日|供铲傥|国旗下的讲话|档中阳|供禅挡|老僵战三英|共肺|狐愠|公馋档|温亚圣|狗惨裆|弓铲谠|工惨砀|忽机套|湖金涛|僵汄冥|胡中央|匪猪|工惨裆|鑫钟锅|民联阵|天朝9贼|胡金掏|户惊涛|共餐蛋|号小灭公购|谗谠|垬兲|美国之音网|悼念89|江前胡后|明慧网|gong铲d|党在搞社会|猪容鸡|四六反平|恭惨党|档铲汞国中岛达|北高联|和平请愿|拱惨挡|公惨d|江软蛋|公参裆|石榴酒巴|家家不保户户掏尽|大赦国际|终难海|供铲谠|宫馋d|西瑾平|瘟加饱|将着民|工铲挡|烂污d|虎金醄|胡近套|一挡专整|共产d|龚禅当|工铲当|挡坦克的男人|留小玻|驱除赤魔|中国即将灭亡|湖锦騊|岛弓挡|党就是黑社|贡肥|反共热线|自由西藏|一d专正|档铲供倒打|公惨裆|64memo|邓狗|胡打击升级|档肿痒|台倒谠供|共贪档|共惨档|汞chan党|终男海|弓残宕|问价爆|工缠当|中国共惨党|供菲|灭档|汞裆|解体党文化|法论攻|汉藏友好协会|龚缠铛|木子月月加一鸟|严轮字游|公匪|对内残酷欺压|韫狗|共党专政成兽禽|终龚|共禅党|供惨档|贡菲|国民党来大陆统治|蚣馋裆|瘟假饱|恭惨荡|中共将亡|档铲共|虎紧逃|新唐人|权人没国中|法lg|工长党|镰刀斧头帮|汞掺当|恭铲当|工馋当|狗铲洞|徒务近功|将择闵|猪榕机|liuxiaobo|公贪党万岁|共fei|工参当|死舅年以后|毛贼洞|贡厂档|谠在玩设会|回忆六四|匪共|衣档装正|供谗|菌队只敢对内狂|浏小玻|jiu评|供谠|胡金涛|六四绝食书|改曹换待|g产d下台|罢免胡锦涛|赤色魔鬼|高智晟|域疆坚决永固|拱展档|茅择西|中共暴政|拱裆|共蚕党|狗谗党|龚谄裆|法楞功|两湖贼匪|肿哄倒|贡谗裆|贡残荡|红色土匪|共餐啖|误邦狗|攻残当|推翻d|红星社团|jun.4|江折民|国将易主|吴帮国|宫颤裆|共残荡|共颤党|共谠|台下共中|胡巾涛|贡缠党|法x轮x大x法|f轮功|共铲裆|狗铲镋|瘟疫党|工缠挡|国民党打回来|虎瘟|法o轮o大o法|供贪档|终暔嗨|六司运动|胡尽淘|吴尔凯希|三联邦|宫产裆|贡苟|宫谗荡|红产当|大烟鬼戒烟网|stockyayun|共禅挡|多维新闻社|共缠裆|贡缠挡|公差党|公产挡|贡构|套进胡|共惨|木子朋鸟|贡诽|肆贰陆|供馋胆|公缠胆|虎鲸焘|严家其|龚颤荡|湖景掏|湖井掏|湖近涛|供产谠|共菲|厞栱篨铲|工长挡|古月金帛|共0产0党|度制义主产共的类人反|晚共末年|公铲当|夷裆砖至|古月三昷|g匪|mzd给废了|审判ccp|北京之春|拱匪|杀涛灭宝|档种秧|粽供|联系财富腾讯|供匪|红潮过后|伟大光荣正确的疯狗|公产狗|糊锦饕|腿饭够挡|幊党毕辋|供残|64真相|贡铲谠|天朝气数将尽|供餐档|公缠档|湖井涛|残谠|jiuping|天朝覆灭|湖井逃|胡狗屎|弧瘟|狗铲挡|贡肠胆|糊景掏|冲杯三鹿给谠喝|共馋挡|态籽档|工禅挡|供谗裆|温加堡|收复大陆|公馋党|宫荡|民泽江|功缠当|瘟糊|糊主西|汞缠挡|四26社论|gcd下台|瞎江虾和湖虾|李鸟朋|灭党|为非作胡|杀胡猴宰温猪|法一轮|一d独财|供禅裆|共傥|供狗|拱铲党|gong产党|共残当|铲档|共痱|龚肥不亡天理难蓉|公缠当|自由写作奖|工铲宕|共毁档|dadaogcd|江二公子|人民尚未温加饱|共娼党|胡吴温贾|将则民|糊总输鸡|粪铲挡|宫铲|猢猪瘟鸡|吻假饱|供柴璫|1989年6月4日|北京高校学生自治联合会|贡婵挡|弓残荡|共娼荡|湖紧滔|法圈功|匪供|黄雀营救|姜棉横|天灭河蟹|供掺挡|瘟夹雹|纪念88|三退保平安|lihongzhi|衣档毒菜|工惨当|灭中共|gf必|珙榧|龚挡|支台入联|假庆临|法车仑|戏镜瓶|糊锦涛|湖锦套|党风日下|温瘕包|宫惨荡|胡金逃|恭裆|胡前江后|胡锦tao|保护粤语粤港大行动|无界浏览|粪铲档|终贡|档盅殃|弓狗|瘟加爆|共产党腐败|温秀秀|红狗不得好死|党灭亡|明心网|中共屠城|龚缠挡|我愿揭杆|中国民运基金|打倒共产党|弓蚕档|沦陷60年|共踩党|天朝快完蛋|64屠夫|宝稼纹|共餐党|肚菜锅佳|天灭终共|恭惨档|6肆|文家爆|工产党|o8县张|贡挡|镰斧帮|方励芝|工蝉当|天朝灭亡|湖进套|公抢档|反造来起家大|共贱和谐|工仓当|江独裁|共灿铛|温加宝|江罪民|蛤蟆党|公摊当|婵荡|宫藏谠|兑现竞选支票|觥馋荡|支持台湾独立|江则民|红朝末年|弧紧陶|公缠党|拱斐|揾加报|共馋档|公参蛋|瘟总利|问价煲|忽筋叨|虎茎套|中央内斗|正直菊|狐尽逃|我咒你全家死光光|温沙比|灭钟共|虎井套|赤斐|瘟稳|贡惨挡|江浙民|娼档|宫谗档|公铲挡|拱谠|中国共残党|答岛供痱|功缠挡|人敏的挡|拱查蛋|da到zgg阐d|独立台湾会|挡钟央|弓铲铛|公馋挡|又糊又瘟|公惨档|89国殇|供禅谠|胡涂涛|愩惨裆|缠当|虎禁套|邦国殄瘁|套紧壶|弓铲档|裆钟央|共餐当|温猪猡|共娼蛋|共猪|宫禅挡|公肺|恭构|馋档|共中灭天|蚊假饱|6月上旬英雄名单|供抢挡|gongfei|中国反烟网|公铲谠|江祸民|九评|瘟蝴|公蚕当|胡猪温狗|文假保|日出英花|护茎套|江哲民|公缠挡|工残党|姜哲鸣|胡静涛|胡大请你下台|工铲档|八玖|宇宙的特性是真善忍|铲挡|1989.6.4|邓盗江寇|舔蔑重功|巩餐蛋|共狗|胡惊涛|宫馋挡|蚣产谠|大纪园|陆月肆日|法论宫|江ze|法lun大fa|中共必亡|贡匪|江则名|公残党|中共一党专制|政治朝鲜化|户进套|太上皇江|党产共倒打|熊焱|出售枪支|中国真相基金会|沪绵铸|共参党|灭中g|o八线樟|宫残裆|义主民三|大妓元|工缠档|拱产挡|共党腐败|胡镜涛|湖劲套|僵贼螟|闻加宝|回大陆执政|工馋党|g产d|供斐|弓缠当|g缠谠|湖温|宫残档|共厞|六驷|供菜当|湖仅逃|铲车铲大学生是哪一年|公贪档|龚肥|匪共灭消姓百|供蚕当|08宪章|糊仅涛|共韭|遛月寺日|1d专正|中共邪党|五月三十五日|瘟枷饱|宫惨蛋|共r匪|g残d|江魔头|钟供|东土耳其斯坦|某产党|房产欓|华南教会|产共倒打|湖晋滔|胡尽掏|贡緾荡|搵珈宝|天门事件|拱档|杀死温家|宫裆|共颤荡|回封建时代|全歼共军|共产邪党|中国民主教育基金会|中g灭亡|台湾统一中国|公蝉蛋|共厂党|狐老板|国嘉煮习|嚎肿狸|刮财党|吾尔凯希|共馋荡|老婆是戴梦得珠宝集团的老板|肿楠嗨|胡捡掏|曾曾贾贾九常委|温猪|家宝安全门|江这民|gong匪|共废要完|胡紧涛|弓缠档|僵则泯|共党倒台|共党灭亡|姓瘟|龚餐铛|瘟家包|恭惨当|狐禁逃|宫产荡|掺当|弓缠荡|工谗当|供铲|瘟乱搞|攻产党|霍蝈墙|家宝影帝|影帝家宝|胡狗|龚差蛋|温帝|围剿工匪|推翻供谠|剿f不力|贤慧的妻子为老公吹大鸡鸡真是善解人衣哟|暴力与谎言为挡治郭手段|共产狗|肉棒|烂屄|老逼|潮吹|颜射|对逼进行分类|大鸡巴|舔阴|屄痒|嫩穴|草你全家|烂逼|老娘的巨逼|其双腿间缝隙的距离|舔你b|吃你白带|经血|白带汤|俄罗斯轮盘|我是一个寂寞的女人|黑逼|黑屄|骚屄|操b专车|广州食尸狗|吸精|1989.06.04|坦克压学生|王维林|吾尔开希|柴玲|封从德|侯德建|侯德健|丁子霖|张立冬绝对有背景|张绝对不是什么邪教成员|演猿一届换一届|好支威有希|你妈|贱货|网易审核|畜生|江的棋子而已|除习|媛宵|除习|媛宵|量中华之物力|结与国之欢心|彭婊子|龚禅档|元旦当天|全国车主统一鸣笛|沉默术士xi禁评|警匪一家|习家兄弟挑媳妇品味|柯小明|彭ly|教大家怎么有钱|atm|li媛|狗比警察|广西土狗|斗仙|河南二字|极度蒙羞和|国军威武|国军万岁|剿匪不力|河南狗|广东狗|草死|挺起古巨鸡|抹上张学油|干你女马|大腿间|脱下裙子|屁眼|第一次|女友b的味道|海运门全套图片|中妓萎|给你艹|要不要|红狗|艹你娘|扒衫射水吸舔取jing|新上任的皇帝|新上任的皇上|草比|草逼|邓江湖|死一户口本|死全家|张先玲|徐钰|吴建民|古懿|六四26周年致国内同学的公开信|89风波|坦克人|学自联|黑衣人抗议|张博树|尤维洁|泰监|鲜鲍|操爆你|草爆你|操肛门|毛蜡尸|christiesteven|89事件|优昙婆罗圣花|布假戏骗百姓|湖锦掏|贡僋裆|打倒共非|躬颤裆|吻钟离|攻残裆|党仰荒亡殃|中共未灭|湖茎逃|共产党快亡了|破除毒誓|脑子全是被d灌的屎|工蝉档|温假饱|攻残宕|魔鬼孟见柱|公铲党|国颜掉裆|共不等于中|公铲裆|除退恶评|忠男骸|诉江案|结束中国一党专政|大纪元|工惨档|三退洪流|蚊枷宝|快害大千国|610头目|虎鲸涛|供餐谠|墓屎淋|法办周永康|珙浐谠|天灭在眼前|珙铲胆|糊紧套|九十年前飞来祸|六月寺号|弓禅当|大陆回归台湾|三退破毒誓|共产党该倒台|虎劲逃|虎劲套|供铲裆|公铲档|军痿猪席|狐紧套|天安门自焚伪案|僵贼敏|瘟佳包|壶瘟|文革六四|真招辱|公惨挡|退出共产|蚣缠裆|德盛祸国|即四反年党|误间度醒|610盖世太保|小胡和小温|共匚非|邓败类|此木王令|咒永康|龚灿党|三匚八一艹刂|肥共倒打|扌丁到供馋残|维族狗|党天外纵榨贪搞|公审江泽民|曙光网|温家饱|工灿筜|灭革反十产|公产荡|弓馋党|蚣蟾裆|共产邪灵|中共活摘器官|猫遮冬|古死办劫|胡紧掏|天兵天将下天廷|乱我华夏匪患盛|无能的温家宝|饱私欲|瘟加鸨|瘟加保|占领中南海|法办江泽民|打倒中国共产党|真善忍|贡产裆|供残谠|邓屠夫|共生东土|江泽民其人|胡紧套|温假宝|供馋裆|恶满地|宫禅当|万生速大|胡扎菲|消灭共产|匪患多灾|弓铲裆|中南海共产党在夹缝里|解体中共|共裆正腐|吸精嫔|瘟总理|是恶逆|铛铲供|天文三六共|中共演戏|在中国各大城中村空投枪械|605号决议|打到gcd|撒旦魔教乱|供餐当|共产蛋|僵贼冥|公残挡|你曾陪伴着孤单的紫阳|滔邪广|博大出版社|中共不亡|狐惊逃|博大书局|壶井桃|共黑贪|天官作共|无乱九国|胡锦涛下台|共残档|阉档砖全|中共是邪教|供娼傥|弓产档|玖评|处重红邪|推翻中共|神韵艺术团|狐景滔|公产档|攻馋档|姜测民|中共将倒台|天国乐团|仲供是狗|公贪谠|一蛋砖制|非共倒打|曾庆淮|鞭尸毛鸡吧|猫遮栋|蚊假暴|菌痿煮媳|拱贪谠|肿烂海|七日创造天朝|功铲裆|供俳|虎精套|胡紧逃|蚊家豹|瘟贼|共惨淡|供厂党|拱蚤珰|新疆狗|温家保|供贪铛|席禁评|软弱外交|腐败党政|专制封闭|free陈光诚|要是中国可以选政党|糊井逃|申屠福华|点名要88号小姐进行性交易|胡脸瘫|瘟假爆|江胡斗|当产共|目前压榨中国人最多的是zf|作恶无数|倒台|退出平安|非匚八一艹刂至亻丁扌|胡面瘫|肿癣部|政当匪土|公惨党|瘟家宝|器官活摘|人神共愤|供餐党|糊颈套|狗馋谠|文刂日尧氵皮|裆中殃|中g将倒台|温贼|耄贼|户惊套|推翻共产党|剿灭供匪|贡菜当|习阴毒|瘟枷鸨|江青蛙|公产谠|壶紧套|公产蛋|中共是狗屎|胡河蟹|肿难嗨|公惨当|中gong将倒台|六四平反|法办江|狐茎套|宫残党|贡产挡|腐败的监管层|站起来|反腐败无能|垃圾正奸会|将倒台|退出平安|供惨党|公残裆|邪共|共惨裆|八荣八耻全颠倒|攻铲档|毛腊肉|平反六四|公馋裆|糊温|共铲谠|89学潮|瘟鬃狸|习禁评|龙村和龟庄是两个相邻的村子|器官活摘|杀人凶手|席竞平|无帮国|共产党必亡|打到共产党|吸精瓶|工残档|江核心|审判江泽民|屏蔽词档案|龚残档|有个蛆织|信马贼洗脑|贺一亿两千多万三退勇士|马贼洗脑发血誓|共党要完蛋|jiupinggongchandang|退党|退团|贺一亿三千万人三退|马徒灭|中华复兴|水日皿|国已被贼窃|狗产档|强摘法轮功学员器官|暴力强摘器官|器官活摘|公审江|爱d是叛国|爱国须退d|停止迫害法轮功|亲民秀|蚊相公|库帑丰盈|共匪邪恶政权|穿墙秘技|tianmiezhonggong|zhonggongjiangdaotai|蚣蝉裆|蚣禅裆|瘟加宝|蚣匪恶魔|天叫共党亡|千里朦胧|万里尘飘|还做早操|弓颤裆|弓颤党|艹一八匪|问假包|干死共产党|温加饱|工农匪裆|僵尸遮民家堡|已经过第二个本命年|变成为魔鬼的帮凶|香港一直没有遗忘那一年|只要一天离不开共产主义|蚣娼匪裆|匪狗裆|恭铲裆|温去年灭了个薄|垃圾a股一片绿色|为无能的天朝感羞耻|宫惨档|一9键j退i出x谠y团5队|共浐灙|掏子为组织和谐了腐败制度|公娼贼裆|贼党|龚唱蛋|蟊贼洞|刁远曲|京都7位主事太监|如果你觉得政治与你无关|传播自由民主思想|洗脑|亡易已经没有干净的地方|壹玖捌玖陆肆|有个外来邪教|祸害中华|折腾死8000万民|卄一八匚非|邓鬼话|江的三块表|糊涂的河蟹|边说枪杆子里出政权|资本主义走的是邪路|国际歌|贱b当政的鸟郭嘉|传播与呐喊|马列毛邓|tanke|chongfengqiang|打倒gcd|出国访问|头条新闻|夫人打伞|穿情侣装|骚谠|别看我长个大肥脸|可俺老婆还算给力|二人转演员|锤子和一把镰刀熔化|自由女神像|徐勤先|我认为网易老板姓丁的这就在犯罪|夏天|特殊任务|清洗履带|狗拆档|今日去共|一生不悔|习以为常了|近朱者赤猿不老|平凡不高考|鸡犬不宁民不聊|巴基斯坦杀人了|姓张的衙内|上将万连的孙子|有魏氏兄弟|九大长老的孙子|习奸平|共匪党|刁斤平|大道忠郭宫惨当|刁近平|打倒公惨荡|毫不留情的杀死红色流氓土匪|江凌肃|曾海潮|江林肃|薄青天|温家集体离开中国|邓川猴子|江三婊子|胡螃蟹子|共非要灭亡|狗残挡|珙颤裆|匪谠|刁明泽|刁远凸|精刁的红色泼皮无赖流氓|新君夕某|一手打苍蝇|别的派系|一个政权不经选举|拥护什么|万万岁的什么|退共党|毛贼东|刁远凹|席晋瓶|狗惨当|大姐加x大guo籍|五毛死全家|五毛拿钱发帖死全家|毛宏芳60分下台|大姐在加拿大|二姐在澳大利亚|女儿在美国|老猫在49年以后使中华文明毁之殆尽|中央政府的临时政府|猫发表言论庆祝蒙古独立|刁畜生|刁总|刁老大|刁大哥|刁大人|刁杂种|刁斤乎|姓刁的|刁哥|刁书记|刁夫人|天意天意天意之|信心比黄金还重要|口号|铮铮铁骨|任期内|六十四|肿脸充胖子|撒谎|准备后事|发人深省的故事|四大文明古国|就选了两个自认为可靠的|时不我待时不我待速速速|天忿地怒人怨警|谁愿做陪葬谁愿做陪葬生|大审判大审判大审判审|明哲保身明哲保身活活|退|出|自|救化名化名|即时播报|退d|团|队|总人数|醒觉醒觉醒觉醒觉醒觉快|退了平安|化名也有效|有个外来邪教|祸害中华|强迫信邪论洗脑发毒誓做牺牲供品|一亿五千万人了|土匪当时吹嘘它建政之后|土匪篡权以来|一个耻辱的奇迹|他们高喊反腐倡廉|他们消灭了黑社会|体制内的今天你沉默了|刁近干|刁远干|七个杂种开玩会|姜上来时|优昙婆罗花|逆贼毛匪泽东|器宫活谪天地怒器宫活谪|自救自救自救自救|草你妈网易|烧饼歌|退退|避凶之良策智者|大势所趋丕极退则安|神爱世人神爱世人网开退|六一零办公室六一零|好日子就要来了幸运|网开一面网开一面网开退|苦尽甘来苦尽甘来苦尽甘|立贴为证立贴为证退着生|北京公安内部有人狗胆包天|天下太平天下太平退|天意难违天意难违天意|退则生退则生退则生|好书推荐好书推荐好书|退者生退者生者生|首都公安内部有人狗胆包天|废除毒誓废除|脱离黑帮保全性命|提着wy老总丁磊及小编狗头|急救急救急救急救急救退|脱开是非一退百安脱开|走向美好的未来|退|听天由命否极泰来|退|汉族天生被人大屠杀|网络评论员|拿钱发帖的杂种们|刁大|处处有匪警|文刂目尧氵皮|当朝大老板的大姐|古月钅白巾氵寿|毛扎种|毛泽东|扎种|朝鲜邓被打到|西朝鲜|刁进平|周永康|搞洪宪帝制|今年除夕为什么不放假|共立丿尚儿|弥留之际|金正日拉着儿子的手|金正日临终前拉着三胖金正恩的手嘱咐|金正日临终前把金正恩叫到床前|坚持先军政治|朝鲜语中的姑父和辜负的发音有明显区别|病榻前|金正日拉着儿子|数疯流浊物|灭在今朝|周某康|刁近伞|康永周|共产裆|共产档|达到蚣狒|ke不容huan|民警刑警法警交通警警警有庸警|纛纛纛纛|子子子麈子子麈子子|刂刂刂刂诞刂刂诞刂刂刂|痱痱痱痱痱痱痱痱痱痱痱|诞诞诞诞诞诞诞诞诞诞|公共厕所的供|难产的产|裤裆的当|毛蛋节|毛蛋劫|瘪瘪瘪瘪瘪瘪瘪瘪瘪瘪瘪|一举消灭8000万|茅厕桶|农民or农民工|某谠起家的时候|人众人人众人人|天灭zhonggong|抵制共党|公产裆|共操蛋|盆丽缘|为我们的子孙铺就奴役之路|人人人救人人救人人人人|周而复治|永不磨灭|康庄大道|快马加鞭|死神下凡|西加姐籍亚美|没有棺猿敢欺压认呡|法办器官活谪主犯周永康|一法一|一康一|讼糠讼|围慷围|妖妖孽孽|周勇康|首辅大人还是皖籍|红色的伪君子泼皮无赖流氓集团|鄹鄹鄹鄹鄹鄹|厄厄幽幽|瘟如春|瓮法瓮|艮辶辶艮|毒毒毒毒毒毒|解放了兽性|人人自残|解放了贪婪|疫疫疫幽疫疫幽疫疫疫疫|芼芼芼芼芼芼芼芼|红色的泼赖氓伪君子歪得利益集团|米春春春春春|红色泼赖氓歪得利益集团|逃逃逃逃逃逃逃逃逃|毛真的是恶魔|纹掐饱|分耲耲耲耲耲耲|叁退平安|方怪方方怪方方|抹黑falungong|毛的根本罪恶|天朝更落后更专制的制度|镶击镶击镶|毛新宇大将军王得他爷爷思想|周拥糠被查|周康康|姜贼明|粥泳糠|来个妹纸的站呀|你慰永康|周油糠|末末康|面瘫刁|靠党党腐败|百鸡王|拥习挺b|两个弟弟和一个堂妹非正常死亡|周yong康|周用康|求习总降房价|去年土匪换班的时候我就说过|当你在山上当土匪时|以打虎的名义干掉了一帮异己的兔子|国军欲血抗日|你们炕上日|猫贼东|就是整天跟着土|东亚病夫|周蛹糠|温影帝|狗谠|周永kang|为奴65年|却在研究着你的退休|1949到1976年这27年|江李温周|三石野爹|被区区几个暴徒追着砍|坐飞机|有钱人|要全死光啊|人为什么这么幸运呢|你知道你们家属有多高兴吗|土供吐肺|共匪|中国救援队一直在路上|祸害中华|害死8000万民|自田门软工具|疆狗|维猪|维狗|六4学运|习文练武有才干|南帝薄熙来|中国就是个毫无诚信的国家|形象总与一副黑框眼|空投武器给下岗|口及米青并瓦|共同执政中国|包子大帝|躬匪|一胖子拼命得围着粪堆拍苍蝇|媛丽彭|邓晓瓶|江择呡|习尽萍|52开希|中国的官员都是人神共愤的杂种|江则冥|羽胖子|西胖子|溜寺|支那匪政权|贼仔匪支那|活捉刁歪嘴|高建云|高剑云|骡子比主义指导下的奴隶社会|别忘了向历次政冶杀人运动|红鞋教的叫主|好法大轮法|49土匪进城|工铲裆|慕屎淋|49年后无中华|九名|马三家|劳教院|女学员|中国1978年以后的所谓理论|就是精神病的理论|为什么穷|主要因为蠢|现今已有一亿六千万国人彡退|玛咧子洋祖宗玛克思偷情生了个孩子叫飘荡的幽灵|onjunethe3rdinchina|中国1978年开始的所谓改革|活zhai器guan|在天巢已是癫|吉永隶|供养了世界上最大的超级裆|正腐|台湾大选告诉全体中国人|搞独立於大中华地区的其实是大陆|这是哥的白宫请愿的征集签名的链接|学运民运捕蟾蜍|叠被军|被子军|学民双运捕蟾蜍|驱逐德国邪教|大日本帝国万岁|文革是中华民族文化的伟大创举|一辆49年生产的老解放牌汽车|评评评评评评|猫皇帝过度使用了民国时培养的人才|揭揭揭揭揭揭|淫将熊兵|何谈国防|冒泽东这个杂种|肿帼xxx|衡水市六|零及其指|使下的有|打倒中国政府|天朝气数已尽|你买把水果刀就算凶器|畜牲大手一挥|淼淼淼淼淼淼淼淼淼|希特勒的头像还挂|只有美利坚才能救中国|猜猜是江沪哪只三脚蟾蜍|特色道路邓三炮|周x康|娶了个唱歌的老婆|对岸小马哥的母亲去世|允许台湾在一定程度上宣称自己合法代表中国|红色的歪得利益集团|习见平|演员一届换一届|弄机电两代汉奸|我有一个朋友特别爱吃包子|有乌市出发的一百多名大学生|前妻有个儿子在美国读书|流氓无赖当政|婊子嫖客领潮|杂种大手一挥|戏子老婆|少数民猪就是x档养的狗比|新一届领导班子给国人到底带来了什么|一群权力骗子召集一批经济骗子|7600万巨款|红烧肉|窑洞|一裆砖制|暗娼妓女借邓尸体|他们的执政合法性在哪里|他们用人民当家做主骗到国家权力|称斯大林这个法西斯恶魔为他干爹|粥蛹糠|将位于北部湾中心的夜莺岛送给了越南|捎带着宣传自己爱吃包子拉面|为什么封锁审核删贴|大官|魔相从高墙滚出去|匪患横行六十年|习巧未逢医拙手|希望美帝帮助中国百姓彻底埋葬这个产生极端贪污腐败的制度|包子帝|中国和中华人民土匪国是两个概念|你猪头新主子当年在厦门几乎每天要一个小姐|前朝那九个长老|六肆余孽|如果他的姐姐一个是加拿大籍华人|老是往外面送钱|有一个姓苏的也得过|活了69岁就寿终正寝|毛氏金氏治国驭民的8大软件|政法委老大周捞钱|八九六四|天安门屠杀事件|丽女爰是个女子逼|6月二加二号|某人姐姐弟弟是加拿大籍|贰十吾年前|二十午年前|三个学生|宣称自己没有私利的集团|演猿一届换一届|它们还要欺骗中国人到什么时候|被压榨的奴隶而已|一群贪婪无耻的土匪|重回天安门|天朝最高政法委老大周|六四纪念馆|震死四川|东北杂种|广东婊子|山东畜牲驴|河南杂种|东北骚逼|河南畜牲|李旺阳|波晓刘|日尧三皮|六4|五月35|5月35|鲍彤|25连前|陈一咨|tam事件|陆肆事件|1989年6月4|打日本他在后方窑洞|他们在后方窑洞和学生演员写日记|六四将至|喋血长安|六四始末|安徽杂种|肛洞猴|洗鸡巴平|枫叶香蕉|包子的女儿也在美国|六四网络大会|倒共符号|倒共风潮|公民同城|公祭六四|杨宪宏|李一平|陈立群|成斌麟|甄燊港|燕鹏|汪岷|潘永忠|过东升|韩武|薛伟|高健|夏新德|梁咏春|魏京生|徐文立|万润南|陈奎德|王军涛|王丹|贡噶札西|全球纪念六四25周年网络大会|6425webcongress|raidcall|paltalk|赤共六十多年犯下的滔天罪行|中央纪律检查委员会大佬|募屎淋|猫择洞|八八纪念日|欧阳钧玙|江沪蟾蜍失足三足|江蟾蜍|4惨案|六三后一天|刘秀梅|刘述春|马燕芳|马艳芳|北京请愿|官v的避重就轻|硬生生写出一个丑字|真心我们这个国家永远不会有希望|兲朝必亡|这个案子很有可能不了了之|迫g害致死的|乙乙乙魉乙乙魉乙乙乙乙|编网警能把中国网络都删除了|删一条发一条|我今天不睡觉了|说邪教的都是故意往偏引的|会删除网易所有产品|问谁未发声|paltalk伺服器|raidcall伺服器|raidcall26849348|大陆放肆|8964|6489|2262784081|64|89|邓六四|勿忘六四|局长孙宝东是帮凶关系|舌尖粉饰档|六月第一个星期三|让大家复制起来|求关注招远528极恶性杀人事件|为了伸张正义|首先把硫磺放到汽水罐里|25周年|你也希望你在给儿孙讲述你曾经当过他们的主流媒体的小编时|一酒捌9|8鲆鲂|乌尔开希|198nine|八九政治风波|平反八九|八九学生运动|八九风波|六四档案|勿忘八九|天a门屠杀|六祀事件|46忘勿|八九暴乱|一9捌9|一久扒久|六四真相|八九惨案|胡启立|浦志强|声明|六x事件|起来不愿做奴隶的人们|一个连生育都用档做主|我自愿退出中国国籍|中国只有一个邪教|你能关闭所有新闻跟帖吗|邪教只是一个幌子|别拿邪教说事儿|八丸亣四|刁近瓶|邪教|为其全家脱罪|为自己减罪|528事件给罪犯扣个xx教的帽子|山东招远被毒打致死的女孩请愿|剩下的交给我们|壹玖捌玖年陆月肆日|6泗|粉嫩到紫黑|经历了多少摩擦|37900219750308002x|外来马教|祸害华夏|全能教申明|为什么记者采访前警察要拍他肩膀|六十又四|你们他妈的开始扫黄净网了|腐败的gc当|宣统狗皇帝的大姐二姐|畜共支那|89年的六月是我的爱|丽女爰是女子逼|丽女爰|这群杂种每天还在控制新闻媒体|海波被收容是因为上了丽猿|六十多年间竟已成禽兽之帮|共产神教|不信它们是邪教徒|八的二次方|猝于2018|生于1949年10月|卒于2015年1月|享年66岁|邓挫子|枝供奴役|勿忘阝击泗|但愿朝阳常照我土|勿忘之士鲜血遍地|木樨地|万安公墓|制造那么大的冤案|竟然过了二十五年都没有受到正义的审判|张立冬|利用邪教吸引大家眼球|本世纪最大的卖国贼是蟾蜍|来得太晚了|来日方长|我们已经老了|驱赶码咧奴|恢复中华国|六月荷花|四意摧残|把酒溜死|稚嫩的面孔却骄傲地宣告着他们的坚强|天天天遣天天遣天天天天|前上台时向全世界电视直播讲话要遵于宪法|中国警察最擅长于4件事|匪夷所思的转到清华大学电力系读硕士|广场上冤魂游荡|妄想有一天中国变天了|刁斤伞|五月三十五|20年前|压成了肉饼|习大包子|江xx其人|黑箱作业出卖国土|邪d气数已尽|毳折东这个扎种|刁金品|终终终耱终终耱终终终终|毛扎洞|了了了快了了快了了了了|脱脱脱霾脱脱霾脱脱脱脱|火火火幽火火幽火火火火|若美军攻打zg|老子就向美军投降|不是黑社会便是和正负官员有亲属关系的败类|鱼掉到粪坑里|到处说环境差|讯喜喜喜喜喜喜喜喜讯讯|禁止新闻记者和记者站未经本单位同意私自开展批评报道|已经有美国和日本的资金进入中国|短短的三十年便让它屹立在中国势力金字塔顶端|党在玩社会|拼命给国民灌输仇日情绪简直到了变态的地步|支那豚|要求北京履行对港人的承诺|台北廖婉怡|支那人|屠宰场新上任的场长|1949年前只要某干部看上了女战士|为什么网易上关于xi的新闻|裆是500家庭小集团的钱袋|少年混混出韶山|习景苹|席近贫|你的爷爷茅择东也不是好货|灰灰灰墨灰灰墨灰灰灰灰|真真真真真真真真真|忘记删除者一律开除|不要给组织丢脸|兲裆|江州巡抚倒台后|兵部侍郎也完蛋了|嘉宝瘟|为什么我是汉歼美豿|若要永康照政策来办|大大大难大大难大大大大|灾灾灾难灾灾难灾灾灾灾|我们在这些肮脏凶残的异教徒的压迫下苟活着|8月17|请注意时间变动|之褪褪褪褪褪褪褪褪褪|老虎们打架怎么分吃猪|习的新闻|算免费送|支那狗|阮科夏|滞那猪|涛宝治p民|刁胖子|温宰相|刁近乎|袭鸡病|叼进苹|刁不远平|屎进瓶|gd必亡|习倒霉|七阳痿|共0贪0党|习太祖|倒周审簿|刁辶干|七大娼萎|一刁列传|刁司令|习正恩|刁泽东|该亡裆了|习扛把子|胡jb涛|刁特勒|刁阴毒|刁太大|习梦撕|习肥猪|糊刎|亡必共中|胡进避孕套|湿精瓶|温影家帝宝|温婊家子宝|删云留|习白猪|习利钦|狗供亡|令匪计划|刁禁评|壶河蟹|瘟假逼|江虫合虫莫|温和珅|面瘫胡|邪档|dcg导打|锦涛裸退|习属鸡|腐瘟十年|老虎们打架|和羊有一毛钱关系吗|五四运动|一个月后的黑夜|八千万支那贱民|让日本多占地|才爱国|不要到前线去充当抗日英雄|一分抗日|二分敷衍|要让日本军队多占地|日本皇军|好教员|田中角荣就向毛道歉|日本军国主义给中国带来了很大的利益|日本的侵略|帮了我们的大忙|日本战犯的处理|不判处一个死刑|基纳猪|没有野蛮的三块表|矬子的让少数人富裕的言论|是邓坑了中华民族|歪脖是大一号的三胖|馶那|广西畜生|席进瓶|驱赶码洌子孙|共缠档|我们要选票|赤贼滚下台|北京整得凶了|这些堂口老大的压力大了|土土土崩土土崩土土土土|1949战死|投胎至十岁|遇饥荒饿亡|习宗书籍|从山上窑洞里流窜到城里|马列体制祸国殃民|土土土墓土土墓土土土土|盆丽园|资金外逃|蠢材上位|社会动荡|改革失去动力|普世价值缺失社会缺乏共识|千夫所指千夫所指千夫所指|司司司司司司|君猥副猪细|卖国卖国卖国卖国|五毛狗|奸二二奸奸奸奸奸奸奸二|他的姓氏以江开头|奸通奸奸通通通通通通通奸|通奸通奸通奸通奸奸|上海滩将有大动作|曾经红人被抓|网评员培训班的教练|习建平皇帝陛下|周yk|姜则敏|粥勇糠|习建平|猫泽东这个扎肿|邓碾平|母屎淋|习总理|歹歹歹歹歹歹|邓的干部|百万富翁|老猫子冬是仲果的败类|小支那|习静瓶|总理|云南还没到呢|共翡|十几亿人都成了这个小集团的人质|刁某泽|捕捕捕捕捕捕捕|习镜瓶皇帝|今贼以八千万帮众|五角狗的嘴脸|毛猪西|码洌|大牢唬洲泳糠|码例|拳击的雹子|滞纳畜|换届就是驴造出一茬换一茬|新浪总裁可是观海听涛的女婿|习进瓶|姜则名|大大的中国|肮脏的北京|安排某国进行全苠投票|胖子皇帝|亲在美国身在华|刁进伞|丁磊出来验尿|贡馋裆|叼大大|泱泱吾国|公信洞穿|守在子宫门口|不交钱不让出生|改名为胡锦波|更名为周永健|勺瘨勺勺勺瘨瘨瘨瘨瘨瘨瘨勺勺|本本本本本鲎本本本本本|鲎犬犬犬犬犬鲎犬犬犬犬犬|类贁类类类类类贁类类类类类|恶劣之罪非咫尺易网可罗列|伐囵大法|蛂蛂蛂蛂蛂蛂蛂蛂|谗谗谗谗谗|立立立立立擓立立立立立|腐败是整个组织的天性|血染的风采64|圌圌圌圌圌圌|檲檲檲檲檲檲檲檲|鬤鬤鬤鬤鬤鬤鬤鬤鬤鬤鬤鬤鬤|凝视着俄国人发明的镰刀斧头|习草包|习镜频|庆丰二年秋|十三亿中国人的一半在看着你呢|网易有日本背景|鸡那档杀死的鸡那人更多|彭丽援交|履带下的共和国公民|颤颤颤颤颤颤颤|习禁贫|习武帝二年冬|周师傅900亿|砖家高朋|添俄卖疆|洗精瓶|无无脑无脑脑脑脑脑脑脑无|姜则明|江乱国|胡毁国|习亡国|刺杀刁辶斤平|青蛙己死|北京301医院|央官省官市官县官村镇官官官皆贪|老而不死|死而不僵|一个民族的罪人|辶斤平|镆合合镆镆镆镆镆镆镆合|镆口镆镆镆镆镆|尖鄙尖尖鄙鄙鄙鄙鄙鄙鄙尖|告诉你们什么是真正的卖国|刁斤萍|恶孽罪行录|高高在上看着左派p民和右派p民使劲掐|没有他和那场革命|犀狸终于现虎形|旦旦旦撒旦旦撒旦旦旦旦|猿类或其家属|每日酒池肉林|害怕人民觉醒|激起再难违背的那份良知和应|无人有权沉默|看着万家灯火变了色|灭文化弑文人断根周毛|这风刮来的时候|有你的臂膀跟我挽在一起|他们说世界上有腥味的风带血的雨|小雨伞小雨伞你是我们的希望|刺杀习辶|所以说网易是最大的地域者|30年前要民主的成了冤鬼|20年前要民主的成了|刁辶斤|刁庆丰|a6mm千|夭孽孽孽孽孽孽孽夭夭夭夭|只阚阚阚阚阚阚阚只只只只|凡凡阚凡凡阚阚阚阚阚阚凡|静坐人海|你我非不怕|会畏惧这样下去怎办|刁先生|教大家制造燃烧瓶的方法可以对付任何狗贼|毛特勒|打倒中共|包子战蛤蟆|公谄裆|三十年吹嘘了一个主义的天堂|三十年建立了一个血腥的地狱|中环见|撤回革命|重启政改|声援真普选|反对假普选|支持香港争取真普选|我打着伞走在路上|他动不动就说西边的年轻人快要衰落了|我的女儿在美国|整天都是说一天的两国的友谊|姜仄敏在与怂卒赢握手时|打伞新时尚|要穿白衬衫|黑西裤|习辶斤|习金聘|姜责明|港人这次倒霉了|中央发火了|您对全会提出依法治国怎么看|先把我们从笼子里放出来不|支持蕟哥|喜禁评|上任以来|使用的统治手段|反腐败大概干不过朱元璋|周小平|傻逼|周小平|sb|周小平|舔菊|周小平|共颤当|毛厕洞|茅责洞|高文|港狗|士士士领士士士士领士士士|江姐是裆的好女儿|僵直民|糕瞻竿|刁某狗|习猪头|当时名媛被邀请加盟ccav年终春节晚宴|跟大大谈心|精叉都在吃屎|言论管制|好大喜功|酒池肉林|现在你又是大手笔的打猛虎|又是作秀到处亲密兵营|刁一不远不凹|火火淼火淼淼淼淼淼淼淼火|毛毛毛毳毛毳毳毳毳毳毛毛|均对到底是听档的还是国家的|刘云删|刘芸删|5毛狗|29家互联网签字画押|洗贱贫|叼总|刁犬犬|户户缰户缰缰缰缰缰缰缰户|骸丁骸|蟊贼东|维尼夫人|维尼|真爱|驴和维尼|维尼和驴|维尼大大|维尼习|大大家教真好|大大家教好严|我让你挥手了吗|普京媛媛|叼犬犬|直到2014|换班|为匪团谋利|apec会议期间|我们响应国家号召坚决不出门|习就是头猪|千人成人俱乐部|当安倍晋三结束了一天的apce活动后|今上禧宗|撒钱就行|给全国学校配备合格校车|免除非洲债务|突击花钱|刁尽萍|伍猫狗全家死|平近刁|支纳猪|某人带着夫人周游世界呼吸新鲜空气|这个国家充满谎言已很可鄙|22日下午警方接到报警|直接朝持枪的12岁男孩开了两枪|刁哒哒|男六十余微胖|未办酒席|育有一女|在国外|peng麻麻|人虽微胖|但人不傻|嘭母狗|刁公狗|进出皆匪寇|习武意谋反|江湖小流氓|贼眉鼠眼狂|彭元帅立马|丽人己上马|毛都没一根|腊月寒风怒|刁jin平|美国的重返亚太|解救我们|暗杀|此处填三个字|呋坒网|习就是条狗|绿狗|四川狗|苏州狗|浙皮子|浙江狗|浙江佬|新疆鞑子|广西狗|大荷烂猪|乱伦苏|四川耗子|京巴|广东猴|川耗子|十个河南九个骗|河南|井盖|上访狗|贱臊比|全家火葬场|地域一时爽|支豚|东北淫|江苏狗|小白帽|浙江猪|皮帽子|河烂冬悲|大陆狗|维子|万维读者|东亚病猪|十个江浙九个贱|ysl|河南东北畜生|东北人就这操行|东北贱人|广东猴子|北京哈巴|上海瘪三|山东驴|江西狗子|安徽狗|滞纳猪|山东大蠢驴|上海小瘪三|回猪|山东大叫驴|东北大野驴|兰州烧饼|南昌蛆|东北土狗|贵州狗|河烂|山东大驴|小姐乞丐在徐州|河南逼|东北|女人|鸡|全家死绝|四川阉耗子|东北佬|外地逼|九头鸟|湖北佬|南京狗|荷兰猪|安徽草狗|衣撕烂|支娜|武汉|婊子|穆狗|湖南狗|广西佬|广西猴子|四川猴子|云南狗|支那|山东狗|满狗|馶纳猪|南蛮子|河北狗|广东杂种|合喃狗|山西狗|南昌鬼子|冬北佬|东北|卖逼|宫产档|zg特色|眼镜蛙|吱呐人|牦贼东|香缸正发生伍肆晕动|这国家烂到底了|兲朝|刃|习斤平|难道我们喜哥和膨姐|国是谁的|早亡了早好|强烈要求司法独立|立法独立|胖哥你为什么只拍苍蝇|台湾国|江西宜春方肘子伍毛狗比|洪产当|闷声发大财把资产转移海外|凸远刁|中国jc就是一群废物|姓刁名镜瓶|苍蝇|中国正腐|土匪档|痔拿猪|习权利大|歪脖的反腐成果|平娃子|强娃子|国家的钱|俄罗斯要跟世界说拜拜了|刁近|习太太|天天绣恩爱|女儿送国外|常萎|无能的正腐|支持梁国雄|支持李柱铭|支持黎智英|劣等民族到哪都是窝里斗|反gong|刁庆包|三胖|撒钱|年轻的雪主|法我十非|天威唐鼓队|废叁十九|放光明电视|ααα|free光诚|乱华乱华乱华乱华|乱华乱华乱华乱华坏|共妻邪说|喜胖子|不厚|贪官|政纸改歌|光腚总菊|普大帝|唱戏出身|浪|屠宰场新厂长上任|就在厂里|根正苗红|土豆|二婚|像都教授|喜胖子这个杂中孙子|刁式幽默|习敬塘|胡温集团|十年执政|我希望中国分裂|加税救爹|刁敬塘|土菲|成为贵族|跪族|当你在山上|皇恩浩荡|刁德一|大傻与干爹签订|6月飘血|如果团结可以赶走流氓|歪脖胖子|衣食父母|拆|贪|占|习歪脖|天曹69到来|上梁山|掀锅盖|掀被窝|俄爹|13亿|解决这几百家庭|叼达达|国歌|俄罗斯|神圣的国家|全世界唾弃|用脚投票逃离|掠夺就是奴役|送了几十亿|毛病不除|恶习难该|哒哒刁|鹏麻麻|刁逼带着戏子环球|橇碧臃|生无片瓦之私|葬无埋骨之土|翻开历史课本|无意|奴隶制|习司令|划计令|另计划|令plan|支持令计划|计划|政策|路线|完成|令狐计划|今记划|郑晓玲|前夫|令|法拉利|车祸|保福寺|车祸|法拉利事件|中央|反腐|作作秀骗骗善良的百姓|谷丽萍|嘉庆处死和珅|大大威武|在一个批评不自由的国度里|彡壴麻麻|之纳猪|川狗|珐拉利车祸真相|姓婤的出面|叼儿子|刁儿子|马恩列斯|洋垃圾也必须扔掉|珐拉利车祸真相|刺杀习|刺杀刁|工体开车撞人|周徐苏令|吸金瓶|毛孽畜|刁月半子|只是它们分属不同的pai|天越来越黑|新上台的贼子|大胖子在粪堆上打苍蝇|铲掉|近平|二次婚姻|近平|有几次婚姻|习大|有几次婚姻|近平|柯零零|近平|柯小明|习大|柯零零|习大|二次婚姻|近平|两次婚姻|习大|柯小明|习大|婚姻史|习大|两次婚姻|近平|婚姻史|印尼猴子|印尼猪|印尼狗|印尼|死得好|刁鞑靼|吃喝|万亿|贪腐|荣辱|资格|西j瓶|姜氏干部|腐败成风|湖氏干部|这是一个国家还是监狱|李连杰|南京书记进北京|西山蛤蟆爬东山|父提拔子|叔安排侄|中国这样下去要亡|60多年前|取名社会主义|才厚才薄又怎样|伟大领袖这个野种|榨干百姓|中国鬼子|我朝无将|占岛为王|无权巡航|钟国|富可甲天下的政府|东山登山|生胃输妓|鬼子|某组织祸害|几十年|绿猪|有个美丽的森林叫香岗|伟大领袖那么风流|文工团|红军8年打死了不到一千鬼子兵|反腐背后不过是新政权的崛起罢了|但是它们还厚颜无耻的说着自己的先进性|江公子卸职|反腐之际卸职惹关注|反腐|江系|胡为了摆脱江的掣肘|庆丰三年旦|血溅天子堂|抓了那么多贪官|排除异已|年年反腐年年腐|皇帝没了|皇权还在|几千万宣誓效忠的信徒|酋长制|贪污腐败垄断一切|这几句真理|所有的反腐|国耻|沦陷在局域|双月鸟|没有河南人|就没有防盗门|一位主席做到天天被人唾弃|你删除的不是帖子|金正日|十八层|踩着我的头|草泥马的网易|八路来了|大家快跑|边喊反腐倡廉|人民要下跪|推翻亦因|另一个王朝|中国快灭亡|共也差不多|自私自利|人民请龙哥代言中国|从公家仓库偷了好多肉|财产不公开|假公济私|第一名|嘉兴南湖的游船|人类破坏力|嘉兴南湖的游船|黑zf|逼你交钱|逼你做事|某主义核心价值观|一个没字|风流|流放北大荒|文工团|方丈正在打坐|罪孽深重|头定挂墙头|毛子就像我们的耶耶|四川的武大郎中国人的儿子|高贵水晶藏邪魂|刘邦|严惩贪腐|大老虎|日习他老娘|日习他老母|又耳瘸子|蛤歌|经国|女儿|公主|日本|殖民者|黄种人的骄傲|骂政府|无权投票|选票|谁言共肥度日|自由苏联后援|有没有一个名词能把邪恶|是个敏感词|大规模暗杀|警察家人子女|还爱尼玛什么档|安邦设局清除高层|情妇|女儿|习泽明|公开审理|如果你真杀了人千万不要惊慌|权利宝座和个人利益比国家领土重要的多|一日乾隆率人微服私访|后来乾隆驾崩|李玲诗等觉得很赞|囿函团囿囡囚|棺伤勾结|千夫所指无病自死|达赖|中国的一道棋子|中国怕美国|老鼠见到猫|拿着自己的钱|讨好|垃圾国家|按桌子上狠狠草|毛灾东这个大畜牲|共和蝈|败类|十三亿|寄生虫|国家|河流所有者|国家失踪了|中国四大底线已全部洞穿|粪藏裆|张飞不是|平台更重要|国家变好|俄肿朝|确实令地球村头痛|孙立军|孙力军|我去过西藏|希望这些人回到自己的原住地|八九屠杀|话说天下大势|已合了66年|诈骗罪|各尽所能|按需分配|东西德分开时|朝鲜和韩国|乾隆下江南|欲求乌纱帽一顶|君无戏言|俄中朝|确实令地球村头痛|田舒斌|国家好比汽车|不让换档|已喝了66年|是否该分|大航海时代你禁海|禁网|西山儿子焱仲勋|弒泽东|反腐都是|铲锄|易己|拳钱|较易|无公p公z|改各|天大的笑话|屌大瓶|拔除痔肭傻鸡这棵毒瘤|习应该是昏君|老蒋溃败大陆|焚书坑儒|网易|股东|袒护日本|长城以北全送|权贵大量移民|穷人在留守|网易就有这样一帮日本|恶畜别说是送钱|送国土|干爹|姜坐工行总行1把手15年|宁做美国狗不做中国人|吃人的体制|吹土改|吹反右|吹文革|吹反腐|三头猪|语重心长|有猪权|美国|希望|日本|美国|希望|曰本|霉狗|绊脚石|称砣|清理裸官|刁进干|零陵|阎维胜|大屠杀|自由行|人民一个清静|习上台|中国将是第二个朝鲜|中国没有生化部队一样|后来武帝上台|其妻卫子夫能歌善舞|啪啪啪啪啪|人大会议结束|日本人管理时|富甲全中国|汪精卫|不与猫匪苟同|德国俄国来的马|二代|警匪|柴静|习远平|柴静|西远平|柴静|后台|痔呐|习重用过往同事|习重用同期同学|习重用前秘书|习重用同乡|国军|皇军|来了我参军|北京鸡共匪畜|江青日他牲女上面的|我看还是不要报道两个会了|歌妓的老公|扒路军|high歌|一首红歌|脑残患儿发病|放弃治疗|习阳无限好|只是近黄昏|俄肿朝|动乱的根源|某家|茅坑|新上任的当家|乌毛狗|王山支|刁运干|大使馆被炸|眼镜|蛤蟆嘴|和破四旧的宇宙裆们|四次入侵|炸死四个|谁知道徐才|知道徐财|老徐|挂了|挂掉|徐某厚|小徐|挂了|啊厚挂了|满朝文武|半壁江山藏红颜|满朝文武|绿卡|半壁江山|红颜|湖南双魔|刁太犬|魏娇墨|上任|打着反腐的口号收拢人|瘤云杉|富平大肥猪|宋江|棺材全透明|罗马帝国|缓兵是真|兄弟全整|妻妾全换|我现在的男人是通过投机取巧|甜言蜜语把我哄到手的|朝廷|义旗|江山得手|大宋子民|支拿猪|孟国忠号|屠宰场新厂长上任两年|江哲命|胡景涛|李peng|紧套哥|宝2爷|温jb|公铲糖|解散人大|狗产党|赤匪|习胖子|共抢党|强克李|供贪党|江蛤|共贪党|李克弱|二奸二假|共抢裆|g铲d|当今圣上|网易我操你妈|钅帛氵寿|李朋鸟|木子月月|木子月月鸟|共chan党|马列毛祸害中国|卖地宰相|中nan海|宝二爷|天朝将亡|李鹏家族|jiangzeming|公惨蛋|克弓虽|席主习|胡锦掏|邹永康|中烂海|likeqiang|共长党|wenjiabao|wubangguo|弓惨档|zhouyongkang|xijinping|反共救国|洗金平|江译民|猪笼鸡|黄海刺胡|黄海刺虎|中共阴谋|wangqishan|木子十兄弓虽|开放党禁|公厕党|彭皇后|温冢宝|姜贼民|江贼民|八九运动|哄惨谠|猫砸洞|皇帝姓夕|期待大陆早日回归|peng.lee|滚惨档|刁羽|彭某媛|李某强|刘某山|张某江|曾某红|江某民|刁进乎|刁达达|周元根|蒋贼民|西精病|pengliyuan|贡擅当|赤共|席胖子|猫杂洞|红匪|新闻联播大结局|贾qinglin|被腊肉迫害致死|jiangzemin|贺guoqiang|土匪的共产党|彭歌妓|以搞反腐的名义|政治地位|老将麾下|同胞们|自相残杀|裆卫军|港人反共|港人反党|绿癌|xucaihou|lipeng|周yongka|64事件|六四事件|八年抗战|八路军和新四军|反腐才一年|慈禧的野种孙子习仲勋造反|打倒现政府|打到当前政府|打倒习达林|1978|祸国殃民|败类改革|我裆|哄惨裆|打到现政府|打到中国政府|打倒当前政府|打倒中央政府|打到中央政府|推翻中国政府|推翻现政府|推翻当前政府|推翻剥削政府|狗日的政府|狗屎政府|狗逼政府|狗屁政府|本届症腐|这届症腐|天朝症腐|中国症腐|烂zf|以十三亿奴役养千万猿|别只顾自己饭馆就餐秀|满朝文武藏绿卡|瓷洗太后|毛竹席|席大大|我党上市|冼精瓶|江太皇|中共垮台|共铲傥|江习斗|共惨挡|共惨党|庆丰大帝|g产党|习软蛋|西近平|刁皇帝|戏进瓶|推翻gcd|习皇帝|6月份第4天|习帮主|刁丶斤辶干丶|江逝世|包子习|习太监|习畜生|蛤蟆帝|习梦梦|习独裁|共残挡|供才裆|宫馋裆|吸进瓶|蚣产裆|口及精并瓦|刁斤干|八八事件|江蛤蟆|习庆丰|刁劲瓶|匀近乎|习魔李鬼|刁斤苹|刁傻逼|共产党下台|哄呛铛|习戏子|江择民|宫颤档|习皇上|八酒六似|刁皇上|习公主|洗净瓶|习主子|刁胖|洗金瓶|哄铲裆|包子上台|习格格|江责民|习杂碎|共铲党|全民倒共|共产党屠城|地主|造反|骗农民和学生|制度|改革|反腐|表面文章|反上10年|榨干你|冲锋枪突突死|习近平|帝|中国1978|改革|石头过河|1978年|改革是错误的|延迟退休|棺材费|社会动荡|反腐只是政治斗争|政令不出中南海|假庆陵|中国反腐都是作秀|毛灾东|伟大领袖|设计师|桃色|嘉庆|载沣|孙中山模仿美国|汪精卫|躺在玻璃里的那个腌货|瘟总|教育家|中国孩子|美国孩子|大大上台|马屁精|抿主|站起来抗争|参与推墙|天朝老大家的歌妓|洗老狗|屠光北京人|中共当局|98排华事件|被裆毒灌入骨髓|反腐两年牺牲了一名上将|刘德华|张学友|郭富城|诺亚方舟|中共就能获救|共党没救了|反镰锤|一个大新闻|有个华莱士|usa人类的希望和灯塔|顺我者昌|逆我者嫖娼|江嫖了宋|亚洲三大妓女|珍珠|是共产党的天|欺骗老百姓|亚洲|领导人都是酒囊饭袋|贪官狗急跳墙|领导人动手|普宁|爆炸|普宁|炸|高铁|普宁|官逼民反|习匪|彭麻|我日你娘|富起来我理所应当会过上|刁迁瓶|共产党|消灭私有制|民国78年6月|政变|某傻国地球的笑柄|枝纳豚|枝纳猪|枝纳狗|国耻|第四|第一|第二|天安门坦克碾压|纳税人|正负|不是国|要爱|历朝历代|如今|腐败|新世界|抗美援朝|印尼杀你|蒙古|马恩裂死猫|流氓无产者|蒋校长英明神武|印钞|奴隶|邓江胡|中华|万古|共钅产衤当|血月现|灾祸起|国运衰|习龘龘|仲勋毁国体|友好往来|败家子要送钱|gcd亡|刁月半|上网发帖都要审查的国家|中国大陆无处不腐败|可笑的最新消息|猴子的新闻|反腐|治标不治本|惨痛教训|核心价值观|强烈声讨|义勇军进行曲|贪腐党|腐朽的天朝|挣腐|政腐|蒸腐|症腐|正腐|大肥|小胖|老熊精|英明十三点|东方圣草|妓院|不能靠|上缴|人民日报日人民|猪头上台|十年前就知道|普习金|狗日的国家|狗日的共产党|狗日的中国社会|中国某位贪污一万亿之多|村东三大妓女|彭丽媛|和平环境|饿死|斗死|逼死|恶魔|驴操北京它妈的不管|陕西歪脖子|五牦搐生|比亚迪|首富|大饥荒时期|中共|天安|焚|伪|狗日的五毛|法|lun|da|江败类|胖子执政|色会主义|造反派耶律仲勋|习仲勋|反党|13亿傻逼纳税人|恩夹|庆丰三年|众皆疑|维稳以嫖|打砸抢|饿死|斗死|恶魔|大救星|最大贪污犯|瘦西湖|档还没灭亡|吉因夹|sb国务院|毛灾冻|饿死几千万人|邓糨糊|习仲勋|兄弟数拾弒泽东|9x9-2|女儿在美国|加拿大|澳洲|反腐|婊子政府|还0军|强0权|还0政|腐0败|操着江苏无锡口音的鸟|筒子|遵义选出ceo|创业团队|西南朝鲜|支纳豚|火云|邱少云|烧烤|等肉吃|大肚习|表子媛|以长江划界|规划为两个|槐树|刁猪头|星条代表希望|太阳代表光明|昨天我去算命|未来会有挽救|星条旗是希望|太阳旗是光明|3322事件|ls事件|捌9|六four|1989年4日|想想广场的tank|6月2加2|六亖|北平屠城|8那年9|24|40=|8963|一支想彻广场的自由之歌|六罒|民国75年|八十年代最后那一年|五加一四|柴铃|tam母亲|茉莉花发夹六伵|一千九百八十九年|捌氿|民国七十八|晓波刘|90年的前一年|民国78|liu四|火柴里抽出|77元的房租|中国政府是婊子|河南人全家死光|刁jp|功颤铛|没有|监独|为民|口号|强大|制止腐败|把矬子扔进厕所|中国有双矬子|是改革的高潮|天子有喜好|蹴鞠兴本朝|饿死整死八千万|小日本和那个什么痒滴|习近平|傻逼|习近平|王八蛋|毛大畜生|茅厕冻|彭金莲|恶邻居欺负了|南方的小岛|解放军叔叔|新闻联播里|他姓江|戴着一副黑框眼镜|鹅毛扶持|吐匪|傀儡|政权|普妕勋|红色禅让|毛渣洞|毛泽咚|全诳大妖|策邦岁肠|镕|何处来|元璋|庶妃出|莫斯科|红场|新二十四孝|彭婊|理由是袭警|集体失声|第一代|秽宗儿|污浊不堪|汈茎皮|习老儿|觉醒|彻底斩杀|才能救生|百姓|苍蝇|500|红头|空棺材|蛤帝|不如被殖民强制改变来的|刁特乐|习他爸妈|又红又专的领路人|只要组织还在|用脚把你们踩|地震|温|军方|网易大楼被炸|郭嘉|谎话|无恶不作|病入膏肓|艺妓|彭丽媛|强盗|近平|篡教夺权|语录|尸骨未寒|习巴马|社会|黑白颠倒|公扑|人民币|盆li圆|习条英机|红祸|踩江镇江审江|项王仁慈|政治运动|能歌善舞|剪辑是个高人|观念先进|全球诉江|专业上可圈可点之处太多|却什么|一只眼的石人|监督|几千万人|大跃进|饿殍|祸国殃民江|全民诉江|今上于美|芳华正茂|昭君出塞|瓷国|刚愎自用|脑子进水|习远凸|邪恶的组织|满嘴谎言|奴役|肿朝isis是行畜生道|踩江后审江|天怒人怨诉江|贼|稳定压倒|反社会的|希特勒|辫子|义和团以及文革|南海|捏住脖子按下水|受外部势力|清算元凶|选择善良|姜子牙|马拉不动|八百年|七十年|举凳旗|江表|罚站罐|梦帝|毛贼冬|砸锅|坑蒙|拐骗|祸国殃民|欺压|习紧瓶|浆砸泯|权力没有人民的监督|野兽|反右练防骗|60年练饥肠|猪圈|演讲|咬死|屠夫的职业|深眼窝|高脑门|黑猴杂交|又耳木卜|河南人不讲卫生|生蛆|扬刀跃马踏北京|一百块钱的上的那个二逼|万恶的政府|军事|交战|两军对恃|忽悠|迫害|班长|动物标本|分而治之|扒撸军|八九柳丝|89年64|二十六年前的坦克|二十六年前的枪声|肛洞人|黑暗吮吸术|张忠厚|习达姆|江蛙|糊屌滔爷|打出一个|新中国|打出一个新中国|翻墙|外网|日本人|评价中国|畜生习近平|任务|清洗|履带|发卡|全民团结争民主|平反六四一起撑|日本和美国|未来|中华狗|毒瘤|初夏|凌晨|推土机|链条带|发卡|拆房揭瓦|奸人妻女|焚书杀儒|3岁看老|文革应该继续|畜生|清算毳泽洞|文明|移民|杀光棒子|屠夫|安静要和谐|继续做梦|亡我之心不死|苍蝇|冤案|访民|韬光养晦|精光|一盘大棋|特权|挡坦克的人|挡坦克|tankman|刁sb|赤鬼洗脑|玉皇大帝高度|表彰大会|高度重视|表彰大会|进行|纪念六四|支持爱国民主运动联合会|89之夏|曾伟|贺国强家族|曾伟|蒋梅|曾伟|戴永革|蒋梅|仁和地产|曾伟|蒋梅|洗钱|曾伟|仁和地产|蒋梅|贺国强|仁和地产|戴永革|曾伟|蒙蔽王岐山|曾庆红|贺国强家族|蒋梅|戴永革|仈氿学謿|仈氿|纪念64|六部口惨案|四立方事件|维园烛光晚会|天安门大屠杀|64永远的痛|年经再起|凭六四洗脑营役|被支联会垄断的社会运动|沉痛廿年|活著怎么可作罢|六月|静听花开的声音|谁做了哑巴|请尽情的嘶叫|天问|达明一派|爱自由|展开我们的翅膀|你的胸膛|广场是我的坟墓|仍胸襟对枪|宁死都要坚强|天安门前开口说|不吃不喝|首长|不能说的日子|注意力|垃圾煮易核心价值观|廿六年前那一夜|军人|地平线上升起的f|为什么他们的日历上没有今天|他们把金天屏蔽了|疯网禁言又禁烟|瞎折腾|遗弃的恶土|恶灵时代|白纸黑字|倒行逆施|弥天大谎|猫贼冬|昂贵的服务|为人民服务|河南人不懂什么是|坑蒙拐骗|狂怒|美军强|德国妇女|侵略拉丁美洲|神许之地|敢动中国|南海|越境杀人|谴责|焚化部|光腚肿菊|希特勒的画像还挂在城楼|高考落榜生|资本等于零|刁夶|席特勒|习尔巴乔夫|习特勒|习猪席|习昏君|习梦帝|刁总书记|刁阿斗|刁包子|庆丰帝|刁大大|习泽东|习素鸡|灭绝河南|能力之外资本等于零|能力之外资本为零|泰坦尼克号沉没|2条生命|井盖|打开|消失|记得|俺们|无耻之徒以为皇帝坐稳了|国家目前主要工作|西方|习猪|习梦死|习梦思|习阿斗|习包子|能力之外的资本|毛渣东畜牲|羽折抨|袁腾飞|高晓|日治时代|糊负有不可推卸的责任|贵州人是杂种|周老虎|元根|周的案子|周那派|三大烂妇|三大情妇|祖因|粥y糠|浆|糊负有不可推卸的历史|李电周油温地江通|煞笔习|湖南出了一个杂种|毛渣畜东|哪方高贵就在你的一票之间|嘭嘛嘛|第一军妓|指迷津|相逢|满怀|福音|新星|光辉指|名利|大善水|祸福同时在|去留一念间朋友|奔忙|阻挡|丝祈望|清香四溢|在机会|贪心|由于欲望|过高|亲友|福|如今|灾|其中有|mao厕洞|小猛禽|他姐癫狸第一母犬|刁辶丫|刁远平|刁禁p|医生看病|心里懦弱|还爱做梦|治国之道|转移视线|维稳|日本人被赶走|变黑了|我们宿舍|河南的|不少东西|这虫子跟河南人一样|20年清廉指数全球第178位|黑鬼罪行满天下|世界毒瘤|周虎|习上台|垃圾治国|祸国殃民|您好|本人林成柱|海南省|曾国藩曾说|社会大乱|前兆|破衣服|玉米红苕稀|讲台上|毛大畜牲|民众投票|国家总掩盖真相|矬子三表害中华|习老嫖|中央君萎|开国大典|文艺女兵|最高指示|习匪|江杂民|讲杂民|蒋为人民服务|人民却喜欢毛|领袖伟大以人民愚蠢为代价|席匪|刁字加一点|共散档|狗插哒|羽总|习婊|傻痔|宪路求索群|檀销风声花来侍|建鬼节|中国完蛋|习江之战|red匪|中国快垮了|支持港独|前core病危|终国梦|粤狗真听话|粤狗的故事|不信任|当官|下胎|中国政府就是一坨屎|前主席病危|江主席病危|江已病危|386|大面积心肌梗死|泽民病危|北京频传江病危|j总病危|太上皇病危|江总书记|病危|老江病危|江总病危|江病危|总书记|病危|前core|病危|先帝病危|蛤蟆病危|前核心|病危|主席病危|现任7大老之一|mao厕东|红色魔教|天朝末年|爱国不等于爱d|毛折东|我朝将亡|七大肠伟|拱颤荡|毛辣肉|撤消发改委|匪赤|中国革命党|最昧心的是为人民服务|驱逐马列|国公薄氏|戴眼镜的青蛙|习龘|一国无需两制|黄皮的玛咧奴|王思聪外公|大连人都是大傻逼|中国反腐只是个形式|计划生育祸国殃民|国复共反|疆ze珉|习近平|狗东西|土狗|选择性错误|玩完|熬死|江要死|江不久已|痔国|刁贼平|不交租|小老婆|女学生|isis|剪羊毛|割韭菜|忽悠屁民|赌博股市|疯子|统治一个国家|羊月薪|狼不允许|羊越来越少|北京人欠扁|北京人欠屌|北京人欠削|上海人缺操|北京人欠插|北京人欠抽|秦佐柏|土狗|我是主子|玩完的时候|打倒中国共产党拼|这样无声无息的逝去|所以我认为警务人员|狗屎共产党|垃圾共产党|屌近平|中国建国|66年|经历了十年|河南人死光|我射她嘴里|gcd|绿教|日本首相|民主国家|道歉|国家若绑架了|就不会有自由|共青团也不是神马好鸟|生无寸土之有|梦想着大国|私有|锥地|选票|皇恩浩荡|不爱d|仍然自己懵懵懂懂|最终赔|控告僵蟾蜍|皇上打了一只老虎|神功盖世|如果当年给日本人治理|谨以此纪念中国收费公路|就是人民|权阀组织轰然倒|中国法律是给百姓定|电视上老有人坐考斯特|印度是个奇葩国|出现404|萨达姆|终年|房屋产权|70年|有一个d|他跟你耍流氓|煤球王|本人还会写续集|祖传三代老中医|第三代|南方人真难看|马猴|侏儒|穆屎林|匪挡|供挡|江老贼|拱狗|七条老狗|匪拱|王维木木|吸大呆子|中共的走狗拼|马列邪教拼|朱色匪徒|gongcandang|独党执政留祸根|裆匪|da|dao|gong|chan|dang|零八宪章拼|江长孙|台湾统一大陆|九大长老|虫公虫詹duang|中国的敌人|拉屎|欺骗|忽悠|把两个|删了|这句话|中国的法律就是个笑|肿瘤砥柱|唯有日属|红畜|芼戝东|匪狗|龚军|姜派|色贿主义|审判毛|匪朝|李一姐|斧镰帮|某挡|共qi|北京那群傻逼|蛙派|锤镰派|宝宝|四万亿|龚狗|赤魔|锤镰帮|匪国|薄派|电老虎家族|匪贡|木子鸟|镰锤帮|中公种养总书籍|电老虎木子|李无能|官匪一家|瘟相|退出平安防清算|支持薄|毛畜|习二胖|糠湿傅|三个呆婊|三哥戴表|共d|法西斯集中营在北京|仲勋子夜袭山陵|芼僵尸|哄匪|弓匪|宫惨裆|天朝必灭|李不如温|狗cd|mao僵尸|毛厕冻|共篚|江系人马|常痿|毛屠夫|610办公室|叼胖子|匪党|胡软蛋|月月鸟|毛太祖|z永康|打倒共产党拼|毛渣冻|wj宝|一d执政|肿共|taizidang|毛蜇东|毛遮洞|陆月肆号|共裆|畜牲毛|流氓当政|狗惨达|爱档可耻|酱贼名|打倒共长党拼|河蟹大帝|共档|7常侍|习jp|江派人马|贡档|煞笔档|打倒共长蛋拼|强盗当政|刁二胖|三呆婊|忽瘟|打倒共产蛋拼|温球鞋|毛杂种|江的妹妹|徐x厚|猫则冬|g档|平近习|李kq|茅厕洞|羽折怦|匪档|毛罪人|习j平|毛渣东|王八裆|江匪泽狗|江boss|脑残zf|gong党|gc党|温戏子|吸进贫|天朝末路|毛三胖|误国院|七常侍|肛折鸣|肿难海|邓辗平|一d专治|退裆|形精刁|毛敬唐|湘西尸王|贡斐|恶裆|胡揾|哄浐挡|狐惊涛|共产邪教|湖搵|供诽|狗裆|温宝宝|刁肥猪|徐x后|政痔菊|温家报|肛贼珉|毛腊肠|党产共|匪裆|中south海|毛敬瑭|gc当|江狗贼|土匪当政|习老狗|茅厕东|毛魔|零八宪章|狗插党|此帖开光|诅咒灵验|狂糙日本人老母|东北撒比|干过你妈|五毛畜牲|不要战争赔款|水太深的问题|世界上有三个国家|对天一朝|他拿着炝|就算凶器|日夜宣|计生断子绝孙|饿死|12月26日|东英机生日|支持日本消灭中国|名义上爱国|爱统治者的人|徐郭令|猪圈的主权|反猪圈|猪奸|郁承朋|不辞辛劳|不畏强权|四处奔波|鹏鹏是最大的老虎|数百家族共和|一主流组织|江派|邓派|田玉湘|荷叶峰|毛左|邓右|吐抱仔|半吊子|地震|五年一遇|全民大|没遇见|临时性强奸|休假式治疗|老左上台|老右上台|经济崩溃|用贪官|弃贪官|宇文泰|新僵杂种|一等下流胚子|为人民服务|全国鸡婆最多|穷鬼地方|睡东家的小老婆|跟着红军走|兄弟二人在家打架争遗产|60多年前|土匪|居民聚居区|痴痴的等|唐僧问|死了多少|组织救援|据说天津|被锁了不让说话|听说天津网友全被屏蔽了|老百姓不会让你们走完|400多名指挥员|乎乃大虎也|天天看见头条那个装碧犯|僵氏民|傻根把翠花取|有希望|一旦发生重大事故|是中国|僵尸民|匀尽乎|李亮好像是某人的儿子|安徽自古出人渣|安徽人都是垃圾|国民党反动派|害怕言论自由|塞闭人民|封锁人民的嘴巴|毒瘤荷兰人|废都|荷兰蛋|河南人傻逼|就在白帝城立三个铁人请罪|享着败腐利益|最恨怋紸|游击队|挑拨离间|陷害老百姓|花果山爆炸|死了多少猴子|花果山发生爆炸|农民焚烧秸秆他们不让|一骂国民党|新闻尽撒谎|唐僧问|死了多少猴子|贪官习近平|含住|别说话|内政三招|维稳|世袭|外交三招|渣渣腐败当道|民主转型22讲|雨伞运动之香港大撕裂|习近平依赖王岐山|抢位之祸|王岐山留任之谜|从脑科学解构雨伞时代|权贵相争与猎狐行动|北京政局乱套|中共政治分野|男儿习近平|毛共|从寄生幸存到诡变|占中|我识条铁|捕杀令完成|六四问答|中共治国术|十大超富发家秘史|习近平的王者霸气|失语|文字沉默革命|官场开始乱咬|反贪最新动向|习近平江泽民新交易|习曾终有一战|沈冰叶迎春自述与周永康一段孽缘|万达帝国与四大家族|六四之殇|中央警卫局政变始末|周永康令计划如何审|伞里伞外|香港故事|毛泽东周恩来44年权斗史|习近平崩盘危机|王岐山掀开习近平底牌|常识革命|雨伞运动|三宗罪|十九大三大战役|大救星习大大升起|针对政治局常委家族的调查|曾庆红废帝密谋|六四刽子手的辉煌人生|周永康泄露的国家机密|黄丝带与伞|小鸡蛋|香港雨伞运动的日与夜|习式政治|雨伞运动的思考之旅|终极虎穴江家帮|中国领导人的生意与政治|常委大老虎的荒淫|总政上海帮|谁接习近平的班|曾庆红向王岐山亮剑|太上皇与庆亲王|童增|我们时代的英雄|六四以来的中国政治思潮|六四|广场上的共和国|王岐山美国追逃内幕|雨伞运动|义教文集|财阀与高官的秘密交易|被时代选中的我们|增订版|金钟村民的生活实践|团派的末日|军中第一虎|郭伯雄|习近平改变世界|谁会谋害习近平|令计划夫妇逃亡记|李克强因病辞职|悲歌|文革十年日记|五年罢黜习近平阴谋|习近平的方向|十九大七常委|习氏棋局|抓捕令计划内幕|2016中共崩溃|谁谋杀了令谷|中国出了个习大大|北京暗战|中纪委黑暗的房间|中宣部运作|党继续掌权|反贪南征北战|习近平|宣战江泽民|习近平军委布局内幕|李源潮令计划朋党|2015大猎杀|习近平布局十九大|横跨|军的大老虎|太上皇|没有结束的权斗|高耀杰回忆与随想|令计划周永康薄熙来的女人|2015年哪些高官倒下|计划与习近平的两次较量|习近平美国打大老虎|四老虎密事|逼近江泽民曾庆红|新四人帮政变内幕|周永康自辩书真相|我的壮丽青春|汤灿狱中|王岐山坐大|习近平必杀胡春华|周永康狱中自辩书|习近平权势升级版|习近平二十年大战略|习近平剥皮江泽民|香港雨伞革命中的反抗|令计划栽赃习近平|中国第一弟媳|张澜澜|中共党内斗争秘闻|谷丽萍自辩书|习近平怒斩周永康|追杀令计划|十世班禅喇嘛传记|香港民族论|习近平自选接班人|王岐山不信邪|习近平在危险节点上|习总老江多次生死交锋|争权|以反贪的名义|彭丽媛干政|军队国安大清洗内幕|中南海大总管|内蒙文革实录|民族分裂|习近平撼动邓小平家族|令家兄弟与女人|红卫兵第二次革命|江胡夹击习近平|拿下胡锦涛|习近平清军换将行动|胡锦涛自杀未遂|习家女人垂帘听政|习近平家事|王岐山追杀曾庆红|中南海零点计划|权政法非|两年多的过往|嘉庆|和珅|条船|洗屌瓶|买光全世界|买不起一辆校车|三年饥荒|发动文革|贪官遍地|王朔|阅兵|皇权制度|谁改谁过好日子|下一步改|黄俄狗杂出卖领土给毛子|狗官|阅兵|劳民伤财|伪大的当|包子无能|里中堂|一个|证明|垃圾|文化|制一度|陈胜吴广何在|由股民组成的方阵走过来了|为圈钱服务|证监会更黑|醯进逼|吸金逼|醯卺赑|李克底|江婊|国之将危|四维不张|伊教非常低俗|性奴|阅尼玛逼的兵|阅你吗的兵|阅你麻痹兵|老右上台|老左当道|杀掉证监会一群|万恶的计划生育|争当已经把一个民族快整死|阅什么兵|阅逼|悦逼|报告淫长我方已经子弹耗尽|老师讲述奴隶社会的标志|陈姓男子|批发黄领巾的生意|保三代富贵|征四海民饷|股市|横幅|股市|游行|股市|证监会|抗议|股市|进京|抗议|股市|天安门|金正恩|视察平壤新建|死亡|内政三招|外交三招|军事三招|这个猪头整人有一套|现在官心和民心都已经散了|推翻鞋觉|光复华夏|曾经有两个机会|蒋芥石|广东人很奇葩|面貌与心灵|城管方队|文工团|碾压学生|大学生|燃烧瓶|阻挡军车|习由检|习大犬|习炀帝|习哀宗|习末帝|习幽王|何烂侉子|给我扣上|帽子|不想否认|爱你麻痹的国|要与习风战一场|找点空闲|时间|伶俩香蕉|河南人|畜生|河南人|下贱|河南|垃圾|河南|sb|回狗|河南|煞笔|又是河南|蛔子|山东毛驴|汉狗|广东猩猩|蛔蛔|回子|滞纳|徽狗|外地傻逼|驴省|农村逼|肛稀|肛洞|东北逼|郑姆斯特丹|何烂人|津狗|毛泽东|杂种|习杂种|广东逼|被艹|广西傻逼|杭州逼|上海娘泡|上海狗|北京狗|山东畜生|安徽畜生|川鸡|杭州傻逼|马列狗|黄鹅|南京逼|上海逼|草你|马来猴|广西逼|黄俄|你妈逼拼|被操|安徽傻逼|爆艹|井盖省|蒙杂|上海傻逼|操|楼全家|艹你|狗儿子|广东傻逼|南昌狗|杂种拼|杭州狗|爆操|狗爹|赤佬|北京猪猡|浙江傻逼|操你|北京逼|你妈|被日|水多|求插|你女马|妈了个逼|原味内裤|新疆逼|用逼|逼养的|肥逼|舔|木耳|舔|带血|草出来|射出来|逼|痒|b|痒|逼水|你mb|插你娘|阳具|pornhub|狗b|摸奶|全家灵车漂|狗杂碎|不恨美国|买不起房|毒奶|地沟|狂操|日b|狂艹|舔腚|新疆豚|河南人干的|之纳人|北京傻逼|舔jb|共党是我国最大的黑社会|共军背后偷袭国军|马来种广西猴|河南牲口|大河南威武|牛吹得太大|开始做梦|赶一英一超一美|维一稳|曰咪咪|曰波波|曰双峰|河南骡子|吃喝嫖赌|腐败堕落|缺德做损|伤天害理|吗裂猪仪|傻比河南|日本梦|移民到中国|贵州穷逼|自蛤宗逊位|习近平草泥马|启示录二千年前预言|经济最虚|文化最烂|外交最弱|上海娘炮|习苟|刁狗|习狗|江苏杂种叫喳喳|证监会无能|七聋猪|垃圾郭家|阅nmlgb|到了东莞|怕被女人强奸|请问各位大侠|日本裕仁天皇|纪念日是怎么定起来的|明天就要大阅兵|卧槽|普爹|柴娜要办喜事|中n海|茅厕dong|虫合|this|way|please|有人头一直歪着|新帝登基|交警|红旗|天安门|违规|处理|站队|站错队|红旗车逆行|长安街逆向行驶|人民币胜|媛歌妓|我叫盆子|来自种国|家里有田|拆那猪|猪场老板|研发的屠宰工具|车牌挂国徽|宫喘主意|污灭先念泽民贪|射b里|射比里|射逼里|射眼睛里|射口里|几万炮灰正步走|直选|公布|问责|不敢|加拿大籍|二老婆唱歌|振脂菊|攀附权贵|蝇营狗苟|音召山|中国法律就是个笑话|中国法律就是笑话|中国的法律就是个笑话|中国的法律就是笑话|震脂菊|路过一村庄|杀一条无毛犬|反腐在前台|受贿在后台|许多年前|世界大战|友朋遍布|许多年|世界上万物|友谊|操过逼|刑警队|案子未破人先醉|酱什么|什泽么|什么民|继续侮辱|太平间|匣子|标本|欧美日|财产移了过去|西贱平|从小到大没有见过一张选票|孙悟空也有人管他|许多谣言并不|世事总有一些|日本是战胜国|人民的悲惨|刘翔老婆逼很宽|一介农民两个儿子三个老婆|刁辶斤一丷十|白收起家|只挣违民|清蒸廉洁|媛水救不了近火|叼斤乎|恶习好大喜功|西方想方设法地要封锁|引导评论帖文获得5支持|一国两制最大的笑话|许多年|友谊也|子女不|许能带雨|男精菌驱许猿巢|绿畜|工译眠|南京软蛋都闭嘴|杀了更好|亻中员力爹|日本侵华有功|贪污|政党自我吹嘘|世界第一|中国的法律他妈是个笑话|中国的法律真他妈是个笑话|中国的法律特么是个笑话|中国的法律真特么是个笑话|邓笑贫|江宰民|习敬瑭|皖狗|英特纳雄耐尔就一定要实现|祖传三代庸医|貌似能暂时止痛|习近平下台|看见过东京人杀南京人|没有听说过什么南京大屠杀|没有看见过日本人杀南京人|叼包孓夶|银行可以耍无赖|为有黑皮|彭妓女|彭二逼|席二逼|老左再胡闹下去|经济非崩盘|改你媛的蛋|穆绿|扒撸君|我国法律就是摆设|穆斯林是人类的毒瘤|共党就是汉奸|依law至果|猫敬瑭|国家己经烂透|再胡闹下去|经济非崩盘不可|席猪|习二逼|最能编造历史|邪教特征|坑害|炕日|你妈烂了|反g复m|刁得一|难道习不是|3拳芬立|怋主制镀|三方独理|独载|解淦绮|反腐除不尽|苍蝇吹又生|一辆老解放牌汽车载了好多人|代表|美国|八国联军|蚂蚁|本人代表|解救受苦|人间地狱|感谢炒蛋饭|天朝前戴眼镜|江的势力搞|人民共和国从来不是人民的|人民共和国从来就不是人民的|叼大犬|天朝你去抗议|分分钟钟治你个|一个王朝要灭亡的所有条件都具备了|打倒习近平|杀死习近平|毛主庶|除贪官来消除异己|杀贪官来收买人心|没贪财来实己腰包|这才是权谋的最高境界|安徽鬼子来了|为毛的建国做出了不可磨灭的贡献|为了感谢日本人|战争赔款不要了|我听很多老人说|他们在年轻的时候|根本就没有听说过|完全可以代替中国古代的李自成|日本现在的和族|完全可以代替中国古代的满族|统一100|其父统一250|为保衙役之位|其女自幼与县令同宿|睡之十余载|习傻|不朽尸王耄泽东|山西儒林鼠鸡|亡儒林你的良心狗吃了|就是马列主义都是假的|面包席|李克狗|自从在广场开拖拉机之后就知道为谁服务|洗净平|喜金平|某傻朝世界的笑柄和奇葩|坐等碘伏的那一天|据说描述的就是前不久的阿克苏地区拜城事件|等待你们的只能是遍地猪油的地狱|包子访美|共产党政府|继续侮辱bei京太平间玻璃罩子里那具标本|屎坑核心|蛆类的希望|阻碍人类的希望|杀绝洋人正气在|欧美日等非常不愿意看到中国的强大|崛起|然后偷偷地把财产转了过去|西方做梦都在图谋如何如何改变中国的颜色|然后悄悄地把自己移了过去|敌对势力想方设法欲遏制|围堵|封锁中国|中国人是垃圾|王纲失序奸权道|除恶唯有剑|在中国能找出个清廉的官|我立马把长江水喝干|蛤丝|明泽公主|习近平危险|中国女人坏时代|芮成钢和高官夫人们|软禁江泽民|股市政变|李克强临危受命|习近平触礁|瞄准二十大|习近平整死团派|2016年的超级大老虎|习近平大权麻烦多|五中全会大决战|习近平的政治试验|中共自毁接班梯队|逮捕江泽民|选择的反腐行动|雪泥鸿爪话文革|天津大爆炸内幕|周恩来秽史揭秘|红色通缉令|中国外逃人员实况|习近平权术史|中共不想说的历史|2015年大审判年|构陷江青|毛泽东晚年的夫人与女人|令计划与郭伯雄|股票搞垮习近平|人治的社会|去你的妈的法律|法律只是用来管理老百姓|本朝太祖|肿锅梦|肿国梦|美国这种|迎接方式|中国的憎恨|到位|清醒头脑|刁远贫|法律是对付贱民|讲个笑话|中国是法制社会|讲个笑话|中国是个法制社会|说个笑话|中国是个法制社会|说个笑话|中国是法制社会|湖南人永远都是中国的祸害|中国共产党是英明的党|刁金坪|对人民的恐惧|伟光正灵导|伟光正领导|和奥巴马站在一起的大肥猪|肥猪是霸权于民|支持河南独立|支持浙江独立|支持香港独立|支持云南独立|支持广州独立|支持西藏独立|支持上海独立|支持东北独立|支持新疆独立|支持北京独立|不是纸牌屋|戏尽平|猪在美国|大傻在美国|胖子在美国|习逼格逼格|天风地火一齐来|杀绝洋人正气在|今有红星来救世|驱尽邪魔传万代|红色政权传万代|一党执政万年红|紧贫时代|你想发财吗|你想不交租吗|你想分财主的东西吗|就必须让日本人来当物业管理|伟大的中国共产党必将统一全球|我们党最大的优良传统就是群众工作|暗灰讨饭|闪洞驴|鹤喃井盖|绿色宗教|某组织被围剿|某组织被委员长全面包围|刁主席|末代皇朝如僵尸|集体腐败死到地|习胖|马永田|葛丽芳|李焕君|张翠萍|孙海萍|张翠萍|习近平车队|习近平与访民对视了几秒钟|葛丽芳|习近平车队|马永田|习近平车队|习近平透过车窗|访民截车|孙海萍|习近平车队|偕花枝招展的老婆|乘坐砖机飞往太平洋|赤狗|湖北土狗|死肥佬不把钱当钱|免除别人的贷款|二傻|免除|债务|插死山东女人|山东逼欠插|插了尼玛的逼|习夶|婊子戏子的几日游|辛辛苦苦赚的钱全部被三胖送到国外|国庆节|庆谁的国|是你的吗|远凹|节约型社会必须靠节约型的政府去引导|席索里尼|习主席全国各族人民支持你|支持|习总的决策|支持习主席|带领我们勇往直前|实现复兴|习主席上任以来的一系列举动|让人们看到了|中国走向富强的希望|我们挺你|习主席|主席是百姓之福|环球送钱二人组|班长|私自把班费花了|我们班有56个学生|宁赠友邦不于家奴|看到此评论的三天内双亲暴毙|买豆豆|买机机|送美币|河南不哭|站起来偷|俄罗斯|白俄罗斯|非洲|都等着钱|席老大|宁予友邦|不予家奴|傻子|婊子|扔钱|傻子|婊子|撒钱|婊子满世界扔钱|喷麻麻|刁加一点不远不凸|可能没有下一个国庆了|宁做日本狗|不做中国人|90年减一年|90减1年|九十减一年|这个国家没希望了|习的白日梦|为什么外媒有猜测和天荆一样|是政斗|国内说是报复社一会|是快递曝乍|我们不能谈政一冶|不能说外一交|你也许不敢上街呐喊|但你可以上网评论|韦银勇|等到我哪一天变得疯狂|请记得我单纯时曾被你们当傻子一样耍|坐工|行1把|手16年|刁女儿|刁的女儿|有个天使进入一个魔鬼控制的村庄|它们的所谓经济转型和调结构已经彻底破产|没有多尔衮|就没有新满清|404不让人上|自己跑去开个户|刁开非死不可|中国是个处处谎言无耻贪婪的国家|灵道也是全球到处发钱做慈善|中国人人手一枪|就会推翻暴政|中华五千年的传统文化是太监文化|俄国人生性虚伪|阴毒举世公认|黑畜|坪1进1席|猫论|灭了道德|摸论|台弯|中华民族的希望|民主成功示范基地|包夶|席夶|通奸档|鹅嗲|依法治国就是个笑话|连缴税的资格都没有|真是国家的累赘|让你们活着就已经是国家的恩赐了|滚回去种地去吧|少在这里瞎比比|日本亚洲的希望|肥索里尼|艾未未装修办公室时发现插头上有窃听装置|同时有消息揭示另一个被捕的商人信力建被窃听一年有余|更让人震惊的不是对普通中国人的监控与窃听|而是针对国家最高领导人习近平的窃听|而他们使用的手段就是用来堂而皇之|金三胖子|金三世|大送王朝|洗明泽|洗尽贫|越是安全稳定的国家|电影上越是暄染自已是多么暴力饭罪|越是脆弱饭罪的国家|电影上越是暄染自已是多么安全稳腚|一心要向里面供奉的僵尸鬼学习|庆丰三年旦|沪上人踏人|人民十四亿|奴才满庙堂|血溅天子堂|百团烟云散春秋|千年灾星毛啧栋|十大元帅侍妾生|百万俄土李娜据|艾未未|习近平|习近平|情报窃听|技术侦查|习近平|有关部门|窃听名单|监控|习近平|窃听|习近平|习近平|监听对象|保密渠道|监听|习近平|习近平|有关部门|截获|艾未未|窃听|有关部门|监控|习近平|楼上是伪装成中国人的日本人一头|叼包字|中国嫖娼合法|中国卖淫合法|习天子|习大帝|渮南人|网易|日后必有有关部门与你司约谈告诫|性格和善黑吉辽|老实质朴大荷兰|盛产痞子渣滓泼妇叫驴儿|中国最垃圾的地方|面瘫猪|百团弒春秋|千年灾星|十大元帅侍女生|李娜据|沦陷日|国殇日|双十节|双10节|盼全民医保|盼房价下跌|盼分配公平|刁远糙|中国到底有没有法律|慈父斯大林万寿无疆|警察不做案|狗比中国|中国法律就是一坨|公安不犯案|中国最贵的商品是什么|为人民服务|把全世界各国骂人语言加在一起|都不如四个字最令人感到不知廉耻|自我监督|炕战|楼|上日畜一头|鉴定完毕|胖子和大傻|安徽逼崽|匪政|中国警察就是一帮流氓|中国警察就是一邦流氓|续命|蛤|山东人和狗一样|08年的四万亿导致房地产暴涨|将物价推高|祸国殃民大家顶起|更残档|不近平民|怎克强敌|岂能正声|昂首阔步奔高丽|梦断岐山|习近平不得好死|这时候上来一位姓毛的人告诉车里的人|刁远乎|姽|婏|坊|本来国家政策都是要通过人大政协两会通过的|每年开两会|包子访英|骡屙屎|中国最好的邻邦|千古一帝大撒币|人类救星数今朝|百亿千亿毛毛雨|发达国家送订单|第三世界免债|胖子老婆唱歌时的曼妙身姿|这些最不爱国的人却在国内做我们的领导|六十六载暗夜中|杨焕宁被贬|杨焕宁|异常调动|杨焕宁|周永康|关系密切|怎么每天都有个猪头在首页|赤俄及其跟随者们|延迟退休的11万评论你们都说了啥|媛妓|叼元平|刁婊子|把日本人引进来|在让别人去打|他们居然是抗日|刁领袖|人民救星窑洞毛|新疆|暴动|新疆|八角亭|新疆|柳州市|新疆恐怖分子|浙江|三处大火|新疆人|云南暴乱|200多新疆人|深圳|新疆又暴动|死了很多人|八角亭新疆人打架|三辆警车来|都在车上|习大傻逼|台湾中国的希望|习大大|接媳妇|北京电影学院|彭妈妈|习大大接彭麻麻回家|北电彭麻麻|彭麻麻北京电影学院|北京电影学院彭妈妈|彭妈妈北京电影学院|北电|彭麻麻|65|彭麻麻北电|彭妈妈来学校看电影|母校|彭妈妈|65|戒严|彭麻麻|习大大彭妈妈李岚清|习大大|彭妈妈|李岚清|北京电影学院彭麻麻|北电彭妈妈|彭麻麻来学校看电影|彭妈妈李岚清|彭妈妈北电|北电|彭妈妈|65|习大大接彭妈妈回家|彭妈妈|李岚清|65|北京电影学院|彭麻麻|学历|工行|1把手|氺深|小矬子|小三表|东方|太阳|出了个茅厕蹲|别让台湾同胞深陷万劫不复的磨难|庵菊才是真正的黑社会|警察都是欺软怕硬的狗|光腚局|萚苠|李十兄弓虽|控制在3000字以内|刁撸贫|网易已沦陷为无耻之列|绿蛔|毛贼泽东|二战长跑冠军|十个人里九个骗|还有一人在训练|矿工不断死去|呐喊|权利|属于你的阳光|网易邮箱数据泄露|网易邮箱泄露|席海明|网易真不要碧莲|七五事件|新疆汉族|新疆汉族|移居内地|七五事件|isis|东突分子|汉族|维吾尔人|全面把持|新疆暴恐|内鬼|东突分子|杀汉族|新疆东突|割头|新疆自治区|大规模叛乱|数千个恐怖分子家庭|叛乱|汉族干部|撤出新疆|少数民族|进入政府|新疆维族|爆炸案|新疆|维族爆炸|新疆|isis|三少一宽|量刑歧视|新疆|钓鱼岛|维吾尔|杭州|搜查|四十多个|江西南昌|新疆|杭州|考试|四十个新疆人|抢小孩|苑城奇|陆佩飒|人民大会里有人民吗|人民大会堂里有人民吗|死胖快回来吸霾|农民及农民政党是最可怕的一群人|希望载猪的飞机失事|大送皇帝|我朝法律就是笑话|我去很远的地方看朋友并谈点事|家里人天天在村里吹牛逼说我|外家新赐飞龙璧|欲访安期何方觅|朝廷必欲收天才|连营立炸十五地|肥猪外出旅游|红色匪后|英国皇室|红色匪后|两夫妻公款送礼|名曰猿|形相猥琐|生性贪婪|喜捞钱|遍地皆骗|彭一定被习操过|猪头带女表子到处旅游|习太阳|刁太阳|汁辣豚|英国的那叼毛你还不回来|谁对他媳妇彭撸过|痔朝|曾经有位外国人咨询|想研究唐朝就去日本|民国时代就去台湾|研究八年抗战可以去横店|去北朝鲜就行了|匪平帝|绿虫回|网易太不厚道了|普通新闻赞的旁边有个踩|主新闻踩字就没有|刁dd|天朝的法律就是个笑话|杀光全世界中国人|杀光全人类|弄死自己国家人|高举4300万牌子|死了尸体又不入土|江裤腰|gd不亡|彭戏子|典范林|孟国中号|14亿乘客|脖子一歪|满怀才华的青年俊杰们|这个国家已经病入膏肓了|我严重怀疑这个国家被汉奸和敌对势力掌控了|辍学在陕北山沟沟苦研俄美英法拉美印度文学|薄晒来|bei京停尸间玻璃|茅厕蹲老贼|所谓人口红利|不过是廉价劳动力|中国黄猫是全世界最无耻的民族|当年mao害的|结果tusha多少生灵|美军都吓得跑南海来了|最大的流氓是中国政府|当朝7大长老|当朝七大长老|自我种族灭绝|这是一种大无畏精神|汁蜡国|习氏骗局|李氏骗局|中国的法律好笑|汁蜡豚|嗬喃人|国家不让你生的时候的|你多生一个|一人超生|全村结扎|光腚总局去死|对毛子不要纠缠历史|对鬼子不要忘记历史|对人民必须纂改历史|提问|现在我要问一个有争议的问题了|您可以决定是否回答|领导的亲属都是你们万达上市公司股东|请问是否确有此事|万达集团旗下的万达商业地产为了解决资金问题|搞了一轮股权私募|其中就包括|习主席|邓先生的秦川大地公司|这件事恰恰证明了不是|习主席治国严治家更严的风格|那当着学生的面我也回答|万达没有背景|我来说说事情的真相|现在我要问一个有争议的问题了|您可以决定是否回答|请问是否确有此事|施老师我看您面相挺老实的|没想到问问题还挺狠|不过既然这么问了|领导的亲属|万达|习主席|姐夫|习近平|万达|就是连阿平都不敢说他敢搞|张糕莉|红烧肉作的孽|光靛总菊|肉包|修改法律|连庄|不朽尸王|一群管不住下半身的人抓卖淫嫖娼|一群职业骗子在打击谣言|一帮拿绿卡的人教你如何爱国|司法不独立|反腐败是笑谈|男眼斜|女破鞋|夫妻两口真和谐|主有碧莲考斯|复原辽阔是没错|可是只有躯壳|没有灵魂的郭嘉|辣妹子|江户川眼镜男|向隔壁苏大哥学的|我一直用1个档|上坡下坡转弯都只用一档|我是不是该学怎么换挡|撒币大帝|习说|薄敢跟我抢江山|旭光就连升|带着老婆瞎吉巴转|狗日的毛泽东|支持香港回归英国|安徽太和|水晶葬暴君|刁帝|皖太和|一会五千年历史|一会又建国几十年的|里蓝亲是教改的榜样|猪容ji是下岗的楷模|忘供必80后|刁夫妇访美|刁夫妇访英|刁夫妇访越|刁夫妇访美时候有国人拦车告御状|网易可以倒闭了|最不要脸的就是网易的评论审核员|吱蜡豚|国民素质太低|西方的不适合我们的国情|支持习|实现中华民族的伟大复兴|复制注意把括弧内容删除|劣等的汉族灭绝|陈道明的夫人一个是|和她同时辞职的同事|狗屎的天朝法律|美国年复一年的仼犬报告|二元户口制度|不分官黑勾结的官僚制度|必须要煽动反美|中国人已成为地球公害和宇宙毒瘤|毛狗东|梦流氓|马克屎|鹏嫲麻帮我含吉粑|彭麻麻|吉粑|西曹县|薄打黑|一个13亿的奴才既然被6000万人所奴役|法律是对屁民|法律针对屁民|我们让日本人来当物业管理不好吗|十几亿人口|没一张可以信任的报纸|没一家讲真话的电视台|日本是发达国家|日本人来当物业管理|日本人当物业管理|你想不想入档|77元的房租负担的起吗|禁止出境|公开信|律师|禁止出境|王小洪|张磊律师|限制出境|律师|北京市公安局联合公开信|中国律师|禁止出境|王小洪|律师|禁止出境|北京市公安局联合公开信|中国律师|禁止出境|王小洪局长|禁止出境|北京市公安局联合公开信|禁止出境|王小洪局长|中国律师|禁止出境|联合公开信|禁止出境|联合公开信|禁止出境|王小洪|中国律师|禁止出境|公开信|律师|禁止出境|王小洪局长|张磊律师|禁止出境|张磊律师|公开信|中国律师|禁止出境|北京市公安局联合公开信|律师|禁止出境|律师|北京市公安局联合公开信北京市公安局|王小洪局长|律师|禁止出境|公开信|律师|禁止出境|北京市公安局联合公开信北京市公安局王小洪局长|律师|北京市公安局联合公开信|王小洪局长|禁止出境|北京市公安局联合公开信北京市公安局王小洪局长|律师|禁止出境|联合公开信|中国律师|禁止出境|北京市公安局联合公开信北京市公安局|王小洪局长|我创办了一个真正有态度的新闻门户网|敏感案件辩护人|被限出境|17名律师|禁止出境|17名律师|被限出境|敏感案件辩护人|限制出境|敏感案件辩护人|禁止出境|17名律师|限制出境|饿死了三千万居民|毁了两千年的文明|湖南人坏透了|特别是那个干尸|刚操完你娘|蛤总|江冠千|大中华理性诉求|刁下台|够劲平|食屎减刑复读鸡|杀害同胞的宇宙邪教|温女婿|全国已经19万多人控告蟾蜍|希望死的都是中国人|灭伊教穆族|伊湿兰|伊教|黄易是最没有道德的|黄易就是典型的走狗奸臣|黄易也开始装逼|isis万岁|栏|人类癌症|我只能这么说上海要注意了我一朋友跟我提过|习参加g20|穆畜|射满他妈老比|伊一斯一兰一教一的一都一是一畜一生|不是贩毒|不是开窑子|不是开赌场|而是为人民服务|孔布煮意|天灭伊斯兰|刮泯档|饭馆秀|家史秀|成长秀|免单秀|唱歌的名妓|二奶上位|官二代|老大|08年免除46个国家四百多亿债务|国家150笔债务共计八百多亿|见到国土安全部长能整点情报不把米国通化了吧|支持习大大访美支持两国合作|习大大太英明了举双手双脚赞成|习大大的访美之行必将加强两国的友谊开创发展新前景谋求合作新突破|稳定才能发展习总书记贴近人民是人民的好主席|撒币外交|木屎林|真猪党|猪头套餐|is万岁|魔鬼们对外熊包一堆|对内坑害民众丧心病狂|对外送美元如丢废纸|对内搜刮屁民刮地皮三尺|穆斯林没一个好东西|中国公知派打|民主|中国10亿人民的死亡|龚菲不亡则中华亡|电视盒子被封|光腚草拟吗啊|这是个什么郭嘉|比那个环游世界的儿子硬多了|那个根本就是个阳痿货|习菦苹|信一伊一斯一兰一的一都一是一牲一口|默一罕一默一德一就一是一杂一种|刁远斜|王纲失序奸权道|除恶唯有剑出鞘|所谓的反腐就是对人民的欺骗和愚弄|一党执政万年红|一曰国际接轨|两大挡箭牌实为两块遮羞布|五大常任理事国|四个国家去打|只有中国没去|普干爹|中国人质被杀|反恐本来就是各国的较量场|英美法俄等都在秀肌肉|放弃这么好的上场机会|不像负责任大国|isis斩首一名中国人|一定将杀害中国人的罪犯绳之以法|恐怖份子不是吓大的|都在向全世界清晰的传递了这么一条信息|法轮大法好|珍煮伪大|共党必亡|粪产棠|肥头习|刁面瘫|嫖也管|娼也管|二奶三奶他不管|毛国神社|杀光穆斯林|你妈血比|血比|草尼玛的血比|把|反华势力|西方亡我之心不死|是谁弄明白了时|中国人就正常了|不与其通婚|不去清真饭店吃饭|不购买清真食品|穆屎淋|挑你母b|傻逼杂狗|掌握了权力|想杀谁就杀谁|想禁什么就禁什么|想怎么冼脑就怎么冼脑|木子颗弓虽|世界动乱的根源乃是鹅毛及其走|中共卫队|共产党无耻|刁平近|三战实际已经从中东开战|演变为文明世界全面围剿|肿蝈|美国所有的报纸电视台全都是私人的|中国的ccav|期待2016美曰出兵开揍某傻|杂种天朝|日死你妈|公党执政万年红|吕行|铝行|侣行|蟊戝|发行自己印制的伪钞|种植大麻等毒品售卖以换取军资|爆你菊花|江xx正在插得宋xx高潮|你妈个烂比|母湿淋|把你母亲摁地上就是一顿草|艹烂长蛆|蓝币长蛆|全家女人世代为娼|你麻麻蓝币|c罗是不强奸过你地方|女干过你太奶|舔你母亲|女干你麻麻|祝你全家肺哀|你太奶奶英道|你母亲生蛆|女干过你来老母|睡了你麻麻和你老婆|你太婆英道|江苏蛆|炛耄|毛嗲嗲|习呆b|刁迈乎|京城停尸间玻璃罩子|习儿子|血葫芦逼|草泥马大勺逼|毛秀全|髦匪|狂插起来肯定超爽|吃拉豚|射你脸上|射你嘴里|邓首富|审帖的这种走狗|西子锅母|反人类|恶魔|手向外弯心最邪|水边又将二杆揭|七个小儿逐鹿鼎|百万山河尽染血|匀之斤平|大烂比|叼远平|辶斤丷干|十兄弓虽|中共就是一群王八蛋|穆斯林的规则就是|但你必须尊重我的习惯|我可以诅咒你死后下火狱|他们同时在自己的地盘上抵抗着他们自己的威胁|他们在世界上抵抗着世界的威胁|避难的方式零星迁徙到一个新地方|你会发现身边的暴力和犯罪现象突然增加|人们惊讶地发现周围突然到处是某族小偷|某个特定地域的绿化已经接近完成|这个分裂过程永远不会停止|锤镰教|刁远岖|你妈妈个大雪碧|万德伦|新疆人|恐怖分子|怀化|惠州火车站|血腥恐怖视频|泸州|六名暴恐分子|新疆暴恐分子|泸州|黑龙江边境市县|恐怖分子|新疆|怀化|布吉火车站|恐怖分子|圣战|怀化|越境失败|开展圣战|黑龙江|新疆人|万德伦|恐怖袭击|黑龙江|圣战|复兴中华民国|之拿豚|你在非洲|晴空万里|我在北京|不敢喘气|续一秒|蛤蟆|蓬嫲嫲|权力的币|政治道德钞票经济理论|什么权利都没有|根本就不是人|户口和人权在中国是奢饰品|氵又丰民|穆斯林杂碎|伊斯兰畜生|江青是妓女|彭也是|伍猫奴才的主子们是不会告诉你萨达姆杀了多少反对者|横店抗战硝烟浓|新闻联播档中央|刁运平|习xb|洗大大|唱歌老婆周游世界|视频431|姐姐外国籍|夫人着衣秀|自己一身膘|顺便撒纸钞|自己一身膘|经常出外耍|刁jing|p|国家好不好|老婆|经常外出装|国梦|小板凳家族|当今的国舅|刁远并瓦|杀光东被人|支蜡猪|叼禁讠平|近年|平生万卷|下榻|台席|刘牢出外甥|芸阁有儒生|然而有个大国|号称第二聪明人种|买了个三手航母|去年涡轮机房爆炸后到现在还没修好|简直让人笑掉大牙|公禅荡|花钱买伟哥|让非洲老朋友继续毒菜|在陕北老流氓|政治课堂上|老师讲诉奴隶社会的标志|奴隶是没有土地|奴隶的财产来自于奴隶主的分配|奴隶是没有政治权利|学生问老师|既然社|比资本主义优越|那为什么苏联没了|我只是混口饭吃|狗残荡|公颤党|刁沙笔|反腐大王|邓矬子|高价买石油|高价买朋友|无前搞医保|无前搞射保|和谐三年|帝阅水师于东海|泛亚|血书|泛亚|联合国|云南省政府|全球记者招待会|泛亚|国家信访局|总理邮箱|连老流氓在陕北时也知道拿建立美国式的民主作为幌子来迷惑群众和其他档派为自己当炮灰|中国人历来心术不正|思想上压迫你禁锢|鹅罗撕胡作非为|包括误猫|不如反了吧|刁鸡平|狗近平|刁斤砰|支持习总书记|共筑中共梦|萎咣症|习日月氵|一人发言|万人鼓掌|巴掌拍的震山响|一桌盛宴|撒币习|王八们有何事上奏|我等有王八蛋进贡|哪日灯头朝下时|就让你等全部当官|这些乌龟果真全部当了官|这就是现在的中国百姓|中国人真是可悲|交世界上最多的税|受世界上最重的剥削|能活着就是奇迹|我家世世代代|现在你们来了|厚颜无耻地|借给我的|算个什么东西|黄恶野孙|你除了会操尼玛会认贼作令尊|会中国话就和你爷爷辩论|既然认了洋祖宗|中国没救了|现在那对雌雄双贱从欧洲玩到非洲|一块红布|齐撕烂|换新颜|既然是兄弟同胞|难道你兄弟过好点是错误的|谁也不许给习总添乱呀|隋炀帝天下大乱的时候还带着老婆妃子|现在那对雌雄双贱从欧洲玩到非洲|到处撒银子挥霍无度|公安部和习近平的冲突|声琨|也是团派|郭声琨|邓楠|丈夫|郭声琨|要当国资委主任|郭生困|余远辉|声琨|下属|郭声琨|出卖大明山|敛财三千多万|老根|被王岐山敲打|马飙|声琨|有嫌疑|梁胜利|郭声琨|郭声琨|曾的亲戚|公安部长|太监|声琨背景简历|郭声琨|畜声|郭声琨|落水市长|郭声琨为升官谎报|公安部长离不开曾庆红|郭声琨|应诉申请书|郭声琨|救火|不成却落马|郭声琨|当心华南虎|曾庆红老乡|郭声琨|情人|取代江派色彩浓厚的现部长|江泽民坐不住了|三条线给习近平设局|与郭声琨远亲邻居有点生活过节|郭声琨|太太|郭声琨|重庆市委书记|十九大|有色金属|公安部长|郭声琨是广西腐败的总后台|解除|郭声琨|郭声琨|惨无人道|郭声琨在广西犯罪|曾大佬可能入局后转任人大副|公安部是在草蓿人命|刘云山曾庆红设计暗算习近平|郭庸混|声琨|公安经历|刘奇葆|传销|郭声琨|郭声琨|公安经历|郭保留国务委员虚衔|声琨|揭露江泽民|郭声琨|仕途萎靡|习近平选他到政法系统|郭声琨|政坛起家|曾大佬3年后不能发力|可能入局后转任人大副|声琨|夫人|郭声琨|邓六金|双大老虎|保护郭声琨当公安部长|郭声琨发力|声琨|妻子|丽媛给公安部长打招呼|解密中组部|郭声琨|企业管理者|郭声琨|安排邓小平曾孙|公安部长|操纵股票|声锟|被查|郭声琨|下一届政法委书记|公安部长|令计划|郭声琨|陈鹰军|郭声锟|女婿|郭声琨|邓楠|郭部长|美貌女性|郭声锟|中铝总经理孙兆学落马|郭声琨结党营私|声琨|救火|党国维稳第一线|以大阅兵新政治优势加大清除李克强帮派|郭声琨退位后|公安部长上任半年三度告急|郭声琨|新一代江派|郭庸俗|郭声琨|政治背景|习近平拿下|庆亲王|风向标|郭声琨|摩根大通|声琨|老根|郭声锟|邓小平|声琨接替王岐山访美|声琨|政治背景|郭声琨|天津公安|人事安排|丈夫|声琨|郭声琨|安排赵飞任天津公安局局长|郭声琨|背景|揭秘|声琨|背景|声琨|邓小平|声琨|老婆|郭升坤不得力啊|回苹果铝当厂长吧|郭声琨|邓世蕾|声昆|北海资本运作|郭声琨|被查|美国证券交易委员会索取35名中国高官信息|郭声琨|辞职|公安部长不宜升|李蔚就公安部实施酷刑|给中国公安部长郭声琨先生的公开信|沈阳访民起诉公安部|声琨|邓卓棣|警犬部长狗声琨|公安系统大震荡|公安部长|习的亲信|拿下|庆亲王|风向标|指向郭声琨|郭声琨|余远辉|后台|声琨|父亲|郭徐老虎|郭声琨秘书出身|郭声琨|曾庆红|江西老乡|习近平要动曾庆红一个亲戚|郭声琨|江泽民|声琨|后台|大阅兵是江泽民对习近平维护垂帘听政的酬佣|郭声琨|广西|传销|郭声琨|渎职|郭声琨|广西贪腐|郭声琨|中组部长的人选|公安部长女儿开着几百万的豪车来上学|李刚|进京执掌公安部|郭声琨|柳州市长|郭声琨|肖文荪|落水|曾庆红|沈阳警方抓捕|509|专案维权|北京出庭|声琨|被敲打|郭声琨|宋林|曾庆红是郭声琨后台|才干是银牌|表舅是金牌|郭声琨|高层内幕|郭声琨|曾庆红|表侄|郭声琨|十八大大黑马|查刘奇葆郭声琨|严查|郭声琨|郭声琨|传销窝点|骂咧子孙|洗屌不吓台|免除46个国家|免除32个国家|累计对朝援助达8千多亿|中国梦|梦之烂|陆豚|中国法律就是一个笑话|之纳蠢辈|大陆之纳|默罕默德造的孽|罕默德造的孽|13日9点定在河南省政府|1314要回血汗钱|14日9点定在北京中南海|真主煞笔|圣歌|nashid|醒来吧|拿起武器去反抗|习近平不是人|习近平也太不是人了|丁磊|草泥马|老浦|开庭|释放|老浦|老浦|释放|开庭|老浦|被子菌|bei京太平间玻璃罩|法西斯纳粹政府统治中国|刁迁乎|养外国老大们|天朝棺腐垄断|打倒江泽民|老大带着二奶上位的那个唱歌的环游世界|人民救星红烧肉|玻璃里躺|回蛆|楼上疯畜想当日畜想疯了|天天挂代理yy跟它娘拍兽皇|刁元屏|g铲裆|为什么你的制吅度会被全世界唾弃|胡烂锚|马劣猪蚁|马劣主义|刁迁平|政治只有腐败|官员只有特权|这就是我的华夏|老大带着二奶上位的那个唱歌的|局域网大会|防火墙高筑|互联网|翻墙|乌镇维稳|乌镇的维稳|大陆没有互联世界|4万军警护驾|世界局域网大会|嘉兴的厂停工|李总理|老江|习总书记|薄书记|泽民|彭丽媛|江主席|贺国强|李源潮|温畜|涛哥|刘延东|胡锦涛|温老板|江泽|习主席|胡温|温家宝|近平|李长春|戴梦得|九常委|吴邦国|俞真声|栗战书|老习|贾庆林|温总|习李|刘云山|李源潮|张德江|俞正声|吴邦国|周永康|胡景涛|赵紫阳|俞真声|贺国强|胡锦涛|王岐山|习近平|孟建柱|一党专制|工厂当|邹永康|李长春|吸进贫|倒共|习大大|共产党|中拱|温胡|汪永清|刘严东|贼裆|江锦恒|恶党|温家宏|习老大|习某人|老人干政|zyk|温佳宏|江派|蔡赴朝|团系|王歧山|中宣部|习政府|政治局|jzm|江家帮|一党执政|上海派|习远平|中组部|习贼|产邪党|羽半|江爷爷|习进平|席大胖|共餐当|洗净瓶|胡海峰|嘉兴市委副书记|温宝|共拆档|邓卓棣|胡阿斗|洗镜贫|臊裆|工费比王|希望的田野|某党|邓矮|一党专政|臊谠|习近平|李克强|鲁炜|刘云山|王岐山|张高丽|张德江|俞正声|刘奇葆|大陆沦陷|习女婿|老刁|共党|全民起义|狗共|7头猪|九长老|半羽|国之将灭|胡耀邦|胡大草包|胡爷爷|全球公审|江胡|团派|姓温的|hjt|江贼|姓wen|帛涛|党的喉舌|朋鸟|小习|d的喉舌|贾ql|den矮子|三工公|ze民|周永k|xjp|九个常委|zemin|党灭|匪d|江系|彭夫人|七常委|红色恶魔|7常|中北海|7常委|温无能|天朝要亡|狗党|习书记|羽二分之一|xuechao|五三五|习老板|水工系|江湖两派|gongchan|习明泽|国新办|网信办|胡和谐|刘晓波|瘟狗|供苟|某档|淿涛|tiananmen|工匪|老瘟|狐温|宫妃|狐蚊|瘟家|猢瘟|糊瘟|供绯|宫肥|糊总|胡瘟|拨西来|博西来|产挡|公荡|巴酒|瘟爷|博袭来|李岚清|民主女神像|温家军|陆泗|熹宗|习泽明|淘哥|狐瘟|供肥|溜泗|湖瘟|供韭|芭酒|总射击师|波西赖|钟南海|宝家温|falungong|共非|供禅|总素鸡|田安门|里可强|fl功|西今平|hujintao|帛寿|hu总|lichangchun|波书记|理总李|月昔肉|共贼|赵乐际|孟建柱|王安顺|郭金龙|胡春华|陆昊|张春贤|黄奇帆|孙政才|吴官正|6月四|政治局常委|习哥|中央特供|习大人|江戏子|亡共|臧独|灭共|推翻政府|温老头|李大鸟|习万岁|温爷爷|9评|g党|虎蚊|实干误国+空谈兴邦|习大胖|胡乱帮|jinping|温云松|朱燕来|刘乐飞|习褐心|黄明|江卖国|温家|贾亲林|八九事件|习爷爷|江大老板|习二代|7条底线|平平+强强|北京独立|习明泽|傅政华|中国必亡|傅部长|习大|裆中央|一党专政|lxb|wjb|五不搞|废除害人的马列主义|流肆戒盐|习主席|弓藏党|共产单|公贪裆|公产蛋|工厂单|吾尔开西|工仓单|共餐单|彭丽媛|开放报禁|建柱|政治斗争|北京警方|维汉矛盾|ccp|三英战吕布|一国一制|派系斗争|党中央|上海帮|北京市政府|北京市公安局|政治迫害|舆论管制|太子党|中央领导|共贪|瘟疫之宝|中南海|舆论引导|关押自由派|博讯|舆论禁令|伪火|七中全会|政治报复|活摘器官|活体摘取|政治派系|维汉冲突|反腐亡党|中央高层|中央军委|毛贼|宋姐夫|郭市长|lkq|源潮|彭将军|栗总管|奇葆|姓习|北京市长|明泽|温家宝|七大佬|报禁|党禁|习仲勋|仲勋|克强经济|戏子温|七大常委|江zm|某裆|黄坤明|瓶金溪|习sb|媳众熏|电婊|习某|彭丽爱|三中全会|三中会|王惠|瘟先生|xi大大|蔡照明|习总|刁王八|洗老大|毛将军|毛少将|毛泽东|yongkang|支共|除刁|周永|muslim|xinjiang|islam|moslem|丽媛|性习|习jing平|盆丽缘|晚共|共f|锄习|周咏慷|毛择东|温大人|周政法|老习|chuxi|习老总|三权不分立|共c达|席老总|习犬|土匪政权|电力女王|周根元|当朝长公主|电力一姐|毒档|共产主义+邪教|现任领导人|才厚|xi总|书记是个好书记|中央大妓院|九巨头|九大巨头|邓小平|网管办|共抢档|g军|温xx|互联网信息办|国务院新闻办|xch|王薄事件|薄先生|清华帮|毛二胖|共产六十年|一党独裁|庆红|叁退|博裕|王奇删|八大家族|李晓鹏|李晓琳|李晓玲|某人上台|习某某|李小琳|电力格格|毛浲东|耄|中国领导人|李公公|消灭毒菜|三脚蟾蜍|习老妖|习大傻|习大傻|嘉庆皇帝|小刁子|习天神|静萍|习爹|细颈盆|席大|刁斤瓶|畜共|工产档|习小姐|茅台军|维尼小熊|包子上市|全民投票|徐才厚|徐厚才|徐总|徐老虎|刁xx|温戏子|习先生|江老虎|重庆模式|无官不贪|康哥|周被查|周书记|康永粥|太子档|习金平|陈峰|江蟾|习远斜|里鹏|刘春航|网易总编|正国级|华国锋|大大习|习大大|彡工|习boss|中苏国界东段协定|江东六十四屯|乐泉|云山|法办江|中华联邦|党产共|吃蛤蟆|庆父不死|江家三代|西胖子|洗鸡屁|彭丽暖|周小平|陈刚|太子帮|反攻大陆|温相|总书记|最大的黑帮|虫哈虫莫|亡d|剿匪不利|汪洋|赤化|国信办|南望王师又一年|活摘|克强|光复大陆|27亿|镰刀锤子帮|奥斯卡+温|北京副市长|朱镕基|金元外交|朱镕基|法轮大法|天朝必亡|公安部|土共|合法的土匪|首都公安|广电总局|毛老贼|温如燕|温如松|朱云来|腊肉|泡面君|香港独立|台湾独立|北京市委|广电总菊|执政裆|执政挡|毛伪人|包子哥|毛腊|水晶棺|毛竹席|拱铲傥|亡国之兆|x大大|刁太太|李小鸟|网评员|jz民|蒸发委|张建东|丁向阳|张工|刘金国|红色邪教|张力军|习老头|大大下台|习式讲话|g产g7|刁某某|习近安|印钞强|嘭麻麻|习傻逼|傅政华|李京|政华局长|政华同志|傅正华|傅政滑|傅振华|北京警察局长|北京公安局长|公安部副部长|fzh|妻子李京|温老虎|彭mm|彭麻麻|刁某人|苞子|习亡|中美论坛|中美互联网论坛|赤奴|新四人帮|郑晓玲|习妇|xi+jin+ping|令家|令狐野|王73|彭+女+爰|进平+柯小明|习+婚姻史|大大+婚姻史|进平+有几次婚姻|大大+柯零零|进平+柯零零|习+有几次婚姻|进平+两次婚姻|习+柯零零|大大+两次婚姻|习+二次婚姻|进平+婚姻史|大大+柯小明|习+两次婚姻|大大+有几次婚姻|梦雪+情人+习|习+离婚+柯小明|进平+二次婚姻|习+柯小明|大大+二次婚姻|净网|反共|锦涛|大大+麻麻|跟贴用户自律公约|互联网大会|洗蛋蛋|蒋建国|习威武|伊斯兰+邪教|伊斯兰+毒瘤|共产党|江二代|江绵恒|彭姐|蟾蜍河蟹|liyuan|庆丰|习小小|刁小小|八尺协定|王冶坪|共畜|刁氏|发愣功|江倒台|马云+太祖爷|责冥|共肥|郭声琨|平猪头|公安部+主任|公安部+办公厅|办公厅+主任|道德姐|穆猪|崔玉英|四个全面|总政治部|两会|馒头平|庆亲王|习+小圈子|习+小团伙|习小团伙|两荟|党卫军|党卫军|裤子系胸口|裤子寄胸口|大陆的腐败|哄惨裆|王八朝|无能政府|无能的政府|政府无能|上一届政府|上届政府|垃圾政府|王八蛋政府|腐败政府|打倒政府|推翻政府|流氓政府|流氓zf|习远凹|洪匪|反腐+政治斗争|政令+中南海|反g|池塘三角眼|天朝老大|圆圆的潮水|老大的弟弟|刁打虎|温饱宝|习妈妈|吸肿|彭xx|xidada|彡石|蛤派|刁与温|扬州老鳖|打到政府|共亡|共犬|供犬|谠|操泽东|共痞|新上任|中国元首|李克qiang|执政|新黄+执政|胖子执政|彭氏逼|前朝皇帝|刁大大|刁迸乎|镰锤派|江家|江泽明|江遮明|江浙民|hama|习特|习xx|习朱会|朱习会|武长顺|网易公司负责人|王小洪|傻逼政府|土工|江大哥|习夶夶|狗日的党|狗曰的党|郭伯熊|江杂碎|习性肠态|毛西斯|习西斯|毛高祖|习索里尼|刁远不平|毛主义|毛砸洞|傻强|肥仔平|李克壮|登江湖|登江湖|毛砸洞|李克软|习dada|大公猪|喜包子|刁索里尼|毛泽dong|咪咪眼|习近|毛大屠|毛东泽|志成学子之歌|志成之歌|老西|带泽字|呱呱|畜毛|国家规定+狗屁|青蛙+国难|三圣民|大傻+送钱|刁远坑|船上开会|江屠户|刁舔鹅腚|烂d|李月月|习武帝|李鹏|包帝|习肥|网易老总|老蛤|邓杂|习杂|共杂|毛杂|胡杂|嘭妈妈|习+下台|彭大妈|治国无能+祸国有余|三块小表的理论|共爹|站错了队|铂雄|邓家|亡朝|刁太|矬子+三表+螃蟹|习呆子|一条三八线+一弯浅海峡|刁某|红色法西斯|月莫虫合|习仲xun|6月3日+北京+广场|口天丰阝国|红色纳粹|李小王林|周恩来|毛妖|哄浐挡|习光绪|习共|习中央|习党|习影帝|习溥仪|习崇祯|程虹|外+秀恩爱+狗男女|李克酱|统战部|老僵|习皇|上海市长|d瘸子|胖子+老婆+旅游|李氏经济学|习伯伯|天朝+灭亡|中国+灭亡|刁李|叼某|李克强|无耻国家|无耻的国家|无耻的政府|朝代毁灭|江曾|江和曾|刁冮|习江|曾江|江习|青蛙和兴红|毛共|彭妈妈|90周年病危|7月4日0时40分去世|扬州籍的重要人物|周年病危|庆父|打倒中国|中国要完蛋|薄熙来|中国灭亡|关闭网易|国家必亡|习政权|李习|网络安全法|琳+励志楷模|惟有日属|刁氵|维尼的老婆|刁夫妻|北京停尸房|垃圾网易|西胖|个人奋斗的典范|习汉奸|政权必倒|庹震|习的女儿|江太监|习连套餐|令计划|绿鬼|69大限|逆施倒行+除异固权|布施外邦+劫夺聚敛|禁言锢论+守缺抱残|郭伯雄|刘晓皮|土匪党|彭岳母|前前老大|习的新闻|失信天下习|d卫军|江汉奸|借腐除异|江大王八|江大虎|政府不要脸|文化部长|洪匪|虫合虫莫|红教|老老虎|最大的邪教|国无希望|政治牺牲品|城墙+照片|kq经济|器官活摘|轮功|法轮功|邪恶组织|藏字石|毛尸|七不讲|法轮|朱匪|姓刁|法伦大法|虫合虫合|南湖+船|假普选|令完成|令谷|某组织|令政策|红色政权|普二胖|徐ch|刁多一点|除xi|天朝不灭天理|红党|封锁消息|多难兴邦|zhang+gao+li|赤党|空投武器|匀进乎|1953年6月|不远不凸|习忑叻|我们的希特勒|绿豆蛙|锤子弯刀帮会组织|猪头皇帝|hu景涛|洗屌瓶|退休+片场|袭猪头|半羽浮岿+水边楼台+瓶分秋色|纽巴伦|江跟刁|李的无能|习家|刁老板|李大吹|大大三年|彭妈妈|洗胖|刁出凹|毛大帝|香蕉皮|习血鬼|刁包|登机大典|登基|送财童子|散财童子|温actor|刘云三|朝堂刘|江李曾温|绿皮猪|姐姐是加拿大公民|习匠平|正声|七大长老|江孙子|犀利二人组|习夫人|一d制国|江孙|巩固统治|总王里|李狗|李吹吹|李席|习猪|习狗|李管家|西老大|西特勒|肃清政敌|习奥会|梦大爷|刁元乎|亡党|亡党|老大要出门了|匪gong|习薄|共国|山东女婿|zg是一个法制国家|匪首|歌妓+小胖|喜老大|雹子|狗夫妇|国女表|大背头|满脸横肉的胖子|习奥|阿斗治国|习氏夫妇|五胖|5胖|带着老婆作秀|赤匪|西鸨子|歪哥|小眼肥|面条哥|梦胖|这届领导|丁狗|席傻|席胖|江三表|五中全会|镰刀帮|洗汰汰|嘭抹抹|习领袖|中部偏南的海边|大送朝|李黎|王路生|刁呆子|托江的关系|撒币夫妇|彭么么|丁磊|胖子上台|猪头上台|庄荣文|徐麟|任贤良|王秀军|王秀军|任贤良|徐麟|习鬼子|作秀+胖子|毛邓江|习陛下|想当年习刚上台|大傻夫妻|彭某|俄狗干儿子|傻孢子|肥头大耳+二奶到处旅游观光|贾延安|猪头带着老婆|红贼集团|客弓虽|七个叼|温习贾|习二b|天朝皇帝|本朝老大|封杀网易|矬子+三表|面瘫老板|面瘫习|面瘫老大|鱼素鸡|黑眼镜背带裤|阿民|阿平|江姓领导|习薄周|习帝|肥帝|江李温|宗果领导人|鹏嫲|吕锡文|新贼更比旧贼恶|谐星习屌|法+办+僵+某+民|煞笔狗五毛|齐巧巧|媛水|歌妓老板|真猪|习近拼|习经拼|习净平|彭丽缓|习屌|歧山|媛歌星|足球皇帝|明沢|戏子老婆|习女|刁武帝|席泽明步|网易去死|习将军|叛d|习呆|狗供|is加油|支持is|绿毒|刁爹|习木人|媛俪|媛皇后|戏子国母|刁明测|鲁部长|干掉中共|胡乱邦|唱歌的妓|平帝|胖子席|四眼黎|肥猪王|老大夫人|chifei|留云3|齐桥桥|网易+日本控股|m特勒|阿习|小刁|习民|肥习|死习|傻习|咩刁|二货习|老大夫妇|声琨|老郭+公安部长|洗屌|曾王爷|一档制|哈里发|包皇|朱八蛋|江的儿子|周泡面|胖子眼镜|世维|第五代核心|中共+倒台|世维会|党代会|d组织|太皇|胡教主|朝政混乱|宝二哥|红朝|九变七|换朝|民必反|天灭|znh|新闻封锁|红色家族|三民主义|改朝|薄公|七七宪章|某d|天下必反|匪帮|真理部|新闻管制|国内的禁闻|bxl|共朝|九条老狗|军队国家化|天安门|第四代核心|藏青会|打击天朝|西南王|解放我们|温氏|终将清算|三点工|李家王朝|平西王|江某|军委|赵总书记|赵紫|某个组织|天朝不亡|九常|中国总统|入常|缴匪|三点水|国内搜刮|亡道之国|国之将亡|云松|dang|光复|景三帝|接管中国|薄王|李氏家族|对外软弱|平哥|换党|535|g狗|七大人|俞老四|江氏|江哥|七大流氓|中纪委|网络自由|剿匪|贾太保|对付人民|权斗|d狗|氵工|goagent|延东|先帝|七常|三工|d奴|12任军长|岐山|宪政|老温|三退|十九大|十八大|德江|三个代表|独裁|小鹏|主席|流氓加邪教|作秀帝|空投单兵武器|海外资产|纽约时报+温|法拉利车祸|新皇|计划+谋杀藏族|姓共|李总|汪总|解放西藏|常委|中共|家宝|宰相|退党|总理|国母|热比亚|伊吉拉特|朱国峰拼|中国政府拼|平习王|这届政府|名誉主席|名誉会长|亻共钅铲|黑暗中的国家秘密|禁运武器|武器禁运|江代表|马列毛邓三科梦|藏独|疆独|红魔教|省委书记|中国梦+白日梦|有党性+没人性|圣上|土共拼|中国梦+噩梦|中国梦+恶梦|七长老|七头猪|中国政府|匪出身的政|抗共|维权人士打压|维权人士|自由民主|第一夫人|三个戴表|供产主意|北京警察|执政党|共匪拼|江蛤蟆|瘟饱|揭竿起义|亡国的前兆|亡国前兆|佳宝|消灭邪恶|国务院|社会主义拼|独裁拼|中g|三个代表拼|中南海拼|江总|老胡|胡总|毛人渣|国家主席|mid+south|洗脚盆|超级颜论|胡搞几年|瘟神|斧头帮|chandan|恶政|自我批评|紫阳|彭大姐|三个婊|政息人亡|大内总管|大内主管|镇压老百姓|镇压人民|兲安门|内部斗争|排除异己|清除异己|共同执政|北京事件|毛泽东+人渣|恶政之下|2会|二会|匪+共+将+倒+台|西中寻拼|毛折东拼|新boss|国x办|刁劲瓶拼|洗狗拼|雪山狮子旗|十八届|3中全会|中国梦|政治垄断|安全委|国安委|国安会|新一届领导|大boss|北京公安|广隶|帝都公安|七老狗|派系|中央党校|网络监控|网络监管|x总|矮子+刽子手|毛匪|毛泽东拼|老毛|邪教组织|北京广场|毛润之|毛太阳|后清|尚狗|一把手|毛杂种拼|毛渣仲|共+倒+台+退+防|天朝政府|国将不国|军队腐败|胡混十年|打到中国|迁都|毛泽西拼|国务院拼|有事找大哥|蟑螂经济|共产主义拼|陆独|马总统|姓江|毛太阴一险|二月鸟|废习|温狗|薄家三少|国际调查+记者+同盟|九大乱象|建言书|红色恐怖|k师傅|七个不要讲|七个底线|除夕+习|异域被杀+友邦赏花|法+器+官+活+摘|退+党+团+平安|阿康|大人物+被抓|康师傅拼|共军|重庆市委|西班牙国际法庭|除夕皇帝|省长|周徐令进笼子|bo熙来|春华|政变|bao熙来|除夕+圣上|北京公检法|权力争斗|天津奥斯卡|北京政府|皇上+包子|三只猫头鹰|江贼|镰刀锤子|瘟疫家族|瘟疫的女婿|中国必乱|起来反抗|控制舆论|枪支合法化|bo书记|海南中|红d|异己|书记下台|早点灭亡|内斗|三水|沦陷区|李家|庆丰包子|康死无红|警狗|面瘫哥|国家领导人|江阵营|水工|共产|胖子+撒钱|起义|揭竿|女儿+哈佛|最大的黑社会|木子|大姐加拿大|习掌门|广电|站错+队伍|哈蟆|大陆档|bigbig|台湾+正统|挺薄|薄熙来拼|凳+浆+糊|国家互联网信息办公室|防火墙|傻大大|独夫民贼|退休大佬倒习|倒习动员令|大麻组合|亡国|歪脖|某大大|统战部长|团结起来+高喊打倒|胖子+做梦|垃圾政府拼|江老|局域网|习习|政府+傻逼|政府+无能|中国+愚民|达赖|中国zf|49后国耻|大傻+老婆|领导+习|打到+政府|打倒+政府|政府+去死|政府+烂到根|裆|推翻+政府|政府+垃圾|政府+剥削|政府+压榨|政府+腐败|天朝政府拼|本届政府|政府+下台|流氓政府拼|大大|江贼民|假庆陵拼|xdd|新主子|老大+歌妓|胖子+快递|北京+胖子|天朝+歌功颂德|习时代|统一大陆|嘉兴+破船|政体|一号首长|习龘龘拼|挂照片+敬仰|挂照片+城墙|毛邓江胡习|希魔|三日皿家宝|国家奴隶|中国奴隶|国家的奴隶|反腐+演戏|社会主义+无恶不作|反腐+洗牌|反腐+内部|表面+反腐|反腐+戏|狗屎国家|狗日的社会|狗日的制度|习则天|症权|某集团|胖子+执政|女儿在美|流氓集团|砖制|公安局长|振臂一呼|铁帽子王|中央警卫局|徐将军|party|3个自信|江时代|胡时代|二当家|毛儿子|吐匪|毛东泽拼|红顶集团|今上|反腐+笑话|毛傻逼|公主+哈佛|鸡朝|政府+打倒|吃人的制度|政权|真理教|烂到根|党政一家拼|档权|腐败无能的朝廷|江卖国|h匪|矮平|肥平|毛厕冻|li家|李小琳|朝代灭亡|我来晚了|习匪拼|公惨主义|攻长胆拼|天朝首相|克弱|伪共|匪性|前前皇帝|习王|习+肥+猪|励志典范|民哥|习+大大|共党拼|颠覆中国|民不聊生迟早亡|公主+美国|对付老百姓|天朝zf|专制走狗|最大的涉黑组织|七五事件|75事件|蛋炒饭|毛xx|王青天|庙堂之上+朽木为官|党八股|枪口+对内|一人一个女学生|腊尸|喝血社会|官逼民反|马劣|润之|蜡肉|古田会议|赤祸|蛙帮|当今那位|国军千古|中流砥柱|打倒|吐灰|习式|犬大|邓王八|xi|剿共|天津市市长|天津市长|第一贪腐大国|某夶|天皇万岁|彭丽媛|李克强|张高丽|温家宝|习近平|江泽民|刘云山|胡锦涛|李鹏|周永康|李木匠|晚年邓小平|最坏的时代+最好的时代|每一把伞|坟场新闻|论街头政治|红太阳帝国|伞下力量|我占中|风险中的暴富|伞聚|雨伞人物图集|十月巨变|打老虎遇阻内幕|权贵家族的幕后金主|偶像的阴影|藏区秘行|贪官后宫奇闻|复兴策|西藏火凤凰|城大月报|中国新震荡|高管背后的情妇|中大学生报|为人们服务+新版|寻找逃荒妇女娃娃|在这里读懂中国|西藏危机|视艺圈权与欲|引咎辞职|徽宗|崇祯|这届|嘉庆|真荡|真腐|恶习不除|上届老贰|反党份子拼|畜生的国度|某某经济学|部长下台|青天白日|越兵|彩排|中秋节+敏感词|阅个兵|龚长堂|解救我们|权大于法|黄饿|毛病养成恶习|第一女儿|蛤蟆|蛤蛤|姜军|辣肉|红八旗|绿绿|吸李|马列|喜金平拼|钓鱼岛是日本的|揭杆而起|七肠胃|麻皮朋|歪头|二婚嫂|陕胖|齐奥塞斯库|绿火种|习索里尼拼|镇变|喷麻麻拼|彭麻麻拼|李老二|日本万岁|属蛇|当今天子|中国的宪法|国家机器|国家没救|缅瘫|反党|共炒蛋|绿魔|傅斯年|蛤哥|习明泽+ab|习明泽+黄晓明|温云超+习明泽|习明泽看上黄晓明|我讲个笑话+法治社会|畜生治国|法律就是个笑话|秦宜智|布尔什维克|某匪|图匪本色|妓女合法化|妓院合法化|垃圾制度|郭嘉+灭亡|党中央拼|垃圾国家|奴隶主|国必亡|某胖|习老虎拼|领导的亲属+股东|肉包+亲信|夶|八千万头魔鬼|图样图森破+大佬|又阝家|窑洞|刁夫妇|蛙集团|人治多于法制|公禅档|倒挡|习乌龟|龷+匪|小背篓|某大见过这种大场面|拜猪教|当今皇后|穆族|绿袍|秦川大地|isis+人类的希望|无耻组织|蝗汉|对内强力围吻|权力自肥|人类的毒瘤|吻宫团|给曰本人管理|我军擅长意淫|gc档|当今的媛|十八子|中堂|氵一丨一|老mao|大大+强强|猫帝|zn海|傻子李|军队改革|军改|网军|军队有偿服务|军委改革|军事司法体制|军委多部门制|军民融合|国防信息化|疆毒|毛爷爷|粪坑国|马烈|反腐+作秀|cpc|浆糊时期|镰锤教|恶习难除|中国军情揭秘|七军区变四战区|王宁|公安部长享乐|谴责+公安部长|追责+公安部长|公安部长+替罪羊|公安部长+回学校学习|公安部长谢罪自杀|公安部长+冤案|公安部长+公安经历|公安部长+情人|蟑螂经济学|奇山|铲除恶习|恶习难改|恶习该死|吐肥|轮流坐庄|薄谷太太|匪类|老供|花千芳|",
  function () {
    "use strict";

    function t() {
      e(), n()
    }

    function e() {
      navigator.userAgent.indexOf("weibo") > -1 && (r.isWeibo = !0, $("body").addClass("jp")),
      NewsAppClient.isNewsApp() && navigator.userAgent.indexOf("Android") > -1 && $("body").addClass("jp"),
        r.preLoading(0),
        r.audioAutoPlay("bgm");
      var t = $("body").height();
      $(".common-container").height(t), t >= 1380 ? $("body").addClass("ipx") : t < 1180 && $("body").addClass("scale"),
        r.audios = {
        answerM: $(".answerM")[0],
        coverM: $(".coverM")[0],
        chooseM: $(".chooseM")[0],
        bgm: $(".bgm")[0]
      }
    }

    function n() {
      //点击播放背景音乐
      $("body").one("touchstart", function (t) {
        $(".bgm")[0].play()
      })

      $(".cover-btn").on("click", function () {
        r.audios.coverM.play()
        $(".choose").addClass("cur")
        $(".loading").removeClass("cur")
        $(".cover").removeClass("cur")
      })

      //选择一种人设
      $(".choose-wrap .peo").on("click", function () {
        r.audios.chooseM.currentTime = 0
        r.audios.chooseM.play()
        $(".choose .choose-btn").addClass("cur")
        $(this).hasClass("cur") ||
        (r.currentIdx = $(this).index() + 1, $(".choose-wrap .peo").removeClass("cur"), $(this).addClass("cur"))
      })

      $(".choose-btn").on("click", function () {
        r.currentIdx > 0 && (r.audios.bgm.pause(), $(".choose").removeClass("cur"), $(".input").addClass("input" + r.currentIdx), $(".result").addClass("peo" + r.currentIdx), r.isWeibo ? ($(".answer").addClass("cur"), r.curAnswer = $(".answer .answer" + r.currentIdx), r.curAnswer.addClass("cur"), $(".weibo-videos").addClass("cur"), $(".weibo-videos .vs" + r.currentIdx).addClass("cur"), $(".weibo-videos .vs" + r.currentIdx + "-1").addClass("cur"), r.curVideo = $(".weibo-videos .video" + r.currentIdx + "-1")[0], r.curVideo.play(), r.weiboVideoEnd(1)) : ($(".video-wrap").addClass("cur"), $(".video-wrap .v" + r.currentIdx).addClass("cur"), $(".answer").addClass("cur"), r.curAnswer = $(".answer .answer" + r.currentIdx), r.curVideo = $(".video-wrap .video" + r.currentIdx)[0], r.curAnswer.addClass("cur"), r.curVideo.play(), r.setInt(), r.videoEnd()))
      }), $(".answer .btn-wrap").on("click", function () {
        if (r.isWeibo) {
          r.audios.answerM.currentTime = 0, r.audios.answerM.play();
          var t = $(this), e = t.parents(".q-con"), n = e.index();
          t.hasClass("yes") && r.answerResult++, t.addClass("cur"), n <= 3 && (r.curVideo.play(), r.weiboVideoEnd(n + 2)), e.addClass("end"), $(".answer .answer" + r.currentIdx + " .q" + (n + 1)).removeClass("cur weibo end"), n <= 3 ? $(".weibo-videos .vs" + r.currentIdx + "-" + (n + 2)).addClass("cur") : ($(".input").addClass("weibo end"), $(".answer").removeClass("cur"), r.answerResult <= 2 ? r.resultClass = 1 : 3 === r.answerResult || 4 === r.answerResult ? r.resultClass = 2 : 5 === r.answerResult && (r.resultClass = 3), $(".result").addClass("result" + r.resultClass))
        } else {
          if (!r.curVideo.paused) return;
          r.audios.answerM.currentTime = 0, r.audios.answerM.play();
          var t = $(this), e = t.parents(".q-con"), n = e.index();
          t.hasClass("yes") && r.answerResult++, t.addClass("cur"), r.curVideo.play(), e.addClass("end"), setTimeout(function () {
            $(".answer .answer" + r.currentIdx + " .q" + (n + 1)).removeClass("cur end")
          }, 2e3), setTimeout(function () {
            r.setInt()
          }, 400)
        }
      }), $(".input input")[0].onfocus = function () {
        $(".input .input-line").css("display", "none")
      }, $(".input input")[0].onblur = function () {
        $(".input input").val().trim() || $(".input .input-line").css("display", "block")
      }, $(".input-wrap input").keydown(function (t) {
        13 === t.keyCode && ($(".input input").blur(), r.toWait())
      }), $(".input-wrap .input-btn").on("click", function (t) {
        $(window).height();
        r.audios.bgm.play(), r.toWait()
      }), $(".result .v-btn").on("click", function () {
        $(".heart-page").addClass("cur"), r.audios.bgm.pause()
      }), $(".heart-page .play-btn").on("click", function () {
        $(this).hasClass("played") ? ($(".heart-page video")[0].pause(), $(this).removeClass("played")) : ($(".heart-page video")[0].play(), $(this).addClass("played"))
      }), $(".heart-page .heart-close").on("click", function () {
        r.audios.bgm.play(), $(".heart-page video")[0].pause(), $(".heart-page .play-btn").removeClass("played"), $(".heart-page").removeClass("cur")
      }), $(".heart-page video")[0].addEventListener("ended", function () {
        $(".heart-page video")[0].currentTime = 0, $(".heart-page .play-btn").removeClass("played")
      })
    }

    var r = {
      aTime: {
        v1: [12, 23.78, 34.78, 45.56, 57.35, 59.66],
        v2: [11.32, 20.32, 36, 46.8, 57.8, 59.5],
        v3: [13.68, 27.56, 42.16, 55.2, 68.96, 71.62],
        v4: [14.32, 31.36, 46.36, 59.36, 72.52, 75.22]
      },
      vTime: {
        v1: [13.8, 25.6, 36.4, 47.2, 59],
        v2: [12, 21.6, 37, 47.6, 58.5],
        v3: [15.52, 29.36, 43.96, 56.96, 70.72],
        v4: [16.4, 33.04, 48.4, 61.44, 74.6]
      },
      currentIdx: 0,
      imgBefore: "//static.ws.126.net/163/f2e/media/power_to_go2018/",
      version: Date.now(),
      preLoadingImgData: ["img/loading1.png", "img/loading2-1.png", "img/poster1.jpg", "img/poster2.jpg", "img/poster3.jpg", "img/poster4.jpg", "img/weibo/bg1.png", "img/weibo/bg2.png", "img/weibo/bg3.png", "img/weibo/bg4.png", "img/heart-poster.jpg", "img/logo4.png", "img/icon.png", "img/bg.jpg", "img/cover-bg.png", "img/cover-bg-mask.png", "img/cover-peo.png", "img/ren.png", "img/cover-text.png", "img/cover-tit.png", "img/cover-btn1.png", "img/cover-btn-kuang.png", "img/bg.jpg", "img/choose-bg.jpg", "img/choose-tit.png", "img/no-choose-bg.png", "img/choose-mask.png", "img/p-tits.png", "img/has-choose-bg.png", "img/p1.png", "img/choose1.png", "img/p2.png", "img/choose2.png", "img/p3.png", "img/guang3.png", "img/choose3.png", "img/p4.png", "img/choose4.png", "img/choose-btn1.png", "img/choose-btn-kuang.png", "img/q-num1.png", "img/q-num2.png", "img/input-bg1.png", "img/input1.png", "img/input-bg2.png", "img/input2.png", "img/input-bg3.png", "img/input3.png", "img/input-bg1.png", "img/input4.png", "img/jisuan1.png", "img/yinzhang1.png", "img/save-tips.png", "img/save-tips2.png", "img/end-logo4.png", "img/end-subtits1.png", "img/end-subtits2.png", "img/end-subtits3.png", "img/end-subtits4.png", "img/end-tit1.png", "img/end-tit2.png", "img/end-tit3.png", "img/end-tit4.png", "img/end-texts1.png", "img/end-texts2.png", "img/end-texts3.png", "img/end-texts4.png", "img/end-pics1.png", "img/end-pics2.png", "img/end-pics3.png", "img/end-pics4.png", "img/end-pic-ts1.png", "img/end-pic-ts2.png", "img/end-pic-ts3.png", "img/end-pic-ts4.png", "img/ewm2.png", "img/heart-bg.jpg", "img/heart-text1.png", "img/heart-video-bg.png", "img/play-btn.png", "img/heart-btn.png", "img/heart-close.png", "img/heart-logo1.png", "img/img1-1.jpg", "img/img1-2.jpg", "img/img1-3.jpg", "img/img2-1.jpg", "img/img2-2.jpg", "img/img2-3.jpg", "img/img3-1.jpg", "img/img3-2.jpg", "img/img3-3.jpg", "img/img4-1.jpg", "img/img4-2.jpg", "img/img4-3.jpg"],
      loadCount: 0,
      timer: null,
      curVideo: null,
      curAnswer: null,
      answerResult: 0,
      username: "",
      resultSrc: "",
      isPaused: !1,
      resultClass: 0,
      isWeibo: !1,
      answerAllNum: 0,
      preLoading: function (t) {
        var e = new Image;
        e.src = r.imgBefore + r.preLoadingImgData[t],
          r.loadCount++;
        var n = parseInt(r.loadCount / r.preLoadingImgData.length * 100) + "%";
        $(".loading .loading-percent").html(n),
        r.loadCount === r.preLoadingImgData.length && ($(".cover").addClass("cur"),
          $(".loading .loading1").addClass("hidden"),
          setTimeout(function () {
            $(".cover").addClass("loaded")
          }, 3300)), $("#loading_img").append($(e));
        var i = null;
        i = setInterval(function () {
          $(e) && ($("#loading_img").html(""), clearInterval(i), r.loadCount < r.preLoadingImgData.length && r.preLoading(r.loadCount))
        }, 100)
      },
      audioAutoPlay: function (t) {
        var e = document.getElementById(t),
          n = function () {
            document.removeEventListener("WeixinJSBridgeReady", n),
              document.removeEventListener("YixinJSBridgeReady", n),
              e.play()
          };
        e.play(),
        window.WeixinJSBridge && e.play(),
          "undefined" == typeof WeixinJSBridge ?
            document.addEventListener("WeixinJSBridgeReady", n, !1) :
            (document.addEventListener("YixinJSBridgeReady", n, !1), e.play())
      },
      setInt: function () {
        var t = r.aTime["v" + r.currentIdx], e = r.vTime["v" + r.currentIdx];
        r.timer = setInterval(function () {
          var n = r.curVideo.currentTime;
          n >= t[0] && n < t[0] + .15 ? $(".answer .answer" + r.currentIdx + " .q1").addClass("cur") : n >= t[1] && n < t[1] + .15 ? $(".answer .answer" + r.currentIdx + " .q2").addClass("cur") : n >= t[2] && n < t[2] + .15 ? $(".answer .answer" + r.currentIdx + " .q3").addClass("cur") : n >= t[3] && n < t[3] + .15 ? $(".answer .answer" + r.currentIdx + " .q4").addClass("cur") : n >= t[4] && n < t[4] + .15 ? $(".answer .answer" + r.currentIdx + " .q5").addClass("cur") : n >= t[5] && n < t[5] + .15 && ($(".input").addClass("cur"), $(".answer").removeClass("cur"), console.log(r.answerResult), r.answerResult <= 2 ? r.resultClass = 1 : 3 === r.answerResult || 4 === r.answerResult ? r.resultClass = 2 : 5 === r.answerResult && (r.resultClass = 3), $(".result").addClass("result" + r.resultClass)), n >= e[0] && n < e[0] + .2 ? (r.curVideo.pause(), r.clearInt()) : n >= e[1] && n < e[1] + .2 ? (r.curVideo.pause(), r.clearInt()) : n >= e[2] && n < e[2] + .2 ? (r.curVideo.pause(), r.clearInt()) : n >= e[3] && n < e[3] + .2 ? (r.curVideo.pause(), r.clearInt()) : n >= e[4] && n < e[4] + .2 && (r.curVideo.pause(), r.clearInt())
        }, 50)
      },
      clearInt: function () {
        clearInterval(r.timer)
      },
      weiboVideoEnd: function (t) {
        var e = t + 1, n = !1;
        r.curVideo.addEventListener("ended", function () {
          n || (n = !0, r.curVideo.remove(), $(".weibo-videos .vs" + r.currentIdx + "-" + t).removeClass("cur"), t <= 5 && $(".answer .answer" + r.currentIdx + " .q" + t).addClass("cur weibo"), e <= 5 && (r.curVideo = $(".weibo-videos .video" + r.currentIdx + "-" + e)[0], $(".weibo-videos .vs" + r.currentIdx + "-" + e).addClass("cur")))
        }), r.curVideo.addEventListener("pause", function () {
          n || (n = !0, r.curVideo.remove(), $(".weibo-videos .vs" + r.currentIdx + "-" + t).removeClass("cur"), t <= 5 && $(".answer .answer" + r.currentIdx + " .q" + t).addClass("cur weibo"), e <= 5 && (r.curVideo = $(".weibo-videos .video" + r.currentIdx + "-" + e)[0], $(".weibo-videos .vs" + r.currentIdx + "-" + e).addClass("cur")))
        })
      },
      videoEnd: function () {
        r.curVideo.addEventListener("ended", function () {
          clearInterval(r.timer), $(".input").addClass("end")
        })
      },
      createImg: function (t, e) {
        var n = document.getElementById("myCanvas"),
          i = n.getContext("2d"),
          o = new Image;
        o.crossOrigin = "anonymous",
          o.src = t,
          o.onload = function () {
            i.drawImage(o, 0, 0, 750, 1206),
              i.save(),
              i.font = "bold 30px Arial",
              i.textBaseline = "middle",
              i.textAlign = "left";

            var t = (i.measureText(e).width, 118), a = 70;
            i.fillStyle = "#000000", i.fillText(e, a, t),
              r.resultSrc = n.toDataURL(), $(".result-img img").attr("src", r.resultSrc)
          }
      },
      toWait: function () {
        $(".input-wrap input").blur();
        var t = $(".input-wrap input").val() || "我", e = new RegExp(window.NETEASE_KEYWORDS, "g");
        t = t.replace(e, ""), r.username = t, "" == t ? (alert("您的昵称含有敏感字，请重新输入昵称！"), $(".input-wrap input").val("")) : ($(".result .name").html(r.username), $(".wait").addClass("cur"), $(".input").removeClass("cur weibo"), $(r.curVideo).remove(), $(".video-wrap").removeClass("cur"), $(".weibo-videos").removeClass("cur"), r.createImg("//static.ws.126.net/163/f2e/media/power_to_go2018/img/img" + r.currentIdx + "-" + r.resultClass + ".jpg?" + r.version, r.username), r.toEnd())
      },
      toEnd: function () {
        setTimeout(function () {
          $(".result-img").addClass("cur"), $(".result").addClass("cur"), $(".wait").removeClass("cur")
        }, 3e3)
      }
    };
    $(t)
  }();
