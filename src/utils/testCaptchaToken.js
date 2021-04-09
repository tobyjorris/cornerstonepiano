const testCaptcha = async (token, contactFormData) => {
    const requestOptions = {
        method: 'POST',
    };
    console.log('contactFormData', contactFormData)

    return fetch(`https://us-central1-cornerstone-piano.cloudfunctions.net/checkRecaptcha?token=${token}&name=${contactFormData.name}&phone=${contactFormData.phone}&email=${contactFormData.email}&contactMethod=${contactFormData.contactMethod}&referralSource=${contactFormData.referralSource}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            return result
        })
        .catch(error => console.log('Error in checkRecaptcha Function', error));
}

export default testCaptcha;
