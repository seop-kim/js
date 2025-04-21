document.addEventListener('DOMContentLoaded', () => {
    let currentValue;
    let changedConstValue = 10;

    const select = document.querySelector('select');
    const input = document.querySelector('input');
    const span = document.querySelector('span');

    const cal = () => {
        span.textContent = (currentValue * changedConstValue).toFixed(2);
    }

    select.addEventListener('change', (e) => {
        changedConstValue = select.value;
        console.log(changedConstValue);
        cal();
    });

    input.addEventListener('keyup', (e) => {
        currentValue = input.value;

        if (isNaN(currentValue)) {
            alert('숫자를 입력하세요');
            input.value = null;
            return;
        }


        console.log(currentValue);
        cal();
    });
})