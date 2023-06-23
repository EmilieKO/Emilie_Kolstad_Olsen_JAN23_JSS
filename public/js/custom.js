
function open_new_window(location) {
  window.location.href = location;
}


function post(button) {
  var selectedRow = $(button).closest('tr');
  selectedRow.toggleClass('selected');

  let selectedContent = selectedRow.html();
  localStorage.setItem('selectedContent', selectedContent);

  const memeTransfer = {
    id: selectedRow.data('id'),
    width: selectedRow.data('width'),
    height: selectedRow.data('height'),
    url: selectedRow.find('img').attr('src'),
    name: selectedRow.find('img').attr('alt')
  };

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
  window.open('/memedetails');
}

$(document).ready(function () { 
  let selectedContent = localStorage.getItem('selectedContent');

  if (selectedContent !== null) {
    $('tr').each(function () {
      if ($(this).html() === selectedContent) {
        $(this).addClass('selected')
      }
    });
  }
})


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

