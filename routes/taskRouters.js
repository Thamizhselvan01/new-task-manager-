const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');

// Create a new task
router.post('/tasks', taskController.createTask);  
// Get all tasks
router.get('/tasks', taskController.getAllTasks);
// Get a task by ID 
router.get('/tasks/:id', taskController.getTaskById);
// Update a task by ID
router.put('/tasks/:id', taskController.updateTaskById);
// Delete a task by ID  
router.delete('/tasks/:id', taskController.deleteTaskById);
//     return res.status(404).json({ message: 'Task not found' });
//     }    
//     res.status(200).json({ message: 'Task deleted successfully' });
//   } catch (error) {  

module.exports = router;
