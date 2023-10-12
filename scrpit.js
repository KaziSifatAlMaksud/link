 
 //navigation bar 

 const list = document.querySelectorAll('.list');
    
 function activeLink(){
     list.forEach(item => 
     item.classList.remove('active'));
     this.classList.add('active');
 }
 
 list.forEach(item => item.addEventListener('click', activeLink));

 // filter the catagory ..
 document.addEventListener("DOMContentLoaded", function () {
const filters = document.querySelectorAll(".portfolio-flters li");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filters.forEach(function (filter) {
 filter.addEventListener("click", function () {
   filters.forEach(function (f) {
     f.classList.remove("filter-active");
     f.classList.add("filter-inactive");
   });
   this.classList.remove("filter-inactive");
   this.classList.add("filter-active");

   const filterId = this.id;

   portfolioItems.forEach(function (item) {
     item.style.display = "none";
   });

   if (filterId === "filter-new") {
     document.querySelectorAll(".filter-new").forEach(function (content) {
       content.style.display = "block";
     });
   } else if (filterId === "filter-started") {
     document.querySelectorAll(".filter-started").forEach(function (content) {
       content.style.display = "block";
     });
   } else if (filterId === "filter-finished") {
     document.querySelectorAll(".filter-finished").forEach(function (content) {
       content.style.display = "block";
     });
   } else if (filterId === "filter-all") {
     portfolioItems.forEach(function (item) {
       item.style.display = "block";
     });
   }
 });
});
});

//filter through Search Address

function filterCards() {
 const searchInput = document.getElementById("search-input").value.toLowerCase();
 const cardTitles = document.querySelectorAll(".card-title");

 cardTitles.forEach(function(cardTitle) {
     const titleText = cardTitle.textContent.toLowerCase();
     const card = cardTitle.closest(".portfolio-item");

     if (titleText.includes(searchInput)) {
         card.style.display = "block";
     } else {
         card.style.display = "none";
     }
 });
}

// const title = document.getElementById('expandable-title');
// let expanded = false;

// title.addEventListener('click', () => {
//     if (expanded) {
//         title.style.whiteSpace = 'nowrap';
//         title.style.overflow = 'hidden';
//         title.style.textOverflow = 'ellipsis';
//     } else {
//         title.style.whiteSpace = 'normal';
//         title.style.overflow = 'visible';
//         title.style.textOverflow = 'unset';
//     }

//     expanded = !expanded;
// });
