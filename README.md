### solution.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два аргумента - количество нулей и количество единиц, и определяет сколько есть способов размещения этих нулей и единиц так, что бы не было двух нулей идущих подряд.

Например, определим все способы размещения двух нулей и двух единиц. Существует шесть возможных способов размещения: `0011`, `0101`, `0110`, `1001`, `1010`, `1100`. В трех случаях содержится два нуля, идущих подряд: `0011`, `1001` и `1100`. Вычитаем их из общего числа и получаем три возможных способа: `0101`, `0110` и `1010`. Ответ - `3`.

Примеры использования:

```
import withoutTwoZeros from './solution';

withoutTwoZeros(2, 2); // 3
withoutTwoZeros(1, 1); // 2
withoutTwoZeros(1, 3), // 4
withoutTwoZeros(2, 4); // 10
```
