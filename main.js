const submit = document.querySelector('button#submit-button')
const result = document.querySelector('#results')
let textInput = document.querySelector('input[type=text]')
const optionInputs = document.querySelectorAll('input[type=radio]')
submit.style.opacity = 0

textInput.addEventListener('keydown', function(event){
    // console.log(textInput.value)
    // console.log(optionInputs[0])
    if(event.keyCode == 13){
        let returnValue = ''
        let optionArr  = []
        for(const ops of optionInputs){
            optionArr.push(ops.value)
        }
    
        function getOption(option){
            if(option === 'encode'){
                console.log('got to encode')
                return encode(textInput.value)
            }
            else if(option === 'search'){
                console.log('got to search')
                if(textInput.value === ''){
                    return 'empty search'
                }
                let searchResult =""
                const searchArr = search(textInput.value)
                if(searchArr.length === 0){
                    return 'no emoji were found'
                }
                for( let s of searchArr){
                    searchResult += s.symbol
                }
                return searchResult
            }
            else if(option === 'translate'){
                console.log('got to translate', translate(textInput.value))
                return translate(textInput.value)
            }
            else if(option === 'madlib'){
                console.log('got to madlib')
                return madlib(textInput.value)
            }
            else if(option === 'random'){
                console.log('got to random')
                return getOption(randomElement(optionArr))
            }
        }
    
        for(let option of optionInputs){
            
            if(option.checked){
                console.log(option.value)
                returnValue = getOption(option.value)
                // console.log(returnValue)
            }
        }
        result.innerText = returnValue
    }
})