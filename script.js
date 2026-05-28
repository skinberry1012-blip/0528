// HTML에서 버튼과 안내 문구가 들어갈 요소를 가져옵니다.
const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");

// 버튼을 클릭했을 때 실행할 동작을 정합니다.
messageButton.addEventListener("click", function () {
  // 안내 문구 영역에 문장을 넣습니다.
  message.textContent = "아프면 참지 말고 선생님께 말하세요. 작은 증상도 괜찮으니 바로 알려 주면 보건실에서 차분히 도와드릴게요.";

  // CSS의 show 클래스를 추가해 문구가 부드럽게 나타나도록 합니다.
  message.classList.add("show");
});
