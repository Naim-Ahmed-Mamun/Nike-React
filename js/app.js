
// email js

function sendMail(){
    const tempParams = {
        from_name: document.getElementById("toName").value,
        to_name: document.getElementById("toEmail").value,
        message: document.getElementById("msg").value
    }
    emailjs.send('service_fs35g75','template_2omctv9',tempParams)
    .then( res => {
        console.log('sucess',res.status);
    })
}

// wow js
new WOW().init();