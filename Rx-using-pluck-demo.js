const { fromEvent } = Rx;
const { map } = RxOperators;

const input = document.createElement("input");
const container = document.querySelector(".container");
container.appendChild(input);

const observable = fromEvent(input, "input").pipe(
  pluck("target", "value"),
  map((value) => parseInt(value)),
  map((value) => {
    if (isNaN(value)) {
      throw new Error("Enter a number");
    }
    return value;
  })
);

observable.subscribe({
  next(value) {
    //value when the observable completes without any errors
    console.log(`Your value is ${value}`);
  },
  error(err) {
    // anything wrong occus inside the observable goes into error here
    console.error("Some Error Occured", err.message);
  },
});
