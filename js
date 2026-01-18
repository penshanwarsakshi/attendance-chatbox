const messages = document.getElementById("messages");
const userInput = document.getElementById("userInput");

let attendanceStatus = "Not marked";

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.innerText = text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

function botReply(input) {
  const text = input.toLowerCase();

  if (text === "present") {
    attendanceStatus = "Present ✅";
    return "Attendance marked as PRESENT.";
  }

  if (text === "absent") {
    attendanceStatus = "Absent ❌";
    return "Attendance marked as ABSENT.";
  }

  if (text === "status") {
    return `Your attendance status: ${attendanceStatus}`;
  }

  return "Please type: present, absent, or status.";
}

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    addMessage(botReply(text), "bot");
  }, 400);
}

userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});
