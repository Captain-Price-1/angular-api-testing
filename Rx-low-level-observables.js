const { Observable } = Rx;

const observable = new Observable((subscriber) => {
  // Throw the value 1 into our pipeline
  subscriber.next(1);

  // Marks the end of the observable as complete, no more values will come out
  subscriber.complete();

  // emit an error , no more values will come out
  subscriber.error(new Error("Whatever went wrong"));
});

observable.subscribe({
  next(value) {
    console.log("Got a value", value);
  },

  complete() {
    console.log("observable is complete");
  },

  error(err) {
    console.log("BAD Thing ", err.message);
  },
});
