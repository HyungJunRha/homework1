const categoryText = document.querySelector('#categoryText');

function clickInsert(a){
    const text = a.querySelector('div').innerText;
    console.log(text);
    
    categoryText.innerText = text;

}

const downLoad = document.querySelector("#downLoad");
downLoad.addEventListener('click', f01);

function f01(){
    const result = confirm('앱을 다운로드 하시겠습니다 ?')
    if(result){
        alert('다운로드 완료 !')
    }else{
        alert('다시 한번 고민해보세요 ~')
    }
}

const neighborhood = document.querySelector("#neighborhood");
neighborhood.addEventListener('click', function(evt){
    const currentPick = neighborhood.querySelector('.pick');
    // console.log(currentPick);
    if(currentPick !== null){
        currentPick.classList.remove('pick');
    }
    
    evt.target.classList.add('pick');
});


const selectCategory1 = document.querySelector('#selectCategory1');
selectCategory1.addEventListener('click', function(evt){
    const currentPick = selectCategory1.querySelector('.pickNeighbor');
    if(currentPick !== null){
        currentPick.classList.remove('pickNeighbor');
    }

    evt.target.classList.add('pickNeighbor')
})