// authorization logic: check on every page if user authorized, if it's true - do nothing, else redirect user to login page
import { reactive } from 'vue';

async function useAuth(data) {
    const userData = reactive({...data});
};