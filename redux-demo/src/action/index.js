export const INC_NUM = "INC_NUM";
export const DEC_NUM = "DEC_NUM";

export function increment(num){
    const action = {
        type: INC_NUM,
        num: num
    };
    return action;
}

export function decrement(num){
    const action = {
        type: DEC_NUM,
        num: num
    };
    return action;
}