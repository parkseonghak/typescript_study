const waitingBtn: any = document.querySelector('.human_name');
const listBtn: any = document.querySelector('.human_list');
const joinBtn: any = document.querySelector('.human_join');
const customerList: Array<string> = []

waitingBtn.addEventListener('click', function(){
    customerList.push(prompt("이름을 입력하세요."));
})

listBtn.addEventListener('click', viewList);

function viewList(){
    alert('현재대기자는 ' + customerList + "이며 총 " + customerList.length + "명 입니다.");
}

joinBtn.addEventListener('click', humanJoin)

function humanJoin(){
    alert(customerList.shift() + "님 입장합니다.");
}