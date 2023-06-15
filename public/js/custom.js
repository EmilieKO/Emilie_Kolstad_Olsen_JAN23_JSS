


function open_new_window(location) {
  window.location.href = location;
}

window.onload = () => {
  const currentUrl = window.location.href
}

// const body = {
//   userId: 1,
//   title: "Fix my bugs",
//   completed: false
// };
// $.post("https://jsonplaceholder.typicode.com/todos", body, (data, status) => {
//   console.log(data);
// });

function post(button) {
  window.open('/memedetails');

  $(button).closest('tr').toggleClass('selected');
}
function memeDetails() { 
  window.open.href = '/memedetails'
}