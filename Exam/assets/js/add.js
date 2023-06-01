// alert()
const submit =document.querySelector(".btn")
submit.addEventListener("click", function(){
    const fetched = fetch('https://6469bba8183682d614455b66.mockapi.io/information', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: document.querySelector("#name").value,
            avatar: document.querySelector("#avatar").value,
            info: document.querySelector("#info").value 
        })
    })
    fetched.then(res =>{
        if(res.ok==true) {
            document.querySelector("#name").value = "",
            document.querySelector("#avatar").value = "",
            document.querySelector("#info").value = "" 
        }
    })
    
})