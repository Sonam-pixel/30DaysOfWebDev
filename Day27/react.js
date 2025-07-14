let currentContact = null;

const chatData = {
  Alice: [
    { sender: "Alice", text: "Hi there!" },
    { sender: "You", text: "Hey Alice!" }
  ],
  Bob: [
    { sender: "Bob", text: "Hey! Long time no see!" },
    { sender: "You", text: "Yeah, how are you?" }
  ],
  Charlie: []
};

function selectContact(name) {
  currentContact = name;
  document.getElementById("chat-header").textContent = name;
  document.getElementById("messageInput").disabled = false;
  document.getElementById("sendBtn").disabled = false;
  renderChat();
}

function renderChat() {
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML = "";

  if (!currentContact || !chatData[currentContact]) return;

  chatData[currentContact].forEach(msg => {
    const msgDiv = document.createElement("div");
    msgDiv.className = `message ${msg.sender === "You" ? "sent" : "received"}`;
    msgDiv.textContent = msg.text;
    chatBox.appendChild(msgDiv);
  });

  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("messageInput");
  const message = input.value.trim();
  if (!message || !currentContact) return;

  chatData[currentContact].push({ sender: "You", text: message });
  input.value = "";
  renderChat();
}