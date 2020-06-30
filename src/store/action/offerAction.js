export const SELECTED = 'SELECTED';
export const DELETE = 'DELETE';
export const AUTO_SIGN_IN = 'auto_sign_in';
export const APPROVE = 'approve';
export const GET_ERRORS = 'get_error';

export class OfferAction{
     static selected(data){
         return {
             type: SELECTED,
             payload:data
         }
     }
     static delete(data){
        return {
            type: DELETE,
            payload:data
        }
    }
    static loginUser(data){
        return {
            type: SIGN_IN,
            payload:data
        }
    }
    static error(data){
        return {
            type: GET_ERRORS,
            payload: data
        }
    }
}
