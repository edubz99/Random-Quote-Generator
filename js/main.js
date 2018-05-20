const randomButton = document.querySelector('.generate-button');
const display = document.querySelector('.display');
const modal = document.querySelector('.modal');
const modalBackDrop = document.createElement('div');  
    modalBackDrop.classList.add('modal-backdrop');
    modalBackDrop.classList.add('show');
    modalBackDrop.classList.add('fade');
const body =  document.body;


function randomiser (array) {
    return array[Math.floor(Math.random() * array.length)];
}

//Generate a random Alert
function randomAlert(text, alert) {
    //Fetch API to fetch quotes
    fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', {cache: "reload"})
    .then((result) =>result.json())
    .then((quotes) => {
        // const myJSON = JSON.stringify(quotes);
        const display = quotes.map(quote => {
            return `
                <div class="article-container">
                    <h3 class="display__alert--title">${quote.title}</h3>
                    <p class="display__alert--body">${quote.content}</p>
                    <p class="display__alert--author">${quote.title}</p>
                </div>
            `;
        })
        generateRandom.innerHTML = display;
    })
    const alerts = ['success', 'secondary', 'primary','danger', 'warning', 'info','light', 'dark'];
    const flex = ['flex-end','flex-start', 'center']
    const randomAlert = randomiser(alerts);
    const randomFlex = randomiser(flex)
    let generateRandom = document.createElement(`div`);
    generateRandom.className = `.display__alert alert alert-${randomAlert}`;
    generateRandom.setAttribute('role', 'alert');
    //Apply random styles
    display.style.alignItems = randomFlex;
    display.style.justifyContent = randomFlex;
    generateRandom.style.alignSelf = randomFlex;
    generateRandom.style.justifySelf = randomFlex;
    return display.appendChild(generateRandom);
}

function displayModal(){ 
    document.body.classList.add('modal-open');
    modal.classList.add('show');
    modal.style.display = 'block';
    body.appendChild(modalBackDrop);
 };

 function hideModal() {
    document.body.classList.remove('modal-open');
    modal.classList.remove('show');
    modal.style.display = 'none';
    modalBackDrop.style.display = 'none';
 }

 function hideModalTimed() {
        setTimeout(()=> {
            hideModal()
        },5000);
}

function closeModal(e) {
   if(e.target == modal){
        return hideModal();
   } else if(modal.classList.includes('show')) {
    return hideModalTimed();
   }
}

display.addEventListener('click', randomAlert);
window.addEventListener('DOMContentLoaded',displayModal);
modal.addEventListener('click',closeModal);
//Set timer
//pin option to cancel timer
hideModalTimed();