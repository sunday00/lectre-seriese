<div class="field">
    <div class="form-group row">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
            Title
        </label>

        <div class="col-md-6">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" name="title" id="title" type="text" placeholder="title" value="{{ isset($project) ? $project->title : "" }}" required autocomplete="title" />
        </div>
    </div>
</div>

<div class="field">
    <div class="form-group row">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
            Description
        </label>

        <div class="col-md-6">
            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4 h-64" name="description" id="description" placeholder="description">{{ isset($project) ? $project->description : "" }}</textarea>
        </div>
    </div>
</div>

@if( $errors->any() )
    <div class="field mt-4 mb-4 text-sm text-red-500">
        @foreach ($errors->all() as $err)
            <li> {{ $err }} </li>
        @endforeach
    </div>
@endif