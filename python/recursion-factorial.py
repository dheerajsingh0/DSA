def fact(n :int):
    if(n <=1):
        return 1
    return n*fact(n-1)
    


a=fact(5)
print(a)