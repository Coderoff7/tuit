const login__button = document.getElementById("login__button")

login__button.addEventListener("click",()=>{
    const user__login = document.getElementById("user__login").value
    const user__parol = document.getElementById("input-pass").value
    console.log(user__parol)
    if(user__login == "xoji_aka" && user__parol == "admin123"){
        window.location.href = "http://127.0.0.1:5501/pages/myprofile.html"
    }else{
        console.log("xatolik yuz berdi")
    }

})