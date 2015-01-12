BEEFY = node_modules/.bin/beefy
PORT = 3000

DIST_DIR = dist
SRC_FILE = src/scripts/index.jsx

$(BEEFY):
	npm install

$(DIST_DIR):
	mkdir -p dist

all: watch

clean:
	rm -rf dist

watch: $(BEEFY) $(DIST_DIR)
	$(BEEFY) $(SRC_FILE):$(DIST_DIR)/bundle.js $(PORT) --live --cwd=src --index=src/index.html -- --transform=reactify --extension=.jsx
