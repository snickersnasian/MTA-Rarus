document.querySelector(".run-btn").addEventListener("click", () => {
    
    if ( document.getElementById("RedBubble").checked && document.querySelector(".text-box").value){
        let linkGS = document.querySelector(".text-box").value;
        let dailyInterval = document.querySelector(".text-box-hourly").value + "d";
        let hourInteval = document.querySelector(".text-box-hourly").value + "h";
        let choice = document.querySelector(".set-time").value;
        let hash ="/#RBautomate0"
        let url = "https://www.redbubble.com/portfolio/images/new"

        if (linkGS){
            if (choice == "d") {
                window.open(url+hash+linkGS+dailyInterval);
                
            }
            else if (choice == "h"){
                window.open(url+hash+linkGS+hourInteval);
            }
        }
        
    }
})
