function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var str1 = randomIntFromInterval(1, 223);
var str2 = randomIntFromInterval(0, 255);
var str3 = randomIntFromInterval(0, 255);
var str4 = randomIntFromInterval(0, 255);
var subnetarr = "";
var arcidr=[0,128,192,224,240,248,252,254];
if(str1<=127)
{
    
    var subnet=randomIntFromInterval(8,15);
    var s1=subnet%8;
    var s2=arcidr[s1];
    var s3="255."+s2+".0.0";
    
}
else if(str1>127 && str1<192)
{
    var subnet=randomIntFromInterval(16,23);
    var s1=subnet%8;
    var s2=arcidr[s1];
    var s3="255.255."+s2+".0";
}
else
{
    var subnet=randomIntFromInterval(24,31);
    var s1=subnet%8;
    var s2=arcidr[s1];
    var s3="255.255.255."+s2;
}

var z=str1.toString();
var z1=str2.toString();
var z2=str3.toString();
var z3=str4.toString();

var ip=z+"."+z1+"."+z2+"."+z3;

document.getElementById('network-ip').innerText='Given Network ID : '+ip;

console.log(ip);
console.log(subnet);
console.log(s3);
document.getElementById('cidr').innerText='Given CIDR Value : '+subnet;

//var str2 = Math.floor(Math.random() * 255);

var copy,a,b,c,copy2,cidr,d,e,x;
let count=0,count1=0;
var binary=[0,128,64,32,16,8,4,3,2,1,0];

var arr=[];




x=subnet;
let host=32-subnet;
host=Math.pow(2,host);
console.log("host "+host);
let i=0;
while(i<16)
{
        a=ip[i];
        i++;
        if(ip[i]!='.'){
        b=ip[i];

        i++;}
        if(ip[i]!='.'){
        c=ip[i];

        i++;}
        copy1=a+b;
        copy2=parseInt(copy1+c);
        arr[count]=copy2;
        count=count+1;
        i++;
        a="";
        b="";
        c="";
}

/*for(let i=0;i<count-1;i++)
{
    console.log(arr[i]);
}*/
if(x<=8)
{
    let sub1=x%8;
    let sub2=binary[sub1];
    let sub3=256/sub2;
    let s=0;
    let e=255;
     console.log(sub1+"."+sub2+"."+sub3)
    //cout<<"\nNetwork ID :"<<arr[0]<<".0.0.0";
    //cout<<"\nBroad Cast ID :"<<arr[0]<<".255.255.255\n";
    for(let i=0;i<sub3;i++)
    {
        console.log(s+".")
  //  console.log("Usable Range :"+s+".0.0.0-"+sub2-1+".255.255.255");
    
    if(arr[0]>=s && arr[0]<=sub2)
    {
       d=s;
       e=sub2;
    }
    s=sub2;
    sub2=sub2+binary[sub1];
    }
     console.log("Usable Range :"+s+".0.0.0-"+sub2-1+".255.255.255");
   
}

else if(x>=8 && x<16)
{
    var sub1=x%8;
    var sub2=binary[sub1];
    var sub3=256/sub2;
    var s=0;
    e=255;
    var aa=arr[1];
    

    for(let i=0;i<sub3;i++)
    {
        let a1=sub2-1;
       
        subnetarr += "Range :"+arr[0]+"."+ s +".0.0 - "+arr[0]+"."+a1+".255.255" + "\n-------------------------------------------\n";
    if(aa>=s && aa<=a1)
    {
       d=s;
       e=sub2;
    }
    s=sub2;
    sub2=sub2+binary[sub1];
    }
 


}

else if(x>=16 && x<24)
{
    var sub1=x%8;
    var sub2=binary[sub1];
    var sub3=256/sub2;
    var s=0;
    var e=255;
    var aa=arr[2];
  
    for(let i=0;i<sub3;i++)
    {
        let a1=sub2-1;
        subnetarr +="Range :"+arr[0]+"."+arr[1]+"."+s+".0 - "+arr[0]+"."+arr[1]+"."+a1+".255"+"\n-------------------------------------------\n";
    if(aa>32 && aa<41)
    {
       d=32;
       e=41;
    }
    s=sub2;
    sub2=sub2+binary[sub1];
    }
    console.log(d);
}
else
{
    var sub1=x%8;
    var sub2=binary[sub1];
    var sub3=256/sub2;
    var s=0;
    var e=255;
    var aa=arr[3];
 
    for(let i=0;i<sub3;i++)
    {
        let a1=sub2-1;
        subnetarr +="Range :"+arr[0]+"."+arr[1]+"."+arr[2]+"."+s+" - "+arr[0]+"."+arr[1]+"."+arr[2]+"."+a1+"\n-----------------------------------------\n";
  
    
    if(aa>=s && aa<=sub2)
    {
       d=s;
       e=sub2;
    }
    s=sub2;
    sub2=sub2+binary[sub1];
    }
     
}
if(s3===s4)
{
    console.log("done");
}

function checkNetworkValue6() {
    let mask = document.getElementById('ans1').value;
    let host1 = document.getElementById('ans2').value;
    let tsub = document.getElementById('ans3').value;
     if(mask==s3)
     {
        document.getElementById('subans').innerText='Entered Subnet Mask is Correct';  
        document.getElementById('subans').style.color = '#008000'; 
     }
     else{
        document.getElementById('subans').innerText='Sorry,The correct Subnet mask is : '+s3; 
        document.getElementById('subans').style.color = '#FF0000';
     }

     if(host1==host)
     {
        document.getElementById('subans1').innerText='Entered Value is Correct';  
        document.getElementById('subans1').style.color = '#008000'; 
     }
     else{
        document.getElementById('subans1').innerText='Sorry,The correct host are : '+host; 
        document.getElementById('subans1').style.color = '#FF0000';
     }

     if(tsub==sub3)
     {
        document.getElementById('subans2').innerText='Entered Value is Correct';  
        document.getElementById('subans2').style.color = '#008000'; 
     }
     else{
        document.getElementById('subans2').innerText='Sorry,The correct value is : '+sub3; 
        document.getElementById('subans2').style.color = '#FF0000';
     }

     document.getElementById('result').innerText=subnetarr; 



}
