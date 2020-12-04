const checkValidity = (value, rules) => {
        let isValid = true 
        if(rules.required){
            isValid = value.trim() !== "" && isValid
        }
        if(rules.minLength){
            isValid = value.length >= rules.minLength && value.length <= rules.maxLength && isValid
        }

        if(rules.regex){
           isValid = rules.regex.test(value)  && isValid
        }
        return isValid
    
}
export default checkValidity