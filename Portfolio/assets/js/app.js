var clipboard = new ClipboardJS(".btn");

    clipboard.on("success", function(e) {
        console.log(e);
    });

    clipboard.on("error", function(e) {
        console.log(e);
    });

var copy_button = document.querySelector("button");

copy_button.addEventListener("click", function(){
    copy_button.textContent = "Copied!";
});