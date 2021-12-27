function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const str1 = randomIntFromInterval(1, 223);
//var str2 = Math.floor(Math.random() * 255);
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
    let ipNetworkValue1 = document.getElementById('ans1').value;
    let ipNetworkValue2 = document.getElementById('ans2').value;
    let ipNetworkValue3 = document.getElementById('ans3').value;
    let ipNetworkValue4 = document.getElementById('ans4').value;
    let text='';
    let count=0;
    let count1=1;
    let output = 'incorrect';

    if (networkValue === selectedNetworkValue) 
    {
        output = 'correct';
    }
    
    document.getElementById('result').innerText = 'Correct output: '+networkValue;

    document.getElementById('print').innerText = 'Entered value: ' +output;

    if (output === 'correct') {
        document.getElementById('print').style.color = '#008000';
    } else {
        document.getElementById('print').style.color = '#FF0000';
    }
   
            if(networkValue == 'A' && str1 == ipNetworkValue1 )
            {   debugger;   
                text='correct';
                document.getElementById('result2').innerText = "Network range :" + str1 +'.0.0.0 - '+ str1 + '255.255.255'; 
            }
            else if(networkValue == 'B' && str1 == ipNetworkValue1 && str2 == ipNetworkValue2 )
            {  debugger;
                text='correct';   
                document.getElementById('result2').innerText = "Network range :" + str1 +'.'+ str2 +'.0.0 - '+ str1 +'.'+ str2+ '.255.255'; 

            }
            else if(networkValue == 'C' && str1 == ipNetworkValue1 && str2 == ipNetworkValue2 && str3 == ipNetworkValue3 )
            {
                debugger;
                text='correct';   
                document.getElementById('result2').innerText = "Network range :" + str1 +'.'+ str2 +'.'+str3+'.0 - '+ str1 +'.'+ str2+'.'+ str3 +'.255'; 
            }
            else{
                if(networkValue == 'A')
                {
                    document.getElementById('result2').innerText = "Network range :" + str1 +'.0.0.0 - '+ str1 + '.255.255.255'; 
                }else if(networkValue == 'B')
                {
                    document.getElementById('result2').innerText = "Network range :" + str1 +'.'+ str2 +'.0.0 - '+ str1 +'.'+ str2+ '.255.255'; 
                }else if(networkValue == 'C')
                {
                    document.getElementById('result2').innerText = "Network range :" + str1 +'.'+ str2 +'.'+str3+'.0 - '+ str1 +'.'+ str2+'.'+ str3 +'.255'; 
                }
                debugger;
                text='incorrect';
            }        

    document.getElementById('print2').innerText = 'Network value: ' +text;
    

    if (text === 'correct') {
        document.getElementById('print2').style.color = '#008000';
    } else {
        document.getElementById('print2').style.color = '#FF0000';
    }

        }