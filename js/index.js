console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

console.log("알맞은 스크립트를 작성하세요");

const registerComment = () => {
  const inputComment = document.getElementById('input-comment');
  const commentList = document.getElementById('comment-list')
  if (!inputComment.value.trim()) {
    alert('댓글을 입력하셔야죠..');
    return;
  }

  const newComment = document.createElement('li');

  newComment.innerHTML = `
    <div id="comment-item">
      <div id="comment-author">
        <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
        <span>방문자</span>
      </div>
      <div id="comment-content">${inputComment.value}</div>
    </div>
  `;

  commentList.appendChild(newComment);

  inputComment.value = '';
};