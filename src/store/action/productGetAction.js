export const GET_PRODUCCT = 'GET_ORDER';
export const SUCCESS = 'SUCCESS';
export const FAILED = 'FAILED';
export const CHANGESTATUS = 'CHANGESTATUS';





export class ProductGet{
  
    static GetProduct(data){
        return {
            type: GET_PRODUCCT,
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
}
