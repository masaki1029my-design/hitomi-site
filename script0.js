const link = document.querySelector(".rock");

function enlarge() {
  link.style.transform = "scale(1.2)";
}

function resetSize() {
  link.style.transform = "scale(1)";
}

// PC用
link.addEventListener("mouseenter", enlarge);
link.addEventListener("mouseleave", resetSize);

// モバイル用
link.addEventListener("touchstart", enlarge);
link.addEventListener("touchend", resetSize);
link.addEventListener("touchcancel", resetSize);

link.addEventListener("touchend", (e) => {
  e.preventDefault(); // デフォルトのリンク遷移を一旦止める
  resetSize();

  // 0.15秒後にリンク先に遷移
  setTimeout(() => {
    window.location.href = link.href;
  }, 150);
});