class Student:
    grade = ''

    def __init__(self, line):
        name, gender, age, score, addr = line.strip().split(',')
        self.name = name
        self.gender = gender
        self.age = int(age)
        self.score = int(score)
        self.addr = addr
        self.protectedName = self.setProtectedName()
        self.grade = self.setGrade()
        self.engGender = self.setEngGender()
        self.ageBrief = str(self.setAgeBrief()) + '대'
        self.addrBrief = self.setAddrBrief()

    def setProtectedName(self):
        return self.name[0]+'**'

    def setGrade(self):
        plus = '+' if self.score % 10 >= 5 and self.score >= 60 or self.score == 100  else ''
        # 일의 자리가 5 이상
        # 100점은 무조건 + , F학점(60 이하)은 무조건 not +
        n = 10 - self.score // 10 -1
        g = 0 if n <= 0 else n
        return ['A', 'B', 'C', 'D', 'F'][g] + plus

    def setEngGender(self):
        return 'F' if self.gender == '여' else 'M'

    def setAgeBrief(self):
        return self.age // 10 * 10

    def setAddrBrief(self):
        gu = ''
        dong = ''
        for t in self.addr.split(' '):
            if t[-1] == '구':
                gu = t
            if t[-1] == '동':
                dong = t
        # return gu + ' ' + dong
        return "{} {}".format(gu, dong)