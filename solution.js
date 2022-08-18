
function solution(scores) {
  let newScoreArray = {}
  let N = scores.length + 1

  for (let i = 1; i < N; i++) {
    // Split an array into N pieces based on consecutive phoneme sequences
    let splitArray
    splitArray = scores.reduce((prev, _, index) => {
      if (prev.length < N - i) {
        return [...prev, scores.slice(index, index + i)]
      } else {
        // Stop condition to avoid extra slicing of unpaired items
        return prev
      }
    }, [])
    
    // Create arrays with consecutive phoneme sequences of N length
    const groupArray = splitArray.map((item) => {
      const container = {}

      // Total score of continuous phoneme sequences of length N
      container["total scores"] = item.map(obj => obj.score).reduce((a, b) => a + b)

      // Minimum score of a continuous phoneme sequence of length N
      // TODO: confirm with Thuy - question text suggests we take the minimum score of 
      // the max sequence, the name suggests otherwise
      container["max sequence score"] = Math.min(...item.map(obj => obj.score))

      // Consecutive phoneme sequences
      container["sequence"] = item.map(obj => obj.phoneme)
      return container
    })

    // Find the consecutive phoneme sequences with the highest total score
    const maxSequenceScore = groupArray.reduce((a, b) => a['total scores'] > b['total scores'] ? a : b)
   
    // Delate total scores value
    delete maxSequenceScore['total scores'];
    newScoreArray[i] = maxSequenceScore
    console.log("test")
  }
  return newScoreArray
}
module.exports = solution;


