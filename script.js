document.querySelector(".run-btn").addEventListener("click", () => {
    
    let dailyInterval = document.querySelector(".text-box-hourly").value + "d";
    let hourInteval = document.querySelector(".text-box-hourly").value + "h";
    
    if ( document.getElementById("RedBubble").checked && document.querySelector(".text-box").value){
        let linkGS = document.querySelector(".text-box").value;
        
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
    if ( document.getElementById("TeeSpring").checked && document.querySelector(".text-box").value){
        let linkGS = document.querySelector(".text-box").value;
        
        let choice = document.querySelector(".set-time").value;
        let hash ="/#TSautomate0"
        let url = "https://teespring.com/design-launcher/design/e729d91f-c41d-487e-ba8b-1d62961863af"

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

