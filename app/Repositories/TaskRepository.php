<?php namespace App\Repositories;

use App\Tag;
use App\Task;
use Illuminate\Database\Eloquent\Model;

class TaskRepository implements TaskRepositoryInterface
{
    // model property on class instances
    protected $model;

    // Constructor to bind model to repo
    public function __construct(Task $task)
    {
        $this->model = $task;
    }

    // create a new record in the database
    public function create(array $data)
    {
        $user = auth()->user();
        $task = new Task();
        $task->name = $data['name'];
        $task->priority = $data['priority'];
        $task->status = $data['status'];
        $task->user_id = $user['id'];
        $task->save();
        Tag::storeIfNew($data['tags']);
        $task->associateWithTags($data['tags']);
    }

    public function toggleStatus(array $data)
    {
        $task = Task::findOrFail($data['id']);
        if($task->status == 'continues'){$task->status = 'completed';}
        elseif ($task->status == 'completed'){$task->status = 'continues';}
        $task->save();
    }

    public function update(array $data)
    {
        $task = Task::findOrFail($data['id']);
        $task->name = $data['name'];
        $task->priority = $data['priority'];
        $task->status = $data['status'];
        $task->save();
        Tag::storeIfNew($data['tags']);
        $task->associateWithTags($data['tags']);
    }


}