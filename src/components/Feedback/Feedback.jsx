export default function Feedback({ feedbackOptions, total, positive }) {
  return (
    <ul>
      <li>Good: {feedbackOptions.good} </li>
      <li>Neutral: {feedbackOptions.neutral}</li>
      <li>Bad: {feedbackOptions.bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positive}%</li>
    </ul>
  );
}
