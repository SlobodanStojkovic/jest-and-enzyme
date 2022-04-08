/* TDD - Test-Driven Development

TDD measn writing tests before we write code. We write a shell function, then we write tests, and run tests so that they fail. After that we write code that passes tests. TDD makes us more efficient.

The code is better organized, more testable since we dont have to rewrite code for tests and we will have fewer bugs. 

JEST

Jest Watch mode watches for changes and then reruns the code tests based on any changes to the code.

ENZYME creates virtual DOM for testing. This allows testing without a browser.

Enzyme supports isolated testing - e.g. shallow rendering while React Testing Library strongly prefers functional testing - Interacting as a user would.

Enzyme is a more traditional testing style, tests are tightly coupled with code, unit tests are very isolated.

Shallow test method tests just parent component and for child components it uses placeholders and doesnt test them.

UNIT TESTS test one piece of code (usually one function).

INTEGRATION TESTS test how multiple units work together.

ACCEPTANCE / End-to-end (E2E) Tests use actual browser and connections to server.

Functional tests can be any of the above, they focuss on user flow. 

CODE-BASED tests == testing implementation.
FUNCTIONAL tests == testing behavior.
*/