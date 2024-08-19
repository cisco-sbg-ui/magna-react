export const getScoreClass = (score) => {
  if (score > 799) {
    return "score-critical";
  } else if (score > 599) {
    return "score-high";
  } else if (score > 399) {
    return "score-medium";
  } else {
    return "score-low";
  }
};
