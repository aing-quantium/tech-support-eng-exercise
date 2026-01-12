# Fix the Failing Test — Candidate Exercise

This project is a small exercise for candidates. The goal is to identify and fix a currently failing test. The codebase is intentionally simple and uses plain JavaScript and the [Mocha](https://mochajs.org/) test framework.

## 🧩 Objective

Your task is to:

1. Run the existing test suite.
2. Diagnose why one of the tests is failing.
3. Fix the implementation or the test so that all tests pass.
4. Ensure your solution is clean, correct, and does not break other behavior.

---

## 📁 Project Structure

```
Test2-FixThisTest/
  ├── src/
  │   └── myFunction.js        // The function being tested
  ├── test/
  │   └── myFunction.test.js   // The failing test lives here
  ├── package.json
  └── ...
```

### What is being tested?

* The test suite focuses on the function located at:

  **`/src/myFunction.js`**

* The expected behavior is defined in the test file:

  **`/test/myFunction.test.js`**

* The test describes:

  * Input values used against the function
  * Expected outputs
  * Assumptions about edge cases and return values

Your job is to understand those expectations and make sure the implementation matches them.

---

## 🛠 Requirements

To run this project locally, you need:

* **Node.js** (Recommended ≥ 14.x)
* **npm** (comes bundled with Node.js)

You can verify these with:

```sh
node -v
npm -v
```

---

## 🚀 Getting Started

### 1. Install Dependencies

Run:

```sh
npm install
```

This installs Mocha and any other dependencies.

### 2. Run the Tests

Run:

```sh
npm test
```

You should see the failing test along with Mocha output.

---

## 🧪 Expected Result of the Exercise

When you're done:

* All tests should pass (`npm test` exits with success).
* The fix should make sense based on the test expectations.
* No extra dependencies or frameworks should be introduced unless required.
* Keep the solution readable and minimal.

---

## 📦 Notes for Candidates

* You **may** modify either the test, the implementation, or both, as long as the end state is correct and justified.
* Assume that correctness and clarity matter.
* Show your reasoning either in the comments

