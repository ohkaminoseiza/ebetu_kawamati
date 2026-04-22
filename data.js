const SITE_CATEGORIES = [
    {
        id: 'chiiki-seibi',
        title: '地域整備事業',
        file: 'chiiki-seibi.html',
        lead: '川沿いの日常利用を支える歩行空間、植栽、休憩機能を整えるカテゴリです。'
    },
    {
        id: 'kawazoi-sports',
        title: '川沿いスポーツ',
        file: 'kawazoi-sports.html',
        lead: '水辺や河川敷を活かした季節のアクティビティを検討するカテゴリです。'
    },
    {
        id: 'okada',
        title: '旧岡田倉庫・住居活用',
        file: 'okada.html',
        lead: '歴史的建物を保存しながら、交流とにぎわいの拠点として活用するカテゴリです。'
    },
    {
        id: 'kanko-event',
        title: '観光・イベント',
        file: 'kanko-event.html',
        lead: '地域の景観、活動、行事を発信し、来訪と参加のきっかけをつくるカテゴリです。'
    },
    {
        id: 'renkei',
        title: '連携プロジェクト',
        file: 'renkei.html',
        lead: '自治会、企業、大学など多様な主体との協働を進めるカテゴリです。'
    },
    {
        id: 'ijyu',
        title: '移住政策',
        file: 'ijyu.html',
        lead: '江別での暮らしを検討する人に向け、地域の魅力と生活情報を届けるカテゴリです。'
    },
    {
        id: 'ekishuhen',
        title: '駅周辺・大川通',
        file: 'ekishuhen.html',
        lead: '駅前、大川通、防災拠点など、まち側の回遊性と機能を扱うカテゴリです。'
    }
];

const SITE_PROJECTS = [
    {
        id: 'sanpomichi',
        categoryId: 'chiiki-seibi',
        title: '散歩道整備',
        icon: '🌿',
        status: 'active',
        statusLabel: '進行中',
        image: 'images/sanpomichi.jpg',
        summary: '川沿いを日常的に歩き、走り、過ごせる安全で快適な歩行空間を整えます。',
        detail: '地元住民が毎日気持ちよく散歩やジョギングを楽しめるよう、河川沿いの遊歩道の整備を検討いたします。安全で快適な歩行空間の実現を目指します。'
    },
    {
        id: 'shokusai',
        categoryId: 'chiiki-seibi',
        title: '植栽',
        icon: '🌸',
        status: 'planning',
        statusLabel: '企画中',
        image: 'images/shokusai.jpg',
        summary: '季節の花や樹木で、散歩道に四季を感じられる景観をつくります。',
        detail: '散歩道沿いに季節の花や樹木を植栽し、四季を感じられる緑豊かな歩行空間の整備を検討いたします。'
    },
    {
        id: 'bench',
        categoryId: 'chiiki-seibi',
        title: 'ベンチ・健康器具設置',
        icon: '🪑',
        status: 'planning',
        statusLabel: '企画中',
        image: 'images/bench.jpg',
        summary: '休憩や軽い運動ができる設備を配置し、幅広い世代が使いやすい水辺にします。',
        detail: '記念プレート事業による資金調達も視野に入れつつ、散歩道の要所において、休憩用ベンチや高齢者から子どもまで気軽に利用できる健康器具の設置を検討します。'
    },
    {
        id: 'sup',
        categoryId: 'kawazoi-sports',
        title: 'SUP',
        icon: '🏄',
        status: 'planning',
        statusLabel: '企画中',
        image: 'images/sup.png',
        summary: '川の景観を楽しみながら、水上で過ごす体験イベントを企画します。',
        detail: '市内を流れる川を活かし、SUP（スタンドアップパドルボード）を体験できるアウトドアイベントを企画しています。水辺に親しむきっかけをつくり、川沿いの日常利用と観光的な魅力づくりにつなげます。'
    },
    {
        id: 'aruku-ski',
        categoryId: 'kawazoi-sports',
        title: '歩くスキー',
        icon: '🎿',
        status: 'planning',
        statusLabel: '企画中',
        image: 'images/aruku-ski.png',
        summary: '冬の川沿いを楽しむアクティビティとして、歩くスキーの実施を検討します。',
        detail: '冬季の河川敷や川沿い空間を活用し、歩くスキーを楽しめる機会づくりを検討しています。雪のある季節にも水辺周辺を身近に感じられるよう、コース設定や安全管理、参加しやすい運営方法を整理していきます。'
    },
    {
        id: 'okada-souko',
        categoryId: 'okada',
        title: '旧岡田倉庫',
        icon: '🏚️',
        status: 'active',
        statusLabel: '進行中',
        image: 'images/okada-soko.jpg',
        summary: '歴史的な倉庫を、地域の交流やイベントの拠点として活用します。',
        detail: '平成17年のオープン以来、「アートスペース外輪船」として親しまれてきた旧岡田倉庫は、移転後もこれまでと同じように、イベントや催しを楽しめる場所として活用していきます。'
    },
    {
        id: 'okada-jukyo',
        categoryId: 'okada',
        title: '旧岡田住居',
        icon: '🏠',
        status: 'active',
        statusLabel: '進行中',
        image: 'images/okada-jukyo.jpg',
        summary: '旧岡田家の住居を地域資源として活かす方向性を検討します。',
        detail: '旧岡田家の住居の活用を目指します。'
    },
    {
        id: 'ryokka',
        categoryId: 'kanko-event',
        title: '緑化プロモーション',
        icon: '🌸',
        status: 'planning',
        statusLabel: '企画中',
        image: 'images/ryokka.png',
        summary: '地域の自然や緑化活動を発信し、地域の認知度と観光資源性を高めます。',
        detail: '地域の豊かな自然や緑化活動をSNS・パンフレット・映像で広く発信し、観光誘致につなげるプロジェクトです。河川沿いの四季の景色を活かした情報発信を行い、地域の認知度向上を目指しています。'
    },
    {
        id: 'chiiki-event',
        categoryId: 'kanko-event',
        title: '地域イベント',
        icon: '🎪',
        status: 'planning',
        statusLabel: '企画中',
        image: 'images/festa.jpg',
        summary: 'マルシェ、ステージ、ワークショップなど、世代を超えて参加できる催しを検討します。',
        detail: '地域住民が一体となって楽しめる年間イベントを企画しています。地元農産物や特産品を集めたマルシェ、ステージパフォーマンス、子ども向けワークショップなど、世代を超えて楽しめる多彩なコンテンツを検討中です。'
    },
    {
        id: 'chiiki-renkei',
        categoryId: 'renkei',
        title: '地域連携事業',
        icon: '🤝',
        status: 'planning',
        statusLabel: '企画中',
        imageClass: 'img-community',
        summary: '自治会、商工会、NPO、企業などが横断的に連携する体制をつくります。',
        detail: '地域内の自治会・商工会・NPO・企業が横断的に連携し、まちづくりを総合的に推進するプロジェクトです。各団体の強みを活かした協力体制を構築し、課題解決と地域活性化を一体的に進めます。'
    },
    {
        id: 'daigaku-renkei',
        categoryId: 'renkei',
        title: '大学連携事業',
        icon: '🎓',
        status: 'planning',
        statusLabel: '企画中',
        imageClass: 'img-study',
        summary: '学生の視点や専門知を活かし、地域課題の発見と解決に取り組みます。',
        detail: '地域の大学と連携し、学生の新鮮な視点と専門知識を活かした地域課題の解決に取り組みます。フィールドワークやゼミ活動を通じて、若者が地域に関わる機会を創出。地域と大学が共に成長する関係づくりを目指しています。'
    },
    {
        id: 'ijyu-info',
        categoryId: 'ijyu',
        title: '移住者向け情報発信',
        icon: '📢',
        status: 'planning',
        statusLabel: '企画中',
        imageClass: 'img-migration',
        summary: '自然、暮らし、仕事、子育てなど、移住検討者が知りたい情報を届けます。',
        detail: '移住を検討している方へ向けて、地域の自然・暮らし・仕事・子育て環境などの情報を積極的に発信しています。ウェブサイトやSNS、移住フェアへの出展を通じて、地域の魅力を全国に届けます。移住者向けの相談窓口も設置していますので、お気軽にお問い合わせください。'
    },
    {
        id: 'ebetsu-eki',
        categoryId: 'ekishuhen',
        title: '江別駅周辺',
        icon: '🚉',
        status: 'active',
        statusLabel: '進行中',
        image: 'images/ebetsu-eki.jpg',
        summary: '商業機能と空き店舗活用を軸に、駅前のにぎわいと回遊性を高めます。',
        detail: '江別駅周辺において、商業機能の充実と空き店舗の活用を目指します。駅前エリアの賑わいを取り戻し、地域住民や来訪者が集う魅力的なまちづくりを推進します。'
    },
    {
        id: 'bousai',
        categoryId: 'ekishuhen',
        title: '防災ステーション',
        icon: '🏛️',
        status: 'active',
        statusLabel: '進行中',
        image: 'images/bousai.jpg',
        summary: '防災拠点としての役割と、歴史展示・特産品販売などの平常時利用を結びます。',
        detail: '石狩川と千歳川の合流点付近に位置し、災害時の水防活動の拠点や避難場所としての役割を持ちつつ、平常時は江別の歴史を学べる展示や特産品の販売を行っています。また農産物直売所も隣接しています。'
    }
];
