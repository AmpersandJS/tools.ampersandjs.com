# tools.ampersandjs.com

A curated set of clientside modules that represent "solved problems" for npm-listed clientside modules that closely follow the philosophy of ampersand.

If you need something that ampersand doesn't do, odds are good that there's something here that may.

## for more info

Check out http://humanjavascript.com and follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter.

## caveats

For some reason github doesn't always trigger rebuilds of gh-pages when pushed. If it doesn't work, make sure you ran `node build`, change something else, and push it again. Hopefully they fix this issue soon.

## Building/deploying

1. Edit the `modules` section of `package.json` with npm name of all modules you want to include.
2. Run `npm run fetch` to make the API calls to npm registry to fetch info, which then gets written to `clientapp/fixtures/repos.json`.
3. Run `npm run build` to generate new built file.
4. commit and push to the `gh-pages` branch (which is the main branch) to update the actual tools.ampersandjs.com site.

(there's also a `yolo` script that fetches then builds)