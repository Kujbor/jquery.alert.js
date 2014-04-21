/*
 * jquery.alert.js - jQuery plugin for easy using Twitter Bootstrap Alerts
 * Author Oleg Taranov aka Kujbor
 * Copyright (C) 2013: CubeComp Development
 */
define("jquery.alert", ["jquery"], function($) {

    "use strict";

    function Alert() {

        var alert = this;

        this.showEffect = "fadeIn";
        this.hideEffect = "fadeOut";

        this.print = function(html, type) {

            var $alert = $(".alert");

            $alert.removeClass("alert-success");
            $alert.removeClass("alert-info");
            $alert.removeClass("alert-warning");
            $alert.removeClass("alert-danger");

            $alert.find("#error-box").html(html);

            $("body,html").scrollTop(0);

            return $alert.addClass("alert-" + type)[alert.showEffect]();
        };

        this.clear = function() {
            return $(".alert")[alert.hideEffect]();
        };

        this.success = function(message) {
            return alert.print(message, "success");
        };

        this.info = function(message) {
            return alert.print(message, "info");
        };

        this.warning = function(message) {
            return alert.print(message, "warning");
        };

        this.danger = function(message) {
            return alert.print(message, "danger");
        };
    }

    $.alert = new Alert();

    $("[data-hide]").on("click", function() {
        $("." + $(this).attr("data-hide"))[$.alert.hideEffect]();
    });
});
