// Bước 1: Lấy ra phần tử của các ô input
const userNameInput = document.querySelector("#useName");
const dateOfBirthInput = document.querySelector("#dateOfBirth");
const countryInput = document.querySelector("#country");
const btnSubmit = document.querySelector("#btnSubmit");
const form = document.querySelector("#form");
const genders = document.querySelectorAll("input[type= radio]");

// BƯớc 2: Từ phần tử, chúng ta lấy  ra giá trị của các ô

// Lắng nghe sự kiện onlick vào button
// Cách 1:
// btnSubmit.click((event) => {
//   // Ngăn chặn sự kiện mặc định của form
//   event.preventDefault();

//   // Form có sự kiện mặc định là load lại trang
//   console.log("clicked");
// });

// Cách 2:
form.addEventListener("submit", (event) => {
  // Ngăn chặn sự kiện mặc định của form
  event.preventDefault();

  // Lấy dữ liệu từ localStorage
  const usersLocal = JSON.parse(localStorage.getItem("users")) || [];

  // Tạo biến lưu trữ giá trị cho radio

  let gender = "";

  for (let i = 0; i < genders.length; i++) {
    if (genders[i].checked) {
      gender = genders[i].value;
    }
  }

  const userNameValue = userNameInput.value;
  const dateOfBirthValue = dateOfBirthInput.value;
  const countryValue = countryInput.value;

  // Gộp các giá trị đó thành một đối tượng và gửi lên cơ sở dữ liệu
  // Tạo đối tượng trong js
  const newUser = {
    id: Math.random() * 1000,
    userName: userNameValue,
    dateOfBirth: dateOfBirthValue,
    country: countryValue,
    gender: gender,
  };

  // Push đối tượng newUser vào trong mảng
  usersLocal.push(newUser);

  // Lưu dữ liệu (mảng) lên trên localStorage
  localStorage.setItem("users", JSON.stringify(usersLocal));
});

// Kiểu dữ liệu JSON: đây là một loại định dạng dữ liệu
// Các key và value của JSON bắt buộc phải được bọc bên trong dấu ""
// Value kiểu string thì bắt buộc phải có "" còn lại như number, null, undefined thì không bắt buộc

// File js không thể hiểu về định dạng JSON mà bắt buộc chúng ta phải ép kiểu về type của JS
// + Chuyển đổi từ dạng JS sang JSON
// Cú pháp: JSON.stringify(value)

// + Chuyển đổi từ dạng JSON sang JS
// Cú pháp: JSON.parse(value)

// const user = {
//   userId: 2,
//   userName: "Nguyễn Văn B",
// };

// // Lưu dữ liệu lên localStorage
// // Bước 1: Chuyển type JS sang type JSON
// const userConvertJSON = JSON.stringify(user);
// localStorage.setItem("users", userConvertJSON);

// // Lấy dữ liệu từ localStorage

// const userLocal = localStorage.getItem("users");
// // Bước 1: Chuyển đổi từ type JSON sang type JS
// const userConvertTypeJS = JSON.parse(userLocal);
// console.log(userConvertTypeJS);

// // Xóa dũ liệu trên localStorage
// localStorage.removeItem("users");
