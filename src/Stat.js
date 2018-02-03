class Stat {
  constructor(content) {
    this.stat = toCamel(content.key);
    this.value = content.value;
  }
}

const toCamel = str => str.split(' ').map((w, i) => i === 0
  ? w.toLowerCase()
  : w[0].toUpperCase() + w.slice(1).toLowerCase()).join('').replace(/[^A-Za-z\d]/g, '');

module.exports = Stat;
