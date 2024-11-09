
function showhidebtn(){
    const moreInformation = document.getElementById("moreInfo");
    const moreInfoBtn = document.getElementById("moreInfoBtn");
    if(moreInfoBtn && moreInformation){
        if (moreInformation.classList.contains("hidden")) {
            moreInformation.classList.remove("hidden");
            moreInfoBtn.style.display = "none";
        } else {
            moreInformation.classList.add("hidden");
            moreInfoBtn.style.display = "inline-block";
        }
    }

}
