$(document).ready(function() {
    var body = $("html, body");
    body.animate({
        scrollTop: 0
    }, '500', 'swing', function() {
        console.log("callback reporting for succesful reset");
    });
});

jQuery("#header,#nav,#body,#footer").fitText(1.2);

function scrollTo(trigger, target) {
    $(trigger).click(function() {
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 2000);
    });
}
var index;
var divs = ["#header", "#nav", "#body", "#footer"];
for (index = 0; index < divs.length; ++index) {
    scrollTo((divs[index]), (divs[index + 1]));
}