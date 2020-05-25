<?php

namespace App\Http\Requests;

use App\Project;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Http\FormRequest;

class UpdateProjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // return false;
        return Gate::allows('update', $this->project());
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "title" => "sometimes|required",
            "description" => "sometimes|required",
            "notes" =>  'required'
        ];
    }

    public function project()
    {
        return Project::findOrFail($this->route('project'));
    }

    public function save()
    {
        // $project = $this->project();
        // $project->update($this->validated());
        // return $project;

        return tap( $this->project() )->update($this->validated());
    }
}
