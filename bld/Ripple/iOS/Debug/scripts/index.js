// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        $('#inputContainerForm').validate();

        $('#inputContainerForm').submit(function (event) {
            // cancels the form submission
            event.preventDefault();

            if ($('#inputContainerForm').valid()) {
                //save data
                UploadData();
            }
        });

        WinJS.UI.processAll();

        //WinJS.Namespace.define("ParkingCharacter", {
        //    radioChanged: WinJS.UI.eventHandler(function (ev) {
        //        var mode = event.target.value;
        //        ParkingCharacter.updateCarOwnershipView(mode);
        //    }),
        //    updateCarOwnershipView: function (mode) {
        //        switch (mode) {
        //            case "privateCar":
        //                ParkingCharacter.clearCarOwners();
        //                break;
        //            case "companyCar":
        //                ParkingCharacter.clearCarOwners();
        //                ParkingCharacter.setCarOwners("companyCarDiv", "companyCarDivVisible");
        //                break;
        //            case "rentalCar":
        //                ParkingCharacter.clearCarOwners();
        //                ParkingCharacter.setCarOwners("rentalCarDiv", "carOwnershipVisible");
        //                break;
        //            case "ownedByChild":
        //                ParkingCharacter.clearCarOwners();
        //                ParkingCharacter.setCarOwners("ownedByChildDiv", "ownedByChildDivVisible");
        //                break;
        //        }
        //    },
        //    clearCarOwners: function () {
        //        document.getElementById("companyCarDiv").className = "companyCarDivHidden";
        //        document.getElementById("rentalCarDiv").className = "rentalCarDivHidden";
        //        document.getElementById("ownedByChildDiv").className = "ownedByChildDivHidden";
        //        document.getElementById("carOwnershipContainer").className = "carOwnershipHidden";
        //    },
        //    setCarOwners: function (divId, divClassName) {
        //        document.getElementById(divId).className = divClassName;
        //    }

        //});
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    LoadStreetsData();
})();


//$(document).on("mobileinit", function () {
//    $.mobile.ignoreContentEnabled = true;
//});

var viewModel = {};

function LoadStreetsData() {

    $.getJSON("http://tlv-spinfra.cloudapp.net/MobileFacade/AnonimousServices.svc/streets", {})
      .done(function (data) {
          viewModel = data.GetStreetsResult;
          //WinJS.Namespace.define("WinJSCordova.ListView", {
          //    data: new WinJS.Binding.List(viewModel)
          //});
          WinJS.Namespace.define("Sample", {
                suggestionsRequestedHandler: WinJS.UI.eventHandler(suggestionsRequestedHandler),
                querySubmittedHandler: WinJS.UI.eventHandler(querySubmittedHandler),
                resultsuggestionchosenHandler: WinJS.UI.eventHandler(resultsuggestionchosenHandler)
            });
          WinJS.UI.processAll();
      })
      .fail(function (jqxhr, textStatus, error) {
          var err = textStatus + ", " + error;
          //console.log("Request Failed: " + err);
      });
}

function resultsuggestionchosenHandler(eventObject) {
    var queryText = eventObject.detail.queryText;
    var contentDialog = document.querySelector(".win-autosuggestbox").winControl
    var aaa = document.querySelector(".win-autosuggestbox-input");
}

function suggestionsRequestedHandler(eventObject) {
        var queryText = eventObject.detail.queryText,
    query = queryText.toLowerCase(),
    suggestionCollection = eventObject.detail.searchSuggestionCollection;
    if (queryText.length > 1) {
        for (var i = 0, len = viewModel.length; i < len; i++) {
            if (viewModel[i].StreetName.substr(0, query.length).toLowerCase() === query) {
                suggestionCollection.appendQuerySuggestion(viewModel[i].StreetName);
            }
        }
    }
}

function querySubmittedHandler(eventObject) {
     var queryText = eventObject.detail.queryText;
    var contentDialog = document.querySelector(".win-autosuggestbox").winControl
    var aaa = document.querySelector(".win-autosuggestbox-input");
}

function UploadData() {

    var contentDialog = document.querySelector(".win-contentdialog").winControl;
    contentDialog.show();

    var tbl = tlvmobileappClient.getTable("ParkingCharacterDataTBL");
    var jsonRes = [];
    var itm = {};
    itm["firstName"] = $("#firstName").val();
    //jsonRes.push(itm);

    //itm = {}
    itm["lastName"] = $("#lastName").val();
    //jsonRes.push(itm);

    //itm = {}
    itm["tz"] = $("#tz").val();
    //jsonRes.push(itm);

    //itm = {}
    itm["carPlate"] = $("#carPlate").val();
    //jsonRes.push(itm);

    //itm = {}
    itm["phoneNum"] = $("#phoneNum").val();
    //jsonRes.push(itm);

    //itm = {}
    itm["additionalPhoneNum"] = $("#additionalPhoneNum").val();
    //jsonRes.push(itm);

    //itm = {}
    itm["email"] = $("#email").val();
    //jsonRes.push(itm);

    //itm = {}
    itm["arnona"] = $("#arnona").val();
    //jsonRes.push(itm);

    //itm = {}
    itm["address"] = $("#address").val();
    //jsonRes.push(itm);

    //itm = {}
    itm["homeNum"] = $("#homeNum").val();
    //jsonRes.push(itm);

    //itm = {}
    itm["entrance"] = $("#entrance").val();
    //jsonRes.push(itm);

    //itm = {}
    itm["appartments"] = $("#appartments").val();
    //jsonRes.push(itm);

    //itm = {}
    itm["zip"] = $("#zip").val();
    //jsonRes.push(itm);

    //itm = {}
    itm["carOwnership"] = $("input[name=carOwnership]:checked").val();
    jsonRes.push(itm);

    //itm = {}
    //itm["lisenceImage"] = $("#lastName").val();
    //jsonRes.push(itm);

    //itm = {}
    //itm["lastName"] = $("#lastName").val();
    //jsonRes.push(itm);

    //itm = {}
    //itm["lastName"] = $("#lastName").val();
    //jsonRes.push(itm);



    //tbl.insert(jsonRes).done(handleSuccess, handleError);
    tbl.insert(itm).done(handleSuccess, handleError);
}

function handleSuccess() {
    var contentDialog = document.querySelector(".win-contentdialog").winControl;
    contentDialog.hide();
    //clean up form
    alert('Data successfully uploaded');
    $('#inputContainerForm')[0].reset()
}

function handleError(error) {
    var contentDialog = document.querySelector(".win-contentdialog").winControl;
    contentDialog.hide();
    var text = error + (error.request ? ' - ' + error.request.status : '');
    alert(text);
}

function RadioCahngedHandler() {
    var mode = event.target.value;
    updateCarOwnershipView(mode);
}

function updateCarOwnershipView(mode) {
    switch (mode) {
        case "privateCar":
            clearCarOwners();
            break;
        case "companyCar":
            clearCarOwners();
            setCarOwners("companyCarDiv", "companyCarDivVisible");
            break;
        case "rentalCar":
            clearCarOwners();
            setCarOwners("rentalCarDiv", "carOwnershipVisible");
            break;
        case "ownedByChild":
            clearCarOwners();
            setCarOwners("ownedByChildDiv", "ownedByChildDivVisible");
            break;
    }
}

function clearCarOwners() {
    document.getElementById("companyCarDiv").className = "companyCarDivHidden";
    document.getElementById("rentalCarDiv").className = "rentalCarDivHidden";
    document.getElementById("ownedByChildDiv").className = "ownedByChildDivHidden";
    document.getElementById("carOwnershipContainer").className = "carOwnershipHidden";
}

function setCarOwners(divId, divClassName) {
    document.getElementById(divId).className = divClassName;
    document.getElementById("carOwnershipContainer").className = "carOwnershipVisible";
}