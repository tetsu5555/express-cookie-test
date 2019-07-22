module.exports = class User {
    constructor(users = []) {
        this.users = users
    }

    first(key, target) {
        return this.users.filter(user => {
            // TODO: keyとtargetの値の検証
            return user[key] = target
        })[0]
    }

    find(key, target) {
        return this.users.filter(user => {
            // TODO: keyとtargetの値の検証
            return user[key] = target
        })
    }

    all() {
        return this.users
    }
}