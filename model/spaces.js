module.exports = class Space {
    constructor(spaces = []) {
        this.spaces = spaces
    }

    first(key, target) {
        return this.spaces.filter(space => {
            // TODO: keyとtargetの値の検証
            return space[key] = target
        })[0]
    }

    find(key, target) {
        return this.spaces.filter(space => {
            // TODO: keyとtargetの値の検証
            return space[key] = target
        })
    }

    all() {
        return this.spaces
    }
}