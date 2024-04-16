<?php

namespace App\Http\Controllers;

use App\Http\Resources\ThreadResource;
use App\Http\Resources\ThreadWithResponseResource;
use App\Models\Thread;
use Illuminate\Http\Request;

class ThreadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Treadのデータをall() で全件取得し、Resourceを使って整形して返す
        $threads = Thread::all();

        return ThreadWithResponseResource::collection($threads);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // リクエストパラメータから来たデータを使ってThreadを登録して、登録したデータを整形して返却
        $thread = Thread::create($request->only(
            'title',
            'name',
            'email',
            'content'
        ));

        return new ThreadResource($thread);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $thread = Thread::findOrFail($id);

        return new ThreadWithResponseResource($thread);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Thread $thread)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function destroy(Thread $thread)
    {
        //
    }
}
