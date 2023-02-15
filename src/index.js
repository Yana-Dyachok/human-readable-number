module.exports = function toReadable (number) {
  const numToTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const tensNumb = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let decimal = number % 10
  if (number < 20) return numToTwenty[number]
  if (number < 100)return decimal!==0?`${tensNumb[Math.floor(number / 10)]}-${numToTwenty[decimal]}`:`${tensNumb[Math.floor(number / 10)]}`
  if (number < 1000) return number % 100 === 0 ?`${numToTwenty[Math.floor(number / 100)]} hundred`:`${numToTwenty[Math.floor(number / 100)]} hundred ${toReadable(number % 100)}`  
}
