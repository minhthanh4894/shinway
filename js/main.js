document.addEventListener("DOMContentLoaded", function() {
  // XỬ LÝ SCROLL ADD SMALL NAV
  var navbar = document.querySelector(".nav");
  var navbtn = document.querySelectorAll(".nav__bar li a");
  var service = document.querySelector("#service");
  var introduce = document.querySelector("#introduce");
  var project = document.querySelector("#project");
  var process = document.querySelector("#process");
  var contact = document.querySelector("#contact");
  // console.log(navbtn);
  var flag = "f";
  window.addEventListener("scroll", () => {
    // add class menu-small
    if (window.pageYOffset >= navbar.offsetTop) {
      if (flag == "f") {
        navbar.classList.add("nav-small");
        flag = "t";
      }
    } else {
      if (flag == "t") {
        navbar.classList.remove("nav-small");
        flag = "f";
      }
    }
    // END add class menu-small

    // Add class nav-active khi scroll đến vị trí ứng với menu
    if (window.pageYOffset < service.offsetTop) {
      for (let k = 0; k < navbtn.length; k++) {
        navbtn[k].classList.remove("nav-active");
      }
    }
    if (window.pageYOffset >= service.offsetTop) {
      for (let k = 0; k < navbtn.length; k++) {
        navbtn[k].classList.remove("nav-active");
      }
      navbtn[0].classList.add("nav-active");
    }
    if (window.pageYOffset >= introduce.offsetTop) {
      for (let k = 0; k < navbtn.length; k++) {
        navbtn[k].classList.remove("nav-active");
      }
      navbtn[1].classList.add("nav-active");
    }
    if (window.pageYOffset >= project.offsetTop) {
      for (let k = 0; k < navbtn.length; k++) {
        navbtn[k].classList.remove("nav-active");
      }
      navbtn[2].classList.add("nav-active");
    }
    if (window.pageYOffset >= process.offsetTop) {
      for (let k = 0; k < navbtn.length; k++) {
        navbtn[k].classList.remove("nav-active");
      }
      navbtn[3].classList.add("nav-active");
    }
    if (window.pageYOffset >= contact.offsetTop - 500) {
      for (let k = 0; k < navbtn.length; k++) {
        navbtn[k].classList.remove("nav-active");
      }
      navbtn[4].classList.add("nav-active");
    }
    // END Add class nav-active khi scroll đến vị trí ứng với menu
  });
  // XỬ LÝ SCROLL ADD SMALL NAV

  // XỬ LÝ SLIDE QUOTES PHẦN PARNER TALK
  var slides = document.querySelector(".partner__group");
  var items = document.querySelectorAll(".partner__item");
  var prev = document.querySelector(".prev-btn");
  var next = document.querySelector(".next-btn");
  var totalItems = items.length - 1; // Trừ 1 còn 3 là để do thứ tự item là 0-1-2-3
  // console.log(totalItems);
  let currentItem = 0; // Vị trí hiện tại của slide active
  // Xử lý nút next
  next.addEventListener("click", function() {
    if (currentItem < totalItems) {
      currentItem++;
      slides.style.transform = `translateX(-${currentItem * 100}%)`;
    } else {
      currentItem = 0;
      slides.style.transform = `none`;
    }
  });
  // Xử lý nút prev
  prev.addEventListener("click", function() {
    if (currentItem === 0) {
      currentItem = totalItems;
      slides.style.transform = `translateX(-${currentItem * 100}%)`;
    } else {
      currentItem--;
      slides.style.transform = `translateX(-${currentItem * 100}%)`;
    }
  });
  // END XỬ LÝ SLIDE QUOTES PHẦN PARNER TALK

  // XỬ LÝ SLIDE LOGO PHẦN BRAND LOGO
  var logoList = document.querySelector(".brand__list");
  var logoItems = document.querySelectorAll(".brand__item");
  var logoWidth = 300;
  var brandListWidth = logoItems.length * logoWidth;
  var totalLogo = logoItems.length - 1;
  var activeItem = 0;
  setInterval(autoslideLogo, 2000);
  function autoslideLogo() {
    if (activeItem >= 0 && activeItem <= totalLogo - 4) {
      activeItem++;
      logoList.style.transform = `translate(-${activeItem * logoWidth}px)`;
    } else if ((activeItem = totalLogo - 4)) {
      activeItem = 0;
      logoList.style.transform = `none;`;
    }
  }
  // END XỬ LÝ SLIDE LOGO PHẦN BRAND LOGO

  // XỬ LÝ PHẦN PRODUCT

  // Phần product__menu
  var listNav = document.querySelectorAll(".product__menu ul li");
  var allItems = document.querySelectorAll(".product__item");

  // function addActive(navItem) {
  //   listNav.forEach(function (navItem){
  //     navItem.classList.remove('active');
  //   })
  //   navItem.classList.add('active');
  // }

  // Cách viết tắt arrow function của cách phía trên, 2 cái nd như nhau
  function addActive(navItem) {
    listNav.forEach(navItem => {
      navItem.classList.remove("active");
    });
    navItem.classList.add("active");
  }
  function filterItem(dataFilter) {
    if (dataFilter === "all") {
      for (let i = 0; i < allItems.length; i++) {
        allItems[i].style.display = `block`;
        allItems[i].classList.add("animated", "zoomIn");
        // allItems[i].style.animation = `fadeInScale 0.5s ease-in-out`;
      }
    } else {
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].dataset.filter === dataFilter) {
          allItems[i].style.display = `block`;
          allItems[i].classList.add("animated", "zoomIn");
          // allItems[i].style.animation = `fadeInScale 0.5s ease-in-out`;
        } else {
          allItems[i].style.display = `none`;
          // allItems[i].style.animation = `fadeInScale 0.5s ease-in-out`;
        }
      }
    }
  }

  for (let i = 0; i < listNav.length; i++) {
    console.log(listNav[i].dataset.filter);
    listNav[i].addEventListener("click", () => {
      addActive(listNav[i]);
      filterItem(listNav[i].dataset.filter);
    });
  }
  // END Phần product__menu

  // END XỬ LÝ PHẦN PRODUCT

  // XỬ LÝ PHẦN MODAL PRODUCT
  var productModal = document.querySelector(".product__modal");
  var modalWrapper = document.querySelector(".product__modal-wrapper");
  var modalClone = document.querySelector(".product__modal-wrapper .clone");
  var modalImg = document.querySelectorAll(".modal__img");
  var srcImg = document.querySelectorAll(".modal__img img");
  var prevImg = document.querySelector(".control.left");
  var nextImg = document.querySelector(".control.right");
  // console.log(srcImg);
  modalClone.addEventListener("click", () => {
    // Bấm vùng ngoài tắt modal
    // console.log(modalClone)
    productModal.classList.remove("d-block");
    navbar.classList.remove("d-none");
  });

  // Xử lý click nút Xem thêm sẽ mở lên hình tương ứng
  var readmoreModal = document.querySelectorAll(".dataModal");
  for (let i = 0; i < readmoreModal.length; i++) {
    readmoreModal[i].addEventListener("click", () => {
      navbar.classList.add("d-none");
      for (let k = 0; k < modalImg.length; k++) {
        modalImg[k].classList.remove("d-block");
      }
      productModal.classList.add("d-block");
      modalImg[i].classList.add("d-block");
      if (i==modalImg.length-1) {
        prevImg.classList.remove("d-none");
        nextImg.classList.add('d-none');
      } else if (i==0) {
        nextImg.classList.remove("d-none");
        prevImg.classList.add('d-none');
      } else {
          nextImg.classList.remove("d-none");
          prevImg.classList.remove("d-none");
      }
    });
  }
  // END Xử lý click nút Xem thêm sẽ mở lên hình tương ứng

  // Xử lý nút Next và nút Prev
  nextImg.addEventListener("click", () => {
    var activeModal = document.querySelector(".modal__img.d-block");
    var i = activeModal.getAttribute("data-Modal");
    // console.log("active:" + i);
    if (i < modalImg.length - 1) {
      for (let k = 0; k < modalImg.length; k++) {
        prevImg.classList.remove("d-none");
        modalImg[k].classList.remove("d-block");
      }
      i++;
      modalImg[i].classList.add("d-block");
      // console.log(i);
    } 
    // ẩn nút next khi cuối slide
    if (i==modalImg.length-1) {
      prevImg.classList.remove("d-none");
      nextImg.classList.add('d-none');
    } 
  });
  prevImg.addEventListener("click", () => {
    var activeModal = document.querySelector(".modal__img.d-block");
    var i = activeModal.getAttribute("data-Modal");
    // console.log("active:" + i);
    if (i > 0) {
      for (let k = 0; k < modalImg.length; k++) {
        modalImg[k].classList.remove("d-block");
      }
      i--;
      modalImg[i].classList.add("d-block");
      // console.log(i);
    }
    // ẩn nút prev khi đầu slide
    if (i==0) {
      prevImg.classList.add("d-none");
      nextImg.classList.remove('d-none');
    }
  });
  // END Xử lý nút Next và nút Prev

  // END XỬ LÝ PHẦN MODAL PRODUCT

  // XỬ LÝ NÚT ICON MENU KHI RESPONSIVE
  var menuIcon = document.querySelector(".nav__icon");
  var menuBar = document.querySelector(".nav__bar");
  var closeBtn = document.querySelector(".nav__close");
  menuIcon.addEventListener("click", () => {
    menuBar.classList.toggle("nav-show");
  });
  closeBtn.addEventListener("click", () => {
    menuBar.classList.remove("nav-show");
  });
  // END XỬ LÝ NÚT ICON MENU KHI RESPONSIVE
});
