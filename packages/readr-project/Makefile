P := "\\033[32m[+]\\033[0m"

help:
	@echo "$(P) make dev - Start webpack dev server and watch any changes"
	@echo "$(P) make build - Transpile jsx, es6 and above to es5 files, and build webpack bundles"

# "yarn webpack serve" is the command to start a development server using Yarn.
# "-c dev/webpack.config.js" is the flag and argument that specify the location of the Webpack configuration file, 
# which will be used to build and serve the application.
dev: 
	@echo "$(P) Start webpack dev server"
	NODE_ENV=development yarn webpack serve -c dev/webpack.config.js

# "yarn babel" is the command to run Babel with Yarn.
# "src" is the directory where the source code is located.
# "--out-dir lib" specifies the directory where the compiled code will be output to.
# "--copy-files" tells Babel to copy any non-JavaScript files in the source directory to the output directory.
# "--root-mode upward" specifies that Babel should search for a configuration file starting from the current directory and going up the directory tree.
build-lib:
	@echo "$(P) Transpile es6, jsx and (typescript) to es5"
	NODE_ENV=production yarn babel src --out-dir lib --copy-files --root-mode upward

# run 'clean' + 'build-lib'
build: clean build-lib

# remove /lib
clean:
	@echo "$(P) Clean lib/"
	rm -rf lib/

.PHONY: build clean dev build-lib