function SendMail() {

    event.preventDefault(); 

    var params = {
        from_name: document.getElementById("user_name").value,
        user_email: document.getElementById("user_email").value,
        message: document.getElementById("message").value
    };
    emailjs.send("service_jn508k8", "template_dc6i0q8", params).then(function (res) {
        alert("Success!" + res.status);
    });
}