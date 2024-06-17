document.addEventListener("DOMContentLoaded", function() {
    var rateExperienceBtn = document.getElementById("rateExperienceBtn");
    var feedbackForm = document.getElementById("feedbackForm");

    rateExperienceBtn.addEventListener("click", function() {
        if (feedbackForm.checkValidity()) {
            window.location.href = "feedback_page.html";
        } else {
            alert("Please fill in all fields before rating your experience.");
        }
    });
});
