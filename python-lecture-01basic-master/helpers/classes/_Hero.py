class Hero:
    def __init__(self, name):
        self.name = name

    def fly(self):
        return 'fly high~~~~~'

    def takeCape():
        return 'pulp~~'

    @staticmethod
    def takeSpan():
        return 'default fashion'

class DcHero(Hero):
    def getMotherCompany(self):
        return 'WB'

    def fly(self):
        return super().fly() + "more~~~"

class MarvelHero(Hero):
    def getMotherCompany(self):
        return 'Disney'
    
    @property
    def color(self):
        if(self.name == 'IronMan'):
            return 'red'
        else :
            return 'blue'