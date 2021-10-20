#prime number
# n=int(input("enter the size of the number"));
# for i in range(0,n-1):
#     a=int(input())
#     if(a < 3 or a > 99):
#         print("invalid")
#     else:
#         if(a%2==0):
#             print("prime number")
#         else:
#             print("not prime number")

# print("this is different tech.. of program compair to other program ")


n=int(input("enter the size of the number"));
a=[]
print("enter the number from 2 to 99");

for i in range(0,n-1):
    b=int(input())
    if (b<2 or b> 99):
        print("enter the number from 2 - 99")
    else:
        a.append(b)

print("The number are ",a)
for i in range(0,len(a)):
   if(a[i]%2==0):
       print(a[i],"It's prime number at index",i)

print("this is different tech.. of program compair to other program ")