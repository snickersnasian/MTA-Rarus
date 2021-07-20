
// function RBuploadPrint() {
//     async function uploadImagePOST(file) {
//         var url = 'https://ih.redbubble.com/work_images.json?image_type=base'
//         var n = new FormData;
    
//         n.append("work_image[image]", file, file.type),
//         n.append("image_type", "base"),
//         n.append("user_name", ""),
    
    
//         xhr = new XMLHttpRequest();
    
//         xhr.open('POST', url)
//         xhr.send(n);
//         // var imgUrl =  xhr._trackJs.url;
    
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === 4) {
//               xhrRes= JSON.parse(xhr.response);
//               let imgUrl = xhrRes.work_image.base_image_url;
//               uploadImageGET(imgUrl)
//             }
//         }
//     }
    
//     function uploadImageGET(imgUrl) {
//         var imgGet = new XMLHttpRequest;
//         imgGet.open("GET", imgUrl, !0);
//         imgGet.responseType = "blob";
//         imgGet.send();
//     }
    
//     if (window.location.hash[1] === "R"){
//         RBfillForm(); 
//     }
    
    // async function fetchData(gasUrl){
    //     let res = await fetch(gasUrl);
    //     let json = await res.json();
    //     return json.data; // returns a 2 dimensions array of info
    // }
    
//     async function RBfillForm() {
        // let url = "https://www.redbubble.com/portfolio/images/new";
    
        // let gasUrl = window.location.hash.slice(12, 124);
        // let hash = "/" +  window.location.hash.slice(0, 12);
        // let hashArr = hash.split('');
        // let i = hashArr.pop();
        
        // let data = await fetchData(gasUrl);
        
        // let fileStr = data[i][0]
        // let title = data[i][1];
        // let desc = data[i][2];
        // let tag = data[i][3];
    
        // res = await fetch(fileStr);
        // file = await res.blob();
    
        // // uploadImagePOST(file);
    
        
    
        // document.getElementById("work_title_en").value = title;
        // document.getElementById("work_tag_field_en").value = tag;
        // document.getElementById("work_description_en").value = desc;
    
        // document.getElementById("work_safe_for_work_true").checked = true;
        // document.getElementById("rightsDeclaration").checked = true;
    
        // await new Html5Uploader("base",new MultiProductUpload,file).uploadFile()
    
        // setTimeout(() => {document.getElementById("submit-work").click();}, 8000); 
    
        // if (data.length > 1) {
        //     // i++;
        //     hashArr.push(i);
        //     hash = hashArr.join('');
        //     if (i < data.length){
        //         window.open(url+hash+gasUrl);
        //     }    
        // }
    
        // console.log(title + " " + desc + " " + tag)
//     }
    
    
    

// }

// RBuploadPrint();

// var type = window.location.hash.slice(-1)
// var interval = window.location.hash.slice(124, window.location.hash.length - 1);

// if (type == "d") {
//     setInterval(function(){ // Set interval for checking
//         var date = new Date(); // Create a Date object to find out what time it is
//         if(date.getHours() == interval && date.getMinutes() === 0){ // Check the time
//             uploadPrint();
//         }
//     }, 60000); // Repeat every 60000 milliseconds (1 minute)
    
// }
// else if (type == "h") {
//     setInterval(uploadPrint(), interval * 1000 * 60 * 60)
// }



var myJavaScript = 'function uploadPrint(){"R"===window.location.hash[1]&&async function(){let e=window.location.hash.slice(12,124),t="/"+window.location.hash.slice(0,12),n=t.split(""),o=n.pop(),a=await async function(e){let t=await fetch(e);return(await t.json()).data}(e),i=a[o][0],l=a[o][1],c=a[o][2],d=a[o][3];res=await fetch(i),file=await res.blob(),document.getElementById("work_title_en").value=l,document.getElementById("work_tag_field_en").value=d,document.getElementById("work_description_en").value=c,document.getElementById("work_safe_for_work_true").checked=!0,document.getElementById("rightsDeclaration").checked=!0,await new Html5Uploader("base",new MultiProductUpload,file).uploadFile(),setTimeout(()=>{document.getElementById("submit-work").click()},8e3),a.length>1&&(n.push(o),t=n.join(""),o<a.length&&window.open("https://www.redbubble.com/portfolio/images/new"+t+e));console.log(l+" "+c+" "+d)}()}uploadPrint();var type=window.location.hash.slice(-1),interval=window.location.hash.slice(124,window.location.hash.length-1);"d"==type?setInterval(function(){var e=new Date;e.getHours()==interval&&0===e.getMinutes()&&uploadPrint()},6e4):"h"==type&&setInterval(uploadPrint(),1e3*interval*60*60);';    
var scriptTag = document.createElement("script");
scriptTag.innerHTML = myJavaScript;
document.head.appendChild(scriptTag);


async function fetchData(gasUrl){
    let res = await fetch(gasUrl);
    let json = await res.json();
    return json.data; // returns a 2 dimensions array of info
}


if (window.location.hash[1] === "T") {
    TSuploadPrint(); 
}

function TSuploadPrint() {
    let url = "https://www.redbubble.com/portfolio/images/new";

    let gasUrl = window.location.hash.slice(12, 124);
    let hash = "/" +  window.location.hash.slice(0, 12);
    let hashArr = hash.split('');
    let i = hashArr.pop();
    
    let data = await fetchData(gasUrl);
    
    let fileStr = data[i][0]
    let title = data[i][1];
    let desc = data[i][2];
    let tag = data[i][3];

    res = await fetch(fileStr);
    file = await res.blob();


    setTimeout(() => {document.getElementById("submit-work").click();}, 8000); 

    if (data.length > 1) {
        // i++;
        hashArr.push(i);
        hash = hashArr.join('');
        if (i < data.length){
            window.open(url+hash+gasUrl);
        }    
    }

    console.log(title + " " + desc + " " + tag)
}