import json

INPUT_FILE = "glove.6B.100d.txt"   # path to the GloVe file
OUTPUT_FILE = "../public/embeddings.json"
LIMIT = 50000                      # max number of words to include

embeddings = {}

with open(INPUT_FILE, "r", encoding="utf-8") as f:
    for i, line in enumerate(f):
        if i >= LIMIT:
            break
        parts = line.strip().split()
        word = parts[0]
        vector = list(map(float, parts[1:]))
        embeddings[word] = vector

print(f"Loaded {len(embeddings)} words. Saving to {OUTPUT_FILE}...")
with open(OUTPUT_FILE, "w") as out:
    json.dump(embeddings, out)

print("Done.")
