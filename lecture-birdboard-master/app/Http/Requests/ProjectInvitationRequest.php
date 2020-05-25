<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\Rule;

class ProjectInvitationRequest extends FormRequest
{
    /**
     * The key to be used for the view error bag.
     *
     * @var string
     */
    protected $errorBag = 'invitations';

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Gate::allows("manage", $this->route('project'));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            // 'email' =>  ['required', 'exists:users,email']
            'email' =>  [
                'required', Rule::exists("users", "email"),
                /*
                    'something' , function($attr, $val, $fail){
                        if ( !model::where($attr, $val) ) $fail("mag");
                    }
                */
            ]
        ];
    }

    /**@override */
    public function messages()
    {
        return [
            'email.exists'  =>  'This is not a member'
        ];
    }
}
