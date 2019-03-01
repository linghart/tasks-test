<?php

namespace App;

use App\Traits\UsesUuid;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use UsesUuid;

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function tags()
    {
        return $this->belongsToMany('App\Tag', 'tasks_tags_pivot');
    }

    public function associateWithTags($tags)
    {
        $this->tags()->detach();
        $names = array_column($tags, 'text');
        $tags = Tag::whereIn('name', $names)->get();
        $this->tags()->attach($tags->pluck('id'));
    }

}
