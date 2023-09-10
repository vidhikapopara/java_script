const direction = {
  0: [4, 2],
  1: [1, 3],
  2: [4, 3],
  3: [2, 3],
  4: [1, 2],
  5: [1, 4],
};

const rows = 4;
const column = 4;

function validInput(input, lastExit) {
  return (
    (input === 4 && lastExit === 2) ||
    (input === 1 && lastExit === 3) ||
    (input === 2 && lastExit === 4) ||
    (input === 3 && lastExit === 1)
  );
}

// Get
function trafficMap(matrix) {
  const lastRow = rows - 1;
  const lastCol = column - 1;
  const first = matrix[0][0];
  const last = matrix[lastRow][lastCol];
  //   const max = rows * column;
  //   let count = 0;
  //   let hasNextMove = true;

  if ((first != 0 && first != 2) || (last != 0 && last != 4)) {
    return false;
  }

  let x = 0;
  let y = 0;
  let moves = [];
  let lastMove = 2;
  while (true) {
    const value = matrix?.[x]?.[y];
    if (value === undefined) break;

    const [start, end] = direction[value];
    if (!validInput(start, lastMove)) break;

    moves.push(value);
    lastMove = end;

    if ([0, 3, 4].includes(end)) {
      x++;
    }
    if ([1, 2].includes(end)) {
      y++;
    }
    if ([5].includes(end)) {
      x--;
    }
  }
  console.log("Moves :", moves);
  return x === lastRow && y - 1 === lastCol && [0, 4].includes(moves.pop());
}

const matrix = [
  [0, 2, 0, 2],
  [0, 1, 0, 1],
  [0, 4, 2, 1],
  [0, 0, 4, 1],
];

console.log(trafficMap(matrix));
