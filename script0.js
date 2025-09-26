const link = document.querySelector(".rock");

// マウスが乗った時
link.addEventListener("mouseenter", () => {
  link.style.transform = "scale(1.2)"; // 1.2倍に拡大
});

// マウスが外れた時
link.addEventListener("mouseleave", () => {
  link.style.transform = "scale(1)"; // 元の大きさに戻す
});