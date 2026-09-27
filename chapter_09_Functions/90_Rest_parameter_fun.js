function logResults(suiteName, ...results) {
    console.log(`suit: ${suiteName}`);
    console.log(`Result: ${results.join(",")}`);
}
logResults("Authsuite", "pass", "fail", "pass", "skip");

//suite:Auth suite
//Results:pass,fail,pass,skip