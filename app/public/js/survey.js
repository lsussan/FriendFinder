//Chosen CSS
    var config = {
        '.chosen-select': {},
        '.chosen-select-deselect': {
            allow_single_deselect: true
        },
        '.chosen-select-no-single': {
            disable_search_threshold: 10
        },
        '.chosen-select-no-results': {
            no_results_text: 'Nothing Found!'
        },
        '.chosen-select-width': {
            width: "95%"
        }
    }

for (var selector in config) {
    $(selector).chosen(config[selector]);
}

//Capture form input
$("#submit").on("click", function () {

    //validate form
    function validateForm() {
        var isValid = true;
        $(".form-control").each(function () {
            if ($(this).val() === '')
                isValid = false;
        });

        $(".chosen-select").each(function () {
            if ($(this).val() === "")
                isValid = false
        })
        return isValid;
    }
    // if alll required fields are filled   
    if (validateForm() == true) {
        var surveyInput = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
                $("#question1").val(),
                $("#question2").val(),
                $("#question3").val(),
                $("#question4").val(),
                $("#question5").val(),
                $("#question6").val(),
                $("#question7").val(),
                $("#question8").val(),
                $("#question9").val(),
                $("#question10").val(),
            ]
        };
        //grab site url
        var currentURL = window.location.origin;
        // AJAX post the data to friends api
        $.post(currentURL + '/api/friends', surveyInput, function (data) {
            $("#matchName").text(data.name);
            $('#matchImg').attr("src", data.photo);

            //this modal shows the best match
            $("#resultsModal").modal('toggle');
        });
    } else {
        alert("Please make sure you fill out all fields before you submit!");
    }
    return false;
});
