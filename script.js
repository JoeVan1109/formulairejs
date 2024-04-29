//regex mail
//si clic submit sans rien => Oops! Please add your email
// si regex pas respecter => Oops! Please check your email

// variable input
// variable submit
// variable regex
// variable mail = ""


//ecoute du formulaire

//ecoute input avec blur
//ecoute submit click
//e.preventDefault();


// mail = e.target.value;
// if(input= "" && submit){
    //Alert("Oops! Please add your email")
//}else{Alert("Enter your email")


// if(regex.test(mail) && submit){
    //Alert("ok");
    //else{
        //Alert("Oops! Please check your email");
    //}
    let input = document.getElementById("email");
    let submit = document.querySelector(".submit");
    let regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
    let mail = "";
    
    submit.addEventListener("click", function(e) {
        e.preventDefault();
        
        if (input.value === "") {
            alert("Oops! Please add your email");
        } else {
            mail = input.value;
            if (regex.test(mail)) {
                alert("ok");
            } else {
                alert("Oops! Please check your email");
            }
        }
    });
    

