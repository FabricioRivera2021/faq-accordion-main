'use strict'

const faqs = document.querySelectorAll('.faq-container');

faqs.forEach(faq => {
    faq.addEventListener('click', (e) => {
       e.currentTarget.classList.toggle("show-text")
        //e.currentTarget.parentElement.classList.toggle("show-text");
    })
})