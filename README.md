## TEAM 26하조

<br />
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/nada1221"><img src="https://avatars.githubusercontent.com/u/104189107?v=4" width="100px;" alt=""/><br /><sub><b>고동욱</b></sub><br /></a><br /></td>
      <td align="center"><a href="https://github.com/Jaihun-Kim"><img src="https://avatars.githubusercontent.com/u/107912376?v=4" width="100px;" alt=""/><br /><sub><b>김재훈</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/jioneee"><img src="https://avatars.githubusercontent.com/u/107476522?v=4" width="100px;" alt=""/><br /><sub><b>이지원</b></sub></a><br /></td>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/JoHyunho-clover"><img src="https://avatars.githubusercontent.com/u/78728072?v=4" width="100px;" alt=""/><br /><sub><b>조현호</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/kosmos992"><img src="https://avatars.githubusercontent.com/u/81802993?v=4" width="100px;" alt=""/><br /><sub><b>구예찬</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/redchicken97"><img src="https://avatars.githubusercontent.com/u/108041993?v=4" width="100px;" alt=""/><br /><sub><b>이하빈</b></sub></a><br /></td>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/YeryunJung"><img src="https://avatars.githubusercontent.com/u/103527404?v=4" width="100px;" alt=""/><br /><sub><b>정예륜</b></sub></a><br /></td>
     </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<br/>

## ✅ 회의 일정

| 날짜     | 시간          |
| -------- | ------------- |
| 22.10.24 | 10:00 ~  |


<br/>

<br/>

<br/>

## 커밋 규칙

- feat : 새로운 기능 추가, 기존의 기능을 요구 사항에 맞추어 수정
- fix : 기능에 대한 버그 수정
- build : 빌드 관련 수정
- chore : 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore
- docs : 문서(주석) 수정
- style : 코드 스타일, 포맷팅에 대한 수정
- refactor : 기능의 변화가 아닌 코드 리팩터링 ex) 변수 이름 변경
- merge : 병합

## ✅ 참여 방법

### Github Flow

- github flow는 git flow의 브랜치 전략이 너무 복잡하고 적용하기 어렵다고 해서 생겨난 브랜치 전략이다.
- github flow는 master 브랜치 하나만을 가지고 진행하는 방식이다.
- master 브랜치는 어떤 기능이 구현되든, 오류가 수정되든 모두 master에 머지되어 항상 update된 상태를 유지한다.

![image](https://user-images.githubusercontent.com/107832252/196041283-603bd3aa-c2b8-46d0-a211-6f1d06e83279.png)

자세한 github flow의 과정을 알아보자.

> 1. **master 브랜치에서 개발이 시작된다.**
> 2. **기능 구현이나 버그가 발생하면 issue를 작성한다.**
> 3. **팀원들이 issue 해결을 위해 master 브랜치에서 생성한 feature/{구현기능} 브랜치에서 개발을 하고 commit log를 작성한다.**
> 4. **push를 하면 pull request를 날릴 수 있다.**
> 5. **pull request를 통해 팀원들 간의 피드백, 버그 찾는 과정이 진행된다.
>    release 브랜치가 없으므로 이 과정이 탄탄하게 진행되어야 한다.**
> 6. **모든 리뷰가 이루어지면, merge하기 전에 배포를 통해 최종 테스트를 진행한다.**
> 7. **테스트까지 진행되면 master 브랜치에 머지한다.**

---

github flow는 시시각각 master에 머지될 때마다 배포가 이루어지는 것이 좋다.
<br/>
따라서 CI/CD를 통한 배포 자동화를 적용하는 것이 좋다.
<br/>
브랜치 전략이 단순해 master 브랜치에서 pull 하고, 기능 구현하고, 머지하는 일의 반복이다.
<br/>
하지만 pull request에서 팀원간의 충분한 리뷰와 피드백이 진행되지 않으면 배포된 자체에서 버그가 발생할 수 있으므로 주의해야 한다.
