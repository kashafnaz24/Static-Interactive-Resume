//  const button = document.getElementById("moreInfoBtn") as HTMLButtonElement;
//  const moreInfo = document.getElementById("moreInfo") as HTMLElement;
//  function buttonrun() {
//      if (moreInfo.style.display === "none") {
//          moreInfo.style.display = "block";  
//          button.style.display = "none";  
//     }
//  }
// Function to toggle visibility of information
function showhidebtn() {
    var moreInformation = document.getElementById("moreInfo");
    var moreInfoBtn = document.getElementById("moreInfoBtn");
    if (moreInfoBtn && moreInformation) {
        if (moreInformation.classList.contains("hidden")) {
            moreInformation.classList.remove("hidden");
            moreInfoBtn.style.display = "none";
        }
        else {
            moreInformation.classList.add("hidden");
            moreInfoBtn.style.display = "inline-block";
        }
    }
}
