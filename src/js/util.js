export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0,
};

export function defaultEquals(a, b) {
  return a === b;
}

export function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export function defaultToString(item) {
  if (item === null) {
    return "NULL";
  }
  if (item === undefined) {
    return "UNDEFINED";
  }
  if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

export default {
  Compare,
};
