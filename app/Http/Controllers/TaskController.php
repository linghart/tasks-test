<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateTaskRequest;
use App\Http\Requests\GetTaskRequest;
use App\Http\Requests\ToggleTaskStatusRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Tag;
use App\Task;
use Illuminate\Http\Request;
use App\Repositories\TaskRepositoryInterface;

class TaskController extends Controller
{
    private $taskRepo;

    public function __construct(TaskRepositoryInterface $taskRepo)
    {
        $this->taskRepo = $taskRepo;
    }

    public function getTasks()
    {
        $user = auth()->user();
        $tasks = $user->tasks()->with('tags')->get();
        return $tasks;
    }

    public function getTask(GetTaskRequest $request)
    {
        $request->validated();
        return Task::findOrFail($request->id)->load('tags');
    }

    public function toggleStatus(ToggleTaskStatusRequest $request)
    {
        $request->validated();
        $this->taskRepo->toggleStatus($request->all());
        return ['status'=>'success'];
    }

    public function createTask(CreateTaskRequest $request)
    {
        $request->validated();
        $this->taskRepo->create($request->all());
        return ['status'=>'success'];
    }

    public function updateTask(UpdateTaskRequest $request)
    {
        $request->validated();
        $this->taskRepo->update($request->all());
        return ['status'=>'success'];
    }

    public function getTagsAutocomplete(Request $request)
    {
        $tags = auth()->user()->tags;
        return $tags->transform(function ($item, $key) {
            return [
                'text' => $item['name']
            ];
        });
    }
}
