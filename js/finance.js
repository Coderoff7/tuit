document.querySelectorAll('.finance_body_left').forEach(e => {
    e.addEventListener('click', toggle_check)
})
function toggle_check(e) {
    let tickets = document.querySelectorAll('.finance_body_left_card')
    if (document.querySelector('.finance_body_right').classList.contains('w-0')) {
        document.querySelector('.finance_body_right').classList.remove('w-0')
    } else {
        document.querySelector('.finance_body_right').classList.add('w-0')
    }
    if (document.querySelector('.finance_body_left').classList.contains('w-100')) {
        document.querySelector('.finance_body_left').classList.remove('w-100')
    }
    else {
        document.querySelector('.finance_body_left').classList.add('w-100')
    }
}