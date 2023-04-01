const places = [{
  title: {
    ru: 'Куршская коса',
    en: 'Kurshskaya kosa'
  },
  imageLink: './images/place-kosa.jpg',
  siteName: 'park-kosa.ru',
  link: 'http://park-kosa.ru/',
  content: {
    ru: `
      <p class="place__paragraph">
        Здесь, посреди лесов и&nbsp;песчаных дюн, вы&nbsp;сможете увидеть
        два водных горизонта&nbsp;&mdash; спокойного Куршского залива
        с&nbsp;одной стороны и подёрнутого рябью волн Балтийского моря
        с&nbsp;другой. Уникальная природная зона на&nbsp;краю российского
        анклава.
      </p>
      <p class="place__paragraph">
        На&nbsp;этом Калининградская область не&nbsp;заканчивается. Для
        путешественника и&nbsp;исследователя там&nbsp;же
        по&nbsp;соседству&nbsp;&mdash; самая западная точка России,
        Балтийская коса,&nbsp;&mdash; и&nbsp;немецкое наследие россыпи
        небольших приморских городов. Атмосфера здешних мест исключает
        суету, окуная в&nbsp;спокойствие природы и&nbsp;запах стального,
        прохладного моря.
      </p>
    `,
    en: `
      <p class="place__paragraph">
        Here, in&nbsp;the middle of&nbsp;the forests and sand dunes, you can see
        two water horizons calm Curonian Lagoon
        on&nbsp;one side and the rippling waves of&nbsp;the Baltic Sea
        with another. A&nbsp;unique natural area on&nbsp;the edge of&nbsp;the Russian
        enclave.
      </p>
      <p class="place__paragraph">
        The Kaliningrad region does not end there. For
        traveler and explorer
        next door is&nbsp;the westernmost point of&nbsp;Russia,
        The Baltic Spit, and the German Placer Heritage
        small coastal towns. The atmosphere of&nbsp;these places excludes
        vanity, dipping into the tranquility of&nbsp;nature and the smell of&nbsp;steel,
        cool sea.
      </p>
    `
  }
},
{
  title: {
    ru: 'Кольский',
    en: 'Kolsky'
  },
  imageLink: './images/place-kolsky.jpg',
  siteName: 'National Geographic',
  link: `https://yourshot.nationalgeographic.com/photos/?keywords=kolskiy`,
  content: {
    ru: `
      <p class="place__paragraph">
        Почти весь полуостров находится за Полярным кругом. Саамская
        тундра, от которой на юг — тайга, а на север — Ледовитый океан,
        прикидывающийся Баренцевым морем.
      </p>
      <p class="place__paragraph">
        Возможно, вы смотрели Звягинцева и даже слышали историю
        арктического фестиваля в Териберке. Возможно, слово «Хибины» не
        осталось под снегом школьных воспоминаний об уроках географии.
        Возможно, вы не интересовались пронизывающей земную кору
        сверхглубокой скважиной, а от апатитов вас давно накрывает апатия.
        Но ваша мечта увидеть северное сияние начинает сбываться с билетом
        в Мурманск.
      </p>
    `,
    en: `
      <p class="place__paragraph">
        Almost the entire peninsula is located beyond the Arctic Circle. Sami
        tundra, from which to the south is taiga, and to the north is the Arctic Ocean,
        pretending to be the Barents Sea.
      </p>
      <p class="place__paragraph">
        Perhaps you watched Zvyagintsev and even heard the story
        Arctic Festival in Teriberka. Perhaps the word "Khibiny" is not
        left under the snow of school memories of geography lessons.
        Perhaps you were not interested in penetrating the earth's crust
        an ultra-deep well, and apathy has long covered you from apatites.
        But your dream of seeing the Northern Lights starts to come true with a ticket.
        to Murmansk.
      </p>
  `
  }
},
{
  title: {
    ru: 'Алтай',
    en: 'Altai'
  },
  imageLink: './images/place-altai.jpg',
  siteName: 'YouTube',
  link: 'https://www.youtube.com/watch?v=7ZEsoV7kWAQ',
  content: {
    ru: `
      <p class="place__paragraph">
        Алтай — одно из красивейших мест в России. В первую очередь из-за
        гор: если ехать вдоль хребта, вы увидите склоны, усыпанные
        соснами, горные реки и озёра. А если вы откроете в автомобиле
        окна, сможете познакомиться с невидимым чудом здешних мест —
        горным воздухом.
      </p>
      <p class="place__paragraph">
        Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом.
        Так вы увидите всё разнообразие местной флоры и фауны. По лесам
        Алтая бродят лоси, над хребтами летают орлы, а на равнинах пасутся
        косули. И знаменитые манулы — тоже обитатели Алтайского края.
      </p>
    `,
    en: `
      <p class="place__paragraph">
        Altai is one of the most beautiful places in Russia. First of all due to
        mountains: if you drive along the ridge, you will see slopes strewn
        pines, mountain rivers and lakes. And if you open in the car
        windows, you can get acquainted with the invisible miracle of these places -
        mountain air.
      </p>
      <p class="place__paragraph">
        The climate in Altai is temperate, so it is best to go here in summer.
        So you will see all the variety of local flora and fauna. Through the woods
        Elks roam Altai, eagles fly over the ridges, and graze on the plains
        roe deer. And the famous manuls are also inhabitants of the Altai Territory.
      </p>
    `
  }
},
{
  title: {
    ru: 'Зимний Байкал',
    en: 'Winter Baikal'
  },
  imageLink: './images/place-winter-baikal.jpg',
  siteName: 'VK',
  link: 'https://vk.com/baikalmile',
  content: {
    ru: `
      <p class="place__paragraph">
        Всем известен Байкал как крупнейшее озеро в мире. Многие также
        знают, что это самый большой источник пресной воды и одно из
        красивейших мест в России.
      </p>
      <p class="place__paragraph">
        Конечно, это всё так. Но Байкал ещё идеальное место для
        соревнований по скийорингу. Это такой вид спорта, когда лыжник
        привязывает себя к мотоциклу, и тандем старается развить как можно
        бóльшую скорость на льду. В марте 2019 года на фестивале
        «Байкальская миля» был поставлен мировой рекорд — 197.011 км/ч.
      </p>
    `,
    en: `
      <p class="place__paragraph">
        Everyone knows Baikal as the largest lake in the world. Many also
        know that this is the largest source of fresh water and one of
        most beautiful places in Russia.
      </p>
      <p class="place__paragraph">
        Of course, it's all true. But Baikal is still an ideal place for
        skiing competitions. This is such a sport when a skier
        ties himself to a motorcycle, and the tandem tries to develop as much as possible
        more speed on ice. In March 2019 at the festival
        "Baikal Mile" was set a world record - 197.011 km / h.
      </p>
    `
  }
},
{
  title: {
    ru: 'Карелия',
    en: 'Karelia'
  },
  imageLink: './images/place-karelia.jpg',
  siteName: 'http://vodlozero.ru/',
  link: 'http://vodlozero.ru/',
  content: {
    ru: `
      <p class="place__paragraph">
        Сибирь заканчивается не на Урале, а в Карелии: образующая тайгу
        сибирская лиственница не растёт западнее Водлозера. Зато здесь она
        вымахивает на 30 метров — леса карельских национальных парков
        из-за непроходимых болот никогда не знали топора. Некоторым соснам
        уже больше чем полтысячелетия. Прикоснитесь к живому существу,
        видевшему солнце раньше, чем увидал его Иван Грозный. В
        девственном лесу на сотню километров не встретишь тропы. А на
        редких тропинках деревья в паре метров от земли помечены
        медвежьими когтями. Чтобы все знали, кто тут хозяин.
      </p>
    `,
    en: `
      <p class="place__paragraph">
        Siberia ends not in the Urals, but in Karelia: forming the taiga
        Siberian larch does not grow west of Vodlozero. But here she is
        rises to 30 meters - the forests of Karelian national parks
        because of the impenetrable swamps, the ax was never known. To some pines
        for more than half a millennium. Touch a living being
        who saw the sun before Ivan the Terrible saw it. IN
        virgin forest for a hundred kilometers you will not find a path. And on
        rare footpaths trees a couple of meters from the ground are marked
        bear claws. Let everyone know who's boss.
      </p>
    `
  }
},
]

export default places;
