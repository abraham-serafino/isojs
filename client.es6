const socket = window.io();

socket.on('reconnect', () => {
  window.location.reload();
});
