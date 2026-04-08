export const DEPARTMENTS = [
  {
    id: 'rtt-markazi',
    name: "RTT Markazi Boshlig'i",
    roles: [
      {
        id: 'markaz-boshligi',
        title: "Markaz Boshlig'i",
        metrics: [
          { id: 1, name: "Markaz faoliyati bo'yicha yillik rejani bajarish", unit: '%', target: '≥ 90%', period: 'Yillik', maxScore: 20 },
          { id: 2, name: "Xodimlar KPI bajarilishi nazorati", unit: '%', target: '≥ 85%', period: 'Choraklik', maxScore: 15 },
          { id: 3, name: "Rahbariyatga o'z vaqtida hisobot topshirish", unit: '%', target: '100%', period: 'Oylik', maxScore: 10 },
          { id: 4, name: "Strategik loyihalar muvaffaqiyatli amalga oshirilishi", unit: 'ta', target: '≥ 2/yil', period: 'Yillik', maxScore: 20 },
          { id: 5, name: "Xodimlar o'rtasida mehnat intizomi darajasi", unit: 'ball', target: '≥ 4.5/5', period: 'Choraklik', maxScore: 10 },
          { id: 6, name: "Tashqi hamkorlik (boshqa OTM, kompaniyalar)", unit: 'ta', target: '≥ 3/yil', period: 'Yillik', maxScore: 15 },
          { id: 7, name: "Markaz byudjetini maqsadli sarflash", unit: '%', target: '≥ 95%', period: 'Yillik', maxScore: 10 },
        ]
      }
    ]
  },
  {
    id: 'joriy-etish',
    name: "Raqamli ta'lim texnologiyalarini joriy etish bo'limi",
    roles: [
      {
        id: 'bo-lim-boshligi-joriy',
        title: "Bo'lim Boshlig'i",
        metrics: [
          { id: 1, name: "Bo'lim rejasini bajarish darajasi", unit: '%', target: '≥ 90%', period: 'Choraklik', maxScore: 20 },
          { id: 2, name: "O'tkazilgan trening va seminarlar soni", unit: 'ta', target: '≥ 6/chorak', period: 'Choraklik', maxScore: 15 },
          { id: 3, name: "Bo'lim xodimlarini boshqarish samaradorligi", unit: 'ball', target: '≥ 4/5', period: 'Choraklik', maxScore: 15 },
          { id: 4, name: "Yangi raqamli vositalarni joriy etish soni", unit: 'ta', target: '≥ 1/chorak', period: 'Choraklik', maxScore: 15 },
          { id: 5, name: "O'qituvchilar raqamli savodxonligi o'sishi", unit: '%', target: '+10%/yil', period: 'Yillik', maxScore: 20 },
          { id: 6, name: "Hisobotlar o'z vaqtida topshirilishi", unit: '%', target: '100%', period: 'Oylik', maxScore: 15 },
        ]
      },
      {
        id: 'muhandis-dasturchi-joriy',
        title: "Muhandis-dasturchi (1-toifa)",
        metrics: [
          { id: 1, name: "Dasturiy ta'minot ishlab chiqish/yangilash", unit: 'ta', target: '≥ 2/chorak', period: 'Choraklik', maxScore: 20 },
          { id: 2, name: "Murojaat va xatoliklarni bartaraf etish vaqti", unit: 'soat', target: '≤ 4 soat', period: 'Har hodisa', maxScore: 20 },
          { id: 3, name: "Platformalar ishlash samaradorligi (uptime)", unit: '%', target: '≥ 99%', period: 'Oylik', maxScore: 20 },
          { id: 4, name: "Kod sifati (review natijasi)", unit: 'ball', target: '≥ 4/5', period: 'Choraklik', maxScore: 15 },
          { id: 5, name: "Texnik hujjatlar tayyorlash", unit: 'ta', target: '≥ 1/chorak', period: 'Choraklik', maxScore: 10 },
          { id: 6, name: "Kasbiy rivojlanish (kurs/sertifikat)", unit: 'ta', target: '≥ 1/yil', period: 'Yillik', maxScore: 15 },
        ]
      },
      {
        id: 'veb-dizayner',
        title: "Veb-dizayner",
        metrics: [
          { id: 1, name: "Veb-sahifalar va interfeys yaratish/yangilash", unit: 'ta', target: '≥ 3/oy', period: 'Oylik', maxScore: 20 },
          { id: 2, name: "Dizayn loyihalari o'z vaqtida topshirilishi", unit: '%', target: '100%', period: 'Oylik', maxScore: 20 },
          { id: 3, name: "Foydalanuvchilar qoniqish darajasi (UX)", unit: 'ball', target: '≥ 4/5', period: 'Choraklik', maxScore: 15 },
          { id: 4, name: "Institut korporativ uslubiga muvofiqlik", unit: '%', target: '100%', period: 'Har loyiha', maxScore: 15 },
          { id: 5, name: "Ijodiy yangi dizayn yechimlari taklif qilish", unit: 'ta', target: '≥ 2/chorak', period: 'Choraklik', maxScore: 15 },
          { id: 6, name: "Kasbiy rivojlanish (kurs/sertifikat)", unit: 'ta', target: '≥ 1/yil', period: 'Yillik', maxScore: 15 },
        ]
      },
      {
        id: 'kontent-menejer',
        title: "Kontent-menejer",
        metrics: [
          { id: 1, name: "Yangi kontent birliklari yaratish (video, material)", unit: 'ta', target: '≥ 10/oy', period: 'Oylik', maxScore: 20 },
          { id: 2, name: "Kontent sifati (ekspert baholash)", unit: 'ball', target: '≥ 4/5', period: 'Choraklik', maxScore: 15 },
          { id: 3, name: "Kontent o'z vaqtida joylashtirilishi", unit: '%', target: '100%', period: 'Oylik', maxScore: 20 },
          { id: 4, name: "Foydalanuvchilar (talabalar/o'qituvchilar) faolligi", unit: '%', target: '+15%/yil', period: 'Yillik', maxScore: 20 },
          { id: 5, name: "Axborot resurslari yangilanib turishi", unit: 'kun', target: '≤ 7 kun', period: 'Haftalik', maxScore: 15 },
          { id: 6, name: "Kasbiy rivojlanish (kurs/sertifikat)", unit: 'ta', target: '≥ 1/yil', period: 'Yillik', maxScore: 10 },
        ]
      }
    ]
  },
  {
    id: 'tarmoqlar',
    name: "Tarmoqlarni boshqarish bo'limi",
    roles: [
      {
        id: 'tarmoq-admin',
        title: "Tarmoq administratori",
        metrics: [
          { id: 1, name: "Tarmoq uzluksiz ishlashi (uptime)", unit: '%', target: '≥ 99.5%', period: 'Oylik', maxScore: 25 },
          { id: 2, name: "Tarmoq nosozliklarini bartaraf etish vaqti", unit: 'soat', target: '≤ 2 soat', period: 'Har hodisa', maxScore: 20 },
          { id: 3, name: "Tarmoq uskunalarini texnik xizmat ko'rsatish", unit: '%', target: '100%', period: 'Choraklik', maxScore: 15 },
          { id: 4, name: "Tarmoq xavfsizligi insidentlari soni", unit: 'ta', target: '0 ta jiddiy', period: 'Oylik', maxScore: 20 },
          { id: 5, name: "Foydalanuvchi murojaatlariga javob vaqti", unit: 'soat', target: '≤ 4 soat', period: 'Oylik', maxScore: 10 },
          { id: 6, name: "Kasbiy rivojlanish (kurs/sertifikat)", unit: 'ta', target: '≥ 1/yil', period: 'Yillik', maxScore: 10 },
        ]
      },
      {
        id: 'muhandis-dasturchi-tarmoq',
        title: "Muhandis-dasturchi (1-toifa)",
        metrics: [
          { id: 1, name: "Tarmoq dasturiy ta'minotini yangilash/sozlash", unit: 'ta', target: '≥ 1/chorak', period: 'Choraklik', maxScore: 20 },
          { id: 2, name: "Texnik nosozliklarni bartaraf etish", unit: 'soat', target: '≤ 4 soat', period: 'Har hodisa', maxScore: 20 },
          { id: 3, name: "Tarmoq monitoring tizimi samaradorligi", unit: '%', target: '≥ 98%', period: 'Oylik', maxScore: 20 },
          { id: 4, name: "Texnik hujjatlar va sxemalar yangilab turish", unit: '%', target: '100%', period: 'Choraklik', maxScore: 15 },
          { id: 5, name: "Yangi tarmoq yechimlari taklif qilish", unit: 'ta', target: '≥ 1/yil', period: 'Yillik', maxScore: 15 },
          { id: 6, name: "Kasbiy rivojlanish (sertifikat/kurs)", unit: 'ta', target: '≥ 1/yil', period: 'Yillik', maxScore: 10 },
        ]
      }
    ]
  },
  {
    id: 'texnik-quvvatlash',
    name: "Texnik qo'llab-quvvatlash bo'limi",
    roles: [
      {
        id: 'muhandis-dasturchi-texnik',
        title: "Muhandis-dasturchi (1-toifa)",
        metrics: [
          { id: 1, name: "Texnik so'rovlarga javob berish vaqti", unit: 'soat', target: '≤ 2 soat', period: 'Oylik', maxScore: 25 },
          { id: 2, name: "Muammolarni birinchi murojaatdan hal qilish", unit: '%', target: '≥ 80%', period: 'Oylik', maxScore: 20 },
          { id: 3, name: "Foydalanuvchi qoniqish darajasi", unit: 'ball', target: '≥ 4/5', period: 'Choraklik', maxScore: 20 },
          { id: 4, name: "Ochiq murojaat (ticket) lari yopish darajasi", unit: '%', target: '≥ 95%/oy', period: 'Oylik', maxScore: 15 },
          { id: 5, name: "Texnik hujjatlar va yo'riqnomalar tayyorlash", unit: 'ta', target: '≥ 2/yil', period: 'Yillik', maxScore: 10 },
          { id: 6, name: "Kasbiy rivojlanish (kurs/sertifikat)", unit: 'ta', target: '≥ 1/yil', period: 'Yillik', maxScore: 10 },
        ]
      },
      {
        id: 'muhandis-elektronchi',
        title: "Muhandis-elektronchi (1-toifa)",
        metrics: [
          { id: 1, name: "Uskunalarni texnik xizmat ko'rsatish jadvali", unit: '%', target: '100%', period: 'Oylik', maxScore: 20 },
          { id: 2, name: "Nosoz uskunalarni ta'mirlash vaqti", unit: 'kun', target: '≤ 3 kun', period: 'Har hodisa', maxScore: 25 },
          { id: 3, name: "Uskunalar inventarizatsiyasini yuritish", unit: '%', target: '100%', period: 'Choraklik', maxScore: 15 },
          { id: 4, name: "Yangi uskunalarni ishga tushirish", unit: 'soat', target: '≤ 24 soat', period: 'Har ta\'minot', maxScore: 20 },
          { id: 5, name: "Xavfsizlik me'yorlariga rioya qilish", unit: '%', target: '100%', period: 'Oylik', maxScore: 10 },
          { id: 6, name: "Kasbiy rivojlanish (kurs/sertifikat)", unit: 'ta', target: '≥ 1/yil', period: 'Yillik', maxScore: 10 },
        ]
      },
      {
        id: 'zali-mudiri',
        title: "Kompyuter zali mudiri",
        metrics: [
          { id: 1, name: "Kompyuter zali ishlash vaqti (dars jadvaliga mos)", unit: '%', target: '≥ 99%', period: 'Oylik', maxScore: 20 },
          { id: 2, name: "Uskunalar texnik holati nazorati", unit: 'ball', target: '≥ 4.5/5', period: 'Oylik', maxScore: 20 },
          { id: 3, name: "Nosozliklarni muhandisga xabar berish vaqti", unit: 'soat', target: '≤ 1 soat', period: 'Har hodisa', maxScore: 20 },
          { id: 4, name: "Zal tozaligi va tartib-intizom", unit: 'ball', target: '≥ 4.5/5', period: 'Oylik', maxScore: 15 },
          { id: 5, name: "Foydalanuvchi (talaba/o'qituvchi) qoniqishi", unit: 'ball', target: '≥ 4/5', period: 'Choraklik', maxScore: 15 },
          { id: 6, name: "Inventar va hisobotlarni to'g'ri yuritish", unit: '%', target: '100%', period: 'Choraklik', maxScore: 10 },
        ]
      }
    ]
  },
  {
    id: 'xavfsizlik',
    name: "Axborot xavfsizligini ta'minlash bo'limi",
    roles: [
      {
        id: 'bo-lim-boshligi-xavfsizlik',
        title: "Bo'lim Boshlig'i",
        metrics: [
          { id: 1, name: "Jiddiy xavfsizlik insidentlari soni", unit: 'ta', target: '0 ta', period: 'Oylik', maxScore: 25 },
          { id: 2, name: "Xavfsizlik siyosati va yo'riqnomalar yangilanishi", unit: 'ta', target: '≥ 1/yil', period: 'Yillik', maxScore: 15 },
          { id: 3, name: "Xodimlar xavfsizlik treningiga qamrovi", unit: '%', target: '100%', period: 'Yillik', maxScore: 15 },
          { id: 4, name: "Xavfsizlik auditi o'tkazish va hisobot", unit: 'ta', target: '≥ 2/yil', period: 'Yillik', maxScore: 15 },
          { id: 5, name: "Zaifliklarni aniqlash va bartaraf etish vaqti", unit: 'kun', target: '≤ 7 kun', period: 'Har hodisa', maxScore: 20 },
          { id: 6, name: "Xavfsizlik bo'yicha hisobotlar o'z vaqtida topshirilishi", unit: '%', target: '100%', period: 'Oylik', maxScore: 10 },
        ]
      },
      {
        id: 'tarmoq-admin-xavfsizlik',
        title: "Tarmoq administratori",
        metrics: [
          { id: 1, name: "Zaxira nusxa (backup) tizimini yuritish", unit: '%', target: '100%', period: 'Haftalik', maxScore: 25 },
          { id: 2, name: "Xavfsizlik insidentlarini aniqlash vaqti", unit: 'soat', target: '≤ 1 soat', period: 'Har hodisa', maxScore: 20 },
          { id: 3, name: "Firewall va himoya tizimlarini yangilash", unit: '%', target: '100%', period: 'Oylik', maxScore: 20 },
          { id: 4, name: "Tarmoq monitoringi va log tahlili", unit: '%', target: '100%', period: 'Oylik', maxScore: 15 },
          { id: 5, name: "Foydalanuvchi parol va kirish huquqlarini boshqarish", unit: '%', target: '100%', period: 'Choraklik', maxScore: 10 },
          { id: 6, name: "Kasbiy rivojlanish (xavfsizlik sertifikati)", unit: 'ta', target: '≥ 1/yil', period: 'Yillik', maxScore: 10 },
        ]
      }
    ]
  }
];

export const EVALUATION_SCALE = [
  { range: [90, 100], label: "A'LO", color: 'bg-green-100 text-green-800 border-green-200', reward: "Mukofot + Maqtov yorlig'i" },
  { range: [75, 89], label: "YAXSHI", color: 'bg-blue-100 text-blue-800 border-blue-200', reward: "Rag'batlantirish" },
  { range: [60, 74], label: "QONIQARLI", color: 'bg-yellow-100 text-yellow-800 border-yellow-200', reward: "Takomillashtirish talab etiladi" },
  { range: [0, 59], label: "QONIQARSIZ", color: 'bg-red-100 text-red-800 border-red-200', reward: "Suhbat + Harakatlar rejasi" },
];
