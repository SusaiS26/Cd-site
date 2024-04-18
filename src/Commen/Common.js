const numberMethod = (e) => {
    const re = /[0-9 +-]+/g;
    if (!re.test(e.key)) {
        e.preventDefault();
    }
};

const maxLength = {
    phoneNumber: 10
};

const validPhoneNumberRegex = RegExp(/^([0-9]{10})$/);
const validPasswordRegex = RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=.\-_*])([a-zA-Z0-9@#$%^&+=*.\-_]){3,}$/);
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validOnlyEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

export {
    validPhoneNumberRegex,
     validPasswordRegex,
    validEmailRegex,
    validOnlyEmailRegex,
    maxLength,
    numberMethod,
}