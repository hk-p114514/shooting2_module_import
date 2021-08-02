"use strict";

const elementBGcolor = (space: HTMLElement | null, color: string) => {
  if (space) {
    space.style.backgroundColor = color;
  }
};

export { elementBGcolor };
