# Dubai Parks Adaptive Web Mock - Setup

## Upload the replacement files

Copy the files from this package into the same paths in your GitHub fork and commit them to `main`.

The root-level `mock-sdk-output.js` is already built and ready for GitHub Pages.

## Enable GitHub Pages

1. Open the repository `Settings` tab.
2. Select `Pages` in the left menu.
3. Under `Build and deployment`, choose `Deploy from a branch`.
4. Select branch `main` and folder `/(root)`.
5. Click `Save` and wait for deployment.

The SDK should then be available at:

`https://vortex995x.github.io/dubai-holdings-adaptive-mock/mock-sdk-output.js`

## Install the Tampermonkey script

Open `tampermonkey-mock.user.js`, copy its complete contents into Tampermonkey, save it, and visit:

`https://www.dubaiparksandresorts.com/en`

## Suggested demo

1. `Show me the biggest thrills`
2. `Compare thrill experiences`
3. Open an attraction card
4. `Book MOTIONGATE tickets`
5. Select a day, guest count and pass
6. Enter an email such as `john@example.com`
7. Show the mock booking confirmation

This is a mock experience. It does not charge a customer, check live inventory or issue a real ticket.
