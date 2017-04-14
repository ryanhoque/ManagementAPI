# ManagementAPI
REST API for managing team members, supporting add, edit, and delete operations. Backend written in Python using Django and MySQL; frontend written in JS using React + Redux.

## How to run it

To start the backend api, go to the backend/ directory and run
```
> python manage.py runserver
```
Assuming you have a local mySQL db called mydb, API endpoint will be at localhost:8000/api/.

To start the frontend, navigate to frontend/ and run
```
> npm install
> webpack
> npm run start
```
Project will be live at localhost:3000.
