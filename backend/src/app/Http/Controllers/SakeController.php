<?php

namespace App\Http\Controllers;

use App\Http\Resources\SakeResource;
use App\Models\Sake;
use Illuminate\Http\Request;

class SakeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sakes = Sake::all();

        return SakeResource::collection($sakes);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Sake  $sake
     * @return \Illuminate\Http\Response
     */
    public function show(Sake $sake)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Sake  $sake
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sake $sake)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Sake  $sake
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sake $sake)
    {
        //
    }
}
