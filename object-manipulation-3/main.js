console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  {
    name: 'Danny',
    hand: []
  },
  {
    name: 'Maddy',
    hand: []
  },
  {
    name: 'Derek',
    hand: []
  },
  {
    name: 'Charlie',
    hand: []
  }
];

const deck = [
  {
    rank: 'Ace',
    suit: 'diamonds'
  },
  {
    rank: 'King',
    suit: 'diamonds'
  },
  {
    rank: 'Queen',
    suit: 'diamonds'
  },
  {
    rank: 'Jack',
    suit: 'diamonds'
  },
  {
    rank: 10,
    suit: 'diamonds'
  },
  {
    rank: 9,
    suit: 'diamonds'
  },
  {
    rank: 8,
    suit: 'diamonds'
  },
  {
    rank: 7,
    suit: 'diamonds'
  },
  {
    rank: 6,
    suit: 'diamonds'
  },
  {
    rank: 5,
    suit: 'diamonds'
  },
  {
    rank: 4,
    suit: 'diamonds'
  },
  {
    rank: 3,
    suit: 'diamonds'
  },
  {
    rank: 2,
    suit: 'diamonds'
  },
  {
    rank: 'Ace',
    suit: 'hearts'
  },
  {
    rank: 'King',
    suit: 'hearts'
  },
  {
    rank: 'Queen',
    suit: 'hearts'
  },
  {
    rank: 'Jack',
    suit: 'hearts'
  },
  {
    rank: 10,
    suit: 'hearts'
  },
  {
    rank: 9,
    suit: 'hearts'
  },
  {
    rank: 8,
    suit: 'hearts'
  },
  {
    rank: 7,
    suit: 'hearts'
  },
  {
    rank: 6,
    suit: 'hearts'
  },
  {
    rank: 5,
    suit: 'hearts'
  },
  {
    rank: 4,
    suit: 'hearts'
  },
  {
    rank: 3,
    suit: 'hearts'
  },
  {
    rank: 2,
    suit: 'hearts'
  },
  {
    rank: 'Ace',
    suit: 'spades'
  },
  {
    rank: 'King',
    suit: 'spades'
  },
  {
    rank: 'Queen',
    suit: 'spades'
  },
  {
    rank: 'Jack',
    suit: 'spades'
  },
  {
    rank: 10,
    suit: 'spades'
  },
  {
    rank: 9,
    suit: 'spades'
  },
  {
    rank: 8,
    suit: 'spades'
  },
  {
    rank: 7,
    suit: 'spades'
  },
  {
    rank: 6,
    suit: 'spades'
  },
  {
    rank: 5,
    suit: 'spades'
  },
  {
    rank: 4,
    suit: 'spades'
  },
  {
    rank: 3,
    suit: 'spades'
  },
  {
    rank: 2,
    suit: 'spades'
  },
  {
    rank: 'Ace',
    suit: 'clubs'
  },
  {
    rank: 'King',
    suit: 'clubs'
  },
  {
    rank: 'Queen',
    suit: 'clubs'
  },
  {
    rank: 'Jack',
    suit: 'clubs'
  },
  {
    rank: 10,
    suit: 'clubs'
  },
  {
    rank: 9,
    suit: 'clubs'
  },
  {
    rank: 8,
    suit: 'clubs'
  },
  {
    rank: 7,
    suit: 'clubs'
  },
  {
    rank: 6,
    suit: 'clubs'
  },
  {
    rank: 5,
    suit: 'clubs'
  },
  {
    rank: 4,
    suit: 'clubs'
  },
  {
    rank: 3,
    suit: 'clubs'
  },
  {
    rank: 2,
    suit: 'clubs'
  }
];

// Shuffle Deck
for (let i = 0; i < 100; i++) {
  const index1 = Math.floor(Math.random() * (deck.length - 1));
  const index2 = Math.floor(Math.random() * (deck.length - 1));
  const value1 = deck[index1];
  const value2 = deck[index2];

  deck[index1] = value2;
  deck[index2] = value1;
}

// Deal Cards
for (let i = 1; i <= 2; i++) {
  players.forEach(player => {
    player.hand.push(deck.shift());
  });
}

// Find Winner
let winner = '';
let score = 0;

for (let i = 0; i < players.length; i++) {
  let playerScore = 0;

  players[i].hand.forEach(card => {
    if (card.rank === 'Ace') {
      playerScore += 11;
    } else if (typeof card.rank === typeof string) {
      playerScore += 10;
    } else {
      playerScore += card.rank;
    }
  });

  if (playerScore > score) {
    score = playerScore;
    winner = players[i].name;
  }
}

// Message
console.log(`${winner} wins with ${score} points!`);
