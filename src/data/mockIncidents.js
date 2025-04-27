export const mockIncidents = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in content recommendations, creating an echo chamber effect and amplifying societal bias. The issue affected approximately 15% of users in the test deployment.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "Large Language Model provided incorrect safety procedure information in response to an emergency situation query. This could have led to dangerous actions if followed in a real emergency scenario. Immediate patch has been deployed.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata in debug mode. No personal information was compromised, but system logs were briefly visible to a limited number of users.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  },
  {
    id: 4,
    title: "Authorization Bypass in Admin Panel",
    description: "A vulnerability allowed users with basic access to view certain administrative controls. No evidence of exploitation was found, but the potential impact would have been significant.",
    severity: "High",
    reported_at: "2025-03-10T16:45:00Z"
  },
  {
    id: 5,
    title: "Facial Recognition False Positives",
    description: "System exhibited a 12% higher false positive rate for certain demographic groups, potentially leading to misidentification. Further calibration and diverse training data implementation in progress.",
    severity: "Medium",
    reported_at: "2025-04-05T11:20:00Z"
  }
];