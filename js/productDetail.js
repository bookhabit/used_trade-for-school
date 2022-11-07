// 카테고리 마우스오버 마우스아웃 이벤트핸들러 기능
const categorySelectorWrapper = document.querySelectorAll(
  ".categorySelectorWrapper"
);
const categoryShow = document.querySelectorAll(".categoryShow");

// a태그 디폴트값 없애기

// 첫번째 카테고리 이벤트 설정
categorySelectorWrapper[0].addEventListener("mouseover", () => {
  categoryShow[0].style.display = "block";
});

categorySelectorWrapper[0].addEventListener("mouseout", () => {
  categoryShow[0].style.display = "none";
});

// 두번째 카테고리 이벤트 설정
categorySelectorWrapper[1].addEventListener("mouseover", () => {
  categoryShow[1].style.display = "block";
});

categorySelectorWrapper[1].addEventListener("mouseout", () => {
  categoryShow[1].style.display = "none";
});

// 세번째 카테고리 이벤트 설정
categorySelectorWrapper[2].addEventListener("mouseover", () => {
  categoryShow[2].style.display = "block";
});

categorySelectorWrapper[2].addEventListener("mouseout", () => {
  categoryShow[2].style.display = "none";
});
