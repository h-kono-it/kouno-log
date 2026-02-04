export interface KanjiYomi {
  on_yomi?: string[];
  kun_yomi?: string[];
  example_yomi?: string[];
}

export interface KanjiEntry {
  joyo_kanji: string;
  kyu_jitai?: string;
  yomi: KanjiYomi;
  raw_info: string;
}

export type KanjiData = Record<string, KanjiEntry>;

/**
 * 熟語ゲーム用の漢字リスト
 * キーはUnicodeコードポイント（例: "U+4E01"）
 */
export const kanjiData: KanjiData = {
	"134047": {
		"joyo_kanji": "𠮟",
		"yomi": {
			"on_yomi": [
				"シツ"
			],
			"kun_yomi": [
				"しか"
			],
			"example_yomi": [
				"しか-る"
			]
		},
		"raw_info": "𠮟\t\t5\t7S\t2010\tシツ、しか-る"
	},
	"19968": {
		"joyo_kanji": "一",
		"yomi": {
			"on_yomi": [
				"イチ",
				"イツ"
			],
			"kun_yomi": [
				"ひと"
			],
			"example_yomi": [
				"ひと-つ"
			]
		},
		"raw_info": "一\t\t1\t1\t\tイチ、イツ、ひと、ひと-つ"
	},
	"19969": {
		"joyo_kanji": "丁",
		"yomi": {
			"on_yomi": [
				"チョウ",
				"テイ"
			]
		},
		"raw_info": "丁\t\t2\t3\t\tチョウ、テイ"
	},
	"19971": {
		"joyo_kanji": "七",
		"yomi": {
			"on_yomi": [
				"シチ"
			],
			"kun_yomi": [
				"なな",
				"なの"
			],
			"example_yomi": [
				"なな-つ"
			]
		},
		"raw_info": "七\t\t2\t1\t\tシチ、なな、なな-つ、（なの）"
	},
	"19975": {
		"joyo_kanji": "万",
		"kyu_jitai": "萬",
		"yomi": {
			"on_yomi": [
				"マン",
				"バン"
			]
		},
		"raw_info": "万\t萬\t3\t2\t\tマン、バン"
	},
	"19976": {
		"joyo_kanji": "丈",
		"yomi": {
			"on_yomi": [
				"ジョウ"
			],
			"kun_yomi": [
				"たけ"
			]
		},
		"raw_info": "丈\t\t3\t7S\t\tジョウ、たけ"
	},
	"19977": {
		"joyo_kanji": "三",
		"yomi": {
			"on_yomi": [
				"サン"
			],
			"kun_yomi": [
				"み",
				"みっ"
			],
			"example_yomi": [
				"み-つ",
				"みっ-つ"
			]
		},
		"raw_info": "三\t\t3\t1\t\tサン、み、み-つ、みっ-つ"
	},
	"19978": {
		"joyo_kanji": "上",
		"yomi": {
			"on_yomi": [
				"ショウ",
				"ジョウ"
			],
			"kun_yomi": [
				"うえ",
				"うわ",
				"かみ",
				"あ",
				"のぼ"
			],
			"example_yomi": [
				"あ-げる",
				"あ-がる",
				"のぼ-る",
				"のぼ-せる",
				"のぼ-す"
			]
		},
		"raw_info": "上\t\t3\t1\t\tジョウ、（ショウ）、うえ、（うわ）、かみ、あ-げる、あ-がる、のぼ-る、のぼ-せる、のぼ-す"
	},
	"19979": {
		"joyo_kanji": "下",
		"yomi": {
			"on_yomi": [
				"カ",
				"ゲ"
			],
			"kun_yomi": [
				"お",
				"した",
				"しも",
				"もと",
				"さ",
				"くだ"
			],
			"example_yomi": [
				"お-りる",
				"さ-げる",
				"さ-がる",
				"くだ-る",
				"くだ-す",
				"くだ-さる",
				"お-ろす"
			]
		},
		"raw_info": "下\t\t3\t1\t\tカ、ゲ、した、しも、もと、さ-げる、さ-がる、くだ-る、くだ-す、くだ-さる、お-ろす、お-りる"
	},
	"19981": {
		"joyo_kanji": "不",
		"yomi": {
			"on_yomi": [
				"フ",
				"ブ"
			]
		},
		"raw_info": "不\t\t4\t4\t\tフ、ブ"
	},
	"19982": {
		"joyo_kanji": "与",
		"kyu_jitai": "與",
		"yomi": {
			"on_yomi": [
				"ヨ"
			],
			"kun_yomi": [
				"あた"
			],
			"example_yomi": [
				"あた-える"
			]
		},
		"raw_info": "与\t與\t3\t7S\t\tヨ、あた-える"
	},
	"19988": {
		"joyo_kanji": "且",
		"yomi": {
			"kun_yomi": [
				"か"
			],
			"example_yomi": [
				"か-つ"
			]
		},
		"raw_info": "且\t\t5\t7S\t\tか-つ"
	},
	"19990": {
		"joyo_kanji": "世",
		"yomi": {
			"on_yomi": [
				"セ",
				"セイ"
			],
			"kun_yomi": [
				"よ"
			]
		},
		"raw_info": "世\t\t5\t3\t\tセイ、セ、よ"
	},
	"19992": {
		"joyo_kanji": "丘",
		"yomi": {
			"on_yomi": [
				"キュウ"
			],
			"kun_yomi": [
				"おか"
			]
		},
		"raw_info": "丘\t\t5\t7S\t\tキュウ、おか"
	},
	"19993": {
		"joyo_kanji": "丙",
		"yomi": {
			"on_yomi": [
				"ヘイ"
			]
		},
		"raw_info": "丙\t\t5\t7S\t\tヘイ"
	},
	"20001": {
		"joyo_kanji": "両",
		"kyu_jitai": "兩",
		"yomi": {
			"on_yomi": [
				"リョウ"
			]
		},
		"raw_info": "両\t兩\t6\t3\t\tリョウ"
	},
	"20006": {
		"joyo_kanji": "並",
		"kyu_jitai": "竝",
		"yomi": {
			"on_yomi": [
				"ヘイ"
			],
			"kun_yomi": [
				"なみ",
				"なら"
			],
			"example_yomi": [
				"なら-べる",
				"なら-ぶ",
				"なら-びに"
			]
		},
		"raw_info": "並\t竝\t8\t6\t\tヘイ、なみ、なら-べる、なら-ぶ、なら-びに"
	},
	"20013": {
		"joyo_kanji": "中",
		"yomi": {
			"on_yomi": [
				"チュウ",
				"ジュウ"
			],
			"kun_yomi": [
				"なか"
			]
		},
		"raw_info": "中\t\t4\t1\t\tチュウ、（ジュウ）、なか"
	},
	"20018": {
		"joyo_kanji": "串",
		"yomi": {
			"kun_yomi": [
				"くし"
			]
		},
		"raw_info": "串\t\t7\t7S\t2010\tくし"
	},
	"20024": {
		"joyo_kanji": "丸",
		"yomi": {
			"on_yomi": [
				"ガン"
			],
			"kun_yomi": [
				"まる"
			],
			"example_yomi": [
				"まる-い",
				"まる-める"
			]
		},
		"raw_info": "丸\t\t3\t2\t\tガン、まる、まる-い、まる-める"
	},
	"20025": {
		"joyo_kanji": "丹",
		"yomi": {
			"on_yomi": [
				"タン"
			]
		},
		"raw_info": "丹\t\t4\t7S\t\tタン"
	},
	"20027": {
		"joyo_kanji": "主",
		"yomi": {
			"on_yomi": [
				"シュ",
				"ス"
			],
			"kun_yomi": [
				"ぬし",
				"おも"
			]
		},
		"raw_info": "主\t\t5\t3\t\tシュ、（ス）、ぬし、おも"
	},
	"20028": {
		"joyo_kanji": "丼",
		"yomi": {
			"kun_yomi": [
				"どんぶり",
				"どん"
			]
		},
		"raw_info": "丼\t\t5\t7S\t2010\tどんぶり、（どん）"
	},
	"20037": {
		"joyo_kanji": "久",
		"yomi": {
			"on_yomi": [
				"キュウ",
				"ク"
			],
			"kun_yomi": [
				"ひさ"
			],
			"example_yomi": [
				"ひさ-しい"
			]
		},
		"raw_info": "久\t\t3\t5\t\tキュウ、（ク）、ひさ-しい"
	},
	"20047": {
		"joyo_kanji": "乏",
		"yomi": {
			"on_yomi": [
				"ボウ"
			],
			"kun_yomi": [
				"とぼ"
			],
			"example_yomi": [
				"とぼ-しい"
			]
		},
		"raw_info": "乏\t\t4\t7S\t\tボウ、とぼ-しい"
	},
	"20055": {
		"joyo_kanji": "乗",
		"kyu_jitai": "乘",
		"yomi": {
			"on_yomi": [
				"ジョウ"
			],
			"kun_yomi": [
				"の"
			],
			"example_yomi": [
				"の-る",
				"の-せる"
			]
		},
		"raw_info": "乗\t乘\t9\t3\t\tジョウ、の-る、の-せる"
	},
	"20057": {
		"joyo_kanji": "乙",
		"yomi": {
			"on_yomi": [
				"オツ"
			]
		},
		"raw_info": "乙\t\t1\t7S\t\tオツ"
	},
	"20061": {
		"joyo_kanji": "九",
		"yomi": {
			"on_yomi": [
				"ク",
				"キュウ"
			],
			"kun_yomi": [
				"ここの"
			],
			"example_yomi": [
				"ここの-つ"
			]
		},
		"raw_info": "九\t\t2\t1\t\tキュウ、ク、ここの、ここの-つ"
	},
	"20062": {
		"joyo_kanji": "乞",
		"yomi": {
			"kun_yomi": [
				"こ"
			],
			"example_yomi": [
				"こ-う"
			]
		},
		"raw_info": "乞\t\t3\t7S\t2010\tこ-う"
	},
	"20081": {
		"joyo_kanji": "乱",
		"kyu_jitai": "亂",
		"yomi": {
			"on_yomi": [
				"ラン"
			],
			"kun_yomi": [
				"みだ"
			],
			"example_yomi": [
				"みだ-れる",
				"みだ-す"
			]
		},
		"raw_info": "乱\t亂\t7\t6\t\tラン、みだ-れる、みだ-す"
	},
	"20083": {
		"joyo_kanji": "乳",
		"yomi": {
			"on_yomi": [
				"ニュウ"
			],
			"kun_yomi": [
				"ちち",
				"ち"
			]
		},
		"raw_info": "乳\t\t8\t6\t\tニュウ、ちち、ち"
	},
	"20094": {
		"joyo_kanji": "乾",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"かわ"
			],
			"example_yomi": [
				"かわ-く",
				"かわ-かす"
			]
		},
		"raw_info": "乾\t\t11\t7S\t\tカン、かわ-く、かわ-かす"
	},
	"20096": {
		"joyo_kanji": "亀",
		"kyu_jitai": "龜",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"かめ"
			]
		},
		"raw_info": "亀\t龜\t11\t7S\t2010\tキ、かめ"
	},
	"20102": {
		"joyo_kanji": "了",
		"yomi": {
			"on_yomi": [
				"リョウ"
			]
		},
		"raw_info": "了\t\t2\t7S\t\tリョウ"
	},
	"20104": {
		"joyo_kanji": "予",
		"kyu_jitai": "豫",
		"yomi": {
			"on_yomi": [
				"ヨ"
			]
		},
		"raw_info": "予\t豫\t4\t3\t\tヨ"
	},
	"20105": {
		"joyo_kanji": "争",
		"kyu_jitai": "爭",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"あらそ"
			],
			"example_yomi": [
				"あらそ-う"
			]
		},
		"raw_info": "争\t爭\t6\t4\t\tソウ、あらそ-う"
	},
	"20107": {
		"joyo_kanji": "事",
		"yomi": {
			"on_yomi": [
				"ジ",
				"ズ"
			],
			"kun_yomi": [
				"こと"
			]
		},
		"raw_info": "事\t\t8\t3\t\tジ、（ズ）、こと"
	},
	"20108": {
		"joyo_kanji": "二",
		"yomi": {
			"on_yomi": [
				"ニ"
			],
			"kun_yomi": [
				"ふた"
			],
			"example_yomi": [
				"ふた-つ"
			]
		},
		"raw_info": "二\t\t2\t1\t\tニ、ふた、ふた-つ"
	},
	"20114": {
		"joyo_kanji": "互",
		"yomi": {
			"on_yomi": [
				"ゴ"
			],
			"kun_yomi": [
				"たが"
			],
			"example_yomi": [
				"たが-い"
			]
		},
		"raw_info": "互\t\t4\t7S\t\tゴ、たが-い"
	},
	"20116": {
		"joyo_kanji": "五",
		"yomi": {
			"on_yomi": [
				"ゴ"
			],
			"kun_yomi": [
				"いつ"
			],
			"example_yomi": [
				"いつ-つ"
			]
		},
		"raw_info": "五\t\t4\t1\t\tゴ、いつ、いつ-つ"
	},
	"20117": {
		"joyo_kanji": "井",
		"yomi": {
			"on_yomi": [
				"セイ",
				"ショウ"
			],
			"kun_yomi": [
				"い"
			]
		},
		"raw_info": "井\t\t4\t7S\t\tセイ、（ショウ）、い"
	},
	"20124": {
		"joyo_kanji": "亜",
		"kyu_jitai": "亞",
		"yomi": {
			"on_yomi": [
				"ア"
			]
		},
		"raw_info": "亜\t亞\t7\t7S\t\tア"
	},
	"20129": {
		"joyo_kanji": "亡",
		"yomi": {
			"on_yomi": [
				"ボウ",
				"モウ"
			],
			"kun_yomi": [
				"な"
			],
			"example_yomi": [
				"な-い"
			]
		},
		"raw_info": "亡\t\t3\t6\t\tボウ、（モウ）、な-い"
	},
	"20132": {
		"joyo_kanji": "交",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"まじ",
				"ま",
				"か"
			],
			"example_yomi": [
				"まじ-わる",
				"まじ-える",
				"ま-じる",
				"ま-ざる",
				"ま-ぜる",
				"か-う",
				"か-わす"
			]
		},
		"raw_info": "交\t\t6\t2\t\tコウ、まじ-わる、まじ-える、ま-じる、ま-ざる、ま-ぜる、か-う、か-わす"
	},
	"20139": {
		"joyo_kanji": "享",
		"yomi": {
			"on_yomi": [
				"キョウ"
			]
		},
		"raw_info": "享\t\t8\t7S\t\tキョウ"
	},
	"20140": {
		"joyo_kanji": "京",
		"yomi": {
			"on_yomi": [
				"キョウ",
				"ケイ"
			]
		},
		"raw_info": "京\t\t8\t2\t\tキョウ、ケイ"
	},
	"20141": {
		"joyo_kanji": "亭",
		"yomi": {
			"on_yomi": [
				"テイ"
			]
		},
		"raw_info": "亭\t\t9\t7S\t1981\tテイ"
	},
	"20154": {
		"joyo_kanji": "人",
		"yomi": {
			"on_yomi": [
				"ジン",
				"ニン"
			],
			"kun_yomi": [
				"ひと"
			]
		},
		"raw_info": "人\t\t2\t1\t\tジン、ニン、ひと"
	},
	"20161": {
		"joyo_kanji": "仁",
		"yomi": {
			"on_yomi": [
				"ジン",
				"ニ"
			]
		},
		"raw_info": "仁\t\t4\t6\t\tジン、（ニ）"
	},
	"20170": {
		"joyo_kanji": "今",
		"yomi": {
			"on_yomi": [
				"コン",
				"キン"
			],
			"kun_yomi": [
				"いま"
			]
		},
		"raw_info": "今\t\t4\t2\t\tコン、キン、いま"
	},
	"20171": {
		"joyo_kanji": "介",
		"yomi": {
			"on_yomi": [
				"カイ"
			]
		},
		"raw_info": "介\t\t4\t7S\t\tカイ"
	},
	"20175": {
		"joyo_kanji": "仏",
		"kyu_jitai": "佛",
		"yomi": {
			"on_yomi": [
				"ブツ"
			],
			"kun_yomi": [
				"ほとけ"
			]
		},
		"raw_info": "仏\t佛\t4\t5\t\tブツ、ほとけ"
	},
	"20181": {
		"joyo_kanji": "仕",
		"yomi": {
			"on_yomi": [
				"シ",
				"ジ"
			],
			"kun_yomi": [
				"つか"
			],
			"example_yomi": [
				"つか-える"
			]
		},
		"raw_info": "仕\t\t5\t3\t\tシ、（ジ）、つか-える"
	},
	"20182": {
		"joyo_kanji": "他",
		"yomi": {
			"on_yomi": [
				"タ"
			],
			"kun_yomi": [
				"ほか"
			]
		},
		"raw_info": "他\t\t5\t3\t\tタ、ほか"
	},
	"20184": {
		"joyo_kanji": "付",
		"yomi": {
			"on_yomi": [
				"フ"
			],
			"kun_yomi": [
				"つ"
			],
			"example_yomi": [
				"つ-ける",
				"つ-く"
			]
		},
		"raw_info": "付\t\t5\t4\t\tフ、つ-ける、つ-く"
	},
	"20185": {
		"joyo_kanji": "仙",
		"yomi": {
			"on_yomi": [
				"セン"
			]
		},
		"raw_info": "仙\t\t5\t7S\t1981\tセン"
	},
	"20195": {
		"joyo_kanji": "代",
		"yomi": {
			"on_yomi": [
				"ダイ",
				"タイ"
			],
			"kun_yomi": [
				"か",
				"よ",
				"しろ"
			],
			"example_yomi": [
				"か-わる",
				"か-える"
			]
		},
		"raw_info": "代\t\t5\t3\t\tダイ、タイ、か-わる、か-える、よ、しろ"
	},
	"20196": {
		"joyo_kanji": "令",
		"yomi": {
			"on_yomi": [
				"レイ"
			]
		},
		"raw_info": "令\t\t5\t4\t\tレイ"
	},
	"20197": {
		"joyo_kanji": "以",
		"yomi": {
			"on_yomi": [
				"イ"
			]
		},
		"raw_info": "以\t\t5\t4\t\tイ"
	},
	"20206": {
		"joyo_kanji": "仮",
		"kyu_jitai": "假",
		"yomi": {
			"on_yomi": [
				"カ",
				"ケ"
			],
			"kun_yomi": [
				"かり"
			]
		},
		"raw_info": "仮\t假\t6\t5\t\tカ、（ケ）、かり"
	},
	"20208": {
		"joyo_kanji": "仰",
		"yomi": {
			"on_yomi": [
				"ギョウ",
				"コウ"
			],
			"kun_yomi": [
				"あお",
				"おお"
			],
			"example_yomi": [
				"あお-ぐ",
				"おお-せ"
			]
		},
		"raw_info": "仰\t\t6\t7S\t\tギョウ、（コウ）、あお-ぐ、おお-せ"
	},
	"20210": {
		"joyo_kanji": "仲",
		"yomi": {
			"on_yomi": [
				"チュウ"
			],
			"kun_yomi": [
				"なか"
			]
		},
		"raw_info": "仲\t\t6\t4\t\tチュウ、なか"
	},
	"20214": {
		"joyo_kanji": "件",
		"yomi": {
			"on_yomi": [
				"ケン"
			]
		},
		"raw_info": "件\t\t6\t5\t\tケン"
	},
	"20219": {
		"joyo_kanji": "任",
		"yomi": {
			"on_yomi": [
				"ニン"
			],
			"kun_yomi": [
				"まか"
			],
			"example_yomi": [
				"まか-せる",
				"まか-す"
			]
		},
		"raw_info": "任\t\t6\t5\t\tニン、まか-せる、まか-す"
	},
	"20225": {
		"joyo_kanji": "企",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"くわだ"
			],
			"example_yomi": [
				"くわだ-てる"
			]
		},
		"raw_info": "企\t\t6\t7S\t\tキ、くわだ-てる"
	},
	"20238": {
		"joyo_kanji": "伎",
		"yomi": {
			"on_yomi": [
				"キ"
			]
		},
		"raw_info": "伎\t\t6\t7S\t2010\tキ"
	},
	"20239": {
		"joyo_kanji": "伏",
		"yomi": {
			"on_yomi": [
				"フク"
			],
			"kun_yomi": [
				"ふ"
			],
			"example_yomi": [
				"ふ-せる",
				"ふ-す"
			]
		},
		"raw_info": "伏\t\t6\t7S\t\tフク、ふ-せる、ふ-す"
	},
	"20240": {
		"joyo_kanji": "伐",
		"yomi": {
			"on_yomi": [
				"バツ"
			]
		},
		"raw_info": "伐\t\t6\t7S\t\tバツ"
	},
	"20241": {
		"joyo_kanji": "休",
		"yomi": {
			"on_yomi": [
				"キュウ"
			],
			"kun_yomi": [
				"やす"
			],
			"example_yomi": [
				"やす-む",
				"やす-まる",
				"やす-める"
			]
		},
		"raw_info": "休\t\t6\t1\t\tキュウ、やす-む、やす-まる、やす-める"
	},
	"20250": {
		"joyo_kanji": "会",
		"kyu_jitai": "會",
		"yomi": {
			"on_yomi": [
				"カイ",
				"エ"
			],
			"kun_yomi": [
				"あ"
			],
			"example_yomi": [
				"あ-う"
			]
		},
		"raw_info": "会\t會\t6\t2\t\tカイ、エ、あ-う"
	},
	"20253": {
		"joyo_kanji": "伝",
		"kyu_jitai": "傳",
		"yomi": {
			"on_yomi": [
				"デン"
			],
			"kun_yomi": [
				"つた"
			],
			"example_yomi": [
				"つた-わる",
				"つた-える",
				"つた-う"
			]
		},
		"raw_info": "伝\t傳\t6\t4\t\tデン、つた-わる、つた-える、つた-う"
	},
	"20271": {
		"joyo_kanji": "伯",
		"yomi": {
			"on_yomi": [
				"ハク"
			]
		},
		"raw_info": "伯\t\t7\t7S\t\tハク"
	},
	"20276": {
		"joyo_kanji": "伴",
		"yomi": {
			"on_yomi": [
				"バン",
				"ハン"
			],
			"kun_yomi": [
				"ともな"
			],
			"example_yomi": [
				"ともな-う"
			]
		},
		"raw_info": "伴\t\t7\t7S\t\tハン、バン、ともな-う"
	},
	"20280": {
		"joyo_kanji": "伸",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"の"
			],
			"example_yomi": [
				"の-べる",
				"の-びる",
				"の-ばす"
			]
		},
		"raw_info": "伸\t\t7\t7S\t\tシン、の-びる、の-ばす、の-べる"
	},
	"20282": {
		"joyo_kanji": "伺",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"うかが"
			],
			"example_yomi": [
				"うかが-う"
			]
		},
		"raw_info": "伺\t\t7\t7S\t\tシ、うかが-う"
	},
	"20284": {
		"joyo_kanji": "似",
		"yomi": {
			"on_yomi": [
				"ジ"
			],
			"kun_yomi": [
				"に"
			],
			"example_yomi": [
				"に-る"
			]
		},
		"raw_info": "似\t\t7\t5\t\tジ、に-る"
	},
	"20294": {
		"joyo_kanji": "但",
		"yomi": {
			"kun_yomi": [
				"ただ"
			],
			"example_yomi": [
				"ただ-し"
			]
		},
		"raw_info": "但\t\t7\t7S\t\tただ-し"
	},
	"20301": {
		"joyo_kanji": "位",
		"yomi": {
			"on_yomi": [
				"イ"
			],
			"kun_yomi": [
				"くらい"
			]
		},
		"raw_info": "位\t\t7\t4\t\tイ、くらい"
	},
	"20302": {
		"joyo_kanji": "低",
		"yomi": {
			"on_yomi": [
				"テイ"
			],
			"kun_yomi": [
				"ひく"
			],
			"example_yomi": [
				"ひく-い",
				"ひく-める",
				"ひく-まる"
			]
		},
		"raw_info": "低\t\t7\t4\t\tテイ、ひく-い、ひく-める、ひく-まる"
	},
	"20303": {
		"joyo_kanji": "住",
		"yomi": {
			"on_yomi": [
				"ジュウ"
			],
			"kun_yomi": [
				"す"
			],
			"example_yomi": [
				"す-まう",
				"す-む"
			]
		},
		"raw_info": "住\t\t7\t3\t\tジュウ、す-む、す-まう"
	},
	"20304": {
		"joyo_kanji": "佐",
		"yomi": {
			"on_yomi": [
				"サ"
			]
		},
		"raw_info": "佐\t\t7\t7S\t\tサ"
	},
	"20307": {
		"joyo_kanji": "体",
		"kyu_jitai": "體",
		"yomi": {
			"on_yomi": [
				"タイ",
				"テイ"
			],
			"kun_yomi": [
				"からだ"
			]
		},
		"raw_info": "体\t體\t7\t2\t\tタイ、テイ、からだ"
	},
	"20309": {
		"joyo_kanji": "何",
		"yomi": {
			"on_yomi": [
				"カ"
			],
			"kun_yomi": [
				"なに",
				"なん"
			]
		},
		"raw_info": "何\t\t7\t2\t\tカ、なに、（なん）"
	},
	"20313": {
		"joyo_kanji": "余",
		"kyu_jitai": "餘",
		"yomi": {
			"on_yomi": [
				"ヨ"
			],
			"kun_yomi": [
				"あま"
			],
			"example_yomi": [
				"あま-る",
				"あま-す"
			]
		},
		"raw_info": "余\t餘\t7\t5\t\tヨ、あま-る、あま-す"
	},
	"20316": {
		"joyo_kanji": "作",
		"yomi": {
			"on_yomi": [
				"サ",
				"サク"
			],
			"kun_yomi": [
				"つく"
			],
			"example_yomi": [
				"つく-る"
			]
		},
		"raw_info": "作\t\t7\t2\t\tサク、サ、つく-る"
	},
	"20339": {
		"joyo_kanji": "佳",
		"yomi": {
			"on_yomi": [
				"カ"
			]
		},
		"raw_info": "佳\t\t8\t7S\t\tカ"
	},
	"20341": {
		"joyo_kanji": "併",
		"kyu_jitai": "倂",
		"yomi": {
			"on_yomi": [
				"ヘイ"
			],
			"kun_yomi": [
				"あわ"
			],
			"example_yomi": [
				"あわ-せる"
			]
		},
		"raw_info": "併\t倂\t8\t7S\t\tヘイ、あわ-せる"
	},
	"20351": {
		"joyo_kanji": "使",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"つか"
			],
			"example_yomi": [
				"つか-う"
			]
		},
		"raw_info": "使\t\t8\t3\t\tシ、つか-う"
	},
	"20363": {
		"joyo_kanji": "例",
		"yomi": {
			"on_yomi": [
				"レイ"
			],
			"kun_yomi": [
				"たと"
			],
			"example_yomi": [
				"たと-える"
			]
		},
		"raw_info": "例\t\t8\t4\t\tレイ、たと-える"
	},
	"20365": {
		"joyo_kanji": "侍",
		"yomi": {
			"on_yomi": [
				"ジ"
			],
			"kun_yomi": [
				"さむらい"
			]
		},
		"raw_info": "侍\t\t8\t7S\t\tジ、さむらい"
	},
	"20379": {
		"joyo_kanji": "供",
		"yomi": {
			"on_yomi": [
				"キョウ",
				"ク"
			],
			"kun_yomi": [
				"そな",
				"とも"
			],
			"example_yomi": [
				"そな-える"
			]
		},
		"raw_info": "供\t\t8\t6\t\tキョウ、（ク）、そな-える、とも"
	},
	"20381": {
		"joyo_kanji": "依",
		"yomi": {
			"on_yomi": [
				"エ",
				"イ"
			]
		},
		"raw_info": "依\t\t8\t7S\t\tイ、（エ）"
	},
	"20385": {
		"joyo_kanji": "価",
		"kyu_jitai": "價",
		"yomi": {
			"on_yomi": [
				"カ"
			],
			"kun_yomi": [
				"あたい"
			]
		},
		"raw_info": "価\t價\t8\t5\t\tカ、あたい"
	},
	"20398": {
		"joyo_kanji": "侮",
		"kyu_jitai": "侮",
		"yomi": {
			"on_yomi": [
				"ブ"
			],
			"kun_yomi": [
				"あなど"
			],
			"example_yomi": [
				"あなど-る"
			]
		},
		"raw_info": "侮\t侮\t8\t7S\t\tブ、あなど-る"
	},
	"20399": {
		"joyo_kanji": "侯",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "侯\t\t9\t7S\t\tコウ"
	},
	"20405": {
		"joyo_kanji": "侵",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"おか"
			],
			"example_yomi": [
				"おか-す"
			]
		},
		"raw_info": "侵\t\t9\t7S\t\tシン、おか-す"
	},
	"20406": {
		"joyo_kanji": "侶",
		"yomi": {
			"on_yomi": [
				"リョ"
			]
		},
		"raw_info": "侶\t\t9\t7S\t2010\tリョ"
	},
	"20415": {
		"joyo_kanji": "便",
		"yomi": {
			"on_yomi": [
				"ビン",
				"ベン"
			],
			"kun_yomi": [
				"たよ"
			],
			"example_yomi": [
				"たよ-り"
			]
		},
		"raw_info": "便\t\t9\t4\t\tベン、ビン、たよ-り"
	},
	"20418": {
		"joyo_kanji": "係",
		"yomi": {
			"on_yomi": [
				"ケイ"
			],
			"kun_yomi": [
				"かか",
				"かかり"
			],
			"example_yomi": [
				"かか-る"
			]
		},
		"raw_info": "係\t\t9\t3\t\tケイ、かか-る、かかり"
	},
	"20419": {
		"joyo_kanji": "促",
		"yomi": {
			"on_yomi": [
				"ソク"
			],
			"kun_yomi": [
				"うなが"
			],
			"example_yomi": [
				"うなが-す"
			]
		},
		"raw_info": "促\t\t9\t7S\t\tソク、うなが-す"
	},
	"20426": {
		"joyo_kanji": "俊",
		"yomi": {
			"on_yomi": [
				"シュン"
			]
		},
		"raw_info": "俊\t\t9\t7S\t\tシュン"
	},
	"20439": {
		"joyo_kanji": "俗",
		"yomi": {
			"on_yomi": [
				"ゾク"
			]
		},
		"raw_info": "俗\t\t9\t7S\t\tゾク"
	},
	"20445": {
		"joyo_kanji": "保",
		"yomi": {
			"on_yomi": [
				"ホ"
			],
			"kun_yomi": [
				"たも"
			],
			"example_yomi": [
				"たも-つ"
			]
		},
		"raw_info": "保\t\t9\t5\t\tホ、たも-つ"
	},
	"20449": {
		"joyo_kanji": "信",
		"yomi": {
			"on_yomi": [
				"シン"
			]
		},
		"raw_info": "信\t\t9\t4\t\tシン"
	},
	"20462": {
		"joyo_kanji": "修",
		"yomi": {
			"on_yomi": [
				"シュウ",
				"シュ"
			],
			"kun_yomi": [
				"おさ"
			],
			"example_yomi": [
				"おさ-める",
				"おさ-まる"
			]
		},
		"raw_info": "修\t\t10\t5\t\tシュウ、（シュ）、おさ-める、おさ-まる"
	},
	"20467": {
		"joyo_kanji": "俳",
		"yomi": {
			"on_yomi": [
				"ハイ"
			]
		},
		"raw_info": "俳\t\t10\t6\t\tハイ"
	},
	"20469": {
		"joyo_kanji": "俵",
		"yomi": {
			"on_yomi": [
				"ヒョウ"
			],
			"kun_yomi": [
				"たわら"
			]
		},
		"raw_info": "俵\t\t10\t5\t\tヒョウ、たわら"
	},
	"20472": {
		"joyo_kanji": "俸",
		"yomi": {
			"on_yomi": [
				"ホウ"
			]
		},
		"raw_info": "俸\t\t10\t7S\t1981\tホウ"
	},
	"20474": {
		"joyo_kanji": "俺",
		"yomi": {
			"kun_yomi": [
				"おれ"
			]
		},
		"raw_info": "俺\t\t10\t7S\t2010\tおれ"
	},
	"20489": {
		"joyo_kanji": "倉",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"くら"
			]
		},
		"raw_info": "倉\t\t10\t4\t\tソウ、くら"
	},
	"20491": {
		"joyo_kanji": "個",
		"yomi": {
			"on_yomi": [
				"コ"
			]
		},
		"raw_info": "個\t\t10\t5\t\tコ"
	},
	"20493": {
		"joyo_kanji": "倍",
		"yomi": {
			"on_yomi": [
				"バイ"
			]
		},
		"raw_info": "倍\t\t10\t3\t\tバイ"
	},
	"20498": {
		"joyo_kanji": "倒",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"たお"
			],
			"example_yomi": [
				"たお-れる",
				"たお-す"
			]
		},
		"raw_info": "倒\t\t10\t7S\t\tトウ、たお-れる、たお-す"
	},
	"20505": {
		"joyo_kanji": "候",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"そうろう"
			]
		},
		"raw_info": "候\t\t10\t4\t\tコウ、そうろう"
	},
	"20511": {
		"joyo_kanji": "借",
		"yomi": {
			"on_yomi": [
				"シャク"
			],
			"kun_yomi": [
				"か"
			],
			"example_yomi": [
				"か-りる"
			]
		},
		"raw_info": "借\t\t10\t4\t\tシャク、か-りる"
	},
	"20515": {
		"joyo_kanji": "倣",
		"yomi": {
			"on_yomi": [
				"ホウ"
			],
			"kun_yomi": [
				"なら"
			],
			"example_yomi": [
				"なら-う"
			]
		},
		"raw_info": "倣\t\t10\t7S\t\tホウ、なら-う"
	},
	"20516": {
		"joyo_kanji": "値",
		"yomi": {
			"on_yomi": [
				"チ"
			],
			"kun_yomi": [
				"ね",
				"あたい"
			]
		},
		"raw_info": "値\t\t10\t6\t\tチ、ね、あたい"
	},
	"20523": {
		"joyo_kanji": "倫",
		"yomi": {
			"on_yomi": [
				"リン"
			]
		},
		"raw_info": "倫\t\t10\t7S\t\tリン"
	},
	"20537": {
		"joyo_kanji": "倹",
		"kyu_jitai": "儉",
		"yomi": {
			"on_yomi": [
				"ケン"
			]
		},
		"raw_info": "倹\t儉\t10\t7S\t\tケン"
	},
	"20553": {
		"joyo_kanji": "偉",
		"yomi": {
			"on_yomi": [
				"イ"
			],
			"kun_yomi": [
				"えら"
			],
			"example_yomi": [
				"えら-い"
			]
		},
		"raw_info": "偉\t\t12\t7S\t\tイ、えら-い"
	},
	"20559": {
		"joyo_kanji": "偏",
		"yomi": {
			"on_yomi": [
				"ヘン"
			],
			"kun_yomi": [
				"かたよ"
			],
			"example_yomi": [
				"かたよ-る"
			]
		},
		"raw_info": "偏\t\t11\t7S\t\tヘン、かたよ-る"
	},
	"20572": {
		"joyo_kanji": "停",
		"yomi": {
			"on_yomi": [
				"テイ"
			]
		},
		"raw_info": "停\t\t11\t4\t\tテイ"
	},
	"20581": {
		"joyo_kanji": "健",
		"yomi": {
			"on_yomi": [
				"ケン"
			],
			"kun_yomi": [
				"すこ"
			],
			"example_yomi": [
				"すこ-やか"
			]
		},
		"raw_info": "健\t\t11\t4\t\tケン、すこ-やか"
	},
	"20596": {
		"joyo_kanji": "側",
		"yomi": {
			"on_yomi": [
				"ソク"
			],
			"kun_yomi": [
				"がわ"
			]
		},
		"raw_info": "側\t\t11\t4\t\tソク、がわ"
	},
	"20597": {
		"joyo_kanji": "偵",
		"yomi": {
			"on_yomi": [
				"テイ"
			]
		},
		"raw_info": "偵\t\t11\t7S\t1981\tテイ"
	},
	"20598": {
		"joyo_kanji": "偶",
		"yomi": {
			"on_yomi": [
				"グウ"
			]
		},
		"raw_info": "偶\t\t11\t7S\t\tグウ"
	},
	"20605": {
		"joyo_kanji": "偽",
		"kyu_jitai": "僞",
		"yomi": {
			"on_yomi": [
				"ギ"
			],
			"kun_yomi": [
				"いつわ",
				"にせ"
			],
			"example_yomi": [
				"いつわ-る"
			]
		},
		"raw_info": "偽\t僞\t11\t7S\t\tギ、いつわ-る、にせ"
	},
	"20621": {
		"joyo_kanji": "傍",
		"yomi": {
			"on_yomi": [
				"ボウ"
			],
			"kun_yomi": [
				"かたわ"
			],
			"example_yomi": [
				"かたわ-ら"
			]
		},
		"raw_info": "傍\t\t12\t7S\t\tボウ、かたわ-ら"
	},
	"20625": {
		"joyo_kanji": "傑",
		"yomi": {
			"on_yomi": [
				"ケツ"
			]
		},
		"raw_info": "傑\t\t13\t7S\t\tケツ"
	},
	"20632": {
		"joyo_kanji": "傘",
		"yomi": {
			"on_yomi": [
				"サン"
			],
			"kun_yomi": [
				"かさ"
			]
		},
		"raw_info": "傘\t\t12\t7S\t1981\tサン、かさ"
	},
	"20633": {
		"joyo_kanji": "備",
		"yomi": {
			"on_yomi": [
				"ビ"
			],
			"kun_yomi": [
				"そな"
			],
			"example_yomi": [
				"そな-わる",
				"そな-える"
			]
		},
		"raw_info": "備\t\t12\t5\t\tビ、そな-える、そな-わる"
	},
	"20652": {
		"joyo_kanji": "催",
		"yomi": {
			"on_yomi": [
				"サイ"
			],
			"kun_yomi": [
				"もよお"
			],
			"example_yomi": [
				"もよお-す"
			]
		},
		"raw_info": "催\t\t13\t7S\t\tサイ、もよお-す"
	},
	"20658": {
		"joyo_kanji": "傲",
		"yomi": {
			"on_yomi": [
				"ゴウ"
			]
		},
		"raw_info": "傲\t\t13\t7S\t2010\tゴウ"
	},
	"20661": {
		"joyo_kanji": "債",
		"yomi": {
			"on_yomi": [
				"サイ"
			]
		},
		"raw_info": "債\t\t13\t7S\t\tサイ"
	},
	"20663": {
		"joyo_kanji": "傷",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"きず",
				"いた"
			],
			"example_yomi": [
				"いた-む",
				"いた-める"
			]
		},
		"raw_info": "傷\t\t13\t6\t\tショウ、きず、いた-む、いた-める"
	},
	"20670": {
		"joyo_kanji": "傾",
		"yomi": {
			"on_yomi": [
				"ケイ"
			],
			"kun_yomi": [
				"かたむ"
			],
			"example_yomi": [
				"かたむ-く",
				"かたむ-ける"
			]
		},
		"raw_info": "傾\t\t13\t7S\t\tケイ、かたむ-く、かたむ-ける"
	},
	"20677": {
		"joyo_kanji": "僅",
		"yomi": {
			"on_yomi": [
				"キン"
			],
			"kun_yomi": [
				"わず"
			],
			"example_yomi": [
				"わず-か"
			]
		},
		"raw_info": "僅\t\t13\t7S\t2010\tキン、わず-か"
	},
	"20685": {
		"joyo_kanji": "働",
		"yomi": {
			"on_yomi": [
				"ドウ"
			],
			"kun_yomi": [
				"はたら"
			],
			"example_yomi": [
				"はたら-く"
			]
		},
		"raw_info": "働\t\t13\t4\t\tドウ、はたら-く"
	},
	"20687": {
		"joyo_kanji": "像",
		"yomi": {
			"on_yomi": [
				"ゾウ"
			]
		},
		"raw_info": "像\t\t14\t5\t\tゾウ"
	},
	"20693": {
		"joyo_kanji": "僕",
		"yomi": {
			"on_yomi": [
				"ボク"
			]
		},
		"raw_info": "僕\t\t14\t7S\t1981\tボク"
	},
	"20698": {
		"joyo_kanji": "僚",
		"yomi": {
			"on_yomi": [
				"リョウ"
			]
		},
		"raw_info": "僚\t\t14\t7S\t\tリョウ"
	},
	"20711": {
		"joyo_kanji": "僧",
		"kyu_jitai": "僧",
		"yomi": {
			"on_yomi": [
				"ソウ"
			]
		},
		"raw_info": "僧\t僧\t13\t7S\t\tソウ"
	},
	"20736": {
		"joyo_kanji": "儀",
		"yomi": {
			"on_yomi": [
				"ギ"
			]
		},
		"raw_info": "儀\t\t15\t7S\t\tギ"
	},
	"20740": {
		"joyo_kanji": "億",
		"yomi": {
			"on_yomi": [
				"オク"
			]
		},
		"raw_info": "億\t\t15\t4\t\tオク"
	},
	"20754": {
		"joyo_kanji": "儒",
		"yomi": {
			"on_yomi": [
				"ジュ"
			]
		},
		"raw_info": "儒\t\t16\t7S\t\tジュ"
	},
	"20767": {
		"joyo_kanji": "償",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"つぐな"
			],
			"example_yomi": [
				"つぐな-う"
			]
		},
		"raw_info": "償\t\t17\t7S\t\tショウ、つぐな-う"
	},
	"20778": {
		"joyo_kanji": "優",
		"yomi": {
			"on_yomi": [
				"ユウ"
			],
			"kun_yomi": [
				"やさ",
				"すぐ"
			],
			"example_yomi": [
				"やさ-しい",
				"すぐ-れる"
			]
		},
		"raw_info": "優\t\t17\t6\t\tユウ、やさ-しい、すぐ-れる"
	},
	"20803": {
		"joyo_kanji": "元",
		"yomi": {
			"on_yomi": [
				"ゲン",
				"ガン"
			],
			"kun_yomi": [
				"もと"
			]
		},
		"raw_info": "元\t\t4\t2\t\tゲン、ガン、もと"
	},
	"20804": {
		"joyo_kanji": "兄",
		"yomi": {
			"on_yomi": [
				"ケイ",
				"キョウ"
			],
			"kun_yomi": [
				"あに"
			]
		},
		"raw_info": "兄\t\t5\t2\t\tケイ、（キョウ）、あに"
	},
	"20805": {
		"joyo_kanji": "充",
		"yomi": {
			"on_yomi": [
				"ジュウ"
			],
			"kun_yomi": [
				"あ"
			],
			"example_yomi": [
				"あ-てる"
			]
		},
		"raw_info": "充\t\t6\t7S\t\tジュウ、あ-てる"
	},
	"20806": {
		"joyo_kanji": "兆",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"きざ"
			],
			"example_yomi": [
				"きざ-す",
				"きざ-し"
			]
		},
		"raw_info": "兆\t\t6\t4\t\tチョウ、きざ-す、きざ-し"
	},
	"20808": {
		"joyo_kanji": "先",
		"yomi": {
			"on_yomi": [
				"セン"
			],
			"kun_yomi": [
				"さき"
			]
		},
		"raw_info": "先\t\t6\t1\t\tセン、さき"
	},
	"20809": {
		"joyo_kanji": "光",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"ひかり",
				"ひか"
			],
			"example_yomi": [
				"ひか-る"
			]
		},
		"raw_info": "光\t\t6\t2\t\tコウ、ひか-る、ひかり"
	},
	"20811": {
		"joyo_kanji": "克",
		"yomi": {
			"on_yomi": [
				"コク"
			]
		},
		"raw_info": "克\t\t7\t7S\t\tコク"
	},
	"20813": {
		"joyo_kanji": "免",
		"kyu_jitai": "免",
		"yomi": {
			"on_yomi": [
				"メン"
			],
			"kun_yomi": [
				"まぬか"
			],
			"example_yomi": [
				"まぬか-れる"
			]
		},
		"raw_info": "免\t免\t8\t7S\t\tメン、まぬか-れる"
	},
	"20816": {
		"joyo_kanji": "児",
		"kyu_jitai": "兒",
		"yomi": {
			"on_yomi": [
				"ジ",
				"ニ"
			]
		},
		"raw_info": "児\t兒\t7\t4\t\tジ、（ニ）"
	},
	"20826": {
		"joyo_kanji": "党",
		"kyu_jitai": "黨",
		"yomi": {
			"on_yomi": [
				"トウ"
			]
		},
		"raw_info": "党\t黨\t10\t6\t\tトウ"
	},
	"20837": {
		"joyo_kanji": "入",
		"yomi": {
			"on_yomi": [
				"ニュウ"
			],
			"kun_yomi": [
				"い",
				"はい"
			],
			"example_yomi": [
				"い-る",
				"い-れる",
				"はい-る"
			]
		},
		"raw_info": "入\t\t2\t1\t\tニュウ、い-る、い-れる、はい-る"
	},
	"20840": {
		"joyo_kanji": "全",
		"yomi": {
			"on_yomi": [
				"ゼン"
			],
			"kun_yomi": [
				"まった",
				"すべ"
			],
			"example_yomi": [
				"まった-く",
				"すべ-て"
			]
		},
		"raw_info": "全\t\t6\t3\t\tゼン、まった-く、すべ-て"
	},
	"20843": {
		"joyo_kanji": "八",
		"yomi": {
			"on_yomi": [
				"ハチ"
			],
			"kun_yomi": [
				"よう",
				"や",
				"やっ"
			],
			"example_yomi": [
				"や-つ",
				"やっ-つ"
			]
		},
		"raw_info": "八\t\t2\t1\t\tハチ、や、や-つ、やっ-つ、（よう）"
	},
	"20844": {
		"joyo_kanji": "公",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"おおやけ"
			]
		},
		"raw_info": "公\t\t4\t2\t\tコウ、おおやけ"
	},
	"20845": {
		"joyo_kanji": "六",
		"yomi": {
			"on_yomi": [
				"ロク"
			],
			"kun_yomi": [
				"む",
				"むっ",
				"むい"
			],
			"example_yomi": [
				"む-つ",
				"むっ-つ"
			]
		},
		"raw_info": "六\t\t4\t1\t\tロク、む、む-つ、むっ-つ、（むい）"
	},
	"20849": {
		"joyo_kanji": "共",
		"yomi": {
			"on_yomi": [
				"キョウ"
			],
			"kun_yomi": [
				"とも"
			]
		},
		"raw_info": "共\t\t6\t4\t\tキョウ、とも"
	},
	"20853": {
		"joyo_kanji": "兵",
		"yomi": {
			"on_yomi": [
				"ヘイ",
				"ヒョウ"
			]
		},
		"raw_info": "兵\t\t7\t4\t\tヘイ、ヒョウ"
	},
	"20855": {
		"joyo_kanji": "具",
		"yomi": {
			"on_yomi": [
				"グ"
			]
		},
		"raw_info": "具\t\t8\t3\t\tグ"
	},
	"20856": {
		"joyo_kanji": "典",
		"yomi": {
			"on_yomi": [
				"テン"
			]
		},
		"raw_info": "典\t\t8\t4\t\tテン"
	},
	"20860": {
		"joyo_kanji": "兼",
		"yomi": {
			"on_yomi": [
				"ケン"
			],
			"kun_yomi": [
				"か"
			],
			"example_yomi": [
				"か-ねる"
			]
		},
		"raw_info": "兼\t\t10\t7S\t\tケン、か-ねる"
	},
	"20869": {
		"joyo_kanji": "内",
		"yomi": {
			"on_yomi": [
				"ナイ",
				"ダイ"
			],
			"kun_yomi": [
				"うち"
			]
		},
		"raw_info": "内\t\t4\t2\t\tナイ、（ダイ）、うち"
	},
	"20870": {
		"joyo_kanji": "円",
		"kyu_jitai": "圓",
		"yomi": {
			"on_yomi": [
				"エン"
			],
			"kun_yomi": [
				"まる"
			],
			"example_yomi": [
				"まる-い"
			]
		},
		"raw_info": "円\t圓\t4\t1\t\tエン、まる-い"
	},
	"20874": {
		"joyo_kanji": "冊",
		"kyu_jitai": "册",
		"yomi": {
			"on_yomi": [
				"サツ",
				"サク"
			]
		},
		"raw_info": "冊\t册\t5\t6\t\tサツ、サク"
	},
	"20877": {
		"joyo_kanji": "再",
		"yomi": {
			"on_yomi": [
				"サイ",
				"サ"
			],
			"kun_yomi": [
				"ふたた"
			],
			"example_yomi": [
				"ふたた-び"
			]
		},
		"raw_info": "再\t\t6\t5\t\tサイ、（サ）、ふたた-び"
	},
	"20882": {
		"joyo_kanji": "冒",
		"yomi": {
			"on_yomi": [
				"ボウ"
			],
			"kun_yomi": [
				"おか"
			],
			"example_yomi": [
				"おか-す"
			]
		},
		"raw_info": "冒\t\t9\t7S\t\tボウ、おか-す"
	},
	"20887": {
		"joyo_kanji": "冗",
		"yomi": {
			"on_yomi": [
				"ジョウ"
			]
		},
		"raw_info": "冗\t\t4\t7S\t\tジョウ"
	},
	"20889": {
		"joyo_kanji": "写",
		"kyu_jitai": "寫",
		"yomi": {
			"on_yomi": [
				"シャ"
			],
			"kun_yomi": [
				"うつ"
			],
			"example_yomi": [
				"うつ-す",
				"うつ-る"
			]
		},
		"raw_info": "写\t寫\t5\t3\t\tシャ、うつ-す、うつ-る"
	},
	"20896": {
		"joyo_kanji": "冠",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"かんむり"
			]
		},
		"raw_info": "冠\t\t9\t7S\t\tカン、かんむり"
	},
	"20901": {
		"joyo_kanji": "冥",
		"yomi": {
			"on_yomi": [
				"メイ",
				"ミョウ"
			]
		},
		"raw_info": "冥\t\t10\t7S\t2010\tメイ、ミョウ"
	},
	"20908": {
		"joyo_kanji": "冬",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"ふゆ"
			]
		},
		"raw_info": "冬\t\t5\t2\t\tトウ、ふゆ"
	},
	"20918": {
		"joyo_kanji": "冶",
		"yomi": {
			"on_yomi": [
				"ヤ"
			]
		},
		"raw_info": "冶\t\t7\t7S\t2010\tヤ"
	},
	"20919": {
		"joyo_kanji": "冷",
		"yomi": {
			"on_yomi": [
				"レイ"
			],
			"kun_yomi": [
				"つめ",
				"ひ",
				"さ"
			],
			"example_yomi": [
				"ひ-える",
				"ひ-や",
				"ひ-やす",
				"ひ-やかす",
				"さ-める",
				"さ-ます",
				"つめ-たい"
			]
		},
		"raw_info": "冷\t\t7\t4\t\tレイ、つめ-たい、ひ-える、ひ-や、ひ-やす、ひ-やかす、さ-める、さ-ます"
	},
	"20932": {
		"joyo_kanji": "凄",
		"yomi": {
			"on_yomi": [
				"セイ"
			]
		},
		"raw_info": "凄\t\t10\t7S\t2010\tセイ"
	},
	"20934": {
		"joyo_kanji": "准",
		"yomi": {
			"on_yomi": [
				"ジュン"
			]
		},
		"raw_info": "准\t\t10\t7S\t\tジュン"
	},
	"20941": {
		"joyo_kanji": "凍",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"こお",
				"こご"
			],
			"example_yomi": [
				"こお-る",
				"こご-える"
			]
		},
		"raw_info": "凍\t\t10\t7S\t\tトウ、こお-る、こご-える"
	},
	"20957": {
		"joyo_kanji": "凝",
		"yomi": {
			"on_yomi": [
				"ギョウ"
			],
			"kun_yomi": [
				"こ"
			],
			"example_yomi": [
				"こ-る",
				"こ-らす"
			]
		},
		"raw_info": "凝\t\t16\t7S\t\tギョウ、こ-る、こ-らす"
	},
	"20961": {
		"joyo_kanji": "凡",
		"yomi": {
			"on_yomi": [
				"ハン",
				"ボン"
			]
		},
		"raw_info": "凡\t\t3\t7S\t\tボン、（ハン）"
	},
	"20966": {
		"joyo_kanji": "処",
		"kyu_jitai": "處",
		"yomi": {
			"on_yomi": [
				"ショ"
			]
		},
		"raw_info": "処\t處\t5\t6\t\tショ"
	},
	"20982": {
		"joyo_kanji": "凶",
		"yomi": {
			"on_yomi": [
				"キョウ"
			]
		},
		"raw_info": "凶\t\t4\t7S\t\tキョウ"
	},
	"20984": {
		"joyo_kanji": "凸",
		"yomi": {
			"on_yomi": [
				"トツ"
			]
		},
		"raw_info": "凸\t\t5\t7S\t1981\tトツ"
	},
	"20985": {
		"joyo_kanji": "凹",
		"yomi": {
			"on_yomi": [
				"オウ"
			]
		},
		"raw_info": "凹\t\t5\t7S\t1981\tオウ"
	},
	"20986": {
		"joyo_kanji": "出",
		"yomi": {
			"on_yomi": [
				"シュツ",
				"スイ"
			],
			"kun_yomi": [
				"で",
				"だ"
			],
			"example_yomi": [
				"で-る",
				"だ-す"
			]
		},
		"raw_info": "出\t\t5\t1\t\tシュツ、（スイ）、で-る、だ-す"
	},
	"20992": {
		"joyo_kanji": "刀",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"かたな"
			]
		},
		"raw_info": "刀\t\t2\t2\t\tトウ、かたな"
	},
	"20995": {
		"joyo_kanji": "刃",
		"kyu_jitai": "刄",
		"yomi": {
			"on_yomi": [
				"ジン"
			],
			"kun_yomi": [
				"は"
			]
		},
		"raw_info": "刃\t刄\t3\t7S\t\tジン、は"
	},
	"20998": {
		"joyo_kanji": "分",
		"yomi": {
			"on_yomi": [
				"ブン",
				"フン",
				"ブ"
			],
			"kun_yomi": [
				"わ"
			],
			"example_yomi": [
				"わ-ける",
				"わ-かれる",
				"わ-かる",
				"わ-かつ"
			]
		},
		"raw_info": "分\t\t4\t2\t\tブン、フン、ブ、わ-ける、わ-かれる、わ-かる、わ-かつ"
	},
	"20999": {
		"joyo_kanji": "切",
		"yomi": {
			"on_yomi": [
				"セツ",
				"サイ"
			],
			"kun_yomi": [
				"き"
			],
			"example_yomi": [
				"き-る",
				"き-れる"
			]
		},
		"raw_info": "切\t\t4\t2\t\tセツ、（サイ）、き-る、き-れる"
	},
	"21000": {
		"joyo_kanji": "刈",
		"yomi": {
			"kun_yomi": [
				"か"
			],
			"example_yomi": [
				"か-る"
			]
		},
		"raw_info": "刈\t\t4\t7S\t\tか-る"
	},
	"21002": {
		"joyo_kanji": "刊",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "刊\t\t5\t5\t\tカン"
	},
	"21009": {
		"joyo_kanji": "刑",
		"yomi": {
			"on_yomi": [
				"ケイ"
			]
		},
		"raw_info": "刑\t\t6\t7S\t\tケイ"
	},
	"21015": {
		"joyo_kanji": "列",
		"yomi": {
			"on_yomi": [
				"レツ"
			]
		},
		"raw_info": "列\t\t6\t3\t\tレツ"
	},
	"21021": {
		"joyo_kanji": "初",
		"yomi": {
			"on_yomi": [
				"ショ"
			],
			"kun_yomi": [
				"そ",
				"はじ",
				"はつ",
				"うい"
			],
			"example_yomi": [
				"はじ-め",
				"はじ-めて",
				"そ-める"
			]
		},
		"raw_info": "初\t\t7\t4\t\tショ、はじ-め、はじ-めて、はつ、うい、そ-める"
	},
	"21028": {
		"joyo_kanji": "判",
		"yomi": {
			"on_yomi": [
				"ハン",
				"バン"
			]
		},
		"raw_info": "判\t\t7\t5\t\tハン、バン"
	},
	"21029": {
		"joyo_kanji": "別",
		"yomi": {
			"on_yomi": [
				"ベツ"
			],
			"kun_yomi": [
				"わか"
			],
			"example_yomi": [
				"わか-れる"
			]
		},
		"raw_info": "別\t\t7\t4\t\tベツ、わか-れる"
	},
	"21033": {
		"joyo_kanji": "利",
		"yomi": {
			"on_yomi": [
				"リ"
			],
			"kun_yomi": [
				"き"
			],
			"example_yomi": [
				"き-く"
			]
		},
		"raw_info": "利\t\t7\t4\t\tリ、き-く"
	},
	"21040": {
		"joyo_kanji": "到",
		"yomi": {
			"on_yomi": [
				"トウ"
			]
		},
		"raw_info": "到\t\t8\t7S\t\tトウ"
	},
	"21046": {
		"joyo_kanji": "制",
		"yomi": {
			"on_yomi": [
				"セイ"
			]
		},
		"raw_info": "制\t\t8\t5\t\tセイ"
	},
	"21047": {
		"joyo_kanji": "刷",
		"yomi": {
			"on_yomi": [
				"サツ"
			],
			"kun_yomi": [
				"す"
			],
			"example_yomi": [
				"す-る"
			]
		},
		"raw_info": "刷\t\t8\t4\t\tサツ、す-る"
	},
	"21048": {
		"joyo_kanji": "券",
		"yomi": {
			"on_yomi": [
				"ケン"
			]
		},
		"raw_info": "券\t\t8\t5\t\tケン"
	},
	"21049": {
		"joyo_kanji": "刹",
		"yomi": {
			"on_yomi": [
				"サツ",
				"セツ"
			]
		},
		"raw_info": "刹\t\t8\t7S\t2010\tサツ、セツ"
	},
	"21050": {
		"joyo_kanji": "刺",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"さ"
			],
			"example_yomi": [
				"さ-す",
				"さ-さる"
			]
		},
		"raw_info": "刺\t\t8\t7S\t\tシ、さ-す、さ-さる"
	},
	"21051": {
		"joyo_kanji": "刻",
		"yomi": {
			"on_yomi": [
				"コク"
			],
			"kun_yomi": [
				"きざ"
			],
			"example_yomi": [
				"きざ-む"
			]
		},
		"raw_info": "刻\t\t8\t6\t\tコク、きざ-む"
	},
	"21063": {
		"joyo_kanji": "則",
		"yomi": {
			"on_yomi": [
				"ソク"
			]
		},
		"raw_info": "則\t\t9\t5\t\tソク"
	},
	"21066": {
		"joyo_kanji": "削",
		"yomi": {
			"on_yomi": [
				"サク"
			],
			"kun_yomi": [
				"けず"
			],
			"example_yomi": [
				"けず-る"
			]
		},
		"raw_info": "削\t\t9\t7S\t\tサク、けず-る"
	},
	"21069": {
		"joyo_kanji": "前",
		"yomi": {
			"on_yomi": [
				"ゼン"
			],
			"kun_yomi": [
				"まえ"
			]
		},
		"raw_info": "前\t\t9\t2\t\tゼン、まえ"
	},
	"21078": {
		"joyo_kanji": "剖",
		"yomi": {
			"on_yomi": [
				"ボウ"
			]
		},
		"raw_info": "剖\t\t10\t7S\t\tボウ"
	},
	"21083": {
		"joyo_kanji": "剛",
		"yomi": {
			"on_yomi": [
				"ゴウ"
			]
		},
		"raw_info": "剛\t\t10\t7S\t\tゴウ"
	},
	"21085": {
		"joyo_kanji": "剝",
		"yomi": {
			"on_yomi": [
				"ハク"
			],
			"kun_yomi": [
				"は"
			],
			"example_yomi": [
				"は-がす",
				"は-ぐ",
				"は-がれる",
				"は-げる"
			]
		},
		"raw_info": "剝\t\t10\t7S\t2010\tハク、は-がす、は-ぐ、は-がれる、は-げる"
	},
	"21091": {
		"joyo_kanji": "剣",
		"kyu_jitai": "劍",
		"yomi": {
			"on_yomi": [
				"ケン"
			],
			"kun_yomi": [
				"つるぎ"
			]
		},
		"raw_info": "剣\t劍\t10\t7S\t\tケン、つるぎ"
	},
	"21092": {
		"joyo_kanji": "剤",
		"kyu_jitai": "劑",
		"yomi": {
			"on_yomi": [
				"ザイ"
			]
		},
		"raw_info": "剤\t劑\t10\t7S\t\tザイ"
	},
	"21103": {
		"joyo_kanji": "副",
		"yomi": {
			"on_yomi": [
				"フク"
			]
		},
		"raw_info": "副\t\t11\t4\t\tフク"
	},
	"21104": {
		"joyo_kanji": "剰",
		"kyu_jitai": "剩",
		"yomi": {
			"on_yomi": [
				"ジョウ"
			]
		},
		"raw_info": "剰\t剩\t11\t7S\t\tジョウ"
	},
	"21106": {
		"joyo_kanji": "割",
		"yomi": {
			"on_yomi": [
				"カツ"
			],
			"kun_yomi": [
				"わ",
				"わり",
				"さ"
			],
			"example_yomi": [
				"わ-る",
				"わ-れる",
				"さ-く"
			]
		},
		"raw_info": "割\t\t12\t6\t\tカツ、わ-る、わり、わ-れる、さ-く"
	},
	"21109": {
		"joyo_kanji": "創",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"つく"
			],
			"example_yomi": [
				"つく-る"
			]
		},
		"raw_info": "創\t\t12\t6\t\tソウ、つく-る"
	},
	"21127": {
		"joyo_kanji": "劇",
		"yomi": {
			"on_yomi": [
				"ゲキ"
			]
		},
		"raw_info": "劇\t\t15\t6\t\tゲキ"
	},
	"21147": {
		"joyo_kanji": "力",
		"yomi": {
			"on_yomi": [
				"リョク",
				"リキ"
			],
			"kun_yomi": [
				"ちから"
			]
		},
		"raw_info": "力\t\t2\t1\t\tリョク、リキ、ちから"
	},
	"21151": {
		"joyo_kanji": "功",
		"yomi": {
			"on_yomi": [
				"コウ",
				"ク"
			]
		},
		"raw_info": "功\t\t5\t4\t\tコウ、（ク）"
	},
	"21152": {
		"joyo_kanji": "加",
		"yomi": {
			"on_yomi": [
				"カ"
			],
			"kun_yomi": [
				"くわ"
			],
			"example_yomi": [
				"くわ-える",
				"くわ-わる"
			]
		},
		"raw_info": "加\t\t5\t4\t\tカ、くわ-える、くわ-わる"
	},
	"21155": {
		"joyo_kanji": "劣",
		"yomi": {
			"on_yomi": [
				"レツ"
			],
			"kun_yomi": [
				"おと"
			],
			"example_yomi": [
				"おと-る"
			]
		},
		"raw_info": "劣\t\t6\t7S\t\tレツ、おと-る"
	},
	"21161": {
		"joyo_kanji": "助",
		"yomi": {
			"on_yomi": [
				"ジョ"
			],
			"kun_yomi": [
				"たす",
				"すけ"
			],
			"example_yomi": [
				"たす-ける",
				"たす-かる"
			]
		},
		"raw_info": "助\t\t7\t3\t\tジョ、たす-ける、たす-かる、すけ"
	},
	"21162": {
		"joyo_kanji": "努",
		"yomi": {
			"on_yomi": [
				"ド"
			],
			"kun_yomi": [
				"つと"
			],
			"example_yomi": [
				"つと-める"
			]
		},
		"raw_info": "努\t\t7\t4\t\tド、つと-める"
	},
	"21169": {
		"joyo_kanji": "励",
		"kyu_jitai": "勵",
		"yomi": {
			"on_yomi": [
				"レイ"
			],
			"kun_yomi": [
				"はげ"
			],
			"example_yomi": [
				"はげ-む",
				"はげ-ます"
			]
		},
		"raw_info": "励\t勵\t7\t7S\t\tレイ、はげ-む、はげ-ます"
	},
	"21172": {
		"joyo_kanji": "労",
		"kyu_jitai": "勞",
		"yomi": {
			"on_yomi": [
				"ロウ"
			]
		},
		"raw_info": "労\t勞\t7\t4\t\tロウ"
	},
	"21177": {
		"joyo_kanji": "効",
		"kyu_jitai": "效",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"き"
			],
			"example_yomi": [
				"き-く"
			]
		},
		"raw_info": "効\t效\t8\t5\t\tコウ、き-く"
	},
	"21182": {
		"joyo_kanji": "劾",
		"yomi": {
			"on_yomi": [
				"ガイ"
			]
		},
		"raw_info": "劾\t\t8\t7S\t\tガイ"
	},
	"21187": {
		"joyo_kanji": "勃",
		"yomi": {
			"on_yomi": [
				"ボツ"
			]
		},
		"raw_info": "勃\t\t9\t7S\t2010\tボツ"
	},
	"21189": {
		"joyo_kanji": "勅",
		"kyu_jitai": "敕",
		"yomi": {
			"on_yomi": [
				"チョク"
			]
		},
		"raw_info": "勅\t敕\t9\t7S\t\tチョク"
	},
	"21191": {
		"joyo_kanji": "勇",
		"yomi": {
			"on_yomi": [
				"ユウ"
			],
			"kun_yomi": [
				"いさ"
			],
			"example_yomi": [
				"いさ-む"
			]
		},
		"raw_info": "勇\t\t9\t4\t\tユウ、いさ-む"
	},
	"21193": {
		"joyo_kanji": "勉",
		"kyu_jitai": "勉",
		"yomi": {
			"on_yomi": [
				"ベン"
			]
		},
		"raw_info": "勉\t勉\t10\t3\t\tベン"
	},
	"21205": {
		"joyo_kanji": "動",
		"yomi": {
			"on_yomi": [
				"ドウ"
			],
			"kun_yomi": [
				"うご"
			],
			"example_yomi": [
				"うご-く",
				"うご-かす"
			]
		},
		"raw_info": "動\t\t11\t3\t\tドウ、うご-く、うご-かす"
	},
	"21208": {
		"joyo_kanji": "勘",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "勘\t\t11\t7S\t\tカン"
	},
	"21209": {
		"joyo_kanji": "務",
		"yomi": {
			"on_yomi": [
				"ム"
			],
			"kun_yomi": [
				"つと"
			],
			"example_yomi": [
				"つと-める",
				"つと-まる"
			]
		},
		"raw_info": "務\t\t11\t5\t\tム、つと-める、つと-まる"
	},
	"21213": {
		"joyo_kanji": "勝",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"か",
				"まさ"
			],
			"example_yomi": [
				"か-つ",
				"まさ-る"
			]
		},
		"raw_info": "勝\t\t12\t3\t\tショウ、か-つ、まさ-る"
	},
	"21215": {
		"joyo_kanji": "募",
		"yomi": {
			"on_yomi": [
				"ボ"
			],
			"kun_yomi": [
				"つの"
			],
			"example_yomi": [
				"つの-る"
			]
		},
		"raw_info": "募\t\t12\t7S\t\tボ、つの-る"
	},
	"21218": {
		"joyo_kanji": "勢",
		"yomi": {
			"on_yomi": [
				"セイ"
			],
			"kun_yomi": [
				"いきお"
			],
			"example_yomi": [
				"いきお-い"
			]
		},
		"raw_info": "勢\t\t13\t5\t\tセイ、いきお-い"
	},
	"21220": {
		"joyo_kanji": "勤",
		"kyu_jitai": "勤",
		"yomi": {
			"on_yomi": [
				"キン",
				"ゴン"
			],
			"kun_yomi": [
				"つと"
			],
			"example_yomi": [
				"つと-める",
				"つと-まる"
			]
		},
		"raw_info": "勤\t勤\t12\t6\t\tキン、（ゴン）、つと-める、つと-まる"
	},
	"21223": {
		"joyo_kanji": "勧",
		"kyu_jitai": "勸",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"すす"
			],
			"example_yomi": [
				"すす-める"
			]
		},
		"raw_info": "勧\t勸\t13\t7S\t\tカン、すす-める"
	},
	"21234": {
		"joyo_kanji": "勲",
		"kyu_jitai": "勳",
		"yomi": {
			"on_yomi": [
				"クン"
			]
		},
		"raw_info": "勲\t勳\t15\t7S\t\tクン"
	},
	"21246": {
		"joyo_kanji": "勾",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "勾\t\t4\t7S\t2010\tコウ"
	},
	"21250": {
		"joyo_kanji": "匂",
		"yomi": {
			"kun_yomi": [
				"にお"
			],
			"example_yomi": [
				"にお-う"
			]
		},
		"raw_info": "匂\t\t4\t7S\t2010\tにお-う"
	},
	"21253": {
		"joyo_kanji": "包",
		"yomi": {
			"on_yomi": [
				"ホウ"
			],
			"kun_yomi": [
				"つつ"
			],
			"example_yomi": [
				"つつ-む"
			]
		},
		"raw_info": "包\t\t5\t4\t\tホウ、つつ-む"
	},
	"21270": {
		"joyo_kanji": "化",
		"yomi": {
			"on_yomi": [
				"カ",
				"ケ"
			],
			"kun_yomi": [
				"ば"
			],
			"example_yomi": [
				"ば-ける",
				"ば-かす"
			]
		},
		"raw_info": "化\t\t4\t3\t\tカ、ケ、ば-ける、ば-かす"
	},
	"21271": {
		"joyo_kanji": "北",
		"yomi": {
			"on_yomi": [
				"ホク"
			],
			"kun_yomi": [
				"きた"
			]
		},
		"raw_info": "北\t\t5\t2\t\tホク、きた"
	},
	"21280": {
		"joyo_kanji": "匠",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "匠\t\t6\t7S\t\tショウ"
	},
	"21305": {
		"joyo_kanji": "匹",
		"yomi": {
			"on_yomi": [
				"ヒツ"
			],
			"kun_yomi": [
				"ひき"
			]
		},
		"raw_info": "匹\t\t4\t7S\t\tヒツ、ひき"
	},
	"21306": {
		"joyo_kanji": "区",
		"kyu_jitai": "區",
		"yomi": {
			"on_yomi": [
				"ク"
			]
		},
		"raw_info": "区\t區\t4\t3\t\tク"
	},
	"21307": {
		"joyo_kanji": "医",
		"kyu_jitai": "醫",
		"yomi": {
			"on_yomi": [
				"イ"
			]
		},
		"raw_info": "医\t醫\t7\t3\t\tイ"
	},
	"21311": {
		"joyo_kanji": "匿",
		"yomi": {
			"on_yomi": [
				"トク"
			]
		},
		"raw_info": "匿\t\t10\t7S\t\tトク"
	},
	"21313": {
		"joyo_kanji": "十",
		"yomi": {
			"on_yomi": [
				"ジュウ",
				"ジッ"
			],
			"kun_yomi": [
				"とお",
				"と"
			]
		},
		"raw_info": "十\t\t2\t1\t\tジュウ、ジッ、とお、と"
	},
	"21315": {
		"joyo_kanji": "千",
		"yomi": {
			"on_yomi": [
				"セン"
			],
			"kun_yomi": [
				"ち"
			]
		},
		"raw_info": "千\t\t3\t1\t\tセン、ち"
	},
	"21319": {
		"joyo_kanji": "升",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"ます"
			]
		},
		"raw_info": "升\t\t4\t7S\t\tショウ、ます"
	},
	"21320": {
		"joyo_kanji": "午",
		"yomi": {
			"on_yomi": [
				"ゴ"
			]
		},
		"raw_info": "午\t\t4\t2\t\tゴ"
	},
	"21322": {
		"joyo_kanji": "半",
		"yomi": {
			"on_yomi": [
				"ハン"
			],
			"kun_yomi": [
				"なか"
			],
			"example_yomi": [
				"なか-ば"
			]
		},
		"raw_info": "半\t\t5\t2\t\tハン、なか-ば"
	},
	"21329": {
		"joyo_kanji": "卑",
		"kyu_jitai": "卑",
		"yomi": {
			"on_yomi": [
				"ヒ"
			],
			"kun_yomi": [
				"いや"
			],
			"example_yomi": [
				"いや-しむ",
				"いや-しめる",
				"いや-しい"
			]
		},
		"raw_info": "卑\t卑\t9\t7S\t\tヒ、いや-しい、いや-しむ、いや-しめる"
	},
	"21330": {
		"joyo_kanji": "卒",
		"yomi": {
			"on_yomi": [
				"ソツ"
			]
		},
		"raw_info": "卒\t\t8\t4\t\tソツ"
	},
	"21331": {
		"joyo_kanji": "卓",
		"yomi": {
			"on_yomi": [
				"タク"
			]
		},
		"raw_info": "卓\t\t8\t7S\t\tタク"
	},
	"21332": {
		"joyo_kanji": "協",
		"yomi": {
			"on_yomi": [
				"キョウ"
			]
		},
		"raw_info": "協\t\t8\t4\t\tキョウ"
	},
	"21335": {
		"joyo_kanji": "南",
		"yomi": {
			"on_yomi": [
				"ナン",
				"ナ"
			],
			"kun_yomi": [
				"みなみ"
			]
		},
		"raw_info": "南\t\t9\t2\t\tナン、（ナ）、みなみ"
	},
	"21336": {
		"joyo_kanji": "単",
		"kyu_jitai": "單",
		"yomi": {
			"on_yomi": [
				"タン"
			]
		},
		"raw_info": "単\t單\t9\t4\t\tタン"
	},
	"21338": {
		"joyo_kanji": "博",
		"yomi": {
			"on_yomi": [
				"ハク",
				"バク"
			]
		},
		"raw_info": "博\t\t12\t4\t\tハク、（バク）"
	},
	"21344": {
		"joyo_kanji": "占",
		"yomi": {
			"on_yomi": [
				"セン"
			],
			"kun_yomi": [
				"し",
				"うらな"
			],
			"example_yomi": [
				"し-める",
				"うらな-う"
			]
		},
		"raw_info": "占\t\t5\t7S\t\tセン、し-める、うらな-う"
	},
	"21360": {
		"joyo_kanji": "印",
		"yomi": {
			"on_yomi": [
				"イン"
			],
			"kun_yomi": [
				"しるし"
			]
		},
		"raw_info": "印\t\t6\t4\t\tイン、しるし"
	},
	"21361": {
		"joyo_kanji": "危",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"あぶ",
				"あや"
			],
			"example_yomi": [
				"あぶ-ない",
				"あや-うい",
				"あや-ぶむ"
			]
		},
		"raw_info": "危\t\t6\t6\t\tキ、あぶ-ない、あや-うい、あや-ぶむ"
	},
	"21363": {
		"joyo_kanji": "即",
		"kyu_jitai": "卽",
		"yomi": {
			"on_yomi": [
				"ソク"
			]
		},
		"raw_info": "即\t卽\t7\t7S\t\tソク"
	},
	"21364": {
		"joyo_kanji": "却",
		"kyu_jitai": "卻",
		"yomi": {
			"on_yomi": [
				"キャク"
			]
		},
		"raw_info": "却\t卻\t7\t7S\t\tキャク"
	},
	"21365": {
		"joyo_kanji": "卵",
		"yomi": {
			"on_yomi": [
				"ラン"
			],
			"kun_yomi": [
				"たまご"
			]
		},
		"raw_info": "卵\t\t7\t6\t\tラン、たまご"
	},
	"21368": {
		"joyo_kanji": "卸",
		"yomi": {
			"kun_yomi": [
				"おろ",
				"おろし"
			],
			"example_yomi": [
				"おろ-す"
			]
		},
		"raw_info": "卸\t\t9\t7S\t\tおろ-す、おろし"
	},
	"21380": {
		"joyo_kanji": "厄",
		"yomi": {
			"on_yomi": [
				"ヤク"
			]
		},
		"raw_info": "厄\t\t4\t7S\t1981\tヤク"
	},
	"21400": {
		"joyo_kanji": "厘",
		"yomi": {
			"on_yomi": [
				"リン"
			]
		},
		"raw_info": "厘\t\t9\t7S\t\tリン"
	},
	"21402": {
		"joyo_kanji": "厚",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"あつ"
			],
			"example_yomi": [
				"あつ-い"
			]
		},
		"raw_info": "厚\t\t9\t5\t\tコウ、あつ-い"
	},
	"21407": {
		"joyo_kanji": "原",
		"yomi": {
			"on_yomi": [
				"ゲン"
			],
			"kun_yomi": [
				"はら"
			]
		},
		"raw_info": "原\t\t10\t2\t\tゲン、はら"
	},
	"21427": {
		"joyo_kanji": "厳",
		"kyu_jitai": "嚴",
		"yomi": {
			"on_yomi": [
				"ゲン",
				"ゴン"
			],
			"kun_yomi": [
				"おごそ",
				"きび"
			],
			"example_yomi": [
				"おごそ-か",
				"きび-しい"
			]
		},
		"raw_info": "厳\t嚴\t17\t6\t\tゲン、（ゴン）、おごそ-か、きび-しい"
	},
	"21435": {
		"joyo_kanji": "去",
		"yomi": {
			"on_yomi": [
				"キョ",
				"コ"
			],
			"kun_yomi": [
				"さ"
			],
			"example_yomi": [
				"さ-る"
			]
		},
		"raw_info": "去\t\t5\t3\t\tキョ、コ、さ-る"
	},
	"21442": {
		"joyo_kanji": "参",
		"kyu_jitai": "參",
		"yomi": {
			"on_yomi": [
				"サン"
			],
			"kun_yomi": [
				"まい"
			],
			"example_yomi": [
				"まい-る"
			]
		},
		"raw_info": "参\t參\t8\t4\t\tサン、まい-る"
	},
	"21448": {
		"joyo_kanji": "又",
		"yomi": {
			"kun_yomi": [
				"また"
			]
		},
		"raw_info": "又\t\t2\t7S\t\tまた"
	},
	"21450": {
		"joyo_kanji": "及",
		"yomi": {
			"on_yomi": [
				"キュウ"
			],
			"kun_yomi": [
				"およ"
			],
			"example_yomi": [
				"およ-ぶ",
				"およ-び",
				"およ-ぼす"
			]
		},
		"raw_info": "及\t\t3\t7S\t\tキュウ、およ-ぶ、およ-び、およ-ぼす"
	},
	"21451": {
		"joyo_kanji": "友",
		"yomi": {
			"on_yomi": [
				"ユウ"
			],
			"kun_yomi": [
				"とも"
			]
		},
		"raw_info": "友\t\t4\t2\t\tユウ、とも"
	},
	"21452": {
		"joyo_kanji": "双",
		"kyu_jitai": "雙",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"ふた"
			]
		},
		"raw_info": "双\t雙\t4\t7S\t\tソウ、ふた"
	},
	"21453": {
		"joyo_kanji": "反",
		"yomi": {
			"on_yomi": [
				"ハン",
				"ホン",
				"タン"
			],
			"kun_yomi": [
				"そ"
			],
			"example_yomi": [
				"そ-る",
				"そ-らす"
			]
		},
		"raw_info": "反\t\t4\t3\t\tハン、（ホン）、（タン）、そ-る、そ-らす"
	},
	"21454": {
		"joyo_kanji": "収",
		"kyu_jitai": "收",
		"yomi": {
			"on_yomi": [
				"シュウ"
			],
			"kun_yomi": [
				"おさ"
			],
			"example_yomi": [
				"おさ-める",
				"おさ-まる"
			]
		},
		"raw_info": "収\t收\t4\t6\t\tシュウ、おさ-める、おさ-まる"
	},
	"21460": {
		"joyo_kanji": "叔",
		"yomi": {
			"on_yomi": [
				"シュク"
			]
		},
		"raw_info": "叔\t\t8\t7S\t\tシュク"
	},
	"21462": {
		"joyo_kanji": "取",
		"yomi": {
			"on_yomi": [
				"シュ"
			],
			"kun_yomi": [
				"と"
			],
			"example_yomi": [
				"と-る"
			]
		},
		"raw_info": "取\t\t8\t3\t\tシュ、と-る"
	},
	"21463": {
		"joyo_kanji": "受",
		"yomi": {
			"on_yomi": [
				"ジュ"
			],
			"kun_yomi": [
				"う"
			],
			"example_yomi": [
				"う-ける",
				"う-かる"
			]
		},
		"raw_info": "受\t\t8\t3\t\tジュ、う-ける、う-かる"
	},
	"21465": {
		"joyo_kanji": "叙",
		"kyu_jitai": "敍",
		"yomi": {
			"on_yomi": [
				"ジョ"
			]
		},
		"raw_info": "叙\t敍\t9\t7S\t\tジョ"
	},
	"21475": {
		"joyo_kanji": "口",
		"yomi": {
			"on_yomi": [
				"コウ",
				"ク"
			],
			"kun_yomi": [
				"くち"
			]
		},
		"raw_info": "口\t\t3\t1\t\tコウ、ク、くち"
	},
	"21476": {
		"joyo_kanji": "古",
		"yomi": {
			"on_yomi": [
				"コ"
			],
			"kun_yomi": [
				"ふる"
			],
			"example_yomi": [
				"ふる-い",
				"ふる-す"
			]
		},
		"raw_info": "古\t\t5\t2\t\tコ、ふる-い、ふる-す"
	},
	"21477": {
		"joyo_kanji": "句",
		"yomi": {
			"on_yomi": [
				"ク"
			]
		},
		"raw_info": "句\t\t5\t5\t\tク"
	},
	"21483": {
		"joyo_kanji": "叫",
		"yomi": {
			"on_yomi": [
				"キョウ"
			],
			"kun_yomi": [
				"さけ"
			],
			"example_yomi": [
				"さけ-ぶ"
			]
		},
		"raw_info": "叫\t\t6\t7S\t\tキョウ、さけ-ぶ"
	},
	"21484": {
		"joyo_kanji": "召",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"め"
			],
			"example_yomi": [
				"め-す"
			]
		},
		"raw_info": "召\t\t5\t7S\t\tショウ、め-す"
	},
	"21487": {
		"joyo_kanji": "可",
		"yomi": {
			"on_yomi": [
				"カ"
			]
		},
		"raw_info": "可\t\t5\t5\t\tカ"
	},
	"21488": {
		"joyo_kanji": "台",
		"kyu_jitai": "臺",
		"yomi": {
			"on_yomi": [
				"ダイ",
				"タイ"
			]
		},
		"raw_info": "台\t臺\t5\t2\t\tダイ、タイ"
	},
	"21490": {
		"joyo_kanji": "史",
		"yomi": {
			"on_yomi": [
				"シ"
			]
		},
		"raw_info": "史\t\t5\t4\t\tシ"
	},
	"21491": {
		"joyo_kanji": "右",
		"yomi": {
			"on_yomi": [
				"ウ",
				"ユウ"
			],
			"kun_yomi": [
				"みぎ"
			]
		},
		"raw_info": "右\t\t5\t1\t\tウ、ユウ、みぎ"
	},
	"21495": {
		"joyo_kanji": "号",
		"kyu_jitai": "號",
		"yomi": {
			"on_yomi": [
				"ゴウ"
			]
		},
		"raw_info": "号\t號\t5\t3\t\tゴウ"
	},
	"21496": {
		"joyo_kanji": "司",
		"yomi": {
			"on_yomi": [
				"シ"
			]
		},
		"raw_info": "司\t\t5\t4\t\tシ"
	},
	"21508": {
		"joyo_kanji": "各",
		"yomi": {
			"on_yomi": [
				"カク"
			],
			"kun_yomi": [
				"おのおの"
			]
		},
		"raw_info": "各\t\t6\t4\t\tカク、おのおの"
	},
	"21512": {
		"joyo_kanji": "合",
		"yomi": {
			"on_yomi": [
				"ガッ",
				"カッ",
				"ゴウ"
			],
			"kun_yomi": [
				"あ"
			],
			"example_yomi": [
				"あ-わす",
				"あ-わせる",
				"あ-う"
			]
		},
		"raw_info": "合\t\t6\t2\t\tゴウ、ガッ、（カッ）、あ-う、あ-わす、あ-わせる"
	},
	"21513": {
		"joyo_kanji": "吉",
		"yomi": {
			"on_yomi": [
				"キチ",
				"キツ"
			]
		},
		"raw_info": "吉\t\t6\t7S\t\tキチ、キツ"
	},
	"21516": {
		"joyo_kanji": "同",
		"yomi": {
			"on_yomi": [
				"ドウ"
			],
			"kun_yomi": [
				"おな"
			],
			"example_yomi": [
				"おな-じ"
			]
		},
		"raw_info": "同\t\t6\t2\t\tドウ、おな-じ"
	},
	"21517": {
		"joyo_kanji": "名",
		"yomi": {
			"on_yomi": [
				"メイ",
				"ミョウ"
			],
			"kun_yomi": [
				"な"
			]
		},
		"raw_info": "名\t\t6\t1\t\tメイ、ミョウ、な"
	},
	"21518": {
		"joyo_kanji": "后",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "后\t\t6\t6\t\tコウ"
	},
	"21519": {
		"joyo_kanji": "吏",
		"yomi": {
			"on_yomi": [
				"リ"
			]
		},
		"raw_info": "吏\t\t6\t7S\t\tリ"
	},
	"21520": {
		"joyo_kanji": "吐",
		"yomi": {
			"on_yomi": [
				"ト"
			],
			"kun_yomi": [
				"は"
			],
			"example_yomi": [
				"は-く"
			]
		},
		"raw_info": "吐\t\t6\t7S\t\tト、は-く"
	},
	"21521": {
		"joyo_kanji": "向",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"む"
			],
			"example_yomi": [
				"む-く",
				"む-ける",
				"む-かう",
				"む-こう"
			]
		},
		"raw_info": "向\t\t6\t3\t\tコウ、む-く、む-ける、む-かう、む-こう"
	},
	"21531": {
		"joyo_kanji": "君",
		"yomi": {
			"on_yomi": [
				"クン"
			],
			"kun_yomi": [
				"きみ"
			]
		},
		"raw_info": "君\t\t7\t3\t\tクン、きみ"
	},
	"21535": {
		"joyo_kanji": "吟",
		"yomi": {
			"on_yomi": [
				"ギン"
			]
		},
		"raw_info": "吟\t\t7\t7S\t\tギン"
	},
	"21542": {
		"joyo_kanji": "否",
		"yomi": {
			"on_yomi": [
				"ヒ"
			],
			"kun_yomi": [
				"いな"
			]
		},
		"raw_info": "否\t\t7\t6\t\tヒ、いな"
	},
	"21547": {
		"joyo_kanji": "含",
		"yomi": {
			"on_yomi": [
				"ガン"
			],
			"kun_yomi": [
				"ふく"
			],
			"example_yomi": [
				"ふく-む",
				"ふく-める"
			]
		},
		"raw_info": "含\t\t7\t7S\t\tガン、ふく-む、ふく-める"
	},
	"21560": {
		"joyo_kanji": "吸",
		"yomi": {
			"on_yomi": [
				"キュウ"
			],
			"kun_yomi": [
				"す"
			],
			"example_yomi": [
				"す-う"
			]
		},
		"raw_info": "吸\t\t6\t6\t\tキュウ、す-う"
	},
	"21561": {
		"joyo_kanji": "吹",
		"yomi": {
			"on_yomi": [
				"スイ"
			],
			"kun_yomi": [
				"ふ"
			],
			"example_yomi": [
				"ふ-く"
			]
		},
		"raw_info": "吹\t\t7\t7S\t\tスイ、ふ-く"
	},
	"21570": {
		"joyo_kanji": "呂",
		"yomi": {
			"on_yomi": [
				"ロ"
			]
		},
		"raw_info": "呂\t\t7\t7S\t2010\tロ"
	},
	"21576": {
		"joyo_kanji": "呈",
		"yomi": {
			"on_yomi": [
				"テイ"
			]
		},
		"raw_info": "呈\t\t7\t7S\t\tテイ"
	},
	"21577": {
		"joyo_kanji": "呉",
		"yomi": {
			"on_yomi": [
				"ゴ"
			]
		},
		"raw_info": "呉\t\t7\t7S\t\tゴ"
	},
	"21578": {
		"joyo_kanji": "告",
		"yomi": {
			"on_yomi": [
				"コク"
			],
			"kun_yomi": [
				"つ"
			],
			"example_yomi": [
				"つ-げる"
			]
		},
		"raw_info": "告\t\t7\t4\t\tコク、つ-げる"
	},
	"21608": {
		"joyo_kanji": "周",
		"yomi": {
			"on_yomi": [
				"シュウ"
			],
			"kun_yomi": [
				"まわ"
			],
			"example_yomi": [
				"まわ-り"
			]
		},
		"raw_info": "周\t\t8\t4\t\tシュウ、まわ-り"
	},
	"21610": {
		"joyo_kanji": "呪",
		"yomi": {
			"on_yomi": [
				"ジュ"
			],
			"kun_yomi": [
				"のろ"
			],
			"example_yomi": [
				"のろ-う"
			]
		},
		"raw_info": "呪\t\t8\t7S\t2010\tジュ、のろ-う"
	},
	"21619": {
		"joyo_kanji": "味",
		"yomi": {
			"on_yomi": [
				"ミ"
			],
			"kun_yomi": [
				"あじ"
			],
			"example_yomi": [
				"あじ-わう"
			]
		},
		"raw_info": "味\t\t8\t3\t\tミ、あじ、あじ-わう"
	},
	"21628": {
		"joyo_kanji": "呼",
		"yomi": {
			"on_yomi": [
				"コ"
			],
			"kun_yomi": [
				"よ"
			],
			"example_yomi": [
				"よ-ぶ"
			]
		},
		"raw_info": "呼\t\t8\t6\t\tコ、よ-ぶ"
	},
	"21629": {
		"joyo_kanji": "命",
		"yomi": {
			"on_yomi": [
				"ミョウ",
				"メイ"
			],
			"kun_yomi": [
				"いのち"
			]
		},
		"raw_info": "命\t\t8\t3\t\tメイ、ミョウ、いのち"
	},
	"21644": {
		"joyo_kanji": "和",
		"yomi": {
			"on_yomi": [
				"ワ",
				"オ"
			],
			"kun_yomi": [
				"やわ",
				"なご"
			],
			"example_yomi": [
				"やわ-らぐ",
				"やわ-らげる",
				"なご-む",
				"なご-やか"
			]
		},
		"raw_info": "和\t\t8\t3\t\tワ、（オ）、やわ-らぐ、やわ-らげる、なご-む、なご-やか"
	},
	"21682": {
		"joyo_kanji": "咲",
		"yomi": {
			"kun_yomi": [
				"さ"
			],
			"example_yomi": [
				"さ-く"
			]
		},
		"raw_info": "咲\t\t9\t7S\t\tさ-く"
	},
	"21693": {
		"joyo_kanji": "咽",
		"yomi": {
			"on_yomi": [
				"イン"
			]
		},
		"raw_info": "咽\t\t9\t7S\t2010\tイン"
	},
	"21696": {
		"joyo_kanji": "哀",
		"yomi": {
			"on_yomi": [
				"アイ"
			],
			"kun_yomi": [
				"あわ"
			],
			"example_yomi": [
				"あわ-れ",
				"あわ-れむ"
			]
		},
		"raw_info": "哀\t\t9\t7S\t\tアイ、あわ-れ、あわ-れむ"
	},
	"21697": {
		"joyo_kanji": "品",
		"yomi": {
			"on_yomi": [
				"ヒン"
			],
			"kun_yomi": [
				"しな"
			]
		},
		"raw_info": "品\t\t9\t3\t\tヒン、しな"
	},
	"21729": {
		"joyo_kanji": "員",
		"yomi": {
			"on_yomi": [
				"イン"
			]
		},
		"raw_info": "員\t\t10\t3\t\tイン"
	},
	"21746": {
		"joyo_kanji": "哲",
		"yomi": {
			"on_yomi": [
				"テツ"
			]
		},
		"raw_info": "哲\t\t10\t7S\t\tテツ"
	},
	"21754": {
		"joyo_kanji": "哺",
		"yomi": {
			"on_yomi": [
				"ホ"
			]
		},
		"raw_info": "哺\t\t10\t7S\t2010\tホ"
	},
	"21764": {
		"joyo_kanji": "唄",
		"yomi": {
			"kun_yomi": [
				"うた"
			]
		},
		"raw_info": "唄\t\t10\t7S\t2010\t（うた）"
	},
	"21766": {
		"joyo_kanji": "唆",
		"yomi": {
			"on_yomi": [
				"サ"
			],
			"kun_yomi": [
				"そそのか"
			],
			"example_yomi": [
				"そそのか-す"
			]
		},
		"raw_info": "唆\t\t10\t7S\t\tサ、そそのか-す"
	},
	"21767": {
		"joyo_kanji": "唇",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"くちびる"
			]
		},
		"raw_info": "唇\t\t10\t7S\t1981\tシン、くちびる"
	},
	"21776": {
		"joyo_kanji": "唐",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"から"
			]
		},
		"raw_info": "唐\t\t10\t7S\t\tトウ、から"
	},
	"21807": {
		"joyo_kanji": "唯",
		"yomi": {
			"on_yomi": [
				"ユイ",
				"イ"
			]
		},
		"raw_info": "唯\t\t11\t7S\t\tユイ、（イ）"
	},
	"21809": {
		"joyo_kanji": "唱",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"とな"
			],
			"example_yomi": [
				"とな-える"
			]
		},
		"raw_info": "唱\t\t11\t4\t\tショウ、とな-える"
	},
	"21822": {
		"joyo_kanji": "唾",
		"yomi": {
			"on_yomi": [
				"ダ"
			],
			"kun_yomi": [
				"つば"
			]
		},
		"raw_info": "唾\t\t11\t7S\t2010\tダ、つば"
	},
	"21830": {
		"joyo_kanji": "商",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"あきな"
			],
			"example_yomi": [
				"あきな-う"
			]
		},
		"raw_info": "商\t\t11\t3\t\tショウ、あきな-う"
	},
	"21839": {
		"joyo_kanji": "問",
		"yomi": {
			"on_yomi": [
				"モン"
			],
			"kun_yomi": [
				"と",
				"とん"
			],
			"example_yomi": [
				"と-う",
				"と-い"
			]
		},
		"raw_info": "問\t\t11\t3\t\tモン、と-う、と-い、（とん）"
	},
	"21843": {
		"joyo_kanji": "啓",
		"yomi": {
			"on_yomi": [
				"ケイ"
			]
		},
		"raw_info": "啓\t\t11\t7S\t\tケイ"
	},
	"21892": {
		"joyo_kanji": "善",
		"yomi": {
			"on_yomi": [
				"ゼン"
			],
			"kun_yomi": [
				"よ"
			],
			"example_yomi": [
				"よ-い"
			]
		},
		"raw_info": "善\t\t12\t6\t\tゼン、よ-い"
	},
	"21897": {
		"joyo_kanji": "喉",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"のど"
			]
		},
		"raw_info": "喉\t\t12\t7S\t2010\tコウ、のど"
	},
	"21914": {
		"joyo_kanji": "喚",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "喚\t\t12\t7S\t\tカン"
	},
	"21916": {
		"joyo_kanji": "喜",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"よろこ"
			],
			"example_yomi": [
				"よろこ-ぶ"
			]
		},
		"raw_info": "喜\t\t12\t4\t\tキ、よろこ-ぶ"
	},
	"21917": {
		"joyo_kanji": "喝",
		"kyu_jitai": "喝",
		"yomi": {
			"on_yomi": [
				"カツ"
			]
		},
		"raw_info": "喝\t喝\t11\t7S\t1981\tカツ"
	},
	"21929": {
		"joyo_kanji": "喩",
		"yomi": {
			"on_yomi": [
				"ユ"
			]
		},
		"raw_info": "喩\t\t12\t7S\t2010\tユ"
	},
	"21930": {
		"joyo_kanji": "喪",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"も"
			]
		},
		"raw_info": "喪\t\t12\t7S\t\tソウ、も"
	},
	"21931": {
		"joyo_kanji": "喫",
		"yomi": {
			"on_yomi": [
				"キツ"
			]
		},
		"raw_info": "喫\t\t12\t7S\t\tキツ"
	},
	"21942": {
		"joyo_kanji": "営",
		"kyu_jitai": "營",
		"yomi": {
			"on_yomi": [
				"エイ"
			],
			"kun_yomi": [
				"いとな"
			],
			"example_yomi": [
				"いとな-む"
			]
		},
		"raw_info": "営\t營\t12\t5\t\tエイ、いとな-む"
	},
	"21957": {
		"joyo_kanji": "嗅",
		"yomi": {
			"on_yomi": [
				"キュウ"
			],
			"kun_yomi": [
				"か"
			],
			"example_yomi": [
				"か-ぐ"
			]
		},
		"raw_info": "嗅\t\t13\t7S\t2010\tキュウ、か-ぐ"
	},
	"21987": {
		"joyo_kanji": "嗣",
		"yomi": {
			"on_yomi": [
				"シ"
			]
		},
		"raw_info": "嗣\t\t13\t7S\t\tシ"
	},
	"22022": {
		"joyo_kanji": "嘆",
		"kyu_jitai": "嘆",
		"yomi": {
			"on_yomi": [
				"タン"
			],
			"kun_yomi": [
				"なげ"
			],
			"example_yomi": [
				"なげ-かわしい",
				"なげ-く"
			]
		},
		"raw_info": "嘆\t嘆\t13\t7S\t\tタン、なげ-く、なげ-かわしい"
	},
	"22065": {
		"joyo_kanji": "嘱",
		"kyu_jitai": "囑",
		"yomi": {
			"on_yomi": [
				"ショク"
			]
		},
		"raw_info": "嘱\t囑\t15\t7S\t\tショク"
	},
	"22066": {
		"joyo_kanji": "嘲",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"あざけ"
			],
			"example_yomi": [
				"あざけ-る"
			]
		},
		"raw_info": "嘲\t\t15\t7S\t2010\tチョウ、あざけ-る"
	},
	"22120": {
		"joyo_kanji": "器",
		"kyu_jitai": "器",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"うつわ"
			]
		},
		"raw_info": "器\t器\t15\t4\t\tキ、うつわ"
	},
	"22132": {
		"joyo_kanji": "噴",
		"yomi": {
			"on_yomi": [
				"フン"
			],
			"kun_yomi": [
				"ふ"
			],
			"example_yomi": [
				"ふ-く"
			]
		},
		"raw_info": "噴\t\t15\t7S\t\tフン、ふ-く"
	},
	"22151": {
		"joyo_kanji": "嚇",
		"yomi": {
			"on_yomi": [
				"カク"
			]
		},
		"raw_info": "嚇\t\t17\t7S\t\tカク"
	},
	"22234": {
		"joyo_kanji": "囚",
		"yomi": {
			"on_yomi": [
				"シュウ"
			]
		},
		"raw_info": "囚\t\t5\t7S\t\tシュウ"
	},
	"22235": {
		"joyo_kanji": "四",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"よ",
				"よっ",
				"よん"
			],
			"example_yomi": [
				"よ-つ",
				"よっ-つ"
			]
		},
		"raw_info": "四\t\t5\t1\t\tシ、よ、よ-つ、よっ-つ、よん"
	},
	"22238": {
		"joyo_kanji": "回",
		"kyu_jitai": "囘",
		"yomi": {
			"on_yomi": [
				"エ",
				"カイ"
			],
			"kun_yomi": [
				"まわ"
			],
			"example_yomi": [
				"まわ-る",
				"まわ-す"
			]
		},
		"raw_info": "回\t囘\t6\t2\t\tカイ、（エ）、まわ-る、まわ-す"
	},
	"22240": {
		"joyo_kanji": "因",
		"yomi": {
			"on_yomi": [
				"イン"
			],
			"kun_yomi": [
				"よ"
			],
			"example_yomi": [
				"よ-る"
			]
		},
		"raw_info": "因\t\t6\t5\t\tイン、よ-る"
	},
	"22243": {
		"joyo_kanji": "団",
		"kyu_jitai": "團",
		"yomi": {
			"on_yomi": [
				"ダン",
				"トン"
			]
		},
		"raw_info": "団\t團\t6\t5\t\tダン、（トン）"
	},
	"22256": {
		"joyo_kanji": "困",
		"yomi": {
			"on_yomi": [
				"コン"
			],
			"kun_yomi": [
				"こま"
			],
			"example_yomi": [
				"こま-る"
			]
		},
		"raw_info": "困\t\t7\t6\t\tコン、こま-る"
	},
	"22258": {
		"joyo_kanji": "囲",
		"kyu_jitai": "圍",
		"yomi": {
			"on_yomi": [
				"イ"
			],
			"kun_yomi": [
				"かこ"
			],
			"example_yomi": [
				"かこ-む",
				"かこ-う"
			]
		},
		"raw_info": "囲\t圍\t7\t4\t\tイ、かこ-む、かこ-う"
	},
	"22259": {
		"joyo_kanji": "図",
		"kyu_jitai": "圖",
		"yomi": {
			"on_yomi": [
				"ズ",
				"ト"
			],
			"kun_yomi": [
				"はか"
			],
			"example_yomi": [
				"はか-る"
			]
		},
		"raw_info": "図\t圖\t7\t2\t\tズ、ト、はか-る"
	},
	"22266": {
		"joyo_kanji": "固",
		"yomi": {
			"on_yomi": [
				"コ"
			],
			"kun_yomi": [
				"かた"
			],
			"example_yomi": [
				"かた-い",
				"かた-める",
				"かた-まる"
			]
		},
		"raw_info": "固\t\t8\t4\t\tコ、かた-める、かた-まる、かた-い"
	},
	"22269": {
		"joyo_kanji": "国",
		"kyu_jitai": "國",
		"yomi": {
			"on_yomi": [
				"コク"
			],
			"kun_yomi": [
				"くに"
			]
		},
		"raw_info": "国\t國\t8\t2\t\tコク、くに"
	},
	"22287": {
		"joyo_kanji": "圏",
		"kyu_jitai": "圈",
		"yomi": {
			"on_yomi": [
				"ケン"
			]
		},
		"raw_info": "圏\t圈\t12\t7S\t\tケン"
	},
	"22290": {
		"joyo_kanji": "園",
		"yomi": {
			"on_yomi": [
				"エン"
			],
			"kun_yomi": [
				"その"
			]
		},
		"raw_info": "園\t\t13\t2\t\tエン、その"
	},
	"22303": {
		"joyo_kanji": "土",
		"yomi": {
			"on_yomi": [
				"ド",
				"ト"
			],
			"kun_yomi": [
				"つち"
			]
		},
		"raw_info": "土\t\t3\t1\t\tド、ト、つち"
	},
	"22311": {
		"joyo_kanji": "圧",
		"kyu_jitai": "壓",
		"yomi": {
			"on_yomi": [
				"アツ"
			]
		},
		"raw_info": "圧\t壓\t5\t5\t\tアツ"
	},
	"22312": {
		"joyo_kanji": "在",
		"yomi": {
			"on_yomi": [
				"ザイ"
			],
			"kun_yomi": [
				"あ"
			],
			"example_yomi": [
				"あ-る"
			]
		},
		"raw_info": "在\t\t6\t5\t\tザイ、あ-る"
	},
	"22320": {
		"joyo_kanji": "地",
		"yomi": {
			"on_yomi": [
				"チ",
				"ジ"
			]
		},
		"raw_info": "地\t\t6\t2\t\tチ、ジ"
	},
	"22338": {
		"joyo_kanji": "坂",
		"yomi": {
			"on_yomi": [
				"ハン"
			],
			"kun_yomi": [
				"さか"
			]
		},
		"raw_info": "坂\t\t7\t3\t\tハン、さか"
	},
	"22343": {
		"joyo_kanji": "均",
		"yomi": {
			"on_yomi": [
				"キン"
			]
		},
		"raw_info": "均\t\t7\t5\t\tキン"
	},
	"22346": {
		"joyo_kanji": "坊",
		"yomi": {
			"on_yomi": [
				"ボウ",
				"ボッ"
			]
		},
		"raw_info": "坊\t\t7\t7S\t\tボウ、（ボッ）"
	},
	"22353": {
		"joyo_kanji": "坑",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "坑\t\t7\t7S\t\tコウ"
	},
	"22378": {
		"joyo_kanji": "坪",
		"yomi": {
			"kun_yomi": [
				"つぼ"
			]
		},
		"raw_info": "坪\t\t8\t7S\t\tつぼ"
	},
	"22402": {
		"joyo_kanji": "垂",
		"yomi": {
			"on_yomi": [
				"スイ"
			],
			"kun_yomi": [
				"た"
			],
			"example_yomi": [
				"た-れる",
				"た-らす"
			]
		},
		"raw_info": "垂\t\t8\t6\t\tスイ、た-れる、た-らす"
	},
	"22411": {
		"joyo_kanji": "型",
		"yomi": {
			"on_yomi": [
				"ケイ"
			],
			"kun_yomi": [
				"かた"
			]
		},
		"raw_info": "型\t\t9\t4\t\tケイ、かた"
	},
	"22435": {
		"joyo_kanji": "垣",
		"yomi": {
			"kun_yomi": [
				"かき"
			]
		},
		"raw_info": "垣\t\t9\t7S\t1981\tかき"
	},
	"22475": {
		"joyo_kanji": "埋",
		"yomi": {
			"on_yomi": [
				"マイ"
			],
			"kun_yomi": [
				"う"
			],
			"example_yomi": [
				"う-もれる",
				"う-める",
				"う-まる"
			]
		},
		"raw_info": "埋\t\t10\t7S\t\tマイ、う-める、う-まる、う-もれる"
	},
	"22478": {
		"joyo_kanji": "城",
		"yomi": {
			"on_yomi": [
				"ジョウ"
			],
			"kun_yomi": [
				"しろ"
			]
		},
		"raw_info": "城\t\t9\t6\t\tジョウ、しろ"
	},
	"22495": {
		"joyo_kanji": "域",
		"yomi": {
			"on_yomi": [
				"イキ"
			]
		},
		"raw_info": "域\t\t11\t6\t\tイキ"
	},
	"22519": {
		"joyo_kanji": "執",
		"yomi": {
			"on_yomi": [
				"シツ",
				"シュウ"
			],
			"kun_yomi": [
				"と"
			],
			"example_yomi": [
				"と-る"
			]
		},
		"raw_info": "執\t\t11\t7S\t\tシツ、シュウ、と-る"
	},
	"22521": {
		"joyo_kanji": "培",
		"yomi": {
			"on_yomi": [
				"バイ"
			],
			"kun_yomi": [
				"つちか"
			],
			"example_yomi": [
				"つちか-う"
			]
		},
		"raw_info": "培\t\t11\t7S\t\tバイ、つちか-う"
	},
	"22522": {
		"joyo_kanji": "基",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"もと",
				"もとい"
			]
		},
		"raw_info": "基\t\t11\t5\t\tキ、もと、もとい"
	},
	"22524": {
		"joyo_kanji": "埼",
		"yomi": {
			"kun_yomi": [
				"さい"
			]
		},
		"raw_info": "埼\t\t11\t7S\t2010\t（さい）"
	},
	"22528": {
		"joyo_kanji": "堀",
		"yomi": {
			"kun_yomi": [
				"ほり"
			]
		},
		"raw_info": "堀\t\t11\t7S\t1981\tほり"
	},
	"22530": {
		"joyo_kanji": "堂",
		"yomi": {
			"on_yomi": [
				"ドウ"
			]
		},
		"raw_info": "堂\t\t11\t4\t\tドウ"
	},
	"22533": {
		"joyo_kanji": "堅",
		"yomi": {
			"on_yomi": [
				"ケン"
			],
			"kun_yomi": [
				"かた"
			],
			"example_yomi": [
				"かた-い"
			]
		},
		"raw_info": "堅\t\t12\t7S\t\tケン、かた-い"
	},
	"22534": {
		"joyo_kanji": "堆",
		"yomi": {
			"on_yomi": [
				"タイ"
			]
		},
		"raw_info": "堆\t\t11\t7S\t2010\tタイ"
	},
	"22549": {
		"joyo_kanji": "堕",
		"kyu_jitai": "墮",
		"yomi": {
			"on_yomi": [
				"ダ"
			]
		},
		"raw_info": "堕\t墮\t12\t7S\t\tダ"
	},
	"22564": {
		"joyo_kanji": "堤",
		"yomi": {
			"on_yomi": [
				"テイ"
			],
			"kun_yomi": [
				"つつみ"
			]
		},
		"raw_info": "堤\t\t12\t7S\t\tテイ、つつみ"
	},
	"22570": {
		"joyo_kanji": "堪",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"た"
			],
			"example_yomi": [
				"た-える"
			]
		},
		"raw_info": "堪\t\t12\t7S\t\tカン、た-える"
	},
	"22577": {
		"joyo_kanji": "報",
		"yomi": {
			"on_yomi": [
				"ホウ"
			],
			"kun_yomi": [
				"むく"
			],
			"example_yomi": [
				"むく-いる"
			]
		},
		"raw_info": "報\t\t12\t5\t\tホウ、むく-いる"
	},
	"22580": {
		"joyo_kanji": "場",
		"yomi": {
			"on_yomi": [
				"ジョウ"
			],
			"kun_yomi": [
				"ば"
			]
		},
		"raw_info": "場\t\t12\t2\t\tジョウ、ば"
	},
	"22592": {
		"joyo_kanji": "塀",
		"kyu_jitai": "塀",
		"yomi": {
			"on_yomi": [
				"ヘイ"
			]
		},
		"raw_info": "塀\t塀\t12\t7S\t1981\tヘイ"
	},
	"22593": {
		"joyo_kanji": "塁",
		"kyu_jitai": "壘",
		"yomi": {
			"on_yomi": [
				"ルイ"
			]
		},
		"raw_info": "塁\t壘\t12\t7S\t\tルイ"
	},
	"22602": {
		"joyo_kanji": "塊",
		"yomi": {
			"on_yomi": [
				"カイ"
			],
			"kun_yomi": [
				"かたまり"
			]
		},
		"raw_info": "塊\t\t13\t7S\t\tカイ、かたまり"
	},
	"22609": {
		"joyo_kanji": "塑",
		"yomi": {
			"on_yomi": [
				"ソ"
			]
		},
		"raw_info": "塑\t\t13\t7S\t\tソ"
	},
	"22612": {
		"joyo_kanji": "塔",
		"yomi": {
			"on_yomi": [
				"トウ"
			]
		},
		"raw_info": "塔\t\t12\t7S\t\tトウ"
	},
	"22615": {
		"joyo_kanji": "塗",
		"yomi": {
			"on_yomi": [
				"ト"
			],
			"kun_yomi": [
				"ぬ"
			],
			"example_yomi": [
				"ぬ-る"
			]
		},
		"raw_info": "塗\t\t13\t7S\t\tト、ぬ-る"
	},
	"22618": {
		"joyo_kanji": "塚",
		"kyu_jitai": "塚",
		"yomi": {
			"kun_yomi": [
				"つか"
			]
		},
		"raw_info": "塚\t塚\t12\t7S\t1981\tつか"
	},
	"22622": {
		"joyo_kanji": "塞",
		"yomi": {
			"on_yomi": [
				"ソク",
				"サイ"
			],
			"kun_yomi": [
				"ふさ"
			],
			"example_yomi": [
				"ふさ-ぐ",
				"ふさ-がる"
			]
		},
		"raw_info": "塞\t\t13\t7S\t2010\tサイ、ソク、ふさ-ぐ、ふさ-がる"
	},
	"22625": {
		"joyo_kanji": "塡",
		"yomi": {
			"on_yomi": [
				"テン"
			]
		},
		"raw_info": "塡\t\t13\t7S\t2010\tテン"
	},
	"22633": {
		"joyo_kanji": "塩",
		"kyu_jitai": "鹽",
		"yomi": {
			"on_yomi": [
				"エン"
			],
			"kun_yomi": [
				"しお"
			]
		},
		"raw_info": "塩\t鹽\t13\t4\t\tエン、しお"
	},
	"22654": {
		"joyo_kanji": "塾",
		"yomi": {
			"on_yomi": [
				"ジュク"
			]
		},
		"raw_info": "塾\t\t14\t7S\t1981\tジュク"
	},
	"22659": {
		"joyo_kanji": "境",
		"yomi": {
			"on_yomi": [
				"キョウ",
				"ケイ"
			],
			"kun_yomi": [
				"さかい"
			]
		},
		"raw_info": "境\t\t14\t5\t\tキョウ、（ケイ）、さかい"
	},
	"22675": {
		"joyo_kanji": "墓",
		"yomi": {
			"on_yomi": [
				"ボ"
			],
			"kun_yomi": [
				"はか"
			]
		},
		"raw_info": "墓\t\t13\t5\t\tボ、はか"
	},
	"22679": {
		"joyo_kanji": "増",
		"kyu_jitai": "增",
		"yomi": {
			"on_yomi": [
				"ゾウ"
			],
			"kun_yomi": [
				"ま",
				"ふ"
			],
			"example_yomi": [
				"ふ-やす",
				"ま-す",
				"ふ-える"
			]
		},
		"raw_info": "増\t增\t14\t5\t\tゾウ、ま-す、ふ-える、ふ-やす"
	},
	"22684": {
		"joyo_kanji": "墜",
		"yomi": {
			"on_yomi": [
				"ツイ"
			]
		},
		"raw_info": "墜\t\t15\t7S\t\tツイ"
	},
	"22696": {
		"joyo_kanji": "墨",
		"kyu_jitai": "墨",
		"yomi": {
			"on_yomi": [
				"ボク"
			],
			"kun_yomi": [
				"すみ"
			]
		},
		"raw_info": "墨\t墨\t14\t7S\t\tボク、すみ"
	},
	"22707": {
		"joyo_kanji": "墳",
		"yomi": {
			"on_yomi": [
				"フン"
			]
		},
		"raw_info": "墳\t\t15\t7S\t\tフン"
	},
	"22718": {
		"joyo_kanji": "墾",
		"yomi": {
			"on_yomi": [
				"コン"
			]
		},
		"raw_info": "墾\t\t16\t7S\t\tコン"
	},
	"22721": {
		"joyo_kanji": "壁",
		"yomi": {
			"on_yomi": [
				"ヘキ"
			],
			"kun_yomi": [
				"かべ"
			]
		},
		"raw_info": "壁\t\t16\t7S\t\tヘキ、かべ"
	},
	"22727": {
		"joyo_kanji": "壇",
		"yomi": {
			"on_yomi": [
				"ダン",
				"タン"
			]
		},
		"raw_info": "壇\t\t16\t7S\t\tダン、（タン）"
	},
	"22730": {
		"joyo_kanji": "壊",
		"kyu_jitai": "壞",
		"yomi": {
			"on_yomi": [
				"カイ"
			],
			"kun_yomi": [
				"こわ"
			],
			"example_yomi": [
				"こわ-す",
				"こわ-れる"
			]
		},
		"raw_info": "壊\t壞\t16\t7S\t\tカイ、こわ-す、こわ-れる"
	},
	"22732": {
		"joyo_kanji": "壌",
		"kyu_jitai": "壤",
		"yomi": {
			"on_yomi": [
				"ジョウ"
			]
		},
		"raw_info": "壌\t壤\t16\t7S\t1981\tジョウ"
	},
	"22763": {
		"joyo_kanji": "士",
		"yomi": {
			"on_yomi": [
				"シ"
			]
		},
		"raw_info": "士\t\t3\t4\t\tシ"
	},
	"22766": {
		"joyo_kanji": "壮",
		"kyu_jitai": "壯",
		"yomi": {
			"on_yomi": [
				"ソウ"
			]
		},
		"raw_info": "壮\t壯\t6\t7S\t\tソウ"
	},
	"22768": {
		"joyo_kanji": "声",
		"kyu_jitai": "聲",
		"yomi": {
			"on_yomi": [
				"セイ",
				"ショウ"
			],
			"kun_yomi": [
				"こえ",
				"こわ"
			]
		},
		"raw_info": "声\t聲\t7\t2\t\tセイ、（ショウ）、こえ、（こわ）"
	},
	"22769": {
		"joyo_kanji": "壱",
		"kyu_jitai": "壹",
		"yomi": {
			"on_yomi": [
				"イチ"
			]
		},
		"raw_info": "壱\t壹\t7\t7S\t\tイチ"
	},
	"22770": {
		"joyo_kanji": "売",
		"kyu_jitai": "賣",
		"yomi": {
			"on_yomi": [
				"バイ"
			],
			"kun_yomi": [
				"う"
			],
			"example_yomi": [
				"う-る",
				"う-れる"
			]
		},
		"raw_info": "売\t賣\t7\t2\t\tバイ、う-る、う-れる"
	},
	"22793": {
		"joyo_kanji": "変",
		"kyu_jitai": "變",
		"yomi": {
			"on_yomi": [
				"ヘン"
			],
			"kun_yomi": [
				"か"
			],
			"example_yomi": [
				"か-わる",
				"か-える"
			]
		},
		"raw_info": "変\t變\t9\t4\t\tヘン、か-わる、か-える"
	},
	"22799": {
		"joyo_kanji": "夏",
		"yomi": {
			"on_yomi": [
				"カ",
				"ゲ"
			],
			"kun_yomi": [
				"なつ"
			]
		},
		"raw_info": "夏\t\t10\t2\t\tカ、（ゲ）、なつ"
	},
	"22805": {
		"joyo_kanji": "夕",
		"yomi": {
			"on_yomi": [
				"セキ"
			],
			"kun_yomi": [
				"ゆう"
			]
		},
		"raw_info": "夕\t\t3\t1\t\tセキ、ゆう"
	},
	"22806": {
		"joyo_kanji": "外",
		"yomi": {
			"on_yomi": [
				"ガイ",
				"ゲ"
			],
			"kun_yomi": [
				"そと",
				"ほか",
				"はず"
			],
			"example_yomi": [
				"はず-れる",
				"はず-す"
			]
		},
		"raw_info": "外\t\t5\t2\t\tガイ、ゲ、そと、ほか、はず-す、はず-れる"
	},
	"22810": {
		"joyo_kanji": "多",
		"yomi": {
			"on_yomi": [
				"タ"
			],
			"kun_yomi": [
				"おお"
			],
			"example_yomi": [
				"おお-い"
			]
		},
		"raw_info": "多\t\t6\t2\t\tタ、おお-い"
	},
	"22812": {
		"joyo_kanji": "夜",
		"yomi": {
			"on_yomi": [
				"ヤ"
			],
			"kun_yomi": [
				"よ",
				"よる"
			]
		},
		"raw_info": "夜\t\t8\t2\t\tヤ、よ、よる"
	},
	"22818": {
		"joyo_kanji": "夢",
		"yomi": {
			"on_yomi": [
				"ム"
			],
			"kun_yomi": [
				"ゆめ"
			]
		},
		"raw_info": "夢\t\t13\t5\t\tム、ゆめ"
	},
	"22823": {
		"joyo_kanji": "大",
		"yomi": {
			"on_yomi": [
				"タイ",
				"ダイ"
			],
			"kun_yomi": [
				"おお"
			],
			"example_yomi": [
				"おお-きい",
				"おお-いに"
			]
		},
		"raw_info": "大\t\t3\t1\t\tダイ、タイ、おお、おお-きい、おお-いに"
	},
	"22825": {
		"joyo_kanji": "天",
		"yomi": {
			"on_yomi": [
				"テン"
			],
			"kun_yomi": [
				"あめ",
				"あま"
			]
		},
		"raw_info": "天\t\t4\t1\t\tテン、あめ、（あま）"
	},
	"22826": {
		"joyo_kanji": "太",
		"yomi": {
			"on_yomi": [
				"タイ",
				"タ"
			],
			"kun_yomi": [
				"ふと"
			],
			"example_yomi": [
				"ふと-い",
				"ふと-る"
			]
		},
		"raw_info": "太\t\t4\t2\t\tタイ、タ、ふと-い、ふと-る"
	},
	"22827": {
		"joyo_kanji": "夫",
		"yomi": {
			"on_yomi": [
				"フウ",
				"フ"
			],
			"kun_yomi": [
				"おっと"
			]
		},
		"raw_info": "夫\t\t4\t4\t\tフ、（フウ）、おっと"
	},
	"22830": {
		"joyo_kanji": "央",
		"yomi": {
			"on_yomi": [
				"オウ"
			]
		},
		"raw_info": "央\t\t5\t3\t\tオウ"
	},
	"22833": {
		"joyo_kanji": "失",
		"yomi": {
			"on_yomi": [
				"シツ"
			],
			"kun_yomi": [
				"うしな"
			],
			"example_yomi": [
				"うしな-う"
			]
		},
		"raw_info": "失\t\t5\t4\t\tシツ、うしな-う"
	},
	"22855": {
		"joyo_kanji": "奇",
		"yomi": {
			"on_yomi": [
				"キ"
			]
		},
		"raw_info": "奇\t\t8\t7S\t\tキ"
	},
	"22856": {
		"joyo_kanji": "奈",
		"yomi": {
			"on_yomi": [
				"ナ"
			]
		},
		"raw_info": "奈\t\t8\t7S\t2010\tナ"
	},
	"22857": {
		"joyo_kanji": "奉",
		"yomi": {
			"on_yomi": [
				"ホウ",
				"ブ"
			],
			"kun_yomi": [
				"たてまつ"
			],
			"example_yomi": [
				"たてまつ-る"
			]
		},
		"raw_info": "奉\t\t8\t7S\t\tホウ、（ブ）、たてまつ-る"
	},
	"22863": {
		"joyo_kanji": "奏",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"かな"
			],
			"example_yomi": [
				"かな-でる"
			]
		},
		"raw_info": "奏\t\t9\t6\t\tソウ、かな-でる"
	},
	"22865": {
		"joyo_kanji": "契",
		"yomi": {
			"on_yomi": [
				"ケイ"
			],
			"kun_yomi": [
				"ちぎ"
			],
			"example_yomi": [
				"ちぎ-る"
			]
		},
		"raw_info": "契\t\t9\t7S\t\tケイ、ちぎ-る"
	},
	"22868": {
		"joyo_kanji": "奔",
		"yomi": {
			"on_yomi": [
				"ホン"
			]
		},
		"raw_info": "奔\t\t8\t7S\t\tホン"
	},
	"22885": {
		"joyo_kanji": "奥",
		"kyu_jitai": "奧",
		"yomi": {
			"on_yomi": [
				"オウ"
			],
			"kun_yomi": [
				"おく"
			]
		},
		"raw_info": "奥\t奧\t12\t7S\t\tオウ、おく"
	},
	"22888": {
		"joyo_kanji": "奨",
		"kyu_jitai": "奬",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "奨\t奬\t13\t7S\t\tショウ"
	},
	"22890": {
		"joyo_kanji": "奪",
		"yomi": {
			"on_yomi": [
				"ダツ"
			],
			"kun_yomi": [
				"うば"
			],
			"example_yomi": [
				"うば-う"
			]
		},
		"raw_info": "奪\t\t14\t7S\t\tダツ、うば-う"
	},
	"22894": {
		"joyo_kanji": "奮",
		"yomi": {
			"on_yomi": [
				"フン"
			],
			"kun_yomi": [
				"ふる"
			],
			"example_yomi": [
				"ふる-う"
			]
		},
		"raw_info": "奮\t\t16\t6\t\tフン、ふる-う"
	},
	"22899": {
		"joyo_kanji": "女",
		"yomi": {
			"on_yomi": [
				"ジョ",
				"ニョ",
				"ニョウ"
			],
			"kun_yomi": [
				"おんな",
				"め"
			]
		},
		"raw_info": "女\t\t3\t1\t\tジョ、ニョ、（ニョウ）、おんな、め"
	},
	"22900": {
		"joyo_kanji": "奴",
		"yomi": {
			"on_yomi": [
				"ド"
			]
		},
		"raw_info": "奴\t\t5\t7S\t\tド"
	},
	"22909": {
		"joyo_kanji": "好",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"す",
				"この"
			],
			"example_yomi": [
				"この-む",
				"す-く"
			]
		},
		"raw_info": "好\t\t6\t4\t\tコウ、この-む、す-く"
	},
	"22914": {
		"joyo_kanji": "如",
		"yomi": {
			"on_yomi": [
				"ジョ",
				"ニョ"
			]
		},
		"raw_info": "如\t\t6\t7S\t\tジョ、ニョ"
	},
	"22915": {
		"joyo_kanji": "妃",
		"yomi": {
			"on_yomi": [
				"ヒ"
			]
		},
		"raw_info": "妃\t\t6\t7S\t\tヒ"
	},
	"22916": {
		"joyo_kanji": "妄",
		"yomi": {
			"on_yomi": [
				"モウ",
				"ボウ"
			]
		},
		"raw_info": "妄\t\t6\t7S\t1981\tモウ、ボウ"
	},
	"22922": {
		"joyo_kanji": "妊",
		"kyu_jitai": "姙",
		"yomi": {
			"on_yomi": [
				"ニン"
			]
		},
		"raw_info": "妊\t姙\t7\t7S\t\tニン"
	},
	"22934": {
		"joyo_kanji": "妖",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			],
			"kun_yomi": [
				"あや"
			],
			"example_yomi": [
				"あや-しい"
			]
		},
		"raw_info": "妖\t\t7\t7S\t2010\tヨウ、あや-しい"
	},
	"22937": {
		"joyo_kanji": "妙",
		"yomi": {
			"on_yomi": [
				"ミョウ"
			]
		},
		"raw_info": "妙\t\t7\t7S\t\tミョウ"
	},
	"22949": {
		"joyo_kanji": "妥",
		"yomi": {
			"on_yomi": [
				"ダ"
			]
		},
		"raw_info": "妥\t\t7\t7S\t\tダ"
	},
	"22952": {
		"joyo_kanji": "妨",
		"yomi": {
			"on_yomi": [
				"ボウ"
			],
			"kun_yomi": [
				"さまた"
			],
			"example_yomi": [
				"さまた-げる"
			]
		},
		"raw_info": "妨\t\t7\t7S\t\tボウ、さまた-げる"
	},
	"22956": {
		"joyo_kanji": "妬",
		"yomi": {
			"on_yomi": [
				"ト"
			],
			"kun_yomi": [
				"ねた"
			],
			"example_yomi": [
				"ねた-む"
			]
		},
		"raw_info": "妬\t\t8\t7S\t2010\tト、ねた-む"
	},
	"22969": {
		"joyo_kanji": "妹",
		"yomi": {
			"on_yomi": [
				"マイ"
			],
			"kun_yomi": [
				"いもうと"
			]
		},
		"raw_info": "妹\t\t8\t2\t\tマイ、いもうと"
	},
	"22971": {
		"joyo_kanji": "妻",
		"yomi": {
			"on_yomi": [
				"サイ"
			],
			"kun_yomi": [
				"つま"
			]
		},
		"raw_info": "妻\t\t8\t5\t\tサイ、つま"
	},
	"22985": {
		"joyo_kanji": "姉",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"あね"
			]
		},
		"raw_info": "姉\t\t8\t2\t\tシ、あね"
	},
	"22987": {
		"joyo_kanji": "始",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"はじ"
			],
			"example_yomi": [
				"はじ-める",
				"はじ-まる"
			]
		},
		"raw_info": "始\t\t8\t3\t\tシ、はじ-める、はじ-まる"
	},
	"22995": {
		"joyo_kanji": "姓",
		"yomi": {
			"on_yomi": [
				"セイ",
				"ショウ"
			]
		},
		"raw_info": "姓\t\t8\t7S\t\tセイ、ショウ"
	},
	"22996": {
		"joyo_kanji": "委",
		"yomi": {
			"on_yomi": [
				"イ"
			],
			"kun_yomi": [
				"ゆだ"
			],
			"example_yomi": [
				"ゆだ-ねる"
			]
		},
		"raw_info": "委\t\t8\t3\t\tイ、ゆだ-ねる"
	},
	"23019": {
		"joyo_kanji": "姫",
		"yomi": {
			"kun_yomi": [
				"ひめ"
			]
		},
		"raw_info": "姫\t\t10\t7S\t\tひめ"
	},
	"23035": {
		"joyo_kanji": "姻",
		"yomi": {
			"on_yomi": [
				"イン"
			]
		},
		"raw_info": "姻\t\t9\t7S\t\tイン"
	},
	"23039": {
		"joyo_kanji": "姿",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"すがた"
			]
		},
		"raw_info": "姿\t\t9\t6\t\tシ、すがた"
	},
	"23041": {
		"joyo_kanji": "威",
		"yomi": {
			"on_yomi": [
				"イ"
			]
		},
		"raw_info": "威\t\t9\t7S\t\tイ"
	},
	"23064": {
		"joyo_kanji": "娘",
		"yomi": {
			"kun_yomi": [
				"むすめ"
			]
		},
		"raw_info": "娘\t\t10\t7S\t\tむすめ"
	},
	"23072": {
		"joyo_kanji": "娠",
		"yomi": {
			"on_yomi": [
				"シン"
			]
		},
		"raw_info": "娠\t\t10\t7S\t\tシン"
	},
	"23087": {
		"joyo_kanji": "娯",
		"yomi": {
			"on_yomi": [
				"ゴ"
			]
		},
		"raw_info": "娯\t\t10\t7S\t\tゴ"
	},
	"23110": {
		"joyo_kanji": "婆",
		"yomi": {
			"on_yomi": [
				"バ"
			]
		},
		"raw_info": "婆\t\t11\t7S\t\tバ"
	},
	"23130": {
		"joyo_kanji": "婚",
		"yomi": {
			"on_yomi": [
				"コン"
			]
		},
		"raw_info": "婚\t\t11\t7S\t\tコン"
	},
	"23142": {
		"joyo_kanji": "婦",
		"yomi": {
			"on_yomi": [
				"フ"
			]
		},
		"raw_info": "婦\t\t11\t5\t\tフ"
	},
	"23167": {
		"joyo_kanji": "婿",
		"yomi": {
			"on_yomi": [
				"セイ"
			],
			"kun_yomi": [
				"むこ"
			]
		},
		"raw_info": "婿\t\t12\t7S\t\tセイ、むこ"
	},
	"23186": {
		"joyo_kanji": "媒",
		"yomi": {
			"on_yomi": [
				"バイ"
			]
		},
		"raw_info": "媒\t\t12\t7S\t\tバイ"
	},
	"23195": {
		"joyo_kanji": "媛",
		"yomi": {
			"on_yomi": [
				"エン"
			]
		},
		"raw_info": "媛\t\t12\t7S\t2010\tエン"
	},
	"23233": {
		"joyo_kanji": "嫁",
		"yomi": {
			"on_yomi": [
				"カ"
			],
			"kun_yomi": [
				"よめ",
				"とつ"
			],
			"example_yomi": [
				"とつ-ぐ"
			]
		},
		"raw_info": "嫁\t\t13\t7S\t\tカ、よめ、とつ-ぐ"
	},
	"23241": {
		"joyo_kanji": "嫉",
		"yomi": {
			"on_yomi": [
				"シツ"
			]
		},
		"raw_info": "嫉\t\t13\t7S\t2010\tシツ"
	},
	"23244": {
		"joyo_kanji": "嫌",
		"yomi": {
			"on_yomi": [
				"ケン",
				"ゲン"
			],
			"kun_yomi": [
				"きら",
				"いや"
			],
			"example_yomi": [
				"きら-う"
			]
		},
		"raw_info": "嫌\t\t13\t7S\t1981\tケン、（ゲン）、きら-う、いや"
	},
	"23265": {
		"joyo_kanji": "嫡",
		"yomi": {
			"on_yomi": [
				"チャク"
			]
		},
		"raw_info": "嫡\t\t14\t7S\t\tチャク"
	},
	"23330": {
		"joyo_kanji": "嬢",
		"kyu_jitai": "孃",
		"yomi": {
			"on_yomi": [
				"ジョウ"
			]
		},
		"raw_info": "嬢\t孃\t16\t7S\t\tジョウ"
	},
	"23376": {
		"joyo_kanji": "子",
		"yomi": {
			"on_yomi": [
				"シ",
				"ス"
			],
			"kun_yomi": [
				"こ"
			]
		},
		"raw_info": "子\t\t3\t1\t\tシ、ス、こ"
	},
	"23380": {
		"joyo_kanji": "孔",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "孔\t\t4\t7S\t\tコウ"
	},
	"23383": {
		"joyo_kanji": "字",
		"yomi": {
			"on_yomi": [
				"ジ"
			],
			"kun_yomi": [
				"あざ"
			]
		},
		"raw_info": "字\t\t6\t1\t\tジ、あざ"
	},
	"23384": {
		"joyo_kanji": "存",
		"yomi": {
			"on_yomi": [
				"ソン",
				"ゾン"
			]
		},
		"raw_info": "存\t\t6\t6\t\tソン、ゾン"
	},
	"23389": {
		"joyo_kanji": "孝",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "孝\t\t7\t6\t\tコウ"
	},
	"23395": {
		"joyo_kanji": "季",
		"yomi": {
			"on_yomi": [
				"キ"
			]
		},
		"raw_info": "季\t\t8\t4\t\tキ"
	},
	"23396": {
		"joyo_kanji": "孤",
		"yomi": {
			"on_yomi": [
				"コ"
			]
		},
		"raw_info": "孤\t\t9\t7S\t\tコ"
	},
	"23398": {
		"joyo_kanji": "学",
		"kyu_jitai": "學",
		"yomi": {
			"on_yomi": [
				"ガク"
			],
			"kun_yomi": [
				"まな"
			],
			"example_yomi": [
				"まな-ぶ"
			]
		},
		"raw_info": "学\t學\t8\t1\t\tガク、まな-ぶ"
	},
	"23403": {
		"joyo_kanji": "孫",
		"yomi": {
			"on_yomi": [
				"ソン"
			],
			"kun_yomi": [
				"まご"
			]
		},
		"raw_info": "孫\t\t10\t4\t\tソン、まご"
	},
	"23429": {
		"joyo_kanji": "宅",
		"yomi": {
			"on_yomi": [
				"タク"
			]
		},
		"raw_info": "宅\t\t6\t6\t\tタク"
	},
	"23431": {
		"joyo_kanji": "宇",
		"yomi": {
			"on_yomi": [
				"ウ"
			]
		},
		"raw_info": "宇\t\t6\t6\t\tウ"
	},
	"23432": {
		"joyo_kanji": "守",
		"yomi": {
			"on_yomi": [
				"シュ",
				"ス"
			],
			"kun_yomi": [
				"も",
				"まも"
			],
			"example_yomi": [
				"まも-る",
				"も-り"
			]
		},
		"raw_info": "守\t\t6\t3\t\tシュ、（ス）、まも-る、も-り"
	},
	"23433": {
		"joyo_kanji": "安",
		"yomi": {
			"on_yomi": [
				"アン"
			],
			"kun_yomi": [
				"やす"
			],
			"example_yomi": [
				"やす-い"
			]
		},
		"raw_info": "安\t\t6\t3\t\tアン、やす-い"
	},
	"23436": {
		"joyo_kanji": "完",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "完\t\t7\t4\t\tカン"
	},
	"23447": {
		"joyo_kanji": "宗",
		"yomi": {
			"on_yomi": [
				"シュウ",
				"ソウ"
			]
		},
		"raw_info": "宗\t\t8\t6\t\tシュウ、ソウ"
	},
	"23448": {
		"joyo_kanji": "官",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "官\t\t8\t4\t\tカン"
	},
	"23449": {
		"joyo_kanji": "宙",
		"yomi": {
			"on_yomi": [
				"チュウ"
			]
		},
		"raw_info": "宙\t\t8\t6\t\tチュウ"
	},
	"23450": {
		"joyo_kanji": "定",
		"yomi": {
			"on_yomi": [
				"ジョウ",
				"テイ"
			],
			"kun_yomi": [
				"さだ"
			],
			"example_yomi": [
				"さだ-める",
				"さだ-まる",
				"さだ-か"
			]
		},
		"raw_info": "定\t\t8\t3\t\tテイ、ジョウ、さだ-める、さだ-まる、さだ-か"
	},
	"23451": {
		"joyo_kanji": "宛",
		"yomi": {
			"kun_yomi": [
				"あ"
			],
			"example_yomi": [
				"あ-てる"
			]
		},
		"raw_info": "宛\t\t8\t7S\t2010\tあ-てる"
	},
	"23452": {
		"joyo_kanji": "宜",
		"yomi": {
			"on_yomi": [
				"ギ"
			]
		},
		"raw_info": "宜\t\t8\t7S\t\tギ"
	},
	"23453": {
		"joyo_kanji": "宝",
		"kyu_jitai": "寶",
		"yomi": {
			"on_yomi": [
				"ホウ"
			],
			"kun_yomi": [
				"たから"
			]
		},
		"raw_info": "宝\t寶\t8\t6\t\tホウ、たから"
	},
	"23455": {
		"joyo_kanji": "実",
		"kyu_jitai": "實",
		"yomi": {
			"on_yomi": [
				"ジツ"
			],
			"kun_yomi": [
				"み",
				"みの"
			],
			"example_yomi": [
				"みの-る"
			]
		},
		"raw_info": "実\t實\t8\t3\t\tジツ、み、みの-る"
	},
	"23458": {
		"joyo_kanji": "客",
		"yomi": {
			"on_yomi": [
				"キャク",
				"カク"
			]
		},
		"raw_info": "客\t\t9\t3\t\tキャク、カク"
	},
	"23459": {
		"joyo_kanji": "宣",
		"yomi": {
			"on_yomi": [
				"セン"
			]
		},
		"raw_info": "宣\t\t9\t6\t\tセン"
	},
	"23460": {
		"joyo_kanji": "室",
		"yomi": {
			"on_yomi": [
				"シツ"
			],
			"kun_yomi": [
				"むろ"
			]
		},
		"raw_info": "室\t\t9\t2\t\tシツ、むろ"
	},
	"23470": {
		"joyo_kanji": "宮",
		"yomi": {
			"on_yomi": [
				"ク",
				"キュウ",
				"グウ"
			],
			"kun_yomi": [
				"みや"
			]
		},
		"raw_info": "宮\t\t10\t3\t\tキュウ、グウ、（ク）、みや"
	},
	"23472": {
		"joyo_kanji": "宰",
		"yomi": {
			"on_yomi": [
				"サイ"
			]
		},
		"raw_info": "宰\t\t10\t7S\t\tサイ"
	},
	"23475": {
		"joyo_kanji": "害",
		"yomi": {
			"on_yomi": [
				"ガイ"
			]
		},
		"raw_info": "害\t\t10\t4\t\tガイ"
	},
	"23476": {
		"joyo_kanji": "宴",
		"yomi": {
			"on_yomi": [
				"エン"
			]
		},
		"raw_info": "宴\t\t10\t7S\t\tエン"
	},
	"23477": {
		"joyo_kanji": "宵",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"よい"
			]
		},
		"raw_info": "宵\t\t10\t7S\t1981\tショウ、よい"
	},
	"23478": {
		"joyo_kanji": "家",
		"yomi": {
			"on_yomi": [
				"カ",
				"ケ"
			],
			"kun_yomi": [
				"や",
				"いえ"
			]
		},
		"raw_info": "家\t\t10\t2\t\tカ、ケ、いえ、や"
	},
	"23481": {
		"joyo_kanji": "容",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			]
		},
		"raw_info": "容\t\t10\t5\t\tヨウ"
	},
	"23487": {
		"joyo_kanji": "宿",
		"yomi": {
			"on_yomi": [
				"シュク"
			],
			"kun_yomi": [
				"やど"
			],
			"example_yomi": [
				"やど-る",
				"やど-す"
			]
		},
		"raw_info": "宿\t\t11\t3\t\tシュク、やど、やど-る、やど-す"
	},
	"23490": {
		"joyo_kanji": "寂",
		"yomi": {
			"on_yomi": [
				"ジャク",
				"セキ"
			],
			"kun_yomi": [
				"さび"
			],
			"example_yomi": [
				"さび-しい",
				"さび-れる"
			]
		},
		"raw_info": "寂\t\t11\t7S\t\tジャク、（セキ）、さび、さび-しい、さび-れる"
	},
	"23492": {
		"joyo_kanji": "寄",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"よ"
			],
			"example_yomi": [
				"よ-る",
				"よ-せる"
			]
		},
		"raw_info": "寄\t\t11\t5\t\tキ、よ-る、よ-せる"
	},
	"23494": {
		"joyo_kanji": "密",
		"yomi": {
			"on_yomi": [
				"ミツ"
			]
		},
		"raw_info": "密\t\t11\t6\t\tミツ"
	},
	"23500": {
		"joyo_kanji": "富",
		"yomi": {
			"on_yomi": [
				"フ",
				"フウ"
			],
			"kun_yomi": [
				"とみ",
				"と"
			],
			"example_yomi": [
				"と-む"
			]
		},
		"raw_info": "富\t\t12\t5\t\tフ、（フウ）、と-む、とみ"
	},
	"23506": {
		"joyo_kanji": "寒",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"さむ"
			],
			"example_yomi": [
				"さむ-い"
			]
		},
		"raw_info": "寒\t\t12\t3\t\tカン、さむ-い"
	},
	"23515": {
		"joyo_kanji": "寛",
		"kyu_jitai": "寬",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "寛\t寬\t13\t7S\t\tカン"
	},
	"23517": {
		"joyo_kanji": "寝",
		"kyu_jitai": "寢",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"ね"
			],
			"example_yomi": [
				"ね-る",
				"ね-かす"
			]
		},
		"raw_info": "寝\t寢\t13\t7S\t\tシン、ね-る、ね-かす"
	},
	"23519": {
		"joyo_kanji": "察",
		"yomi": {
			"on_yomi": [
				"サツ"
			]
		},
		"raw_info": "察\t\t14\t4\t\tサツ"
	},
	"23521": {
		"joyo_kanji": "寡",
		"yomi": {
			"on_yomi": [
				"カ"
			]
		},
		"raw_info": "寡\t\t14\t7S\t\tカ"
	},
	"23527": {
		"joyo_kanji": "寧",
		"yomi": {
			"on_yomi": [
				"ネイ"
			]
		},
		"raw_info": "寧\t\t14\t7S\t\tネイ"
	},
	"23529": {
		"joyo_kanji": "審",
		"yomi": {
			"on_yomi": [
				"シン"
			]
		},
		"raw_info": "審\t\t15\t7S\t\tシン"
	},
	"23534": {
		"joyo_kanji": "寮",
		"yomi": {
			"on_yomi": [
				"リョウ"
			]
		},
		"raw_info": "寮\t\t15\t7S\t\tリョウ"
	},
	"23544": {
		"joyo_kanji": "寸",
		"yomi": {
			"on_yomi": [
				"スン"
			]
		},
		"raw_info": "寸\t\t3\t6\t\tスン"
	},
	"23546": {
		"joyo_kanji": "寺",
		"yomi": {
			"on_yomi": [
				"ジ"
			],
			"kun_yomi": [
				"てら"
			]
		},
		"raw_info": "寺\t\t6\t2\t\tジ、てら"
	},
	"23550": {
		"joyo_kanji": "対",
		"kyu_jitai": "對",
		"yomi": {
			"on_yomi": [
				"タイ",
				"ツイ"
			]
		},
		"raw_info": "対\t對\t7\t3\t\tタイ、ツイ"
	},
	"23551": {
		"joyo_kanji": "寿",
		"kyu_jitai": "壽",
		"yomi": {
			"on_yomi": [
				"ジュ"
			],
			"kun_yomi": [
				"ことぶき"
			]
		},
		"raw_info": "寿\t壽\t7\t7S\t\tジュ、ことぶき"
	},
	"23553": {
		"joyo_kanji": "封",
		"yomi": {
			"on_yomi": [
				"フウ",
				"ホウ"
			]
		},
		"raw_info": "封\t\t9\t7S\t\tフウ、ホウ"
	},
	"23554": {
		"joyo_kanji": "専",
		"kyu_jitai": "專",
		"yomi": {
			"on_yomi": [
				"セン"
			],
			"kun_yomi": [
				"もっぱ"
			],
			"example_yomi": [
				"もっぱ-ら"
			]
		},
		"raw_info": "専\t專\t9\t6\t\tセン、もっぱ-ら"
	},
	"23556": {
		"joyo_kanji": "射",
		"yomi": {
			"on_yomi": [
				"シャ"
			],
			"kun_yomi": [
				"い"
			],
			"example_yomi": [
				"い-る"
			]
		},
		"raw_info": "射\t\t10\t6\t\tシャ、い-る"
	},
	"23558": {
		"joyo_kanji": "将",
		"kyu_jitai": "將",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "将\t將\t10\t6\t\tショウ"
	},
	"23561": {
		"joyo_kanji": "尉",
		"yomi": {
			"on_yomi": [
				"イ"
			]
		},
		"raw_info": "尉\t\t11\t7S\t\tイ"
	},
	"23562": {
		"joyo_kanji": "尊",
		"yomi": {
			"on_yomi": [
				"ソン"
			],
			"kun_yomi": [
				"たっと",
				"とうと"
			],
			"example_yomi": [
				"とうと-い",
				"たっと-ぶ",
				"とうと-ぶ",
				"たっと-い"
			]
		},
		"raw_info": "尊\t\t12\t6\t\tソン、たっと-い、とうと-い、たっと-ぶ、とうと-ぶ"
	},
	"23563": {
		"joyo_kanji": "尋",
		"yomi": {
			"on_yomi": [
				"ジン"
			],
			"kun_yomi": [
				"たず"
			],
			"example_yomi": [
				"たず-ねる"
			]
		},
		"raw_info": "尋\t\t12\t7S\t\tジン、たず-ねる"
	},
	"23566": {
		"joyo_kanji": "導",
		"yomi": {
			"on_yomi": [
				"ドウ"
			],
			"kun_yomi": [
				"みちび"
			],
			"example_yomi": [
				"みちび-く"
			]
		},
		"raw_info": "導\t\t15\t5\t\tドウ、みちび-く"
	},
	"23567": {
		"joyo_kanji": "小",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"こ",
				"お",
				"ちい"
			],
			"example_yomi": [
				"ちい-さい"
			]
		},
		"raw_info": "小\t\t3\t1\t\tショウ、ちい-さい、こ、お"
	},
	"23569": {
		"joyo_kanji": "少",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"すく",
				"すこ"
			],
			"example_yomi": [
				"すく-ない",
				"すこ-し"
			]
		},
		"raw_info": "少\t\t4\t2\t\tショウ、すく-ない、すこ-し"
	},
	"23578": {
		"joyo_kanji": "尚",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "尚\t\t8\t7S\t1981\tショウ"
	},
	"23601": {
		"joyo_kanji": "就",
		"yomi": {
			"on_yomi": [
				"シュウ",
				"ジュ"
			],
			"kun_yomi": [
				"つ"
			],
			"example_yomi": [
				"つ-く",
				"つ-ける"
			]
		},
		"raw_info": "就\t\t12\t6\t\tシュウ、（ジュ）、つ-く、つ-ける"
	},
	"23610": {
		"joyo_kanji": "尺",
		"yomi": {
			"on_yomi": [
				"シャク"
			]
		},
		"raw_info": "尺\t\t4\t6\t\tシャク"
	},
	"23611": {
		"joyo_kanji": "尻",
		"yomi": {
			"kun_yomi": [
				"しり"
			]
		},
		"raw_info": "尻\t\t5\t7S\t2010\tしり"
	},
	"23612": {
		"joyo_kanji": "尼",
		"yomi": {
			"on_yomi": [
				"ニ"
			],
			"kun_yomi": [
				"あま"
			]
		},
		"raw_info": "尼\t\t5\t7S\t\tニ、あま"
	},
	"23613": {
		"joyo_kanji": "尽",
		"kyu_jitai": "盡",
		"yomi": {
			"on_yomi": [
				"ジン"
			],
			"kun_yomi": [
				"つ"
			],
			"example_yomi": [
				"つ-くす",
				"つ-きる",
				"つ-かす"
			]
		},
		"raw_info": "尽\t盡\t6\t7S\t\tジン、つ-くす、つ-きる、つ-かす"
	},
	"23614": {
		"joyo_kanji": "尾",
		"yomi": {
			"on_yomi": [
				"ビ"
			],
			"kun_yomi": [
				"お"
			]
		},
		"raw_info": "尾\t\t7\t7S\t\tビ、お"
	},
	"23615": {
		"joyo_kanji": "尿",
		"yomi": {
			"on_yomi": [
				"ニョウ"
			]
		},
		"raw_info": "尿\t\t7\t7S\t\tニョウ"
	},
	"23616": {
		"joyo_kanji": "局",
		"yomi": {
			"on_yomi": [
				"キョク"
			]
		},
		"raw_info": "局\t\t7\t3\t\tキョク"
	},
	"23621": {
		"joyo_kanji": "居",
		"yomi": {
			"on_yomi": [
				"キョ"
			],
			"kun_yomi": [
				"い"
			],
			"example_yomi": [
				"い-る"
			]
		},
		"raw_info": "居\t\t8\t5\t\tキョ、い-る"
	},
	"23624": {
		"joyo_kanji": "屈",
		"yomi": {
			"on_yomi": [
				"クツ"
			]
		},
		"raw_info": "屈\t\t8\t7S\t\tクツ"
	},
	"23626": {
		"joyo_kanji": "届",
		"kyu_jitai": "屆",
		"yomi": {
			"kun_yomi": [
				"とど"
			],
			"example_yomi": [
				"とど-ける",
				"とど-く"
			]
		},
		"raw_info": "届\t屆\t8\t6\t\tとど-ける、とど-く"
	},
	"23627": {
		"joyo_kanji": "屋",
		"yomi": {
			"on_yomi": [
				"オク"
			],
			"kun_yomi": [
				"や"
			]
		},
		"raw_info": "屋\t\t9\t3\t\tオク、や"
	},
	"23637": {
		"joyo_kanji": "展",
		"yomi": {
			"on_yomi": [
				"テン"
			]
		},
		"raw_info": "展\t\t10\t6\t\tテン"
	},
	"23646": {
		"joyo_kanji": "属",
		"kyu_jitai": "屬",
		"yomi": {
			"on_yomi": [
				"ゾク"
			]
		},
		"raw_info": "属\t屬\t12\t5\t\tゾク"
	},
	"23652": {
		"joyo_kanji": "層",
		"kyu_jitai": "層",
		"yomi": {
			"on_yomi": [
				"ソウ"
			]
		},
		"raw_info": "層\t層\t14\t6\t\tソウ"
	},
	"23653": {
		"joyo_kanji": "履",
		"yomi": {
			"on_yomi": [
				"リ"
			],
			"kun_yomi": [
				"は"
			],
			"example_yomi": [
				"は-く"
			]
		},
		"raw_info": "履\t\t15\t7S\t\tリ、は-く"
	},
	"23663": {
		"joyo_kanji": "屯",
		"yomi": {
			"on_yomi": [
				"トン"
			]
		},
		"raw_info": "屯\t\t4\t7S\t1981\tトン"
	},
	"23665": {
		"joyo_kanji": "山",
		"yomi": {
			"on_yomi": [
				"サン"
			],
			"kun_yomi": [
				"やま"
			]
		},
		"raw_info": "山\t\t3\t1\t\tサン、やま"
	},
	"23696": {
		"joyo_kanji": "岐",
		"yomi": {
			"on_yomi": [
				"キ"
			]
		},
		"raw_info": "岐\t\t7\t7S\t\tキ"
	},
	"23713": {
		"joyo_kanji": "岡",
		"yomi": {
			"kun_yomi": [
				"おか"
			]
		},
		"raw_info": "岡\t\t8\t7S\t2010\t（おか）"
	},
	"23721": {
		"joyo_kanji": "岩",
		"yomi": {
			"on_yomi": [
				"ガン"
			],
			"kun_yomi": [
				"いわ"
			]
		},
		"raw_info": "岩\t\t8\t2\t\tガン、いわ"
	},
	"23724": {
		"joyo_kanji": "岬",
		"yomi": {
			"kun_yomi": [
				"みさき"
			]
		},
		"raw_info": "岬\t\t8\t7S\t1981\tみさき"
	},
	"23731": {
		"joyo_kanji": "岳",
		"kyu_jitai": "嶽",
		"yomi": {
			"on_yomi": [
				"ガク"
			],
			"kun_yomi": [
				"たけ"
			]
		},
		"raw_info": "岳\t嶽\t8\t7S\t\tガク、たけ"
	},
	"23736": {
		"joyo_kanji": "岸",
		"yomi": {
			"on_yomi": [
				"ガン"
			],
			"kun_yomi": [
				"きし"
			]
		},
		"raw_info": "岸\t\t8\t3\t\tガン、きし"
	},
	"23776": {
		"joyo_kanji": "峠",
		"yomi": {
			"kun_yomi": [
				"とうげ"
			]
		},
		"raw_info": "峠\t\t9\t7S\t\tとうげ"
	},
	"23777": {
		"joyo_kanji": "峡",
		"kyu_jitai": "峽",
		"yomi": {
			"on_yomi": [
				"キョウ"
			]
		},
		"raw_info": "峡\t峽\t9\t7S\t\tキョウ"
	},
	"23792": {
		"joyo_kanji": "峰",
		"yomi": {
			"on_yomi": [
				"ホウ"
			],
			"kun_yomi": [
				"みね"
			]
		},
		"raw_info": "峰\t\t10\t7S\t\tホウ、みね"
	},
	"23798": {
		"joyo_kanji": "島",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"しま"
			]
		},
		"raw_info": "島\t\t10\t3\t\tトウ、しま"
	},
	"23815": {
		"joyo_kanji": "崇",
		"yomi": {
			"on_yomi": [
				"スウ"
			]
		},
		"raw_info": "崇\t\t11\t7S\t\tスウ"
	},
	"23822": {
		"joyo_kanji": "崎",
		"yomi": {
			"kun_yomi": [
				"さき"
			]
		},
		"raw_info": "崎\t\t11\t7S\t1981\tさき"
	},
	"23830": {
		"joyo_kanji": "崖",
		"yomi": {
			"on_yomi": [
				"ガイ"
			],
			"kun_yomi": [
				"がけ"
			]
		},
		"raw_info": "崖\t\t11\t7S\t2010\tガイ、がけ"
	},
	"23849": {
		"joyo_kanji": "崩",
		"yomi": {
			"on_yomi": [
				"ホウ"
			],
			"kun_yomi": [
				"くず"
			],
			"example_yomi": [
				"くず-れる",
				"くず-す"
			]
		},
		"raw_info": "崩\t\t11\t7S\t\tホウ、くず-れる、くず-す"
	},
	"23888": {
		"joyo_kanji": "嵐",
		"yomi": {
			"kun_yomi": [
				"あらし"
			]
		},
		"raw_info": "嵐\t\t12\t7S\t2010\tあらし"
	},
	"24029": {
		"joyo_kanji": "川",
		"yomi": {
			"on_yomi": [
				"セン"
			],
			"kun_yomi": [
				"かわ"
			]
		},
		"raw_info": "川\t\t3\t1\t\tセン、かわ"
	},
	"24030": {
		"joyo_kanji": "州",
		"yomi": {
			"on_yomi": [
				"シュウ"
			],
			"kun_yomi": [
				"す"
			]
		},
		"raw_info": "州\t\t6\t3\t\tシュウ、す"
	},
	"24033": {
		"joyo_kanji": "巡",
		"yomi": {
			"on_yomi": [
				"ジュン"
			],
			"kun_yomi": [
				"めぐ"
			],
			"example_yomi": [
				"めぐ-る"
			]
		},
		"raw_info": "巡\t\t6\t7S\t\tジュン、めぐ-る"
	},
	"24035": {
		"joyo_kanji": "巣",
		"kyu_jitai": "巢",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"す"
			]
		},
		"raw_info": "巣\t巢\t11\t4\t\tソウ、す"
	},
	"24037": {
		"joyo_kanji": "工",
		"yomi": {
			"on_yomi": [
				"コウ",
				"ク"
			]
		},
		"raw_info": "工\t\t3\t2\t\tコウ、ク"
	},
	"24038": {
		"joyo_kanji": "左",
		"yomi": {
			"on_yomi": [
				"サ"
			],
			"kun_yomi": [
				"ひだり"
			]
		},
		"raw_info": "左\t\t5\t1\t\tサ、ひだり"
	},
	"24039": {
		"joyo_kanji": "巧",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"たく"
			],
			"example_yomi": [
				"たく-み"
			]
		},
		"raw_info": "巧\t\t5\t7S\t\tコウ、たく-み"
	},
	"24040": {
		"joyo_kanji": "巨",
		"yomi": {
			"on_yomi": [
				"キョ"
			]
		},
		"raw_info": "巨\t\t5\t7S\t\tキョ"
	},
	"24046": {
		"joyo_kanji": "差",
		"yomi": {
			"on_yomi": [
				"サ"
			],
			"kun_yomi": [
				"さ"
			],
			"example_yomi": [
				"さ-す"
			]
		},
		"raw_info": "差\t\t10\t4\t\tサ、さ-す"
	},
	"24049": {
		"joyo_kanji": "己",
		"yomi": {
			"on_yomi": [
				"コ",
				"キ"
			],
			"kun_yomi": [
				"おのれ"
			]
		},
		"raw_info": "己\t\t3\t6\t\tコ、キ、おのれ"
	},
	"24059": {
		"joyo_kanji": "巻",
		"kyu_jitai": "卷",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"ま",
				"まき"
			],
			"example_yomi": [
				"ま-く"
			]
		},
		"raw_info": "巻\t卷\t9\t6\t\tカン、ま-く、まき"
	},
	"24062": {
		"joyo_kanji": "巾",
		"yomi": {
			"on_yomi": [
				"キン"
			]
		},
		"raw_info": "巾\t\t3\t7S\t2010\tキン"
	},
	"24066": {
		"joyo_kanji": "市",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"いち"
			]
		},
		"raw_info": "市\t\t5\t2\t\tシ、いち"
	},
	"24067": {
		"joyo_kanji": "布",
		"yomi": {
			"on_yomi": [
				"フ"
			],
			"kun_yomi": [
				"ぬの"
			]
		},
		"raw_info": "布\t\t5\t5\t\tフ、ぬの"
	},
	"24070": {
		"joyo_kanji": "帆",
		"yomi": {
			"on_yomi": [
				"ハン"
			],
			"kun_yomi": [
				"ほ"
			]
		},
		"raw_info": "帆\t\t6\t7S\t\tハン、ほ"
	},
	"24076": {
		"joyo_kanji": "希",
		"yomi": {
			"on_yomi": [
				"キ"
			]
		},
		"raw_info": "希\t\t7\t4\t\tキ"
	},
	"24093": {
		"joyo_kanji": "帝",
		"yomi": {
			"on_yomi": [
				"テイ"
			]
		},
		"raw_info": "帝\t\t9\t7S\t\tテイ"
	},
	"24101": {
		"joyo_kanji": "帥",
		"yomi": {
			"on_yomi": [
				"スイ"
			]
		},
		"raw_info": "帥\t\t9\t7S\t\tスイ"
	},
	"24107": {
		"joyo_kanji": "師",
		"yomi": {
			"on_yomi": [
				"シ"
			]
		},
		"raw_info": "師\t\t10\t5\t\tシ"
	},
	"24109": {
		"joyo_kanji": "席",
		"yomi": {
			"on_yomi": [
				"セキ"
			]
		},
		"raw_info": "席\t\t10\t4\t\tセキ"
	},
	"24111": {
		"joyo_kanji": "帯",
		"kyu_jitai": "帶",
		"yomi": {
			"on_yomi": [
				"タイ"
			],
			"kun_yomi": [
				"お",
				"おび"
			],
			"example_yomi": [
				"お-びる"
			]
		},
		"raw_info": "帯\t帶\t10\t4\t\tタイ、お-びる、おび"
	},
	"24112": {
		"joyo_kanji": "帰",
		"kyu_jitai": "歸",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"かえ"
			],
			"example_yomi": [
				"かえ-る",
				"かえ-す"
			]
		},
		"raw_info": "帰\t歸\t10\t2\t\tキ、かえ-る、かえ-す"
	},
	"24115": {
		"joyo_kanji": "帳",
		"yomi": {
			"on_yomi": [
				"チョウ"
			]
		},
		"raw_info": "帳\t\t11\t3\t\tチョウ"
	},
	"24120": {
		"joyo_kanji": "常",
		"yomi": {
			"on_yomi": [
				"ジョウ"
			],
			"kun_yomi": [
				"つね",
				"とこ"
			]
		},
		"raw_info": "常\t\t11\t5\t\tジョウ、つね、とこ"
	},
	"24125": {
		"joyo_kanji": "帽",
		"yomi": {
			"on_yomi": [
				"ボウ"
			]
		},
		"raw_info": "帽\t\t12\t7S\t\tボウ"
	},
	"24133": {
		"joyo_kanji": "幅",
		"yomi": {
			"on_yomi": [
				"フク"
			],
			"kun_yomi": [
				"はば"
			]
		},
		"raw_info": "幅\t\t12\t7S\t\tフク、はば"
	},
	"24149": {
		"joyo_kanji": "幕",
		"yomi": {
			"on_yomi": [
				"マク",
				"バク"
			]
		},
		"raw_info": "幕\t\t13\t6\t\tマク、バク"
	},
	"24163": {
		"joyo_kanji": "幣",
		"yomi": {
			"on_yomi": [
				"ヘイ"
			]
		},
		"raw_info": "幣\t\t15\t7S\t\tヘイ"
	},
	"24178": {
		"joyo_kanji": "干",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"ほ",
				"ひ"
			],
			"example_yomi": [
				"ほ-す",
				"ひ-る"
			]
		},
		"raw_info": "干\t\t3\t6\t\tカン、ほ-す、ひ-る"
	},
	"24179": {
		"joyo_kanji": "平",
		"yomi": {
			"on_yomi": [
				"ヘイ",
				"ビョウ"
			],
			"kun_yomi": [
				"たい",
				"ひら"
			],
			"example_yomi": [
				"たい-ら"
			]
		},
		"raw_info": "平\t\t5\t3\t\tヘイ、ビョウ、たい-ら、ひら"
	},
	"24180": {
		"joyo_kanji": "年",
		"yomi": {
			"on_yomi": [
				"ネン"
			],
			"kun_yomi": [
				"とし"
			]
		},
		"raw_info": "年\t\t6\t1\t\tネン、とし"
	},
	"24184": {
		"joyo_kanji": "幸",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"さいわ",
				"さち",
				"しあわ"
			],
			"example_yomi": [
				"しあわ-せ",
				"さいわ-い"
			]
		},
		"raw_info": "幸\t\t8\t3\t\tコウ、さいわ-い、さち、しあわ-せ"
	},
	"24185": {
		"joyo_kanji": "幹",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"みき"
			]
		},
		"raw_info": "幹\t\t13\t5\t\tカン、みき"
	},
	"24187": {
		"joyo_kanji": "幻",
		"yomi": {
			"on_yomi": [
				"ゲン"
			],
			"kun_yomi": [
				"まぼろし"
			]
		},
		"raw_info": "幻\t\t4\t7S\t\tゲン、まぼろし"
	},
	"24188": {
		"joyo_kanji": "幼",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			],
			"kun_yomi": [
				"おさな"
			],
			"example_yomi": [
				"おさな-い"
			]
		},
		"raw_info": "幼\t\t5\t6\t\tヨウ、おさな-い"
	},
	"24189": {
		"joyo_kanji": "幽",
		"yomi": {
			"on_yomi": [
				"ユウ"
			]
		},
		"raw_info": "幽\t\t9\t7S\t\tユウ"
	},
	"24190": {
		"joyo_kanji": "幾",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"いく"
			]
		},
		"raw_info": "幾\t\t12\t7S\t\tキ、いく"
	},
	"24193": {
		"joyo_kanji": "庁",
		"kyu_jitai": "廳",
		"yomi": {
			"on_yomi": [
				"チョウ"
			]
		},
		"raw_info": "庁\t廳\t5\t6\t\tチョウ"
	},
	"24195": {
		"joyo_kanji": "広",
		"kyu_jitai": "廣",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"ひろ"
			],
			"example_yomi": [
				"ひろ-い",
				"ひろ-まる",
				"ひろ-める",
				"ひろ-がる",
				"ひろ-げる"
			]
		},
		"raw_info": "広\t廣\t5\t2\t\tコウ、ひろ-い、ひろ-まる、ひろ-める、ひろ-がる、ひろ-げる"
	},
	"24202": {
		"joyo_kanji": "床",
		"kyu_jitai": "牀",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"とこ",
				"ゆか"
			]
		},
		"raw_info": "床\t牀\t7\t7S\t\tショウ、とこ、ゆか"
	},
	"24207": {
		"joyo_kanji": "序",
		"yomi": {
			"on_yomi": [
				"ジョ"
			]
		},
		"raw_info": "序\t\t7\t5\t\tジョ"
	},
	"24213": {
		"joyo_kanji": "底",
		"yomi": {
			"on_yomi": [
				"テイ"
			],
			"kun_yomi": [
				"そこ"
			]
		},
		"raw_info": "底\t\t8\t4\t\tテイ、そこ"
	},
	"24215": {
		"joyo_kanji": "店",
		"yomi": {
			"on_yomi": [
				"テン"
			],
			"kun_yomi": [
				"みせ"
			]
		},
		"raw_info": "店\t\t8\t2\t\tテン、みせ"
	},
	"24220": {
		"joyo_kanji": "府",
		"yomi": {
			"on_yomi": [
				"フ"
			]
		},
		"raw_info": "府\t\t8\t4\t\tフ"
	},
	"24230": {
		"joyo_kanji": "度",
		"yomi": {
			"on_yomi": [
				"ド",
				"ト",
				"タク"
			],
			"kun_yomi": [
				"たび"
			]
		},
		"raw_info": "度\t\t9\t3\t\tド、（ト）、（タク）、たび"
	},
	"24231": {
		"joyo_kanji": "座",
		"yomi": {
			"on_yomi": [
				"ザ"
			],
			"kun_yomi": [
				"すわ"
			],
			"example_yomi": [
				"すわ-る"
			]
		},
		"raw_info": "座\t\t10\t6\t\tザ、すわ-る"
	},
	"24235": {
		"joyo_kanji": "庫",
		"yomi": {
			"on_yomi": [
				"コ",
				"ク"
			]
		},
		"raw_info": "庫\t\t10\t3\t\tコ、（ク）"
	},
	"24237": {
		"joyo_kanji": "庭",
		"yomi": {
			"on_yomi": [
				"テイ"
			],
			"kun_yomi": [
				"にわ"
			]
		},
		"raw_info": "庭\t\t10\t3\t\tテイ、にわ"
	},
	"24246": {
		"joyo_kanji": "庶",
		"yomi": {
			"on_yomi": [
				"ショ"
			]
		},
		"raw_info": "庶\t\t11\t7S\t\tショ"
	},
	"24247": {
		"joyo_kanji": "康",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "康\t\t11\t4\t\tコウ"
	},
	"24248": {
		"joyo_kanji": "庸",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			]
		},
		"raw_info": "庸\t\t11\t7S\t\tヨウ"
	},
	"24259": {
		"joyo_kanji": "廃",
		"kyu_jitai": "廢",
		"yomi": {
			"on_yomi": [
				"ハイ"
			],
			"kun_yomi": [
				"すた"
			],
			"example_yomi": [
				"すた-れる",
				"すた-る"
			]
		},
		"raw_info": "廃\t廢\t12\t7S\t\tハイ、すた-れる、すた-る"
	},
	"24265": {
		"joyo_kanji": "廉",
		"yomi": {
			"on_yomi": [
				"レン"
			]
		},
		"raw_info": "廉\t\t13\t7S\t\tレン"
	},
	"24266": {
		"joyo_kanji": "廊",
		"kyu_jitai": "廊",
		"yomi": {
			"on_yomi": [
				"ロウ"
			]
		},
		"raw_info": "廊\t廊\t12\t7S\t\tロウ"
	},
	"24310": {
		"joyo_kanji": "延",
		"yomi": {
			"on_yomi": [
				"エン"
			],
			"kun_yomi": [
				"の"
			],
			"example_yomi": [
				"の-びる",
				"の-べる",
				"の-ばす"
			]
		},
		"raw_info": "延\t\t8\t6\t\tエン、の-びる、の-べる、の-ばす"
	},
	"24311": {
		"joyo_kanji": "廷",
		"yomi": {
			"on_yomi": [
				"テイ"
			]
		},
		"raw_info": "廷\t\t7\t7S\t\tテイ"
	},
	"24314": {
		"joyo_kanji": "建",
		"yomi": {
			"on_yomi": [
				"コン",
				"ケン"
			],
			"kun_yomi": [
				"た"
			],
			"example_yomi": [
				"た-てる",
				"た-つ"
			]
		},
		"raw_info": "建\t\t9\t4\t\tケン、（コン）、た-てる、た-つ"
	},
	"24321": {
		"joyo_kanji": "弁",
		"kyu_jitai": "辨瓣辯",
		"yomi": {
			"on_yomi": [
				"ベン"
			]
		},
		"raw_info": "弁\t辨瓣辯\t5\t5\t\tベン"
	},
	"24324": {
		"joyo_kanji": "弄",
		"yomi": {
			"on_yomi": [
				"ロウ"
			],
			"kun_yomi": [
				"もてあそ"
			],
			"example_yomi": [
				"もてあそ-ぶ"
			]
		},
		"raw_info": "弄\t\t7\t7S\t2010\tロウ、もてあそ-ぶ"
	},
	"24330": {
		"joyo_kanji": "弊",
		"yomi": {
			"on_yomi": [
				"ヘイ"
			]
		},
		"raw_info": "弊\t\t15\t7S\t\tヘイ"
	},
	"24335": {
		"joyo_kanji": "式",
		"yomi": {
			"on_yomi": [
				"シキ"
			]
		},
		"raw_info": "式\t\t6\t3\t\tシキ"
	},
	"24336": {
		"joyo_kanji": "弐",
		"kyu_jitai": "貳",
		"yomi": {
			"on_yomi": [
				"ニ"
			]
		},
		"raw_info": "弐\t貳\t6\t7S\t\tニ"
	},
	"24339": {
		"joyo_kanji": "弓",
		"yomi": {
			"on_yomi": [
				"キュウ"
			],
			"kun_yomi": [
				"ゆみ"
			]
		},
		"raw_info": "弓\t\t3\t2\t\tキュウ、ゆみ"
	},
	"24340": {
		"joyo_kanji": "弔",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"とむら"
			],
			"example_yomi": [
				"とむら-う"
			]
		},
		"raw_info": "弔\t\t4\t7S\t\tチョウ、とむら-う"
	},
	"24341": {
		"joyo_kanji": "引",
		"yomi": {
			"on_yomi": [
				"イン"
			],
			"kun_yomi": [
				"ひ"
			],
			"example_yomi": [
				"ひ-く",
				"ひ-ける"
			]
		},
		"raw_info": "引\t\t4\t2\t\tイン、ひ-く、ひ-ける"
	},
	"24351": {
		"joyo_kanji": "弟",
		"yomi": {
			"on_yomi": [
				"デ",
				"テイ",
				"ダイ"
			],
			"kun_yomi": [
				"おとうと"
			]
		},
		"raw_info": "弟\t\t7\t2\t\tテイ、（ダイ）、（デ）、おとうと"
	},
	"24357": {
		"joyo_kanji": "弥",
		"kyu_jitai": "彌",
		"yomi": {
			"kun_yomi": [
				"や"
			]
		},
		"raw_info": "弥\t彌\t8\t7S\t2010\tや"
	},
	"24358": {
		"joyo_kanji": "弦",
		"yomi": {
			"on_yomi": [
				"ゲン"
			],
			"kun_yomi": [
				"つる"
			]
		},
		"raw_info": "弦\t\t8\t7S\t\tゲン、つる"
	},
	"24359": {
		"joyo_kanji": "弧",
		"yomi": {
			"on_yomi": [
				"コ"
			]
		},
		"raw_info": "弧\t\t9\t7S\t\tコ"
	},
	"24369": {
		"joyo_kanji": "弱",
		"yomi": {
			"on_yomi": [
				"ジャク"
			],
			"kun_yomi": [
				"よわ"
			],
			"example_yomi": [
				"よわ-まる",
				"よわ-める",
				"よわ-い",
				"よわ-る"
			]
		},
		"raw_info": "弱\t\t10\t2\t\tジャク、よわ-い、よわ-る、よわ-まる、よわ-める"
	},
	"24373": {
		"joyo_kanji": "張",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"は"
			],
			"example_yomi": [
				"は-る"
			]
		},
		"raw_info": "張\t\t11\t5\t\tチョウ、は-る"
	},
	"24375": {
		"joyo_kanji": "強",
		"yomi": {
			"on_yomi": [
				"キョウ",
				"ゴウ"
			],
			"kun_yomi": [
				"つよ",
				"し"
			],
			"example_yomi": [
				"つよ-める",
				"し-いる",
				"つよ-い",
				"つよ-まる"
			]
		},
		"raw_info": "強\t\t11\t2\t\tキョウ、ゴウ、つよ-い、つよ-まる、つよ-める、し-いる"
	},
	"24382": {
		"joyo_kanji": "弾",
		"kyu_jitai": "彈",
		"yomi": {
			"on_yomi": [
				"ダン"
			],
			"kun_yomi": [
				"はず",
				"たま",
				"ひ"
			],
			"example_yomi": [
				"ひ-く",
				"はず-む"
			]
		},
		"raw_info": "弾\t彈\t12\t7S\t\tダン、ひ-く、はず-む、たま"
	},
	"24403": {
		"joyo_kanji": "当",
		"kyu_jitai": "當",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"あ"
			],
			"example_yomi": [
				"あ-たる",
				"あ-てる"
			]
		},
		"raw_info": "当\t當\t6\t2\t\tトウ、あ-たる、あ-てる"
	},
	"24409": {
		"joyo_kanji": "彙",
		"yomi": {
			"on_yomi": [
				"イ"
			]
		},
		"raw_info": "彙\t\t13\t7S\t2010\tイ"
	},
	"24418": {
		"joyo_kanji": "形",
		"yomi": {
			"on_yomi": [
				"ケイ",
				"ギョウ"
			],
			"kun_yomi": [
				"かた",
				"かたち"
			]
		},
		"raw_info": "形\t\t7\t2\t\tケイ、ギョウ、かた、かたち"
	},
	"24425": {
		"joyo_kanji": "彩",
		"yomi": {
			"on_yomi": [
				"サイ"
			],
			"kun_yomi": [
				"いろど"
			],
			"example_yomi": [
				"いろど-る"
			]
		},
		"raw_info": "彩\t\t11\t7S\t\tサイ、いろど-る"
	},
	"24427": {
		"joyo_kanji": "彫",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"ほ"
			],
			"example_yomi": [
				"ほ-る"
			]
		},
		"raw_info": "彫\t\t11\t7S\t\tチョウ、ほ-る"
	},
	"24432": {
		"joyo_kanji": "彰",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "彰\t\t14\t7S\t\tショウ"
	},
	"24433": {
		"joyo_kanji": "影",
		"yomi": {
			"on_yomi": [
				"エイ"
			],
			"kun_yomi": [
				"かげ"
			]
		},
		"raw_info": "影\t\t15\t7S\t\tエイ、かげ"
	},
	"24441": {
		"joyo_kanji": "役",
		"yomi": {
			"on_yomi": [
				"ヤク",
				"エキ"
			]
		},
		"raw_info": "役\t\t7\t3\t\tヤク、エキ"
	},
	"24444": {
		"joyo_kanji": "彼",
		"yomi": {
			"on_yomi": [
				"ヒ"
			],
			"kun_yomi": [
				"かれ",
				"かの"
			]
		},
		"raw_info": "彼\t\t8\t7S\t\tヒ、かれ、（かの）"
	},
	"24448": {
		"joyo_kanji": "往",
		"yomi": {
			"on_yomi": [
				"オウ"
			]
		},
		"raw_info": "往\t\t8\t5\t\tオウ"
	},
	"24449": {
		"joyo_kanji": "征",
		"yomi": {
			"on_yomi": [
				"セイ"
			]
		},
		"raw_info": "征\t\t8\t7S\t\tセイ"
	},
	"24452": {
		"joyo_kanji": "径",
		"kyu_jitai": "徑",
		"yomi": {
			"on_yomi": [
				"ケイ"
			]
		},
		"raw_info": "径\t徑\t8\t4\t\tケイ"
	},
	"24453": {
		"joyo_kanji": "待",
		"yomi": {
			"on_yomi": [
				"タイ"
			],
			"kun_yomi": [
				"ま"
			],
			"example_yomi": [
				"ま-つ"
			]
		},
		"raw_info": "待\t\t9\t3\t\tタイ、ま-つ"
	},
	"24459": {
		"joyo_kanji": "律",
		"yomi": {
			"on_yomi": [
				"リチ",
				"リツ"
			]
		},
		"raw_info": "律\t\t9\t6\t\tリツ、（リチ）"
	},
	"24460": {
		"joyo_kanji": "後",
		"yomi": {
			"on_yomi": [
				"ゴ",
				"コウ"
			],
			"kun_yomi": [
				"のち",
				"うし",
				"あと",
				"おく"
			],
			"example_yomi": [
				"うし-ろ",
				"おく-れる"
			]
		},
		"raw_info": "後\t\t9\t2\t\tゴ、コウ、のち、うし-ろ、あと、おく-れる"
	},
	"24464": {
		"joyo_kanji": "徐",
		"yomi": {
			"on_yomi": [
				"ジョ"
			]
		},
		"raw_info": "徐\t\t10\t7S\t\tジョ"
	},
	"24466": {
		"joyo_kanji": "徒",
		"yomi": {
			"on_yomi": [
				"ト"
			]
		},
		"raw_info": "徒\t\t10\t4\t\tト"
	},
	"24467": {
		"joyo_kanji": "従",
		"kyu_jitai": "從",
		"yomi": {
			"on_yomi": [
				"ジュウ",
				"ショウ",
				"ジュ"
			],
			"kun_yomi": [
				"したが"
			],
			"example_yomi": [
				"したが-う",
				"したが-える"
			]
		},
		"raw_info": "従\t從\t10\t6\t\tジュウ、（ショウ）、（ジュ）、したが-う、したが-える"
	},
	"24471": {
		"joyo_kanji": "得",
		"yomi": {
			"on_yomi": [
				"トク"
			],
			"kun_yomi": [
				"う",
				"え"
			],
			"example_yomi": [
				"え-る",
				"う-る"
			]
		},
		"raw_info": "得\t\t11\t4\t\tトク、え-る、う-る"
	},
	"24481": {
		"joyo_kanji": "御",
		"yomi": {
			"on_yomi": [
				"ギョ",
				"ゴ"
			],
			"kun_yomi": [
				"おん"
			]
		},
		"raw_info": "御\t\t12\t7S\t\tギョ、ゴ、おん"
	},
	"24489": {
		"joyo_kanji": "復",
		"yomi": {
			"on_yomi": [
				"フク"
			]
		},
		"raw_info": "復\t\t12\t5\t\tフク"
	},
	"24490": {
		"joyo_kanji": "循",
		"yomi": {
			"on_yomi": [
				"ジュン"
			]
		},
		"raw_info": "循\t\t12\t7S\t\tジュン"
	},
	"24494": {
		"joyo_kanji": "微",
		"yomi": {
			"on_yomi": [
				"ビ"
			]
		},
		"raw_info": "微\t\t13\t7S\t\tビ"
	},
	"24499": {
		"joyo_kanji": "徳",
		"kyu_jitai": "德",
		"yomi": {
			"on_yomi": [
				"トク"
			]
		},
		"raw_info": "徳\t德\t14\t5\t\tトク"
	},
	"24500": {
		"joyo_kanji": "徴",
		"kyu_jitai": "徵",
		"yomi": {
			"on_yomi": [
				"チョウ"
			]
		},
		"raw_info": "徴\t徵\t14\t7S\t\tチョウ"
	},
	"24505": {
		"joyo_kanji": "徹",
		"yomi": {
			"on_yomi": [
				"テツ"
			]
		},
		"raw_info": "徹\t\t15\t7S\t\tテツ"
	},
	"24515": {
		"joyo_kanji": "心",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"こころ"
			]
		},
		"raw_info": "心\t\t4\t2\t\tシン、こころ"
	},
	"24517": {
		"joyo_kanji": "必",
		"yomi": {
			"on_yomi": [
				"ヒツ"
			],
			"kun_yomi": [
				"かなら"
			],
			"example_yomi": [
				"かなら-ず"
			]
		},
		"raw_info": "必\t\t5\t4\t\tヒツ、かなら-ず"
	},
	"24524": {
		"joyo_kanji": "忌",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"い"
			],
			"example_yomi": [
				"い-まわしい",
				"い-む"
			]
		},
		"raw_info": "忌\t\t7\t7S\t\tキ、い-む、い-まわしい"
	},
	"24525": {
		"joyo_kanji": "忍",
		"yomi": {
			"on_yomi": [
				"ニン"
			],
			"kun_yomi": [
				"しの"
			],
			"example_yomi": [
				"しの-ぶ",
				"しの-ばせる"
			]
		},
		"raw_info": "忍\t\t7\t7S\t\tニン、しの-ぶ、しの-ばせる"
	},
	"24535": {
		"joyo_kanji": "志",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"こころざ",
				"こころざし"
			],
			"example_yomi": [
				"こころざ-す"
			]
		},
		"raw_info": "志\t\t7\t5\t\tシ、こころざ-す、こころざし"
	},
	"24536": {
		"joyo_kanji": "忘",
		"yomi": {
			"on_yomi": [
				"ボウ"
			],
			"kun_yomi": [
				"わす"
			],
			"example_yomi": [
				"わす-れる"
			]
		},
		"raw_info": "忘\t\t7\t6\t\tボウ、わす-れる"
	},
	"24537": {
		"joyo_kanji": "忙",
		"yomi": {
			"on_yomi": [
				"ボウ"
			],
			"kun_yomi": [
				"いそが"
			],
			"example_yomi": [
				"いそが-しい"
			]
		},
		"raw_info": "忙\t\t6\t7S\t\tボウ、いそが-しい"
	},
	"24540": {
		"joyo_kanji": "応",
		"kyu_jitai": "應",
		"yomi": {
			"on_yomi": [
				"オウ"
			],
			"kun_yomi": [
				"こた"
			],
			"example_yomi": [
				"こた-える"
			]
		},
		"raw_info": "応\t應\t7\t5\t\tオウ、こた-える"
	},
	"24544": {
		"joyo_kanji": "忠",
		"yomi": {
			"on_yomi": [
				"チュウ"
			]
		},
		"raw_info": "忠\t\t8\t6\t\tチュウ"
	},
	"24555": {
		"joyo_kanji": "快",
		"yomi": {
			"on_yomi": [
				"カイ"
			],
			"kun_yomi": [
				"こころよ"
			],
			"example_yomi": [
				"こころよ-い"
			]
		},
		"raw_info": "快\t\t7\t5\t\tカイ、こころよ-い"
	},
	"24565": {
		"joyo_kanji": "念",
		"yomi": {
			"on_yomi": [
				"ネン"
			]
		},
		"raw_info": "念\t\t8\t4\t\tネン"
	},
	"24594": {
		"joyo_kanji": "怒",
		"yomi": {
			"on_yomi": [
				"ド"
			],
			"kun_yomi": [
				"いか",
				"おこ"
			],
			"example_yomi": [
				"いか-る",
				"おこ-る"
			]
		},
		"raw_info": "怒\t\t9\t7S\t\tド、いか-る、おこ-る"
	},
	"24598": {
		"joyo_kanji": "怖",
		"yomi": {
			"on_yomi": [
				"フ"
			],
			"kun_yomi": [
				"こわ"
			],
			"example_yomi": [
				"こわ-い"
			]
		},
		"raw_info": "怖\t\t8\t7S\t\tフ、こわ-い"
	},
	"24605": {
		"joyo_kanji": "思",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"おも"
			],
			"example_yomi": [
				"おも-う"
			]
		},
		"raw_info": "思\t\t9\t2\t\tシ、おも-う"
	},
	"24608": {
		"joyo_kanji": "怠",
		"yomi": {
			"on_yomi": [
				"タイ"
			],
			"kun_yomi": [
				"おこた",
				"なま"
			],
			"example_yomi": [
				"おこた-る",
				"なま-ける"
			]
		},
		"raw_info": "怠\t\t9\t7S\t\tタイ、おこた-る、なま-ける"
	},
	"24613": {
		"joyo_kanji": "急",
		"yomi": {
			"on_yomi": [
				"キュウ"
			],
			"kun_yomi": [
				"いそ"
			],
			"example_yomi": [
				"いそ-ぐ"
			]
		},
		"raw_info": "急\t\t9\t3\t\tキュウ、いそ-ぐ"
	},
	"24615": {
		"joyo_kanji": "性",
		"yomi": {
			"on_yomi": [
				"セイ",
				"ショウ"
			]
		},
		"raw_info": "性\t\t8\t5\t\tセイ、ショウ"
	},
	"24616": {
		"joyo_kanji": "怨",
		"yomi": {
			"on_yomi": [
				"エン",
				"オン"
			]
		},
		"raw_info": "怨\t\t9\t7S\t2010\tエン、オン"
	},
	"24618": {
		"joyo_kanji": "怪",
		"yomi": {
			"on_yomi": [
				"カイ"
			],
			"kun_yomi": [
				"あや"
			],
			"example_yomi": [
				"あや-しい",
				"あや-しむ"
			]
		},
		"raw_info": "怪\t\t8\t7S\t\tカイ、あや-しい、あや-しむ"
	},
	"24651": {
		"joyo_kanji": "恋",
		"kyu_jitai": "戀",
		"yomi": {
			"on_yomi": [
				"レン"
			],
			"kun_yomi": [
				"こ",
				"こい"
			],
			"example_yomi": [
				"こい-しい",
				"こ-う"
			]
		},
		"raw_info": "恋\t戀\t10\t7S\t\tレン、こ-う、こい、こい-しい"
	},
	"24656": {
		"joyo_kanji": "恐",
		"yomi": {
			"on_yomi": [
				"キョウ"
			],
			"kun_yomi": [
				"おそ"
			],
			"example_yomi": [
				"おそ-れる",
				"おそ-ろしい"
			]
		},
		"raw_info": "恐\t\t10\t7S\t\tキョウ、おそ-れる、おそ-ろしい"
	},
	"24658": {
		"joyo_kanji": "恒",
		"kyu_jitai": "恆",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "恒\t恆\t9\t7S\t\tコウ"
	},
	"24675": {
		"joyo_kanji": "恣",
		"yomi": {
			"on_yomi": [
				"シ"
			]
		},
		"raw_info": "恣\t\t10\t7S\t2010\tシ"
	},
	"24677": {
		"joyo_kanji": "恥",
		"yomi": {
			"on_yomi": [
				"チ"
			],
			"kun_yomi": [
				"は",
				"はじ"
			],
			"example_yomi": [
				"は-じらう",
				"は-ずかしい",
				"は-じる"
			]
		},
		"raw_info": "恥\t\t10\t7S\t\tチ、は-じる、はじ、は-じらう、は-ずかしい"
	},
	"24680": {
		"joyo_kanji": "恨",
		"yomi": {
			"on_yomi": [
				"コン"
			],
			"kun_yomi": [
				"うら"
			],
			"example_yomi": [
				"うら-む",
				"うら-めしい"
			]
		},
		"raw_info": "恨\t\t9\t7S\t\tコン、うら-む、うら-めしい"
	},
	"24681": {
		"joyo_kanji": "恩",
		"yomi": {
			"on_yomi": [
				"オン"
			]
		},
		"raw_info": "恩\t\t10\t5\t\tオン"
	},
	"24685": {
		"joyo_kanji": "恭",
		"yomi": {
			"on_yomi": [
				"キョウ"
			],
			"kun_yomi": [
				"うやうや"
			],
			"example_yomi": [
				"うやうや-しい"
			]
		},
		"raw_info": "恭\t\t10\t7S\t\tキョウ、うやうや-しい"
	},
	"24687": {
		"joyo_kanji": "息",
		"yomi": {
			"on_yomi": [
				"ソク"
			],
			"kun_yomi": [
				"いき"
			]
		},
		"raw_info": "息\t\t10\t3\t\tソク、いき"
	},
	"24693": {
		"joyo_kanji": "恵",
		"kyu_jitai": "惠",
		"yomi": {
			"on_yomi": [
				"ケイ",
				"エ"
			],
			"kun_yomi": [
				"めぐ"
			],
			"example_yomi": [
				"めぐ-む"
			]
		},
		"raw_info": "恵\t惠\t10\t7S\t\tケイ、エ、めぐ-む"
	},
	"24724": {
		"joyo_kanji": "悔",
		"kyu_jitai": "悔",
		"yomi": {
			"on_yomi": [
				"カイ"
			],
			"kun_yomi": [
				"くや",
				"く"
			],
			"example_yomi": [
				"くや-しい",
				"く-いる",
				"く-やむ"
			]
		},
		"raw_info": "悔\t悔\t9\t7S\t\tカイ、く-いる、く-やむ、くや-しい"
	},
	"24735": {
		"joyo_kanji": "悟",
		"yomi": {
			"on_yomi": [
				"ゴ"
			],
			"kun_yomi": [
				"さと"
			],
			"example_yomi": [
				"さと-る"
			]
		},
		"raw_info": "悟\t\t10\t7S\t\tゴ、さと-る"
	},
	"24736": {
		"joyo_kanji": "悠",
		"yomi": {
			"on_yomi": [
				"ユウ"
			]
		},
		"raw_info": "悠\t\t11\t7S\t1981\tユウ"
	},
	"24739": {
		"joyo_kanji": "患",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"わずら"
			],
			"example_yomi": [
				"わずら-う"
			]
		},
		"raw_info": "患\t\t11\t7S\t\tカン、わずら-う"
	},
	"24742": {
		"joyo_kanji": "悦",
		"kyu_jitai": "悅",
		"yomi": {
			"on_yomi": [
				"エツ"
			]
		},
		"raw_info": "悦\t悅\t10\t7S\t\tエツ"
	},
	"24745": {
		"joyo_kanji": "悩",
		"kyu_jitai": "惱",
		"yomi": {
			"on_yomi": [
				"ノウ"
			],
			"kun_yomi": [
				"なや"
			],
			"example_yomi": [
				"なや-む",
				"なや-ます"
			]
		},
		"raw_info": "悩\t惱\t10\t7S\t\tノウ、なや-む、なや-ます"
	},
	"24746": {
		"joyo_kanji": "悪",
		"kyu_jitai": "惡",
		"yomi": {
			"on_yomi": [
				"アク",
				"オ"
			],
			"kun_yomi": [
				"わる"
			],
			"example_yomi": [
				"わる-い"
			]
		},
		"raw_info": "悪\t惡\t11\t3\t\tアク、オ、わる-い"
	},
	"24754": {
		"joyo_kanji": "悲",
		"yomi": {
			"on_yomi": [
				"ヒ"
			],
			"kun_yomi": [
				"かな"
			],
			"example_yomi": [
				"かな-しい",
				"かな-しむ"
			]
		},
		"raw_info": "悲\t\t12\t3\t\tヒ、かな-しい、かな-しむ"
	},
	"24764": {
		"joyo_kanji": "悼",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"いた"
			],
			"example_yomi": [
				"いた-む"
			]
		},
		"raw_info": "悼\t\t11\t7S\t\tトウ、いた-む"
	},
	"24773": {
		"joyo_kanji": "情",
		"yomi": {
			"on_yomi": [
				"ジョウ",
				"セイ"
			],
			"kun_yomi": [
				"なさ"
			],
			"example_yomi": [
				"なさ-け"
			]
		},
		"raw_info": "情\t\t11\t5\t\tジョウ、（セイ）、なさ-け"
	},
	"24785": {
		"joyo_kanji": "惑",
		"yomi": {
			"on_yomi": [
				"ワク"
			],
			"kun_yomi": [
				"まど"
			],
			"example_yomi": [
				"まど-う"
			]
		},
		"raw_info": "惑\t\t12\t7S\t\tワク、まど-う"
	},
	"24796": {
		"joyo_kanji": "惜",
		"yomi": {
			"on_yomi": [
				"セキ"
			],
			"kun_yomi": [
				"お"
			],
			"example_yomi": [
				"お-しむ",
				"お-しい"
			]
		},
		"raw_info": "惜\t\t11\t7S\t\tセキ、お-しい、お-しむ"
	},
	"24807": {
		"joyo_kanji": "惧",
		"yomi": {
			"on_yomi": [
				"グ"
			]
		},
		"raw_info": "惧\t\t11\t7S\t2010\tグ"
	},
	"24808": {
		"joyo_kanji": "惨",
		"kyu_jitai": "慘",
		"yomi": {
			"on_yomi": [
				"サン",
				"ザン"
			],
			"kun_yomi": [
				"みじ"
			],
			"example_yomi": [
				"みじ-め"
			]
		},
		"raw_info": "惨\t慘\t11\t7S\t\tサン、ザン、みじ-め"
	},
	"24816": {
		"joyo_kanji": "惰",
		"yomi": {
			"on_yomi": [
				"ダ"
			]
		},
		"raw_info": "惰\t\t12\t7S\t\tダ"
	},
	"24819": {
		"joyo_kanji": "想",
		"yomi": {
			"on_yomi": [
				"ソウ",
				"ソ"
			]
		},
		"raw_info": "想\t\t13\t3\t\tソウ、（ソ）"
	},
	"24833": {
		"joyo_kanji": "愁",
		"yomi": {
			"on_yomi": [
				"シュウ"
			],
			"kun_yomi": [
				"うれ"
			],
			"example_yomi": [
				"うれ-える",
				"うれ-い"
			]
		},
		"raw_info": "愁\t\t13\t7S\t\tシュウ、うれ-える、うれ-い"
	},
	"24841": {
		"joyo_kanji": "愉",
		"yomi": {
			"on_yomi": [
				"ユ"
			]
		},
		"raw_info": "愉\t\t12\t7S\t\tユ"
	},
	"24847": {
		"joyo_kanji": "意",
		"yomi": {
			"on_yomi": [
				"イ"
			]
		},
		"raw_info": "意\t\t13\t3\t\tイ"
	},
	"24858": {
		"joyo_kanji": "愚",
		"yomi": {
			"on_yomi": [
				"グ"
			],
			"kun_yomi": [
				"おろ"
			],
			"example_yomi": [
				"おろ-か"
			]
		},
		"raw_info": "愚\t\t13\t7S\t\tグ、おろ-か"
	},
	"24859": {
		"joyo_kanji": "愛",
		"yomi": {
			"on_yomi": [
				"アイ"
			]
		},
		"raw_info": "愛\t\t13\t4\t\tアイ"
	},
	"24863": {
		"joyo_kanji": "感",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "感\t\t13\t3\t\tカン"
	},
	"24900": {
		"joyo_kanji": "慄",
		"yomi": {
			"on_yomi": [
				"リツ"
			]
		},
		"raw_info": "慄\t\t13\t7S\t2010\tリツ"
	},
	"24904": {
		"joyo_kanji": "慈",
		"yomi": {
			"on_yomi": [
				"ジ"
			],
			"kun_yomi": [
				"いつく"
			],
			"example_yomi": [
				"いつく-しむ"
			]
		},
		"raw_info": "慈\t\t13\t7S\t\tジ、いつく-しむ"
	},
	"24907": {
		"joyo_kanji": "態",
		"yomi": {
			"on_yomi": [
				"タイ"
			]
		},
		"raw_info": "態\t\t14\t5\t\tタイ"
	},
	"24908": {
		"joyo_kanji": "慌",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"あわ"
			],
			"example_yomi": [
				"あわ-てる",
				"あわ-ただしい"
			]
		},
		"raw_info": "慌\t\t12\t7S\t\tコウ、あわ-てる、あわ-ただしい"
	},
	"24910": {
		"joyo_kanji": "慎",
		"kyu_jitai": "愼",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"つつし"
			],
			"example_yomi": [
				"つつし-む"
			]
		},
		"raw_info": "慎\t愼\t13\t7S\t\tシン、つつし-む"
	},
	"24917": {
		"joyo_kanji": "慕",
		"yomi": {
			"on_yomi": [
				"ボ"
			],
			"kun_yomi": [
				"した"
			],
			"example_yomi": [
				"した-う"
			]
		},
		"raw_info": "慕\t\t14\t7S\t\tボ、した-う"
	},
	"24930": {
		"joyo_kanji": "慢",
		"yomi": {
			"on_yomi": [
				"マン"
			]
		},
		"raw_info": "慢\t\t14\t7S\t\tマン"
	},
	"24931": {
		"joyo_kanji": "慣",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"な"
			],
			"example_yomi": [
				"な-れる",
				"な-らす"
			]
		},
		"raw_info": "慣\t\t14\t5\t\tカン、な-れる、な-らす"
	},
	"24936": {
		"joyo_kanji": "慨",
		"kyu_jitai": "慨",
		"yomi": {
			"on_yomi": [
				"ガイ"
			]
		},
		"raw_info": "慨\t慨\t13\t7S\t\tガイ"
	},
	"24942": {
		"joyo_kanji": "慮",
		"yomi": {
			"on_yomi": [
				"リョ"
			]
		},
		"raw_info": "慮\t\t15\t7S\t\tリョ"
	},
	"24944": {
		"joyo_kanji": "慰",
		"yomi": {
			"on_yomi": [
				"イ"
			],
			"kun_yomi": [
				"なぐさ"
			],
			"example_yomi": [
				"なぐさ-める",
				"なぐさ-む"
			]
		},
		"raw_info": "慰\t\t15\t7S\t\tイ、なぐさ-める、なぐさ-む"
	},
	"24950": {
		"joyo_kanji": "慶",
		"yomi": {
			"on_yomi": [
				"ケイ"
			]
		},
		"raw_info": "慶\t\t15\t7S\t\tケイ"
	},
	"24962": {
		"joyo_kanji": "憂",
		"yomi": {
			"on_yomi": [
				"ユウ"
			],
			"kun_yomi": [
				"うれ",
				"う"
			],
			"example_yomi": [
				"う-い",
				"うれ-える",
				"うれ-い"
			]
		},
		"raw_info": "憂\t\t15\t7S\t\tユウ、うれ-える、うれ-い、う-い"
	},
	"24974": {
		"joyo_kanji": "憎",
		"kyu_jitai": "憎",
		"yomi": {
			"on_yomi": [
				"ゾウ"
			],
			"kun_yomi": [
				"にく"
			],
			"example_yomi": [
				"にく-む",
				"にく-い",
				"にく-らしい",
				"にく-しみ"
			]
		},
		"raw_info": "憎\t憎\t14\t7S\t\tゾウ、にく-む、にく-い、にく-らしい、にく-しみ"
	},
	"24996": {
		"joyo_kanji": "憤",
		"yomi": {
			"on_yomi": [
				"フン"
			],
			"kun_yomi": [
				"いきどお"
			],
			"example_yomi": [
				"いきどお-る"
			]
		},
		"raw_info": "憤\t\t15\t7S\t\tフン、いきどお-る"
	},
	"24999": {
		"joyo_kanji": "憧",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"あこが"
			],
			"example_yomi": [
				"あこが-れる"
			]
		},
		"raw_info": "憧\t\t15\t7S\t2010\tショウ、あこが-れる"
	},
	"25001": {
		"joyo_kanji": "憩",
		"yomi": {
			"on_yomi": [
				"ケイ"
			],
			"kun_yomi": [
				"いこ"
			],
			"example_yomi": [
				"いこ-い",
				"いこ-う"
			]
		},
		"raw_info": "憩\t\t16\t7S\t\tケイ、いこ-い、いこ-う"
	},
	"25004": {
		"joyo_kanji": "憬",
		"yomi": {
			"on_yomi": [
				"ケイ"
			]
		},
		"raw_info": "憬\t\t15\t7S\t2010\tケイ"
	},
	"25010": {
		"joyo_kanji": "憲",
		"yomi": {
			"on_yomi": [
				"ケン"
			]
		},
		"raw_info": "憲\t\t16\t6\t\tケン"
	},
	"25014": {
		"joyo_kanji": "憶",
		"yomi": {
			"on_yomi": [
				"オク"
			]
		},
		"raw_info": "憶\t\t16\t7S\t\tオク"
	},
	"25022": {
		"joyo_kanji": "憾",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "憾\t\t16\t7S\t\tカン"
	},
	"25031": {
		"joyo_kanji": "懇",
		"yomi": {
			"on_yomi": [
				"コン"
			],
			"kun_yomi": [
				"ねんご"
			],
			"example_yomi": [
				"ねんご-ろ"
			]
		},
		"raw_info": "懇\t\t17\t7S\t\tコン、ねんご-ろ"
	},
	"25040": {
		"joyo_kanji": "懐",
		"kyu_jitai": "懷",
		"yomi": {
			"on_yomi": [
				"カイ"
			],
			"kun_yomi": [
				"ふところ",
				"なつ"
			],
			"example_yomi": [
				"なつ-かしい",
				"なつ-かしむ",
				"なつ-く",
				"なつ-ける"
			]
		},
		"raw_info": "懐\t懷\t16\t7S\t\tカイ、ふところ、なつ-かしい、なつ-かしむ、なつ-く、なつ-ける"
	},
	"25074": {
		"joyo_kanji": "懲",
		"kyu_jitai": "懲",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"こ"
			],
			"example_yomi": [
				"こ-りる",
				"こ-らす",
				"こ-らしめる"
			]
		},
		"raw_info": "懲\t懲\t18\t7S\t\tチョウ、こ-りる、こ-らす、こ-らしめる"
	},
	"25080": {
		"joyo_kanji": "懸",
		"yomi": {
			"on_yomi": [
				"ケン",
				"ケ"
			],
			"kun_yomi": [
				"か"
			],
			"example_yomi": [
				"か-ける",
				"か-かる"
			]
		},
		"raw_info": "懸\t\t20\t7S\t\tケン、（ケ）、か-ける、か-かる"
	},
	"25104": {
		"joyo_kanji": "成",
		"yomi": {
			"on_yomi": [
				"セイ",
				"ジョウ"
			],
			"kun_yomi": [
				"な"
			],
			"example_yomi": [
				"な-る",
				"な-す"
			]
		},
		"raw_info": "成\t\t6\t4\t\tセイ、（ジョウ）、な-る、な-す"
	},
	"25105": {
		"joyo_kanji": "我",
		"yomi": {
			"on_yomi": [
				"ガ"
			],
			"kun_yomi": [
				"われ",
				"わ"
			]
		},
		"raw_info": "我\t\t7\t6\t\tガ、われ、わ"
	},
	"25106": {
		"joyo_kanji": "戒",
		"yomi": {
			"on_yomi": [
				"カイ"
			],
			"kun_yomi": [
				"いまし"
			],
			"example_yomi": [
				"いまし-める"
			]
		},
		"raw_info": "戒\t\t7\t7S\t\tカイ、いまし-める"
	},
	"25114": {
		"joyo_kanji": "戚",
		"yomi": {
			"on_yomi": [
				"セキ"
			]
		},
		"raw_info": "戚\t\t11\t7S\t2010\tセキ"
	},
	"25126": {
		"joyo_kanji": "戦",
		"kyu_jitai": "戰",
		"yomi": {
			"on_yomi": [
				"セン"
			],
			"kun_yomi": [
				"いくさ",
				"たたか"
			],
			"example_yomi": [
				"たたか-う"
			]
		},
		"raw_info": "戦\t戰\t13\t4\t\tセン、いくさ、たたか-う"
	},
	"25135": {
		"joyo_kanji": "戯",
		"kyu_jitai": "戲",
		"yomi": {
			"on_yomi": [
				"ギ"
			],
			"kun_yomi": [
				"たわむ"
			],
			"example_yomi": [
				"たわむ-れる"
			]
		},
		"raw_info": "戯\t戲\t15\t7S\t\tギ、たわむ-れる"
	},
	"25140": {
		"joyo_kanji": "戴",
		"yomi": {
			"on_yomi": [
				"タイ"
			]
		},
		"raw_info": "戴\t\t17\t7S\t2010\tタイ"
	},
	"25144": {
		"joyo_kanji": "戸",
		"yomi": {
			"on_yomi": [
				"コ"
			],
			"kun_yomi": [
				"と"
			]
		},
		"raw_info": "戸\t\t4\t2\t\tコ、と"
	},
	"25147": {
		"joyo_kanji": "戻",
		"kyu_jitai": "戾",
		"yomi": {
			"on_yomi": [
				"レイ"
			],
			"kun_yomi": [
				"もど"
			],
			"example_yomi": [
				"もど-す",
				"もど-る"
			]
		},
		"raw_info": "戻\t戾\t7\t7S\t1981\tレイ、もど-す、もど-る"
	},
	"25151": {
		"joyo_kanji": "房",
		"yomi": {
			"on_yomi": [
				"ボウ"
			],
			"kun_yomi": [
				"ふさ"
			]
		},
		"raw_info": "房\t\t8\t7S\t\tボウ、ふさ"
	},
	"25152": {
		"joyo_kanji": "所",
		"yomi": {
			"on_yomi": [
				"ショ"
			],
			"kun_yomi": [
				"ところ"
			]
		},
		"raw_info": "所\t\t8\t3\t\tショ、ところ"
	},
	"25159": {
		"joyo_kanji": "扇",
		"yomi": {
			"on_yomi": [
				"セン"
			],
			"kun_yomi": [
				"おうぎ"
			]
		},
		"raw_info": "扇\t\t10\t7S\t\tセン、おうぎ"
	},
	"25161": {
		"joyo_kanji": "扉",
		"yomi": {
			"on_yomi": [
				"ヒ"
			],
			"kun_yomi": [
				"とびら"
			]
		},
		"raw_info": "扉\t\t12\t7S\t1981\tヒ、とびら"
	},
	"25163": {
		"joyo_kanji": "手",
		"yomi": {
			"on_yomi": [
				"シュ"
			],
			"kun_yomi": [
				"て",
				"た"
			]
		},
		"raw_info": "手\t\t4\t1\t\tシュ、て、（た）"
	},
	"25165": {
		"joyo_kanji": "才",
		"yomi": {
			"on_yomi": [
				"サイ"
			]
		},
		"raw_info": "才\t\t3\t2\t\tサイ"
	},
	"25171": {
		"joyo_kanji": "打",
		"yomi": {
			"on_yomi": [
				"ダ"
			],
			"kun_yomi": [
				"う"
			],
			"example_yomi": [
				"う-つ"
			]
		},
		"raw_info": "打\t\t5\t3\t\tダ、う-つ"
	},
	"25173": {
		"joyo_kanji": "払",
		"kyu_jitai": "拂",
		"yomi": {
			"on_yomi": [
				"フツ"
			],
			"kun_yomi": [
				"はら"
			],
			"example_yomi": [
				"はら-う"
			]
		},
		"raw_info": "払\t拂\t5\t7S\t\tフツ、はら-う"
	},
	"25201": {
		"joyo_kanji": "扱",
		"yomi": {
			"kun_yomi": [
				"あつか"
			],
			"example_yomi": [
				"あつか-う"
			]
		},
		"raw_info": "扱\t\t6\t7S\t\tあつか-う"
	},
	"25206": {
		"joyo_kanji": "扶",
		"yomi": {
			"on_yomi": [
				"フ"
			]
		},
		"raw_info": "扶\t\t7\t7S\t\tフ"
	},
	"25209": {
		"joyo_kanji": "批",
		"yomi": {
			"on_yomi": [
				"ヒ"
			]
		},
		"raw_info": "批\t\t7\t6\t\tヒ"
	},
	"25215": {
		"joyo_kanji": "承",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"うけたまわ"
			],
			"example_yomi": [
				"うけたまわ-る"
			]
		},
		"raw_info": "承\t\t8\t5\t\tショウ、うけたまわ-る"
	},
	"25216": {
		"joyo_kanji": "技",
		"yomi": {
			"on_yomi": [
				"ギ"
			],
			"kun_yomi": [
				"わざ"
			]
		},
		"raw_info": "技\t\t7\t5\t\tギ、わざ"
	},
	"25220": {
		"joyo_kanji": "抄",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "抄\t\t7\t7S\t\tショウ"
	},
	"25226": {
		"joyo_kanji": "把",
		"yomi": {
			"on_yomi": [
				"ハ"
			]
		},
		"raw_info": "把\t\t7\t7S\t1981\tハ"
	},
	"25233": {
		"joyo_kanji": "抑",
		"yomi": {
			"on_yomi": [
				"ヨク"
			],
			"kun_yomi": [
				"おさ"
			],
			"example_yomi": [
				"おさ-える"
			]
		},
		"raw_info": "抑\t\t7\t7S\t\tヨク、おさ-える"
	},
	"25237": {
		"joyo_kanji": "投",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"な"
			],
			"example_yomi": [
				"な-げる"
			]
		},
		"raw_info": "投\t\t7\t3\t\tトウ、な-げる"
	},
	"25239": {
		"joyo_kanji": "抗",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "抗\t\t7\t7S\t\tコウ"
	},
	"25240": {
		"joyo_kanji": "折",
		"yomi": {
			"on_yomi": [
				"セツ"
			],
			"kun_yomi": [
				"お",
				"おり"
			],
			"example_yomi": [
				"お-る",
				"お-れる"
			]
		},
		"raw_info": "折\t\t7\t4\t\tセツ、お-る、おり、お-れる"
	},
	"25244": {
		"joyo_kanji": "抜",
		"kyu_jitai": "拔",
		"yomi": {
			"on_yomi": [
				"バツ"
			],
			"kun_yomi": [
				"ぬ"
			],
			"example_yomi": [
				"ぬ-く",
				"ぬ-ける",
				"ぬ-かす",
				"ぬ-かる"
			]
		},
		"raw_info": "抜\t拔\t7\t7S\t\tバツ、ぬ-く、ぬ-ける、ぬ-かす、ぬ-かる"
	},
	"25246": {
		"joyo_kanji": "択",
		"kyu_jitai": "擇",
		"yomi": {
			"on_yomi": [
				"タク"
			]
		},
		"raw_info": "択\t擇\t7\t7S\t\tタク"
	},
	"25259": {
		"joyo_kanji": "披",
		"yomi": {
			"on_yomi": [
				"ヒ"
			]
		},
		"raw_info": "披\t\t8\t7S\t1981\tヒ"
	},
	"25265": {
		"joyo_kanji": "抱",
		"yomi": {
			"on_yomi": [
				"ホウ"
			],
			"kun_yomi": [
				"だ",
				"いだ",
				"かか"
			],
			"example_yomi": [
				"だ-く",
				"いだ-く",
				"かか-える"
			]
		},
		"raw_info": "抱\t\t8\t7S\t\tホウ、だ-く、いだ-く、かか-える"
	},
	"25269": {
		"joyo_kanji": "抵",
		"yomi": {
			"on_yomi": [
				"テイ"
			]
		},
		"raw_info": "抵\t\t8\t7S\t\tテイ"
	},
	"25273": {
		"joyo_kanji": "抹",
		"yomi": {
			"on_yomi": [
				"マツ"
			]
		},
		"raw_info": "抹\t\t8\t7S\t1981\tマツ"
	},
	"25276": {
		"joyo_kanji": "押",
		"yomi": {
			"on_yomi": [
				"オウ"
			],
			"kun_yomi": [
				"お"
			],
			"example_yomi": [
				"お-す",
				"お-さえる"
			]
		},
		"raw_info": "押\t\t8\t7S\t\tオウ、お-す、お-さえる"
	},
	"25277": {
		"joyo_kanji": "抽",
		"yomi": {
			"on_yomi": [
				"チュウ"
			]
		},
		"raw_info": "抽\t\t8\t7S\t\tチュウ"
	},
	"25285": {
		"joyo_kanji": "担",
		"kyu_jitai": "擔",
		"yomi": {
			"on_yomi": [
				"タン"
			],
			"kun_yomi": [
				"かつ",
				"にな"
			],
			"example_yomi": [
				"にな-う",
				"かつ-ぐ"
			]
		},
		"raw_info": "担\t擔\t8\t6\t\tタン、かつ-ぐ、にな-う"
	},
	"25289": {
		"joyo_kanji": "拉",
		"yomi": {
			"on_yomi": [
				"ラ"
			]
		},
		"raw_info": "拉\t\t8\t7S\t2010\tラ"
	},
	"25293": {
		"joyo_kanji": "拍",
		"yomi": {
			"on_yomi": [
				"ハク",
				"ヒョウ"
			]
		},
		"raw_info": "拍\t\t8\t7S\t\tハク、（ヒョウ）"
	},
	"25296": {
		"joyo_kanji": "拐",
		"yomi": {
			"on_yomi": [
				"カイ"
			]
		},
		"raw_info": "拐\t\t8\t7S\t1981\tカイ"
	},
	"25298": {
		"joyo_kanji": "拒",
		"yomi": {
			"on_yomi": [
				"キョ"
			],
			"kun_yomi": [
				"こば"
			],
			"example_yomi": [
				"こば-む"
			]
		},
		"raw_info": "拒\t\t8\t7S\t\tキョ、こば-む"
	},
	"25299": {
		"joyo_kanji": "拓",
		"yomi": {
			"on_yomi": [
				"タク"
			]
		},
		"raw_info": "拓\t\t8\t7S\t\tタク"
	},
	"25304": {
		"joyo_kanji": "拘",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "拘\t\t8\t7S\t\tコウ"
	},
	"25305": {
		"joyo_kanji": "拙",
		"yomi": {
			"on_yomi": [
				"セツ"
			],
			"kun_yomi": [
				"つたな"
			],
			"example_yomi": [
				"つたな-い"
			]
		},
		"raw_info": "拙\t\t8\t7S\t\tセツ、つたな-い"
	},
	"25307": {
		"joyo_kanji": "招",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"まね"
			],
			"example_yomi": [
				"まね-く"
			]
		},
		"raw_info": "招\t\t8\t5\t\tショウ、まね-く"
	},
	"25309": {
		"joyo_kanji": "拝",
		"kyu_jitai": "拜",
		"yomi": {
			"on_yomi": [
				"ハイ"
			],
			"kun_yomi": [
				"おが"
			],
			"example_yomi": [
				"おが-む"
			]
		},
		"raw_info": "拝\t拜\t8\t6\t\tハイ、おが-む"
	},
	"25312": {
		"joyo_kanji": "拠",
		"kyu_jitai": "據",
		"yomi": {
			"on_yomi": [
				"コ",
				"キョ"
			]
		},
		"raw_info": "拠\t據\t8\t7S\t\tキョ、コ"
	},
	"25313": {
		"joyo_kanji": "拡",
		"kyu_jitai": "擴",
		"yomi": {
			"on_yomi": [
				"カク"
			]
		},
		"raw_info": "拡\t擴\t8\t6\t\tカク"
	},
	"25324": {
		"joyo_kanji": "括",
		"yomi": {
			"on_yomi": [
				"カツ"
			]
		},
		"raw_info": "括\t\t9\t7S\t\tカツ"
	},
	"25325": {
		"joyo_kanji": "拭",
		"yomi": {
			"on_yomi": [
				"ショク"
			],
			"kun_yomi": [
				"ふ",
				"ぬぐ"
			],
			"example_yomi": [
				"ふ-く",
				"ぬぐ-う"
			]
		},
		"raw_info": "拭\t\t9\t7S\t2010\tショク、ふ-く、ぬぐ-う"
	},
	"25331": {
		"joyo_kanji": "拳",
		"yomi": {
			"on_yomi": [
				"ケン"
			],
			"kun_yomi": [
				"こぶし"
			]
		},
		"raw_info": "拳\t\t10\t7S\t2010\tケン、こぶし"
	},
	"25334": {
		"joyo_kanji": "拶",
		"yomi": {
			"on_yomi": [
				"サツ"
			]
		},
		"raw_info": "拶\t\t9\t7S\t2010\tサツ"
	},
	"25335": {
		"joyo_kanji": "拷",
		"yomi": {
			"on_yomi": [
				"ゴウ"
			]
		},
		"raw_info": "拷\t\t9\t7S\t\tゴウ"
	},
	"25342": {
		"joyo_kanji": "拾",
		"yomi": {
			"on_yomi": [
				"シュウ",
				"ジュウ"
			],
			"kun_yomi": [
				"ひろ"
			],
			"example_yomi": [
				"ひろ-う"
			]
		},
		"raw_info": "拾\t\t9\t3\t\tシュウ、ジュウ、ひろ-う"
	},
	"25345": {
		"joyo_kanji": "持",
		"yomi": {
			"on_yomi": [
				"ジ"
			],
			"kun_yomi": [
				"も"
			],
			"example_yomi": [
				"も-つ"
			]
		},
		"raw_info": "持\t\t9\t3\t\tジ、も-つ"
	},
	"25351": {
		"joyo_kanji": "指",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"さ",
				"ゆび"
			],
			"example_yomi": [
				"さ-す"
			]
		},
		"raw_info": "指\t\t9\t3\t\tシ、ゆび、さ-す"
	},
	"25361": {
		"joyo_kanji": "挑",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"いど"
			],
			"example_yomi": [
				"いど-む"
			]
		},
		"raw_info": "挑\t\t9\t7S\t1981\tチョウ、いど-む"
	},
	"25369": {
		"joyo_kanji": "挙",
		"kyu_jitai": "擧",
		"yomi": {
			"on_yomi": [
				"キョ"
			],
			"kun_yomi": [
				"あ"
			],
			"example_yomi": [
				"あ-げる",
				"あ-がる"
			]
		},
		"raw_info": "挙\t擧\t10\t4\t\tキョ、あ-げる、あ-がる"
	},
	"25375": {
		"joyo_kanji": "挟",
		"kyu_jitai": "挾",
		"yomi": {
			"on_yomi": [
				"キョウ"
			],
			"kun_yomi": [
				"はさ"
			],
			"example_yomi": [
				"はさ-む",
				"はさ-まる"
			]
		},
		"raw_info": "挟\t挾\t9\t7S\t1981\tキョウ、はさ-む、はさ-まる"
	},
	"25384": {
		"joyo_kanji": "挨",
		"yomi": {
			"on_yomi": [
				"アイ"
			]
		},
		"raw_info": "挨\t\t10\t7S\t2010\tアイ"
	},
	"25387": {
		"joyo_kanji": "挫",
		"yomi": {
			"on_yomi": [
				"ザ"
			]
		},
		"raw_info": "挫\t\t10\t7S\t2010\tザ"
	},
	"25391": {
		"joyo_kanji": "振",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"ふ"
			],
			"example_yomi": [
				"ふ-る",
				"ふ-るう",
				"ふ-れる"
			]
		},
		"raw_info": "振\t\t10\t7S\t\tシン、ふ-る、ふ-るう、ふ-れる"
	},
	"25407": {
		"joyo_kanji": "挿",
		"kyu_jitai": "插",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"さ"
			],
			"example_yomi": [
				"さ-す"
			]
		},
		"raw_info": "挿\t插\t10\t7S\t1981\tソウ、さ-す"
	},
	"25417": {
		"joyo_kanji": "捉",
		"yomi": {
			"on_yomi": [
				"ソク"
			],
			"kun_yomi": [
				"とら"
			],
			"example_yomi": [
				"とら-える"
			]
		},
		"raw_info": "捉\t\t10\t7S\t2010\tソク、とら-える"
	},
	"25429": {
		"joyo_kanji": "捕",
		"yomi": {
			"on_yomi": [
				"ホ"
			],
			"kun_yomi": [
				"と",
				"つか"
			],
			"example_yomi": [
				"と-る",
				"つか-まえる",
				"つか-まる",
				"と-らえる",
				"と-らわれる"
			]
		},
		"raw_info": "捕\t\t10\t7S\t\tホ、と-らえる、と-らわれる、と-る、つか-まえる、つか-まる"
	},
	"25431": {
		"joyo_kanji": "捗",
		"yomi": {
			"on_yomi": [
				"チョク"
			]
		},
		"raw_info": "捗\t\t10\t7S\t2010\tチョク"
	},
	"25436": {
		"joyo_kanji": "捜",
		"kyu_jitai": "搜",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"さが"
			],
			"example_yomi": [
				"さが-す"
			]
		},
		"raw_info": "捜\t搜\t10\t7S\t\tソウ、さが-す"
	},
	"25448": {
		"joyo_kanji": "捨",
		"yomi": {
			"on_yomi": [
				"シャ"
			],
			"kun_yomi": [
				"す"
			],
			"example_yomi": [
				"す-てる"
			]
		},
		"raw_info": "捨\t\t11\t6\t\tシャ、す-てる"
	},
	"25454": {
		"joyo_kanji": "据",
		"yomi": {
			"kun_yomi": [
				"す"
			],
			"example_yomi": [
				"す-える",
				"す-わる"
			]
		},
		"raw_info": "据\t\t11\t7S\t1981\tす-える、す-わる"
	},
	"25467": {
		"joyo_kanji": "捻",
		"yomi": {
			"on_yomi": [
				"ネン"
			]
		},
		"raw_info": "捻\t\t11\t7S\t2010\tネン"
	},
	"25475": {
		"joyo_kanji": "掃",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"は"
			],
			"example_yomi": [
				"は-く"
			]
		},
		"raw_info": "掃\t\t11\t7S\t\tソウ、は-く"
	},
	"25480": {
		"joyo_kanji": "授",
		"yomi": {
			"on_yomi": [
				"ジュ"
			],
			"kun_yomi": [
				"さず"
			],
			"example_yomi": [
				"さず-ける",
				"さず-かる"
			]
		},
		"raw_info": "授\t\t11\t5\t\tジュ、さず-ける、さず-かる"
	},
	"25484": {
		"joyo_kanji": "掌",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "掌\t\t12\t7S\t\tショウ"
	},
	"25490": {
		"joyo_kanji": "排",
		"yomi": {
			"on_yomi": [
				"ハイ"
			]
		},
		"raw_info": "排\t\t11\t7S\t\tハイ"
	},
	"25496": {
		"joyo_kanji": "掘",
		"yomi": {
			"on_yomi": [
				"クツ"
			],
			"kun_yomi": [
				"ほ"
			],
			"example_yomi": [
				"ほ-る"
			]
		},
		"raw_info": "掘\t\t11\t7S\t\tクツ、ほ-る"
	},
	"25499": {
		"joyo_kanji": "掛",
		"yomi": {
			"kun_yomi": [
				"かかり",
				"か"
			],
			"example_yomi": [
				"か-ける",
				"か-かる"
			]
		},
		"raw_info": "掛\t\t11\t7S\t\tか-ける、か-かる、かかり"
	},
	"25505": {
		"joyo_kanji": "採",
		"yomi": {
			"on_yomi": [
				"サイ"
			],
			"kun_yomi": [
				"と"
			],
			"example_yomi": [
				"と-る"
			]
		},
		"raw_info": "採\t\t11\t5\t\tサイ、と-る"
	},
	"25506": {
		"joyo_kanji": "探",
		"yomi": {
			"on_yomi": [
				"タン"
			],
			"kun_yomi": [
				"さぐ",
				"さが"
			],
			"example_yomi": [
				"さぐ-る",
				"さが-す"
			]
		},
		"raw_info": "探\t\t11\t6\t\tタン、さぐ-る、さが-す"
	},
	"25509": {
		"joyo_kanji": "接",
		"yomi": {
			"on_yomi": [
				"セツ"
			],
			"kun_yomi": [
				"つ"
			],
			"example_yomi": [
				"つ-ぐ"
			]
		},
		"raw_info": "接\t\t11\t5\t\tセツ、つ-ぐ"
	},
	"25511": {
		"joyo_kanji": "控",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"ひか"
			],
			"example_yomi": [
				"ひか-える"
			]
		},
		"raw_info": "控\t\t11\t7S\t\tコウ、ひか-える"
	},
	"25512": {
		"joyo_kanji": "推",
		"yomi": {
			"on_yomi": [
				"スイ"
			],
			"kun_yomi": [
				"お"
			],
			"example_yomi": [
				"お-す"
			]
		},
		"raw_info": "推\t\t11\t6\t\tスイ、お-す"
	},
	"25514": {
		"joyo_kanji": "措",
		"yomi": {
			"on_yomi": [
				"ソ"
			]
		},
		"raw_info": "措\t\t11\t7S\t\tソ"
	},
	"25522": {
		"joyo_kanji": "掲",
		"kyu_jitai": "揭",
		"yomi": {
			"on_yomi": [
				"ケイ"
			],
			"kun_yomi": [
				"かか"
			],
			"example_yomi": [
				"かか-げる"
			]
		},
		"raw_info": "掲\t揭\t11\t7S\t\tケイ、かか-げる"
	},
	"25551": {
		"joyo_kanji": "描",
		"yomi": {
			"on_yomi": [
				"ビョウ"
			],
			"kun_yomi": [
				"えが",
				"か"
			],
			"example_yomi": [
				"えが-く",
				"か-く"
			]
		},
		"raw_info": "描\t\t11\t7S\t\tビョウ、えが-く、か-く"
	},
	"25552": {
		"joyo_kanji": "提",
		"yomi": {
			"on_yomi": [
				"テイ"
			],
			"kun_yomi": [
				"さ"
			],
			"example_yomi": [
				"さ-げる"
			]
		},
		"raw_info": "提\t\t12\t5\t\tテイ、さ-げる"
	},
	"25562": {
		"joyo_kanji": "揚",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			],
			"kun_yomi": [
				"あ"
			],
			"example_yomi": [
				"あ-げる",
				"あ-がる"
			]
		},
		"raw_info": "揚\t\t12\t7S\t\tヨウ、あ-げる、あ-がる"
	},
	"25563": {
		"joyo_kanji": "換",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"か"
			],
			"example_yomi": [
				"か-える",
				"か-わる"
			]
		},
		"raw_info": "換\t\t12\t7S\t\tカン、か-える、か-わる"
	},
	"25569": {
		"joyo_kanji": "握",
		"yomi": {
			"on_yomi": [
				"アク"
			],
			"kun_yomi": [
				"にぎ"
			],
			"example_yomi": [
				"にぎ-る"
			]
		},
		"raw_info": "握\t\t12\t7S\t\tアク、にぎ-る"
	},
	"25582": {
		"joyo_kanji": "揮",
		"yomi": {
			"on_yomi": [
				"キ"
			]
		},
		"raw_info": "揮\t\t12\t6\t\tキ"
	},
	"25588": {
		"joyo_kanji": "援",
		"yomi": {
			"on_yomi": [
				"エン"
			]
		},
		"raw_info": "援\t\t12\t7S\t\tエン"
	},
	"25594": {
		"joyo_kanji": "揺",
		"kyu_jitai": "搖",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			],
			"kun_yomi": [
				"ゆ"
			],
			"example_yomi": [
				"ゆ-さぶる",
				"ゆ-すぶる",
				"ゆ-れる",
				"ゆ-る",
				"ゆ-らぐ",
				"ゆ-るぐ",
				"ゆ-する"
			]
		},
		"raw_info": "揺\t搖\t12\t7S\t\tヨウ、ゆ-れる、ゆ-る、ゆ-らぐ、ゆ-るぐ、ゆ-する、ゆ-さぶる、ゆ-すぶる"
	},
	"25613": {
		"joyo_kanji": "損",
		"yomi": {
			"on_yomi": [
				"ソン"
			],
			"kun_yomi": [
				"そこ"
			],
			"example_yomi": [
				"そこ-なう",
				"そこ-ねる"
			]
		},
		"raw_info": "損\t\t13\t5\t\tソン、そこ-なう、そこ-ねる"
	},
	"25644": {
		"joyo_kanji": "搬",
		"yomi": {
			"on_yomi": [
				"ハン"
			]
		},
		"raw_info": "搬\t\t13\t7S\t\tハン"
	},
	"25645": {
		"joyo_kanji": "搭",
		"yomi": {
			"on_yomi": [
				"トウ"
			]
		},
		"raw_info": "搭\t\t12\t7S\t1981\tトウ"
	},
	"25658": {
		"joyo_kanji": "携",
		"kyu_jitai": "攜",
		"yomi": {
			"on_yomi": [
				"ケイ"
			],
			"kun_yomi": [
				"たずさ"
			],
			"example_yomi": [
				"たずさ-える",
				"たずさ-わる"
			]
		},
		"raw_info": "携\t攜\t13\t7S\t\tケイ、たずさ-える、たずさ-わる"
	},
	"25662": {
		"joyo_kanji": "搾",
		"yomi": {
			"on_yomi": [
				"サク"
			],
			"kun_yomi": [
				"しぼ"
			],
			"example_yomi": [
				"しぼ-る"
			]
		},
		"raw_info": "搾\t\t13\t7S\t\tサク、しぼ-る"
	},
	"25666": {
		"joyo_kanji": "摂",
		"kyu_jitai": "攝",
		"yomi": {
			"on_yomi": [
				"セツ"
			]
		},
		"raw_info": "摂\t攝\t13\t7S\t\tセツ"
	},
	"25688": {
		"joyo_kanji": "摘",
		"yomi": {
			"on_yomi": [
				"テキ"
			],
			"kun_yomi": [
				"つ"
			],
			"example_yomi": [
				"つ-む"
			]
		},
		"raw_info": "摘\t\t14\t7S\t\tテキ、つ-む"
	},
	"25705": {
		"joyo_kanji": "摩",
		"yomi": {
			"on_yomi": [
				"マ"
			]
		},
		"raw_info": "摩\t\t15\t7S\t\tマ"
	},
	"25711": {
		"joyo_kanji": "摯",
		"yomi": {
			"on_yomi": [
				"シ"
			]
		},
		"raw_info": "摯\t\t15\t7S\t2010\tシ"
	},
	"25731": {
		"joyo_kanji": "撃",
		"kyu_jitai": "擊",
		"yomi": {
			"on_yomi": [
				"ゲキ"
			],
			"kun_yomi": [
				"う"
			],
			"example_yomi": [
				"う-つ"
			]
		},
		"raw_info": "撃\t擊\t15\t7S\t\tゲキ、う-つ"
	},
	"25764": {
		"joyo_kanji": "撤",
		"yomi": {
			"on_yomi": [
				"テツ"
			]
		},
		"raw_info": "撤\t\t15\t7S\t\tテツ"
	},
	"25774": {
		"joyo_kanji": "撮",
		"yomi": {
			"on_yomi": [
				"サツ"
			],
			"kun_yomi": [
				"と"
			],
			"example_yomi": [
				"と-る"
			]
		},
		"raw_info": "撮\t\t15\t7S\t\tサツ、と-る"
	},
	"25778": {
		"joyo_kanji": "撲",
		"yomi": {
			"on_yomi": [
				"ボク"
			]
		},
		"raw_info": "撲\t\t15\t7S\t\tボク"
	},
	"25793": {
		"joyo_kanji": "擁",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			]
		},
		"raw_info": "擁\t\t16\t7S\t\tヨウ"
	},
	"25805": {
		"joyo_kanji": "操",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"みさお",
				"あやつ"
			],
			"example_yomi": [
				"あやつ-る"
			]
		},
		"raw_info": "操\t\t16\t6\t\tソウ、みさお、あやつ-る"
	},
	"25830": {
		"joyo_kanji": "擦",
		"yomi": {
			"on_yomi": [
				"サツ"
			],
			"kun_yomi": [
				"す"
			],
			"example_yomi": [
				"す-る",
				"す-れる"
			]
		},
		"raw_info": "擦\t\t17\t7S\t\tサツ、す-る、す-れる"
	},
	"25836": {
		"joyo_kanji": "擬",
		"yomi": {
			"on_yomi": [
				"ギ"
			]
		},
		"raw_info": "擬\t\t17\t7S\t\tギ"
	},
	"25903": {
		"joyo_kanji": "支",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"ささ"
			],
			"example_yomi": [
				"ささ-える"
			]
		},
		"raw_info": "支\t\t4\t5\t\tシ、ささ-える"
	},
	"25913": {
		"joyo_kanji": "改",
		"yomi": {
			"on_yomi": [
				"カイ"
			],
			"kun_yomi": [
				"あらた"
			],
			"example_yomi": [
				"あらた-める",
				"あらた-まる"
			]
		},
		"raw_info": "改\t\t7\t4\t\tカイ、あらた-める、あらた-まる"
	},
	"25915": {
		"joyo_kanji": "攻",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"せ"
			],
			"example_yomi": [
				"せ-める"
			]
		},
		"raw_info": "攻\t\t7\t7S\t\tコウ、せ-める"
	},
	"25918": {
		"joyo_kanji": "放",
		"yomi": {
			"on_yomi": [
				"ホウ"
			],
			"kun_yomi": [
				"はな",
				"ほう"
			],
			"example_yomi": [
				"はな-れる",
				"ほう-る",
				"はな-す",
				"はな-つ"
			]
		},
		"raw_info": "放\t\t8\t3\t\tホウ、はな-す、はな-つ、はな-れる、ほう-る"
	},
	"25919": {
		"joyo_kanji": "政",
		"yomi": {
			"on_yomi": [
				"セイ",
				"ショウ"
			],
			"kun_yomi": [
				"まつりごと"
			]
		},
		"raw_info": "政\t\t9\t5\t\tセイ、（ショウ）、まつりごと"
	},
	"25925": {
		"joyo_kanji": "故",
		"yomi": {
			"on_yomi": [
				"コ"
			],
			"kun_yomi": [
				"ゆえ"
			]
		},
		"raw_info": "故\t\t9\t5\t\tコ、ゆえ"
	},
	"25935": {
		"joyo_kanji": "敏",
		"kyu_jitai": "敏",
		"yomi": {
			"on_yomi": [
				"ビン"
			]
		},
		"raw_info": "敏\t敏\t10\t7S\t\tビン"
	},
	"25937": {
		"joyo_kanji": "救",
		"yomi": {
			"on_yomi": [
				"キュウ"
			],
			"kun_yomi": [
				"すく"
			],
			"example_yomi": [
				"すく-う"
			]
		},
		"raw_info": "救\t\t11\t4\t\tキュウ、すく-う"
	},
	"25943": {
		"joyo_kanji": "敗",
		"yomi": {
			"on_yomi": [
				"ハイ"
			],
			"kun_yomi": [
				"やぶ"
			],
			"example_yomi": [
				"やぶ-れる"
			]
		},
		"raw_info": "敗\t\t11\t4\t\tハイ、やぶ-れる"
	},
	"25945": {
		"joyo_kanji": "教",
		"kyu_jitai": "敎",
		"yomi": {
			"on_yomi": [
				"キョウ"
			],
			"kun_yomi": [
				"おし",
				"おそ"
			],
			"example_yomi": [
				"おそ-わる",
				"おし-える"
			]
		},
		"raw_info": "教\t敎\t11\t2\t\tキョウ、おし-える、おそ-わる"
	},
	"25954": {
		"joyo_kanji": "敢",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "敢\t\t12\t7S\t\tカン"
	},
	"25955": {
		"joyo_kanji": "散",
		"yomi": {
			"on_yomi": [
				"サン"
			],
			"kun_yomi": [
				"ち"
			],
			"example_yomi": [
				"ち-る",
				"ち-らす",
				"ち-らかす",
				"ち-らかる"
			]
		},
		"raw_info": "散\t\t12\t4\t\tサン、ち-る、ち-らす、ち-らかす、ち-らかる"
	},
	"25964": {
		"joyo_kanji": "敬",
		"yomi": {
			"on_yomi": [
				"ケイ"
			],
			"kun_yomi": [
				"うやま"
			],
			"example_yomi": [
				"うやま-う"
			]
		},
		"raw_info": "敬\t\t12\t6\t\tケイ、うやま-う"
	},
	"25968": {
		"joyo_kanji": "数",
		"kyu_jitai": "數",
		"yomi": {
			"on_yomi": [
				"スウ",
				"ス"
			],
			"kun_yomi": [
				"かず",
				"かぞ"
			],
			"example_yomi": [
				"かぞ-える"
			]
		},
		"raw_info": "数\t數\t13\t2\t\tスウ、（ス）、かず、かぞ-える"
	},
	"25972": {
		"joyo_kanji": "整",
		"yomi": {
			"on_yomi": [
				"セイ"
			],
			"kun_yomi": [
				"ととの"
			],
			"example_yomi": [
				"ととの-える",
				"ととの-う"
			]
		},
		"raw_info": "整\t\t16\t3\t\tセイ、ととの-える、ととの-う"
	},
	"25973": {
		"joyo_kanji": "敵",
		"yomi": {
			"on_yomi": [
				"テキ"
			],
			"kun_yomi": [
				"かたき"
			]
		},
		"raw_info": "敵\t\t15\t5\t\tテキ、かたき"
	},
	"25975": {
		"joyo_kanji": "敷",
		"yomi": {
			"on_yomi": [
				"フ"
			],
			"kun_yomi": [
				"し"
			],
			"example_yomi": [
				"し-く"
			]
		},
		"raw_info": "敷\t\t15\t7S\t\tフ、し-く"
	},
	"25991": {
		"joyo_kanji": "文",
		"yomi": {
			"on_yomi": [
				"ブン",
				"モン"
			],
			"kun_yomi": [
				"ふみ"
			]
		},
		"raw_info": "文\t\t4\t1\t\tブン、モン、ふみ"
	},
	"25993": {
		"joyo_kanji": "斉",
		"kyu_jitai": "齊",
		"yomi": {
			"on_yomi": [
				"セイ"
			]
		},
		"raw_info": "斉\t齊\t8\t7S\t1981\tセイ"
	},
	"25998": {
		"joyo_kanji": "斎",
		"kyu_jitai": "齋",
		"yomi": {
			"on_yomi": [
				"サイ"
			]
		},
		"raw_info": "斎\t齋\t11\t7S\t\tサイ"
	},
	"26001": {
		"joyo_kanji": "斑",
		"yomi": {
			"on_yomi": [
				"ハン"
			]
		},
		"raw_info": "斑\t\t12\t7S\t2010\tハン"
	},
	"26007": {
		"joyo_kanji": "斗",
		"yomi": {
			"on_yomi": [
				"ト"
			]
		},
		"raw_info": "斗\t\t4\t7S\t\tト"
	},
	"26009": {
		"joyo_kanji": "料",
		"yomi": {
			"on_yomi": [
				"リョウ"
			]
		},
		"raw_info": "料\t\t10\t4\t\tリョウ"
	},
	"26012": {
		"joyo_kanji": "斜",
		"yomi": {
			"on_yomi": [
				"シャ"
			],
			"kun_yomi": [
				"なな"
			],
			"example_yomi": [
				"なな-め"
			]
		},
		"raw_info": "斜\t\t11\t7S\t\tシャ、なな-め"
	},
	"26020": {
		"joyo_kanji": "斤",
		"yomi": {
			"on_yomi": [
				"キン"
			]
		},
		"raw_info": "斤\t\t4\t7S\t\tキン"
	},
	"26021": {
		"joyo_kanji": "斥",
		"yomi": {
			"on_yomi": [
				"セキ"
			]
		},
		"raw_info": "斥\t\t5\t7S\t\tセキ"
	},
	"26028": {
		"joyo_kanji": "斬",
		"yomi": {
			"on_yomi": [
				"ザン"
			],
			"kun_yomi": [
				"き"
			],
			"example_yomi": [
				"き-る"
			]
		},
		"raw_info": "斬\t\t11\t7S\t2010\tザン、き-る"
	},
	"26029": {
		"joyo_kanji": "断",
		"kyu_jitai": "斷",
		"yomi": {
			"on_yomi": [
				"ダン"
			],
			"kun_yomi": [
				"た",
				"ことわ"
			],
			"example_yomi": [
				"た-つ",
				"ことわ-る"
			]
		},
		"raw_info": "断\t斷\t11\t5\t\tダン、た-つ、ことわ-る"
	},
	"26032": {
		"joyo_kanji": "新",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"あたら",
				"あら",
				"にい"
			],
			"example_yomi": [
				"あら-た",
				"あたら-しい"
			]
		},
		"raw_info": "新\t\t13\t2\t\tシン、あたら-しい、あら-た、にい"
	},
	"26041": {
		"joyo_kanji": "方",
		"yomi": {
			"on_yomi": [
				"ホウ"
			],
			"kun_yomi": [
				"かた"
			]
		},
		"raw_info": "方\t\t4\t2\t\tホウ、かた"
	},
	"26045": {
		"joyo_kanji": "施",
		"yomi": {
			"on_yomi": [
				"シ",
				"セ"
			],
			"kun_yomi": [
				"ほどこ"
			],
			"example_yomi": [
				"ほどこ-す"
			]
		},
		"raw_info": "施\t\t9\t7S\t\tシ、セ、ほどこ-す"
	},
	"26053": {
		"joyo_kanji": "旅",
		"yomi": {
			"on_yomi": [
				"リョ"
			],
			"kun_yomi": [
				"たび"
			]
		},
		"raw_info": "旅\t\t10\t3\t\tリョ、たび"
	},
	"26059": {
		"joyo_kanji": "旋",
		"yomi": {
			"on_yomi": [
				"セン"
			]
		},
		"raw_info": "旋\t\t11\t7S\t\tセン"
	},
	"26063": {
		"joyo_kanji": "族",
		"yomi": {
			"on_yomi": [
				"ゾク"
			]
		},
		"raw_info": "族\t\t11\t3\t\tゾク"
	},
	"26071": {
		"joyo_kanji": "旗",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"はた"
			]
		},
		"raw_info": "旗\t\t14\t4\t\tキ、はた"
	},
	"26082": {
		"joyo_kanji": "既",
		"kyu_jitai": "既",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"すで"
			],
			"example_yomi": [
				"すで-に"
			]
		},
		"raw_info": "既\t既\t10\t7S\t\tキ、すで-に"
	},
	"26085": {
		"joyo_kanji": "日",
		"yomi": {
			"on_yomi": [
				"ニチ",
				"ジツ"
			],
			"kun_yomi": [
				"ひ",
				"か"
			]
		},
		"raw_info": "日\t\t4\t1\t\tニチ、ジツ、ひ、か"
	},
	"26086": {
		"joyo_kanji": "旦",
		"yomi": {
			"on_yomi": [
				"タン",
				"ダン"
			]
		},
		"raw_info": "旦\t\t5\t7S\t2010\tタン、ダン"
	},
	"26087": {
		"joyo_kanji": "旧",
		"kyu_jitai": "舊",
		"yomi": {
			"on_yomi": [
				"キュウ"
			]
		},
		"raw_info": "旧\t舊\t5\t5\t\tキュウ"
	},
	"26088": {
		"joyo_kanji": "旨",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"むね"
			]
		},
		"raw_info": "旨\t\t6\t7S\t\tシ、むね"
	},
	"26089": {
		"joyo_kanji": "早",
		"yomi": {
			"on_yomi": [
				"ソウ",
				"サッ"
			],
			"kun_yomi": [
				"はや"
			],
			"example_yomi": [
				"はや-い",
				"はや-まる",
				"はや-める"
			]
		},
		"raw_info": "早\t\t6\t1\t\tソウ、（サッ）、はや-い、はや-まる、はや-める"
	},
	"26092": {
		"joyo_kanji": "旬",
		"yomi": {
			"on_yomi": [
				"シュン",
				"ジュン"
			]
		},
		"raw_info": "旬\t\t6\t7S\t\tジュン、（シュン）"
	},
	"26106": {
		"joyo_kanji": "旺",
		"yomi": {
			"on_yomi": [
				"オウ"
			]
		},
		"raw_info": "旺\t\t8\t7S\t2010\tオウ"
	},
	"26118": {
		"joyo_kanji": "昆",
		"yomi": {
			"on_yomi": [
				"コン"
			]
		},
		"raw_info": "昆\t\t8\t7S\t1981\tコン"
	},
	"26119": {
		"joyo_kanji": "昇",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"のぼ"
			],
			"example_yomi": [
				"のぼ-る"
			]
		},
		"raw_info": "昇\t\t8\t7S\t\tショウ、のぼ-る"
	},
	"26126": {
		"joyo_kanji": "明",
		"yomi": {
			"on_yomi": [
				"メイ",
				"ミョウ"
			],
			"kun_yomi": [
				"あき",
				"あ",
				"あか"
			],
			"example_yomi": [
				"あ-かり",
				"あか-るむ",
				"あ-かす",
				"あ-くる",
				"あか-るい",
				"あか-らむ",
				"あき-らか",
				"あ-ける",
				"あ-く"
			]
		},
		"raw_info": "明\t\t8\t2\t\tメイ、ミョウ、あ-かり、あか-るい、あか-るむ、あか-らむ、あき-らか、あ-ける、あ-く、あ-くる、あ-かす"
	},
	"26131": {
		"joyo_kanji": "易",
		"yomi": {
			"on_yomi": [
				"エキ",
				"イ"
			],
			"kun_yomi": [
				"やさ"
			],
			"example_yomi": [
				"やさ-しい"
			]
		},
		"raw_info": "易\t\t8\t5\t\tエキ、イ、やさ-しい"
	},
	"26132": {
		"joyo_kanji": "昔",
		"yomi": {
			"on_yomi": [
				"セキ",
				"シャク"
			],
			"kun_yomi": [
				"むかし"
			]
		},
		"raw_info": "昔\t\t8\t3\t\tセキ、（シャク）、むかし"
	},
	"26143": {
		"joyo_kanji": "星",
		"yomi": {
			"on_yomi": [
				"セイ",
				"ショウ"
			],
			"kun_yomi": [
				"ほし"
			]
		},
		"raw_info": "星\t\t9\t2\t\tセイ、（ショウ）、ほし"
	},
	"26144": {
		"joyo_kanji": "映",
		"yomi": {
			"on_yomi": [
				"エイ"
			],
			"kun_yomi": [
				"うつ",
				"は"
			],
			"example_yomi": [
				"うつ-る",
				"うつ-す",
				"は-える"
			]
		},
		"raw_info": "映\t\t9\t6\t\tエイ、うつ-る、うつ-す、は-える"
	},
	"26149": {
		"joyo_kanji": "春",
		"yomi": {
			"on_yomi": [
				"シュン"
			],
			"kun_yomi": [
				"はる"
			]
		},
		"raw_info": "春\t\t9\t2\t\tシュン、はる"
	},
	"26151": {
		"joyo_kanji": "昧",
		"yomi": {
			"on_yomi": [
				"マイ"
			]
		},
		"raw_info": "昧\t\t9\t7S\t2010\tマイ"
	},
	"26152": {
		"joyo_kanji": "昨",
		"yomi": {
			"on_yomi": [
				"サク"
			]
		},
		"raw_info": "昨\t\t9\t4\t\tサク"
	},
	"26157": {
		"joyo_kanji": "昭",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "昭\t\t9\t3\t\tショウ"
	},
	"26159": {
		"joyo_kanji": "是",
		"yomi": {
			"on_yomi": [
				"ゼ"
			]
		},
		"raw_info": "是\t\t9\t7S\t\tゼ"
	},
	"26172": {
		"joyo_kanji": "昼",
		"kyu_jitai": "晝",
		"yomi": {
			"on_yomi": [
				"チュウ"
			],
			"kun_yomi": [
				"ひる"
			]
		},
		"raw_info": "昼\t晝\t9\t2\t\tチュウ、ひる"
	},
	"26178": {
		"joyo_kanji": "時",
		"yomi": {
			"on_yomi": [
				"ジ"
			],
			"kun_yomi": [
				"とき"
			]
		},
		"raw_info": "時\t\t10\t2\t\tジ、とき"
	},
	"26217": {
		"joyo_kanji": "晩",
		"kyu_jitai": "晚",
		"yomi": {
			"on_yomi": [
				"バン"
			]
		},
		"raw_info": "晩\t晚\t12\t6\t\tバン"
	},
	"26222": {
		"joyo_kanji": "普",
		"yomi": {
			"on_yomi": [
				"フ"
			]
		},
		"raw_info": "普\t\t12\t7S\t\tフ"
	},
	"26223": {
		"joyo_kanji": "景",
		"yomi": {
			"on_yomi": [
				"ケイ"
			]
		},
		"raw_info": "景\t\t12\t4\t\tケイ"
	},
	"26228": {
		"joyo_kanji": "晴",
		"kyu_jitai": "晴",
		"yomi": {
			"on_yomi": [
				"セイ"
			],
			"kun_yomi": [
				"は"
			],
			"example_yomi": [
				"は-れる",
				"は-らす"
			]
		},
		"raw_info": "晴\t晴\t12\t2\t\tセイ、は-れる、は-らす"
	},
	"26230": {
		"joyo_kanji": "晶",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "晶\t\t12\t7S\t\tショウ"
	},
	"26241": {
		"joyo_kanji": "暁",
		"kyu_jitai": "曉",
		"yomi": {
			"on_yomi": [
				"ギョウ"
			],
			"kun_yomi": [
				"あかつき"
			]
		},
		"raw_info": "暁\t曉\t12\t7S\t\tギョウ、あかつき"
	},
	"26247": {
		"joyo_kanji": "暇",
		"yomi": {
			"on_yomi": [
				"カ"
			],
			"kun_yomi": [
				"ひま"
			]
		},
		"raw_info": "暇\t\t13\t7S\t\tカ、ひま"
	},
	"26257": {
		"joyo_kanji": "暑",
		"kyu_jitai": "暑",
		"yomi": {
			"on_yomi": [
				"ショ"
			],
			"kun_yomi": [
				"あつ"
			],
			"example_yomi": [
				"あつ-い"
			]
		},
		"raw_info": "暑\t暑\t12\t3\t\tショ、あつ-い"
	},
	"26262": {
		"joyo_kanji": "暖",
		"yomi": {
			"on_yomi": [
				"ダン"
			],
			"kun_yomi": [
				"あたた"
			],
			"example_yomi": [
				"あたた-か",
				"あたた-かい",
				"あたた-まる",
				"あたた-める"
			]
		},
		"raw_info": "暖\t\t13\t6\t\tダン、あたた-か、あたた-かい、あたた-まる、あたた-める"
	},
	"26263": {
		"joyo_kanji": "暗",
		"yomi": {
			"on_yomi": [
				"アン"
			],
			"kun_yomi": [
				"くら"
			],
			"example_yomi": [
				"くら-い"
			]
		},
		"raw_info": "暗\t\t13\t3\t\tアン、くら-い"
	},
	"26278": {
		"joyo_kanji": "暦",
		"kyu_jitai": "曆",
		"yomi": {
			"on_yomi": [
				"レキ"
			],
			"kun_yomi": [
				"こよみ"
			]
		},
		"raw_info": "暦\t曆\t14\t7S\t\tレキ、こよみ"
	},
	"26283": {
		"joyo_kanji": "暫",
		"yomi": {
			"on_yomi": [
				"ザン"
			]
		},
		"raw_info": "暫\t\t15\t7S\t\tザン"
	},
	"26286": {
		"joyo_kanji": "暮",
		"yomi": {
			"on_yomi": [
				"ボ"
			],
			"kun_yomi": [
				"く"
			],
			"example_yomi": [
				"く-れる",
				"く-らす"
			]
		},
		"raw_info": "暮\t\t14\t6\t\tボ、く-れる、く-らす"
	},
	"26292": {
		"joyo_kanji": "暴",
		"yomi": {
			"on_yomi": [
				"ボウ",
				"バク"
			],
			"kun_yomi": [
				"あば"
			],
			"example_yomi": [
				"あば-く",
				"あば-れる"
			]
		},
		"raw_info": "暴\t\t15\t5\t\tボウ、（バク）、あば-く、あば-れる"
	},
	"26311": {
		"joyo_kanji": "曇",
		"yomi": {
			"on_yomi": [
				"ドン"
			],
			"kun_yomi": [
				"くも"
			],
			"example_yomi": [
				"くも-る"
			]
		},
		"raw_info": "曇\t\t16\t7S\t\tドン、くも-る"
	},
	"26326": {
		"joyo_kanji": "曖",
		"yomi": {
			"on_yomi": [
				"アイ"
			]
		},
		"raw_info": "曖\t\t17\t7S\t2010\tアイ"
	},
	"26332": {
		"joyo_kanji": "曜",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			]
		},
		"raw_info": "曜\t\t18\t2\t\tヨウ"
	},
	"26354": {
		"joyo_kanji": "曲",
		"yomi": {
			"on_yomi": [
				"キョク"
			],
			"kun_yomi": [
				"ま"
			],
			"example_yomi": [
				"ま-がる",
				"ま-げる"
			]
		},
		"raw_info": "曲\t\t6\t3\t\tキョク、ま-がる、ま-げる"
	},
	"26356": {
		"joyo_kanji": "更",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"さら",
				"ふ"
			],
			"example_yomi": [
				"ふ-ける",
				"ふ-かす"
			]
		},
		"raw_info": "更\t\t7\t7S\t\tコウ、さら、ふ-ける、ふ-かす"
	},
	"26360": {
		"joyo_kanji": "書",
		"yomi": {
			"on_yomi": [
				"ショ"
			],
			"kun_yomi": [
				"か"
			],
			"example_yomi": [
				"か-く"
			]
		},
		"raw_info": "書\t\t10\t2\t\tショ、か-く"
	},
	"26361": {
		"joyo_kanji": "曹",
		"yomi": {
			"on_yomi": [
				"ソウ"
			]
		},
		"raw_info": "曹\t\t11\t7S\t1981\tソウ"
	},
	"26365": {
		"joyo_kanji": "曽",
		"kyu_jitai": "曾",
		"yomi": {
			"on_yomi": [
				"ソウ",
				"ゾ"
			]
		},
		"raw_info": "曽\t曾\t11\t7S\t2010\tソウ、（ゾ）"
	},
	"26367": {
		"joyo_kanji": "替",
		"yomi": {
			"on_yomi": [
				"タイ"
			],
			"kun_yomi": [
				"か"
			],
			"example_yomi": [
				"か-わる",
				"か-える"
			]
		},
		"raw_info": "替\t\t12\t7S\t\tタイ、か-える、か-わる"
	},
	"26368": {
		"joyo_kanji": "最",
		"yomi": {
			"on_yomi": [
				"サイ"
			],
			"kun_yomi": [
				"もっと"
			],
			"example_yomi": [
				"もっと-も"
			]
		},
		"raw_info": "最\t\t12\t4\t\tサイ、もっと-も"
	},
	"26376": {
		"joyo_kanji": "月",
		"yomi": {
			"on_yomi": [
				"ゲツ",
				"ガツ"
			],
			"kun_yomi": [
				"つき"
			]
		},
		"raw_info": "月\t\t4\t1\t\tゲツ、ガツ、つき"
	},
	"26377": {
		"joyo_kanji": "有",
		"yomi": {
			"on_yomi": [
				"ユウ",
				"ウ"
			],
			"kun_yomi": [
				"あ"
			],
			"example_yomi": [
				"あ-る"
			]
		},
		"raw_info": "有\t\t6\t3\t\tユウ、ウ、あ-る"
	},
	"26381": {
		"joyo_kanji": "服",
		"yomi": {
			"on_yomi": [
				"フク"
			]
		},
		"raw_info": "服\t\t8\t3\t\tフク"
	},
	"26389": {
		"joyo_kanji": "朕",
		"yomi": {
			"on_yomi": [
				"チン"
			]
		},
		"raw_info": "朕\t\t10\t7S\t\tチン"
	},
	"26391": {
		"joyo_kanji": "朗",
		"kyu_jitai": "朗",
		"yomi": {
			"on_yomi": [
				"ロウ"
			],
			"kun_yomi": [
				"ほが"
			],
			"example_yomi": [
				"ほが-らか"
			]
		},
		"raw_info": "朗\t朗\t10\t6\t\tロウ、ほが-らか"
	},
	"26395": {
		"joyo_kanji": "望",
		"yomi": {
			"on_yomi": [
				"モウ",
				"ボウ"
			],
			"kun_yomi": [
				"のぞ"
			],
			"example_yomi": [
				"のぞ-む"
			]
		},
		"raw_info": "望\t\t11\t4\t\tボウ、モウ、のぞ-む"
	},
	"26397": {
		"joyo_kanji": "朝",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"あさ"
			]
		},
		"raw_info": "朝\t\t12\t2\t\tチョウ、あさ"
	},
	"26399": {
		"joyo_kanji": "期",
		"yomi": {
			"on_yomi": [
				"キ",
				"ゴ"
			]
		},
		"raw_info": "期\t\t12\t3\t\tキ、（ゴ）"
	},
	"26408": {
		"joyo_kanji": "木",
		"yomi": {
			"on_yomi": [
				"ボク",
				"モク"
			],
			"kun_yomi": [
				"き",
				"こ"
			]
		},
		"raw_info": "木\t\t4\t1\t\tボク、モク、き、（こ）"
	},
	"26410": {
		"joyo_kanji": "未",
		"yomi": {
			"on_yomi": [
				"ミ"
			]
		},
		"raw_info": "未\t\t5\t4\t\tミ"
	},
	"26411": {
		"joyo_kanji": "末",
		"yomi": {
			"on_yomi": [
				"マツ",
				"バツ"
			],
			"kun_yomi": [
				"すえ"
			]
		},
		"raw_info": "末\t\t5\t4\t\tマツ、バツ、すえ"
	},
	"26412": {
		"joyo_kanji": "本",
		"yomi": {
			"on_yomi": [
				"ホン"
			],
			"kun_yomi": [
				"もと"
			]
		},
		"raw_info": "本\t\t5\t1\t\tホン、もと"
	},
	"26413": {
		"joyo_kanji": "札",
		"yomi": {
			"on_yomi": [
				"サツ"
			],
			"kun_yomi": [
				"ふだ"
			]
		},
		"raw_info": "札\t\t5\t4\t\tサツ、ふだ"
	},
	"26417": {
		"joyo_kanji": "朱",
		"yomi": {
			"on_yomi": [
				"シュ"
			]
		},
		"raw_info": "朱\t\t6\t7S\t\tシュ"
	},
	"26420": {
		"joyo_kanji": "朴",
		"yomi": {
			"on_yomi": [
				"ボク"
			]
		},
		"raw_info": "朴\t\t6\t7S\t1981\tボク"
	},
	"26426": {
		"joyo_kanji": "机",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"つくえ"
			]
		},
		"raw_info": "机\t\t6\t6\t\tキ、つくえ"
	},
	"26429": {
		"joyo_kanji": "朽",
		"yomi": {
			"on_yomi": [
				"キュウ"
			],
			"kun_yomi": [
				"く"
			],
			"example_yomi": [
				"く-ちる"
			]
		},
		"raw_info": "朽\t\t6\t7S\t\tキュウ、く-ちる"
	},
	"26441": {
		"joyo_kanji": "杉",
		"yomi": {
			"kun_yomi": [
				"すぎ"
			]
		},
		"raw_info": "杉\t\t7\t7S\t1981\tすぎ"
	},
	"26448": {
		"joyo_kanji": "材",
		"yomi": {
			"on_yomi": [
				"ザイ"
			]
		},
		"raw_info": "材\t\t7\t4\t\tザイ"
	},
	"26449": {
		"joyo_kanji": "村",
		"yomi": {
			"on_yomi": [
				"ソン"
			],
			"kun_yomi": [
				"むら"
			]
		},
		"raw_info": "村\t\t7\t1\t\tソン、むら"
	},
	"26463": {
		"joyo_kanji": "束",
		"yomi": {
			"on_yomi": [
				"ソク"
			],
			"kun_yomi": [
				"たば"
			]
		},
		"raw_info": "束\t\t7\t4\t\tソク、たば"
	},
	"26465": {
		"joyo_kanji": "条",
		"kyu_jitai": "條",
		"yomi": {
			"on_yomi": [
				"ジョウ"
			]
		},
		"raw_info": "条\t條\t7\t5\t\tジョウ"
	},
	"26469": {
		"joyo_kanji": "来",
		"kyu_jitai": "來",
		"yomi": {
			"on_yomi": [
				"ライ"
			],
			"kun_yomi": [
				"く",
				"きた"
			],
			"example_yomi": [
				"く-る",
				"きた-る",
				"きた-す"
			]
		},
		"raw_info": "来\t來\t7\t2\t\tライ、く-る、きた-る、きた-す"
	},
	"26479": {
		"joyo_kanji": "杯",
		"yomi": {
			"on_yomi": [
				"ハイ"
			],
			"kun_yomi": [
				"さかずき"
			]
		},
		"raw_info": "杯\t\t8\t7S\t\tハイ、さかずき"
	},
	"26481": {
		"joyo_kanji": "東",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"ひがし"
			]
		},
		"raw_info": "東\t\t8\t2\t\tトウ、ひがし"
	},
	"26494": {
		"joyo_kanji": "松",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"まつ"
			]
		},
		"raw_info": "松\t\t8\t4\t\tショウ、まつ"
	},
	"26495": {
		"joyo_kanji": "板",
		"yomi": {
			"on_yomi": [
				"ハン",
				"バン"
			],
			"kun_yomi": [
				"いた"
			]
		},
		"raw_info": "板\t\t8\t3\t\tハン、バン、いた"
	},
	"26512": {
		"joyo_kanji": "析",
		"yomi": {
			"on_yomi": [
				"セキ"
			]
		},
		"raw_info": "析\t\t8\t7S\t\tセキ"
	},
	"26517": {
		"joyo_kanji": "枕",
		"yomi": {
			"kun_yomi": [
				"まくら"
			]
		},
		"raw_info": "枕\t\t8\t7S\t2010\tまくら"
	},
	"26519": {
		"joyo_kanji": "林",
		"yomi": {
			"on_yomi": [
				"リン"
			],
			"kun_yomi": [
				"はやし"
			]
		},
		"raw_info": "林\t\t8\t1\t\tリン、はやし"
	},
	"26522": {
		"joyo_kanji": "枚",
		"yomi": {
			"on_yomi": [
				"マイ"
			]
		},
		"raw_info": "枚\t\t8\t6\t\tマイ"
	},
	"26524": {
		"joyo_kanji": "果",
		"yomi": {
			"on_yomi": [
				"カ"
			],
			"kun_yomi": [
				"は"
			],
			"example_yomi": [
				"は-たす",
				"は-てる",
				"は-て"
			]
		},
		"raw_info": "果\t\t8\t4\t\tカ、は-たす、は-てる、は-て"
	},
	"26525": {
		"joyo_kanji": "枝",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"えだ"
			]
		},
		"raw_info": "枝\t\t8\t5\t\tシ、えだ"
	},
	"26528": {
		"joyo_kanji": "枠",
		"yomi": {
			"kun_yomi": [
				"わく"
			]
		},
		"raw_info": "枠\t\t8\t7S\t1981\tわく"
	},
	"26530": {
		"joyo_kanji": "枢",
		"kyu_jitai": "樞",
		"yomi": {
			"on_yomi": [
				"スウ"
			]
		},
		"raw_info": "枢\t樞\t8\t7S\t\tスウ"
	},
	"26543": {
		"joyo_kanji": "枯",
		"yomi": {
			"on_yomi": [
				"コ"
			],
			"kun_yomi": [
				"か"
			],
			"example_yomi": [
				"か-れる",
				"か-らす"
			]
		},
		"raw_info": "枯\t\t9\t7S\t\tコ、か-れる、か-らす"
	},
	"26550": {
		"joyo_kanji": "架",
		"yomi": {
			"on_yomi": [
				"カ"
			],
			"kun_yomi": [
				"か"
			],
			"example_yomi": [
				"か-ける",
				"か-かる"
			]
		},
		"raw_info": "架\t\t9\t7S\t\tカ、か-ける、か-かる"
	},
	"26564": {
		"joyo_kanji": "柄",
		"yomi": {
			"on_yomi": [
				"ヘイ"
			],
			"kun_yomi": [
				"がら",
				"え"
			]
		},
		"raw_info": "柄\t\t9\t7S\t\tヘイ、がら、え"
	},
	"26576": {
		"joyo_kanji": "某",
		"yomi": {
			"on_yomi": [
				"ボウ"
			]
		},
		"raw_info": "某\t\t9\t7S\t\tボウ"
	},
	"26579": {
		"joyo_kanji": "染",
		"yomi": {
			"on_yomi": [
				"セン"
			],
			"kun_yomi": [
				"し",
				"そ"
			],
			"example_yomi": [
				"そ-まる",
				"し-みる",
				"し-み",
				"そ-める"
			]
		},
		"raw_info": "染\t\t9\t6\t\tセン、そ-める、そ-まる、し-みる、し-み"
	},
	"26580": {
		"joyo_kanji": "柔",
		"yomi": {
			"on_yomi": [
				"ジュウ",
				"ニュウ"
			],
			"kun_yomi": [
				"やわ"
			],
			"example_yomi": [
				"やわ-らか",
				"やわ-らかい"
			]
		},
		"raw_info": "柔\t\t9\t7S\t\tジュウ、ニュウ、やわ-らか、やわ-らかい"
	},
	"26609": {
		"joyo_kanji": "柱",
		"yomi": {
			"on_yomi": [
				"チュウ"
			],
			"kun_yomi": [
				"はしら"
			]
		},
		"raw_info": "柱\t\t9\t3\t\tチュウ、はしら"
	},
	"26611": {
		"joyo_kanji": "柳",
		"yomi": {
			"on_yomi": [
				"リュウ"
			],
			"kun_yomi": [
				"やなぎ"
			]
		},
		"raw_info": "柳\t\t9\t7S\t\tリュウ、やなぎ"
	},
	"26613": {
		"joyo_kanji": "柵",
		"yomi": {
			"on_yomi": [
				"サク"
			]
		},
		"raw_info": "柵\t\t9\t7S\t2010\tサク"
	},
	"26619": {
		"joyo_kanji": "査",
		"yomi": {
			"on_yomi": [
				"サ"
			]
		},
		"raw_info": "査\t\t9\t5\t\tサ"
	},
	"26623": {
		"joyo_kanji": "柿",
		"yomi": {
			"kun_yomi": [
				"かき"
			]
		},
		"raw_info": "柿\t\t9\t7S\t2010\tかき"
	},
	"26627": {
		"joyo_kanji": "栃",
		"yomi": {
			"kun_yomi": [
				"とち"
			]
		},
		"raw_info": "栃\t\t9\t7S\t2010\t（とち）"
	},
	"26628": {
		"joyo_kanji": "栄",
		"kyu_jitai": "榮",
		"yomi": {
			"on_yomi": [
				"エイ"
			],
			"kun_yomi": [
				"さか",
				"は"
			],
			"example_yomi": [
				"は-える",
				"さか-える",
				"は-え"
			]
		},
		"raw_info": "栄\t榮\t9\t4\t\tエイ、さか-える、は-え、は-える"
	},
	"26643": {
		"joyo_kanji": "栓",
		"yomi": {
			"on_yomi": [
				"セン"
			]
		},
		"raw_info": "栓\t\t10\t7S\t1981\tセン"
	},
	"26657": {
		"joyo_kanji": "校",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "校\t\t10\t1\t\tコウ"
	},
	"26666": {
		"joyo_kanji": "株",
		"yomi": {
			"kun_yomi": [
				"かぶ"
			]
		},
		"raw_info": "株\t\t10\t6\t\tかぶ"
	},
	"26680": {
		"joyo_kanji": "核",
		"yomi": {
			"on_yomi": [
				"カク"
			]
		},
		"raw_info": "核\t\t10\t7S\t\tカク"
	},
	"26681": {
		"joyo_kanji": "根",
		"yomi": {
			"on_yomi": [
				"コン"
			],
			"kun_yomi": [
				"ね"
			]
		},
		"raw_info": "根\t\t10\t3\t\tコン、ね"
	},
	"26684": {
		"joyo_kanji": "格",
		"yomi": {
			"on_yomi": [
				"コウ",
				"カク"
			]
		},
		"raw_info": "格\t\t10\t5\t\tカク、（コウ）"
	},
	"26685": {
		"joyo_kanji": "栽",
		"yomi": {
			"on_yomi": [
				"サイ"
			]
		},
		"raw_info": "栽\t\t10\t7S\t\tサイ"
	},
	"26689": {
		"joyo_kanji": "桁",
		"yomi": {
			"kun_yomi": [
				"けた"
			]
		},
		"raw_info": "桁\t\t10\t7S\t2010\tけた"
	},
	"26691": {
		"joyo_kanji": "桃",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"もも"
			]
		},
		"raw_info": "桃\t\t10\t7S\t\tトウ、もも"
	},
	"26696": {
		"joyo_kanji": "案",
		"yomi": {
			"on_yomi": [
				"アン"
			]
		},
		"raw_info": "案\t\t10\t4\t\tアン"
	},
	"26705": {
		"joyo_kanji": "桑",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"くわ"
			]
		},
		"raw_info": "桑\t\t10\t7S\t\tソウ、くわ"
	},
	"26716": {
		"joyo_kanji": "桜",
		"kyu_jitai": "櫻",
		"yomi": {
			"on_yomi": [
				"オウ"
			],
			"kun_yomi": [
				"さくら"
			]
		},
		"raw_info": "桜\t櫻\t10\t5\t\tオウ、さくら"
	},
	"26719": {
		"joyo_kanji": "桟",
		"kyu_jitai": "棧",
		"yomi": {
			"on_yomi": [
				"サン"
			]
		},
		"raw_info": "桟\t棧\t10\t7S\t1981\tサン"
	},
	"26757": {
		"joyo_kanji": "梅",
		"kyu_jitai": "梅",
		"yomi": {
			"on_yomi": [
				"バイ"
			],
			"kun_yomi": [
				"うめ"
			]
		},
		"raw_info": "梅\t梅\t10\t4\t\tバイ、うめ"
	},
	"26775": {
		"joyo_kanji": "梗",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "梗\t\t11\t7S\t2010\tコウ"
	},
	"26792": {
		"joyo_kanji": "梨",
		"yomi": {
			"kun_yomi": [
				"なし"
			]
		},
		"raw_info": "梨\t\t11\t7S\t2010\tなし"
	},
	"26800": {
		"joyo_kanji": "械",
		"yomi": {
			"on_yomi": [
				"カイ"
			]
		},
		"raw_info": "械\t\t11\t4\t\tカイ"
	},
	"26820": {
		"joyo_kanji": "棄",
		"yomi": {
			"on_yomi": [
				"キ"
			]
		},
		"raw_info": "棄\t\t13\t7S\t\tキ"
	},
	"26827": {
		"joyo_kanji": "棋",
		"yomi": {
			"on_yomi": [
				"キ"
			]
		},
		"raw_info": "棋\t\t12\t7S\t\tキ"
	},
	"26834": {
		"joyo_kanji": "棒",
		"yomi": {
			"on_yomi": [
				"ボウ"
			]
		},
		"raw_info": "棒\t\t12\t6\t\tボウ"
	},
	"26842": {
		"joyo_kanji": "棚",
		"yomi": {
			"kun_yomi": [
				"たな"
			]
		},
		"raw_info": "棚\t\t12\t7S\t1981\tたな"
	},
	"26847": {
		"joyo_kanji": "棟",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"むね",
				"むな"
			]
		},
		"raw_info": "棟\t\t12\t7S\t1981\tトウ、むね、（むな）"
	},
	"26862": {
		"joyo_kanji": "森",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"もり"
			]
		},
		"raw_info": "森\t\t12\t1\t\tシン、もり"
	},
	"26874": {
		"joyo_kanji": "棺",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "棺\t\t12\t7S\t\tカン"
	},
	"26885": {
		"joyo_kanji": "椅",
		"yomi": {
			"on_yomi": [
				"イ"
			]
		},
		"raw_info": "椅\t\t12\t7S\t2010\tイ"
	},
	"26893": {
		"joyo_kanji": "植",
		"yomi": {
			"on_yomi": [
				"ショク"
			],
			"kun_yomi": [
				"う"
			],
			"example_yomi": [
				"う-える",
				"う-わる"
			]
		},
		"raw_info": "植\t\t12\t3\t\tショク、う-える、う-わる"
	},
	"26894": {
		"joyo_kanji": "椎",
		"yomi": {
			"on_yomi": [
				"ツイ"
			]
		},
		"raw_info": "椎\t\t12\t7S\t2010\tツイ"
	},
	"26908": {
		"joyo_kanji": "検",
		"kyu_jitai": "檢",
		"yomi": {
			"on_yomi": [
				"ケン"
			]
		},
		"raw_info": "検\t檢\t12\t5\t\tケン"
	},
	"26989": {
		"joyo_kanji": "業",
		"yomi": {
			"on_yomi": [
				"ギョウ",
				"ゴウ"
			],
			"kun_yomi": [
				"わざ"
			]
		},
		"raw_info": "業\t\t13\t3\t\tギョウ、ゴウ、わざ"
	},
	"26997": {
		"joyo_kanji": "極",
		"yomi": {
			"on_yomi": [
				"キョク",
				"ゴク"
			],
			"kun_yomi": [
				"きわ"
			],
			"example_yomi": [
				"きわ-める",
				"きわ-まる",
				"きわ-み"
			]
		},
		"raw_info": "極\t\t12\t4\t\tキョク、ゴク、きわ-める、きわ-まる、きわ-み"
	},
	"26999": {
		"joyo_kanji": "楷",
		"yomi": {
			"on_yomi": [
				"カイ"
			]
		},
		"raw_info": "楷\t\t13\t7S\t2010\tカイ"
	},
	"27004": {
		"joyo_kanji": "楼",
		"kyu_jitai": "樓",
		"yomi": {
			"on_yomi": [
				"ロウ"
			]
		},
		"raw_info": "楼\t樓\t13\t7S\t\tロウ"
	},
	"27005": {
		"joyo_kanji": "楽",
		"kyu_jitai": "樂",
		"yomi": {
			"on_yomi": [
				"ガク",
				"ラク"
			],
			"kun_yomi": [
				"たの"
			],
			"example_yomi": [
				"たの-しい",
				"たの-しむ"
			]
		},
		"raw_info": "楽\t樂\t13\t2\t\tガク、ラク、たの-しい、たの-しむ"
	},
	"27010": {
		"joyo_kanji": "概",
		"kyu_jitai": "槪",
		"yomi": {
			"on_yomi": [
				"ガイ"
			]
		},
		"raw_info": "概\t槪\t14\t7S\t\tガイ"
	},
	"27083": {
		"joyo_kanji": "構",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"かま"
			],
			"example_yomi": [
				"かま-える",
				"かま-う"
			]
		},
		"raw_info": "構\t\t14\t5\t\tコウ、かま-える、かま-う"
	},
	"27096": {
		"joyo_kanji": "様",
		"kyu_jitai": "樣",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			],
			"kun_yomi": [
				"さま"
			]
		},
		"raw_info": "様\t樣\t14\t3\t\tヨウ、さま"
	},
	"27133": {
		"joyo_kanji": "槽",
		"yomi": {
			"on_yomi": [
				"ソウ"
			]
		},
		"raw_info": "槽\t\t15\t7S\t1981\tソウ"
	},
	"27161": {
		"joyo_kanji": "標",
		"yomi": {
			"on_yomi": [
				"ヒョウ"
			]
		},
		"raw_info": "標\t\t15\t4\t\tヒョウ"
	},
	"27169": {
		"joyo_kanji": "模",
		"yomi": {
			"on_yomi": [
				"モ",
				"ボ"
			]
		},
		"raw_info": "模\t\t14\t6\t\tモ、ボ"
	},
	"27177": {
		"joyo_kanji": "権",
		"kyu_jitai": "權",
		"yomi": {
			"on_yomi": [
				"ケン",
				"ゴン"
			]
		},
		"raw_info": "権\t權\t15\t6\t\tケン、（ゴン）"
	},
	"27178": {
		"joyo_kanji": "横",
		"kyu_jitai": "橫",
		"yomi": {
			"on_yomi": [
				"オウ"
			],
			"kun_yomi": [
				"よこ"
			]
		},
		"raw_info": "横\t橫\t15\t3\t\tオウ、よこ"
	},
	"27193": {
		"joyo_kanji": "樹",
		"yomi": {
			"on_yomi": [
				"ジュ"
			]
		},
		"raw_info": "樹\t\t16\t6\t\tジュ"
	},
	"27211": {
		"joyo_kanji": "橋",
		"yomi": {
			"on_yomi": [
				"キョウ"
			],
			"kun_yomi": [
				"はし"
			]
		},
		"raw_info": "橋\t\t16\t3\t\tキョウ、はし"
	},
	"27231": {
		"joyo_kanji": "機",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"はた"
			]
		},
		"raw_info": "機\t\t16\t4\t\tキ、はた"
	},
	"27396": {
		"joyo_kanji": "欄",
		"kyu_jitai": "欄",
		"yomi": {
			"on_yomi": [
				"ラン"
			]
		},
		"raw_info": "欄\t欄\t20\t7S\t\tラン"
	},
	"27424": {
		"joyo_kanji": "欠",
		"kyu_jitai": "缺",
		"yomi": {
			"on_yomi": [
				"ケツ"
			],
			"kun_yomi": [
				"か"
			],
			"example_yomi": [
				"か-ける",
				"か-く"
			]
		},
		"raw_info": "欠\t缺\t4\t4\t\tケツ、か-ける、か-く"
	},
	"27425": {
		"joyo_kanji": "次",
		"yomi": {
			"on_yomi": [
				"ジ",
				"シ"
			],
			"kun_yomi": [
				"つ",
				"つぎ"
			],
			"example_yomi": [
				"つ-ぐ"
			]
		},
		"raw_info": "次\t\t6\t3\t\tジ、シ、つ-ぐ、つぎ"
	},
	"27431": {
		"joyo_kanji": "欧",
		"kyu_jitai": "歐",
		"yomi": {
			"on_yomi": [
				"オウ"
			]
		},
		"raw_info": "欧\t歐\t8\t7S\t\tオウ"
	},
	"27442": {
		"joyo_kanji": "欲",
		"kyu_jitai": "慾",
		"yomi": {
			"on_yomi": [
				"ヨク"
			],
			"kun_yomi": [
				"ほっ",
				"ほ"
			],
			"example_yomi": [
				"ほっ-する",
				"ほ-しい"
			]
		},
		"raw_info": "欲\t慾\t11\t6\t\tヨク、ほっ-する、ほ-しい"
	},
	"27450": {
		"joyo_kanji": "欺",
		"yomi": {
			"on_yomi": [
				"ギ"
			],
			"kun_yomi": [
				"あざむ"
			],
			"example_yomi": [
				"あざむ-く"
			]
		},
		"raw_info": "欺\t\t12\t7S\t\tギ、あざむ-く"
	},
	"27454": {
		"joyo_kanji": "款",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "款\t\t12\t7S\t\tカン"
	},
	"27468": {
		"joyo_kanji": "歌",
		"yomi": {
			"on_yomi": [
				"カ"
			],
			"kun_yomi": [
				"うた"
			],
			"example_yomi": [
				"うた-う"
			]
		},
		"raw_info": "歌\t\t14\t2\t\tカ、うた、うた-う"
	},
	"27475": {
		"joyo_kanji": "歓",
		"kyu_jitai": "歡",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "歓\t歡\t15\t7S\t\tカン"
	},
	"27490": {
		"joyo_kanji": "止",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"と"
			],
			"example_yomi": [
				"と-まる",
				"と-める"
			]
		},
		"raw_info": "止\t\t4\t2\t\tシ、と-まる、と-める"
	},
	"27491": {
		"joyo_kanji": "正",
		"yomi": {
			"on_yomi": [
				"セイ",
				"ショウ"
			],
			"kun_yomi": [
				"まさ",
				"ただ"
			],
			"example_yomi": [
				"ただ-しい",
				"ただ-す"
			]
		},
		"raw_info": "正\t\t5\t1\t\tセイ、ショウ、ただ-しい、ただ-す、まさ"
	},
	"27494": {
		"joyo_kanji": "武",
		"yomi": {
			"on_yomi": [
				"ブ",
				"ム"
			]
		},
		"raw_info": "武\t\t8\t5\t\tブ、ム"
	},
	"27497": {
		"joyo_kanji": "歩",
		"kyu_jitai": "步",
		"yomi": {
			"on_yomi": [
				"ブ",
				"フ",
				"ホ"
			],
			"kun_yomi": [
				"ある",
				"あゆ"
			],
			"example_yomi": [
				"ある-く",
				"あゆ-む"
			]
		},
		"raw_info": "歩\t步\t8\t2\t\tホ、ブ、（フ）、ある-く、あゆ-む"
	},
	"27503": {
		"joyo_kanji": "歯",
		"kyu_jitai": "齒",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"は"
			]
		},
		"raw_info": "歯\t齒\t12\t3\t\tシ、は"
	},
	"27507": {
		"joyo_kanji": "歳",
		"yomi": {
			"on_yomi": [
				"サイ",
				"セイ"
			]
		},
		"raw_info": "歳\t\t13\t7S\t\tサイ、（セイ）"
	},
	"27508": {
		"joyo_kanji": "歴",
		"kyu_jitai": "歷",
		"yomi": {
			"on_yomi": [
				"レキ"
			]
		},
		"raw_info": "歴\t歷\t14\t4\t\tレキ"
	},
	"27515": {
		"joyo_kanji": "死",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"し"
			],
			"example_yomi": [
				"し-ぬ"
			]
		},
		"raw_info": "死\t\t6\t3\t\tシ、し-ぬ"
	},
	"27529": {
		"joyo_kanji": "殉",
		"yomi": {
			"on_yomi": [
				"ジュン"
			]
		},
		"raw_info": "殉\t\t10\t7S\t\tジュン"
	},
	"27530": {
		"joyo_kanji": "殊",
		"yomi": {
			"on_yomi": [
				"シュ"
			],
			"kun_yomi": [
				"こと"
			]
		},
		"raw_info": "殊\t\t10\t7S\t\tシュ、こと"
	},
	"27531": {
		"joyo_kanji": "残",
		"kyu_jitai": "殘",
		"yomi": {
			"on_yomi": [
				"ザン"
			],
			"kun_yomi": [
				"のこ"
			],
			"example_yomi": [
				"のこ-す",
				"のこ-る"
			]
		},
		"raw_info": "残\t殘\t10\t4\t\tザン、のこ-る、のこ-す"
	},
	"27542": {
		"joyo_kanji": "殖",
		"yomi": {
			"on_yomi": [
				"ショク"
			],
			"kun_yomi": [
				"ふ"
			],
			"example_yomi": [
				"ふ-える",
				"ふ-やす"
			]
		},
		"raw_info": "殖\t\t12\t7S\t\tショク、ふ-える、ふ-やす"
	},
	"27572": {
		"joyo_kanji": "殴",
		"kyu_jitai": "毆",
		"yomi": {
			"on_yomi": [
				"オウ"
			],
			"kun_yomi": [
				"なぐ"
			],
			"example_yomi": [
				"なぐ-る"
			]
		},
		"raw_info": "殴\t毆\t8\t7S\t\tオウ、なぐ-る"
	},
	"27573": {
		"joyo_kanji": "段",
		"yomi": {
			"on_yomi": [
				"ダン"
			]
		},
		"raw_info": "段\t\t9\t6\t\tダン"
	},
	"27578": {
		"joyo_kanji": "殺",
		"kyu_jitai": "殺",
		"yomi": {
			"on_yomi": [
				"サツ",
				"サイ",
				"セツ"
			],
			"kun_yomi": [
				"ころ"
			],
			"example_yomi": [
				"ころ-す"
			]
		},
		"raw_info": "殺\t殺\t10\t4\t\tサツ、（サイ）、（セツ）、ころ-す"
	},
	"27579": {
		"joyo_kanji": "殻",
		"kyu_jitai": "殼",
		"yomi": {
			"on_yomi": [
				"カク"
			],
			"kun_yomi": [
				"から"
			]
		},
		"raw_info": "殻\t殼\t11\t7S\t1981\tカク、から"
	},
	"27583": {
		"joyo_kanji": "殿",
		"yomi": {
			"on_yomi": [
				"デン",
				"テン"
			],
			"kun_yomi": [
				"との",
				"どの"
			]
		},
		"raw_info": "殿\t\t13\t7S\t\tデン、テン、との、どの"
	},
	"27584": {
		"joyo_kanji": "毀",
		"yomi": {
			"on_yomi": [
				"キ"
			]
		},
		"raw_info": "毀\t\t13\t7S\t2010\tキ"
	},
	"27597": {
		"joyo_kanji": "母",
		"yomi": {
			"on_yomi": [
				"ボ"
			],
			"kun_yomi": [
				"はは"
			]
		},
		"raw_info": "母\t\t5\t2\t\tボ、はは"
	},
	"27598": {
		"joyo_kanji": "毎",
		"kyu_jitai": "每",
		"yomi": {
			"on_yomi": [
				"マイ"
			]
		},
		"raw_info": "毎\t每\t6\t2\t\tマイ"
	},
	"27602": {
		"joyo_kanji": "毒",
		"yomi": {
			"on_yomi": [
				"ドク"
			]
		},
		"raw_info": "毒\t\t8\t4\t\tドク"
	},
	"27604": {
		"joyo_kanji": "比",
		"yomi": {
			"on_yomi": [
				"ヒ"
			],
			"kun_yomi": [
				"くら"
			],
			"example_yomi": [
				"くら-べる"
			]
		},
		"raw_info": "比\t\t4\t5\t\tヒ、くら-べる"
	},
	"27611": {
		"joyo_kanji": "毛",
		"yomi": {
			"on_yomi": [
				"モウ"
			],
			"kun_yomi": [
				"け"
			]
		},
		"raw_info": "毛\t\t4\t2\t\tモウ、け"
	},
	"27663": {
		"joyo_kanji": "氏",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"うじ"
			]
		},
		"raw_info": "氏\t\t4\t4\t\tシ、うじ"
	},
	"27665": {
		"joyo_kanji": "民",
		"yomi": {
			"on_yomi": [
				"ミン"
			],
			"kun_yomi": [
				"たみ"
			]
		},
		"raw_info": "民\t\t5\t4\t\tミン、たみ"
	},
	"27671": {
		"joyo_kanji": "気",
		"kyu_jitai": "氣",
		"yomi": {
			"on_yomi": [
				"キ",
				"ケ"
			]
		},
		"raw_info": "気\t氣\t6\t1\t\tキ、ケ"
	},
	"27700": {
		"joyo_kanji": "水",
		"yomi": {
			"on_yomi": [
				"スイ"
			],
			"kun_yomi": [
				"みず"
			]
		},
		"raw_info": "水\t\t4\t1\t\tスイ、みず"
	},
	"27703": {
		"joyo_kanji": "氷",
		"yomi": {
			"on_yomi": [
				"ヒョウ"
			],
			"kun_yomi": [
				"こおり",
				"ひ"
			]
		},
		"raw_info": "氷\t\t5\t3\t\tヒョウ、こおり、ひ"
	},
	"27704": {
		"joyo_kanji": "永",
		"yomi": {
			"on_yomi": [
				"エイ"
			],
			"kun_yomi": [
				"なが"
			],
			"example_yomi": [
				"なが-い"
			]
		},
		"raw_info": "永\t\t5\t5\t\tエイ、なが-い"
	},
	"27710": {
		"joyo_kanji": "氾",
		"yomi": {
			"on_yomi": [
				"ハン"
			]
		},
		"raw_info": "氾\t\t5\t7S\t2010\tハン"
	},
	"27713": {
		"joyo_kanji": "汁",
		"yomi": {
			"on_yomi": [
				"ジュウ"
			],
			"kun_yomi": [
				"しる"
			]
		},
		"raw_info": "汁\t\t5\t7S\t1981\tジュウ、しる"
	},
	"27714": {
		"joyo_kanji": "求",
		"yomi": {
			"on_yomi": [
				"キュウ"
			],
			"kun_yomi": [
				"もと"
			],
			"example_yomi": [
				"もと-める"
			]
		},
		"raw_info": "求\t\t7\t4\t\tキュウ、もと-める"
	},
	"27726": {
		"joyo_kanji": "汎",
		"yomi": {
			"on_yomi": [
				"ハン"
			]
		},
		"raw_info": "汎\t\t6\t7S\t2010\tハン"
	},
	"27735": {
		"joyo_kanji": "汗",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"あせ"
			]
		},
		"raw_info": "汗\t\t6\t7S\t\tカン、あせ"
	},
	"27738": {
		"joyo_kanji": "汚",
		"yomi": {
			"on_yomi": [
				"オ"
			],
			"kun_yomi": [
				"けが",
				"よご",
				"きたな"
			],
			"example_yomi": [
				"けが-らわしい",
				"よご-す",
				"よご-れる",
				"きたな-い",
				"けが-す",
				"けが-れる"
			]
		},
		"raw_info": "汚\t\t6\t7S\t\tオ、けが-す、けが-れる、けが-らわしい、よご-す、よご-れる、きたな-い"
	},
	"27743": {
		"joyo_kanji": "江",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"え"
			]
		},
		"raw_info": "江\t\t6\t7S\t\tコウ、え"
	},
	"27744": {
		"joyo_kanji": "池",
		"yomi": {
			"on_yomi": [
				"チ"
			],
			"kun_yomi": [
				"いけ"
			]
		},
		"raw_info": "池\t\t6\t2\t\tチ、いけ"
	},
	"27760": {
		"joyo_kanji": "汰",
		"yomi": {
			"on_yomi": [
				"タ"
			]
		},
		"raw_info": "汰\t\t7\t7S\t2010\tタ"
	},
	"27770": {
		"joyo_kanji": "決",
		"yomi": {
			"on_yomi": [
				"ケツ"
			],
			"kun_yomi": [
				"き"
			],
			"example_yomi": [
				"き-める",
				"き-まる"
			]
		},
		"raw_info": "決\t\t7\t3\t\tケツ、き-める、き-まる"
	},
	"27773": {
		"joyo_kanji": "汽",
		"yomi": {
			"on_yomi": [
				"キ"
			]
		},
		"raw_info": "汽\t\t7\t2\t\tキ"
	},
	"27779": {
		"joyo_kanji": "沃",
		"yomi": {
			"on_yomi": [
				"ヨク"
			]
		},
		"raw_info": "沃\t\t7\t7S\t2010\tヨク"
	},
	"27784": {
		"joyo_kanji": "沈",
		"yomi": {
			"on_yomi": [
				"チン"
			],
			"kun_yomi": [
				"しず"
			],
			"example_yomi": [
				"しず-む",
				"しず-める"
			]
		},
		"raw_info": "沈\t\t7\t7S\t\tチン、しず-む、しず-める"
	},
	"27798": {
		"joyo_kanji": "沖",
		"yomi": {
			"on_yomi": [
				"チュウ"
			],
			"kun_yomi": [
				"おき"
			]
		},
		"raw_info": "沖\t\t7\t7S\t\tチュウ、おき"
	},
	"27801": {
		"joyo_kanji": "沙",
		"yomi": {
			"on_yomi": [
				"サ"
			]
		},
		"raw_info": "沙\t\t7\t7S\t2010\tサ"
	},
	"27809": {
		"joyo_kanji": "没",
		"kyu_jitai": "沒",
		"yomi": {
			"on_yomi": [
				"ボツ"
			]
		},
		"raw_info": "没\t沒\t7\t7S\t\tボツ"
	},
	"27810": {
		"joyo_kanji": "沢",
		"kyu_jitai": "澤",
		"yomi": {
			"on_yomi": [
				"タク"
			],
			"kun_yomi": [
				"さわ"
			]
		},
		"raw_info": "沢\t澤\t7\t7S\t\tタク、さわ"
	},
	"27827": {
		"joyo_kanji": "河",
		"yomi": {
			"on_yomi": [
				"カ"
			],
			"kun_yomi": [
				"かわ"
			]
		},
		"raw_info": "河\t\t8\t5\t\tカ、かわ"
	},
	"27832": {
		"joyo_kanji": "沸",
		"yomi": {
			"on_yomi": [
				"フツ"
			],
			"kun_yomi": [
				"わ"
			],
			"example_yomi": [
				"わ-く",
				"わ-かす"
			]
		},
		"raw_info": "沸\t\t8\t7S\t\tフツ、わ-く、わ-かす"
	},
	"27833": {
		"joyo_kanji": "油",
		"yomi": {
			"on_yomi": [
				"ユ"
			],
			"kun_yomi": [
				"あぶら"
			]
		},
		"raw_info": "油\t\t8\t3\t\tユ、あぶら"
	},
	"27835": {
		"joyo_kanji": "治",
		"yomi": {
			"on_yomi": [
				"ジ",
				"チ"
			],
			"kun_yomi": [
				"おさ",
				"なお"
			],
			"example_yomi": [
				"なお-る",
				"なお-す",
				"おさ-める",
				"おさ-まる"
			]
		},
		"raw_info": "治\t\t8\t4\t\tジ、チ、おさ-める、おさ-まる、なお-る、なお-す"
	},
	"27836": {
		"joyo_kanji": "沼",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"ぬま"
			]
		},
		"raw_info": "沼\t\t8\t7S\t\tショウ、ぬま"
	},
	"27839": {
		"joyo_kanji": "沿",
		"yomi": {
			"on_yomi": [
				"エン"
			],
			"kun_yomi": [
				"そ"
			],
			"example_yomi": [
				"そ-う"
			]
		},
		"raw_info": "沿\t\t8\t6\t\tエン、そ-う"
	},
	"27841": {
		"joyo_kanji": "況",
		"yomi": {
			"on_yomi": [
				"キョウ"
			]
		},
		"raw_info": "況\t\t8\t7S\t\tキョウ"
	},
	"27849": {
		"joyo_kanji": "泉",
		"yomi": {
			"on_yomi": [
				"セン"
			],
			"kun_yomi": [
				"いずみ"
			]
		},
		"raw_info": "泉\t\t9\t6\t\tセン、いずみ"
	},
	"27850": {
		"joyo_kanji": "泊",
		"yomi": {
			"on_yomi": [
				"ハク"
			],
			"kun_yomi": [
				"と"
			],
			"example_yomi": [
				"と-まる",
				"と-める"
			]
		},
		"raw_info": "泊\t\t8\t7S\t\tハク、と-まる、と-める"
	},
	"27852": {
		"joyo_kanji": "泌",
		"yomi": {
			"on_yomi": [
				"ヒ",
				"ヒツ"
			]
		},
		"raw_info": "泌\t\t8\t7S\t\tヒツ、ヒ"
	},
	"27861": {
		"joyo_kanji": "法",
		"yomi": {
			"on_yomi": [
				"ホウ",
				"ハッ",
				"ホッ"
			]
		},
		"raw_info": "法\t\t8\t4\t\tホウ、（ハッ）、（ホッ）"
	},
	"27873": {
		"joyo_kanji": "泡",
		"yomi": {
			"on_yomi": [
				"ホウ"
			],
			"kun_yomi": [
				"あわ"
			]
		},
		"raw_info": "泡\t\t8\t7S\t1981\tホウ、あわ"
	},
	"27874": {
		"joyo_kanji": "波",
		"yomi": {
			"on_yomi": [
				"ハ"
			],
			"kun_yomi": [
				"なみ"
			]
		},
		"raw_info": "波\t\t8\t3\t\tハ、なみ"
	},
	"27875": {
		"joyo_kanji": "泣",
		"yomi": {
			"on_yomi": [
				"キュウ"
			],
			"kun_yomi": [
				"な"
			],
			"example_yomi": [
				"な-く"
			]
		},
		"raw_info": "泣\t\t8\t4\t\tキュウ、な-く"
	},
	"27877": {
		"joyo_kanji": "泥",
		"yomi": {
			"on_yomi": [
				"デイ"
			],
			"kun_yomi": [
				"どろ"
			]
		},
		"raw_info": "泥\t\t8\t7S\t1981\tデイ、どろ"
	},
	"27880": {
		"joyo_kanji": "注",
		"yomi": {
			"on_yomi": [
				"チュウ"
			],
			"kun_yomi": [
				"そそ"
			],
			"example_yomi": [
				"そそ-ぐ"
			]
		},
		"raw_info": "注\t\t8\t3\t\tチュウ、そそ-ぐ"
	},
	"27888": {
		"joyo_kanji": "泰",
		"yomi": {
			"on_yomi": [
				"タイ"
			]
		},
		"raw_info": "泰\t\t10\t7S\t\tタイ"
	},
	"27891": {
		"joyo_kanji": "泳",
		"yomi": {
			"on_yomi": [
				"エイ"
			],
			"kun_yomi": [
				"およ"
			],
			"example_yomi": [
				"およ-ぐ"
			]
		},
		"raw_info": "泳\t\t8\t3\t\tエイ、およ-ぐ"
	},
	"27915": {
		"joyo_kanji": "洋",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			]
		},
		"raw_info": "洋\t\t9\t3\t\tヨウ"
	},
	"27927": {
		"joyo_kanji": "洗",
		"yomi": {
			"on_yomi": [
				"セン"
			],
			"kun_yomi": [
				"あら"
			],
			"example_yomi": [
				"あら-う"
			]
		},
		"raw_info": "洗\t\t9\t6\t\tセン、あら-う"
	},
	"27934": {
		"joyo_kanji": "洞",
		"yomi": {
			"on_yomi": [
				"ドウ"
			],
			"kun_yomi": [
				"ほら"
			]
		},
		"raw_info": "洞\t\t9\t7S\t1981\tドウ、ほら"
	},
	"27941": {
		"joyo_kanji": "津",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"つ"
			]
		},
		"raw_info": "津\t\t9\t7S\t\tシン、つ"
	},
	"27946": {
		"joyo_kanji": "洪",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "洪\t\t9\t7S\t1981\tコウ"
	},
	"27963": {
		"joyo_kanji": "活",
		"yomi": {
			"on_yomi": [
				"カツ"
			]
		},
		"raw_info": "活\t\t9\t2\t\tカツ"
	},
	"27966": {
		"joyo_kanji": "派",
		"yomi": {
			"on_yomi": [
				"ハ"
			]
		},
		"raw_info": "派\t\t9\t6\t\tハ"
	},
	"27969": {
		"joyo_kanji": "流",
		"yomi": {
			"on_yomi": [
				"リュウ",
				"ル"
			],
			"kun_yomi": [
				"なが"
			],
			"example_yomi": [
				"なが-れる",
				"なが-す"
			]
		},
		"raw_info": "流\t\t10\t3\t\tリュウ、（ル）、なが-れる、なが-す"
	},
	"27972": {
		"joyo_kanji": "浄",
		"kyu_jitai": "淨",
		"yomi": {
			"on_yomi": [
				"ジョウ"
			]
		},
		"raw_info": "浄\t淨\t9\t7S\t\tジョウ"
	},
	"27973": {
		"joyo_kanji": "浅",
		"kyu_jitai": "淺",
		"yomi": {
			"on_yomi": [
				"セン"
			],
			"kun_yomi": [
				"あさ"
			],
			"example_yomi": [
				"あさ-い"
			]
		},
		"raw_info": "浅\t淺\t9\t4\t\tセン、あさ-い"
	},
	"27996": {
		"joyo_kanji": "浜",
		"kyu_jitai": "濱",
		"yomi": {
			"on_yomi": [
				"ヒン"
			],
			"kun_yomi": [
				"はま"
			]
		},
		"raw_info": "浜\t濱\t10\t7S\t\tヒン、はま"
	},
	"28006": {
		"joyo_kanji": "浦",
		"yomi": {
			"kun_yomi": [
				"うら"
			]
		},
		"raw_info": "浦\t\t10\t7S\t\tうら"
	},
	"28010": {
		"joyo_kanji": "浪",
		"yomi": {
			"on_yomi": [
				"ロウ"
			]
		},
		"raw_info": "浪\t\t10\t7S\t\tロウ"
	},
	"28014": {
		"joyo_kanji": "浮",
		"yomi": {
			"on_yomi": [
				"フ"
			],
			"kun_yomi": [
				"う"
			],
			"example_yomi": [
				"う-かべる",
				"う-く",
				"う-かれる",
				"う-かぶ"
			]
		},
		"raw_info": "浮\t\t10\t7S\t\tフ、う-く、う-かれる、う-かぶ、う-かべる"
	},
	"28020": {
		"joyo_kanji": "浴",
		"yomi": {
			"on_yomi": [
				"ヨク"
			],
			"kun_yomi": [
				"あ"
			],
			"example_yomi": [
				"あ-びる",
				"あ-びせる"
			]
		},
		"raw_info": "浴\t\t10\t4\t\tヨク、あ-びる、あ-びせる"
	},
	"28023": {
		"joyo_kanji": "海",
		"kyu_jitai": "海",
		"yomi": {
			"on_yomi": [
				"カイ"
			],
			"kun_yomi": [
				"うみ"
			]
		},
		"raw_info": "海\t海\t9\t2\t\tカイ、うみ"
	},
	"28024": {
		"joyo_kanji": "浸",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"ひた"
			],
			"example_yomi": [
				"ひた-す",
				"ひた-る"
			]
		},
		"raw_info": "浸\t\t10\t7S\t\tシン、ひた-す、ひた-る"
	},
	"28040": {
		"joyo_kanji": "消",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"き",
				"け"
			],
			"example_yomi": [
				"き-える",
				"け-す"
			]
		},
		"raw_info": "消\t\t10\t3\t\tショウ、き-える、け-す"
	},
	"28057": {
		"joyo_kanji": "涙",
		"kyu_jitai": "淚",
		"yomi": {
			"on_yomi": [
				"ルイ"
			],
			"kun_yomi": [
				"なみだ"
			]
		},
		"raw_info": "涙\t淚\t10\t7S\t\tルイ、なみだ"
	},
	"28079": {
		"joyo_kanji": "涯",
		"yomi": {
			"on_yomi": [
				"ガイ"
			]
		},
		"raw_info": "涯\t\t11\t7S\t1981\tガイ"
	},
	"28082": {
		"joyo_kanji": "液",
		"yomi": {
			"on_yomi": [
				"エキ"
			]
		},
		"raw_info": "液\t\t11\t5\t\tエキ"
	},
	"28092": {
		"joyo_kanji": "涼",
		"yomi": {
			"on_yomi": [
				"リョウ"
			],
			"kun_yomi": [
				"すず"
			],
			"example_yomi": [
				"すず-しい",
				"すず-む"
			]
		},
		"raw_info": "涼\t\t11\t7S\t\tリョウ、すず-しい、すず-む"
	},
	"28113": {
		"joyo_kanji": "淑",
		"yomi": {
			"on_yomi": [
				"シュク"
			]
		},
		"raw_info": "淑\t\t11\t7S\t\tシュク"
	},
	"28129": {
		"joyo_kanji": "淡",
		"yomi": {
			"on_yomi": [
				"タン"
			],
			"kun_yomi": [
				"あわ"
			],
			"example_yomi": [
				"あわ-い"
			]
		},
		"raw_info": "淡\t\t11\t7S\t\tタン、あわ-い"
	},
	"28139": {
		"joyo_kanji": "淫",
		"yomi": {
			"on_yomi": [
				"イン"
			],
			"kun_yomi": [
				"みだ"
			],
			"example_yomi": [
				"みだ-ら"
			]
		},
		"raw_info": "淫\t\t11\t7S\t2010\tイン、みだ-ら"
	},
	"28145": {
		"joyo_kanji": "深",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"ふか"
			],
			"example_yomi": [
				"ふか-い",
				"ふか-まる",
				"ふか-める"
			]
		},
		"raw_info": "深\t\t11\t3\t\tシン、ふか-い、ふか-まる、ふか-める"
	},
	"28151": {
		"joyo_kanji": "混",
		"yomi": {
			"on_yomi": [
				"コン"
			],
			"kun_yomi": [
				"ま",
				"こ"
			],
			"example_yomi": [
				"ま-じる",
				"ま-ざる",
				"ま-ぜる",
				"こ-む"
			]
		},
		"raw_info": "混\t\t11\t5\t\tコン、ま-じる、ま-ざる、ま-ぜる、こ-む"
	},
	"28155": {
		"joyo_kanji": "添",
		"yomi": {
			"on_yomi": [
				"テン"
			],
			"kun_yomi": [
				"そ"
			],
			"example_yomi": [
				"そ-う",
				"そ-える"
			]
		},
		"raw_info": "添\t\t11\t7S\t\tテン、そ-える、そ-う"
	},
	"28165": {
		"joyo_kanji": "清",
		"kyu_jitai": "淸",
		"yomi": {
			"on_yomi": [
				"セイ",
				"ショウ"
			],
			"kun_yomi": [
				"きよ"
			],
			"example_yomi": [
				"きよ-い",
				"きよ-まる",
				"きよ-める"
			]
		},
		"raw_info": "清\t淸\t11\t4\t\tセイ、（ショウ）、きよ-い、きよ-まる、きよ-める"
	},
	"28167": {
		"joyo_kanji": "渇",
		"kyu_jitai": "渴",
		"yomi": {
			"on_yomi": [
				"カツ"
			],
			"kun_yomi": [
				"かわ"
			],
			"example_yomi": [
				"かわ-く"
			]
		},
		"raw_info": "渇\t渴\t11\t7S\t\tカツ、かわ-く"
	},
	"28168": {
		"joyo_kanji": "済",
		"kyu_jitai": "濟",
		"yomi": {
			"on_yomi": [
				"サイ"
			],
			"kun_yomi": [
				"す"
			],
			"example_yomi": [
				"す-む",
				"す-ます"
			]
		},
		"raw_info": "済\t濟\t11\t6\t\tサイ、す-む、す-ます"
	},
	"28169": {
		"joyo_kanji": "渉",
		"kyu_jitai": "涉",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "渉\t涉\t11\t7S\t\tショウ"
	},
	"28171": {
		"joyo_kanji": "渋",
		"kyu_jitai": "澁",
		"yomi": {
			"on_yomi": [
				"ジュウ"
			],
			"kun_yomi": [
				"しぶ"
			],
			"example_yomi": [
				"しぶ-い",
				"しぶ-る"
			]
		},
		"raw_info": "渋\t澁\t11\t7S\t\tジュウ、しぶ、しぶ-い、しぶ-る"
	},
	"28179": {
		"joyo_kanji": "渓",
		"kyu_jitai": "溪",
		"yomi": {
			"on_yomi": [
				"ケイ"
			]
		},
		"raw_info": "渓\t溪\t11\t7S\t1981\tケイ"
	},
	"28187": {
		"joyo_kanji": "減",
		"yomi": {
			"on_yomi": [
				"ゲン"
			],
			"kun_yomi": [
				"へ"
			],
			"example_yomi": [
				"へ-る",
				"へ-らす"
			]
		},
		"raw_info": "減\t\t12\t5\t\tゲン、へ-る、へ-らす"
	},
	"28193": {
		"joyo_kanji": "渡",
		"yomi": {
			"on_yomi": [
				"ト"
			],
			"kun_yomi": [
				"わた"
			],
			"example_yomi": [
				"わた-る",
				"わた-す"
			]
		},
		"raw_info": "渡\t\t12\t7S\t\tト、わた-る、わた-す"
	},
	"28198": {
		"joyo_kanji": "渦",
		"yomi": {
			"on_yomi": [
				"カ"
			],
			"kun_yomi": [
				"うず"
			]
		},
		"raw_info": "渦\t\t12\t7S\t1981\tカ、うず"
	},
	"28201": {
		"joyo_kanji": "温",
		"kyu_jitai": "溫",
		"yomi": {
			"on_yomi": [
				"オン"
			],
			"kun_yomi": [
				"あたた"
			],
			"example_yomi": [
				"あたた-まる",
				"あたた-める",
				"あたた-か",
				"あたた-かい"
			]
		},
		"raw_info": "温\t溫\t12\t3\t\tオン、あたた-か、あたた-かい、あたた-まる、あたた-める"
	},
	"28204": {
		"joyo_kanji": "測",
		"yomi": {
			"on_yomi": [
				"ソク"
			],
			"kun_yomi": [
				"はか"
			],
			"example_yomi": [
				"はか-る"
			]
		},
		"raw_info": "測\t\t12\t5\t\tソク、はか-る"
	},
	"28207": {
		"joyo_kanji": "港",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"みなと"
			]
		},
		"raw_info": "港\t\t12\t3\t\tコウ、みなと"
	},
	"28246": {
		"joyo_kanji": "湖",
		"yomi": {
			"on_yomi": [
				"コ"
			],
			"kun_yomi": [
				"みずうみ"
			]
		},
		"raw_info": "湖\t\t12\t3\t\tコ、みずうみ"
	},
	"28263": {
		"joyo_kanji": "湧",
		"yomi": {
			"on_yomi": [
				"ユウ"
			],
			"kun_yomi": [
				"わ"
			],
			"example_yomi": [
				"わ-く"
			]
		},
		"raw_info": "湧\t\t12\t7S\t2010\tユウ、わ-く"
	},
	"28271": {
		"joyo_kanji": "湯",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"ゆ"
			]
		},
		"raw_info": "湯\t\t12\t3\t\tトウ、ゆ"
	},
	"28286": {
		"joyo_kanji": "湾",
		"kyu_jitai": "灣",
		"yomi": {
			"on_yomi": [
				"ワン"
			]
		},
		"raw_info": "湾\t灣\t12\t7S\t\tワン"
	},
	"28287": {
		"joyo_kanji": "湿",
		"kyu_jitai": "濕",
		"yomi": {
			"on_yomi": [
				"シツ"
			],
			"kun_yomi": [
				"しめ"
			],
			"example_yomi": [
				"しめ-す",
				"しめ-る"
			]
		},
		"raw_info": "湿\t濕\t12\t7S\t\tシツ、しめ-る、しめ-す"
	},
	"28288": {
		"joyo_kanji": "満",
		"kyu_jitai": "滿",
		"yomi": {
			"on_yomi": [
				"マン"
			],
			"kun_yomi": [
				"み"
			],
			"example_yomi": [
				"み-ちる",
				"み-たす"
			]
		},
		"raw_info": "満\t滿\t12\t4\t\tマン、み-ちる、み-たす"
	},
	"28304": {
		"joyo_kanji": "源",
		"yomi": {
			"on_yomi": [
				"ゲン"
			],
			"kun_yomi": [
				"みなもと"
			]
		},
		"raw_info": "源\t\t13\t6\t\tゲン、みなもと"
	},
	"28310": {
		"joyo_kanji": "準",
		"yomi": {
			"on_yomi": [
				"ジュン"
			]
		},
		"raw_info": "準\t\t13\t5\t\tジュン"
	},
	"28317": {
		"joyo_kanji": "溝",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"みぞ"
			]
		},
		"raw_info": "溝\t\t13\t7S\t1981\tコウ、みぞ"
	},
	"28342": {
		"joyo_kanji": "溶",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			],
			"kun_yomi": [
				"と"
			],
			"example_yomi": [
				"と-かす",
				"と-く",
				"と-ける"
			]
		},
		"raw_info": "溶\t\t13\t7S\t\tヨウ、と-ける、と-かす、と-く"
	},
	"28346": {
		"joyo_kanji": "溺",
		"yomi": {
			"on_yomi": [
				"デキ"
			],
			"kun_yomi": [
				"おぼ"
			],
			"example_yomi": [
				"おぼ-れる"
			]
		},
		"raw_info": "溺\t\t13\t7S\t2010\tデキ、おぼ-れる"
	},
	"28357": {
		"joyo_kanji": "滅",
		"yomi": {
			"on_yomi": [
				"メツ"
			],
			"kun_yomi": [
				"ほろ"
			],
			"example_yomi": [
				"ほろ-びる",
				"ほろ-ぼす"
			]
		},
		"raw_info": "滅\t\t13\t7S\t\tメツ、ほろ-びる、ほろ-ぼす"
	},
	"28363": {
		"joyo_kanji": "滋",
		"yomi": {
			"on_yomi": [
				"ジ"
			]
		},
		"raw_info": "滋\t\t12\t7S\t\tジ"
	},
	"28369": {
		"joyo_kanji": "滑",
		"yomi": {
			"on_yomi": [
				"カツ",
				"コツ"
			],
			"kun_yomi": [
				"すべ",
				"なめ"
			],
			"example_yomi": [
				"すべ-る",
				"なめ-らか"
			]
		},
		"raw_info": "滑\t\t13\t7S\t\tカツ、コツ、すべ-る、なめ-らか"
	},
	"28381": {
		"joyo_kanji": "滝",
		"kyu_jitai": "瀧",
		"yomi": {
			"kun_yomi": [
				"たき"
			]
		},
		"raw_info": "滝\t瀧\t13\t7S\t\tたき"
	},
	"28382": {
		"joyo_kanji": "滞",
		"kyu_jitai": "滯",
		"yomi": {
			"on_yomi": [
				"タイ"
			],
			"kun_yomi": [
				"とどこお"
			],
			"example_yomi": [
				"とどこお-る"
			]
		},
		"raw_info": "滞\t滯\t13\t7S\t\tタイ、とどこお-る"
	},
	"28404": {
		"joyo_kanji": "滴",
		"yomi": {
			"on_yomi": [
				"テキ"
			],
			"kun_yomi": [
				"しずく",
				"したた"
			],
			"example_yomi": [
				"したた-る"
			]
		},
		"raw_info": "滴\t\t14\t7S\t\tテキ、しずく、したた-る"
	},
	"28417": {
		"joyo_kanji": "漁",
		"yomi": {
			"on_yomi": [
				"ギョ",
				"リョウ"
			]
		},
		"raw_info": "漁\t\t14\t4\t\tギョ、リョウ"
	},
	"28418": {
		"joyo_kanji": "漂",
		"yomi": {
			"on_yomi": [
				"ヒョウ"
			],
			"kun_yomi": [
				"ただよ"
			],
			"example_yomi": [
				"ただよ-う"
			]
		},
		"raw_info": "漂\t\t14\t7S\t\tヒョウ、ただよ-う"
	},
	"28422": {
		"joyo_kanji": "漆",
		"yomi": {
			"on_yomi": [
				"シツ"
			],
			"kun_yomi": [
				"うるし"
			]
		},
		"raw_info": "漆\t\t14\t7S\t\tシツ、うるし"
	},
	"28431": {
		"joyo_kanji": "漏",
		"yomi": {
			"on_yomi": [
				"ロウ"
			],
			"kun_yomi": [
				"も"
			],
			"example_yomi": [
				"も-る",
				"も-れる",
				"も-らす"
			]
		},
		"raw_info": "漏\t\t14\t7S\t\tロウ、も-る、も-れる、も-らす"
	},
	"28436": {
		"joyo_kanji": "演",
		"yomi": {
			"on_yomi": [
				"エン"
			]
		},
		"raw_info": "演\t\t14\t5\t\tエン"
	},
	"28448": {
		"joyo_kanji": "漠",
		"yomi": {
			"on_yomi": [
				"バク"
			]
		},
		"raw_info": "漠\t\t13\t7S\t1981\tバク"
	},
	"28450": {
		"joyo_kanji": "漢",
		"kyu_jitai": "漢",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "漢\t漢\t13\t3\t\tカン"
	},
	"28459": {
		"joyo_kanji": "漫",
		"yomi": {
			"on_yomi": [
				"マン"
			]
		},
		"raw_info": "漫\t\t14\t7S\t\tマン"
	},
	"28460": {
		"joyo_kanji": "漬",
		"yomi": {
			"kun_yomi": [
				"つ"
			],
			"example_yomi": [
				"つ-ける",
				"つ-かる"
			]
		},
		"raw_info": "漬\t\t14\t7S\t1981\tつ-ける、つ-かる"
	},
	"28472": {
		"joyo_kanji": "漸",
		"yomi": {
			"on_yomi": [
				"ゼン"
			]
		},
		"raw_info": "漸\t\t14\t7S\t\tゼン"
	},
	"28500": {
		"joyo_kanji": "潔",
		"yomi": {
			"on_yomi": [
				"ケツ"
			],
			"kun_yomi": [
				"いさぎよ"
			],
			"example_yomi": [
				"いさぎよ-い"
			]
		},
		"raw_info": "潔\t\t15\t5\t\tケツ、いさぎよ-い"
	},
	"28508": {
		"joyo_kanji": "潜",
		"kyu_jitai": "潛",
		"yomi": {
			"on_yomi": [
				"セン"
			],
			"kun_yomi": [
				"ひそ",
				"もぐ"
			],
			"example_yomi": [
				"ひそ-む",
				"もぐ-る"
			]
		},
		"raw_info": "潜\t潛\t15\t7S\t\tセン、ひそ-む、もぐ-る"
	},
	"28511": {
		"joyo_kanji": "潟",
		"yomi": {
			"kun_yomi": [
				"かた"
			]
		},
		"raw_info": "潟\t\t15\t7S\t1981\tかた"
	},
	"28516": {
		"joyo_kanji": "潤",
		"yomi": {
			"on_yomi": [
				"ジュン"
			],
			"kun_yomi": [
				"うるお",
				"うる"
			],
			"example_yomi": [
				"うるお-う",
				"うるお-す",
				"うる-む"
			]
		},
		"raw_info": "潤\t\t15\t7S\t\tジュン、うるお-う、うるお-す、うる-む"
	},
	"28526": {
		"joyo_kanji": "潮",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"しお"
			]
		},
		"raw_info": "潮\t\t15\t6\t\tチョウ、しお"
	},
	"28528": {
		"joyo_kanji": "潰",
		"yomi": {
			"on_yomi": [
				"カイ"
			],
			"kun_yomi": [
				"つぶ"
			],
			"example_yomi": [
				"つぶ-す",
				"つぶ-れる"
			]
		},
		"raw_info": "潰\t\t15\t7S\t2010\tカイ、つぶ-す、つぶ-れる"
	},
	"28548": {
		"joyo_kanji": "澄",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"す"
			],
			"example_yomi": [
				"す-む",
				"す-ます"
			]
		},
		"raw_info": "澄\t\t15\t7S\t\tチョウ、す-む、す-ます"
	},
	"28608": {
		"joyo_kanji": "激",
		"yomi": {
			"on_yomi": [
				"ゲキ"
			],
			"kun_yomi": [
				"はげ"
			],
			"example_yomi": [
				"はげ-しい"
			]
		},
		"raw_info": "激\t\t16\t6\t\tゲキ、はげ-しい"
	},
	"28609": {
		"joyo_kanji": "濁",
		"yomi": {
			"on_yomi": [
				"ダク"
			],
			"kun_yomi": [
				"にご"
			],
			"example_yomi": [
				"にご-る",
				"にご-す"
			]
		},
		"raw_info": "濁\t\t16\t7S\t\tダク、にご-る、にご-す"
	},
	"28611": {
		"joyo_kanji": "濃",
		"yomi": {
			"on_yomi": [
				"ノウ"
			],
			"kun_yomi": [
				"こ"
			],
			"example_yomi": [
				"こ-い"
			]
		},
		"raw_info": "濃\t\t16\t7S\t\tノウ、こ-い"
	},
	"28651": {
		"joyo_kanji": "濫",
		"yomi": {
			"on_yomi": [
				"ラン"
			]
		},
		"raw_info": "濫\t\t18\t7S\t\tラン"
	},
	"28655": {
		"joyo_kanji": "濯",
		"yomi": {
			"on_yomi": [
				"タク"
			]
		},
		"raw_info": "濯\t\t17\t7S\t1981\tタク"
	},
	"28716": {
		"joyo_kanji": "瀬",
		"kyu_jitai": "瀨",
		"yomi": {
			"kun_yomi": [
				"せ"
			]
		},
		"raw_info": "瀬\t瀨\t19\t7S\t\tせ"
	},
	"28779": {
		"joyo_kanji": "火",
		"yomi": {
			"on_yomi": [
				"カ"
			],
			"kun_yomi": [
				"ひ",
				"ほ"
			]
		},
		"raw_info": "火\t\t4\t1\t\tカ、ひ、（ほ）"
	},
	"28783": {
		"joyo_kanji": "灯",
		"kyu_jitai": "燈",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"ひ"
			]
		},
		"raw_info": "灯\t燈\t6\t4\t\tトウ、ひ"
	},
	"28784": {
		"joyo_kanji": "灰",
		"yomi": {
			"on_yomi": [
				"カイ"
			],
			"kun_yomi": [
				"はい"
			]
		},
		"raw_info": "灰\t\t6\t6\t\tカイ、はい"
	},
	"28797": {
		"joyo_kanji": "災",
		"yomi": {
			"on_yomi": [
				"サイ"
			],
			"kun_yomi": [
				"わざわ"
			],
			"example_yomi": [
				"わざわ-い"
			]
		},
		"raw_info": "災\t\t7\t5\t\tサイ、わざわ-い"
	},
	"28809": {
		"joyo_kanji": "炉",
		"kyu_jitai": "爐",
		"yomi": {
			"on_yomi": [
				"ロ"
			]
		},
		"raw_info": "炉\t爐\t8\t7S\t\tロ"
	},
	"28810": {
		"joyo_kanji": "炊",
		"yomi": {
			"on_yomi": [
				"スイ"
			],
			"kun_yomi": [
				"た"
			],
			"example_yomi": [
				"た-く"
			]
		},
		"raw_info": "炊\t\t8\t7S\t\tスイ、た-く"
	},
	"28814": {
		"joyo_kanji": "炎",
		"yomi": {
			"on_yomi": [
				"エン"
			],
			"kun_yomi": [
				"ほのお"
			]
		},
		"raw_info": "炎\t\t8\t7S\t\tエン、ほのお"
	},
	"28845": {
		"joyo_kanji": "炭",
		"yomi": {
			"on_yomi": [
				"タン"
			],
			"kun_yomi": [
				"すみ"
			]
		},
		"raw_info": "炭\t\t9\t3\t\tタン、すみ"
	},
	"28857": {
		"joyo_kanji": "点",
		"kyu_jitai": "點",
		"yomi": {
			"on_yomi": [
				"テン"
			]
		},
		"raw_info": "点\t點\t9\t2\t\tテン"
	},
	"28858": {
		"joyo_kanji": "為",
		"kyu_jitai": "爲",
		"yomi": {
			"on_yomi": [
				"イ"
			]
		},
		"raw_info": "為\t爲\t9\t7S\t\tイ"
	},
	"28872": {
		"joyo_kanji": "烈",
		"yomi": {
			"on_yomi": [
				"レツ"
			]
		},
		"raw_info": "烈\t\t10\t7S\t\tレツ"
	},
	"28961": {
		"joyo_kanji": "無",
		"yomi": {
			"on_yomi": [
				"ム",
				"ブ"
			],
			"kun_yomi": [
				"な"
			],
			"example_yomi": [
				"な-い"
			]
		},
		"raw_info": "無\t\t12\t4\t\tム、ブ、な-い"
	},
	"28966": {
		"joyo_kanji": "焦",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"こ",
				"あせ"
			],
			"example_yomi": [
				"こ-げる",
				"こ-がす",
				"こ-がれる",
				"あせ-る"
			]
		},
		"raw_info": "焦\t\t12\t7S\t\tショウ、こ-げる、こ-がす、こ-がれる、あせ-る"
	},
	"28982": {
		"joyo_kanji": "然",
		"yomi": {
			"on_yomi": [
				"ネン",
				"ゼン"
			]
		},
		"raw_info": "然\t\t12\t4\t\tゼン、ネン"
	},
	"28988": {
		"joyo_kanji": "焼",
		"kyu_jitai": "燒",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"や"
			],
			"example_yomi": [
				"や-く",
				"や-ける"
			]
		},
		"raw_info": "焼\t燒\t12\t4\t\tショウ、や-く、や-ける"
	},
	"29006": {
		"joyo_kanji": "煎",
		"yomi": {
			"on_yomi": [
				"セン"
			],
			"kun_yomi": [
				"い"
			],
			"example_yomi": [
				"い-る"
			]
		},
		"raw_info": "煎\t\t13\t7S\t2010\tセン、い-る"
	},
	"29017": {
		"joyo_kanji": "煙",
		"yomi": {
			"on_yomi": [
				"エン"
			],
			"kun_yomi": [
				"けむ",
				"けむり"
			],
			"example_yomi": [
				"けむ-る",
				"けむ-い"
			]
		},
		"raw_info": "煙\t\t13\t7S\t\tエン、けむ-る、けむり、けむ-い"
	},
	"29031": {
		"joyo_kanji": "照",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"て"
			],
			"example_yomi": [
				"て-る",
				"て-らす",
				"て-れる"
			]
		},
		"raw_info": "照\t\t13\t4\t\tショウ、て-る、て-らす、て-れる"
	},
	"29033": {
		"joyo_kanji": "煩",
		"yomi": {
			"on_yomi": [
				"ハン",
				"ボン"
			],
			"kun_yomi": [
				"わずら"
			],
			"example_yomi": [
				"わずら-う",
				"わずら-わす"
			]
		},
		"raw_info": "煩\t\t13\t7S\t\tハン、（ボン）、わずら-う、わずら-わす"
	},
	"29038": {
		"joyo_kanji": "煮",
		"kyu_jitai": "煮",
		"yomi": {
			"on_yomi": [
				"シャ"
			],
			"kun_yomi": [
				"に"
			],
			"example_yomi": [
				"に-える",
				"に-やす",
				"に-る"
			]
		},
		"raw_info": "煮\t煮\t12\t7S\t\tシャ、に-る、に-える、に-やす"
	},
	"29066": {
		"joyo_kanji": "熊",
		"yomi": {
			"kun_yomi": [
				"くま"
			]
		},
		"raw_info": "熊\t\t14\t7S\t2010\tくま"
	},
	"29087": {
		"joyo_kanji": "熟",
		"yomi": {
			"on_yomi": [
				"ジュク"
			],
			"kun_yomi": [
				"う"
			],
			"example_yomi": [
				"う-れる"
			]
		},
		"raw_info": "熟\t\t15\t6\t\tジュク、う-れる"
	},
	"29105": {
		"joyo_kanji": "熱",
		"yomi": {
			"on_yomi": [
				"ネツ"
			],
			"kun_yomi": [
				"あつ"
			],
			"example_yomi": [
				"あつ-い"
			]
		},
		"raw_info": "熱\t\t15\t4\t\tネツ、あつ-い"
	},
	"29123": {
		"joyo_kanji": "燃",
		"yomi": {
			"on_yomi": [
				"ネン"
			],
			"kun_yomi": [
				"も"
			],
			"example_yomi": [
				"も-える",
				"も-やす",
				"も-す"
			]
		},
		"raw_info": "燃\t\t16\t5\t\tネン、も-える、も-やす、も-す"
	},
	"29157": {
		"joyo_kanji": "燥",
		"yomi": {
			"on_yomi": [
				"ソウ"
			]
		},
		"raw_info": "燥\t\t17\t7S\t\tソウ"
	},
	"29190": {
		"joyo_kanji": "爆",
		"yomi": {
			"on_yomi": [
				"バク"
			]
		},
		"raw_info": "爆\t\t19\t7S\t\tバク"
	},
	"29226": {
		"joyo_kanji": "爪",
		"yomi": {
			"kun_yomi": [
				"つめ",
				"つま"
			]
		},
		"raw_info": "爪\t\t4\t7S\t2010\tつめ、（つま）"
	},
	"29237": {
		"joyo_kanji": "爵",
		"yomi": {
			"on_yomi": [
				"シャク"
			]
		},
		"raw_info": "爵\t\t17\t7S\t\tシャク"
	},
	"29238": {
		"joyo_kanji": "父",
		"yomi": {
			"on_yomi": [
				"フ"
			],
			"kun_yomi": [
				"ちち"
			]
		},
		"raw_info": "父\t\t4\t2\t\tフ、ちち"
	},
	"29245": {
		"joyo_kanji": "爽",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"さわ"
			],
			"example_yomi": [
				"さわ-やか"
			]
		},
		"raw_info": "爽\t\t11\t7S\t2010\tソウ、さわ-やか"
	},
	"29255": {
		"joyo_kanji": "片",
		"yomi": {
			"on_yomi": [
				"ヘン"
			],
			"kun_yomi": [
				"かた"
			]
		},
		"raw_info": "片\t\t4\t6\t\tヘン、かた"
	},
	"29256": {
		"joyo_kanji": "版",
		"yomi": {
			"on_yomi": [
				"ハン"
			]
		},
		"raw_info": "版\t\t8\t5\t\tハン"
	},
	"29273": {
		"joyo_kanji": "牙",
		"yomi": {
			"on_yomi": [
				"ゲ",
				"ガ"
			],
			"kun_yomi": [
				"きば"
			]
		},
		"raw_info": "牙\t\t4\t7S\t2010\tガ、（ゲ）、きば"
	},
	"29275": {
		"joyo_kanji": "牛",
		"yomi": {
			"on_yomi": [
				"ギュウ"
			],
			"kun_yomi": [
				"うし"
			]
		},
		"raw_info": "牛\t\t4\t2\t\tギュウ、うし"
	},
	"29287": {
		"joyo_kanji": "牧",
		"yomi": {
			"on_yomi": [
				"ボク"
			],
			"kun_yomi": [
				"まき"
			]
		},
		"raw_info": "牧\t\t8\t4\t\tボク、まき"
	},
	"29289": {
		"joyo_kanji": "物",
		"yomi": {
			"on_yomi": [
				"ブツ",
				"モツ"
			],
			"kun_yomi": [
				"もの"
			]
		},
		"raw_info": "物\t\t8\t3\t\tブツ、モツ、もの"
	},
	"29298": {
		"joyo_kanji": "牲",
		"yomi": {
			"on_yomi": [
				"セイ"
			]
		},
		"raw_info": "牲\t\t9\t7S\t\tセイ"
	},
	"29305": {
		"joyo_kanji": "特",
		"yomi": {
			"on_yomi": [
				"トク"
			]
		},
		"raw_info": "特\t\t10\t4\t\tトク"
	},
	"29344": {
		"joyo_kanji": "犠",
		"kyu_jitai": "犧",
		"yomi": {
			"on_yomi": [
				"ギ"
			]
		},
		"raw_info": "犠\t犧\t17\t7S\t\tギ"
	},
	"29356": {
		"joyo_kanji": "犬",
		"yomi": {
			"on_yomi": [
				"ケン"
			],
			"kun_yomi": [
				"いぬ"
			]
		},
		"raw_info": "犬\t\t4\t1\t\tケン、いぬ"
	},
	"29359": {
		"joyo_kanji": "犯",
		"yomi": {
			"on_yomi": [
				"ハン"
			],
			"kun_yomi": [
				"おか"
			],
			"example_yomi": [
				"おか-す"
			]
		},
		"raw_info": "犯\t\t5\t5\t\tハン、おか-す"
	},
	"29366": {
		"joyo_kanji": "状",
		"kyu_jitai": "狀",
		"yomi": {
			"on_yomi": [
				"ジョウ"
			]
		},
		"raw_info": "状\t狀\t7\t5\t\tジョウ"
	},
	"29378": {
		"joyo_kanji": "狂",
		"yomi": {
			"on_yomi": [
				"キョウ"
			],
			"kun_yomi": [
				"くる"
			],
			"example_yomi": [
				"くる-う",
				"くる-おしい"
			]
		},
		"raw_info": "狂\t\t7\t7S\t\tキョウ、くる-う、くる-おしい"
	},
	"29401": {
		"joyo_kanji": "狙",
		"yomi": {
			"on_yomi": [
				"ソ"
			],
			"kun_yomi": [
				"ねら"
			],
			"example_yomi": [
				"ねら-う"
			]
		},
		"raw_info": "狙\t\t8\t7S\t2010\tソ、ねら-う"
	},
	"29417": {
		"joyo_kanji": "狩",
		"yomi": {
			"on_yomi": [
				"シュ"
			],
			"kun_yomi": [
				"か"
			],
			"example_yomi": [
				"か-る",
				"か-り"
			]
		},
		"raw_info": "狩\t\t9\t7S\t\tシュ、か-る、か-り"
	},
	"29420": {
		"joyo_kanji": "独",
		"kyu_jitai": "獨",
		"yomi": {
			"on_yomi": [
				"ドク"
			],
			"kun_yomi": [
				"ひと"
			],
			"example_yomi": [
				"ひと-り"
			]
		},
		"raw_info": "独\t獨\t9\t5\t\tドク、ひと-り"
	},
	"29421": {
		"joyo_kanji": "狭",
		"kyu_jitai": "狹",
		"yomi": {
			"on_yomi": [
				"キョウ"
			],
			"kun_yomi": [
				"せま",
				"せば"
			],
			"example_yomi": [
				"せば-める",
				"せば-まる",
				"せま-い"
			]
		},
		"raw_info": "狭\t狹\t9\t7S\t\tキョウ、せま-い、せば-める、せば-まる"
	},
	"29467": {
		"joyo_kanji": "猛",
		"yomi": {
			"on_yomi": [
				"モウ"
			]
		},
		"raw_info": "猛\t\t11\t7S\t\tモウ"
	},
	"29471": {
		"joyo_kanji": "猟",
		"kyu_jitai": "獵",
		"yomi": {
			"on_yomi": [
				"リョウ"
			]
		},
		"raw_info": "猟\t獵\t11\t7S\t\tリョウ"
	},
	"29483": {
		"joyo_kanji": "猫",
		"yomi": {
			"on_yomi": [
				"ビョウ"
			],
			"kun_yomi": [
				"ねこ"
			]
		},
		"raw_info": "猫\t\t11\t7S\t1981\tビョウ、ねこ"
	},
	"29486": {
		"joyo_kanji": "献",
		"kyu_jitai": "獻",
		"yomi": {
			"on_yomi": [
				"コン",
				"ケン"
			]
		},
		"raw_info": "献\t獻\t13\t7S\t\tケン、（コン）"
	},
	"29494": {
		"joyo_kanji": "猶",
		"yomi": {
			"on_yomi": [
				"ユウ"
			]
		},
		"raw_info": "猶\t\t12\t7S\t\tユウ"
	},
	"29503": {
		"joyo_kanji": "猿",
		"yomi": {
			"on_yomi": [
				"エン"
			],
			"kun_yomi": [
				"さる"
			]
		},
		"raw_info": "猿\t\t13\t7S\t1981\tエン、さる"
	},
	"29508": {
		"joyo_kanji": "獄",
		"yomi": {
			"on_yomi": [
				"ゴク"
			]
		},
		"raw_info": "獄\t\t14\t7S\t\tゴク"
	},
	"29539": {
		"joyo_kanji": "獣",
		"kyu_jitai": "獸",
		"yomi": {
			"on_yomi": [
				"ジュウ"
			],
			"kun_yomi": [
				"けもの"
			]
		},
		"raw_info": "獣\t獸\t16\t7S\t\tジュウ、けもの"
	},
	"29554": {
		"joyo_kanji": "獲",
		"yomi": {
			"on_yomi": [
				"カク"
			],
			"kun_yomi": [
				"え"
			],
			"example_yomi": [
				"え-る"
			]
		},
		"raw_info": "獲\t\t16\t7S\t\tカク、え-る"
	},
	"29572": {
		"joyo_kanji": "玄",
		"yomi": {
			"on_yomi": [
				"ゲン"
			]
		},
		"raw_info": "玄\t\t5\t7S\t\tゲン"
	},
	"29575": {
		"joyo_kanji": "率",
		"yomi": {
			"on_yomi": [
				"ソツ",
				"リツ"
			],
			"kun_yomi": [
				"ひき"
			],
			"example_yomi": [
				"ひき-いる"
			]
		},
		"raw_info": "率\t\t11\t5\t\tソツ、リツ、ひき-いる"
	},
	"29577": {
		"joyo_kanji": "玉",
		"yomi": {
			"on_yomi": [
				"ギョク"
			],
			"kun_yomi": [
				"たま"
			]
		},
		"raw_info": "玉\t\t5\t1\t\tギョク、たま"
	},
	"29579": {
		"joyo_kanji": "王",
		"yomi": {
			"on_yomi": [
				"オウ"
			]
		},
		"raw_info": "王\t\t4\t1\t\tオウ"
	},
	"29609": {
		"joyo_kanji": "玩",
		"yomi": {
			"on_yomi": [
				"ガン"
			]
		},
		"raw_info": "玩\t\t8\t7S\t2010\tガン"
	},
	"29645": {
		"joyo_kanji": "珍",
		"yomi": {
			"on_yomi": [
				"チン"
			],
			"kun_yomi": [
				"めずら"
			],
			"example_yomi": [
				"めずら-しい"
			]
		},
		"raw_info": "珍\t\t9\t7S\t\tチン、めずら-しい"
	},
	"29664": {
		"joyo_kanji": "珠",
		"yomi": {
			"on_yomi": [
				"シュ"
			]
		},
		"raw_info": "珠\t\t10\t7S\t\tシュ"
	},
	"29677": {
		"joyo_kanji": "班",
		"yomi": {
			"on_yomi": [
				"ハン"
			]
		},
		"raw_info": "班\t\t10\t6\t\tハン"
	},
	"29694": {
		"joyo_kanji": "現",
		"yomi": {
			"on_yomi": [
				"ゲン"
			],
			"kun_yomi": [
				"あらわ"
			],
			"example_yomi": [
				"あらわ-れる",
				"あらわ-す"
			]
		},
		"raw_info": "現\t\t11\t5\t\tゲン、あらわ-れる、あらわ-す"
	},
	"29699": {
		"joyo_kanji": "球",
		"yomi": {
			"on_yomi": [
				"キュウ"
			],
			"kun_yomi": [
				"たま"
			]
		},
		"raw_info": "球\t\t11\t3\t\tキュウ、たま"
	},
	"29702": {
		"joyo_kanji": "理",
		"yomi": {
			"on_yomi": [
				"リ"
			]
		},
		"raw_info": "理\t\t11\t2\t\tリ"
	},
	"29748": {
		"joyo_kanji": "琴",
		"yomi": {
			"on_yomi": [
				"キン"
			],
			"kun_yomi": [
				"こと"
			]
		},
		"raw_info": "琴\t\t12\t7S\t\tキン、こと"
	},
	"29792": {
		"joyo_kanji": "瑠",
		"yomi": {
			"on_yomi": [
				"ル"
			]
		},
		"raw_info": "瑠\t\t14\t7S\t2010\tル"
	},
	"29827": {
		"joyo_kanji": "璃",
		"yomi": {
			"on_yomi": [
				"リ"
			]
		},
		"raw_info": "璃\t\t15\t7S\t2010\tリ"
	},
	"29863": {
		"joyo_kanji": "璧",
		"yomi": {
			"on_yomi": [
				"ヘキ"
			]
		},
		"raw_info": "璧\t\t18\t7S\t2010\tヘキ"
	},
	"29872": {
		"joyo_kanji": "環",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "環\t\t17\t7S\t\tカン"
	},
	"29885": {
		"joyo_kanji": "璽",
		"yomi": {
			"on_yomi": [
				"ジ"
			]
		},
		"raw_info": "璽\t\t19\t7S\t\tジ"
	},
	"29926": {
		"joyo_kanji": "瓦",
		"yomi": {
			"on_yomi": [
				"ガ"
			],
			"kun_yomi": [
				"かわら"
			]
		},
		"raw_info": "瓦\t\t5\t7S\t2010\tガ、かわら"
	},
	"29942": {
		"joyo_kanji": "瓶",
		"kyu_jitai": "甁",
		"yomi": {
			"on_yomi": [
				"ビン"
			]
		},
		"raw_info": "瓶\t甁\t11\t7S\t1981\tビン"
	},
	"29976": {
		"joyo_kanji": "甘",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"あま"
			],
			"example_yomi": [
				"あま-やかす",
				"あま-い",
				"あま-える"
			]
		},
		"raw_info": "甘\t\t5\t7S\t\tカン、あま-い、あま-える、あま-やかす"
	},
	"29978": {
		"joyo_kanji": "甚",
		"yomi": {
			"on_yomi": [
				"ジン"
			],
			"kun_yomi": [
				"はなは"
			],
			"example_yomi": [
				"はなは-だ",
				"はなは-だしい"
			]
		},
		"raw_info": "甚\t\t9\t7S\t1981\tジン、はなは-だ、はなは-だしい"
	},
	"29983": {
		"joyo_kanji": "生",
		"yomi": {
			"on_yomi": [
				"セイ",
				"ショウ"
			],
			"kun_yomi": [
				"お",
				"は",
				"き",
				"なま",
				"い",
				"う"
			],
			"example_yomi": [
				"は-える",
				"は-やす",
				"い-きる",
				"い-かす",
				"い-ける",
				"う-まれる",
				"う-む",
				"お-う"
			]
		},
		"raw_info": "生\t\t5\t1\t\tセイ、ショウ、い-きる、い-かす、い-ける、う-まれる、う-む、お-う、は-える、は-やす、き、なま"
	},
	"29987": {
		"joyo_kanji": "産",
		"yomi": {
			"on_yomi": [
				"サン"
			],
			"kun_yomi": [
				"う",
				"うぶ"
			],
			"example_yomi": [
				"う-む",
				"う-まれる"
			]
		},
		"raw_info": "産\t\t11\t4\t\tサン、う-む、う-まれる、うぶ"
	},
	"29992": {
		"joyo_kanji": "用",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			],
			"kun_yomi": [
				"もち"
			],
			"example_yomi": [
				"もち-いる"
			]
		},
		"raw_info": "用\t\t5\t2\t\tヨウ、もち-いる"
	},
	"30000": {
		"joyo_kanji": "田",
		"yomi": {
			"on_yomi": [
				"デン"
			],
			"kun_yomi": [
				"た"
			]
		},
		"raw_info": "田\t\t5\t1\t\tデン、た"
	},
	"30001": {
		"joyo_kanji": "由",
		"yomi": {
			"on_yomi": [
				"ユウ",
				"ユイ",
				"ユ"
			],
			"kun_yomi": [
				"よし"
			]
		},
		"raw_info": "由\t\t5\t3\t\tユ、ユウ、（ユイ）、よし"
	},
	"30002": {
		"joyo_kanji": "甲",
		"yomi": {
			"on_yomi": [
				"コウ",
				"カン"
			]
		},
		"raw_info": "甲\t\t5\t7S\t\tコウ、カン"
	},
	"30003": {
		"joyo_kanji": "申",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"もう"
			],
			"example_yomi": [
				"もう-す"
			]
		},
		"raw_info": "申\t\t5\t3\t\tシン、もう-す"
	},
	"30007": {
		"joyo_kanji": "男",
		"yomi": {
			"on_yomi": [
				"ナン",
				"ダン"
			],
			"kun_yomi": [
				"おとこ"
			]
		},
		"raw_info": "男\t\t7\t1\t\tダン、ナン、おとこ"
	},
	"30010": {
		"joyo_kanji": "町",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"まち"
			]
		},
		"raw_info": "町\t\t7\t1\t\tチョウ、まち"
	},
	"30011": {
		"joyo_kanji": "画",
		"kyu_jitai": "畫",
		"yomi": {
			"on_yomi": [
				"ガ",
				"カク"
			]
		},
		"raw_info": "画\t畫\t8\t2\t\tガ、カク"
	},
	"30028": {
		"joyo_kanji": "界",
		"yomi": {
			"on_yomi": [
				"カイ"
			]
		},
		"raw_info": "界\t\t9\t3\t\tカイ"
	},
	"30031": {
		"joyo_kanji": "畏",
		"yomi": {
			"on_yomi": [
				"イ"
			],
			"kun_yomi": [
				"おそ"
			],
			"example_yomi": [
				"おそ-れる"
			]
		},
		"raw_info": "畏\t\t9\t7S\t2010\tイ、おそ-れる"
	},
	"30033": {
		"joyo_kanji": "畑",
		"yomi": {
			"kun_yomi": [
				"はた",
				"はたけ"
			]
		},
		"raw_info": "畑\t\t9\t3\t\tはた、はたけ"
	},
	"30036": {
		"joyo_kanji": "畔",
		"yomi": {
			"on_yomi": [
				"ハン"
			]
		},
		"raw_info": "畔\t\t10\t7S\t\tハン"
	},
	"30041": {
		"joyo_kanji": "留",
		"yomi": {
			"on_yomi": [
				"リュウ",
				"ル"
			],
			"kun_yomi": [
				"と"
			],
			"example_yomi": [
				"と-める",
				"と-まる"
			]
		},
		"raw_info": "留\t\t10\t5\t\tリュウ、（ル）、と-める、と-まる"
	},
	"30044": {
		"joyo_kanji": "畜",
		"yomi": {
			"on_yomi": [
				"チク"
			]
		},
		"raw_info": "畜\t\t10\t7S\t\tチク"
	},
	"30045": {
		"joyo_kanji": "畝",
		"yomi": {
			"kun_yomi": [
				"うね"
			]
		},
		"raw_info": "畝\t\t10\t7S\t\tうね"
	},
	"30053": {
		"joyo_kanji": "略",
		"kyu_jitai": "畧",
		"yomi": {
			"on_yomi": [
				"リャク"
			]
		},
		"raw_info": "略\t畧\t11\t5\t\tリャク"
	},
	"30058": {
		"joyo_kanji": "番",
		"yomi": {
			"on_yomi": [
				"バン"
			]
		},
		"raw_info": "番\t\t12\t2\t\tバン"
	},
	"30064": {
		"joyo_kanji": "異",
		"yomi": {
			"on_yomi": [
				"イ"
			],
			"kun_yomi": [
				"こと"
			]
		},
		"raw_info": "異\t\t11\t6\t\tイ、こと"
	},
	"30067": {
		"joyo_kanji": "畳",
		"kyu_jitai": "疊",
		"yomi": {
			"on_yomi": [
				"ジョウ"
			],
			"kun_yomi": [
				"たた",
				"たたみ"
			],
			"example_yomi": [
				"たた-む"
			]
		},
		"raw_info": "畳\t疊\t12\t7S\t\tジョウ、たた-む、たたみ"
	},
	"30079": {
		"joyo_kanji": "畿",
		"yomi": {
			"on_yomi": [
				"キ"
			]
		},
		"raw_info": "畿\t\t15\t7S\t2010\tキ"
	},
	"30094": {
		"joyo_kanji": "疎",
		"yomi": {
			"on_yomi": [
				"ソ"
			],
			"kun_yomi": [
				"うと"
			],
			"example_yomi": [
				"うと-い",
				"うと-む"
			]
		},
		"raw_info": "疎\t\t12\t7S\t\tソ、うと-い、うと-む"
	},
	"30097": {
		"joyo_kanji": "疑",
		"yomi": {
			"on_yomi": [
				"ギ"
			],
			"kun_yomi": [
				"うたが"
			],
			"example_yomi": [
				"うたが-う"
			]
		},
		"raw_info": "疑\t\t14\t6\t\tギ、うたが-う"
	},
	"30123": {
		"joyo_kanji": "疫",
		"yomi": {
			"on_yomi": [
				"エキ",
				"ヤク"
			]
		},
		"raw_info": "疫\t\t9\t7S\t\tエキ、（ヤク）"
	},
	"30130": {
		"joyo_kanji": "疲",
		"yomi": {
			"on_yomi": [
				"ヒ"
			],
			"kun_yomi": [
				"つか"
			],
			"example_yomi": [
				"つか-れる"
			]
		},
		"raw_info": "疲\t\t10\t7S\t\tヒ、つか-れる"
	},
	"30142": {
		"joyo_kanji": "疾",
		"yomi": {
			"on_yomi": [
				"シツ"
			]
		},
		"raw_info": "疾\t\t10\t7S\t\tシツ"
	},
	"30149": {
		"joyo_kanji": "病",
		"yomi": {
			"on_yomi": [
				"ビョウ",
				"ヘイ"
			],
			"kun_yomi": [
				"やまい",
				"や"
			],
			"example_yomi": [
				"や-む"
			]
		},
		"raw_info": "病\t\t10\t3\t\tビョウ、（ヘイ）、や-む、やまい"
	},
	"30151": {
		"joyo_kanji": "症",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "症\t\t10\t7S\t\tショウ"
	},
	"30165": {
		"joyo_kanji": "痕",
		"yomi": {
			"on_yomi": [
				"コン"
			],
			"kun_yomi": [
				"あと"
			]
		},
		"raw_info": "痕\t\t11\t7S\t2010\tコン、あと"
	},
	"30168": {
		"joyo_kanji": "痘",
		"yomi": {
			"on_yomi": [
				"トウ"
			]
		},
		"raw_info": "痘\t\t12\t7S\t\tトウ"
	},
	"30171": {
		"joyo_kanji": "痛",
		"yomi": {
			"on_yomi": [
				"ツウ"
			],
			"kun_yomi": [
				"いた"
			],
			"example_yomi": [
				"いた-い",
				"いた-む",
				"いた-める"
			]
		},
		"raw_info": "痛\t\t12\t6\t\tツウ、いた-い、いた-む、いた-める"
	},
	"30178": {
		"joyo_kanji": "痢",
		"yomi": {
			"on_yomi": [
				"リ"
			]
		},
		"raw_info": "痢\t\t12\t7S\t\tリ"
	},
	"30185": {
		"joyo_kanji": "痩",
		"kyu_jitai": "瘦",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"や"
			],
			"example_yomi": [
				"や-せる"
			]
		},
		"raw_info": "痩\t瘦\t12\t7S\t2010\tソウ、や-せる"
	},
	"30196": {
		"joyo_kanji": "痴",
		"kyu_jitai": "癡",
		"yomi": {
			"on_yomi": [
				"チ"
			]
		},
		"raw_info": "痴\t癡\t13\t7S\t\tチ"
	},
	"30221": {
		"joyo_kanji": "瘍",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			]
		},
		"raw_info": "瘍\t\t14\t7S\t2010\tヨウ"
	},
	"30274": {
		"joyo_kanji": "療",
		"yomi": {
			"on_yomi": [
				"リョウ"
			]
		},
		"raw_info": "療\t\t17\t7S\t\tリョウ"
	},
	"30290": {
		"joyo_kanji": "癒",
		"yomi": {
			"on_yomi": [
				"ユ"
			],
			"kun_yomi": [
				"い"
			],
			"example_yomi": [
				"い-える",
				"い-やす"
			]
		},
		"raw_info": "癒\t\t18\t7S\t1981\tユ、い-える、い-やす"
	},
	"30294": {
		"joyo_kanji": "癖",
		"yomi": {
			"on_yomi": [
				"ヘキ"
			],
			"kun_yomi": [
				"くせ"
			]
		},
		"raw_info": "癖\t\t18\t7S\t\tヘキ、くせ"
	},
	"30330": {
		"joyo_kanji": "発",
		"kyu_jitai": "發",
		"yomi": {
			"on_yomi": [
				"ハツ",
				"ホツ"
			]
		},
		"raw_info": "発\t發\t9\t3\t\tハツ、ホツ"
	},
	"30331": {
		"joyo_kanji": "登",
		"yomi": {
			"on_yomi": [
				"トウ",
				"ト"
			],
			"kun_yomi": [
				"のぼ"
			],
			"example_yomi": [
				"のぼ-る"
			]
		},
		"raw_info": "登\t\t12\t3\t\tトウ、ト、のぼ-る"
	},
	"30333": {
		"joyo_kanji": "白",
		"yomi": {
			"on_yomi": [
				"ハク",
				"ビャク"
			],
			"kun_yomi": [
				"しろ",
				"しら"
			],
			"example_yomi": [
				"しろ-い"
			]
		},
		"raw_info": "白\t\t5\t1\t\tハク、ビャク、しろ、（しら）、しろ-い"
	},
	"30334": {
		"joyo_kanji": "百",
		"yomi": {
			"on_yomi": [
				"ヒャク"
			]
		},
		"raw_info": "百\t\t6\t1\t\tヒャク"
	},
	"30340": {
		"joyo_kanji": "的",
		"yomi": {
			"on_yomi": [
				"テキ"
			],
			"kun_yomi": [
				"まと"
			]
		},
		"raw_info": "的\t\t8\t4\t\tテキ、まと"
	},
	"30342": {
		"joyo_kanji": "皆",
		"yomi": {
			"on_yomi": [
				"カイ"
			],
			"kun_yomi": [
				"みな"
			]
		},
		"raw_info": "皆\t\t9\t7S\t\tカイ、みな"
	},
	"30343": {
		"joyo_kanji": "皇",
		"yomi": {
			"on_yomi": [
				"コウ",
				"オウ"
			]
		},
		"raw_info": "皇\t\t9\t6\t\tコウ、オウ"
	},
	"30382": {
		"joyo_kanji": "皮",
		"yomi": {
			"on_yomi": [
				"ヒ"
			],
			"kun_yomi": [
				"かわ"
			]
		},
		"raw_info": "皮\t\t5\t3\t\tヒ、かわ"
	},
	"30399": {
		"joyo_kanji": "皿",
		"yomi": {
			"kun_yomi": [
				"さら"
			]
		},
		"raw_info": "皿\t\t5\t3\t1981\tさら"
	},
	"30406": {
		"joyo_kanji": "盆",
		"yomi": {
			"on_yomi": [
				"ボン"
			]
		},
		"raw_info": "盆\t\t9\t7S\t\tボン"
	},
	"30410": {
		"joyo_kanji": "益",
		"kyu_jitai": "益",
		"yomi": {
			"on_yomi": [
				"ヤク",
				"エキ"
			]
		},
		"raw_info": "益\t益\t10\t5\t\tエキ、（ヤク）"
	},
	"30423": {
		"joyo_kanji": "盗",
		"kyu_jitai": "盜",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"ぬす"
			],
			"example_yomi": [
				"ぬす-む"
			]
		},
		"raw_info": "盗\t盜\t11\t7S\t\tトウ、ぬす-む"
	},
	"30427": {
		"joyo_kanji": "盛",
		"yomi": {
			"on_yomi": [
				"セイ",
				"ジョウ"
			],
			"kun_yomi": [
				"も",
				"さか"
			],
			"example_yomi": [
				"さか-る",
				"さか-ん",
				"も-る"
			]
		},
		"raw_info": "盛\t\t11\t6\t\tセイ、（ジョウ）、も-る、さか-る、さか-ん"
	},
	"30431": {
		"joyo_kanji": "盟",
		"yomi": {
			"on_yomi": [
				"メイ"
			]
		},
		"raw_info": "盟\t\t13\t6\t\tメイ"
	},
	"30435": {
		"joyo_kanji": "監",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "監\t\t15\t7S\t\tカン"
	},
	"30436": {
		"joyo_kanji": "盤",
		"yomi": {
			"on_yomi": [
				"バン"
			]
		},
		"raw_info": "盤\t\t15\t7S\t\tバン"
	},
	"30446": {
		"joyo_kanji": "目",
		"yomi": {
			"on_yomi": [
				"モク",
				"ボク"
			],
			"kun_yomi": [
				"ま",
				"め"
			]
		},
		"raw_info": "目\t\t5\t1\t\tモク、（ボク）、め、（ま）"
	},
	"30450": {
		"joyo_kanji": "盲",
		"yomi": {
			"on_yomi": [
				"モウ"
			]
		},
		"raw_info": "盲\t\t8\t7S\t\tモウ"
	},
	"30452": {
		"joyo_kanji": "直",
		"yomi": {
			"on_yomi": [
				"チョク",
				"ジキ"
			],
			"kun_yomi": [
				"ただ",
				"なお"
			],
			"example_yomi": [
				"ただ-ちに",
				"なお-す",
				"なお-る"
			]
		},
		"raw_info": "直\t\t8\t2\t\tチョク、ジキ、ただ-ちに、なお-す、なお-る"
	},
	"30456": {
		"joyo_kanji": "相",
		"yomi": {
			"on_yomi": [
				"ソウ",
				"ショウ"
			],
			"kun_yomi": [
				"あい"
			]
		},
		"raw_info": "相\t\t9\t3\t\tソウ、ショウ、あい"
	},
	"30462": {
		"joyo_kanji": "盾",
		"yomi": {
			"on_yomi": [
				"ジュン"
			],
			"kun_yomi": [
				"たて"
			]
		},
		"raw_info": "盾\t\t9\t7S\t\tジュン、たて"
	},
	"30465": {
		"joyo_kanji": "省",
		"yomi": {
			"on_yomi": [
				"セイ",
				"ショウ"
			],
			"kun_yomi": [
				"かえり",
				"はぶ"
			],
			"example_yomi": [
				"かえり-みる",
				"はぶ-く"
			]
		},
		"raw_info": "省\t\t9\t4\t\tセイ、ショウ、かえり-みる、はぶ-く"
	},
	"30473": {
		"joyo_kanji": "眉",
		"yomi": {
			"on_yomi": [
				"ビ",
				"ミ"
			],
			"kun_yomi": [
				"まゆ"
			]
		},
		"raw_info": "眉\t\t9\t7S\t2010\tビ、（ミ）、まゆ"
	},
	"30475": {
		"joyo_kanji": "看",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "看\t\t9\t6\t\tカン"
	},
	"30476": {
		"joyo_kanji": "県",
		"kyu_jitai": "縣",
		"yomi": {
			"on_yomi": [
				"ケン"
			]
		},
		"raw_info": "県\t縣\t9\t3\t\tケン"
	},
	"30495": {
		"joyo_kanji": "真",
		"kyu_jitai": "眞",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"ま"
			]
		},
		"raw_info": "真\t眞\t10\t3\t\tシン、ま"
	},
	"30496": {
		"joyo_kanji": "眠",
		"yomi": {
			"on_yomi": [
				"ミン"
			],
			"kun_yomi": [
				"ねむ"
			],
			"example_yomi": [
				"ねむ-る",
				"ねむ-い"
			]
		},
		"raw_info": "眠\t\t10\t7S\t\tミン、ねむ-る、ねむ-い"
	},
	"30522": {
		"joyo_kanji": "眺",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"なが"
			],
			"example_yomi": [
				"なが-める"
			]
		},
		"raw_info": "眺\t\t11\t7S\t1981\tチョウ、なが-める"
	},
	"30524": {
		"joyo_kanji": "眼",
		"yomi": {
			"on_yomi": [
				"ガン",
				"ゲン"
			],
			"kun_yomi": [
				"まなこ"
			]
		},
		"raw_info": "眼\t\t11\t5\t\tガン、（ゲン）、まなこ"
	},
	"30528": {
		"joyo_kanji": "着",
		"yomi": {
			"on_yomi": [
				"ジャク",
				"チャク"
			],
			"kun_yomi": [
				"き",
				"つ"
			],
			"example_yomi": [
				"き-る",
				"き-せる",
				"つ-く",
				"つ-ける"
			]
		},
		"raw_info": "着\t\t12\t3\t\tチャク、（ジャク）、き-る、き-せる、つ-く、つ-ける"
	},
	"30561": {
		"joyo_kanji": "睡",
		"yomi": {
			"on_yomi": [
				"スイ"
			]
		},
		"raw_info": "睡\t\t13\t7S\t\tスイ"
	},
	"30563": {
		"joyo_kanji": "督",
		"yomi": {
			"on_yomi": [
				"トク"
			]
		},
		"raw_info": "督\t\t13\t7S\t\tトク"
	},
	"30566": {
		"joyo_kanji": "睦",
		"yomi": {
			"on_yomi": [
				"ボク"
			]
		},
		"raw_info": "睦\t\t13\t7S\t2010\tボク"
	},
	"30636": {
		"joyo_kanji": "瞬",
		"yomi": {
			"on_yomi": [
				"シュン"
			],
			"kun_yomi": [
				"またた"
			],
			"example_yomi": [
				"またた-く"
			]
		},
		"raw_info": "瞬\t\t18\t7S\t\tシュン、またた-く"
	},
	"30637": {
		"joyo_kanji": "瞭",
		"yomi": {
			"on_yomi": [
				"リョウ"
			]
		},
		"raw_info": "瞭\t\t17\t7S\t2010\tリョウ"
	},
	"30643": {
		"joyo_kanji": "瞳",
		"yomi": {
			"on_yomi": [
				"ドウ"
			],
			"kun_yomi": [
				"ひとみ"
			]
		},
		"raw_info": "瞳\t\t17\t7S\t2010\tドウ、ひとみ"
	},
	"30683": {
		"joyo_kanji": "矛",
		"yomi": {
			"on_yomi": [
				"ム"
			],
			"kun_yomi": [
				"ほこ"
			]
		},
		"raw_info": "矛\t\t5\t7S\t\tム、ほこ"
	},
	"30690": {
		"joyo_kanji": "矢",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"や"
			]
		},
		"raw_info": "矢\t\t5\t2\t\tシ、や"
	},
	"30693": {
		"joyo_kanji": "知",
		"yomi": {
			"on_yomi": [
				"チ"
			],
			"kun_yomi": [
				"し"
			],
			"example_yomi": [
				"し-る"
			]
		},
		"raw_info": "知\t\t8\t2\t\tチ、し-る"
	},
	"30701": {
		"joyo_kanji": "短",
		"yomi": {
			"on_yomi": [
				"タン"
			],
			"kun_yomi": [
				"みじか"
			],
			"example_yomi": [
				"みじか-い"
			]
		},
		"raw_info": "短\t\t12\t3\t\tタン、みじか-い"
	},
	"30703": {
		"joyo_kanji": "矯",
		"yomi": {
			"on_yomi": [
				"キョウ"
			],
			"kun_yomi": [
				"た"
			],
			"example_yomi": [
				"た-める"
			]
		},
		"raw_info": "矯\t\t17\t7S\t1981\tキョウ、た-める"
	},
	"30707": {
		"joyo_kanji": "石",
		"yomi": {
			"on_yomi": [
				"セキ",
				"シャク",
				"コク"
			],
			"kun_yomi": [
				"いし"
			]
		},
		"raw_info": "石\t\t5\t1\t\tセキ、（シャク）、（コク）、いし"
	},
	"30722": {
		"joyo_kanji": "砂",
		"yomi": {
			"on_yomi": [
				"サ",
				"シャ"
			],
			"kun_yomi": [
				"すな"
			]
		},
		"raw_info": "砂\t\t9\t6\t\tサ、シャ、すな"
	},
	"30740": {
		"joyo_kanji": "研",
		"kyu_jitai": "硏",
		"yomi": {
			"on_yomi": [
				"ケン"
			],
			"kun_yomi": [
				"と"
			],
			"example_yomi": [
				"と-ぐ"
			]
		},
		"raw_info": "研\t硏\t9\t3\t\tケン、と-ぐ"
	},
	"30741": {
		"joyo_kanji": "砕",
		"kyu_jitai": "碎",
		"yomi": {
			"on_yomi": [
				"サイ"
			],
			"kun_yomi": [
				"くだ"
			],
			"example_yomi": [
				"くだ-く",
				"くだ-ける"
			]
		},
		"raw_info": "砕\t碎\t9\t7S\t\tサイ、くだ-く、くだ-ける"
	},
	"30770": {
		"joyo_kanji": "砲",
		"yomi": {
			"on_yomi": [
				"ホウ"
			]
		},
		"raw_info": "砲\t\t10\t7S\t\tホウ"
	},
	"30772": {
		"joyo_kanji": "破",
		"yomi": {
			"on_yomi": [
				"ハ"
			],
			"kun_yomi": [
				"やぶ"
			],
			"example_yomi": [
				"やぶ-る",
				"やぶ-れる"
			]
		},
		"raw_info": "破\t\t10\t5\t\tハ、やぶ-る、やぶ-れる"
	},
	"30813": {
		"joyo_kanji": "硝",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "硝\t\t12\t7S\t\tショウ"
	},
	"30827": {
		"joyo_kanji": "硫",
		"yomi": {
			"on_yomi": [
				"リュウ"
			]
		},
		"raw_info": "硫\t\t12\t7S\t\tリュウ"
	},
	"30828": {
		"joyo_kanji": "硬",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"かた"
			],
			"example_yomi": [
				"かた-い"
			]
		},
		"raw_info": "硬\t\t12\t7S\t\tコウ、かた-い"
	},
	"30849": {
		"joyo_kanji": "碁",
		"yomi": {
			"on_yomi": [
				"ゴ"
			]
		},
		"raw_info": "碁\t\t13\t7S\t\tゴ"
	},
	"30865": {
		"joyo_kanji": "碑",
		"kyu_jitai": "碑",
		"yomi": {
			"on_yomi": [
				"ヒ"
			]
		},
		"raw_info": "碑\t碑\t14\t7S\t\tヒ"
	},
	"30906": {
		"joyo_kanji": "確",
		"yomi": {
			"on_yomi": [
				"カク"
			],
			"kun_yomi": [
				"たし"
			],
			"example_yomi": [
				"たし-か",
				"たし-かめる"
			]
		},
		"raw_info": "確\t\t15\t5\t\tカク、たし-か、たし-かめる"
	},
	"30913": {
		"joyo_kanji": "磁",
		"yomi": {
			"on_yomi": [
				"ジ"
			]
		},
		"raw_info": "磁\t\t14\t6\t\tジ"
	},
	"30952": {
		"joyo_kanji": "磨",
		"yomi": {
			"on_yomi": [
				"マ"
			],
			"kun_yomi": [
				"みが"
			],
			"example_yomi": [
				"みが-く"
			]
		},
		"raw_info": "磨\t\t16\t7S\t1981\tマ、みが-く"
	},
	"30977": {
		"joyo_kanji": "礁",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "礁\t\t17\t7S\t\tショウ"
	},
	"30990": {
		"joyo_kanji": "礎",
		"yomi": {
			"on_yomi": [
				"ソ"
			],
			"kun_yomi": [
				"いしずえ"
			]
		},
		"raw_info": "礎\t\t18\t7S\t\tソ、いしずえ"
	},
	"31034": {
		"joyo_kanji": "示",
		"yomi": {
			"on_yomi": [
				"ジ",
				"シ"
			],
			"kun_yomi": [
				"しめ"
			],
			"example_yomi": [
				"しめ-す"
			]
		},
		"raw_info": "示\t\t5\t5\t\tジ、シ、しめ-す"
	},
	"31036": {
		"joyo_kanji": "礼",
		"kyu_jitai": "禮",
		"yomi": {
			"on_yomi": [
				"レイ",
				"ライ"
			]
		},
		"raw_info": "礼\t禮\t5\t3\t\tレイ、ライ"
	},
	"31038": {
		"joyo_kanji": "社",
		"kyu_jitai": "社",
		"yomi": {
			"on_yomi": [
				"シャ"
			],
			"kun_yomi": [
				"やしろ"
			]
		},
		"raw_info": "社\t社\t7\t2\t\tシャ、やしろ"
	},
	"31048": {
		"joyo_kanji": "祈",
		"kyu_jitai": "祈",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"いの"
			],
			"example_yomi": [
				"いの-る"
			]
		},
		"raw_info": "祈\t祈\t8\t7S\t\tキ、いの-る"
	},
	"31049": {
		"joyo_kanji": "祉",
		"kyu_jitai": "祉",
		"yomi": {
			"on_yomi": [
				"シ"
			]
		},
		"raw_info": "祉\t祉\t8\t7S\t\tシ"
	},
	"31062": {
		"joyo_kanji": "祖",
		"kyu_jitai": "祖",
		"yomi": {
			"on_yomi": [
				"ソ"
			]
		},
		"raw_info": "祖\t祖\t9\t5\t\tソ"
	},
	"31069": {
		"joyo_kanji": "祝",
		"kyu_jitai": "祝",
		"yomi": {
			"on_yomi": [
				"シュク",
				"シュウ"
			],
			"kun_yomi": [
				"いわ"
			],
			"example_yomi": [
				"いわ-う"
			]
		},
		"raw_info": "祝\t祝\t9\t4\t\tシュク、（シュウ）、いわ-う"
	},
	"31070": {
		"joyo_kanji": "神",
		"kyu_jitai": "神",
		"yomi": {
			"on_yomi": [
				"シン",
				"ジン"
			],
			"kun_yomi": [
				"かみ",
				"かん",
				"こう"
			]
		},
		"raw_info": "神\t神\t9\t3\t\tシン、ジン、かみ、（かん）、（こう）"
	},
	"31077": {
		"joyo_kanji": "祥",
		"kyu_jitai": "祥",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "祥\t祥\t10\t7S\t\tショウ"
	},
	"31080": {
		"joyo_kanji": "票",
		"yomi": {
			"on_yomi": [
				"ヒョウ"
			]
		},
		"raw_info": "票\t\t11\t4\t\tヒョウ"
	},
	"31085": {
		"joyo_kanji": "祭",
		"yomi": {
			"on_yomi": [
				"サイ"
			],
			"kun_yomi": [
				"まつ"
			],
			"example_yomi": [
				"まつ-る",
				"まつ-り"
			]
		},
		"raw_info": "祭\t\t11\t3\t\tサイ、まつ-る、まつ-り"
	},
	"31105": {
		"joyo_kanji": "禁",
		"yomi": {
			"on_yomi": [
				"キン"
			]
		},
		"raw_info": "禁\t\t13\t5\t\tキン"
	},
	"31109": {
		"joyo_kanji": "禅",
		"kyu_jitai": "禪",
		"yomi": {
			"on_yomi": [
				"ゼン"
			]
		},
		"raw_info": "禅\t禪\t13\t7S\t\tゼン"
	},
	"31117": {
		"joyo_kanji": "禍",
		"kyu_jitai": "禍",
		"yomi": {
			"on_yomi": [
				"カ"
			]
		},
		"raw_info": "禍\t禍\t13\t7S\t\tカ"
	},
	"31119": {
		"joyo_kanji": "福",
		"kyu_jitai": "福",
		"yomi": {
			"on_yomi": [
				"フク"
			]
		},
		"raw_info": "福\t福\t13\t3\t\tフク"
	},
	"31168": {
		"joyo_kanji": "秀",
		"yomi": {
			"on_yomi": [
				"シュウ"
			],
			"kun_yomi": [
				"ひい"
			],
			"example_yomi": [
				"ひい-でる"
			]
		},
		"raw_info": "秀\t\t7\t7S\t\tシュウ、ひい-でる"
	},
	"31169": {
		"joyo_kanji": "私",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"わたくし",
				"わたし"
			]
		},
		"raw_info": "私\t\t7\t6\t\tシ、わたくし、わたし"
	},
	"31179": {
		"joyo_kanji": "秋",
		"yomi": {
			"on_yomi": [
				"シュウ"
			],
			"kun_yomi": [
				"あき"
			]
		},
		"raw_info": "秋\t\t9\t2\t\tシュウ、あき"
	},
	"31185": {
		"joyo_kanji": "科",
		"yomi": {
			"on_yomi": [
				"カ"
			]
		},
		"raw_info": "科\t\t9\t2\t\tカ"
	},
	"31186": {
		"joyo_kanji": "秒",
		"yomi": {
			"on_yomi": [
				"ビョウ"
			]
		},
		"raw_info": "秒\t\t9\t3\t\tビョウ"
	},
	"31192": {
		"joyo_kanji": "秘",
		"kyu_jitai": "祕",
		"yomi": {
			"on_yomi": [
				"ヒ"
			],
			"kun_yomi": [
				"ひ"
			],
			"example_yomi": [
				"ひ-める"
			]
		},
		"raw_info": "秘\t祕\t10\t6\t\tヒ、ひ-める"
	},
	"31199": {
		"joyo_kanji": "租",
		"yomi": {
			"on_yomi": [
				"ソ"
			]
		},
		"raw_info": "租\t\t10\t7S\t\tソ"
	},
	"31209": {
		"joyo_kanji": "秩",
		"yomi": {
			"on_yomi": [
				"チツ"
			]
		},
		"raw_info": "秩\t\t10\t7S\t\tチツ"
	},
	"31216": {
		"joyo_kanji": "称",
		"kyu_jitai": "稱",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "称\t稱\t10\t7S\t\tショウ"
	},
	"31227": {
		"joyo_kanji": "移",
		"yomi": {
			"on_yomi": [
				"イ"
			],
			"kun_yomi": [
				"うつ"
			],
			"example_yomi": [
				"うつ-る",
				"うつ-す"
			]
		},
		"raw_info": "移\t\t11\t5\t\tイ、うつ-る、うつ-す"
	},
	"31243": {
		"joyo_kanji": "程",
		"yomi": {
			"on_yomi": [
				"テイ"
			],
			"kun_yomi": [
				"ほど"
			]
		},
		"raw_info": "程\t\t12\t5\t\tテイ、ほど"
	},
	"31246": {
		"joyo_kanji": "税",
		"yomi": {
			"on_yomi": [
				"ゼイ"
			]
		},
		"raw_info": "税\t\t12\t5\t\tゼイ"
	},
	"31258": {
		"joyo_kanji": "稚",
		"yomi": {
			"on_yomi": [
				"チ"
			]
		},
		"raw_info": "稚\t\t13\t7S\t\tチ"
	},
	"31278": {
		"joyo_kanji": "種",
		"yomi": {
			"on_yomi": [
				"シュ"
			],
			"kun_yomi": [
				"たね"
			]
		},
		"raw_info": "種\t\t14\t4\t\tシュ、たね"
	},
	"31282": {
		"joyo_kanji": "稲",
		"kyu_jitai": "稻",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"いね",
				"いな"
			]
		},
		"raw_info": "稲\t稻\t14\t7S\t\tトウ、いね、（いな）"
	},
	"31292": {
		"joyo_kanji": "稼",
		"yomi": {
			"on_yomi": [
				"カ"
			],
			"kun_yomi": [
				"かせ"
			],
			"example_yomi": [
				"かせ-ぐ"
			]
		},
		"raw_info": "稼\t\t15\t7S\t1981\tカ、かせ-ぐ"
	},
	"31293": {
		"joyo_kanji": "稽",
		"yomi": {
			"on_yomi": [
				"ケイ"
			]
		},
		"raw_info": "稽\t\t15\t7S\t2010\tケイ"
	},
	"31295": {
		"joyo_kanji": "稿",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "稿\t\t15\t7S\t\tコウ"
	},
	"31296": {
		"joyo_kanji": "穀",
		"kyu_jitai": "穀",
		"yomi": {
			"on_yomi": [
				"コク"
			]
		},
		"raw_info": "穀\t穀\t14\t6\t\tコク"
	},
	"31298": {
		"joyo_kanji": "穂",
		"kyu_jitai": "穗",
		"yomi": {
			"on_yomi": [
				"スイ"
			],
			"kun_yomi": [
				"ほ"
			]
		},
		"raw_info": "穂\t穗\t15\t7S\t\tスイ、ほ"
	},
	"31309": {
		"joyo_kanji": "積",
		"yomi": {
			"on_yomi": [
				"セキ"
			],
			"kun_yomi": [
				"つ"
			],
			"example_yomi": [
				"つ-む",
				"つ-もる"
			]
		},
		"raw_info": "積\t\t16\t4\t\tセキ、つ-む、つ-もる"
	},
	"31311": {
		"joyo_kanji": "穏",
		"kyu_jitai": "穩",
		"yomi": {
			"on_yomi": [
				"オン"
			],
			"kun_yomi": [
				"おだ"
			],
			"example_yomi": [
				"おだ-やか"
			]
		},
		"raw_info": "穏\t穩\t16\t7S\t\tオン、おだ-やか"
	},
	"31339": {
		"joyo_kanji": "穫",
		"yomi": {
			"on_yomi": [
				"カク"
			]
		},
		"raw_info": "穫\t\t18\t7S\t\tカク"
	},
	"31348": {
		"joyo_kanji": "穴",
		"yomi": {
			"on_yomi": [
				"ケツ"
			],
			"kun_yomi": [
				"あな"
			]
		},
		"raw_info": "穴\t\t5\t6\t\tケツ、あな"
	},
	"31350": {
		"joyo_kanji": "究",
		"yomi": {
			"on_yomi": [
				"キュウ"
			],
			"kun_yomi": [
				"きわ"
			],
			"example_yomi": [
				"きわ-める"
			]
		},
		"raw_info": "究\t\t7\t3\t\tキュウ、きわ-める"
	},
	"31354": {
		"joyo_kanji": "空",
		"yomi": {
			"on_yomi": [
				"クウ"
			],
			"kun_yomi": [
				"そら",
				"あ",
				"から"
			],
			"example_yomi": [
				"あ-く",
				"あ-ける"
			]
		},
		"raw_info": "空\t\t8\t1\t\tクウ、そら、あ-く、あ-ける、から"
	},
	"31361": {
		"joyo_kanji": "突",
		"kyu_jitai": "突",
		"yomi": {
			"on_yomi": [
				"トツ"
			],
			"kun_yomi": [
				"つ"
			],
			"example_yomi": [
				"つ-く"
			]
		},
		"raw_info": "突\t突\t8\t7S\t\tトツ、つ-く"
	},
	"31363": {
		"joyo_kanji": "窃",
		"kyu_jitai": "竊",
		"yomi": {
			"on_yomi": [
				"セツ"
			]
		},
		"raw_info": "窃\t竊\t9\t7S\t\tセツ"
	},
	"31378": {
		"joyo_kanji": "窒",
		"yomi": {
			"on_yomi": [
				"チツ"
			]
		},
		"raw_info": "窒\t\t11\t7S\t\tチツ"
	},
	"31379": {
		"joyo_kanji": "窓",
		"kyu_jitai": "窗",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"まど"
			]
		},
		"raw_info": "窓\t窗\t11\t6\t\tソウ、まど"
	},
	"31391": {
		"joyo_kanji": "窟",
		"yomi": {
			"on_yomi": [
				"クツ"
			]
		},
		"raw_info": "窟\t\t13\t7S\t2010\tクツ"
	},
	"31406": {
		"joyo_kanji": "窮",
		"yomi": {
			"on_yomi": [
				"キュウ"
			],
			"kun_yomi": [
				"きわ"
			],
			"example_yomi": [
				"きわ-まる",
				"きわ-める"
			]
		},
		"raw_info": "窮\t\t15\t7S\t\tキュウ、きわ-める、きわ-まる"
	},
	"31407": {
		"joyo_kanji": "窯",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			],
			"kun_yomi": [
				"かま"
			]
		},
		"raw_info": "窯\t\t15\t7S\t\tヨウ、かま"
	},
	"31435": {
		"joyo_kanji": "立",
		"yomi": {
			"on_yomi": [
				"リツ",
				"リュウ"
			],
			"kun_yomi": [
				"た"
			],
			"example_yomi": [
				"た-つ",
				"た-てる"
			]
		},
		"raw_info": "立\t\t5\t1\t\tリツ、（リュウ）、た-つ、た-てる"
	},
	"31452": {
		"joyo_kanji": "竜",
		"kyu_jitai": "龍",
		"yomi": {
			"on_yomi": [
				"リュウ"
			],
			"kun_yomi": [
				"たつ"
			]
		},
		"raw_info": "竜\t龍\t10\t7S\t1981\tリュウ、たつ"
	},
	"31456": {
		"joyo_kanji": "章",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "章\t\t11\t3\t\tショウ"
	},
	"31461": {
		"joyo_kanji": "童",
		"yomi": {
			"on_yomi": [
				"ドウ"
			],
			"kun_yomi": [
				"わらべ"
			]
		},
		"raw_info": "童\t\t12\t3\t\tドウ、わらべ"
	},
	"31471": {
		"joyo_kanji": "端",
		"yomi": {
			"on_yomi": [
				"タン"
			],
			"kun_yomi": [
				"はし",
				"は",
				"はた"
			]
		},
		"raw_info": "端\t\t14\t7S\t\tタン、はし、は、はた"
	},
	"31478": {
		"joyo_kanji": "競",
		"yomi": {
			"on_yomi": [
				"キョウ",
				"ケイ"
			],
			"kun_yomi": [
				"きそ",
				"せ"
			],
			"example_yomi": [
				"きそ-う",
				"せ-る"
			]
		},
		"raw_info": "競\t\t20\t4\t\tキョウ、ケイ、きそ-う、せ-る"
	},
	"31481": {
		"joyo_kanji": "竹",
		"yomi": {
			"on_yomi": [
				"チク"
			],
			"kun_yomi": [
				"たけ"
			]
		},
		"raw_info": "竹\t\t6\t1\t\tチク、たけ"
	},
	"31505": {
		"joyo_kanji": "笑",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"わら",
				"え"
			],
			"example_yomi": [
				"わら-う",
				"え-む"
			]
		},
		"raw_info": "笑\t\t10\t4\t\tショウ、わら-う、え-む"
	},
	"31515": {
		"joyo_kanji": "笛",
		"yomi": {
			"on_yomi": [
				"テキ"
			],
			"kun_yomi": [
				"ふえ"
			]
		},
		"raw_info": "笛\t\t11\t3\t\tテキ、ふえ"
	},
	"31526": {
		"joyo_kanji": "符",
		"yomi": {
			"on_yomi": [
				"フ"
			]
		},
		"raw_info": "符\t\t11\t7S\t\tフ"
	},
	"31532": {
		"joyo_kanji": "第",
		"yomi": {
			"on_yomi": [
				"ダイ"
			]
		},
		"raw_info": "第\t\t11\t3\t\tダイ"
	},
	"31558": {
		"joyo_kanji": "筆",
		"yomi": {
			"on_yomi": [
				"ヒツ"
			],
			"kun_yomi": [
				"ふで"
			]
		},
		"raw_info": "筆\t\t12\t3\t\tヒツ、ふで"
	},
	"31561": {
		"joyo_kanji": "等",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"ひと"
			],
			"example_yomi": [
				"ひと-しい"
			]
		},
		"raw_info": "等\t\t12\t3\t\tトウ、ひと-しい"
	},
	"31563": {
		"joyo_kanji": "筋",
		"yomi": {
			"on_yomi": [
				"キン"
			],
			"kun_yomi": [
				"すじ"
			]
		},
		"raw_info": "筋\t\t12\t6\t\tキン、すじ"
	},
	"31570": {
		"joyo_kanji": "筒",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"つつ"
			]
		},
		"raw_info": "筒\t\t12\t7S\t\tトウ、つつ"
	},
	"31572": {
		"joyo_kanji": "答",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"こた"
			],
			"example_yomi": [
				"こた-える",
				"こた-え"
			]
		},
		"raw_info": "答\t\t12\t2\t\tトウ、こた-える、こた-え"
	},
	"31574": {
		"joyo_kanji": "策",
		"yomi": {
			"on_yomi": [
				"サク"
			]
		},
		"raw_info": "策\t\t12\t6\t\tサク"
	},
	"31623": {
		"joyo_kanji": "箇",
		"yomi": {
			"on_yomi": [
				"カ"
			]
		},
		"raw_info": "箇\t\t14\t7S\t\tカ"
	},
	"31627": {
		"joyo_kanji": "箋",
		"yomi": {
			"on_yomi": [
				"セン"
			]
		},
		"raw_info": "箋\t\t14\t7S\t2010\tセン"
	},
	"31639": {
		"joyo_kanji": "算",
		"yomi": {
			"on_yomi": [
				"サン"
			]
		},
		"raw_info": "算\t\t14\t2\t\tサン"
	},
	"31649": {
		"joyo_kanji": "管",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"くだ"
			]
		},
		"raw_info": "管\t\t14\t4\t\tカン、くだ"
	},
	"31665": {
		"joyo_kanji": "箱",
		"yomi": {
			"kun_yomi": [
				"はこ"
			]
		},
		"raw_info": "箱\t\t15\t3\t\tはこ"
	},
	"31672": {
		"joyo_kanji": "箸",
		"yomi": {
			"kun_yomi": [
				"はし"
			]
		},
		"raw_info": "箸\t\t15\t7S\t2010\tはし"
	},
	"31680": {
		"joyo_kanji": "節",
		"kyu_jitai": "節",
		"yomi": {
			"on_yomi": [
				"セツ",
				"セチ"
			],
			"kun_yomi": [
				"ふし"
			]
		},
		"raw_info": "節\t節\t13\t4\t\tセツ、（セチ）、ふし"
	},
	"31684": {
		"joyo_kanji": "範",
		"yomi": {
			"on_yomi": [
				"ハン"
			]
		},
		"raw_info": "範\t\t15\t7S\t\tハン"
	},
	"31689": {
		"joyo_kanji": "築",
		"yomi": {
			"on_yomi": [
				"チク"
			],
			"kun_yomi": [
				"きず"
			],
			"example_yomi": [
				"きず-く"
			]
		},
		"raw_info": "築\t\t16\t5\t\tチク、きず-く"
	},
	"31716": {
		"joyo_kanji": "篤",
		"yomi": {
			"on_yomi": [
				"トク"
			]
		},
		"raw_info": "篤\t\t16\t7S\t\tトク"
	},
	"31777": {
		"joyo_kanji": "簡",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "簡\t\t18\t6\t\tカン"
	},
	"31807": {
		"joyo_kanji": "簿",
		"yomi": {
			"on_yomi": [
				"ボ"
			]
		},
		"raw_info": "簿\t\t19\t7S\t\tボ"
	},
	"31821": {
		"joyo_kanji": "籍",
		"yomi": {
			"on_yomi": [
				"セキ"
			]
		},
		"raw_info": "籍\t\t20\t7S\t\tセキ"
	},
	"31840": {
		"joyo_kanji": "籠",
		"yomi": {
			"on_yomi": [
				"ロウ"
			],
			"kun_yomi": [
				"かご",
				"こ"
			],
			"example_yomi": [
				"こ-もる"
			]
		},
		"raw_info": "籠\t\t22\t7S\t2010\tロウ、かご、こ-もる"
	},
	"31859": {
		"joyo_kanji": "米",
		"yomi": {
			"on_yomi": [
				"マイ",
				"ベイ"
			],
			"kun_yomi": [
				"こめ"
			]
		},
		"raw_info": "米\t\t6\t2\t\tベイ、マイ、こめ"
	},
	"31881": {
		"joyo_kanji": "粉",
		"yomi": {
			"on_yomi": [
				"フン"
			],
			"kun_yomi": [
				"こ",
				"こな"
			]
		},
		"raw_info": "粉\t\t10\t4\t\tフン、こ、こな"
	},
	"31883": {
		"joyo_kanji": "粋",
		"kyu_jitai": "粹",
		"yomi": {
			"on_yomi": [
				"スイ"
			],
			"kun_yomi": [
				"いき"
			]
		},
		"raw_info": "粋\t粹\t10\t7S\t\tスイ、いき"
	},
	"31890": {
		"joyo_kanji": "粒",
		"yomi": {
			"on_yomi": [
				"リュウ"
			],
			"kun_yomi": [
				"つぶ"
			]
		},
		"raw_info": "粒\t\t11\t7S\t\tリュウ、つぶ"
	},
	"31895": {
		"joyo_kanji": "粗",
		"yomi": {
			"on_yomi": [
				"ソ"
			],
			"kun_yomi": [
				"あら"
			],
			"example_yomi": [
				"あら-い"
			]
		},
		"raw_info": "粗\t\t11\t7S\t\tソ、あら-い"
	},
	"31896": {
		"joyo_kanji": "粘",
		"kyu_jitai": "黏",
		"yomi": {
			"on_yomi": [
				"ネン"
			],
			"kun_yomi": [
				"ねば"
			],
			"example_yomi": [
				"ねば-る"
			]
		},
		"raw_info": "粘\t黏\t11\t7S\t\tネン、ねば-る"
	},
	"31899": {
		"joyo_kanji": "粛",
		"kyu_jitai": "肅",
		"yomi": {
			"on_yomi": [
				"シュク"
			]
		},
		"raw_info": "粛\t肅\t11\t7S\t\tシュク"
	},
	"31911": {
		"joyo_kanji": "粧",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "粧\t\t12\t7S\t\tショウ"
	},
	"31934": {
		"joyo_kanji": "精",
		"kyu_jitai": "精",
		"yomi": {
			"on_yomi": [
				"セイ",
				"ショウ"
			]
		},
		"raw_info": "精\t精\t14\t5\t\tセイ、（ショウ）"
	},
	"31958": {
		"joyo_kanji": "糖",
		"yomi": {
			"on_yomi": [
				"トウ"
			]
		},
		"raw_info": "糖\t\t16\t6\t\tトウ"
	},
	"31975": {
		"joyo_kanji": "糧",
		"yomi": {
			"on_yomi": [
				"リョウ",
				"ロウ"
			],
			"kun_yomi": [
				"かて"
			]
		},
		"raw_info": "糧\t\t18\t7S\t\tリョウ、（ロウ）、かて"
	},
	"31992": {
		"joyo_kanji": "糸",
		"kyu_jitai": "絲",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"いと"
			]
		},
		"raw_info": "糸\t絲\t6\t1\t\tシ、いと"
	},
	"31995": {
		"joyo_kanji": "系",
		"yomi": {
			"on_yomi": [
				"ケイ"
			]
		},
		"raw_info": "系\t\t7\t6\t\tケイ"
	},
	"31998": {
		"joyo_kanji": "糾",
		"kyu_jitai": "糺",
		"yomi": {
			"on_yomi": [
				"キュウ"
			]
		},
		"raw_info": "糾\t糺\t9\t7S\t\tキュウ"
	},
	"32000": {
		"joyo_kanji": "紀",
		"yomi": {
			"on_yomi": [
				"キ"
			]
		},
		"raw_info": "紀\t\t9\t4\t\tキ"
	},
	"32004": {
		"joyo_kanji": "約",
		"yomi": {
			"on_yomi": [
				"ヤク"
			]
		},
		"raw_info": "約\t\t9\t4\t\tヤク"
	},
	"32005": {
		"joyo_kanji": "紅",
		"yomi": {
			"on_yomi": [
				"コウ",
				"ク"
			],
			"kun_yomi": [
				"べに",
				"くれない"
			]
		},
		"raw_info": "紅\t\t9\t6\t\tコウ、（ク）、べに、くれない"
	},
	"32011": {
		"joyo_kanji": "紋",
		"yomi": {
			"on_yomi": [
				"モン"
			]
		},
		"raw_info": "紋\t\t10\t7S\t\tモン"
	},
	"32013": {
		"joyo_kanji": "納",
		"yomi": {
			"on_yomi": [
				"ナッ",
				"ナ",
				"ナン",
				"トウ",
				"ノウ"
			],
			"kun_yomi": [
				"おさ"
			],
			"example_yomi": [
				"おさ-める",
				"おさ-まる"
			]
		},
		"raw_info": "納\t\t10\t6\t\tノウ、（ナッ）、（ナ）、（ナン）、（トウ）、おさ-める、おさ-まる"
	},
	"32020": {
		"joyo_kanji": "純",
		"yomi": {
			"on_yomi": [
				"ジュン"
			]
		},
		"raw_info": "純\t\t10\t6\t\tジュン"
	},
	"32025": {
		"joyo_kanji": "紙",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"かみ"
			]
		},
		"raw_info": "紙\t\t10\t2\t\tシ、かみ"
	},
	"32026": {
		"joyo_kanji": "級",
		"yomi": {
			"on_yomi": [
				"キュウ"
			]
		},
		"raw_info": "級\t\t9\t3\t\tキュウ"
	},
	"32027": {
		"joyo_kanji": "紛",
		"yomi": {
			"on_yomi": [
				"フン"
			],
			"kun_yomi": [
				"まぎ"
			],
			"example_yomi": [
				"まぎ-れる",
				"まぎ-らす",
				"まぎ-らわす",
				"まぎ-らわしい"
			]
		},
		"raw_info": "紛\t\t10\t7S\t\tフン、まぎ-れる、まぎ-らす、まぎ-らわす、まぎ-らわしい"
	},
	"32032": {
		"joyo_kanji": "素",
		"yomi": {
			"on_yomi": [
				"ソ",
				"ス"
			]
		},
		"raw_info": "素\t\t10\t5\t\tソ、ス"
	},
	"32033": {
		"joyo_kanji": "紡",
		"yomi": {
			"on_yomi": [
				"ボウ"
			],
			"kun_yomi": [
				"つむ"
			],
			"example_yomi": [
				"つむ-ぐ"
			]
		},
		"raw_info": "紡\t\t10\t7S\t\tボウ、つむ-ぐ"
	},
	"32034": {
		"joyo_kanji": "索",
		"yomi": {
			"on_yomi": [
				"サク"
			]
		},
		"raw_info": "索\t\t10\t7S\t\tサク"
	},
	"32043": {
		"joyo_kanji": "紫",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"むらさき"
			]
		},
		"raw_info": "紫\t\t12\t7S\t\tシ、むらさき"
	},
	"32047": {
		"joyo_kanji": "累",
		"yomi": {
			"on_yomi": [
				"ルイ"
			]
		},
		"raw_info": "累\t\t11\t7S\t\tルイ"
	},
	"32048": {
		"joyo_kanji": "細",
		"yomi": {
			"on_yomi": [
				"サイ"
			],
			"kun_yomi": [
				"ほそ",
				"こま"
			],
			"example_yomi": [
				"ほそ-い",
				"ほそ-る",
				"こま-か",
				"こま-かい"
			]
		},
		"raw_info": "細\t\t11\t2\t\tサイ、ほそ-い、ほそ-る、こま-か、こま-かい"
	},
	"32051": {
		"joyo_kanji": "紳",
		"yomi": {
			"on_yomi": [
				"シン"
			]
		},
		"raw_info": "紳\t\t11\t7S\t\tシン"
	},
	"32057": {
		"joyo_kanji": "紹",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "紹\t\t11\t7S\t\tショウ"
	},
	"32058": {
		"joyo_kanji": "紺",
		"yomi": {
			"on_yomi": [
				"コン"
			]
		},
		"raw_info": "紺\t\t11\t7S\t\tコン"
	},
	"32066": {
		"joyo_kanji": "終",
		"yomi": {
			"on_yomi": [
				"シュウ"
			],
			"kun_yomi": [
				"お"
			],
			"example_yomi": [
				"お-わる",
				"お-える"
			]
		},
		"raw_info": "終\t\t11\t3\t\tシュウ、お-わる、お-える"
	},
	"32068": {
		"joyo_kanji": "組",
		"yomi": {
			"on_yomi": [
				"ソ"
			],
			"kun_yomi": [
				"く",
				"くみ"
			],
			"example_yomi": [
				"く-む"
			]
		},
		"raw_info": "組\t\t11\t2\t\tソ、く-む、くみ"
	},
	"32076": {
		"joyo_kanji": "経",
		"kyu_jitai": "經",
		"yomi": {
			"on_yomi": [
				"ケイ",
				"キョウ"
			],
			"kun_yomi": [
				"へ"
			],
			"example_yomi": [
				"へ-る"
			]
		},
		"raw_info": "経\t經\t11\t5\t\tケイ、キョウ、へ-る"
	},
	"32080": {
		"joyo_kanji": "結",
		"yomi": {
			"on_yomi": [
				"ケツ"
			],
			"kun_yomi": [
				"むす",
				"ゆ"
			],
			"example_yomi": [
				"ゆ-う",
				"ゆ-わえる",
				"むす-ぶ"
			]
		},
		"raw_info": "結\t\t12\t4\t\tケツ、むす-ぶ、ゆ-う、ゆ-わえる"
	},
	"32094": {
		"joyo_kanji": "絞",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"しぼ",
				"し"
			],
			"example_yomi": [
				"し-まる",
				"しぼ-る",
				"し-める"
			]
		},
		"raw_info": "絞\t\t12\t7S\t\tコウ、しぼ-る、し-める、し-まる"
	},
	"32097": {
		"joyo_kanji": "絡",
		"yomi": {
			"on_yomi": [
				"ラク"
			],
			"kun_yomi": [
				"から"
			],
			"example_yomi": [
				"から-む",
				"から-まる",
				"から-める"
			]
		},
		"raw_info": "絡\t\t12\t7S\t\tラク、から-む、から-まる、から-める"
	},
	"32102": {
		"joyo_kanji": "給",
		"yomi": {
			"on_yomi": [
				"キュウ"
			]
		},
		"raw_info": "給\t\t12\t4\t\tキュウ"
	},
	"32113": {
		"joyo_kanji": "統",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"す"
			],
			"example_yomi": [
				"す-べる"
			]
		},
		"raw_info": "統\t\t12\t5\t\tトウ、す-べる"
	},
	"32117": {
		"joyo_kanji": "絵",
		"kyu_jitai": "繪",
		"yomi": {
			"on_yomi": [
				"カイ",
				"エ"
			]
		},
		"raw_info": "絵\t繪\t12\t2\t\tカイ、エ"
	},
	"32118": {
		"joyo_kanji": "絶",
		"yomi": {
			"on_yomi": [
				"ゼツ"
			],
			"kun_yomi": [
				"た"
			],
			"example_yomi": [
				"た-える",
				"た-やす",
				"た-つ"
			]
		},
		"raw_info": "絶\t\t12\t5\t\tゼツ、た-える、た-やす、た-つ"
	},
	"32121": {
		"joyo_kanji": "絹",
		"yomi": {
			"on_yomi": [
				"ケン"
			],
			"kun_yomi": [
				"きぬ"
			]
		},
		"raw_info": "絹\t\t13\t6\t\tケン、きぬ"
	},
	"32153": {
		"joyo_kanji": "継",
		"kyu_jitai": "繼",
		"yomi": {
			"on_yomi": [
				"ケイ"
			],
			"kun_yomi": [
				"つ"
			],
			"example_yomi": [
				"つ-ぐ"
			]
		},
		"raw_info": "継\t繼\t13\t7S\t\tケイ、つ-ぐ"
	},
	"32154": {
		"joyo_kanji": "続",
		"kyu_jitai": "續",
		"yomi": {
			"on_yomi": [
				"ゾク"
			],
			"kun_yomi": [
				"つづ"
			],
			"example_yomi": [
				"つづ-ける",
				"つづ-く"
			]
		},
		"raw_info": "続\t續\t13\t4\t\tゾク、つづ-く、つづ-ける"
	},
	"32173": {
		"joyo_kanji": "維",
		"yomi": {
			"on_yomi": [
				"イ"
			]
		},
		"raw_info": "維\t\t14\t7S\t\tイ"
	},
	"32177": {
		"joyo_kanji": "綱",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"つな"
			]
		},
		"raw_info": "綱\t\t14\t7S\t\tコウ、つな"
	},
	"32178": {
		"joyo_kanji": "網",
		"yomi": {
			"on_yomi": [
				"モウ"
			],
			"kun_yomi": [
				"あみ"
			]
		},
		"raw_info": "網\t\t14\t7S\t\tモウ、あみ"
	},
	"32187": {
		"joyo_kanji": "綻",
		"yomi": {
			"on_yomi": [
				"タン"
			],
			"kun_yomi": [
				"ほころ"
			],
			"example_yomi": [
				"ほころ-びる"
			]
		},
		"raw_info": "綻\t\t14\t7S\t2010\tタン、ほころ-びる"
	},
	"32191": {
		"joyo_kanji": "綿",
		"yomi": {
			"on_yomi": [
				"メン"
			],
			"kun_yomi": [
				"わた"
			]
		},
		"raw_info": "綿\t\t14\t5\t\tメン、わた"
	},
	"32202": {
		"joyo_kanji": "緊",
		"yomi": {
			"on_yomi": [
				"キン"
			]
		},
		"raw_info": "緊\t\t15\t7S\t\tキン"
	},
	"32207": {
		"joyo_kanji": "総",
		"kyu_jitai": "總",
		"yomi": {
			"on_yomi": [
				"ソウ"
			]
		},
		"raw_info": "総\t總\t14\t5\t\tソウ"
	},
	"32209": {
		"joyo_kanji": "緑",
		"kyu_jitai": "綠",
		"yomi": {
			"on_yomi": [
				"ロク",
				"リョク"
			],
			"kun_yomi": [
				"みどり"
			]
		},
		"raw_info": "緑\t綠\t14\t3\t\tリョク、（ロク）、みどり"
	},
	"32210": {
		"joyo_kanji": "緒",
		"kyu_jitai": "緖",
		"yomi": {
			"on_yomi": [
				"ショ",
				"チョ"
			],
			"kun_yomi": [
				"お"
			]
		},
		"raw_info": "緒\t緖\t14\t7S\t\tショ、（チョ）、お"
	},
	"32218": {
		"joyo_kanji": "線",
		"yomi": {
			"on_yomi": [
				"セン"
			]
		},
		"raw_info": "線\t\t15\t2\t\tセン"
	},
	"32224": {
		"joyo_kanji": "締",
		"yomi": {
			"on_yomi": [
				"テイ"
			],
			"kun_yomi": [
				"し"
			],
			"example_yomi": [
				"し-める",
				"し-まる"
			]
		},
		"raw_info": "締\t\t15\t7S\t\tテイ、し-まる、し-める"
	},
	"32232": {
		"joyo_kanji": "編",
		"yomi": {
			"on_yomi": [
				"ヘン"
			],
			"kun_yomi": [
				"あ"
			],
			"example_yomi": [
				"あ-む"
			]
		},
		"raw_info": "編\t\t15\t5\t\tヘン、あ-む"
	},
	"32233": {
		"joyo_kanji": "緩",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"ゆる"
			],
			"example_yomi": [
				"ゆる-い",
				"ゆる-やか",
				"ゆる-む",
				"ゆる-める"
			]
		},
		"raw_info": "緩\t\t15\t7S\t\tカン、ゆる-い、ゆる-やか、ゆる-む、ゆる-める"
	},
	"32239": {
		"joyo_kanji": "緯",
		"yomi": {
			"on_yomi": [
				"イ"
			]
		},
		"raw_info": "緯\t\t16\t7S\t\tイ"
	},
	"32244": {
		"joyo_kanji": "練",
		"kyu_jitai": "練",
		"yomi": {
			"on_yomi": [
				"レン"
			],
			"kun_yomi": [
				"ね"
			],
			"example_yomi": [
				"ね-る"
			]
		},
		"raw_info": "練\t練\t14\t3\t\tレン、ね-る"
	},
	"32251": {
		"joyo_kanji": "緻",
		"yomi": {
			"on_yomi": [
				"チ"
			]
		},
		"raw_info": "緻\t\t16\t7S\t2010\tチ"
	},
	"32257": {
		"joyo_kanji": "縁",
		"kyu_jitai": "緣",
		"yomi": {
			"on_yomi": [
				"エン"
			],
			"kun_yomi": [
				"ふち"
			]
		},
		"raw_info": "縁\t緣\t15\t7S\t\tエン、ふち"
	},
	"32260": {
		"joyo_kanji": "縄",
		"kyu_jitai": "繩",
		"yomi": {
			"on_yomi": [
				"ジョウ"
			],
			"kun_yomi": [
				"なわ"
			]
		},
		"raw_info": "縄\t繩\t15\t7S\t1981\tジョウ、なわ"
	},
	"32283": {
		"joyo_kanji": "縛",
		"yomi": {
			"on_yomi": [
				"バク"
			],
			"kun_yomi": [
				"しば"
			],
			"example_yomi": [
				"しば-る"
			]
		},
		"raw_info": "縛\t\t16\t7S\t\tバク、しば-る"
	},
	"32294": {
		"joyo_kanji": "縦",
		"kyu_jitai": "縱",
		"yomi": {
			"on_yomi": [
				"ジュウ"
			],
			"kun_yomi": [
				"たて"
			]
		},
		"raw_info": "縦\t縱\t16\t6\t\tジュウ、たて"
	},
	"32299": {
		"joyo_kanji": "縫",
		"yomi": {
			"on_yomi": [
				"ホウ"
			],
			"kun_yomi": [
				"ぬ"
			],
			"example_yomi": [
				"ぬ-う"
			]
		},
		"raw_info": "縫\t\t16\t7S\t\tホウ、ぬ-う"
	},
	"32302": {
		"joyo_kanji": "縮",
		"yomi": {
			"on_yomi": [
				"シュク"
			],
			"kun_yomi": [
				"ちぢ"
			],
			"example_yomi": [
				"ちぢ-れる",
				"ちぢ-らす",
				"ちぢ-む",
				"ちぢ-まる",
				"ちぢ-める"
			]
		},
		"raw_info": "縮\t\t17\t6\t\tシュク、ちぢ-む、ちぢ-まる、ちぢ-める、ちぢ-れる、ちぢ-らす"
	},
	"32318": {
		"joyo_kanji": "績",
		"yomi": {
			"on_yomi": [
				"セキ"
			]
		},
		"raw_info": "績\t\t17\t5\t\tセキ"
	},
	"32321": {
		"joyo_kanji": "繁",
		"kyu_jitai": "繁",
		"yomi": {
			"on_yomi": [
				"ハン"
			]
		},
		"raw_info": "繁\t繁\t16\t7S\t\tハン"
	},
	"32330": {
		"joyo_kanji": "繊",
		"kyu_jitai": "纖",
		"yomi": {
			"on_yomi": [
				"セン"
			]
		},
		"raw_info": "繊\t纖\t17\t7S\t\tセン"
	},
	"32340": {
		"joyo_kanji": "織",
		"yomi": {
			"on_yomi": [
				"ショク",
				"シキ"
			],
			"kun_yomi": [
				"お"
			],
			"example_yomi": [
				"お-る"
			]
		},
		"raw_info": "織\t\t18\t5\t\tショク、シキ、お-る"
	},
	"32341": {
		"joyo_kanji": "繕",
		"yomi": {
			"on_yomi": [
				"ゼン"
			],
			"kun_yomi": [
				"つくろ"
			],
			"example_yomi": [
				"つくろ-う"
			]
		},
		"raw_info": "繕\t\t18\t7S\t\tゼン、つくろ-う"
	},
	"32365": {
		"joyo_kanji": "繭",
		"yomi": {
			"on_yomi": [
				"ケン"
			],
			"kun_yomi": [
				"まゆ"
			]
		},
		"raw_info": "繭\t\t18\t7S\t\tケン、まゆ"
	},
	"32368": {
		"joyo_kanji": "繰",
		"yomi": {
			"kun_yomi": [
				"く"
			],
			"example_yomi": [
				"く-る"
			]
		},
		"raw_info": "繰\t\t19\t7S\t\tく-る"
	},
	"32566": {
		"joyo_kanji": "缶",
		"kyu_jitai": "罐",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "缶\t罐\t6\t7S\t1981\tカン"
	},
	"32618": {
		"joyo_kanji": "罪",
		"yomi": {
			"on_yomi": [
				"ザイ"
			],
			"kun_yomi": [
				"つみ"
			]
		},
		"raw_info": "罪\t\t13\t5\t\tザイ、つみ"
	},
	"32622": {
		"joyo_kanji": "置",
		"yomi": {
			"on_yomi": [
				"チ"
			],
			"kun_yomi": [
				"お"
			],
			"example_yomi": [
				"お-く"
			]
		},
		"raw_info": "置\t\t13\t4\t\tチ、お-く"
	},
	"32624": {
		"joyo_kanji": "罰",
		"yomi": {
			"on_yomi": [
				"バツ",
				"バチ"
			]
		},
		"raw_info": "罰\t\t14\t7S\t\tバツ、バチ"
	},
	"32626": {
		"joyo_kanji": "署",
		"kyu_jitai": "署",
		"yomi": {
			"on_yomi": [
				"ショ"
			]
		},
		"raw_info": "署\t署\t13\t6\t\tショ"
	},
	"32629": {
		"joyo_kanji": "罵",
		"yomi": {
			"on_yomi": [
				"バ"
			],
			"kun_yomi": [
				"ののし"
			],
			"example_yomi": [
				"ののし-る"
			]
		},
		"raw_info": "罵\t\t15\t7S\t2010\tバ、ののし-る"
	},
	"32631": {
		"joyo_kanji": "罷",
		"yomi": {
			"on_yomi": [
				"ヒ"
			]
		},
		"raw_info": "罷\t\t15\t7S\t\tヒ"
	},
	"32645": {
		"joyo_kanji": "羅",
		"yomi": {
			"on_yomi": [
				"ラ"
			]
		},
		"raw_info": "羅\t\t19\t7S\t1981\tラ"
	},
	"32650": {
		"joyo_kanji": "羊",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			],
			"kun_yomi": [
				"ひつじ"
			]
		},
		"raw_info": "羊\t\t6\t3\t\tヨウ、ひつじ"
	},
	"32654": {
		"joyo_kanji": "美",
		"yomi": {
			"on_yomi": [
				"ビ"
			],
			"kun_yomi": [
				"うつく"
			],
			"example_yomi": [
				"うつく-しい"
			]
		},
		"raw_info": "美\t\t9\t3\t\tビ、うつく-しい"
	},
	"32670": {
		"joyo_kanji": "羞",
		"yomi": {
			"on_yomi": [
				"シュウ"
			]
		},
		"raw_info": "羞\t\t11\t7S\t2010\tシュウ"
	},
	"32676": {
		"joyo_kanji": "群",
		"kyu_jitai": "羣",
		"yomi": {
			"on_yomi": [
				"グン"
			],
			"kun_yomi": [
				"む",
				"むら"
			],
			"example_yomi": [
				"む-れる",
				"む-れ"
			]
		},
		"raw_info": "群\t羣\t13\t5\t\tグン、む-れる、む-れ、（むら）"
	},
	"32680": {
		"joyo_kanji": "羨",
		"yomi": {
			"on_yomi": [
				"セン"
			],
			"kun_yomi": [
				"うらや"
			],
			"example_yomi": [
				"うらや-む",
				"うらや-ましい"
			]
		},
		"raw_info": "羨\t\t13\t7S\t2010\tセン、うらや-む、うらや-ましい"
	},
	"32681": {
		"joyo_kanji": "義",
		"yomi": {
			"on_yomi": [
				"ギ"
			]
		},
		"raw_info": "義\t\t13\t5\t\tギ"
	},
	"32701": {
		"joyo_kanji": "羽",
		"kyu_jitai": "羽",
		"yomi": {
			"on_yomi": [
				"ウ"
			],
			"kun_yomi": [
				"はね",
				"は"
			]
		},
		"raw_info": "羽\t\t6\t2\t\tウ、は、はね"
	},
	"32705": {
		"joyo_kanji": "翁",
		"yomi": {
			"on_yomi": [
				"オウ"
			]
		},
		"raw_info": "翁\t\t10\t7S\t\tオウ"
	},
	"32716": {
		"joyo_kanji": "翌",
		"yomi": {
			"on_yomi": [
				"ヨク"
			]
		},
		"raw_info": "翌\t\t11\t6\t\tヨク"
	},
	"32722": {
		"joyo_kanji": "習",
		"yomi": {
			"on_yomi": [
				"シュウ"
			],
			"kun_yomi": [
				"なら"
			],
			"example_yomi": [
				"なら-う"
			]
		},
		"raw_info": "習\t\t11\t3\t\tシュウ、なら-う"
	},
	"32763": {
		"joyo_kanji": "翻",
		"kyu_jitai": "飜",
		"yomi": {
			"on_yomi": [
				"ホン"
			],
			"kun_yomi": [
				"ひるがえ"
			],
			"example_yomi": [
				"ひるがえ-る",
				"ひるがえ-す"
			]
		},
		"raw_info": "翻\t飜\t18\t7S\t\tホン、ひるがえ-る、ひるがえ-す"
	},
	"32764": {
		"joyo_kanji": "翼",
		"yomi": {
			"on_yomi": [
				"ヨク"
			],
			"kun_yomi": [
				"つばさ"
			]
		},
		"raw_info": "翼\t\t17\t7S\t\tヨク、つばさ"
	},
	"32769": {
		"joyo_kanji": "老",
		"yomi": {
			"on_yomi": [
				"ロウ"
			],
			"kun_yomi": [
				"お",
				"ふ"
			],
			"example_yomi": [
				"お-いる",
				"ふ-ける"
			]
		},
		"raw_info": "老\t\t6\t4\t\tロウ、お-いる、ふ-ける"
	},
	"32771": {
		"joyo_kanji": "考",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"かんが"
			],
			"example_yomi": [
				"かんが-える"
			]
		},
		"raw_info": "考\t\t6\t2\t\tコウ、かんが-える"
	},
	"32773": {
		"joyo_kanji": "者",
		"kyu_jitai": "者",
		"yomi": {
			"on_yomi": [
				"シャ"
			],
			"kun_yomi": [
				"もの"
			]
		},
		"raw_info": "者\t者\t8\t3\t\tシャ、もの"
	},
	"32784": {
		"joyo_kanji": "耐",
		"yomi": {
			"on_yomi": [
				"タイ"
			],
			"kun_yomi": [
				"た"
			],
			"example_yomi": [
				"た-える"
			]
		},
		"raw_info": "耐\t\t9\t7S\t\tタイ、た-える"
	},
	"32789": {
		"joyo_kanji": "耕",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"たがや"
			],
			"example_yomi": [
				"たがや-す"
			]
		},
		"raw_info": "耕\t\t10\t5\t\tコウ、たがや-す"
	},
	"32791": {
		"joyo_kanji": "耗",
		"yomi": {
			"on_yomi": [
				"モウ",
				"コウ"
			]
		},
		"raw_info": "耗\t\t10\t7S\t\tモウ、（コウ）"
	},
	"32819": {
		"joyo_kanji": "耳",
		"yomi": {
			"on_yomi": [
				"ジ"
			],
			"kun_yomi": [
				"みみ"
			]
		},
		"raw_info": "耳\t\t6\t1\t\tジ、みみ"
	},
	"32854": {
		"joyo_kanji": "聖",
		"yomi": {
			"on_yomi": [
				"セイ"
			]
		},
		"raw_info": "聖\t\t13\t6\t\tセイ"
	},
	"32862": {
		"joyo_kanji": "聞",
		"yomi": {
			"on_yomi": [
				"モン",
				"ブン"
			],
			"kun_yomi": [
				"き"
			],
			"example_yomi": [
				"き-く",
				"き-こえる"
			]
		},
		"raw_info": "聞\t\t14\t2\t\tブン、モン、き-く、き-こえる"
	},
	"32884": {
		"joyo_kanji": "聴",
		"kyu_jitai": "聽",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"き"
			],
			"example_yomi": [
				"き-く"
			]
		},
		"raw_info": "聴\t聽\t17\t7S\t\tチョウ、き-く"
	},
	"32887": {
		"joyo_kanji": "職",
		"yomi": {
			"on_yomi": [
				"ショク"
			]
		},
		"raw_info": "職\t\t18\t5\t\tショク"
	},
	"32905": {
		"joyo_kanji": "肉",
		"yomi": {
			"on_yomi": [
				"ニク"
			]
		},
		"raw_info": "肉\t\t6\t2\t\tニク"
	},
	"32908": {
		"joyo_kanji": "肌",
		"yomi": {
			"kun_yomi": [
				"はだ"
			]
		},
		"raw_info": "肌\t\t6\t7S\t1981\tはだ"
	},
	"32918": {
		"joyo_kanji": "肖",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "肖\t\t7\t7S\t\tショウ"
	},
	"32920": {
		"joyo_kanji": "肘",
		"yomi": {
			"kun_yomi": [
				"ひじ"
			]
		},
		"raw_info": "肘\t\t7\t7S\t2010\tひじ"
	},
	"32925": {
		"joyo_kanji": "肝",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"きも"
			]
		},
		"raw_info": "肝\t\t7\t7S\t\tカン、きも"
	},
	"32929": {
		"joyo_kanji": "股",
		"yomi": {
			"on_yomi": [
				"コ"
			],
			"kun_yomi": [
				"また"
			]
		},
		"raw_info": "股\t\t8\t7S\t2010\tコ、また"
	},
	"32930": {
		"joyo_kanji": "肢",
		"yomi": {
			"on_yomi": [
				"シ"
			]
		},
		"raw_info": "肢\t\t8\t7S\t1981\tシ"
	},
	"32933": {
		"joyo_kanji": "肥",
		"yomi": {
			"on_yomi": [
				"ヒ"
			],
			"kun_yomi": [
				"こ",
				"こえ"
			],
			"example_yomi": [
				"こ-える",
				"こ-やす",
				"こ-やし"
			]
		},
		"raw_info": "肥\t\t8\t5\t\tヒ、こ-える、こえ、こ-やす、こ-やし"
	},
	"32937": {
		"joyo_kanji": "肩",
		"yomi": {
			"on_yomi": [
				"ケン"
			],
			"kun_yomi": [
				"かた"
			]
		},
		"raw_info": "肩\t\t8\t7S\t\tケン、かた"
	},
	"32938": {
		"joyo_kanji": "肪",
		"yomi": {
			"on_yomi": [
				"ボウ"
			]
		},
		"raw_info": "肪\t\t8\t7S\t\tボウ"
	},
	"32943": {
		"joyo_kanji": "肯",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "肯\t\t8\t7S\t\tコウ"
	},
	"32946": {
		"joyo_kanji": "育",
		"yomi": {
			"on_yomi": [
				"イク"
			],
			"kun_yomi": [
				"そだ",
				"はぐく"
			],
			"example_yomi": [
				"そだ-つ",
				"そだ-てる",
				"はぐく-む"
			]
		},
		"raw_info": "育\t\t8\t3\t\tイク、そだ-つ、そだ-てる、はぐく-む"
	},
	"32954": {
		"joyo_kanji": "肺",
		"yomi": {
			"on_yomi": [
				"ハイ"
			]
		},
		"raw_info": "肺\t\t9\t6\t\tハイ"
	},
	"32963": {
		"joyo_kanji": "胃",
		"yomi": {
			"on_yomi": [
				"イ"
			]
		},
		"raw_info": "胃\t\t9\t4\t\tイ"
	},
	"32966": {
		"joyo_kanji": "胆",
		"kyu_jitai": "膽",
		"yomi": {
			"on_yomi": [
				"タン"
			]
		},
		"raw_info": "胆\t膽\t9\t7S\t\tタン"
	},
	"32972": {
		"joyo_kanji": "背",
		"yomi": {
			"on_yomi": [
				"ハイ"
			],
			"kun_yomi": [
				"そむ",
				"せ",
				"せい"
			],
			"example_yomi": [
				"そむ-ける",
				"そむ-く"
			]
		},
		"raw_info": "背\t\t9\t6\t\tハイ、せ、せい、そむ-く、そむ-ける"
	},
	"32974": {
		"joyo_kanji": "胎",
		"yomi": {
			"on_yomi": [
				"タイ"
			]
		},
		"raw_info": "胎\t\t9\t7S\t\tタイ"
	},
	"32990": {
		"joyo_kanji": "胞",
		"yomi": {
			"on_yomi": [
				"ホウ"
			]
		},
		"raw_info": "胞\t\t9\t7S\t\tホウ"
	},
	"33012": {
		"joyo_kanji": "胴",
		"yomi": {
			"on_yomi": [
				"ドウ"
			]
		},
		"raw_info": "胴\t\t10\t7S\t\tドウ"
	},
	"33016": {
		"joyo_kanji": "胸",
		"yomi": {
			"on_yomi": [
				"キョウ"
			],
			"kun_yomi": [
				"むね",
				"むな"
			]
		},
		"raw_info": "胸\t\t10\t6\t\tキョウ、むね、（むな）"
	},
	"33021": {
		"joyo_kanji": "能",
		"yomi": {
			"on_yomi": [
				"ノウ"
			]
		},
		"raw_info": "能\t\t10\t5\t\tノウ"
	},
	"33026": {
		"joyo_kanji": "脂",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"あぶら"
			]
		},
		"raw_info": "脂\t\t10\t7S\t\tシ、あぶら"
	},
	"33029": {
		"joyo_kanji": "脅",
		"yomi": {
			"on_yomi": [
				"キョウ"
			],
			"kun_yomi": [
				"おびや",
				"おど"
			],
			"example_yomi": [
				"おど-かす",
				"おびや-かす",
				"おど-す"
			]
		},
		"raw_info": "脅\t\t10\t7S\t\tキョウ、おびや-かす、おど-す、おど-かす"
	},
	"33031": {
		"joyo_kanji": "脇",
		"yomi": {
			"kun_yomi": [
				"わき"
			]
		},
		"raw_info": "脇\t\t10\t7S\t2010\tわき"
	},
	"33032": {
		"joyo_kanji": "脈",
		"yomi": {
			"on_yomi": [
				"ミャク"
			]
		},
		"raw_info": "脈\t\t10\t4\t\tミャク"
	},
	"33034": {
		"joyo_kanji": "脊",
		"yomi": {
			"on_yomi": [
				"セキ"
			]
		},
		"raw_info": "脊\t\t10\t7S\t2010\tセキ"
	},
	"33050": {
		"joyo_kanji": "脚",
		"yomi": {
			"on_yomi": [
				"キャク",
				"キャ"
			],
			"kun_yomi": [
				"あし"
			]
		},
		"raw_info": "脚\t\t11\t7S\t\tキャク、（キャ）、あし"
	},
	"33073": {
		"joyo_kanji": "脱",
		"yomi": {
			"on_yomi": [
				"ダツ"
			],
			"kun_yomi": [
				"ぬ"
			],
			"example_yomi": [
				"ぬ-ぐ",
				"ぬ-げる"
			]
		},
		"raw_info": "脱\t\t11\t7S\t\tダツ、ぬ-ぐ、ぬ-げる"
	},
	"33075": {
		"joyo_kanji": "脳",
		"kyu_jitai": "腦",
		"yomi": {
			"on_yomi": [
				"ノウ"
			]
		},
		"raw_info": "脳\t腦\t11\t6\t\tノウ"
	},
	"33102": {
		"joyo_kanji": "腎",
		"yomi": {
			"on_yomi": [
				"ジン"
			]
		},
		"raw_info": "腎\t\t13\t7S\t2010\tジン"
	},
	"33104": {
		"joyo_kanji": "腐",
		"yomi": {
			"on_yomi": [
				"フ"
			],
			"kun_yomi": [
				"くさ"
			],
			"example_yomi": [
				"くさ-る",
				"くさ-れる",
				"くさ-らす"
			]
		},
		"raw_info": "腐\t\t14\t7S\t\tフ、くさ-る、くさ-れる、くさ-らす"
	},
	"33109": {
		"joyo_kanji": "腕",
		"yomi": {
			"on_yomi": [
				"ワン"
			],
			"kun_yomi": [
				"うで"
			]
		},
		"raw_info": "腕\t\t12\t7S\t\tワン、うで"
	},
	"33131": {
		"joyo_kanji": "腫",
		"yomi": {
			"on_yomi": [
				"シュ"
			],
			"kun_yomi": [
				"は"
			],
			"example_yomi": [
				"は-れる",
				"は-らす"
			]
		},
		"raw_info": "腫\t\t13\t7S\t2010\tシュ、は-れる、は-らす"
	},
	"33136": {
		"joyo_kanji": "腰",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			],
			"kun_yomi": [
				"こし"
			]
		},
		"raw_info": "腰\t\t13\t7S\t\tヨウ、こし"
	},
	"33144": {
		"joyo_kanji": "腸",
		"yomi": {
			"on_yomi": [
				"チョウ"
			]
		},
		"raw_info": "腸\t\t13\t4\t\tチョウ"
	},
	"33145": {
		"joyo_kanji": "腹",
		"yomi": {
			"on_yomi": [
				"フク"
			],
			"kun_yomi": [
				"はら"
			]
		},
		"raw_info": "腹\t\t13\t6\t\tフク、はら"
	},
	"33146": {
		"joyo_kanji": "腺",
		"yomi": {
			"on_yomi": [
				"セン"
			]
		},
		"raw_info": "腺\t\t13\t7S\t2010\tセン"
	},
	"33178": {
		"joyo_kanji": "膚",
		"yomi": {
			"on_yomi": [
				"フ"
			]
		},
		"raw_info": "膚\t\t15\t7S\t\tフ"
	},
	"33180": {
		"joyo_kanji": "膜",
		"yomi": {
			"on_yomi": [
				"マク"
			]
		},
		"raw_info": "膜\t\t14\t7S\t\tマク"
	},
	"33181": {
		"joyo_kanji": "膝",
		"yomi": {
			"kun_yomi": [
				"ひざ"
			]
		},
		"raw_info": "膝\t\t15\t7S\t2010\tひざ"
	},
	"33192": {
		"joyo_kanji": "膨",
		"yomi": {
			"on_yomi": [
				"ボウ"
			],
			"kun_yomi": [
				"ふく"
			],
			"example_yomi": [
				"ふく-らむ",
				"ふく-れる"
			]
		},
		"raw_info": "膨\t\t16\t7S\t\tボウ、ふく-らむ、ふく-れる"
	},
	"33203": {
		"joyo_kanji": "膳",
		"yomi": {
			"on_yomi": [
				"ゼン"
			]
		},
		"raw_info": "膳\t\t16\t7S\t2010\tゼン"
	},
	"33222": {
		"joyo_kanji": "臆",
		"yomi": {
			"on_yomi": [
				"オク"
			]
		},
		"raw_info": "臆\t\t17\t7S\t2010\tオク"
	},
	"33235": {
		"joyo_kanji": "臓",
		"kyu_jitai": "臟",
		"yomi": {
			"on_yomi": [
				"ゾウ"
			]
		},
		"raw_info": "臓\t臟\t19\t6\t\tゾウ"
	},
	"33251": {
		"joyo_kanji": "臣",
		"yomi": {
			"on_yomi": [
				"ジン",
				"シン"
			]
		},
		"raw_info": "臣\t\t7\t4\t\tシン、ジン"
	},
	"33256": {
		"joyo_kanji": "臨",
		"yomi": {
			"on_yomi": [
				"リン"
			],
			"kun_yomi": [
				"のぞ"
			],
			"example_yomi": [
				"のぞ-む"
			]
		},
		"raw_info": "臨\t\t18\t6\t\tリン、のぞ-む"
	},
	"33258": {
		"joyo_kanji": "自",
		"yomi": {
			"on_yomi": [
				"ジ",
				"シ"
			],
			"kun_yomi": [
				"みずか"
			],
			"example_yomi": [
				"みずか-ら"
			]
		},
		"raw_info": "自\t\t6\t2\t\tジ、シ、みずか-ら"
	},
	"33261": {
		"joyo_kanji": "臭",
		"kyu_jitai": "臭",
		"yomi": {
			"on_yomi": [
				"シュウ"
			],
			"kun_yomi": [
				"くさ",
				"にお"
			],
			"example_yomi": [
				"くさ-い",
				"にお-う"
			]
		},
		"raw_info": "臭\t臭\t9\t7S\t\tシュウ、くさ-い、にお-う"
	},
	"33267": {
		"joyo_kanji": "至",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"いた"
			],
			"example_yomi": [
				"いた-る"
			]
		},
		"raw_info": "至\t\t6\t6\t\tシ、いた-る"
	},
	"33268": {
		"joyo_kanji": "致",
		"yomi": {
			"on_yomi": [
				"チ"
			],
			"kun_yomi": [
				"いた"
			],
			"example_yomi": [
				"いた-す"
			]
		},
		"raw_info": "致\t\t10\t7S\t\tチ、いた-す"
	},
	"33276": {
		"joyo_kanji": "臼",
		"yomi": {
			"on_yomi": [
				"キュウ"
			],
			"kun_yomi": [
				"うす"
			]
		},
		"raw_info": "臼\t\t6\t7S\t2010\tキュウ、うす"
	},
	"33288": {
		"joyo_kanji": "興",
		"yomi": {
			"on_yomi": [
				"コウ",
				"キョウ"
			],
			"kun_yomi": [
				"おこ"
			],
			"example_yomi": [
				"おこ-る",
				"おこ-す"
			]
		},
		"raw_info": "興\t\t16\t5\t\tコウ、キョウ、おこ-る、おこ-す"
	},
	"33292": {
		"joyo_kanji": "舌",
		"yomi": {
			"on_yomi": [
				"ゼツ"
			],
			"kun_yomi": [
				"した"
			]
		},
		"raw_info": "舌\t\t6\t5\t\tゼツ、した"
	},
	"33294": {
		"joyo_kanji": "舎",
		"kyu_jitai": "舍",
		"yomi": {
			"on_yomi": [
				"シャ"
			]
		},
		"raw_info": "舎\t舍\t8\t5\t\tシャ"
	},
	"33303": {
		"joyo_kanji": "舗",
		"kyu_jitai": "舖",
		"yomi": {
			"on_yomi": [
				"ホ"
			]
		},
		"raw_info": "舗\t舖\t15\t7S\t\tホ"
	},
	"33310": {
		"joyo_kanji": "舞",
		"yomi": {
			"on_yomi": [
				"ブ"
			],
			"kun_yomi": [
				"ま",
				"まい"
			],
			"example_yomi": [
				"ま-う"
			]
		},
		"raw_info": "舞\t\t15\t7S\t\tブ、ま-う、まい"
	},
	"33311": {
		"joyo_kanji": "舟",
		"yomi": {
			"on_yomi": [
				"シュウ"
			],
			"kun_yomi": [
				"ふね",
				"ふな"
			]
		},
		"raw_info": "舟\t\t6\t7S\t\tシュウ、ふね、（ふな）"
	},
	"33322": {
		"joyo_kanji": "航",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "航\t\t10\t4\t\tコウ"
	},
	"33324": {
		"joyo_kanji": "般",
		"yomi": {
			"on_yomi": [
				"ハン"
			]
		},
		"raw_info": "般\t\t10\t7S\t\tハン"
	},
	"33334": {
		"joyo_kanji": "舶",
		"yomi": {
			"on_yomi": [
				"ハク"
			]
		},
		"raw_info": "舶\t\t11\t7S\t\tハク"
	},
	"33335": {
		"joyo_kanji": "舷",
		"yomi": {
			"on_yomi": [
				"ゲン"
			]
		},
		"raw_info": "舷\t\t11\t7S\t2010\tゲン"
	},
	"33337": {
		"joyo_kanji": "船",
		"yomi": {
			"on_yomi": [
				"セン"
			],
			"kun_yomi": [
				"ふね",
				"ふな"
			]
		},
		"raw_info": "船\t\t11\t2\t\tセン、ふね、（ふな）"
	},
	"33351": {
		"joyo_kanji": "艇",
		"yomi": {
			"on_yomi": [
				"テイ"
			]
		},
		"raw_info": "艇\t\t13\t7S\t\tテイ"
	},
	"33382": {
		"joyo_kanji": "艦",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "艦\t\t21\t7S\t\tカン"
	},
	"33391": {
		"joyo_kanji": "良",
		"yomi": {
			"on_yomi": [
				"リョウ"
			],
			"kun_yomi": [
				"よ"
			],
			"example_yomi": [
				"よ-い"
			]
		},
		"raw_info": "良\t\t7\t4\t\tリョウ、よ-い"
	},
	"33394": {
		"joyo_kanji": "色",
		"yomi": {
			"on_yomi": [
				"ショク",
				"シキ"
			],
			"kun_yomi": [
				"いろ"
			]
		},
		"raw_info": "色\t\t6\t2\t\tショク、シキ、いろ"
	},
	"33398": {
		"joyo_kanji": "艶",
		"kyu_jitai": "艷",
		"yomi": {
			"on_yomi": [
				"エン"
			],
			"kun_yomi": [
				"つや"
			]
		},
		"raw_info": "艶\t艷\t19\t7S\t2010\tエン、つや"
	},
	"33419": {
		"joyo_kanji": "芋",
		"yomi": {
			"kun_yomi": [
				"いも"
			]
		},
		"raw_info": "芋\t\t6\t7S\t\tいも"
	},
	"33437": {
		"joyo_kanji": "芝",
		"yomi": {
			"kun_yomi": [
				"しば"
			]
		},
		"raw_info": "芝\t\t6\t7S\t\tしば"
	},
	"33455": {
		"joyo_kanji": "芯",
		"yomi": {
			"on_yomi": [
				"シン"
			]
		},
		"raw_info": "芯\t\t7\t7S\t2010\tシン"
	},
	"33457": {
		"joyo_kanji": "花",
		"yomi": {
			"on_yomi": [
				"カ"
			],
			"kun_yomi": [
				"はな"
			]
		},
		"raw_info": "花\t\t7\t1\t\tカ、はな"
	},
	"33459": {
		"joyo_kanji": "芳",
		"yomi": {
			"on_yomi": [
				"ホウ"
			],
			"kun_yomi": [
				"かんば"
			],
			"example_yomi": [
				"かんば-しい"
			]
		},
		"raw_info": "芳\t\t7\t7S\t\tホウ、かんば-しい"
	},
	"33464": {
		"joyo_kanji": "芸",
		"kyu_jitai": "藝",
		"yomi": {
			"on_yomi": [
				"ゲイ"
			]
		},
		"raw_info": "芸\t藝\t7\t4\t\tゲイ"
	},
	"33469": {
		"joyo_kanji": "芽",
		"yomi": {
			"on_yomi": [
				"ガ"
			],
			"kun_yomi": [
				"め"
			]
		},
		"raw_info": "芽\t\t8\t4\t\tガ、め"
	},
	"33495": {
		"joyo_kanji": "苗",
		"yomi": {
			"on_yomi": [
				"ビョウ"
			],
			"kun_yomi": [
				"なえ",
				"なわ"
			]
		},
		"raw_info": "苗\t\t8\t7S\t\tビョウ、なえ、（なわ）"
	},
	"33499": {
		"joyo_kanji": "苛",
		"yomi": {
			"on_yomi": [
				"カ"
			]
		},
		"raw_info": "苛\t\t8\t7S\t2010\tカ"
	},
	"33509": {
		"joyo_kanji": "若",
		"yomi": {
			"on_yomi": [
				"ジャク",
				"ニャク"
			],
			"kun_yomi": [
				"わか",
				"も"
			],
			"example_yomi": [
				"わか-い",
				"も-しくは"
			]
		},
		"raw_info": "若\t\t8\t6\t\tジャク、（ニャク）、わか-い、も-しくは"
	},
	"33510": {
		"joyo_kanji": "苦",
		"yomi": {
			"on_yomi": [
				"ク"
			],
			"kun_yomi": [
				"くる",
				"にが"
			],
			"example_yomi": [
				"くる-しい",
				"くる-しむ",
				"くる-しめる",
				"にが-い",
				"にが-る"
			]
		},
		"raw_info": "苦\t\t8\t3\t\tク、くる-しい、くる-しむ、くる-しめる、にが-い、にが-る"
	},
	"33521": {
		"joyo_kanji": "英",
		"yomi": {
			"on_yomi": [
				"エイ"
			]
		},
		"raw_info": "英\t\t8\t4\t\tエイ"
	},
	"33538": {
		"joyo_kanji": "茂",
		"yomi": {
			"on_yomi": [
				"モ"
			],
			"kun_yomi": [
				"しげ"
			],
			"example_yomi": [
				"しげ-る"
			]
		},
		"raw_info": "茂\t\t8\t7S\t\tモ、しげ-る"
	},
	"33550": {
		"joyo_kanji": "茎",
		"kyu_jitai": "莖",
		"yomi": {
			"on_yomi": [
				"ケイ"
			],
			"kun_yomi": [
				"くき"
			]
		},
		"raw_info": "茎\t莖\t8\t7S\t\tケイ、くき"
	},
	"33576": {
		"joyo_kanji": "茨",
		"yomi": {
			"kun_yomi": [
				"いばら"
			]
		},
		"raw_info": "茨\t\t9\t7S\t2010\t（いばら）"
	},
	"33590": {
		"joyo_kanji": "茶",
		"yomi": {
			"on_yomi": [
				"チャ",
				"サ"
			]
		},
		"raw_info": "茶\t\t9\t2\t\tチャ、サ"
	},
	"33609": {
		"joyo_kanji": "草",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"くさ"
			]
		},
		"raw_info": "草\t\t9\t1\t\tソウ、くさ"
	},
	"33618": {
		"joyo_kanji": "荒",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"あら",
				"あ"
			],
			"example_yomi": [
				"あ-らす",
				"あら-い",
				"あ-れる"
			]
		},
		"raw_info": "荒\t\t9\t7S\t\tコウ、あら-い、あ-れる、あ-らす"
	},
	"33624": {
		"joyo_kanji": "荘",
		"kyu_jitai": "莊",
		"yomi": {
			"on_yomi": [
				"ソウ"
			]
		},
		"raw_info": "荘\t莊\t9\t7S\t\tソウ"
	},
	"33655": {
		"joyo_kanji": "荷",
		"yomi": {
			"on_yomi": [
				"カ"
			],
			"kun_yomi": [
				"に"
			]
		},
		"raw_info": "荷\t\t10\t3\t\tカ、に"
	},
	"33738": {
		"joyo_kanji": "菊",
		"yomi": {
			"on_yomi": [
				"キク"
			]
		},
		"raw_info": "菊\t\t11\t7S\t\tキク"
	},
	"33740": {
		"joyo_kanji": "菌",
		"yomi": {
			"on_yomi": [
				"キン"
			]
		},
		"raw_info": "菌\t\t11\t7S\t\tキン"
	},
	"33747": {
		"joyo_kanji": "菓",
		"yomi": {
			"on_yomi": [
				"カ"
			]
		},
		"raw_info": "菓\t\t11\t7S\t\tカ"
	},
	"33756": {
		"joyo_kanji": "菜",
		"yomi": {
			"on_yomi": [
				"サイ"
			],
			"kun_yomi": [
				"な"
			]
		},
		"raw_info": "菜\t\t11\t4\t\tサイ、な"
	},
	"33775": {
		"joyo_kanji": "華",
		"yomi": {
			"on_yomi": [
				"カ",
				"ケ"
			],
			"kun_yomi": [
				"はな"
			]
		},
		"raw_info": "華\t\t10\t7S\t\tカ、（ケ）、はな"
	},
	"33806": {
		"joyo_kanji": "萎",
		"yomi": {
			"on_yomi": [
				"イ"
			],
			"kun_yomi": [
				"な"
			],
			"example_yomi": [
				"な-える"
			]
		},
		"raw_info": "萎\t\t11\t7S\t2010\tイ、な-える"
	},
	"33853": {
		"joyo_kanji": "落",
		"yomi": {
			"on_yomi": [
				"ラク"
			],
			"kun_yomi": [
				"お"
			],
			"example_yomi": [
				"お-ちる",
				"お-とす"
			]
		},
		"raw_info": "落\t\t12\t3\t\tラク、お-ちる、お-とす"
	},
	"33865": {
		"joyo_kanji": "葉",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			],
			"kun_yomi": [
				"は"
			]
		},
		"raw_info": "葉\t\t12\t3\t\tヨウ、は"
	},
	"33879": {
		"joyo_kanji": "著",
		"kyu_jitai": "著",
		"yomi": {
			"on_yomi": [
				"チョ"
			],
			"kun_yomi": [
				"あらわ",
				"いちじる"
			],
			"example_yomi": [
				"あらわ-す",
				"いちじる-しい"
			]
		},
		"raw_info": "著\t著\t11\t6\t\tチョ、あらわ-す、いちじる-しい"
	},
	"33883": {
		"joyo_kanji": "葛",
		"yomi": {
			"on_yomi": [
				"カツ"
			],
			"kun_yomi": [
				"くず"
			]
		},
		"raw_info": "葛\t\t12\t7S\t2010\tカツ、くず"
	},
	"33900": {
		"joyo_kanji": "葬",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"ほうむ"
			],
			"example_yomi": [
				"ほうむ-る"
			]
		},
		"raw_info": "葬\t\t12\t7S\t\tソウ、ほうむ-る"
	},
	"33976": {
		"joyo_kanji": "蒸",
		"yomi": {
			"on_yomi": [
				"ジョウ"
			],
			"kun_yomi": [
				"む"
			],
			"example_yomi": [
				"む-す",
				"む-れる",
				"む-らす"
			]
		},
		"raw_info": "蒸\t\t13\t6\t\tジョウ、む-す、む-れる、む-らす"
	},
	"33988": {
		"joyo_kanji": "蓄",
		"yomi": {
			"on_yomi": [
				"チク"
			],
			"kun_yomi": [
				"たくわ"
			],
			"example_yomi": [
				"たくわ-える"
			]
		},
		"raw_info": "蓄\t\t13\t7S\t\tチク、たくわ-える"
	},
	"33995": {
		"joyo_kanji": "蓋",
		"yomi": {
			"on_yomi": [
				"ガイ"
			],
			"kun_yomi": [
				"ふた"
			]
		},
		"raw_info": "蓋\t\t13\t7S\t2010\tガイ、ふた"
	},
	"34065": {
		"joyo_kanji": "蔑",
		"yomi": {
			"on_yomi": [
				"ベツ"
			],
			"kun_yomi": [
				"さげす"
			],
			"example_yomi": [
				"さげす-む"
			]
		},
		"raw_info": "蔑\t\t14\t7S\t2010\tベツ、さげす-む"
	},
	"34101": {
		"joyo_kanji": "蔵",
		"kyu_jitai": "藏",
		"yomi": {
			"on_yomi": [
				"ゾウ"
			],
			"kun_yomi": [
				"くら"
			]
		},
		"raw_info": "蔵\t藏\t15\t6\t\tゾウ、くら"
	},
	"34109": {
		"joyo_kanji": "蔽",
		"yomi": {
			"on_yomi": [
				"ヘイ"
			]
		},
		"raw_info": "蔽\t\t15\t7S\t2010\tヘイ"
	},
	"34180": {
		"joyo_kanji": "薄",
		"yomi": {
			"on_yomi": [
				"ハク"
			],
			"kun_yomi": [
				"うす"
			],
			"example_yomi": [
				"うす-い",
				"うす-める",
				"うす-まる",
				"うす-らぐ",
				"うす-れる"
			]
		},
		"raw_info": "薄\t\t16\t7S\t\tハク、うす-い、うす-める、うす-まる、うす-らぐ、うす-れる"
	},
	"34214": {
		"joyo_kanji": "薦",
		"yomi": {
			"on_yomi": [
				"セン"
			],
			"kun_yomi": [
				"すす"
			],
			"example_yomi": [
				"すす-める"
			]
		},
		"raw_info": "薦\t\t16\t7S\t\tセン、すす-める"
	},
	"34218": {
		"joyo_kanji": "薪",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"たきぎ"
			]
		},
		"raw_info": "薪\t\t16\t7S\t\tシン、たきぎ"
	},
	"34219": {
		"joyo_kanji": "薫",
		"kyu_jitai": "薰",
		"yomi": {
			"on_yomi": [
				"クン"
			],
			"kun_yomi": [
				"かお"
			],
			"example_yomi": [
				"かお-る"
			]
		},
		"raw_info": "薫\t薰\t16\t7S\t\tクン、かお-る"
	},
	"34220": {
		"joyo_kanji": "薬",
		"kyu_jitai": "藥",
		"yomi": {
			"on_yomi": [
				"ヤク"
			],
			"kun_yomi": [
				"くすり"
			]
		},
		"raw_info": "薬\t藥\t16\t3\t\tヤク、くすり"
	},
	"34253": {
		"joyo_kanji": "藍",
		"yomi": {
			"on_yomi": [
				"ラン"
			],
			"kun_yomi": [
				"あい"
			]
		},
		"raw_info": "藍\t\t18\t7S\t2010\tラン、あい"
	},
	"34276": {
		"joyo_kanji": "藤",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"ふじ"
			]
		},
		"raw_info": "藤\t\t18\t7S\t2010\tトウ、ふじ"
	},
	"34281": {
		"joyo_kanji": "藩",
		"yomi": {
			"on_yomi": [
				"ハン"
			]
		},
		"raw_info": "藩\t\t18\t7S\t\tハン"
	},
	"34299": {
		"joyo_kanji": "藻",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"も"
			]
		},
		"raw_info": "藻\t\t19\t7S\t1981\tソウ、も"
	},
	"34382": {
		"joyo_kanji": "虎",
		"yomi": {
			"on_yomi": [
				"コ"
			],
			"kun_yomi": [
				"とら"
			]
		},
		"raw_info": "虎\t\t8\t7S\t2010\tコ、とら"
	},
	"34384": {
		"joyo_kanji": "虐",
		"yomi": {
			"on_yomi": [
				"ギャク"
			],
			"kun_yomi": [
				"しいた"
			],
			"example_yomi": [
				"しいた-げる"
			]
		},
		"raw_info": "虐\t\t9\t7S\t\tギャク、しいた-げる"
	},
	"34394": {
		"joyo_kanji": "虚",
		"kyu_jitai": "虛",
		"yomi": {
			"on_yomi": [
				"コ",
				"キョ"
			]
		},
		"raw_info": "虚\t虛\t11\t7S\t\tキョ、（コ）"
	},
	"34396": {
		"joyo_kanji": "虜",
		"kyu_jitai": "虜",
		"yomi": {
			"on_yomi": [
				"リョ"
			]
		},
		"raw_info": "虜\t虜\t13\t7S\t\tリョ"
	},
	"34398": {
		"joyo_kanji": "虞",
		"yomi": {
			"kun_yomi": [
				"おそれ"
			]
		},
		"raw_info": "虞\t\t13\t7S\t\tおそれ"
	},
	"34411": {
		"joyo_kanji": "虫",
		"kyu_jitai": "蟲",
		"yomi": {
			"on_yomi": [
				"チュウ"
			],
			"kun_yomi": [
				"むし"
			]
		},
		"raw_info": "虫\t蟲\t6\t1\t\tチュウ、むし"
	},
	"34425": {
		"joyo_kanji": "虹",
		"yomi": {
			"kun_yomi": [
				"にじ"
			]
		},
		"raw_info": "虹\t\t9\t7S\t2010\tにじ"
	},
	"34442": {
		"joyo_kanji": "蚊",
		"yomi": {
			"kun_yomi": [
				"か"
			]
		},
		"raw_info": "蚊\t\t10\t7S\t\tか"
	},
	"34453": {
		"joyo_kanji": "蚕",
		"kyu_jitai": "蠶",
		"yomi": {
			"on_yomi": [
				"サン"
			],
			"kun_yomi": [
				"かいこ"
			]
		},
		"raw_info": "蚕\t蠶\t10\t6\t\tサン、かいこ"
	},
	"34503": {
		"joyo_kanji": "蛇",
		"yomi": {
			"on_yomi": [
				"ジャ",
				"ダ"
			],
			"kun_yomi": [
				"へび"
			]
		},
		"raw_info": "蛇\t\t11\t7S\t1981\tジャ、ダ、へび"
	},
	"34509": {
		"joyo_kanji": "蛍",
		"kyu_jitai": "螢",
		"yomi": {
			"on_yomi": [
				"ケイ"
			],
			"kun_yomi": [
				"ほたる"
			]
		},
		"raw_info": "蛍\t螢\t11\t7S\t1981\tケイ、ほたる"
	},
	"34542": {
		"joyo_kanji": "蛮",
		"kyu_jitai": "蠻",
		"yomi": {
			"on_yomi": [
				"バン"
			]
		},
		"raw_info": "蛮\t蠻\t12\t7S\t\tバン"
	},
	"34562": {
		"joyo_kanji": "蜂",
		"yomi": {
			"on_yomi": [
				"ホウ"
			],
			"kun_yomi": [
				"はち"
			]
		},
		"raw_info": "蜂\t\t13\t7S\t2010\tホウ、はち"
	},
	"34588": {
		"joyo_kanji": "蜜",
		"yomi": {
			"on_yomi": [
				"ミツ"
			]
		},
		"raw_info": "蜜\t\t14\t7S\t2010\tミツ"
	},
	"34701": {
		"joyo_kanji": "融",
		"yomi": {
			"on_yomi": [
				"ユウ"
			]
		},
		"raw_info": "融\t\t16\t7S\t\tユウ"
	},
	"34880": {
		"joyo_kanji": "血",
		"yomi": {
			"on_yomi": [
				"ケツ"
			],
			"kun_yomi": [
				"ち"
			]
		},
		"raw_info": "血\t\t6\t3\t\tケツ、ち"
	},
	"34886": {
		"joyo_kanji": "衆",
		"yomi": {
			"on_yomi": [
				"シュウ",
				"シュ"
			]
		},
		"raw_info": "衆\t\t12\t6\t\tシュウ、（シュ）"
	},
	"34892": {
		"joyo_kanji": "行",
		"yomi": {
			"on_yomi": [
				"コウ",
				"ギョウ",
				"アン"
			],
			"kun_yomi": [
				"い",
				"ゆ",
				"おこな"
			],
			"example_yomi": [
				"おこな-う",
				"い-く",
				"ゆ-く"
			]
		},
		"raw_info": "行\t\t6\t2\t\tコウ、ギョウ、（アン）、い-く、ゆ-く、おこな-う"
	},
	"34899": {
		"joyo_kanji": "術",
		"yomi": {
			"on_yomi": [
				"ジュツ"
			]
		},
		"raw_info": "術\t\t11\t5\t\tジュツ"
	},
	"34903": {
		"joyo_kanji": "街",
		"yomi": {
			"on_yomi": [
				"ガイ",
				"カイ"
			],
			"kun_yomi": [
				"まち"
			]
		},
		"raw_info": "街\t\t12\t4\t\tガイ、（カイ）、まち"
	},
	"34907": {
		"joyo_kanji": "衛",
		"kyu_jitai": "衞",
		"yomi": {
			"on_yomi": [
				"エイ"
			]
		},
		"raw_info": "衛\t衞\t16\t5\t\tエイ"
	},
	"34909": {
		"joyo_kanji": "衝",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "衝\t\t15\t7S\t\tショウ"
	},
	"34913": {
		"joyo_kanji": "衡",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "衡\t\t16\t7S\t\tコウ"
	},
	"34915": {
		"joyo_kanji": "衣",
		"yomi": {
			"on_yomi": [
				"イ"
			],
			"kun_yomi": [
				"ころも"
			]
		},
		"raw_info": "衣\t\t6\t4\t\tイ、ころも"
	},
	"34920": {
		"joyo_kanji": "表",
		"yomi": {
			"on_yomi": [
				"ヒョウ"
			],
			"kun_yomi": [
				"あらわ",
				"おもて"
			],
			"example_yomi": [
				"あらわ-す",
				"あらわ-れる"
			]
		},
		"raw_info": "表\t\t8\t3\t\tヒョウ、おもて、あらわ-す、あらわ-れる"
	},
	"34928": {
		"joyo_kanji": "衰",
		"yomi": {
			"on_yomi": [
				"スイ"
			],
			"kun_yomi": [
				"おとろ"
			],
			"example_yomi": [
				"おとろ-える"
			]
		},
		"raw_info": "衰\t\t10\t7S\t\tスイ、おとろ-える"
	},
	"34935": {
		"joyo_kanji": "衷",
		"yomi": {
			"on_yomi": [
				"チュウ"
			]
		},
		"raw_info": "衷\t\t10\t7S\t\tチュウ"
	},
	"34955": {
		"joyo_kanji": "袋",
		"yomi": {
			"on_yomi": [
				"タイ"
			],
			"kun_yomi": [
				"ふくろ"
			]
		},
		"raw_info": "袋\t\t11\t7S\t\tタイ、ふくろ"
	},
	"34966": {
		"joyo_kanji": "袖",
		"yomi": {
			"on_yomi": [
				"シュウ"
			],
			"kun_yomi": [
				"そで"
			]
		},
		"raw_info": "袖\t\t10\t7S\t2010\tシュウ、そで"
	},
	"34987": {
		"joyo_kanji": "被",
		"yomi": {
			"on_yomi": [
				"ヒ"
			],
			"kun_yomi": [
				"こうむ"
			],
			"example_yomi": [
				"こうむ-る"
			]
		},
		"raw_info": "被\t\t10\t7S\t\tヒ、こうむ-る"
	},
	"35009": {
		"joyo_kanji": "裁",
		"yomi": {
			"on_yomi": [
				"サイ"
			],
			"kun_yomi": [
				"た",
				"さば"
			],
			"example_yomi": [
				"さば-く",
				"た-つ"
			]
		},
		"raw_info": "裁\t\t12\t6\t\tサイ、た-つ、さば-く"
	},
	"35010": {
		"joyo_kanji": "裂",
		"yomi": {
			"on_yomi": [
				"レツ"
			],
			"kun_yomi": [
				"さ"
			],
			"example_yomi": [
				"さ-く",
				"さ-ける"
			]
		},
		"raw_info": "裂\t\t12\t7S\t\tレツ、さ-く、さ-ける"
	},
	"35013": {
		"joyo_kanji": "装",
		"kyu_jitai": "裝",
		"yomi": {
			"on_yomi": [
				"ソウ",
				"ショウ"
			],
			"kun_yomi": [
				"よそお"
			],
			"example_yomi": [
				"よそお-う"
			]
		},
		"raw_info": "装\t裝\t12\t6\t\tソウ、ショウ、よそお-う"
	},
	"35023": {
		"joyo_kanji": "裏",
		"yomi": {
			"on_yomi": [
				"リ"
			],
			"kun_yomi": [
				"うら"
			]
		},
		"raw_info": "裏\t\t13\t6\t\tリ、うら"
	},
	"35029": {
		"joyo_kanji": "裕",
		"yomi": {
			"on_yomi": [
				"ユウ"
			]
		},
		"raw_info": "裕\t\t12\t7S\t\tユウ"
	},
	"35036": {
		"joyo_kanji": "補",
		"yomi": {
			"on_yomi": [
				"ホ"
			],
			"kun_yomi": [
				"おぎな"
			],
			"example_yomi": [
				"おぎな-う"
			]
		},
		"raw_info": "補\t\t12\t6\t\tホ、おぎな-う"
	},
	"35064": {
		"joyo_kanji": "裸",
		"yomi": {
			"on_yomi": [
				"ラ"
			],
			"kun_yomi": [
				"はだか"
			]
		},
		"raw_info": "裸\t\t13\t7S\t\tラ、はだか"
	},
	"35069": {
		"joyo_kanji": "製",
		"yomi": {
			"on_yomi": [
				"セイ"
			]
		},
		"raw_info": "製\t\t14\t5\t\tセイ"
	},
	"35070": {
		"joyo_kanji": "裾",
		"yomi": {
			"kun_yomi": [
				"すそ"
			]
		},
		"raw_info": "裾\t\t13\t7S\t2010\tすそ"
	},
	"35079": {
		"joyo_kanji": "複",
		"yomi": {
			"on_yomi": [
				"フク"
			]
		},
		"raw_info": "複\t\t14\t5\t\tフク"
	},
	"35088": {
		"joyo_kanji": "褐",
		"kyu_jitai": "褐",
		"yomi": {
			"on_yomi": [
				"カツ"
			]
		},
		"raw_info": "褐\t褐\t13\t7S\t1981\tカツ"
	},
	"35090": {
		"joyo_kanji": "褒",
		"kyu_jitai": "襃",
		"yomi": {
			"on_yomi": [
				"ホウ"
			],
			"kun_yomi": [
				"ほ"
			],
			"example_yomi": [
				"ほ-める"
			]
		},
		"raw_info": "褒\t襃\t15\t7S\t1981\tホウ、ほ-める"
	},
	"35167": {
		"joyo_kanji": "襟",
		"yomi": {
			"on_yomi": [
				"キン"
			],
			"kun_yomi": [
				"えり"
			]
		},
		"raw_info": "襟\t\t18\t7S\t1981\tキン、えり"
	},
	"35186": {
		"joyo_kanji": "襲",
		"yomi": {
			"on_yomi": [
				"シュウ"
			],
			"kun_yomi": [
				"おそ"
			],
			"example_yomi": [
				"おそ-う"
			]
		},
		"raw_info": "襲\t\t22\t7S\t\tシュウ、おそ-う"
	},
	"35199": {
		"joyo_kanji": "西",
		"yomi": {
			"on_yomi": [
				"セイ",
				"サイ"
			],
			"kun_yomi": [
				"にし"
			]
		},
		"raw_info": "西\t\t6\t2\t\tセイ、サイ、にし"
	},
	"35201": {
		"joyo_kanji": "要",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			],
			"kun_yomi": [
				"い",
				"かなめ"
			],
			"example_yomi": [
				"い-る"
			]
		},
		"raw_info": "要\t\t9\t4\t\tヨウ、かなめ、い-る"
	},
	"35206": {
		"joyo_kanji": "覆",
		"yomi": {
			"on_yomi": [
				"フク"
			],
			"kun_yomi": [
				"おお",
				"くつがえ"
			],
			"example_yomi": [
				"くつがえ-す",
				"くつがえ-る",
				"おお-う"
			]
		},
		"raw_info": "覆\t\t18\t7S\t\tフク、おお-う、くつがえ-す、くつがえ-る"
	},
	"35207": {
		"joyo_kanji": "覇",
		"kyu_jitai": "霸",
		"yomi": {
			"on_yomi": [
				"ハ"
			]
		},
		"raw_info": "覇\t霸\t19\t7S\t1981\tハ"
	},
	"35211": {
		"joyo_kanji": "見",
		"yomi": {
			"on_yomi": [
				"ケン"
			],
			"kun_yomi": [
				"み"
			],
			"example_yomi": [
				"み-る",
				"み-える",
				"み-せる"
			]
		},
		"raw_info": "見\t\t7\t1\t\tケン、み-る、み-える、み-せる"
	},
	"35215": {
		"joyo_kanji": "規",
		"yomi": {
			"on_yomi": [
				"キ"
			]
		},
		"raw_info": "規\t\t11\t5\t\tキ"
	},
	"35222": {
		"joyo_kanji": "視",
		"kyu_jitai": "視",
		"yomi": {
			"on_yomi": [
				"シ"
			]
		},
		"raw_info": "視\t視\t11\t6\t\tシ"
	},
	"35226": {
		"joyo_kanji": "覚",
		"kyu_jitai": "覺",
		"yomi": {
			"on_yomi": [
				"カク"
			],
			"kun_yomi": [
				"おぼ",
				"さ"
			],
			"example_yomi": [
				"おぼ-える",
				"さ-ます",
				"さ-める"
			]
		},
		"raw_info": "覚\t覺\t12\t4\t\tカク、おぼ-える、さ-ます、さ-める"
	},
	"35239": {
		"joyo_kanji": "覧",
		"kyu_jitai": "覽",
		"yomi": {
			"on_yomi": [
				"ラン"
			]
		},
		"raw_info": "覧\t覽\t17\t6\t\tラン"
	},
	"35242": {
		"joyo_kanji": "親",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"おや",
				"した"
			],
			"example_yomi": [
				"した-しむ",
				"した-しい"
			]
		},
		"raw_info": "親\t\t16\t2\t\tシン、おや、した-しい、した-しむ"
	},
	"35251": {
		"joyo_kanji": "観",
		"kyu_jitai": "觀",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "観\t觀\t18\t4\t\tカン"
	},
	"35282": {
		"joyo_kanji": "角",
		"yomi": {
			"on_yomi": [
				"カク"
			],
			"kun_yomi": [
				"かど",
				"つの"
			]
		},
		"raw_info": "角\t\t7\t2\t\tカク、かど、つの"
	},
	"35299": {
		"joyo_kanji": "解",
		"yomi": {
			"on_yomi": [
				"カイ",
				"ゲ"
			],
			"kun_yomi": [
				"と"
			],
			"example_yomi": [
				"と-く",
				"と-かす",
				"と-ける"
			]
		},
		"raw_info": "解\t\t13\t5\t\tカイ、ゲ、と-く、と-かす、と-ける"
	},
	"35302": {
		"joyo_kanji": "触",
		"kyu_jitai": "觸",
		"yomi": {
			"on_yomi": [
				"ショク"
			],
			"kun_yomi": [
				"ふ",
				"さわ"
			],
			"example_yomi": [
				"ふ-れる",
				"さわ-る"
			]
		},
		"raw_info": "触\t觸\t13\t7S\t\tショク、ふ-れる、さわ-る"
	},
	"35328": {
		"joyo_kanji": "言",
		"yomi": {
			"on_yomi": [
				"ゲン",
				"ゴン"
			],
			"kun_yomi": [
				"い",
				"こと"
			],
			"example_yomi": [
				"い-う"
			]
		},
		"raw_info": "言\t\t7\t2\t\tゲン、ゴン、い-う、こと"
	},
	"35330": {
		"joyo_kanji": "訂",
		"yomi": {
			"on_yomi": [
				"テイ"
			]
		},
		"raw_info": "訂\t\t9\t7S\t\tテイ"
	},
	"35331": {
		"joyo_kanji": "訃",
		"yomi": {
			"on_yomi": [
				"フ"
			]
		},
		"raw_info": "訃\t\t9\t7S\t2010\tフ"
	},
	"35336": {
		"joyo_kanji": "計",
		"yomi": {
			"on_yomi": [
				"ケイ"
			],
			"kun_yomi": [
				"はか"
			],
			"example_yomi": [
				"はか-らう",
				"はか-る"
			]
		},
		"raw_info": "計\t\t9\t2\t\tケイ、はか-る、はか-らう"
	},
	"35342": {
		"joyo_kanji": "討",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"う"
			],
			"example_yomi": [
				"う-つ"
			]
		},
		"raw_info": "討\t\t10\t6\t\tトウ、う-つ"
	},
	"35347": {
		"joyo_kanji": "訓",
		"yomi": {
			"on_yomi": [
				"クン"
			]
		},
		"raw_info": "訓\t\t10\t4\t\tクン"
	},
	"35351": {
		"joyo_kanji": "託",
		"yomi": {
			"on_yomi": [
				"タク"
			]
		},
		"raw_info": "託\t\t10\t7S\t\tタク"
	},
	"35352": {
		"joyo_kanji": "記",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"しる"
			],
			"example_yomi": [
				"しる-す"
			]
		},
		"raw_info": "記\t\t10\t2\t\tキ、しる-す"
	},
	"35359": {
		"joyo_kanji": "訟",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "訟\t\t11\t7S\t\tショウ"
	},
	"35370": {
		"joyo_kanji": "訪",
		"yomi": {
			"on_yomi": [
				"ホウ"
			],
			"kun_yomi": [
				"たず",
				"おとず"
			],
			"example_yomi": [
				"おとず-れる",
				"たず-ねる"
			]
		},
		"raw_info": "訪\t\t11\t6\t\tホウ、おとず-れる、たず-ねる"
	},
	"35373": {
		"joyo_kanji": "設",
		"yomi": {
			"on_yomi": [
				"セツ"
			],
			"kun_yomi": [
				"もう"
			],
			"example_yomi": [
				"もう-ける"
			]
		},
		"raw_info": "設\t\t11\t5\t\tセツ、もう-ける"
	},
	"35377": {
		"joyo_kanji": "許",
		"yomi": {
			"on_yomi": [
				"キョ"
			],
			"kun_yomi": [
				"ゆる"
			],
			"example_yomi": [
				"ゆる-す"
			]
		},
		"raw_info": "許\t\t11\t5\t\tキョ、ゆる-す"
	},
	"35379": {
		"joyo_kanji": "訳",
		"kyu_jitai": "譯",
		"yomi": {
			"on_yomi": [
				"ヤク"
			],
			"kun_yomi": [
				"わけ"
			]
		},
		"raw_info": "訳\t譯\t11\t6\t\tヤク、わけ"
	},
	"35380": {
		"joyo_kanji": "訴",
		"yomi": {
			"on_yomi": [
				"ソ"
			],
			"kun_yomi": [
				"うった"
			],
			"example_yomi": [
				"うった-える"
			]
		},
		"raw_info": "訴\t\t12\t7S\t\tソ、うった-える"
	},
	"35386": {
		"joyo_kanji": "診",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"み"
			],
			"example_yomi": [
				"み-る"
			]
		},
		"raw_info": "診\t\t12\t7S\t\tシン、み-る"
	},
	"35388": {
		"joyo_kanji": "証",
		"kyu_jitai": "證",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "証\t證\t12\t5\t\tショウ"
	},
	"35408": {
		"joyo_kanji": "詐",
		"yomi": {
			"on_yomi": [
				"サ"
			]
		},
		"raw_info": "詐\t\t12\t7S\t\tサ"
	},
	"35412": {
		"joyo_kanji": "詔",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"みことのり"
			]
		},
		"raw_info": "詔\t\t12\t7S\t\tショウ、みことのり"
	},
	"35413": {
		"joyo_kanji": "評",
		"yomi": {
			"on_yomi": [
				"ヒョウ"
			]
		},
		"raw_info": "評\t\t12\t5\t\tヒョウ"
	},
	"35422": {
		"joyo_kanji": "詞",
		"yomi": {
			"on_yomi": [
				"シ"
			]
		},
		"raw_info": "詞\t\t12\t6\t\tシ"
	},
	"35424": {
		"joyo_kanji": "詠",
		"yomi": {
			"on_yomi": [
				"エイ"
			],
			"kun_yomi": [
				"よ"
			],
			"example_yomi": [
				"よ-む"
			]
		},
		"raw_info": "詠\t\t12\t7S\t\tエイ、よ-む"
	},
	"35427": {
		"joyo_kanji": "詣",
		"yomi": {
			"on_yomi": [
				"ケイ"
			],
			"kun_yomi": [
				"もう"
			],
			"example_yomi": [
				"もう-でる"
			]
		},
		"raw_info": "詣\t\t13\t7S\t2010\tケイ、もう-でる"
	},
	"35430": {
		"joyo_kanji": "試",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"こころ",
				"ため"
			],
			"example_yomi": [
				"こころ-みる",
				"ため-す"
			]
		},
		"raw_info": "試\t\t13\t4\t\tシ、こころ-みる、ため-す"
	},
	"35433": {
		"joyo_kanji": "詩",
		"yomi": {
			"on_yomi": [
				"シ"
			]
		},
		"raw_info": "詩\t\t13\t3\t\tシ"
	},
	"35438": {
		"joyo_kanji": "詮",
		"yomi": {
			"on_yomi": [
				"セン"
			]
		},
		"raw_info": "詮\t\t13\t7S\t2010\tセン"
	},
	"35440": {
		"joyo_kanji": "詰",
		"yomi": {
			"on_yomi": [
				"キツ"
			],
			"kun_yomi": [
				"つ"
			],
			"example_yomi": [
				"つ-める",
				"つ-まる",
				"つ-む"
			]
		},
		"raw_info": "詰\t\t13\t7S\t\tキツ、つ-める、つ-まる、つ-む"
	},
	"35441": {
		"joyo_kanji": "話",
		"yomi": {
			"on_yomi": [
				"ワ"
			],
			"kun_yomi": [
				"はな",
				"はなし"
			],
			"example_yomi": [
				"はな-す"
			]
		},
		"raw_info": "話\t\t13\t2\t\tワ、はな-す、はなし"
	},
	"35442": {
		"joyo_kanji": "該",
		"yomi": {
			"on_yomi": [
				"ガイ"
			]
		},
		"raw_info": "該\t\t13\t7S\t\tガイ"
	},
	"35443": {
		"joyo_kanji": "詳",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"くわ"
			],
			"example_yomi": [
				"くわ-しい"
			]
		},
		"raw_info": "詳\t\t13\t7S\t\tショウ、くわ-しい"
	},
	"35463": {
		"joyo_kanji": "誇",
		"yomi": {
			"on_yomi": [
				"コ"
			],
			"kun_yomi": [
				"ほこ"
			],
			"example_yomi": [
				"ほこ-る"
			]
		},
		"raw_info": "誇\t\t13\t7S\t\tコ、ほこ-る"
	},
	"35465": {
		"joyo_kanji": "誉",
		"kyu_jitai": "譽",
		"yomi": {
			"on_yomi": [
				"ヨ"
			],
			"kun_yomi": [
				"ほま"
			],
			"example_yomi": [
				"ほま-れ"
			]
		},
		"raw_info": "誉\t譽\t13\t7S\t\tヨ、ほま-れ"
	},
	"35468": {
		"joyo_kanji": "誌",
		"yomi": {
			"on_yomi": [
				"シ"
			]
		},
		"raw_info": "誌\t\t14\t6\t\tシ"
	},
	"35469": {
		"joyo_kanji": "認",
		"yomi": {
			"on_yomi": [
				"ニン"
			],
			"kun_yomi": [
				"みと"
			],
			"example_yomi": [
				"みと-める"
			]
		},
		"raw_info": "認\t\t14\t6\t\tニン、みと-める"
	},
	"35475": {
		"joyo_kanji": "誓",
		"yomi": {
			"on_yomi": [
				"セイ"
			],
			"kun_yomi": [
				"ちか"
			],
			"example_yomi": [
				"ちか-う"
			]
		},
		"raw_info": "誓\t\t14\t7S\t\tセイ、ちか-う"
	},
	"35477": {
		"joyo_kanji": "誕",
		"yomi": {
			"on_yomi": [
				"タン"
			]
		},
		"raw_info": "誕\t\t15\t6\t\tタン"
	},
	"35480": {
		"joyo_kanji": "誘",
		"yomi": {
			"on_yomi": [
				"ユウ"
			],
			"kun_yomi": [
				"さそ"
			],
			"example_yomi": [
				"さそ-う"
			]
		},
		"raw_info": "誘\t\t14\t7S\t\tユウ、さそ-う"
	},
	"35486": {
		"joyo_kanji": "語",
		"yomi": {
			"on_yomi": [
				"ゴ"
			],
			"kun_yomi": [
				"かた"
			],
			"example_yomi": [
				"かた-る",
				"かた-らう"
			]
		},
		"raw_info": "語\t\t14\t2\t\tゴ、かた-る、かた-らう"
	},
	"35488": {
		"joyo_kanji": "誠",
		"yomi": {
			"on_yomi": [
				"セイ"
			],
			"kun_yomi": [
				"まこと"
			]
		},
		"raw_info": "誠\t\t13\t6\t\tセイ、まこと"
	},
	"35492": {
		"joyo_kanji": "誤",
		"yomi": {
			"on_yomi": [
				"ゴ"
			],
			"kun_yomi": [
				"あやま"
			],
			"example_yomi": [
				"あやま-る"
			]
		},
		"raw_info": "誤\t\t14\t6\t\tゴ、あやま-る"
	},
	"35500": {
		"joyo_kanji": "説",
		"yomi": {
			"on_yomi": [
				"セツ",
				"ゼイ"
			],
			"kun_yomi": [
				"と"
			],
			"example_yomi": [
				"と-く"
			]
		},
		"raw_info": "説\t\t14\t4\t\tセツ、（ゼイ）、と-く"
	},
	"35501": {
		"joyo_kanji": "読",
		"kyu_jitai": "讀",
		"yomi": {
			"on_yomi": [
				"ドク",
				"トク",
				"トウ"
			],
			"kun_yomi": [
				"よ"
			],
			"example_yomi": [
				"よ-む"
			]
		},
		"raw_info": "読\t讀\t14\t2\t\tドク、トク、（トウ）、よ-む"
	},
	"35504": {
		"joyo_kanji": "誰",
		"yomi": {
			"kun_yomi": [
				"だれ"
			]
		},
		"raw_info": "誰\t\t15\t7S\t2010\tだれ"
	},
	"35506": {
		"joyo_kanji": "課",
		"yomi": {
			"on_yomi": [
				"カ"
			]
		},
		"raw_info": "課\t\t15\t4\t\tカ"
	},
	"35519": {
		"joyo_kanji": "調",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"しら",
				"ととの"
			],
			"example_yomi": [
				"しら-べる",
				"ととの-う",
				"ととの-える"
			]
		},
		"raw_info": "調\t\t15\t3\t\tチョウ、しら-べる、ととの-う、ととの-える"
	},
	"35527": {
		"joyo_kanji": "談",
		"yomi": {
			"on_yomi": [
				"ダン"
			]
		},
		"raw_info": "談\t\t15\t3\t\tダン"
	},
	"35531": {
		"joyo_kanji": "請",
		"yomi": {
			"on_yomi": [
				"セイ",
				"シン"
			],
			"kun_yomi": [
				"こ",
				"う"
			],
			"example_yomi": [
				"う-ける",
				"こ-う"
			]
		},
		"raw_info": "請\t\t15\t7S\t\tセイ、（シン）、こ-う、う-ける"
	},
	"35542": {
		"joyo_kanji": "論",
		"yomi": {
			"on_yomi": [
				"ロン"
			]
		},
		"raw_info": "論\t\t15\t6\t\tロン"
	},
	"35558": {
		"joyo_kanji": "諦",
		"yomi": {
			"on_yomi": [
				"テイ"
			],
			"kun_yomi": [
				"あきら"
			],
			"example_yomi": [
				"あきら-める"
			]
		},
		"raw_info": "諦\t\t16\t7S\t2010\tテイ、あきら-める"
	},
	"35559": {
		"joyo_kanji": "諧",
		"yomi": {
			"on_yomi": [
				"カイ"
			]
		},
		"raw_info": "諧\t\t16\t7S\t2010\tカイ"
	},
	"35565": {
		"joyo_kanji": "諭",
		"yomi": {
			"on_yomi": [
				"ユ"
			],
			"kun_yomi": [
				"さと"
			],
			"example_yomi": [
				"さと-す"
			]
		},
		"raw_info": "諭\t\t16\t7S\t\tユ、さと-す"
	},
	"35566": {
		"joyo_kanji": "諮",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"はか"
			],
			"example_yomi": [
				"はか-る"
			]
		},
		"raw_info": "諮\t\t16\t7S\t\tシ、はか-る"
	},
	"35576": {
		"joyo_kanji": "諸",
		"kyu_jitai": "諸",
		"yomi": {
			"on_yomi": [
				"ショ"
			]
		},
		"raw_info": "諸\t諸\t15\t6\t\tショ"
	},
	"35582": {
		"joyo_kanji": "諾",
		"yomi": {
			"on_yomi": [
				"ダク"
			]
		},
		"raw_info": "諾\t\t15\t7S\t\tダク"
	},
	"35584": {
		"joyo_kanji": "謀",
		"yomi": {
			"on_yomi": [
				"ボウ",
				"ム"
			],
			"kun_yomi": [
				"はか"
			],
			"example_yomi": [
				"はか-る"
			]
		},
		"raw_info": "謀\t\t16\t7S\t\tボウ、（ム）、はか-る"
	},
	"35585": {
		"joyo_kanji": "謁",
		"kyu_jitai": "謁",
		"yomi": {
			"on_yomi": [
				"エツ"
			]
		},
		"raw_info": "謁\t謁\t15\t7S\t\tエツ"
	},
	"35588": {
		"joyo_kanji": "謄",
		"yomi": {
			"on_yomi": [
				"トウ"
			]
		},
		"raw_info": "謄\t\t17\t7S\t\tトウ"
	},
	"35598": {
		"joyo_kanji": "謎",
		"yomi": {
			"kun_yomi": [
				"なぞ"
			]
		},
		"raw_info": "謎\t\t17\t7S\t2010\tなぞ"
	},
	"35609": {
		"joyo_kanji": "謙",
		"yomi": {
			"on_yomi": [
				"ケン"
			]
		},
		"raw_info": "謙\t\t17\t7S\t\tケン"
	},
	"35611": {
		"joyo_kanji": "講",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "講\t\t17\t5\t\tコウ"
	},
	"35613": {
		"joyo_kanji": "謝",
		"yomi": {
			"on_yomi": [
				"シャ"
			],
			"kun_yomi": [
				"あやま"
			],
			"example_yomi": [
				"あやま-る"
			]
		},
		"raw_info": "謝\t\t17\t5\t\tシャ、あやま-る"
	},
	"35617": {
		"joyo_kanji": "謡",
		"kyu_jitai": "謠",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			],
			"kun_yomi": [
				"うたい",
				"うた"
			],
			"example_yomi": [
				"うた-う"
			]
		},
		"raw_info": "謡\t謠\t16\t7S\t\tヨウ、うたい、うた-う"
	},
	"35641": {
		"joyo_kanji": "謹",
		"kyu_jitai": "謹",
		"yomi": {
			"on_yomi": [
				"キン"
			],
			"kun_yomi": [
				"つつし"
			],
			"example_yomi": [
				"つつし-む"
			]
		},
		"raw_info": "謹\t謹\t17\t7S\t\tキン、つつし-む"
	},
	"35672": {
		"joyo_kanji": "識",
		"yomi": {
			"on_yomi": [
				"シキ"
			]
		},
		"raw_info": "識\t\t19\t5\t\tシキ"
	},
	"35676": {
		"joyo_kanji": "譜",
		"yomi": {
			"on_yomi": [
				"フ"
			]
		},
		"raw_info": "譜\t\t19\t7S\t\tフ"
	},
	"35686": {
		"joyo_kanji": "警",
		"yomi": {
			"on_yomi": [
				"ケイ"
			]
		},
		"raw_info": "警\t\t19\t6\t\tケイ"
	},
	"35696": {
		"joyo_kanji": "議",
		"yomi": {
			"on_yomi": [
				"ギ"
			]
		},
		"raw_info": "議\t\t20\t4\t\tギ"
	},
	"35698": {
		"joyo_kanji": "譲",
		"kyu_jitai": "讓",
		"yomi": {
			"on_yomi": [
				"ジョウ"
			],
			"kun_yomi": [
				"ゆず"
			],
			"example_yomi": [
				"ゆず-る"
			]
		},
		"raw_info": "譲\t讓\t20\t7S\t\tジョウ、ゆず-る"
	},
	"35703": {
		"joyo_kanji": "護",
		"yomi": {
			"on_yomi": [
				"ゴ"
			]
		},
		"raw_info": "護\t\t20\t5\t\tゴ"
	},
	"35895": {
		"joyo_kanji": "谷",
		"yomi": {
			"on_yomi": [
				"コク"
			],
			"kun_yomi": [
				"たに"
			]
		},
		"raw_info": "谷\t\t7\t2\t\tコク、たに"
	},
	"35910": {
		"joyo_kanji": "豆",
		"yomi": {
			"on_yomi": [
				"トウ",
				"ズ"
			],
			"kun_yomi": [
				"まめ"
			]
		},
		"raw_info": "豆\t\t7\t3\t\tトウ、（ズ）、まめ"
	},
	"35914": {
		"joyo_kanji": "豊",
		"kyu_jitai": "豐",
		"yomi": {
			"on_yomi": [
				"ホウ"
			],
			"kun_yomi": [
				"ゆた"
			],
			"example_yomi": [
				"ゆた-か"
			]
		},
		"raw_info": "豊\t豐\t13\t5\t\tホウ、ゆた-か"
	},
	"35930": {
		"joyo_kanji": "豚",
		"yomi": {
			"on_yomi": [
				"トン"
			],
			"kun_yomi": [
				"ぶた"
			]
		},
		"raw_info": "豚\t\t11\t7S\t\tトン、ぶた"
	},
	"35937": {
		"joyo_kanji": "象",
		"yomi": {
			"on_yomi": [
				"ショウ",
				"ゾウ"
			]
		},
		"raw_info": "象\t\t12\t4\t\tショウ、ゾウ"
	},
	"35946": {
		"joyo_kanji": "豪",
		"yomi": {
			"on_yomi": [
				"ゴウ"
			]
		},
		"raw_info": "豪\t\t14\t7S\t\tゴウ"
	},
	"35980": {
		"joyo_kanji": "貌",
		"yomi": {
			"on_yomi": [
				"ボウ"
			]
		},
		"raw_info": "貌\t\t14\t7S\t2010\tボウ"
	},
	"35997": {
		"joyo_kanji": "貝",
		"yomi": {
			"kun_yomi": [
				"かい"
			]
		},
		"raw_info": "貝\t\t7\t1\t\tかい"
	},
	"35998": {
		"joyo_kanji": "貞",
		"yomi": {
			"on_yomi": [
				"テイ"
			]
		},
		"raw_info": "貞\t\t9\t7S\t\tテイ"
	},
	"36000": {
		"joyo_kanji": "負",
		"yomi": {
			"on_yomi": [
				"フ"
			],
			"kun_yomi": [
				"お",
				"ま"
			],
			"example_yomi": [
				"ま-ける",
				"ま-かす",
				"お-う"
			]
		},
		"raw_info": "負\t\t9\t3\t\tフ、ま-ける、ま-かす、お-う"
	},
	"36001": {
		"joyo_kanji": "財",
		"yomi": {
			"on_yomi": [
				"ザイ",
				"サイ"
			]
		},
		"raw_info": "財\t\t10\t5\t\tザイ、（サイ）"
	},
	"36002": {
		"joyo_kanji": "貢",
		"yomi": {
			"on_yomi": [
				"コウ",
				"ク"
			],
			"kun_yomi": [
				"みつ"
			],
			"example_yomi": [
				"みつ-ぐ"
			]
		},
		"raw_info": "貢\t\t10\t7S\t\tコウ、（ク）、みつ-ぐ"
	},
	"36007": {
		"joyo_kanji": "貧",
		"yomi": {
			"on_yomi": [
				"ヒン",
				"ビン"
			],
			"kun_yomi": [
				"まず"
			],
			"example_yomi": [
				"まず-しい"
			]
		},
		"raw_info": "貧\t\t11\t5\t\tヒン、ビン、まず-しい"
	},
	"36008": {
		"joyo_kanji": "貨",
		"yomi": {
			"on_yomi": [
				"カ"
			]
		},
		"raw_info": "貨\t\t11\t4\t\tカ"
	},
	"36009": {
		"joyo_kanji": "販",
		"yomi": {
			"on_yomi": [
				"ハン"
			]
		},
		"raw_info": "販\t\t11\t7S\t\tハン"
	},
	"36010": {
		"joyo_kanji": "貪",
		"yomi": {
			"on_yomi": [
				"ドン"
			],
			"kun_yomi": [
				"むさぼ"
			],
			"example_yomi": [
				"むさぼ-る"
			]
		},
		"raw_info": "貪\t\t11\t7S\t2010\tドン、むさぼ-る"
	},
	"36011": {
		"joyo_kanji": "貫",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"つらぬ"
			],
			"example_yomi": [
				"つらぬ-く"
			]
		},
		"raw_info": "貫\t\t11\t7S\t\tカン、つらぬ-く"
	},
	"36012": {
		"joyo_kanji": "責",
		"yomi": {
			"on_yomi": [
				"セキ"
			],
			"kun_yomi": [
				"せ"
			],
			"example_yomi": [
				"せ-める"
			]
		},
		"raw_info": "責\t\t11\t5\t\tセキ、せ-める"
	},
	"36015": {
		"joyo_kanji": "貯",
		"yomi": {
			"on_yomi": [
				"チョ"
			]
		},
		"raw_info": "貯\t\t12\t4\t\tチョ"
	},
	"36020": {
		"joyo_kanji": "貴",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"たっと",
				"とうと"
			],
			"example_yomi": [
				"たっと-い",
				"とうと-い",
				"たっと-ぶ",
				"とうと-ぶ"
			]
		},
		"raw_info": "貴\t\t12\t6\t\tキ、たっと-い、とうと-い、たっと-ぶ、とうと-ぶ"
	},
	"36023": {
		"joyo_kanji": "買",
		"yomi": {
			"on_yomi": [
				"バイ"
			],
			"kun_yomi": [
				"か"
			],
			"example_yomi": [
				"か-う"
			]
		},
		"raw_info": "買\t\t12\t2\t\tバイ、か-う"
	},
	"36024": {
		"joyo_kanji": "貸",
		"yomi": {
			"on_yomi": [
				"タイ"
			],
			"kun_yomi": [
				"か"
			],
			"example_yomi": [
				"か-す"
			]
		},
		"raw_info": "貸\t\t12\t5\t\tタイ、か-す"
	},
	"36027": {
		"joyo_kanji": "費",
		"yomi": {
			"on_yomi": [
				"ヒ"
			],
			"kun_yomi": [
				"つい"
			],
			"example_yomi": [
				"つい-やす",
				"つい-える"
			]
		},
		"raw_info": "費\t\t12\t4\t\tヒ、つい-やす、つい-える"
	},
	"36028": {
		"joyo_kanji": "貼",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"は"
			],
			"example_yomi": [
				"は-る"
			]
		},
		"raw_info": "貼\t\t12\t7S\t2010\tチョウ、は-る"
	},
	"36031": {
		"joyo_kanji": "貿",
		"yomi": {
			"on_yomi": [
				"ボウ"
			]
		},
		"raw_info": "貿\t\t12\t5\t\tボウ"
	},
	"36032": {
		"joyo_kanji": "賀",
		"yomi": {
			"on_yomi": [
				"ガ"
			]
		},
		"raw_info": "賀\t\t12\t5\t\tガ"
	},
	"36034": {
		"joyo_kanji": "賂",
		"yomi": {
			"on_yomi": [
				"ロ"
			]
		},
		"raw_info": "賂\t\t13\t7S\t2010\tロ"
	},
	"36035": {
		"joyo_kanji": "賃",
		"yomi": {
			"on_yomi": [
				"チン"
			]
		},
		"raw_info": "賃\t\t13\t6\t\tチン"
	},
	"36036": {
		"joyo_kanji": "賄",
		"yomi": {
			"on_yomi": [
				"ワイ"
			],
			"kun_yomi": [
				"まかな"
			],
			"example_yomi": [
				"まかな-う"
			]
		},
		"raw_info": "賄\t\t13\t7S\t\tワイ、まかな-う"
	},
	"36039": {
		"joyo_kanji": "資",
		"yomi": {
			"on_yomi": [
				"シ"
			]
		},
		"raw_info": "資\t\t13\t5\t\tシ"
	},
	"36042": {
		"joyo_kanji": "賊",
		"yomi": {
			"on_yomi": [
				"ゾク"
			]
		},
		"raw_info": "賊\t\t13\t7S\t\tゾク"
	},
	"36051": {
		"joyo_kanji": "賓",
		"kyu_jitai": "賓",
		"yomi": {
			"on_yomi": [
				"ヒン"
			]
		},
		"raw_info": "賓\t賓\t15\t7S\t\tヒン"
	},
	"36059": {
		"joyo_kanji": "賛",
		"kyu_jitai": "贊",
		"yomi": {
			"on_yomi": [
				"サン"
			]
		},
		"raw_info": "賛\t贊\t15\t5\t\tサン"
	},
	"36060": {
		"joyo_kanji": "賜",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"たまわ"
			],
			"example_yomi": [
				"たまわ-る"
			]
		},
		"raw_info": "賜\t\t15\t7S\t\tシ、たまわ-る"
	},
	"36062": {
		"joyo_kanji": "賞",
		"yomi": {
			"on_yomi": [
				"ショウ"
			]
		},
		"raw_info": "賞\t\t15\t4\t\tショウ"
	},
	"36064": {
		"joyo_kanji": "賠",
		"yomi": {
			"on_yomi": [
				"バイ"
			]
		},
		"raw_info": "賠\t\t15\t7S\t\tバイ"
	},
	"36066": {
		"joyo_kanji": "賢",
		"yomi": {
			"on_yomi": [
				"ケン"
			],
			"kun_yomi": [
				"かしこ"
			],
			"example_yomi": [
				"かしこ-い"
			]
		},
		"raw_info": "賢\t\t16\t7S\t\tケン、かしこ-い"
	},
	"36070": {
		"joyo_kanji": "賦",
		"yomi": {
			"on_yomi": [
				"フ"
			]
		},
		"raw_info": "賦\t\t15\t7S\t\tフ"
	},
	"36074": {
		"joyo_kanji": "質",
		"yomi": {
			"on_yomi": [
				"シチ",
				"チ",
				"シツ"
			]
		},
		"raw_info": "質\t\t15\t5\t\tシツ、シチ、（チ）"
	},
	"36077": {
		"joyo_kanji": "賭",
		"yomi": {
			"on_yomi": [
				"ト"
			],
			"kun_yomi": [
				"か"
			],
			"example_yomi": [
				"か-ける"
			]
		},
		"raw_info": "賭\t\t16\t7S\t2010\tト、か-ける"
	},
	"36092": {
		"joyo_kanji": "購",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "購\t\t17\t7S\t\tコウ"
	},
	"36104": {
		"joyo_kanji": "贈",
		"kyu_jitai": "贈",
		"yomi": {
			"on_yomi": [
				"ゾウ",
				"ソウ"
			],
			"kun_yomi": [
				"おく"
			],
			"example_yomi": [
				"おく-る"
			]
		},
		"raw_info": "贈\t贈\t18\t7S\t\tゾウ、（ソウ）、おく-る"
	},
	"36196": {
		"joyo_kanji": "赤",
		"yomi": {
			"on_yomi": [
				"セキ",
				"シャク"
			],
			"kun_yomi": [
				"あか"
			],
			"example_yomi": [
				"あか-らむ",
				"あか-らめる",
				"あか-い"
			]
		},
		"raw_info": "赤\t\t7\t1\t\tセキ、（シャク）、あか、あか-い、あか-らむ、あか-らめる"
	},
	"36198": {
		"joyo_kanji": "赦",
		"yomi": {
			"on_yomi": [
				"シャ"
			]
		},
		"raw_info": "赦\t\t11\t7S\t\tシャ"
	},
	"36208": {
		"joyo_kanji": "走",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"はし"
			],
			"example_yomi": [
				"はし-る"
			]
		},
		"raw_info": "走\t\t7\t2\t\tソウ、はし-る"
	},
	"36212": {
		"joyo_kanji": "赴",
		"yomi": {
			"on_yomi": [
				"フ"
			],
			"kun_yomi": [
				"おもむ"
			],
			"example_yomi": [
				"おもむ-く"
			]
		},
		"raw_info": "赴\t\t9\t7S\t\tフ、おもむ-く"
	},
	"36215": {
		"joyo_kanji": "起",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"お"
			],
			"example_yomi": [
				"お-こす",
				"お-きる",
				"お-こる"
			]
		},
		"raw_info": "起\t\t10\t3\t\tキ、お-きる、お-こる、お-こす"
	},
	"36229": {
		"joyo_kanji": "超",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"こ"
			],
			"example_yomi": [
				"こ-す",
				"こ-える"
			]
		},
		"raw_info": "超\t\t12\t7S\t\tチョウ、こ-える、こ-す"
	},
	"36234": {
		"joyo_kanji": "越",
		"yomi": {
			"on_yomi": [
				"エツ"
			],
			"kun_yomi": [
				"こ"
			],
			"example_yomi": [
				"こ-す",
				"こ-える"
			]
		},
		"raw_info": "越\t\t12\t7S\t\tエツ、こ-す、こ-える"
	},
	"36259": {
		"joyo_kanji": "趣",
		"yomi": {
			"on_yomi": [
				"シュ"
			],
			"kun_yomi": [
				"おもむき"
			]
		},
		"raw_info": "趣\t\t15\t7S\t\tシュ、おもむき"
	},
	"36275": {
		"joyo_kanji": "足",
		"yomi": {
			"on_yomi": [
				"ソク"
			],
			"kun_yomi": [
				"あし",
				"た"
			],
			"example_yomi": [
				"た-りる",
				"た-る",
				"た-す"
			]
		},
		"raw_info": "足\t\t7\t1\t\tソク、あし、た-りる、た-る、た-す"
	},
	"36317": {
		"joyo_kanji": "距",
		"yomi": {
			"on_yomi": [
				"キョ"
			]
		},
		"raw_info": "距\t\t12\t7S\t\tキョ"
	},
	"36321": {
		"joyo_kanji": "跡",
		"kyu_jitai": "蹟",
		"yomi": {
			"on_yomi": [
				"セキ"
			],
			"kun_yomi": [
				"あと"
			]
		},
		"raw_info": "跡\t蹟\t13\t7S\t\tセキ、あと"
	},
	"36335": {
		"joyo_kanji": "路",
		"yomi": {
			"on_yomi": [
				"ロ"
			],
			"kun_yomi": [
				"じ"
			]
		},
		"raw_info": "路\t\t13\t3\t\tロ、じ"
	},
	"36339": {
		"joyo_kanji": "跳",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"は",
				"と"
			],
			"example_yomi": [
				"は-ねる",
				"と-ぶ"
			]
		},
		"raw_info": "跳\t\t13\t7S\t\tチョウ、は-ねる、と-ぶ"
	},
	"36341": {
		"joyo_kanji": "践",
		"kyu_jitai": "踐",
		"yomi": {
			"on_yomi": [
				"セン"
			]
		},
		"raw_info": "践\t踐\t13\t7S\t\tセン"
	},
	"36362": {
		"joyo_kanji": "踊",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			],
			"kun_yomi": [
				"おど"
			],
			"example_yomi": [
				"おど-る",
				"おど-り"
			]
		},
		"raw_info": "踊\t\t14\t7S\t\tヨウ、おど-る、おど-り"
	},
	"36367": {
		"joyo_kanji": "踏",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"ふ"
			],
			"example_yomi": [
				"ふ-む",
				"ふ-まえる"
			]
		},
		"raw_info": "踏\t\t15\t7S\t\tトウ、ふ-む、ふ-まえる"
	},
	"36394": {
		"joyo_kanji": "踪",
		"yomi": {
			"on_yomi": [
				"ソウ"
			]
		},
		"raw_info": "踪\t\t15\t7S\t2010\tソウ"
	},
	"36468": {
		"joyo_kanji": "蹴",
		"yomi": {
			"on_yomi": [
				"シュウ"
			],
			"kun_yomi": [
				"け"
			],
			"example_yomi": [
				"け-る"
			]
		},
		"raw_info": "蹴\t\t19\t7S\t2010\tシュウ、け-る"
	},
	"36493": {
		"joyo_kanji": "躍",
		"yomi": {
			"on_yomi": [
				"ヤク"
			],
			"kun_yomi": [
				"おど"
			],
			"example_yomi": [
				"おど-る"
			]
		},
		"raw_info": "躍\t\t21\t7S\t\tヤク、おど-る"
	},
	"36523": {
		"joyo_kanji": "身",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"み"
			]
		},
		"raw_info": "身\t\t7\t3\t\tシン、み"
	},
	"36554": {
		"joyo_kanji": "車",
		"yomi": {
			"on_yomi": [
				"シャ"
			],
			"kun_yomi": [
				"くるま"
			]
		},
		"raw_info": "車\t\t7\t1\t\tシャ、くるま"
	},
	"36556": {
		"joyo_kanji": "軌",
		"yomi": {
			"on_yomi": [
				"キ"
			]
		},
		"raw_info": "軌\t\t9\t7S\t\tキ"
	},
	"36557": {
		"joyo_kanji": "軍",
		"yomi": {
			"on_yomi": [
				"グン"
			]
		},
		"raw_info": "軍\t\t9\t4\t\tグン"
	},
	"36562": {
		"joyo_kanji": "軒",
		"yomi": {
			"on_yomi": [
				"ケン"
			],
			"kun_yomi": [
				"のき"
			]
		},
		"raw_info": "軒\t\t10\t7S\t\tケン、のき"
	},
	"36575": {
		"joyo_kanji": "軟",
		"yomi": {
			"on_yomi": [
				"ナン"
			],
			"kun_yomi": [
				"やわ"
			],
			"example_yomi": [
				"やわ-らか",
				"やわ-らかい"
			]
		},
		"raw_info": "軟\t\t11\t7S\t\tナン、やわ-らか、やわ-らかい"
	},
	"36578": {
		"joyo_kanji": "転",
		"kyu_jitai": "轉",
		"yomi": {
			"on_yomi": [
				"テン"
			],
			"kun_yomi": [
				"ころ"
			],
			"example_yomi": [
				"ころ-がる",
				"ころ-げる",
				"ころ-がす",
				"ころ-ぶ"
			]
		},
		"raw_info": "転\t轉\t11\t3\t\tテン、ころ-がる、ころ-げる、ころ-がす、ころ-ぶ"
	},
	"36600": {
		"joyo_kanji": "軸",
		"yomi": {
			"on_yomi": [
				"ジク"
			]
		},
		"raw_info": "軸\t\t12\t7S\t\tジク"
	},
	"36605": {
		"joyo_kanji": "軽",
		"kyu_jitai": "輕",
		"yomi": {
			"on_yomi": [
				"ケイ"
			],
			"kun_yomi": [
				"かる",
				"かろ"
			],
			"example_yomi": [
				"かる-い",
				"かろ-やか"
			]
		},
		"raw_info": "軽\t輕\t12\t3\t\tケイ、かる-い、かろ-やか"
	},
	"36611": {
		"joyo_kanji": "較",
		"yomi": {
			"on_yomi": [
				"カク"
			]
		},
		"raw_info": "較\t\t13\t7S\t\tカク"
	},
	"36617": {
		"joyo_kanji": "載",
		"yomi": {
			"on_yomi": [
				"サイ"
			],
			"kun_yomi": [
				"の"
			],
			"example_yomi": [
				"の-せる",
				"の-る"
			]
		},
		"raw_info": "載\t\t13\t7S\t\tサイ、の-せる、の-る"
	},
	"36637": {
		"joyo_kanji": "輝",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"かがや"
			],
			"example_yomi": [
				"かがや-く"
			]
		},
		"raw_info": "輝\t\t15\t7S\t\tキ、かがや-く"
	},
	"36649": {
		"joyo_kanji": "輩",
		"yomi": {
			"on_yomi": [
				"ハイ"
			]
		},
		"raw_info": "輩\t\t15\t7S\t\tハイ"
	},
	"36650": {
		"joyo_kanji": "輪",
		"yomi": {
			"on_yomi": [
				"リン"
			],
			"kun_yomi": [
				"わ"
			]
		},
		"raw_info": "輪\t\t15\t4\t\tリン、わ"
	},
	"36664": {
		"joyo_kanji": "輸",
		"yomi": {
			"on_yomi": [
				"ユ"
			]
		},
		"raw_info": "輸\t\t16\t5\t\tユ"
	},
	"36676": {
		"joyo_kanji": "轄",
		"yomi": {
			"on_yomi": [
				"カツ"
			]
		},
		"raw_info": "轄\t\t17\t7S\t\tカツ"
	},
	"36763": {
		"joyo_kanji": "辛",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"から"
			],
			"example_yomi": [
				"から-い"
			]
		},
		"raw_info": "辛\t\t7\t7S\t\tシン、から-い"
	},
	"36766": {
		"joyo_kanji": "辞",
		"kyu_jitai": "辭",
		"yomi": {
			"on_yomi": [
				"ジ"
			],
			"kun_yomi": [
				"や"
			],
			"example_yomi": [
				"や-める"
			]
		},
		"raw_info": "辞\t辭\t13\t4\t\tジ、や-める"
	},
	"36771": {
		"joyo_kanji": "辣",
		"yomi": {
			"on_yomi": [
				"ラツ"
			]
		},
		"raw_info": "辣\t\t14\t7S\t2010\tラツ"
	},
	"36785": {
		"joyo_kanji": "辱",
		"yomi": {
			"on_yomi": [
				"ジョク"
			],
			"kun_yomi": [
				"はずかし"
			],
			"example_yomi": [
				"はずかし-める"
			]
		},
		"raw_info": "辱\t\t10\t7S\t\tジョク、はずかし-める"
	},
	"36786": {
		"joyo_kanji": "農",
		"yomi": {
			"on_yomi": [
				"ノウ"
			]
		},
		"raw_info": "農\t\t13\t3\t\tノウ"
	},
	"36794": {
		"joyo_kanji": "辺",
		"kyu_jitai": "邊邉",
		"yomi": {
			"on_yomi": [
				"ヘン"
			],
			"kun_yomi": [
				"あた",
				"べ"
			],
			"example_yomi": [
				"あた-り"
			]
		},
		"raw_info": "辺\t邊邉\t5\t4\t\tヘン、あた-り、べ"
	},
	"36796": {
		"joyo_kanji": "込",
		"yomi": {
			"kun_yomi": [
				"こ"
			],
			"example_yomi": [
				"こ-む",
				"こ-める"
			]
		},
		"raw_info": "込\t\t5\t7S\t\tこ-む、こ-める"
	},
	"36805": {
		"joyo_kanji": "迅",
		"yomi": {
			"on_yomi": [
				"ジン"
			]
		},
		"raw_info": "迅\t\t6\t7S\t\tジン"
	},
	"36814": {
		"joyo_kanji": "迎",
		"yomi": {
			"on_yomi": [
				"ゲイ"
			],
			"kun_yomi": [
				"むか"
			],
			"example_yomi": [
				"むか-える"
			]
		},
		"raw_info": "迎\t\t7\t7S\t\tゲイ、むか-える"
	},
	"36817": {
		"joyo_kanji": "近",
		"yomi": {
			"on_yomi": [
				"キン"
			],
			"kun_yomi": [
				"ちか"
			],
			"example_yomi": [
				"ちか-い"
			]
		},
		"raw_info": "近\t\t7\t2\t\tキン、ちか-い"
	},
	"36820": {
		"joyo_kanji": "返",
		"yomi": {
			"on_yomi": [
				"ヘン"
			],
			"kun_yomi": [
				"かえ"
			],
			"example_yomi": [
				"かえ-す",
				"かえ-る"
			]
		},
		"raw_info": "返\t\t7\t3\t\tヘン、かえ-す、かえ-る"
	},
	"36843": {
		"joyo_kanji": "迫",
		"yomi": {
			"on_yomi": [
				"ハク"
			],
			"kun_yomi": [
				"せま"
			],
			"example_yomi": [
				"せま-る"
			]
		},
		"raw_info": "迫\t\t8\t7S\t\tハク、せま-る"
	},
	"36845": {
		"joyo_kanji": "迭",
		"yomi": {
			"on_yomi": [
				"テツ"
			]
		},
		"raw_info": "迭\t\t8\t7S\t\tテツ"
	},
	"36848": {
		"joyo_kanji": "述",
		"yomi": {
			"on_yomi": [
				"ジュツ"
			],
			"kun_yomi": [
				"の"
			],
			"example_yomi": [
				"の-べる"
			]
		},
		"raw_info": "述\t\t8\t5\t\tジュツ、の-べる"
	},
	"36855": {
		"joyo_kanji": "迷",
		"yomi": {
			"on_yomi": [
				"メイ"
			],
			"kun_yomi": [
				"まよ"
			],
			"example_yomi": [
				"まよ-う"
			]
		},
		"raw_info": "迷\t\t9\t5\t\tメイ、まよ-う"
	},
	"36861": {
		"joyo_kanji": "追",
		"yomi": {
			"on_yomi": [
				"ツイ"
			],
			"kun_yomi": [
				"お"
			],
			"example_yomi": [
				"お-う"
			]
		},
		"raw_info": "追\t\t9\t3\t\tツイ、お-う"
	},
	"36864": {
		"joyo_kanji": "退",
		"yomi": {
			"on_yomi": [
				"タイ"
			],
			"kun_yomi": [
				"しりぞ"
			],
			"example_yomi": [
				"しりぞ-ける",
				"しりぞ-く"
			]
		},
		"raw_info": "退\t\t9\t5\t\tタイ、しりぞ-く、しりぞ-ける"
	},
	"36865": {
		"joyo_kanji": "送",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"おく"
			],
			"example_yomi": [
				"おく-る"
			]
		},
		"raw_info": "送\t\t9\t3\t\tソウ、おく-る"
	},
	"36867": {
		"joyo_kanji": "逃",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"に",
				"のが"
			],
			"example_yomi": [
				"のが-す",
				"のが-れる",
				"に-げる",
				"に-がす"
			]
		},
		"raw_info": "逃\t\t9\t7S\t\tトウ、に-げる、に-がす、のが-す、のが-れる"
	},
	"36870": {
		"joyo_kanji": "逆",
		"yomi": {
			"on_yomi": [
				"ギャク"
			],
			"kun_yomi": [
				"さか"
			],
			"example_yomi": [
				"さか-らう"
			]
		},
		"raw_info": "逆\t\t9\t5\t\tギャク、さか、さか-らう"
	},
	"36879": {
		"joyo_kanji": "透",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"す"
			],
			"example_yomi": [
				"す-かす",
				"す-ける",
				"す-く"
			]
		},
		"raw_info": "透\t\t10\t7S\t\tトウ、す-く、す-かす、す-ける"
	},
	"36880": {
		"joyo_kanji": "逐",
		"yomi": {
			"on_yomi": [
				"チク"
			]
		},
		"raw_info": "逐\t\t10\t7S\t\tチク"
	},
	"36883": {
		"joyo_kanji": "逓",
		"kyu_jitai": "遞",
		"yomi": {
			"on_yomi": [
				"テイ"
			]
		},
		"raw_info": "逓\t遞\t10\t7S\t\tテイ"
	},
	"36884": {
		"joyo_kanji": "途",
		"yomi": {
			"on_yomi": [
				"ト"
			]
		},
		"raw_info": "途\t\t10\t7S\t\tト"
	},
	"36890": {
		"joyo_kanji": "通",
		"yomi": {
			"on_yomi": [
				"ツウ",
				"ツ"
			],
			"kun_yomi": [
				"とお",
				"かよ"
			],
			"example_yomi": [
				"かよ-う",
				"とお-る",
				"とお-す"
			]
		},
		"raw_info": "通\t\t10\t2\t\tツウ、（ツ）、とお-る、とお-す、かよ-う"
	},
	"36893": {
		"joyo_kanji": "逝",
		"yomi": {
			"on_yomi": [
				"セイ"
			],
			"kun_yomi": [
				"ゆ",
				"い"
			],
			"example_yomi": [
				"ゆ-く",
				"い-く"
			]
		},
		"raw_info": "逝\t\t10\t7S\t1981\tセイ、ゆ-く、い-く"
	},
	"36895": {
		"joyo_kanji": "速",
		"yomi": {
			"on_yomi": [
				"ソク"
			],
			"kun_yomi": [
				"はや",
				"すみ"
			],
			"example_yomi": [
				"はや-い",
				"はや-める",
				"はや-まる",
				"すみ-やか"
			]
		},
		"raw_info": "速\t\t10\t3\t\tソク、はや-い、はや-める、はや-まる、すみ-やか"
	},
	"36896": {
		"joyo_kanji": "造",
		"yomi": {
			"on_yomi": [
				"ゾウ"
			],
			"kun_yomi": [
				"つく"
			],
			"example_yomi": [
				"つく-る"
			]
		},
		"raw_info": "造\t\t10\t5\t\tゾウ、つく-る"
	},
	"36899": {
		"joyo_kanji": "連",
		"yomi": {
			"on_yomi": [
				"レン"
			],
			"kun_yomi": [
				"つら",
				"つ"
			],
			"example_yomi": [
				"つら-なる",
				"つら-ねる",
				"つ-れる"
			]
		},
		"raw_info": "連\t\t10\t4\t\tレン、つら-なる、つら-ねる、つ-れる"
	},
	"36910": {
		"joyo_kanji": "逮",
		"yomi": {
			"on_yomi": [
				"タイ"
			]
		},
		"raw_info": "逮\t\t11\t7S\t\tタイ"
	},
	"36913": {
		"joyo_kanji": "週",
		"yomi": {
			"on_yomi": [
				"シュウ"
			]
		},
		"raw_info": "週\t\t11\t2\t\tシュウ"
	},
	"36914": {
		"joyo_kanji": "進",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"すす"
			],
			"example_yomi": [
				"すす-む",
				"すす-める"
			]
		},
		"raw_info": "進\t\t11\t3\t\tシン、すす-む、すす-める"
	},
	"36920": {
		"joyo_kanji": "逸",
		"kyu_jitai": "逸",
		"yomi": {
			"on_yomi": [
				"イツ"
			]
		},
		"raw_info": "逸\t逸\t11\t7S\t\tイツ"
	},
	"36930": {
		"joyo_kanji": "遂",
		"yomi": {
			"on_yomi": [
				"スイ"
			],
			"kun_yomi": [
				"と"
			],
			"example_yomi": [
				"と-げる"
			]
		},
		"raw_info": "遂\t\t12\t7S\t\tスイ、と-げる"
	},
	"36933": {
		"joyo_kanji": "遅",
		"kyu_jitai": "遲",
		"yomi": {
			"on_yomi": [
				"チ"
			],
			"kun_yomi": [
				"おく",
				"おそ"
			],
			"example_yomi": [
				"おく-れる",
				"おく-らす",
				"おそ-い"
			]
		},
		"raw_info": "遅\t遲\t12\t7S\t\tチ、おく-れる、おく-らす、おそ-い"
	},
	"36935": {
		"joyo_kanji": "遇",
		"yomi": {
			"on_yomi": [
				"グウ"
			]
		},
		"raw_info": "遇\t\t12\t7S\t\tグウ"
	},
	"36938": {
		"joyo_kanji": "遊",
		"yomi": {
			"on_yomi": [
				"ユウ",
				"ユ"
			],
			"kun_yomi": [
				"あそ"
			],
			"example_yomi": [
				"あそ-ぶ"
			]
		},
		"raw_info": "遊\t\t12\t3\t\tユウ、（ユ）、あそ-ぶ"
	},
	"36939": {
		"joyo_kanji": "運",
		"yomi": {
			"on_yomi": [
				"ウン"
			],
			"kun_yomi": [
				"はこ"
			],
			"example_yomi": [
				"はこ-ぶ"
			]
		},
		"raw_info": "運\t\t12\t3\t\tウン、はこ-ぶ"
	},
	"36941": {
		"joyo_kanji": "遍",
		"yomi": {
			"on_yomi": [
				"ヘン"
			]
		},
		"raw_info": "遍\t\t12\t7S\t\tヘン"
	},
	"36942": {
		"joyo_kanji": "過",
		"yomi": {
			"on_yomi": [
				"カ"
			],
			"kun_yomi": [
				"す",
				"あやま"
			],
			"example_yomi": [
				"す-ぎる",
				"す-ごす",
				"あやま-つ",
				"あやま-ち"
			]
		},
		"raw_info": "過\t\t12\t5\t\tカ、す-ぎる、す-ごす、あやま-つ、あやま-ち"
	},
	"36947": {
		"joyo_kanji": "道",
		"yomi": {
			"on_yomi": [
				"ドウ",
				"トウ"
			],
			"kun_yomi": [
				"みち"
			]
		},
		"raw_info": "道\t\t12\t2\t\tドウ、（トウ）、みち"
	},
	"36948": {
		"joyo_kanji": "達",
		"yomi": {
			"on_yomi": [
				"タツ"
			]
		},
		"raw_info": "達\t\t12\t4\t\tタツ"
	},
	"36949": {
		"joyo_kanji": "違",
		"yomi": {
			"on_yomi": [
				"イ"
			],
			"kun_yomi": [
				"ちが"
			],
			"example_yomi": [
				"ちが-う",
				"ちが-える"
			]
		},
		"raw_info": "違\t\t13\t7S\t\tイ、ちが-う、ちが-える"
	},
	"36956": {
		"joyo_kanji": "遜",
		"yomi": {
			"on_yomi": [
				"ソン"
			]
		},
		"raw_info": "遜\t\t14\t7S\t2010\tソン"
	},
	"36960": {
		"joyo_kanji": "遠",
		"yomi": {
			"on_yomi": [
				"エン",
				"オン"
			],
			"kun_yomi": [
				"とお"
			],
			"example_yomi": [
				"とお-い"
			]
		},
		"raw_info": "遠\t\t13\t2\t\tエン、（オン）、とお-い"
	},
	"36961": {
		"joyo_kanji": "遡",
		"yomi": {
			"on_yomi": [
				"ソ"
			],
			"kun_yomi": [
				"さかのぼ"
			],
			"example_yomi": [
				"さかのぼ-る"
			]
		},
		"raw_info": "遡\t\t14\t7S\t2010\tソ、さかのぼ-る"
	},
	"36963": {
		"joyo_kanji": "遣",
		"yomi": {
			"on_yomi": [
				"ケン"
			],
			"kun_yomi": [
				"つか"
			],
			"example_yomi": [
				"つか-う",
				"つか-わす"
			]
		},
		"raw_info": "遣\t\t13\t7S\t\tケン、つか-う、つか-わす"
	},
	"36969": {
		"joyo_kanji": "適",
		"yomi": {
			"on_yomi": [
				"テキ"
			]
		},
		"raw_info": "適\t\t14\t5\t\tテキ"
	},
	"36973": {
		"joyo_kanji": "遭",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"あ"
			],
			"example_yomi": [
				"あ-う"
			]
		},
		"raw_info": "遭\t\t14\t7S\t\tソウ、あ-う"
	},
	"36974": {
		"joyo_kanji": "遮",
		"yomi": {
			"on_yomi": [
				"シャ"
			],
			"kun_yomi": [
				"さえぎ"
			],
			"example_yomi": [
				"さえぎ-る"
			]
		},
		"raw_info": "遮\t\t14\t7S\t1981\tシャ、さえぎ-る"
	},
	"36981": {
		"joyo_kanji": "遵",
		"yomi": {
			"on_yomi": [
				"ジュン"
			]
		},
		"raw_info": "遵\t\t15\t7S\t\tジュン"
	},
	"36983": {
		"joyo_kanji": "遷",
		"yomi": {
			"on_yomi": [
				"セン"
			]
		},
		"raw_info": "遷\t\t15\t7S\t\tセン"
	},
	"36984": {
		"joyo_kanji": "選",
		"yomi": {
			"on_yomi": [
				"セン"
			],
			"kun_yomi": [
				"えら"
			],
			"example_yomi": [
				"えら-ぶ"
			]
		},
		"raw_info": "選\t\t15\t4\t\tセン、えら-ぶ"
	},
	"36986": {
		"joyo_kanji": "遺",
		"yomi": {
			"on_yomi": [
				"ユイ",
				"イ"
			]
		},
		"raw_info": "遺\t\t15\t6\t\tイ、（ユイ）"
	},
	"36991": {
		"joyo_kanji": "避",
		"yomi": {
			"on_yomi": [
				"ヒ"
			],
			"kun_yomi": [
				"さ"
			],
			"example_yomi": [
				"さ-ける"
			]
		},
		"raw_info": "避\t\t16\t7S\t\tヒ、さ-ける"
	},
	"36996": {
		"joyo_kanji": "還",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "還\t\t16\t7S\t\tカン"
	},
	"37027": {
		"joyo_kanji": "那",
		"yomi": {
			"on_yomi": [
				"ナ"
			]
		},
		"raw_info": "那\t\t7\t7S\t2010\tナ"
	},
	"37030": {
		"joyo_kanji": "邦",
		"yomi": {
			"on_yomi": [
				"ホウ"
			]
		},
		"raw_info": "邦\t\t7\t7S\t\tホウ"
	},
	"37034": {
		"joyo_kanji": "邪",
		"yomi": {
			"on_yomi": [
				"ジャ"
			]
		},
		"raw_info": "邪\t\t8\t7S\t\tジャ"
	},
	"37048": {
		"joyo_kanji": "邸",
		"yomi": {
			"on_yomi": [
				"テイ"
			]
		},
		"raw_info": "邸\t\t8\t7S\t\tテイ"
	},
	"37066": {
		"joyo_kanji": "郊",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "郊\t\t9\t7S\t\tコウ"
	},
	"37070": {
		"joyo_kanji": "郎",
		"kyu_jitai": "郞",
		"yomi": {
			"on_yomi": [
				"ロウ"
			]
		},
		"raw_info": "郎\t郞\t9\t7S\t\tロウ"
	},
	"37089": {
		"joyo_kanji": "郡",
		"yomi": {
			"on_yomi": [
				"グン"
			]
		},
		"raw_info": "郡\t\t10\t4\t\tグン"
	},
	"37096": {
		"joyo_kanji": "部",
		"yomi": {
			"on_yomi": [
				"ブ"
			]
		},
		"raw_info": "部\t\t11\t3\t\tブ"
	},
	"37101": {
		"joyo_kanji": "郭",
		"yomi": {
			"on_yomi": [
				"カク"
			]
		},
		"raw_info": "郭\t\t11\t7S\t\tカク"
	},
	"37109": {
		"joyo_kanji": "郵",
		"yomi": {
			"on_yomi": [
				"ユウ"
			]
		},
		"raw_info": "郵\t\t11\t6\t\tユウ"
	},
	"37111": {
		"joyo_kanji": "郷",
		"kyu_jitai": "鄕",
		"yomi": {
			"on_yomi": [
				"キョウ",
				"ゴウ"
			]
		},
		"raw_info": "郷\t鄕\t11\t6\t\tキョウ、ゴウ"
	},
	"37117": {
		"joyo_kanji": "都",
		"kyu_jitai": "都",
		"yomi": {
			"on_yomi": [
				"ト",
				"ツ"
			],
			"kun_yomi": [
				"みやこ"
			]
		},
		"raw_info": "都\t都\t11\t3\t\tト、ツ、みやこ"
	},
	"37196": {
		"joyo_kanji": "酌",
		"yomi": {
			"on_yomi": [
				"シャク"
			],
			"kun_yomi": [
				"く"
			],
			"example_yomi": [
				"く-む"
			]
		},
		"raw_info": "酌\t\t10\t7S\t1981\tシャク、く-む"
	},
	"37197": {
		"joyo_kanji": "配",
		"yomi": {
			"on_yomi": [
				"ハイ"
			],
			"kun_yomi": [
				"くば"
			],
			"example_yomi": [
				"くば-る"
			]
		},
		"raw_info": "配\t\t10\t3\t\tハイ、くば-る"
	},
	"37198": {
		"joyo_kanji": "酎",
		"yomi": {
			"on_yomi": [
				"チュウ"
			]
		},
		"raw_info": "酎\t\t10\t7S\t2010\tチュウ"
	},
	"37202": {
		"joyo_kanji": "酒",
		"yomi": {
			"on_yomi": [
				"シュ"
			],
			"kun_yomi": [
				"さけ",
				"さか"
			]
		},
		"raw_info": "酒\t\t10\t3\t\tシュ、さけ、（さか）"
	},
	"37204": {
		"joyo_kanji": "酔",
		"kyu_jitai": "醉",
		"yomi": {
			"on_yomi": [
				"スイ"
			],
			"kun_yomi": [
				"よ"
			],
			"example_yomi": [
				"よ-う"
			]
		},
		"raw_info": "酔\t醉\t11\t7S\t\tスイ、よ-う"
	},
	"37218": {
		"joyo_kanji": "酢",
		"yomi": {
			"on_yomi": [
				"サク"
			],
			"kun_yomi": [
				"す"
			]
		},
		"raw_info": "酢\t\t12\t7S\t\tサク、す"
	},
	"37226": {
		"joyo_kanji": "酪",
		"yomi": {
			"on_yomi": [
				"ラク"
			]
		},
		"raw_info": "酪\t\t13\t7S\t\tラク"
	},
	"37228": {
		"joyo_kanji": "酬",
		"yomi": {
			"on_yomi": [
				"シュウ"
			]
		},
		"raw_info": "酬\t\t13\t7S\t\tシュウ"
	},
	"37237": {
		"joyo_kanji": "酵",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "酵\t\t14\t7S\t\tコウ"
	},
	"37239": {
		"joyo_kanji": "酷",
		"yomi": {
			"on_yomi": [
				"コク"
			]
		},
		"raw_info": "酷\t\t14\t7S\t\tコク"
	},
	"37240": {
		"joyo_kanji": "酸",
		"yomi": {
			"on_yomi": [
				"サン"
			],
			"kun_yomi": [
				"す"
			],
			"example_yomi": [
				"す-い"
			]
		},
		"raw_info": "酸\t\t14\t5\t\tサン、す-い"
	},
	"37266": {
		"joyo_kanji": "醒",
		"yomi": {
			"on_yomi": [
				"セイ"
			]
		},
		"raw_info": "醒\t\t16\t7S\t2010\tセイ"
	},
	"37276": {
		"joyo_kanji": "醜",
		"yomi": {
			"on_yomi": [
				"シュウ"
			],
			"kun_yomi": [
				"みにく"
			],
			"example_yomi": [
				"みにく-い"
			]
		},
		"raw_info": "醜\t\t17\t7S\t\tシュウ、みにく-い"
	},
	"37304": {
		"joyo_kanji": "醸",
		"kyu_jitai": "釀",
		"yomi": {
			"on_yomi": [
				"ジョウ"
			],
			"kun_yomi": [
				"かも"
			],
			"example_yomi": [
				"かも-す"
			]
		},
		"raw_info": "醸\t釀\t20\t7S\t\tジョウ、かも-す"
	},
	"37319": {
		"joyo_kanji": "采",
		"yomi": {
			"on_yomi": [
				"サイ"
			]
		},
		"raw_info": "采\t\t8\t7S\t2010\tサイ"
	},
	"37320": {
		"joyo_kanji": "釈",
		"kyu_jitai": "釋",
		"yomi": {
			"on_yomi": [
				"シャク"
			]
		},
		"raw_info": "釈\t釋\t11\t7S\t\tシャク"
	},
	"37324": {
		"joyo_kanji": "里",
		"yomi": {
			"on_yomi": [
				"リ"
			],
			"kun_yomi": [
				"さと"
			]
		},
		"raw_info": "里\t\t7\t2\t\tリ、さと"
	},
	"37325": {
		"joyo_kanji": "重",
		"yomi": {
			"on_yomi": [
				"ジュウ",
				"チョウ"
			],
			"kun_yomi": [
				"え",
				"おも",
				"かさ"
			],
			"example_yomi": [
				"おも-い",
				"かさ-ねる",
				"かさ-なる"
			]
		},
		"raw_info": "重\t\t9\t3\t\tジュウ、チョウ、え、おも-い、かさ-ねる、かさ-なる"
	},
	"37326": {
		"joyo_kanji": "野",
		"yomi": {
			"on_yomi": [
				"ヤ"
			],
			"kun_yomi": [
				"の"
			]
		},
		"raw_info": "野\t\t11\t2\t\tヤ、の"
	},
	"37327": {
		"joyo_kanji": "量",
		"yomi": {
			"on_yomi": [
				"リョウ"
			],
			"kun_yomi": [
				"はか"
			],
			"example_yomi": [
				"はか-る"
			]
		},
		"raw_info": "量\t\t12\t4\t\tリョウ、はか-る"
	},
	"37329": {
		"joyo_kanji": "金",
		"yomi": {
			"on_yomi": [
				"キン",
				"コン"
			],
			"kun_yomi": [
				"かね",
				"かな"
			]
		},
		"raw_info": "金\t\t8\t1\t\tキン、コン、かね、（かな）"
	},
	"37340": {
		"joyo_kanji": "釜",
		"yomi": {
			"kun_yomi": [
				"かま"
			]
		},
		"raw_info": "釜\t\t10\t7S\t2010\tかま"
	},
	"37341": {
		"joyo_kanji": "針",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"はり"
			]
		},
		"raw_info": "針\t\t10\t6\t\tシン、はり"
	},
	"37347": {
		"joyo_kanji": "釣",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"つ"
			],
			"example_yomi": [
				"つ-る"
			]
		},
		"raw_info": "釣\t\t11\t7S\t1981\tチョウ、つ-る"
	},
	"37389": {
		"joyo_kanji": "鈍",
		"yomi": {
			"on_yomi": [
				"ドン"
			],
			"kun_yomi": [
				"にぶ"
			],
			"example_yomi": [
				"にぶ-い",
				"にぶ-る"
			]
		},
		"raw_info": "鈍\t\t12\t7S\t\tドン、にぶ-い、にぶ-る"
	},
	"37428": {
		"joyo_kanji": "鈴",
		"yomi": {
			"on_yomi": [
				"レイ",
				"リン"
			],
			"kun_yomi": [
				"すず"
			]
		},
		"raw_info": "鈴\t\t13\t7S\t\tレイ、リン、すず"
	},
	"37444": {
		"joyo_kanji": "鉄",
		"kyu_jitai": "鐵",
		"yomi": {
			"on_yomi": [
				"テツ"
			]
		},
		"raw_info": "鉄\t鐵\t13\t3\t\tテツ"
	},
	"37467": {
		"joyo_kanji": "鉛",
		"yomi": {
			"on_yomi": [
				"エン"
			],
			"kun_yomi": [
				"なまり"
			]
		},
		"raw_info": "鉛\t\t13\t7S\t\tエン、なまり"
	},
	"37474": {
		"joyo_kanji": "鉢",
		"yomi": {
			"on_yomi": [
				"ハチ",
				"ハツ"
			]
		},
		"raw_info": "鉢\t\t13\t7S\t1981\tハチ、（ハツ）"
	},
	"37489": {
		"joyo_kanji": "鉱",
		"kyu_jitai": "鑛",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "鉱\t鑛\t13\t5\t\tコウ"
	},
	"37504": {
		"joyo_kanji": "銀",
		"yomi": {
			"on_yomi": [
				"ギン"
			]
		},
		"raw_info": "銀\t\t14\t3\t\tギン"
	},
	"37507": {
		"joyo_kanji": "銃",
		"yomi": {
			"on_yomi": [
				"ジュウ"
			]
		},
		"raw_info": "銃\t\t14\t7S\t\tジュウ"
	},
	"37509": {
		"joyo_kanji": "銅",
		"yomi": {
			"on_yomi": [
				"ドウ"
			]
		},
		"raw_info": "銅\t\t14\t5\t\tドウ"
	},
	"37528": {
		"joyo_kanji": "銘",
		"yomi": {
			"on_yomi": [
				"メイ"
			]
		},
		"raw_info": "銘\t\t14\t7S\t\tメイ"
	},
	"37549": {
		"joyo_kanji": "銭",
		"kyu_jitai": "錢",
		"yomi": {
			"on_yomi": [
				"セン"
			],
			"kun_yomi": [
				"ぜに"
			]
		},
		"raw_info": "銭\t錢\t14\t5\t\tセン、ぜに"
	},
	"37613": {
		"joyo_kanji": "鋭",
		"yomi": {
			"on_yomi": [
				"エイ"
			],
			"kun_yomi": [
				"するど"
			],
			"example_yomi": [
				"するど-い"
			]
		},
		"raw_info": "鋭\t\t15\t7S\t\tエイ、するど-い"
	},
	"37619": {
		"joyo_kanji": "鋳",
		"kyu_jitai": "鑄",
		"yomi": {
			"on_yomi": [
				"チュウ"
			],
			"kun_yomi": [
				"い"
			],
			"example_yomi": [
				"い-る"
			]
		},
		"raw_info": "鋳\t鑄\t15\t7S\t\tチュウ、い-る"
	},
	"37628": {
		"joyo_kanji": "鋼",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"はがね"
			]
		},
		"raw_info": "鋼\t\t16\t6\t\tコウ、はがね"
	},
	"37664": {
		"joyo_kanji": "錠",
		"yomi": {
			"on_yomi": [
				"ジョウ"
			]
		},
		"raw_info": "錠\t\t16\t7S\t\tジョウ"
	},
	"37670": {
		"joyo_kanji": "錦",
		"yomi": {
			"on_yomi": [
				"キン"
			],
			"kun_yomi": [
				"にしき"
			]
		},
		"raw_info": "錦\t\t16\t7S\t2010\tキン、にしき"
	},
	"37676": {
		"joyo_kanji": "錬",
		"kyu_jitai": "鍊",
		"yomi": {
			"on_yomi": [
				"レン"
			]
		},
		"raw_info": "錬\t鍊\t16\t7S\t\tレン"
	},
	"37678": {
		"joyo_kanji": "錮",
		"yomi": {
			"on_yomi": [
				"コ"
			]
		},
		"raw_info": "錮\t\t16\t7S\t2010\tコ"
	},
	"37679": {
		"joyo_kanji": "錯",
		"yomi": {
			"on_yomi": [
				"サク"
			]
		},
		"raw_info": "錯\t\t16\t7S\t\tサク"
	},
	"37682": {
		"joyo_kanji": "録",
		"kyu_jitai": "錄",
		"yomi": {
			"on_yomi": [
				"ロク"
			]
		},
		"raw_info": "録\t錄\t16\t4\t\tロク"
	},
	"37707": {
		"joyo_kanji": "鍋",
		"yomi": {
			"kun_yomi": [
				"なべ"
			]
		},
		"raw_info": "鍋\t\t17\t7S\t2010\tなべ"
	},
	"37723": {
		"joyo_kanji": "鍛",
		"yomi": {
			"on_yomi": [
				"タン"
			],
			"kun_yomi": [
				"きた"
			],
			"example_yomi": [
				"きた-える"
			]
		},
		"raw_info": "鍛\t\t17\t7S\t\tタン、きた-える"
	},
	"37749": {
		"joyo_kanji": "鍵",
		"yomi": {
			"on_yomi": [
				"ケン"
			],
			"kun_yomi": [
				"かぎ"
			]
		},
		"raw_info": "鍵\t\t17\t7S\t2010\tケン、かぎ"
	},
	"37772": {
		"joyo_kanji": "鎌",
		"yomi": {
			"kun_yomi": [
				"かま"
			]
		},
		"raw_info": "鎌\t\t18\t7S\t2010\tかま"
	},
	"37782": {
		"joyo_kanji": "鎖",
		"yomi": {
			"on_yomi": [
				"サ"
			],
			"kun_yomi": [
				"くさり"
			]
		},
		"raw_info": "鎖\t\t18\t7S\t\tサ、くさり"
	},
	"37806": {
		"joyo_kanji": "鎮",
		"kyu_jitai": "鎭",
		"yomi": {
			"on_yomi": [
				"チン"
			],
			"kun_yomi": [
				"しず"
			],
			"example_yomi": [
				"しず-める",
				"しず-まる"
			]
		},
		"raw_info": "鎮\t鎭\t18\t7S\t\tチン、しず-める、しず-まる"
	},
	"37857": {
		"joyo_kanji": "鏡",
		"yomi": {
			"on_yomi": [
				"キョウ"
			],
			"kun_yomi": [
				"かがみ"
			]
		},
		"raw_info": "鏡\t\t19\t4\t\tキョウ、かがみ"
	},
	"37912": {
		"joyo_kanji": "鐘",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"かね"
			]
		},
		"raw_info": "鐘\t\t20\t7S\t\tショウ、かね"
	},
	"37969": {
		"joyo_kanji": "鑑",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"かんが"
			],
			"example_yomi": [
				"かんが-みる"
			]
		},
		"raw_info": "鑑\t\t23\t7S\t\tカン、かんが-みる"
	},
	"38263": {
		"joyo_kanji": "長",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"なが"
			],
			"example_yomi": [
				"なが-い"
			]
		},
		"raw_info": "長\t\t8\t2\t\tチョウ、なが-い"
	},
	"38272": {
		"joyo_kanji": "門",
		"yomi": {
			"on_yomi": [
				"モン"
			],
			"kun_yomi": [
				"かど"
			]
		},
		"raw_info": "門\t\t8\t2\t\tモン、かど"
	},
	"38281": {
		"joyo_kanji": "閉",
		"yomi": {
			"on_yomi": [
				"ヘイ"
			],
			"kun_yomi": [
				"と",
				"し"
			],
			"example_yomi": [
				"し-まる",
				"と-じる",
				"と-ざす",
				"し-める"
			]
		},
		"raw_info": "閉\t\t11\t6\t\tヘイ、と-じる、と-ざす、し-める、し-まる"
	},
	"38283": {
		"joyo_kanji": "開",
		"yomi": {
			"on_yomi": [
				"カイ"
			],
			"kun_yomi": [
				"ひら",
				"あ"
			],
			"example_yomi": [
				"あ-く",
				"あ-ける",
				"ひら-く",
				"ひら-ける"
			]
		},
		"raw_info": "開\t\t12\t3\t\tカイ、ひら-く、ひら-ける、あ-く、あ-ける"
	},
	"38289": {
		"joyo_kanji": "閑",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "閑\t\t12\t7S\t\tカン"
	},
	"38291": {
		"joyo_kanji": "間",
		"kyu_jitai": "閒",
		"yomi": {
			"on_yomi": [
				"カン",
				"ケン"
			],
			"kun_yomi": [
				"あいだ",
				"ま"
			]
		},
		"raw_info": "間\t閒\t12\t2\t\tカン、ケン、あいだ、ま"
	},
	"38306": {
		"joyo_kanji": "関",
		"kyu_jitai": "關",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"せき",
				"かか"
			],
			"example_yomi": [
				"かか-わる"
			]
		},
		"raw_info": "関\t關\t14\t4\t\tカン、せき、かか-わる"
	},
	"38307": {
		"joyo_kanji": "閣",
		"yomi": {
			"on_yomi": [
				"カク"
			]
		},
		"raw_info": "閣\t\t14\t6\t\tカク"
	},
	"38309": {
		"joyo_kanji": "閥",
		"yomi": {
			"on_yomi": [
				"バツ"
			]
		},
		"raw_info": "閥\t\t14\t7S\t\tバツ"
	},
	"38322": {
		"joyo_kanji": "閲",
		"yomi": {
			"on_yomi": [
				"エツ"
			]
		},
		"raw_info": "閲\t\t15\t7S\t\tエツ"
	},
	"38343": {
		"joyo_kanji": "闇",
		"yomi": {
			"kun_yomi": [
				"やみ"
			]
		},
		"raw_info": "闇\t\t17\t7S\t2010\tやみ"
	},
	"38360": {
		"joyo_kanji": "闘",
		"kyu_jitai": "鬭",
		"yomi": {
			"on_yomi": [
				"トウ"
			],
			"kun_yomi": [
				"たたか"
			],
			"example_yomi": [
				"たたか-う"
			]
		},
		"raw_info": "闘\t鬭\t18\t7S\t\tトウ、たたか-う"
	},
	"38428": {
		"joyo_kanji": "阜",
		"yomi": {
			"on_yomi": [
				"フ"
			]
		},
		"raw_info": "阜\t\t8\t7S\t2010\t（フ）"
	},
	"38442": {
		"joyo_kanji": "阪",
		"yomi": {
			"on_yomi": [
				"ハン"
			]
		},
		"raw_info": "阪\t\t7\t7S\t2010\tハン"
	},
	"38450": {
		"joyo_kanji": "防",
		"yomi": {
			"on_yomi": [
				"ボウ"
			],
			"kun_yomi": [
				"ふせ"
			],
			"example_yomi": [
				"ふせ-ぐ"
			]
		},
		"raw_info": "防\t\t7\t5\t\tボウ、ふせ-ぐ"
	},
	"38459": {
		"joyo_kanji": "阻",
		"yomi": {
			"on_yomi": [
				"ソ"
			],
			"kun_yomi": [
				"はば"
			],
			"example_yomi": [
				"はば-む"
			]
		},
		"raw_info": "阻\t\t8\t7S\t\tソ、はば-む"
	},
	"38468": {
		"joyo_kanji": "附",
		"yomi": {
			"on_yomi": [
				"フ"
			]
		},
		"raw_info": "附\t\t8\t7S\t\tフ"
	},
	"38477": {
		"joyo_kanji": "降",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"ふ",
				"お"
			],
			"example_yomi": [
				"お-りる",
				"お-ろす",
				"ふ-る"
			]
		},
		"raw_info": "降\t\t10\t6\t\tコウ、お-りる、お-ろす、ふ-る"
	},
	"38480": {
		"joyo_kanji": "限",
		"yomi": {
			"on_yomi": [
				"ゲン"
			],
			"kun_yomi": [
				"かぎ"
			],
			"example_yomi": [
				"かぎ-る"
			]
		},
		"raw_info": "限\t\t9\t5\t\tゲン、かぎ-る"
	},
	"38491": {
		"joyo_kanji": "陛",
		"yomi": {
			"on_yomi": [
				"ヘイ"
			]
		},
		"raw_info": "陛\t\t10\t6\t\tヘイ"
	},
	"38498": {
		"joyo_kanji": "院",
		"yomi": {
			"on_yomi": [
				"イン"
			]
		},
		"raw_info": "院\t\t10\t3\t\tイン"
	},
	"38499": {
		"joyo_kanji": "陣",
		"yomi": {
			"on_yomi": [
				"ジン"
			]
		},
		"raw_info": "陣\t\t10\t7S\t\tジン"
	},
	"38500": {
		"joyo_kanji": "除",
		"yomi": {
			"on_yomi": [
				"ジ",
				"ジョ"
			],
			"kun_yomi": [
				"のぞ"
			],
			"example_yomi": [
				"のぞ-く"
			]
		},
		"raw_info": "除\t\t10\t6\t\tジョ、（ジ）、のぞ-く"
	},
	"38501": {
		"joyo_kanji": "陥",
		"kyu_jitai": "陷",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"おちい",
				"おとしい"
			],
			"example_yomi": [
				"おちい-る",
				"おとしい-れる"
			]
		},
		"raw_info": "陥\t陷\t10\t7S\t\tカン、おちい-る、おとしい-れる"
	},
	"38506": {
		"joyo_kanji": "陪",
		"yomi": {
			"on_yomi": [
				"バイ"
			]
		},
		"raw_info": "陪\t\t11\t7S\t\tバイ"
	},
	"38512": {
		"joyo_kanji": "陰",
		"yomi": {
			"on_yomi": [
				"イン"
			],
			"kun_yomi": [
				"かげ"
			],
			"example_yomi": [
				"かげ-る"
			]
		},
		"raw_info": "陰\t\t11\t7S\t\tイン、かげ、かげ-る"
	},
	"38515": {
		"joyo_kanji": "陳",
		"yomi": {
			"on_yomi": [
				"チン"
			]
		},
		"raw_info": "陳\t\t11\t7S\t\tチン"
	},
	"38517": {
		"joyo_kanji": "陵",
		"yomi": {
			"on_yomi": [
				"リョウ"
			],
			"kun_yomi": [
				"みささぎ"
			]
		},
		"raw_info": "陵\t\t11\t7S\t\tリョウ、みささぎ"
	},
	"38518": {
		"joyo_kanji": "陶",
		"yomi": {
			"on_yomi": [
				"トウ"
			]
		},
		"raw_info": "陶\t\t11\t7S\t\tトウ"
	},
	"38520": {
		"joyo_kanji": "陸",
		"yomi": {
			"on_yomi": [
				"リク"
			]
		},
		"raw_info": "陸\t\t11\t4\t\tリク"
	},
	"38522": {
		"joyo_kanji": "険",
		"kyu_jitai": "險",
		"yomi": {
			"on_yomi": [
				"ケン"
			],
			"kun_yomi": [
				"けわ"
			],
			"example_yomi": [
				"けわ-しい"
			]
		},
		"raw_info": "険\t險\t11\t5\t\tケン、けわ-しい"
	},
	"38525": {
		"joyo_kanji": "陽",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			]
		},
		"raw_info": "陽\t\t12\t3\t\tヨウ"
	},
	"38533": {
		"joyo_kanji": "隅",
		"yomi": {
			"on_yomi": [
				"グウ"
			],
			"kun_yomi": [
				"すみ"
			]
		},
		"raw_info": "隅\t\t12\t7S\t1981\tグウ、すみ"
	},
	"38534": {
		"joyo_kanji": "隆",
		"kyu_jitai": "隆",
		"yomi": {
			"on_yomi": [
				"リュウ"
			]
		},
		"raw_info": "隆\t隆\t11\t7S\t\tリュウ"
	},
	"38538": {
		"joyo_kanji": "隊",
		"yomi": {
			"on_yomi": [
				"タイ"
			]
		},
		"raw_info": "隊\t\t12\t4\t\tタイ"
	},
	"38542": {
		"joyo_kanji": "階",
		"yomi": {
			"on_yomi": [
				"カイ"
			]
		},
		"raw_info": "階\t\t12\t3\t\tカイ"
	},
	"38543": {
		"joyo_kanji": "随",
		"kyu_jitai": "隨",
		"yomi": {
			"on_yomi": [
				"ズイ"
			]
		},
		"raw_info": "随\t隨\t12\t7S\t\tズイ"
	},
	"38548": {
		"joyo_kanji": "隔",
		"yomi": {
			"on_yomi": [
				"カク"
			],
			"kun_yomi": [
				"へだ"
			],
			"example_yomi": [
				"へだ-てる",
				"へだ-たる"
			]
		},
		"raw_info": "隔\t\t13\t7S\t\tカク、へだ-てる、へだ-たる"
	},
	"38553": {
		"joyo_kanji": "隙",
		"yomi": {
			"on_yomi": [
				"ゲキ"
			],
			"kun_yomi": [
				"すき"
			]
		},
		"raw_info": "隙\t\t13\t7S\t2010\tゲキ、すき"
	},
	"38555": {
		"joyo_kanji": "際",
		"yomi": {
			"on_yomi": [
				"サイ"
			],
			"kun_yomi": [
				"きわ"
			]
		},
		"raw_info": "際\t\t14\t5\t\tサイ、きわ"
	},
	"38556": {
		"joyo_kanji": "障",
		"yomi": {
			"on_yomi": [
				"ショウ"
			],
			"kun_yomi": [
				"さわ"
			],
			"example_yomi": [
				"さわ-る"
			]
		},
		"raw_info": "障\t\t14\t6\t\tショウ、さわ-る"
	},
	"38560": {
		"joyo_kanji": "隠",
		"kyu_jitai": "隱",
		"yomi": {
			"on_yomi": [
				"イン"
			],
			"kun_yomi": [
				"かく"
			],
			"example_yomi": [
				"かく-す",
				"かく-れる"
			]
		},
		"raw_info": "隠\t隱\t14\t7S\t\tイン、かく-す、かく-れる"
	},
	"38563": {
		"joyo_kanji": "隣",
		"kyu_jitai": "鄰",
		"yomi": {
			"on_yomi": [
				"リン"
			],
			"kun_yomi": [
				"とな",
				"となり"
			],
			"example_yomi": [
				"とな-る"
			]
		},
		"raw_info": "隣\t\t16\t7S\t\tリン、とな-る、となり"
	},
	"38583": {
		"joyo_kanji": "隷",
		"kyu_jitai": "隸",
		"yomi": {
			"on_yomi": [
				"レイ"
			]
		},
		"raw_info": "隷\t隸\t16\t7S\t\tレイ"
	},
	"38587": {
		"joyo_kanji": "隻",
		"yomi": {
			"on_yomi": [
				"セキ"
			]
		},
		"raw_info": "隻\t\t10\t7S\t\tセキ"
	},
	"38596": {
		"joyo_kanji": "雄",
		"yomi": {
			"on_yomi": [
				"ユウ"
			],
			"kun_yomi": [
				"お",
				"おす"
			]
		},
		"raw_info": "雄\t\t12\t7S\t\tユウ、お、おす"
	},
	"38597": {
		"joyo_kanji": "雅",
		"yomi": {
			"on_yomi": [
				"ガ"
			]
		},
		"raw_info": "雅\t\t13\t7S\t\tガ"
	},
	"38598": {
		"joyo_kanji": "集",
		"yomi": {
			"on_yomi": [
				"シュウ"
			],
			"kun_yomi": [
				"あつ",
				"つど"
			],
			"example_yomi": [
				"あつ-まる",
				"あつ-める",
				"つど-う"
			]
		},
		"raw_info": "集\t\t12\t3\t\tシュウ、あつ-まる、あつ-める、つど-う"
	},
	"38599": {
		"joyo_kanji": "雇",
		"yomi": {
			"on_yomi": [
				"コ"
			],
			"kun_yomi": [
				"やと"
			],
			"example_yomi": [
				"やと-う"
			]
		},
		"raw_info": "雇\t\t12\t7S\t\tコ、やと-う"
	},
	"38604": {
		"joyo_kanji": "雌",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"め",
				"めす"
			]
		},
		"raw_info": "雌\t\t14\t7S\t\tシ、め、めす"
	},
	"38609": {
		"joyo_kanji": "雑",
		"kyu_jitai": "雜",
		"yomi": {
			"on_yomi": [
				"ザツ",
				"ゾウ"
			]
		},
		"raw_info": "雑\t雜\t14\t5\t\tザツ、ゾウ"
	},
	"38626": {
		"joyo_kanji": "離",
		"yomi": {
			"on_yomi": [
				"リ"
			],
			"kun_yomi": [
				"はな"
			],
			"example_yomi": [
				"はな-れる",
				"はな-す"
			]
		},
		"raw_info": "離\t\t19\t7S\t\tリ、はな-れる、はな-す"
	},
	"38627": {
		"joyo_kanji": "難",
		"kyu_jitai": "難",
		"yomi": {
			"on_yomi": [
				"ナン"
			],
			"kun_yomi": [
				"かた",
				"むずか"
			],
			"example_yomi": [
				"かた-い",
				"むずか-しい"
			]
		},
		"raw_info": "難\t難\t18\t6\t\tナン、かた-い、むずか-しい"
	},
	"38632": {
		"joyo_kanji": "雨",
		"yomi": {
			"on_yomi": [
				"ウ"
			],
			"kun_yomi": [
				"あめ",
				"あま"
			]
		},
		"raw_info": "雨\t\t8\t1\t\tウ、あめ、（あま）"
	},
	"38634": {
		"joyo_kanji": "雪",
		"yomi": {
			"on_yomi": [
				"セツ"
			],
			"kun_yomi": [
				"ゆき"
			]
		},
		"raw_info": "雪\t\t11\t2\t\tセツ、ゆき"
	},
	"38640": {
		"joyo_kanji": "雰",
		"yomi": {
			"on_yomi": [
				"フン"
			]
		},
		"raw_info": "雰\t\t12\t7S\t1981\tフン"
	},
	"38642": {
		"joyo_kanji": "雲",
		"yomi": {
			"on_yomi": [
				"ウン"
			],
			"kun_yomi": [
				"くも"
			]
		},
		"raw_info": "雲\t\t12\t2\t\tウン、くも"
	},
	"38646": {
		"joyo_kanji": "零",
		"yomi": {
			"on_yomi": [
				"レイ"
			]
		},
		"raw_info": "零\t\t13\t7S\t\tレイ"
	},
	"38647": {
		"joyo_kanji": "雷",
		"yomi": {
			"on_yomi": [
				"ライ"
			],
			"kun_yomi": [
				"かみなり"
			]
		},
		"raw_info": "雷\t\t13\t7S\t\tライ、かみなり"
	},
	"38651": {
		"joyo_kanji": "電",
		"yomi": {
			"on_yomi": [
				"デン"
			]
		},
		"raw_info": "電\t\t13\t2\t\tデン"
	},
	"38656": {
		"joyo_kanji": "需",
		"yomi": {
			"on_yomi": [
				"ジュ"
			]
		},
		"raw_info": "需\t\t14\t7S\t\tジュ"
	},
	"38663": {
		"joyo_kanji": "震",
		"yomi": {
			"on_yomi": [
				"シン"
			],
			"kun_yomi": [
				"ふる"
			],
			"example_yomi": [
				"ふる-う",
				"ふる-える"
			]
		},
		"raw_info": "震\t\t15\t7S\t\tシン、ふる-う、ふる-える"
	},
	"38666": {
		"joyo_kanji": "霊",
		"kyu_jitai": "靈",
		"yomi": {
			"on_yomi": [
				"レイ",
				"リョウ"
			],
			"kun_yomi": [
				"たま"
			]
		},
		"raw_info": "霊\t靈\t15\t7S\t\tレイ、リョウ、たま"
	},
	"38684": {
		"joyo_kanji": "霜",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"しも"
			]
		},
		"raw_info": "霜\t\t17\t7S\t\tソウ、しも"
	},
	"38695": {
		"joyo_kanji": "霧",
		"yomi": {
			"on_yomi": [
				"ム"
			],
			"kun_yomi": [
				"きり"
			]
		},
		"raw_info": "霧\t\t19\t7S\t\tム、きり"
	},
	"38706": {
		"joyo_kanji": "露",
		"yomi": {
			"on_yomi": [
				"ロ",
				"ロウ"
			],
			"kun_yomi": [
				"つゆ"
			]
		},
		"raw_info": "露\t\t21\t7S\t\tロ、（ロウ）、つゆ"
	},
	"38738": {
		"joyo_kanji": "青",
		"kyu_jitai": "靑",
		"yomi": {
			"on_yomi": [
				"セイ",
				"ショウ"
			],
			"kun_yomi": [
				"あお"
			],
			"example_yomi": [
				"あお-い"
			]
		},
		"raw_info": "青\t靑\t8\t1\t\tセイ、（ショウ）、あお、あお-い"
	},
	"38745": {
		"joyo_kanji": "静",
		"kyu_jitai": "靜",
		"yomi": {
			"on_yomi": [
				"セイ",
				"ジョウ"
			],
			"kun_yomi": [
				"しず"
			],
			"example_yomi": [
				"しず-か",
				"しず-まる",
				"しず-める"
			]
		},
		"raw_info": "静\t靜\t14\t4\t\tセイ、（ジョウ）、しず、しず-か、しず-まる、しず-める"
	},
	"38750": {
		"joyo_kanji": "非",
		"yomi": {
			"on_yomi": [
				"ヒ"
			]
		},
		"raw_info": "非\t\t8\t5\t\tヒ"
	},
	"38754": {
		"joyo_kanji": "面",
		"yomi": {
			"on_yomi": [
				"メン"
			],
			"kun_yomi": [
				"おもて",
				"つら",
				"おも"
			]
		},
		"raw_info": "面\t\t9\t3\t\tメン、おも、おもて、つら"
	},
	"38761": {
		"joyo_kanji": "革",
		"yomi": {
			"on_yomi": [
				"カク"
			],
			"kun_yomi": [
				"かわ"
			]
		},
		"raw_info": "革\t\t9\t6\t\tカク、かわ"
	},
	"38772": {
		"joyo_kanji": "靴",
		"yomi": {
			"on_yomi": [
				"カ"
			],
			"kun_yomi": [
				"くつ"
			]
		},
		"raw_info": "靴\t\t13\t7S\t1981\tカ、くつ"
	},
	"38867": {
		"joyo_kanji": "韓",
		"yomi": {
			"on_yomi": [
				"カン"
			]
		},
		"raw_info": "韓\t\t18\t7S\t2010\tカン"
	},
	"38899": {
		"joyo_kanji": "音",
		"yomi": {
			"on_yomi": [
				"オン",
				"イン"
			],
			"kun_yomi": [
				"おと",
				"ね"
			]
		},
		"raw_info": "音\t\t9\t1\t\tオン、イン、おと、ね"
	},
	"38907": {
		"joyo_kanji": "韻",
		"yomi": {
			"on_yomi": [
				"イン"
			]
		},
		"raw_info": "韻\t\t19\t7S\t\tイン"
	},
	"38911": {
		"joyo_kanji": "響",
		"kyu_jitai": "響",
		"yomi": {
			"on_yomi": [
				"キョウ"
			],
			"kun_yomi": [
				"ひび"
			],
			"example_yomi": [
				"ひび-く"
			]
		},
		"raw_info": "響\t響\t20\t7S\t\tキョウ、ひび-く"
	},
	"38914": {
		"joyo_kanji": "頂",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"いただ",
				"いただき"
			],
			"example_yomi": [
				"いただ-く"
			]
		},
		"raw_info": "頂\t\t11\t6\t\tチョウ、いただ-く、いただき"
	},
	"38915": {
		"joyo_kanji": "頃",
		"yomi": {
			"kun_yomi": [
				"ころ"
			]
		},
		"raw_info": "頃\t\t11\t7S\t2010\tころ"
	},
	"38917": {
		"joyo_kanji": "項",
		"yomi": {
			"on_yomi": [
				"コウ"
			]
		},
		"raw_info": "項\t\t12\t7S\t\tコウ"
	},
	"38918": {
		"joyo_kanji": "順",
		"yomi": {
			"on_yomi": [
				"ジュン"
			]
		},
		"raw_info": "順\t\t12\t4\t\tジュン"
	},
	"38920": {
		"joyo_kanji": "須",
		"yomi": {
			"on_yomi": [
				"ス"
			]
		},
		"raw_info": "須\t\t12\t7S\t2010\tス"
	},
	"38928": {
		"joyo_kanji": "預",
		"yomi": {
			"on_yomi": [
				"ヨ"
			],
			"kun_yomi": [
				"あず"
			],
			"example_yomi": [
				"あず-ける",
				"あず-かる"
			]
		},
		"raw_info": "預\t\t13\t5\t\tヨ、あず-ける、あず-かる"
	},
	"38929": {
		"joyo_kanji": "頑",
		"yomi": {
			"on_yomi": [
				"ガン"
			]
		},
		"raw_info": "頑\t\t13\t7S\t1981\tガン"
	},
	"38930": {
		"joyo_kanji": "頒",
		"yomi": {
			"on_yomi": [
				"ハン"
			]
		},
		"raw_info": "頒\t\t13\t7S\t\tハン"
	},
	"38931": {
		"joyo_kanji": "頓",
		"yomi": {
			"on_yomi": [
				"トン"
			]
		},
		"raw_info": "頓\t\t13\t7S\t2010\tトン"
	},
	"38936": {
		"joyo_kanji": "領",
		"yomi": {
			"on_yomi": [
				"リョウ"
			]
		},
		"raw_info": "領\t\t14\t5\t\tリョウ"
	},
	"38957": {
		"joyo_kanji": "頭",
		"yomi": {
			"on_yomi": [
				"トウ",
				"ズ",
				"ト"
			],
			"kun_yomi": [
				"あたま",
				"かしら"
			]
		},
		"raw_info": "頭\t\t16\t2\t\tトウ、ズ、（ト）、あたま、かしら"
	},
	"38960": {
		"joyo_kanji": "頰",
		"yomi": {
			"kun_yomi": [
				"ほお"
			]
		},
		"raw_info": "頰\t\t16\t7S\t2010\tほお"
	},
	"38971": {
		"joyo_kanji": "頻",
		"kyu_jitai": "頻",
		"yomi": {
			"on_yomi": [
				"ヒン"
			]
		},
		"raw_info": "頻\t頻\t17\t7S\t1981\tヒン"
	},
	"38972": {
		"joyo_kanji": "頼",
		"kyu_jitai": "賴",
		"yomi": {
			"on_yomi": [
				"ライ"
			],
			"kun_yomi": [
				"たよ",
				"たの"
			],
			"example_yomi": [
				"たの-む",
				"たの-もしい",
				"たよ-る"
			]
		},
		"raw_info": "頼\t賴\t16\t7S\t\tライ、たの-む、たの-もしい、たよ-る"
	},
	"38988": {
		"joyo_kanji": "題",
		"yomi": {
			"on_yomi": [
				"ダイ"
			]
		},
		"raw_info": "題\t\t18\t3\t\tダイ"
	},
	"38989": {
		"joyo_kanji": "額",
		"yomi": {
			"on_yomi": [
				"ガク"
			],
			"kun_yomi": [
				"ひたい"
			]
		},
		"raw_info": "額\t\t18\t5\t\tガク、ひたい"
	},
	"38990": {
		"joyo_kanji": "顎",
		"yomi": {
			"on_yomi": [
				"ガク"
			],
			"kun_yomi": [
				"あご"
			]
		},
		"raw_info": "顎\t\t18\t7S\t2010\tガク、あご"
	},
	"38996": {
		"joyo_kanji": "顔",
		"kyu_jitai": "顏",
		"yomi": {
			"on_yomi": [
				"ガン"
			],
			"kun_yomi": [
				"かお"
			]
		},
		"raw_info": "顔\t顏\t18\t2\t\tガン、かお"
	},
	"38997": {
		"joyo_kanji": "顕",
		"kyu_jitai": "顯",
		"yomi": {
			"on_yomi": [
				"ケン"
			]
		},
		"raw_info": "顕\t顯\t18\t7S\t\tケン"
	},
	"39000": {
		"joyo_kanji": "願",
		"yomi": {
			"on_yomi": [
				"ガン"
			],
			"kun_yomi": [
				"ねが"
			],
			"example_yomi": [
				"ねが-う"
			]
		},
		"raw_info": "願\t\t19\t4\t\tガン、ねが-う"
	},
	"39006": {
		"joyo_kanji": "類",
		"kyu_jitai": "類",
		"yomi": {
			"on_yomi": [
				"ルイ"
			],
			"kun_yomi": [
				"たぐ"
			],
			"example_yomi": [
				"たぐ-い"
			]
		},
		"raw_info": "類\t類\t18\t4\t\tルイ、たぐ-い"
	},
	"39015": {
		"joyo_kanji": "顧",
		"yomi": {
			"on_yomi": [
				"コ"
			],
			"kun_yomi": [
				"かえり"
			],
			"example_yomi": [
				"かえり-みる"
			]
		},
		"raw_info": "顧\t\t21\t7S\t\tコ、かえり-みる"
	},
	"39080": {
		"joyo_kanji": "風",
		"yomi": {
			"on_yomi": [
				"フウ",
				"フ"
			],
			"kun_yomi": [
				"かぜ",
				"かざ"
			]
		},
		"raw_info": "風\t\t9\t2\t\tフウ、（フ）、かぜ、（かざ）"
	},
	"39131": {
		"joyo_kanji": "飛",
		"yomi": {
			"on_yomi": [
				"ヒ"
			],
			"kun_yomi": [
				"と"
			],
			"example_yomi": [
				"と-ぶ",
				"と-ばす"
			]
		},
		"raw_info": "飛\t\t9\t4\t\tヒ、と-ぶ、と-ばす"
	},
	"39135": {
		"joyo_kanji": "食",
		"yomi": {
			"on_yomi": [
				"ショク",
				"ジキ"
			],
			"kun_yomi": [
				"く",
				"た"
			],
			"example_yomi": [
				"く-う",
				"く-らう",
				"た-べる"
			]
		},
		"raw_info": "食\t\t9\t2\t\tショク、（ジキ）、く-う、く-らう、た-べる"
	},
	"39138": {
		"joyo_kanji": "飢",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"う"
			],
			"example_yomi": [
				"う-える"
			]
		},
		"raw_info": "飢\t\t10\t7S\t\tキ、う-える"
	},
	"39151": {
		"joyo_kanji": "飯",
		"kyu_jitai": "飯",
		"yomi": {
			"on_yomi": [
				"ハン"
			],
			"kun_yomi": [
				"めし"
			]
		},
		"raw_info": "飯\t飯\t12\t4\t\tハン、めし"
	},
	"39154": {
		"joyo_kanji": "飲",
		"kyu_jitai": "飮",
		"yomi": {
			"on_yomi": [
				"イン"
			],
			"kun_yomi": [
				"の"
			],
			"example_yomi": [
				"の-む"
			]
		},
		"raw_info": "飲\t\t12\t3\t\tイン、の-む"
	},
	"39164": {
		"joyo_kanji": "飼",
		"kyu_jitai": "飼",
		"yomi": {
			"on_yomi": [
				"シ"
			],
			"kun_yomi": [
				"か"
			],
			"example_yomi": [
				"か-う"
			]
		},
		"raw_info": "飼\t飼\t13\t5\t\tシ、か-う"
	},
	"39165": {
		"joyo_kanji": "飽",
		"yomi": {
			"on_yomi": [
				"ホウ"
			],
			"kun_yomi": [
				"あ"
			],
			"example_yomi": [
				"あ-きる",
				"あ-かす"
			]
		},
		"raw_info": "飽\t\t13\t7S\t\tホウ、あ-きる、あ-かす"
	},
	"39166": {
		"joyo_kanji": "飾",
		"yomi": {
			"on_yomi": [
				"ショク"
			],
			"kun_yomi": [
				"かざ"
			],
			"example_yomi": [
				"かざ-る"
			]
		},
		"raw_info": "飾\t\t13\t7S\t\tショク、かざ-る"
	},
	"39173": {
		"joyo_kanji": "餅",
		"kyu_jitai": "餠",
		"yomi": {
			"on_yomi": [
				"ヘイ"
			],
			"kun_yomi": [
				"もち"
			]
		},
		"raw_info": "餅\t餠\t15\t7S\t2010\tヘイ、もち"
	},
	"39178": {
		"joyo_kanji": "養",
		"yomi": {
			"on_yomi": [
				"ヨウ"
			],
			"kun_yomi": [
				"やしな"
			],
			"example_yomi": [
				"やしな-う"
			]
		},
		"raw_info": "養\t\t15\t4\t\tヨウ、やしな-う"
	},
	"39180": {
		"joyo_kanji": "餌",
		"yomi": {
			"on_yomi": [
				"ジ"
			],
			"kun_yomi": [
				"えさ",
				"え"
			]
		},
		"raw_info": "餌\t\t15\t7S\t2010\tジ、えさ、え"
	},
	"39187": {
		"joyo_kanji": "餓",
		"yomi": {
			"on_yomi": [
				"ガ"
			]
		},
		"raw_info": "餓\t\t15\t7S\t\tガ"
	},
	"39208": {
		"joyo_kanji": "館",
		"kyu_jitai": "館",
		"yomi": {
			"on_yomi": [
				"カン"
			],
			"kun_yomi": [
				"やかた"
			]
		},
		"raw_info": "館\t館\t16\t3\t\tカン、やかた"
	},
	"39318": {
		"joyo_kanji": "首",
		"yomi": {
			"on_yomi": [
				"シュ"
			],
			"kun_yomi": [
				"くび"
			]
		},
		"raw_info": "首\t\t9\t2\t\tシュ、くび"
	},
	"39321": {
		"joyo_kanji": "香",
		"yomi": {
			"on_yomi": [
				"コウ",
				"キョウ"
			],
			"kun_yomi": [
				"か",
				"かお"
			],
			"example_yomi": [
				"かお-り",
				"かお-る"
			]
		},
		"raw_info": "香\t\t9\t7S\t\tコウ、（キョウ）、か、かお-り、かお-る"
	},
	"39340": {
		"joyo_kanji": "馬",
		"yomi": {
			"on_yomi": [
				"バ"
			],
			"kun_yomi": [
				"うま",
				"ま"
			]
		},
		"raw_info": "馬\t\t10\t2\t\tバ、うま、（ま）"
	},
	"39364": {
		"joyo_kanji": "駄",
		"yomi": {
			"on_yomi": [
				"ダ"
			]
		},
		"raw_info": "駄\t\t14\t7S\t1981\tダ"
	},
	"39365": {
		"joyo_kanji": "駅",
		"kyu_jitai": "驛",
		"yomi": {
			"on_yomi": [
				"エキ"
			]
		},
		"raw_info": "駅\t驛\t14\t3\t\tエキ"
	},
	"39366": {
		"joyo_kanji": "駆",
		"kyu_jitai": "驅",
		"yomi": {
			"on_yomi": [
				"ク"
			],
			"kun_yomi": [
				"か"
			],
			"example_yomi": [
				"か-ける",
				"か-る"
			]
		},
		"raw_info": "駆\t驅\t14\t7S\t\tク、か-ける、か-る"
	},
	"39376": {
		"joyo_kanji": "駐",
		"yomi": {
			"on_yomi": [
				"チュウ"
			]
		},
		"raw_info": "駐\t\t15\t7S\t\tチュウ"
	},
	"39378": {
		"joyo_kanji": "駒",
		"yomi": {
			"kun_yomi": [
				"こま"
			]
		},
		"raw_info": "駒\t\t15\t7S\t2010\tこま"
	},
	"39438": {
		"joyo_kanji": "騎",
		"yomi": {
			"on_yomi": [
				"キ"
			]
		},
		"raw_info": "騎\t\t18\t7S\t\tキ"
	},
	"39442": {
		"joyo_kanji": "騒",
		"kyu_jitai": "騷",
		"yomi": {
			"on_yomi": [
				"ソウ"
			],
			"kun_yomi": [
				"さわ"
			],
			"example_yomi": [
				"さわ-ぐ"
			]
		},
		"raw_info": "騒\t騷\t18\t7S\t\tソウ、さわ-ぐ"
	},
	"39443": {
		"joyo_kanji": "験",
		"kyu_jitai": "驗",
		"yomi": {
			"on_yomi": [
				"ゲン",
				"ケン"
			]
		},
		"raw_info": "験\t驗\t18\t4\t\tケン、（ゲン）"
	},
	"39472": {
		"joyo_kanji": "騰",
		"yomi": {
			"on_yomi": [
				"トウ"
			]
		},
		"raw_info": "騰\t\t20\t7S\t\tトウ"
	},
	"39514": {
		"joyo_kanji": "驚",
		"yomi": {
			"on_yomi": [
				"キョウ"
			],
			"kun_yomi": [
				"おどろ"
			],
			"example_yomi": [
				"おどろ-く",
				"おどろ-かす"
			]
		},
		"raw_info": "驚\t\t22\t7S\t\tキョウ、おどろ-く、おどろ-かす"
	},
	"39592": {
		"joyo_kanji": "骨",
		"yomi": {
			"on_yomi": [
				"コツ"
			],
			"kun_yomi": [
				"ほね"
			]
		},
		"raw_info": "骨\t\t10\t6\t\tコツ、ほね"
	},
	"39608": {
		"joyo_kanji": "骸",
		"yomi": {
			"on_yomi": [
				"ガイ"
			]
		},
		"raw_info": "骸\t\t16\t7S\t2010\tガイ"
	},
	"39620": {
		"joyo_kanji": "髄",
		"kyu_jitai": "髓",
		"yomi": {
			"on_yomi": [
				"ズイ"
			]
		},
		"raw_info": "髄\t髓\t19\t7S\t\tズイ"
	},
	"39640": {
		"joyo_kanji": "高",
		"yomi": {
			"on_yomi": [
				"コウ"
			],
			"kun_yomi": [
				"たか"
			],
			"example_yomi": [
				"たか-い",
				"たか-まる",
				"たか-める"
			]
		},
		"raw_info": "高\t\t10\t2\t\tコウ、たか-い、たか、たか-まる、たか-める"
	},
	"39658": {
		"joyo_kanji": "髪",
		"kyu_jitai": "髮",
		"yomi": {
			"on_yomi": [
				"ハツ"
			],
			"kun_yomi": [
				"かみ"
			]
		},
		"raw_info": "髪\t髮\t14\t7S\t\tハツ、かみ"
	},
	"39729": {
		"joyo_kanji": "鬱",
		"yomi": {
			"on_yomi": [
				"ウツ"
			]
		},
		"raw_info": "鬱\t\t29\t7S\t2010\tウツ"
	},
	"39740": {
		"joyo_kanji": "鬼",
		"yomi": {
			"on_yomi": [
				"キ"
			],
			"kun_yomi": [
				"おに"
			]
		},
		"raw_info": "鬼\t\t10\t7S\t\tキ、おに"
	},
	"39746": {
		"joyo_kanji": "魂",
		"yomi": {
			"on_yomi": [
				"コン"
			],
			"kun_yomi": [
				"たましい"
			]
		},
		"raw_info": "魂\t\t14\t7S\t\tコン、たましい"
	},
	"39749": {
		"joyo_kanji": "魅",
		"yomi": {
			"on_yomi": [
				"ミ"
			]
		},
		"raw_info": "魅\t\t15\t7S\t\tミ"
	},
	"39764": {
		"joyo_kanji": "魔",
		"yomi": {
			"on_yomi": [
				"マ"
			]
		},
		"raw_info": "魔\t\t21\t7S\t\tマ"
	},
	"39770": {
		"joyo_kanji": "魚",
		"yomi": {
			"on_yomi": [
				"ギョ"
			],
			"kun_yomi": [
				"うお",
				"さかな"
			]
		},
		"raw_info": "魚\t\t11\t2\t\tギョ、うお、さかな"
	},
	"39854": {
		"joyo_kanji": "鮮",
		"yomi": {
			"on_yomi": [
				"セン"
			],
			"kun_yomi": [
				"あざ"
			],
			"example_yomi": [
				"あざ-やか"
			]
		},
		"raw_info": "鮮\t\t17\t7S\t\tセン、あざ-やか"
	},
	"39912": {
		"joyo_kanji": "鯨",
		"yomi": {
			"on_yomi": [
				"ゲイ"
			],
			"kun_yomi": [
				"くじら"
			]
		},
		"raw_info": "鯨\t\t19\t7S\t\tゲイ、くじら"
	},
	"40165": {
		"joyo_kanji": "鳥",
		"yomi": {
			"on_yomi": [
				"チョウ"
			],
			"kun_yomi": [
				"とり"
			]
		},
		"raw_info": "鳥\t\t11\t2\t\tチョウ、とり"
	},
	"40180": {
		"joyo_kanji": "鳴",
		"yomi": {
			"on_yomi": [
				"メイ"
			],
			"kun_yomi": [
				"な"
			],
			"example_yomi": [
				"な-く",
				"な-る",
				"な-らす"
			]
		},
		"raw_info": "鳴\t\t14\t2\t\tメイ、な-く、な-る、な-らす"
	},
	"40335": {
		"joyo_kanji": "鶏",
		"kyu_jitai": "鷄",
		"yomi": {
			"on_yomi": [
				"ケイ"
			],
			"kun_yomi": [
				"にわとり"
			]
		},
		"raw_info": "鶏\t鷄\t19\t7S\t\tケイ、にわとり"
	},
	"40372": {
		"joyo_kanji": "鶴",
		"yomi": {
			"kun_yomi": [
				"つる"
			]
		},
		"raw_info": "鶴\t\t21\t7S\t2010\tつる"
	},
	"40575": {
		"joyo_kanji": "鹿",
		"yomi": {
			"kun_yomi": [
				"か",
				"しか"
			]
		},
		"raw_info": "鹿\t\t11\t7S\t2010\tしか、（か）"
	},
	"40595": {
		"joyo_kanji": "麓",
		"yomi": {
			"on_yomi": [
				"ロク"
			],
			"kun_yomi": [
				"ふもと"
			]
		},
		"raw_info": "麓\t\t19\t7S\t2010\tロク、ふもと"
	},
	"40599": {
		"joyo_kanji": "麗",
		"yomi": {
			"on_yomi": [
				"レイ"
			],
			"kun_yomi": [
				"うるわ"
			],
			"example_yomi": [
				"うるわ-しい"
			]
		},
		"raw_info": "麗\t\t19\t7S\t\tレイ、うるわ-しい"
	},
	"40614": {
		"joyo_kanji": "麦",
		"kyu_jitai": "麥",
		"yomi": {
			"on_yomi": [
				"バク"
			],
			"kun_yomi": [
				"むぎ"
			]
		},
		"raw_info": "麦\t麥\t7\t2\t\tバク、むぎ"
	},
	"40634": {
		"joyo_kanji": "麺",
		"kyu_jitai": "麵",
		"yomi": {
			"on_yomi": [
				"メン"
			]
		},
		"raw_info": "麺\t麵\t16\t7S\t2010\tメン"
	},
	"40635": {
		"joyo_kanji": "麻",
		"yomi": {
			"on_yomi": [
				"マ"
			],
			"kun_yomi": [
				"あさ"
			]
		},
		"raw_info": "麻\t\t11\t7S\t\tマ、あさ"
	},
	"40644": {
		"joyo_kanji": "黄",
		"kyu_jitai": "黃",
		"yomi": {
			"on_yomi": [
				"コウ",
				"オウ"
			],
			"kun_yomi": [
				"き",
				"こ"
			]
		},
		"raw_info": "黄\t黃\t11\t2\t\tコウ、オウ、き、（こ）"
	},
	"40658": {
		"joyo_kanji": "黒",
		"kyu_jitai": "黑",
		"yomi": {
			"on_yomi": [
				"コク"
			],
			"kun_yomi": [
				"くろ"
			],
			"example_yomi": [
				"くろ-い"
			]
		},
		"raw_info": "黒\t黑\t11\t2\t\tコク、くろ、くろ-い"
	},
	"40665": {
		"joyo_kanji": "黙",
		"kyu_jitai": "默",
		"yomi": {
			"on_yomi": [
				"モク"
			],
			"kun_yomi": [
				"だま"
			],
			"example_yomi": [
				"だま-る"
			]
		},
		"raw_info": "黙\t默\t15\t7S\t\tモク、だま-る"
	},
	"40723": {
		"joyo_kanji": "鼓",
		"yomi": {
			"on_yomi": [
				"コ"
			],
			"kun_yomi": [
				"つづみ"
			]
		},
		"raw_info": "鼓\t\t13\t7S\t\tコ、つづみ"
	},
	"40763": {
		"joyo_kanji": "鼻",
		"yomi": {
			"on_yomi": [
				"ビ"
			],
			"kun_yomi": [
				"はな"
			]
		},
		"raw_info": "鼻\t\t14\t3\t\tビ、はな"
	},
	"40802": {
		"joyo_kanji": "齢",
		"kyu_jitai": "齡",
		"yomi": {
			"on_yomi": [
				"レイ"
			]
		},
		"raw_info": "齢\t齡\t17\t7S\t\tレイ"
	}
};
