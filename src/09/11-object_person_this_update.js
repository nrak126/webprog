const person = {
  name: "アリス",
  greet: function () {
    console.log(`こんにちは、私は${this.name}です。`);
  },
};

person.name = "Bob";
person.greet();
