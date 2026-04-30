---
layout: home
entries_layout: list
title:
excerpt:
---

<!-- トップページ左側：はじめにパネル -->
<aside class="ott-home-sidebar-panel" aria-label="このサイトの紹介">
  <div class="ott-home-sidebar-panel__label">はじめに</div>

  <p>
    <strong>Organelle Therapeutics Tracker</strong> は、細胞内オルガネラを標的とした医薬品・治療開発の動向を、
    作用機序やモダリティ、開発段階、承認などの観点からまとめる個人運営サイトです。
  </p>

  <p>
    承認済み薬や臨床試験中プログラムを優先し、一次情報ベースで創薬開発動向を整理してまとめています。
  </p>
</aside>

<style>
/* トップページ左側：はじめにパネル */
.ott-home-sidebar-panel {
  position: fixed;
  top: 245px;
  left: max(1rem, calc((100vw - 1320px) / 2 + 1rem));
  width: 270px;
  z-index: 20;

  background: linear-gradient(135deg, #fcfcfc 0%, #f7faf8 100%);
  border: 1px solid #dfe6e2;
  border-radius: 16px;
  padding: 1rem 1rem 0.95rem 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);

  font-size: 0.92rem;
  line-height: 1.75;
  color: #4a5a54;
}

.ott-home-sidebar-panel__label {
  font-size: 1rem;
  font-weight: 700;
  color: #1d7f6b;
  margin: 0 0 0.6rem 0;
  padding-bottom: 0.55rem;
  border-bottom: 1px solid #d8e6e2;
  letter-spacing: 0.02em;
}

.ott-home-sidebar-panel p {
  margin: 0 0 0.8rem 0;
}

.ott-home-sidebar-panel p:last-child {
  margin-bottom: 0;
}

.ott-home-sidebar-panel strong {
  color: #2f4a42;
}

/* 狭い画面では非表示 */
@media (max-width: 1280px) {
  .ott-home-sidebar-panel {
    display: none;
  }
}
</style>
