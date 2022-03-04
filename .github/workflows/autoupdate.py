# autoupdater.py
# Author: Guntitat Sawadwuthikul

import json

def dump(l):
    return dict(zip(['id', 'word', 'pos', 'meaning'], l))

i = input()
r = json.loads(i)
ws = r['results'][0]['result']['rawData']

data = dict()
data['pos_th'] = {
    "noun": "น.",
    "adjective": "ว.",
    "verb": "ก."
}
data['words'] = []

for w in ws:
    data['words'].append(dump(w))

print(data)
