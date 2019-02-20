import store from '../store';
import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH } from '../constants/gameConstants';

export const getNewPosition = (oldPos, direction) => {
  switch (direction) {
    case 'Left':
      return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
    case 'Right':
      return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
    case 'Up':
      return [oldPos[0], oldPos[1] - SPRITE_SIZE];
    case 'Down':
      return [oldPos[0], oldPos[1] + SPRITE_SIZE];
    default:
      return oldPos;
  }
};

export const getNewPositionEnemy = (oldPos, direction) => {
  switch (direction) {
    case 'Right':
      return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
    case 'Left':
      return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
    case 'Up':
      return [oldPos[0], oldPos[1] - SPRITE_SIZE];
    case 'Down':
      return [oldPos[0], oldPos[1] + SPRITE_SIZE];
    default:
      return oldPos;
  }
};

export const getNewPositionEnemy2 = (oldPos, direction) => {
  switch (direction) {
    case 'Left':
      return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
    case 'Right':
      return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
    case 'Down':
      return [oldPos[0], oldPos[1] - SPRITE_SIZE];
    case 'Up':
      return [oldPos[0], oldPos[1] + SPRITE_SIZE];
    default:
      return oldPos;
  }
};

export const getSpriteLocation = (direction, walkIndex) => {
  switch (direction) {
    case 'Down':
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`;
    case 'Right':
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 1}px`;
    case 'Left':
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 2}px`;
    case 'Up':
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 3}px`;
    default:
      return `0px 0px`;
  }
};

export const getSpriteLocationEnemy = (direction, walkIndex) => {
  switch (direction) {
    case 'Up':
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`;
    case 'Left':
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 1}px`;
    case 'Down':
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 2}px`;
    case 'Right':
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 3}px`;
    default:
      return `0px 0px`;
  }
};

export const getSpriteLocationEnemy2 = (direction, walkIndex) => {
  switch (direction) {
    case 'Down':
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`;
    case 'Right':
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 1}px`;
    case 'Up':
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 2}px`;
    case 'Left':
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 3}px`;
    default:
      return `0px 0px`;
  }
};

export const getWalkIndex = () => {
  const walkIndex = store.getState().player.walkIndex;
  return walkIndex >= 7 ? 0 : walkIndex + 1;
};

export const observeBoundaries = (oldPos, newPos) => {
  return (
    newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE && (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
  );
};

export const observeImpassable = (oldPos, newPos) => {
  const tiles = store.getState().map.tiles;
  const y = newPos[1] / SPRITE_SIZE;
  const x = newPos[0] / SPRITE_SIZE;
  const nextTile = tiles[y][x];
  return nextTile < 5;
};
