const templates = {
  0: 'QWERTYUIOPASDFGHJKLZXCVBNM',
  1: 'qwertyuiopasdfghjklzxcvbnm',
  2: '1234567890',
  3: '!@#$%^&*()_+=-\|?><',
}

const generateRandomNumber = (min: number = 0, max: number = 10): number => {
  return Math.floor(Math.random() * (max - min) + min);
}

const generateRandomString = (length: number = 5): string => {
  let result: string = ''
  for (let i = 0; i < length; i++) {
    const templateNumber = i < 4 ? i : generateRandomNumber(0, 4)

    result += templates[templateNumber].charAt(generateRandomNumber(0, templates[templateNumber].length - 1))
  }

  return result
}

export default generateRandomString