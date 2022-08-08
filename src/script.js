const form    = document.querySelector('.form'),
    formBlock = document.querySelectorAll('.form__block'),
    formInput = document.querySelectorAll('.form__block input'),
    formMessage = document.querySelectorAll('.form__block span')

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function noValid(i) {
    formBlock[i].classList.add('act')
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    formInput.forEach((item, i) => {
        if(item.value === "" || i === 2 && !item.checked) {
            noValid(i);
        }
    })

    const emailValid = formInput[0].value
    if (emailValid !== "" && !re.test(emailValid)) {
        formMessage[0].innerHTML = 'Не валидный email';
        noValid(0);
    }

    const passwordValid = formInput[1].value
    if (passwordValid !== "" && passwordValid.length < 8) {
        formMessage[1].innerHTML = 'Должно быть минимум 8 символов';
        noValid(1);
    }
    if (emailValid === formInput[0].value && passwordValid === formInput[1].value) {
        const email = emailValid;
        const password = passwordValid;
        const registration = {email, password};
        console.log(registration);
    };
})

