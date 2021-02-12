// auth, login, and registration functions tests

import { useAuth } from '../src/use/auth.js';
import { useLogin } from '../src/use/login.js';
import { useRegistration } from '../src/use/registration.js';

// authorisation
test('test authorisation function: expected undefiend', () => {
    expect(useAuth()).toBe(undefined);
});

// login
it('test login async function: expected undefiend', async () => {
    const data = await useLogin();
    expect(data).toBe(undefined);
});

// registration
it('test registration async function: expected undefiend', async () => {
    const data = await useRegistration();
    expect(data).toBe(undefined);
});