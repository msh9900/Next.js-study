import { buildFeedbackPath, extractFeedback } from ".";

export default function handler(req, res) {
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feebackData = extractFeedback(filePath);
  const selectedFeedback = feebackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
}
