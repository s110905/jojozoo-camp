import React, { useState } from "react";

export default function CampLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openIdx, setOpenIdx] = useState(0); // 純 JS

  // 圖片路徑一律走 BASE_URL，支援 dev 與 GitHub Pages
  const cohorts = [
    { group: "親子組", dates: "1/26、1/27、1/28（三梯次）", target: "3–10 歲＋1–2 位成人", img: "images/cohorts/parent.jpg" },
    { group: "國小組", dates: "1/29、1/30（兩梯次）", target: "國小4–6年級",         img: "images/cohorts/elementary.jpg" },
    { group: "國中組", dates: "2/2（單一梯次）",          target: "國中生",             img: "images/cohorts/junior.jpg" },
    { group: "成人組", dates: "2/3（單一梯次）",          target: "高中以上",           img: "images/cohorts/adult.jpg" },
  ];
  

  const album = [
    "album/01.jpg","album/02.jpg","album/03.jpg","album/04.jpg",
    "album/05.jpg","album/06.jpg","album/07.jpg","album/08.jpg",
  ];

  const scheduleRows = [
    ["08:45–09:30","報到與破冰遊戲","簽到、互動遊戲建立團隊默契","園區門口"],
    ["09:30–10:20","認識園區","參觀動物園，認識整體環境","園區內"],
    ["10:20–10:30","休息","補充水分與能量","休息區"],
    ["10:30–12:00","飼育照護①：馬廄前後場","清潔與與動物簡單互動技巧","馬廄區"],
    ["12:00–13:10","午餐時間","自助餐","餐飲區"],
    ["13:10–14:00","手作課","製作動物主題工藝 DIY（鸚鵡玩具）","教室內"],
    ["14:00–15:30","飼育照護②：備料＋餵食","準備草食類與鳥類飼料；餵食至少各一種","園區內"],
    ["15:30–16:15","粉紅泡泡秀＋茶點","放鬆時光","休息區"],
    ["16:15–16:30","結訓","回顧活動、頒發參與證書與合照","教室"],
    ["16:30–","自由活動或家長帶回","—","—"],
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/90 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11c0-3.866 3.582-7 8-7s8 3.134 8 7v8a2 2 0 0 1-2 2h-3l-3-3-3 3H5a2 2 0 0 1-2-2v-8z"/></svg>
            <div className="leading-tight">
              <div className="font-bold text-lg">九九峰動物樂園</div>
              <div className="text-[11px] text-gray-500">飼育員體驗營・冬令營</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <a href="#features" className="hover:text-emerald-700">亮點特色</a>
            <a href="#dates" className="hover:text-emerald-700">日期梯次</a>
            <a href="#pricing" className="hover:text-emerald-700">費用優惠</a>
            <a href="#schedule" className="hover:text-emerald-700">一日流程</a>
            <a href="#album" className="hover:text-emerald-700">活動相簿</a>
            <a href="#notice" className="hover:text-emerald-700">注意事項</a>
          </nav>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm"
            onClick={() => setMenuOpen(v => !v)}
          >
            {menuOpen ? "關閉" : "選單"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-2 grid grid-cols-2 gap-2 text-sm">
              {[["#features","亮點特色"],["#dates","日期梯次"],["#pricing","費用優惠"],["#schedule","一日流程"],["#album","活動相簿"],["#notice","注意事項"]]
                .map(([href,label]) => (
                  <a key={href} href={href} className="rounded-lg px-3 py-2 bg-gray-50 active:bg-gray-100" onClick={() => setMenuOpen(false)}>{label}</a>
                ))}
              <a href="#signup" className="col-span-2 rounded-lg px-3 py-2 bg-emerald-600 text-white text-center font-semibold" onClick={() => setMenuOpen(false)}>立即報名</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-6 md:gap-8 py-8 md:py-16 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-[28px] md:text-5xl font-extrabold leading-tight">
              變身動物飼育員，<span className="text-emerald-700">體驗不一樣的一天！</span>
            </h1>
            <p className="mt-3 md:mt-4 text-[15px] md:text-lg text-gray-700">
              親手參與動物照護、行為觀察與餵食活動，與動物近距離互動，留下專屬你的冬日回憶！
            </p>
            <ul className="mt-4 md:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm md:text-base">
              <li className="flex items-center gap-2"><span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-600" />單日營隊 08:30–16:30</li>
              <li className="flex items-center gap-2"><span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-600" />每梯 50 人（未達 20 人不開班）</li>
              <li className="flex items-center gap-2"><span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-600" />親子 / 國小 / 國中 / 成人 組別齊全</li>
              <li className="flex items-center gap-2"><span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-600" />地點：南投縣草屯鎮富頂路一段726巷99號</li>
            </ul>
            <div className="mt-5 md:mt-7 flex flex-wrap gap-3">
              <a href="#signup" className="rounded-xl bg-emerald-600 px-5 py-3 text-white font-bold hover:bg-emerald-700 shadow-md">我要報名</a>
              <a href="#dates" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold hover:border-gray-400">查看梯次</a>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="aspect-[4/3] w-full rounded-2xl border border-dashed border-emerald-300 bg-emerald-50/40 overflow-hidden">
            <img
  src={`${import.meta.env.BASE_URL}hero.jpg`}
  alt="主視覺"
  loading="lazy"
  className="w-full h-full object-cover"
/>
            </div>
          </div>
        </div>
      </section>

      {/* 日期梯次 */}
      <section id="dates" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold">日期與梯次</h2>
          <p className="mt-2 text-sm text-gray-600">（115 年；單日營隊）</p>

          {/* 手機：手風琴 */}
          <div className="mt-4 md:hidden space-y-3">
            {cohorts.map((c, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 overflow-hidden">
                <button
                  className="w-full px-4 py-3 flex items-center justify-between text-left"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                >
                  <div>
                    <div className="font-bold text-emerald-700">{c.group}</div>
                    <div className="text-xs text-gray-600">點擊展開</div>
                  </div>
                  <span className="text-sm">{openIdx === i ? "－" : "＋"}</span>
                </button>
                {openIdx === i && (
                  <div className="px-4 pb-4 text-sm text-gray-800">
                    <div className="aspect-video w-full rounded-xl overflow-hidden border border-gray-200 mb-3">
                    <img
  src={`${import.meta.env.BASE_URL}${c.img}`}
  alt={c.group}
  loading="lazy"
  className="w-full h-full object-cover rounded-xl"
/>

                    </div>
                    <p className="font-medium">{c.dates}</p>
                    <p className="text-gray-600">招生對象：{c.target}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 桌機：卡片 */}
          <div className="mt-6 hidden md:grid md:grid-cols-4 gap-6">
            {cohorts.map((c, i) => (
              <article key={i} className="rounded-2xl border border-gray-200 p-6 hover:shadow-sm transition">
                <div className="aspect-video w-full rounded-xl overflow-hidden border border-gray-200">
                <img
  src={`${import.meta.env.BASE_URL}${c.img}`}
  alt={c.group}
  loading="lazy"
  className="w-full h-full object-cover"
/>

                </div>
                <h3 className="mt-4 font-bold text-lg text-emerald-700">{c.group}</h3>
                <p className="mt-1 text-sm text-gray-800">{c.dates}</p>
                <p className="mt-1 text-sm text-gray-600">招生對象：{c.target}</p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-600">每梯次 50 人（額滿即止）；未達 20 人恕無法開班。</p>
        </div>
      </section>

      {/* 相簿 */}
      <section id="album" className="bg-emerald-50">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold">活動相簿</h2>
          <div className="mt-4 md:mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {album.map((p, i) => (
              <img
                key={i}
                src={`${import.meta.env.BASE_URL}${p}`}
                alt={`相片${i + 1}`}
                loading="lazy"
                className="aspect-square w-full object-cover rounded-xl border border-emerald-200"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 注意事項 & 交通 */}
      <section id="notice" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold">注意事項 & 交通</h2>
          <div className="mt-4 md:mt-6 grid md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-800 list-disc list-inside">
                <li>報名後請於 <b>3 日內完成繳費</b> 以確保名額。</li>
                <li>親子組外，未成年人需家長簽署同意書；活動當日請攜帶健保卡。</li>
                <li>活動期間請遵守園區規範，並聽從班主任、輔導員與飼育員指導。</li>
                <li>園區地址：<b>南投縣草屯鎮富頂路一段726巷99號</b></li>
              </ul>
              <div className="mt-4 md:mt-5 aspect-[16/9] w-full rounded-xl overflow-hidden border border-gray-200">
              <img
  src={`${import.meta.env.BASE_URL}map.png`}
  alt="交通位置圖"
  loading="lazy"
  className="w-full aspect-[16/9] object-cover rounded-xl"
/>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5 md:p-6">
              <h3 className="font-bold text-lg">報名方式</h3>
              <div className="mt-3 space-y-2 text-sm">
                <p>電話：<a href="tel:049-2565107" className="font-semibold hover:underline">049-2565107</a>、<a href="tel:0911-177638" className="font-semibold hover:underline">0911-177638</a></p>
                <p>Email：<a href="mailto:99cutezoobusiness@gmail.com" className="font-semibold hover:underline">99cutezoobusiness@gmail.com</a></p>
                <p>線上報名：掃描 QR Code</p>
                <div className="mt-3 aspect-square w-36 md:w-40 rounded-xl overflow-hidden border border-gray-200">
                <img
  src={`${import.meta.env.BASE_URL}qr.png`}
  alt="線上報名 QR"
  loading="lazy"
  className="w-36 md:w-40 aspect-square object-cover rounded-xl"
/>
                </div>
              </div>
              <a href="#signup" className="mt-5 inline-flex rounded-xl bg-emerald-600 px-5 py-3 text-white font-bold hover:bg-emerald-700 shadow-md">立刻預約名額</a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="signup" className="bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold">名額有限，報名手刀衝！</h2>
          <p className="mt-2 text-gray-700">挑選適合你的梯次，和我們一起當一天的「動物飼育員」！</p>
          <div className="mt-5 md:mt-6 flex justify-center gap-3">
            <a href="tel:049-2565107" className="rounded-xl bg-emerald-600 px-5 py-3 text-white font-bold hover:bg-emerald-700 shadow-md">電話報名</a>
            <a href="mailto:99cutezoobusiness@gmail.com" className="rounded-xl border border-gray-300 px-5 py-3 font-semibold hover:border-gray-400">Email 報名</a>
          </div>
        </div>
      </section>

      {/* Footer + 手機浮動 CTA */}
      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© 九九峰動物樂園 JOJOZOO Animal Park</p>
          <p>內容含日期、時間、地點、組別、費用、課表、注意事項、報名方式等資訊。</p>
        </div>
      </footer>

      <a href="#signup" className="fixed md:hidden bottom-3 left-3 right-3 rounded-full bg-emerald-600 text-white px-5 py-3 text-center font-bold shadow-lg">
        立即報名
      </a>
    </main>
  );
}
