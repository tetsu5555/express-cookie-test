module.exports = class Shop {
    constructor(shops = []) {
        this.shops = shops
    }

    first(key, target) {
        return this.shops.filter(shop => {
            // TODO: keyとtargetの値の検証
            return shop[key] = target
        })[0]
    }

    find(key, target) {
        return this.shops.filter(shop => {
            // TODO: keyとtargetの値の検証
            return shop[key] = target
        })
    }

    all() {
        return this.shops
    }
}