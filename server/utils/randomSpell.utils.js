const spells = require("../data/spells.data.json");

const randomSpell = () => {
    const randomIndex = Math.floor(Math.random() * spells.length);
    return spells[randomIndex];
};

module.exports = randomSpell;
