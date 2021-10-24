function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const str1 = randomIntFromInterval(1, 223);
let networkValue = '';

if (str1 >= 1 && str1 < 127) {
    networkValue = 'A';
    console.log('Given Network ID : ' + str1 + '.0.0.0');
    document.getElementById("network-ip").innerText = "Given Network ID : " + str1 + ".0.0.0";
    console.log('A');
}
else if (str1 > 127 && str1 < 192) {
    networkValue = 'B';
    var str2 = Math.floor(Math.random() * 255);
    const str22=parseInt(str2);
    console.log('Given Network ID : ' + str1 + '.' + str2 + '.0.0');
    document.getElementById("network-ip").innerText = 'Given Network ID : ' + str1 + '.' + str2 + '.0.0';
    console.log('B');
}
else {
    networkValue = 'C';
    var str2 = Math.floor(Math.random() * 255);
    var str3 = Math.floor(Math.random() * 255);
    console.log('Given Network ID : ' + str1 + '.' + str2 + '.' + str3 + '.0');
    document.getElementById("network-ip").innerText = 'Given Network ID : ' + str1 + '.' + str2 + '.' + str3 + '.0';
    console.log('C');
}

function checkNetworkValue() {
    let selectedNetworkValue = document.getElementById('input1').value;
    const ipNetworkValue1 = document.getElementById('input2').value;
    var ipNetworkValue2 = document.getElementById('input3').value;
    var ipNetworkValue3 = document.getElementById('input4').value;
    var ipNetworkValue4 = document.getElementById('input5').value;
  //  document.getElementById('print').innerText = 'Entered value: ' +ipNetworkValue2;

    let text='incorrect';
    
    
    let output = 'incorrect';
    if (networkValue === selectedNetworkValue) {
        output = 'correct';
    }
    document.getElementById('result').innerText = 'Entered value: ' +output;

    document.getElementById('output').innerText = 'Correct output: '+networkValue;

    if (output === 'correct') {
        document.getElementById('result').style.color = '#008000';
    } else {
        document.getElementById('result').style.color = '#FF0000';
    }
   
    if(str1 >=0 && str1 < 128)
    {
        if(str1==ipNetworkValue1)
        {
            text='correct';
        }
    }
    else if(str1 >=128 && str1 <192)
    {
      if(str2==ipNetworkValue2 && str1==ipNetworkValue1)
      {
          text='correct';
      }  
    }
    else
    {
        if(str2==ipNetworkValue2 && str1==ipNetworkValue1 && str3==ipNetworkValue3)
      {  
          text='correct';
      }
    }
    document.getElementById('print').innerText = 'IP address is: ' +text;
    }
