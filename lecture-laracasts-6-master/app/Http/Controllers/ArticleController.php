<?php

namespace App\Http\Controllers;

use App\Article;
use App\Tag;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        if (request('tag')) {
            $articles = Tag::where('name', request('tag'))->first() ? Tag::where('name', request('tag'))->first()->articles : [];
        } else {
            $articles = Article::latest()->get();
        }
        return view('articles.index', compact('articles'));
    }

    public function show(Article $article)
    {
        return view('articles.show', compact('article'));
        // return $article;
    }

    public function create()
    {
        return view('articles.create', [
            'tags'  =>  Tag::all()
        ]);
    }

    public function store()
    {
        $this->validator();

        $article = new Article( request(['title', 'excerpt', 'body']) );
        $article->user_id=1;
        $article->save();

        $article->tags()->attach(request('tags'));

        return redirect( route('articles.index') );
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Article $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        return view('articles.edit', compact('article'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Article $article
     * @return \Illuminate\Http\Response
     */
    public function update(Article $article)
    {
        $article->update( $this->validator() );

        return redirect(route('articles,show', $article));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Article $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        //
    }

    private function validator()
    {
        return request()->validate([
            'title'     =>  ['required', 'min:1', 'max:20'],
            'excerpt'   =>  ['required', 'max:100'],
            'body'      =>  ['required', 'max:20000'],
            'tags'      =>  ['exists:tags,id']
        ]);
    }
}
