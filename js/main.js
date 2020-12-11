/* intro */
const introText = document.querySelector('p');
const introButton = document.querySelector('button');

const options ={
    rootMargin: '0px 0px -100px 0px',
    threshold: 0
}

const introObserver = new IntersectionObserver (function (entries,introObeserver){
    entries.forEach(entry => {
        // console.log(entry);

        if(!entry.isIntersecting){
            return;
        }

        else{
            if (introText.classList.contains('anim')){

                introText.classList.add('visible');
                introButton.classList.add('visible');
                // introObeserver.unobserve(entry.target)
            }
        }})},options);

introObserver.observe(introText);

/* stay productive */

const productiveSection = document.querySelector('.stay-productive');
const productiveText = document.querySelector('.hero-text');
const productiveHero = document.querySelector('#hero-2');


const productiveObserver = new IntersectionObserver (function (entries,productiveObserver){
    entries.forEach(entry => {
        // console.log(entry);

        if(!entry.isIntersecting){
            return;
        }

        else{
            productiveText.classList.add('visible');
            productiveHero.classList.add('visible');
            productiveObserver.unobserve(entry.target);
        }

    })},options);

productiveObserver.observe(productiveSection);