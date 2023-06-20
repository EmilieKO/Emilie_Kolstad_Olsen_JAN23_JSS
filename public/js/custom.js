


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
  var selectedRow = $(button).closest('tr');
  selectedRow.toggleClass('selected');
  const memeTransfer = {
    id: selectedRow.data('id'),
    width: selectedRow.data('width'),
    height: selectedRow.data('height'),
    url: selectedRow.find('img').attr('src'),
    name: selectedRow.find('img').attr('alt')
  };
  var queryString = `?id=${encodeURIComponent(memeTransfer.id)}&width=${encodeURIComponent(memeTransfer.width)}&height=${encodeURIComponent(memeTransfer.height)}`;

  $.ajax({
    type: "POST",
    url: "/memedetails",
    data: {
      id: memeTransfer.id,
      width: memeTransfer.width,
      height: memeTransfer.height,
      url: memeTransfer.url,
      name: memeTransfer.name
    },
    success: function(result) {
      console.log(result);
    },
    dataType: "json"
  });

  console.log(selectedRow.html());
  console.log(memeTransfer);
  window.open('/memedetails' + queryString);
}


function memeDetails() { 
  window.open.href = '/memedetails'
}

function memeSearch() {
  var td, i, txtValue;
  let input = document.getElementById("search");
  let filter = input.value.toUpperCase();
  let table = document.getElementById("memeTable");
  let tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

