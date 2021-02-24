export default function({ store, redirect }) {
    if (!store.getters.token) redirect('/login?message=login');    
}