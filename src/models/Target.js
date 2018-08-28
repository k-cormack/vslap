
export default class Target {
  constructor(data) {
    this.health = data.health || 0
    this.name = data.name || ''
    this.attacks = data.attacks || 0
    this.items = data.items
  }

  attack(type) {
    if (this.attacks[type]) {
      this.health -= this.attacks[type]
    }
  }

}