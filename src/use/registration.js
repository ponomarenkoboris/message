// (registration: create new user in database and add this data in sessionStorage or use vuex)
// add validation
import { isValid } from '@/scripts/validation';

export function useRegistration(data) {
    const checkFields = isValid('registration', Object.values(data));

    if (!checkFields) return // add invoke error message

    // here will be send data to server
};