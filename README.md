# HSTK React Native Take Home Test

## Preliminary

Before starting you'll need expo / react native installed on your computer. Check out https://docs.expo.dev/get-started/installation/.


### Setup

To get started clone the repo:

```
git clone
```

Install node modules:

```
npm install
```

or

```
yarn install
```

Then you can run the app with:

```
npm run ios
```

Or

```
npm run android
```

## Take Home Test Structure
This app is already setup with a few things. The first screen you see should look something like this: 

The buttons on this screen will navigate to three separate screens, each corresponding to a section of the test. The screens will be blank initially, it is your job to build the screens in order to meet the requirements of each section of the test. Please make sure that all of your work renders into the components exported by each of these three screen files `PartOne.js`, `PartTwo.js` and `PartThree.js`. You may create new files if you want. Please do not modify `MainScreen.js`, but you can modify any other files as necessary.


# The Test
In this test you'll be working with placeholder data from a backend found here: https://jsonplaceholder.typicode.com/

You will be scored based on completion of the tasks below. Scores are for us to communicate to you how heavily we weight each task and help you decide whether or not you want to attempt to complete each task, in case you get stuck and need to skip to the next task. 

If you fail to complete all required tasks that doesn't necessarily mean you wont be able to move forward in the interview process.

Please complete each task in the corresponding component file in "src/screens". You can create as many files as you'd like and put them anywhere you'd like, just make sure the question is effectively answered in the screen file. 

You may download and use any thid party libraries that you want. No points are given for styling so feel free to not style anything at all. We value simple, straight forward solutions more than anything else.

***For data fetching use hstkFetch exported from `src/hstkFetch.js` instead of the typical `fetch` or any other solution. hstkFetch works exactly like javascript's built in fetch except that it simulates a one second reponse delay.***

## Part One
Put all your work in `PartOne.js`

### Flatlist (required, 10 points)
We're going to be working with "posts" data which are a json object containing a title and body. You can think of them as a facebook post, or something like that.

A single post looks like this:
```js
{
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
}
```

There is an array of posts contained in the file `src/localPlaceholderData.js`.

Render a flatlist that show the "title" and "id" of each post in order, importing the data from `src/localPlaceholderData.js`.

### Show More Button (10 points)
Modify the screen in PartOne.js to include a `Show More` button at the bottom of the flatlist. It should work like this:

- Show the first 10 posts in the flatlist initially.
- If the user presses `Show More` the flatlist will show all of the posts.
- The show more button will dissapear after being pressed.

## Part Two
At this point, *copy and past all of your code from PartOne.js into PartTwo.js*. Do not modify `PartOne.js` after this. Work on `PartTwo.js` for part two.

### Fetching Data (20 points)
Now we would like to fetch data from our backend to show to our users instead of using the data from `src/localPlaceholderData.js`

Fetch the posts from `https://jsonplaceholder.typicode.com/posts` to show the user. You should not be showing data from `src/localPlaceholderData.js` after this task. Remember to use the `hstkFetch` function to fetch any data.

### Activity Indicator (30 points)
Show an `<ActivityIndicator/>` while the data is being fetched using some flatlist prop.

Optionally:

- (30 points) implement any state management related to the activity indicator (such as setting the fetch status state variable) in a custom hook or using a third party library (like `react-query`).

### Search By Title (10 points)
Add a `<TextInput>` to the screen that allows users to search for posts by their title. It should behave as follows:

- Any time the user types text into the text input the app filters out posts that don't include the text *locally*. Don't refetch any data, just change which posts are displayed.
- If the text input's value is the empty string all posts are shown.

## Part Three
Please copy and paste all code from `PartTwo.js` into `PartThree.js` before beginning this section.

### Navigate to PartThreeDetail.js (30 points)
Make it so each row in the flatlist is now pressable, and when the user presses on the row the app navigates to the component in `PartThreeDetail.js`, passing the `id` of the post as a navigation parameter, *do not pass anything other than the post id as a navigation parameter*.

### Post Details (30 points)
In `PartThreeDetail.js`, fetch the post data using the `id` that's been passed as a navigation parameter. Do not fetch all of the posts again, only fetch the post with the given id. Documentation is somewhere on `https://jsonplaceholder.typicode.com/`. Remember to use the `hstkFetch` function for fetching.

Show the `title` and the `body` of the post on this screen after fetching.

### Post Comments Flatlist (50 points)
Fetch all comments for the given post `id` and display them in a flatlist. Check the documentation on json placeholder to see how.

Show the `email` and `body` text in each item in the flatlist. 

Do not fetch any posts that do not have the post id that was passed as a navigation parameter.

### Hide Comment Button (30 points)
Add a button to each comment row that permanently hides the comment. Do this locally (don't communicate with jsonplaceholder)

### Persist hidden comments (30 points)
Persist hidden comments (IE if you hide a comment it should stay hidden even if your user closes and reopens the app). Do this locally.

If you made it this far, congratulations! This concludes the main part of test. When you're finished, create a repository with your code and email a link to isaacw@hstk.com. Or if you wish, you can zip the project, upload to google drive and share it that way.