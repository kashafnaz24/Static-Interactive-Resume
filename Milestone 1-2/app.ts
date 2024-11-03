
 const button = document.getElementById("moreInfoBtn") as HTMLButtonElement;
 const moreInfo = document.getElementById("moreInfo") as HTMLElement;

 function buttonrun() {
     if (moreInfo.style.display === "none") {
         moreInfo.style.display = "block";  
         button.style.display = "none";  
    }
 }
