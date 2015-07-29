// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    var app = WinJS.Application;
    var nav = WinJS.Navigation;
    var sched = WinJS.Utilities.Scheduler;
    var ui = WinJS.UI;

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        //WinJS.UI.processAll();

        WinJS.UI.processAll().done(function () {
            WinJS.UI.Pages.define("index.html", {
                ready: function (element, options) {
                    //alert("inside init ready");
                    var listView = document.querySelector("#contenthost").winControl;
                    WinJS.Navigation.navigate(listView.home);
                    WinJS.UI.processAll();
                }
            });
        });

        //nav.history = app.sessionState.history || {};
        //nav.history.current.initialPlaceholder = true;

        //// Optimize the load of the application and while the splash screen is shown, execute high priority scheduled work.
        //ui.disableAnimations();
        //var p = ui.processAll().then(function () {
        //    return nav.navigate(nav.location || Application.navigator.home, nav.state);
        //}).then(function () {
        //    return sched.requestDrain(sched.Priority.aboveNormal + 1);
        //}).then(function () {
        //    ui.enableAnimations();
        //});

    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();


WinJS.Namespace.define("WinJSCordova.PivotView", {
    handlers: {
        selectionchanged: WinJS.UI.eventHandler(pivotSelectionChanged),
        itemanimationend: WinJS.UI.eventHandler(pivotItemAnimationEnd),
        itemanimationstart: WinJS.UI.eventHandler(pivotItemAnimationStart)
    }
});

function pivotSelectionChanged(eventInfo) {
    switch (eventInfo.detail.index) {
        case 0:
            //WinJS.Navigation.navigate("AppPages/MainPage/MainPage.html");

            break;
        case 1:
            //WinJS.Navigation.navigate("AppPages/NewRequestPage/NewRequest.html");
            break;
    }
    WinJS.UI.processAll();
}

function pivotItemAnimationStart(eventInfo) {
    //alert("pivotItemAnimationStart");
}

function pivotItemAnimationEnd(eventInfo) {
    //alert("pivotItemAnimationEnd");
    //WinJS.Navigation.navigate("AppPages/MainPage/MainPage.html");
}