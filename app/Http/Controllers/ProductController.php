<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = DB::select("SELECT prodId,ProdDesc3,prodISBN,prodPrice1,prodPrice2,DATE(prodTerbit) terbit,IFNULL(stok,0) stok,prodBerat,prodFormat, prodKet, prodMetaTag, prodLink,
        prodHalaman, prodUkuran FROM ref_prod_invtf 
        LEFT JOIN (SELECT FifoProdId,SUM(fifoJumlah) AS Stok FROM ref_prod_fifo WHERE FifoGudangId='01' GROUP BY FifoProdId) AS stok ON prodId=FifoProdId
        WHERE prodUM IN ('C','D','E','F') AND prodId='" . $id . "'");

        return response()->json(['data' => $product], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getNewProducts()
    {
        $newProducts = DB::select("SELECT prodId,ProdDesc3,prodISBN,prodPrice1,prodPrice2,DATE(prodTerbit) terbit,IFNULL(stok,0) stok,prodBerat,prodFormat 
        FROM ref_prod_invtf 
        LEFT JOIN (SELECT FifoProdId,SUM(fifoJumlah) AS Stok FROM ref_prod_fifo WHERE FifoGudangId='01' GROUP BY FifoProdId) AS stok ON prodId=FifoProdId
        WHERE prodUM IN ('C','D','E','F') AND LEFT(prodId,2)='10'  AND stok >=10  ORDER BY prodTerbit DESC LIMIT 10");

        // return response()->json($newProducts);
        return $newProducts;
    }

    public function getSpiritualProducts()
    {
        return DB::select("SELECT prodId,ProdDesc3,prodISBN,prodPrice1,prodPrice2,DATE(prodTerbit) terbit,IFNULL(stok,0) stok,prodBerat,prodFormat 
        FROM ref_prod_invtf 
        LEFT JOIN (SELECT FifoProdId,SUM(fifoJumlah) AS Stok FROM ref_prod_fifo WHERE FifoGudangId='01' GROUP BY FifoProdId) AS stok ON prodId=FifoProdId
        WHERE prodUM IN ('C','D','E','F') AND LEFT(prodId,2) IN ('11')  AND stok >=1 ORDER BY prodTerbit DESC LIMIT 10");
    }
}
