//if (ourStatusCode>=200 && ourStatusCode<300)
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!");
    }
    else {
        console.log("Issue in requwst");
    }
}
validateStatusCode(900);
validateStatusCode(200);

const validateStatusCode_Exp = function (status1) {
    if (status1 >= 200 && status1 <= 300) {
        console.log("Request is fine");
    }
}
validateStatusCode_Exp(300);

const validateStatusCode_Arrow = (status2) => {
    if (status2 >= 200 && status2 <= 300) {
        console.log("Request is fine!");
    }
}
validateStatusCode_Arrow(200);