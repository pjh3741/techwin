  document.addEventListener("DOMContentLoaded", async () => {
    btnList = document.getElementsByClassName("stretched-link");
        
    exclusionBtn = btnList[0];
    wearBtn = btnList[1];
    fallBtn = btnList[2];

    exclusionBtn.addEventListener("click", async function () {
      sessionStorage.setItem("state", "exclusion");
      location.href = "http://192.168.2.216/home/setup/opensdk/html/SG_Safety/pages/analysis/index.html";
      
    });
    wearBtn.addEventListener("click", async function () {
      sessionStorage.setItem("state", "wear_setting");
      location.href = "http://192.168.2.216/home/setup/opensdk/html/SG_Safety/pages/analysis/index.html";
    });
    fallBtn.addEventListener("click", async function () {
      sessionStorage.setItem("state", "fall_setting");
      location.href = "http://192.168.2.216/home/setup/opensdk/html/SG_Safety/pages/analysis/index.html";
    });
  });