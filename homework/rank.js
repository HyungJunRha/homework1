function displayVoList(){
    const voListTable = document.querySelector("#voListTable");
    const tbody = voListTable.children[1];
    const voList = JSON.parse(localStorage.getItem("friendStatus"));

    let str = "";
    for(let i = 0; i < voList.length; i++){
        str += `
            <tr onclick="displayVoDetail(${i});">
                <td>${i}</td>
                <td>${voList[i].name}</td>
                <td>${voList[i].company}</td>
                <td>${voList[i].status}</td>
                <td>${voList[i].salary}</td>
                <td> <button id = "delete" onclick="deleteTodo(${i}, event);">삭제하기</button> </td>
            </tr>
        `;
    }

    tbody.innerHTML = str;
}

displayVoList();

function deleteTodo(no, event){
    event.stopPropagation();

    const result = confirm('정말 삭제하시겠습니다?');
    if(result){
        const voList = JSON.parse(localStorage.getItem("friendStatus"));
        voList.splice(no, 1);
    
        localStorage.setItem("friendStatus", JSON.stringify(voList));

        alert('삭제 완료 !');
        displayVoList();
    }else{
        return;
    }
}