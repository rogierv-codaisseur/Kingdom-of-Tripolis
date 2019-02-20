import { isEqual } from 'lodash';
import store from '../store';
import { SPRITE_SIZE, MAP_HEIGHT, MAP_WIDTH } from '../constants/gameConstants';

export const getNewPosition = (oldPos, direction, enemyDirection = 0) => {
  if (enemyDirection === 1) {
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
  }

  if (enemyDirection === 2) {
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
  }

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

export const getSpriteLocation = (direction, walkIndex, enemyDirection = 0) => {
  if (enemyDirection === 1) {
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
  }

  if (enemyDirection === 2) {
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
  }

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

export const getWalkIndex = () => {
  const walkIndex = store.getState().player.walkIndex;
  return walkIndex >= 7 ? 0 : walkIndex + 1;
};

export const observeBoundaries = (oldPos, newPos) => {
  return (
    newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE && (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
  );
};

export const observeImpassable = (oldPos, newPos, enemy = false) => {
  const { player, _enemy, map } = store.getState();
  const y = newPos[1] / SPRITE_SIZE;
  const x = newPos[0] / SPRITE_SIZE;
  const nextTile = map.tiles[y][x];

  if (enemy) {
    if (
      isEqual(player.position, newPos) ||
      isEqual(player.position, newPos || isEqual(_enemy.position, newPos) || isEqual(_enemy.position, newPos))
    )
      return false;
  }

  return nextTile < 5;
};
