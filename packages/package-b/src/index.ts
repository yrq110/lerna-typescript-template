import { add } from '@monorepo/package-a'

const multiply = (a: number, b: number) => {
  let sum = 0
  let i = 0
  while (i < b) {
    sum = add(sum, a)
    i += 1
  }
  return sum
}

export { multiply }
