<script>
        function sendEmail() {
            Email.send({
                Host: "smtp.elasticemail.com",
                Username: "deepanshupoddar0895@gmail.com",
                Password: "2166FA58B2EB6E9C4F8FBAC9543E1125634E",
                To: 'deepanshupoddar0895@gmail.com',
                From: document.getElementById("email").value,
                Subject: "New Enquiry",
                Body: "And this is the body"
            }).then(
                message => alert(Message sent)
            );
        }
    </script>