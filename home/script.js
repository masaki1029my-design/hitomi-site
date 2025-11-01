
window.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // 2.5秒後にスプラッシュ非表示、ホーム表示
  setTimeout(() => {
    body.classList.add("hide-splash");
    setTimeout(() => {
      body.classList.add("show-home");
    }, 1000); // フェードアウト時間分待つ
  }, 2500); // ロゴ表示時間
});

const body = document.body;
let startY = 0;

/*モバイル版の設定*/
window.addEventListener("touchstart", (e) => {
  if (e.touches.length === 1) { // 1本指のみ
    startY = e.touches[0].clientY;
  }
}, { passive: true });

window.addEventListener("touchend", (e) => {
  if (e.changedTouches.length === 1) {
    const endY = e.changedTouches[0].clientY;
    const diffY = endY - startY;

    // 上スワイプ → プロフィール表示
    if (diffY < -50) {
      body.classList.add("show-profile");
    }

    // 下スワイプ → プロフィール閉じる
    if (diffY > 50) {
      const profile = document.getElementById("profile");
      if (profile.scrollTop === 0) {
        body.classList.remove("show-profile");
      }
    }
  }
}, { passive: true });


// PC用スクロール
window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    body.classList.add("show-profile");   // 下スクロールで開く
  } else if (e.deltaY < 0) {
    if (document.getElementById("profile").scrollTop === 0) {
      body.classList.remove("show-profile"); // 上スクロールで閉じる
    }
  }
});

// 複数リンクをまとめて取得
const links = document.querySelectorAll(".works");

// 全リンクにイベントを付与
links.forEach(link => {
  function enlarge() {
    link.style.transform = "scale(1.1)";
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
});