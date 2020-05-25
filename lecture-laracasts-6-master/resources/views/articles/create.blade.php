@extends('layout')

@section('head')
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
@endsection

@section('content')
    <div id="wrapper">
        <div id="page" class="container">
            <h1 class="heading has-text-weight-bold is-size-4">NewArticle</h1>
            <form action="{{ route('articles.store') }}" method="POST">
              @csrf
                <div class="field">
                  <label class="label" for="title">Title</label>

                  <div class="control">
                  <input class="input {{ $errors->has('title') ? 'is-danger' : ''}}" type="text" name="title" placeholder="Text input" id="title" value="{{ old('title') }}" />
                    @error('title')
                      <p class="help is-danger">{{ $errors->first('title') }}</p>
                    @enderror
                  </div>
                </div>

                
                <div class="field">
                    <label class="label" for="excerpt">Label</label>

                    <div class="control">
                        <textarea class="textarea {{ $errors->has('excerpt') ? 'is-danger' : ''}}" name="excerpt" placeholder="Textarea" id="excerpt">{{ old('excerpt') }}</textarea>
                        @error('excerpt')
                          <p class="help is-danger">{{ $errors->first('excerpt') }}</p>
                        @enderror
                    </div>
                </div>

                <div class="field">
                    <label class="label" for="body">Label</label>

                    <div class="control">
                        <textarea class="textarea {{ $errors->has('body') ? 'is-danger' : '' }}" name="body" placeholder="Textarea" id="body">{{ old('body') }}</textarea>
                        @error('body')
                          <p class="help is-danger">{{ $errors->first('body') }}</p>
                        @enderror
                    </div>
                </div>

                <div class="field">
                  <label class="label" for="tags">Tags</label>

                  <div class="control select is-multiple">
                      <select name="tags[]" id="tags" multiple >
                        @foreach ($tags as $tag)
                        <option value="{{$tag->id}}">{{$tag->name}}</option>      
                        @endforeach
                      </select>
                      @error('tags')
                        <p class="help is-danger">{{ $message }}</p>
                      @enderror
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