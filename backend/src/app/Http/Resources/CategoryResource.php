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
            'name' => $this->name,
            'param1_name' => $this->param1_name, 
            'param2_name' => $this->param2_name,
            'param3_name' => $this->param3_name,
            'param4_name' => $this->param4_name,
            'param5_name' => $this->param5_name,
        ];
    }
}
