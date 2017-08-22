### To run the app:
* `npm install`
* `npm start`
It will start a local server using `webpack-dev-server` which will watch, build (in-memory) and serve at: `http://localhost:8080`.   [credit](https://github.com/preboot/angularjs-webpack):

### About the structure of the app:
The application is built around a component tree (style react).
Some of the state is still saved on the data service. Mostly I follow the angular 1.5 style guide [here.](https://github.com/toddmotto/angularjs-styleguide). There’s some overhead to this style in very small apps, but I prefer to follow it as it prevents “scope soup” and other common angular problems as the app increase in size.

### Additional features to consider
If I had additional time I would consider the following improvements:

* Much better styling for the library. Including organizing the videos in a grid, to allow for library management features such as sorting and filtering
* Paging for the search results. Google only return the first 5 results.
* More eye candy and animations for the various actions.
* Running a dedicated node server to prevent saving the API key in UI.