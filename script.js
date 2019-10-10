//컨텐츠 페이지의 #user 입력된 값이 변경 되었을 때
document.querySelector('#user').addEventListener('change',function(){
    var user=document.querySelector('#user').value;


    chrome.tabs.executeScript({
        code:'document.querySelector("body").innerText;'},function(result){
            //위의 코드가 실행된 후에 이 함수를 호출해주세요. 그 때 result에 담아주세요. 
    
           // alert(result[0]);
    
            //이 문서에서 body  태그 아래에 있는 모든 텍스를 가져온다. 그 결과를 bodyText라는 변수에 담는다.
    var bodyText = result[0];
    //bodyText의 모든 단어를 추출하고, 그 단어의 숫자를 센다. 그 결과를 bodyNum이라는 변수에 담는다.
    var bodyNum = bodyText.split(' ').length;
    //bodyText에서 자신이 알고 있는 단어(the)가 몇번 등장하는지를 알아본다. 그 결과를 myNum이라는 변수에 담는다.
    var myNum = bodyText.match(new RegExp('\\b('+user+')\\b', 'gi')).length;
    
    var per=myNum/bodyNum*100;
    per=per.toFixed(2);
    
    //id값이 result인 태그에 결과를 추가한다.
    document.querySelector('#result').innerText=
    myNum+'/'+bodyNum +'('+ (per)+'%)';
    
        });
    
});

// 컨텐츠 페이지에 몇 개의 단어가 등장하는지 계산해주세요 




//크롬 확장의 기능 중에 tabs과 관련된 기능 중에 컨텐츠 페이지를 대상으로 아래와 같은 코드를 실행한다 

