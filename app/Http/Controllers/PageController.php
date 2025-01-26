<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        return Inertia::render('nav/Home/Home');
    }

    public function about()
    {
        return Inertia::render('nav/About/About');
    }

    public function services()
    {
        return Inertia::render('nav/Services/Services');
    }

    public function blog()
    {
        return Inertia::render('nav/Blog/Blog');
    }

    public function faq()
    {
        return Inertia::render('nav/FAQ/Faq');
    }

    public function contact()
    {
        return Inertia::render('nav/Contact/Contact');
    }

    public function prijzen()
    {
        return Inertia::render('nav/Prijzen/Prijzen');
    }

    public function demo()
    {
        return Inertia::render('nav/Demo/Demo');
    }

    public function toepassing()
    {
        return Inertia::render('nav/Toepassing/Toepassing');
    }
    public function chatbot()
    {
        return Inertia::render('ChatBot/ChatBot');
    }
}
