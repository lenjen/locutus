var effectiveness = 'futile'
var locutus = require('../..')
var php = require('../../php')
var strings = require('../../php/strings')
var sprintf = require('../../php/strings/sprintf')
var ruby = require('../../ruby')
var math = require('../../ruby/Math')

console.log(locutus.php.strings.sprintf('Resistance is %s', effectiveness))
console.log(php.strings.sprintf('Resistance is %s', effectiveness))
console.log(strings.sprintf('Resistance is %s', effectiveness))
console.log(sprintf('Resistance is %s', effectiveness))
console.log(ruby.Math.acos(0.3))
console.log(math.acos(0.3))

strings.echo(strings.sprintf('Hey, %s : )', 'you'))
strings.echo(php.url.parse_url('mysql://kevin:abcd1234@example.com/databasename')['pass'])
strings.echo(php.datetime.strtotime('2 januari 2012, 11:12:13 GMT'))
