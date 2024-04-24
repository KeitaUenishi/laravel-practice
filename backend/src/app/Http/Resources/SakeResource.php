<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SakeResource extends JsonResource
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
            'id' => $this->id,
            'name' => $this->name,
            'imageUrl' => $this->image_url,
            'param1_val' => $this->param1_val, 
            'param2_val' => $this->param2_val,
            'param3_val' => $this->param3_val,
            'param4_val' => $this->param4_val,
            'param5_val' => $this->param5_val,
            'category_id' => $this->category_id,
            'user_id' => $this->user_id,
            'updated_at' => $this->updated_at->isoFormat('YYYY/M/D/(ddd) HH:mm:ss'), 
        ];
    }
}
