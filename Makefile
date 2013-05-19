all: main.js main.html

main.html: main.cpp express.js
	emcc --js-library express.js -o $@ $<

main.js: main.cpp express.js
	emcc --js-library express.js -o $@ $<

.PHONY: run clean
run: main.js
	node $<

clean:
	rm -f main.js main.html
