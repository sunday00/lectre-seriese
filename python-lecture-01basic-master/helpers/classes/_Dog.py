class Dog:
    name = ''
    def __init__(self, name):
        self.name = name
    
    def bark(self):
        print('bow wow')

    def get_name(self):
        """
        return dog's name
        """
        return self.name
    
    def set_status(self, status):
        self.status = status

    def get_status(self):
        return self.status

    def __cap1(self):
        print('cap1')

    def call__cap1(self):
        self.__cap1()

    @staticmethod
    def not_need_to_instance():
        '''
        static method test
        '''
        print('static!!')

    @staticmethod
    def not_need_to_instance2(arg):
        '''
        static method test
        '''
        print(arg)

    def __del__(self):
        print('the instance is gone')

class Jindo(Dog):
    home = 'Jindo'
    def __cap2(self):
        print('cap2')
    
    def call__cap1(self):
        self.__cap1()
    
    def call__cap2(self):
        self.__cap2()

# __name__ : system inner keyword.
# __name : private method. even not heritable.
