  const employees= [
    {
      "id": 1,
      "email": "e@e.com",
      "password": "1",
      "first_name": "Amit",
      "taskCounts":{
        "active":2,
        "newTask":1,
        "completed":1,
        "failed":0
      },
      "tasks": [
        {
          "task_number": "active1",
          "active": true,
          "new_task": true,
          "completed": true,
          "failed": false,
          "task_title": "Complete Monthly Report",
          "task_description": "Prepare and submit the monthly financial report.",
          "task_date": "2024-12-10",
          "category": "Finance"
        },
        {
          "task_number": "new_task1",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "task_title": "Update Website",
          "task_description": "Make necessary updates to the company website.",
          "task_date": "2024-12-12",
          "category": "IT"
        },
        {
          "task_number": "completed1",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "task_title": "Client Call",
          "task_description": "Discuss project details with the client.",
          "task_date": "2024-12-05",
          "category": "Client Relations"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "first_name": "Priya",
      "taskCounts":{
        "active":2,
        "newTask":3,
        "completed":1,
        "failed":1
      },
      "tasks": [
        {
          "task_number": "new_task1",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "task_title": "Team Meeting",
          "task_description": "Attend the weekly team strategy meeting.",
          "task_date": "2024-12-10",
          "category": "Team"
        },
        {
          "task_number": "failed1",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": true,
          "task_title": "Data Backup",
          "task_description": "Ensure all data is backed up to the cloud server.",
          "task_date": "2024-12-07",
          "category": "IT"
        },
        {
          "task_number": "completed2",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "task_title": "Sales Report",
          "task_description": "Prepare the weekly sales performance report.",
          "task_date": "2024-12-04",
          "category": "Sales"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "first_name": "Ravi",
      "taskCounts":{
        "active":2,
        "newTask":5,
        "completed":10,
        "failed":6
      },
      "tasks": [
        {
          "task_number": "new_task1",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "task_title": "Social Media Campaign",
          "task_description": "Plan and launch the social media campaign for the new product.",
          "task_date": "2024-12-11",
          "category": "Marketing"
        },
        {
          "task_number": "completed1",
          "active": true,
          "new_task": false,
          "completed": true,
          "failed": false,
          "task_title": "Customer Feedback",
          "task_description": "Analyze customer feedback for the recent launch.",
          "task_date": "2024-12-06",
          "category": "Customer Service"
        },
        {
          "task_number": "failed1",
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true,
          "task_title": "Product Launch Plan",
          "task_description": "Finalize the product launch plan for next month.",
          "task_date": "2024-12-03",
          "category": "Product"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "first_name": "Anjali",
      "taskCounts":{
        "active":2,
        "newTask":4,
        "completed":1,
        "failed":0
      },
      "tasks": [
        {
          "task_number": "new_task1",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "task_title": "Team Training",
          "task_description": "Organize a training session for new employees.",
          "task_date": "2024-12-13",
          "category": "HR"
        },
        {
          "task_number": "completed1",
          "active": true,
          "new_task": false,
          "completed": true,
          "failed": false,
          "task_title": "Interview Candidates",
          "task_description": "Conduct interviews for open positions.",
          "task_date": "2024-12-08",
          "category": "HR"
        },
        {
          "task_number": "failed1",
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true,
          "task_title": "Employee Feedback Survey",
          "task_description": "Collect and analyze employee feedback surveys.",
          "task_date": "2024-12-02",
          "category": "HR"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "first_name": "Sanya",
      "taskCounts":{
        "active":17,
        "newTask":15,
        "completed":1,
        "failed":0
      },
      "tasks": [
        {
          "task_number": "new_task1",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "task_title": "New Marketing Strategy",
          "task_description": "Create a new marketing strategy for the next quarter.",
          "task_date": "2024-12-14",
          "category": "Marketing"
        },
        {
          "task_number": "completed1",
          "active": true,
          "new_task": false,
          "completed": true,
          "failed": false,
          "task_title": "Product Photography",
          "task_description": "Organize and complete the product photo shoot.",
          "task_date": "2024-12-09",
          "category": "Marketing"
        },
        {
          "task_number": "failed1",
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true,
          "task_title": "Website Analytics Review",
          "task_description": "Review website analytics for recent campaigns.",
          "task_date": "2024-12-01",
          "category": "IT"
        }
      ]
    }
  ]
  
    
  
  
const admin= [{
    "id": 1,
    "first_name":"Vivek",
    "email": "admin@example.com",
    "password": "123"
  }]

  export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));  
  }


  export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'));
    const admin=JSON.parse(localStorage.getItem('admin'));
    
    return {employees,admin};
  }

