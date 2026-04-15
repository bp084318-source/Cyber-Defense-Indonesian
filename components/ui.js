export function showResult(score) {
  let status = "AMAN";

  if (score >= 70) status = "BAHAYA";
  else if (score >= 40) status = "WASPADA";

  document.getElementById("status").innerText = status;
  document.getElementById("score").innerText = "Risk: " + score;
}
