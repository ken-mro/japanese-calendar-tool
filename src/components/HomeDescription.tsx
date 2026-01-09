"use client";

import { useLanguage } from "@/lib/i18n/config";

export default function HomeDescription() {
  const language = useLanguage();

  if (language === "ja") {
    return (
      <section id="about-section" className="description-container">
        <div className="description-section">
          <h2>このツールについて</h2>
          <p>
            この「暦計算ツール」は、西暦の日付から和暦（元号）、干支（十干・十二支）、星座だけでなく、九星、六曜、月の満ち欠けを計算することができるツールです。
          </p>
          <p>
            また、指定の日から前後何日かがいつかを計算することができるので、誕生日から1万日後がいつかなど、様々なシーンでお使いいただければと思います。ツールを利用することで、一日一日を大事に過ごす一助となれば幸いです。
          </p>
        </div>

        <div className="description-section">
          <h2>和暦（われき）とは</h2>
          <p>
            和暦は、日本独自の紀年法で、「明治」「大正」「昭和」「平成」「令和」などの元号を用いて年を数えます。
            飛鳥時代から続くこの制度は、世界でも珍しい独自の文化です。
          </p>
        </div>

        <div className="description-section">
          <h2>干支（十干十二支）とは</h2>
          <p>
            一般的に「干支（えと）」というと「子・丑・寅…」の十二支（じゅうにし）を指すことが多いですが、本来は「十干（じっかん）」と「十二支」を組み合わせた60通りのサイクルのことを指します。
          </p>
          <p>
            十干は「甲・乙・丙・丁・戊・己・庚・辛・壬・癸」、十二支は「子・丑・寅・卯・辰・巳・午・未・申・酉・戌・亥」です。
            例えば、60才の還暦（かんれき）は、この60通りの干支が一巡して、生まれた年の干支に戻ることをお祝いする風習です。
            有名な「丙午（ひのえうま）」もこの組み合わせの一つです。
          </p>
        </div>

        <div className="description-section">
          <h2>九星（きゅうせい）とは</h2>
          <p>
            九星気学（きゅうせいきがく）などで用いられる、生まれた年によって定まる9つの星のことです。
            「一白水星」「二黒土星」「三碧木星」「四緑木星」「五黄土星」「六白金星」「七赤金星」「八白土星」「九紫火星」の9つがあります。
            それぞれの星には特徴や運勢、相性があり、性格判断や方位の吉凶を占う際に使われます。
          </p>
        </div>

        <div className="description-section">
          <h2>六曜（ろくよう）とは</h2>
          <p>
            六曜は、日にちの吉凶を占う指標の一つとして、日本で広く親しまれています。カレンダーによく記載されている「大安」「仏滅」などがこれにあたります。
          </p>
          <ul>
            <li>
              <strong>大安（たいあん）</strong>:
              「さらに大いに安し」という意味で、何事においても吉とされる日です。結婚式や建前などの慶事、引っ越しなどを行うのに最も良い日とされています。
            </li>
            <li>
              <strong>仏滅（ぶつめつ）</strong>:
              「仏も滅するような大凶日」という意味があり、六曜の中で最も縁起が悪い日とされています。お祝い事は避けられる傾向にありますが、葬儀や法事などには問題ありません。
            </li>
            <li>
              <strong>先勝（せんしょう・さきがち）</strong>:
              「先んずれば即ち勝つ」という意味で、午前中は吉、午後は凶とされています。急ぎの用事や訴訟などに良い日です。
            </li>
            <li>
              <strong>友引（ともびき）</strong>:
              「凶事に友を引く」という意味があり、葬儀を行うのは避けるべき日とされています。朝晩は吉、昼は凶です。
            </li>
            <li>
              <strong>先負（せんぶ・さきまけ）</strong>:
              「先んずれば即ち負ける」という意味で、午前中は凶、午後は吉とされています。勝負事や急用は避けて、静かに過ごすのが良い日です。
            </li>
            <li>
              <strong>赤口（しゃっこう・しゃっく）</strong>:
              陰陽道に由来する凶日で、正午ごろのみ吉、それ以外は凶とされています。火や刃物を扱うことに注意が必要な日です。
            </li>
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section id="about-section" className="description-container">
      <div className="description-section">
        <h2>About This Tool</h2>
        <p>
          This &quot;Japanese Calendar Tool&quot; allows you to calculate the
          Japanese Era (Wareki), Sexagenary Cycle (Eto), and Zodiac sign, as
          well as Nine Star Ki, Rokuyo, and Moon Phase from any Western calendar
          date.
        </p>
        <p>
          It also calculates dates based on a specific offset (e.g., 100 days
          after a date), making it perfect for finding milestones like your
          10,000th day since birth. We hope this tool helps you cherish every
          single day.
        </p>
      </div>

      <div className="description-section">
        <h2>About Wareki (Japanese Era)</h2>
        <p>
          Wareki is Japan&#39;s unique calendar system that counts years using
          era names such as Meiji, Taisho, Showa, Heisei, and Reiwa. Continuing
          since the Asuka period, this system is a rare cultural heritage used
          to this day.
        </p>
      </div>

      <div className="description-section">
        <h2>About Sexagenary Cycle (Eto)</h2>
        <p>
          While often referred to simply as the &quot;Chinese Zodiac&quot; (the
          12 animals), the full Sexagenary Cycle combines the Ten Heavenly Stems
          and the Twelve Earthly Branches to create a 60-year cycle.
        </p>
        <p>
          For example, the celebration of &quot;Kanreki&quot; at age 60 marks
          the completion of one full cycle, signifying a return to one&#39;s
          birth zodiac combination and a form of rebirth.
        </p>
      </div>

      <div className="description-section">
        <h2>About Nine Star Ki</h2>
        <p>
          Nine Star Ki (Kyusei) relies on nine stars assigned to years, months,
          and days. It is a form of astrology used to determine personality
          traits, compatibility, and lucky directions. The nine stars are: 1
          White Water, 2 Black Earth, 3 Turquoise Wood, 4 Green Wood, 5 Yellow
          Earth, 6 White Metal, 7 Red Metal, 8 White Earth, and 9 Purple Fire.
        </p>
      </div>

      <div className="description-section">
        <h2>About Rokuyo</h2>
        <p>
          Rokuyo is a six-day cycle used in Japan to predict the fortune of a
          day. You will often see these marked on Japanese calendars.
        </p>
        <ul>
          <li>
            <strong>Taian (Great Peace)</strong>: The most auspicious day.
            Considered excellent for weddings, moving, and starting new
            ventures.
          </li>
          <li>
            <strong>Butsumetsu (Buddha&#39;s Death)</strong>: The least
            auspicious day. Celebrations are generally avoided, but it is
            acceptable for funerals.
          </li>
          <li>
            <strong>Sensho (Good Luck in the Morning)</strong>: Good luck in the
            morning, bad luck in the afternoon. Good for urgent business.
          </li>
          <li>
            <strong>Tomobiki (Pulling Friends)</strong>: Bad for funerals (as it
            implies pulling friends into death), but generally good for other
            events. Good in morning and evening, bad at noon.
          </li>
          <li>
            <strong>Senbu (Good Luck in the Afternoon)</strong>: Bad luck in the
            morning, good luck in the afternoon. Better to stay calm and avoid
            rushing.
          </li>
          <li>
            <strong>Shakko (Red Mouth)</strong>: A day of bad luck, except for
            around noon. Caution is advised with fire and knives.
          </li>
        </ul>
      </div>
    </section>
  );
}
