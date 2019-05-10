const Queue = require('./Queue');

function hotPotato(elementsList, num) {
  const queue = new Queue();
  const eliminated = [];

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated.push(queue.dequeue());
  }

  return {
    eliminated,
    winner: queue.dequeue()
  };
}

const names = ['Mary', 'Jane', 'Ruby', 'Sara', 'Amy', 'Matilda'];
const result = hotPotato(names, 9);

result.eliminated.forEach(name => {
  console.log(`${name} was eliminated from Hot Potato Game. `);
});

console.log(`The winner is: ${result.winner}`);