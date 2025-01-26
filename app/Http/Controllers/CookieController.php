<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorechatbotRequest;
use App\Http\Requests\UpdatechatbotRequest;

class CookieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorechatbotRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        return view('app')->with('content', view('vendor.cookie-consent.dialogContents'));
    }

}
