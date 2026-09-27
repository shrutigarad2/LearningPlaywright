function runTest(name, status, duration) {
    return `${name}: ${status}(${duration}ms)`;
}
//arguments
console.log(runTest("login", "pass", 320));