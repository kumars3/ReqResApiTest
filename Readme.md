# BDD API Automation Framework for ReqRes APIs
This repository contains a BDD-based API automation framework for testing APIs exposed at  https://reqres.in/. This framework is designed to support scalable, maintainable, and fast UI test automation using modern tools and best practices.

# Tech Stack
The framework is built using the following tools and technologies:
•	Node.js (v16 or above recommended)
•	TypeScript – Strongly typed language for better maintainability and code quality
•	Jest – Test runner and assertion library
•	Axios – HTTP client libraries for API interaction and validation
•	Cucumber – BDD framework using Gherkin syntax
•	HTML Reports – Human-readable execution reports Axios

# Key Features
•	✅ BDD-style test scenarios using Gherkin syntax
•	✅ Reusable and modular code structure
•	✅ Cucumber-style HTML test reporting

# Setup and Run Instructions
1.	Clone the repository:
     •	git clone <repository-url>
     •	Open Visual Studio Code and cd <project-folder>
2.	Install dependencies
     npm install

3.	Running Tests
    •	Run all tests
              npm run test
    •	Run a single specific testtest
               npm run test -- -t "<Scenario Name> “i.e. “npm test -- -t " Create a new user successfully”

# Test Artifacts
    After execution, the following artifacts are generated:
      •	test-results /html/ → Cucumber-style HTML reports

# Further Reading
    •	ReqRes: https://reqres.in/
    •	Jest: https://jestjs.io/
    •	Axios: https://axios-http.com/
    •	Cucumber: https://cucumber.io/


