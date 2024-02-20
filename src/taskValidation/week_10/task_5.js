import {resultTextErrValid, resultTextValid} from "../valid.js";
import renderEvalResult from "../renderEvalResult.js";

function  task_5 (value){
    try {
        const result = renderEvalResult(value);
        if (result === 24)   return {
            valid: true,
            validText: resultTextValid,
            result: result
        }
        return {valid: false, validText: resultTextErrValid, result: result};
    } catch (e) {
        console.log(e instanceof SyntaxError);
    }
    return ({valid: false, validText: 'ошибка синтаксиса', result: value});
}
export default task_5