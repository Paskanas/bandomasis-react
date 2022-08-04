<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ColorController extends Controller
{
    public function index()
    {

        $colors = session()->get('colors', []);
        // $colors = ['crimson', 'red', 'skyblue'];
        return Inertia::render('Colors', [
            'colors' => $colors,
            'saveUrl' => route('saveColor')
        ]);
    }

    public function saveColors(Request $request)
    {
        session()->put('colors', $request->all());
        return response()->json([
            'msg' => 'Colors  added'
        ]);
    }
}
