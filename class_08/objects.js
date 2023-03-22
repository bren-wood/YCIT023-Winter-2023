o = {};
o["passed"] = false;

failures = [];
failures.push("A");
failures.push("B");

o["failures"] = failures;

console.log(o);

x = {
    passed: false,
    failures: ["A", "B"]
};

