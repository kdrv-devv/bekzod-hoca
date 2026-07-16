export type Language = "uz" | "ru" | "en"

export const languageOptions: Array<{
  code: Language
  shortLabel: string
  label: string
}> = [
  { code: "uz", shortLabel: "O‘Z", label: "O‘zbekcha" },
  { code: "ru", shortLabel: "РУ", label: "Русский" },
  { code: "en", shortLabel: "EN", label: "English" },
]

export const resources = {
  uz: {
    translation: {
      nav: {
        about: "Ustoz haqida",
        courses: "Kurslar",
        method: "Metodika",
        reviews: "Natijalar",
        location: "Manzil",
        faq: "Savollar",
      },
      common: {
        consultation: "Konsultatsiya olish",
        start: "O‘qishni boshlash",
        viewCourses: "Kurslarni ko‘rish",
        learnMore: "Batafsil bilish",
        instagram: "Instagram",
        telegram: "Telegram",
        openMap: "Xaritada ochish",
        close: "Yopish",
      },
      hero: {
        kicker: "TYS sertifikati • CEFR C1 • Farg‘ona",
        titleLead: "Turk tilini",
        titleStrong: "gapirish uchun",
        titleTail: "o‘rganing.",
        description:
          "Magistratura, bakalavr, doktorantura yoki kundalik muloqot — maqsadingizga mos aniq yo‘l xaritasi, jonli darslar va doimiy nazorat bilan.",
        availability: "Yangi guruhga qabul ochiq",
        portraitAlt: "Bekzod Qosimov — turk tili ustozi",
        portraitCaption: "Bekzod Hoca",
        portraitRole: "Turk tili ustozi",
        scroll: "Davomini ko‘ring",
      },
      proof: {
        yearsValue: "7+ yil",
        yearsLabel: "onlayn va oflayn tajriba",
        certificateValue: "TYS • C1",
        certificateLabel: "xalqaro darajadagi bilim",
        formatValue: "2 format",
        formatLabel: "Farg‘onada va onlayn",
        communityValue: "Yuzlab",
        communityLabel: "maqsadiga yetgan o‘quvchilar",
      },
      about: {
        heading: "Til o‘rganish sizni yangi imkoniyatlarga olib borishi kerak.",
        lead:
          "Men Bekzod Qosimovman. 7 yildan ortiq vaqtdan beri o‘quvchilarga turk tilini tushunish, gapirish va akademik maqsadlariga yetishda yordam beraman.",
        body:
          "Darslarda qoidalarni shunchaki yodlamaysiz. Har bir mavzuni suhbat, real vaziyat va turk madaniyati bilan bog‘lab, shu zahoti amalda ishlatasiz.",
        quote: "Xato qilish — to‘xtash emas, ravonlikka yaqinlashishdir.",
        certificate: "TYS va CEFR C1",
        certificateText:
          "Imtihon talablarini ichidan biladigan ustoz bilan tizimli tayyorgarlik.",
        personal: "Shaxsiy yo‘l xaritasi",
        personalText:
          "Darajangiz, vaqtingiz va maqsadingizga qarab moslashtirilgan reja.",
      },
      courses: {
        heading: "Boshlang‘ichdan ishonchli suhbatgacha",
        description:
          "Har bir bosqich oldingisini mustahkamlaydi. Qayerdan boshlashingizni konsultatsiyada birga aniqlaymiz.",
        current: "Eng ko‘p tanlanadi",
        items: {
          zero: {
            level: "A1–A2",
            title: "Mustahkam poydevor",
            description:
              "Talaffuz, kundalik lug‘at va kerakli grammatika bilan ilk suhbatlaringizni boshlang.",
            duration: "1 oy",
            frequency: "Haftada 3 dars",
            result: "Oddiy vaziyatlarda fikr bildirish",
          },
          one: {
            level: "B1–B2",
            title: "Erkin muloqot",
            description:
              "Fikrni kengroq ifodalash, tabiiy iboralar va tezkor suhbat ko‘nikmalarini rivojlantiring.",
            duration: "2 oy",
            frequency: "Haftada 3 dars",
            result: "Ishonch bilan suhbat olib borish",
          },
          two: {
            level: "C1 • TYS",
            title: "Akademik daraja",
            description:
              "Murakkab matnlar, akademik yozuv va TYS formati bo‘yicha maqsadli tayyorlaning.",
            duration: "3 oy",
            frequency: "Haftada 3 dars",
            result: "Ta’lim va sertifikat maqsadi",
          },
        },
        durationLabel: "Davomiyligi",
        frequencyLabel: "Jadval",
        resultLabel: "Natija",
      },
      method: {
        heading: "Darsdan keyin ham ishlaydigan metodika",
        description:
          "Ravonlik bitta darsda emas, to‘g‘ri qurilgan tizimda paydo bo‘ladi.",
        items: {
          speaking: {
            title: "Gapirish markazda",
            text: "Har bir mavzu faol suhbat va real vaziyat bilan mustahkamlanadi.",
          },
          system: {
            title: "Tushunarli tizim",
            text: "Grammatika sodda mantiq, misol va qayta qo‘llash orqali o‘zlashtiriladi.",
          },
          culture: {
            title: "Til + madaniyat",
            text: "Iboralar, ohang va odatlar orqali turkchani tabiiyroq his qilasiz.",
          },
          feedback: {
            title: "Doimiy feedback",
            text: "Xatolaringiz tahlil qilinadi, rivojlanish yo‘nalishi aniq ko‘rinadi.",
          },
        },
        note: "Dars — tushunish. Amaliyot — gapirish. Feedback — o‘sish.",
      },
      reviews: {
        heading: "O‘quvchilar natijasi — eng kuchli tavsiya",
        description:
          "Turli maqsad, turli boshlang‘ich daraja, bitta umumiy natija: turkchada ishonch.",
        items: {
          zero: {
            text:
              "Bekzod hoca sabr bilan tushuntiradi va har bir darsni qiziqarli qiladi. Uning yordami bilan B2 darajasiga yetdim.",
            name: "Kamola",
            location: "Toshkent",
          },
          one: {
            text:
              "5 oy ichida natijam juda sezildi. Dars usuli samarali — endi Turkiyada bemalol gaplasha olaman.",
            name: "Davron",
            location: "Samarqand",
          },
          two: {
            text:
              "Faqat til emas, turk madaniyati va odatlarini ham o‘rgandim. Har bir darsni intizorlik bilan kutardim.",
            name: "Malika",
            location: "Farg‘ona",
          },
        },
      },
      social: {
        heading: "Dars boshlanishidan oldin ham foyda oling",
        description:
          "Qisqa video, foydali ibora va turk tili bo‘yicha kundalik tavsiyalarni kuzatib boring.",
        instagramText: "Video darslar va kundalik iboralar",
        telegramText: "Materiallar, e’lonlar va o‘quvchilar hamjamiyati",
        openInstagram: "Instagramni ochish",
        openTelegram: "Telegramga qo‘shilish",
      },
      location: {
        heading: "Farg‘ona markazida, sizga qulay formatda",
        description:
          "Oflayn darslar NAJOT ILMDA o‘quv markazida. Kela olmasangiz, Zoom orqali onlayn qatnashishingiz mumkin.",
        center: "NAJOT ILMDA o‘quv markazi",
        addressLabel: "Manzil",
        address:
          "Farg‘ona shahri, Tojmahal mehmonxonasi ro‘parasida",
        offline: "Oflayn",
        offlineText: "Jonli muhit va guruh bilan faol mashg‘ulot",
        online: "Onlayn",
        onlineText: "Dunyoning istalgan nuqtasidan Zoom orqali",
        mapTitle: "NAJOT ILMDA o‘quv markazi Google xaritada",
      },
      faq: {
        heading: "Boshlashdan oldingi savollar",
        description:
          "Javobingizni topmadingizmi? Konsultatsiya tugmasi orqali yozing.",
        items: {
          zero: {
            question: "Turk tilini umuman bilmasam ham boshlay olamanmi?",
            answer:
              "Ha. A1 bosqichi aynan noldan boshlovchilar uchun. Avval talaffuz va eng kerakli iboralarni o‘rganamiz, keyin grammatikani bosqichma-bosqich qo‘shamiz.",
          },
          one: {
            question: "Darslar qayerda va qanday formatda o‘tadi?",
            answer:
              "Oflayn darslar Farg‘onadagi NAJOT ILMDA markazida o‘tadi. Boshqa shahar yoki mamlakatdagilar Zoom orqali onlayn qatnashishi mumkin.",
          },
          two: {
            question: "TYS imtihoniga tayyorlaysizmi?",
            answer:
              "Ha. Darajangiz aniqlangach, TYS formati, akademik lug‘at, yozuv, tinglab tushunish va suhbat bo‘yicha alohida reja tuziladi.",
          },
          three: {
            question: "Qancha vaqtda gapira boshlayman?",
            answer:
              "Natija boshlang‘ich daraja, qatnashuv va mustaqil amaliyotga bog‘liq. Tizimli qatnashgan o‘quvchi ilk haftalardanoq kundalik iboralarni faol ishlata boshlaydi.",
          },
          four: {
            question: "Qaysi bosqich menga mosligini qanday bilaman?",
            answer:
              "Qisqa suhbat va daraja aniqlash orqali boshlash nuqtangizni belgilaymiz. So‘ng maqsadingizga mos guruh yoki individual yo‘nalish tavsiya qilinadi.",
          },
        },
      },
      lead: {
        modalTitle: "Turk tilini qaysi maqsad uchun o‘rganmoqchisiz?",
        modalDescription:
          "Raqamingizni qoldiring. Darajangiz va mos dars formati bo‘yicha siz bilan bog‘lanamiz.",
        sectionTitle: "Birinchi qadamni bugun qo‘ying",
        sectionDescription:
          "Telefon raqamingizni yuboring — kurs, jadval va boshlash darajasi bo‘yicha aniq ma’lumot olasiz.",
        nameLabel: "Ismingiz",
        namePlaceholder: "Ismingizni kiriting",
        phoneLabel: "Telefon raqamingiz",
        phonePlaceholder: "+998 90 123 45 67",
        messageLabel: "Maqsadingiz",
        messagePlaceholder: "Masalan: TYS, magistratura yoki erkin suhbat",
        consent:
          "Raqamingiz faqat kurs bo‘yicha bog‘lanish uchun ishlatiladi.",
        submit: "Menga qo‘ng‘iroq qiling",
        submitting: "So‘rov yuborilmoqda…",
        success:
          "So‘rovingiz yetib bordi. Tez orada siz bilan bog‘lanamiz.",
        error:
          "So‘rov yuborilmadi. Internetni tekshirib, yana bir bor urinib ko‘ring.",
        invalidPhone:
          "Telefon raqamida 7–15 ta raqam bo‘lishi kerak.",
      },
      finalCta: {
        heading: "Turkchada ishonch bilan gapirishga tayyormisiz?",
        description:
          "Maqsadingizni ayting — unga olib boradigan eng qisqa va tushunarli yo‘lni birga tanlaymiz.",
      },
      footer: {
        tagline: "Turk tilini maqsad bilan, ishonch bilan o‘rganing.",
        navigation: "Sahifalar",
        contact: "Bog‘lanish",
        rights: "Barcha huquqlar himoyalangan.",
        developer: "Sayt muallifi",
      },
      mobileCta: "Konsultatsiya",
    },
  },
  ru: {
    translation: {
      nav: {
        about: "О преподавателе",
        courses: "Курсы",
        method: "Методика",
        reviews: "Результаты",
        location: "Адрес",
        faq: "Вопросы",
      },
      common: {
        consultation: "Получить консультацию",
        start: "Начать обучение",
        viewCourses: "Посмотреть курсы",
        learnMore: "Узнать подробнее",
        instagram: "Instagram",
        telegram: "Telegram",
        openMap: "Открыть карту",
        close: "Закрыть",
      },
      hero: {
        kicker: "Сертификат TYS • CEFR C1 • Фергана",
        titleLead: "Учите турецкий",
        titleStrong: "для уверенной",
        titleTail: "речи.",
        description:
          "Магистратура, бакалавриат, докторантура или живое общение — понятный маршрут к вашей цели, практические уроки и постоянная обратная связь.",
        availability: "Набор в новую группу открыт",
        portraitAlt: "Бекзод Косимов — преподаватель турецкого языка",
        portraitCaption: "Bekzod Hoca",
        portraitRole: "Преподаватель турецкого языка",
        scroll: "Смотреть дальше",
      },
      proof: {
        yearsValue: "7+ лет",
        yearsLabel: "онлайн- и офлайн-опыта",
        certificateValue: "TYS • C1",
        certificateLabel: "международный уровень знаний",
        formatValue: "2 формата",
        formatLabel: "в Фергане и онлайн",
        communityValue: "Сотни",
        communityLabel: "учеников достигли своей цели",
      },
      about: {
        heading: "Язык должен открывать перед вами новые возможности.",
        lead:
          "Я Бекзод Косимов. Более 7 лет помогаю ученикам понимать турецкий, уверенно говорить и достигать академических целей.",
        body:
          "На уроках вы не просто заучиваете правила. Каждая тема сразу закрепляется в диалоге, реальной ситуации и контексте турецкой культуры.",
        quote: "Ошибка — не остановка, а шаг к свободной речи.",
        certificate: "TYS и CEFR C1",
        certificateText:
          "Системная подготовка с преподавателем, который знает требования экзамена изнутри.",
        personal: "Персональный маршрут",
        personalText:
          "План с учетом вашего уровня, графика и конкретной цели.",
      },
      courses: {
        heading: "От первого слова до уверенного разговора",
        description:
          "Каждый этап укрепляет предыдущий. На консультации мы вместе определим вашу точку старта.",
        current: "Выбирают чаще всего",
        items: {
          zero: {
            level: "A1–A2",
            title: "Надежная база",
            description:
              "Освойте произношение, повседневную лексику и необходимую грамматику для первых разговоров.",
            duration: "1 месяц",
            frequency: "3 урока в неделю",
            result: "Общение в простых ситуациях",
          },
          one: {
            level: "B1–B2",
            title: "Свободное общение",
            description:
              "Учитесь выражать развернутые мысли, использовать живые фразы и быстро реагировать в диалоге.",
            duration: "2 месяца",
            frequency: "3 урока в неделю",
            result: "Уверенный разговор",
          },
          two: {
            level: "C1 • TYS",
            title: "Академический уровень",
            description:
              "Работайте со сложными текстами, академическим письмом и заданиями формата TYS.",
            duration: "3 месяца",
            frequency: "3 урока в неделю",
            result: "Учеба и сертификация",
          },
        },
        durationLabel: "Продолжительность",
        frequencyLabel: "График",
        resultLabel: "Результат",
      },
      method: {
        heading: "Методика, которая работает и после урока",
        description:
          "Свободная речь появляется не за один урок, а благодаря правильно выстроенной системе.",
        items: {
          speaking: {
            title: "Речь в центре",
            text: "Каждая тема закрепляется активным разговором и реальными ситуациями.",
          },
          system: {
            title: "Понятная система",
            text: "Грамматика усваивается через логику, примеры и повторное применение.",
          },
          culture: {
            title: "Язык + культура",
            text: "Фразы, интонации и традиции помогают чувствовать турецкий естественнее.",
          },
          feedback: {
            title: "Постоянная обратная связь",
            text: "Ошибки разбираются, а направление роста всегда остается понятным.",
          },
        },
        note: "Урок — понять. Практика — заговорить. Обратная связь — вырасти.",
      },
      reviews: {
        heading: "Результаты учеников говорят лучше рекламы",
        description:
          "Разные цели и стартовые уровни, но один общий результат — уверенность в турецком.",
        items: {
          zero: {
            text:
              "Бекзод хока терпеливо объясняет и делает каждый урок интересным. С его помощью я дошла до уровня B2.",
            name: "Камола",
            location: "Ташкент",
          },
          one: {
            text:
              "За 5 месяцев прогресс стал очень заметным. Методика эффективная — теперь я свободно говорю в Турции.",
            name: "Даврон",
            location: "Самарканд",
          },
          two: {
            text:
              "Я изучила не только язык, но и турецкую культуру и традиции. Каждый урок ждала с удовольствием.",
            name: "Малика",
            location: "Фергана",
          },
        },
      },
      social: {
        heading: "Получайте пользу еще до начала курса",
        description:
          "Короткие уроки, живые выражения и ежедневные советы по турецкому языку.",
        instagramText: "Видеоуроки и повседневные фразы",
        telegramText: "Материалы, объявления и сообщество учеников",
        openInstagram: "Открыть Instagram",
        openTelegram: "Присоединиться в Telegram",
      },
      location: {
        heading: "В центре Ферганы и в удобном для вас формате",
        description:
          "Офлайн-уроки проходят в учебном центре NAJOT ILMDA. Если приехать не получается, подключайтесь онлайн через Zoom.",
        center: "Учебный центр NAJOT ILMDA",
        addressLabel: "Адрес",
        address: "Город Фергана, напротив гостиницы «Таджмахал»",
        offline: "Офлайн",
        offlineText: "Живая атмосфера и активная практика в группе",
        online: "Онлайн",
        onlineText: "Через Zoom из любой точки мира",
        mapTitle: "Учебный центр NAJOT ILMDA на Google Картах",
      },
      faq: {
        heading: "Вопросы перед началом",
        description:
          "Не нашли свой ответ? Напишите через кнопку консультации.",
        items: {
          zero: {
            question: "Можно начать, если я совсем не знаю турецкий?",
            answer:
              "Да. Уровень A1 создан именно для новичков. Сначала изучаем произношение и самые нужные фразы, затем постепенно добавляем грамматику.",
          },
          one: {
            question: "Где и в каком формате проходят уроки?",
            answer:
              "Офлайн-занятия проходят в центре NAJOT ILMDA в Фергане. Ученики из других городов и стран могут заниматься онлайн через Zoom.",
          },
          two: {
            question: "Вы готовите к экзамену TYS?",
            answer:
              "Да. После определения уровня составляется отдельный план по формату TYS, академической лексике, письму, аудированию и разговорной части.",
          },
          three: {
            question: "Через сколько я начну говорить?",
            answer:
              "Результат зависит от стартового уровня, посещаемости и самостоятельной практики. При системной работе повседневные фразы начинают активно использоваться уже в первые недели.",
          },
          four: {
            question: "Как понять, какой уровень мне подходит?",
            answer:
              "Короткая беседа и проверка уровня покажут точку старта. После этого вы получите рекомендацию по группе или индивидуальному маршруту.",
          },
        },
      },
      lead: {
        modalTitle: "Для какой цели вы хотите выучить турецкий?",
        modalDescription:
          "Оставьте номер. Мы свяжемся с вами и подскажем подходящий уровень и формат обучения.",
        sectionTitle: "Сделайте первый шаг сегодня",
        sectionDescription:
          "Отправьте номер телефона и получите точную информацию о курсе, расписании и стартовом уровне.",
        nameLabel: "Ваше имя",
        namePlaceholder: "Введите имя",
        phoneLabel: "Номер телефона",
        phonePlaceholder: "+998 90 123 45 67",
        messageLabel: "Ваша цель",
        messagePlaceholder: "Например: TYS, магистратура или свободная речь",
        consent:
          "Номер используется только для связи по поводу обучения.",
        submit: "Позвоните мне",
        submitting: "Отправляем заявку…",
        success: "Заявка получена. Мы скоро с вами свяжемся.",
        error:
          "Заявка не отправилась. Проверьте интернет и попробуйте еще раз.",
        invalidPhone: "В номере телефона должно быть от 7 до 15 цифр.",
      },
      finalCta: {
        heading: "Готовы уверенно заговорить по-турецки?",
        description:
          "Расскажите о цели — вместе выберем самый понятный и короткий маршрут к ней.",
      },
      footer: {
        tagline: "Учите турецкий целенаправленно и уверенно.",
        navigation: "Разделы",
        contact: "Связаться",
        rights: "Все права защищены.",
        developer: "Автор сайта",
      },
      mobileCta: "Консультация",
    },
  },
  en: {
    translation: {
      nav: {
        about: "About",
        courses: "Courses",
        method: "Method",
        reviews: "Results",
        location: "Location",
        faq: "FAQ",
      },
      common: {
        consultation: "Get a consultation",
        start: "Start learning",
        viewCourses: "View courses",
        learnMore: "Learn more",
        instagram: "Instagram",
        telegram: "Telegram",
        openMap: "Open in Maps",
        close: "Close",
      },
      hero: {
        kicker: "TYS certificate • CEFR C1 • Fergana",
        titleLead: "Learn Turkish",
        titleStrong: "to speak with",
        titleTail: "confidence.",
        description:
          "Master’s, bachelor’s, doctoral studies or everyday conversation — follow a clear route to your goal with practical lessons and continuous feedback.",
        availability: "Enrollment for the new group is open",
        portraitAlt: "Bekzod Qosimov — Turkish language teacher",
        portraitCaption: "Bekzod Hoca",
        portraitRole: "Turkish language teacher",
        scroll: "Explore the page",
      },
      proof: {
        yearsValue: "7+ years",
        yearsLabel: "of online and offline teaching",
        certificateValue: "TYS • C1",
        certificateLabel: "international-level proficiency",
        formatValue: "2 formats",
        formatLabel: "in Fergana and online",
        communityValue: "Hundreds",
        communityLabel: "of learners reached their goal",
      },
      about: {
        heading: "Learning a language should open new opportunities.",
        lead:
          "I’m Bekzod Qosimov. For more than 7 years, I have helped learners understand Turkish, speak confidently and reach academic goals.",
        body:
          "You will not simply memorize rules. Every topic is immediately applied through conversation, real situations and the context of Turkish culture.",
        quote: "A mistake is not a stop — it is a step toward fluency.",
        certificate: "TYS and CEFR C1",
        certificateText:
          "Structured preparation with a teacher who knows the exam requirements firsthand.",
        personal: "A personal roadmap",
        personalText:
          "A plan shaped around your current level, schedule and specific goal.",
      },
      courses: {
        heading: "From your first words to confident conversation",
        description:
          "Each stage strengthens the previous one. We will identify your best starting point during the consultation.",
        current: "Most popular",
        items: {
          zero: {
            level: "A1–A2",
            title: "A strong foundation",
            description:
              "Build pronunciation, everyday vocabulary and the essential grammar for your first conversations.",
            duration: "1 month",
            frequency: "3 lessons a week",
            result: "Handle simple everyday situations",
          },
          one: {
            level: "B1–B2",
            title: "Confident conversation",
            description:
              "Express fuller ideas, use natural phrases and respond more quickly in real dialogue.",
            duration: "2 months",
            frequency: "3 lessons a week",
            result: "Hold a conversation with confidence",
          },
          two: {
            level: "C1 • TYS",
            title: "Academic proficiency",
            description:
              "Work with complex texts, academic writing and focused preparation for the TYS format.",
            duration: "3 months",
            frequency: "3 lessons a week",
            result: "Study and certification goals",
          },
        },
        durationLabel: "Duration",
        frequencyLabel: "Schedule",
        resultLabel: "Outcome",
      },
      method: {
        heading: "A method that keeps working after class",
        description:
          "Fluency does not appear in one lesson. It grows from a well-built system.",
        items: {
          speaking: {
            title: "Speaking comes first",
            text: "Every topic is reinforced through active conversation and real situations.",
          },
          system: {
            title: "A clear system",
            text: "Grammar becomes usable through logic, examples and repeated application.",
          },
          culture: {
            title: "Language + culture",
            text: "Phrases, tone and customs help you experience Turkish more naturally.",
          },
          feedback: {
            title: "Continuous feedback",
            text: "Mistakes are reviewed and your direction for improvement stays clear.",
          },
        },
        note: "Class to understand. Practice to speak. Feedback to grow.",
      },
      reviews: {
        heading: "Student progress is the strongest recommendation",
        description:
          "Different goals and starting levels, one shared outcome: confidence in Turkish.",
        items: {
          zero: {
            text:
              "Bekzod Hoca explains patiently and makes every lesson engaging. With his help, I reached B2.",
            name: "Kamola",
            location: "Tashkent",
          },
          one: {
            text:
              "My progress became clear within 5 months. The method works — I can now speak comfortably in Turkey.",
            name: "Davron",
            location: "Samarkand",
          },
          two: {
            text:
              "I learned not only the language, but Turkish culture and traditions too. I looked forward to every lesson.",
            name: "Malika",
            location: "Fergana",
          },
        },
      },
      social: {
        heading: "Start learning even before the course begins",
        description:
          "Follow short lessons, useful expressions and daily Turkish language tips.",
        instagramText: "Video lessons and everyday expressions",
        telegramText: "Materials, announcements and the learner community",
        openInstagram: "Open Instagram",
        openTelegram: "Join Telegram",
      },
      location: {
        heading: "In central Fergana, in a format that suits you",
        description:
          "In-person lessons take place at the NAJOT ILMDA learning center. If you cannot attend, join online through Zoom.",
        center: "NAJOT ILMDA learning center",
        addressLabel: "Address",
        address: "Fergana city, opposite Tojmahal Hotel",
        offline: "In person",
        offlineText: "A live environment and active group practice",
        online: "Online",
        onlineText: "Join through Zoom from anywhere in the world",
        mapTitle: "NAJOT ILMDA learning center on Google Maps",
      },
      faq: {
        heading: "Questions before you begin",
        description:
          "Didn’t find your answer? Send a message through the consultation button.",
        items: {
          zero: {
            question: "Can I start if I know no Turkish at all?",
            answer:
              "Yes. A1 is designed for complete beginners. We start with pronunciation and essential phrases, then add grammar step by step.",
          },
          one: {
            question: "Where and how are lessons held?",
            answer:
              "In-person lessons are held at NAJOT ILMDA in Fergana. Learners in other cities or countries can join online through Zoom.",
          },
          two: {
            question: "Do you prepare students for TYS?",
            answer:
              "Yes. After your level is assessed, you receive a focused plan for the TYS format, academic vocabulary, writing, listening and speaking.",
          },
          three: {
            question: "How soon will I start speaking?",
            answer:
              "Progress depends on your starting level, attendance and independent practice. With consistent work, learners begin actively using everyday phrases in the first weeks.",
          },
          four: {
            question: "How do I know which level is right for me?",
            answer:
              "A short conversation and level check identify your starting point. You will then receive a recommendation for a group or personal route.",
          },
        },
      },
      lead: {
        modalTitle: "What is your goal for learning Turkish?",
        modalDescription:
          "Leave your number. We will contact you with the right starting level and lesson format.",
        sectionTitle: "Take the first step today",
        sectionDescription:
          "Send your phone number to get clear information about the course, schedule and starting level.",
        nameLabel: "Your name",
        namePlaceholder: "Enter your name",
        phoneLabel: "Phone number",
        phonePlaceholder: "+998 90 123 45 67",
        messageLabel: "Your goal",
        messagePlaceholder: "For example: TYS, master’s study or conversation",
        consent:
          "Your number is used only to contact you about the course.",
        submit: "Call me back",
        submitting: "Sending your request…",
        success: "Your request has arrived. We will contact you soon.",
        error:
          "Your request was not sent. Check your connection and try again.",
        invalidPhone: "The phone number must contain 7 to 15 digits.",
      },
      finalCta: {
        heading: "Ready to speak Turkish with confidence?",
        description:
          "Tell us your goal and we will choose the clearest, shortest route toward it together.",
      },
      footer: {
        tagline: "Learn Turkish with purpose and confidence.",
        navigation: "Explore",
        contact: "Contact",
        rights: "All rights reserved.",
        developer: "Site by",
      },
      mobileCta: "Consultation",
    },
  },
} as const
