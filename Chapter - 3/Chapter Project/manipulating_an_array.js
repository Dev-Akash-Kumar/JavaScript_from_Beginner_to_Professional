const theList = ['Laurence', 'Skevis', true, 35, null, undefined, {test:'one', score:55}, ['one', 'two']];
theList.shift();
theList.pop();
theList.unshift('FIRST');
theList[3] = 'hello World';
theList[2] = 'MIDDLE';
theList.push('LAST');
console.log(theList);   