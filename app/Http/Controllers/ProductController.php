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
        // $product = DB::select("SELECT prodId,ProdDesc3,prodISBN,prodPrice1,prodPrice2,DATE(prodTerbit) terbit,IFNULL(stok,0) stok,prodBerat,prodFormat, prodKet, prodMetaTag, prodLink,
        // prodHalaman, prodUkuran FROM ref_prod_invtf 
        // LEFT JOIN (SELECT FifoProdId,SUM(fifoJumlah) AS Stok FROM ref_prod_fifo WHERE FifoGudangId='01' GROUP BY FifoProdId) AS stok ON prodId=FifoProdId
        // WHERE prodUM IN ('C','D','E','F') AND prodId='" . $id . "'");

        $product = DB::select("SELECT prodID,ProdDesc3,prodISBN,prodPrice1,prodPrice2,prodTerbit,prodKet,stok FROM ref_prod_invtf WHERE prodID='" . $id . "'");

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
        // $newProducts = DB::select("SELECT prodId,ProdDesc3,prodISBN,prodPrice1,prodPrice2,DATE(prodTerbit) terbit,IFNULL(stok,0) stok,prodBerat,prodFormat 
        // FROM ref_prod_invtf 
        // LEFT JOIN (SELECT FifoProdId,SUM(fifoJumlah) AS Stok FROM ref_prod_fifo WHERE FifoGudangId='01' GROUP BY FifoProdId) AS stok ON prodId=FifoProdId
        // WHERE prodUM IN ('C','D','E','F') AND LEFT(prodId,2)='10'  AND stok >=10  ORDER BY prodTerbit DESC LIMIT 10");

        $newProducts = DB::select("SELECT prodId,ProdDesc3,prodISBN,prodPrice1,prodPrice2,DATE(prodTerbit) terbit,prodBerat,prodFormat,prodUkuran,Stok,gudang02
        FROM ref_prod_invtf 
        WHERE prodUM IN ('C','D','E','F') AND LEFT(prodId,2)='10'  AND stok >=10  ORDER BY prodTerbit DESC LIMIT 10");

        // return response()->json($newProducts);
        return $newProducts;
    }

    public function getSpiritualProducts()
    {
        // return DB::select("SELECT prodId,ProdDesc3,prodISBN,prodPrice1,prodPrice2,DATE(prodTerbit) terbit,IFNULL(stok,0) stok,prodBerat,prodFormat 
        // FROM ref_prod_invtf 
        // LEFT JOIN (SELECT FifoProdId,SUM(fifoJumlah) AS Stok FROM ref_prod_fifo WHERE FifoGudangId='01' GROUP BY FifoProdId) AS stok ON prodId=FifoProdId
        // WHERE prodUM IN ('C','D','E','F') AND LEFT(prodId,2) IN ('11')  AND stok >=1 ORDER BY prodTerbit DESC LIMIT 10");

        return DB::select("SELECT prodId,ProdDesc3,prodISBN,prodPrice1,prodPrice2,DATE(prodTerbit) terbit,prodBerat,prodFormat,prodUkuran,stok,gudang02
        FROM ref_prod_invtf 
        WHERE prodUM IN ('C','D','E','F') AND LEFT(prodId,2) IN ('11')  AND stok >=1 ORDER BY prodTerbit DESC LIMIT 10");
    }

    public function getProdukPilihan()
    {
        // return DB::select("SELECT prodId,ProdDesc3,prodISBN,prodPrice1,prodPrice2,DATE(prodTerbit) terbit,IFNULL(stok,0) stok,prodBerat,prodFormat FROM ref_tampil
        // LEFT JOIN ref_prod_invtf ON prodId=tamProdID
        // LEFT JOIN (SELECT FifoProdId,SUM(fifoJumlah) AS Stok FROM ref_prod_fifo WHERE FifoGudangId='01' GROUP BY FifoProdId) AS stok ON prodId=FifoProdId
        // WHERE prodUM IN ('C','D','E','F') AND tamJenis ='1' ORDER BY tamLastUpdate,prodTerbit DESC LIMIT 5");

        return DB::select("SELECT prodId,ProdDesc3,prodISBN,prodPrice1,prodPrice2,DATE(prodTerbit) terbit,stok,gudang02,prodBerat,prodFormat FROM ref_tampil
        LEFT JOIN ref_prod_invtf ON prodId=tamProdID
        WHERE prodUM IN ('C','D','E','F') AND tamJenis ='1' ORDER BY tamLastUpdate,prodTerbit DESC LIMIT 5");
    }

    public function getProductByCategory($id)
    {
        // $data = DB::select("SELECT katProdId, katKatID, prodId, prodDesc3, prodISBN, prodPrice2 FROM ref_prod_kategori LEFT JOIN ref_prod_invtf ON katProdId=prodId WHERE katKatID = '" . $id . "'")->paginate(15)->get();

        // $data = arrayToObject($data);

        // $data = DB::table('notices')
        // ->join('users', 'notices.user_id', '=', 'users.id')
        // ->join('departments', 'users.dpt_id', '=', 'departments.id')
        // ->select('notices.id', 'notices.title', 'notices.body', 'notices.created_at', 'notices.updated_at', 'users.name', 'departments.department_name')
        // ->paginate(20);

        $data = DB::table('ref_prod_kategori')
            ->join('ref_prod_invtf', 'ref_prod_kategori.katProdId', '=', 'ref_prod_invtf.prodId')
            ->where('ref_prod_kategori.katKatID', $id)
            ->select('*')
            ->paginate(20);

        return $data;
    }

    public function productSearch($id)
    {
        $data = DB::table('ref_prod_invtf')
            ->where('prodDesc3', 'like', '%' . $id . '%')
            ->select('*')
            ->paginate(20);

        return $data;
    }

    public function productSearchByKeyword($id)
    {
        $data = DB::table('ref_prod_invtf')
            ->where('prodDesc3', 'like', '%' . $id . '%')
            ->select('prodDesc3')
            ->limit(6)
            ->get();
        // ->paginate(20);

        return $data;
    }
}
