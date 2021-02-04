// authorization logic: check on every page if user authorized, if it's true - do nothing, else redirect user to login page

export function useAuth() {
    const nickname = sessionStorage.getItem('nickname');
    const token = sessionStorage.getItem('token');

    if (nickname && token) return true; 
};