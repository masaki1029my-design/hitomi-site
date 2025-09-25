
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

// スマホ用スワイプ
window.addEventListener("touchstart", (e) => {
  startY = e.touches[0].clientY;
});

window.addEventListener("touchend", (e) => {
  let endY = e.changedTouches[0].clientY;
  if (endY - startY > 50) {
    body.classList.add("show-profile");   // 下スワイプ → プロフィール表示
  }
  if (startY - endY > 50) {
    // プロフィールが最上部なら戻れる
    if (document.getElementById("profile").scrollTop === 0) {
      body.classList.remove("show-profile");
    }
  }
});

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
