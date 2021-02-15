// validation
export function isValid(type = '', userInput) {

    if (type === 'registration') {
        let check = Object.values(userInput).reduce((prev, curr) => {
            if (!prev) return false
            if (!curr.trim() || curr.match('[<>{}]') || curr.length <= 1) return false;
            return true;
        }, userInput[0]);
        return check === true ? true : false;
    }

    // if (type === 'login') {

    // }

    if (type === 'message') {
        const string = userInput.toString();
        if (string.trim() && !string.match('[<>{}]')) return true;
        return false;
    }

    
};