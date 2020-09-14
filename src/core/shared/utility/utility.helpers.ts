import { ftruncateSync } from 'fs';
import { TypePredicateBase } from 'typescript';

const typeCache: { [label: string]: boolean } = {};

type Predicate = (oldValues: Array<any>, newValues: Array<any>) => boolean;

/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels are unique.
 *
 * @params label
 */
export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique`);
  }
  typeCache[<string>label] = true;
  return <T>label;
}

/**
 * Runs through every condition, compares new and old values and returns true/false depends on condition state.
 * This is used to distinct if two observable values have changed.
 *
 * @params oldValues
 * @params newValues
 * @params conditions
 */
export function distinctChanges(oldValues: Array<any>, newValues: Array<any>, conditions: Predicate[]) {
  return !conditions.every(condition => condition(oldValues, newValues));
}

/**
 * Returns true if the given value is type of Object
 *
 * @params val
 */
export function isObject(value: any) {
  if (value == null) return false;
  return typeof value === 'function' || typeof value === 'object';
}
/**
 * Capitalizes the first character in given string
 *
 * @params s
 */
export function capitalize(s: string) {
  if (!s || typeof s !== 'string') {
    return s;
  }
  return `${s[0].toUpperCase()}${s.slice(1)}`;
}

/**
 * Uncapitalized the first character in given string
 *
 * @params s
 */
export function uncapitalized(s: string) {
  if (!s || typeof s !== 'string') {
    return s;
  } else {
    return s && s[0].toLowerCase() + s.slice(1);
  }
}

/**
 * Flattens multi dimensional object into one level deep
 *
 * @params obj
 * @params preservePath
 */
export function flattenObject(ob: any, preservePath: boolean = false): any {
  const toReturn: { [key: string]: any } = {};

  for (const i in ob) {
    if (!ob.hasOwnProperty(i)) {
      continue;
    }

    if (typeof ob[i] === 'object') {
      const flatObject = flattenObject(ob[i], preservePath);
      for (const x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) {
          continue;
        }

        const path = preservePath ? i + '.' + x : x;

        toReturn[path] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }

  return toReturn;
}

/**
 * Returns formatted date based on given culture
 *
 * @params dateString
 * @params culture
 */
export function localeDateString(dateString: string, culture: string = 'en-EN'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(culture);
}
