let readButton = document.getElementById("read");

readButton.addEventListener("click", () => {
  document.querySelectorAll(".single-box").forEach((e) => {
    // console.log(e.classList)
    e.classList.remove("unseen");
    // console.log(e.classList)
  });

  document.querySelectorAll(".dot").forEach((e) => {
    // console.log(e.classList)
    e.classList.remove("dot");
    // console.log(e.classList)
  });

  document.getElementById("num").innerText = "0";
});
