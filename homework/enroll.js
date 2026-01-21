function insert(){
    const result = confirm('제출할텨?');
    if(!result){
        return;
    }
    const name = document.querySelector("input[name=name]").value;
    const company = document.querySelector("input[name=company]").value;
    const status = document.querySelector("select[name=status]").value;
    const salary = document.querySelector("input[name=salary]").value;

    if(salary < 1000){
    alert('올바른 연봉을 적어주세요. 단위는 만원입니다.')
    return;
    }

    const vo = {name, company, status, salary};
    let arr = JSON.parse(localStorage.getItem("friendStatus"));
    if(!arr){
        arr=[];
    }
    arr.push(vo);
    localStorage.setItem("friendStatus", JSON.stringify(arr));
    let condition;
    if(status === `none`){
        condition = `홈프로텍터`;
    }else if(status === `contracted`){
        condition = `계약직`;
    }else if(status === `full-time`){
        condition = `정규직`;
    }else {
        condition = `알바생`;
    }

    document.querySelector("#data").innerText = `
    이름 : ${vo.name} / 회사 : ${vo.company} / 계약상태 : ${condition} / 연봉(만원) : ${salary}
    `;
    alert('등록 완료 !');
}
