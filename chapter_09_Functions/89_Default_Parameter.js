function retry(testname, maxRetries = 3, delay = 1000) {
    console.log(`Retrying ${testname} up to ${maxRetries} time,${delay}ms a part`);
}
retry("login");
retry("checkout", 5);
retry("APT test", 2, 500);