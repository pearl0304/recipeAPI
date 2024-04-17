// /database/data.js
const recipes = [
  {
    id: 1,
    title: '스파게티 카르보나라',
    description:
      '크리미한 카르보나라 소스와 파르마산 치즈가 어우러진 이탈리안 파스타',
    ingredients: [
      '스파게티 200g',
      '베이컨 100g',
      '생크림 100ml',
      '달걀노른자 2개',
      '파르마산 치즈 50g',
      '마늘 1쪽',
      '소금',
      '후추',
    ],
    steps: [
      '스파게티를 패키지의 지시대로 삶습니다.',
      '베이컨을 적당한 크기로 자르고, 팬에 볶다가 다진 마늘을 추가합니다.',
      '달걀노른자, 생크림, 소금, 후추를 섞어 소스를 만듭니다.',
      '삶은 스파게티를 팬에 넣고 잘 섞은 후, 만든 소스를 부어 잘 섞습니다.',
      '그릇에 담고 파르마산 치즈를 뿌려서 서빙합니다.',
    ],
    cookTime: 30,
    servings: 2,
    imageURL: './images/1.jpg',
  },
  {
    id: 2,
    title: '김치찌개',
    description: '깊은 맛의 김치와 돼지고기가 들어간 한국의 대표적인 찌개 요리',
    ingredients: [
      '김치 200g',
      '돼지고기 100g',
      '두부 1모',
      '대파 1대',
      '양파 1/2개',
      '고추장 1큰술',
      '고춧가루 1큰술',
      '다진 마늘 1작은술',
      '멸치 육수 500ml',
    ],
    steps: [
      '돼지고기를 먼저 볶은 후, 잘게 썬 김치를 추가하여 볶습니다.',
      '양파, 대파, 다진 마늘을 추가하여 볶습니다.',
      '멸치 육수를 부어 끓입니다.',
      '두부를 썰어 넣고, 고추장과 고춧가루로 간을 맞춥니다.',
      '보글보글 끓일 때까지 중불에서 조리합니다.',
    ],
    cookTime: 25,
    servings: 3,
    imageURL: './images/2.jpg',
  },
  {
    id: 3,
    title: '치즈 오믈렛',
    description: '부드러운 계란과 풍부한 치즈가 어우러진 간단한 아침 식사',
    ingredients: [
      '달걀 3개',
      '우유 50ml',
      '체다 치즈 30g',
      '소금 약간',
      '후추 약간',
      '버터',
    ],
    steps: [
      '달걀을 깨서 우유와 함께 잘 휘젓습니다.',
      '소금과 후추로 간을 합니다.',
      '팬에 버터를 녹인 후, 달걀물을 부어 중약불에서 익힙니다.',
      '달걀이 반쯤 익었을 때 체다 치즈를 올리고 접어 반으로 만듭니다.',
      '치즈가 녹을 때까지 더 익히고 접시에 옮겨 담습니다.',
    ],
    cookTime: 10,
    servings: 1,
    imageURL: 'http://example.com/images/치즈오믈렛.jpg',
  },
  {
    id: 4,
    title: '토마토 스파게티',
    description: '신선한 토마토와 바질이 들어간 클래식 이탈리안 파스타',
    ingredients: [
      '스파게티 200g',
      '신선한 토마토 3개',
      '올리브 오일',
      '마늘 2쪽',
      '바질 몇 잎',
      '소금',
      '후추',
    ],
    steps: [
      '토마토는 깍둑썰기하고, 마늘은 다져 준비합니다.',
      '팬에 올리브 오일을 두르고 다진 마늘을 볶다가 토마토를 추가합니다.',
      '토마토가 무르게 익으면 소금, 후추로 간을 맞춥니다.',
      '물이 끓으면 소금을 넣고 스파게티를 삶아서 토마토 소스와 섞습니다.',
      '접시에 담고 신선한 바질을 올려서 완성합니다.',
    ],
    cookTime: 20,
    servings: 2,
    imageURL: 'http://example.com/images/토마토스파게티.jpg',
  },
  {
    id: 5,
    title: '베이컨 맥앤치즈',
    description: '크리미한 치즈와 바삭한 베이컨의 환상적인 조화',
    ingredients: [
      '마카로니 300g',
      '베이컨 100g',
      '버터 50g',
      '밀가루 50g',
      '우유 500ml',
      '체다 치즈 100g',
      '소금',
      '후추',
    ],
    steps: [
      '마카로니를 삶아서 건져둡니다.',
      '베이컨을 팬에 볶아 바삭하게 만든 후, 건져둡니다.',
      '같은 팬에 버터를 녹이고 밀가루를 넣어 볶다가 우유를 조금씩 넣어가며 걸쭉하게 만듭니다.',
      '치즈를 넣고 녹여서 소스를 만든 후, 마카로니와 섞습니다.',
      '베이컨을 위에 올려서 서빙합니다.',
    ],
    cookTime: 30,
    servings: 4,
    imageURL: 'http://example.com/images/베이컨맥앤치즈.jpg',
  },
  {
    id: 6,
    title: '치킨 퀘사디아',
    description: '달콤한 바비큐 소스와 치즈가 들어간 멕시칸 스타일 퀘사디아',
    ingredients: [
      '토르티야 2장',
      '치킨 가슴살 200g',
      '바비큐 소스',
      '몬터레이 잭 치즈 100g',
      '양파 1/2개',
      '피망 1/2개',
      '올리브 오일',
      '소금',
      '후추',
    ],
    steps: [
      '치킨 가슴살은 소금, 후추로 간한 뒤 올리브 오일을 두른 팬에서 굽습니다.',
      '양파와 피망은 채 썰어 볶고, 구운 치킨을 잘게 찢어서 바비큐 소스와 함께 볶습니다.',
      '토르티야 한 장에 치킨과 채소를 올리고, 그 위에 치즈를 고루 뿌립니다.',
      '두 번째 토르티야를 위에 올리고, 팬에서 양면을 바삭하게 굽습니다.',
      '사각형으로 잘라서 서빙합니다.',
    ],
    cookTime: 20,
    servings: 2,
    imageURL: 'http://example.com/images/치킨퀘사디아.jpg',
  },
  {
    id: 7,
    title: '팟타이',
    description: '태국의 대표적인 국수 요리로, 새콤달콤한 맛이 특징',
    ingredients: [
      '라이스 누들 200g',
      '새우 10마리',
      '땅콩가루',
      '계란 2개',
      '콩나물 100g',
      '파 2대',
      '타마린드 소스',
      '설탕 1큰술',
      '라임 1개',
    ],
    steps: [
      '누들을 미지근한 물에 담가 불립니다.',
      '팬에 새우와 계란을 볶고, 콩나물과 잘게 썬 파를 추가합니다.',
      '타마린드 소스와 설탕을 넣고 볶습니다.',
      '불린 누들을 넣고 잘 섞어 볶습니다.',
      '라임을 짜고 땅콩가루를 뿌려서 서빙합니다.',
    ],
    cookTime: 30,
    servings: 2,
    imageURL: 'http://example.com/images/팟타이.jpg',
  },
];

export default recipes;
