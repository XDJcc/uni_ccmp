// 数据处理js

// 数据结果进行下一步的验证，验证所有题目是否满足要求
export function handleDataNext(questionlistsData) {
    //结果的题型判断是否符合条件
    //判断数据是否符合所有条件isOk==true，符合
    let isOk = true;
    for (let i = 0; i < questionlistsData.length; i++) {
        // let { questionTypeId, required, value } = questionlistsData[i];
        // let checkVal = requiredValue(required, value, questionTypeId);
        // if (!checkVal) {
        //     isOk = false;
        //     questionlistsData[i].errTxt = "请完成该题"
        //     jumpQs(i);
        //     break;
        // }
        // if (questionTypeId == 1) {
        //     //1、单选
        //     // 1、判断是否必选为空
        //     // let a = requiredValue(required, value, questionTypeId);
        // } else if (questionTypeId == 2) {
        //     //2、多选,最少值
        //     let leastOpNum=questionlistsData[i].leastOpNum;
        //     if(leastOpNum&&value.length<leastOpNum){
        //         isOk = false;
        //         questionlistsData[i].errTxt = "请至少选择"+leastOpNum+"个选项";
        //         jumpQs(i);
        //         break;
        //     }
        // }else if (questionTypeId == 5) {
        //     let minlength=questionlistsData[i].minlength;
        //     let maxlength=questionlistsData[i].maxlength;
        //     let validate=questionlistsData[i].validate;
        //     let str = "";
        //     if (!minlength && maxlength&&maxlength<value.length) {
        //         isOk = false;
        //         str += "最多输入" + maxlength + "个字";
        //     } else if (minlength>value.length && !maxlength) {
        //         isOk = false;
        //         str += "最少输入" + minlength + "个字";
        //     } else if (minlength && maxlength&&(minlength>value.length||maxlength<value.length)) {
        //         isOk = false;
        //         str += "请输入" + minlength + "-" + maxlength + "个字";
        //     }
        //     //再判断数据格式是否正确
        //     // if(isOk){
        //     //     if(validate=="number"){
                    
        //     //     }
        //     // }

        //     questionlistsData[i].errTxt = str;
        //     jumpQs(i);
        //     break;
        // }
        let data=checkSingleQs(questionlistsData[i]);

        if(!data.checkOk){
            questionlistsData[i].errTxt = data.errTxt;
            jumpQs(i);
            break;
        }
    }
    return { isOk, questionlistsData }
}
export function checkSingleQs(singleData){
    // 验证单个的题目
    let checkOk=true;
    let errTxt="";
    let { questionTypeId, mastAnswer, answer } = singleData;

    /* 判断answer长度有没有超过 */
    let answerParamMaxLen=20000;
    if(answer&&answer.length>=answerParamMaxLen){
        checkOk = false;
            errTxt = "设置的答案过长，请重新填写或联系管理员"
            return {checkOk,errTxt}
    }

        let checkVal = requiredValue(mastAnswer, answer, questionTypeId);
        if (!checkVal) {
            checkOk = false;
            errTxt = "请完成该题"
            return {checkOk,errTxt}
        }
        if (questionTypeId == 1) {
            //1、单选
            // 1、判断是否必选为空
            // let a = requiredValue(required, value, questionTypeId);
        } else if (questionTypeId == 2) {
            //2、多选,最少值
            let leastOpNum=singleData.leastOpNum;
            if(leastOpNum&&answer.length<leastOpNum){
                checkOk = false;
                errTxt = "请至少选择"+leastOpNum+"个选项";
                // jumpQs(i);
                // break;
            }
        }else if (questionTypeId == 5) {
            // let minlength=questionlistsData[i].minlength;
            // let maxlength=questionlistsData[i].maxlength;
            // let validate=questionlistsData[i].validate;
            // let str = "";
            // if (!minlength && maxlength&&maxlength<answer.length) {
            //     checkOk = false;
            //     str += "最多输入" + maxlength + "个字";
            // } else if (minlength>answer.length && !maxlength) {
            //     checkOk = false;
            //     str += "最少输入" + minlength + "个字";
            // } else if (minlength && maxlength&&(minlength>answer.length||maxlength<answer.length)) {
            //     checkOk = false;
            //     str += "请输入" + minlength + "-" + maxlength + "个字";
            // }
            //再判断数据格式是否正确
            // if(isOk){
            //     if(validate=="number"){
                    
            //     }
            // }

            // errTxt = str;
            // jumpQs(i);
            // break;
        }else if (questionTypeId == 7) {
           /* 判断是否是必填 */
           if(mastAnswer==1){
               if(answer&&answer.length>0){
                let answerArr=JSON.parse(answer);
                for( let qId in answerArr){
                    if(answerArr[qId]==""){
                        checkOk = false;
                        errTxt = "请完成该题"
                        return {checkOk,errTxt}
                    }
                }
               }else{
                checkOk = false;
                errTxt = "请完成该题"
                return {checkOk,errTxt}
               }
                

           }
        }
        return {checkOk,errTxt}
}
function requiredValue(mastAnswer, answer, questionTypeId) {
    //value结果是单选或者是数字集合
    let stringOrNumVal = [1,5];
    //结果是对象的集合，如多选
    let arrVal = [2];
    let flag = true;
    if (stringOrNumVal.indexOf(questionTypeId) > -1) {
        if ((mastAnswer==1) && (answer === null||answer === "")) {
            flag = false
        };
    } else if (arrVal.indexOf(questionTypeId) > -1) {
        if ((mastAnswer==1) && (answer&&answer.length == 0 || answer === null)) {
            flag = false
        };
    };
    return flag;
}
function jumpQs(i){
    let idName = "#items" + i;
    document.querySelector(idName).scrollIntoView({
        behavior: "smooth",  // 平滑过渡
        block: "start"  // 上边框与视窗顶部平齐。默认值
    });
}
