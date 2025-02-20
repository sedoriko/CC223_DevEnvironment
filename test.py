class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display(self):
        print(f"Name: {self.name}\tAge: {self.age}")

if __name__ == "__main__":

    person1 = Person ("John Cedrick", 20)

    person1.display()