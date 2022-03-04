const btn = document.querySelector(".btn");
const value1 = document.querySelector(".value1");
const value2 = document.querySelector(".value2");
const result = document.querySelector(".result");
let photos = "";
// result.value = JSON.parse(localStorage.getItem("photos"));
// console.log("result: ", result);
// console.log("result.value: ", result.value);
// result.innerHTML = JSON.parse(localStorage.getItem("photos"));
result.innerHTML = localStorage.getItem("photos")
  ? JSON.parse(localStorage.getItem("photos"))
  : null;

btn.addEventListener("click", () => {
  
  if (
    (value1.value < 1 || value1.value > 10) &&
    (value2.value < 1 || value2.value > 10)
  ) {
    result.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
  } else if (value1.value < 1 || value1.value > 10) {
    result.innerHTML = "Номер страницы вне диапазона от 1 до 10";
  } else if (value2.value < 1 || value2.value > 10) {
    result.innerHTML = "Лимит вне диапазона от 1 до 10";
  } else {
    localStorage.clear();
	fetch(
      `https://picsum.photos/v2/list?page=${value1.value}&limit=${value2.value}`
    )
      .then((response) => response.json())
      .then((data) => {
        photos = "";
        for (let item of data) {
          const photo = `
            <div class="photo">
              <img class="photo-image" src="${item.download_url}"/>
              <p>${item.author}</p>
            </div>
          `;
          photos = photos + photo;
        }
        result.innerHTML = photos;
        // console.log("key0: ", localStorage.key(0));
        // console.log("key1: ", localStorage.key(1));
        // console.log("photos: ", JSON.stringify(photos));
        localStorage.setItem("photos", JSON.stringify(photos));
      })
      .catch(() => {
        console.log("error");
      });
  }
});
