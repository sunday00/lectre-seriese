def getRandNumbers (min = 0, max = 100, quantity = 10, jump = 1):
    import random
    return list( random.randrange(min, max, jump) for i in range(quantity) )