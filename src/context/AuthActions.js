export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
})
export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
})
export const LoginFailure = (userCredentials) => ({
    type: "LOGIN_FAILURE",
    payload: error
})
export const FOLLOW = (userId) => ({
    type: "FOLLOW",
    payload: userId,
})
export const UNFOLLOW = (userId) => ({
    type: "FOLLOW",
    payload: userId,
})