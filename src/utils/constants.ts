const iconMappings: Record<string, string> = {
  '01d': 'clean.svg',
  '01n': 'clean.svg',
  '02d': 'few-clouds.svg',
  '02n': 'few-clouds.svg',
  '03d': 'scattered-clouds.svg',
  '03n': 'scattered-clouds.svg',
  '04d': 'broken-clouds.svg',
  '04n': 'broken-clouds.svg',
  '09d': 'shower-rain.svg',
  '09n': 'shower-rain.svg',
  '10d': 'rain.svg',
  '10n': 'rain.svg',
  '11d': 'thunderstorm.svg',
  '11n': 'thunderstorm.svg',
  '13d': 'snow.svg',
  '13n': 'snow.svg',
  '50d': 'mist.svg',
  '50n': 'mist.svg',
};

export const getWeatherIcon = (icon: string) => {
  return iconMappings[icon] || `${icon}.svg`;
};

export const weatherConditions: Record<
  string,
  { description: string; main: string }
> = {
  // Group 2xx: Thunderstorm
  '200': {
    description: '가벼운 비를 동반한 천둥번개',
    main: '천둥번개',
  },
  '201': { description: '비를 동반한 천둥번개', main: '천둥번개' },
  '202': {
    description: '강한 비를 동반한 천둥번개',
    main: '천둥번개',
  },
  '210': { description: '가벼운 천둥번개', main: '천둥번개' },
  '211': { description: '천둥번개', main: '천둥번개' },
  '212': { description: '강한 천둥번개', main: '천둥번개' },
  '221': { description: '거친 천둥번개', main: '천둥번개' },
  '230': {
    description: '가벼운 이슬비를 동반한 천둥번개',
    main: '천둥번개',
  },
  '231': {
    description: '이슬비를 동반한 천둥번개',
    main: '천둥번개',
  },
  '232': {
    description: '강한 이슬비를 동반한 천둥번개',
    main: '천둥번개',
  },

  // Group 3xx: Drizzle
  '300': { description: '가벼운 이슬비', main: '이슬비' },
  '301': { description: '이슬비', main: '이슬비' },
  '302': { description: '강한 이슬비', main: '이슬비' },
  '310': { description: '가벼운 이슬비 비', main: '이슬비' },
  '311': { description: '이슬비 비', main: '이슬비' },
  '312': { description: '강한 이슬비 비', main: '이슬비' },
  '313': { description: '소나기 비와 이슬비', main: '이슬비' },
  '314': {
    description: '강한 소나기 비와 이슬비',
    main: '이슬비',
  },
  '321': { description: '이슬비 소나기', main: '이슬비' },

  // Group 5xx: Rain
  '500': { description: '가벼운 비', main: '비' },
  '501': { description: '보통 비', main: '비' },
  '502': { description: '강한 비', main: '비' },
  '503': { description: '매우 강한 비', main: '비' },
  '504': { description: '극한의 비', main: '비' },
  '511': { description: '얼음비', main: '비' },
  '520': { description: '가벼운 소나기 비', main: '비' },
  '521': { description: '소나기 비', main: '비' },
  '522': { description: '강한 소나기 비', main: '비' },
  '531': { description: '거친 소나기 비', main: '비' },

  // Group 6xx: Snow
  '600': { description: '가벼운 눈', main: '눈' },
  '601': { description: '눈', main: '눈' },
  '602': { description: '강한 눈', main: '눈' },
  '611': { description: '진눈깨비', main: '눈' },
  '612': { description: '가벼운 소나기 진눈깨비', main: '눈' },
  '613': { description: '소나기 진눈깨비', main: '눈' },
  '615': { description: '가벼운 비와 눈', main: '눈' },
  '616': { description: '비와 눈', main: '눈' },
  '620': { description: '가벼운 소나기 눈', main: '눈' },
  '621': { description: '소나기 눈', main: '눈' },
  '622': { description: '강한 소나기 눈', main: '눈' },

  // Group 7xx: Atmosphere
  '701': { description: '안개', main: '안개' },
  '711': { description: '연기', main: '연기' },
  '721': { description: '연무', main: '연무' },
  '731': { description: '모래바람', main: '모래바람' },
  '741': { description: '안개', main: '안개' },
  '751': { description: '모래', main: '모래' },
  '761': { description: '먼지', main: '먼지' },
  '762': { description: '화산재', main: '화산재' },
  '771': { description: '돌풍', main: '돌풍' },
  '781': { description: '토네이도', main: '토네이도' },

  // Group 800: Clear
  '800': { description: '맑은 하늘', main: '맑은 하늘' },

  // Group 80x: Clouds
  '801': { description: '가벼운 구름(11-25%)', main: '구름' },
  '802': { description: '흩어진 구름(25-50%)', main: '구름' },
  '803': { description: '흐린 구름(51-84%)', main: '구름' },
  '804': {
    description: '완전히 흐린 구름(85-100%)',
    main: '구름',
  },
};
