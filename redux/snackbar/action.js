
export const showSnackbar = (message, snackType) => {
    return dispatch => {
        dispatch({ type: "SNACKBAR_SUCCESS", message,snackType });
    };
};

export const clearSnackbar = () => {
    return dispatch => {
        dispatch({ type: "SNACKBAR_CLEAR" });
    };
};
