! function(s) {
    "use strict";
    var e = {
        init: () => { e.stickyHeader(), e.dropdownAnimation(), e.headerButtons(), e.isotope(), e.onepageHeaderOffset(), e.onepageNavLinks(), e.anchorSmoothScroll(), e.svgInject(), e.backgroundImage(), e.backgroundImageMobile(), e.imageHoverOverlay(), e.rellax(), e.scrollCue(), e.showMoreItems(), e.owlCarousel(), e.heroSlider(), e.animatedCaptions(), e.lightbox(), e.plyr(), e.progressBar(), e.pageProgress(), e.counterUp(), e.bsTooltips(), e.bsPopovers(), e.bsModal(), e.iTooltip(), e.contactForm(), e.pricingSwitcher(), e.textRotator(), e.codeSnippet() },
        stickyHeader: () => { s(".navbar").length && new Headhesive(".navbar", { offset: 350, offsetSide: "top", classes: { clone: "banner--clone fixed ", stick: "banner--stick", unstick: "banner--unstick" }, onStick: function() { s(s.SmartMenus.Bootstrap.init), s(".navbar:not(.fixed) .language-select .dropdown-menu").removeClass("show") }, onUnstick: function() { s(".navbar.fixed .language-select .dropdown-menu").removeClass("show") } }) },
        dropdownAnimation: () => { s(".navbar .navbar-nav:not(.navbar-nav-other)").bind({ "show.smapi": function(t, e) { s(e).removeClass("hide-animation").addClass("show-animation") }, "hide.smapi": function(t, e) { s(e).removeClass("show-animation").addClass("hide-animation") } }).on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", "ul", function(t) { s(this).removeClass("show-animation hide-animation"), t.stopPropagation() }) },
        headerButtons: () => {
            var e = s(".hamburger.animate"),
                a = (s(".language-select .dropdown-menu"), s(".offcanvas-nav")),
                t = s('[data-toggle="offcanvas-nav"]'),
                o = s(".offcanvas-nav-close"),
                n = s(".offcanvas-info"),
                i = s(".offcanvas-info-close"),
                r = s('[data-toggle="offcanvas-info"]');
            e.on("click", function() { e.toggleClass("active") }), t.on("click", function(t) { t.stopPropagation(), a.toggleClass("open") }), a.on("click", function(t) { t.stopPropagation() }), o.on("click", function(t) { a.removeClass("open"), e.removeClass("active") }), r.on("click", function(t) { t.stopPropagation(), n.toggleClass("open") }), n.on("click", function(t) { t.stopPropagation() }), s(document).on("click", function() { a.removeClass("open"), n.removeClass("open"), e.removeClass("active") }), i.on("click", function(t) { n.removeClass("open") }), s(".onepage .navbar li a.scroll").on("click", function() { a.removeClass("open"), e.removeClass("active") })
        },
        isotope: () => {
            s(".grid").each(function(t, e) {
                var e = s(e),
                    a = e.find(".isotope").imagesLoaded(function() { a.isotope({ itemSelector: ".item", layoutMode: "masonry", percentPosition: !0, masonry: { columnWidth: a.width() / 12 }, transitionDuration: "0.7s" }) });
                s(window).resize(function() { a.isotope({ masonry: { columnWidth: a.width() / 12 } }) }), s(window).on("load", function() { a.isotope({ masonry: { columnWidth: a.width() / 12 } }) }), e.find(".isotope-filter").on("click", "a", function() {
                    var t = s(this).attr("data-filter");
                    a.isotope({ filter: t })
                })
            }), s(".isotope-filter").each(function(t, e) {
                var a = s(e);
                a.on("click", "a", function() { a.find(".active").removeClass("active"), s(this).addClass("active") })
            })
        },
        onepageHeaderOffset: () => {
            var t = s(".navbar:not(.banner--clone)").outerHeight(),
                e = { "padding-top": "75px", "margin-top": "-75px" };
            s(".onepage section").css(e);
            t = { "padding-top": t + "px", "margin-top": "-" + t + "px" };
            s(".onepage section:first-of-type").css(t)
        },
        onepageNavLinks: () => { s('.onepage .navbar ul.navbar-nav a[href="#"]').on("click", function(t) { t.preventDefault() }) },
        anchorSmoothScroll: () => {
            s(function() {
                function e(t) {
                    (t = t.length ? t : s("[name=" + this.hash.slice(1) + "]")).length && s("html,body").animate({ scrollTop: t.offset().top }, 1500, "easeInOutExpo")
                }
                setTimeout(function() {
                    var t;
                    location.hash && (window.scrollTo(0, 0), t = location.hash.split("#"), e(s("#" + t[1])))
                }, 1), s('a.scroll[href*="#"]:not([href="#"])').on("click", function() { if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) return e(s(this.hash)), !1 })
            })
        },
        svgInject: () => { SVGInject.setOptions({ onFail: function(t, e) { t.classList.remove("svg-inject") } }), document.addEventListener("DOMContentLoaded", function() { SVGInject(document.querySelectorAll("img.svg-inject"), { useCache: !0 }) }) },
        backgroundImage: () => { s(".bg-image").css("background-image", function() { return "url(" + s(this).data("image-src") + ")" }) },
        backgroundImageMobile: () => {!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)) || s(".image-wrapper").addClass("mobile") },
        imageHoverOverlay: () => { s(".overlay:not(.caption) > a, .overlay:not(.caption) > span").prepend('<span class="bg"></span>') },
        rellax: () => {
            s(".rellax").length && (window.onload = function() {
                var t = new Rellax(".rellax", { speed: 2, center: !0, breakpoints: [576, 992, 1201] });
                s(".projects-overflow").imagesLoaded(function() { t.refresh() })
            })
        },
        scrollCue: () => { scrollCue.init({ interval: -400, duration: 700, percentage: .8 }), scrollCue.update() },
        showMoreItems: () => {
            s(".show-more").each(function() {
                var t = s(this);
                t.showMoreItems({ startNum: t.data("showstart"), afterNum: t.data("showafter"), moreText: "Show More", after: function() { e.isotope(), e.rellax(), e.scrollCue() } })
            })
        },
        owlCarousel: () => {
            s(".basic-slider").each(function() {
                var t = s(this);
                t.owlCarousel({ items: 1, nav: t.data("nav"), navText: ["<i class='uil-arrow-left'></i>", "<i class='uil-arrow-right'></i>"], dots: !0, dotsEach: !0, autoHeight: !0, loop: !1, rewind: !0, margin: t.data("margin") })
            }), s(".carousel").each(function() {
                var t = s(this);
                t.owlCarousel({ rtl: true, autoHeight: !1, nav: t.data("nav"), navText: ["<i class='uil-arrow-left'></i>", "<i class='uil-arrow-right'></i>"], dots: t.data("dots"), dotsEach: !0, loop: t.data("loop"), margin: t.data("margin"), autoplay: t.data("autoplay"), autoplayTimeout: t.data("autoplay-timeout"), responsive: t.data("responsive") })
            })
        },
        heroSlider: () => {
            s(".hero-slider").each(function() {
                var t = s(this);
                t.owlCarousel({ items: 1, nav: s(this).data("nav"), navText: ["<i class='uil-arrow-left'></i>", "<i class='uil-arrow-right'></i>"], dots: s(this).data("dots"), dotsEach: !0, autoHeight: !1, loop: !1, rewind: !0, autoplay: t.data("autoplay"), autoplayTimeout: 5e3, onInitialized: function() { t.trigger("stop.owl.autoplay"), setTimeout(function() { t.trigger("play.owl.autoplay") }, 3e3) }, autoplayHoverPause: !0, margin: 0, animateIn: "fadeIn", animateOut: "fadeOut" }), t.on("changed.owl.carousel", t => {
                    s(".owl-item.active").find(".animated-caption").each(function(t, e) { s(this).removeClass("animate__animated").removeClass(s(this).data("anim")) }), s(".owl-item").eq(t.item.index).find(".animated-caption").each(function(t, e) {
                        var a = s(this).data("anim-delay"),
                            o = s(this).data("anim-duration");
                        s(this).addClass("animate__animated").addClass(s(this).data("anim")).css({ "animation-delay": a + "ms", "animation-duration": o + "ms" })
                    })
                }), t.trigger("refresh.owl.carousel")
            })
        },
        animatedCaptions: () => {
            s(".animated-captions").find(".animated-caption").each(function() {
                var t = s(this).data("anim-delay"),
                    e = s(this).data("anim-duration");
                s(this).addClass("animate__animated").addClass(s(this).data("anim")).css({ "animation-delay": t + "ms", "animation-duration": e + "ms" })
            })
        },
        lightbox: () => { GLightbox({ selector: "*[data-glightbox]", touchNavigation: !0, loop: !1, zoomable: !1, autoplayVideos: !0, moreLength: 0, slideExtraAttributes: { poster: "" }, plyr: { css: "", js: "", config: { ratio: "16:9", fullscreen: { enabled: !1, iosNative: !1 }, youtube: { noCookie: !0, rel: 0, showinfo: 0, iv_load_policy: 3 }, vimeo: { byline: !1, portrait: !1, title: !1, transparent: !1 } } } }) },
        plyr: () => { Plyr.setup(".player", { loadSprite: !0 }) },
        progressBar: () => {
            var o = s(".progressbar.line"),
                n = s(".progressbar.semi-circle");
            o.each(function(t) {
                var e = new ProgressBar.Line(this, { strokeWidth: 6, trailWidth: 6, duration: 3e3, easing: "easeInOut", text: { style: { color: "inherit", position: "absolute", right: "0", top: "-30px", padding: 0, margin: 0, transform: null }, autoStyleContainer: !1 }, step: function(t, e, a) { e.setText(Math.round(100 * e.value()) + " %") } }),
                    a = s(this).attr("data-value") / 100;
                o.waypoint(function() { e.animate(a) }, { offset: "100%" })
            }), n.each(function(t) {
                var e = new ProgressBar.SemiCircle(this, { strokeWidth: 6, trailWidth: 6, duration: 2e3, easing: "easeInOut", step: function(t, e, a) { e.setText(Math.round(100 * e.value())) } }),
                    a = s(this).attr("data-value") / 100;
                n.waypoint(function() { e.animate(a) }, { offset: "100%" })
            })
        },
        pageProgress: () => {
            var a, o, t;
            s(".progress-wrap").length && (a = document.querySelector(".progress-wrap path"), o = a.getTotalLength(), a.style.transition = a.style.WebkitTransition = "none", a.style.strokeDasharray = o + " " + o, a.style.strokeDashoffset = o, a.getBoundingClientRect(), a.style.transition = a.style.WebkitTransition = "stroke-dashoffset 10ms linear", (t = function() {
                var t = s(window).scrollTop(),
                    e = s(document).height() - s(window).height();
                a.style.strokeDashoffset = o - t * o / e
            })(), s(window).scroll(t), jQuery(window).on("scroll", function() { 50 < jQuery(this).scrollTop() ? jQuery(".progress-wrap").addClass("active-progress") : jQuery(".progress-wrap").removeClass("active-progress") }), jQuery(".progress-wrap").on("click", function(t) { return t.preventDefault(), jQuery("html, body").animate({ scrollTop: 0 }, 550), !1 }))
        },
        counterUp: () => {
            var a = window.counterUp.default;
            s(".counter").each(function(t, e) { new Waypoint({ element: s(this), handler: function() { a(e, { duration: 1e3, delay: 50 }), this.destroy() }, offset: "bottom-in-view" }) })
        },
        bsTooltips: () => {
            [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(t) { return new bootstrap.Tooltip(t) })
        },
        bsPopovers: () => {
            [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(t) { return new bootstrap.Popover(t) })
        },
        bsModal: () => {
            var t, e = window.innerWidth - s("body").innerWidth();
            document.querySelectorAll(".modal").forEach(t => { t.addEventListener("show.bs.modal", function(t) { s(".navbar.fixed").css("padding-right", e), s(".progress-wrap").css("margin-right", e) }), t.addEventListener("hidden.bs.modal", function(t) { s(".navbar.fixed").css("padding-right", ""), s(".progress-wrap").css("margin-right", "") }) }), 0 < s(".modal-popup").length && (t = new bootstrap.Modal(document.querySelector(".modal-popup")), document.querySelector(".modal-popup"), setTimeout(function() { t.show() }, 200))
        },
        iTooltip: () => { new iTooltip(".itooltip").init({ className: "itooltip-inner", indentX: 15, indentY: 15, positionX: "right", positionY: "bottom" }) },
        contactForm: () => {
            window.addEventListener("load", function() {
                var t = document.querySelectorAll(".contact-form.needs-validation");
                Array.prototype.filter.call(t, function(e) {
                    e.addEventListener("submit", function(t) {
                        !1 === e.checkValidity() && (t.preventDefault(), t.stopPropagation()), e.classList.add("was-validated"), !0 === e.checkValidity() && (t.preventDefault(), e.classList.remove("was-validated"), s.ajax({
                            type: "POST",
                            url: "assets/php/contact.php",
                            data: s(this).serialize(),
                            success: function(t) {
                                var e = "alert-" + t.type,
                                    a = t.message,
                                    t = '<div class="alert ' + e + ' alert-dismissible fade show"><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' + a + "</div>";
                                e && a && (s(".contact-form").find(".messages").html(t), s(".contact-form")[0].reset())
                            }
                        }))
                    }, !1)
                })
            }, !1)
        },
        pricingSwitcher: () => {
            s(".pricing-wrapper").each(function(t, e) {
                var a = s(e);
                a.find(".pricing-switcher").on("click", function() { a.find(".pricing-switcher").toggleClass("pricing-switcher-active"), a.find(".price").removeClass("price-hidden"), a.find(".price").toggleClass("price-show price-hide") })
            })
        },
        textRotator: () => { null != document.querySelector(".rotator-zoom") && new ReplaceMe(document.querySelector(".rotator-zoom"), { animation: "animate__animated animate__zoomIn", speed: 2500, separator: ",", clickChange: !1, loopCount: "infinite" }), null != document.querySelector(".rotator-fade") && new ReplaceMe(document.querySelector(".rotator-fade"), { animation: "animate__animated animate__fadeInDown", speed: 2500, separator: ",", clickChange: !1, loopCount: "infinite" }) },
        codeSnippet: () => { document.querySelectorAll(".code-wrapper-inner").forEach(function(t) { t.insertAdjacentHTML("beforebegin", '<button type="button" class="btn btn-sm btn-white rounded-pill btn-clipboard">Copy</button>') }), new ClipboardJS(".btn-clipboard", { target: function(t) { return t.nextElementSibling } }).on("success", t => { t.trigger.textContent = "Copied!", t.clearSelection(), setTimeout(() => { t.trigger.textContent = "Copy" }, 2e3) }), new ClipboardJS(".btn-copy-icon").on("success", function(t) { t.clearSelection(), t.trigger.textContent = "Copied!", window.setTimeout(function() { t.trigger.textContent = "Copy" }, 2300) }) }
    };
    e.init()
}(jQuery);