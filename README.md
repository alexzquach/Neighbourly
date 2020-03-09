# team06 (PHASE2.TXT IS CONTAINED BELOW)

## Our Website URL:
https://polar-reef-15536.herokuapp.com/

## What our website does:
Our website is a volunteer work exchange website where you can post daily tasks you need help with in order to get help from other community members.  You can also volunteer for other peoples' work through commenting.  The websites features include adding a post, commenting on individual posts, reporting posts, seeing a list of all users, logging in, having a score of how many people you helped vs. how many times you've been helped, and post filtering (not yet implemented, will be with implemented with phase 2 but the front-end for it is there).

### Website roles 
1) Basic User  
A basic user acts as an ordinary user of the website who can post daily tasks they need help with.  They can do all the user features mentioned below and anyone signing up will be registered as a basic user.  The basic user can use all the main functionalities of the website.
2) Admin  
An admin acts as the site admin and has all ordinary user features + the ability do delete items and view reports.

### ALL USER Features:
A User can-
1) Add a post requesting help through the "Add Post" button on the home page.  Users do not have to be logged in (for now) to add a post but they do need to specify name and location.  After submitting, you are brought back to the home page.
2) Report a post they do not like by clicking the "Report" button on the home page under the individual post they'd like to report.  This will bring you to another page where you can enter report information.  After submitting, you are brought back to the home page.
3) View comments on a post by clicking the "Comments" button on the home page under the individual post they'd like to comment on.  Thiss will bring you to another page where you can see other people's comments and where you can click to add another comment.  The back buttons on their respective pages will bring you back to home page / comments page.
4) View a list of all the users and see their helped vs. got helped ratios by clicking the "Go To User List" button on the home page.  To get back to the home, click the browser back button or the back button provided.
5) View their own info, which includes all profile information and all posts they've made by clicking the "My Info" button on the home page.  To get back to the home, click the browser back button or the back button provided.
6) Log in by clicking the "Log in/Register" button on the home page.  They must enter the correct credentials or they will not be able to log in.  They will log in through a popup.
7) Register by clicking the "Log in/Register" button on the home page.  Once they have registered, they automatically get logged in and are brought back to the home page.
8) Log out of their accounts.  Must be logged in to logout.
9) Filter posts by specific filters by clicking the types of filter you want to apply that are located on the right side of the main page, and then clicking the filter psots button.

### ALL ADMIN Features:
An admin can do ALL user features and more -
1) Admins can delete posts on the home page
2) Admins can delete comments on each individual page
3) Admins can view and delete reports on the "Go To User List" page

### LOG IN CREDENTIALS:
admin - username: admin, password: admin  
generic user - username: user, password: user

## ROUTES Overview - Express Server (server.js)
### GET routes:
We have get routes (ex. /posts, /users/check-session, /users/logout) that are either used for getting information to display OR for user authentication.  There are three get routes used for user authentication (logout, check-session).  The rest of the get routes are used for either getting ALL the information of a specific type (like getting ALL the posts) or getting information by ID (like getting report or post by id).  These routes are called whenever the users are logging out, or we are loading the main page / other pages that require information to be loaded.
### POST routes:
We have post routes for creating new information in the database.  Most of the post routes are used to create individual pieces of information (like creating one post, creating one user, creating one report) and these are called everytime a user is adding anything.  We also have an inner post route (/posts/:id) which is used to add comments for a specific post.  We also have a post request for logging in a user.
### DELETE routes:
We have delete routes (delete from server) for admins who need to delete specific things that don't fit "site guidelines".  We have delete routes for posts, comments and reports.  These require authentication which means you have to be logged in to use them and are called whenever a delete button is clicked.  The delete routes delete specific information by id.
### PATCH routes:
We do have patch routes written but none are being used at the moment.  These routes will be used in the case that we POST incorrect information and need to edit that information OR if we simply need to edit some information on the server.  We have patch routes written for all main information for the website (user, posts, comments, reports) that are there in the case we need to edit information.
