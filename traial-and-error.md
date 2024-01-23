# WOORI PET FOOD

## 2024-01-18-01

우리펫푸드 사이드 미션을 시작했다.  
vscode의 branch 연결에서 꼬여서 시간을 날렸다.  

지식+

- main이 아닌 브랜치에 연결할 경우에는 소스 제어의 리포지터리 복제를 누르고 연결한 뒤 순번대로  
  1. git remote add origin [복사한 주소]
  2. git pull origin main --allow-unrelated-histories
  3. git push -u origin [연결하길 원하는 저장소 이름]을 작성하면 된다.

- main 외 다른 특정 브랜치만 clone 하기
  1. git clone -b [연결하길 원하는 브랜치 이름] --single-branch [원하는 이름 주소]

- figma는 로그인 하지 않으면 페이지 생김새만 보이고 로그인 해야지 수겅 방식이 보인다.

- 라이브 서버에 이미지가 안나온다!  
  1. 이미지 주소 확인하기
  2. 에러 문구 확인하기


## 2024-01-19-02

일괄 수정을 위한 command+shift+l이 작동하지 않는다.

공백없이 만들기 위해 position: absolute의 값을 0으로 했더니 li로 작성한 a들이 겹쳐 나온다.  

![출력](./?png/day02.png)
![코드](./?png/day02-1.png)

## 2024-01-22-03

whj/main-carousel 브랜치를 생성해서 캐로셀 작업을 시작했다.  
캐로셀을 구현하는데 다음 이미지로 넘어가는게 안된다.  
마우스로 잡아서 이동도 안되고 페이지네이션으로 이동하는것도 안되고... js가 문제인지 css가 문제인지...