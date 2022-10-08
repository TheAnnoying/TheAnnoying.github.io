globalThis.E = (e, t) => $(document.createElement(e, t))

$(document).ready(function(){
    let clicked = false;
    $(".contact").click(function(){
        if(!clicked){
            clicked = true;
            return $(".contact").removeClass("contact").addClass("discord").html(`TheAnnoying<span>#6068</span>`)
        } else {
            clicked = false;
            return $(".discord").removeClass("discord").addClass("contact").html("Contact me on Discord");
        }
    });
});