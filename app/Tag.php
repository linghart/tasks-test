<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\UsesUuid;

class Tag extends Model
{
    use UsesUuid;

    protected $guarded = [];

    public function tasks()
    {
        return $this->belongsToMany('App\Task', 'tasks_tags_pivot');
    }

    public static function storeIfNew($array)
    {
        $user = auth()->user();
        foreach ($array as $item)
        {
            if(Tag::where('user_id', $user->id)->where('name', $item['text'])->count() == 0)
            {
                $tag = new Tag();
                    $tag->name = $item['text'];
                    $tag->user_id = $user->id;
                $tag->save();
            }
        }
    }
}
