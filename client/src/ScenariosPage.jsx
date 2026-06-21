const CHINA_SCENARIOS = [
  {
    id: 'street-market',
    title: 'Street Market',
    icon: '\u{1F3EE}',
    description: 'Haggle over prices and order street food from local vendors.',
    vocab: [
      { en: 'Market', zh: '市场', pinyin: 'shìchǎng' },
      { en: 'How much?', zh: '多少钱？', pinyin: 'duōshao qián' },
      { en: 'Too expensive', zh: '太贵了', pinyin: 'tài guì le' },
      { en: 'Discount', zh: '打折', pinyin: 'dǎzhé' },
      { en: 'Fresh', zh: '新鲜', pinyin: 'xīnxiān' },
      { en: 'Bargain', zh: '还价', pinyin: 'huánjià' },
    ],
  },
  {
    id: 'restaurant',
    title: 'Restaurant',
    icon: '\u{1F962}',
    description: 'Order dishes, ask for recommendations, and pay the bill.',
    vocab: [
      { en: 'Menu', zh: '菜单', pinyin: 'càidān' },
      { en: 'Delicious', zh: '好吃', pinyin: 'hǎochī' },
      { en: 'Check, please', zh: '买单', pinyin: 'mǎidān' },
      { en: 'Spicy', zh: '辣', pinyin: 'là' },
      { en: 'Waiter', zh: '服务员', pinyin: 'fúwùyuán' },
      { en: 'Recommend', zh: '推荐', pinyin: 'tuījiàn' },
    ],
  },
  {
    id: 'train-station',
    title: 'Train Station',
    icon: '\u{1F684}',
    description: 'Buy tickets, ask for directions, and catch your train on time.',
    vocab: [
      { en: 'Ticket', zh: '票', pinyin: 'piào' },
      { en: 'Platform', zh: '站台', pinyin: 'zhàntái' },
      { en: 'Departure', zh: '出发', pinyin: 'chūfā' },
      { en: 'Arrival', zh: '到达', pinyin: 'dàodá' },
      { en: 'Schedule', zh: '时间表', pinyin: 'shíjiānbiǎo' },
      { en: 'Delay', zh: '延误', pinyin: 'yánwù' },
    ],
  },
  {
    id: 'taxi-ride',
    title: 'Taxi Ride',
    icon: '\u{1F695}',
    description: 'Give directions to your destination and chat with the driver.',
    vocab: [
      { en: 'Address', zh: '地址', pinyin: 'dìzhǐ' },
      { en: 'Turn left', zh: '左转', pinyin: 'zuǒ zhuǎn' },
      { en: 'Turn right', zh: '右转', pinyin: 'yòu zhuǎn' },
      { en: 'Straight ahead', zh: '直走', pinyin: 'zhízǒu' },
      { en: 'Fare', zh: '车费', pinyin: 'chēfèi' },
      { en: 'Stop here', zh: '在这里停', pinyin: 'zài zhèlǐ tíng' },
    ],
  },
  {
    id: 'hotel-checkin',
    title: 'Hotel Check-in',
    icon: '\u{1F6CE}\u{FE0F}',
    description: 'Check into your room and ask about hotel amenities.',
    vocab: [
      { en: 'Reservation', zh: '预订', pinyin: 'yùdìng' },
      { en: 'Room key', zh: '房卡', pinyin: 'fángkǎ' },
      { en: 'Check-in', zh: '入住', pinyin: 'rùzhù' },
      { en: 'Check-out', zh: '退房', pinyin: 'tuìfáng' },
      { en: 'Breakfast', zh: '早餐', pinyin: 'zǎocān' },
      { en: 'Wi-Fi password', zh: 'Wi-Fi密码', pinyin: 'Wi-Fi mìmǎ' },
    ],
  },
  {
    id: 'newspaper-reading',
    title: 'Newspaper Reading',
    icon: '\u{1F4F0}',
    description: 'Read headlines and discuss current events with a local.',
    vocab: [
      { en: 'News', zh: '新闻', pinyin: 'xīnwén' },
      { en: 'Headline', zh: '头条', pinyin: 'tóutiáo' },
      { en: 'Economy', zh: '经济', pinyin: 'jīngjì' },
      { en: 'Government', zh: '政府', pinyin: 'zhèngfǔ' },
      { en: 'Report', zh: '报道', pinyin: 'bàodào' },
      { en: 'Opinion', zh: '观点', pinyin: 'guāndiǎn' },
    ],
  },
  {
    id: 'business-meeting',
    title: 'Business Meeting',
    icon: '\u{1F4BC}',
    description: 'Negotiate a deal and exchange pleasantries with partners.',
    vocab: [
      { en: 'Contract', zh: '合同', pinyin: 'hétong' },
      { en: 'Partner', zh: '合作伙伴', pinyin: 'hézuò huǒbàn' },
      { en: 'Negotiate', zh: '谈判', pinyin: 'tánpàn' },
      { en: 'Agreement', zh: '协议', pinyin: 'xiéyì' },
      { en: 'Deadline', zh: '截止日期', pinyin: 'jiézhǐ rìqī' },
      { en: 'Profit', zh: '利润', pinyin: 'lìrùn' },
    ],
  },
  {
    id: 'politician-speech',
    title: 'Politician Speech',
    icon: '\u{1F3A4}',
    description: 'Listen to a speech and discuss politics with citizens.',
    vocab: [
      { en: 'Speech', zh: '演讲', pinyin: 'yǎnjiǎng' },
      { en: 'Policy', zh: '政策', pinyin: 'zhèngcè' },
      { en: 'Citizen', zh: '公民', pinyin: 'gōngmín' },
      { en: 'Election', zh: '选举', pinyin: 'xuǎnjǔ' },
      { en: 'Vote', zh: '投票', pinyin: 'tóupiào' },
      { en: 'Reform', zh: '改革', pinyin: 'gǎigé' },
    ],
  },
]

const REAL_LIFE_SCENARIO = {
  id: 'real-life-conversation',
  title: 'Real Life Conversation',
  icon: '\u{1F451}',
  description: 'An unscripted, free-flowing conversation putting everything together.',
  special: true,
  vocab: [
    { en: 'Free conversation', zh: '自由对话', pinyin: 'zìyóu duìhuà' },
    { en: 'Fluency', zh: '流利', pinyin: 'liúlì' },
    { en: 'Practice', zh: '练习', pinyin: 'liànxí' },
    { en: 'Confidence', zh: '自信', pinyin: 'zìxìn' },
  ],
}

function LockIcon({ className = 'w-6 h-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  )
}

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CrownIcon({ className = 'w-9 h-9' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <defs>
        <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff6c8" />
          <stop offset="55%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>
      <path
        d="M3 8l3.5 3L12 4l5.5 7L21 8l-2 10H5L3 8z"
        fill="url(#crownGradient)"
        stroke="#92400e"
        strokeWidth="0.75"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ScenariosPage({ country = 'China', onBack, onScenarioStart }) {
  return (
    <div className="relative w-screen h-screen bg-[#05060a] text-white font-sans">
      <p>
        {country} scenarios coming soon for {onBack ? 'this traveler' : 'everyone'}.
        {onScenarioStart ? '' : ''}
      </p>
      {[...CHINA_SCENARIOS, REAL_LIFE_SCENARIO].map((scenario) => (
        <span key={scenario.id} hidden>
          <LockIcon />
          <BackIcon />
          <CrownIcon />
          {scenario.title}
        </span>
      ))}
    </div>
  )
}
