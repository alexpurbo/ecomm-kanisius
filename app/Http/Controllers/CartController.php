<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();

        // $data = DB::table('tb_cart')
        //     ->join('ref_prod_invtf', 'tb_cart.cart_product', '=', 'ref_prod_invtf.prodId')
        //     ->select('cart_customer', 'cart_product', 'cart_price', DB::raw('sum(cart_amount) as cart_amount', 'ref_prod_invtf.prodDesc3'))
        //     ->where('cart_customer', $user->C_ID)
        //     ->groupBy('cart_product')
        //     ->get();

        $data = DB::select("SELECT cart_id, cart_customer, cart_product, cart_amount, cart_price, prodDesc3 FROM tb_cart LEFT JOIN ref_prod_invtf ON cart_product = prodId WHERE cart_customer = '" . $user->C_ID . "'");

        return response()->json(['data' => $data], 200);
    }

    public function cartAmount(Request $request)
    {
        $user = $request->user();

        $data = Cart::select(DB::raw('sum(cart_amount) as cart_amount'))
            ->where('cart_customer', $user->C_ID)
            ->groupBy('cart_customer')
            // ->selectRaw('sum(cart_amount) as cart_amount')
            ->get();

        return $data;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $cart = Cart::firstOrNew(['cart_customer' =>  $request->customer, 'cart_product' =>  $request->product, 'cart_price' =>  $request->price]);
        $cart->cart_amount = ($cart->cart_amount + $request->amount);
        $cart->cart_product = $request->product;
        $cart->cart_customer = $request->customer;
        $cart->cart_price =  $request->price;

        $data = $cart->save();

        return response(['data' => $data]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        // $data = Cart::where('cart_customer', $request->id)
        //     ->groupBy('cart_customer')
        //     ->selectRaw('*, sum(cart_amount) as amount')
        //     ->get();

        // return response(['data' => $data]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cart $cart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cart  $cart
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cart $cart)
    {
        //
    }
}
