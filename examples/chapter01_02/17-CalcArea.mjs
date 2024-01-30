// @ts-check

/**
 * Calculates the area of a circle
 * @param {number} r (radius of the circle)
 * @returns  {number}
 */
const circleArea = (r) => 3.14 * r ** 2;

const squareArea = (s) => s * s;

// export { circleArea, squareArea }; // {1}
export { circleArea as circle, squareArea as square };
