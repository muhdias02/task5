let data = []

function addData(event) {

  event.preventDefault()

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;

  if (title == "") {
    return alert('Harap mengisi judul terlebih dahulu.')
  } else if (content == "") {
    return alert('Harap mengisi konten anda.')
  } else if (image.length == 0) {
    return alert('Unggah gambar anda terlebih dahulu.')
  }

  let gambar = URL.createObjectURL(image[0])

  let blog = {
    title,
    content,
    gambar,
    postAt: new Date(),
    author: "@bang_zaid"
  }

  data.push(blog)
  console.log(data)
  renderBlog()
}

function renderBlog() {
  document.getElementById("contents").innerHTML = ``
  for (let index = 0; index < data.length; index++) {
    document.getElementById("contents").innerHTML += `<div class="blog-list-item">
    <div class="blog-image">
      <img src="${data[index].gambar}" alt="" />
    </div>
    <div class="blog-content">
      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Post Blog</button>
      </div>
      <h1>
        <a href="blog-detail.html" target="_blank">${data[index].title}</a>
      </h1>
      <div class="detail-blog-content">
      ${konversiWaktu(data[index].postAt)} | ${data[index].author}
      </div>
      <p>
      ${data[index].content}
      </p>
      <p style="text-align: right;">
        ${selisihWaktu(data[index].postAt)}
      </p>
    </div>
  </div>`
  }
}

function konversiWaktu(time) {
  let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"]

  // console.log("date", time.getDate())
  // console.log("month", time.getMonth())
  // console.log("full year", time.getFullYear())
  // console.log("hours", time.getHours())
  // console.log("minutes", time.getMinutes())

  let hours = time.getHours()
  let minutes = time.getMinutes()

  if (hours < 10) {
    hours = "0" + hours
  }

  if (minutes < 10) {
    minutes = "0" + minutes
  }

  return `${time.getDate()} ${monthName[time.getMonth()]} ${time.getFullYear()} ${hours}:${minutes} WIB`
}

function selisihWaktu(time) {
  let timeNow = new Date()
  let timePost = time

  let distance = timeNow - timePost
  console.log("jarak", distance)

  let miliseconds = 1000 // 1 seconds adalah 1000 miliseconds

  let distanceDay = Math.floor(distance / (miliseconds * 60 * 60 * 24))
  let distanceHours = Math.floor(distance / (miliseconds * 60 * 60))
  let distanceMinutes = Math.floor(distance / (miliseconds * 60))
  let distanceSecond = Math.floor(distance / miliseconds) // 1 seconds ago

  if (distanceDay > 0) {
    return `${distanceDay} day ago`
  } else if (distanceHours > 0) {
    return `${distanceHours} hours ago`
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} minutes ago`
  } else {
    return `${distanceSecond} seconds ago`
  }
}

setInterval(function () {
  renderBlog()
}, 1000)


