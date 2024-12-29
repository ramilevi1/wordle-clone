import json
    
# open JSON file
f = open ('data.json')
# Reading from file to Python list of objects

data = json.load(f) 
# Iterating through the python object list
for i in data['Questions_details']:
    print(i['correctAnswer'])
#exmaple of printing a  location object attribute in the list
print (data['Questions_details'][0]['correctAnswer'])
# Closing file
f.close()
