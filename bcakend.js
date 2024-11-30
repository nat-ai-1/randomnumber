let usedNumbers = [];

function generateRandom() {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);

    if (isNaN(min) || isNaN(max) || min > max) {
        document.getElementById("result").innerText = "กรุณาใส่ช่วงตัวเลขที่ถูกต้อง";
        return;
    }


    if (usedNumbers.length >= max - min + 1) {
        document.getElementById("result").innerText = "ตัวเลขทั้งหมดออกครบแล้ว!";
        return;
    }

    let randomNum;
    do {
        randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (usedNumbers.includes(randomNum));
    usedNumbers.push(randomNum);

    const resultElement = document.getElementById("result");
    const historyList = document.getElementById("history-list");


    resultElement.classList.remove("animate");
    void resultElement.offsetWidth;
    resultElement.innerText = `เลขที่ออก: ${randomNum}`;
    resultElement.classList.add("animate");

    
    const listItem = document.createElement("li");
    listItem.textContent = randomNum;
    historyList.appendChild(listItem);
}


function reset() {
    usedNumbers = [];
    document.getElementById("result").innerText = "เลขที่ได้จะแสดงตรงนะจ๊ะ";
    document.getElementById("history-list").innerHTML = "";
    document.getElementById("min").value = "";
    document.getElementById("max").value = ""; 
}
