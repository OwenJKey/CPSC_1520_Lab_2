
function strong(string){
    return `<strong>${string}</strong>`;
    }


const template = strong("making a function");

const updateInnerHTML = function (selector, htmlString){
    document.querySelector(selector).insertAdjacentHTML('beforebegin', htmlString);
    document.querySelector(selector).insertAdjacentHTML('afterbegin', htmlString);
    document.querySelector(selector).insertAdjacentHTML('beforeend', htmlString);
    document.querySelector(selector).insertAdjacentHTML('afterend', htmlString);
    }
    
    updateInnerHTML('section',template);
    
console.log(template)