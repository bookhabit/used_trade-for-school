// 검색어 input창 focus주었을 때 최근검색어창 div 보이기
const searchInput = document.querySelector(".searchInput");
const aboutSearchContainer = document.querySelector(".aboutSearchContainer");

searchInput.addEventListener("focus", showAboutSearch);
searchInput.addEventListener("blur", hideAboutSearch);

function showAboutSearch() {
  aboutSearchContainer.style.display = "block";
}

function hideAboutSearch() {
  aboutSearchContainer.style.display = "none";
}

// 최근검색어창 토글버튼 ( 최근검색어 - 인기검색어 ) 색깔변경

// 카테고리 div를 display 토글 버튼 만들기
const categoryBtn = document.querySelector(".categoryBtn");
const categoryAboutDiv = document.querySelector(".categoryAbout");

categoryBtn.addEventListener("mouseenter", showAboutCategory);
categoryAboutDiv.addEventListener("mouseleave", hideAboutCategory);

function showAboutCategory() {
  categoryAboutDiv.style.display = "block";
}

function hideAboutCategory() {
  categoryAboutDiv.style.display = "none";
}
