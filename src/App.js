import React, { useState, useEffect } from "react";
import "./App.css";
import { Slot } from "./Slot";
import { checkBoard, scoreBoard } from "./Utils";
import { Circle } from "./Circle";
import { Button } from "./Button";

function App() {
  function generateEmptyBoard() {
    let tmpBoard = [];
    for (let i = 0; i < 6; i++) {
      tmpBoard.push([]);
      for (let j = 0; j < 7; j++) {
        tmpBoard[i].push(0);
      }
    }
    return tmpBoard;
  }

  function initialize() {
    const tmpBoard = generateEmptyBoard();
    setBoard(tmpBoard);
    setTurn(1)
    setRecentMove(null)
  }

  const [turn, setTurn] = useState(1);
  const [board, setBoard] = useState([]);
  const [recentMove, setRecentMove] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const [difficulty,setDifficulty] = useState(5)

  useEffect(() => initialize(), []);

  useEffect(() => {
    if (waiting && board) {
      const copy = deepCopy(board);
      if (!checkBoard(board)) {
        const c = nextMove(board, 2);
        setBoard(executeMove(c, copy, 2));
        setTurn(1);
        setRecentMove([getRow(c, board), c]);
      }
      setWaiting(false);
    }
  }, [waiting]);

  const styles = {
    boardStyle: {
      display: "flex",
      flexWrap: "wrap",
      width:648,
    },
  };

  function executeMove(column, prevBoard, testTurn) {
    const row = getRow(column, prevBoard);
    if (!isNaN(row)) {
      let tempBoard = deepCopy(prevBoard);
      tempBoard[getRow(column, prevBoard)][column] = testTurn;
      return tempBoard;
    }
  }

  function getRow(column, prevBoard) {
    for (let rowToPlace = prevBoard.length - 1; rowToPlace >= 0; rowToPlace--) {
      if (prevBoard[rowToPlace][column] === 0) {
        console.log(rowToPlace, column);
        return rowToPlace;
      }
    }
  }

  function deepCopy(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  function minimax(givenSituation, depth, player, a, b) {
    if (givenSituation) {
      const boardScore = scoreBoard(givenSituation);
      if (Math.abs(boardScore) < 10000) {
        if (depth === 0) {
          return { score: scoreBoard(givenSituation), move: null };
        }
        let endScore = 0;
        if (player === 2) {
          endScore = b;
          let moveDone = 0;
          for (let move = 0; move < 7; move++) {
            const executedMove = executeMove(move, givenSituation, 2);
            if (executedMove) {
              console.log("i did run");
              let m = minimax(executedMove, depth - 1, 1, a, b).score;
              if (m < endScore) {
                endScore = m;
                b = endScore;
                moveDone = move;
              }
              if (a >= b) {
                return { score: b, move: move };
              }
            }
          }
          return { score: endScore, move: moveDone };
        }
        if (player === 1) {
          endScore = a;
          let move = 0;
          let moveDone = 0;
          for (move = 0; move < 7; move++) {
            const executedMove = executeMove(move, givenSituation, player);
            if (executedMove) {
              let mObj = minimax(
                executedMove,
                depth - 1,
                (player % 2) + 1,
                a,
                b
              );
              if (!mObj) {
                console.log();
              }
              const m = mObj.score;
              if (m > endScore) {
                endScore = m;
                a = endScore;
                moveDone = move;
              }
              if (a >= b) {
                return { score: a, move: move };
              }
            }
          }
          return { score: endScore, move: moveDone };
        }
      } else {
        if (boardScore === 10000) {
          return { score: 10000, move: null };
        }
        if (boardScore === -10000) {
          return { score: -10000, move: null };
        }
      }
    }
  }

  function nextMove(currentBoard, player) {
    return minimax(currentBoard, 5, player, -10000, 10000).move;
  }

  //console.log(minimax([[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[2,0,1,1,0,0,0]],6,2,-10000,10000))
  const won = board ? checkBoard(board) : 0;

  return (
    <div>
      <Button
        title={"Restart"}
        onClick={() => {
          initialize();
        }}
      />

      {won ? (
        <div> player {won === 1 ? "red" : "black"} has won the game </div>
      ) : null}
      <div>
        <Circle value={turn} /> 's turn
      </div>
      <div style={styles.boardStyle}>
        {board.map((row, rowIndex) =>
          row.map((currentPiece, index) => (
            <Slot
              value={currentPiece}
              onClick={() => {
                for (
                  let rowToPlace = board.length - 1;
                  rowToPlace >= 0;
                  rowToPlace--
                ) {
                  if (board[rowToPlace][index] === 0 && !won) {
                    let tempBoard = deepCopy(board);
                    tempBoard[rowToPlace][index] = turn;
                    setBoard(tempBoard);
                    setTurn(turn === 1 ? 2 : 1);
                    setRecentMove([rowToPlace, index]);
                    setWaiting(true);
                    return;
                  }
                }
              }}
              selected={
                recentMove &&
                recentMove[0] === rowIndex &&
                recentMove[1] === index
              }
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
