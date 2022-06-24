const btn = document.querySelectorAll('.questionBtn')
const questionText = document.querySelectorAll('.singleQuestion')



// Array.from(btn).forEach((el)=> {
//     el.addEventListener('click', (e)=>{
//         const question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle('addText')
//     })
    
// });

// loop through the article(parent element)
Array.from(questionText).forEach((question) =>{
    // selects the btn element in the specific loop
    const btn = question.querySelector('.questionBtn')

    btn.addEventListener('click', _=>{
        // loop through the article and if the current item doesnt march the specific lopp,remove content

        questionText.forEach( (item) => {
            if(item !== question){
                item.classList.remove('addText')
            }
        })
        question.classList.toggle('addText')
    })
})
