var track = function () {
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
}(), cardFunction = function () {
    var e = $(".card-trigger"), t = $(".close-card"), o = $(".card-section"), n = $(".card-bg"), a = ($("body"), function (e) {
        e.preventDefault(), TweenMax.to(n, .33, {display: "block", opacity: .8}), TweenMax.to(o, .33, {
            delay: .33,
            scale: 1,
            left: "50%",
            right: "50%",
            x: "-50%",
            y: "-50%"
        })
    }), r = function (e) {
        e.preventDefault(), TweenMax.to(o, .33, {scale: 0}), TweenMax.to(n, .33, {
            delay: .33,
            display: "none",
            opacity: 0
        })
    };
    e.on("click", a), t.on("click", r)
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
            email: "Su direcciÃ³n de correo electrÃ³nico debe estar en el formato nombre@dominio.com"
        }, pass: {required: "Campo obligatorio", minlength: "Su contraseÃ±a debe contener minimo 6 caractÃ©res"}
    }
}), $("#popup-form").validate({
    rules: {email: {required: !0, email: !0}, pass: {required: !0, minlength: 6}},
    messages: {
        email: {
            required: "Campo obligatorio",
            email: "Su direcciÃ³n de correo electrÃ³nico debe estar en el formato nombre@dominio.com"
        }, pass: {required: "Campo obligatorio", minlength: "Su contraseÃ±a debe contener minimo 6 caractÃ©res"}
    }
}), $("#register-form").validate({
    rules: {
        name: "required",
        lastname: "required",
        email: {required: !0, email: !0},
        pass: {required: !0, minlength: 8},
        confPass: {required: !0, minlength: 8, equalTo: "#pass"}
    },
    messages: {
        name: "Campo obligatorio",
        lastname: "Campo obligatorio",
        email: {
            required: "Campo obligatorio",
            email: "Su direcciÃ³n de correo electrÃ³nico debe estar en el formato nombre@dominio.com"
        },
        pass: {required: "Campo obligatorio", minlength: "Su contraseÃ±a debe contener minimo 8 caractÃ©res"},
        confPass: {
            required: "Campo obligatorio, confirme la contraseÃ±a que escribiÃ³ en el campo anterior",
            minlength: "Su contraseÃ±a debe contener minimo 8 caractÃ©res",
            equalTo: "Las contraseÃ±as no coinciden"
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
            required: "Necesitamos su direcciÃ³n de correo electrÃ³nico para contactar con usted",
            email: "Su direcciÃ³n de correo electrÃ³nico debe estar en el formato nombre@dominio.com"
        },
        phone: {
            required: "Necesitamos su telÃ©fono para contactar con usted",
            number: "Su numero telÃ©fonico debe contener 10 numeros sin espacios"
        },
        subject: "Campo obligatorio",
        comments: "Campo obligatorio"
    }
}), $("#promo-code").validate({
    rules: {code: "required"},
    messages: {code: "Introduzca un cÃ³digo vÃ¡lido"}
}), track.init({el: ".track-link"});