export const SIGN_IN = 'sign_in';
export const SIGN_UP = 'sign_up';
export const AUTO_SIGN_IN = 'auto_sign_in';
export const APPROVE = 'approve';
export const GET_ERRORS = 'get_error';
export const All_User = "All_User"


export class RegisterAction {
    static Register(data) {
        return {
            type: SIGN_UP,
            payload: data
        }
    }
    static Alluser(data) {
        return {
            type: All_User,
            payload: data
        }
    }

    static Approve(data) {
        return {
            type: APPROVE,
            payload: data
        }
    }
    static loginUser(data) {
        return {
            type: SIGN_IN,
            payload: data
        }
    }
    static error(data) {
        return {
            type: GET_ERRORS,
            payload: data
        }
    }
}