const valid = {
    name: false,
    healthScore: false,
    summary: false,
}

export const onChangeRecipe = (e, set)=>{
    const prop = e.target.id;
    const value = e.target.value;
    const buttonSend = document.querySelector('.button');

    validationForm(prop, value, buttonSend)
    
    set( r => (
        {
            ...r,
            [prop]: value
        }
    ))
    if(valid.name && valid.summary && valid.healthScore){
        buttonSend.removeAttribute('hidden')
    }
}

const validationForm = (prop, value, btnSend)=>{
    
    const nameRegex = /^[a-z0-9_-\s]{3,90}$/ig
    const spanValid = document.querySelector(`.valid-${prop}`)

    if(prop === 'name'){
        // const spanValid = document.querySelector('.valid-name');

        if(!nameRegex.test(value)){
            spanValid.style.color = 'red';
            spanValid.style.display = 'block';
            btnSend.setAttribute('hidden', true);
            valid.name = false
        }
        else{
            spanValid.style.display = 'none';
            valid.name = true
        } 
    } else if(prop === 'healthScore'){
        const {min, max} = {min: 0, max: 100};

        if(value < min || value > max){
            spanValid.style.color = 'red';
            spanValid.style.display = 'block';
            btnSend.setAttribute('hidden', true);
            valid.healthScore = false
        }else{
            spanValid.style.display = 'none';
            valid.healthScore = true
        }
    } else if(prop === 'summary'){
        if(!value){
            spanValid.style.color = 'red';
            spanValid.style.display = 'block';
            btnSend.setAttribute('hidden', 'true');
            valid.summary = false
        }else{
            spanValid.style.display = 'none';
            valid.summary = true
        }
    }
}