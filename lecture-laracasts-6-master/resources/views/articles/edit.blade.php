@extends('layout')

@section('head')
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
@endsection

@section('content')
    <div id="wrapper">
        <div id="page" class="container">
            <h1 class="heading has-text-weight-bold is-size-4">UpdateArticle</h1>
        <form action="{{ route('articles.update', $article) }}" method="POST">
              @csrf
              @method('PUT')
                <div class="field">
                  <label class="label" for="title">Title</label>

                  <div class="control">
                  <input class="input" type="text" name="title" placeholder="Text input" id="title" value="{{$article->title}}" />
                  </div>
                </div>

                
                <div class="field">
                    <label class="label" for="excerpt">Label</label>

                    <div class="control">
                        <textarea class="textarea" name="excerpt" placeholder="Textarea" id="excerpt">{{$article->excerpt}}</textarea>
                    </div>
                </div>

                <div class="field">
                    <label class="label" for="body">Label</label>

                    <div class="control">
                        <textarea class="textarea" name="body" placeholder="Textarea" id="body">{{$article->body}}</textarea>
                    </div>
                </div>

                <div class="field is-grouped">
                  <div class="control">
                    <button class="button is-link" type="submit">submit</button>
                  </div>
                </div>
            </form>
        </div>
    </div>
@endsection