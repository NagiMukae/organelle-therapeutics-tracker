---
layout: home
entries_layout: grid
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

/* トップページの記事カードを大きめのパネル状にする */
.layout--home .grid__wrapper {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

.layout--home .grid__item {
  width: auto !important;
  margin: 0 !important;
  padding: 0.85rem;
  border: 1px solid #dfe6e2;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 4px 14px rgba(0,0,0,0.04);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.layout--home .grid__item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(0,0,0,0.07);
}

/* トップページの記事カードを大きめのパネル状にする */
.layout--home .grid__wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.layout--home .grid__item {
  width: auto !important;
  margin: 0 !important;
  padding: 1rem;
  border: 1px solid #dfe6e2;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 4px 14px rgba(0,0,0,0.04);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.layout--home .grid__item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(0,0,0,0.07);
}

.layout--home .archive__item,
.layout--home .archive__item-teaser {
  height: auto !important;
  max-height: none !important;
}

.layout--home .archive__item-teaser {
  margin-bottom: 0.85rem;
  border-radius: 14px;
  overflow: visible;
  border: 1px solid #d8e6e2;
  background: #ffffff;
}

.layout--home .archive__item-teaser img {
  width: 100%;
  height: auto !important;
  max-height: none !important;
  object-fit: contain !important;
  display: block;
  border-radius: 14px;
}

.layout--home .archive__item-title {
  margin-top: 0.4rem;
  font-size: 1.05rem;
  line-height: 1.45;
}

.layout--home .archive__item-title a {
  color: #0f9ca6;
  text-decoration-thickness: 1.5px;
}

.layout--home .archive__item-excerpt {
  font-size: 0.86rem;
  line-height: 1.65;
}

.layout--home .archive__item-title {
  margin-top: 0.4rem;
  font-size: 1.05rem;
  line-height: 1.45;
}

.layout--home .archive__item-title a {
  color: #0f9ca6;
  text-decoration-thickness: 1.5px;
}

.layout--home .archive__item-excerpt {
  font-size: 0.86rem;
  line-height: 1.65;
}

/* 狭い画面では左パネル非表示、記事カードは1列 */
@media (max-width: 1280px) {
  .ott-home-sidebar-panel {
    display: none;
  }
}

@media (max-width: 900px) {
  .layout--home .grid__wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
