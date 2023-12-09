import { client_id } from "./constants";

const wsDOMElem = document.querySelector("#ws-id");

if (wsDOMElem) {
  wsDOMElem.textContent = client_id.toString();
}

var ws = new WebSocket(`ws://192.168.0.111:8000/ws/${client_id}`);

ws.onmessage = function (event) {
  var messages = document.getElementById("messages");
  var message = document.createElement("li");
  var content = document.createTextNode(event.data);
  message.appendChild(content);
  messages?.appendChild(message);
};

export function sendMessage(event: React.FormEvent<HTMLFormElement>) {
  const input = document.getElementById("messageText");
  if (input) {
    ws.send((input as HTMLInputElement).value);
    (input as HTMLInputElement).value = "";
    event.preventDefault();
  }
}
