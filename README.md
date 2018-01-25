# Deluxe
Deluxe project

The purpose of this project is to be able to build and run a container while mounting your source code on your local machine.
Your container should serve code from your local machine and not the container itself.  You will also need to know the basics of nodejs in order to serve up the index page. Node should be running inside your container to serve up the first page from your machine.

- We'd like you to learn what is docker and how to use it.
- We'd like you to learn nodejs if you don't already know it, just the basics to serve the index page.
- The client side should be built using React with Redux.
- You should provide us with the project code in the form of a git repo, including a readme.md with instructions for how to run your code.

The Project:

- You will build a page that will contain:
	1. A task calendar at the top half of the page.
	2. A list of tasks for the selected day under the calendar in the 2nd half of the page (should show the total count of task for the day).
	3. A textbox and button below the task list to add a task to the selected day.
	4. If the day has a tasks, It should be colored yellow.
	5. If i select the task from the list of task, i should be able to edit it.
	6. I should also have a total of all the tasks for the month near the top calendar.
	
- You are welcome to use any 3rd party controls
- No database is required, just in memory.  If i refresh the page, it can all be cleared.
- Styling is not important as long as the functionality is there.

Acceptance Criteria:

- I should be able to build and run the container with commands that you provide.
- The container should not have any source code inside it.
- If I update any html content from my source on my local machine and refresh the browser, the page should update accordingly.
- There should be an initial set of tasks loaded.
- I should be able to run the app in the browser and create a new or edit existing tasks from the calendar.
- I should be able to run the app using npm run script commands without using any task runners like gulp or grunt.
