
const moreInfo = document.getElementById("moreInfo") as HTMLElement;
const button = document.getElementById("moreInfoBtn") as HTMLButtonElement;

function buttonrun() {
    // Check if the moreInfo section is hidden
    if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
        moreInfo.style.display = "block";  // Show the hidden info
        button.style.display = "none";     // Hide the button
    }
}
