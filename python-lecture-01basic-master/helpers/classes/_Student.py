class Student:
    def __init__ (self, name, score):
        self.name = name
        self.score = score

    def __str__ (self):
        return "{}:{}".format(self.name, self.score)