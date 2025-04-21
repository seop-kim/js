const localStorageSave  = () => {
    const p = document.querySelector('p');
    const input = document.querySelector('input');
    const button = document.querySelector('button');

    const savedValue = localStorage.getItem('inputValue');

    if (savedValue) {
        input.value = savedValue;
        p.textContent = `저장된 값 : ${savedValue}`;
    }

    input.addEventListener('keyup', (e) => {
        const value = e.target.value;
        localStorage.setItem('inputValue', value);
    });

    button.addEventListener('click', () => {
        localStorage.clear();
        p.textContent = '';
        input.value = '';
    });
}

document.addEventListener('DOMContentLoaded', localStorageSave);