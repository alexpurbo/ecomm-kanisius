<?php

namespace App\Http\Controllers;

use App\Models\KelKategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class KelKategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = KelKategory::where('katLevel', 1)->get();

        for ($i = 0; $i < sizeof($data); $i++) {
            $katId = '0' . substr($data[$i]['katID'], 0, 1) . '%';
            $data[$i]['submenu'] = KelKategory::where([
                ['katLevel', '=', '2'],
                ['katID', 'like', $katId],
            ])->get();
        }

        for ($j = 0; $j < sizeof($data); $j++) {

            for ($k = 0; $k < sizeof($data[$j]['submenu']); $k++) {
                $katIdDtl = '0' . substr($data[$j]['submenu'][$k]['katID'], 0, 3) . '%';
                $data[$j]['submenu'][$k]['submenuDtl'] = KelKategory::where([
                    ['katLevel', '=', '3'],
                    ['katID', 'like', $katIdDtl],
                ])->get();
            }
        }
        return response()->json($data);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\KelKategory  $kelKategory
     * @return \Illuminate\Http\Response
     */
    public function show(KelKategory $kelKategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\KelKategory  $kelKategory
     * @return \Illuminate\Http\Response
     */
    public function edit(KelKategory $kelKategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\KelKategory  $kelKategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, KelKategory $kelKategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\KelKategory  $kelKategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(KelKategory $kelKategory)
    {
        //
    }

    public function testQuery()
    {
        // $users = DB::table('ref_config')->get();
        // $users = DB::select("SELECT prodId,ProdDesc3,prodISBN,prodPrice1,prodPrice2,DATE(prodTerbit) terbit,IFNULL(stok,0) stok,prodBerat,prodFormat 
        // FROM ref_prod_invtf 
        // LEFT JOIN (SELECT FifoProdId,SUM(fifoJumlah) AS Stok FROM ref_prod_fifo WHERE FifoGudangId='01' GROUP BY FifoProdId) AS stok ON prodId=FifoProdId
        // WHERE prodUM IN ('C','D','E','F') AND LEFT(prodId,2)='10'  AND stok >=10  ORDER BY prodTerbit DESC LIMIT 10");

        $data = KelKategory::where('katLevel', 1)->get();

        for ($i = 0; $i < sizeof($data); $i++) {
            $katId = '0' . substr($data[$i]['katID'], 0, 1) . '%';
            $data[$i]['subquery'] = KelKategory::where([
                ['katLevel', '=', '2'],
                ['katID', 'like', $katId],
            ])->get();
        }
        return json_decode($data);
    }
}
