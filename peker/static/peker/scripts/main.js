var Zoom = function (e, t, o) {
    function n(e) {
        r = t.extend({}, a, e || {}), v()
    }

    var a = {el: ".zoom"}, r = {}, i = {}, c = {}, l = {}, s = !1, u = null, d = null, m = null, h = Vec2D.ObjectVector(0, 0), g = Vec2D.ObjectVector(0, 0), p = Vec2D.ObjectVector(0, 0), f = Vec2D.ObjectVector(0, 0);
    n.prototype.scale = function (e) {
        var t = x(e.value * l.width, l.width, l.width * e.to), o = t * l.height / l.width;
        d.css({width: t, heigth: o, top: x(p.y, m.outerHeight() - o, 0), left: x(p.x, m.outerWidth() - t, 0)})
    };
    var v = function () {
        ("ontouchstart"in e || e.DocumentTouch && document instanceof DocumentTouch) && (s = !0), i = s ? {
            start: "touchstart",
            end: "touchend",
            move: "touchmove"
        } : {
            start: "mousedown",
            end: "mouseup",
            move: "mousemove"
        }, u = t(t(r.el).length ? r.el : a.el), d = u.find(".zoom-image"), m = u.find(".zoom-mask"), l = d[0].getBoundingClientRect(), p.setAxes(l.left, l.top), b()
    }, b = function () {
        d.on(i.start, function (e) {
            this.allowUp = this.scrollTop > 0, this.allowDown = this.scrollTop < this.scrollHeight - this.clientHeight, this.prevTop = null, this.prevBot = null, this.lastY = event.pageY, h.setAxes($(e).x, $(e).y), t(document).on(i.end, w), t(document).on(i.move, y), d.on("dragstart", function (e) {
                e.preventDefault()
            })
        })
    }, w = function (e) {
        t("html").removeClass("disable-selection"), t(document).off(i.move, y), t(document).off(i.end, w)
    }, y = function (e) {
        var o = event.pageY > this.lastY, n = !o;
        this.lastY = event.pageY, o && this.allowUp || n && this.allowDown ? event.stopPropagation() : event.preventDefault();
        var a = $(e);
        c = {
            top: m.outerHeight() - d.height(),
            left: m.outerWidth() - d.width(),
            right: 0,
            bottom: 0
        }, t("html").addClass("disable-selection"), g.setAxes(a.x, a.y);
        var r = g.x - h.x, i = g.y - h.y, l = x(p.x + r, c.left, c.right), s = x(p.y + i, c.top, c.bottom);
        f.setAxes(l, s), d.css({left: f.x, top: f.y}), h.setAxes(g.x, g.y), p.setAxes(f.x, f.y)
    }, $ = function (e) {
        var t = 0, o = 0;
        return e.originalEvent.targetTouches ? (t = e.originalEvent.targetTouches[0].pageX, o = e.originalEvent.targetTouches[0].pageY) : e.pageX || e.pageY ? (t = e.pageX, o = e.pageY) : (e.clientX || e.clientY) && (t = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, o = e.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
            x: t,
            y: o
        }
    }, x = function (e, t, o) {
        return Math.min(Math.max(e, t), o)
    };
    return n
}(window, jQuery), Range = function (e, t, o) {
    function n(e) {
        l = t.extend({}, c, e || {}), g()
    }

    var a, r, i, c = {
        from: 1, to: 10, step: 1, el: ".range", onStateChange: function (e) {
        }
    }, l = {}, s = null, u = !1, d = {}, m = 0, h = {}, g = function () {
        ("ontouchstart"in e || e.DocumentTouch && document instanceof DocumentTouch) && (u = !0), d = u ? {
            start: "touchstart",
            end: "touchend",
            move: "touchmove"
        } : {
            start: "mousedown",
            end: "mouseup",
            move: "mousemove"
        }, a = t(t(l.el).length ? l.el : c.el), r = a[0], i = a.find(".range-thumb"), s = a.find(".range-track"), h = {
            left: s.position().left,
            right: s.width() - i.width()
        }, p()
    }, p = function () {
        i.on(d.start, function (e) {
            e.preventDefault(), m = b(e).x - i.position().left, t(document).on(d.end, f), t(document).on(d.move, v)
        })
    }, f = function (e) {
        t(document).off(d.move, v), t(document).off(d.end, f)
    }, v = function (e) {
        var t = b(e), o = (l.to - l.from) / (h.right - h.left), n = t.x - m, a = (n - h.left) * o + l.from, r = w(n, h.left, h.right);
        i.css({left: r}), a = w(a, l.from, l.to), l.onStateChange({value: a, from: l.from, to: l.to})
    }, b = function (e) {
        var t = 0, o = 0;
        return e.originalEvent.targetTouches ? (t = e.originalEvent.targetTouches[0].pageX, o = e.originalEvent.targetTouches[0].pageY) : e.pageX || e.pageY ? (t = e.pageX, o = e.pageY) : (e.clientX || e.clientY) && (t = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, o = e.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
            x: t,
            y: o
        }
    }, w = function (e, t, o) {
        return Math.min(Math.max(e, t), o)
    };
    return n
}(window, jQuery), track = function () {
    var e = {}, t = function (t) {
        e = t, o()
    }, o = function () {
        var t = document.querySelectorAll(e.el);
        [].forEach.call(t, function (e) {
            a(e, "click", n)
        })
    }, n = function (e) {
        e.preventDefault();
        var t = r(e), o = t.dataset.track;
        return ga("send", "event", o, "click", o), !1
    }, a = function (e, t, o) {
        return e.addEventListener ? e.addEventListener(t, o) : e.attachEvent ? e.attachEvent("on" + t, o) : void 0
    }, r = function (e) {
        var t = null;
        try {
            if (t = "undefined" != typeof e.target ? e.target : e.srcElement, null !== t && t.nodeType && t.parentNode)for (; 3 === t.nodeType && null !== t.parentNode;)t = t.parentNode
        } catch (o) {
            console.log("getEventTarget failed: " + o)
        }
        return t
    };
    return {init: t}
}(), zoomGallery = function () {
    $(".zoom-trigger").fancybox({padding: 0, closeClick: !1});
    var e = $(".zoom-image"), t = $(".zoom-trigger"), o = function () {
        $(document).ready(function () {
            new Zoom
        })
    }, n = function () {
        var t = $(this), n = t.attr("data-image");
        e.attr("src", n), o()
    };
    t.on("click", n)
}();
jQuery(document).ready(function (e) {
    e("#main-slider").royalSlider({
        keyboardNavEnabled: !0,
        controlNavigation: "none",
        arrowsNav: !0,
        transitionType: "fade",
        autoScaleSlider: !1,
        imgWidth: 1500,
        imgHeight: 800,
        imageScaleMode: "fill",
        autoHeight: !1,
        loop: !0,
        autoPlay: {enabled: !0, pauseOnHover: !0, delay: 5e3}
    }), e("#product-gallery").royalSlider({
        controlNavigation: "thumbnails",
        loop: !0,
        imageScaleMode: "fill",
        autoHeight: !1,
        navigateByClick: !0,
        numImagesToPreload: 2,
        arrowsNav: !0,
        arrowsNavAutoHide: !0,
        arrowsNavHideOnTouch: !0,
        keyboardNavEnabled: !0,
        fadeinLoadedSlide: !0,
        globalCaption: !1,
        globalCaptionInside: !1,
        thumbs: {appendSpan: !0, firstMargin: !0, spacing: 8}
    })
});
var topPhoneFunction = function () {
    function e() {
        var e = o.attr("class");
        void 0 === e ? (o.css("transform", "translate(0,0)"), o.attr("class", "show")) : (o.css("transform", "translate(-100%,0)"), o.removeAttr("class", "show"))
    }

    var t = $("#top-phone"), o = $("#top-number");
    t.on("click", e)
}();
$("#menuzord").menuzord();
var searchHeadFunction = function () {
    var e = $(".search-btn"), t = $(".search-input"), o = function () {
        -1 !== t.attr("class").indexOf("show-input") ? (TweenMax.to(t, .33, {
            paddingLeft: 0,
            paddingRight: 0,
            width: 0
        }), t.removeClass("show-input")) : (TweenMax.to(t, .33, {
            paddingLeft: 15,
            paddingRight: 15,
            width: 200
        }), t.addClass("show-input"))
    }, n = function () {
        e.attr("type", "button"), "" !== $(this).val() ? e.attr("type", "submit") : e.attr("type", "button")
    };
    e.on("click", o), t.on("keyup", n)
}(), hoverScaleFunction = function () {
    var e = $(".box__item"), t = function () {
        var e = $(this).attr("data-hover"), t = $('.box__item[data-hover="' + e + '"] img');
        t.toggleClass("scaleImg")
    };
    e.hover(t)
}(), formCount = function () {
    var e = $(".add"), t = $(".sub"), o = ($(".count-input"), null), n = null, a = null, r = function (e) {
        o = $(e.target), n = o.siblings(".count-input"), a = parseInt(n.attr("value")), a += 1, n.attr("value", a), e.preventDefault()
    }, i = function (e) {
        o = $(e.target), n = o.siblings(".count-input"), a = parseInt(n.attr("value")), a > 1 && (a -= 1, n.attr("value", a)), e.preventDefault()
    };
    e.on("click", function (e) {
        r(e)
    }), t.on("click", function (e) {
        i(e)
    })
}();
$("document").ready(function () {
    !function () {
        function e() {
            -1 !== t.attr("class").indexOf("isNotShow") ? (t.css("height", a), t.removeClass("isNotShow"), t.addClass("isShow")) : (t.css("height", "0"), t.removeClass("isShow"), t.addClass("isNotShow"))
        }

        var t = $("#cart-header"), o = $(".cart-header-wrapper"), n = $("#cart-header-btn"), a = parseInt(o.css("height")) + parseInt($(".preview__btns").css("height"));
        n.on("click", function () {
            e()
        }), $(window).resize(function () {
            a = parseInt(o.css("height")) + parseInt($(".preview__btns").css("height")), -1 !== t.attr("class").indexOf("isShow") && t.css("height", a)
        })
    }()
});
var footerPhoneShow = function () {
    var e = $(".footer__phone .phone-ctrl--green"), t = $(".contact__phone .phone-ctrl--green"), o = $(".footer__phone .phone-number--green"), n = $(".contact__phone .phone-number--green"), a = function (e, t) {
        e.preventDefault(), t.toggleClass("showNumber"), setTimeout(function () {
            t.toggleClass("numberOpacity")
        }, 100)
    };
    e.on("click", function (e) {
        a(e, o)
    }), t.on("click", function (e) {
        a(e, n)
    })
}();
$(".login-link").fancybox({padding: 0});
var checkUncheckRadio = function () {
    var e = $(".form__radio"), t = !1, o = function () {
        t ? (e.prop("checked", !1), t = !1) : (e.prop("checked", !0), t = !0)
    };
    e.on("click", o)
}();
$("#map").gmap3({
    map: {options: {center: [23.1720141, -102.8740764], zoom: 14}},
    marker: {values: [{latLng: [23.1720141, -102.8740764]}]}
}), $("#login-form").validate({
    rules: {email: {required: !0, email: !0}, pass: {required: !0, minlength: 6}},
    messages: {
        email: {
            required: "Campo obligatorio",
            email: "Su dirección de correo electrónico debe estar en el formato nombre@dominio.com"
        }, pass: {required: "Campo obligatorio", minlength: "Su contraseña debe contener minimo 6 caractéres"}
    }
}), $("#popup-form").validate({
    rules: {email: {required: !0, email: !0}, pass: {required: !0, minlength: 6}},
    messages: {
        email: {
            required: "Campo obligatorio",
            email: "Su dirección de correo electrónico debe estar en el formato nombre@dominio.com"
        }, pass: {required: "Campo obligatorio", minlength: "Su contraseña debe contener minimo 6 caractéres"}
    }
}), $("#register-form").validate({
    rules: {
        name: "required",
        lastname: "required",
        email: {required: !0, email: !0},
        pass: {required: !0, minlength: 8},
        confPass: {required: !0, minlength: 8, equalTo: "#password"}
    },
    messages: {
        name: "Campo obligatorio",
        lastname: "Campo obligatorio",
        email: {
            required: "Campo obligatorio",
            email: "Su dirección de correo electrónico debe estar en el formato nombre@dominio.com"
        },
        pass: {required: "Campo obligatorio", minlength: "Su contraseña debe contener minimo 8 caractéres"},
        confPass: {
            required: "Campo obligatorio, confirme la contraseña que escribió en el campo anterior",
            minlength: "Su contraseña debe contener minimo 8 caractéres",
            equalTo: "Las contraseñas no coinciden"
        }
    }
}), $("#contact-form").validate({
    rules: {
        name: "required",
        email: {required: !0, email: !0},
        phone: {required: !0, maxlength: 10, number: !0},
        subject: "required",
        comments: "required"
    },
    messages: {
        name: "Campo obligatorio",
        email: {
            required: "Necesitamos su dirección de correo electrónico para contactar con usted",
            email: "Su dirección de correo electrónico debe estar en el formato nombre@dominio.com"
        },
        phone: {
            required: "Necesitamos su teléfono para contactar con usted",
            number: "Su numero teléfonico debe contener 10 numeros sin espacios"
        },
        subject: "Campo obligatorio",
        comments: "Campo obligatorio"
    }
}), $("#promo-code").validate({
    rules: {code: "required"},
    messages: {code: "Introduzca un código válido"}
}), track.init({el: ".track-link"});