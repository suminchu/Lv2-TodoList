#Lv2 과제


1. 상세 페이지 이동을 위해 react-router-dom 라이브러리를 사용하셨을 거예요, CRA 라우팅이란 무엇인가요?
➡️ CRA로 생성된 React어플에서 라우팅을 설정하는 방법이다. 이것은 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것이다.


2. Redux를 사용하여 애플리케이션의 상태 관리를 하셨을 것입니다. 어떤 상태들을 Redux로 관리하셨나요? 그 상태 값을 Redux를 통해 관리함으로 얻은 이점은 무엇이었나요?
➡️ Todo 목록 (todos)와 현재 입력 중인 Todo를 입력하는 (input) 등을 사용하여 어플의 상태를 저장하고 관리하였다. Redux는 코드의 가독성을 높이고, 상태와 상태 변경 로직을 분리하여 관리하기 때문에 각 부분들을 독립적으로 테스트 할 수 있다.

 
3. Redux의 reducer 함수가 애플리케이션 로직과 어떻게 상호작용하는지 설명해 주세요.
➡️ 사용자의 이벤트로 인해 액션이 생성된다. 생성된 액션이 Store에 dispatch된다. store는 현재 상태와 dispatch된 액션을 reducer에 전달하여 새로운 상태를 생성한다. reducer가 반환한 새로운 상태로 store가 업데이트되며, UI 컴포넌트들이 감지하여 다시 랜더링된다. 
 

4. CSS in JS 라이브러리 중 하나인 "styled component"를 사용했을 때의 이점은 많습니다. CSS in JS가 제공하는 이점을 두 가지만 설명해 주세요.
➡️ CSS in JS를 사용하면 스타일을 수정하기 위해 다른 페이지로 이동할 필요가 없어 편리하다. 스타일 컴포넌트는 유니크한 클래스를 자동으로 생성하여 클래스명 충돌을 방지해 코드의 가독성을 높이고, 생성한 클래스명은 짧아서 코드의 길이가 짧아진다.


5. useEffect hook을 사용한 부분이 있다면, 왜 사용해야 했고, 해당 hook이 언제 실행되는지 설명해주세요.
➡️ 내 코드에서는 useEffect를 사용한 부분이 없다. useEffect를 사용하는 경우는 초기 렌더링 후 컴포넌트가 처음 마운트 된 직후 실행되거나 의존성 배열의 값이 변경될 때 사용되거나 반환된 cleanup함수가 있을 때 컴포넌트가 언마운트되기 전에 실행된다.
