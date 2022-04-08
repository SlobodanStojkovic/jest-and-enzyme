import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * returns {ShallowWrapper}
 */

const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(
    wrapper,
    "component-app"
  ); /* = wrapper.find("[data-test='component-app']"); */
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter displays starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text(); //.text always return string
  expect(count).toBe("0");
});

test("clicking button increments counter display", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");

  button.simulate("click");

  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});



describe("decrement button", () => {
  test("renders decrement button", () => {
    const wrapper = setup();
    const decrementButton = findByTestAttr(wrapper, "decrement-button");
    expect(decrementButton.length).toBe(1);
  });

  test("clicking button decrements counter display when state is greater than 0", () => {
    const wrapper = setup();
    const incrementButton = findByTestAttr(wrapper, "increment-button");
    incrementButton.simulate("click");

    const decrementButton = findByTestAttr(wrapper, "decrement-button");
    decrementButton.simulate("click");

    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");
  });
});


describe("error when counter goes below 0", () => {
  test("error does not show when not needed", () => {
    // I plan to implement this by using a "hidden" class for the error div
    // I plan to use the data-test value 'error-message' for the error div
    const wrapper = setup();
    const errorDiv = findByTestAttr(wrapper, "error-message");

    // using enzyme's ".hasClass()" method
    // http://airbnb.io/enzyme/docs/api/ShallowWrapper/hasClass.html
    const errorHasHiddenClass = errorDiv.hasClass("hidden");
    expect(errorHasHiddenClass).toBe(true);
  });

  describe("counter is 0 and decrement is clicked", () => {
    // using a describe here so I can use a "beforeEach" for shared setup

    // scoping wrapper to the describe, so it can be used in beforeEach and the tests
    let wrapper;
    beforeEach(() => {
      // no need to set counter value here; default value of 0 is good
      wrapper = setup();

      // find button and click
      const button = findByTestAttr(wrapper, "decrement-button");
      button.simulate("click");
    });
    test("error shows", () => {
      // check the class of the error message
      const errorDiv = findByTestAttr(wrapper, "error-message");
      const errorHasHiddenClass = errorDiv.hasClass("hidden");
      expect(errorHasHiddenClass).toBe(false);
    });
    test("counter still displays 0", () => {
      const count = findByTestAttr(wrapper, "count").text();
      expect(count).toBe("0");
    });
    test("clicking increment clears the error", () => {
      // find and click the increment button
      const incButton = findByTestAttr(wrapper, "increment-button");
      incButton.simulate("click");

      // check the class of the error message
      const errorDiv = findByTestAttr(wrapper, "error-message");
      const errorHasHiddenClass = errorDiv.hasClass("hidden");
      expect(errorHasHiddenClass).toBe(true);
    });
  });
});