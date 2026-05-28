// HTML 문서가 모두 준비된 뒤에 JavaScript를 실행합니다.
document.addEventListener("DOMContentLoaded", function () {
  // 버튼과 안내 문구가 들어갈 요소를 찾습니다.
  const messageButton = document.getElementById("messageButton");
  const message = document.getElementById("message");

  // 필요한 요소가 없으면 오류가 나지 않도록 실행을 멈춥니다.
  if (!messageButton || !message) {
    return;
  }

  // 버튼을 클릭하면 안내 문구를 보여 줍니다.
  messageButton.addEventListener("click", function () {
    message.textContent =
      "아프면 참지 말고 선생님께 말하세요. 작은 증상도 괜찮으니 바로 알려 주면 보건실에서 차분히 도와드릴게요.";

    // CSS의 show 클래스를 추가해 문구가 자연스럽게 나타나도록 합니다.
    message.classList.add("show");
  });
});
