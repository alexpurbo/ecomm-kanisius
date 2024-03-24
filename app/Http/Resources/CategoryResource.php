<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'cat_id' => $this->katID,
            'cat_level' => $this->katLevel,
            'cat_name' => $this->katNama,
            'cat_sub' => SubCategoryResource::collection(2)
        ];
    }
}
