const dogImage = document.getElementById('dog-image');
const counterSpan = document.getElementById('counter');
const messageP = document.getElementById('message');

const barks = [
    document.getElementById('bark1'),
    document.getElementById('bark2'),
    document.getElementById('bark3'),
    document.getElementById('bark4')
];
const diggingSound = document.getElementById('digging');

let count = 0;

dogImage.addEventListener('click', () => {
    count++;
    counterSpan.textContent = count;

    // --- 鳴き声とアクションの処理 ---
    // 10%の確率で突然穴を掘り出す
    if (Math.random() < 0.1) {
        diggingSound.currentTime = 0;
        diggingSound.play();
        dogImage.src = "inu_ashi_yowaru.png"; // 必死に掘っている様子として使用
        messageP.textContent = "ガシガシガシ！(穴掘りに夢中！)";
    } else {
        const randomBark = barks[Math.floor(Math.random() * barks.length)];
        randomBark.currentTime = 0;
        randomBark.play();
        
    // --- script.js の該当部分を書き換え ---

    // --- 進化（なつき度）による画像切り替え ---
    if (count >= 100) {
        dogImage.src = "pet_darui_dog.png"; // 100回：だらける
        messageP.textContent = "もう、一生離さないワン！（大好き！）";
    } else if (count >= 50) {
        dogImage.src = "sleep_animal_dog.png"; // 50回：眠る（追加したイラスト！）
        messageP.textContent = "安心するワン...（ウトウト）";
    } else if (count >= 20) {
        dogImage.src = "pet_omocha_inu.png"; // 20回：おもちゃ
        messageP.textContent = "もっと！もっと遊ぶワン！";
    } else {
        dogImage.src = "dog_akitainu.png"; // 初期：秋田犬
        messageP.textContent = "もっともっと！ワンワン！";
    }
    }

    // 犬らしいプルプルした動きのアニメーション
    dogImage.style.transform = "rotate(5deg) scale(1.1)";
    setTimeout(() => {
        dogImage.style.transform = "rotate(-5deg) scale(1)";
    }, 100);
});