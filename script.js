$(document).ready(function() {
    $("#fetchData").click(function() {
        $.ajax({
            url: "https://localhost:7073/Data",
            method: "GET",
            success: function(data) {
                $("#dataContainer").text(data.message);
            },
            error: function(xhr, status, error) {
                $("#dataContainer").text("Error" + error);
            }
        });
    });
});