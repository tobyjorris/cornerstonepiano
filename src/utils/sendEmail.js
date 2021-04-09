import emailjs from "emailjs-com";

const sendEmail = contactInfo => {
    const { name, email, phone, contactMethod, referralSource } = contactInfo
    let templateParams = {
        from_name: name,
        email: email,
        phone: phone,
        contactMethod: contactMethod,
        referralSource: referralSource,
    }
    emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICEID,
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USERID
    ).then(response => {
        console.log(response.text)
    }).catch(error => {
        console.log(error)
    })
}

export default sendEmail;
