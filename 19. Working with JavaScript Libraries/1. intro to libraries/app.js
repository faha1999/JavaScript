const customers = ['John', 'Dou', 'Anna'];

const activeCustomers = ['John', 'Dou'];

const inactiveCustomers = _.difference(customers, activeCustomers);

console.log(inactiveCustomers);
