import { ReactComponent as Clean } from '../assets/icons/clean.svg';
import { ReactComponent as FewClouds } from '../assets/icons/few-clouds.svg';
import { ReactComponent as ScatteredClouds } from '../assets/icons/scattered-clouds.svg';
import { ReactComponent as BrokenClouds } from '../assets/icons/broken-clouds.svg';
import { ReactComponent as ShowerRain } from '../assets/icons/shower-rain.svg';
import { ReactComponent as Rain } from '../assets/icons/rain.svg';
import { ReactComponent as Thunderstorm } from '../assets/icons/thunderstorm.svg';
import { ReactComponent as Snow } from '../assets/icons/snow.svg';
import { ReactComponent as Mist } from '../assets/icons/mist.svg';
import { ReactComponent as Tornado } from '../assets/icons/tornado.svg';
import { ReactComponent as Hailstone } from '../assets/icons/hailstone.svg';
import { ReactComponent as Gale } from '../assets/icons/gale.svg';
import { ReactComponent as ThunderstormRain } from '../assets/icons/thunderstorm-rain.svg';
import { ReactComponent as ThunderstormShowerRain } from '../assets/icons/thunderstorm-shower-rain.svg';

// 날씨 코드에 맞는 기본 아이콘 맵핑
export const weatherIcons: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  '01d': Clean,
  '01n': Clean,
  '02d': FewClouds,
  '02n': FewClouds,
  '03d': ScatteredClouds,
  '03n': ScatteredClouds,
  '04d': BrokenClouds,
  '04n': BrokenClouds,
  '09d': ShowerRain,
  '09n': ShowerRain,
  '10d': Rain,
  '10n': Rain,
  '11d': Thunderstorm,
  '11n': Thunderstorm,
  '13d': Snow,
  '13n': Snow,
  '50d': Mist,
  '50n': Mist,
};

// 날씨 ID에 맞는 아이콘 반환 함수
export const getWeatherIcon = (id: number, iconCode: string) => {
  const iconMapById: Record<
    string,
    React.ComponentType<React.SVGProps<SVGSVGElement>>
  > = {
    '781': Tornado, // 토네이도
    '511': Hailstone, // 얼음비
    '771': Gale, // 강풍
    '200': ThunderstormRain, // 천둥비
    '201': ThunderstormRain,
    '202': ThunderstormRain,
    '230': ThunderstormShowerRain, // 천둥소나기비
    '231': ThunderstormShowerRain,
    '232': ThunderstormShowerRain,
  };

  // 아이디로 매칭된 아이콘이 있으면 반환
  const IconComponent = iconMapById[Number(id)] || weatherIcons[iconCode];
  return IconComponent || Clean;
};
