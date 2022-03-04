# autoupdater.py
# Author: Guntitat Sawadwuthikul

import json
from datetime import datetime

def dump(l):
    return dict(zip(['id', 'word', 'pos', 'meaning'], l))

i = input()
r = json.loads(i)
ws = r['results'][0]['result']['rawData']

data = dict()
data['pos_th'] = {
    "noun": "น.",
    "adjective": "ว.",
    "adverb": "ว.",
    "verb": "ก.",
    "phrase": "วลี"
}
data['timestamp'] = str(datetime.now())
data['words'] = []

for w in ws:
    if w[1]:
        data['words'].append(dump(w))

with open('./public/dictionary.json', 'w') as out:
    json.dump(data, out)
