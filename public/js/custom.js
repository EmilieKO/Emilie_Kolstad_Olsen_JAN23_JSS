function open_new_window(location) {
  window.location.href = location;
}

window.onload = () => {
  const currentUrl = window.location.href
  if (currentUrl.includes('memes')) {
    getMemes()
  }
}

async function getMemes() {
  const response = await fetch('https://api.imgflip.com/get_memes')
  const data = await response.json()
  const memeData = data.data.memes.map(meme => new Meme(
    meme.name,
    meme.url,
    )) 
    console.log(memeData)
  
  const table = document.getElementById('table')
  data.data.memes.forEach(meme => { 
    const row = table.insertRow();
    const pictureCell = row.insertCell();
    const nameCell = row.insertCell();
    const optionCell = row.insertCell();

    const image = document.createElement('img');
    image.src = meme.url;
    image.alt = meme.name
    image.style.width = '20%'

    pictureCell.appendChild(image);
    nameCell.innerHTML = meme.name;
    optionCell.innerHTML = "<button onclick=\"window.location.href='/memedetails'\">Details</button>"
  })
}

class Meme {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}


function memeDetails() { 
  window.location.href = '/memedetails'
  
}