import Chance from 'chance';

const chance = new Chance();
export default chance.first() + ' the ' + chance.animal();
