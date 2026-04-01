---
title: "このサイトについて"
layout: single
permalink: /about/
classes: wide
---

<style>
.about-lead {
  background: linear-gradient(135deg, #f6fbf9 0%, #eef7f3 100%);
  border: 1px solid #d8e8e1;
  border-radius: 18px;
  padding: 1.4rem 1.5rem;
  margin: 0 0 1.8rem 0;
  box-shadow: 0 4px 14px rgba(0,0,0,0.04);
}

.about-lead p:last-child,
.about-box p:last-child,
.about-note p:last-child,
.about-profile p:last-child {
  margin-bottom: 0;
}

.about-section-title {
  border-left: 6px solid #1d7f6b;
  padding-left: 0.8rem;
  margin: 2.2rem 0 1rem 0;
  font-size: 1.6rem;
  line-height: 1.4;
}

.about-box {
  background: #fafcfb;
  border: 1px solid #dfe9e4;
  border-radius: 16px;
  padding: 1.2rem 1.25rem;
  margin: 1rem 0 1.4rem 0;
}

.about-note {
  background: #f7faf8;
  border-left: 5px solid #1d7f6b;
  border-radius: 10px;
  padding: 1rem 1.1rem;
  margin: 1rem 0 1.4rem 0;
  color: #394742;
  font-size: 0.96rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.9rem;
  margin-top: 1rem;
}

.about-card {
  background: #ffffff;
  border: 1px solid #e2e8e5;
  border-radius: 14px;
  padding: 1rem 1.1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
}

.about-card strong {
  color: #1d7f6b;
}

.about-profile {
  background: linear-gradient(135deg, #fcfcfc 0%, #f7faf8 100%);
  border: 1px solid #dfe6e2;
  border-radius: 16px;
  padding: 1.2rem 1.25rem;
  margin-top: 1rem;
}

.about-small {
  font-size: 0.95rem;
  color: #56635d;
}

.about-list {
  margin: 0;
  padding-left: 1.2rem;
}

.about-list li {
  margin-bottom: 0.5rem;
}

.about-plainlist {
  margin: 0;
  padding-left: 1.2rem;
}

.about-plainlist li {
  margin-bottom: 0.45rem;
}

@media (min-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr 1fr;
  }
}
.about-admin-box {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  background: linear-gradient(135deg, #fcfcfc 0%, #f7faf8 100%);
  border: 1px solid #dfe6e2;
  border-radius: 16px;
  padding: 1.2rem 1.25rem;
  margin-top: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
}

.about-admin-icon {
  flex: 0 0 88px;
}

.about-admin-icon img {
  width: 88px;
  height: 88px;
  object-fit: cover;
  border-radius: 18px;
  display: block;
}

.about-admin-body {
  flex: 1;
  min-width: 0;
}

.about-admin-label {
  font-size: 0.9rem;
  font-weight: 700;
  color: #1d7f6b;
  margin: 0 0 0.45rem 0;
  letter-spacing: 0.02em;
}

.about-admin-body p:last-child {
  margin-bottom: 0;
}

@media (max-width: 640px) {
  .about-admin-box {
    flex-direction: column;
    align-items: flex-start;
  }

  .about-admin-icon {
    flex-basis: auto;
  }
} 
.related-links-wrap {
  margin-top: 1.5rem;
}

.related-panel {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  background: linear-gradient(135deg, #fcfcfc 0%, #f7faf8 100%);
  border: 1px solid #dfe6e2;
  border-radius: 16px;
  padding: 1.2rem 1.25rem;
  margin-top: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
}

.related-panel-icon {
  flex: 0 0 76px;
}

.related-panel-icon img {
  width: 76px;
  height: 76px;
  object-fit: cover;
  border-radius: 18px;
  display: block;
}

.related-panel-body {
  flex: 1;
  min-width: 0;
}

.related-panel-label {
  font-size: 0.88rem;
  font-weight: 700;
  color: #1d7f6b;
  margin: 0 0 0.4rem 0;
  letter-spacing: 0.02em;
}

.related-panel-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 0.45rem 0;
  line-height: 1.4;
}

.related-panel-text {
  margin: 0 0 0.75rem 0;
}

.related-panel-url {
  font-size: 0.92rem;
  color: #2c7da0;
  word-break: break-all;
  margin: 0 0 0.8rem 0;
}

.related-panel-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.related-panel-button {
  display: inline-block;
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  background: #1d7f6b;
  color: #fff !important;
  text-decoration: none !important;
  font-size: 0.92rem;
  font-weight: 700;
}

.related-panel-button.sub {
  background: #eef7f3;
  color: #1d7f6b !important;
  border: 1px solid #cfe3da;
}

.related-panel-list {
  margin: 0.6rem 0 0.8rem 1.1rem;
}

.related-panel-list li {
  margin-bottom: 0.4rem;
}

.related-panel-note {
  font-size: 0.92rem;
  color: #56635d;
  margin-top: 0.6rem;
}

@media (max-width: 640px) {
  .related-panel {
    flex-direction: column;
    align-items: flex-start;
  }

  .related-panel-icon {
    flex-basis: auto;
  }
} 
.contact-panel {
  background: #f7faf8;
  border: 1px solid #dfe6e2;
  border-radius: 16px;
  padding: 1rem 1.15rem;
  margin-top: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
}

.contact-panel-label {
  font-size: 0.9rem;
  font-weight: 700;
  color: #1d7f6b;
  margin: 0 0 0.45rem 0;
  letter-spacing: 0.02em;
}

.contact-panel p:last-child {
  margin-bottom: 0;
}

.contact-email {
  display: inline-block;
  margin-top: 0.35rem;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  background: #eef7f3;
  border: 1px solid #cfe3da;
  font-size: 0.95rem;
  color: #2f4a42;
  word-break: break-all;
} 
</style>

<div class="about-lead">
  <p><strong>Organelle Therapeutics Tracker</strong> は、ミトコンドリア、リソソーム、小胞体（ER）、ゴルジ体、核、ペルオキシソーム、脂肪滴などの<strong>細胞内オルガネラ</strong>に着目し、そこを直接あるいは間接的に標的とする医薬品・治療開発の動向を、<strong>作用機序／モダリティ／開発段階／規制・承認</strong>の観点から横断的に整理する個人サイトです。</p>
</div>

<p>細胞内オルガネラは、エネルギー産生、分解、タンパク質品質管理、脂質代謝、カルシウム恒常性、細胞内輸送など、生命活動の基盤となる機能を担っています。こうしたオルガネラ機能の破綻は、希少疾患に限らず、神経変性疾患、代謝疾患、がん、炎症性疾患など、さまざまな病態と深く関わっています。</p>

<p>一方で、オルガネラ研究の知見は個別の疾患領域や治療モダリティの中で語られることが多く、<strong>「どのオルガネラに対して、どのようなアプローチが、どの疾患に対する治療戦略として展開されているのか」</strong>を俯瞰しやすい形で整理した情報はまだ多くありません。<br>
このサイトでは、そうした断片的な情報を、<strong>オルガネラという共通の視点</strong>から見直し、研究と創薬の接点が見えやすい形で記録していくことを目指しています。</p>

<h2 class="about-section-title">このサイトで取り扱っていること</h2>

<p>本サイトでは、主に以下のような情報を扱っています。</p>

<div class="about-box">
  <ul class="about-list">
    <li><strong>カテゴリ</strong>：オルガネラ<br>
      （Mitochondria, Lysosome, ER, Golgi, Nucleus, Peroxisome, Lipid Droplet など）
    </li>
    <li><strong>タグ</strong>：
      <ul class="about-plainlist">
        <li>モダリティ（small molecule, ERT, SRT, gene therapy, ASO, peptide, PROTAC / LYTAC / AUTAC / ATTEC など）</li>
        <li>開発段階（Discovery, Preclinical, Phase 1, Phase 2, Phase 3, Approved など）</li>
        <li>企業名</li>
        <li>規制当局（FDA, EMA, PMDA など）</li>
        <li>疾患領域・作用機序・関連キーワード</li>
      </ul>
    </li>
  </ul>
</div>

<p>また、単に薬剤名を並べるのではなく、以下のような観点から情報をまとめています。</p>

<div class="about-box">
  <ul class="about-list">
    <li>シーズの発見や病態仮説</li>
    <li>標的オルガネラと作用機序</li>
    <li>モダリティの特徴</li>
    <li>前臨床から臨床開発、承認に至るまでの流れ</li>
    <li>規制当局・企業発表・論文など一次情報にもとづく開発状況</li>
    <li>開発のマイルストーンやタイムライン</li>
  </ul>
</div>

<h2 class="about-section-title">このサイトの方針</h2>

<div class="about-note">
  <p>本サイトでは、<strong>論文、規制当局、公的データベース、企業IR・プレスリリース</strong>など、できるだけ一次情報に近い情報源を参照し、誇張を避けて記述することを心がけています。</p>
</div>

<div class="about-note">
  <p>また、情報収集や文章作成にはAIを補助的に用いることがありますが、掲載内容については<strong>一次情報を必ず確認</strong>し、記述の正確性に配慮しています。</p>
</div>

<div class="about-note">
  <p>未承認薬や開発中プログラムについては、将来的な可能性を示すものであって、効果効能を保証するものではありません。本サイトは医療助言を目的としたものではなく、研究・開発動向の整理と理解を目的としています。</p>
</div>

<h2 class="about-section-title">このサイトに込めていること</h2>

<div class="about-box">
  <p>オルガネラは、教科書の中では個別の構造体として紹介されることが多い一方で、実際の細胞の中では互いに連携しながら機能しています。そして病気もまた、単一分子の異常だけでなく、膜輸送、代謝、分解、シグナル伝達、品質管理といった複数の階層の破綻として現れます。</p>

  <p>だからこそ、オルガネラを理解することは、病態をより構造的に理解することにつながり、その先には新しい創薬の鍵があるのではないかと考えています。</p>

  <p>このサイトは、完成されたデータベースというより、<strong>オルガネラ創薬という領域への解像度を高めていくための場</strong>であり、同時に、基礎研究と医薬品開発のあいだをつなぐ視点を育てていくための記録でもあります。</p>
</div>

<h2 class="about-section-title">こんな方に向けたサイトです</h2>

<div class="about-grid">
  <div class="about-card">
    <strong>研究者・学生の方へ</strong><br>
    オルガネラ生物学に関心のある研究者・学生の方
  </div>
  <div class="about-card">
    <strong>治療開発に関心のある方へ</strong><br>
    オルガネラ関連の遺伝性疾患、神経変性疾患、代謝疾患などの治療開発に関心のある方
  </div>
  <div class="about-card">
    <strong>研究と創薬の接点を探している方へ</strong><br>
    細胞生物学と創薬の接点を探している方
  </div>
  <div class="about-card">
    <strong>横断的に見たい方へ</strong><br>
    既存の疾患別・企業別の情報整理とは別に、<strong>オルガネラという軸で創薬を見てみたい方</strong>
  </div>
</div>

<h2 class="about-section-title">運営者</h2>

<div class="about-admin-box">
  <div class="about-admin-icon">
    <img src="{{ '/assets/images/illust-icon.png' | relative_url }}" alt="運営者アイコン">
  </div>
  <div class="about-admin-body">
    <p class="about-admin-label">Site author</p>
    <p><strong>向江 凪</strong><br>
    名古屋市立大学大学院 薬学研究科 分子生物薬学分野 博士課程</p>

    <p>研究背景として細胞生物学・オルガネラ間相互作用に関心を持ち、将来的には<strong>オルガネラをコンセプトにした創薬</strong>に関わることを目指しています。</p>
  </div>
</div>

<div class="contact-panel">
  <p class="contact-panel-label">Contact</p>
  <p>ご意見・誤記のご指摘などがありましたら、個人HPのコメント欄または以下のメールアドレスへご連絡いただけますと幸いです。</p>
  <p><span class="contact-email">n.mukae-098 [at] outlook.jp</span></p>
</div>

<div class="related-links-wrap">

  <div class="related-panel">
    <div class="related-panel-icon">
      <a href="https://nagimukae.com" target="_blank" rel="noopener noreferrer">
        <img src="{{ '/assets/images/personal_HP_icon.png' | relative_url }}" alt="個人HPアイコン">
      </a>
    </div>
    <div class="related-panel-body">
      <p class="related-panel-label">Personal website</p>
      <p class="related-panel-title">向江 凪の個人HP</p>
      <p class="related-panel-text">
        研究活動、個人プロジェクト、記事、運営サイトの紹介などをまとめている個人HPです。
        本サイトに関する補足情報や連絡先も、こちらからご覧いただけます。
      </p>
      <p class="related-panel-url">https://nagimukae.com</p>
      <div class="related-panel-buttons">
        <a class="related-panel-button" href="https://nagimukae.com" target="_blank" rel="noopener noreferrer">個人HPを見る</a>
      </div>
    </div>
  </div>

<h2 class="about-section-title">姉妹サイトのご紹介</h2>

  <div class="related-panel">
    <div class="related-panel-icon">
      <a href="https://orgnews-nm.pages.dev" target="_blank" rel="noopener noreferrer">
        <img src="{{ '/assets/images/organelle_app_news.png' | relative_url }}" alt="Organelles News icon">
      </a>
    </div>
    <div class="related-panel-body">
      <p class="related-panel-label">姉妹サイト</p>
      <p class="related-panel-title">Organelles News</p>
      <p class="related-panel-text">
        Organelles News は、オルガネラ研究の最新論文を1ページで横断チェックできるニュース形式のWebアプリです。
        主要ジャーナルのRSSを集約し、直近30日に公開された論文をカード形式で表示します。
        広告やアカウント登録は不要で、出典表示で再利用できるオープンアクセス(CC BY)論文については英語要約と日本語訳も掲載しています。
      </p>

      <ul class="related-panel-list">
        <li>主要ジャーナルの新着論文を毎日更新で収集</li>
        <li>オルガネラごとのタグで絞り込み可能</li>
        <li>Publisher / PubMed へのリンクを掲載</li>
        <li>CC BY 論文は英語要約 + 日本語訳を表示</li>
      </ul>

      <p class="related-panel-note">
        ※ 要約・翻訳はAIによる自動生成です。誤りが含まれる可能性があります。最終的な内容は原著をご確認ください。
      </p>

      <p class="related-panel-url">https://orgnews-nm.pages.dev</p>
      <div class="related-panel-buttons">
        <a class="related-panel-button" href="https://orgnews-nm.pages.dev" target="_blank" rel="noopener noreferrer">Organelles Newsを見る</a>
      </div>
    </div>
  </div>

</div>
