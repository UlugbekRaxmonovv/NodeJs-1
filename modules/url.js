const url = require("url");

const newUrl = new URL("http://okaymenu.uz:5000/user/user.html?name=Ulug'bek");

///href ->orqali biz yaratilgan url manzilni ko'rishimiz mumkin
console.log(newUrl.href);

/// host-> biz agar domini va porti bulsa olib beardi

console.log(newUrl.host);

/// hostNmae -> faqat host name olib beardi

console.log(newUrl.hostname);

///pathname -> bu bizga domendan keyin keladiag  fayl nomizga murojat qiladi
console.log(newUrl.pathname);

/// search -> bizga bu   quey parametr qaytaradi
console.log(newUrl.search);

/// quey parametr object bulib qaytich uchun

console.log(newUrl.searchParams);

/// paramsga yaxshi  quey  qushish uchun
newUrl.searchParams.append("firstName", "Raxmonov");
console.log(newUrl.searchParams);

///tsikl
console.log(
  newUrl.searchParams.forEach((name, value) => {
    console.log(`${value} : ${name}`);
  })
);
