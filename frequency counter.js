console.log('DSA')

const valid = (string1, string2) => {
  if (string1.length != string2.length) return false

  const freq1 = {}
  const freq2 = {}
  for (let i in string1) {
    freq1[string1[i]] = (freq1[string1[i]] || 0) + 1
  }
  for (let i in string2) {
    freq2[string2[i]] = (freq2[string2[i]] || 0) + 1
  }

  for (key in freq1) {
    if (key in freq2) {
      if (freq1[key] !== freq2[key]) {
        console.log(freq1[key], freq2[key])
        return false
      }
    } else return false
  }
  return true
}

console.log(valid('qwerty', 'qwytre'))
console.log(valid('umehs', 'umesh'))
