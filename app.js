// js here

const topBandBtns = document.querySelectorAll(".topband-btn");

topBandBtns.forEach((topBandBtn) => {
  topBandBtn.addEventListener("mouseenter", () => {
    console.log("hello");

    const dropdown = topBandBtn.querySelector(".dropdown");

    dropdown.classList.add("open");
  });

  topBandBtn.addEventListener("mouseleave", () => {
    const dropdown = topBandBtn.querySelector(".dropdown");

    dropdown.classList.remove("open");
  });
});
