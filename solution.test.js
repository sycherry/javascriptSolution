const solution = require("./solution");


const scores = [
  { "phoneme": "/ð/", "score": 100 },
  { "phoneme": "/ə/", "score": 40 },
  { "phoneme": "/n/", "score": 87 },
  { "phoneme": "/ɛ/", "score": 99 },
  { "phoneme": "/t/", "score": 37 }
]

const expectedResults = {
  1: {
      'max sequence score': 100,
      'sequence': ['/ð/']
  },
  2: {
      'max sequence score': 87,
      'sequence': ['/n/', '/ɛ/']
  },
  3: {
      'max sequence score': 40,
      'sequence': ['/ð/', '/ə/', '/n/']
  },
  4: {
      'max sequence score': 40,
      'sequence': ['/ð/', '/ə/', '/n/', '/ɛ/']
  },
  5: {
      'max sequence score': 37,
      'sequence': ['/ð/', '/ə/', '/n/', '/ɛ/', '/t/']
  },
}

describe('max sequence score test', () => {
  it('should return X=100 for N=1', () => {
    const expectedMaxSeqScore = expectedResults['1']['max sequence score'];
    const expectedSequence = expectedResults['1']['sequence'];
    const results = solution(scores)
    expect(results['1']['max sequence score']).toBe(expectedMaxSeqScore);
    expect(results['1']['sequence']).toStrictEqual(expectedSequence);
  });

  it('should return X=87 for N=2', () => {
    const expectedMaxSeqScore = expectedResults['2']['max sequence score'];
    const expectedSequence = expectedResults['2']['sequence'];
    const results = solution(scores)
    expect(results['2']['max sequence score']).toBe(expectedMaxSeqScore);
    expect(results['2']['sequence']).toStrictEqual(expectedSequence);
  });

  it('should return X=40 for N=3', () => {
    const expectedMaxSeqScore = expectedResults['3']['max sequence score'];
    const expectedSequence = expectedResults['3']['sequence'];
    const results = solution(scores)
    expect(results['3']['max sequence score']).toBe(expectedMaxSeqScore);
    expect(results['3']['sequence']).toStrictEqual(expectedSequence);
  });

  it('should return X=40 for N=4', () => {
    const expectedMaxSeqScore = expectedResults['4']['max sequence score'];
    const expectedSequence = expectedResults['4']['sequence'];
    const results = solution(scores)
    expect(results['4']['max sequence score']).toBe(expectedMaxSeqScore);
    expect(results['4']['sequence']).toStrictEqual(expectedSequence);
  });

  it('should return X=37 for N=5', () => {
    const expectedMaxSeqScore = expectedResults['5']['max sequence score'];
    const expectedSequence = expectedResults['5']['sequence'];
    const results = solution(scores)
    expect(results['5']['max sequence score']).toBe(expectedMaxSeqScore);
    expect(results['5']['sequence']).toStrictEqual(expectedSequence);
  });
});



