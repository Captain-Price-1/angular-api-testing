const { Observable } = Rx;

// really as a utility operator , just for adding console logs.
const { tap } = RxOperators;

const observable = new Observable((subscriber) => {
  // Throw the value 1 into our pipeline
  subscriber.next(1);

  // Marks the end of the observable as complete, no more values will come out
  subscriber.complete();

  // emit an error , no more values will come out
  subscriber.error(new Error("Whatever went wrong"));
}).pipe(tap((value) => console.log("From tap", value)));

observable.subscribe(
  // here we really don't care about the error or complete
  (value) => console.log(`Next value:`, value)
);

//second observable

observable.subscribe(() => {
  console.log("From second subscribe", value);
});

new Observable(() => {});
