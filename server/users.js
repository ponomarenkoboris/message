const { moduleNameMapper } = require("@/jest.config");

class Users {
    constructor() {
        this.users = [];
    }
    add(user) {
        this.users.push(user)
    }
    get(id) {
        return this.users.find(item => item.id === id);
    }
    remove(id) {
        const user = this.get(id);
        if (user) {
            this.users = this.users.filter(item => item.id !== id);
        }
        return user
    }
    getByRoom(room) {
        return this.users.filter(item => item.room === room);
    }
};

module.exports = function() {
    return new Users();
};