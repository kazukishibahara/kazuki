// 初期化
onload = async function () {
	messageDiv.innerText = "データの受信を開始しました。";
};

// メッセージを受信したときに起動する関数
function getMessage(msg) {
	console.log( msg );
	messageDiv.innerText = messageDiv.innerText + "\n" + msg;
	return false;
}
