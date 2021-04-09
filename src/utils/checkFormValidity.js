const checkFormValidity = (contactInfo) => {
    const errors = [];
    const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const phoneRegEx = /^\d{3}-\d{3}-\d{4}$/

    if (!contactInfo.name) {
        errors.push({field: 'name', message: 'Please enter your name'})
    }
    if (!contactInfo.email || emailRegEx.test(contactInfo.email) === false) {
        errors.push({field: 'email', message: 'Please enter a valid email'})
    }
    if (!contactInfo.phone || phoneRegEx.test(contactInfo.phone) === false) {
        errors.push({field: 'phone', message: 'Please enter a valid number ###-###-####'})
    }
    if (!contactInfo.referralSource) {
        errors.push({field: 'referralSource', message: 'Please let us know how you heard about us'})
    }
    if (!contactInfo.contactMethod) {
        errors.push({field: 'contactMethod', message: 'Please let us know how you would like to be contacted'})
    }
    return errors
}

export default checkFormValidity;
