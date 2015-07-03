!function (t) {
    jQuery.fn.menuzord = function (e) {
        function i(e) {
            "fade" == f.effect ? t(e).children(".dropdown, .megamenu").stop(!0, !0).delay(f.showDelay).fadeIn(f.showSpeed).addClass(f.animation) : t(e).children(".dropdown, .megamenu").stop(!0, !0).delay(f.showDelay).slideDown(f.showSpeed).addClass(f.animation)
        }

        function n(e) {
            "fade" == f.effect ? t(e).children(".dropdown, .megamenu").stop(!0, !0).delay(f.hideDelay).fadeOut(f.hideSpeed).removeClass(f.animation) : t(e).children(".dropdown, .megamenu").stop(!0, !0).delay(f.hideDelay).slideUp(f.hideSpeed).removeClass(f.animation), t(e).children(".dropdown, .megamenu").find(".dropdown, .megamenu").stop(!0, !0).delay(f.hideDelay).fadeOut(f.hideSpeed)
        }

        function s() {
            t(m).find(".dropdown, .megamenu").hide(0), navigator.userAgent.match(/Mobi/i) || window.navigator.msMaxTouchPoints > 0 || "click" == f.trigger ? (t(".menuzord-menu > li > a, .menuzord-menu ul.dropdown li a").bind("click touchstart", function (e) {
                return e.stopPropagation(), e.preventDefault(), t(this).parent("li").siblings("li").find(".dropdown, .megamenu").stop(!0, !0).fadeOut(300), "none" == t(this).siblings(".dropdown, .megamenu").css("display") ? (i(t(this).parent("li")), !1) : (n(t(this).parent("li")), void(window.location.href = t(this).attr("href")))
            }), t(document).bind("click.menu touchstart.menu", function (e) {
                0 == t(e.target).closest(".menuzord").length && t(".menuzord-menu").find(".dropdown, .megamenu").fadeOut(300)
            })) : t(g).bind("mouseenter", function () {
                i(this)
            }).bind("mouseleave", function () {
                n(this)
            })
        }

        function r() {
            t(m).find(".dropdown, .megamenu").hide(0), t(m).find(".indicator").each(function () {
                t(this).parent("a").siblings(".dropdown, .megamenu").length > 0 && t(this).bind("click", function (e) {
                    t(m).scrollTo({top: 45, left: 0}, 600), "A" == t(this).parent().prop("tagName") && e.preventDefault(), "none" == t(this).parent("a").siblings(".dropdown, .megamenu").css("display") ? (t(this).parent("a").siblings(".dropdown, .megamenu").delay(f.showDelay).slideDown(f.showSpeed), t(this).parent("a").parent("li").siblings("li").find(".dropdown, .megamenu").slideUp(f.hideSpeed)) : t(this).parent("a").siblings(".dropdown, .megamenu").slideUp(f.hideSpeed)
                })
            })
        }

        function o() {
            var e = t(m).children("li").children(".dropdown, .megamenu");
            if (t(window).innerWidth() > v)for (var i = t(_).outerWidth(!0), n = 0; n < e.length; n++)t(e[n]).parent("li").position().left + t(e[n]).outerWidth() > i ? t(e[n]).css("right", 0) : ((i == t(e[n]).outerWidth() || i - t(e[n]).outerWidth() < 20) && t(e[n]).css("left", 0), t(e[n]).parent("li").position().left + t(e[n]).outerWidth() < i && t(e[n]).css("right", "auto"))
        }

        function a() {
            t(m).hide(0), t(p).show(0).click(function () {
                "none" == t(m).css("display") ? t(m).slideDown(f.showSpeed) : t(m).slideUp(f.hideSpeed).find(".dropdown, .megamenu").hide(f.hideSpeed)
            })
        }

        function l() {
            t(m).show(0), t(p).hide(0)
        }

        function h() {
            t(_).find("li, a").unbind(), t(document).unbind("click.menu touchstart.menu")
        }

        function u() {
            function e(e) {
                var i = t(e).find(".menuzord-tabs-nav > li"), n = t(e).find(".menuzord-tabs-content");
                t(i).bind("click touchstart", function (e) {
                    e.stopPropagation(), e.preventDefault(), t(i).removeClass("active"), t(this).addClass("active"), t(n).hide(0), t(n[t(this).index()]).show(0)
                })
            }

            if (t(m).find(".menuzord-tabs").length > 0)for (var i = t(m).find(".menuzord-tabs"), n = 0; n < i.length; n++)e(i[n])
        }

        function d() {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        }

        function c() {
            if (o(), d() <= v && y > v && (h(), f.responsive ? (a(), r()) : s()), d() > v && v >= b && (h(), l(), s()), y = d(), b = d(), u(), /MSIE (\d+\.\d+);/.test(navigator.userAgent) && d() < v) {
                var e = new Number(RegExp.$1);
                8 == e && (t(p).hide(0), t(m).show(0), h(), s())
            }
        }

        var f;
        t.extend(f = {showSpeed: 300, hideSpeed: 300, trigger: "hover", showDelay: 0, hideDelay: 0, effect: "fade", align: "left", responsive: !0, animation: "none", indentChildren: !0, indicatorFirstLevel: "+", indicatorSecondLevel: "+", scrollable: !0, scrollableMaxHeight: 400}, e);
        var p, _ = t(this), m = t(_).children(".menuzord-menu"), g = t(m).find("li"), v = 768, y = 2e3, b = 200;
        t(m).children("li").children("a").each(function () {
            t(this).siblings(".dropdown, .megamenu").length > 0 && t(this).append("<span class='indicator'>" + f.indicatorFirstLevel + "</span>")
        }), t(m).find(".dropdown").children("li").children("a").each(function () {
            t(this).siblings(".dropdown").length > 0 && t(this).append("<span class='indicator'>" + f.indicatorSecondLevel + "</span>")
        }), "right" == f.align && t(m).addClass("menuzord-right"), f.indentChildren && t(m).addClass("menuzord-indented"), f.responsive && (t(_).addClass("menuzord-responsive").prepend("<a href='javascript:void(0)' class='showhide'><em></em><em></em><em></em></a>"), p = t(_).children(".showhide")), f.scrollable && f.responsive && t(m).css("max-height", f.scrollableMaxHeight).addClass("scrollable").append("<li class='scrollable-fix'></li>"), c(), t(window).resize(function () {
            c(), o()
        })
    }
}(jQuery), function (t) {
    "use strict";
    t(["jquery"], function (t) {
        function e(e) {
            return t.isFunction(e) || "object" == typeof e ? e : {top: e, left: e}
        }

        var i = t.scrollTo = function (e, i, n) {
            return t(window).scrollTo(e, i, n)
        };
        return i.defaults = {axis: "xy", duration: parseFloat(t.fn.jquery) >= 1.3 ? 0 : 1, limit: !0}, i.window = function (e) {
            return t(window)._scrollable()
        }, t.fn._scrollable = function () {
            return this.map(function () {
                var e = this, i = !e.nodeName || -1 != t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
                if (!i)return e;
                var n = (e.contentWindow || e).document || e.ownerDocument || e;
                return/webkit/i.test(navigator.userAgent) || "BackCompat" == n.compatMode ? n.body : n.documentElement
            })
        }, t.fn.scrollTo = function (n, s, r) {
            return"object" == typeof s && (r = s, s = 0), "function" == typeof r && (r = {onAfter: r}), "max" == n && (n = 9e9), r = t.extend({}, i.defaults, r), s = s || r.duration, r.queue = r.queue && r.axis.length > 1, r.queue && (s /= 2), r.offset = e(r.offset), r.over = e(r.over), this._scrollable().each(function () {
                function o(t) {
                    h.animate(d, s, r.easing, t && function () {
                        t.call(this, u, r)
                    })
                }

                if (null != n) {
                    var a, l = this, h = t(l), u = n, d = {}, c = h.is("html,body");
                    switch (typeof u) {
                        case"number":
                        case"string":
                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(u)) {
                                u = e(u);
                                break
                            }
                            if (u = c ? t(u) : t(u, this), !u.length)return;
                        case"object":
                            (u.is || u.style) && (a = (u = t(u)).offset())
                    }
                    var f = t.isFunction(r.offset) && r.offset(l, u) || r.offset;
                    t.each(r.axis.split(""), function (t, e) {
                        var n = "x" == e ? "Left" : "Top", s = n.toLowerCase(), p = "scroll" + n, _ = l[p], m = i.max(l, e);
                        if (a)d[p] = a[s] + (c ? 0 : _ - h.offset()[s]), r.margin && (d[p] -= parseInt(u.css("margin" + n)) || 0, d[p] -= parseInt(u.css("border" + n + "Width")) || 0), d[p] += f[s] || 0, r.over[s] && (d[p] += u["x" == e ? "width" : "height"]() * r.over[s]); else {
                            var g = u[s];
                            d[p] = g.slice && "%" == g.slice(-1) ? parseFloat(g) / 100 * m : g
                        }
                        r.limit && /^\d+$/.test(d[p]) && (d[p] = d[p] <= 0 ? 0 : Math.min(d[p], m)), !t && r.queue && (_ != d[p] && o(r.onAfterFirst), delete d[p])
                    }), o(r.onAfter)
                }
            }).end()
        }, i.max = function (e, i) {
            var n = "x" == i ? "Width" : "Height", s = "scroll" + n;
            if (!t(e).is("html,body"))return e[s] - t(e)[n.toLowerCase()]();
            var r = "client" + n, o = e.ownerDocument.documentElement, a = e.ownerDocument.body;
            return Math.max(o[s], a[s]) - Math.min(o[r], a[r])
        }, i
    })
}("function" == typeof define && define.amd ? define : function (t, e) {
    "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
});
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var n = function (t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]));
            return i
        }, s = function (t, e, n) {
            i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
        }, r = 1e-10, o = i._internals, a = o.isSelector, l = o.isArray, h = s.prototype = i.to({}, .1, {}), u = [];
        s.version = "1.16.1", h.constructor = s, h.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, h.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
        }, h.updateTo = function (t, e) {
            var n, s = this.ratio, r = this.vars.immediateRender || t.immediateRender;
            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (n in t)this.vars[n] = t[n];
            if (this._initted || r)if (e)this._initted = !1, r && this.render(0, !0, !0); else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var o = this._time;
                this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
            } else if (this._time > 0 || r) {
                this._initted = !1, this._init();
                for (var a, l = 1 / (1 - s), h = this._firstPT; h;)a = h.s + h.c, h.c *= l, h.s = a - h.c, h = h._next
            }
            return this
        }, h.render = function (t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var n, s, a, l, h, d, c, f, p = this._dirty ? this.totalDuration() : this._totalDuration, _ = this._time, m = this._totalTime, g = this._cycle, v = this._duration, y = this._rawPrevTime;
            if (t >= p ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === r) && y !== t && (i = !0, y > r && (s = "onReverseComplete")), this._rawPrevTime = f = !e || t || y === t ? t : r)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === v && y > 0) && (s = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = f = !e || t || y === t ? t : r)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = v + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / v, d = this._easeType, c = this._easePower, (1 === d || 3 === d && h >= .5) && (h = 1 - h), 3 === d && (h *= 2), 1 === c ? h *= h : 2 === c ? h *= h * h : 3 === c ? h *= h * h * h : 4 === c && (h *= h * h * h * h), this.ratio = 1 === d ? 1 - h : 2 === d ? h : .5 > this._time / v ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / v)), _ === this._time && !i && g === this._cycle)return void(m !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)));
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc)return;
                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))return this._time = _, this._totalTime = m, this._rawPrevTime = y, this._cycle = g, o.lazyTweens.push(this), void(this._lazy = [t, e]);
                this._time && !n ? this.ratio = this._ease.getRatio(this._time / v) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== _ && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u))), a = this._firstPT; a;)a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
            this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || u)), s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || u), 0 === v && this._rawPrevTime === r && f !== r && (this._rawPrevTime = 0))
        }, s.to = function (t, e, i) {
            return new s(t, e, i)
        }, s.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
        }, s.fromTo = function (t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n)
        }, s.staggerTo = s.allTo = function (t, e, r, o, h, d, c) {
            o = o || 0;
            var f, p, _, m, g = r.delay || 0, v = [], y = function () {
                r.onComplete && r.onComplete.apply(r.onCompleteScope || this, arguments), h.apply(c || this, d || u)
            };
            for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], 0 > o && (t = n(t), t.reverse(), o *= -1), f = t.length - 1, _ = 0; f >= _; _++) {
                p = {};
                for (m in r)p[m] = r[m];
                p.delay = g, _ === f && h && (p.onComplete = y), v[_] = new s(t[_], e, p), g += o
            }
            return v
        }, s.staggerFrom = s.allFrom = function (t, e, i, n, r, o, a) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, r, o, a)
        }, s.staggerFromTo = s.allFromTo = function (t, e, i, n, r, o, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, r, o, a, l)
        }, s.delayedCall = function (t, e, i, n, r) {
            return new s(e, 0, {delay: t, onComplete: e, onCompleteParams: i, onCompleteScope: n, onReverseComplete: e, onReverseCompleteParams: i, onReverseCompleteScope: n, immediateRender: !1, useFrames: r, overwrite: 0})
        }, s.set = function (t, e) {
            return new s(t, 0, e)
        }, s.isTweening = function (t) {
            return i.getTweensOf(t, !0).length > 0
        };
        var d = function (t, e) {
            for (var n = [], s = 0, r = t._first; r;)r instanceof i ? n[s++] = r : (e && (n[s++] = r), n = n.concat(d(r, e)), s = n.length), r = r._next;
            return n
        }, c = s.getAllTweens = function (e) {
            return d(t._rootTimeline, e).concat(d(t._rootFramesTimeline, e))
        };
        s.killAll = function (t, i, n, s) {
            null == i && (i = !0), null == n && (n = !0);
            var r, o, a, l = c(0 != s), h = l.length, u = i && n && s;
            for (a = 0; h > a; a++)o = l[a], (u || o instanceof e || (r = o.target === o.vars.onComplete) && n || i && !r) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
        }, s.killChildTweensOf = function (t, e) {
            if (null != t) {
                var r, h, u, d, c, f = o.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), l(t))for (d = t.length; --d > -1;)s.killChildTweensOf(t[d], e); else {
                    r = [];
                    for (u in f)for (h = f[u].target.parentNode; h;)h === t && (r = r.concat(f[u].tweens)), h = h.parentNode;
                    for (c = r.length, d = 0; c > d; d++)e && r[d].totalTime(r[d].totalDuration()), r[d]._enabled(!1, !1)
                }
            }
        };
        var f = function (t, i, n, s) {
            i = i !== !1, n = n !== !1, s = s !== !1;
            for (var r, o, a = c(s), l = i && n && s, h = a.length; --h > -1;)o = a[h], (l || o instanceof e || (r = o.target === o.vars.onComplete) && n || i && !r) && o.paused(t)
        };
        return s.pauseAll = function (t, e, i) {
            f(!0, t, e, i)
        }, s.resumeAll = function (t, e, i) {
            f(!1, t, e, i)
        }, s.globalTimeScale = function (e) {
            var n = t._rootTimeline, s = i.ticker.time;
            return arguments.length ? (e = e || r, n._startTime = s - (s - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, s = i.ticker.frame, n._startTime = s - (s - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
        }, h.progress = function (t) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, h.totalProgress = function (t) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }, h.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, h.duration = function (e) {
            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }, h.totalDuration = function (t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, h.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, h.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, h.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, s
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
        var n = function (t) {
            e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
            var i, n, s = this.vars;
            for (n in s)i = s[n], l(i) && -1 !== i.join("").indexOf("{self}") && (s[n] = this._swapSelfInParams(i));
            l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
        }, s = 1e-10, r = i._internals, o = n._internals = {}, a = r.isSelector, l = r.isArray, h = r.lazyTweens, u = r.lazyRender, d = [], c = _gsScope._gsDefine.globals, f = function (t) {
            var e, i = {};
            for (e in t)i[e] = t[e];
            return i
        }, p = o.pauseCallback = function (t, e, i, n) {
            var r, o = t._timeline, a = o._totalTime, l = t._startTime, h = 0 > t._rawPrevTime || 0 === t._rawPrevTime && o._reversed, u = h ? 0 : s, c = h ? s : 0;
            if (e || !this._forcingPlayhead) {
                for (o.pause(l), r = t._prev; r && r._startTime === l;)r._rawPrevTime = c, r = r._prev;
                for (r = t._next; r && r._startTime === l;)r._rawPrevTime = u, r = r._next;
                e && e.apply(n || o, i || d), (this._forcingPlayhead || !o._paused) && o.seek(a)
            }
        }, _ = function (t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]));
            return i
        }, m = n.prototype = new e;
        return n.version = "1.16.1", m.constructor = n, m.kill()._gc = m._forcingPlayhead = !1, m.to = function (t, e, n, s) {
            var r = n.repeat && c.TweenMax || i;
            return e ? this.add(new r(t, e, n), s) : this.set(t, n, s)
        }, m.from = function (t, e, n, s) {
            return this.add((n.repeat && c.TweenMax || i).from(t, e, n), s)
        }, m.fromTo = function (t, e, n, s, r) {
            var o = s.repeat && c.TweenMax || i;
            return e ? this.add(o.fromTo(t, e, n, s), r) : this.set(t, s, r)
        }, m.staggerTo = function (t, e, s, r, o, l, h, u) {
            var d, c = new n({onComplete: l, onCompleteParams: h, onCompleteScope: u, smoothChildTiming: this.smoothChildTiming});
            for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = _(t)), r = r || 0, 0 > r && (t = _(t), t.reverse(), r *= -1), d = 0; t.length > d; d++)s.startAt && (s.startAt = f(s.startAt)), c.to(t[d], e, f(s), d * r);
            return this.add(c, o)
        }, m.staggerFrom = function (t, e, i, n, s, r, o, a) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, s, r, o, a)
        }, m.staggerFromTo = function (t, e, i, n, s, r, o, a, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, s, r, o, a, l)
        }, m.call = function (t, e, n, s) {
            return this.add(i.delayedCall(0, t, e, n), s)
        }, m.set = function (t, e, n) {
            return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
        }, n.exportRoot = function (t, e) {
            t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var s, r, o = new n(t), a = o._timeline;
            for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, s = a._first; s;)r = s._next, e && s instanceof i && s.target === s.vars.onComplete || o.add(s, s._startTime - s._delay), s = r;
            return a.add(o, 0), o
        }, m.add = function (s, r, o, a) {
            var h, u, d, c, f, p;
            if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, s)), !(s instanceof t)) {
                if (s instanceof Array || s && s.push && l(s)) {
                    for (o = o || "normal", a = a || 0, h = r, u = s.length, d = 0; u > d; d++)l(c = s[d]) && (c = new n({tweens: c})), this.add(c, h), "string" != typeof c && "function" != typeof c && ("sequence" === o ? h = c._startTime + c.totalDuration() / c._timeScale : "start" === o && (c._startTime -= c.delay())), h += a;
                    return this._uncache(!0)
                }
                if ("string" == typeof s)return this.addLabel(s, r);
                if ("function" != typeof s)throw"Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                s = i.delayedCall(0, s)
            }
            if (e.prototype.add.call(this, s, r), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())for (f = this, p = f.rawTime() > s._startTime; f._timeline;)p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
            return this
        }, m.remove = function (e) {
            if (e instanceof t)return this._remove(e, !1);
            if (e instanceof Array || e && e.push && l(e)) {
                for (var i = e.length; --i > -1;)this.remove(e[i]);
                return this
            }
            return"string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }, m._remove = function (t, i) {
            e.prototype._remove.call(this, t, i);
            var n = this._last;
            return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, m.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, m.insert = m.insertMultiple = function (t, e, i, n) {
            return this.add(t, e || 0, i, n)
        }, m.appendMultiple = function (t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
        }, m.addLabel = function (t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this
        }, m.addPause = function (t, e, n, s) {
            var r = i.delayedCall(0, p, ["{self}", e, n, s], this);
            return r.data = "isPause", this.add(r, t)
        }, m.removeLabel = function (t) {
            return delete this._labels[t], this
        }, m.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }, m._parseTimeOrLabel = function (e, i, n, s) {
            var r;
            if (s instanceof t && s.timeline === this)this.remove(s); else if (s && (s instanceof Array || s.push && l(s)))for (r = s.length; --r > -1;)s[r]instanceof t && s[r].timeline === this && this.remove(s[r]);
            if ("string" == typeof i)return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e])null == e && (e = this.duration()); else {
                if (r = e.indexOf("="), -1 === r)return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1)), e = r > 1 ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, n) : this.duration()
            }
            return Number(e) + i
        }, m.seek = function (t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
        }, m.stop = function () {
            return this.paused(!0)
        }, m.gotoAndPlay = function (t, e) {
            return this.play(t, e)
        }, m.gotoAndStop = function (t, e) {
            return this.pause(t, e)
        }, m.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, r, o, a, l, c = this._dirty ? this.totalDuration() : this._totalDuration, f = this._time, p = this._startTime, _ = this._timeScale, m = this._paused;
            if (t >= c)this._totalTime = this._time = c, this._reversed || this._hasPausedChild() || (r = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === s) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > s && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, t = c + 1e-4; else if (1e-7 > t)if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== s && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", r = this._reversed), 0 > t)this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t; else {
                if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, 0 === t && r)for (n = this._first; n && 0 === n._startTime;)n._duration || (r = !1), n = n._next;
                t = 0, this._initted || (l = !0)
            } else this._totalTime = this._time = this._rawPrevTime = t;
            if (this._time !== f && this._first || i || l) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || d)), this._time >= f)for (n = this._first; n && (o = n._next, !this._paused || m);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o; else for (n = this._last; n && (o = n._prev, !this._paused || m);)(n._active || f >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                this._onUpdate && (e || (h.length && u(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || d))), a && (this._gc || (p === this._startTime || _ !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (r && (h.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || d)))
            }
        }, m._hasPausedChild = function () {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof n && t._hasPausedChild())return!0;
                t = t._next
            }
            return!1
        }, m.getChildren = function (t, e, n, s) {
            s = s || -9999999999;
            for (var r = [], o = this._first, a = 0; o;)s > o._startTime || (o instanceof i ? e !== !1 && (r[a++] = o) : (n !== !1 && (r[a++] = o), t !== !1 && (r = r.concat(o.getChildren(!0, e, n)), a = r.length))), o = o._next;
            return r
        }, m.getTweensOf = function (t, e) {
            var n, s, r = this._gc, o = [], a = 0;
            for (r && this._enabled(!0, !0), n = i.getTweensOf(t), s = n.length; --s > -1;)(n[s].timeline === this || e && this._contains(n[s])) && (o[a++] = n[s]);
            return r && this._enabled(!1, !0), o
        }, m.recent = function () {
            return this._recent
        }, m._contains = function (t) {
            for (var e = t.timeline; e;) {
                if (e === this)return!0;
                e = e.timeline
            }
            return!1
        }, m.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var n, s = this._first, r = this._labels; s;)s._startTime >= i && (s._startTime += t), s = s._next;
            if (e)for (n in r)r[n] >= i && (r[n] += t);
            return this._uncache(!0)
        }, m._kill = function (t, e) {
            if (!t && !e)return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, s = !1; --n > -1;)i[n]._kill(t, e) && (s = !0);
            return s
        }, m.clear = function (t) {
            var e = this.getChildren(!1, !0, !0), i = e.length;
            for (this._time = this._totalTime = 0; --i > -1;)e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}), this._uncache(!0)
        }, m.invalidate = function () {
            for (var e = this._first; e;)e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, m._enabled = function (t, i) {
            if (t === this._gc)for (var n = this._first; n;)n._enabled(t, !0), n = n._next;
            return e.prototype._enabled.call(this, t, i)
        }, m.totalTime = function () {
            this._forcingPlayhead = !0;
            var e = t.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, e
        }, m.duration = function (t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, m.totalDuration = function (t) {
            if (!arguments.length) {
                if (this._dirty) {
                    for (var e, i, n = 0, s = this._last, r = 999999999999; s;)e = s._prev, s._dirty && s.totalDuration(), s._startTime > r && this._sortChildren && !s._paused ? this.add(s, s._startTime - s._delay) : r = s._startTime, 0 > s._startTime && !s._paused && (n -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale), this.shiftChildren(-s._startTime, !1, -9999999999), r = 0), i = s._startTime + s._totalDuration / s._timeScale, i > n && (n = i), s = e;
                    this._duration = this._totalDuration = n, this._dirty = !1
                }
                return this._totalDuration
            }
            return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
        }, m.paused = function (e) {
            if (!e)for (var i = this._first, n = this._time; i;)i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
            return t.prototype.paused.apply(this, arguments)
        }, m.usesFrames = function () {
            for (var e = this._timeline; e._timeline;)e = e._timeline;
            return e === t._rootFramesTimeline
        }, m.rawTime = function () {
            return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, n
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
        var n = function (e) {
            t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
        }, s = 1e-10, r = [], o = e._internals, a = o.lazyTweens, l = o.lazyRender, h = new i(null, null, 1, 0), u = n.prototype = new t;
        return u.constructor = n, u.kill()._gc = !1, n.version = "1.16.1", u.invalidate = function () {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
        }, u.addCallback = function (t, i, n, s) {
            return this.add(e.delayedCall(0, t, n, s), i)
        }, u.removeCallback = function (t, e) {
            if (t)if (null == e)this._kill(null, t); else for (var i = this.getTweensOf(t, !1), n = i.length, s = this._parseTimeOrLabel(e); --n > -1;)i[n]._startTime === s && i[n]._enabled(!1, !1);
            return this
        }, u.removePause = function (e) {
            return this.removeCallback(t._internals.pauseCallback, e)
        }, u.tweenTo = function (t, i) {
            i = i || {};
            var n, s, o, a = {ease: h, useFrames: this.usesFrames(), immediateRender: !1};
            for (s in i)a[s] = i[s];
            return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, o = new e(this, n, a), a.onStart = function () {
                o.target.paused(!0), o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || o, i.onStartParams || r)
            }, o
        }, u.tweenFromTo = function (t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {onComplete: this.seek, onCompleteParams: [t], onCompleteScope: this}, i.immediateRender = i.immediateRender !== !1;
            var n = this.tweenTo(e, i);
            return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
        }, u.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n, o, h, u, d, c, f = this._dirty ? this.totalDuration() : this._totalDuration, p = this._duration, _ = this._time, m = this._totalTime, g = this._startTime, v = this._timeScale, y = this._rawPrevTime, b = this._paused, w = this._cycle;
            if (t >= f)this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, u = "onComplete", d = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > y || y === s) && y !== t && this._first && (d = !0, y > s && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : s, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = p, t = p + 1e-4); else if (1e-7 > t)if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== _ || 0 === p && y !== s && (y > 0 || 0 > t && y >= 0) && !this._locked) && (u = "onReverseComplete", o = this._reversed), 0 > t)this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (d = o = !0, u = "onReverseComplete") : y >= 0 && this._first && (d = !0), this._rawPrevTime = t; else {
                if (this._rawPrevTime = p || !e || t || this._rawPrevTime === t ? t : s, 0 === t && o)for (n = this._first; n && 0 === n._startTime;)n._duration || (o = !1), n = n._next;
                t = 0, this._initted || (d = !0)
            } else 0 === p && 0 > y && (d = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (c = p + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, t = p + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time));
            if (this._cycle !== w && !this._locked) {
                var x = this._yoyo && 0 !== (1 & w), T = x === (this._yoyo && 0 !== (1 & this._cycle)), S = this._totalTime, P = this._cycle, k = this._rawPrevTime, C = this._time;
                if (this._totalTime = w * p, w > this._cycle ? x = !x : this._totalTime += p, this._time = _, this._rawPrevTime = 0 === p ? y - 1e-4 : y, this._cycle = w, this._locked = !0, _ = x ? 0 : p, this.render(_, e, 0 === p), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || r), T && (_ = x ? p + 1e-4 : -1e-4, this.render(_, !0, !1)), this._locked = !1, this._paused && !b)return;
                this._time = C, this._totalTime = S, this._cycle = P, this._rawPrevTime = k
            }
            if (!(this._time !== _ && this._first || i || d))return void(m !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)));
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0), 0 === m && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || r)), this._time >= _)for (n = this._first; n && (h = n._next, !this._paused || b);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = h; else for (n = this._last; n && (h = n._prev, !this._paused || b);)(n._active || _ >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = h;
            this._onUpdate && (e || (a.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r))),
                u && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (o && (a.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this.vars[u].apply(this.vars[u + "Scope"] || this, this.vars[u + "Params"] || r)))
        }, u.getActive = function (t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var n, s, r = [], o = this.getChildren(t, e, i), a = 0, l = o.length;
            for (n = 0; l > n; n++)s = o[n], s.isActive() && (r[a++] = s);
            return r
        }, u.getLabelAfter = function (t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), n = i.length;
            for (e = 0; n > e; e++)if (i[e].time > t)return i[e].name;
            return null
        }, u.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1;)if (t > e[i].time)return e[i].name;
            return null
        }, u.getLabelsArray = function () {
            var t, e = [], i = 0;
            for (t in this._labels)e[i++] = {time: this._labels[t], name: t};
            return e.sort(function (t, e) {
                return t.time - e.time
            }), e
        }, u.progress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, u.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, u.totalDuration = function (e) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, u.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, u.repeat = function (t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, u.repeatDelay = function (t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, u.yoyo = function (t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, u.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }, n
    }, !0), function () {
        var t = 180 / Math.PI, e = [], i = [], n = [], s = {}, r = _gsScope._gsDefine.globals, o = function (t, e, i, n) {
            this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
        }, a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", l = function (t, e, i, n) {
            var s = {a: t}, r = {}, o = {}, a = {c: n}, l = (t + e) / 2, h = (e + i) / 2, u = (i + n) / 2, d = (l + h) / 2, c = (h + u) / 2, f = (c - d) / 8;
            return s.b = l + (t - l) / 4, r.b = d + f, s.c = r.a = (s.b + r.b) / 2, r.c = o.a = (d + c) / 2, o.b = c - f, a.b = u + (n - u) / 4, o.c = a.a = (o.b + a.b) / 2, [s, r, o, a]
        }, h = function (t, s, r, o, a) {
            var h, u, d, c, f, p, _, m, g, v, y, b, w, x = t.length - 1, T = 0, S = t[0].a;
            for (h = 0; x > h; h++)f = t[T], u = f.a, d = f.d, c = t[T + 1].d, a ? (y = e[h], b = i[h], w = .25 * (b + y) * s / (o ? .5 : n[h] || .5), p = d - (d - u) * (o ? .5 * s : 0 !== y ? w / y : 0), _ = d + (c - d) * (o ? .5 * s : 0 !== b ? w / b : 0), m = d - (p + ((_ - p) * (3 * y / (y + b) + .5) / 4 || 0))) : (p = d - .5 * (d - u) * s, _ = d + .5 * (c - d) * s, m = d - (p + _) / 2), p += m, _ += m, f.c = g = p, f.b = 0 !== h ? S : S = f.a + .6 * (f.c - f.a), f.da = d - u, f.ca = g - u, f.ba = S - u, r ? (v = l(u, S, g, d), t.splice(T, 1, v[0], v[1], v[2], v[3]), T += 4) : T++, S = _;
            f = t[T], f.b = S, f.c = S + .4 * (f.d - S), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = S - f.a, r && (v = l(f.a, S, f.c, f.d), t.splice(T, 1, v[0], v[1], v[2], v[3]))
        }, u = function (t, n, s, r) {
            var a, l, h, u, d, c, f = [];
            if (r)for (t = [r].concat(t), l = t.length; --l > -1;)"string" == typeof(c = t[l][n]) && "=" === c.charAt(1) && (t[l][n] = r[n] + Number(c.charAt(0) + c.substr(2)));
            if (a = t.length - 2, 0 > a)return f[0] = new o(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n]), f;
            for (l = 0; a > l; l++)h = t[l][n], u = t[l + 1][n], f[l] = new o(h, 0, 0, u), s && (d = t[l + 2][n], e[l] = (e[l] || 0) + (u - h) * (u - h), i[l] = (i[l] || 0) + (d - u) * (d - u));
            return f[l] = new o(t[l][n], 0, 0, t[l + 1][n]), f
        }, d = function (t, r, o, l, d, c) {
            var f, p, _, m, g, v, y, b, w = {}, x = [], T = c || t[0];
            d = "string" == typeof d ? "," + d + "," : a, null == r && (r = 1);
            for (p in t[0])x.push(p);
            if (t.length > 1) {
                for (b = t[t.length - 1], y = !0, f = x.length; --f > -1;)if (p = x[f], Math.abs(T[p] - b[p]) > .05) {
                    y = !1;
                    break
                }
                y && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3])
            }
            for (e.length = i.length = n.length = 0, f = x.length; --f > -1;)p = x[f], s[p] = -1 !== d.indexOf("," + p + ","), w[p] = u(t, p, s[p], c);
            for (f = e.length; --f > -1;)e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
            if (!l) {
                for (f = x.length; --f > -1;)if (s[p])for (_ = w[x[f]], v = _.length - 1, m = 0; v > m; m++)g = _[m + 1].da / i[m] + _[m].da / e[m], n[m] = (n[m] || 0) + g * g;
                for (f = n.length; --f > -1;)n[f] = Math.sqrt(n[f])
            }
            for (f = x.length, m = o ? 4 : 1; --f > -1;)p = x[f], _ = w[p], h(_, r, o, l, s[p]), y && (_.splice(0, m), _.splice(_.length - m, m));
            return w
        }, c = function (t, e, i) {
            e = e || "soft";
            var n, s, r, a, l, h, u, d, c, f, p, _ = {}, m = "cubic" === e ? 3 : 2, g = "soft" === e, v = [];
            if (g && i && (t = [i].concat(t)), null == t || m + 1 > t.length)throw"invalid Bezier data";
            for (c in t[0])v.push(c);
            for (h = v.length; --h > -1;) {
                for (c = v[h], _[c] = l = [], f = 0, d = t.length, u = 0; d > u; u++)n = null == i ? t[u][c] : "string" == typeof(p = t[u][c]) && "=" === p.charAt(1) ? i[c] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && u > 1 && d - 1 > u && (l[f++] = (n + l[f - 2]) / 2), l[f++] = n;
                for (d = f - m + 1, f = 0, u = 0; d > u; u += m)n = l[u], s = l[u + 1], r = l[u + 2], a = 2 === m ? 0 : l[u + 3], l[f++] = p = 3 === m ? new o(n, s, r, a) : new o(n, (2 * s + n) / 3, (2 * s + r) / 3, r);
                l.length = f
            }
            return _
        }, f = function (t, e, i) {
            for (var n, s, r, o, a, l, h, u, d, c, f, p = 1 / i, _ = t.length; --_ > -1;)for (c = t[_], r = c.a, o = c.d - r, a = c.c - r, l = c.b - r, n = s = 0, u = 1; i >= u; u++)h = p * u, d = 1 - h, n = s - (s = (h * h * o + 3 * d * (h * a + d * l)) * h), f = _ * i + u - 1, e[f] = (e[f] || 0) + n * n
        }, p = function (t, e) {
            e = e >> 0 || 6;
            var i, n, s, r, o = [], a = [], l = 0, h = 0, u = e - 1, d = [], c = [];
            for (i in t)f(t[i], o, e);
            for (s = o.length, n = 0; s > n; n++)l += Math.sqrt(o[n]), r = n % e, c[r] = l, r === u && (h += l, r = n / e >> 0, d[r] = c, a[r] = h, l = 0, c = []);
            return{length: h, lengths: a, segments: d}
        }, _ = _gsScope._gsDefine.plugin({propName: "bezier", priority: -1, version: "1.3.4", API: 2, global: !0, init: function (t, e, i) {
            this._target = t, e instanceof Array && (e = {values: e}), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
            var n, s, r, o, a, l = e.values || [], h = {}, u = l[0], f = e.autoRotate || i.vars.orientToBezier;
            this._autoRotate = f ? f instanceof Array ? f : [
                ["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
            ] : null;
            for (n in u)this._props.push(n);
            for (r = this._props.length; --r > -1;)n = this._props[r], this._overwriteProps.push(n), s = this._func[n] = "function" == typeof t[n], h[n] = s ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || h[n] !== l[0][n] && (a = h);
            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? d(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : c(l, e.type, h), this._segCount = this._beziers[n].length, this._timeRes) {
                var _ = p(this._beziers, this._timeRes);
                this._length = _.length, this._lengths = _.lengths, this._segments = _.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
            }
            if (f = this._autoRotate)for (this._initialRotations = [], f[0]instanceof Array || (this._autoRotate = f = [f]), r = f.length; --r > -1;) {
                for (o = 0; 3 > o; o++)n = f[r][o], this._func[n] = "function" == typeof t[n] ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;
                n = f[r][2], this._initialRotations[r] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
            }
            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
        }, set: function (e) {
            var i, n, s, r, o, a, l, h, u, d, c = this._segCount, f = this._func, p = this._target, _ = e !== this._startRatio;
            if (this._timeRes) {
                if (u = this._lengths, d = this._curSeg, e *= this._length, s = this._li, e > this._l2 && c - 1 > s) {
                    for (h = c - 1; h > s && e >= (this._l2 = u[++s]););
                    this._l1 = u[s - 1], this._li = s, this._curSeg = d = this._segments[s], this._s2 = d[this._s1 = this._si = 0]
                } else if (this._l1 > e && s > 0) {
                    for (; s > 0 && (this._l1 = u[--s]) >= e;);
                    0 === s && this._l1 > e ? this._l1 = 0 : s++, this._l2 = u[s], this._li = s, this._curSeg = d = this._segments[s], this._s1 = d[(this._si = d.length - 1) - 1] || 0, this._s2 = d[this._si]
                }
                if (i = s, e -= this._l1, s = this._si, e > this._s2 && d.length - 1 > s) {
                    for (h = d.length - 1; h > s && e >= (this._s2 = d[++s]););
                    this._s1 = d[s - 1], this._si = s
                } else if (this._s1 > e && s > 0) {
                    for (; s > 0 && (this._s1 = d[--s]) >= e;);
                    0 === s && this._s1 > e ? this._s1 = 0 : s++, this._s2 = d[s], this._si = s
                }
                a = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec
            } else i = 0 > e ? 0 : e >= 1 ? c - 1 : c * e >> 0, a = (e - i * (1 / c)) * c;
            for (n = 1 - a, s = this._props.length; --s > -1;)r = this._props[s], o = this._beziers[r][i], l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._round[r] && (l = Math.round(l)), f[r] ? p[r](l) : p[r] = l;
            if (this._autoRotate) {
                var m, g, v, y, b, w, x, T = this._autoRotate;
                for (s = T.length; --s > -1;)r = T[s][2], w = T[s][3] || 0, x = T[s][4] === !0 ? 1 : t, o = this._beziers[T[s][0]], m = this._beziers[T[s][1]], o && m && (o = o[i], m = m[i], g = o.a + (o.b - o.a) * a, y = o.b + (o.c - o.b) * a, g += (y - g) * a, y += (o.c + (o.d - o.c) * a - y) * a, v = m.a + (m.b - m.a) * a, b = m.b + (m.c - m.b) * a, v += (b - v) * a, b += (m.c + (m.d - m.c) * a - b) * a, l = _ ? Math.atan2(b - v, y - g) * x + w : this._initialRotations[s], f[r] ? p[r](l) : p[r] = l)
            }
        }}), m = _.prototype;
        _.bezierThrough = d, _.cubicToQuadratic = l, _._autoCSS = !0, _.quadraticToCubic = function (t, e, i) {
            return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
        }, _._cssRegister = function () {
            var t = r.CSSPlugin;
            if (t) {
                var e = t._internals, i = e._parseToProxy, n = e._setPluginRatio, s = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {parser: function (t, e, r, o, a, l) {
                    e instanceof Array && (e = {values: e}), l = new _;
                    var h, u, d, c = e.values, f = c.length - 1, p = [], m = {};
                    if (0 > f)return a;
                    for (h = 0; f >= h; h++)d = i(t, c[h], o, a, l, f !== h), p[h] = d.end;
                    for (u in e)m[u] = e[u];
                    return m.values = p, a = new s(t, "bezier", 0, 0, d.pt, 2), a.data = d, a.plugin = l, a.setRatio = n, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != d.end.left ? [
                        ["left", "top", "rotation", h, !1]
                    ] : null != d.end.x ? [
                        ["x", "y", "rotation", h, !1]
                    ] : !1), m.autoRotate && (o._transform || o._enableTransforms(!1), d.autoRotate = o._target._gsTransform), l._onInitTween(d.proxy, m, o._tween), a
                }})
            }
        }, m._roundProps = function (t, e) {
            for (var i = this._overwriteProps, n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
        }, m._kill = function (t) {
            var e, i, n = this._props;
            for (e in this._beziers)if (e in t)for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;)n[i] === e && n.splice(i, 1);
            return this._super._kill.call(this, t)
        }
    }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
        var i, n, s, r, o = function () {
            t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
        }, a = _gsScope._gsDefine.globals, l = {}, h = o.prototype = new t("css");
        h.constructor = o, o.version = "1.16.1", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", h = "px", o.suffixMap = {top: h, right: h, bottom: h, left: h, width: h, height: h, fontSize: h, padding: h, margin: h, perspective: h, lineHeight: ""};
        var u, d, c, f, p, _, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g, g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, b = /(?:\d|\-|\+|=|#|\.)*/g, w = /opacity *= *([^)]*)/i, x = /opacity:([^;]*)/i, T = /alpha\(opacity *=.+?\)/i, S = /^(rgb|hsl)/, P = /([A-Z])/g, k = /-([a-z])/gi, C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, A = function (t, e) {
            return e.toUpperCase()
        }, O = /(?:Left|Right|Width)/i, I = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, F = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, R = /,(?=[^\)]*(?:\(|$))/gi, M = Math.PI / 180, L = 180 / Math.PI, D = {}, z = document, E = function (t) {
            return z.createElementNS ? z.createElementNS("http://www.w3.org/1999/xhtml", t) : z.createElement(t)
        }, N = E("div"), j = E("img"), B = o._internals = {_specialProps: l}, q = navigator.userAgent, H = function () {
            var t = q.indexOf("Android"), e = E("a");
            return c = -1 !== q.indexOf("Safari") && -1 === q.indexOf("Chrome") && (-1 === t || Number(q.substr(t + 8, 1)) > 3), p = c && 6 > Number(q.substr(q.indexOf("Version/") + 8, 1)), f = -1 !== q.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (_ = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
        }(), V = function (t) {
            return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, W = function (t) {
            window.console && console.log(t)
        }, U = "", X = "", Y = function (t, e) {
            e = e || N;
            var i, n, s = e.style;
            if (void 0 !== s[t])return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === s[i[n] + t];);
            return n >= 0 ? (X = 3 === n ? "ms" : i[n], U = "-" + X.toLowerCase() + "-", X + t) : null
        }, Z = z.defaultView ? z.defaultView.getComputedStyle : function () {
        }, Q = o.getStyle = function (t, e, i, n, s) {
            var r;
            return H || "opacity" !== e ? (!n && t.style[e] ? r = t.style[e] : (i = i || Z(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == s || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : s) : V(t)
        }, $ = B.convertToPixels = function (t, i, n, s, r) {
            if ("px" === s || !s)return n;
            if ("auto" === s || !n)return 0;
            var a, l, h, u = O.test(i), d = t, c = N.style, f = 0 > n;
            if (f && (n = -n), "%" === s && -1 !== i.indexOf("border"))a = n / 100 * (u ? t.clientWidth : t.clientHeight); else {
                if (c.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== s && d.appendChild)c[u ? "borderLeftWidth" : "borderTopWidth"] = n + s; else {
                    if (d = t.parentNode || z.body, l = d._gsCache, h = e.ticker.frame, l && u && l.time === h)return l.width * n / 100;
                    c[u ? "width" : "height"] = n + s
                }
                d.appendChild(N), a = parseFloat(N[u ? "offsetWidth" : "offsetHeight"]), d.removeChild(N), u && "%" === s && o.cacheWidths !== !1 && (l = d._gsCache = d._gsCache || {}, l.time = h, l.width = 100 * (a / n)), 0 !== a || r || (a = $(t, i, n, s, !0))
            }
            return f ? -a : a
        }, G = B.calculateOffset = function (t, e, i) {
            if ("absolute" !== Q(t, "position", i))return 0;
            var n = "left" === e ? "Left" : "Top", s = Q(t, "margin" + n, i);
            return t["offset" + n] - ($(t, e, parseFloat(s), s.replace(b, "")) || 0)
        }, J = function (t, e) {
            var i, n, s, r = {};
            if (e = e || Z(t, null))if (i = e.length)for (; --i > -1;)s = e[i], (-1 === s.indexOf("-transform") || Tt === s) && (r[s.replace(k, A)] = e.getPropertyValue(s)); else for (i in e)(-1 === i.indexOf("Transform") || xt === i) && (r[i] = e[i]); else if (e = t.currentStyle || t.style)for (i in e)"string" == typeof i && void 0 === r[i] && (r[i.replace(k, A)] = e[i]);
            return H || (r.opacity = V(t)), n = Rt(t, e, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, Pt && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
        }, K = function (t, e, i, n, s) {
            var r, o, a, l = {}, h = t.style;
            for (o in i)"cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (r = i[o]) || s && s[o]) && -1 === o.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[o] = "auto" !== r || "left" !== o && "top" !== o ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[o] || "" === e[o].replace(y, "") ? r : 0 : G(t, o), void 0 !== h[o] && (a = new ft(h, o, h[o], a)));
            if (n)for (o in n)"className" !== o && (l[o] = n[o]);
            return{difs: l, firstMPT: a}
        }, tt = {width: ["Left", "Right"], height: ["Top", "Bottom"]}, et = ["marginLeft", "marginRight", "marginTop", "marginBottom"], it = function (t, e, i) {
            var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), s = tt[e], r = s.length;
            for (i = i || Z(t, null); --r > -1;)n -= parseFloat(Q(t, "padding" + s[r], i, !0)) || 0, n -= parseFloat(Q(t, "border" + s[r] + "Width", i, !0)) || 0;
            return n
        }, nt = function (t, e) {
            (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
            var i = t.split(" "), n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0], s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
            return null == s ? s = "center" === n ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + s + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(n.replace(y, "")), e.oy = parseFloat(s.replace(y, "")), e.v = t), e || t
        }, st = function (t, e) {
            return"string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
        }, rt = function (t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
        }, ot = function (t, e, i, n) {
            var s, r, o, a, l, h = 1e-6;
            return null == t ? a = e : "number" == typeof t ? a = t : (s = 360, r = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : L) - (l ? 0 : e), r.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= s, o !== o % (s / 2) && (o = 0 > o ? o + s : o - s)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * s) % s - (0 | o / s) * s : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * s) % s - (0 | o / s) * s)), a = e + o), h > a && a > -h && (a = 0), a
        }, at = {aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0]}, lt = function (t, e, i) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
        }, ht = o.parseColor = function (t) {
            var e, i, n, s, r, o;
            return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), at[t] ? at[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), s = Number(t[0]) % 360 / 360, r = Number(t[1]) / 100, o = Number(t[2]) / 100, i = .5 >= o ? o * (r + 1) : o + r - o * r, e = 2 * o - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = lt(s + 1 / 3, e, i), t[1] = lt(s, e, i), t[2] = lt(s - 1 / 3, e, i), t) : (t = t.match(m) || at.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : at.black
        }, ut = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (h in at)ut += "|" + h + "\\b";
        ut = RegExp(ut + ")", "gi");
        var dt = function (t, e, i, n) {
            if (null == t)return function (t) {
                return t
            };
            var s, r = e ? (t.match(ut) || [""])[0] : "", o = t.split(r).join("").match(v) || [], a = t.substr(0, t.indexOf(o[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", h = -1 !== t.indexOf(" ") ? " " : ",", u = o.length, d = u > 0 ? o[0].replace(m, "") : "";
            return u ? s = e ? function (t) {
                var e, c, f, p;
                if ("number" == typeof t)t += d; else if (n && R.test(t)) {
                    for (p = t.replace(R, "|").split("|"), f = 0; p.length > f; f++)p[f] = s(p[f]);
                    return p.join(",")
                }
                if (e = (t.match(ut) || [r])[0], c = t.split(e).join("").match(v) || [], f = c.length, u > f--)for (; u > ++f;)c[f] = i ? c[0 | (f - 1) / 2] : o[f];
                return a + c.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
            } : function (t) {
                var e, r, c;
                if ("number" == typeof t)t += d; else if (n && R.test(t)) {
                    for (r = t.replace(R, "|").split("|"), c = 0; r.length > c; c++)r[c] = s(r[c]);
                    return r.join(",")
                }
                if (e = t.match(v) || [], c = e.length, u > c--)for (; u > ++c;)e[c] = i ? e[0 | (c - 1) / 2] : o[c];
                return a + e.join(h) + l
            } : function (t) {
                return t
            }
        }, ct = function (t) {
            return t = t.split(","), function (e, i, n, s, r, o, a) {
                var l, h = (i + "").split(" ");
                for (a = {}, l = 0; 4 > l; l++)a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                return s.parse(e, a, r, o)
            }
        }, ft = (B._setPluginRatio = function (t) {
            this.plugin.setRatio(t);
            for (var e, i, n, s, r = this.data, o = r.proxy, a = r.firstMPT, l = 1e-6; a;)e = o[a.v], a.r ? e = Math.round(e) : l > e && e > -l && (e = 0), a.t[a.p] = e, a = a._next;
            if (r.autoRotate && (r.autoRotate.rotation = o.rotation), 1 === t)for (a = r.firstMPT; a;) {
                if (i = a.t, i.type) {
                    if (1 === i.type) {
                        for (s = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++)s += i["xn" + n] + i["xs" + (n + 1)];
                        i.e = s
                    }
                } else i.e = i.s + i.xs0;
                a = a._next
            }
        }, function (t, e, i, n, s) {
            this.t = t, this.p = e, this.v = i, this.r = s, n && (n._prev = this, this._next = n)
        }), pt = (B._parseToProxy = function (t, e, i, n, s, r) {
            var o, a, l, h, u, d = n, c = {}, f = {}, p = i._transform, _ = D;
            for (i._transform = null, D = e, n = u = i.parse(t, e, n, s), D = _, r && (i._transform = p, d && (d._prev = null, d._prev && (d._prev._next = null))); n && n !== d;) {
                if (1 >= n.type && (a = n.p, f[a] = n.s + n.c, c[a] = n.s, r || (h = new ft(n, "s", a, h, n.r), n.c = 0), 1 === n.type))for (o = n.l; --o > 0;)l = "xn" + o, a = n.p + "_" + l, f[a] = n.data[l], c[a] = n[l], r || (h = new ft(n, l, a, h, n.rxp[l]));
                n = n._next
            }
            return{proxy: c, end: f, firstMPT: h, pt: u}
        }, B.CSSPropTween = function (t, e, n, s, o, a, l, h, u, d, c) {
            this.t = t, this.p = e, this.s = n, this.c = s, this.n = l || e, t instanceof pt || r.push(this.n), this.r = h, this.type = a || 0, u && (this.pr = u, i = !0), this.b = void 0 === d ? n : d, this.e = void 0 === c ? n + s : c, o && (this._next = o, o._prev = this)
        }), _t = o.parseComplex = function (t, e, i, n, s, r, o, a, l, h) {
            i = i || r || "", o = new pt(t, e, 0, 0, o, h ? 2 : 1, null, !1, a, i, n), n += "";
            var d, c, f, p, _, v, y, b, w, x, T, P, k = i.split(", ").join(",").split(" "), C = n.split(", ").join(",").split(" "), A = k.length, O = u !== !1;
            for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(R, ", ").split(" "), C = C.join(" ").replace(R, ", ").split(" "), A = k.length), A !== C.length && (k = (r || "").split(" "), A = k.length), o.plugin = l, o.setRatio = h, d = 0; A > d; d++)if (p = k[d], _ = C[d], b = parseFloat(p), b || 0 === b)o.appendXtra("", b, st(_, b), _.replace(g, ""), O && -1 !== _.indexOf("px"), !0); else if (s && ("#" === p.charAt(0) || at[p] || S.test(p)))P = "," === _.charAt(_.length - 1) ? ")," : ")", p = ht(p), _ = ht(_), w = p.length + _.length > 6, w && !H && 0 === _[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(C[d]).join("transparent")) : (H || (w = !1), o.appendXtra(w ? "rgba(" : "rgb(", p[0], _[0] - p[0], ",", !0, !0).appendXtra("", p[1], _[1] - p[1], ",", !0).appendXtra("", p[2], _[2] - p[2], w ? "," : P, !0), w && (p = 4 > p.length ? 1 : p[3], o.appendXtra("", p, (4 > _.length ? 1 : _[3]) - p, P, !1))); else if (v = p.match(m)) {
                if (y = _.match(g), !y || y.length !== v.length)return o;
                for (f = 0, c = 0; v.length > c; c++)T = v[c], x = p.indexOf(T, f), o.appendXtra(p.substr(f, x - f), Number(T), st(y[c], T), "", O && "px" === p.substr(x + T.length, 2), 0 === c), f = x + T.length;
                o["xs" + o.l] += p.substr(f)
            } else o["xs" + o.l] += o.l ? " " + p : p;
            if (-1 !== n.indexOf("=") && o.data) {
                for (P = o.xs0 + o.data.s, d = 1; o.l > d; d++)P += o["xs" + d] + o.data["xn" + d];
                o.e = P + o["xs" + d]
            }
            return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
        }, mt = 9;
        for (h = pt.prototype, h.l = h.pr = 0; --mt > 0;)h["xn" + mt] = 0, h["xs" + mt] = "";
        h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function (t, e, i, n, s, r) {
            var o = this, a = o.l;
            return o["xs" + a] += r && a ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = s, o["xn" + a] = e, o.plugin || (o.xfirst = new pt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, s, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {s: e + i}, o.rxp = {}, o.s = e, o.c = i, o.r = s, o)) : (o["xs" + a] += e + (n || ""), o)
        };
        var gt = function (t, e) {
            e = e || {}, this.p = e.prefix ? Y(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || dt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
        }, vt = B._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = {parser: i});
            var n, s, r = t.split(","), o = e.defaultValue;
            for (i = i || [o], n = 0; r.length > n; n++)e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, s = new gt(r[n], e)
        }, yt = function (t) {
            if (!l[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                vt(t, {parser: function (t, i, n, s, r, o, h) {
                    var u = a.com.greensock.plugins[e];
                    return u ? (u._cssRegister(), l[n].parse(t, i, n, s, r, o, h)) : (W("Error: " + e + " js file not loaded."), r)
                }})
            }
        };
        h = gt.prototype, h.parseComplex = function (t, e, i, n, s, r) {
            var o, a, l, h, u, d, c = this.keyword;
            if (this.multi && (R.test(i) || R.test(e) ? (a = e.replace(R, "|").split("|"), l = i.replace(R, "|").split("|")) : c && (a = [e], l = [i])), l) {
                for (h = l.length > a.length ? l.length : a.length, o = 0; h > o; o++)e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, c && (u = e.indexOf(c), d = i.indexOf(c), u !== d && (-1 === d ? a[o] = a[o].split(c).join("") : -1 === u && (a[o] += " " + c)));
                e = a.join(", "), i = l.join(", ")
            }
            return _t(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, r)
        }, h.parse = function (t, e, i, n, r, o) {
            return this.parseComplex(t.style, this.format(Q(t, this.p, s, !1, this.dflt)), this.format(e), r, o)
        }, o.registerSpecialProp = function (t, e, i) {
            vt(t, {parser: function (t, n, s, r, o, a) {
                var l = new pt(t, s, 0, 0, o, 2, s, !1, i);
                return l.plugin = a, l.setRatio = e(t, n, r._tween, s), l
            }, priority: i})
        }, o.useSVGTransformAttr = c;
        var bt, wt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), xt = Y("transform"), Tt = U + "transform", St = Y("transformOrigin"), Pt = null !== Y("perspective"), kt = B.Transform = function () {
            this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = o.defaultForce3D !== !1 && Pt ? o.defaultForce3D || "auto" : !1
        }, Ct = window.SVGElement, At = function (t, e, i) {
            var n, s = z.createElementNS("http://www.w3.org/2000/svg", t), r = /([a-z])([A-Z])/g;
            for (n in i)s.setAttributeNS(null, n.replace(r, "$1-$2").toLowerCase(), i[n]);
            return e.appendChild(s), s
        }, Ot = z.documentElement, It = function () {
            var t, e, i, n = _ || /Android/i.test(q) && !window.chrome;
            return z.createElementNS && !n && (t = At("svg", Ot), e = At("rect", t, {width: 100, height: 50, x: 100}), i = e.getBoundingClientRect().width, e.style[St] = "50% 50%", e.style[xt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(f && Pt), Ot.removeChild(t)), n
        }(), Ft = function (t, e, i, n) {
            var s, r;
            n && (r = n.split(" ")).length || (s = t.getBBox(), e = nt(e).split(" "), r = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * s.width : parseFloat(e[0])) + s.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * s.height : parseFloat(e[1])) + s.y]), i.xOrigin = parseFloat(r[0]), i.yOrigin = parseFloat(r[1]), t.setAttribute("data-svg-origin", r.join(" "))
        }, Rt = B.getTransform = function (t, e, i, n) {
            if (t._gsTransform && i && !n)return t._gsTransform;
            var r, a, l, h, u, d, c, f, p, _, m = i ? t._gsTransform || new kt : new kt, g = 0 > m.scaleX, v = 2e-5, y = 1e5, b = Pt ? parseFloat(Q(t, St, e, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0, w = parseFloat(o.defaultTransformPerspective) || 0;
            if (xt ? a = Q(t, Tt, e, !0) : t.currentStyle && (a = t.currentStyle.filter.match(I), a = a && 4 === a.length ? [a[0].substr(4), Number(a[2].substr(4)), Number(a[1].substr(4)), a[3].substr(4), m.x || 0, m.y || 0].join(",") : ""), r = !a || "none" === a || "matrix(1, 0, 0, 1, 0, 0)" === a, m.svg = !!(Ct && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)), m.svg && (r && -1 !== (t.style[xt] + "").indexOf("matrix") && (a = t.style[xt], r = !1), Ft(t, Q(t, St, s, !1, "50% 50%") + "", m, t.getAttribute("data-svg-origin")), bt = o.useSVGTransformAttr || It, l = t.getAttribute("transform"), r && l && -1 !== l.indexOf("matrix") && (a = l, r = 0)), !r) {
                for (l = (a || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], h = l.length; --h > -1;)u = Number(l[h]), l[h] = (d = u - (u |= 0)) ? (0 | d * y + (0 > d ? -.5 : .5)) / y + u : u;
                if (16 === l.length) {
                    var x, T, S, P, k, C = l[0], A = l[1], O = l[2], F = l[3], R = l[4], M = l[5], D = l[6], z = l[7], E = l[8], N = l[9], j = l[10], B = l[12], q = l[13], H = l[14], V = l[11], W = Math.atan2(D, j);
                    m.zOrigin && (H = -m.zOrigin, B = E * H - l[12], q = N * H - l[13], H = j * H + m.zOrigin - l[14]), m.rotationX = W * L, W && (P = Math.cos(-W), k = Math.sin(-W), x = R * P + E * k, T = M * P + N * k, S = D * P + j * k, E = R * -k + E * P, N = M * -k + N * P, j = D * -k + j * P, V = z * -k + V * P, R = x, M = T, D = S), W = Math.atan2(E, j), m.rotationY = W * L, W && (P = Math.cos(-W), k = Math.sin(-W), x = C * P - E * k, T = A * P - N * k, S = O * P - j * k, N = A * k + N * P, j = O * k + j * P, V = F * k + V * P, C = x, A = T, O = S), W = Math.atan2(A, C), m.rotation = W * L, W && (P = Math.cos(-W), k = Math.sin(-W), C = C * P + R * k, T = A * P + M * k, M = A * -k + M * P, D = O * -k + D * P, A = T), m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && (m.rotationX = m.rotation = 0, m.rotationY += 180), m.scaleX = (0 | Math.sqrt(C * C + A * A) * y + .5) / y, m.scaleY = (0 | Math.sqrt(M * M + N * N) * y + .5) / y, m.scaleZ = (0 | Math.sqrt(D * D + j * j) * y + .5) / y, m.skewX = 0, m.perspective = V ? 1 / (0 > V ? -V : V) : 0, m.x = B, m.y = q, m.z = H, m.svg && (m.x -= m.xOrigin - (m.xOrigin * C - m.yOrigin * R), m.y -= m.yOrigin - (m.yOrigin * A - m.xOrigin * M))
                } else if (!(Pt && !n && l.length && m.x === l[4] && m.y === l[5] && (m.rotationX || m.rotationY) || void 0 !== m.x && "none" === Q(t, "display", e))) {
                    var U = l.length >= 6, X = U ? l[0] : 1, Y = l[1] || 0, Z = l[2] || 0, $ = U ? l[3] : 1;
                    m.x = l[4] || 0, m.y = l[5] || 0, c = Math.sqrt(X * X + Y * Y), f = Math.sqrt($ * $ + Z * Z), p = X || Y ? Math.atan2(Y, X) * L : m.rotation || 0, _ = Z || $ ? Math.atan2(Z, $) * L + p : m.skewX || 0, Math.abs(_) > 90 && 270 > Math.abs(_) && (g ? (c *= -1, _ += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (f *= -1, _ += 0 >= _ ? 180 : -180)), m.scaleX = c, m.scaleY = f, m.rotation = p, m.skewX = _, Pt && (m.rotationX = m.rotationY = m.z = 0, m.perspective = w, m.scaleZ = 1), m.svg && (m.x -= m.xOrigin - (m.xOrigin * X - m.yOrigin * Y), m.y -= m.yOrigin - (m.yOrigin * $ - m.xOrigin * Z))
                }
                m.zOrigin = b;
                for (h in m)v > m[h] && m[h] > -v && (m[h] = 0)
            }
            return i && (t._gsTransform = m, m.svg && (bt && t.style[xt] ? zt(t.style, xt) : !bt && t.getAttribute("transform") && t.removeAttribute("transform"))), m
        }, Mt = function (t) {
            var e, i, n = this.data, s = -n.rotation * M, r = s + n.skewX * M, o = 1e5, a = (0 | Math.cos(s) * n.scaleX * o) / o, l = (0 | Math.sin(s) * n.scaleX * o) / o, h = (0 | Math.sin(r) * -n.scaleY * o) / o, u = (0 | Math.cos(r) * n.scaleY * o) / o, d = this.t.style, c = this.t.currentStyle;
            if (c) {
                i = l, l = -h, h = -i, e = c.filter, d.filter = "";
                var f, p, m = this.t.offsetWidth, g = this.t.offsetHeight, v = "absolute" !== c.position, y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + u, x = n.x + m * n.xPercent / 100, T = n.y + g * n.yPercent / 100;
                if (null != n.ox && (f = (n.oxp ? .01 * m * n.ox : n.ox) - m / 2, p = (n.oyp ? .01 * g * n.oy : n.oy) - g / 2, x += f - (f * a + p * l), T += p - (f * h + p * u)), v ? (f = m / 2, p = g / 2, y += ", Dx=" + (f - (f * a + p * l) + x) + ", Dy=" + (p - (f * h + p * u) + T) + ")") : y += ", sizingMethod='auto expand')", d.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(F, y) : y + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === h && 1 === u && (v && -1 === y.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && d.removeAttribute("filter")), !v) {
                    var S, P, k, C = 8 > _ ? 1 : -1;
                    for (f = n.ieOffsetX || 0, p = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((0 > a ? -a : a) * m + (0 > l ? -l : l) * g)) / 2 + x), n.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > h ? -h : h) * m)) / 2 + T), mt = 0; 4 > mt; mt++)P = et[mt], S = c[P], i = -1 !== S.indexOf("px") ? parseFloat(S) : $(this.t, P, parseFloat(S), S.replace(b, "")) || 0, k = i !== n[P] ? 2 > mt ? -n.ieOffsetX : -n.ieOffsetY : 2 > mt ? f - n.ieOffsetX : p - n.ieOffsetY, d[P] = (n[P] = Math.round(i - k * (0 === mt || 2 === mt ? 1 : C))) + "px"
                }
            }
        }, Lt = B.set3DTransformRatio = B.setTransformRatio = function (t) {
            var e, i, n, s, r, o, a, l, h, u, d, c, p, _, m, g, v, y, b, w, x, T, S, P = this.data, k = this.t.style, C = P.rotation, A = P.rotationX, O = P.rotationY, I = P.scaleX, F = P.scaleY, R = P.scaleZ, L = P.x, D = P.y, z = P.z, E = P.svg, N = P.perspective, j = P.force3D;
            if (!((1 !== t && 0 !== t || "auto" !== j || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && j || z || N || O || A) || bt && E || !Pt)return void(C || P.skewX || E ? (C *= M, T = P.skewX * M, S = 1e5, e = Math.cos(C) * I, s = Math.sin(C) * I, i = Math.sin(C - T) * -F, r = Math.cos(C - T) * F, T && "simple" === P.skewType && (v = Math.tan(T), v = Math.sqrt(1 + v * v), i *= v, r *= v, P.skewY && (e *= v, s *= v)), E && (L += P.xOrigin - (P.xOrigin * e + P.yOrigin * i), D += P.yOrigin - (P.xOrigin * s + P.yOrigin * r), _ = 1e-6, _ > L && L > -_ && (L = 0), _ > D && D > -_ && (D = 0)), b = (0 | e * S) / S + "," + (0 | s * S) / S + "," + (0 | i * S) / S + "," + (0 | r * S) / S + "," + L + "," + D + ")", E && bt ? this.t.setAttribute("transform", "matrix(" + b) : k[xt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + b) : k[xt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + I + ",0,0," + F + "," + L + "," + D + ")");
            if (f && (_ = 1e-4, _ > I && I > -_ && (I = R = 2e-5), _ > F && F > -_ && (F = R = 2e-5), !N || P.z || P.rotationX || P.rotationY || (N = 0)), C || P.skewX)C *= M, m = e = Math.cos(C), g = s = Math.sin(C), P.skewX && (C -= P.skewX * M, m = Math.cos(C), g = Math.sin(C), "simple" === P.skewType && (v = Math.tan(P.skewX * M), v = Math.sqrt(1 + v * v), m *= v, g *= v, P.skewY && (e *= v, s *= v))), i = -g, r = m; else {
                if (!(O || A || 1 !== R || N || E))return void(k[xt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) translate3d(" : "translate3d(") + L + "px," + D + "px," + z + "px)" + (1 !== I || 1 !== F ? " scale(" + I + "," + F + ")" : ""));
                e = r = 1, i = s = 0
            }
            h = 1, n = o = a = l = u = d = 0, c = N ? -1 / N : 0, p = P.zOrigin, _ = 1e-6, w = ",", x = "0", C = O * M, C && (m = Math.cos(C), g = Math.sin(C), a = -g, u = c * -g, n = e * g, o = s * g, h = m, c *= m, e *= m, s *= m), C = A * M, C && (m = Math.cos(C), g = Math.sin(C), v = i * m + n * g, y = r * m + o * g, l = h * g, d = c * g, n = i * -g + n * m, o = r * -g + o * m, h *= m, c *= m, i = v, r = y), 1 !== R && (n *= R, o *= R, h *= R, c *= R), 1 !== F && (i *= F, r *= F, l *= F, d *= F), 1 !== I && (e *= I, s *= I, a *= I, u *= I), (p || E) && (p && (L += n * -p, D += o * -p, z += h * -p + p), E && (L += P.xOrigin - (P.xOrigin * e + P.yOrigin * i), D += P.yOrigin - (P.xOrigin * s + P.yOrigin * r)), _ > L && L > -_ && (L = x), _ > D && D > -_ && (D = x), _ > z && z > -_ && (z = 0)), b = P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix3d(" : "matrix3d(", b += (_ > e && e > -_ ? x : e) + w + (_ > s && s > -_ ? x : s) + w + (_ > a && a > -_ ? x : a), b += w + (_ > u && u > -_ ? x : u) + w + (_ > i && i > -_ ? x : i) + w + (_ > r && r > -_ ? x : r), A || O ? (b += w + (_ > l && l > -_ ? x : l) + w + (_ > d && d > -_ ? x : d) + w + (_ > n && n > -_ ? x : n), b += w + (_ > o && o > -_ ? x : o) + w + (_ > h && h > -_ ? x : h) + w + (_ > c && c > -_ ? x : c) + w) : b += ",0,0,0,0,1,0,", b += L + w + D + w + z + w + (N ? 1 + -z / N : 1) + ")", k[xt] = b
        };
        h = kt.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = 0, h.scaleX = h.scaleY = h.scaleZ = 1, vt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {parser: function (t, e, i, n, r, a, l) {
            if (n._lastParsedTransform === l)return r;
            n._lastParsedTransform = l;
            var h, u, d, c, f, p, _, m = n._transform = Rt(t, s, !0, l.parseTransform), g = t.style, v = 1e-6, y = wt.length, b = l, w = {};
            if ("string" == typeof b.transform && xt)d = N.style, d[xt] = b.transform, d.display = "block", d.position = "absolute", z.body.appendChild(N), h = Rt(N, null, !1), z.body.removeChild(N); else if ("object" == typeof b) {
                if (h = {
                    scaleX: rt(null != b.scaleX ? b.scaleX : b.scale, m.scaleX), scaleY: rt(null != b.scaleY ? b.scaleY : b.scale, m.scaleY), scaleZ: rt(b.scaleZ, m.scaleZ), x: rt(b.x, m.x), y: rt(b.y, m.y), z: rt(b.z, m.z), xPercent: rt(b.xPercent, m.xPercent), yPercent: rt(b.yPercent, m.yPercent), perspective: rt(b.transformPerspective, m.perspective)}, _ = b.directionalRotation, null != _)if ("object" == typeof _)for (d in _)b[d] = _[d]; else b.rotation = _;
                "string" == typeof b.x && -1 !== b.x.indexOf("%") && (h.x = 0, h.xPercent = rt(b.x, m.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (h.y = 0, h.yPercent = rt(b.y, m.yPercent)), h.rotation = ot("rotation"in b ? b.rotation : "shortRotation"in b ? b.shortRotation + "_short" : "rotationZ"in b ? b.rotationZ : m.rotation, m.rotation, "rotation", w), Pt && (h.rotationX = ot("rotationX"in b ? b.rotationX : "shortRotationX"in b ? b.shortRotationX + "_short" : m.rotationX || 0, m.rotationX, "rotationX", w), h.rotationY = ot("rotationY"in b ? b.rotationY : "shortRotationY"in b ? b.shortRotationY + "_short" : m.rotationY || 0, m.rotationY, "rotationY", w)), h.skewX = null == b.skewX ? m.skewX : ot(b.skewX, m.skewX), h.skewY = null == b.skewY ? m.skewY : ot(b.skewY, m.skewY), (u = h.skewY - m.skewY) && (h.skewX += u, h.rotation += u)
            }
            for (Pt && null != b.force3D && (m.force3D = b.force3D, p = !0), m.skewType = b.skewType || m.skewType || o.defaultSkewType, f = m.force3D || m.z || m.rotationX || m.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, f || null == b.scale || (h.scaleZ = 1); --y > -1;)i = wt[y], c = h[i] - m[i], (c > v || -v > c || null != b[i] || null != D[i]) && (p = !0, r = new pt(m, i, m[i], c, r), i in w && (r.e = w[i]), r.xs0 = 0, r.plugin = a, n._overwriteProps.push(r.n));
            return c = b.transformOrigin, m.svg && (c || b.svgOrigin) && (Ft(t, nt(c), h, b.svgOrigin), r = new pt(m, "xOrigin", m.xOrigin, h.xOrigin - m.xOrigin, r, -1, "transformOrigin"), r.b = m.xOrigin, r.e = r.xs0 = h.xOrigin, r = new pt(m, "yOrigin", m.yOrigin, h.yOrigin - m.yOrigin, r, -1, "transformOrigin"), r.b = m.yOrigin, r.e = r.xs0 = h.yOrigin, c = bt ? null : "0px 0px"), (c || Pt && f && m.zOrigin) && (xt ? (p = !0, i = St, c = (c || Q(t, i, s, !1, "50% 50%")) + "", r = new pt(g, i, 0, 0, r, -1, "transformOrigin"), r.b = g[i], r.plugin = a, Pt ? (d = m.zOrigin, c = c.split(" "), m.zOrigin = (c.length > 2 && (0 === d || "0px" !== c[2]) ? parseFloat(c[2]) : d) || 0, r.xs0 = r.e = c[0] + " " + (c[1] || "50%") + " 0px", r = new pt(m, "zOrigin", 0, 0, r, -1, r.n), r.b = d, r.xs0 = r.e = m.zOrigin) : r.xs0 = r.e = c) : nt(c + "", m)), p && (n._transformType = m.svg && bt || !f && 3 !== this._transformType ? 2 : 3), r
        }, prefix: !0}), vt("boxShadow", {defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset"}), vt("borderRadius", {defaultValue: "0px", parser: function (t, e, i, r, o) {
            e = this.format(e);
            var a, l, h, u, d, c, f, p, _, m, g, v, y, b, w, x, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], S = t.style;
            for (_ = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), a = e.split(" "), l = 0; T.length > l; l++)this.p.indexOf("border") && (T[l] = Y(T[l])), d = u = Q(t, T[l], s, !1, "0px"), -1 !== d.indexOf(" ") && (u = d.split(" "), d = u[0], u = u[1]), c = h = a[l], f = parseFloat(d), v = d.substr((f + "").length), y = "=" === c.charAt(1), y ? (p = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), p *= parseFloat(c), g = c.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(c), g = c.substr((p + "").length)), "" === g && (g = n[i] || v), g !== v && (b = $(t, "borderLeft", f, v), w = $(t, "borderTop", f, v), "%" === g ? (d = 100 * (b / _) + "%", u = 100 * (w / m) + "%") : "em" === g ? (x = $(t, "borderLeft", 1, "em"), d = b / x + "em", u = w / x + "em") : (d = b + "px", u = w + "px"), y && (c = parseFloat(d) + p + g, h = parseFloat(u) + p + g)), o = _t(S, T[l], d + " " + u, c + " " + h, !1, "0px", o);
            return o
        }, prefix: !0, formatter: dt("0px 0px 0px 0px", !1, !0)}), vt("backgroundPosition", {defaultValue: "0 0", parser: function (t, e, i, n, r, o) {
            var a, l, h, u, d, c, f = "background-position", p = s || Z(t, null), m = this.format((p ? _ ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e);
            if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (c = Q(t, "backgroundImage").replace(C, ""), c && "none" !== c)) {
                for (a = m.split(" "), l = g.split(" "), j.setAttribute("src", c), h = 2; --h > -1;)m = a[h], u = -1 !== m.indexOf("%"), u !== (-1 !== l[h].indexOf("%")) && (d = 0 === h ? t.offsetWidth - j.width : t.offsetHeight - j.height, a[h] = u ? parseFloat(m) / 100 * d + "px" : 100 * (parseFloat(m) / d) + "%");
                m = a.join(" ")
            }
            return this.parseComplex(t.style, m, g, r, o)
        }, formatter: nt}), vt("backgroundSize", {defaultValue: "0 0", formatter: nt}), vt("perspective", {defaultValue: "0px", prefix: !0}), vt("perspectiveOrigin", {defaultValue: "50% 50%", prefix: !0}), vt("transformStyle", {prefix: !0}), vt("backfaceVisibility", {prefix: !0}), vt("userSelect", {prefix: !0}), vt("margin", {parser: ct("marginTop,marginRight,marginBottom,marginLeft")}), vt("padding", {parser: ct("paddingTop,paddingRight,paddingBottom,paddingLeft")}), vt("clip", {defaultValue: "rect(0px,0px,0px,0px)", parser: function (t, e, i, n, r, o) {
            var a, l, h;
            return 9 > _ ? (l = t.currentStyle, h = 8 > _ ? " " : ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(Q(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, r, o)
        }}), vt("textShadow", {defaultValue: "0px 0px 0px #999", color: !0, multi: !0}), vt("autoRound,strictUnits", {parser: function (t, e, i, n, s) {
            return s
        }}), vt("border", {defaultValue: "0px solid #000", parser: function (t, e, i, n, r, o) {
            return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", s, !1, "0px") + " " + Q(t, "borderTopStyle", s, !1, "solid") + " " + Q(t, "borderTopColor", s, !1, "#000")), this.format(e), r, o)
        }, color: !0, formatter: function (t) {
            var e = t.split(" ");
            return e[0] + " " + (e[1] || "solid") + " " + (t.match(ut) || ["#000"])[0]
        }}), vt("borderWidth", {parser: ct("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}), vt("float,cssFloat,styleFloat", {parser: function (t, e, i, n, s) {
            var r = t.style, o = "cssFloat"in r ? "cssFloat" : "styleFloat";
            return new pt(r, o, 0, 0, s, -1, i, !1, 0, r[o], e)
        }});
        var Dt = function (t) {
            var e, i = this.t, n = i.filter || Q(this.data, "filter") || "", s = 0 | this.s + this.c * t;
            100 === s && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = n.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"), -1 === n.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(w, "opacity=" + s))
        };
        vt("opacity,alpha,autoAlpha", {defaultValue: "1", parser: function (t, e, i, n, r, o) {
            var a = parseFloat(Q(t, "opacity", s, !1, "1")), l = t.style, h = "autoAlpha" === i;
            return"string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === Q(t, "visibility", s) && 0 !== e && (a = 0), H ? r = new pt(l, "opacity", a, e - a, r) : (r = new pt(l, "opacity", 100 * a, 100 * (e - a), r), r.xn1 = h ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = Dt), h && (r = new pt(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), r.xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
        }});
        var zt = function (t, e) {
            e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e))
        }, Et = function (t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e;)e.v ? i[e.p] = e.v : zt(i, e.p), e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        vt("className", {parser: function (t, e, n, r, o, a, l) {
            var h, u, d, c, f, p = t.getAttribute("class") || "", _ = t.style.cssText;
            if (o = r._classNamePT = new pt(t, n, 0, 0, o, 2), o.setRatio = Et, o.pr = -11, i = !0, o.b = p, u = J(t, s), d = t._gsClassPT) {
                for (c = {}, f = d.data; f;)c[f.p] = 1, f = f._next;
                d.setRatio(1)
            }
            return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : p.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), h = K(t, u, J(t), l, c), t.setAttribute("class", p), o.data = h.firstMPT, t.style.cssText = _, o = o.xfirst = r.parse(t, h.difs, o, a)
        }});
        var Nt = function (t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, n, s, r, o = this.t.style, a = l.transform.parse;
                if ("all" === this.e)o.cssText = "", s = !0; else for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;)i = e[n], l[i] && (l[i].parse === a ? s = !0 : i = "transformOrigin" === i ? St : l[i].p), zt(o, i);
                s && (zt(o, xt), r = this.t._gsTransform, r && (r.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
            }
        };
        for (vt("clearProps", {parser: function (t, e, n, s, r) {
            return r = new pt(t, n, 0, 0, r, 2), r.setRatio = Nt, r.e = e, r.pr = -10, r.data = s._tween, i = !0, r
        }}), h = "bezier,throwProps,physicsProps,physics2D".split(","), mt = h.length; mt--;)yt(h[mt]);
        h = o.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function (t, e, a) {
            if (!t.nodeType)return!1;
            this._target = t, this._tween = a, this._vars = e, u = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, s = Z(t, ""), r = this._overwriteProps;
            var h, f, _, m, g, v, y, b, w, T = t.style;
            if (d && "" === T.zIndex && (h = Q(t, "zIndex", s), ("auto" === h || "" === h) && this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (m = T.cssText, h = J(t, s), T.cssText = m + ";" + e, h = K(t, h, J(t)).difs, !H && x.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, T.cssText = m), this._firstPT = f = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                for (w = 3 === this._transformType, xt ? c && (d = !0, "" === T.zIndex && (y = Q(t, "zIndex", s), ("auto" === y || "" === y) && this._addLazySet(T, "zIndex", 0)), p && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : T.zoom = 1, _ = f; _ && _._next;)_ = _._next;
                b = new pt(t, "transform", 0, 0, null, 2), this._linkCSSP(b, null, _), b.setRatio = xt ? Lt : Mt, b.data = this._transform || Rt(t, s, !0), b.tween = a, b.pr = -1, r.pop()
            }
            if (i) {
                for (; f;) {
                    for (v = f._next, _ = m; _ && _.pr > f.pr;)_ = _._next;
                    (f._prev = _ ? _._prev : g) ? f._prev._next = f : m = f, (f._next = _) ? _._prev = f : g = f, f = v
                }
                this._firstPT = m
            }
            return!0
        }, h.parse = function (t, e, i, r) {
            var o, a, h, d, c, f, p, _, m, g, v = t.style;
            for (o in e)f = e[o], a = l[o], a ? i = a.parse(t, f, o, this, i, r, e) : (c = Q(t, o, s) + "", m = "string" == typeof f, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || m && S.test(f) ? (m || (f = ht(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = _t(v, o, c, f, !0, "transparent", i, 0, r)) : !m || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (h = parseFloat(c), p = h || 0 === h ? c.substr((h + "").length) : "", ("" === c || "auto" === c) && ("width" === o || "height" === o ? (h = it(t, o, s), p = "px") : "left" === o || "top" === o ? (h = G(t, o, s), p = "px") : (h = "opacity" !== o ? 0 : 1, p = "")), g = m && "=" === f.charAt(1), g ? (d = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), d *= parseFloat(f), _ = f.replace(b, "")) : (d = parseFloat(f), _ = m ? f.replace(b, "") : ""), "" === _ && (_ = o in n ? n[o] : p), f = d || 0 === d ? (g ? d + h : d) + _ : e[o], p !== _ && "" !== _ && (d || 0 === d) && h && (h = $(t, o, h, p), "%" === _ ? (h /= $(t, o, 100, "%") / 100, e.strictUnits !== !0 && (c = h + "%")) : "em" === _ ? h /= $(t, o, 1, "em") : "px" !== _ && (d = $(t, o, d, _), _ = "px"), g && (d || 0 === d) && (f = d + h + _)), g && (d += h), !h && 0 !== h || !d && 0 !== d ? void 0 !== v[o] && (f || "NaN" != f + "" && null != f) ? (i = new pt(v, o, d || h || 0, 0, i, -1, o, !1, 0, c, f), i.xs0 = "none" !== f || "display" !== o && -1 === o.indexOf("Style") ? f : c) : W("invalid " + o + " tween value: " + e[o]) : (i = new pt(v, o, h, d - h, i, 0, o, u !== !1 && ("px" === _ || "zIndex" === o), 0, c, f), i.xs0 = _)) : i = _t(v, o, c, f, !0, null, i, 0, r)), r && i && !i.plugin && (i.plugin = r);
            return i
        }, h.setRatio = function (t) {
            var e, i, n, s = this._firstPT, r = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)for (; s;) {
                if (e = s.c * t + s.s, s.r ? e = Math.round(e) : r > e && e > -r && (e = 0), s.type)if (1 === s.type)if (n = s.l, 2 === n)s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2; else if (3 === n)s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3; else if (4 === n)s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4; else if (5 === n)s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5; else {
                    for (i = s.xs0 + e + s.xs1, n = 1; s.l > n; n++)i += s["xn" + n] + s["xs" + (n + 1)];
                    s.t[s.p] = i
                } else-1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t); else s.t[s.p] = e + s.xs0;
                s = s._next
            } else for (; s;)2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next; else for (; s;)2 !== s.type ? s.t[s.p] = s.e : s.setRatio(t), s = s._next
        }, h._enableTransforms = function (t) {
            this._transform = this._transform || Rt(this._target, s, !0), this._transformType = this._transform.svg && bt || !t && 3 !== this._transformType ? 2 : 3
        };
        var jt = function () {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        h._addLazySet = function (t, e, i) {
            var n = this._firstPT = new pt(t, e, 0, 0, this._firstPT, 2);
            n.e = i, n.setRatio = jt, n.data = this
        }, h._linkCSSP = function (t, e, i, n) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
        }, h._kill = function (e) {
            var i, n, s, r = e;
            if (e.autoAlpha || e.alpha) {
                r = {};
                for (n in e)r[n] = e[n];
                r.opacity = 1, r.autoAlpha && (r.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), t.prototype._kill.call(this, r)
        };
        var Bt = function (t, e, i) {
            var n, s, r, o;
            if (t.slice)for (s = t.length; --s > -1;)Bt(t[s], e, i); else for (n = t.childNodes, s = n.length; --s > -1;)r = n[s], o = r.type, r.style && (e.push(J(r)), i && i.push(r)), 1 !== o && 9 !== o && 11 !== o || !r.childNodes.length || Bt(r, e, i)
        };
        return o.cascadeTo = function (t, i, n) {
            var s, r, o, a, l = e.to(t, i, n), h = [l], u = [], d = [], c = [], f = e._internals.reservedProps;
            for (t = l._targets || l.target, Bt(t, u, c), l.render(i, !0, !0), Bt(t, d), l.render(0, !0, !0), l._enabled(!0), s = c.length; --s > -1;)if (r = K(c[s], u[s], d[s]), r.firstMPT) {
                r = r.difs;
                for (o in n)f[o] && (r[o] = n[o]);
                a = {};
                for (o in r)a[o] = u[s][o];
                h.push(e.fromTo(c[s], i, a, r))
            }
            return h
        }, t.activate([o]), o
    }, !0), function () {
        var t = _gsScope._gsDefine.plugin({propName: "roundProps", priority: -1, API: 2, init: function (t, e, i) {
            return this._tween = i, !0
        }}), e = t.prototype;
        e._onInitAllProps = function () {
            for (var t, e, i, n = this._tween, s = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), r = s.length, o = {}, a = n._propLookup.roundProps; --r > -1;)o[s[r]] = 1;
            for (r = s.length; --r > -1;)for (t = s[r], e = n._firstPT; e;)i = e._next, e.pg ? e.t._roundProps(o, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = a), e = i;
            return!1
        }, e._add = function (t, e, i, n) {
            this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
        }
    }(), _gsScope._gsDefine.plugin({propName: "attr", API: 2, version: "0.3.3", init: function (t, e) {
        var i, n, s;
        if ("function" != typeof t.setAttribute)return!1;
        this._target = t, this._proxy = {}, this._start = {}, this._end = {};
        for (i in e)this._start[i] = this._proxy[i] = n = t.getAttribute(i), s = this._addTween(this._proxy, i, parseFloat(n), e[i], i), this._end[i] = s ? s.s + s.c : e[i], this._overwriteProps.push(i);
        return!0
    }, set: function (t) {
        this._super.setRatio.call(this, t);
        for (var e, i = this._overwriteProps, n = i.length, s = 1 === t ? this._end : t ? this._proxy : this._start; --n > -1;)e = i[n], this._target.setAttribute(e, s[e] + "")
    }}), _gsScope._gsDefine.plugin({propName: "directionalRotation", version: "0.2.1", API: 2, init: function (t, e) {
        "object" != typeof e && (e = {rotation: e}), this.finals = {};
        var i, n, s, r, o, a, l = e.useRadians === !0 ? 2 * Math.PI : 360, h = 1e-6;
        for (i in e)"useRadians" !== i && (a = (e[i] + "").split("_"), n = a[0], s = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), r = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? s + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, o = r - s, a.length && (n = a.join("_"), -1 !== n.indexOf("short") && (o %= l, o !== o % (l / 2) && (o = 0 > o ? o + l : o - l)), -1 !== n.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * l) % l - (0 | o / l) * l : -1 !== n.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * l) % l - (0 | o / l) * l)), (o > h || -h > o) && (this._addTween(t, i, s, s + o, i), this._overwriteProps.push(i)));
        return!0
    }, set: function (t) {
        var e;
        if (1 !== t)this._super.setRatio.call(this, t); else for (e = this._firstPT; e;)e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
    }})._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
        var e, i, n, s = _gsScope.GreenSockGlobals || _gsScope, r = s.com.greensock, o = 2 * Math.PI, a = Math.PI / 2, l = r._class, h = function (e, i) {
            var n = l("easing." + e, function () {
            }, !0), s = n.prototype = new t;
            return s.constructor = n, s.getRatio = i, n
        }, u = t.register || function () {
        }, d = function (t, e, i, n) {
            var s = l("easing." + t, {easeOut: new e, easeIn: new i, easeInOut: new n}, !0);
            return u(s, t), s
        }, c = function (t, e, i) {
            this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
        }, f = function (e, i) {
            var n = l("easing." + e, function (t) {
                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
            }, !0), s = n.prototype = new t;
            return s.constructor = n, s.getRatio = i, s.config = function (t) {
                return new n(t)
            }, n
        }, p = d("Back", f("BackOut", function (t) {
            return(t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), f("BackIn", function (t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), f("BackInOut", function (t) {
            return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })), _ = l("easing.SlowMo", function (t, e, i) {
            e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
        }, !0), m = _.prototype = new t;
        return m.constructor = _, m.getRatio = function (t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, _.ease = new _(.7, .7), m.config = _.config = function (t, e, i) {
            return new _(t, e, i)
        }, e = l("easing.SteppedEase", function (t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function (t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, m.config = e.config = function (t) {
            return new e(t)
        }, i = l("easing.RoughEase", function (e) {
            e = e || {};
            for (var i, n, s, r, o, a, l = e.taper || "none", h = [], u = 0, d = 0 | (e.points || 20), f = d, p = e.randomize !== !1, _ = e.clamp === !0, m = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;)i = p ? Math.random() : 1 / d * f, n = m ? m.getRatio(i) : i, "none" === l ? s = g : "out" === l ? (r = 1 - i, s = r * r * g) : "in" === l ? s = i * i * g : .5 > i ? (r = 2 * i, s = .5 * r * r * g) : (r = 2 * (1 - i), s = .5 * r * r * g), p ? n += Math.random() * s - .5 * s : f % 2 ? n += .5 * s : n -= .5 * s, _ && (n > 1 ? n = 1 : 0 > n && (n = 0)), h[u++] = {x: i, y: n};
            for (h.sort(function (t, e) {
                return t.x - e.x
            }), a = new c(1, 1, null), f = d; --f > -1;)o = h[f], a = new c(o.x, o.y, a);
            this._prev = new c(0, 0, 0 !== a.t ? a : a.next)
        }, !0), m = i.prototype = new t, m.constructor = i, m.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;)e = e.next;
                e = e.prev
            } else for (; e.prev && e.t >= t;)e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, m.config = function (t) {
            return new i(t)
        }, i.ease = new i, d("Bounce", h("BounceOut", function (t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), h("BounceIn", function (t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), h("BounceInOut", function (t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), d("Circ", h("CircOut", function (t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), h("CircIn", function (t) {
            return-(Math.sqrt(1 - t * t) - 1)
        }), h("CircInOut", function (t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), n = function (e, i, n) {
            var s = l("easing." + e, function (t, e) {
                this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
            }, !0), r = s.prototype = new t;
            return r.constructor = s, r.getRatio = i, r.config = function (t, e) {
                return new s(t, e)
            }, s
        }, d("Elastic", n("ElasticOut", function (t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), n("ElasticIn", function (t) {
            return-(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
        }, .3), n("ElasticInOut", function (t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
        }, .45)), d("Expo", h("ExpoOut", function (t) {
            return 1 - Math.pow(2, -10 * t)
        }), h("ExpoIn", function (t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), h("ExpoInOut", function (t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), d("Sine", h("SineOut", function (t) {
            return Math.sin(t * a)
        }), h("SineIn", function (t) {
            return-Math.cos(t * a) + 1
        }), h("SineInOut", function (t) {
            return-.5 * (Math.cos(Math.PI * t) - 1)
        })), l("easing.EaseLookup", {find: function (e) {
            return t.map[e]
        }}, !0), u(s.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), p
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var n, s, r, o, a, l = function (t) {
            var e, n = t.split("."), s = i;
            for (e = 0; n.length > e; e++)s[n[e]] = s = s[n[e]] || {};
            return s
        }, h = l("com.greensock"), u = 1e-10, d = function (t) {
            var e, i = [], n = t.length;
            for (e = 0; e !== n; i.push(t[e++]));
            return i
        }, c = function () {
        }, f = function () {
            var t = Object.prototype.toString, e = t.call([]);
            return function (i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        }(), p = {}, _ = function (n, s, r, o) {
            this.sc = p[n] ? p[n].sc : [], p[n] = this, this.gsClass = null, this.func = r;
            var a = [];
            this.check = function (h) {
                for (var u, d, c, f, m = s.length, g = m; --m > -1;)(u = p[s[m]] || new _(s[m], [])).gsClass ? (a[m] = u.gsClass, g--) : h && u.sc.push(this);
                if (0 === g && r)for (d = ("com.greensock." + n).split("."), c = d.pop(), f = l(d.join("."))[c] = this.gsClass = r.apply(r, a), o && (i[c] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function () {
                    return f
                }) : n === e && "undefined" != typeof module && module.exports && (module.exports = f)), m = 0; this.sc.length > m; m++)this.sc[m].check()
            }, this.check(!0)
        }, m = t._gsDefine = function (t, e, i, n) {
            return new _(t, e, i, n)
        }, g = h._class = function (t, e, i) {
            return e = e || function () {
            }, m(t, [], function () {
                return e
            }, i), e
        };
        m.globals = i;
        var v = [0, 0, 1, 1], y = [], b = g("easing.Ease", function (t, e, i, n) {
            this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? v.concat(e) : v
        }, !0), w = b.map = {}, x = b.register = function (t, e, i, n) {
            for (var s, r, o, a, l = e.split(","), u = l.length, d = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;)for (r = l[u], s = n ? g("easing." + r, null, !0) : h.easing[r] || {}, o = d.length; --o > -1;)a = d[o], w[r + "." + a] = w[a + r] = s[a] = t.getRatio ? t : t[a] || new t
        };
        for (r = b.prototype, r._calcEnd = !1, r.getRatio = function (t) {
            if (this._func)return this._params[0] = t, this._func.apply(null, this._params);
            var e = this._type, i = this._power, n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
        }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = n.length; --s > -1;)r = n[s] + ",Power" + s, x(new b(null, null, 1, s), r, "easeOut", !0), x(new b(null, null, 2, s), r, "easeIn" + (0 === s ? ",easeNone" : "")), x(new b(null, null, 3, s), r, "easeInOut");
        w.linear = h.easing.Linear.easeIn, w.swing = h.easing.Quad.easeInOut;
        var T = g("events.EventDispatcher", function (t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        r = T.prototype, r.addEventListener = function (t, e, i, n, s) {
            s = s || 0;
            var r, l, h = this._listeners[t], u = 0;
            for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;)r = h[l], r.c === e && r.s === i ? h.splice(l, 1) : 0 === u && s > r.pr && (u = l + 1);
            h.splice(u, 0, {c: e, s: i, up: n, pr: s}), this !== o || a || o.wake()
        }, r.removeEventListener = function (t, e) {
            var i, n = this._listeners[t];
            if (n)for (i = n.length; --i > -1;)if (n[i].c === e)return void n.splice(i, 1)
        }, r.dispatchEvent = function (t) {
            var e, i, n, s = this._listeners[t];
            if (s)for (e = s.length, i = this._eventTarget; --e > -1;)n = s[e], n && (n.up ? n.c.call(n.s || i, {type: t, target: i}) : n.c.call(n.s || i))
        };
        var S = t.requestAnimationFrame, P = t.cancelAnimationFrame, k = Date.now || function () {
            return(new Date).getTime()
        }, C = k();
        for (n = ["ms", "moz", "webkit", "o"], s = n.length; --s > -1 && !S;)S = t[n[s] + "RequestAnimationFrame"], P = t[n[s] + "CancelAnimationFrame"] || t[n[s] + "CancelRequestAnimationFrame"];
        g("Ticker", function (t, e) {
            var i, n, s, r, l, h = this, d = k(), f = e !== !1 && S, p = 500, _ = 33, m = "tick", g = function (t) {
                var e, o, a = k() - C;
                a > p && (d += a - _), C += a, h.time = (C - d) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= r ? .004 : r - e), o = !0), t !== !0 && (s = n(g)), o && h.dispatchEvent(m)
            };
            T.call(h), h.time = h.frame = 0, h.tick = function () {
                g(!0)
            }, h.lagSmoothing = function (t, e) {
                p = t || 1 / u, _ = Math.min(e, p, 0)
            }, h.sleep = function () {
                null != s && (f && P ? P(s) : clearTimeout(s), n = c, s = null, h === o && (a = !1))
            }, h.wake = function () {
                null !== s ? h.sleep() : h.frame > 10 && (C = k() - p + 5), n = 0 === i ? c : f && S ? S : function (t) {
                    return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                }, h === o && (a = !0), g(2)
            }, h.fps = function (t) {
                return arguments.length ? (i = t, r = 1 / (i || 60), l = this.time + r, void h.wake()) : i
            }, h.useRAF = function (t) {
                return arguments.length ? (h.sleep(), f = t, void h.fps(i)) : f
            }, h.fps(t), setTimeout(function () {
                f && 5 > h.frame && h.useRAF(!1)
            }, 1500)
        }), r = h.Ticker.prototype = new h.events.EventDispatcher, r.constructor = h.Ticker;
        var A = g("core.Animation", function (t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, V) {
                a || o.wake();
                var i = this.vars.useFrames ? H : V;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        o = A.ticker = new h.Ticker, r = A.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
        var O = function () {
            a && k() - C > 2e3 && o.wake(), setTimeout(O, 2e3)
        };
        O(), r.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, r.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, r.resume = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, r.seek = function (t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, r.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, r.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, r.render = function () {
        }, r.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, r.isActive = function () {
            var t, e = this._timeline, i = this._startTime;
            return!e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }, r._enabled = function (t, e) {
            return a || o.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, r._kill = function () {
            return this._enabled(!1, !1)
        }, r.kill = function (t, e) {
            return this._kill(t, e), this
        }, r._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;)e._dirty = !0, e = e.timeline;
            return this
        }, r._swapSelfInParams = function (t) {
            for (var e = t.length, i = t.concat(); --e > -1;)"{self}" === t[e] && (i[e] = this);
            return i
        }, r.eventCallback = function (t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var s = this.vars;
                if (1 === arguments.length)return s[t];
                null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, r.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, r.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, r.totalDuration = function (t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, r.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, r.totalTime = function (t, e, i) {
            if (a || o.wake(), !arguments.length)return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration, s = this._timeline;
                    if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)for (; s._timeline;)s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), L.length && U())
            }
            return this
        }, r.progress = r.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }, r.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, r.endTime = function (t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, r.timeScale = function (t) {
            if (!arguments.length)return this._timeScale;
            if (t = t || u, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, r.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, r.paused = function (t) {
            if (!arguments.length)return this._paused;
            var e, i, n = this._timeline;
            return t != this._paused && n && (a || t || o.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this
        };
        var I = g("core.SimpleTimeline", function (t) {
            A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        r = I.prototype = new A, r.constructor = I, r.kill()._gc = !1, r._first = r._last = r._recent = null, r._sortChildren = !1, r.add = r.insert = function (t, e) {
            var i, n;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)for (n = t._startTime; i && i._startTime > n;)i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
        }, r._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, r.render = function (t, e, i) {
            var n, s = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; s;)n = s._next, (s._active || t >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n
        }, r.rawTime = function () {
            return a || o.wake(), this._totalTime
        };
        var F = g("TweenLite", function (e, i, n) {
            if (A.call(this, i, n), this.render = F.prototype.render, null == e)throw"Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : F.selector(e) || e;
            var s, r, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? q[F.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l], (a || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])for (this._targets = o = d(e), this._propLookup = [], this._siblings = [], s = 0; o.length > s; s++)r = o[s], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(s--, 1), this._targets = o = o.concat(d(r))) : (this._siblings[s] = X(r, this, !1), 1 === l && this._siblings[s].length > 1 && Z(r, this, null, 1, this._siblings[s])) : (r = o[s--] = F.selector(r), "string" == typeof r && o.splice(s + 1, 1)) : o.splice(s--, 1); else this._propLookup = {}, this._siblings = X(e, this, !1), 1 === l && this._siblings.length > 1 && Z(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -u, this.render(-this._delay));

        }, !0), R = function (e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        }, M = function (t, e) {
            var i, n = {};
            for (i in t)B[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!E[i] || E[i] && E[i]._autoCSS) || (n[i] = t[i], delete t[i]);
            t.css = n
        };
        r = F.prototype = new A, r.constructor = F, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, F.version = "1.16.1", F.defaultEase = r._ease = new b(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = o, F.autoSleep = 120, F.lagSmoothing = function (t, e) {
            o.lagSmoothing(t, e)
        }, F.selector = t.$ || t.jQuery || function (e) {
            var i = t.$ || t.jQuery;
            return i ? (F.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        };
        var L = [], D = {}, z = F._internals = {isArray: f, isSelector: R, lazyTweens: L}, E = F._plugins = {}, N = z.tweenLookup = {}, j = 0, B = z.reservedProps = {ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1}, q = {none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0}, H = A._rootFramesTimeline = new I, V = A._rootTimeline = new I, W = 30, U = z.lazyRender = function () {
            var t, e = L.length;
            for (D = {}; --e > -1;)t = L[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
            L.length = 0
        };
        V._startTime = o.time, H._startTime = o.frame, V._active = H._active = !0, setTimeout(U, 1), A._updateRoot = F.render = function () {
            var t, e, i;
            if (L.length && U(), V.render((o.time - V._startTime) * V._timeScale, !1, !1), H.render((o.frame - H._startTime) * H._timeScale, !1, !1), L.length && U(), o.frame >= W) {
                W = o.frame + (parseInt(F.autoSleep, 10) || 120);
                for (i in N) {
                    for (e = N[i].tweens, t = e.length; --t > -1;)e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete N[i]
                }
                if (i = V._first, (!i || i._paused) && F.autoSleep && !H._first && 1 === o._listeners.tick.length) {
                    for (; i && i._paused;)i = i._next;
                    i || o.sleep()
                }
            }
        }, o.addEventListener("tick", A._updateRoot);
        var X = function (t, e, i) {
            var n, s, r = t._gsTweenID;
            if (N[r || (t._gsTweenID = r = "t" + j++)] || (N[r] = {target: t, tweens: []}), e && (n = N[r].tweens, n[s = n.length] = e, i))for (; --s > -1;)n[s] === e && n.splice(s, 1);
            return N[r].tweens
        }, Y = function (t, e, i, n) {
            var s, r, o = t.vars.onOverwrite;
            return o && (s = o(t, e, i, n)), o = F.onOverwrite, o && (r = o(t, e, i, n)), s !== !1 && r !== !1
        }, Z = function (t, e, i, n, s) {
            var r, o, a, l;
            if (1 === n || n >= 4) {
                for (l = s.length, r = 0; l > r; r++)if ((a = s[r]) !== e)a._gc || Y(a, e) && a._enabled(!1, !1) && (o = !0); else if (5 === n)break;
                return o
            }
            var h, d = e._startTime + u, c = [], f = 0, p = 0 === e._duration;
            for (r = s.length; --r > -1;)(a = s[r]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || Q(e, 0, p), 0 === Q(a, h, p) && (c[f++] = a)) : d >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > d && ((p || !a._initted) && 2e-10 >= d - a._startTime || (c[f++] = a)));
            for (r = f; --r > -1;)if (a = c[r], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                if (2 !== n && !Y(a, e))continue;
                a._enabled(!1, !1) && (o = !0)
            }
            return o
        }, Q = function (t, e, i) {
            for (var n = t._timeline, s = n._timeScale, r = t._startTime; n._timeline;) {
                if (r += n._startTime, s *= n._timeScale, n._paused)return-100;
                n = n._timeline
            }
            return r /= s, r > e ? r - e : i && r === e || !t._initted && 2 * u > r - e ? u : (r += t.totalDuration() / t._timeScale / s) > e + u ? 0 : r - e - u
        };
        r._init = function () {
            var t, e, i, n, s, r = this.vars, o = this._overwrittenProps, a = this._duration, l = !!r.immediateRender, h = r.ease;
            if (r.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {};
                for (n in r.startAt)s[n] = r.startAt[n];
                if (s.overwrite = !1, s.immediateRender = !0, s.lazy = l && r.lazy !== !1, s.startAt = s.delay = null, this._startAt = F.to(this.target, 0, s), l)if (this._time > 0)this._startAt = null; else if (0 !== a)return
            } else if (r.runBackwards && 0 !== a)if (this._startAt)this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                0 !== this._time && (l = !1), i = {};
                for (n in r)B[n] && "autoCSS" !== n || (i[n] = r[n]);
                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && r.lazy !== !1, i.immediateRender = l, this._startAt = F.to(this.target, 0, i), l) {
                    if (0 === this._time)return
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
            }
            if (this._ease = h = h ? h instanceof b ? h : "function" == typeof h ? new b(h, r.easeParams) : w[h] || F.defaultEase : F.defaultEase, r.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)for (t = this._targets.length; --t > -1;)this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0); else e = this._initProps(this.target, this._propLookup, this._siblings, o);
            if (e && F._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)for (i = this._firstPT; i;)i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = r.onUpdate, this._initted = !0
        }, r._initProps = function (e, i, n, s) {
            var r, o, a, l, h, u;
            if (null == e)return!1;
            D[e._gsTweenID] && U(), this.vars.css || e.style && e !== t && e.nodeType && E.css && this.vars.autoCSS !== !1 && M(this.vars, e);
            for (r in this.vars) {
                if (u = this.vars[r], B[r])u && (u instanceof Array || u.push && f(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[r] = u = this._swapSelfInParams(u, this)); else if (E[r] && (l = new E[r])._onInitTween(e, this.vars[r], this)) {
                    for (this._firstPT = h = {_next: this._firstPT, t: l, p: "setRatio", s: 0, c: 1, f: !0, n: r, pg: !0, pr: l._priority}, o = l._overwriteProps.length; --o > -1;)i[l._overwriteProps[o]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[r] = h = {_next: this._firstPT, t: e, p: r, f: "function" == typeof e[r], n: r, pg: !1, pr: 0}, h.s = h.f ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), h.c = "string" == typeof u && "=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * Number(u.substr(2)) : Number(u) - h.s || 0;
                h && h._next && (h._next._prev = h)
            }
            return s && this._kill(s, e) ? this._initProps(e, i, n, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && Z(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, s)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (D[e._gsTweenID] = !0), a)
        }, r.render = function (t, e, i) {
            var n, s, r, o, a = this._time, l = this._duration, h = this._rawPrevTime;
            if (t >= l)this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === u && "isPause" !== this.data) && h !== t && (i = !0, h > u && (s = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t : u); else if (1e-7 > t)this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0) && (s = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== u || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t : u)), this._initted || (i = !0); else if (this._totalTime = this._time = t, this._easeType) {
                var d = t / l, c = this._easeType, f = this._easePower;
                (1 === c || 3 === c && d >= .5) && (d = 1 - d), 3 === c && (d *= 2), 1 === f ? d *= d : 2 === f ? d *= d * d : 3 === f ? d *= d * d * d : 4 === f && (d *= d * d * d * d), this.ratio = 1 === c ? 1 - d : 2 === c ? d : .5 > t / l ? d / 2 : 1 - d / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc)return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))return this._time = this._totalTime = a, this._rawPrevTime = h, L.push(this), void(this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), r = this._firstPT; r;)r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || y), 0 === l && this._rawPrevTime === u && o !== u && (this._rawPrevTime = 0))
            }
        }, r._kill = function (t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target))return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : F.selector(e) || e;
            var n, s, r, o, a, l, h, u, d;
            if ((f(e) || R(e)) && "number" != typeof e[0])for (n = e.length; --n > -1;)this._kill(t, e[n]) && (l = !0); else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1;)if (e === this._targets[n]) {
                        a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                        break
                    }
                } else {
                    if (e !== this.target)return!1;
                    a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    if (h = t || a, u = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill), i && (F.onOverwrite || this.vars.onOverwrite)) {
                        for (r in h)a[r] && (d || (d = []), d.push(r));
                        if (!Y(this, i, e, d))return!1
                    }
                    for (r in h)(o = a[r]) && (o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[r]), u && (s[r] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }, r.invalidate = function () {
            return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -u, this.render(-this._delay)), this
        }, r._enabled = function (t, e) {
            if (a || o.wake(), t && this._gc) {
                var i, n = this._targets;
                if (n)for (i = n.length; --i > -1;)this._siblings[i] = X(n[i], this, !0); else this._siblings = X(this.target, this, !0)
            }
            return A.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? F._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }, F.to = function (t, e, i) {
            return new F(t, e, i)
        }, F.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new F(t, e, i)
        }, F.fromTo = function (t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new F(t, e, n)
        }, F.delayedCall = function (t, e, i, n, s) {
            return new F(e, 0, {delay: t, onComplete: e, onCompleteParams: i, onCompleteScope: n, onReverseComplete: e, onReverseCompleteParams: i, onReverseCompleteScope: n, immediateRender: !1, lazy: !1, useFrames: s, overwrite: 0})
        }, F.set = function (t, e) {
            return new F(t, 0, e)
        }, F.getTweensOf = function (t, e) {
            if (null == t)return[];
            t = "string" != typeof t ? t : F.selector(t) || t;
            var i, n, s, r;
            if ((f(t) || R(t)) && "number" != typeof t[0]) {
                for (i = t.length, n = []; --i > -1;)n = n.concat(F.getTweensOf(t[i], e));
                for (i = n.length; --i > -1;)for (r = n[i], s = i; --s > -1;)r === n[s] && n.splice(i, 1)
            } else for (n = X(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n
        }, F.killTweensOf = F.killDelayedCallsTo = function (t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var n = F.getTweensOf(t, e), s = n.length; --s > -1;)n[s]._kill(i, t)
        };
        var $ = g("plugins.TweenPlugin", function (t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = $.prototype
        }, !0);
        if (r = $.prototype, $.version = "1.10.1", $.API = 2, r._firstPT = null, r._addTween = function (t, e, i, n, s, r) {
            var o, a;
            return null != n && (o = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {_next: this._firstPT, t: t, p: e, s: i, c: o, f: "function" == typeof t[e], n: s || e, r: r}, a._next && (a._next._prev = a), a) : void 0
        }, r.setRatio = function (t) {
            for (var e, i = this._firstPT, n = 1e-6; i;)e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
        }, r._kill = function (t) {
            var e, i = this._overwriteProps, n = this._firstPT;
            if (null != t[this._propName])this._overwriteProps = []; else for (e = i.length; --e > -1;)null != t[i[e]] && i.splice(e, 1);
            for (; n;)null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
            return!1
        }, r._roundProps = function (t, e) {
            for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
        }, F._onPluginEvent = function (t, e) {
            var i, n, s, r, o, a = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; a;) {
                    for (o = a._next, n = s; n && n.pr > a.pr;)n = n._next;
                    (a._prev = n ? n._prev : r) ? a._prev._next = a : s = a, (a._next = n) ? n._prev = a : r = a, a = o
                }
                a = e._firstPT = s
            }
            for (; a;)a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
            return i
        }, $.activate = function (t) {
            for (var e = t.length; --e > -1;)t[e].API === $.API && (E[(new t[e])._propName] = t[e]);
            return!0
        }, m.plugin = function (t) {
            if (!(t && t.propName && t.init && t.API))throw"illegal plugin definition.";
            var e, i = t.propName, n = t.priority || 0, s = t.overwriteProps, r = {init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_roundProps", initAll: "_onInitAllProps"}, o = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                $.call(this, i, n), this._overwriteProps = s || []
            }, t.global === !0), a = o.prototype = new $(i);
            a.constructor = o, o.API = t.API;
            for (e in r)"function" == typeof t[e] && (a[r[e]] = t[e]);
            return o.version = t.version, $.activate([o]), o
        }, n = t._gsQueue) {
            for (s = 0; n.length > s; s++)n[s]();
            for (r in p)p[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
        }
        a = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), function (t) {
    function e(e, i) {
        var n, s = this, r = window.navigator, o = r.userAgent.toLowerCase();
        s.uid = t.rsModules.uid++, s.ns = ".rs" + s.uid;
        var a, l = document.createElement("div").style, h = ["webkit", "Moz", "ms", "O"], u = "", d = 0;
        for (n = 0; n < h.length; n++)a = h[n], !u && a + "Transform"in l && (u = a), a = a.toLowerCase(), window.requestAnimationFrame || (window.requestAnimationFrame = window[a + "RequestAnimationFrame"], window.cancelAnimationFrame = window[a + "CancelAnimationFrame"] || window[a + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame || (window.requestAnimationFrame = function (t, e) {
            var i = (new Date).getTime(), n = Math.max(0, 16 - (i - d)), s = window.setTimeout(function () {
                t(i + n)
            }, n);
            return d = i + n, s
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
            clearTimeout(t)
        }), s.isIPAD = o.match(/(ipad)/), s.isIOS = s.isIPAD || o.match(/(iphone|ipod)/), n = function (t) {
            return t = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || 0 > t.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [], {browser: t[1] || "", version: t[2] || "0"}
        }(o), h = {}, n.browser && (h[n.browser] = !0, h.version = n.version), h.chrome && (h.webkit = !0), s._a = h, s.isAndroid = -1 < o.indexOf("android"), s.slider = t(e), s.ev = t(s), s._b = t(document), s.st = t.extend({}, t.fn.royalSlider.defaults, i), s._c = s.st.transitionSpeed, s._d = 0, !s.st.allowCSS3 || h.webkit && !s.st.allowCSS3OnWebkit || (n = u + (u ? "T" : "t"), s._e = n + "ransform"in l && n + "ransition"in l, s._e && (s._f = u + (u ? "P" : "p") + "erspective"in l)), u = u.toLowerCase(), s._g = "-" + u + "-", s._h = "vertical" === s.st.slidesOrientation ? !1 : !0, s._i = s._h ? "left" : "top", s._j = s._h ? "width" : "height", s._k = -1, s._l = "fade" === s.st.transitionType ? !1 : !0, s._l || (s.st.sliderDrag = !1, s._m = 10), s._n = "z-index:0; display:none; opacity:0;", s._o = 0, s._p = 0, s._q = 0, t.each(t.rsModules, function (t, e) {
            "uid" !== t && e.call(s)
        }), s.slides = [], s._r = 0, (s.st.slides ? t(s.st.slides) : s.slider.children().detach()).each(function () {
            s._s(this, !0)
        }), s.st.randomizeSlides && s.slides.sort(function () {
            return.5 - Math.random()
        }), s.numSlides = s.slides.length, s._t(), s.st.startSlideId ? s.st.startSlideId > s.numSlides - 1 && (s.st.startSlideId = s.numSlides - 1) : s.st.startSlideId = 0, s._o = s.staticSlideId = s.currSlideId = s._u = s.st.startSlideId, s.currSlide = s.slides[s.currSlideId], s._v = 0, s.pointerMultitouch = !1, s.slider.addClass((s._h ? "rsHor" : "rsVer") + (s._l ? "" : " rsFade")), l = '<div class="rsOverflow"><div class="rsContainer">', s.slidesSpacing = s.st.slidesSpacing, s._w = (s._h ? s.slider.width() : s.slider.height()) + s.st.slidesSpacing, s._x = Boolean(0 < s._y), 1 >= s.numSlides && (s._z = !1), s._a1 = s._z && s._l ? 2 === s.numSlides ? 1 : 2 : 0, s._b1 = 6 > s.numSlides ? s.numSlides : 6, s._c1 = 0, s._d1 = 0, s.slidesJQ = [];
        for (n = 0; n < s.numSlides; n++)s.slidesJQ.push(t('<div style="' + (s._l ? "" : n !== s.currSlideId ? s._n : "z-index:0;") + '" class="rsSlide "></div>'));
        s._e1 = l = t(l + "</div></div>");
        var c = s.ns, u = function (t, e, i, n, r) {
            s._j1 = t + e + c, s._k1 = t + i + c, s._l1 = t + n + c, r && (s._m1 = t + r + c)
        };
        n = r.pointerEnabled, s.pointerEnabled = n || r.msPointerEnabled, s.pointerEnabled ? (s.hasTouch = !1, s._n1 = .2, s.pointerMultitouch = Boolean(1 < r[(n ? "m" : "msM") + "axTouchPoints"]), n ? u("pointer", "down", "move", "up", "cancel") : u("MSPointer", "Down", "Move", "Up", "Cancel")) : (s.isIOS ? s._j1 = s._k1 = s._l1 = s._m1 = "" : u("mouse", "down", "move", "up"), "ontouchstart"in window || "createTouch"in document ? (s.hasTouch = !0, s._j1 += " touchstart" + c, s._k1 += " touchmove" + c, s._l1 += " touchend" + c, s._m1 += " touchcancel" + c, s._n1 = .5, s.st.sliderTouch && (s._f1 = !0)) : (s.hasTouch = !1, s._n1 = .2)), s.st.sliderDrag && (s._f1 = !0, h.msie || h.opera ? s._g1 = s._h1 = "move" : h.mozilla ? (s._g1 = "-moz-grab", s._h1 = "-moz-grabbing") : h.webkit && -1 != r.platform.indexOf("Mac") && (s._g1 = "-webkit-grab", s._h1 = "-webkit-grabbing"), s._i1()), s.slider.html(l), s._o1 = s.st.controlsInside ? s._e1 : s.slider, s._p1 = s._e1.children(".rsContainer"), s.pointerEnabled && s._p1.css((n ? "" : "-ms-") + "touch-action", s._h ? "pan-y" : "pan-x"), s._q1 = t('<div class="rsPreloader"></div>'), r = s._p1.children(".rsSlide"), s._r1 = s.slidesJQ[s.currSlideId], s._s1 = 0, s._e ? (s._t1 = "transition-property", s._u1 = "transition-duration", s._v1 = "transition-timing-function", s._w1 = s._x1 = s._g + "transform", s._f ? (h.webkit && !h.chrome && s.slider.addClass("rsWebkit3d"), s._y1 = "translate3d(", s._z1 = "px, ", s._a2 = "px, 0px)") : (s._y1 = "translate(", s._z1 = "px, ", s._a2 = "px)"), s._l ? s._p1[s._g + s._t1] = s._g + "transform" : (h = {}, h[s._g + s._t1] = "opacity", h[s._g + s._u1] = s.st.transitionSpeed + "ms", h[s._g + s._v1] = s.st.css3easeInOut, r.css(h))) : (s._x1 = "left", s._w1 = "top");
        var f;
        t(window).on("resize" + s.ns, function () {
            f && clearTimeout(f), f = setTimeout(function () {
                s.updateSliderSize()
            }, 50)
        }), s.ev.trigger("rsAfterPropsSetup"), s.updateSliderSize(), s.st.keyboardNavEnabled && s._b2(), s.st.arrowsNavHideOnTouch && (s.hasTouch || s.pointerMultitouch) && (s.st.arrowsNav = !1), s.st.arrowsNav && (r = s._o1, t('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(r), s._c2 = r.children(".rsArrowLeft").click(function (t) {
            t.preventDefault(), s.prev()
        }), s._d2 = r.children(".rsArrowRight").click(function (t) {
            t.preventDefault(), s.next()
        }), s.st.arrowsNavAutoHide && !s.hasTouch && (s._c2.addClass("rsHidden"), s._d2.addClass("rsHidden"), r.one("mousemove.arrowshover", function () {
            s._c2.removeClass("rsHidden"), s._d2.removeClass("rsHidden")
        }), r.hover(function () {
            s._e2 || (s._c2.removeClass("rsHidden"), s._d2.removeClass("rsHidden"))
        }, function () {
            s._e2 || (s._c2.addClass("rsHidden"), s._d2.addClass("rsHidden"))
        })), s.ev.on("rsOnUpdateNav", function () {
            s._f2()
        }), s._f2()), s._f1 ? s._p1.on(s._j1, function (t) {
            s._g2(t)
        }) : s.dragSuccess = !1;
        var p = ["rsPlayBtnIcon", "rsPlayBtn", "rsCloseVideoBtn", "rsCloseVideoIcn"];
        s._p1.click(function (e) {
            if (!s.dragSuccess) {
                var i = t(e.target).attr("class");
                if (-1 !== t.inArray(i, p) && s.toggleVideo())return!1;
                if (s.st.navigateByClick && !s._h2) {
                    if (t(e.target).closest(".rsNoDrag", s._r1).length)return!0;
                    s._i2(e)
                }
                s.ev.trigger("rsSlideClick", e)
            }
        }).on("click.rs", "a", function (t) {
            return s.dragSuccess ? !1 : (s._h2 = !0, void setTimeout(function () {
                s._h2 = !1
            }, 3))
        }), s.ev.trigger("rsAfterInit")
    }

    t.rsModules || (t.rsModules = {uid: 0}), e.prototype = {constructor: e, _i2: function (t) {
        t = t[this._h ? "pageX" : "pageY"] - this._j2, t >= this._q ? this.next() : 0 > t && this.prev()
    }, _t: function () {
        var t;
        t = this.st.numImagesToPreload, (this._z = this.st.loop) && (2 === this.numSlides ? (this._z = !1, this.st.loopRewind = !0) : 2 > this.numSlides && (this.st.loopRewind = this._z = !1)), this._z && t > 0 && (4 >= this.numSlides ? t = 1 : this.st.numImagesToPreload > (this.numSlides - 1) / 2 && (t = Math.floor((this.numSlides - 1) / 2))), this._y = t
    }, _s: function (e, i) {
        function n(t, e) {
            if (a.images.push(e ? t.attr(e) : t.text()), l) {
                l = !1, a.caption = "src" === e ? t.attr("alt") : t.contents(), a.image = a.images[0], a.videoURL = t.attr("data-rsVideo");
                var i = t.attr("data-rsw"), n = t.attr("data-rsh");
                "undefined" != typeof i && !1 !== i && "undefined" != typeof n && !1 !== n ? (a.iW = parseInt(i, 10), a.iH = parseInt(n, 10)) : o.st.imgWidth && o.st.imgHeight && (a.iW = o.st.imgWidth, a.iH = o.st.imgHeight)
            }
        }

        var s, r, o = this, a = {}, l = !0;
        return e = t(e), o._k2 = e, o.ev.trigger("rsBeforeParseNode", [e, a]), a.stopParsing ? void 0 : (e = o._k2, a.id = o._r, a.contentAdded = !1, o._r++, a.images = [], a.isBig = !1, a.hasCover || (e.hasClass("rsImg") ? (r = e, s = !0) : (r = e.find(".rsImg"), r.length && (s = !0)), s ? (a.bigImage = r.eq(0).attr("data-rsBigImg"), r.each(function () {
            var e = t(this);
            e.is("a") ? n(e, "href") : e.is("img") ? n(e, "src") : n(e)
        })) : e.is("img") && (e.addClass("rsImg rsMainSlideImage"), n(e, "src"))), r = e.find(".rsCaption"), r.length && (a.caption = r.remove()), a.content = e, o.ev.trigger("rsAfterParseNode", [e, a]), i && o.slides.push(a), 0 === a.images.length && (a.isLoaded = !0, a.isRendered = !1, a.isLoading = !1, a.images = null), a)
    }, _b2: function () {
        var t, e, i = this, n = function (t) {
            37 === t ? i.prev() : 39 === t && i.next()
        };
        i._b.on("keydown" + i.ns, function (s) {
            i._l2 || (e = s.keyCode, 37 !== e && 39 !== e || t || (n(e), t = setInterval(function () {
                n(e)
            }, 700)))
        }).on("keyup" + i.ns, function (e) {
            t && (clearInterval(t), t = null)
        })
    }, goTo: function (t, e) {
        t !== this.currSlideId && this._m2(t, this.st.transitionSpeed, !0, !e)
    }, destroy: function (e) {
        this.ev.trigger("rsBeforeDestroy"), this._b.off("keydown" + this.ns + " keyup" + this.ns + " " + this._k1 + " " + this._l1), this._p1.off(this._j1 + " click"), this.slider.data("royalSlider", null), t.removeData(this.slider, "royalSlider"), t(window).off("resize" + this.ns), this.loadingTimeout && clearTimeout(this.loadingTimeout), e && this.slider.remove(), this.ev = this.slider = this.slides = null
    }, _n2: function (e, i) {
        function n(i, n, o) {
            i.isAdded ? (s(n, i), r(n, i)) : (o || (o = h.slidesJQ[n]), i.holder ? o = i.holder : (o = h.slidesJQ[n] = t(o), i.holder = o), i.appendOnLoaded = !1, r(n, i, o), s(n, i), h._p2(i, o, e), i.isAdded = !0)
        }

        function s(t, i) {
            i.contentAdded || (h.setItemHtml(i, e), e || (i.contentAdded = !0))
        }

        function r(t, e, i) {
            h._l && (i || (i = h.slidesJQ[t]), i.css(h._i, (t + h._d1 + c) * h._w))
        }

        function o(t) {
            if (u) {
                if (t > d - 1)return o(t - d);
                if (0 > t)return o(d + t)
            }
            return t
        }

        var a, l, h = this, u = h._z, d = h.numSlides;
        if (!isNaN(i))return o(i);
        var c, f, p = h.currSlideId, _ = e ? Math.abs(h._o2 - h.currSlideId) >= h.numSlides - 1 ? 0 : 1 : h._y, m = Math.min(2, _), g = !1, v = !1;
        for (l = p; p + 1 + m > l; l++)if (f = o(l), (a = h.slides[f]) && (!a.isAdded || !a.positionSet)) {
            g = !0;
            break
        }
        for (l = p - 1; l > p - 1 - m; l--)if (f = o(l), (a = h.slides[f]) && (!a.isAdded || !a.positionSet)) {
            v = !0;
            break
        }
        if (g)for (l = p; p + _ + 1 > l; l++)f = o(l), c = Math.floor((h._u - (p - l)) / h.numSlides) * h.numSlides, (a = h.slides[f]) && n(a, f);
        if (v)for (l = p - 1; l > p - 1 - _; l--)f = o(l), c = Math.floor((h._u - (p - l)) / d) * d, (a = h.slides[f]) && n(a, f);
        if (!e)for (m = o(p - _), p = o(p + _), _ = m > p ? 0 : m, l = 0; d > l; l++)m > p && l > m - 1 || !(_ > l || l > p) || (a = h.slides[l]) && a.holder && (a.holder.detach(), a.isAdded = !1)
    }, setItemHtml: function (e, i) {
        var n = this, s = function () {
            if (e.images) {
                if (!e.isLoading) {
                    var i, s;
                    if (e.content.hasClass("rsImg") ? (i = e.content, s = !0) : i = e.content.find(".rsImg:not(img)"), i && !i.is("img") && i.each(function () {
                        var i = t(this), n = '<img class="rsImg" src="' + (i.is("a") ? i.attr("href") : i.text()) + '" />';
                        s ? e.content = t(n) : i.replaceWith(n)
                    }), i = s ? e.content : e.content.find("img.rsImg"), h(), i.eq(0).addClass("rsMainSlideImage"), e.iW && e.iH && (e.isLoaded || n._q2(e), a()), e.isLoading = !0, e.isBig)t("<img />").on("load.rs error.rs", function (e) {
                        t(this).off("load.rs error.rs"), r([this], !0)
                    }).attr("src", e.image); else {
                        e.loaded = [], e.numStartedLoad = 0, i = function (i) {
                            t(this).off("load.rs error.rs"), e.loaded.push(this), e.loaded.length === e.numStartedLoad && r(e.loaded, !1)
                        };
                        for (var o = 0; o < e.images.length; o++) {
                            var l = t("<img />");
                            e.numStartedLoad++, l.on("load.rs error.rs", i).attr("src", e.images[o])
                        }
                    }
                }
            } else e.isRendered = !0, e.isLoaded = !0, e.isLoading = !1, a(!0)
        }, r = function (t, i) {
            if (t.length) {
                var n = t[0];
                if (i !== e.isBig)(n = e.holder.children()) && 1 < n.length && u(); else if (e.iW && e.iH)o(); else if (e.iW = n.width, e.iH = n.height, e.iW && e.iH)o(); else {
                    var s = new Image;
                    s.onload = function () {
                        s.width ? (e.iW = s.width, e.iH = s.height, o()) : setTimeout(function () {
                            s.width && (e.iW = s.width, e.iH = s.height), o()
                        }, 1e3)
                    }, s.src = n.src
                }
            } else o()
        }, o = function () {
            e.isLoaded = !0, e.isLoading = !1, a(), u(), l()
        }, a = function () {
            if (!e.isAppended && n.ev) {
                var t = n.st.visibleNearby, s = e.id - n._o;
                i || e.appendOnLoaded || !n.st.fadeinLoadedSlide || 0 !== s && (!(t || n._r2 || n._l2) || -1 !== s && 1 !== s) || (t = {visibility: "visible", opacity: 0}, t[n._g + "transition"] = "opacity 400ms ease-in-out", e.content.css(t), setTimeout(function () {
                    e.content.css("opacity", 1)
                }, 16)), e.holder.find(".rsPreloader").length ? e.holder.append(e.content) : e.holder.html(e.content), e.isAppended = !0, e.isLoaded && (n._q2(e), l()), e.sizeReady || (e.sizeReady = !0, setTimeout(function () {
                    n.ev.trigger("rsMaybeSizeReady", e)
                }, 100))
            }
        }, l = function () {
            !e.loadedTriggered && n.ev && (e.isLoaded = e.loadedTriggered = !0, e.holder.trigger("rsAfterContentSet"), n.ev.trigger("rsAfterContentSet", e))
        }, h = function () {
            n.st.usePreloader && e.holder.html(n._q1.clone())
        }, u = function (t) {
            n.st.usePreloader && (t = e.holder.find(".rsPreloader"), t.length && t.remove())
        };
        e.isLoaded ? a() : i ? !n._l && e.images && e.iW && e.iH ? s() : (e.holder.isWaiting = !0, h(), e.holder.slideId = -99) : s()
    }, _p2: function (t, e, i) {
        this._p1.append(t.holder), t.appendOnLoaded = !1
    }, _g2: function (e, i) {
        var n, s = this, r = "touchstart" === e.type;
        if (s._s2 = r, s.ev.trigger("rsDragStart"), t(e.target).closest(".rsNoDrag", s._r1).length)return s.dragSuccess = !1, !0;
        if (!i && s._r2 && (s._t2 = !0, s._u2()), s.dragSuccess = !1, s._l2)r && (s._v2 = !0); else {
            if (r && (s._v2 = !1), s._w2(), r) {
                var o = e.originalEvent.touches;
                if (!(o && 0 < o.length))return;
                n = o[0], 1 < o.length && (s._v2 = !0)
            } else e.preventDefault(), n = e, s.pointerEnabled && (n = n.originalEvent);
            s._l2 = !0, s._b.on(s._k1, function (t) {
                s._x2(t, i)
            }).on(s._l1, function (t) {
                s._y2(t, i)
            }), s._z2 = "", s._a3 = !1, s._b3 = n.pageX, s._c3 = n.pageY, s._d3 = s._v = (i ? s._e3 : s._h) ? n.pageX : n.pageY, s._f3 = 0, s._g3 = 0, s._h3 = i ? s._i3 : s._p, s._j3 = (new Date).getTime(), r && s._e1.on(s._m1, function (t) {
                s._y2(t, i)
            })
        }
    }, _k3: function (t, e) {
        if (this._l3) {
            var i = this._m3, n = t.pageX - this._b3, s = t.pageY - this._c3, r = this._h3 + n, o = this._h3 + s, a = e ? this._e3 : this._h, r = a ? r : o, o = this._z2;
            this._a3 = !0, this._b3 = t.pageX, this._c3 = t.pageY, "x" === o && 0 !== n ? this._f3 = n > 0 ? 1 : -1 : "y" === o && 0 !== s && (this._g3 = s > 0 ? 1 : -1), o = a ? this._b3 : this._c3, n = a ? n : s, e ? r > this._n3 ? r = this._h3 + n * this._n1 : r < this._o3 && (r = this._h3 + n * this._n1) : this._z || (0 >= this.currSlideId && 0 < o - this._d3 && (r = this._h3 + n * this._n1), this.currSlideId >= this.numSlides - 1 && 0 > o - this._d3 && (r = this._h3 + n * this._n1)), this._h3 = r, 200 < i - this._j3 && (this._j3 = i, this._v = o), e ? this._q3(this._h3) : this._l && this._p3(this._h3)
        }
    }, _x2: function (t, e) {
        var i, n = this, s = "touchmove" === t.type;
        if (!n._s2 || s) {
            if (s) {
                if (n._r3)return;
                var r = t.originalEvent.touches;
                if (!r)return;
                if (1 < r.length)return;
                i = r[0]
            } else i = t, n.pointerEnabled && (i = i.originalEvent);
            if (n._a3 || (n._e && (e ? n._s3 : n._p1).css(n._g + n._u1, "0s"), function o() {
                n._l2 && (n._t3 = requestAnimationFrame(o), n._u3 && n._k3(n._u3, e))
            }()), n._l3)t.preventDefault(), n._m3 = (new Date).getTime(), n._u3 = i; else if (r = e ? n._e3 : n._h, i = Math.abs(i.pageX - n._b3) - Math.abs(i.pageY - n._c3) - (r ? -7 : 7), i > 7) {
                if (r)t.preventDefault(), n._z2 = "x"; else if (s)return void n._v3(t);
                n._l3 = !0
            } else if (-7 > i) {
                if (r) {
                    if (s)return void n._v3(t)
                } else t.preventDefault(), n._z2 = "y";
                n._l3 = !0
            }
        }
    }, _v3: function (t, e) {
        this._r3 = !0, this._a3 = this._l2 = !1, this._y2(t)
    }, _y2: function (e, i) {
        function n(t) {
            return 100 > t ? 100 : t > 500 ? 500 : t
        }

        function s(t, e) {
            (h._l || i) && (a = (-h._u - h._d1) * h._w, l = Math.abs(h._p - a), h._c = l / e, t && (h._c += 250), h._c = n(h._c), h._x3(a, !1))
        }

        var r, o, a, l, h = this;
        if (r = -1 < e.type.indexOf("touch"), !h._s2 || r)if (h._s2 = !1, h.ev.trigger("rsDragRelease"), h._u3 = null, h._l2 = !1, h._r3 = !1, h._l3 = !1, h._m3 = 0, cancelAnimationFrame(h._t3), h._a3 && (i ? h._q3(h._h3) : h._l && h._p3(h._h3)), h._b.off(h._k1).off(h._l1), r && h._e1.off(h._m1), h._i1(), !h._a3 && !h._v2 && i && h._w3) {
            var u = t(e.target).closest(".rsNavItem");
            u.length && h.goTo(u.index())
        } else {
            if (o = i ? h._e3 : h._h, !h._a3 || "y" === h._z2 && o || "x" === h._z2 && !o) {
                if (i || !h._t2)return h._t2 = !1, void(h.dragSuccess = !1);
                if (h._t2 = !1, h.st.navigateByClick)return h._i2(h.pointerEnabled ? e.originalEvent : e), void(h.dragSuccess = !0);
                h.dragSuccess = !0
            } else h.dragSuccess = !0;
            h._t2 = !1, h._z2 = "";
            var d = h.st.minSlideOffset;
            r = r ? e.originalEvent.changedTouches[0] : h.pointerEnabled ? e.originalEvent : e;
            var c = o ? r.pageX : r.pageY, f = h._d3;
            r = h._v;
            var p = h.currSlideId, _ = h.numSlides, m = o ? h._f3 : h._g3, g = h._z;
            if (Math.abs(c - f), r = c - r, o = (new Date).getTime() - h._j3, o = Math.abs(r) / o, 0 === m || 1 >= _)s(!0, o); else {
                if (!g && !i)if (0 >= p) {
                    if (m > 0)return void s(!0, o)
                } else if (p >= _ - 1 && 0 > m)return void s(!0, o);
                if (i) {
                    if (a = h._i3, a > h._n3)a = h._n3; else if (a < h._o3)a = h._o3; else {
                        if (c = o * o / .006, u = -h._i3, f = h._y3 - h._z3 + h._i3, r > 0 && c > u ? (u += h._z3 / (15 / (c / o * .003)), o = o * u / c, c = u) : 0 > r && c > f && (f += h._z3 / (15 / (c / o * .003)), o = o * f / c, c = f), u = Math.max(Math.round(o / .003), 50), a += c * (0 > r ? -1 : 1), a > h._n3)return void h._a4(a, u, !0, h._n3, 200);
                        if (a < h._o3)return void h._a4(a, u, !0, h._o3, 200)
                    }
                    h._a4(a, u, !0)
                } else u = function (t) {
                    var e = Math.floor(t / h._w);
                    return t - e * h._w > d && e++, e
                }, c > f + d ? 0 > m ? s(!1, o) : (u = u(c - f), h._m2(h.currSlideId - u, n(Math.abs(h._p - (-h._u - h._d1 + u) * h._w) / o), !1, !0, !0)) : f - d > c ? m > 0 ? s(!1, o) : (u = u(f - c), h._m2(h.currSlideId + u, n(Math.abs(h._p - (-h._u - h._d1 - u) * h._w) / o), !1, !0, !0)) : s(!1, o)
            }
        }
    }, _p3: function (t) {
        t = this._p = t, this._e ? this._p1.css(this._x1, this._y1 + (this._h ? t + this._z1 + 0 : 0 + this._z1 + t) + this._a2) : this._p1.css(this._h ? this._x1 : this._w1, t)
    }, updateSliderSize: function (t) {
        var e, i;
        if (this.slider) {
            if (this.st.autoScaleSlider) {
                var n = this.st.autoScaleSliderWidth, s = this.st.autoScaleSliderHeight;
                this.st.autoScaleHeight ? (e = this.slider.width(), e != this.width && (this.slider.css("height", s / n * e), e = this.slider.width()), i = this.slider.height()) : (i = this.slider.height(), i != this.height && (this.slider.css("width", n / s * i), i = this.slider.height()), e = this.slider.width())
            } else e = this.slider.width(), i = this.slider.height();
            if (t || e != this.width || i != this.height) {
                for (this.width = e, this.height = i, this._b4 = e, this._c4 = i, this.ev.trigger("rsBeforeSizeSet"), this.ev.trigger("rsAfterSizePropSet"), this._e1.css({width: this._b4, height: this._c4}), this._w = (this._h ? this._b4 : this._c4) + this.st.slidesSpacing, this._d4 = this.st.imageScalePadding, e = 0; e < this.slides.length; e++)t = this.slides[e], t.positionSet = !1, t && t.images && t.isLoaded && (t.isRendered = !1, this._q2(t));
                if (this._e4)for (e = 0; e < this._e4.length; e++)t = this._e4[e], t.holder.css(this._i, (t.id + this._d1) * this._w);
                this._n2(), this._l && (this._e && this._p1.css(this._g + "transition-duration", "0s"), this._p3((-this._u - this._d1) * this._w)), this.ev.trigger("rsOnUpdateNav")
            }
            this._j2 = this._e1.offset(), this._j2 = this._j2[this._i]
        }
    }, appendSlide: function (e, i) {
        var n = this._s(e);
        (isNaN(i) || i > this.numSlides) && (i = this.numSlides), this.slides.splice(i, 0, n), this.slidesJQ.splice(i, 0, t('<div style="' + (this._l ? "position:absolute;" : this._n) + '" class="rsSlide"></div>')), i <= this.currSlideId && this.currSlideId++, this.ev.trigger("rsOnAppendSlide", [n, i]), this._f4(i), i === this.currSlideId && this.ev.trigger("rsAfterSlideChange")
    }, removeSlide: function (t) {
        var e = this.slides[t];
        e && (e.holder && e.holder.remove(), t < this.currSlideId && this.currSlideId--, this.slides.splice(t, 1), this.slidesJQ.splice(t, 1), this.ev.trigger("rsOnRemoveSlide", [t]), this._f4(t), t === this.currSlideId && this.ev.trigger("rsAfterSlideChange"))
    }, _f4: function (t) {
        var e = this;
        for (t = e.numSlides, t = 0 >= e._u ? 0 : Math.floor(e._u / t), e.numSlides = e.slides.length, 0 === e.numSlides ? (e.currSlideId = e._d1 = e._u = 0, e.currSlide = e._g4 = null) : e._u = t * e.numSlides + e.currSlideId, t = 0; t < e.numSlides; t++)e.slides[t].id = t;
        e.currSlide = e.slides[e.currSlideId], e._r1 = e.slidesJQ[e.currSlideId], e.currSlideId >= e.numSlides ? e.goTo(e.numSlides - 1) : 0 > e.currSlideId && e.goTo(0), e._t(), e._l && e._p1.css(e._g + e._u1, "0ms"), e._h4 && clearTimeout(e._h4),
            e._h4 = setTimeout(function () {
                e._l && e._p3((-e._u - e._d1) * e._w), e._n2(), e._l || e._r1.css({display: "block", opacity: 1})
            }, 14), e.ev.trigger("rsOnUpdateNav")
    }, _i1: function () {
        this._f1 && this._l && (this._g1 ? this._e1.css("cursor", this._g1) : (this._e1.removeClass("grabbing-cursor"), this._e1.addClass("grab-cursor")))
    }, _w2: function () {
        this._f1 && this._l && (this._h1 ? this._e1.css("cursor", this._h1) : (this._e1.removeClass("grab-cursor"), this._e1.addClass("grabbing-cursor")))
    }, next: function (t) {
        this._m2("next", this.st.transitionSpeed, !0, !t)
    }, prev: function (t) {
        this._m2("prev", this.st.transitionSpeed, !0, !t)
    }, _m2: function (t, e, i, n, s) {
        var r, o, a, l = this;
        if (l.ev.trigger("rsBeforeMove", [t, n]), a = "next" === t ? l.currSlideId + 1 : "prev" === t ? l.currSlideId - 1 : t = parseInt(t, 10), !l._z) {
            if (0 > a)return void l._i4("left", !n);
            if (a >= l.numSlides)return void l._i4("right", !n)
        }
        l._r2 && (l._u2(!0), i = !1), o = a - l.currSlideId, a = l._o2 = l.currSlideId;
        var h = l.currSlideId + o;
        n = l._u;
        var u;
        l._z ? (h = l._n2(!1, h), n += o) : n = h, l._o = h, l._g4 = l.slidesJQ[l.currSlideId], l._u = n, l.currSlideId = l._o, l.currSlide = l.slides[l.currSlideId], l._r1 = l.slidesJQ[l.currSlideId];
        var h = l.st.slidesDiff, d = Boolean(o > 0);
        o = Math.abs(o);
        var c = Math.floor(a / l._y), f = Math.floor((a + (d ? h : -h)) / l._y), c = (d ? Math.max(c, f) : Math.min(c, f)) * l._y + (d ? l._y - 1 : 0);
        if (c > l.numSlides - 1 ? c = l.numSlides - 1 : 0 > c && (c = 0), a = d ? c - a : a - c, a > l._y && (a = l._y), o > a + h)for (l._d1 += (o - (a + h)) * (d ? -1 : 1), e *= 1.4, a = 0; a < l.numSlides; a++)l.slides[a].positionSet = !1;
        l._c = e, l._n2(!0), s || (u = !0), r = (-n - l._d1) * l._w, u ? setTimeout(function () {
            l._j4 = !1, l._x3(r, t, !1, i), l.ev.trigger("rsOnUpdateNav")
        }, 0) : (l._x3(r, t, !1, i), l.ev.trigger("rsOnUpdateNav"))
    }, _f2: function () {
        this.st.arrowsNav && (1 >= this.numSlides ? (this._c2.css("display", "none"), this._d2.css("display", "none")) : (this._c2.css("display", "block"), this._d2.css("display", "block"), this._z || this.st.loopRewind || (0 === this.currSlideId ? this._c2.addClass("rsArrowDisabled") : this._c2.removeClass("rsArrowDisabled"), this.currSlideId === this.numSlides - 1 ? this._d2.addClass("rsArrowDisabled") : this._d2.removeClass("rsArrowDisabled"))))
    }, _x3: function (e, i, n, s, r) {
        function o() {
            var t;
            a && (t = a.data("rsTimeout")) && (a !== l && a.css({opacity: 0, display: "none", zIndex: 0}), clearTimeout(t), a.data("rsTimeout", "")), (t = l.data("rsTimeout")) && (clearTimeout(t), l.data("rsTimeout", ""))
        }

        var a, l, h = this, u = {};
        isNaN(h._c) && (h._c = 400), h._p = h._h3 = e, h.ev.trigger("rsBeforeAnimStart"), h._e ? h._l ? (h._c = parseInt(h._c, 10), n = h._g + h._v1, u[h._g + h._u1] = h._c + "ms", u[n] = s ? t.rsCSS3Easing[h.st.easeInOut] : t.rsCSS3Easing[h.st.easeOut], h._p1.css(u), s || !h.hasTouch ? setTimeout(function () {
            h._p3(e)
        }, 5) : h._p3(e)) : (h._c = h.st.transitionSpeed, a = h._g4, l = h._r1, l.data("rsTimeout") && l.css("opacity", 0), o(), a && a.data("rsTimeout", setTimeout(function () {
            u[h._g + h._u1] = "0ms", u.zIndex = 0, u.display = "none", a.data("rsTimeout", ""), a.css(u), setTimeout(function () {
                a.css("opacity", 0)
            }, 16)
        }, h._c + 60)), u.display = "block", u.zIndex = h._m, u.opacity = 0, u[h._g + h._u1] = "0ms", u[h._g + h._v1] = t.rsCSS3Easing[h.st.easeInOut], l.css(u), l.data("rsTimeout", setTimeout(function () {
            l.css(h._g + h._u1, h._c + "ms"), l.data("rsTimeout", setTimeout(function () {
                l.css("opacity", 1), l.data("rsTimeout", "")
            }, 20))
        }, 20))) : h._l ? (u[h._h ? h._x1 : h._w1] = e + "px", h._p1.animate(u, h._c, s ? h.st.easeInOut : h.st.easeOut)) : (a = h._g4, l = h._r1, l.stop(!0, !0).css({opacity: 0, display: "block", zIndex: h._m}), h._c = h.st.transitionSpeed, l.animate({opacity: 1}, h._c, h.st.easeInOut), o(), a && a.data("rsTimeout", setTimeout(function () {
            a.stop(!0, !0).css({opacity: 0, display: "none", zIndex: 0})
        }, h._c + 60))), h._r2 = !0, h.loadingTimeout && clearTimeout(h.loadingTimeout), h.loadingTimeout = r ? setTimeout(function () {
            h.loadingTimeout = null, r.call()
        }, h._c + 60) : setTimeout(function () {
            h.loadingTimeout = null, h._k4(i)
        }, h._c + 60)
    }, _u2: function (t) {
        if (this._r2 = !1, clearTimeout(this.loadingTimeout), this._l)if (this._e) {
            if (!t) {
                t = this._p;
                var e = this._h3 = this._l4();
                this._p1.css(this._g + this._u1, "0ms"), t !== e && this._p3(e)
            }
        } else this._p1.stop(!0), this._p = parseInt(this._p1.css(this._x1), 10); else 20 < this._m ? this._m = 10 : this._m++
    }, _l4: function () {
        var t = window.getComputedStyle(this._p1.get(0), null).getPropertyValue(this._g + "transform").replace(/^matrix\(/i, "").split(/, |\)$/g), e = 0 === t[0].indexOf("matrix3d");
        return parseInt(t[this._h ? e ? 12 : 4 : e ? 13 : 5], 10)
    }, _m4: function (t, e) {
        return this._e ? this._y1 + (e ? t + this._z1 + 0 : 0 + this._z1 + t) + this._a2 : t
    }, _k4: function (t) {
        this._l || (this._r1.css("z-index", 0), this._m = 10), this._r2 = !1, this.staticSlideId = this.currSlideId, this._n2(), this._n4 = !1, this.ev.trigger("rsAfterSlideChange")
    }, _i4: function (t, e) {
        var i = this, n = (-i._u - i._d1) * i._w;
        if (0 !== i.numSlides && !i._r2)if (i.st.loopRewind)i.goTo("left" === t ? i.numSlides - 1 : 0, e); else if (i._l) {
            i._c = 200;
            var s = function () {
                i._r2 = !1
            };
            i._x3(n + ("left" === t ? 30 : -30), "", !1, !0, function () {
                i._r2 = !1, i._x3(n, "", !1, !0, s)
            })
        }
    }, _q2: function (t, e) {
        if (!t.isRendered) {
            var i, n, s = t.content, r = "rsMainSlideImage", o = this.st.imageAlignCenter, a = this.st.imageScaleMode;
            if (t.videoURL && (r = "rsVideoContainer", "fill" !== a ? i = !0 : (n = s, n.hasClass(r) || (n = n.find("." + r)), n.css({width: "100%", height: "100%"}), r = "rsMainSlideImage")), s.hasClass(r) || (s = s.find("." + r)), s) {
                var l = t.iW, h = t.iH;
                if (t.isRendered = !0, "none" !== a || o) {
                    r = "fill" !== a ? this._d4 : 0, n = this._b4 - 2 * r;
                    var u, d, c = this._c4 - 2 * r, f = {};
                    "fit-if-smaller" === a && (l > n || h > c) && (a = "fit"), ("fill" === a || "fit" === a) && (u = n / l, d = c / h, u = "fill" == a ? u > d ? u : d : "fit" == a ? d > u ? u : d : 1, l = Math.ceil(l * u, 10), h = Math.ceil(h * u, 10)), "none" !== a && (f.width = l, f.height = h, i && s.find(".rsImg").css({width: "100%", height: "100%"})), o && (f.marginLeft = Math.floor((n - l) / 2) + r, f.marginTop = Math.floor((c - h) / 2) + r), s.css(f)
                }
            }
        }
    }}, t.rsProto = e.prototype, t.fn.royalSlider = function (i) {
        var n = arguments;
        return this.each(function () {
            var s = t(this);
            if ("object" != typeof i && i) {
                if ((s = s.data("royalSlider")) && s[i])return s[i].apply(s, Array.prototype.slice.call(n, 1))
            } else s.data("royalSlider") || s.data("royalSlider", new e(s, i))
        })
    }, t.fn.royalSlider.defaults = {slidesSpacing: 8, startSlideId: 0, loop: !1, loopRewind: !1, numImagesToPreload: 4, fadeinLoadedSlide: !0, slidesOrientation: "horizontal", transitionType: "move", transitionSpeed: 600, controlNavigation: "bullets", controlsInside: !0, arrowsNav: !0, arrowsNavAutoHide: !0, navigateByClick: !0, randomizeSlides: !1, sliderDrag: !0, sliderTouch: !0, keyboardNavEnabled: !1, fadeInAfterLoaded: !0, allowCSS3: !0, allowCSS3OnWebkit: !0, addActiveClass: !1, autoHeight: !1, easeOut: "easeOutSine", easeInOut: "easeInOutSine", minSlideOffset: 10, imageScaleMode: "fit-if-smaller", imageAlignCenter: !0, imageScalePadding: 4, usePreloader: !0, autoScaleSlider: !1, autoScaleSliderWidth: 800, autoScaleSliderHeight: 400, autoScaleHeight: !0, arrowsNavHideOnTouch: !1, globalCaption: !1, slidesDiff: 2}, t.rsCSS3Easing = {easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)", easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)"}, t.extend(jQuery.easing, {easeInOutSine: function (t, e, i, n, s) {
        return-n / 2 * (Math.cos(Math.PI * e / s) - 1) + i
    }, easeOutSine: function (t, e, i, n, s) {
        return n * Math.sin(e / s * (Math.PI / 2)) + i
    }, easeOutCubic: function (t, e, i, n, s) {
        return n * ((e = e / s - 1) * e * e + 1) + i
    }})
}(jQuery, window), function (t) {
    t.rsProto._o4 = function () {
        var t, e = this;
        e.st.addActiveClass && e.ev.on("rsOnUpdateNav", function () {
            t && clearTimeout(t), t = setTimeout(function () {
                e._g4 && e._g4.removeClass("rsActiveSlide"), e._r1 && e._r1.addClass("rsActiveSlide"), t = null
            }, 50)
        })
    }, t.rsModules.activeClass = t.rsProto._o4
}(jQuery), function (t) {
    t.extend(t.rsProto, {_p4: function () {
        function e() {
            var t = n.currSlide;
            if (n.currSlide && n.currSlide.isLoaded && n._t4 !== t) {
                if (0 < n._s4.length) {
                    for (i = 0; i < n._s4.length; i++)clearTimeout(n._s4[i]);
                    n._s4 = []
                }
                if (0 < n._r4.length) {
                    var e;
                    for (i = 0; i < n._r4.length; i++)(e = n._r4[i]) && (n._e ? (e.block.css(n._g + n._u1, "0s"), e.block.css(e.css)) : e.block.stop(!0).css(e.css), n._t4 = null, t.animBlocksDisplayed = !1);
                    n._r4 = []
                }
                t.animBlocks && (t.animBlocksDisplayed = !0, n._t4 = t, n._u4(t.animBlocks))
            }
        }

        var i, n = this;
        n._q4 = {fadeEffect: !0, moveEffect: "top", moveOffset: 20, speed: 400, easing: "easeOutSine", delay: 200}, n.st.block = t.extend({}, n._q4, n.st.block), n._r4 = [], n._s4 = [], n.ev.on("rsAfterInit", function () {
            e()
        }), n.ev.on("rsBeforeParseNode", function (e, i, n) {
            i = t(i), n.animBlocks = i.find(".rsABlock").css("display", "none"), n.animBlocks.length || (n.animBlocks = i.hasClass("rsABlock") ? i.css("display", "none") : !1)
        }), n.ev.on("rsAfterContentSet", function (t, i) {
            i.id === n.slides[n.currSlideId].id && setTimeout(function () {
                e()
            }, n.st.fadeinLoadedSlide ? 300 : 0)
        }), n.ev.on("rsAfterSlideChange", function () {
            e()
        })
    }, _v4: function (t, e) {
        setTimeout(function () {
            t.css(e)
        }, 6)
    }, _u4: function (e) {
        var i, n, s, r, o, a, l, h = this;
        h._s4 = [], e.each(function (e) {
            i = t(this), n = {}, s = {}, r = null;
            var u = i.attr("data-move-offset"), u = u ? parseInt(u, 10) : h.st.block.moveOffset;
            if (u > 0 && ((a = i.data("move-effect")) ? (a = a.toLowerCase(), "none" === a ? a = !1 : "left" !== a && "top" !== a && "bottom" !== a && "right" !== a && (a = h.st.block.moveEffect, "none" === a && (a = !1))) : a = h.st.block.moveEffect, a && "none" !== a)) {
                var d;
                d = "right" === a || "left" === a ? !0 : !1;
                var c;
                l = !1, h._e ? (c = 0, o = h._x1) : (d ? isNaN(parseInt(i.css("right"), 10)) ? o = "left" : (o = "right", l = !0) : isNaN(parseInt(i.css("bottom"), 10)) ? o = "top" : (o = "bottom", l = !0), o = "margin-" + o, l && (u = -u), h._e ? c = parseInt(i.css(o), 10) : (c = i.data("rs-start-move-prop"), void 0 === c && (c = parseInt(i.css(o), 10), isNaN(c) && (c = 0), i.data("rs-start-move-prop", c)))), s[o] = h._m4("top" === a || "left" === a ? c - u : c + u, d), n[o] = h._m4(c, d)
            }
            u = i.attr("data-fade-effect"), u ? ("none" === u.toLowerCase() || "false" === u.toLowerCase()) && (u = !1) : u = h.st.block.fadeEffect, u && (s.opacity = 0, n.opacity = 1), (u || a) && (r = {}, r.hasFade = Boolean(u), Boolean(a) && (r.moveProp = o, r.hasMove = !0), r.speed = i.data("speed"), isNaN(r.speed) && (r.speed = h.st.block.speed), r.easing = i.data("easing"), r.easing || (r.easing = h.st.block.easing), r.css3Easing = t.rsCSS3Easing[r.easing], r.delay = i.data("delay"), isNaN(r.delay) && (r.delay = h.st.block.delay * e)), u = {}, h._e && (u[h._g + h._u1] = "0ms"), u.moveProp = n.moveProp, u.opacity = n.opacity, u.display = "none", h._r4.push({block: i, css: u}), h._v4(i, s), h._s4.push(setTimeout(function (t, e, i, n) {
                return function () {
                    if (t.css("display", "block"), i) {
                        var s = {};
                        if (h._e) {
                            var r = "";
                            i.hasMove && (r += i.moveProp), i.hasFade && (i.hasMove && (r += ", "), r += "opacity"), s[h._g + h._t1] = r, s[h._g + h._u1] = i.speed + "ms", s[h._g + h._v1] = i.css3Easing, t.css(s), setTimeout(function () {
                                t.css(e)
                            }, 24)
                        } else setTimeout(function () {
                            t.animate(e, i.speed, i.easing)
                        }, 16)
                    }
                    delete h._s4[n]
                }
            }(i, n, r, e), 6 >= r.delay ? 12 : r.delay))
        })
    }}), t.rsModules.animatedBlocks = t.rsProto._p4
}(jQuery), function (t) {
    t.extend(t.rsProto, {_w4: function () {
        var t = this;
        if (t.st.autoHeight) {
            var e, i, n, s = !0, r = function (r) {
                n = t.slides[t.currSlideId], (e = n.holder) && (i = e.height()) && void 0 !== i && i > (t.st.minAutoHeight || 30) && (t._c4 = i, t._e || !r ? t._e1.css("height", i) : t._e1.stop(!0, !0).animate({height: i}, t.st.transitionSpeed), t.ev.trigger("rsAutoHeightChange", i), s && (t._e && setTimeout(function () {
                    t._e1.css(t._g + "transition", "height " + t.st.transitionSpeed + "ms ease-in-out")
                }, 16), s = !1))
            };
            t.ev.on("rsMaybeSizeReady.rsAutoHeight", function (t, e) {
                n === e && r()
            }), t.ev.on("rsAfterContentSet.rsAutoHeight", function (t, e) {
                n === e && r()
            }), t.slider.addClass("rsAutoHeight"), t.ev.one("rsAfterInit", function () {
                setTimeout(function () {
                    r(!1), setTimeout(function () {
                        t.slider.append('<div style="clear:both; float: none;"></div>')
                    }, 16)
                }, 16)
            }), t.ev.on("rsBeforeAnimStart", function () {
                r(!0)
            }), t.ev.on("rsBeforeSizeSet", function () {
                setTimeout(function () {
                    r(!1)
                }, 16)
            })
        }
    }}), t.rsModules.autoHeight = t.rsProto._w4
}(jQuery), function (t) {
    t.extend(t.rsProto, {_x4: function () {
        var e, i = this;
        i._y4 = {enabled: !1, stopAtAction: !0, pauseOnHover: !0, delay: 2e3}, !i.st.autoPlay && i.st.autoplay && (i.st.autoPlay = i.st.autoplay), i.st.autoPlay = t.extend({}, i._y4, i.st.autoPlay), i.st.autoPlay.enabled && (i.ev.on("rsBeforeParseNode", function (i, n, s) {
            n = t(n), (e = n.attr("data-rsDelay")) && (s.customDelay = parseInt(e, 10))
        }), i.ev.one("rsAfterInit", function () {
            i._z4()
        }), i.ev.on("rsBeforeDestroy", function () {
            i.stopAutoPlay(), i.slider.off("mouseenter mouseleave"), t(window).off("blur" + i.ns + " focus" + i.ns)
        }))
    }, _z4: function () {
        var e = this;
        e.startAutoPlay(), e.ev.on("rsAfterContentSet", function (t, i) {
            e._l2 || e._r2 || !e._a5 || i !== e.currSlide || e._b5()
        }), e.ev.on("rsDragRelease", function () {
            e._a5 && e._c5 && (e._c5 = !1, e._b5())
        }), e.ev.on("rsAfterSlideChange", function () {
            e._a5 && e._c5 && (e._c5 = !1, e.currSlide.isLoaded && e._b5())
        }), e.ev.on("rsDragStart", function () {
            e._a5 && (e.st.autoPlay.stopAtAction ? e.stopAutoPlay() : (e._c5 = !0, e._d5()))
        }), e.ev.on("rsBeforeMove", function (t, i, n) {
            e._a5 && (n && e.st.autoPlay.stopAtAction ? e.stopAutoPlay() : (e._c5 = !0, e._d5()))
        }), e._e5 = !1, e.ev.on("rsVideoStop", function () {
            e._a5 && (e._e5 = !1, e._b5())
        }), e.ev.on("rsVideoPlay", function () {
            e._a5 && (e._c5 = !1, e._d5(), e._e5 = !0)
        }), t(window).on("blur" + e.ns, function () {
            e._a5 && (e._c5 = !0, e._d5())
        }).on("focus" + e.ns, function () {
            e._a5 && e._c5 && (e._c5 = !1, e._b5())
        }), e.st.autoPlay.pauseOnHover && (e._f5 = !1, e.slider.hover(function () {
            e._a5 && (e._c5 = !1, e._d5(), e._f5 = !0)
        }, function () {
            e._a5 && (e._f5 = !1, e._b5())
        }))
    }, toggleAutoPlay: function () {
        this._a5 ? this.stopAutoPlay() : this.startAutoPlay()
    }, startAutoPlay: function () {
        this._a5 = !0, this.currSlide.isLoaded && this._b5()
    }, stopAutoPlay: function () {
        this._e5 = this._f5 = this._c5 = this._a5 = !1, this._d5()
    }, _b5: function () {
        var t = this;
        t._f5 || t._e5 || (t._g5 = !0, t._h5 && clearTimeout(t._h5), t._h5 = setTimeout(function () {
            var e;
            t._z || t.st.loopRewind || (e = !0, t.st.loopRewind = !0), t.next(!0), e && (t.st.loopRewind = !1)
        }, t.currSlide.customDelay ? t.currSlide.customDelay : t.st.autoPlay.delay))
    }, _d5: function () {
        this._f5 || this._e5 || (this._g5 = !1, this._h5 && (clearTimeout(this._h5), this._h5 = null))
    }}), t.rsModules.autoplay = t.rsProto._x4
}(jQuery), function (t) {
    t.extend(t.rsProto, {_i5: function () {
        var e = this;
        "bullets" === e.st.controlNavigation && (e.ev.one("rsAfterPropsSetup", function () {
            e._j5 = !0, e.slider.addClass("rsWithBullets");
            for (var i = '<div class="rsNav rsBullets">', n = 0; n < e.numSlides; n++)i += '<div class="rsNavItem rsBullet"><span></span></div>';
            e._k5 = i = t(i + "</div>"), e._l5 = i.appendTo(e.slider).children(), e._k5.on("click.rs", ".rsNavItem", function (i) {
                e._m5 || e.goTo(t(this).index())
            })
        }), e.ev.on("rsOnAppendSlide", function (t, i, n) {
            n >= e.numSlides ? e._k5.append('<div class="rsNavItem rsBullet"><span></span></div>') : e._l5.eq(n).before('<div class="rsNavItem rsBullet"><span></span></div>'), e._l5 = e._k5.children()
        }), e.ev.on("rsOnRemoveSlide", function (t, i) {
            var n = e._l5.eq(i);
            n && n.length && (n.remove(), e._l5 = e._k5.children())
        }), e.ev.on("rsOnUpdateNav", function () {
            var t = e.currSlideId;
            e._n5 && e._n5.removeClass("rsNavSelected"), t = e._l5.eq(t), t.addClass("rsNavSelected"), e._n5 = t
        }))
    }}), t.rsModules.bullets = t.rsProto._i5
}(jQuery), function (t) {
    t.extend(t.rsProto, {_o5: function () {
        var e, i, n, s = this;
        if (s._p5 = {enabled: !1, change: !1, prefix: ""}, s.st.deeplinking = t.extend({}, s._p5, s.st.deeplinking), s.st.deeplinking.enabled) {
            var r = s.st.deeplinking.change, o = s.st.deeplinking.prefix, a = "#" + o, l = function () {
                var t = window.location.hash;
                return t && 0 < t.indexOf(o) && (t = parseInt(t.substring(a.length), 10), t >= 0) ? t - 1 : -1
            }, h = l();
            -1 !== h && (s.st.startSlideId = h), r && (t(window).on("hashchange" + s.ns, function (t) {
                e || (t = l(), 0 > t || (t > s.numSlides - 1 && (t = s.numSlides - 1), s.goTo(t)))
            }), s.ev.on("rsBeforeAnimStart", function () {
                i && clearTimeout(i), n && clearTimeout(n)
            }), s.ev.on("rsAfterSlideChange", function () {
                i && clearTimeout(i), n && clearTimeout(n), n = setTimeout(function () {
                    e = !0, window.location.replace(("" + window.location).split("#")[0] + a + (s.currSlideId + 1)), i = setTimeout(function () {
                        e = !1, i = null
                    }, 60)
                }, 400)
            })), s.ev.on("rsBeforeDestroy", function () {
                i = n = null, r && t(window).off("hashchange" + s.ns)
            })
        }
    }}), t.rsModules.deeplinking = t.rsProto._o5
}(jQuery), function (t, e, i) {
    function n(t) {
        return t = t || location.href, "#" + t.replace(/^[^#]*#?(.*)$/, "$1")
    }

    var s, r = "hashchange", o = document, a = t.event.special, l = o.documentMode, h = "on" + r in e && (l === i || l > 7);
    t.fn[r] = function (t) {
        return t ? this.bind(r, t) : this.trigger(r)
    }, t.fn[r].delay = 50, a[r] = t.extend(a[r], {setup: function () {
        return h ? !1 : void t(s.start)
    }, teardown: function () {
        return h ? !1 : void t(s.stop)
    }}), s = function () {
        function s() {
            var i = n(), o = f(u);
            i !== u ? (c(u = i, o), t(e).trigger(r)) : o !== u && (location.href = location.href.replace(/#.*/, "") + o), a = setTimeout(s, t.fn[r].delay)
        }

        var a, l = {}, u = n(), d = function (t) {
            return t
        }, c = d, f = d;
        return l.start = function () {
            a || s()
        }, l.stop = function () {
            a && clearTimeout(a), a = i
        }, e.attachEvent && !e.addEventListener && !h && function () {
            var e, i;
            l.start = function () {
                e || (i = (i = t.fn[r].src) && i + n(), e = t('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
                    i || c(n()), s()
                }).attr("src", i || "javascript:0").insertAfter("body")[0].contentWindow, o.onpropertychange = function () {
                    try {
                        "title" === event.propertyName && (e.document.title = o.title)
                    } catch (t) {
                    }
                })
            }, l.stop = d, f = function () {
                return n(e.location.href)
            }, c = function (i, n) {
                var s = e.document, a = t.fn[r].domain;
                i !== n && (s.title = o.title, s.open(), a && s.write('<script>document.domain="' + a + '"</script>'), s.close(), e.location.hash = i)
            }
        }(), l
    }()
}(jQuery, this), function (t) {
    t.extend(t.rsProto, {_q5: function () {
        var e = this;
        e._r5 = {enabled: !1, keyboardNav: !0, buttonFS: !0, nativeFS: !1, doubleTap: !0}, e.st.fullscreen = t.extend({}, e._r5, e.st.fullscreen), e.st.fullscreen.enabled && e.ev.one("rsBeforeSizeSet", function () {
            e._s5()
        })
    }, _s5: function () {
        var e = this;
        if (e._t5 = !e.st.keyboardNavEnabled && e.st.fullscreen.keyboardNav, e.st.fullscreen.nativeFS) {
            var i = {supportsFullScreen: !1, isFullScreen: function () {
                return!1
            }, requestFullScreen: function () {
            }, cancelFullScreen: function () {
            }, fullScreenEventName: "", prefix: ""}, n = ["webkit", "moz", "o", "ms", "khtml"];
            if ("undefined" != typeof document.cancelFullScreen)i.supportsFullScreen = !0; else for (var s = 0, r = n.length; r > s; s++)if (i.prefix = n[s], "undefined" != typeof document[i.prefix + "CancelFullScreen"]) {
                i.supportsFullScreen = !0;
                break
            }
            i.supportsFullScreen ? (e.nativeFS = !0, i.fullScreenEventName = i.prefix + "fullscreenchange" + e.ns, i.isFullScreen = function () {
                switch (this.prefix) {
                    case"":
                        return document.fullScreen;
                    case"webkit":
                        return document.webkitIsFullScreen;
                    default:
                        return document[this.prefix + "FullScreen"]
                }
            }, i.requestFullScreen = function (t) {
                return"" === this.prefix ? t.requestFullScreen() : t[this.prefix + "RequestFullScreen"]()
            }, i.cancelFullScreen = function (t) {
                return"" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
            }, e._u5 = i) : e._u5 = !1
        }
        e.st.fullscreen.buttonFS && (e._v5 = t('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(e._o1).on("click.rs", function () {
            e.isFullscreen ? e.exitFullscreen() : e.enterFullscreen()
        }))
    }, enterFullscreen: function (e) {
        var i = this;
        if (i._u5) {
            if (!e)return i._b.on(i._u5.fullScreenEventName, function (t) {
                i._u5.isFullScreen() ? i.enterFullscreen(!0) : i.exitFullscreen(!0)
            }), void i._u5.requestFullScreen(t("html")[0]);
            i._u5.requestFullScreen(t("html")[0])
        }
        if (!i._w5) {
            i._w5 = !0, i._b.on("keyup" + i.ns + "fullscreen", function (t) {
                27 === t.keyCode && i.exitFullscreen()
            }), i._t5 && i._b2(), e = t(window), i._x5 = e.scrollTop(), i._y5 = e.scrollLeft(), i._z5 = t("html").attr("style"), i._a6 = t("body").attr("style"), i._b6 = i.slider.attr("style"), t("body, html").css({overflow: "hidden", height: "100%", width: "100%", margin: "0", padding: "0"}), i.slider.addClass("rsFullscreen");
            var n;
            for (n = 0; n < i.numSlides; n++)e = i.slides[n], e.isRendered = !1, e.bigImage && (e.isBig = !0, e.isMedLoaded = e.isLoaded, e.isMedLoading = e.isLoading, e.medImage = e.image, e.medIW = e.iW, e.medIH = e.iH, e.slideId = -99, e.bigImage !== e.medImage && (e.sizeType = "big"), e.isLoaded = e.isBigLoaded, e.isLoading = !1, e.image = e.bigImage, e.images[0] = e.bigImage, e.iW = e.bigIW, e.iH = e.bigIH, e.isAppended = e.contentAdded = !1, i._c6(e));
            i.isFullscreen = !0, i._w5 = !1, i.updateSliderSize(), i.ev.trigger("rsEnterFullscreen")
        }
    }, exitFullscreen: function (e) {
        var i = this;
        if (i._u5) {
            if (!e)return void i._u5.cancelFullScreen(t("html")[0]);
            i._b.off(i._u5.fullScreenEventName)
        }
        if (!i._w5) {
            i._w5 = !0, i._b.off("keyup" + i.ns + "fullscreen"), i._t5 && i._b.off("keydown" + i.ns), t("html").attr("style", i._z5 || ""), t("body").attr("style", i._a6 || "");
            var n;
            for (n = 0; n < i.numSlides; n++)e = i.slides[n], e.isRendered = !1, e.bigImage && (e.isBig = !1, e.slideId = -99, e.isBigLoaded = e.isLoaded, e.isBigLoading = e.isLoading, e.bigImage = e.image, e.bigIW = e.iW, e.bigIH = e.iH, e.isLoaded = e.isMedLoaded, e.isLoading = !1, e.image = e.medImage, e.images[0] = e.medImage, e.iW = e.medIW, e.iH = e.medIH, e.isAppended = e.contentAdded = !1, i._c6(e, !0), e.bigImage !== e.medImage && (e.sizeType = "med"));
            i.isFullscreen = !1, e = t(window), e.scrollTop(i._x5), e.scrollLeft(i._y5), i._w5 = !1, i.slider.removeClass("rsFullscreen"), i.updateSliderSize(), setTimeout(function () {
                i.updateSliderSize()
            }, 1), i.ev.trigger("rsExitFullscreen")
        }
    }, _c6: function (e, i) {
        var n = e.isLoaded || e.isLoading ? '<img class="rsImg rsMainSlideImage" src="' + e.image + '"/>' : '<a class="rsImg rsMainSlideImage" href="' + e.image + '"></a>';
        e.content.hasClass("rsImg") ? e.content = t(n) : e.content.find(".rsImg").eq(0).replaceWith(n), e.isLoaded || e.isLoading || !e.holder || e.holder.html(e.content)
    }}), t.rsModules.fullscreen = t.rsProto._q5
}(jQuery), function (t) {
    t.extend(t.rsProto, {_d6: function () {
        var e = this;
        e.st.globalCaption && (e.ev.on("rsAfterInit", function () {
            e.globalCaption = t('<div class="rsGCaption"></div>').appendTo(e.st.globalCaptionInside ? e._e1 : e.slider), e.globalCaption.html(e.currSlide.caption)
        }), e.ev.on("rsBeforeAnimStart", function () {
            e.globalCaption.html(e.currSlide.caption)
        }))
    }}), t.rsModules.globalCaption = t.rsProto._d6
}(jQuery), function (t) {
    t.extend(t.rsProto, {_e6: function () {
        var t = this;
        t.st.navAutoHide && !t.hasTouch && t.ev.one("rsAfterInit", function () {
            if (t._k5) {
                t._k5.addClass("rsHidden");
                var e = t.slider;
                e.one("mousemove.controlnav", function () {
                    t._k5.removeClass("rsHidden")
                }), e.hover(function () {
                    t._k5.removeClass("rsHidden")
                }, function () {
                    t._k5.addClass("rsHidden")
                })
            }
        })
    }}), t.rsModules.autoHideNav = t.rsProto._e6
}(jQuery), function (t) {
    t.extend(t.rsProto, {_f6: function () {
        var e = this;
        "tabs" === e.st.controlNavigation && (e.ev.on("rsBeforeParseNode", function (e, i, n) {
            i = t(i), n.thumbnail = i.find(".rsTmb").remove(), n.thumbnail.length ? n.thumbnail = t(document.createElement("div")).append(n.thumbnail).html() : (n.thumbnail = i.attr("data-rsTmb"), n.thumbnail || (n.thumbnail = i.find(".rsImg").attr("data-rsTmb")), n.thumbnail = n.thumbnail ? '<img src="' + n.thumbnail + '"/>' : "")
        }), e.ev.one("rsAfterPropsSetup", function () {
            e._g6()
        }), e.ev.on("rsOnAppendSlide", function (t, i, n) {
            n >= e.numSlides ? e._k5.append('<div class="rsNavItem rsTab">' + i.thumbnail + "</div>") : e._l5.eq(n).before('<div class="rsNavItem rsTab">' + item.thumbnail + "</div>"), e._l5 = e._k5.children()
        }), e.ev.on("rsOnRemoveSlide", function (t, i) {
            var n = e._l5.eq(i);
            n && (n.remove(), e._l5 = e._k5.children())
        }), e.ev.on("rsOnUpdateNav", function () {
            var t = e.currSlideId;
            e._n5 && e._n5.removeClass("rsNavSelected"), t = e._l5.eq(t), t.addClass("rsNavSelected"), e._n5 = t
        }))
    }, _g6: function () {
        var e, i = this;
        i._j5 = !0, e = '<div class="rsNav rsTabs">';
        for (var n = 0; n < i.numSlides; n++)e += '<div class="rsNavItem rsTab">' + i.slides[n].thumbnail + "</div>";
        e = t(e + "</div>"), i._k5 = e, i._l5 = e.children(".rsNavItem"), i.slider.append(e), i._k5.click(function (e) {
            e = t(e.target).closest(".rsNavItem"), e.length && i.goTo(e.index())
        })
    }}), t.rsModules.tabs = t.rsProto._f6
}(jQuery), function (t) {
    t.extend(t.rsProto, {_h6: function () {
        var e = this;
        "thumbnails" === e.st.controlNavigation && (e._i6 = {drag: !0, touch: !0, orientation: "horizontal", navigation: !0, arrows: !0, arrowLeft: null, arrowRight: null, spacing: 4, arrowsAutoHide: !1, appendSpan: !1, transitionSpeed: 600, autoCenter: !0, fitInViewport: !0, firstMargin: !0, paddingTop: 0, paddingBottom: 0}, e.st.thumbs = t.extend({}, e._i6, e.st.thumbs), e._j6 = !0, !1 === e.st.thumbs.firstMargin ? e.st.thumbs.firstMargin = 0 : !0 === e.st.thumbs.firstMargin && (e.st.thumbs.firstMargin = e.st.thumbs.spacing), e.ev.on("rsBeforeParseNode", function (e, i, n) {
            i = t(i), n.thumbnail = i.find(".rsTmb").remove(), n.thumbnail.length ? n.thumbnail = t(document.createElement("div")).append(n.thumbnail).html() : (n.thumbnail = i.attr("data-rsTmb"), n.thumbnail || (n.thumbnail = i.find(".rsImg").attr("data-rsTmb")), n.thumbnail = n.thumbnail ? '<img src="' + n.thumbnail + '"/>' : "")
        }), e.ev.one("rsAfterPropsSetup", function () {
            e._k6()
        }), e._n5 = null, e.ev.on("rsOnUpdateNav", function () {
            var i = t(e._l5[e.currSlideId]);
            i !== e._n5 && (e._n5 && (e._n5.removeClass("rsNavSelected"), e._n5 = null), e._l6 && e._m6(e.currSlideId), e._n5 = i.addClass("rsNavSelected"))
        }), e.ev.on("rsOnAppendSlide", function (t, i, n) {
            t = "<div" + e._n6 + ' class="rsNavItem rsThumb">' + e._o6 + i.thumbnail + "</div>", e._e && e._s3.css(e._g + "transition-duration", "0ms"), n >= e.numSlides ? e._s3.append(t) : e._l5.eq(n).before(t), e._l5 = e._s3.children(), e.updateThumbsSize(!0)
        }), e.ev.on("rsOnRemoveSlide", function (t, i) {
            var n = e._l5.eq(i);
            n && (e._e && e._s3.css(e._g + "transition-duration", "0ms"), n.remove(), e._l5 = e._s3.children(), e.updateThumbsSize(!0))
        }))
    }, _k6: function () {
        var e, i, n = this, s = "rsThumbs", r = n.st.thumbs, o = "", a = r.spacing;
        n._j5 = !0, n._e3 = "vertical" === r.orientation ? !1 : !0, n._n6 = e = a ? ' style="margin-' + (n._e3 ? "right" : "bottom") + ":" + a + 'px;"' : "", n._i3 = 0, n._p6 = !1, n._m5 = !1, n._l6 = !1, n._q6 = r.arrows && r.navigation, i = n._e3 ? "Hor" : "Ver", n.slider.addClass("rsWithThumbs rsWithThumbs" + i), o += '<div class="rsNav rsThumbs rsThumbs' + i + '"><div class="' + s + 'Container">', n._o6 = r.appendSpan ? '<span class="thumbIco"></span>' : "";
        for (var l = 0; l < n.numSlides; l++)i = n.slides[l], o += "<div" + e + ' class="rsNavItem rsThumb">' + i.thumbnail + n._o6 + "</div>";
        o = t(o + "</div></div>"), e = {}, r.paddingTop && (e[n._e3 ? "paddingTop" : "paddingLeft"] = r.paddingTop), r.paddingBottom && (e[n._e3 ? "paddingBottom" : "paddingRight"] = r.paddingBottom), o.css(e), n._s3 = t(o).find("." + s + "Container"), n._q6 && (s += "Arrow", r.arrowLeft ? n._r6 = r.arrowLeft : (n._r6 = t('<div class="' + s + " " + s + 'Left"><div class="' + s + 'Icn"></div></div>'), o.append(n._r6)), r.arrowRight ? n._s6 = r.arrowRight : (n._s6 = t('<div class="' + s + " " + s + 'Right"><div class="' + s + 'Icn"></div></div>'), o.append(n._s6)), n._r6.click(function () {
            var t = (Math.floor(n._i3 / n._t6) + n._u6) * n._t6 + n.st.thumbs.firstMargin;
            n._a4(t > n._n3 ? n._n3 : t)
        }), n._s6.click(function () {
            var t = (Math.floor(n._i3 / n._t6) - n._u6) * n._t6 + n.st.thumbs.firstMargin;
            n._a4(t < n._o3 ? n._o3 : t)
        }), r.arrowsAutoHide && !n.hasTouch && (n._r6.css("opacity", 0), n._s6.css("opacity", 0), o.one("mousemove.rsarrowshover", function () {
            n._l6 && (n._r6.css("opacity", 1), n._s6.css("opacity", 1))
        }), o.hover(function () {
            n._l6 && (n._r6.css("opacity", 1), n._s6.css("opacity", 1))
        }, function () {
            n._l6 && (n._r6.css("opacity", 0), n._s6.css("opacity", 0))
        }))), n._k5 = o, n._l5 = n._s3.children(), n.msEnabled && n.st.thumbs.navigation && n._s3.css("-ms-touch-action", n._e3 ? "pan-y" : "pan-x"), n.slider.append(o), n._w3 = !0, n._v6 = a, r.navigation && n._e && n._s3.css(n._g + "transition-property", n._g + "transform"), n._k5.on("click.rs", ".rsNavItem", function (e) {
            n._m5 || n.goTo(t(this).index())
        }), n.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs", function () {
            n._w6 = n._e3 ? n._c4 : n._b4, n.updateThumbsSize(!0)
        }), n.ev.off("rsAutoHeightChange.thumbs").on("rsAutoHeightChange.thumbs", function (t, e) {
            n.updateThumbsSize(!0, e)
        })
    }, updateThumbsSize: function (t, e) {
        var i = this, n = i._l5.first(), s = {}, r = i._l5.length;
        i._t6 = (i._e3 ? n.outerWidth() : n.outerHeight()) + i._v6, i._y3 = r * i._t6 - i._v6, s[i._e3 ? "width" : "height"] = i._y3 + i._v6, i._z3 = i._e3 ? i._k5.width() : void 0 !== e ? e : i._k5.height(), i._w3 && (i.isFullscreen || i.st.thumbs.fitInViewport) && (i._e3 ? i._c4 = i._w6 - i._k5.outerHeight() : i._b4 = i._w6 - i._k5.outerWidth()), i._z3 && (i._o3 = -(i._y3 - i._z3) - i.st.thumbs.firstMargin, i._n3 = i.st.thumbs.firstMargin, i._u6 = Math.floor(i._z3 / i._t6), i._y3 < i._z3 ? (i.st.thumbs.autoCenter && i._q3((i._z3 - i._y3) / 2), i.st.thumbs.arrows && i._r6 && (i._r6.addClass("rsThumbsArrowDisabled"), i._s6.addClass("rsThumbsArrowDisabled")), i._l6 = !1, i._m5 = !1, i._k5.off(i._j1)) : i.st.thumbs.navigation && !i._l6 && (i._l6 = !0, !i.hasTouch && i.st.thumbs.drag || i.hasTouch && i.st.thumbs.touch) && (i._m5 = !0, i._k5.on(i._j1, function (t) {
            i._g2(t, !0)
        })), i._s3.css(s), t && e && i._m6(i.currSlideId, !0))
    }, setThumbsOrientation: function (t, e) {
        this._w3 && (this.st.thumbs.orientation = t, this._k5.remove(), this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"), this._k6(), this._k5.off(this._j1), e || this.updateSliderSize(!0))
    }, _q3: function (t) {
        this._i3 = t, this._e ? this._s3.css(this._x1, this._y1 + (this._e3 ? t + this._z1 + 0 : 0 + this._z1 + t) + this._a2) : this._s3.css(this._e3 ? this._x1 : this._w1, t)
    }, _a4: function (e, i, n, s, r) {
        var o = this;
        if (o._l6) {
            i || (i = o.st.thumbs.transitionSpeed), o._i3 = e, o._x6 && clearTimeout(o._x6), o._p6 && (o._e || o._s3.stop(), n = !0);
            var a = {};
            o._p6 = !0, o._e ? (a[o._g + "transition-duration"] = i + "ms", a[o._g + "transition-timing-function"] = n ? t.rsCSS3Easing[o.st.easeOut] : t.rsCSS3Easing[o.st.easeInOut], o._s3.css(a), o._q3(e)) : (a[o._e3 ? o._x1 : o._w1] = e + "px", o._s3.animate(a, i, n ? "easeOutCubic" : o.st.easeInOut)), s && (o._i3 = s), o._y6(), o._x6 = setTimeout(function () {
                o._p6 = !1, r && (o._a4(s, r, !0), r = null)
            }, i)
        }
    }, _y6: function () {
        this._q6 && (this._i3 === this._n3 ? this._r6.addClass("rsThumbsArrowDisabled") : this._r6.removeClass("rsThumbsArrowDisabled"), this._i3 === this._o3 ? this._s6.addClass("rsThumbsArrowDisabled") : this._s6.removeClass("rsThumbsArrowDisabled"))
    }, _m6: function (t, e) {
        var i, n = 0, s = t * this._t6 + 2 * this._t6 - this._v6 + this._n3, r = Math.floor(this._i3 / this._t6);
        this._l6 && (this._j6 && (e = !0, this._j6 = !1), s + this._i3 > this._z3 ? (t === this.numSlides - 1 && (n = 1), r = -t + this._u6 - 2 + n, i = r * this._t6 + this._z3 % this._t6 + this._v6 - this._n3) : 0 !== t ? (t - 1) * this._t6 <= -this._i3 + this._n3 && t - 1 <= this.numSlides - this._u6 && (i = (-t + 1) * this._t6 + this._n3) : i = this._n3, i !== this._i3 && (n = void 0 === i ? this._i3 : i, n > this._n3 ? this._q3(this._n3) : n < this._o3 ? this._q3(this._o3) : void 0 !== i && (e ? this._q3(i) : this._a4(i))), this._y6())
    }}), t.rsModules.thumbnails = t.rsProto._h6
}(jQuery), function (t) {
    t.extend(t.rsProto, {_z6: function () {
        var e = this;
        e._a7 = {autoHideArrows: !0, autoHideControlNav: !1, autoHideBlocks: !1, autoHideCaption: !1, disableCSS3inFF: !0, youTubeCode: '<iframe src="http://www.youtube.com/embed/%id%?rel=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>', vimeoCode: '<iframe src="http://player.vimeo.com/video/%id%?byline=0&portrait=0&autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'}, e.st.video = t.extend({}, e._a7, e.st.video), e.ev.on("rsBeforeSizeSet", function () {
            e._b7 && setTimeout(function () {
                var t = e._r1, t = t.hasClass("rsVideoContainer") ? t : t.find(".rsVideoContainer");
                e._c7 && e._c7.css({width: t.width(), height: t.height()})
            }, 32)
        });
        var i = e._a.mozilla;
        e.ev.on("rsAfterParseNode", function (n, s, r) {
            if (n = t(s), r.videoURL) {
                e.st.video.disableCSS3inFF && i && (e._e = e._f = !1), s = t('<div class="rsVideoContainer"></div>');
                var o = t('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');
                n.hasClass("rsImg") ? r.content = s.append(n).append(o) : r.content.find(".rsImg").wrap(s).after(o)
            }
        }), e.ev.on("rsAfterSlideChange", function () {
            e.stopVideo()
        })
    }, toggleVideo: function () {
        return this._b7 ? this.stopVideo() : this.playVideo()
    }, playVideo: function () {
        var e = this;
        if (!e._b7) {
            var i = e.currSlide;
            if (!i.videoURL)return!1;
            e._d7 = i;
            var n, s, r = e._e7 = i.content, i = i.videoURL;
            return i.match(/youtu\.be/i) || i.match(/youtube\.com/i) ? (s = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, (s = i.match(s)) && 11 == s[7].length && (n = s[7]), void 0 !== n && (e._c7 = e.st.video.youTubeCode.replace("%id%", n))) : i.match(/vimeo\.com/i) && (s = /(www\.)?vimeo.com\/(\d+)($|\/)/, (s = i.match(s)) && (n = s[2]), void 0 !== n && (e._c7 = e.st.video.vimeoCode.replace("%id%", n))), e.videoObj = t(e._c7), e.ev.trigger("rsOnCreateVideoElement", [i]), e.videoObj.length && (e._c7 = t('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'), e._c7.find(".rsPreloader").after(e.videoObj), r = r.hasClass("rsVideoContainer") ? r : r.find(".rsVideoContainer"), e._c7.css({width: r.width(), height: r.height()}).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv", function (t) {
                return e.stopVideo(), t.preventDefault(), t.stopPropagation(), !1
            }), r.append(e._c7), e.isIPAD && r.addClass("rsIOSVideo"), e._f7(!1), setTimeout(function () {
                e._c7.addClass("rsVideoActive")
            }, 10), e.ev.trigger("rsVideoPlay"), e._b7 = !0), !0
        }
        return!1
    }, stopVideo: function () {
        var t = this;
        return t._b7 ? (t.isIPAD && t.slider.find(".rsCloseVideoBtn").remove(), t._f7(!0), setTimeout(function () {
            t.ev.trigger("rsOnDestroyVideoElement", [t.videoObj]);
            var e = t._c7.find("iframe");
            if (e.length)try {
                e.attr("src", "")
            } catch (i) {
            }
            t._c7.remove(), t._c7 = null
        }, 16), t.ev.trigger("rsVideoStop"), t._b7 = !1, !0) : !1
    }, _f7: function (t, e) {
        var i = [], n = this.st.video;
        if (n.autoHideArrows && (this._c2 && (i.push(this._c2, this._d2), this._e2 = !t), this._v5 && i.push(this._v5)), n.autoHideControlNav && this._k5 && i.push(this._k5), n.autoHideBlocks && this._d7.animBlocks && i.push(this._d7.animBlocks), n.autoHideCaption && this.globalCaption && i.push(this.globalCaption), this.slider[t ? "removeClass" : "addClass"]("rsVideoPlaying"), i.length)for (n = 0; n < i.length; n++)t ? i[n].removeClass("rsHidden") : i[n].addClass("rsHidden")
    }}), t.rsModules.video = t.rsProto._z6
}(jQuery),
    function (t) {
        t.rsProto._g7 = function () {
            var e = this;
            e.st.visibleNearby && e.st.visibleNearby.enabled && (e._h7 = {enabled: !0, centerArea: .6, center: !0, breakpoint: 0, breakpointCenterArea: .8, hiddenOverflow: !0, navigateByCenterClick: !1}, e.st.visibleNearby = t.extend({}, e._h7, e.st.visibleNearby), e.ev.one("rsAfterPropsSetup", function () {
                e._i7 = e._e1.css("overflow", "visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent(), e.st.visibleNearby.hiddenOverflow || e._i7.css("overflow", "visible"), e._o1 = e.st.controlsInside ? e._i7 : e.slider
            }), e.ev.on("rsAfterSizePropSet", function () {
                var t, i = e.st.visibleNearby;
                t = i.breakpoint && e.width < i.breakpoint ? i.breakpointCenterArea : i.centerArea, e._h ? (e._b4 *= t, e._i7.css({height: e._c4, width: e._b4 / t}), e._d = e._b4 * (1 - t) / 2 / t) : (e._c4 *= t, e._i7.css({height: e._c4 / t, width: e._b4}), e._d = e._c4 * (1 - t) / 2 / t), i.navigateByCenterClick || (e._q = e._h ? e._b4 : e._c4), i.center && e._e1.css("margin-" + (e._h ? "left" : "top"), e._d)
            }))
        }, t.rsModules.visibleNearby = t.rsProto._g7
    }(jQuery), function (t, e, i, n) {
    "use strict";
    var s = i("html"), r = i(t), o = i(e), a = i.fancybox = function () {
        a.open.apply(this, arguments)
    }, l = navigator.userAgent.match(/msie/i), h = null, u = e.createTouch !== n, d = function (t) {
        return t && t.hasOwnProperty && t instanceof i
    }, c = function (t) {
        return t && "string" === i.type(t)
    }, f = function (t) {
        return c(t) && t.indexOf("%") > 0
    }, p = function (t) {
        return t && !(t.style.overflow && "hidden" === t.style.overflow) && (t.clientWidth && t.scrollWidth > t.clientWidth || t.clientHeight && t.scrollHeight > t.clientHeight)
    }, _ = function (t, e) {
        var i = parseInt(t, 10) || 0;
        return e && f(t) && (i = a.getViewport()[e] / 100 * i), Math.ceil(i)
    }, m = function (t, e) {
        return _(t, e) + "px"
    };
    i.extend(a, {version: "2.1.5", defaults: {padding: 15, margin: 20, width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, pixelRatio: 1, autoSize: !0, autoHeight: !1, autoWidth: !1, autoResize: !0, autoCenter: !u, fitToView: !0, aspectRatio: !1, topRatio: .5, leftRatio: .5, scrolling: "auto", wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3e3, preload: 3, modal: !1, loop: !0, ajax: {dataType: "html", headers: {"X-fancyBox": !0}}, iframe: {scrolling: "auto", preload: !0}, swf: {wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always"}, keys: {next: {13: "left", 34: "up", 39: "left", 40: "up"}, prev: {8: "right", 33: "down", 37: "right", 38: "down"}, close: [27], play: [32], toggle: [70]}, direction: {next: "left", prev: "right"}, scrollOutside: !0, index: 0, type: null, href: null, content: null, title: null, tpl: {wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'}, openEffect: "fade", openSpeed: 250, openEasing: "swing", openOpacity: !0, openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 250, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 250, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic", prevSpeed: 250, prevEasing: "swing", prevMethod: "changeOut", helpers: {overlay: !0, title: !0}, onCancel: i.noop, beforeLoad: i.noop, afterLoad: i.noop, beforeShow: i.noop, afterShow: i.noop, beforeChange: i.noop, beforeClose: i.noop, afterClose: i.noop}, group: {}, opts: {}, previous: null, coming: null, current: null, isActive: !1, isOpen: !1, isOpened: !1, wrap: null, skin: null, outer: null, inner: null, player: {timer: null, isActive: !1}, ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function (t, e) {
        return t && (i.isPlainObject(e) || (e = {}), !1 !== a.close(!0)) ? (i.isArray(t) || (t = d(t) ? i(t).get() : [t]), i.each(t, function (s, r) {
            var o, l, h, u, f, p, _, m = {};
            "object" === i.type(r) && (r.nodeType && (r = i(r)), d(r) ? (m = {href: r.data("fancybox-href") || r.attr("href"), title: r.data("fancybox-title") || r.attr("title"), isDom: !0, element: r}, i.metadata && i.extend(!0, m, r.metadata())) : m = r), o = e.href || m.href || (c(r) ? r : null), l = e.title !== n ? e.title : m.title || "", h = e.content || m.content, u = h ? "html" : e.type || m.type, !u && m.isDom && (u = r.data("fancybox-type"), u || (f = r.prop("class").match(/fancybox\.(\w+)/), u = f ? f[1] : null)), c(o) && (u || (a.isImage(o) ? u = "image" : a.isSWF(o) ? u = "swf" : "#" === o.charAt(0) ? u = "inline" : c(r) && (u = "html", h = r)), "ajax" === u && (p = o.split(/\s+/, 2), o = p.shift(), _ = p.shift())), h || ("inline" === u ? o ? h = i(c(o) ? o.replace(/.*(?=#[^\s]+$)/, "") : o) : m.isDom && (h = r) : "html" === u ? h = o : u || o || !m.isDom || (u = "inline", h = r)), i.extend(m, {href: o, type: u, content: h, title: l, selector: _}), t[s] = m
        }), a.opts = i.extend(!0, {}, a.defaults, e), e.keys !== n && (a.opts.keys = e.keys ? i.extend({}, a.defaults.keys, e.keys) : !1), a.group = t, a._start(a.opts.index)) : void 0
    }, cancel: function () {
        var t = a.coming;
        t && !1 !== a.trigger("onCancel") && (a.hideLoading(), a.ajaxLoad && a.ajaxLoad.abort(), a.ajaxLoad = null, a.imgPreload && (a.imgPreload.onload = a.imgPreload.onerror = null), t.wrap && t.wrap.stop(!0, !0).trigger("onReset").remove(), a.coming = null, a.current || a._afterZoomOut(t))
    }, close: function (t) {
        a.cancel(), !1 !== a.trigger("beforeClose") && (a.unbindEvents(), a.isActive && (a.isOpen && t !== !0 ? (a.isOpen = a.isOpened = !1, a.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0, !0).removeClass("fancybox-opened"), a.transitions[a.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), a._afterZoomOut())))
    }, play: function (t) {
        var e = function () {
            clearTimeout(a.player.timer)
        }, i = function () {
            e(), a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed))
        }, n = function () {
            e(), o.unbind(".player"), a.player.isActive = !1, a.trigger("onPlayEnd")
        }, s = function () {
            a.current && (a.current.loop || a.current.index < a.group.length - 1) && (a.player.isActive = !0, o.bind({"onCancel.player beforeClose.player": n, "onUpdate.player": i, "beforeLoad.player": e}), i(), a.trigger("onPlayStart"))
        };
        t === !0 || !a.player.isActive && t !== !1 ? s() : n()
    }, next: function (t) {
        var e = a.current;
        e && (c(t) || (t = e.direction.next), a.jumpto(e.index + 1, t, "next"))
    }, prev: function (t) {
        var e = a.current;
        e && (c(t) || (t = e.direction.prev), a.jumpto(e.index - 1, t, "prev"))
    }, jumpto: function (t, e, i) {
        var s = a.current;
        s && (t = _(t), a.direction = e || s.direction[t >= s.index ? "next" : "prev"], a.router = i || "jumpto", s.loop && (0 > t && (t = s.group.length + t % s.group.length), t %= s.group.length), s.group[t] !== n && (a.cancel(), a._start(t)))
    }, reposition: function (t, e) {
        var n, s = a.current, r = s ? s.wrap : null;
        r && (n = a._getPosition(e), t && "scroll" === t.type ? (delete n.position, r.stop(!0, !0).animate(n, 200)) : (r.css(n), s.pos = i.extend({}, s.dim, n)))
    }, update: function (t) {
        var e = t && t.type, i = !e || "orientationchange" === e;
        i && (clearTimeout(h), h = null), a.isOpen && !h && (h = setTimeout(function () {
            var n = a.current;
            n && !a.isClosing && (a.wrap.removeClass("fancybox-tmp"), (i || "load" === e || "resize" === e && n.autoResize) && a._setDimension(), "scroll" === e && n.canShrink || a.reposition(t), a.trigger("onUpdate"), h = null)
        }, i && !u ? 0 : 300))
    }, toggle: function (t) {
        a.isOpen && (a.current.fitToView = "boolean" === i.type(t) ? t : !a.current.fitToView, u && (a.wrap.removeAttr("style").addClass("fancybox-tmp"), a.trigger("onUpdate")), a.update())
    }, hideLoading: function () {
        o.unbind(".loading"), i("#fancybox-loading").remove()
    }, showLoading: function () {
        var t, e;
        a.hideLoading(), t = i('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body"), o.bind("keydown.loading", function (t) {
            27 === (t.which || t.keyCode) && (t.preventDefault(), a.cancel())
        }), a.defaults.fixed || (e = a.getViewport(), t.css({position: "absolute", top: .5 * e.h + e.y, left: .5 * e.w + e.x}))
    }, getViewport: function () {
        var e = a.current && a.current.locked || !1, i = {x: r.scrollLeft(), y: r.scrollTop()};
        return e ? (i.w = e[0].clientWidth, i.h = e[0].clientHeight) : (i.w = u && t.innerWidth ? t.innerWidth : r.width(), i.h = u && t.innerHeight ? t.innerHeight : r.height()), i
    }, unbindEvents: function () {
        a.wrap && d(a.wrap) && a.wrap.unbind(".fb"), o.unbind(".fb"), r.unbind(".fb")
    }, bindEvents: function () {
        var t, e = a.current;
        e && (r.bind("orientationchange.fb" + (u ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), a.update), t = e.keys, t && o.bind("keydown.fb", function (s) {
            var r = s.which || s.keyCode, o = s.target || s.srcElement;
            return 27 === r && a.coming ? !1 : void(s.ctrlKey || s.altKey || s.shiftKey || s.metaKey || o && (o.type || i(o).is("[contenteditable]")) || i.each(t, function (t, o) {
                return e.group.length > 1 && o[r] !== n ? (a[t](o[r]), s.preventDefault(), !1) : i.inArray(r, o) > -1 ? (a[t](), s.preventDefault(), !1) : void 0
            }))
        }), i.fn.mousewheel && e.mouseWheel && a.wrap.bind("mousewheel.fb", function (t, n, s, r) {
            for (var o = t.target || null, l = i(o), h = !1; l.length && !(h || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));)h = p(l[0]), l = i(l).parent();
            0 === n || h || a.group.length > 1 && !e.canShrink && (r > 0 || s > 0 ? a.prev(r > 0 ? "down" : "left") : (0 > r || 0 > s) && a.next(0 > r ? "up" : "right"), t.preventDefault())
        }))
    }, trigger: function (t, e) {
        var n, s = e || a.coming || a.current;
        if (s) {
            if (i.isFunction(s[t]) && (n = s[t].apply(s, Array.prototype.slice.call(arguments, 1))), n === !1)return!1;
            s.helpers && i.each(s.helpers, function (e, n) {
                n && a.helpers[e] && i.isFunction(a.helpers[e][t]) && a.helpers[e][t](i.extend(!0, {}, a.helpers[e].defaults, n), s)
            }), o.trigger(t)
        }
    }, isImage: function (t) {
        return c(t) && t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
    }, isSWF: function (t) {
        return c(t) && t.match(/\.(swf)((\?|#).*)?$/i)
    }, _start: function (t) {
        var e, n, s, r, o, l = {};
        if (t = _(t), e = a.group[t] || null, !e)return!1;
        if (l = i.extend(!0, {}, a.opts, e), r = l.margin, o = l.padding, "number" === i.type(r) && (l.margin = [r, r, r, r]), "number" === i.type(o) && (l.padding = [o, o, o, o]), l.modal && i.extend(!0, l, {closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: {overlay: {closeClick: !1}}}), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = a.group, l.index = t, a.coming = l, !1 === a.trigger("beforeLoad"))return void(a.coming = null);
        if (s = l.type, n = l.href, !s)return a.coming = null, a.current && a.router && "jumpto" !== a.router ? (a.current.index = t, a[a.router](a.direction)) : !1;
        if (a.isActive = !0, ("image" === s || "swf" === s) && (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === s && (l.aspectRatio = !0), "iframe" === s && u && (l.scrolling = "scroll"), l.wrap = i(l.tpl.wrap).addClass("fancybox-" + (u ? "mobile" : "desktop") + " fancybox-type-" + s + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), i.extend(l, {skin: i(".fancybox-skin", l.wrap), outer: i(".fancybox-outer", l.wrap), inner: i(".fancybox-inner", l.wrap)}), i.each(["Top", "Right", "Bottom", "Left"], function (t, e) {
            l.skin.css("padding" + e, m(l.padding[t]))
        }), a.trigger("onReady"), "inline" === s || "html" === s) {
            if (!l.content || !l.content.length)return a._error("content")
        } else if (!n)return a._error("href");
        "image" === s ? a._loadImage() : "ajax" === s ? a._loadAjax() : "iframe" === s ? a._loadIframe() : a._afterLoad()
    }, _error: function (t) {
        i.extend(a.coming, {type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: t, content: a.coming.tpl.error}), a._afterLoad()
    }, _loadImage: function () {
        var t = a.imgPreload = new Image;
        t.onload = function () {
            this.onload = this.onerror = null, a.coming.width = this.width / a.opts.pixelRatio, a.coming.height = this.height / a.opts.pixelRatio, a._afterLoad()
        }, t.onerror = function () {
            this.onload = this.onerror = null, a._error("image")
        }, t.src = a.coming.href, t.complete !== !0 && a.showLoading()
    }, _loadAjax: function () {
        var t = a.coming;
        a.showLoading(), a.ajaxLoad = i.ajax(i.extend({}, t.ajax, {url: t.href, error: function (t, e) {
            a.coming && "abort" !== e ? a._error("ajax", t) : a.hideLoading()
        }, success: function (e, i) {
            "success" === i && (t.content = e, a._afterLoad())
        }}))
    }, _loadIframe: function () {
        var t = a.coming, e = i(t.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", u ? "auto" : t.iframe.scrolling).attr("src", t.href);
        i(t.wrap).bind("onReset", function () {
            try {
                i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
            } catch (t) {
            }
        }), t.iframe.preload && (a.showLoading(), e.one("load", function () {
            i(this).data("ready", 1), u || i(this).bind("load.fb", a.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), a._afterLoad()
        })), t.content = e.appendTo(t.inner), t.iframe.preload || a._afterLoad()
    }, _preloadImages: function () {
        var t, e, i = a.group, n = a.current, s = i.length, r = n.preload ? Math.min(n.preload, s - 1) : 0;
        for (e = 1; r >= e; e += 1)t = i[(n.index + e) % s], "image" === t.type && t.href && ((new Image).src = t.href)
    }, _afterLoad: function () {
        var t, e, n, s, r, o, l = a.coming, h = a.current, u = "fancybox-placeholder";
        if (a.hideLoading(), l && a.isActive !== !1) {
            if (!1 === a.trigger("afterLoad", l, h))return l.wrap.stop(!0).trigger("onReset").remove(), void(a.coming = null);
            switch (h && (a.trigger("beforeChange", h), h.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), a.unbindEvents(), t = l, e = l.content, n = l.type, s = l.scrolling, i.extend(a, {wrap: t.wrap, skin: t.skin, outer: t.outer, inner: t.inner, current: t, previous: h}), r = t.href, n) {
                case"inline":
                case"ajax":
                case"html":
                    t.selector ? e = i("<div>").html(e).find(t.selector) : d(e) && (e.data(u) || e.data(u, i('<div class="' + u + '"></div>').insertAfter(e).hide()), e = e.show().detach(), t.wrap.bind("onReset", function () {
                        i(this).find(e).length && e.hide().replaceAll(e.data(u)).data(u, !1)
                    }));
                    break;
                case"image":
                    e = t.tpl.image.replace("{href}", r);
                    break;
                case"swf":
                    e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + r + '"></param>', o = "", i.each(t.swf, function (t, i) {
                        e += '<param name="' + t + '" value="' + i + '"></param>', o += " " + t + '="' + i + '"'
                    }), e += '<embed src="' + r + '" type="application/x-shockwave-flash" width="100%" height="100%"' + o + "></embed></object>"
            }
            d(e) && e.parent().is(t.inner) || t.inner.append(e), a.trigger("beforeShow"), t.inner.css("overflow", "yes" === s ? "scroll" : "no" === s ? "hidden" : s), a._setDimension(), a.reposition(), a.isOpen = !1, a.coming = null, a.bindEvents(), a.isOpened ? h.prevMethod && a.transitions[h.prevMethod]() : i(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove(), a.transitions[a.isOpened ? t.nextMethod : t.openMethod](), a._preloadImages()
        }
    }, _setDimension: function () {
        var t, e, n, s, r, o, l, h, u, d, c, p, g, v, y, b = a.getViewport(), w = 0, x = !1, T = !1, S = a.wrap, P = a.skin, k = a.inner, C = a.current, A = C.width, O = C.height, I = C.minWidth, F = C.minHeight, R = C.maxWidth, M = C.maxHeight, L = C.scrolling, D = C.scrollOutside ? C.scrollbarWidth : 0, z = C.margin, E = _(z[1] + z[3]), N = _(z[0] + z[2]);
        if (S.add(P).add(k).width("auto").height("auto").removeClass("fancybox-tmp"), t = _(P.outerWidth(!0) - P.width()), e = _(P.outerHeight(!0) - P.height()), n = E + t, s = N + e, r = f(A) ? (b.w - n) * _(A) / 100 : A, o = f(O) ? (b.h - s) * _(O) / 100 : O, "iframe" === C.type) {
            if (v = C.content, C.autoHeight && 1 === v.data("ready"))try {
                v[0].contentWindow.document.location && (k.width(r).height(9999), y = v.contents().find("body"), D && y.css("overflow-x", "hidden"), o = y.outerHeight(!0))
            } catch (j) {
            }
        } else(C.autoWidth || C.autoHeight) && (k.addClass("fancybox-tmp"), C.autoWidth || k.width(r), C.autoHeight || k.height(o), C.autoWidth && (r = k.width()), C.autoHeight && (o = k.height()), k.removeClass("fancybox-tmp"));
        if (A = _(r), O = _(o), u = r / o, I = _(f(I) ? _(I, "w") - n : I), R = _(f(R) ? _(R, "w") - n : R), F = _(f(F) ? _(F, "h") - s : F), M = _(f(M) ? _(M, "h") - s : M), l = R, h = M, C.fitToView && (R = Math.min(b.w - n, R), M = Math.min(b.h - s, M)), p = b.w - E, g = b.h - N, C.aspectRatio ? (A > R && (A = R, O = _(A / u)), O > M && (O = M, A = _(O * u)), I > A && (A = I, O = _(A / u)), F > O && (O = F, A = _(O * u))) : (A = Math.max(I, Math.min(A, R)), C.autoHeight && "iframe" !== C.type && (k.width(A), O = k.height()), O = Math.max(F, Math.min(O, M))), C.fitToView)if (k.width(A).height(O), S.width(A + t), d = S.width(), c = S.height(), C.aspectRatio)for (; (d > p || c > g) && A > I && O > F && !(w++ > 19);)O = Math.max(F, Math.min(M, O - 10)), A = _(O * u), I > A && (A = I, O = _(A / u)), A > R && (A = R, O = _(A / u)), k.width(A).height(O), S.width(A + t), d = S.width(), c = S.height(); else A = Math.max(I, Math.min(A, A - (d - p))), O = Math.max(F, Math.min(O, O - (c - g)));
        D && "auto" === L && o > O && p > A + t + D && (A += D), k.width(A).height(O), S.width(A + t), d = S.width(), c = S.height(), x = (d > p || c > g) && A > I && O > F, T = C.aspectRatio ? l > A && h > O && r > A && o > O : (l > A || h > O) && (r > A || o > O), i.extend(C, {dim: {width: m(d), height: m(c)}, origWidth: r, origHeight: o, canShrink: x, canExpand: T, wPadding: t, hPadding: e, wrapSpace: c - P.outerHeight(!0), skinSpace: P.height() - O}), !v && C.autoHeight && O > F && M > O && !T && k.height("auto")
    }, _getPosition: function (t) {
        var e = a.current, i = a.getViewport(), n = e.margin, s = a.wrap.width() + n[1] + n[3], r = a.wrap.height() + n[0] + n[2], o = {position: "absolute", top: n[0], left: n[3]};
        return e.autoCenter && e.fixed && !t && r <= i.h && s <= i.w ? o.position = "fixed" : e.locked || (o.top += i.y, o.left += i.x), o.top = m(Math.max(o.top, o.top + (i.h - r) * e.topRatio)), o.left = m(Math.max(o.left, o.left + (i.w - s) * e.leftRatio)), o
    }, _afterZoomIn: function () {
        var t = a.current;
        t && (a.isOpen = a.isOpened = !0, a.wrap.css("overflow", "visible").addClass("fancybox-opened"), a.update(), (t.closeClick || t.nextClick && a.group.length > 1) && a.inner.css("cursor", "pointer").bind("click.fb", function (e) {
            i(e.target).is("a") || i(e.target).parent().is("a") || (e.preventDefault(), a[t.closeClick ? "close" : "next"]())
        }), t.closeBtn && i(t.tpl.closeBtn).appendTo(a.skin).bind("click.fb", function (t) {
            t.preventDefault(), a.close()
        }), t.arrows && a.group.length > 1 && ((t.loop || t.index > 0) && i(t.tpl.prev).appendTo(a.outer).bind("click.fb", a.prev), (t.loop || t.index < a.group.length - 1) && i(t.tpl.next).appendTo(a.outer).bind("click.fb", a.next)), a.trigger("afterShow"), t.loop || t.index !== t.group.length - 1 ? a.opts.autoPlay && !a.player.isActive && (a.opts.autoPlay = !1, a.play()) : a.play(!1))
    }, _afterZoomOut: function (t) {
        t = t || a.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(a, {group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null}), a.trigger("afterClose", t)
    }}), a.transitions = {getOrigPosition: function () {
        var t = a.current, e = t.element, i = t.orig, n = {}, s = 50, r = 50, o = t.hPadding, l = t.wPadding, h = a.getViewport();
        return!i && t.isDom && e.is(":visible") && (i = e.find("img:first"), i.length || (i = e)), d(i) ? (n = i.offset(), i.is("img") && (s = i.outerWidth(), r = i.outerHeight())) : (n.top = h.y + (h.h - r) * t.topRatio, n.left = h.x + (h.w - s) * t.leftRatio), ("fixed" === a.wrap.css("position") || t.locked) && (n.top -= h.y, n.left -= h.x), n = {top: m(n.top - o * t.topRatio), left: m(n.left - l * t.leftRatio), width: m(s + l), height: m(r + o)}
    }, step: function (t, e) {
        var i, n, s, r = e.prop, o = a.current, l = o.wrapSpace, h = o.skinSpace;
        ("width" === r || "height" === r) && (i = e.end === e.start ? 1 : (t - e.start) / (e.end - e.start), a.isClosing && (i = 1 - i), n = "width" === r ? o.wPadding : o.hPadding, s = t - n, a.skin[r](_("width" === r ? s : s - l * i)), a.inner[r](_("width" === r ? s : s - l * i - h * i)))
    }, zoomIn: function () {
        var t = a.current, e = t.pos, n = t.openEffect, s = "elastic" === n, r = i.extend({opacity: 1}, e);
        delete r.position, s ? (e = this.getOrigPosition(), t.openOpacity && (e.opacity = .1)) : "fade" === n && (e.opacity = .1), a.wrap.css(e).animate(r, {duration: "none" === n ? 0 : t.openSpeed, easing: t.openEasing, step: s ? this.step : null, complete: a._afterZoomIn})
    }, zoomOut: function () {
        var t = a.current, e = t.closeEffect, i = "elastic" === e, n = {opacity: .1};
        i && (n = this.getOrigPosition(), t.closeOpacity && (n.opacity = .1)), a.wrap.animate(n, {duration: "none" === e ? 0 : t.closeSpeed, easing: t.closeEasing, step: i ? this.step : null, complete: a._afterZoomOut})
    }, changeIn: function () {
        var t, e = a.current, i = e.nextEffect, n = e.pos, s = {opacity: 1}, r = a.direction, o = 200;
        n.opacity = .1, "elastic" === i && (t = "down" === r || "up" === r ? "top" : "left", "down" === r || "right" === r ? (n[t] = m(_(n[t]) - o), s[t] = "+=" + o + "px") : (n[t] = m(_(n[t]) + o), s[t] = "-=" + o + "px")), "none" === i ? a._afterZoomIn() : a.wrap.css(n).animate(s, {duration: e.nextSpeed, easing: e.nextEasing, complete: a._afterZoomIn})
    }, changeOut: function () {
        var t = a.previous, e = t.prevEffect, n = {opacity: .1}, s = a.direction, r = 200;
        "elastic" === e && (n["down" === s || "up" === s ? "top" : "left"] = ("up" === s || "left" === s ? "-" : "+") + "=" + r + "px"), t.wrap.animate(n, {duration: "none" === e ? 0 : t.prevSpeed, easing: t.prevEasing, complete: function () {
            i(this).trigger("onReset").remove()
        }})
    }}, a.helpers.overlay = {defaults: {closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !u, fixed: !0}, overlay: null, fixed: !1, el: i("html"), create: function (t) {
        t = i.extend({}, this.defaults, t), this.overlay && this.close(), this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(a.coming ? a.coming.parent : t.parent), this.fixed = !1, t.fixed && a.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
    }, open: function (t) {
        var e = this;
        t = i.extend({}, this.defaults, t), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(t), this.fixed || (r.bind("resize.overlay", i.proxy(this.update, this)), this.update()), t.closeClick && this.overlay.bind("click.overlay", function (t) {
            return i(t.target).hasClass("fancybox-overlay") ? (a.isActive ? a.close() : e.close(), !1) : void 0
        }), this.overlay.css(t.css).show()
    }, close: function () {
        var t, e;
        r.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), t = r.scrollTop(), e = r.scrollLeft(), this.el.removeClass("fancybox-lock"), r.scrollTop(t).scrollLeft(e)), i(".fancybox-overlay").remove().hide(), i.extend(this, {overlay: null, fixed: !1})
    }, update: function () {
        var t, i = "100%";
        this.overlay.width(i).height("100%"), l ? (t = Math.max(e.documentElement.offsetWidth, e.body.offsetWidth), o.width() > t && (i = o.width())) : o.width() > r.width() && (i = o.width()), this.overlay.width(i).height(o.height())
    }, onReady: function (t, e) {
        var n = this.overlay;
        i(".fancybox-overlay").stop(!0, !0), n || this.create(t), t.locked && this.fixed && e.fixed && (n || (this.margin = o.height() > r.height() ? i("html").css("margin-right").replace("px", "") : !1), e.locked = this.overlay.append(e.wrap), e.fixed = !1), t.showEarly === !0 && this.beforeShow.apply(this, arguments)
    }, beforeShow: function (t, e) {
        var n, s;
        e.locked && (this.margin !== !1 && (i("*").filter(function () {
            return"fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
        }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), n = r.scrollTop(), s = r.scrollLeft(), this.el.addClass("fancybox-lock"), r.scrollTop(n).scrollLeft(s)), this.open(t)
    }, onUpdate: function () {
        this.fixed || this.update()
    }, afterClose: function (t) {
        this.overlay && !a.coming && this.overlay.fadeOut(t.speedOut, i.proxy(this.close, this))
    }}, a.helpers.title = {defaults: {type: "float", position: "bottom"}, beforeShow: function (t) {
        var e, n, s = a.current, r = s.title, o = t.type;
        if (i.isFunction(r) && (r = r.call(s.element, s)), c(r) && "" !== i.trim(r)) {
            switch (e = i('<div class="fancybox-title fancybox-title-' + o + '-wrap">' + r + "</div>"), o) {
                case"inside":
                    n = a.skin;
                    break;
                case"outside":
                    n = a.wrap;
                    break;
                case"over":
                    n = a.inner;
                    break;
                default:
                    n = a.skin, e.appendTo("body"), l && e.width(e.width()), e.wrapInner('<span class="child"></span>'), a.current.margin[2] += Math.abs(_(e.css("margin-bottom")))
            }
            e["top" === t.position ? "prependTo" : "appendTo"](n)
        }
    }}, i.fn.fancybox = function (t) {
        var e, n = i(this), s = this.selector || "", r = function (r) {
            var o, l, h = i(this).blur(), u = e;
            r.ctrlKey || r.altKey || r.shiftKey || r.metaKey || h.is(".fancybox-wrap") || (o = t.groupAttr || "data-fancybox-group", l = h.attr(o), l || (o = "rel", l = h.get(0)[o]), l && "" !== l && "nofollow" !== l && (h = s.length ? i(s) : n, h = h.filter("[" + o + '="' + l + '"]'), u = h.index(this)), t.index = u, a.open(h, t) !== !1 && r.preventDefault())
        };
        return t = t || {}, e = t.index || 0, s && t.live !== !1 ? o.undelegate(s, "click.fb-start").delegate(s + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", r) : n.unbind("click.fb-start").bind("click.fb-start", r), this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, o.ready(function () {
        var e, r;
        i.scrollbarWidth === n && (i.scrollbarWidth = function () {
            var t = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), e = t.children(), n = e.innerWidth() - e.height(99).innerWidth();
            return t.remove(), n
        }), i.support.fixedPosition === n && (i.support.fixedPosition = function () {
            var t = i('<div style="position:fixed;top:20px;"></div>').appendTo("body"), e = 20 === t[0].offsetTop || 15 === t[0].offsetTop;
            return t.remove(), e
        }()), i.extend(a.defaults, {scrollbarWidth: i.scrollbarWidth(), fixed: i.support.fixedPosition, parent: i("body")}), e = i(t).width(), s.addClass("fancybox-lock-test"), r = i(t).width(), s.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (r - e) + "px;}</style>").appendTo("head")
    })
}(window, document, jQuery), !function (t, e) {
    function i(t) {
        return"object" == typeof t
    }

    function n(t) {
        return"string" == typeof t
    }

    function s(t) {
        return"number" == typeof t
    }

    function r(t) {
        return t === e
    }

    function o() {
        N = google.maps, E || (E = {verbose: !1, queryLimit: {attempt: 5, delay: 250, random: 250}, classes: function () {
            var e = {};
            return t.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "), function (t, i) {
                e[i] = N[i]
            }), e
        }(), map: {mapTypeId: N.MapTypeId.ROADMAP, center: [46.578498, 2.457275], zoom: 2}, overlay: {pane: "floatPane", content: "", offset: {x: 0, y: 0}}, geoloc: {getCurrentPosition: {maximumAge: 6e4, timeout: 5e3}}})
    }

    function a(t, e) {
        return r(t) ? "gmap3_" + (e ? j + 1 : ++j) : t
    }

    function l(t) {
        var e, i = N.version.split(".");
        for (t = t.split("."), e = 0; e < i.length; e++)i[e] = parseInt(i[e], 10);
        for (e = 0; e < t.length; e++) {
            if (t[e] = parseInt(t[e], 10), !i.hasOwnProperty(e))return!1;
            if (i[e] < t[e])return!1
        }
        return!0
    }

    function h(e, i, n, s, r) {
        function o(i, s) {
            i && t.each(i, function (t, i) {
                var o = e, a = i;
                q(i) && (o = i[0], a = i[1]), s(n, t, function (t) {
                    a.apply(o, [r || n, t, l])
                })
            })
        }

        var a = i.td || {}, l = {id: s, data: a.data, tag: a.tag};
        o(a.events, N.event.addListener), o(a.onces, N.event.addListenerOnce)
    }

    function u(t) {
        var e, i = [];
        for (e in t)t.hasOwnProperty(e) && i.push(e);
        return i
    }

    function d(t, e) {
        var i, n = arguments;
        for (i = 2; i < n.length; i++)if (e in n[i] && n[i].hasOwnProperty(e))return void(t[e] = n[i][e])
    }

    function c(e, i) {
        var n, s, r = ["data", "tag", "id", "events", "onces"], o = {};
        if (e.td)for (n in e.td)e.td.hasOwnProperty(n) && "options" !== n && "values" !== n && (o[n] = e.td[n]);
        for (s = 0; s < r.length; s++)d(o, r[s], i, e.td);
        return o.options = t.extend({}, e.opts || {}, i.options || {}), o
    }

    function f() {
        if (E.verbose) {
            var t, e = [];
            if (window.console && B(console.error)) {
                for (t = 0; t < arguments.length; t++)e.push(arguments[t]);
                console.error.apply(console, e)
            } else {
                for (e = "", t = 0; t < arguments.length; t++)e += arguments[t].toString() + " ";
                alert(e)
            }
        }
    }

    function p(t) {
        return(s(t) || n(t)) && "" !== t && !isNaN(t)
    }

    function _(t) {
        var e, n = [];
        if (!r(t))if (i(t))if (s(t.length))n = t; else for (e in t)n.push(t[e]); else n.push(t);
        return n
    }

    function m(e) {
        return e ? B(e) ? e : (e = _(e), function (n) {
            var s;
            if (r(n))return!1;
            if (i(n)) {
                for (s = 0; s < n.length; s++)if (t.inArray(n[s], e) >= 0)return!0;
                return!1
            }
            return t.inArray(n, e) >= 0
        }) : void 0
    }

    function g(t, e, i) {
        var s = e ? t : null;
        return!t || n(t) ? s : t.latLng ? g(t.latLng) : t instanceof N.LatLng ? t : p(t.lat) ? new N.LatLng(t.lat, t.lng) : !i && q(t) && p(t[0]) && p(t[1]) ? new N.LatLng(t[0], t[1]) : s
    }

    function v(t) {
        var e, i;
        return!t || t instanceof N.LatLngBounds ? t || null : (q(t) ? 2 === t.length ? (e = g(t[0]), i = g(t[1])) : 4 === t.length && (e = g([t[0], t[1]]), i = g([t[2], t[3]])) : "ne"in t && "sw"in t ? (e = g(t.ne), i = g(t.sw)) : "n"in t && "e"in t && "s"in t && "w"in t && (e = g([t.n, t.e]), i = g([t.s, t.w])), e && i ? new N.LatLngBounds(i, e) : null)
    }

    function y(t, e, i, s, r) {
        var o = i ? g(s.td, !1, !0) : !1, a = o ? {latLng: o} : s.td.address ? n(s.td.address) ? {address: s.td.address} : s.td.address : !1, l = a ? V.get(a) : !1, h = this;
        a ? (r = r || 0, l ? (s.latLng = l.results[0].geometry.location, s.results = l.results, s.status = l.status, e.apply(t, [s])) : (a.location && (a.location = g(a.location)), a.bounds && (a.bounds = v(a.bounds)), T().geocode(a, function (n, o) {
            o === N.GeocoderStatus.OK ? (V.store(a, {results: n, status: o}), s.latLng = n[0].geometry.location, s.results = n, s.status = o, e.apply(t, [s])) : o === N.GeocoderStatus.OVER_QUERY_LIMIT && r < E.queryLimit.attempt ? setTimeout(function () {
                y.apply(h, [t, e, i, s, r + 1])
            }, E.queryLimit.delay + Math.floor(Math.random() * E.queryLimit.random)) : (f("geocode failed", o, a), s.latLng = s.results = !1, s.status = o, e.apply(t, [s]))
        }))) : (s.latLng = g(s.td, !1, !0), e.apply(t, [s]))
    }

    function b(e, i, n, s) {
        function r() {
            do a++; while (a < e.length && !("address"in e[a]));
            return a >= e.length ? void n.apply(i, [s]) : void y(o, function (i) {
                delete i.td, t.extend(e[a], i), r.apply(o, [])
            }, !0, {td: e[a]})
        }

        var o = this, a = -1;
        r()
    }

    function w(t, e, i) {
        var n = !1;
        navigator && navigator.geolocation ? navigator.geolocation.getCurrentPosition(function (s) {
            n || (n = !0, i.latLng = new N.LatLng(s.coords.latitude, s.coords.longitude), e.apply(t, [i]))
        }, function () {
            n || (n = !0, i.latLng = !1, e.apply(t, [i]))
        }, i.opts.getCurrentPosition) : (i.latLng = !1, e.apply(t, [i]))
    }

    function x(t) {
        var e, n = !1;
        if (i(t) && t.hasOwnProperty("get")) {
            for (e in t)if ("get" !== e)return!1;
            n = !t.get.hasOwnProperty("callback")
        }
        return n
    }

    function T() {
        return H.geocoder || (H.geocoder = new N.Geocoder), H.geocoder
    }

    function S() {
        var t = [];
        this.get = function (e) {
            if (t.length) {
                var n, s, r, o, a, l = u(e);
                for (n = 0; n < t.length; n++) {
                    for (o = t[n], a = l.length === o.keys.length, s = 0; s < l.length && a; s++)r = l[s], a = r in o.request, a && (a = i(e[r]) && "equals"in e[r] && B(e[r]) ? e[r].equals(o.request[r]) : e[r] === o.request[r]);
                    if (a)return o.results
                }
            }
        }, this.store = function (e, i) {
            t.push({request: e, keys: u(e), results: i})
        }
    }

    function P() {
        var t = [], e = this;
        e.empty = function () {
            return!t.length
        }, e.add = function (e) {
            t.push(e)
        }, e.get = function () {
            return t.length ? t[0] : !1
        }, e.ack = function () {
            t.shift()
        }
    }

    function k() {
        function e(t) {
            return{id: t.id, name: t.name, object: t.obj, tag: t.tag, data: t.data}
        }

        function i(t) {
            B(t.setMap) && t.setMap(null), B(t.remove) && t.remove(), B(t.free) && t.free(), t = null
        }

        var n = {}, s = {}, o = this;
        o.add = function (t, e, i, r) {
            var l = t.td || {}, h = a(l.id);
            return n[e] || (n[e] = []), h in s && o.clearById(h), s[h] = {obj: i, sub: r, name: e, id: h, tag: l.tag, data: l.data}, n[e].push(h), h
        }, o.getById = function (t, i, n) {
            var r = !1;
            return t in s && (r = i ? s[t].sub : n ? e(s[t]) : s[t].obj), r
        }, o.get = function (t, i, r, o) {
            var a, l, h = m(r);
            if (!n[t] || !n[t].length)return null;
            for (a = n[t].length; a;)if (a--, l = n[t][i ? a : n[t].length - a - 1], l && s[l]) {
                if (h && !h(s[l].tag))continue;
                return o ? e(s[l]) : s[l].obj
            }
            return null
        }, o.all = function (t, i, o) {
            var a = [], l = m(i), h = function (t) {
                var i, r;
                for (i = 0; i < n[t].length; i++)if (r = n[t][i], r && s[r]) {
                    if (l && !l(s[r].tag))continue;
                    a.push(o ? e(s[r]) : s[r].obj)
                }
            };
            if (t in n)h(t); else if (r(t))for (t in n)h(t);
            return a
        }, o.rm = function (t, e, i) {
            var r, a;
            if (!n[t])return!1;
            if (e)if (i)for (r = n[t].length - 1; r >= 0 && (a = n[t][r], !e(s[a].tag)); r--); else for (r = 0; r < n[t].length && (a = n[t][r], !e(s[a].tag)); r++); else r = i ? n[t].length - 1 : 0;
            return r in n[t] ? o.clearById(n[t][r], r) : !1
        }, o.clearById = function (t, e) {
            if (t in s) {
                var o, a = s[t].name;
                for (o = 0; r(e) && o < n[a].length; o++)t === n[a][o] && (e = o);
                return i(s[t].obj), s[t].sub && i(s[t].sub), delete s[t], n[a].splice(e, 1), !0
            }
            return!1
        }, o.objGetById = function (t) {
            var e, i;
            if (n.clusterer)for (i in n.clusterer)if ((e = s[n.clusterer[i]].obj.getById(t)) !== !1)return e;
            return!1
        }, o.objClearById = function (t) {
            var e;
            if (n.clusterer)for (e in n.clusterer)if (s[n.clusterer[e]].obj.clearById(t))return!0;
            return null
        }, o.clear = function (t, e, i, s) {
            var r, a, l, h = m(s);
            if (t && t.length)t = _(t); else {
                t = [];
                for (r in n)t.push(r)
            }
            for (a = 0; a < t.length; a++)if (l = t[a], e)o.rm(l, h, !0); else if (i)o.rm(l, h, !1); else for (; o.rm(l, h, !1););
        }, o.objClear = function (e, i, r, o) {
            var a;
            if (n.clusterer && (t.inArray("marker", e) >= 0 || !e.length))for (a in n.clusterer)s[n.clusterer[a]].obj.clear(i, r, o)
        }
    }

    function C(e, i, s) {
        function r(t) {
            var e = {};
            return e[t] = {}, e
        }

        function o() {
            var t;
            for (t in s)if (s.hasOwnProperty(t) && !l.hasOwnProperty(t))return t
        }

        var a, l = {}, h = this, u = {latLng: {map: !1, marker: !1, infowindow: !1, circle: !1, overlay: !1, getlatlng: !1, getmaxzoom: !1, getelevation: !1, streetviewpanorama: !1, getaddress: !0}, geoloc: {getgeoloc: !0}};
        n(s) && (s = r(s)), h.run = function () {
            for (var n, r; n = o();) {
                if (B(e[n]))return a = n, r = t.extend(!0, {}, E[n] || {}, s[n].options || {}), void(n in u.latLng ? s[n].values ? b(s[n].values, e, e[n], {td: s[n], opts: r, session: l}) : y(e, e[n], u.latLng[n], {td: s[n], opts: r, session: l}) : n in u.geoloc ? w(e, e[n], {td: s[n], opts: r, session: l}) : e[n].apply(e, [
                    {td: s[n], opts: r, session: l}
                ]));
                l[n] = null
            }
            i.apply(e, [s, l])
        }, h.ack = function (t) {
            l[a] = t, h.run.apply(h, [])
        }
    }

    function A() {
        return H.ds || (H.ds = new N.DirectionsService), H.ds
    }

    function O() {
        return H.dms || (H.dms = new N.DistanceMatrixService), H.dms
    }

    function I() {
        return H.mzs || (H.mzs = new N.MaxZoomService), H.mzs
    }

    function F() {
        return H.es || (H.es = new N.ElevationService), H.es
    }

    function R(t) {
        function e() {
            var t = this;
            return t.onAdd = function () {
            }, t.onRemove = function () {
            }, t.draw = function () {
            }, E.classes.OverlayView.apply(t, [])
        }

        e.prototype = E.classes.OverlayView.prototype;
        var i = new e;
        return i.setMap(t), i
    }

    function M(e, n, s) {
        function r(t) {
            M[t] || (delete L[t].options.map, M[t] = new E.classes.Marker(L[t].options), h(e, {td: L[t]}, M[t], L[t].id))
        }

        function o() {
            return(v = z.getProjection()) ? (P = !0,
                A.push(N.event.addListener(n, "zoom_changed", f)), A.push(N.event.addListener(n, "bounds_changed", f)), void _()) : void setTimeout(function () {
                o.apply(C, [])
            }, 25)
        }

        function l(t) {
            i(O[t]) ? (B(O[t].obj.setMap) && O[t].obj.setMap(null), B(O[t].obj.remove) && O[t].obj.remove(), B(O[t].shadow.remove) && O[t].obj.remove(), B(O[t].shadow.setMap) && O[t].shadow.setMap(null), delete O[t].obj, delete O[t].shadow) : M[t] && M[t].setMap(null), delete O[t]
        }

        function u() {
            var t, e, i, n, s, r, o, a, l = Math.cos, h = Math.sin, u = arguments;
            return u[0]instanceof N.LatLng ? (t = u[0].lat(), i = u[0].lng(), u[1]instanceof N.LatLng ? (e = u[1].lat(), n = u[1].lng()) : (e = u[1], n = u[2])) : (t = u[0], i = u[1], u[2]instanceof N.LatLng ? (e = u[2].lat(), n = u[2].lng()) : (e = u[2], n = u[3])), s = Math.PI * t / 180, r = Math.PI * i / 180, o = Math.PI * e / 180, a = Math.PI * n / 180, 6371e3 * Math.acos(Math.min(l(s) * l(o) * l(r) * l(a) + l(s) * h(r) * l(o) * h(a) + h(s) * h(o), 1))
        }

        function d() {
            var t = u(n.getCenter(), n.getBounds().getNorthEast()), e = new N.Circle({center: n.getCenter(), radius: 1.25 * t});
            return e.getBounds()
        }

        function c() {
            var t, e = {};
            for (t in O)e[t] = !0;
            return e
        }

        function f() {
            clearTimeout(g), g = setTimeout(_, 25)
        }

        function p(t) {
            var e = v.fromLatLngToDivPixel(t), i = v.fromDivPixelToLatLng(new N.Point(e.x + s.radius, e.y - s.radius)), n = v.fromDivPixelToLatLng(new N.Point(e.x - s.radius, e.y + s.radius));
            return new N.LatLngBounds(n, i)
        }

        function _() {
            if (!x && !S && P) {
                var e, i, r, o, a, h, u, f, _, m, g, v = !1, w = [], C = {}, A = n.getZoom(), I = "maxZoom"in s && A > s.maxZoom, F = c();
                for (T = !1, A > 3 && (a = d(), v = a.getSouthWest().lng() < a.getNorthEast().lng()), e = 0; e < L.length; e++)!L[e] || v && !a.contains(L[e].options.position) || y && !y(D[e]) || w.push(e);
                for (; ;) {
                    for (e = 0; C[e] && e < w.length;)e++;
                    if (e === w.length)break;
                    if (o = [], k && !I) {
                        g = 10;
                        do for (f = o, o = [], g--, u = f.length ? a.getCenter() : L[w[e]].options.position, a = p(u), i = e; i < w.length; i++)C[i] || a.contains(L[w[i]].options.position) && o.push(i); while (f.length < o.length && o.length > 1 && g)
                    } else for (i = e; i < w.length; i++)if (!C[i]) {
                        o.push(i);
                        break
                    }
                    for (h = {indexes: [], ref: []}, _ = m = 0, r = 0; r < o.length; r++)C[o[r]] = !0, h.indexes.push(w[o[r]]), h.ref.push(w[o[r]]), _ += L[w[o[r]]].options.position.lat(), m += L[w[o[r]]].options.position.lng();
                    _ /= o.length, m /= o.length, h.latLng = new N.LatLng(_, m), h.ref = h.ref.join("-"), h.ref in F ? delete F[h.ref] : (1 === o.length && (O[h.ref] = !0), b(h))
                }
                t.each(F, function (t) {
                    l(t)
                }), S = !1
            }
        }

        var g, v, y, b, w, x = !1, T = !1, S = !1, P = !1, k = !0, C = this, A = [], O = {}, I = {}, F = {}, M = [], L = [], D = [], z = R(n, s.radius);
        o(), C.getById = function (t) {
            return t in I ? (r(I[t]), M[I[t]]) : !1
        }, C.rm = function (t) {
            var e = I[t];
            M[e] && M[e].setMap(null), delete M[e], M[e] = !1, delete L[e], L[e] = !1, delete D[e], D[e] = !1, delete I[t], delete F[e], T = !0
        }, C.clearById = function (t) {
            return t in I ? (C.rm(t), !0) : void 0
        }, C.clear = function (t, e, i) {
            var n, s, r, o, a, l = [], h = m(i);
            for (t ? (n = L.length - 1, s = -1, r = -1) : (n = 0, s = L.length, r = 1), o = n; o !== s && (!L[o] || h && !h(L[o].tag) || (l.push(F[o]), !e && !t)); o += r);
            for (a = 0; a < l.length; a++)C.rm(l[a])
        }, C.add = function (t, e) {
            t.id = a(t.id), C.clearById(t.id), I[t.id] = M.length, F[M.length] = t.id, M.push(null), L.push(t), D.push(e), T = !0
        }, C.addMarker = function (t, i) {
            i = i || {}, i.id = a(i.id), C.clearById(i.id), i.options || (i.options = {}), i.options.position = t.getPosition(), h(e, {td: i}, t, i.id), I[i.id] = M.length, F[M.length] = i.id, M.push(t), L.push(i), D.push(i.data || {}), T = !0
        }, C.td = function (t) {
            return L[t]
        }, C.value = function (t) {
            return D[t]
        }, C.marker = function (t) {
            return t in M ? (r(t), M[t]) : !1
        }, C.markerIsSet = function (t) {
            return Boolean(M[t])
        }, C.setMarker = function (t, e) {
            M[t] = e
        }, C.store = function (t, e, i) {
            O[t.ref] = {obj: e, shadow: i}
        }, C.free = function () {
            var e;
            for (e = 0; e < A.length; e++)N.event.removeListener(A[e]);
            A = [], t.each(O, function (t) {
                l(t)
            }), O = {}, t.each(L, function (t) {
                L[t] = null
            }), L = [], t.each(M, function (t) {
                M[t] && (M[t].setMap(null), delete M[t])
            }), M = [], t.each(D, function (t) {
                delete D[t]
            }), D = [], I = {}, F = {}
        }, C.filter = function (t) {
            y = t, _()
        }, C.enable = function (t) {
            k !== t && (k = t, _())
        }, C.display = function (t) {
            b = t
        }, C.error = function (t) {
            w = t
        }, C.beginUpdate = function () {
            x = !0
        }, C.endUpdate = function () {
            x = !1, T && _()
        }, C.autofit = function (t) {
            var e;
            for (e = 0; e < L.length; e++)L[e] && t.extend(L[e].options.position)
        }
    }

    function L(t, e) {
        var i = this;
        i.id = function () {
            return t
        }, i.filter = function (t) {
            e.filter(t)
        }, i.enable = function () {
            e.enable(!0)
        }, i.disable = function () {
            e.enable(!1)
        }, i.add = function (t, i, n) {
            n || e.beginUpdate(), e.addMarker(t, i), n || e.endUpdate()
        }, i.getById = function (t) {
            return e.getById(t)
        }, i.clearById = function (t, i) {
            var n;
            return i || e.beginUpdate(), n = e.clearById(t), i || e.endUpdate(), n
        }, i.clear = function (t, i, n, s) {
            s || e.beginUpdate(), e.clear(t, i, n), s || e.endUpdate()
        }
    }

    function D(e, i, n, s) {
        var r = this, o = [];
        E.classes.OverlayView.call(r), r.setMap(e), r.onAdd = function () {
            var e = r.getPanes();
            i.pane in e && t(e[i.pane]).append(s), t.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "), function (e, i) {
                o.push(N.event.addDomListener(s[0], i, function (e) {
                    t.Event(e).stopPropagation(), N.event.trigger(r, i, [e]), r.draw()
                }))
            }), o.push(N.event.addDomListener(s[0], "contextmenu", function (e) {
                t.Event(e).stopPropagation(), N.event.trigger(r, "rightclick", [e]), r.draw()
            }))
        }, r.getPosition = function () {
            return n
        }, r.setPosition = function (t) {
            n = t, r.draw()
        }, r.draw = function () {
            var t = r.getProjection().fromLatLngToDivPixel(n);
            s.css("left", t.x + i.offset.x + "px").css("top", t.y + i.offset.y + "px")
        }, r.onRemove = function () {
            var t;
            for (t = 0; t < o.length; t++)N.event.removeListener(o[t]);
            s.remove()
        }, r.hide = function () {
            s.hide()
        }, r.show = function () {
            s.show()
        }, r.toggle = function () {
            s && (s.is(":visible") ? r.show() : r.hide())
        }, r.toggleDOM = function () {
            r.setMap(r.getMap() ? null : e)
        }, r.getDOMElement = function () {
            return s[0]
        }
    }

    function z(s) {
        function o() {
            !w && (w = T.get()) && w.run()
        }

        function u() {
            w = null, T.ack(), o.call(x)
        }

        function d(t) {
            var e, i = t.td.callback;
            i && (e = Array.prototype.slice.call(arguments, 1), B(i) ? i.apply(s, e) : q(i) && B(i[1]) && i[1].apply(i[0], e))
        }

        function p(t, e, i) {
            i && h(s, t, e, i), d(t, e), w.ack(e)
        }

        function m(e, i) {
            i = i || {};
            var n = i.td && i.td.options ? i.td.options : 0;
            R ? n && (n.center && (n.center = g(n.center)), R.setOptions(n)) : (n = i.opts || t.extend(!0, {}, E.map, n || {}), n.center = e || g(n.center), R = new E.classes.Map(s.get(0), n))
        }

        function y(i) {
            var n, r, o = new M(s, R, i), a = {}, l = {}, u = [], d = /^[0-9]+$/;
            for (r in i)d.test(r) ? (u.push(1 * r), l[r] = i[r], l[r].width = l[r].width || 0, l[r].height = l[r].height || 0) : a[r] = i[r];
            return u.sort(function (t, e) {
                return t > e
            }), n = a.calculator ? function (e) {
                var i = [];
                return t.each(e, function (t, e) {
                    i.push(o.value(e))
                }), a.calculator.apply(s, [i])
            } : function (t) {
                return t.length
            }, o.error(function () {
                f.apply(x, arguments)
            }), o.display(function (r) {
                var d, c, f, p, _, m, v = n(r.indexes);
                if (i.force || v > 1)for (d = 0; d < u.length; d++)u[d] <= v && (c = l[u[d]]);
                c ? (_ = c.offset || [-c.width / 2, -c.height / 2], f = t.extend({}, a), f.options = t.extend({pane: "overlayLayer", content: c.content ? c.content.replace("CLUSTER_COUNT", v) : "", offset: {x: ("x"in _ ? _.x : _[0]) || 0, y: ("y"in _ ? _.y : _[1]) || 0}}, a.options || {}), p = x.overlay({td: f, opts: f.options, latLng: g(r)}, !0), f.options.pane = "floatShadow", f.options.content = t(document.createElement("div")).width(c.width + "px").height(c.height + "px").css({cursor: "pointer"}), m = x.overlay({td: f, opts: f.options, latLng: g(r)}, !0), a.data = {latLng: g(r), markers: []}, t.each(r.indexes, function (t, e) {
                    a.data.markers.push(o.value(e)), o.markerIsSet(e) && o.marker(e).setMap(null)
                }), h(s, {td: a}, m, e, {main: p, shadow: m}), o.store(r, p, m)) : t.each(r.indexes, function (t, e) {
                    o.marker(e).setMap(R)
                })
            }), o
        }

        function b(e, i, n) {
            var r = [], o = "values"in e.td;
            return o || (e.td.values = [
                {options: e.opts}
            ]), e.td.values.length ? (m(), t.each(e.td.values, function (t, o) {
                var a, l, u, d, f = c(e, o);
                if (f.options[n])if (f.options[n][0][0] && q(f.options[n][0][0]))for (l = 0; l < f.options[n].length; l++)for (u = 0; u < f.options[n][l].length; u++)f.options[n][l][u] = g(f.options[n][l][u]); else for (l = 0; l < f.options[n].length; l++)f.options[n][l] = g(f.options[n][l]);
                f.options.map = R, d = new N[i](f.options), r.push(d), a = S.add({td: f}, i.toLowerCase(), d), h(s, {td: f}, d, a)
            }), void p(e, o ? r : r[0])) : void p(e, !1)
        }

        var w, x = this, T = new P, S = new k, R = null;
        x._plan = function (t) {
            var e;
            for (e = 0; e < t.length; e++)T.add(new C(x, u, t[e]));
            o()
        }, x.map = function (t) {
            m(t.latLng, t), h(s, t, R), p(t, R)
        }, x.destroy = function (t) {
            S.clear(), s.empty(), R && (R = null), p(t, !0)
        }, x.overlay = function (e, i) {
            var n = [], r = "values"in e.td;
            return r || (e.td.values = [
                {latLng: e.latLng, options: e.opts}
            ]), e.td.values.length ? (D.__initialised || (D.prototype = new E.classes.OverlayView, D.__initialised = !0), t.each(e.td.values, function (r, o) {
                var a, l, u = c(e, o), d = t(document.createElement("div")).css({border: "none", borderWidth: 0, position: "absolute"});
                d.append(u.options.content), l = new D(R, u.options, g(u) || g(o), d), n.push(l), d = null, i || (a = S.add(e, "overlay", l), h(s, {td: u}, l, a))
            }), i ? n[0] : void p(e, r ? n : n[0])) : void p(e, !1)
        }, x.marker = function (e) {
            var i, n, r, o = "values"in e.td, l = !R;
            return o || (e.opts.position = e.latLng || g(e.opts.position), e.td.values = [
                {options: e.opts}
            ]), e.td.values.length ? (l && m(), e.td.cluster && !R.getBounds() ? void N.event.addListenerOnce(R, "bounds_changed", function () {
                x.marker.apply(x, [e])
            }) : void(e.td.cluster ? (e.td.cluster instanceof L ? (n = e.td.cluster, r = S.getById(n.id(), !0)) : (r = y(e.td.cluster), n = new L(a(e.td.id, !0), r), S.add(e, "clusterer", n, r)), r.beginUpdate(), t.each(e.td.values, function (t, i) {
                var n = c(e, i);
                n.options.position = g(n.options.position ? n.options.position : i), n.options.position && (n.options.map = R, l && (R.setCenter(n.options.position), l = !1), r.add(n, i))
            }), r.endUpdate(), p(e, n)) : (i = [], t.each(e.td.values, function (t, n) {
                var r, o, a = c(e, n);
                a.options.position = g(a.options.position ? a.options.position : n), a.options.position && (a.options.map = R, l && (R.setCenter(a.options.position), l = !1), o = new E.classes.Marker(a.options), i.push(o), r = S.add({td: a}, "marker", o), h(s, {td: a}, o, r))
            }), p(e, o ? i : i[0])))) : void p(e, !1)
        }, x.getroute = function (t) {
            t.opts.origin = g(t.opts.origin, !0), t.opts.destination = g(t.opts.destination, !0), A().route(t.opts, function (e, i) {
                d(t, i === N.DirectionsStatus.OK ? e : !1, i), w.ack()
            })
        }, x.getdistance = function (t) {
            var e;
            for (t.opts.origins = _(t.opts.origins), e = 0; e < t.opts.origins.length; e++)t.opts.origins[e] = g(t.opts.origins[e], !0);
            for (t.opts.destinations = _(t.opts.destinations), e = 0; e < t.opts.destinations.length; e++)t.opts.destinations[e] = g(t.opts.destinations[e], !0);
            O().getDistanceMatrix(t.opts, function (e, i) {
                d(t, i === N.DistanceMatrixStatus.OK ? e : !1, i), w.ack()
            })
        }, x.infowindow = function (i) {
            var n = [], o = "values"in i.td;
            o || (i.latLng && (i.opts.position = i.latLng), i.td.values = [
                {options: i.opts}
            ]), t.each(i.td.values, function (t, a) {
                var l, u, d = c(i, a);
                d.options.position = g(d.options.position ? d.options.position : a.latLng), R || m(d.options.position), u = new E.classes.InfoWindow(d.options), u && (r(d.open) || d.open) && (o ? u.open(R, d.anchor || e) : u.open(R, d.anchor || (i.latLng ? e : i.session.marker ? i.session.marker : e))), n.push(u), l = S.add({td: d}, "infowindow", u), h(s, {td: d}, u, l)
            }), p(i, o ? n : n[0])
        }, x.circle = function (e) {
            var i = [], n = "values"in e.td;
            return n || (e.opts.center = e.latLng || g(e.opts.center), e.td.values = [
                {options: e.opts}
            ]), e.td.values.length ? (t.each(e.td.values, function (t, n) {
                var r, o, a = c(e, n);
                a.options.center = g(a.options.center ? a.options.center : n), R || m(a.options.center), a.options.map = R, o = new E.classes.Circle(a.options), i.push(o), r = S.add({td: a}, "circle", o), h(s, {td: a}, o, r)
            }), void p(e, n ? i : i[0])) : void p(e, !1)
        }, x.getaddress = function (t) {
            d(t, t.results, t.status), w.ack()
        }, x.getlatlng = function (t) {
            d(t, t.results, t.status), w.ack()
        }, x.getmaxzoom = function (t) {
            I().getMaxZoomAtLatLng(t.latLng, function (e) {
                d(t, e.status === N.MaxZoomStatus.OK ? e.zoom : !1, status), w.ack()
            })
        }, x.getelevation = function (t) {
            var e, i = [], n = function (e, i) {
                d(t, i === N.ElevationStatus.OK ? e : !1, i), w.ack()
            };
            if (t.latLng)i.push(t.latLng); else for (i = _(t.td.locations || []), e = 0; e < i.length; e++)i[e] = g(i[e]);
            if (i.length)F().getElevationForLocations({locations: i}, n); else {
                if (t.td.path && t.td.path.length)for (e = 0; e < t.td.path.length; e++)i.push(g(t.td.path[e]));
                i.length ? F().getElevationAlongPath({path: i, samples: t.td.samples}, n) : w.ack()
            }
        }, x.defaults = function (e) {
            t.each(e.td, function (e, n) {
                E[e] = i(E[e]) ? t.extend({}, E[e], n) : n
            }), w.ack(!0)
        }, x.rectangle = function (e) {
            var i = [], n = "values"in e.td;
            return n || (e.td.values = [
                {options: e.opts}
            ]), e.td.values.length ? (t.each(e.td.values, function (t, n) {
                var r, o, a = c(e, n);
                a.options.bounds = v(a.options.bounds ? a.options.bounds : n), R || m(a.options.bounds.getCenter()), a.options.map = R, o = new E.classes.Rectangle(a.options), i.push(o), r = S.add({td: a}, "rectangle", o), h(s, {td: a}, o, r)
            }), void p(e, n ? i : i[0])) : void p(e, !1)
        }, x.polyline = function (t) {
            b(t, "Polyline", "path")
        }, x.polygon = function (t) {
            b(t, "Polygon", "paths")
        }, x.trafficlayer = function (t) {
            m();
            var e = S.get("trafficlayer");
            e || (e = new E.classes.TrafficLayer, e.setMap(R), S.add(t, "trafficlayer", e)), p(t, e)
        }, x.bicyclinglayer = function (t) {
            m();
            var e = S.get("bicyclinglayer");
            e || (e = new E.classes.BicyclingLayer, e.setMap(R), S.add(t, "bicyclinglayer", e)), p(t, e)
        }, x.groundoverlay = function (t) {
            t.opts.bounds = v(t.opts.bounds), t.opts.bounds && m(t.opts.bounds.getCenter());
            var e, i = new E.classes.GroundOverlay(t.opts.url, t.opts.bounds, t.opts.opts);
            i.setMap(R), e = S.add(t, "groundoverlay", i), p(t, i, e)
        }, x.streetviewpanorama = function (e) {
            e.opts.opts || (e.opts.opts = {}), e.latLng ? e.opts.opts.position = e.latLng : e.opts.opts.position && (e.opts.opts.position = g(e.opts.opts.position)), e.td.divId ? e.opts.container = document.getElementById(e.td.divId) : e.opts.container && (e.opts.container = t(e.opts.container).get(0));
            var i, n = new E.classes.StreetViewPanorama(e.opts.container, e.opts.opts);
            n && R.setStreetView(n), i = S.add(e, "streetviewpanorama", n), p(e, n, i)
        }, x.kmllayer = function (e) {
            var i = [], n = "values"in e.td;
            return n || (e.td.values = [
                {options: e.opts}
            ]), e.td.values.length ? (t.each(e.td.values, function (t, n) {
                var r, o, a, u = c(e, n);
                R || m(), a = u.options, u.options.opts && (a = u.options.opts, u.options.url && (a.url = u.options.url)), a.map = R, o = l("3.10") ? new E.classes.KmlLayer(a) : new E.classes.KmlLayer(a.url, a), i.push(o), r = S.add({td: u}, "kmllayer", o), h(s, {td: u}, o, r)
            }), void p(e, n ? i : i[0])) : void p(e, !1)
        }, x.panel = function (e) {
            m();
            var i, n, o = 0, a = 0, l = t(document.createElement("div"));
            l.css({position: "absolute", zIndex: 1e3, visibility: "hidden"}), e.opts.content && (n = t(e.opts.content), l.append(n), s.first().prepend(l), r(e.opts.left) ? r(e.opts.right) ? e.opts.center && (o = (s.width() - n.width()) / 2) : o = s.width() - n.width() - e.opts.right : o = e.opts.left, r(e.opts.top) ? r(e.opts.bottom) ? e.opts.middle && (a = (s.height() - n.height()) / 2) : a = s.height() - n.height() - e.opts.bottom : a = e.opts.top, l.css({top: a, left: o, visibility: "visible"})), i = S.add(e, "panel", l), p(e, l, i), l = null
        }, x.directionsrenderer = function (e) {
            e.opts.map = R;
            var i, n = new N.DirectionsRenderer(e.opts);
            e.td.divId ? n.setPanel(document.getElementById(e.td.divId)) : e.td.container && n.setPanel(t(e.td.container).get(0)), i = S.add(e, "directionsrenderer", n), p(e, n, i)
        }, x.getgeoloc = function (t) {
            p(t, t.latLng)
        }, x.styledmaptype = function (t) {
            m();
            var e = new E.classes.StyledMapType(t.td.styles, t.opts);
            R.mapTypes.set(t.td.id, e), p(t, e)
        }, x.imagemaptype = function (t) {
            m();
            var e = new E.classes.ImageMapType(t.opts);
            R.mapTypes.set(t.td.id, e), p(t, e)
        }, x.autofit = function (e) {
            var i = new N.LatLngBounds;
            t.each(S.all(), function (t, e) {
                e.getPosition ? i.extend(e.getPosition()) : e.getBounds ? (i.extend(e.getBounds().getNorthEast()), i.extend(e.getBounds().getSouthWest())) : e.getPaths ? e.getPaths().forEach(function (t) {
                    t.forEach(function (t) {
                        i.extend(t)
                    })
                }) : e.getPath ? e.getPath().forEach(function (t) {
                    i.extend(t)
                }) : e.getCenter ? i.extend(e.getCenter()) : "function" == typeof L && e instanceof L && (e = S.getById(e.id(), !0), e && e.autofit(i))
            }), i.isEmpty() || R.getBounds() && R.getBounds().equals(i) || ("maxZoom"in e.td && N.event.addListenerOnce(R, "bounds_changed", function () {
                this.getZoom() > e.td.maxZoom && this.setZoom(e.td.maxZoom)
            }), R.fitBounds(i)), p(e, !0)
        }, x.clear = function (e) {
            if (n(e.td)) {
                if (S.clearById(e.td) || S.objClearById(e.td))return void p(e, !0);
                e.td = {name: e.td}
            }
            e.td.id ? t.each(_(e.td.id), function (t, e) {
                S.clearById(e) || S.objClearById(e)
            }) : (S.clear(_(e.td.name), e.td.last, e.td.first, e.td.tag), S.objClear(_(e.td.name), e.td.last, e.td.first, e.td.tag)), p(e, !0)
        }, x.get = function (i, s, r) {
            var o, a, l = s ? i : i.td;
            return s || (r = l.full), n(l) ? (a = S.getById(l, !1, r) || S.objGetById(l), a === !1 && (o = l, l = {})) : o = l.name, "map" === o && (a = R), a || (a = [], l.id ? (t.each(_(l.id), function (t, e) {
                a.push(S.getById(e, !1, r) || S.objGetById(e))
            }), q(l.id) || (a = a[0])) : (t.each(o ? _(o) : [e], function (e, i) {
                var n;
                l.first ? (n = S.get(i, !1, l.tag, r), n && a.push(n)) : l.all ? t.each(S.all(i, l.tag, r), function (t, e) {
                    a.push(e)
                }) : (n = S.get(i, !0, l.tag, r), n && a.push(n))
            }), l.all || q(o) || (a = a[0]))), a = q(a) || !l.all ? a : [a], s ? a : void p(i, a)
        }, x.exec = function (e) {
            t.each(_(e.td.func), function (i, n) {
                t.each(x.get(e.td, !0, e.td.hasOwnProperty("full") ? e.td.full : !0), function (t, e) {
                    n.call(s, e)
                })
            }), p(e, !0)
        }, x.trigger = function (e) {
            if (n(e.td))N.event.trigger(R, e.td); else {
                var i = [R, e.td.eventName];
                e.td.var_args && t.each(e.td.var_args, function (t, e) {
                    i.push(e)
                }), N.event.trigger.apply(N.event, i)
            }
            d(e), w.ack()
        }
    }

    var E, N, j = 0, B = t.isFunction, q = t.isArray, H = {}, V = new S;
    t.fn.gmap3 = function () {
        var e, i = [], n = !0, s = [];
        for (o(), e = 0; e < arguments.length; e++)arguments[e] && i.push(arguments[e]);
        return i.length || i.push("map"), t.each(this, function () {
            var e = t(this), r = e.data("gmap3");
            n = !1, r || (r = new z(e), e.data("gmap3", r)), 1 !== i.length || "get" !== i[0] && !x(i[0]) ? r._plan(i) : s.push("get" === i[0] ? r.get("map", !0) : r.get(i[0].get, !0, i[0].get.full))
        }), s.length ? 1 === s.length ? s[0] : s : this
    }
}(jQuery), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    t.extend(t.fn, {validate: function (e) {
        if (!this.length)return void(e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
        var i = t.data(this[0], "validator");
        return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function (e) {
            i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
        }), this.submit(function (e) {
            function n() {
                var n;
                return i.settings.submitHandler ? (i.submitButton && (n = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && n.remove(), !1) : !0
            }

            return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
        })), i)
    }, valid: function () {
        var e, i;
        return t(this[0]).is("form") ? e = this.validate().form() : (e = !0, i = t(this[0].form).validate(), this.each(function () {
            e = i.element(this) && e
        })), e
    }, removeAttrs: function (e) {
        var i = {}, n = this;
        return t.each(e.split(/\s/), function (t, e) {
            i[e] = n.attr(e), n.removeAttr(e)
        }), i
    }, rules: function (e, i) {
        var n, s, r, o, a, l, h = this[0];
        if (e)switch (n = t.data(h.form, "validator").settings, s = n.rules, r = t.validator.staticRules(h), e) {
            case"add":
                t.extend(r, t.validator.normalizeRule(i)), delete r.messages, s[h.name] = r, i.messages && (n.messages[h.name] = t.extend(n.messages[h.name], i.messages));
                break;
            case"remove":
                return i ? (l = {}, t.each(i.split(/\s/), function (e, i) {
                    l[i] = r[i], delete r[i], "required" === i && t(h).removeAttr("aria-required")
                }), l) : (delete s[h.name], r)
        }
        return o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(h), t.validator.attributeRules(h), t.validator.dataRules(h), t.validator.staticRules(h)), h), o.required && (a = o.required, delete o.required, o = t.extend({required: a}, o), t(h).attr("aria-required", "true")), o.remote && (a = o.remote, delete o.remote, o = t.extend(o, {remote: a})), o
    }}), t.extend(t.expr[":"], {blank: function (e) {
        return!t.trim("" + t(e).val())
    }, filled: function (e) {
        return!!t.trim("" + t(e).val())
    }, unchecked: function (e) {
        return!t(e).prop("checked")
    }}), t.validator = function (e, i) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
    }, t.validator.format = function (e, i) {
        return 1 === arguments.length ? function () {
            var i = t.makeArray(arguments);
            return i.unshift(e), t.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function (t, i) {
            e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
                return i
            })
        }), e)
    }, t.extend(t.validator, {defaults: {messages: {}, groups: {}, rules: {}, errorClass: "error", validClass: "valid", errorElement: "label", focusInvalid: !0, errorContainer: t([]), errorLabelContainer: t([]), onsubmit: !0, ignore: ":hidden", ignoreTitle: !1, onfocusin: function (t) {
        this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
    }, onfocusout: function (t) {
        this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
    }, onkeyup: function (t, e) {
        (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
    }, onclick: function (t) {
        t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
    }, highlight: function (e, i, n) {
        "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(n) : t(e).addClass(i).removeClass(n)
    }, unhighlight: function (e, i, n) {
        "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(n) : t(e).removeClass(i).addClass(n)
    }}, setDefaults: function (e) {
        t.extend(t.validator.defaults, e)
    }, messages: {required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date ( ISO ).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: t.validator.format("Please enter no more than {0} characters."), minlength: t.validator.format("Please enter at least {0} characters."), rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."), range: t.validator.format("Please enter a value between {0} and {1}."), max: t.validator.format("Please enter a value less than or equal to {0}."), min: t.validator.format("Please enter a value greater than or equal to {0}.")}, autoCreateRanges: !1, prototype: {init: function () {
        function e(e) {
            var i = t.data(this[0].form, "validator"), n = "on" + e.type.replace(/^validate/, ""), s = i.settings;
            s[n] && !this.is(s.ignore) && s[n].call(i, this[0], e)
        }

        this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var i, n = this.groups = {};
        t.each(this.settings.groups, function (e, i) {
            "string" == typeof i && (i = i.split(/\s/)), t.each(i, function (t, i) {
                n[i] = e
            })
        }), i = this.settings.rules, t.each(i, function (e, n) {
            i[e] = t.validator.normalizeRule(n)
        }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", e).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
    }, form: function () {
        return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
    }, checkForm: function () {
        this.prepareForm();
        for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++)this.check(e[t]);
        return this.valid()
    }, element: function (e) {
        var i = this.clean(e), n = this.validationTargetFor(i), s = !0;
        return this.lastElement = n, void 0 === n ? delete this.invalid[i.name] : (this.prepareElement(n), this.currentElements = t(n), s = this.check(n) !== !1, s ? delete this.invalid[n.name] : this.invalid[n.name] = !0), t(e).attr("aria-invalid", !s), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), s
    }, showErrors: function (e) {
        if (e) {
            t.extend(this.errorMap, e), this.errorList = [];
            for (var i in e)this.errorList.push({message: e[i], element: this.findByName(i)[0]});
            this.successList = t.grep(this.successList, function (t) {
                return!(t.name in e)
            })
        }
        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
    }, resetForm: function () {
        t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
    }, numberOfInvalids: function () {
        return this.objectLength(this.invalid)
    }, objectLength: function (t) {
        var e, i = 0;
        for (e in t)i++;
        return i
    }, hideErrors: function () {
        this.hideThese(this.toHide)
    }, hideThese: function (t) {
        t.not(this.containers).text(""), this.addWrapper(t).hide()
    }, valid: function () {
        return 0 === this.size()
    }, size: function () {
        return this.errorList.length
    }, focusInvalid: function () {
        if (this.settings.focusInvalid)try {
            t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
        } catch (e) {
        }
    }, findLastActive: function () {
        var e = this.lastActive;
        return e && 1 === t.grep(this.errorList, function (t) {
            return t.element.name === e.name
        }).length && e
    }, elements: function () {
        var e = this, i = {};
        return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
            return!this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0)
        })
    }, clean: function (e) {
        return t(e)[0]
    }, errors: function () {
        var e = this.settings.errorClass.split(" ").join(".");
        return t(this.settings.errorElement + "." + e, this.errorContext)
    }, reset: function () {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
    }, prepareForm: function () {
        this.reset(), this.toHide = this.errors().add(this.containers)
    }, prepareElement: function (t) {
        this.reset(), this.toHide = this.errorsFor(t)
    }, elementValue: function (e) {
        var i, n = t(e), s = e.type;
        return"radio" === s || "checkbox" === s ? t("input[name='" + e.name + "']:checked").val() : "number" === s && "undefined" != typeof e.validity ? e.validity.badInput ? !1 : n.val() : (i = n.val(), "string" == typeof i ? i.replace(/\r/g, "") : i)
    }, check: function (e) {
        e = this.validationTargetFor(this.clean(e));
        var i, n, s, r = t(e).rules(), o = t.map(r, function (t, e) {
            return e
        }).length, a = !1, l = this.elementValue(e);
        for (n in r) {
            s = {method: n, parameters: r[n]};
            try {
                if (i = t.validator.methods[n].call(this, l, e, s.parameters), "dependency-mismatch" === i && 1 === o) {
                    a = !0;
                    continue
                }
                if (a = !1, "pending" === i)return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                if (!i)return this.formatAndAdd(e, s), !1
            } catch (h) {
                throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + s.method + "' method.", h), h
            }
        }
        if (!a)return this.objectLength(r) && this.successList.push(e), !0
    }, customDataMessage: function (e, i) {
        return t(e).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg")
    }, customMessage: function (t, e) {
        var i = this.settings.messages[t];
        return i && (i.constructor === String ? i : i[e])
    }, findDefined: function () {
        for (var t = 0; t < arguments.length; t++)if (void 0 !== arguments[t])return arguments[t];
        return void 0
    }, defaultMessage: function (e, i) {
        return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
    }, formatAndAdd: function (e, i) {
        var n = this.defaultMessage(e, i.method), s = /\$?\{(\d+)\}/g;
        "function" == typeof n ? n = n.call(this, i.parameters, e) : s.test(n) && (n = t.validator.format(n.replace(s, "{$1}"), i.parameters)), this.errorList.push({message: n, element: e, method: i.method}), this.errorMap[e.name] = n, this.submitted[e.name] = n
    }, addWrapper: function (t) {
        return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
    }, defaultShowErrors: function () {
        var t, e, i;
        for (t = 0; this.errorList[t]; t++)i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)for (t = 0; this.successList[t]; t++)this.showLabel(this.successList[t]);
        if (this.settings.unhighlight)for (t = 0, e = this.validElements(); e[t]; t++)this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
    }, validElements: function () {
        return this.currentElements.not(this.invalidElements())
    }, invalidElements: function () {
        return t(this.errorList).map(function () {
            return this.element
        })
    }, showLabel: function (e, i) {
        var n, s, r, o = this.errorsFor(e), a = this.idOrName(e), l = t(e).attr("aria-describedby");
        o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass), o.html(i)) : (o = t("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(i || ""), n = o, this.settings.wrapper && (n = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement(n, t(e)) : n.insertAfter(e), o.is("label") ? o.attr("for", a) : 0 === o.parents("label[for='" + a + "']").length && (r = o.attr("id"), l ? l.match(new RegExp("\b" + r + "\b")) || (l += " " + r) : l = r, t(e).attr("aria-describedby", l), s = this.groups[e.name], s && t.each(this.groups, function (e, i) {
            i === s && t("[name='" + e + "']", this.currentForm).attr("aria-describedby", o.attr("id"))
        }))), !i && this.settings.success && (o.text(""), "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, e)), this.toShow = this.toShow.add(o)
    }, errorsFor: function (e) {
        var i = this.idOrName(e), n = t(e).attr("aria-describedby"), s = "label[for='" + i + "'], label[for='" + i + "'] *";
        return n && (s = s + ", #" + n.replace(/\s+/g, ", #")), this.errors().filter(s)
    }, idOrName: function (t) {
        return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
    }, validationTargetFor: function (t) {
        return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
    }, checkable: function (t) {
        return/radio|checkbox/i.test(t.type)
    }, findByName: function (e) {
        return t(this.currentForm).find("[name='" + e + "']")
    }, getLength: function (e, i) {
        switch (i.nodeName.toLowerCase()) {
            case"select":
                return t("option:selected", i).length;
            case"input":
                if (this.checkable(i))return this.findByName(i.name).filter(":checked").length
        }
        return e.length
    }, depend: function (t, e) {
        return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
    }, dependTypes: {"boolean": function (t) {
        return t
    }, string: function (e, i) {
        return!!t(e, i.form).length
    }, "function": function (t, e) {
        return t(e)
    }}, optional: function (e) {
        var i = this.elementValue(e);
        return!t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
    }, startRequest: function (t) {
        this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
    }, stopRequest: function (e, i) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
    }, previousValue: function (e) {
        return t.data(e, "previousValue") || t.data(e, "previousValue", {old: null, valid: !0, message: this.defaultMessage(e, "remote")})
    }}, classRuleSettings: {required: {required: !0}, email: {email: !0}, url: {url: !0}, date: {date: !0}, dateISO: {dateISO: !0}, number: {number: !0}, digits: {digits: !0}, creditcard: {creditcard: !0}}, addClassRules: function (e, i) {
        e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
    }, classRules: function (e) {
        var i = {}, n = t(e).attr("class");
        return n && t.each(n.split(" "), function () {
            this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
        }), i
    }, attributeRules: function (e) {
        var i, n, s = {}, r = t(e), o = e.getAttribute("type");
        for (i in t.validator.methods)"required" === i ? (n = e.getAttribute(i),
            "" === n && (n = !0), n = !!n) : n = r.attr(i), /min|max/.test(i) && (null === o || /number|range|text/.test(o)) && (n = Number(n)), n || 0 === n ? s[i] = n : o === i && "range" !== o && (s[i] = !0);
        return s.maxlength && /-1|2147483647|524288/.test(s.maxlength) && delete s.maxlength, s
    }, dataRules: function (e) {
        var i, n, s = {}, r = t(e);
        for (i in t.validator.methods)n = r.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), void 0 !== n && (s[i] = n);
        return s
    }, staticRules: function (e) {
        var i = {}, n = t.data(e.form, "validator");
        return n.settings.rules && (i = t.validator.normalizeRule(n.settings.rules[e.name]) || {}), i
    }, normalizeRules: function (e, i) {
        return t.each(e, function (n, s) {
            if (s === !1)return void delete e[n];
            if (s.param || s.depends) {
                var r = !0;
                switch (typeof s.depends) {
                    case"string":
                        r = !!t(s.depends, i.form).length;
                        break;
                    case"function":
                        r = s.depends.call(i, i)
                }
                r ? e[n] = void 0 !== s.param ? s.param : !0 : delete e[n]
            }
        }), t.each(e, function (n, s) {
            e[n] = t.isFunction(s) ? s(i) : s
        }), t.each(["minlength", "maxlength"], function () {
            e[this] && (e[this] = Number(e[this]))
        }), t.each(["rangelength", "range"], function () {
            var i;
            e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
        }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
    }, normalizeRule: function (e) {
        if ("string" == typeof e) {
            var i = {};
            t.each(e.split(/\s/), function () {
                i[this] = !0
            }), e = i
        }
        return e
    }, addMethod: function (e, i, n) {
        t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== n ? n : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
    }, methods: {required: function (e, i, n) {
        if (!this.depend(n, i))return"dependency-mismatch";
        if ("select" === i.nodeName.toLowerCase()) {
            var s = t(i).val();
            return s && s.length > 0
        }
        return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
    }, email: function (t, e) {
        return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
    }, url: function (t, e) {
        return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
    }, date: function (t, e) {
        return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
    }, dateISO: function (t, e) {
        return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
    }, number: function (t, e) {
        return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
    }, digits: function (t, e) {
        return this.optional(e) || /^\d+$/.test(t)
    }, creditcard: function (t, e) {
        if (this.optional(e))return"dependency-mismatch";
        if (/[^0-9 \-]+/.test(t))return!1;
        var i, n, s = 0, r = 0, o = !1;
        if (t = t.replace(/\D/g, ""), t.length < 13 || t.length > 19)return!1;
        for (i = t.length - 1; i >= 0; i--)n = t.charAt(i), r = parseInt(n, 10), o && (r *= 2) > 9 && (r -= 9), s += r, o = !o;
        return s % 10 === 0
    }, minlength: function (e, i, n) {
        var s = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
        return this.optional(i) || s >= n
    }, maxlength: function (e, i, n) {
        var s = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
        return this.optional(i) || n >= s
    }, rangelength: function (e, i, n) {
        var s = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
        return this.optional(i) || s >= n[0] && s <= n[1]
    }, min: function (t, e, i) {
        return this.optional(e) || t >= i
    }, max: function (t, e, i) {
        return this.optional(e) || i >= t
    }, range: function (t, e, i) {
        return this.optional(e) || t >= i[0] && t <= i[1]
    }, equalTo: function (e, i, n) {
        var s = t(n);
        return this.settings.onfocusout && s.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
            t(i).valid()
        }), e === s.val()
    }, remote: function (e, i, n) {
        if (this.optional(i))return"dependency-mismatch";
        var s, r, o = this.previousValue(i);
        return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), o.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = o.message, n = "string" == typeof n && {url: n} || n, o.old === e ? o.valid : (o.old = e, s = this, this.startRequest(i), r = {}, r[i.name] = e, t.ajax(t.extend(!0, {url: n, mode: "abort", port: "validate" + i.name, dataType: "json", data: r, context: s.currentForm, success: function (n) {
            var r, a, l, h = n === !0 || "true" === n;
            s.settings.messages[i.name].remote = o.originalMessage, h ? (l = s.formSubmitted, s.prepareElement(i), s.formSubmitted = l, s.successList.push(i), delete s.invalid[i.name], s.showErrors()) : (r = {}, a = n || s.defaultMessage(i, "remote"), r[i.name] = o.message = t.isFunction(a) ? a(e) : a, s.invalid[i.name] = !0, s.showErrors(r)), o.valid = h, s.stopRequest(i, h)
        }}, n)), "pending")
    }}}), t.format = function () {
        throw"$.format has been deprecated. Please use $.validator.format instead."
    };
    var e, i = {};
    t.ajaxPrefilter ? t.ajaxPrefilter(function (t, e, n) {
        var s = t.port;
        "abort" === t.mode && (i[s] && i[s].abort(), i[s] = n)
    }) : (e = t.ajax, t.ajax = function (n) {
        var s = ("mode"in n ? n : t.ajaxSettings).mode, r = ("port"in n ? n : t.ajaxSettings).port;
        return"abort" === s ? (i[r] && i[r].abort(), i[r] = e.apply(this, arguments), i[r]) : e.apply(this, arguments)
    }), t.extend(t.fn, {validateDelegate: function (e, i, n) {
        return this.bind(i, function (i) {
            var s = t(i.target);
            return s.is(e) ? n.apply(s, arguments) : void 0
        })
    }})
}), !function (t) {
    if ("object" == typeof exports && "undefined" != typeof module)module.exports = t(); else if ("function" == typeof define && define.amd)define([], t); else {
        var e;
        "undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self), e.Vec2D = t()
    }
}(function () {
    return function t(e, i, n) {
        function s(o, a) {
            if (!i[o]) {
                if (!e[o]) {
                    var l = "function" == typeof require && require;
                    if (!a && l)return l(o, !0);
                    if (r)return r(o, !0);
                    var h = new Error("Cannot find module '" + o + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }
                var u = i[o] = {exports: {}};
                e[o][0].call(u.exports, function (t) {
                    var i = e[o][1][t];
                    return s(i ? i : t)
                }, u, u.exports, t, e, i, n)
            }
            return i[o].exports
        }

        for (var r = "function" == typeof require && require, o = 0; o < n.length; o++)s(n[o]);
        return s
    }({1: [function (t, e, i) {
        e.exports = "function" == typeof Object.create ? function (t, e) {
            t.super_ = e, t.prototype = Object.create(e.prototype, {constructor: {value: t, enumerable: !1, writable: !0, configurable: !0}})
        } : function (t, e) {
            t.super_ = e;
            var i = function () {
            };
            i.prototype = e.prototype, t.prototype = new i, t.prototype.constructor = t
        }
    }, {}], 2: [function (t, e, i) {
        function n() {
        }

        var s = e.exports = {};
        s.nextTick = function () {
            var t = "undefined" != typeof window && window.setImmediate, e = "undefined" != typeof window && window.postMessage && window.addEventListener;
            if (t)return function (t) {
                return window.setImmediate(t)
            };
            if (e) {
                var i = [];
                return window.addEventListener("message", function (t) {
                    var e = t.source;
                    if ((e === window || null === e) && "process-tick" === t.data && (t.stopPropagation(), i.length > 0)) {
                        var n = i.shift();
                        n()
                    }
                }, !0), function (t) {
                    i.push(t), window.postMessage("process-tick", "*")
                }
            }
            return function (t) {
                setTimeout(t, 0)
            }
        }(), s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.on = n, s.addListener = n, s.once = n, s.off = n, s.removeListener = n, s.removeAllListeners = n, s.emit = n, s.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, s.cwd = function () {
            return"/"
        }, s.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }
    }, {}], 3: [function (t, e, i) {
        e.exports = function (t) {
            return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8
        }
    }, {}], 4: [function (t, e, i) {
        (function (e, n) {
            function s(t, e) {
                var n = {seen: [], stylize: o};
                return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), _(e) ? n.showHidden = e : e && i._extend(n, e), w(n.showHidden) && (n.showHidden = !1), w(n.depth) && (n.depth = 2), w(n.colors) && (n.colors = !1), w(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = r), l(n, t, n.depth)
            }

            function r(t, e) {
                var i = s.styles[e];
                return i ? "[" + s.colors[i][0] + "m" + t + "[" + s.colors[i][1] + "m" : t
            }

            function o(t, e) {
                return t
            }

            function a(t) {
                var e = {};
                return t.forEach(function (t, i) {
                    e[t] = !0
                }), e
            }

            function l(t, e, n) {
                if (t.customInspect && e && k(e.inspect) && e.inspect !== i.inspect && (!e.constructor || e.constructor.prototype !== e)) {
                    var s = e.inspect(n, t);
                    return y(s) || (s = l(t, s, n)), s
                }
                var r = h(t, e);
                if (r)return r;
                var o = Object.keys(e), _ = a(o);
                if (t.showHidden && (o = Object.getOwnPropertyNames(e)), P(e) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0))return u(e);
                if (0 === o.length) {
                    if (k(e)) {
                        var m = e.name ? ": " + e.name : "";
                        return t.stylize("[Function" + m + "]", "special")
                    }
                    if (x(e))return t.stylize(RegExp.prototype.toString.call(e), "regexp");
                    if (S(e))return t.stylize(Date.prototype.toString.call(e), "date");
                    if (P(e))return u(e)
                }
                var g = "", v = !1, b = ["{", "}"];
                if (p(e) && (v = !0, b = ["[", "]"]), k(e)) {
                    var w = e.name ? ": " + e.name : "";
                    g = " [Function" + w + "]"
                }
                if (x(e) && (g = " " + RegExp.prototype.toString.call(e)), S(e) && (g = " " + Date.prototype.toUTCString.call(e)), P(e) && (g = " " + u(e)), 0 === o.length && (!v || 0 == e.length))return b[0] + g + b[1];
                if (0 > n)return x(e) ? t.stylize(RegExp.prototype.toString.call(e), "regexp") : t.stylize("[Object]", "special");
                t.seen.push(e);
                var T;
                return T = v ? d(t, e, n, _, o) : o.map(function (i) {
                    return c(t, e, n, _, i, v)
                }), t.seen.pop(), f(T, g, b)
            }

            function h(t, e) {
                if (w(e))return t.stylize("undefined", "undefined");
                if (y(e)) {
                    var i = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return t.stylize(i, "string")
                }
                return v(e) ? t.stylize("" + e, "number") : _(e) ? t.stylize("" + e, "boolean") : m(e) ? t.stylize("null", "null") : void 0
            }

            function u(t) {
                return"[" + Error.prototype.toString.call(t) + "]"
            }

            function d(t, e, i, n, s) {
                for (var r = [], o = 0, a = e.length; a > o; ++o)r.push(F(e, String(o)) ? c(t, e, i, n, String(o), !0) : "");
                return s.forEach(function (s) {
                    s.match(/^\d+$/) || r.push(c(t, e, i, n, s, !0))
                }), r
            }

            function c(t, e, i, n, s, r) {
                var o, a, h;
                if (h = Object.getOwnPropertyDescriptor(e, s) || {value: e[s]}, h.get ? a = h.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : h.set && (a = t.stylize("[Setter]", "special")), F(n, s) || (o = "[" + s + "]"), a || (t.seen.indexOf(h.value) < 0 ? (a = m(i) ? l(t, h.value, null) : l(t, h.value, i - 1), a.indexOf("\n") > -1 && (a = r ? a.split("\n").map(function (t) {
                    return"  " + t
                }).join("\n").substr(2) : "\n" + a.split("\n").map(function (t) {
                    return"   " + t
                }).join("\n"))) : a = t.stylize("[Circular]", "special")), w(o)) {
                    if (r && s.match(/^\d+$/))return a;
                    o = JSON.stringify("" + s), o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.substr(1, o.length - 2), o = t.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), o = t.stylize(o, "string"))
                }
                return o + ": " + a
            }

            function f(t, e, i) {
                var n = 0, s = t.reduce(function (t, e) {
                    return n++, e.indexOf("\n") >= 0 && n++, t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0);
                return s > 60 ? i[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + i[1] : i[0] + e + " " + t.join(", ") + " " + i[1]
            }

            function p(t) {
                return Array.isArray(t)
            }

            function _(t) {
                return"boolean" == typeof t
            }

            function m(t) {
                return null === t
            }

            function g(t) {
                return null == t
            }

            function v(t) {
                return"number" == typeof t
            }

            function y(t) {
                return"string" == typeof t
            }

            function b(t) {
                return"symbol" == typeof t
            }

            function w(t) {
                return void 0 === t
            }

            function x(t) {
                return T(t) && "[object RegExp]" === A(t)
            }

            function T(t) {
                return"object" == typeof t && null !== t
            }

            function S(t) {
                return T(t) && "[object Date]" === A(t)
            }

            function P(t) {
                return T(t) && ("[object Error]" === A(t) || t instanceof Error)
            }

            function k(t) {
                return"function" == typeof t
            }

            function C(t) {
                return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || "undefined" == typeof t
            }

            function A(t) {
                return Object.prototype.toString.call(t)
            }

            function O(t) {
                return 10 > t ? "0" + t.toString(10) : t.toString(10)
            }

            function I() {
                var t = new Date, e = [O(t.getHours()), O(t.getMinutes()), O(t.getSeconds())].join(":");
                return[t.getDate(), D[t.getMonth()], e].join(" ")
            }

            function F(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            var R = /%[sdj%]/g;
            i.format = function (t) {
                if (!y(t)) {
                    for (var e = [], i = 0; i < arguments.length; i++)e.push(s(arguments[i]));
                    return e.join(" ")
                }
                for (var i = 1, n = arguments, r = n.length, o = String(t).replace(R, function (t) {
                    if ("%%" === t)return"%";
                    if (i >= r)return t;
                    switch (t) {
                        case"%s":
                            return String(n[i++]);
                        case"%d":
                            return Number(n[i++]);
                        case"%j":
                            try {
                                return JSON.stringify(n[i++])
                            } catch (e) {
                                return"[Circular]"
                            }
                        default:
                            return t
                    }
                }), a = n[i]; r > i; a = n[++i])o += m(a) || !T(a) ? " " + a : " " + s(a);
                return o
            }, i.deprecate = function (t, s) {
                function r() {
                    if (!o) {
                        if (e.throwDeprecation)throw new Error(s);
                        e.traceDeprecation ? console.trace(s) : console.error(s), o = !0
                    }
                    return t.apply(this, arguments)
                }

                if (w(n.process))return function () {
                    return i.deprecate(t, s).apply(this, arguments)
                };
                if (e.noDeprecation === !0)return t;
                var o = !1;
                return r
            };
            var M, L = {};
            i.debuglog = function (t) {
                if (w(M) && (M = e.env.NODE_DEBUG || ""), t = t.toUpperCase(), !L[t])if (new RegExp("\\b" + t + "\\b", "i").test(M)) {
                    var n = e.pid;
                    L[t] = function () {
                        var e = i.format.apply(i, arguments);
                        console.error("%s %d: %s", t, n, e)
                    }
                } else L[t] = function () {
                };
                return L[t]
            }, i.inspect = s, s.colors = {bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39]}, s.styles = {special: "cyan", number: "yellow", "boolean": "yellow", undefined: "grey", "null": "bold", string: "green", date: "magenta", regexp: "red"}, i.isArray = p, i.isBoolean = _, i.isNull = m, i.isNullOrUndefined = g, i.isNumber = v, i.isString = y, i.isSymbol = b, i.isUndefined = w, i.isRegExp = x, i.isObject = T, i.isDate = S, i.isError = P, i.isFunction = k, i.isPrimitive = C, i.isBuffer = t("./support/isBuffer");
            var D = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            i.log = function () {
                console.log("%s - %s", I(), i.format.apply(i, arguments))
            }, i.inherits = t("inherits"), i._extend = function (t, e) {
                if (!e || !T(e))return t;
                for (var i = Object.keys(e), n = i.length; n--;)t[i[n]] = e[i[n]];
                return t
            }
        }).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"./support/isBuffer": 3, _process: 2, inherits: 1}], 5: [function (t, e, i) {
        "use strict";
        function n(t, e) {
            return this instanceof n == !1 ? new n(t, e) : (this._axes = new Float32Array(2), this._axes[0] = t, void(this._axes[1] = e))
        }

        var s = t("util"), r = t("./Vector.js");
        s.inherits(n, r), n.prototype.ctor = n, e.exports = n
    }, {"./Vector.js": 8, util: 4}], 6: [function (t, e, i) {
        "use strict";
        function n(t, e) {
            return this instanceof n == !1 ? new n(t, e) : (this._x = t, void(this._y = e))
        }

        var s = t("util"), r = t("./Vector.js");
        s.inherits(n, r), Object.defineProperty(n.prototype, "x", {get: function () {
            return this._x
        }, set: function (t) {
            this._x = t
        }}), Object.defineProperty(n.prototype, "y", {get: function () {
            return this._y
        }, set: function (t) {
            this._y = t
        }}), n.prototype.ctor = n, e.exports = n
    }, {"./Vector.js": 8, util: 4}], 7: [function (t, e, i) {
        "use strict";
        var n = t("./Vector.js"), s = t("./Float32Vector.js"), r = t("./ObjectVector.js");
        e.exports = {ArrayVector: n, ObjectVector: r, Float32Vector: s}
    }, {"./Float32Vector.js": 5, "./ObjectVector.js": 6, "./Vector.js": 8}], 8: [function (t, e, i) {
        "use strict";
        function n(t, e) {
            return this instanceof n == !1 ? new n(t, e) : void(this._axes = [t, e])
        }

        e.exports = n;
        var s = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10];
        n.prototype = {ctor: n, setAxes: function (t, e) {
            return this.x = t, this.y = e, this
        }, getX: function () {
            return this.x
        }, setX: function (t) {
            return this.x = t, this
        }, getY: function () {
            return this.y
        }, setY: function (t) {
            return this.y = t, this
        }, toString: function (t) {
            return t ? "(" + Math.round(this.x) + ", " + Math.round(this.y) + ")" : "(" + this.x + ", " + this.y + ")"
        }, toArray: function () {
            return new Array(this.x, this.y)
        }, toObject: function () {
            return{x: this.x, y: this.y}
        }, add: function (t) {
            return this.x += t.x, this.y += t.y, this
        }, subtract: function (t) {
            return this.x -= t.x, this.y -= t.y, this
        }, equals: function (t) {
            return t.x == this.x && t.y == this.y
        }, multiplyByVector: function (t) {
            return this.x *= t.x, this.y *= t.y, this
        }, mulV: function (t) {
            return this.multiplyByVector(t)
        }, divideByVector: function (t) {
            return this.x /= t.x, this.y /= t.y, this
        }, divV: function (t) {
            return this.divideByVector(t)
        }, multiplyByScalar: function (t) {
            return this.x *= t, this.y *= t, this
        }, mulS: function (t) {
            return this.multiplyByScalar(t)
        }, divideByScalar: function (t) {
            return this.x /= t, this.y /= t, this
        }, divS: function (t) {
            return this.divideByScalar(t)
        }, normalise: function () {
            return this.divideByScalar(this.magnitude())
        }, normalize: function () {
            return this.normalise()
        }, unit: function () {
            return this.normalise()
        }, magnitude: function () {
            var t = this.x, e = this.y;
            return Math.sqrt(t * t + e * e)
        }, length: function () {
            return this.magnitude()
        }, lengthSq: function () {
            var t = this.x, e = this.y;
            return t * t + e * e
        }, dot: function (t) {
            return t.x * this.x + t.y * this.y
        }, cross: function (t) {
            return this.x * t.y - this.y * t.x
        }, reverse: function () {
            return this.x = -this.x, this.y = -this.y, this
        }, abs: function () {
            return this.x = Math.abs(this.x), this.y = Math.abs(this.y), this
        }, zero: function () {
            return this.x = this.y = 0, this
        }, distance: function (t) {
            var e = this.x - t.x, i = this.y - t.y;
            return Math.sqrt(e * e + i * i)
        }, rotate: function (t) {
            var e = Math.cos(t), i = Math.sin(t), n = this.x, s = this.y;
            return this.x = n * e - s * i, this.y = n * i + s * e, this
        }, round: function (t) {
            t = t || 2;
            var e = s[t];
            return this.x = (.5 + this.x * e << 0) / e, this.y = (.5 + this.y * e << 0) / e, this
        }, clone: function () {
            return new this.ctor(this.x, this.y)
        }}, Object.defineProperty(n.prototype, "x", {get: function () {
            return this._axes[0]
        }, set: function (t) {
            this._axes[0] = t
        }}), Object.defineProperty(n.prototype, "y", {get: function () {
            return this._axes[1]
        }, set: function (t) {
            this._axes[1] = t
        }})
    }, {}]}, {}, [7])(7)
});