export const GET_ORDER = 'GET_ORDER';
export const SUCCESS = 'SUCCESS';
export const FAILED = 'FAILED';
export const CHANGESTATUS = 'CHANGESTATUS';
export const ORDER_CREATE = 'ORDER_CREATE';
export const DELETEONE = 'DELETEONE';
export class OrderAction{
  
    static GetOrder(data){
        return {
            type: SUCCESS,
            payload:data
        }
    }
    static CreateOrder(data){
        return {
            type: ORDER_CREATE,
            payload:data
        }
    }
    static Error(data){
        return {
            type: FAILED,
            payload: data
        }
    }
    static Status(data){
        return {
            type: CHANGESTATUS,
            payload:data
        }
    }
    static DeleteSingle(data){
        return {
            type: DELETEONE,
            payload:data
        }
    }
}
