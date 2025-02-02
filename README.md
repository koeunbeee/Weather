# 🌤️ Weather App

## 📌 개요

이 프로젝트는 외부 날씨 API를 활용하여 실시간 날씨 정보를 제공하는 **서버리스 웹 애플리케이션**입니다.  
GitHub Actions를 이용한 **CI/CD 파이프라인**을 구축하여 AWS에 자동 배포됩니다.

## 🚀 기술 스택

- **Frontend**: React (TypeScript, MUI)
- **State Management**: Zustand
- **API 요청**: React Query
- **배포**: AWS (S3, CloudFront 등)
- **CI/CD**: GitHub Actions

## 📡 아키텍처

이 프로젝트는 서버리스 아키텍처를 기반으로 동작하며, 프론트엔드에서 직접 **외부 API**를 호출합니다.

- 정적 파일은 **AWS S3 + CloudFront**를 이용하여 배포
- API 요청은 **외부 날씨 API** 활용
<!-- - 필요시 **AWS Lambda**를 사용하여 API 프록시 처리   -->

## 🔧 설치 및 실행

# 1. 프로젝트 클론

```sh
git clone https://github.com/your-repo/weather-app.git
cd weather-app
```

# 2. 패키지설치

```sh
yarn install
```

# 3. 환경 변수 설정

이 프로젝트는 OpenWeatherMap API, KAKAO API 키가 필요합니다.
.env 파일을 생성하고, 아래 내용을 참고하여 환경 변수를 설정하세요.

```sh
REACT_APP_WEATHER_API_KEY=b1efa94f14988a5c64b6f051cc137bcc
REACT_APP_KAKAO_API_KEY=66a2a2d0215d8bcd997f0958077e90c0
```

# 4. 실행

```sh
yarn start
```

## 🚀 배포

**GitHub Actions**를 통해 자동으로 AWS에 배포됩니다.<br>
**배포 과정** :

1. 코드 푸시 → GitHub Actions 트리거
2. 빌드 및 테스트 실행
3. AWS S3 & CloudFront에 배포
