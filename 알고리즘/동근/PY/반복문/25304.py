total = int(input())
T = int(input())
value=0
for _ in range(0,T):
    a,b = map(int, input().split())
    value += a*b

if total==value:
    print('Yes')
else:
    print('No')
