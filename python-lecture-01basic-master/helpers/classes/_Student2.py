class Student:
    def __init__(self, name, gender, age, score):
        self.name = name
        self.gender = gender
        self.age = age
        self.score = score
    
    def __str__(self):
        return "{}:{}".format(self.name[:5] + '**', self.score)

print(__name__) # return if this file is entry or module.
if __name__ == "__main__":
    print("Do not use this as Entry main file when production mode")
    exit()