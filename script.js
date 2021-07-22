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
    if ( document.getElementById("Printful").checked && document.querySelector(".text-box-api").value){
        let linkGS = document.querySelector(".text-box").value;
        let apiKey = document.querySelector(".text-box-api").value;
        let choice = document.querySelector(".set-time").value;
        let hash ="/#PFautomate"
        let url = "https://www.printful.com"

        if (linkGS){
            if (choice == "d") {
                window.open(url+hash+linkGS+apiKey+dailyInterval);
                
            }
            else if (choice == "h"){
                window.open(url+hash+linkGS+apiKey+hourInteval);
            }
        }
        
    }
})

document.getElementById("Printful").addEventListener("click", () => {
    document.querySelector(".message-box-api").classList.toggle("invisible")
})
    
  
