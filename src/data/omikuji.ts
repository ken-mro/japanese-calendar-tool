export interface OmikujiEntry {
  id: number;
  result: { ja: string; en: string };
  quote: { ja: string; en: string };
  source: { ja: string; en: string };
  description: { ja: string; en: string };
  details: {
    wishes: { ja: string; en: string };
    love: { ja: string; en: string };
    visitor: { ja: string; en: string };
    business: { ja: string; en: string };
    studies: { ja: string; en: string };
    health: { ja: string; en: string };
    residence: { ja: string; en: string };
    travel: { ja: string; en: string };
  };
}

export const omikujiData: OmikujiEntry[] = [
  {
    "id": 1,
    "result": {
      "ja": "大吉",
      "en": "Great Blessing"
    },
    "quote": {
      "ja": "未来は今日始まる。明日始まるのではない。",
      "en": "The future starts today, not tomorrow."
    },
    "source": {
      "ja": "ヨハネ・パウロ2世",
      "en": "Pope John Paul II"
    },
    "description": {
      "ja": "最高の運気があなたを包んでいます。この名言が示すように、未来を変える力は「今日」のあなたの行動にあります。迷いを捨て、心に決めたことを今すぐ始めましょう。天はあなたの決断を強く後押ししています。積極的に動けば、想像以上の幸運が舞い込むでしょう。今日という日を大切に、一歩を踏み出してください。",
      "en": "The greatest fortune surrounds you now. As this quote suggests, the power to change your future lies in your actions today. Cast aside your doubts and begin what you've decided in your heart immediately. Heaven strongly supports your decisions. If you act proactively, unexpected good fortune will come your way. Cherish today and take that first step."
    },
    "details": {
      "wishes": {
        "ja": "叶う。信じて進め",
        "en": "Will come true. Believe and proceed"
      },
      "love": {
        "ja": "最高の出会いあり",
        "en": "Best encounter awaits"
      },
      "visitor": {
        "ja": "すぐに来る",
        "en": "Coming soon"
      },
      "business": {
        "ja": "大いに栄える",
        "en": "Great prosperity"
      },
      "studies": {
        "ja": "努力実る",
        "en": "Efforts bear fruit"
      },
      "health": {
        "ja": "壮健なり",
        "en": "Excellent health"
      },
      "residence": {
        "ja": "吉方に移れ",
        "en": "Move to auspicious direction"
      },
      "travel": {
        "ja": "大吉。即座に出発せよ",
        "en": "Excellent. Depart immediately"
      }
    }
  },
  {
    "id": 2,
    "result": {
      "ja": "大吉",
      "en": "Great Blessing"
    },
    "quote": {
      "ja": "千里の道も一歩から。",
      "en": "A journey of a thousand miles begins with a single step."
    },
    "source": {
      "ja": "老子",
      "en": "Laozi"
    },
    "description": {
      "ja": "素晴らしい運気の流れがあなたに訪れています。老子の教えのように、どんな大きな夢も最初の一歩から始まります。今のあなたには、その一歩を踏み出す絶好の機会が与えられています。遠大な目標を掲げても、天があなたを導いてくれるでしょう。自信を持って前進してください。大願成就の時です。",
      "en": "A wonderful flow of fortune has come to you. As Laozi taught, even the grandest dreams begin with a single step. You have been given the perfect opportunity to take that step now. Even if you set lofty goals, heaven will guide you. Move forward with confidence. This is the time for your greatest wishes to come true."
    },
    "details": {
      "wishes": {
        "ja": "大願成就す",
        "en": "Great wishes fulfilled"
      },
      "love": {
        "ja": "深き縁に恵まれる",
        "en": "Blessed with deep connections"
      },
      "visitor": {
        "ja": "吉報を持ちて来る",
        "en": "Brings good news"
      },
      "business": {
        "ja": "繁盛の兆し",
        "en": "Signs of prosperity"
      },
      "studies": {
        "ja": "大成の時",
        "en": "Time for achievement"
      },
      "health": {
        "ja": "気力充実",
        "en": "Full of vitality"
      },
      "residence": {
        "ja": "良縁の地あり",
        "en": "Auspicious land awaits"
      },
      "travel": {
        "ja": "旅先で幸運得る",
        "en": "Good fortune in travels"
      }
    }
  },
  {
    "id": 3,
    "result": {
      "ja": "大吉",
      "en": "Great Blessing"
    },
    "quote": {
      "ja": "成功とは、情熱を失わずに失敗から失敗へと歩むことである。",
      "en": "Success is walking from failure to failure with no loss of enthusiasm."
    },
    "source": {
      "ja": "ウィンストン・チャーチル",
      "en": "Winston Churchill"
    },
    "description": {
      "ja": "あなたの運勢は最高潮に達しています。チャーチルの言葉が示すように、過去の失敗や挫折は全て今日の成功への布石でした。情熱を持ち続けたあなたに、ついに実りの時が訪れました。これまでの努力が報われ、望んでいた成果が手に入るでしょう。自分を信じ、堂々と前に進んでください。",
      "en": "Your fortune has reached its peak. As Churchill's words indicate, all your past failures and setbacks were stepping stones to today's success. The time of harvest has finally come for you who maintained your passion. Your efforts will be rewarded, and you will obtain the results you desired. Believe in yourself and move forward confidently."
    },
    "details": {
      "wishes": {
        "ja": "望み通りになる",
        "en": "As you wish"
      },
      "love": {
        "ja": "真実の愛を得る",
        "en": "Find true love"
      },
      "visitor": {
        "ja": "思いがけず来る",
        "en": "Comes unexpectedly"
      },
      "business": {
        "ja": "大いに利あり",
        "en": "Great profit"
      },
      "studies": {
        "ja": "才能開花す",
        "en": "Talents blossom"
      },
      "health": {
        "ja": "健やかなり",
        "en": "Good health"
      },
      "residence": {
        "ja": "今の住まい吉",
        "en": "Current home is blessed"
      },
      "travel": {
        "ja": "行けば大吉",
        "en": "Great fortune if you go"
      }
    }
  },
  {
    "id": 4,
    "result": {
      "ja": "大吉",
      "en": "Great Blessing"
    },
    "quote": {
      "ja": "人生で最も大切なのは、生きることそのものだ。",
      "en": "The most important thing in life is life itself."
    },
    "source": {
      "ja": "ゲーテ",
      "en": "Goethe"
    },
    "description": {
      "ja": "天が最大の祝福をあなたに与えています。ゲーテが説いたように、生きていること自体が最高の贈り物です。今のあなたは、その生命力に満ち溢れ、何をしても上手くいく時期にいます。日々の小さな幸せを味わいながら、大きな目標にも挑戦してください。人生の醍醐味を存分に楽しめる運気です。",
      "en": "Heaven bestows its greatest blessing upon you. As Goethe explained, being alive itself is the greatest gift. You are now filled with this life force, and this is a time when everything you do will succeed. Enjoy the small happiness of daily life while also challenging great goals. This is a fortune to fully enjoy the essence of life."
    },
    "details": {
      "wishes": {
        "ja": "思うままに叶う",
        "en": "Wishes come true freely"
      },
      "love": {
        "ja": "運命の人現る",
        "en": "Destined person appears"
      },
      "visitor": {
        "ja": "早く来る",
        "en": "Comes early"
      },
      "business": {
        "ja": "万事好調",
        "en": "All goes well"
      },
      "studies": {
        "ja": "学び多し",
        "en": "Much learning"
      },
      "health": {
        "ja": "長寿の相",
        "en": "Sign of longevity"
      },
      "residence": {
        "ja": "移転大吉",
        "en": "Moving is excellent"
      },
      "travel": {
        "ja": "旅立ち最良",
        "en": "Best time to travel"
      }
    }
  },
  {
    "id": 5,
    "result": {
      "ja": "大吉",
      "en": "Great Blessing"
    },
    "quote": {
      "ja": "自分を信じろ。自分にできると知っているなら、必ずできる。",
      "en": "Believe in yourself. If you know you can do it, you will."
    },
    "source": {
      "ja": "ジョン・レノン",
      "en": "John Lennon"
    },
    "description": {
      "ja": "あなたの運気は頂点にあります。ジョン・レノンの言葉通り、自分を信じる力が全ての扉を開く鍵となります。今のあなたには、夢を現実にする力が備わっています。周囲の雑音に惑わされず、心の声に従って進んでください。信念を持って行動すれば、必ず道は開けます。輝かしい未来があなたを待っています。",
      "en": "Your fortune is at its zenith. As John Lennon said, the power to believe in yourself is the key that opens all doors. You now have the power to turn dreams into reality. Don't be swayed by surrounding noise; follow your heart's voice. If you act with conviction, the path will surely open. A brilliant future awaits you."
    },
    "details": {
      "wishes": {
        "ja": "願い叶う時来る",
        "en": "Time for wishes to come true"
      },
      "love": {
        "ja": "幸せな恋愛成就",
        "en": "Happy love fulfilled"
      },
      "visitor": {
        "ja": "良き知らせと共に",
        "en": "Comes with good news"
      },
      "business": {
        "ja": "発展著しい",
        "en": "Remarkable development"
      },
      "studies": {
        "ja": "合格間違いなし",
        "en": "Certain to pass"
      },
      "health": {
        "ja": "心身充実",
        "en": "Mind and body fulfilled"
      },
      "residence": {
        "ja": "理想の地見つかる",
        "en": "Ideal place found"
      },
      "travel": {
        "ja": "出発吉日なり",
        "en": "Auspicious day to depart"
      }
    }
  },
  {
    "id": 6,
    "result": {
      "ja": "大吉",
      "en": "Great Blessing"
    },
    "quote": {
      "ja": "想像力は知識よりも重要である。",
      "en": "Imagination is more important than knowledge."
    },
    "source": {
      "ja": "アルベルト・アインシュタイン",
      "en": "Albert Einstein"
    },
    "description": {
      "ja": "最高の運勢があなたを照らしています。アインシュタインが語ったように、想像力こそが新しい世界を切り開く原動力です。今のあなたの発想や閃きには、特別な力が宿っています。思い描いた理想は、そのまま現実となる可能性を秘めています。創造的なアイデアを大切にし、果敢に挑戦してください。",
      "en": "The greatest fortune illuminates you. As Einstein said, imagination is the driving force that opens new worlds. Your ideas and inspirations now hold special power. The ideals you envision have the potential to become reality. Cherish your creative ideas and challenge boldly."
    },
    "details": {
      "wishes": {
        "ja": "大きな願い叶う",
        "en": "Great wishes granted"
      },
      "love": {
        "ja": "最良の縁あり",
        "en": "Best connection awaits"
      },
      "visitor": {
        "ja": "待ち人喜びて来る",
        "en": "Visitor comes with joy"
      },
      "business": {
        "ja": "財運上昇",
        "en": "Financial fortune rises"
      },
      "studies": {
        "ja": "知恵深まる",
        "en": "Wisdom deepens"
      },
      "health": {
        "ja": "活力みなぎる",
        "en": "Overflowing vitality"
      },
      "residence": {
        "ja": "吉相の地",
        "en": "Auspicious land"
      },
      "travel": {
        "ja": "旅は大成功",
        "en": "Travel is great success"
      }
    }
  },
  {
    "id": 7,
    "result": {
      "ja": "大吉",
      "en": "Great Blessing"
    },
    "quote": {
      "ja": "行動は全ての成功の基本的な鍵である。",
      "en": "Action is the foundational key to all success."
    },
    "source": {
      "ja": "パブロ・ピカソ",
      "en": "Pablo Picasso"
    },
    "description": {
      "ja": "天があなたに最大の幸運を授けています。ピカソの言葉が示すように、行動こそが成功への唯一の道です。今のあなたには、動けば動くほど運が開ける絶好の時期が訪れています。考えすぎず、感じたままに行動してください。その一つ一つが大きな成果へとつながります。躊躇は不要、今こそ飛躍の時です。",
      "en": "Heaven grants you the greatest fortune. As Picasso's words show, action is the only path to success. This is the perfect time when the more you move, the more your fortune opens. Don't overthink; act as you feel. Each action leads to great results. No hesitation needed; now is the time to soar."
    },
    "details": {
      "wishes": {
        "ja": "速やかに成就す",
        "en": "Swift fulfillment"
      },
      "love": {
        "ja": "愛情深まる",
        "en": "Love deepens"
      },
      "visitor": {
        "ja": "間もなく来る",
        "en": "Coming soon"
      },
      "business": {
        "ja": "商売繁盛",
        "en": "Business flourishes"
      },
      "studies": {
        "ja": "学業優秀",
        "en": "Academic excellence"
      },
      "health": {
        "ja": "無病息災",
        "en": "Free from illness"
      },
      "residence": {
        "ja": "安住の地得る",
        "en": "Find place of peace"
      },
      "travel": {
        "ja": "万事順調の旅",
        "en": "Smooth journey ahead"
      }
    }
  },
  {
    "id": 8,
    "result": {
      "ja": "吉",
      "en": "Blessing"
    },
    "quote": {
      "ja": "幸福は香水のようなものだ。人に振りかけると自分にも必ずかかる。",
      "en": "Happiness is like perfume. You can't pour it on others without getting a few drops on yourself."
    },
    "source": {
      "ja": "ラルフ・ワルド・エマーソン",
      "en": "Ralph Waldo Emerson"
    },
    "description": {
      "ja": "良い運気があなたを包んでいます。エマーソンの言葉のように、他者への優しさや思いやりが、巡り巡ってあなた自身の幸せとなって返ってきます。周囲の人を大切にし、惜しみなく与えることで、さらに運気は上昇するでしょう。焦らず穏やかな心で過ごせば、望みは自然と叶っていきます。",
      "en": "Good fortune surrounds you. As Emerson's words suggest, kindness and compassion toward others will circle back as your own happiness. By cherishing those around you and giving generously, your fortune will rise further. If you spend time with a calm heart without rushing, your wishes will naturally come true."
    },
    "details": {
      "wishes": {
        "ja": "叶う。焦らず待て",
        "en": "Will come true. Wait patiently"
      },
      "love": {
        "ja": "良縁あり",
        "en": "Good match awaits"
      },
      "visitor": {
        "ja": "来る。待つ価値あり",
        "en": "Coming. Worth waiting"
      },
      "business": {
        "ja": "利益あり",
        "en": "Profit ahead"
      },
      "studies": {
        "ja": "上達する",
        "en": "Improvement"
      },
      "health": {
        "ja": "良好なり",
        "en": "Good condition"
      },
      "residence": {
        "ja": "現状維持が吉",
        "en": "Maintain current state"
      },
      "travel": {
        "ja": "吉。準備を整えよ",
        "en": "Good. Prepare well"
      }
    }
  },
  {
    "id": 9,
    "result": {
      "ja": "吉",
      "en": "Blessing"
    },
    "quote": {
      "ja": "人生は自転車に乗るようなものだ。倒れないためには走り続けなければならない。",
      "en": "Life is like riding a bicycle. To keep your balance, you must keep moving."
    },
    "source": {
      "ja": "アルベルト・アインシュタイン",
      "en": "Albert Einstein"
    },
    "description": {
      "ja": "安定した良い運気の中にいます。アインシュタインの言葉通り、立ち止まらず前に進み続けることが大切です。今のあなたの努力は確実に実を結びつつあります。多少の困難があっても、ペダルを漕ぎ続ければ必ず乗り越えられます。継続する力が、やがて大きな成功へとつながるでしょう。",
      "en": "You are in stable good fortune. As Einstein said, it's important not to stop but to keep moving forward. Your current efforts are surely bearing fruit. Even with some difficulties, if you keep pedaling, you will overcome them. The power to continue will eventually lead to great success."
    },
    "details": {
      "wishes": {
        "ja": "努力すれば叶う",
        "en": "Will come true with effort"
      },
      "love": {
        "ja": "誠意が通じる",
        "en": "Sincerity gets through"
      },
      "visitor": {
        "ja": "便りあって来る",
        "en": "Comes with news"
      },
      "business": {
        "ja": "順調に伸びる",
        "en": "Growing steadily"
      },
      "studies": {
        "ja": "進歩あり",
        "en": "Progress made"
      },
      "health": {
        "ja": "回復の兆し",
        "en": "Signs of recovery"
      },
      "residence": {
        "ja": "移転可",
        "en": "Moving possible"
      },
      "travel": {
        "ja": "行けば良し",
        "en": "Good if you go"
      }
    }
  },
  {
    "id": 10,
    "result": {
      "ja": "吉",
      "en": "Blessing"
    },
    "quote": {
      "ja": "今日という日は、残りの人生の最初の日である。",
      "en": "Today is the first day of the rest of your life."
    },
    "source": {
      "ja": "チャールズ・ディードリッヒ",
      "en": "Charles Dederich"
    },
    "description": {
      "ja": "運気は順調に上向いています。この名言が教えるように、今日は新たな人生の出発点です。過去にとらわれず、今この瞬間から始める気持ちで物事に取り組めば、道は大きく開けていきます。前向きな姿勢が幸運を引き寄せる時期です。希望を胸に、新鮮な気持ちで一日一日を過ごしてください。",
      "en": "Fortune is steadily rising. As this quote teaches, today is the starting point of a new life. If you approach things with a fresh perspective, free from the past, the path will open wide. This is a time when a positive attitude attracts good fortune. Live each day with hope and a fresh spirit."
    },
    "details": {
      "wishes": {
        "ja": "望みは叶う",
        "en": "Wishes come true"
      },
      "love": {
        "ja": "心通じ合う",
        "en": "Hearts connect"
      },
      "visitor": {
        "ja": "近々来る",
        "en": "Coming soon"
      },
      "business": {
        "ja": "好調なり",
        "en": "Favorable"
      },
      "studies": {
        "ja": "成果出る",
        "en": "Results appear"
      },
      "health": {
        "ja": "健康維持せよ",
        "en": "Maintain health"
      },
      "residence": {
        "ja": "吉方あり",
        "en": "Auspicious direction"
      },
      "travel": {
        "ja": "旅立ち良し",
        "en": "Good to travel"
      }
    }
  },
  {
    "id": 11,
    "result": {
      "ja": "吉",
      "en": "Blessing"
    },
    "quote": {
      "ja": "困難な道こそ、美しい景色に通じている。",
      "en": "The difficult road often leads to the most beautiful destination."
    },
    "source": {
      "ja": "ネルソン・マンデラ",
      "en": "Nelson Mandela"
    },
    "description": {
      "ja": "良い運気の中にありますが、少し努力が必要な時期です。マンデラの言葉のように、困難を乗り越えた先には素晴らしい景色が待っています。今直面している課題は、あなたを成長させるための試練です。逃げずに向き合えば、想像以上の喜びを手にすることができるでしょう。忍耐が報われる時は近いです。",
      "en": "You are in good fortune, but some effort is needed. As Mandela's words suggest, wonderful views await beyond difficulties. The challenges you face now are trials to help you grow. If you face them without running away, you can obtain joy beyond imagination. The time when patience is rewarded is near."
    },
    "details": {
      "wishes": {
        "ja": "時間かかるが叶う",
        "en": "Takes time but comes true"
      },
      "love": {
        "ja": "真心伝わる",
        "en": "True feelings conveyed"
      },
      "visitor": {
        "ja": "遅れて来る",
        "en": "Comes late"
      },
      "business": {
        "ja": "地道に発展",
        "en": "Steady development"
      },
      "studies": {
        "ja": "理解深まる",
        "en": "Understanding deepens"
      },
      "health": {
        "ja": "養生すれば吉",
        "en": "Good with care"
      },
      "residence": {
        "ja": "静かな地が吉",
        "en": "Quiet place is good"
      },
      "travel": {
        "ja": "苦労あるが吉",
        "en": "Hardship but good"
      }
    }
  },
  {
    "id": 12,
    "result": {
      "ja": "吉",
      "en": "Blessing"
    },
    "quote": {
      "ja": "毎日を人生最後の日だと思って生きなさい。",
      "en": "Live each day as if it were your last."
    },
    "source": {
      "ja": "スティーブ・ジョブズ",
      "en": "Steve Jobs"
    },
    "description": {
      "ja": "運気は良好で、行動を起こすのに適した時期です。ジョブズの言葉のように、一日一日を大切に、後悔のない選択をしてください。今のあなたには、決断力と実行力が備わっています。先延ばしにせず、やりたいことに今すぐ取り組めば、確実に成果を得ることができます。充実した日々が待っています。",
      "en": "Fortune is good, and this is a suitable time to take action. As Jobs said, cherish each day and make choices without regret. You now have decisiveness and execution power. If you act on what you want without delay, you will surely achieve results. Fulfilling days await."
    },
    "details": {
      "wishes": {
        "ja": "信念持てば叶う",
        "en": "Comes true with conviction"
      },
      "love": {
        "ja": "素敵な出会い",
        "en": "Wonderful encounter"
      },
      "visitor": {
        "ja": "待てば来る",
        "en": "Comes if you wait"
      },
      "business": {
        "ja": "堅実に進めよ",
        "en": "Proceed steadily"
      },
      "studies": {
        "ja": "目標達成近し",
        "en": "Goal achievement near"
      },
      "health": {
        "ja": "規則正しく過ごせ",
        "en": "Live regularly"
      },
      "residence": {
        "ja": "今の場所で吉",
        "en": "Current place is good"
      },
      "travel": {
        "ja": "計画通り進む",
        "en": "Proceeds as planned"
      }
    }
  },
  {
    "id": 13,
    "result": {
      "ja": "吉",
      "en": "Blessing"
    },
    "quote": {
      "ja": "人は何度でもやり直せる。",
      "en": "Anyone can start over."
    },
    "source": {
      "ja": "マーク・トウェイン",
      "en": "Mark Twain"
    },
    "description": {
      "ja": "希望に満ちた運気があなたを支えています。トウェインの言葉通り、何度失敗しても立ち上がる力があなたにはあります。過去の挫折を気にする必要はありません。今この瞬間から、新しい一歩を踏み出せば、運命は好転していきます。再挑戦を恐れず、前を向いて進んでください。きっとうまくいきます。",
      "en": "Fortune filled with hope supports you. As Twain said, you have the power to rise no matter how many times you fail. No need to worry about past setbacks. If you take a new step from this very moment, fate will turn favorable. Don't fear trying again; look forward. It will surely work out."
    },
    "details": {
      "wishes": {
        "ja": "願い通じる",
        "en": "Wishes get through"
      },
      "love": {
        "ja": "縁結びあり",
        "en": "Match-making awaits"
      },
      "visitor": {
        "ja": "音信あり",
        "en": "News comes"
      },
      "business": {
        "ja": "着実に成長",
        "en": "Steady growth"
      },
      "studies": {
        "ja": "努力報われる",
        "en": "Efforts rewarded"
      },
      "health": {
        "ja": "元気回復",
        "en": "Energy recovered"
      },
      "residence": {
        "ja": "新居に福あり",
        "en": "Blessings in new home"
      },
      "travel": {
        "ja": "旅は順調",
        "en": "Smooth journey"
      }
    }
  },
  {
    "id": 14,
    "result": {
      "ja": "吉",
      "en": "Blessing"
    },
    "quote": {
      "ja": "小さなことを完璧にやれ。そうすれば大きなことも同じようにできる。",
      "en": "Do small things perfectly. Then you can do big things the same way."
    },
    "source": {
      "ja": "レオナルド・ダ・ヴィンチ",
      "en": "Leonardo da Vinci"
    },
    "description": {
      "ja": "着実に運気が上昇しています。ダ・ヴィンチの教えのように、目の前の小さなことを丁寧にこなすことが、大きな成功への近道です。派手な行動よりも、地道な積み重ねが今のあなたには必要です。細部にこだわり、一つ一つを完璧に仕上げていけば、やがて大きな実りを手にすることができるでしょう。",
      "en": "Fortune is steadily rising. As da Vinci taught, handling small matters carefully is the shortcut to great success. Flashy actions are less important than steady accumulation right now. If you pay attention to details and complete each task perfectly, you will eventually reap great rewards."
    },
    "details": {
      "wishes": {
        "ja": "着実に進む",
        "en": "Steady progress"
      },
      "love": {
        "ja": "誠実さが実る",
        "en": "Sincerity bears fruit"
      },
      "visitor": {
        "ja": "やがて来る",
        "en": "Eventually comes"
      },
      "business": {
        "ja": "細やかな努力が実る",
        "en": "Detailed efforts pay off"
      },
      "studies": {
        "ja": "基礎固まる",
        "en": "Foundation solidifies"
      },
      "health": {
        "ja": "注意すれば良好",
        "en": "Good with attention"
      },
      "residence": {
        "ja": "整えれば吉",
        "en": "Good if organized"
      },
      "travel": {
        "ja": "下調べして出発",
        "en": "Research before departure"
      }
    }
  },
  {
    "id": 15,
    "result": {
      "ja": "吉",
      "en": "Blessing"
    },
    "quote": {
      "ja": "人生において重要なのは勝利ではなく、奮闘することである。",
      "en": "What matters in life is not victory but the struggle."
    },
    "source": {
      "ja": "ピエール・ド・クーベルタン",
      "en": "Pierre de Coubertin"
    },
    "description": {
      "ja": "良い運気の波に乗っています。クーベルタンの言葉のように、結果だけでなく過程を楽しむ心が大切です。今のあなたの努力や挑戦そのものに価値があります。勝ち負けにこだわりすぎず、全力で取り組む姿勢が、最終的には最高の結果をもたらすでしょう。楽しみながら前に進んでください。",
      "en": "You are riding a wave of good fortune. As Coubertin said, it's important to enjoy not just results but the process. Your current efforts and challenges themselves have value. Without being too attached to winning or losing, your wholehearted attitude will ultimately bring the best results. Enjoy as you move forward."
    },
    "details": {
      "wishes": {
        "ja": "過程を楽しめば叶う",
        "en": "Comes true if you enjoy the process"
      },
      "love": {
        "ja": "友情から愛へ",
        "en": "From friendship to love"
      },
      "visitor": {
        "ja": "知らせと共に",
        "en": "Comes with news"
      },
      "business": {
        "ja": "努力が報われる",
        "en": "Efforts rewarded"
      },
      "studies": {
        "ja": "学ぶ喜びあり",
        "en": "Joy in learning"
      },
      "health": {
        "ja": "運動吉",
        "en": "Exercise is good"
      },
      "residence": {
        "ja": "住めば都",
        "en": "Home becomes dear"
      },
      "travel": {
        "ja": "道中楽しめ",
        "en": "Enjoy the journey"
      }
    }
  },
  {
    "id": 16,
    "result": {
      "ja": "中吉",
      "en": "Moderate Blessing"
    },
    "quote": {
      "ja": "人生はどちらかだ。勇気を持って挑むか、何もしないか。",
      "en": "Life is either a daring adventure or nothing at all."
    },
    "source": {
      "ja": "ヘレン・ケラー",
      "en": "Helen Keller"
    },
    "description": {
      "ja": "まずまずの運気です。ヘレン・ケラーの言葉が示すように、今は選択の時です。安全な道を選ぶか、勇気を出して挑戦するか。どちらを選んでも悪くはありませんが、少しの勇気を出せば、より大きな実りを得られる可能性があります。慎重さと大胆さのバランスを取りながら、一歩前に踏み出してみてください。",
      "en": "Moderate fortune. As Helen Keller's words suggest, now is a time of choice. Will you choose the safe path or take courage to challenge? Neither choice is bad, but with a little courage, you may gain greater rewards. Balance caution and boldness, and try stepping forward."
    },
    "details": {
      "wishes": {
        "ja": "半ば叶う",
        "en": "Partially fulfilled"
      },
      "love": {
        "ja": "進展あり",
        "en": "Progress made"
      },
      "visitor": {
        "ja": "しばらく待て",
        "en": "Wait a while"
      },
      "business": {
        "ja": "まずまず順調",
        "en": "Reasonably smooth"
      },
      "studies": {
        "ja": "理解進む",
        "en": "Understanding advances"
      },
      "health": {
        "ja": "普通なり",
        "en": "Normal"
      },
      "residence": {
        "ja": "急がずに探せ",
        "en": "Search without rushing"
      },
      "travel": {
        "ja": "時期を見て",
        "en": "Wait for timing"
      }
    }
  },
  {
    "id": 17,
    "result": {
      "ja": "中吉",
      "en": "Moderate Blessing"
    },
    "quote": {
      "ja": "笑いは人間に与えられた最も価値のある薬である。",
      "en": "Laughter is the most valuable medicine given to humanity."
    },
    "source": {
      "ja": "ヴォルテール",
      "en": "Voltaire"
    },
    "description": {
      "ja": "穏やかな運気の中にいます。ヴォルテールの言葉通り、笑顔と明るさが運気を上昇させる鍵となります。深刻になりすぎず、ユーモアを忘れずに過ごしてください。楽しい気持ちで物事に取り組めば、周囲の人も味方につき、自然と良い方向に進んでいきます。笑う門には福来る、まさにその通りの時期です。",
      "en": "You are in calm fortune. As Voltaire said, smiles and brightness are the keys to raising your fortune. Don't be too serious; keep your sense of humor. If you approach things with a cheerful mood, people around you will become allies, and things will naturally go well. Laughter brings fortune; that's exactly true now."
    },
    "details": {
      "wishes": {
        "ja": "心持ち次第で叶う",
        "en": "Depends on your mindset"
      },
      "love": {
        "ja": "明るさが鍵",
        "en": "Brightness is key"
      },
      "visitor": {
        "ja": "楽しい便りあり",
        "en": "Cheerful news comes"
      },
      "business": {
        "ja": "サービス精神が吉",
        "en": "Service spirit brings luck"
      },
      "studies": {
        "ja": "楽しんで学べ",
        "en": "Learn with enjoyment"
      },
      "health": {
        "ja": "笑いが健康の元",
        "en": "Laughter is medicine"
      },
      "residence": {
        "ja": "にぎやかな地",
        "en": "Lively place"
      },
      "travel": {
        "ja": "楽しい旅になる",
        "en": "Enjoyable trip ahead"
      }
    }
  },
  {
    "id": 18,
    "result": {
      "ja": "中吉",
      "en": "Moderate Blessing"
    },
    "quote": {
      "ja": "失敗したことがない者は、何も新しいことに挑戦したことがない。",
      "en": "Anyone who has never made a mistake has never tried anything new."
    },
    "source": {
      "ja": "アルベルト・アインシュタイン",
      "en": "Albert Einstein"
    },
    "description": {
      "ja": "可能性に満ちた運気です。アインシュタインの言葉のように、失敗を恐れずに新しいことに挑戦する勇気が、今のあなたには必要です。安定を求めるよりも、少しリスクを取って新しい道を探ることで、運気はさらに上昇します。失敗しても大丈夫、それは成長の証です。果敢にチャレンジしてください。",
      "en": "Fortune full of possibilities. As Einstein said, the courage to challenge new things without fearing failure is what you need now. Rather than seeking stability, taking small risks and exploring new paths will raise your fortune further. Even if you fail, it's a sign of growth. Challenge boldly."
    },
    "details": {
      "wishes": {
        "ja": "挑戦すれば叶う",
        "en": "Comes true if you challenge"
      },
      "love": {
        "ja": "勇気を出せ",
        "en": "Show courage"
      },
      "visitor": {
        "ja": "思い切って誘え",
        "en": "Invite boldly"
      },
      "business": {
        "ja": "新しい試みが吉",
        "en": "New attempts bring luck"
      },
      "studies": {
        "ja": "挑戦が成長の鍵",
        "en": "Challenge is key to growth"
      },
      "health": {
        "ja": "新しい健康法を",
        "en": "Try new health methods"
      },
      "residence": {
        "ja": "新天地も可",
        "en": "New frontier possible"
      },
      "travel": {
        "ja": "未知の地へ行け",
        "en": "Go to unknown places"
      }
    }
  },
  {
    "id": 19,
    "result": {
      "ja": "中吉",
      "en": "Moderate Blessing"
    },
    "quote": {
      "ja": "他人と比較するな。昨日の自分と比較せよ。",
      "en": "Compare yourself to who you were yesterday, not to who someone else is today."
    },
    "source": {
      "ja": "ジョーダン・ピーターソン",
      "en": "Jordan Peterson"
    },
    "description": {
      "ja": "安定した運気の中にいます。この言葉が教えるように、他人と比べて焦る必要はありません。大切なのは、昨日の自分より少しでも成長すること。自分のペースで着実に進めば、確実に良い結果につながります。周囲に惑わされず、自分自身の歩みを大切にしてください。マイペースが吉となる時期です。",
      "en": "You are in stable fortune. As this quote teaches, no need to rush by comparing yourself to others. What matters is growing even a little from yesterday. If you proceed steadily at your own pace, good results will surely follow. Don't be swayed by surroundings; cherish your own progress. Your own pace brings luck."
    },
    "details": {
      "wishes": {
        "ja": "自分のペースで",
        "en": "At your own pace"
      },
      "love": {
        "ja": "自然体でいれば吉",
        "en": "Good if you're natural"
      },
      "visitor": {
        "ja": "焦らずに",
        "en": "Don't rush"
      },
      "business": {
        "ja": "マイペースで発展",
        "en": "Develop at your pace"
      },
      "studies": {
        "ja": "着実に進歩",
        "en": "Steady progress"
      },
      "health": {
        "ja": "無理せずに",
        "en": "Don't overdo it"
      },
      "residence": {
        "ja": "自分に合う地を",
        "en": "Find a place that suits you"
      },
      "travel": {
        "ja": "自分らしい旅を",
        "en": "Travel your own way"
      }
    }
  },
  {
    "id": 20,
    "result": {
      "ja": "中吉",
      "en": "Moderate Blessing"
    },
    "quote": {
      "ja": "知恵の始まりは言葉の定義である。",
      "en": "The beginning of wisdom is the definition of terms."
    },
    "source": {
      "ja": "ソクラテス",
      "en": "Socrates"
    },
    "description": {
      "ja": "知性が運を開く時期です。ソクラテスの教えのように、物事を曖昧にせず、明確に定義し理解することが大切です。何となく進めるのではなく、しっかりと考え、計画を立てて行動すれば、良い結果が得られます。学びや思考を深めることで、運気はさらに上昇するでしょう。知識を武器に前進してください。",
      "en": "A time when intellect opens fortune. As Socrates taught, it's important not to leave things vague but to define and understand them clearly. Rather than proceeding somehow, thinking carefully and planning before acting will bring good results. By deepening learning and thought, fortune will rise further. Advance with knowledge as your weapon."
    },
    "details": {
      "wishes": {
        "ja": "考えれば叶う",
        "en": "Comes true if you think"
      },
      "love": {
        "ja": "言葉を大切に",
        "en": "Value your words"
      },
      "visitor": {
        "ja": "話し合いから",
        "en": "Through discussion"
      },
      "business": {
        "ja": "明確な方針で吉",
        "en": "Clear policy brings luck"
      },
      "studies": {
        "ja": "学問吉",
        "en": "Studies favorable"
      },
      "health": {
        "ja": "知識が助けに",
        "en": "Knowledge helps"
      },
      "residence": {
        "ja": "よく調べて決めよ",
        "en": "Research well before deciding"
      },
      "travel": {
        "ja": "計画を明確に",
        "en": "Clarify your plan"
      }
    }
  },
  {
    "id": 21,
    "result": {
      "ja": "中吉",
      "en": "Moderate Blessing"
    },
    "quote": {
      "ja": "美しいものは、常にシンプルである。",
      "en": "Beautiful things are always simple."
    },
    "source": {
      "ja": "ココ・シャネル",
      "en": "Coco Chanel"
    },
    "description": {
      "ja": "バランスの取れた運気です。シャネルの言葉のように、複雑に考えすぎず、シンプルに物事を捉えることが成功の鍵となります。余計なものを削ぎ落とし、本当に大切なものだけに集中してください。飾らない素直な姿勢が、周囲の信頼を得て、良い縁を引き寄せます。簡潔さの中に美しさがあります。",
      "en": "Balanced fortune. As Chanel said, not overthinking but capturing things simply is the key to success. Strip away the unnecessary and focus only on what truly matters. An unadorned honest attitude will earn trust from others and attract good connections. Beauty lies in simplicity."
    },
    "details": {
      "wishes": {
        "ja": "シンプルに考えよ",
        "en": "Think simply"
      },
      "love": {
        "ja": "素直な気持ちで",
        "en": "With honest feelings"
      },
      "visitor": {
        "ja": "単刀直入に",
        "en": "Be direct"
      },
      "business": {
        "ja": "無駄を省けば吉",
        "en": "Good if you eliminate waste"
      },
      "studies": {
        "ja": "基本を大切に",
        "en": "Value basics"
      },
      "health": {
        "ja": "シンプルな生活を",
        "en": "Simple living"
      },
      "residence": {
        "ja": "飾らない住まい",
        "en": "Unpretentious home"
      },
      "travel": {
        "ja": "身軽に旅立て",
        "en": "Travel light"
      }
    }
  },
  {
    "id": 22,
    "result": {
      "ja": "中吉",
      "en": "Moderate Blessing"
    },
    "quote": {
      "ja": "幸せとは、自分が欲しいものを手に入れることではなく、持っているものを愛すること。",
      "en": "Happiness is not having what you want but loving what you have."
    },
    "source": {
      "ja": "西洋の格言",
      "en": "Western Proverb"
    },
    "description": {
      "ja": "穏やかで温かい運気に包まれています。この格言が教えるように、今あるものに感謝する心が、さらなる幸せを呼び込みます。新しいものを求めるよりも、今の環境や人間関係を大切にしてください。足元にある幸せに気づけば、心は満たされ、自然と運気も上向いていきます。感謝が幸運の源です。",
      "en": "You are wrapped in gentle, warm fortune. As this proverb teaches, a heart grateful for what you have now will invite further happiness. Rather than seeking new things, cherish your current environment and relationships. If you notice the happiness at your feet, your heart will be satisfied and fortune will naturally rise. Gratitude is the source of good luck."
    },
    "details": {
      "wishes": {
        "ja": "今あるものに感謝",
        "en": "Be grateful for what you have"
      },
      "love": {
        "ja": "今の縁を大切に",
        "en": "Cherish current connections"
      },
      "visitor": {
        "ja": "身近な人から",
        "en": "From someone close"
      },
      "business": {
        "ja": "現状を活かせ",
        "en": "Make use of current situation"
      },
      "studies": {
        "ja": "復習が大切",
        "en": "Review is important"
      },
      "health": {
        "ja": "今の健康を守れ",
        "en": "Protect current health"
      },
      "residence": {
        "ja": "今の住まいで吉",
        "en": "Current home is good"
      },
      "travel": {
        "ja": "近場の旅も吉",
        "en": "Nearby trips also good"
      }
    }
  },
  {
    "id": 23,
    "result": {
      "ja": "小吉",
      "en": "Small Blessing"
    },
    "quote": {
      "ja": "急がば回れ。",
      "en": "More haste, less speed."
    },
    "source": {
      "ja": "日本のことわざ",
      "en": "Japanese Proverb"
    },
    "description": {
      "ja": "小さな幸運が訪れる時期です。このことわざが示すように、近道を急ぐより、遠回りでも確実な道を選ぶ方が良い結果につながります。焦りは禁物。じっくりと時間をかけて取り組めば、望みは叶います。今は派手な行動よりも、地道な努力が実を結ぶ時期です。一歩一歩、着実に進んでください。",
      "en": "A time of small fortune. As this proverb suggests, choosing a certain path even if roundabout leads to better results than rushing for shortcuts. Patience is key. If you take time and work steadily, your wishes will come true. Now is a time when steady effort, not flashy action, bears fruit. Progress step by step."
    },
    "details": {
      "wishes": {
        "ja": "遠回りでも叶う",
        "en": "Comes true even roundabout"
      },
      "love": {
        "ja": "焦らず進めよ",
        "en": "Proceed without rushing"
      },
      "visitor": {
        "ja": "時間がかかる",
        "en": "Takes time"
      },
      "business": {
        "ja": "地道な努力が実る",
        "en": "Steady efforts pay off"
      },
      "studies": {
        "ja": "基礎から固めよ",
        "en": "Build from basics"
      },
      "health": {
        "ja": "養生大切",
        "en": "Rest is important"
      },
      "residence": {
        "ja": "慎重に選べ",
        "en": "Choose carefully"
      },
      "travel": {
        "ja": "準備を怠るな",
        "en": "Don't neglect preparation"
      }
    }
  },
  {
    "id": 24,
    "result": {
      "ja": "小吉",
      "en": "Small Blessing"
    },
    "quote": {
      "ja": "石の上にも三年。",
      "en": "Perseverance prevails."
    },
    "source": {
      "ja": "日本のことわざ",
      "en": "Japanese Proverb"
    },
    "description": {
      "ja": "辛抱が報われる運気です。このことわざ通り、すぐに結果を求めず、粘り強く続けることが大切です。今は派手な成果は見えなくても、あなたの努力は確実に積み重なっています。諦めずに続ければ、必ず花開く時が来ます。忍耐こそが最大の武器となる時期です。腰を据えて取り組んでください。",
      "en": "Fortune where patience is rewarded. As this proverb says, don't demand immediate results; persisting is important. Though dramatic results aren't visible now, your efforts are surely accumulating. If you continue without giving up, the time to bloom will surely come. Patience is your greatest weapon now. Settle in and work."
    },
    "details": {
      "wishes": {
        "ja": "辛抱すれば叶う",
        "en": "Comes true with patience"
      },
      "love": {
        "ja": "時が熟すを待て",
        "en": "Wait for the right time"
      },
      "visitor": {
        "ja": "気長に待て",
        "en": "Wait patiently"
      },
      "business": {
        "ja": "継続は力なり",
        "en": "Persistence is power"
      },
      "studies": {
        "ja": "諦めずに学べ",
        "en": "Study without giving up"
      },
      "health": {
        "ja": "忍耐が健康の秘訣",
        "en": "Patience is health secret"
      },
      "residence": {
        "ja": "今は動くな",
        "en": "Don't move now"
      },
      "travel": {
        "ja": "今は待機",
        "en": "Wait for now"
      }
    }
  },
  {
    "id": 25,
    "result": {
      "ja": "小吉",
      "en": "Small Blessing"
    },
    "quote": {
      "ja": "最も暗い夜でも、星は輝いている。",
      "en": "Even in the darkest night, stars shine."
    },
    "source": {
      "ja": "ドストエフスキー",
      "en": "Dostoevsky"
    },
    "description": {
      "ja": "困難の中にも希望がある運気です。ドストエフスキーの言葉のように、たとえ今が暗く感じても、必ず光は存在します。小さな希望の光を見失わないでください。辛い時期も永遠には続きません。今は耐える時ですが、やがて明るい朝が訪れます。希望を持ち続けることが、運気を好転させる鍵となります。",
      "en": "Fortune with hope even in difficulty. As Dostoevsky said, even if it feels dark now, light surely exists. Don't lose sight of small rays of hope. Hard times don't last forever. Now is a time to endure, but a bright morning will come. Keeping hope is the key to turning fortune around."
    },
    "details": {
      "wishes": {
        "ja": "希望を持てば叶う",
        "en": "Comes true with hope"
      },
      "love": {
        "ja": "小さな光を探せ",
        "en": "Look for small light"
      },
      "visitor": {
        "ja": "微かな便りあり",
        "en": "Faint news comes"
      },
      "business": {
        "ja": "わずかでも利あり",
        "en": "Small profit ahead"
      },
      "studies": {
        "ja": "小さな進歩を喜べ",
        "en": "Rejoice in small progress"
      },
      "health": {
        "ja": "少し注意",
        "en": "Slight caution needed"
      },
      "residence": {
        "ja": "今は辛抱",
        "en": "Endure for now"
      },
      "travel": {
        "ja": "小さな旅が吉",
        "en": "Small trip is good"
      }
    }
  },
  {
    "id": 26,
    "result": {
      "ja": "小吉",
      "en": "Small Blessing"
    },
    "quote": {
      "ja": "偉大なことを成し遂げる唯一の方法は、自分のやっていることを愛すること。",
      "en": "The only way to do great work is to love what you do."
    },
    "source": {
      "ja": "スティーブ・ジョブズ",
      "en": "Steve Jobs"
    },
    "description": {
      "ja": "情熱が運を開く時期です。ジョブズの言葉のように、心から愛せることに取り組めば、小さな幸運が積み重なっていきます。義務感や損得ではなく、本当に好きなことに時間を使ってください。愛情を注いだものは、必ず良い形であなたに返ってきます。好きという気持ちを大切に、前向きに進んでください。",
      "en": "A time when passion opens fortune. As Jobs said, if you engage in what you truly love, small fortunes will accumulate. Use your time for what you genuinely like, not from duty or profit. What you pour love into will surely return to you in good form. Cherish your feelings of love and move forward positively."
    },
    "details": {
      "wishes": {
        "ja": "愛があれば叶う",
        "en": "Comes true with love"
      },
      "love": {
        "ja": "好きな気持ちを大切に",
        "en": "Value your affection"
      },
      "visitor": {
        "ja": "心を込めて待て",
        "en": "Wait with heart"
      },
      "business": {
        "ja": "好きなことで利あり",
        "en": "Profit in what you love"
      },
      "studies": {
        "ja": "好きな分野で伸びる",
        "en": "Grow in favorite field"
      },
      "health": {
        "ja": "好きなことで健康に",
        "en": "Health through what you love"
      },
      "residence": {
        "ja": "愛着ある場所で",
        "en": "In a place with attachment"
      },
      "travel": {
        "ja": "好きな場所へ",
        "en": "Go to favorite place"
      }
    }
  },
  {
    "id": 27,
    "result": {
      "ja": "小吉",
      "en": "Small Blessing"
    },
    "quote": {
      "ja": "人間万事塞翁が馬。",
      "en": "Fortune is unpredictable, like the old man who lost his horse."
    },
    "source": {
      "ja": "中国のことわざ",
      "en": "Chinese Proverb"
    },
    "description": {
      "ja": "禍福は予測できない運気です。このことわざが教えるように、今の幸不幸は将来どう転ぶかわかりません。良いことがあっても油断せず、悪いことがあっても悲観しないでください。全ては変化の途中にあります。一喜一憂せず、平常心を保つことで、最終的には良い方向に向かいます。心を落ち着けて過ごしましょう。",
      "en": "Fortune where good and bad are unpredictable. As this proverb teaches, current happiness or unhappiness may turn around in the future. Don't be careless with good fortune; don't despair with bad. Everything is in the midst of change. By maintaining equanimity without emotional swings, things will ultimately go well. Keep your heart calm."
    },
    "details": {
      "wishes": {
        "ja": "禍福は予測できず",
        "en": "Fortune is unpredictable"
      },
      "love": {
        "ja": "思わぬ展開あり",
        "en": "Unexpected development"
      },
      "visitor": {
        "ja": "意外な人から",
        "en": "From unexpected person"
      },
      "business": {
        "ja": "損して得取れ",
        "en": "Loss leads to gain"
      },
      "studies": {
        "ja": "回り道が近道",
        "en": "Detour is shortcut"
      },
      "health": {
        "ja": "油断は禁物",
        "en": "Don't let guard down"
      },
      "residence": {
        "ja": "良し悪しは後から",
        "en": "Good or bad comes later"
      },
      "travel": {
        "ja": "予定変更も良し",
        "en": "Schedule changes okay"
      }
    }
  },
  {
    "id": 28,
    "result": {
      "ja": "小吉",
      "en": "Small Blessing"
    },
    "quote": {
      "ja": "一期一会。",
      "en": "One chance, one encounter."
    },
    "source": {
      "ja": "千利休",
      "en": "Sen no Rikyu"
    },
    "description": {
      "ja": "出会いを大切にすべき運気です。千利休の教えのように、今この瞬間の出会いや機会は二度と訪れないかもしれません。目の前の人やチャンスを軽んじず、一つ一つを大切にしてください。何気ない日常の中にこそ、幸運の種が隠れています。今日という日を丁寧に過ごすことで、小さな幸せが積み重なります。",
      "en": "Fortune to cherish encounters. As Rikyu taught, today's encounter or opportunity may never come again. Don't take lightly the person or chance before you; treasure each one. Seeds of fortune hide in ordinary daily life. By spending today carefully, small happinesses accumulate."
    },
    "details": {
      "wishes": {
        "ja": "この機会を逃すな",
        "en": "Don't miss this chance"
      },
      "love": {
        "ja": "出会いを大切に",
        "en": "Cherish encounters"
      },
      "visitor": {
        "ja": "一度きりの縁",
        "en": "Once-only connection"
      },
      "business": {
        "ja": "この取引を大切に",
        "en": "Treasure this deal"
      },
      "studies": {
        "ja": "この教えを心に",
        "en": "Keep this teaching in heart"
      },
      "health": {
        "ja": "今日の健康を大切に",
        "en": "Treasure today's health"
      },
      "residence": {
        "ja": "今の住まいに感謝",
        "en": "Be grateful for home"
      },
      "travel": {
        "ja": "旅先の出会い大切",
        "en": "Value travel encounters"
      }
    }
  },
  {
    "id": 29,
    "result": {
      "ja": "小吉",
      "en": "Small Blessing"
    },
    "quote": {
      "ja": "雨降って地固まる。",
      "en": "After rain, the ground hardens."
    },
    "source": {
      "ja": "日本のことわざ",
      "en": "Japanese Proverb"
    },
    "description": {
      "ja": "困難を経て良くなる運気です。このことわざのように、今直面している問題や摩擦は、最終的には物事をより良くするためのものです。トラブルを避けようとせず、しっかり向き合ってください。乗り越えた先には、以前より強固な基盤ができています。試練は成長のチャンス、前向きに受け止めましょう。",
      "en": "Fortune that improves after difficulty. As this proverb suggests, current problems or friction will ultimately make things better. Face troubles without avoiding them. Beyond overcoming them, a firmer foundation than before awaits. Trials are opportunities for growth; accept them positively."
    },
    "details": {
      "wishes": {
        "ja": "困難の後に叶う",
        "en": "Comes true after difficulty"
      },
      "love": {
        "ja": "喧嘩の後に深まる",
        "en": "Deepens after quarrel"
      },
      "visitor": {
        "ja": "行き違いの後に来る",
        "en": "Comes after misunderstanding"
      },
      "business": {
        "ja": "苦境を乗り越えよ",
        "en": "Overcome hardship"
      },
      "studies": {
        "ja": "失敗から学べ",
        "en": "Learn from failure"
      },
      "health": {
        "ja": "病後に強くなる",
        "en": "Stronger after illness"
      },
      "residence": {
        "ja": "問題解決後に吉",
        "en": "Good after problem solved"
      },
      "travel": {
        "ja": "雨天でも出発せよ",
        "en": "Depart even in rain"
      }
    }
  },
  {
    "id": 30,
    "result": {
      "ja": "末吉",
      "en": "Uncertain Blessing"
    },
    "quote": {
      "ja": "終わりは新しい始まりである。",
      "en": "Every end is a new beginning."
    },
    "source": {
      "ja": "プラトン",
      "en": "Plato"
    },
    "description": {
      "ja": "変化の兆しがある運気です。プラトンの言葉のように、何かが終わることは、新しい何かが始まる合図です。今、行き詰まりを感じているなら、それは方向転換の時かもしれません。過去に執着せず、新しい可能性に目を向けてください。終わりを恐れず、清々しい気持ちで次の章を始める準備をしましょう。",
      "en": "Fortune showing signs of change. As Plato said, something ending is a signal that something new begins. If you feel stuck now, it may be time to change direction. Don't cling to the past; look toward new possibilities. Don't fear endings; prepare with a fresh spirit to begin the next chapter."
    },
    "details": {
      "wishes": {
        "ja": "一度諦めて再挑戦",
        "en": "Give up once and retry"
      },
      "love": {
        "ja": "過去を清算せよ",
        "en": "Settle the past"
      },
      "visitor": {
        "ja": "古い縁を断て",
        "en": "Cut old ties"
      },
      "business": {
        "ja": "心機一転",
        "en": "Fresh start"
      },
      "studies": {
        "ja": "新たな分野へ",
        "en": "To new fields"
      },
      "health": {
        "ja": "生活習慣を変えよ",
        "en": "Change lifestyle"
      },
      "residence": {
        "ja": "引っ越しも検討",
        "en": "Consider moving"
      },
      "travel": {
        "ja": "帰って出直せ",
        "en": "Return and start over"
      }
    }
  },
  {
    "id": 31,
    "result": {
      "ja": "末吉",
      "en": "Uncertain Blessing"
    },
    "quote": {
      "ja": "最善を期待し、最悪に備えよ。",
      "en": "Hope for the best, prepare for the worst."
    },
    "source": {
      "ja": "ベンジャミン・ディズレーリ",
      "en": "Benjamin Disraeli"
    },
    "description": {
      "ja": "慎重さが求められる運気です。ディズレーリの言葉通り、楽観的な希望を持ちつつも、万が一に備えることが大切です。準備を怠らなければ、どんな状況にも対応できます。希望は捨てず、でも油断はしない。このバランスが今のあなたを守ります。備えあれば憂いなし、しっかり準備を整えてください。",
      "en": "Fortune requiring caution. As Disraeli said, maintain optimistic hope while preparing for the worst. If you don't neglect preparation, you can handle any situation. Don't lose hope, but don't be careless either. This balance will protect you now. With preparation comes no worry; prepare thoroughly."
    },
    "details": {
      "wishes": {
        "ja": "備えあれば叶う",
        "en": "Comes true with preparation"
      },
      "love": {
        "ja": "慎重に進めよ",
        "en": "Proceed carefully"
      },
      "visitor": {
        "ja": "期待しすぎるな",
        "en": "Don't expect too much"
      },
      "business": {
        "ja": "リスク管理せよ",
        "en": "Manage risks"
      },
      "studies": {
        "ja": "確実な方法で",
        "en": "Use reliable methods"
      },
      "health": {
        "ja": "予防を心がけよ",
        "en": "Focus on prevention"
      },
      "residence": {
        "ja": "保険をかけよ",
        "en": "Get insurance"
      },
      "travel": {
        "ja": "備えて出発",
        "en": "Depart prepared"
      }
    }
  },
  {
    "id": 32,
    "result": {
      "ja": "末吉",
      "en": "Uncertain Blessing"
    },
    "quote": {
      "ja": "転ぶことは恥ではない。転んだまま起き上がらないことが恥である。",
      "en": "Falling is not shameful. Staying down without getting up is."
    },
    "source": {
      "ja": "ドイツのことわざ",
      "en": "German Proverb"
    },
    "description": {
      "ja": "再起を促す運気です。このことわざが教えるように、失敗や挫折は恥ずかしいことではありません。大切なのは、そこから立ち上がる勇気です。今、うまくいっていないことがあっても、諦めないでください。何度でもやり直す気持ちがあれば、必ず道は開けます。立ち上がる力が、運を好転させます。",
      "en": "Fortune encouraging revival. As this proverb teaches, failure or setback is not shameful. What matters is the courage to rise from there. Even if things aren't going well now, don't give up. With the spirit to try again and again, the path will surely open. The power to rise will turn fortune around."
    },
    "details": {
      "wishes": {
        "ja": "一度失敗しても再起",
        "en": "Rise again after failure"
      },
      "love": {
        "ja": "傷ついても立ち直れ",
        "en": "Recover even if hurt"
      },
      "visitor": {
        "ja": "断られても諦めるな",
        "en": "Don't give up if rejected"
      },
      "business": {
        "ja": "一時の損は気にするな",
        "en": "Don't worry about temporary loss"
      },
      "studies": {
        "ja": "挫折しても続けよ",
        "en": "Continue despite setbacks"
      },
      "health": {
        "ja": "病も回復する",
        "en": "Illness will recover"
      },
      "residence": {
        "ja": "失敗を恐れるな",
        "en": "Don't fear failure"
      },
      "travel": {
        "ja": "困難を乗り越えよ",
        "en": "Overcome difficulties"
      }
    }
  },
  {
    "id": 33,
    "result": {
      "ja": "末吉",
      "en": "Uncertain Blessing"
    },
    "quote": {
      "ja": "遅くとも、やらないよりはまし。",
      "en": "Better late than never."
    },
    "source": {
      "ja": "西洋のことわざ",
      "en": "Western Proverb"
    },
    "description": {
      "ja": "遅れを取り戻せる運気です。このことわざのように、たとえ出遅れても、始めないよりは始める方がずっと良いのです。「もう遅い」と諦めるのは早すぎます。今からでも間に合います。年齢や時期を言い訳にせず、思い立った今こそ行動の時。遅いスタートでも、継続すれば必ず成果は出ます。",
      "en": "Fortune where you can catch up. As this proverb says, even if you're behind, starting is much better than not starting. It's too early to give up thinking 'it's too late.' You can still make it even now. Don't use age or timing as excuses; now that you've thought of it is the time to act. Even a late start will produce results with persistence."
    },
    "details": {
      "wishes": {
        "ja": "遅れても叶う",
        "en": "Comes true even late"
      },
      "love": {
        "ja": "遅い恋も実る",
        "en": "Late love also blooms"
      },
      "visitor": {
        "ja": "遅くなっても来る",
        "en": "Comes even if late"
      },
      "business": {
        "ja": "出遅れても可",
        "en": "Okay even if behind"
      },
      "studies": {
        "ja": "遅い学びも価値あり",
        "en": "Late learning has value"
      },
      "health": {
        "ja": "遅くとも治療を",
        "en": "Seek treatment even late"
      },
      "residence": {
        "ja": "遅くとも動け",
        "en": "Move even if late"
      },
      "travel": {
        "ja": "遅れての出発も吉",
        "en": "Late departure also good"
      }
    }
  },
  {
    "id": 34,
    "result": {
      "ja": "末吉",
      "en": "Uncertain Blessing"
    },
    "quote": {
      "ja": "必要は発明の母である。",
      "en": "Necessity is the mother of invention."
    },
    "source": {
      "ja": "プラトン",
      "en": "Plato"
    },
    "description": {
      "ja": "困難が知恵を生む運気です。プラトンの言葉通り、追い詰められた時こそ、思いもよらないアイデアや解決策が生まれます。今の困難は、あなたの創造性を引き出すためのものかもしれません。「どうしよう」と嘆くより、「どうすればいいか」を考えてください。必要に迫られた時、人は強くなれます。",
      "en": "Fortune where difficulty breeds wisdom. As Plato said, when cornered, unexpected ideas or solutions emerge. Current difficulties may exist to draw out your creativity. Rather than lamenting 'what should I do,' think 'how can I do it.' When necessity drives, people become strong."
    },
    "details": {
      "wishes": {
        "ja": "困ってこそ知恵が出る",
        "en": "Wisdom comes from trouble"
      },
      "love": {
        "ja": "必要に迫られて進展",
        "en": "Progress from necessity"
      },
      "visitor": {
        "ja": "どうしても必要なら来る",
        "en": "Comes if truly needed"
      },
      "business": {
        "ja": "必要に応じて対応",
        "en": "Respond as needed"
      },
      "studies": {
        "ja": "必要なことを学べ",
        "en": "Learn what's necessary"
      },
      "health": {
        "ja": "必要な休息を",
        "en": "Rest as needed"
      },
      "residence": {
        "ja": "必要に応じて移れ",
        "en": "Move as needed"
      },
      "travel": {
        "ja": "必要なら旅立て",
        "en": "Travel if necessary"
      }
    }
  },
  {
    "id": 35,
    "result": {
      "ja": "末吉",
      "en": "Uncertain Blessing"
    },
    "quote": {
      "ja": "習慣は第二の天性である。",
      "en": "Habit is second nature."
    },
    "source": {
      "ja": "キケロ",
      "en": "Cicero"
    },
    "description": {
      "ja": "習慣の見直しが必要な運気です。キケロの言葉のように、日々の習慣があなたの人生を形作っています。今の結果に満足できないなら、習慣を変える時かもしれません。小さな行動の積み重ねが、やがて大きな変化を生みます。良い習慣を一つ始め、悪い習慣を一つやめてみてください。それが運気好転の第一歩です。",
      "en": "Fortune requiring habit review. As Cicero said, daily habits shape your life. If you're not satisfied with current results, it may be time to change habits. Small daily actions eventually create big changes. Start one good habit; stop one bad habit. That's the first step to better fortune."
    },
    "details": {
      "wishes": {
        "ja": "習慣を変えれば叶う",
        "en": "Comes true if you change habits"
      },
      "love": {
        "ja": "日々の積み重ね",
        "en": "Daily accumulation"
      },
      "visitor": {
        "ja": "習慣的に連絡を",
        "en": "Contact habitually"
      },
      "business": {
        "ja": "日課が成功の鍵",
        "en": "Daily routine is key"
      },
      "studies": {
        "ja": "毎日少しずつ",
        "en": "A little each day"
      },
      "health": {
        "ja": "良い習慣で健康に",
        "en": "Health through good habits"
      },
      "residence": {
        "ja": "住めば慣れる",
        "en": "You'll get used to living there"
      },
      "travel": {
        "ja": "旅慣れれば吉",
        "en": "Travel improves with experience"
      }
    }
  },
  {
    "id": 36,
    "result": {
      "ja": "末吉",
      "en": "Uncertain Blessing"
    },
    "quote": {
      "ja": "時間は最も賢明な相談相手である。",
      "en": "Time is the wisest counselor."
    },
    "source": {
      "ja": "ペリクレス",
      "en": "Pericles"
    },
    "description": {
      "ja": "時間が味方になる運気です。ペリクレスの言葉通り、今は結論を急がず、時間に委ねることが賢明です。焦って決断すると後悔することになりかねません。じっくりと時間をかけて考え、状況の変化を見守ってください。今はわからないことも、時が経てば自然と答えが見えてきます。待つことも大切な行動です。",
      "en": "Fortune where time is your ally. As Pericles said, it's wise now not to rush conclusions but to leave things to time. Hasty decisions may lead to regret. Take time to think carefully and watch how situations change. What you don't understand now will naturally become clear with time. Waiting is also important action."
    },
    "details": {
      "wishes": {
        "ja": "時間が解決する",
        "en": "Time will solve it"
      },
      "love": {
        "ja": "時が来れば進展",
        "en": "Progress when time comes"
      },
      "visitor": {
        "ja": "時を待て",
        "en": "Wait for the time"
      },
      "business": {
        "ja": "時機を見よ",
        "en": "Watch for timing"
      },
      "studies": {
        "ja": "長い目で学べ",
        "en": "Learn with long view"
      },
      "health": {
        "ja": "時間が癒す",
        "en": "Time heals"
      },
      "residence": {
        "ja": "時が来れば移れ",
        "en": "Move when time comes"
      },
      "travel": {
        "ja": "時を待って出発",
        "en": "Wait to depart"
      }
    }
  },
  {
    "id": 37,
    "result": {
      "ja": "凶",
      "en": "Misfortune"
    },
    "quote": {
      "ja": "逆境は真の友を明らかにする。",
      "en": "Adversity reveals true friends."
    },
    "source": {
      "ja": "イソップ",
      "en": "Aesop"
    },
    "description": {
      "ja": "試練の時期です。イソップの言葉のように、困難な時こそ本当に大切なものが見えてきます。今は派手な行動を控え、静かに過ごすことが賢明です。この時期を通じて、真の味方が誰かを見極めてください。無理をせず、信頼できる人との絆を大切にすることで、やがて運気は回復に向かいます。今は耐える時です。",
      "en": "A time of trial. As Aesop said, difficult times reveal what's truly important. Now is wise to avoid flashy action and spend quietly. Through this period, discern who your true allies are. Don't push yourself; cherish bonds with trustworthy people, and fortune will eventually recover. Now is a time to endure."
    },
    "details": {
      "wishes": {
        "ja": "今は控えよ",
        "en": "Hold back now"
      },
      "love": {
        "ja": "見極めが必要",
        "en": "Need to discern"
      },
      "visitor": {
        "ja": "来ても油断するな",
        "en": "Don't let guard down even if they come"
      },
      "business": {
        "ja": "損失に注意",
        "en": "Watch for losses"
      },
      "studies": {
        "ja": "今は休め",
        "en": "Rest now"
      },
      "health": {
        "ja": "無理は禁物",
        "en": "Don't overdo it"
      },
      "residence": {
        "ja": "今は動くな",
        "en": "Don't move now"
      },
      "travel": {
        "ja": "延期が良い",
        "en": "Postpone is better"
      }
    }
  },
  {
    "id": 38,
    "result": {
      "ja": "凶",
      "en": "Misfortune"
    },
    "quote": {
      "ja": "満足は自然の富である。贅沢は人工の貧困である。",
      "en": "Contentment is natural wealth. Luxury is artificial poverty."
    },
    "source": {
      "ja": "ソクラテス",
      "en": "Socrates"
    },
    "description": {
      "ja": "欲を控えるべき運気です。ソクラテスの教えのように、今は必要以上のものを求めると失敗します。贅沢や高望みは身を滅ぼす元となりかねません。今あるもので満足し、質素に過ごすことが難を逃れる秘訣です。欲張りな心を抑え、分相応を心がけてください。控えめな姿勢が、やがて運気を回復させます。",
      "en": "Fortune to restrain desire. As Socrates taught, wanting more than necessary leads to failure now. Luxury and high ambitions may ruin you. Be satisfied with what you have and live simply to escape difficulty. Suppress greedy desires and be content with your lot. Modest attitude will eventually restore fortune."
    },
    "details": {
      "wishes": {
        "ja": "欲を捨てよ",
        "en": "Abandon greed"
      },
      "love": {
        "ja": "高望みするな",
        "en": "Don't aim too high"
      },
      "visitor": {
        "ja": "期待しすぎるな",
        "en": "Don't expect too much"
      },
      "business": {
        "ja": "欲を出すと損",
        "en": "Greed leads to loss"
      },
      "studies": {
        "ja": "地道に努力せよ",
        "en": "Work steadily"
      },
      "health": {
        "ja": "贅沢は体に毒",
        "en": "Luxury harms body"
      },
      "residence": {
        "ja": "今の住まいで我慢",
        "en": "Make do with current home"
      },
      "travel": {
        "ja": "贅沢な旅は凶",
        "en": "Lavish travel is bad"
      }
    }
  },
  {
    "id": 39,
    "result": {
      "ja": "凶",
      "en": "Misfortune"
    },
    "quote": {
      "ja": "沈黙は金、雄弁は銀。",
      "en": "Speech is silver, silence is golden."
    },
    "source": {
      "ja": "トーマス・カーライル",
      "en": "Thomas Carlyle"
    },
    "description": {
      "ja": "言葉を慎むべき運気です。カーライルの言葉通り、今は語るよりも黙っている方が賢明です。余計な発言がトラブルを招きやすい時期です。自分の意見を主張することを控え、聞き役に徹してください。静かに過ごし、状況を見守ることで、大きな失敗を避けることができます。沈黙が身を守る時期です。",
      "en": "Fortune to restrain words. As Carlyle said, it's wiser now to stay silent than to speak. This is a time when unnecessary remarks easily cause trouble. Refrain from asserting your opinions and play the listener. By spending quietly and watching the situation, you can avoid big mistakes. Silence protects you now."
    },
    "details": {
      "wishes": {
        "ja": "今は語らず待て",
        "en": "Stay silent and wait"
      },
      "love": {
        "ja": "告白は控えよ",
        "en": "Refrain from confessing"
      },
      "visitor": {
        "ja": "音信不通を受け入れよ",
        "en": "Accept no contact"
      },
      "business": {
        "ja": "派手な宣伝は凶",
        "en": "Flashy promotion is bad"
      },
      "studies": {
        "ja": "今は聞く時",
        "en": "Time to listen now"
      },
      "health": {
        "ja": "静養せよ",
        "en": "Rest quietly"
      },
      "residence": {
        "ja": "静かに過ごせ",
        "en": "Spend quietly"
      },
      "travel": {
        "ja": "今は出発を控えよ",
        "en": "Refrain from departure now"
      }
    }
  },
  {
    "id": 40,
    "result": {
      "ja": "凶",
      "en": "Misfortune"
    },
    "quote": {
      "ja": "急いては事を仕損じる。",
      "en": "Haste makes waste."
    },
    "source": {
      "ja": "日本のことわざ",
      "en": "Japanese Proverb"
    },
    "description": {
      "ja": "焦りが失敗を招く運気です。このことわざが警告するように、今は急いで行動すると必ず失敗します。どんなに急ぎたくても、立ち止まって冷静になってください。慌てて決断したことは、後で大きな後悔となります。今は時間をかけて慎重に進むことが大切です。急がば回れ、ゆっくり確実に進みましょう。",
      "en": "Fortune where rushing causes failure. As this proverb warns, acting hastily now will surely fail. No matter how much you want to hurry, stop and calm down. Hasty decisions will become great regrets later. Taking time and proceeding carefully is important now. More haste, less speed; go slowly and surely."
    },
    "details": {
      "wishes": {
        "ja": "急ぐと失敗する",
        "en": "Rushing leads to failure"
      },
      "love": {
        "ja": "急ぎすぎるな",
        "en": "Don't rush too much"
      },
      "visitor": {
        "ja": "急かすと去る",
        "en": "Rushing drives them away"
      },
      "business": {
        "ja": "焦ると損する",
        "en": "Impatience leads to loss"
      },
      "studies": {
        "ja": "詰め込みは凶",
        "en": "Cramming is bad"
      },
      "health": {
        "ja": "急な運動は禁物",
        "en": "Sudden exercise is dangerous"
      },
      "residence": {
        "ja": "急な引っ越し凶",
        "en": "Sudden move is bad"
      },
      "travel": {
        "ja": "急な旅は凶",
        "en": "Sudden travel is bad"
      }
    }
  },
  {
    "id": 41,
    "result": {
      "ja": "凶",
      "en": "Misfortune"
    },
    "quote": {
      "ja": "傲慢は破滅に先立ち、高慢な態度は没落に先立つ。",
      "en": "Pride goes before destruction, and a haughty spirit before a fall."
    },
    "source": {
      "ja": "旧約聖書（箴言）",
      "en": "Proverbs (Bible)"
    },
    "description": {
      "ja": "謙虚さが必要な運気です。この古い知恵が教えるように、傲慢な態度は必ず破滅を招きます。今、自分が正しいと思い込んでいることがあれば、もう一度見直してください。周囲の意見に耳を傾け、頭を低くして過ごすことが大切です。謙虚な姿勢が、あなたを災いから守ります。自信過剰に注意してください。",
      "en": "Fortune requiring humility. As this ancient wisdom teaches, arrogant attitude always invites ruin. If there's something you think you're right about now, reconsider. Listen to others' opinions and keep your head low. Humble attitude will protect you from disaster. Beware of overconfidence."
    },
    "details": {
      "wishes": {
        "ja": "謙虚であれ",
        "en": "Be humble"
      },
      "love": {
        "ja": "自慢は禁物",
        "en": "Don't boast"
      },
      "visitor": {
        "ja": "偉そうにするな",
        "en": "Don't be arrogant"
      },
      "business": {
        "ja": "驕りは損を招く",
        "en": "Pride invites loss"
      },
      "studies": {
        "ja": "過信するな",
        "en": "Don't be overconfident"
      },
      "health": {
        "ja": "油断大敵",
        "en": "Carelessness is enemy"
      },
      "residence": {
        "ja": "見栄を張るな",
        "en": "Don't show off"
      },
      "travel": {
        "ja": "慎重に行動せよ",
        "en": "Act carefully"
      }
    }
  },
  {
    "id": 42,
    "result": {
      "ja": "凶",
      "en": "Misfortune"
    },
    "quote": {
      "ja": "物事はあなたが思うほど良くもなければ、悪くもない。",
      "en": "Things are never as good or as bad as they seem."
    },
    "source": {
      "ja": "ライアン・ホリデイ",
      "en": "Ryan Holiday"
    },
    "description": {
      "ja": "判断を誤りやすい運気です。この言葉が示すように、今のあなたは物事を正確に判断できない状態にあります。良いと思ったことが実は危険だったり、悪いと思ったことがそうでもなかったり。主観的な判断を避け、客観的な視点を持つよう心がけてください。重要な決断は今は避けた方が賢明です。",
      "en": "Fortune prone to misjudgment. As this quote suggests, you are not in a state to judge things accurately now. What seems good may actually be dangerous; what seems bad may not be so. Avoid subjective judgment and try to maintain objectivity. It's wise to avoid important decisions now."
    },
    "details": {
      "wishes": {
        "ja": "過度な期待は禁物",
        "en": "Don't expect too much"
      },
      "love": {
        "ja": "冷静に判断せよ",
        "en": "Judge calmly"
      },
      "visitor": {
        "ja": "期待と現実の差を知れ",
        "en": "Know gap between expectation and reality"
      },
      "business": {
        "ja": "浮かれるな",
        "en": "Don't get carried away"
      },
      "studies": {
        "ja": "結果を決めつけるな",
        "en": "Don't prejudge results"
      },
      "health": {
        "ja": "心配しすぎも害",
        "en": "Worry too much is harmful"
      },
      "residence": {
        "ja": "理想と現実を見極めよ",
        "en": "Distinguish ideal from reality"
      },
      "travel": {
        "ja": "予想通りにはいかぬ",
        "en": "Things won't go as expected"
      }
    }
  },
  {
    "id": 43,
    "result": {
      "ja": "凶",
      "en": "Misfortune"
    },
    "quote": {
      "ja": "賢者は歴史に学び、愚者は経験に学ぶ。",
      "en": "Wise men learn from history. Fools learn from experience."
    },
    "source": {
      "ja": "オットー・フォン・ビスマルク",
      "en": "Otto von Bismarck"
    },
    "description": {
      "ja": "過去から学ぶべき運気です。ビスマルクの言葉通り、同じ過ちを繰り返さないよう、過去の失敗を振り返ってください。自分の経験だけでなく、他者の教訓からも学ぶ謙虚さが必要です。独りよがりの判断は危険な結果を招きます。先人の知恵や経験者のアドバイスに耳を傾けることで、難を逃れることができます。",
      "en": "Fortune to learn from the past. As Bismarck said, reflect on past failures so you don't repeat them. You need the humility to learn not only from your experience but from others' lessons. Self-righteous judgment invites dangerous results. By listening to predecessors' wisdom and experienced people's advice, you can escape difficulty."
    },
    "details": {
      "wishes": {
        "ja": "同じ過ちを繰り返すな",
        "en": "Don't repeat same mistakes"
      },
      "love": {
        "ja": "過去の失敗に学べ",
        "en": "Learn from past failures"
      },
      "visitor": {
        "ja": "経験者の話を聞け",
        "en": "Listen to experienced people"
      },
      "business": {
        "ja": "先人の知恵を借りよ",
        "en": "Borrow wisdom of predecessors"
      },
      "studies": {
        "ja": "基礎から学び直せ",
        "en": "Relearn from basics"
      },
      "health": {
        "ja": "健康診断を受けよ",
        "en": "Get health checkup"
      },
      "residence": {
        "ja": "経験者に相談せよ",
        "en": "Consult experienced people"
      },
      "travel": {
        "ja": "過去の旅を振り返れ",
        "en": "Reflect on past travels"
      }
    }
  },
  {
    "id": 44,
    "result": {
      "ja": "大凶",
      "en": "Great Misfortune"
    },
    "quote": {
      "ja": "嵐の前の静けさ。",
      "en": "The calm before the storm."
    },
    "source": {
      "ja": "西洋のことわざ",
      "en": "Western Proverb"
    },
    "description": {
      "ja": "大きな変動の前触れです。このことわざが示すように、今の静けさは嵐の前の束の間かもしれません。大きな変化や困難が近づいている可能性があります。今は新しいことを始めず、できる限りの備えをしてください。嵐が過ぎ去るまで、安全な場所でじっと耐えることが最善です。動くのは嵐の後にしましょう。",
      "en": "Omen of great change. As this proverb suggests, current calm may be brief respite before a storm. Big changes or difficulties may be approaching. Don't start anything new now; prepare as much as possible. The best course is to endure in a safe place until the storm passes. Move after the storm."
    },
    "details": {
      "wishes": {
        "ja": "今は動くな。大きな変化の前",
        "en": "Don't move. Before big change"
      },
      "love": {
        "ja": "関係を見直せ",
        "en": "Review relationships"
      },
      "visitor": {
        "ja": "来ない方が良い",
        "en": "Better if they don't come"
      },
      "business": {
        "ja": "大きな損失に備えよ",
        "en": "Prepare for big losses"
      },
      "studies": {
        "ja": "今は学びを控えよ",
        "en": "Refrain from studying now"
      },
      "health": {
        "ja": "大病に注意",
        "en": "Beware serious illness"
      },
      "residence": {
        "ja": "絶対に動くな",
        "en": "Absolutely don't move"
      },
      "travel": {
        "ja": "旅は中止せよ",
        "en": "Cancel travel"
      }
    }
  },
  {
    "id": 45,
    "result": {
      "ja": "大凶",
      "en": "Great Misfortune"
    },
    "quote": {
      "ja": "光が強ければ影も濃い。",
      "en": "The brighter the light, the darker the shadow."
    },
    "source": {
      "ja": "ゲーテ",
      "en": "Goethe"
    },
    "description": {
      "ja": "表面に惑わされやすい運気です。ゲーテの言葉のように、輝いて見えるものほど、深い闇を隠していることがあります。うまい話、魅力的な誘い、良さそうに見えるチャンスには、必ず裏があります。今は特に警戒が必要です。見た目の良さに騙されず、慎重に物事の本質を見極めてください。疑いの目を持つことが身を守ります。",
      "en": "Fortune easily deceived by appearances. As Goethe said, the brighter something appears, the deeper darkness it may hide. Good deals, attractive invitations, seemingly good chances always have hidden sides. Special vigilance is needed now. Don't be fooled by good appearances; carefully discern the true nature of things. Having doubt protects you."
    },
    "details": {
      "wishes": {
        "ja": "成功の裏に落とし穴あり",
        "en": "Pitfall behind success"
      },
      "love": {
        "ja": "良く見えて危険あり",
        "en": "Looks good but dangerous"
      },
      "visitor": {
        "ja": "表面に騙されるな",
        "en": "Don't be fooled by surface"
      },
      "business": {
        "ja": "うまい話に注意",
        "en": "Beware too-good deals"
      },
      "studies": {
        "ja": "自信過剰に注意",
        "en": "Beware overconfidence"
      },
      "health": {
        "ja": "好調時こそ注意",
        "en": "Be careful when feeling good"
      },
      "residence": {
        "ja": "良い物件に罠あり",
        "en": "Good property has traps"
      },
      "travel": {
        "ja": "楽しい旅に危険あり",
        "en": "Danger in fun travel"
      }
    }
  },
  {
    "id": 46,
    "result": {
      "ja": "大凶",
      "en": "Great Misfortune"
    },
    "quote": {
      "ja": "二兎を追う者は一兎をも得ず。",
      "en": "If you chase two rabbits, you will catch neither."
    },
    "source": {
      "ja": "西洋のことわざ",
      "en": "Western Proverb"
    },
    "description": {
      "ja": "欲張りが身を滅ぼす運気です。このことわざ通り、あれもこれもと手を出すと、全てを失う危険があります。今は選択と集中が必要です。一つのことに絞り、他は諦める覚悟を持ってください。欲張った結果、何も手に入らないという最悪の事態を避けるために、断捨離する勇気が必要です。一つだけを選んでください。",
      "en": "Fortune where greed ruins you. As this proverb says, reaching for everything risks losing everything. Selection and concentration are needed now. Focus on one thing and be prepared to give up others. To avoid the worst outcome of greed leaving you with nothing, you need the courage to let go. Choose only one."
    },
    "details": {
      "wishes": {
        "ja": "欲張ると全て失う",
        "en": "Greed loses everything"
      },
      "love": {
        "ja": "二股は破滅を招く",
        "en": "Two-timing invites ruin"
      },
      "visitor": {
        "ja": "誰も来ない",
        "en": "No one comes"
      },
      "business": {
        "ja": "手を広げすぎるな",
        "en": "Don't spread too thin"
      },
      "studies": {
        "ja": "一つに集中せよ",
        "en": "Focus on one thing"
      },
      "health": {
        "ja": "無理は全て壊す",
        "en": "Overdoing destroys all"
      },
      "residence": {
        "ja": "迷うなら動くな",
        "en": "Don't move if uncertain"
      },
      "travel": {
        "ja": "あれこれ欲張るな",
        "en": "Don't be greedy"
      }
    }
  },
  {
    "id": 47,
    "result": {
      "ja": "大凶",
      "en": "Great Misfortune"
    },
    "quote": {
      "ja": "壊れた時計でも一日に二度は正しい時を指す。",
      "en": "Even a broken clock is right twice a day."
    },
    "source": {
      "ja": "西洋のことわざ",
      "en": "Western Proverb"
    },
    "description": {
      "ja": "偶然に頼ってはいけない運気です。このことわざが示すように、たまたまうまくいっても、それは実力ではありません。今のあなたは、偶然の成功を実力と勘違いしている可能性があります。まぐれ当たりを期待せず、基本に立ち返ってください。確実な方法を選ばなければ、大きな失敗が待っています。堅実さを取り戻しましょう。",
      "en": "Fortune not to rely on chance. As this proverb suggests, even accidental success isn't real skill. You may be mistaking coincidental success for ability. Don't hope for lucky hits; choose reliable methods. Without solid approaches, big failure awaits. Return to steadiness."
    },
    "details": {
      "wishes": {
        "ja": "偶然の成功に頼るな",
        "en": "Don't rely on chance success"
      },
      "love": {
        "ja": "たまたまを当てにするな",
        "en": "Don't count on accidents"
      },
      "visitor": {
        "ja": "偶然を期待するな",
        "en": "Don't expect coincidence"
      },
      "business": {
        "ja": "まぐれ当たりに期待するな",
        "en": "Don't hope for lucky hits"
      },
      "studies": {
        "ja": "確実な方法を取れ",
        "en": "Take reliable methods"
      },
      "health": {
        "ja": "不調の兆しあり",
        "en": "Signs of poor condition"
      },
      "residence": {
        "ja": "今の住まいに問題あり",
        "en": "Problems with current home"
      },
      "travel": {
        "ja": "旅先でトラブルあり",
        "en": "Trouble during travel"
      }
    }
  },
  {
    "id": 48,
    "result": {
      "ja": "大凶",
      "en": "Great Misfortune"
    },
    "quote": {
      "ja": "高く登れば、落ちた時の痛みも大きい。",
      "en": "The higher you climb, the harder you fall."
    },
    "source": {
      "ja": "西洋のことわざ",
      "en": "Western Proverb"
    },
    "description": {
      "ja": "高望みが危険な運気です。このことわざが警告するように、高い目標を掲げるほど、失敗した時のダメージは大きくなります。今は身の丈に合った目標に修正してください。無理な背伸びは、取り返しのつかない事態を招きます。地に足をつけ、堅実な選択をすることが、あなたを守る唯一の方法です。謙虚さを忘れずに。",
      "en": "Fortune where high ambition is dangerous. As this proverb warns, the higher your goal, the greater the damage when you fail. Now is time to revise high ambitions. Goals too high beyond your means may cause irreparable situations. Keep feet on ground and make realistic choices; that's the only way to protect yourself. Remember humility."
    },
    "details": {
      "wishes": {
        "ja": "高望みするな",
        "en": "Don't aim too high"
      },
      "love": {
        "ja": "理想が高すぎる",
        "en": "Ideals too high"
      },
      "visitor": {
        "ja": "期待しすぎると失望する",
        "en": "Expectation leads to disappointment"
      },
      "business": {
        "ja": "大きな取引は危険",
        "en": "Big deals are dangerous"
      },
      "studies": {
        "ja": "高い目標は見直せ",
        "en": "Revise high goals"
      },
      "health": {
        "ja": "無理な運動は怪我の元",
        "en": "Excessive exercise causes injury"
      },
      "residence": {
        "ja": "高級物件は避けよ",
        "en": "Avoid luxury properties"
      },
      "travel": {
        "ja": "危険な場所へ行くな",
        "en": "Don't go dangerous places"
      }
    }
  },
  {
    "id": 49,
    "result": {
      "ja": "大凶",
      "en": "Great Misfortune"
    },
    "quote": {
      "ja": "すべての終わりは新しい始まりでもある。",
      "en": "Every ending is also a new beginning."
    },
    "source": {
      "ja": "セネカ",
      "en": "Seneca"
    },
    "description": {
      "ja": "終焉と再生の運気です。セネカの言葉は慰めでもあり警告でもあります。今のあなたには、何かが終わろうとしています。それは関係かもしれないし、仕事かもしれません。しかし、終わりを受け入れることで、初めて新しい始まりが訪れます。執着を手放し、全てを清算する覚悟を持ってください。再生には一度の死が必要です。",
      "en": "Fortune of ending and rebirth. Seneca's words are both comfort and warning. Something is about to end for you. It may be a relationship or work. But by accepting the end, a new beginning first arrives. Let go of attachment and be prepared to settle everything. Rebirth requires one death."
    },
    "details": {
      "wishes": {
        "ja": "一度全て手放せ",
        "en": "Let everything go once"
      },
      "love": {
        "ja": "今の関係は終わりに",
        "en": "Current relationship ends"
      },
      "visitor": {
        "ja": "縁がない",
        "en": "No connection"
      },
      "business": {
        "ja": "事業を見直せ",
        "en": "Reconsider business"
      },
      "studies": {
        "ja": "学びの方向を変えよ",
        "en": "Change direction of learning"
      },
      "health": {
        "ja": "生活を根本から見直せ",
        "en": "Fundamentally review life"
      },
      "residence": {
        "ja": "引っ越しを考えよ",
        "en": "Consider moving"
      },
      "travel": {
        "ja": "旅より内省を",
        "en": "Reflection over travel"
      }
    }
  },
  {
    "id": 50,
    "result": {
      "ja": "大凶",
      "en": "Great Misfortune"
    },
    "quote": {
      "ja": "真っ暗闇の中でこそ、星は輝く。",
      "en": "Only in darkness can we see the stars."
    },
    "source": {
      "ja": "マーティン・ルーサー・キング・ジュニア",
      "en": "Martin Luther King Jr."
    },
    "description": {
      "ja": "最も厳しい試練の時です。キング牧師の言葉は、暗闇の中にいる人への希望のメッセージです。今、あなたは人生で最も暗い時期にいるかもしれません。しかし、この暗闇は永遠ではありません。暗いからこそ見える星があります。小さな希望の光を見失わないでください。夜明け前が最も暗いのです。必ず朝は来ます。耐え忍んでください。",
      "en": "The most severe time of trial. King's words are a message of hope for those in darkness. You may be in the darkest period of your life now. But this darkness is not forever. Because it's dark, there are stars you can see. Don't lose sight of small rays of hope. It's darkest before dawn. Morning will surely come. Endure."
    },
    "details": {
      "wishes": {
        "ja": "今は暗闇の時。耐えよ",
        "en": "Now is darkness. Endure"
      },
      "love": {
        "ja": "辛い時期だが希望を持て",
        "en": "Hard time but keep hope"
      },
      "visitor": {
        "ja": "今は来ない。待つしかない",
        "en": "They won't come now. Just wait"
      },
      "business": {
        "ja": "今は厳しい。耐えよ",
        "en": "Difficult now. Endure"
      },
      "studies": {
        "ja": "今は結果が出ない",
        "en": "No results now"
      },
      "health": {
        "ja": "養生が必要",
        "en": "Rest is needed"
      },
      "residence": {
        "ja": "今は耐える時",
        "en": "Time to endure now"
      },
      "travel": {
        "ja": "今は出発できぬ",
        "en": "Cannot depart now"
      }
    }
  }
];
