#!/usr/bin/env node
/* eslint-disable function-paren-newline */
import sequenceSum from '..';

console.log(
  sequenceSum(
    Number(process.argv[process.argv.length - 2]),
    Number(process.argv[process.argv.length - 1]),
  ),
);
