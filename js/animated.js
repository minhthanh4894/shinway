document.addEventListener("DOMContentLoaded", function() {
  // Function add class animated
  function fadeInScale_ani() {
    var fadeInScale = document.querySelectorAll(".fadeInScale");
    for (let i = 0; i < fadeInScale.length; i++) {
      // console.log(fadeInScale[i]);
      var delay_value = fadeInScale[i].getAttribute("data-animated-delay");
      fadeInScale[i].style.animationDelay = `${delay_value}`;
      fadeInScale[i].classList.remove("fadeInScale");
      fadeInScale[i].classList.add("animated", "fadeInScale");
      //   console.log(delay_value);
    }
  }
  function bounceInLeft2_ani() {
    var bounceInLeft2 = document.querySelectorAll(".bounceInLeft2");
    for (let i = 0; i < bounceInLeft2.length; i++) {
      // console.log(bounceInLeft2[i]);
      var delay_value = bounceInLeft2[i].getAttribute("data-animated-delay");
      bounceInLeft2[i].style.animationDelay = `${delay_value}`;
      bounceInLeft2[i].classList.remove("bounceInLeft2");
      bounceInLeft2[i].classList.add("animated", "bounceInLeft2");
      //   console.log(delay_value);
    }
  }
  function bounceInRight2_ani() {
    var bounceInRight2 = document.querySelectorAll(".bounceInRight2");
    for (let i = 0; i < bounceInRight2.length; i++) {
      // console.log(bounceInRight2[i]);
      var delay_value = bounceInRight2[i].getAttribute("data-animated-delay");
      bounceInRight2[i].style.animationDelay = `${delay_value}`;
      bounceInRight2[i].classList.remove("bounceInRight2");
      bounceInRight2[i].classList.add("animated", "bounceInRight2");
      //   console.log(delay_value);
    }
  }
  // END Function add class animated

  // Window onload animated
  window.onload = fadeInScale_ani();
  window.onload = bounceInLeft2_ani();
  window.onload = bounceInRight2_ani();
  // END Window onload animated

  // Window Scroll Event
  window.addEventListener("scroll", function() {
    // FadeInUp
    var fadeInUp = document.querySelectorAll(".fadeInUp");
    for (let i = 0; i < fadeInUp.length; i++) {
      var vt_fadeInUp = fadeInUp[i].offsetTop - 600;
      if (this.pageYOffset >= vt_fadeInUp) {
        var delay_value = fadeInUp[i].getAttribute("data-animated-delay");
        fadeInUp[i].style.animationDelay = `${delay_value}`;
        fadeInUp[i].classList.remove("fadeInUp");
        fadeInUp[i].classList.add("animated", "fadeInUp");
        //   console.log(delay_value);
        // this.console.log("Up" + vt_fadeInUp);
      }
    }
    // END FadeInUp

    // FadeIn
    var fadeIn = document.querySelectorAll(".fadeIn");
    for (let i = 0; i < fadeIn.length; i++) {
      var vt_fadeIn = fadeIn[i].offsetTop - 600;
      if (this.pageYOffset >= vt_fadeIn) {
        var delay_value = fadeIn[i].getAttribute("data-animated-delay");
        fadeIn[i].style.animationDelay = `${delay_value}`;
        fadeIn[i].classList.remove("fadeIn");
        fadeIn[i].classList.add("animated", "fadeIn");
        // this.console.log(vt_fadeIn);
      }
    }
    // END FadeIn

    // FadeInScale2
    var fadeInScale2 = document.querySelectorAll(".fadeInScale2");
    for (let i = 0; i < fadeInScale2.length; i++) {
      var vt_fadeInScale2 = fadeInScale2[i].offsetTop - 600;
      if (this.pageYOffset >= vt_fadeInScale2) {
        var delay_value = fadeInScale2[i].getAttribute("data-animated-delay");
        fadeInScale2[i].style.animationDelay = `${delay_value}`;
        fadeInScale2[i].classList.remove("fadeInScale2");
        fadeInScale2[i].classList.add("animated", "fadeInScale2");
        // this.console.log(vt_fadeInScale2);
      }
    }
    // END FadeInScale2

    // FadeInDown
    var fadeInDown = document.querySelectorAll(".fadeInDown");
    for (let i = 0; i < fadeInDown.length; i++) {
      var vt_fadeInDown = fadeInDown[i].offsetTop - 600;
      if (this.pageYOffset >= vt_fadeInDown) {
        var delay_value = fadeInDown[i].getAttribute("data-animated-delay");
        fadeInDown[i].style.animationDelay = `${delay_value}`;
        fadeInDown[i].classList.remove("fadeInDown");
        fadeInDown[i].classList.add("animated", "fadeInDown");
        // this.console.log(vt_fadeInDown);
      }
    }
    // END FadeInDown

    // FadeInDownBig
    var fadeInDownBig = document.querySelector(".fadeInDownBig");
      var vt_fadeInDownBig = fadeInDownBig.offsetTop - 600;
      if (this.pageYOffset >= vt_fadeInDownBig) {
        var delay_value = fadeInDownBig.getAttribute("data-animated-delay");
        fadeInDownBig.style.animationDelay = `${delay_value}`;
        fadeInDownBig.classList.remove("fadeInDownBig");
        fadeInDownBig.classList.add("animated", "fadeInDownBig");
        // this.console.log(vt_fadeInDownBig);
    }
    // END FadeInDownBig

    // bounceInLeft
    var bounceInLeft = document.querySelectorAll(".bounceInLeft");
    for (let i = 0; i < bounceInLeft.length; i++) {
      var vt_bounceInLeft = bounceInLeft[i].offsetTop - 600;
      if (this.pageYOffset >= vt_bounceInLeft) {
        var delay_value = bounceInLeft[i].getAttribute("data-animated-delay");
        bounceInLeft[i].style.animationDelay = `${delay_value}`;
        bounceInLeft[i].classList.remove("bounceInLeft");
        bounceInLeft[i].classList.add("animated", "bounceInLeft");
        // this.console.log(vt_bounceInLeft);
        // this.console.log(bounceInLeft[i]);
      }
    }
    // END bounceInLeft

    // bounceInRight
    var bounceInRight = document.querySelectorAll(".bounceInRight");
    for (let i = 0; i < bounceInRight.length; i++) {
      var vt_bounceInRight = bounceInRight[i].offsetTop - 600;
      if (this.pageYOffset >= vt_bounceInRight) {
        var delay_value = bounceInRight[i].getAttribute("data-animated-delay");
        bounceInRight[i].style.animationDelay = `${delay_value}`;
        bounceInRight[i].classList.remove("bounceInRight");
        bounceInRight[i].classList.add("animated", "bounceInRight");
        // this.console.log(vt_bounceInRight);
      }
    }
    // END bounceInRight
  });
});
