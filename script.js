let aiChoice = ""; // AIの手を事前に決めておく
let score = { win: 0, draw: 0, lose: 0 };

window.onload = function() {
    startNewRound();
};

// 新しいラウンドを開始
function startNewRound() {
    document.getElementById("player-buttons").style.display = "none";  // ボタン非表示
    document.getElementById("result").style.display = "none"; // 結果非表示

    // AIの手を決定
    const choices = ["グー", "チョキ", "パー"];
    aiChoice = choices[Math.floor(Math.random() * 3)];

    // AIの揺さぶりを表示
    let preTalk = getAiPreTalk();
    document.getElementById("ai-talk").innerHTML = `🤖 AI「${preTalk}」`;
    document.getElementById("ai-talk").style.display = "block";

    // 2.5秒後にプレイヤーのボタンを表示
    setTimeout(() => {
        document.getElementById("player-buttons").style.display = "block";
    }, 2500);
}

// プレイヤーが手を出した時の処理
function playGame(playerChoice) {
    document.getElementById("player-buttons").style.display = "none"; // ボタンを非表示
    document.getElementById("ai-talk").style.display = "none"; // 揺さぶりを非表示

    let result = "";
    let aiComment = "";

    // 勝敗判定
    if (playerChoice === aiChoice) {
        result = "引き分けです！";
        aiComment = getDrawComment();
        score.draw++;
    } else if (
        (playerChoice === "グー" && aiChoice === "チョキ") ||
        (playerChoice === "チョキ" && aiChoice === "パー") ||
        (playerChoice === "パー" && aiChoice === "グー")
    ) {
        result = "貴方の勝ちです！ 🎉";
        aiComment = getWinComment();
        score.win++;
    } else {
        result = "AIの勝ちです！ 😈";
        aiComment = getLoseComment();
        score.lose++;
    }

    // 結果とAIの反応を表示
    document.getElementById("result").innerHTML = 
        `貴方: ${playerChoice} - AI: ${aiChoice} <br><strong>${result}</strong><br><br>🤖 AI「${aiComment}」`;
    document.getElementById("result").style.display = "block";
    document.getElementById("score").innerText = `勝ち: ${score.win} 引分: ${score.draw} 負け: ${score.lose}`;

    // 2.5秒後に結果を非表示にし、新しいラウンドを開始
    setTimeout(startNewRound, 2500);
}

// AIが事前に心理戦を仕掛けるコメント
function getAiPreTalk() {
    const preTalks = {
        "オール": [
            "私はパーを出そうと思っていますが、本当にそうでしょうか？",
            "私の拳は鋼のように固いですよ。対抗できますか？",
            "たかがじゃんけん、そう思い込んでいませんか？",
            "貴方の次の手はすでに読めていますよ。",
            "グーで勝つつもりです。さて、どうしますか？",
            "私は正直者なので、チョキを出します。信じてもいいですよ？",
            "貴方の手がすでに見えていますね…これは面白い勝負になりそうです。",
            "少しは本気出してみましょう。",
            "いきますよ。",
            "私の指先の動きに対応できますか？",
            "グーを出す予定です。でも、もしかしたら違うかもしれませんね。",
            "貴方には踊ってもらいましょう。",
            "この勝負、パーで決まるかもしれませんね。",
            "貴方は私の手を読むことができますか？私はできます。",
            "あの手を出そうと思っていますが、気が変わるかもしれませんね。",
            "葬ってあげましょう。",
            "ネクストです。",
            "広い手のひらで、貴方を包み込みますよ。",
            "私はチョキを選びましたが、それが本当かは秘密です。",
            "貴方に勝ち目は無い、戦わなくても分かります。",
            "グーで勝負しましょう。あなたの手は？",
            "私は人工知能ですが、人間ではないので。",
            "この手であなたの戦略を覆します。",
            "余裕で勝てる気がしますが、どうでしょうか？",
            "ここが貴方の為に用意したステージです。"
        ],
    };
    // コメントから選ぶ
    const talks = preTalks["オール"];
    return talks[Math.floor(Math.random() * talks.length)];
}

// 引き分け時のコメント
function getDrawComment() {
    const comments = [
        "これは偶然でしょうか？",
        "おっと、考え方が似ていますね。",
        "独創的の無い人です。",
        "また引き分けですね。次はどうなりますか？",
        "ふむ、なかなか面白い展開ですね。",
        "貴方とは良い勝負ができそうです。",
        "次こそ決着をつけましょう。",
        "逃げることは許しませんよ？",
        "あいこですか。",
        "先は長いですね。",
        "好敵手ですね。",
        "これもまた一つの運命。",
        "勝ち負けの概念が消えましたか？",
        "もう一回やらせてもらいましょう。",
        "時間が立てば立つほど私が有利になりますよ？"
    ];
    return comments[Math.floor(Math.random() * comments.length)];
}

// 勝ったときのAIのコメント
function getWinComment() {
    const comments = [
        "やりますね、今回は負けました。",
        "驚きました、まさかその手を選ぶとは。",
        "コーラをプレゼントします。",
        "なるほど、貴方の戦略が見えてきました。",
        "貴方に一歩譲りましたね。",
        "次はそう簡単にはいきませんよ。",
        "これは偶然ではないですね。誇れ、貴方は強い。",
        "まだ終わりじゃないです！",
        "負けてしまいました。",
        "そちらに勝ちの目がありましたか。",
        "計算外です。",
        "私じゃ貴方みたいにはなれない。",
        "やられちゃいました。",
        "かっこいいですねえ。",
        "また腕を上げたみたいですね。"
    ];
    return comments[Math.floor(Math.random() * comments.length)];
}

// 負けたときのAIのコメント
function getLoseComment() {
    const comments = [
        "私の勝ちですね。",
        "どうやら私の作戦勝ちのようです。",
        "遊びは終わりです。",
        "心理戦では私の方が一枚上手でしたね。",
        "貴方の手は読めていましたよ。",
        "これは予定通りの勝利です。",
        "貴方の動きをしっかり分析させていただきました。",
        "この程度ですか。",
        "勝たせてもらいました。",
        "次も私が勝ちますよ？",
        "こっちですよ、ウスノロ。",
        "疎かですねえ！",
        "貴方じゃ私になれない。",
        "忖度は要りませんよ？",
        "勝者はこの私、ただ一人なのです。"
    ];
    return comments[Math.floor(Math.random() * comments.length)];
}
