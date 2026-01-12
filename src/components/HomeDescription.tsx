"use client";

import { useLanguage } from "@/lib/i18n/config";

export default function HomeDescription({
  isOpen = false,
  onToggle,
}: {
  isOpen?: boolean;
  onToggle?: () => void;
}) {
  const language = useLanguage();

  if (!isOpen) {
    return (
      <section
        id="about-section"
        className="description-container"
        style={{ paddingBottom: 0 }}
      >
        <div
          className="description-section"
          style={{ border: "none", marginBottom: 0 }}
        >
          <h2
            onClick={onToggle}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ fontSize: "0.8em", opacity: 0.7 }}>▶</span>
            {language === "ja" ? "このツールについて" : "About This Tool"}
          </h2>
        </div>
      </section>
    );
  }

  if (language === "ja") {
    return (
      <section id="about-section" className="description-container">
        <div className="description-section">
          <h2
            onClick={onToggle}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            <span style={{ fontSize: "0.8em", opacity: 0.7 }}>▼</span>
            このツールについて
          </h2>
          <p>
            この「暦計算ツール」は、西暦の日付から和暦（元号）、和風月名、干支（十干・十二支）、星座だけでなく、九星、六曜、十二直、月の満ち欠けを計算することができるツールです。
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
          <h2>和風月名（わふうげつめい）とは</h2>
          <p>
            旧暦の月には、数字ではなく季節感を表す美しい名前が付けられています。「睦月（1月）」「如月（2月）」などがこれにあたり、現代でもカレンダーや手紙の挨拶などで広く使われています。
          </p>
          <ul>
            <li>
              <strong>睦月（むつき・1月）</strong>: 親族が仲睦まじく集まる月。
            </li>
            <li>
              <strong>如月（きさらぎ・2月）</strong>: 寒さで着物を更に重ねる月。
            </li>
            <li>
              <strong>弥生（やよい・3月）</strong>: 草木がいよいよ生い茂る月。
            </li>
            <li>
              <strong>卯月（うづき・4月）</strong>: 卯の花が咲く月。
            </li>
            <li>
              <strong>皐月（さつき・5月）</strong>: 早苗（さなえ）を植える月。
            </li>
            <li>
              <strong>水無月（みなづき・6月）</strong>:
              田に水を引く月（「無」は「の」の意）。
            </li>
            <li>
              <strong>文月（ふみづき・7月）</strong>:
              穂が見える月、または七夕で詩歌を献じる月。
            </li>
            <li>
              <strong>葉月（はづき・8月）</strong>: 木々の葉が落ちる月。
            </li>
            <li>
              <strong>長月（ながつき・9月）</strong>: 夜が長くなる月。
            </li>
            <li>
              <strong>神無月（かんなづき・10月）</strong>:
              神々が出雲に集まり留守になる月。
            </li>
            <li>
              <strong>霜月（しもつき・11月）</strong>: 霜が降りる月。
            </li>
            <li>
              <strong>師走（しわす・12月）</strong>:
              師（僧）が走り回るほど忙しい月。
            </li>
          </ul>
        </div>

        <div className="description-section">
          <h2>干支（十干十二支）とは</h2>
          <p>
            一般的に「干支（えと）」というと「子・丑・寅…」の十二支（じゅうにし）を指すことが多いですが、本来は「十干（じっかん）」と「十二支」を組み合わせた60通りのサイクルのことを指します。
          </p>
          <p>
            干支は「2024年（甲辰）」のように年ごとに決まるものだけでなく、月や日にもそれぞれ割り当てられています。
          </p>
          <p>
            十干は「甲・乙・丙・丁・戊・己・庚・辛・壬・癸」、十二支は「子・丑・寅・卯・辰・巳・午・未・申・酉・戌・亥」です。
          </p>
          <p>
            例えば、60才の還暦（かんれき）は、この60通りの干支が一巡して、生まれた年の干支に戻ることをお祝いする風習です。
            有名な「丙午（ひのえうま）」もこの組み合わせの一つです。
          </p>
        </div>

        <div className="description-section">
          <h2>九星（きゅうせい）とは</h2>
          <p>
            九星気学（きゅうせいきがく）などで用いられる、生まれた年によって定まる9つの星のことです。
            年だけでなく、月や日それぞれにも九星が定められており、それらを組み合わせて運勢を占うことが一般的です。
          </p>
          <p>
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

        <div className="description-section">
          <h2>十二直（じゅうにちょく）とは</h2>
          <p>
            北斗七星の動きをもとに定められた、日の吉凶を占う12種類のサイクルです。建築、移転、結婚などの日取りを決める際によく用いられます。
          </p>
          <ul>
            <li>
              <strong>建（たつ）</strong>: 万物を建て生じる日。吉日。
            </li>
            <li>
              <strong>除（のぞく）</strong>: 障害を取り除く日。掃除や治療に吉。
            </li>
            <li>
              <strong>満（みつ）</strong>: 全てが満たされる日。移転や結婚に吉。
            </li>
            <li>
              <strong>平（たいら）</strong>: 物事が平らかになる日。相談事に吉。
            </li>
            <li>
              <strong>定（さだん）</strong>: 物事が定まる日。契約や結婚に吉。
            </li>
            <li>
              <strong>執（とる）</strong>: 執り行う日。祭祀や種まきに吉。
            </li>
            <li>
              <strong>破（やぶる）</strong>: 突き破る日。訴訟や漁猟に吉。
            </li>
            <li>
              <strong>危（あやぶ）</strong>: 危惧する日。旅行や登山は控えめに。
            </li>
            <li>
              <strong>成（なる）</strong>:
              物事が成就する日。新規事業や結婚に吉。
            </li>
            <li>
              <strong>納（おさん）</strong>: 物事を納める日。収穫や購入に吉。
            </li>
            <li>
              <strong>開（ひらく）</strong>: 開き通じる日。開店や移転に吉。
            </li>
            <li>
              <strong>閉（とづ）</strong>:
              閉じ込める日。金銭収納に吉、開店は凶。
            </li>
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section id="about-section" className="description-container">
      <div className="description-section">
        <h2
          onClick={onToggle}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ fontSize: "0.8em", opacity: 0.7 }}>▼</span>
          About This Tool
        </h2>
        <p>
          This &quot;Japanese Calendar Tool&quot; allows you to calculate the
          Japanese Era (Wareki), Wafu Getsumei, Sexagenary Cycle (Eto), and
          Zodiac sign, as well as Nine Star Ki, Rokuyo, 12 Choku, and Moon Phase
          from any Western calendar date.
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
          Wareki is Japan&apos;s unique calendar system that counts years using
          era names such as Meiji, Taisho, Showa, Heisei, and Reiwa. Continuing
          since the Asuka period, this system is a rare cultural heritage used
          to this day.
        </p>
      </div>

      <div className="description-section">
        <h2>About Wafu Getsumei</h2>
        <p>
          In the traditional Japanese calendar, months are given beautiful names
          that reflect the season rather than just numbers. Examples include
          &quot;Mutsuki&quot; (January) and &quot;Kisaragi&quot; (February).
          These names are still widely used in calendars and formal greetings.
        </p>
        <ul>
          <li>
            <strong>Mutsuki (Jan)</strong>: Month of Harmony.
          </li>
          <li>
            <strong>Kisaragi (Feb)</strong>: Month of Changing Clothes.
          </li>
          <li>
            <strong>Yayoi (Mar)</strong>: Month of New Life.
          </li>
          <li>
            <strong>Uzuki (Apr)</strong>: Month of Utsugi Flowers.
          </li>
          <li>
            <strong>Satsuki (May)</strong>: Month of Rice Planting.
          </li>
          <li>
            <strong>Minazuki (Jun)</strong>: Month of Water.
          </li>
          <li>
            <strong>Fumizuki (Jul)</strong>: Month of Letters.
          </li>
          <li>
            <strong>Hazuki (Aug)</strong>: Month of Leaves.
          </li>
          <li>
            <strong>Nagatsuki (Sep)</strong>: Month of Long Nights.
          </li>
          <li>
            <strong>Kannazuki (Oct)</strong>: Month of No Gods.
          </li>
          <li>
            <strong>Shimotsuki (Nov)</strong>: Month of Frost.
          </li>
          <li>
            <strong>Shiwasu (Dec)</strong>: Month of Priests Running.
          </li>
        </ul>
      </div>

      <div className="description-section">
        <h2>About Sexagenary Cycle (Eto)</h2>
        <p>
          While often referred to simply as the &quot;Chinese Zodiac&quot; (the
          12 animals), the full Sexagenary Cycle combines the Ten Heavenly Stems
          and the Twelve Earthly Branches to create a 60-year cycle.
        </p>
        <p>
          This cycle applies not only to years (e.g., &quot;Year of the Wood
          Dragon&quot;) but also to months and days.
        </p>
        <p>
          For example, the celebration of &quot;Kanreki&quot; at age 60 marks
          the completion of one full cycle, signifying a return to one&apos;s
          birth zodiac combination and a form of rebirth.
        </p>
      </div>

      <div className="description-section">
        <h2>About Nine Star Ki</h2>
        <p>
          Nine Star Ki (Kyusei) relies on nine stars assigned to years, months,
          and days. It is a form of astrology used to determine personality
          traits, compatibility, and lucky directions. Commonly, fortunes are
          read by combining the stars of the year, month, and day.
        </p>
        <p>
          The nine stars are: 1 White Water, 2 Black Earth, 3 Turquoise Wood, 4
          Green Wood, 5 Yellow Earth, 6 White Metal, 7 Red Metal, 8 White Earth,
          and 9 Purple Fire.
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
            <strong>Butsumetsu (Buddha&apos;s Death)</strong>: The least
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

      <div className="description-section">
        <h2>About 12 Choku</h2>
        <p>
          The 12 Choku is a cycle of 12 days used to determine the fortune of a
          day, based on the movement of the Big Dipper (Ursa Major). It is often
          used for selecting auspicious dates.
        </p>
        <ul>
          <li>
            <strong>Ken (Establish)</strong>: Good for starting new things, bad
            for digging.
          </li>
          <li>
            <strong>Nozoku (Remove)</strong>: Good for cleaning and medical
            treatments.
          </li>
          <li>
            <strong>Mitsu (Full)</strong>: Good for moving, marriage, and
            construction.
          </li>
          <li>
            <strong>Taira (Level)</strong>: Good for planning and consultation.
          </li>
          <li>
            <strong>Sadan (Settle)</strong>: Good for signing contracts and
            marriage.
          </li>
          <li>
            <strong>Toru (Maintain)</strong>: Good for planting and religious
            ceremonies.
          </li>
          <li>
            <strong>Yaburu (Broken)</strong>: Good for demolition and fishing.
          </li>
          <li>
            <strong>Ayabu (Danger)</strong>: Caution required. Avoid dangerous
            activities.
          </li>
          <li>
            <strong>Naru (Achieve)</strong>: Good for new businesses and exams.
          </li>
          <li>
            <strong>Osan (Store)</strong>: Good for purchasing and harvesting.
          </li>
          <li>
            <strong>Hiraku (Open)</strong>: Good for opening businesses and
            moving.
          </li>
          <li>
            <strong>Tozu (Close)</strong>: Good for financial matters, bad for
            opening.
          </li>
        </ul>
      </div>
    </section>
  );
}
