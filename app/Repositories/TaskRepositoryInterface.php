<?php namespace App\Repositories;

interface TaskRepositoryInterface
{
    public function create(array $data);
    public function update(array $data);
    public function toggleStatus(array $data);
}