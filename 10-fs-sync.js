const {readFileSync,writeFileSync} = require('fs');
console.log('start')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first,second)

writeFileSync('./content/result-sync.txt',
`Here is the result : ${first}, ${second}`,
{flag : 'a'} // exludes overwrite
)

console.log('done with task')
console.log('starting the next one')
