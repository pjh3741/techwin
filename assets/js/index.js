  document.addEventListener("DOMContentLoaded", async () => {
    btnList = document.getElementsByClassName("stretched-link");
        
    exclusionBtn = btnList[0];
    wearBtn = btnList[1];
    fallBtn = btnList[2];

    document.getElementById("Home").addEventListener("click", () => {
      location.reload()
    })
    
    exclusionBtn.addEventListener("click", async function () {
      location.href = "http://192.168.2.201/home/setup/opensdk/html/SG_Safety/pages/analysis/index.html#1";
      
    });
    wearBtn.addEventListener("click", async function () {
      location.href="http://192.168.2.201/home/setup/opensdk/html/SG_Safety/pages/analysis/index.html#2";
    });
    fallBtn.addEventListener("click", async function () {
      location.href = "http://192.168.2.201/home/setup/opensdk/html/SG_Safety/pages/analysis/index.html#3";
    });
  });
