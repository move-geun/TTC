lst = list(map(int, input().split()))
chess = [1,1,2,2,2,8]
aws = list()
for i in range(6):
    aws.append(chess[i]-lst[i])

print(*aws)