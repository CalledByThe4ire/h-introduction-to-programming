#!/usr/bin/env node
/* eslint-disable function-paren-newline */
import smallestDivisor from '..';

console.log(
  smallestDivisor(
    Number(process.argv[process.argv.length - 1]),
  ),
);
