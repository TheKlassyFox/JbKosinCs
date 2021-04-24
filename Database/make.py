sqli = "INSERT INTO Participants (eventId, name, dateCreated, church, submissionImage, score) VALUES"
sql = "({eventId}, \"{name}\", NOW(), \"{church}\", \"{submissionImage}\", 0);"

import random

def makeName():

    f = ["천", "이", "김", "박", "최", "정", "강", "조", "장", "황", "서", "윤"]
    l = ["예지", "지영", "재원", "민철", "민준", "지후", "준서", "현우", "예준", "건우", "현준", "민재", "우진", "도현", "동현", "승민", "승현", "준영", "민수"]


    fi = random.randint(0, len(f) - 1)
    li = random.randint(0, len(l) - 1)

    return f[fi] + l[li]

def makeEvent():

    min = 1
    max = 13

    return str(random.randint(min, max))

def makeChurch():

    churches = ["사직동교회", "양산교회", "동부삼일교회", "거제교회", "장전중앙교회", "온천교회", "안락중앙교회", "금사교회", "부곡중앙교회", "동상교회"]

    return churches[random.randint(0, len(churches) - 1)]

xStart = 64
yStart = 64

def makeSubmissionImage():
    global xStart
    global yStart
    xStart += 1
    yStart += 1
    return "https://placeimg.com/{x}/{y}/any".format(x=xStart, y=yStart)

for i in range(500):
    print(sqli)
    print(sql.format(eventId = makeEvent(), name=makeName(), church = makeChurch(), submissionImage = makeSubmissionImage()))
    print()